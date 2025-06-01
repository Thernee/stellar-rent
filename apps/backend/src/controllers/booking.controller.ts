import type { Response } from 'express';
import type { AuthRequest } from '../types/auth.types';
import { getBookingById } from '../services/booking.service';
import { ResponseSchema, ParamsSchema } from '../types/booking.types';

export const getBooking = async (req: AuthRequest, res: Response) => {
  const parseResult = ParamsSchema.safeParse(req.params);
  if (!parseResult.success) {
    return res.status(400).json({
      error: 'Bad Request',
      details: parseResult.error.format(),
    });
  }
  const { bookingId } = parseResult.data;

  const requesterUserId = req.user?.id as string;
  if (!requesterUserId) {
    return res.status(401).json({
      error: 'Unauthorized',
      details: 'Missing or invalid auth token',
    });
  }

  try {
    const bookingDetails = await getBookingById(bookingId, requesterUserId);

    const validResponse = ResponseSchema.safeParse(bookingDetails);
    if (!validResponse.success) {
      return res.status(500).json({
        error: 'Internal Server Error',
        details: 'Response data did not match expected schema',
      });
    }
    return res.status(200).json(validResponse.data);
  } catch (err: unknown) {
    // narrow error to avoid biome 'no explicit any'
    let message: string;
    if (err instanceof Error) {
      message = err.message;
    } else {
      message = String(err);
    }

    if (message === 'Booking not found') {
      return res.status(404).json({
        error: 'Booking not found',
        details: 'The booking with the provided ID does not exist.',
      });
    }

    if (message === 'Property not found' || message === 'Host user not found') {
      return res.status(404).json({
        error: 'Resource not found',
        details: message,
      });
    }

    if (message === 'Access denied') {
      return res.status(403).json({
        error: 'Access denied',
        details: 'You do not have permission to access this booking.',
      });
    }

    console.error('getBooking error:', err);
    return res.status(500).json({
      error: 'Internal Server Error',
      details: 'Something went wrong retrieving booking details.',
    });
  }
};
