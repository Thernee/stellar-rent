import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Upload an image to Cloudinary
 * @param imageUrl URL or base64 string of the image
 * @returns Uploaded image URL or null if upload failed
 */
export async function uploadToCloudinary(imageUrl: string): Promise<string | null> {
  try {
    if (imageUrl.includes('cloudinary.com') && imageUrl.includes('dmsphf4d3')) {
      return imageUrl;
    }

    const uploadResult = await cloudinary.uploader.upload(imageUrl, {
      folder: 'stellar-rent/properties',
      resource_type: 'image',
      format: 'jpg',
      transformation: [{ quality: 'auto:good' }, { fetch_format: 'auto' }],
    });

    return uploadResult.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    return null;
  }
}

/**
 * Delete an image from Cloudinary
 * @param imageUrl URL of the image to delete
 * @returns true if deletion was successful, false otherwise
 */
export async function deleteFromCloudinary(imageUrl: string): Promise<boolean> {
  try {
    const urlParts = imageUrl.split('/');
    const filenameWithExtension = urlParts[urlParts.length - 1];
    if (!filenameWithExtension) return false;
    const filename = filenameWithExtension.split('.')[0];

    const folderIndex = urlParts.indexOf('stellar-rent');
    if (folderIndex === -1) return false;

    const publicIdParts = urlParts.slice(folderIndex);
    const publicId = publicIdParts.join('/').split('.')[0];

    if (!publicId) {
      console.error('Invalid publicId for Cloudinary deletion');
      return false;
    }
    const result = await cloudinary.uploader.destroy(publicId);
    return result.result === 'ok';
  } catch (error) {
    console.error('Cloudinary delete error:', error);
    return false;
  }
}
