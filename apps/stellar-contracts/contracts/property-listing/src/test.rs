#![cfg(test)]

use super::*;
use soroban_sdk::{symbol_short, Address, Env, Symbol};
use soroban_sdk::testutils::Address as _;

#[test]
fn test_create_listing() {
    let env = Env::default();
    let contract_id = env.register_contract(None, PropertyListingContract);
    let client = PropertyListingContractClient::new(&env, &contract_id);

    let owner = Address::generate(&env);
    let id = symbol_short!("PROP1");
    let data_hash = symbol_short!("HASH1");

    let listing = client.create_listing(&id, &data_hash, &owner);

    assert_eq!(listing.id, id);
    assert_eq!(listing.data_hash, data_hash);
    assert_eq!(listing.owner, owner);
    assert_eq!(listing.status, PropertyStatus::Available);
}

#[test]
#[should_panic(expected = "Property listing already exists")]
fn test_create_duplicate_listing() {
    let env = Env::default();
    let contract_id = env.register_contract(None, PropertyListingContract);
    let client = PropertyListingContractClient::new(&env, &contract_id);

    let owner = Address::generate(&env);
    let id = symbol_short!("PROP1");
    let data_hash = symbol_short!("HASH1");

    client.create_listing(&id, &data_hash, &owner);
    client.create_listing(&id, &data_hash, &owner);
}

#[test]
fn test_update_listing() {
    let env = Env::default();
    let contract_id = env.register_contract(None, PropertyListingContract);
    let client = PropertyListingContractClient::new(&env, &contract_id);

    let owner = Address::generate(&env);
    let id = symbol_short!("PROP1");
    let data_hash = symbol_short!("HASH1");
    let new_data_hash = symbol_short!("HASH2");

    client.create_listing(&id, &data_hash, &owner);
    let updated_listing = client.update_listing(&id, &new_data_hash, &owner);

    assert_eq!(updated_listing.id, id);
    assert_eq!(updated_listing.data_hash, new_data_hash);
    assert_eq!(updated_listing.owner, owner);
    assert_eq!(updated_listing.status, PropertyStatus::Available);
}

#[test]
#[should_panic(expected = "Only the owner can update the listing")]
fn test_update_listing_unauthorized() {
    let env = Env::default();
    let contract_id = env.register_contract(None, PropertyListingContract);
    let client = PropertyListingContractClient::new(&env, &contract_id);

    let owner = Address::generate(&env);
    let unauthorized = Address::generate(&env);
    let id = symbol_short!("PROP1");
    let data_hash = symbol_short!("HASH1");
    let new_data_hash = symbol_short!("HASH2");

    client.create_listing(&id, &data_hash, &owner);
    client.update_listing(&id, &new_data_hash, &unauthorized);
}

#[test]
fn test_update_status() {
    let env = Env::default();
    let contract_id = env.register_contract(None, PropertyListingContract);
    let client = PropertyListingContractClient::new(&env, &contract_id);

    let owner = Address::generate(&env);
    let id = symbol_short!("PROP1");
    let data_hash = symbol_short!("HASH1");

    client.create_listing(&id, &data_hash, &owner);
    let updated_listing = client.update_status(&id, &owner, &PropertyStatus::Booked);

    assert_eq!(updated_listing.id, id);
    assert_eq!(updated_listing.data_hash, data_hash);
    assert_eq!(updated_listing.owner, owner);
    assert_eq!(updated_listing.status, PropertyStatus::Booked);
}

#[test]
#[should_panic(expected = "Only the owner can update the status")]
fn test_update_status_unauthorized() {
    let env = Env::default();
    let contract_id = env.register_contract(None, PropertyListingContract);
    let client = PropertyListingContractClient::new(&env, &contract_id);

    let owner = Address::generate(&env);
    let unauthorized = Address::generate(&env);
    let id = symbol_short!("PROP1");
    let data_hash = symbol_short!("HASH1");

    client.create_listing(&id, &data_hash, &owner);
    client.update_status(&id, &unauthorized, &PropertyStatus::Booked);
}

#[test]
fn test_get_listing() {
    let env = Env::default();
    let contract_id = env.register_contract(None, PropertyListingContract);
    let client = PropertyListingContractClient::new(&env, &contract_id);

    let owner = Address::generate(&env);
    let id = symbol_short!("PROP1");
    let data_hash = symbol_short!("HASH1");

    client.create_listing(&id, &data_hash, &owner);
    let listing = client.get_listing(&id);

    assert_eq!(listing.id, id);
    assert_eq!(listing.data_hash, data_hash);
    assert_eq!(listing.owner, owner);
    assert_eq!(listing.status, PropertyStatus::Available);
}

#[test]
#[should_panic(expected = "Property listing not found")]
fn test_get_nonexistent_listing() {
    let env = Env::default();
    let contract_id = env.register_contract(None, PropertyListingContract);
    let client = PropertyListingContractClient::new(&env, &contract_id);

    let id = symbol_short!("PROP1");
    client.get_listing(&id);
}
