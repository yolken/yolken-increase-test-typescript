// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.accountNumbers.create',
    fullyQualifiedName: 'accountNumbers.create',
    httpMethod: 'post',
    httpPath: '/account_numbers',
  },
  {
    clientCallName: 'client.accountNumbers.retrieve',
    fullyQualifiedName: 'accountNumbers.retrieve',
    httpMethod: 'get',
    httpPath: '/account_numbers/{account_number_id}',
  },
  {
    clientCallName: 'client.accountNumbers.update',
    fullyQualifiedName: 'accountNumbers.update',
    httpMethod: 'patch',
    httpPath: '/account_numbers/{account_number_id}',
  },
  {
    clientCallName: 'client.accountNumbers.list',
    fullyQualifiedName: 'accountNumbers.list',
    httpMethod: 'get',
    httpPath: '/account_numbers',
  },
  {
    clientCallName: 'client.accountStatements.retrieve',
    fullyQualifiedName: 'accountStatements.retrieve',
    httpMethod: 'get',
    httpPath: '/account_statements/{account_statement_id}',
  },
  {
    clientCallName: 'client.accountStatements.list',
    fullyQualifiedName: 'accountStatements.list',
    httpMethod: 'get',
    httpPath: '/account_statements',
  },
  {
    clientCallName: 'client.accountTransfers.create',
    fullyQualifiedName: 'accountTransfers.create',
    httpMethod: 'post',
    httpPath: '/account_transfers',
  },
  {
    clientCallName: 'client.accountTransfers.retrieve',
    fullyQualifiedName: 'accountTransfers.retrieve',
    httpMethod: 'get',
    httpPath: '/account_transfers/{account_transfer_id}',
  },
  {
    clientCallName: 'client.accountTransfers.list',
    fullyQualifiedName: 'accountTransfers.list',
    httpMethod: 'get',
    httpPath: '/account_transfers',
  },
  {
    clientCallName: 'client.accountTransfers.approve',
    fullyQualifiedName: 'accountTransfers.approve',
    httpMethod: 'post',
    httpPath: '/account_transfers/{account_transfer_id}/approve',
  },
  {
    clientCallName: 'client.accountTransfers.cancel',
    fullyQualifiedName: 'accountTransfers.cancel',
    httpMethod: 'post',
    httpPath: '/account_transfers/{account_transfer_id}/cancel',
  },
  {
    clientCallName: 'client.accounts.create',
    fullyQualifiedName: 'accounts.create',
    httpMethod: 'post',
    httpPath: '/accounts',
  },
  {
    clientCallName: 'client.accounts.retrieve',
    fullyQualifiedName: 'accounts.retrieve',
    httpMethod: 'get',
    httpPath: '/accounts/{account_id}',
  },
  {
    clientCallName: 'client.accounts.update',
    fullyQualifiedName: 'accounts.update',
    httpMethod: 'patch',
    httpPath: '/accounts/{account_id}',
  },
  {
    clientCallName: 'client.accounts.list',
    fullyQualifiedName: 'accounts.list',
    httpMethod: 'get',
    httpPath: '/accounts',
  },
  {
    clientCallName: 'client.accounts.close',
    fullyQualifiedName: 'accounts.close',
    httpMethod: 'post',
    httpPath: '/accounts/{account_id}/close',
  },
  {
    clientCallName: 'client.accounts.retrieveBalance',
    fullyQualifiedName: 'accounts.retrieveBalance',
    httpMethod: 'get',
    httpPath: '/accounts/{account_id}/balance',
  },
  {
    clientCallName: 'client.accounts.retrieveIntrafiBalance',
    fullyQualifiedName: 'accounts.retrieveIntrafiBalance',
    httpMethod: 'get',
    httpPath: '/accounts/{account_id}/intrafi_balance',
  },
  {
    clientCallName: 'client.achPrenotifications.create',
    fullyQualifiedName: 'achPrenotifications.create',
    httpMethod: 'post',
    httpPath: '/ach_prenotifications',
  },
  {
    clientCallName: 'client.achPrenotifications.retrieve',
    fullyQualifiedName: 'achPrenotifications.retrieve',
    httpMethod: 'get',
    httpPath: '/ach_prenotifications/{ach_prenotification_id}',
  },
  {
    clientCallName: 'client.achPrenotifications.list',
    fullyQualifiedName: 'achPrenotifications.list',
    httpMethod: 'get',
    httpPath: '/ach_prenotifications',
  },
  {
    clientCallName: 'client.achTransfers.create',
    fullyQualifiedName: 'achTransfers.create',
    httpMethod: 'post',
    httpPath: '/ach_transfers',
  },
  {
    clientCallName: 'client.achTransfers.retrieve',
    fullyQualifiedName: 'achTransfers.retrieve',
    httpMethod: 'get',
    httpPath: '/ach_transfers/{ach_transfer_id}',
  },
  {
    clientCallName: 'client.achTransfers.list',
    fullyQualifiedName: 'achTransfers.list',
    httpMethod: 'get',
    httpPath: '/ach_transfers',
  },
  {
    clientCallName: 'client.achTransfers.approve',
    fullyQualifiedName: 'achTransfers.approve',
    httpMethod: 'post',
    httpPath: '/ach_transfers/{ach_transfer_id}/approve',
  },
  {
    clientCallName: 'client.achTransfers.cancel',
    fullyQualifiedName: 'achTransfers.cancel',
    httpMethod: 'post',
    httpPath: '/ach_transfers/{ach_transfer_id}/cancel',
  },
  {
    clientCallName: 'client.bookkeepingAccounts.create',
    fullyQualifiedName: 'bookkeepingAccounts.create',
    httpMethod: 'post',
    httpPath: '/bookkeeping_accounts',
  },
  {
    clientCallName: 'client.bookkeepingAccounts.update',
    fullyQualifiedName: 'bookkeepingAccounts.update',
    httpMethod: 'patch',
    httpPath: '/bookkeeping_accounts/{bookkeeping_account_id}',
  },
  {
    clientCallName: 'client.bookkeepingAccounts.list',
    fullyQualifiedName: 'bookkeepingAccounts.list',
    httpMethod: 'get',
    httpPath: '/bookkeeping_accounts',
  },
  {
    clientCallName: 'client.bookkeepingAccounts.retrieveBalance',
    fullyQualifiedName: 'bookkeepingAccounts.retrieveBalance',
    httpMethod: 'get',
    httpPath: '/bookkeeping_accounts/{bookkeeping_account_id}/balance',
  },
  {
    clientCallName: 'client.bookkeepingEntries.retrieve',
    fullyQualifiedName: 'bookkeepingEntries.retrieve',
    httpMethod: 'get',
    httpPath: '/bookkeeping_entries/{bookkeeping_entry_id}',
  },
  {
    clientCallName: 'client.bookkeepingEntries.list',
    fullyQualifiedName: 'bookkeepingEntries.list',
    httpMethod: 'get',
    httpPath: '/bookkeeping_entries',
  },
  {
    clientCallName: 'client.bookkeepingEntrySets.create',
    fullyQualifiedName: 'bookkeepingEntrySets.create',
    httpMethod: 'post',
    httpPath: '/bookkeeping_entry_sets',
  },
  {
    clientCallName: 'client.bookkeepingEntrySets.retrieve',
    fullyQualifiedName: 'bookkeepingEntrySets.retrieve',
    httpMethod: 'get',
    httpPath: '/bookkeeping_entry_sets/{bookkeeping_entry_set_id}',
  },
  {
    clientCallName: 'client.bookkeepingEntrySets.list',
    fullyQualifiedName: 'bookkeepingEntrySets.list',
    httpMethod: 'get',
    httpPath: '/bookkeeping_entry_sets',
  },
  {
    clientCallName: 'client.cardDisputes.create',
    fullyQualifiedName: 'cardDisputes.create',
    httpMethod: 'post',
    httpPath: '/card_disputes',
  },
  {
    clientCallName: 'client.cardDisputes.retrieve',
    fullyQualifiedName: 'cardDisputes.retrieve',
    httpMethod: 'get',
    httpPath: '/card_disputes/{card_dispute_id}',
  },
  {
    clientCallName: 'client.cardDisputes.list',
    fullyQualifiedName: 'cardDisputes.list',
    httpMethod: 'get',
    httpPath: '/card_disputes',
  },
  {
    clientCallName: 'client.cardDisputes.submitUserSubmission',
    fullyQualifiedName: 'cardDisputes.submitUserSubmission',
    httpMethod: 'post',
    httpPath: '/card_disputes/{card_dispute_id}/submit_user_submission',
  },
  {
    clientCallName: 'client.cardDisputes.withdraw',
    fullyQualifiedName: 'cardDisputes.withdraw',
    httpMethod: 'post',
    httpPath: '/card_disputes/{card_dispute_id}/withdraw',
  },
  {
    clientCallName: 'client.cardPayments.retrieve',
    fullyQualifiedName: 'cardPayments.retrieve',
    httpMethod: 'get',
    httpPath: '/card_payments/{card_payment_id}',
  },
  {
    clientCallName: 'client.cardPayments.list',
    fullyQualifiedName: 'cardPayments.list',
    httpMethod: 'get',
    httpPath: '/card_payments',
  },
  {
    clientCallName: 'client.cardPurchaseSupplements.retrieve',
    fullyQualifiedName: 'cardPurchaseSupplements.retrieve',
    httpMethod: 'get',
    httpPath: '/card_purchase_supplements/{card_purchase_supplement_id}',
  },
  {
    clientCallName: 'client.cardPurchaseSupplements.list',
    fullyQualifiedName: 'cardPurchaseSupplements.list',
    httpMethod: 'get',
    httpPath: '/card_purchase_supplements',
  },
  {
    clientCallName: 'client.cardPushTransfers.create',
    fullyQualifiedName: 'cardPushTransfers.create',
    httpMethod: 'post',
    httpPath: '/card_push_transfers',
  },
  {
    clientCallName: 'client.cardPushTransfers.retrieve',
    fullyQualifiedName: 'cardPushTransfers.retrieve',
    httpMethod: 'get',
    httpPath: '/card_push_transfers/{card_push_transfer_id}',
  },
  {
    clientCallName: 'client.cardPushTransfers.list',
    fullyQualifiedName: 'cardPushTransfers.list',
    httpMethod: 'get',
    httpPath: '/card_push_transfers',
  },
  {
    clientCallName: 'client.cardPushTransfers.approve',
    fullyQualifiedName: 'cardPushTransfers.approve',
    httpMethod: 'post',
    httpPath: '/card_push_transfers/{card_push_transfer_id}/approve',
  },
  {
    clientCallName: 'client.cardPushTransfers.cancel',
    fullyQualifiedName: 'cardPushTransfers.cancel',
    httpMethod: 'post',
    httpPath: '/card_push_transfers/{card_push_transfer_id}/cancel',
  },
  {
    clientCallName: 'client.cardTokens.retrieve',
    fullyQualifiedName: 'cardTokens.retrieve',
    httpMethod: 'get',
    httpPath: '/card_tokens/{card_token_id}',
  },
  {
    clientCallName: 'client.cardTokens.list',
    fullyQualifiedName: 'cardTokens.list',
    httpMethod: 'get',
    httpPath: '/card_tokens',
  },
  {
    clientCallName: 'client.cardTokens.retrieveCapabilities',
    fullyQualifiedName: 'cardTokens.retrieveCapabilities',
    httpMethod: 'get',
    httpPath: '/card_tokens/{card_token_id}/capabilities',
  },
  {
    clientCallName: 'client.cardValidations.create',
    fullyQualifiedName: 'cardValidations.create',
    httpMethod: 'post',
    httpPath: '/card_validations',
  },
  {
    clientCallName: 'client.cardValidations.retrieve',
    fullyQualifiedName: 'cardValidations.retrieve',
    httpMethod: 'get',
    httpPath: '/card_validations/{card_validation_id}',
  },
  {
    clientCallName: 'client.cardValidations.list',
    fullyQualifiedName: 'cardValidations.list',
    httpMethod: 'get',
    httpPath: '/card_validations',
  },
  {
    clientCallName: 'client.cards.create',
    fullyQualifiedName: 'cards.create',
    httpMethod: 'post',
    httpPath: '/cards',
  },
  {
    clientCallName: 'client.cards.retrieve',
    fullyQualifiedName: 'cards.retrieve',
    httpMethod: 'get',
    httpPath: '/cards/{card_id}',
  },
  {
    clientCallName: 'client.cards.update',
    fullyQualifiedName: 'cards.update',
    httpMethod: 'patch',
    httpPath: '/cards/{card_id}',
  },
  {
    clientCallName: 'client.cards.list',
    fullyQualifiedName: 'cards.list',
    httpMethod: 'get',
    httpPath: '/cards',
  },
  {
    clientCallName: 'client.cards.createDetailsIframe',
    fullyQualifiedName: 'cards.createDetailsIframe',
    httpMethod: 'post',
    httpPath: '/cards/{card_id}/create_details_iframe',
  },
  {
    clientCallName: 'client.cards.retrieveDetails',
    fullyQualifiedName: 'cards.retrieveDetails',
    httpMethod: 'get',
    httpPath: '/cards/{card_id}/details',
  },
  {
    clientCallName: 'client.cards.updatePin',
    fullyQualifiedName: 'cards.updatePin',
    httpMethod: 'post',
    httpPath: '/cards/{card_id}/update_pin',
  },
  {
    clientCallName: 'client.checkDeposits.create',
    fullyQualifiedName: 'checkDeposits.create',
    httpMethod: 'post',
    httpPath: '/check_deposits',
  },
  {
    clientCallName: 'client.checkDeposits.retrieve',
    fullyQualifiedName: 'checkDeposits.retrieve',
    httpMethod: 'get',
    httpPath: '/check_deposits/{check_deposit_id}',
  },
  {
    clientCallName: 'client.checkDeposits.list',
    fullyQualifiedName: 'checkDeposits.list',
    httpMethod: 'get',
    httpPath: '/check_deposits',
  },
  {
    clientCallName: 'client.checkTransfers.create',
    fullyQualifiedName: 'checkTransfers.create',
    httpMethod: 'post',
    httpPath: '/check_transfers',
  },
  {
    clientCallName: 'client.checkTransfers.retrieve',
    fullyQualifiedName: 'checkTransfers.retrieve',
    httpMethod: 'get',
    httpPath: '/check_transfers/{check_transfer_id}',
  },
  {
    clientCallName: 'client.checkTransfers.list',
    fullyQualifiedName: 'checkTransfers.list',
    httpMethod: 'get',
    httpPath: '/check_transfers',
  },
  {
    clientCallName: 'client.checkTransfers.approve',
    fullyQualifiedName: 'checkTransfers.approve',
    httpMethod: 'post',
    httpPath: '/check_transfers/{check_transfer_id}/approve',
  },
  {
    clientCallName: 'client.checkTransfers.cancel',
    fullyQualifiedName: 'checkTransfers.cancel',
    httpMethod: 'post',
    httpPath: '/check_transfers/{check_transfer_id}/cancel',
  },
  {
    clientCallName: 'client.checkTransfers.stopPayment',
    fullyQualifiedName: 'checkTransfers.stopPayment',
    httpMethod: 'post',
    httpPath: '/check_transfers/{check_transfer_id}/stop_payment',
  },
  {
    clientCallName: 'client.declinedTransactions.retrieve',
    fullyQualifiedName: 'declinedTransactions.retrieve',
    httpMethod: 'get',
    httpPath: '/declined_transactions/{declined_transaction_id}',
  },
  {
    clientCallName: 'client.declinedTransactions.list',
    fullyQualifiedName: 'declinedTransactions.list',
    httpMethod: 'get',
    httpPath: '/declined_transactions',
  },
  {
    clientCallName: 'client.digitalCardProfiles.create',
    fullyQualifiedName: 'digitalCardProfiles.create',
    httpMethod: 'post',
    httpPath: '/digital_card_profiles',
  },
  {
    clientCallName: 'client.digitalCardProfiles.retrieve',
    fullyQualifiedName: 'digitalCardProfiles.retrieve',
    httpMethod: 'get',
    httpPath: '/digital_card_profiles/{digital_card_profile_id}',
  },
  {
    clientCallName: 'client.digitalCardProfiles.list',
    fullyQualifiedName: 'digitalCardProfiles.list',
    httpMethod: 'get',
    httpPath: '/digital_card_profiles',
  },
  {
    clientCallName: 'client.digitalCardProfiles.archive',
    fullyQualifiedName: 'digitalCardProfiles.archive',
    httpMethod: 'post',
    httpPath: '/digital_card_profiles/{digital_card_profile_id}/archive',
  },
  {
    clientCallName: 'client.digitalCardProfiles.clone',
    fullyQualifiedName: 'digitalCardProfiles.clone',
    httpMethod: 'post',
    httpPath: '/digital_card_profiles/{digital_card_profile_id}/clone',
  },
  {
    clientCallName: 'client.digitalWalletTokens.retrieve',
    fullyQualifiedName: 'digitalWalletTokens.retrieve',
    httpMethod: 'get',
    httpPath: '/digital_wallet_tokens/{digital_wallet_token_id}',
  },
  {
    clientCallName: 'client.digitalWalletTokens.list',
    fullyQualifiedName: 'digitalWalletTokens.list',
    httpMethod: 'get',
    httpPath: '/digital_wallet_tokens',
  },
  {
    clientCallName: 'client.entities.create',
    fullyQualifiedName: 'entities.create',
    httpMethod: 'post',
    httpPath: '/entities',
  },
  {
    clientCallName: 'client.entities.retrieve',
    fullyQualifiedName: 'entities.retrieve',
    httpMethod: 'get',
    httpPath: '/entities/{entity_id}',
  },
  {
    clientCallName: 'client.entities.update',
    fullyQualifiedName: 'entities.update',
    httpMethod: 'patch',
    httpPath: '/entities/{entity_id}',
  },
  {
    clientCallName: 'client.entities.list',
    fullyQualifiedName: 'entities.list',
    httpMethod: 'get',
    httpPath: '/entities',
  },
  {
    clientCallName: 'client.entities.archive',
    fullyQualifiedName: 'entities.archive',
    httpMethod: 'post',
    httpPath: '/entities/{entity_id}/archive',
  },
  {
    clientCallName: 'client.entityBeneficialOwners.create',
    fullyQualifiedName: 'entityBeneficialOwners.create',
    httpMethod: 'post',
    httpPath: '/entity_beneficial_owners',
  },
  {
    clientCallName: 'client.entityBeneficialOwners.retrieve',
    fullyQualifiedName: 'entityBeneficialOwners.retrieve',
    httpMethod: 'get',
    httpPath: '/entity_beneficial_owners/{entity_beneficial_owner_id}',
  },
  {
    clientCallName: 'client.entityBeneficialOwners.update',
    fullyQualifiedName: 'entityBeneficialOwners.update',
    httpMethod: 'patch',
    httpPath: '/entity_beneficial_owners/{entity_beneficial_owner_id}',
  },
  {
    clientCallName: 'client.entityBeneficialOwners.list',
    fullyQualifiedName: 'entityBeneficialOwners.list',
    httpMethod: 'get',
    httpPath: '/entity_beneficial_owners',
  },
  {
    clientCallName: 'client.entityBeneficialOwners.archive',
    fullyQualifiedName: 'entityBeneficialOwners.archive',
    httpMethod: 'post',
    httpPath: '/entity_beneficial_owners/{entity_beneficial_owner_id}/archive',
  },
  {
    clientCallName: 'client.entitySupplementalDocuments.create',
    fullyQualifiedName: 'entitySupplementalDocuments.create',
    httpMethod: 'post',
    httpPath: '/entity_supplemental_documents',
  },
  {
    clientCallName: 'client.entitySupplementalDocuments.list',
    fullyQualifiedName: 'entitySupplementalDocuments.list',
    httpMethod: 'get',
    httpPath: '/entity_supplemental_documents',
  },
  {
    clientCallName: 'client.eventSubscriptions.create',
    fullyQualifiedName: 'eventSubscriptions.create',
    httpMethod: 'post',
    httpPath: '/event_subscriptions',
  },
  {
    clientCallName: 'client.eventSubscriptions.retrieve',
    fullyQualifiedName: 'eventSubscriptions.retrieve',
    httpMethod: 'get',
    httpPath: '/event_subscriptions/{event_subscription_id}',
  },
  {
    clientCallName: 'client.eventSubscriptions.update',
    fullyQualifiedName: 'eventSubscriptions.update',
    httpMethod: 'patch',
    httpPath: '/event_subscriptions/{event_subscription_id}',
  },
  {
    clientCallName: 'client.eventSubscriptions.list',
    fullyQualifiedName: 'eventSubscriptions.list',
    httpMethod: 'get',
    httpPath: '/event_subscriptions',
  },
  {
    clientCallName: 'client.events.retrieve',
    fullyQualifiedName: 'events.retrieve',
    httpMethod: 'get',
    httpPath: '/events/{event_id}',
  },
  {
    clientCallName: 'client.events.list',
    fullyQualifiedName: 'events.list',
    httpMethod: 'get',
    httpPath: '/events',
  },
  {
    clientCallName: 'client.exports.create',
    fullyQualifiedName: 'exports.create',
    httpMethod: 'post',
    httpPath: '/exports',
  },
  {
    clientCallName: 'client.exports.retrieve',
    fullyQualifiedName: 'exports.retrieve',
    httpMethod: 'get',
    httpPath: '/exports/{export_id}',
  },
  {
    clientCallName: 'client.exports.list',
    fullyQualifiedName: 'exports.list',
    httpMethod: 'get',
    httpPath: '/exports',
  },
  {
    clientCallName: 'client.externalAccounts.create',
    fullyQualifiedName: 'externalAccounts.create',
    httpMethod: 'post',
    httpPath: '/external_accounts',
  },
  {
    clientCallName: 'client.externalAccounts.retrieve',
    fullyQualifiedName: 'externalAccounts.retrieve',
    httpMethod: 'get',
    httpPath: '/external_accounts/{external_account_id}',
  },
  {
    clientCallName: 'client.externalAccounts.update',
    fullyQualifiedName: 'externalAccounts.update',
    httpMethod: 'patch',
    httpPath: '/external_accounts/{external_account_id}',
  },
  {
    clientCallName: 'client.externalAccounts.list',
    fullyQualifiedName: 'externalAccounts.list',
    httpMethod: 'get',
    httpPath: '/external_accounts',
  },
  {
    clientCallName: 'client.fednowTransfers.create',
    fullyQualifiedName: 'fednowTransfers.create',
    httpMethod: 'post',
    httpPath: '/fednow_transfers',
  },
  {
    clientCallName: 'client.fednowTransfers.retrieve',
    fullyQualifiedName: 'fednowTransfers.retrieve',
    httpMethod: 'get',
    httpPath: '/fednow_transfers/{fednow_transfer_id}',
  },
  {
    clientCallName: 'client.fednowTransfers.list',
    fullyQualifiedName: 'fednowTransfers.list',
    httpMethod: 'get',
    httpPath: '/fednow_transfers',
  },
  {
    clientCallName: 'client.fednowTransfers.approve',
    fullyQualifiedName: 'fednowTransfers.approve',
    httpMethod: 'post',
    httpPath: '/fednow_transfers/{fednow_transfer_id}/approve',
  },
  {
    clientCallName: 'client.fednowTransfers.cancel',
    fullyQualifiedName: 'fednowTransfers.cancel',
    httpMethod: 'post',
    httpPath: '/fednow_transfers/{fednow_transfer_id}/cancel',
  },
  {
    clientCallName: 'client.fileLinks.create',
    fullyQualifiedName: 'fileLinks.create',
    httpMethod: 'post',
    httpPath: '/file_links',
  },
  {
    clientCallName: 'client.files.create',
    fullyQualifiedName: 'files.create',
    httpMethod: 'post',
    httpPath: '/files',
  },
  {
    clientCallName: 'client.files.retrieve',
    fullyQualifiedName: 'files.retrieve',
    httpMethod: 'get',
    httpPath: '/files/{file_id}',
  },
  {
    clientCallName: 'client.files.list',
    fullyQualifiedName: 'files.list',
    httpMethod: 'get',
    httpPath: '/files',
  },
  {
    clientCallName: 'client.groups.retrieveCurrent',
    fullyQualifiedName: 'groups.retrieveCurrent',
    httpMethod: 'get',
    httpPath: '/groups/current',
  },
  {
    clientCallName: 'client.inboundACHTransfers.retrieve',
    fullyQualifiedName: 'inboundACHTransfers.retrieve',
    httpMethod: 'get',
    httpPath: '/inbound_ach_transfers/{inbound_ach_transfer_id}',
  },
  {
    clientCallName: 'client.inboundACHTransfers.list',
    fullyQualifiedName: 'inboundACHTransfers.list',
    httpMethod: 'get',
    httpPath: '/inbound_ach_transfers',
  },
  {
    clientCallName: 'client.inboundACHTransfers.createNotificationOfChange',
    fullyQualifiedName: 'inboundACHTransfers.createNotificationOfChange',
    httpMethod: 'post',
    httpPath: '/inbound_ach_transfers/{inbound_ach_transfer_id}/create_notification_of_change',
  },
  {
    clientCallName: 'client.inboundACHTransfers.decline',
    fullyQualifiedName: 'inboundACHTransfers.decline',
    httpMethod: 'post',
    httpPath: '/inbound_ach_transfers/{inbound_ach_transfer_id}/decline',
  },
  {
    clientCallName: 'client.inboundACHTransfers.return',
    fullyQualifiedName: 'inboundACHTransfers.return',
    httpMethod: 'post',
    httpPath: '/inbound_ach_transfers/{inbound_ach_transfer_id}/transfer_return',
  },
  {
    clientCallName: 'client.inboundCheckDeposits.retrieve',
    fullyQualifiedName: 'inboundCheckDeposits.retrieve',
    httpMethod: 'get',
    httpPath: '/inbound_check_deposits/{inbound_check_deposit_id}',
  },
  {
    clientCallName: 'client.inboundCheckDeposits.list',
    fullyQualifiedName: 'inboundCheckDeposits.list',
    httpMethod: 'get',
    httpPath: '/inbound_check_deposits',
  },
  {
    clientCallName: 'client.inboundCheckDeposits.decline',
    fullyQualifiedName: 'inboundCheckDeposits.decline',
    httpMethod: 'post',
    httpPath: '/inbound_check_deposits/{inbound_check_deposit_id}/decline',
  },
  {
    clientCallName: 'client.inboundCheckDeposits.return',
    fullyQualifiedName: 'inboundCheckDeposits.return',
    httpMethod: 'post',
    httpPath: '/inbound_check_deposits/{inbound_check_deposit_id}/return',
  },
  {
    clientCallName: 'client.inboundFednowTransfers.retrieve',
    fullyQualifiedName: 'inboundFednowTransfers.retrieve',
    httpMethod: 'get',
    httpPath: '/inbound_fednow_transfers/{inbound_fednow_transfer_id}',
  },
  {
    clientCallName: 'client.inboundFednowTransfers.list',
    fullyQualifiedName: 'inboundFednowTransfers.list',
    httpMethod: 'get',
    httpPath: '/inbound_fednow_transfers',
  },
  {
    clientCallName: 'client.inboundMailItems.retrieve',
    fullyQualifiedName: 'inboundMailItems.retrieve',
    httpMethod: 'get',
    httpPath: '/inbound_mail_items/{inbound_mail_item_id}',
  },
  {
    clientCallName: 'client.inboundMailItems.list',
    fullyQualifiedName: 'inboundMailItems.list',
    httpMethod: 'get',
    httpPath: '/inbound_mail_items',
  },
  {
    clientCallName: 'client.inboundMailItems.action',
    fullyQualifiedName: 'inboundMailItems.action',
    httpMethod: 'post',
    httpPath: '/inbound_mail_items/{inbound_mail_item_id}/action',
  },
  {
    clientCallName: 'client.inboundRealTimePaymentsTransfers.retrieve',
    fullyQualifiedName: 'inboundRealTimePaymentsTransfers.retrieve',
    httpMethod: 'get',
    httpPath: '/inbound_real_time_payments_transfers/{inbound_real_time_payments_transfer_id}',
  },
  {
    clientCallName: 'client.inboundRealTimePaymentsTransfers.list',
    fullyQualifiedName: 'inboundRealTimePaymentsTransfers.list',
    httpMethod: 'get',
    httpPath: '/inbound_real_time_payments_transfers',
  },
  {
    clientCallName: 'client.inboundWireDrawdownRequests.retrieve',
    fullyQualifiedName: 'inboundWireDrawdownRequests.retrieve',
    httpMethod: 'get',
    httpPath: '/inbound_wire_drawdown_requests/{inbound_wire_drawdown_request_id}',
  },
  {
    clientCallName: 'client.inboundWireDrawdownRequests.list',
    fullyQualifiedName: 'inboundWireDrawdownRequests.list',
    httpMethod: 'get',
    httpPath: '/inbound_wire_drawdown_requests',
  },
  {
    clientCallName: 'client.inboundWireTransfers.retrieve',
    fullyQualifiedName: 'inboundWireTransfers.retrieve',
    httpMethod: 'get',
    httpPath: '/inbound_wire_transfers/{inbound_wire_transfer_id}',
  },
  {
    clientCallName: 'client.inboundWireTransfers.list',
    fullyQualifiedName: 'inboundWireTransfers.list',
    httpMethod: 'get',
    httpPath: '/inbound_wire_transfers',
  },
  {
    clientCallName: 'client.inboundWireTransfers.reverse',
    fullyQualifiedName: 'inboundWireTransfers.reverse',
    httpMethod: 'post',
    httpPath: '/inbound_wire_transfers/{inbound_wire_transfer_id}/reverse',
  },
  {
    clientCallName: 'client.intrafiAccountEnrollments.create',
    fullyQualifiedName: 'intrafiAccountEnrollments.create',
    httpMethod: 'post',
    httpPath: '/intrafi_account_enrollments',
  },
  {
    clientCallName: 'client.intrafiAccountEnrollments.retrieve',
    fullyQualifiedName: 'intrafiAccountEnrollments.retrieve',
    httpMethod: 'get',
    httpPath: '/intrafi_account_enrollments/{intrafi_account_enrollment_id}',
  },
  {
    clientCallName: 'client.intrafiAccountEnrollments.list',
    fullyQualifiedName: 'intrafiAccountEnrollments.list',
    httpMethod: 'get',
    httpPath: '/intrafi_account_enrollments',
  },
  {
    clientCallName: 'client.intrafiAccountEnrollments.unenroll',
    fullyQualifiedName: 'intrafiAccountEnrollments.unenroll',
    httpMethod: 'post',
    httpPath: '/intrafi_account_enrollments/{intrafi_account_enrollment_id}/unenroll',
  },
  {
    clientCallName: 'client.intrafiExclusions.create',
    fullyQualifiedName: 'intrafiExclusions.create',
    httpMethod: 'post',
    httpPath: '/intrafi_exclusions',
  },
  {
    clientCallName: 'client.intrafiExclusions.retrieve',
    fullyQualifiedName: 'intrafiExclusions.retrieve',
    httpMethod: 'get',
    httpPath: '/intrafi_exclusions/{intrafi_exclusion_id}',
  },
  {
    clientCallName: 'client.intrafiExclusions.list',
    fullyQualifiedName: 'intrafiExclusions.list',
    httpMethod: 'get',
    httpPath: '/intrafi_exclusions',
  },
  {
    clientCallName: 'client.intrafiExclusions.archive',
    fullyQualifiedName: 'intrafiExclusions.archive',
    httpMethod: 'post',
    httpPath: '/intrafi_exclusions/{intrafi_exclusion_id}/archive',
  },
  {
    clientCallName: 'client.lockboxes.create',
    fullyQualifiedName: 'lockboxes.create',
    httpMethod: 'post',
    httpPath: '/lockboxes',
  },
  {
    clientCallName: 'client.lockboxes.retrieve',
    fullyQualifiedName: 'lockboxes.retrieve',
    httpMethod: 'get',
    httpPath: '/lockboxes/{lockbox_id}',
  },
  {
    clientCallName: 'client.lockboxes.update',
    fullyQualifiedName: 'lockboxes.update',
    httpMethod: 'patch',
    httpPath: '/lockboxes/{lockbox_id}',
  },
  {
    clientCallName: 'client.lockboxes.list',
    fullyQualifiedName: 'lockboxes.list',
    httpMethod: 'get',
    httpPath: '/lockboxes',
  },
  {
    clientCallName: 'client.oauth.createToken',
    fullyQualifiedName: 'oauth.createToken',
    httpMethod: 'post',
    httpPath: '/oauth/tokens',
  },
  {
    clientCallName: 'client.oauthApplications.retrieve',
    fullyQualifiedName: 'oauthApplications.retrieve',
    httpMethod: 'get',
    httpPath: '/oauth_applications/{oauth_application_id}',
  },
  {
    clientCallName: 'client.oauthApplications.list',
    fullyQualifiedName: 'oauthApplications.list',
    httpMethod: 'get',
    httpPath: '/oauth_applications',
  },
  {
    clientCallName: 'client.oauthConnections.retrieve',
    fullyQualifiedName: 'oauthConnections.retrieve',
    httpMethod: 'get',
    httpPath: '/oauth_connections/{oauth_connection_id}',
  },
  {
    clientCallName: 'client.oauthConnections.list',
    fullyQualifiedName: 'oauthConnections.list',
    httpMethod: 'get',
    httpPath: '/oauth_connections',
  },
  {
    clientCallName: 'client.pendingTransactions.create',
    fullyQualifiedName: 'pendingTransactions.create',
    httpMethod: 'post',
    httpPath: '/pending_transactions',
  },
  {
    clientCallName: 'client.pendingTransactions.retrieve',
    fullyQualifiedName: 'pendingTransactions.retrieve',
    httpMethod: 'get',
    httpPath: '/pending_transactions/{pending_transaction_id}',
  },
  {
    clientCallName: 'client.pendingTransactions.list',
    fullyQualifiedName: 'pendingTransactions.list',
    httpMethod: 'get',
    httpPath: '/pending_transactions',
  },
  {
    clientCallName: 'client.pendingTransactions.release',
    fullyQualifiedName: 'pendingTransactions.release',
    httpMethod: 'post',
    httpPath: '/pending_transactions/{pending_transaction_id}/release',
  },
  {
    clientCallName: 'client.physicalCardProfiles.create',
    fullyQualifiedName: 'physicalCardProfiles.create',
    httpMethod: 'post',
    httpPath: '/physical_card_profiles',
  },
  {
    clientCallName: 'client.physicalCardProfiles.retrieve',
    fullyQualifiedName: 'physicalCardProfiles.retrieve',
    httpMethod: 'get',
    httpPath: '/physical_card_profiles/{physical_card_profile_id}',
  },
  {
    clientCallName: 'client.physicalCardProfiles.list',
    fullyQualifiedName: 'physicalCardProfiles.list',
    httpMethod: 'get',
    httpPath: '/physical_card_profiles',
  },
  {
    clientCallName: 'client.physicalCardProfiles.archive',
    fullyQualifiedName: 'physicalCardProfiles.archive',
    httpMethod: 'post',
    httpPath: '/physical_card_profiles/{physical_card_profile_id}/archive',
  },
  {
    clientCallName: 'client.physicalCardProfiles.clone',
    fullyQualifiedName: 'physicalCardProfiles.clone',
    httpMethod: 'post',
    httpPath: '/physical_card_profiles/{physical_card_profile_id}/clone',
  },
  {
    clientCallName: 'client.physicalCards.create',
    fullyQualifiedName: 'physicalCards.create',
    httpMethod: 'post',
    httpPath: '/physical_cards',
  },
  {
    clientCallName: 'client.physicalCards.retrieve',
    fullyQualifiedName: 'physicalCards.retrieve',
    httpMethod: 'get',
    httpPath: '/physical_cards/{physical_card_id}',
  },
  {
    clientCallName: 'client.physicalCards.update',
    fullyQualifiedName: 'physicalCards.update',
    httpMethod: 'patch',
    httpPath: '/physical_cards/{physical_card_id}',
  },
  {
    clientCallName: 'client.physicalCards.list',
    fullyQualifiedName: 'physicalCards.list',
    httpMethod: 'get',
    httpPath: '/physical_cards',
  },
  {
    clientCallName: 'client.programs.retrieve',
    fullyQualifiedName: 'programs.retrieve',
    httpMethod: 'get',
    httpPath: '/programs/{program_id}',
  },
  {
    clientCallName: 'client.programs.list',
    fullyQualifiedName: 'programs.list',
    httpMethod: 'get',
    httpPath: '/programs',
  },
  {
    clientCallName: 'client.realTimeDecisions.retrieve',
    fullyQualifiedName: 'realTimeDecisions.retrieve',
    httpMethod: 'get',
    httpPath: '/real_time_decisions/{real_time_decision_id}',
  },
  {
    clientCallName: 'client.realTimeDecisions.action',
    fullyQualifiedName: 'realTimeDecisions.action',
    httpMethod: 'post',
    httpPath: '/real_time_decisions/{real_time_decision_id}/action',
  },
  {
    clientCallName: 'client.realTimePaymentsTransfers.create',
    fullyQualifiedName: 'realTimePaymentsTransfers.create',
    httpMethod: 'post',
    httpPath: '/real_time_payments_transfers',
  },
  {
    clientCallName: 'client.realTimePaymentsTransfers.retrieve',
    fullyQualifiedName: 'realTimePaymentsTransfers.retrieve',
    httpMethod: 'get',
    httpPath: '/real_time_payments_transfers/{real_time_payments_transfer_id}',
  },
  {
    clientCallName: 'client.realTimePaymentsTransfers.list',
    fullyQualifiedName: 'realTimePaymentsTransfers.list',
    httpMethod: 'get',
    httpPath: '/real_time_payments_transfers',
  },
  {
    clientCallName: 'client.realTimePaymentsTransfers.approve',
    fullyQualifiedName: 'realTimePaymentsTransfers.approve',
    httpMethod: 'post',
    httpPath: '/real_time_payments_transfers/{real_time_payments_transfer_id}/approve',
  },
  {
    clientCallName: 'client.realTimePaymentsTransfers.cancel',
    fullyQualifiedName: 'realTimePaymentsTransfers.cancel',
    httpMethod: 'post',
    httpPath: '/real_time_payments_transfers/{real_time_payments_transfer_id}/cancel',
  },
  {
    clientCallName: 'client.routingNumbers.list',
    fullyQualifiedName: 'routingNumbers.list',
    httpMethod: 'get',
    httpPath: '/routing_numbers',
  },
  {
    clientCallName: 'client.simulations.confirmFuelAuthorization',
    fullyQualifiedName: 'simulations.confirmFuelAuthorization',
    httpMethod: 'post',
    httpPath: '/simulations/card_fuel_confirmations',
  },
  {
    clientCallName: 'client.simulations.createAccountStatement',
    fullyQualifiedName: 'simulations.createAccountStatement',
    httpMethod: 'post',
    httpPath: '/simulations/account_statements',
  },
  {
    clientCallName: 'client.simulations.createCardAuthorization',
    fullyQualifiedName: 'simulations.createCardAuthorization',
    httpMethod: 'post',
    httpPath: '/simulations/card_authorizations',
  },
  {
    clientCallName: 'client.simulations.createCardBalanceInquiry',
    fullyQualifiedName: 'simulations.createCardBalanceInquiry',
    httpMethod: 'post',
    httpPath: '/simulations/card_balance_inquiries',
  },
  {
    clientCallName: 'client.simulations.createCardToken',
    fullyQualifiedName: 'simulations.createCardToken',
    httpMethod: 'post',
    httpPath: '/simulations/card_tokens',
  },
  {
    clientCallName: 'client.simulations.createDigitalWalletTokenRequest',
    fullyQualifiedName: 'simulations.createDigitalWalletTokenRequest',
    httpMethod: 'post',
    httpPath: '/simulations/digital_wallet_token_requests',
  },
  {
    clientCallName: 'client.simulations.createInboundACHTransfer',
    fullyQualifiedName: 'simulations.createInboundACHTransfer',
    httpMethod: 'post',
    httpPath: '/simulations/inbound_ach_transfers',
  },
  {
    clientCallName: 'client.simulations.createInboundFednowTransfer',
    fullyQualifiedName: 'simulations.createInboundFednowTransfer',
    httpMethod: 'post',
    httpPath: '/simulations/inbound_fednow_transfers',
  },
  {
    clientCallName: 'client.simulations.createInboundMailItem',
    fullyQualifiedName: 'simulations.createInboundMailItem',
    httpMethod: 'post',
    httpPath: '/simulations/inbound_mail_items',
  },
  {
    clientCallName: 'client.simulations.createInboundRealTimePaymentsTransfer',
    fullyQualifiedName: 'simulations.createInboundRealTimePaymentsTransfer',
    httpMethod: 'post',
    httpPath: '/simulations/inbound_real_time_payments_transfers',
  },
  {
    clientCallName: 'client.simulations.createInboundWireDrawdownRequest',
    fullyQualifiedName: 'simulations.createInboundWireDrawdownRequest',
    httpMethod: 'post',
    httpPath: '/simulations/inbound_wire_drawdown_requests',
  },
  {
    clientCallName: 'client.simulations.createInboundWireTransfer',
    fullyQualifiedName: 'simulations.createInboundWireTransfer',
    httpMethod: 'post',
    httpPath: '/simulations/inbound_wire_transfers',
  },
  {
    clientCallName: 'client.simulations.createInterestPayment',
    fullyQualifiedName: 'simulations.createInterestPayment',
    httpMethod: 'post',
    httpPath: '/simulations/interest_payments',
  },
  {
    clientCallName: 'client.simulations.createProgram',
    fullyQualifiedName: 'simulations.createProgram',
    httpMethod: 'post',
    httpPath: '/simulations/programs',
  },
  {
    clientCallName: 'client.simulations.expireCardAuthorization',
    fullyQualifiedName: 'simulations.expireCardAuthorization',
    httpMethod: 'post',
    httpPath: '/simulations/card_authorization_expirations',
  },
  {
    clientCallName: 'client.simulations.generateTaxFormExport',
    fullyQualifiedName: 'simulations.generateTaxFormExport',
    httpMethod: 'post',
    httpPath: '/simulations/exports',
  },
  {
    clientCallName: 'client.simulations.incrementCardAuthorization',
    fullyQualifiedName: 'simulations.incrementCardAuthorization',
    httpMethod: 'post',
    httpPath: '/simulations/card_increments',
  },
  {
    clientCallName: 'client.simulations.refundCardTransaction',
    fullyQualifiedName: 'simulations.refundCardTransaction',
    httpMethod: 'post',
    httpPath: '/simulations/card_refunds',
  },
  {
    clientCallName: 'client.simulations.reverseCardAuthorization',
    fullyQualifiedName: 'simulations.reverseCardAuthorization',
    httpMethod: 'post',
    httpPath: '/simulations/card_reversals',
  },
  {
    clientCallName: 'client.simulations.settleCardAuthorization',
    fullyQualifiedName: 'simulations.settleCardAuthorization',
    httpMethod: 'post',
    httpPath: '/simulations/card_settlements',
  },
  {
    clientCallName: 'client.simulations.accountTransfers.completeTransfer',
    fullyQualifiedName: 'simulations.accountTransfers.completeTransfer',
    httpMethod: 'post',
    httpPath: '/simulations/account_transfers/{account_transfer_id}/complete',
  },
  {
    clientCallName: 'client.simulations.achTransfers.acknowledge',
    fullyQualifiedName: 'simulations.achTransfers.acknowledge',
    httpMethod: 'post',
    httpPath: '/simulations/ach_transfers/{ach_transfer_id}/acknowledge',
  },
  {
    clientCallName: 'client.simulations.achTransfers.createNotificationOfChange',
    fullyQualifiedName: 'simulations.achTransfers.createNotificationOfChange',
    httpMethod: 'post',
    httpPath: '/simulations/ach_transfers/{ach_transfer_id}/create_notification_of_change',
  },
  {
    clientCallName: 'client.simulations.achTransfers.return',
    fullyQualifiedName: 'simulations.achTransfers.return',
    httpMethod: 'post',
    httpPath: '/simulations/ach_transfers/{ach_transfer_id}/return',
  },
  {
    clientCallName: 'client.simulations.achTransfers.settle',
    fullyQualifiedName: 'simulations.achTransfers.settle',
    httpMethod: 'post',
    httpPath: '/simulations/ach_transfers/{ach_transfer_id}/settle',
  },
  {
    clientCallName: 'client.simulations.achTransfers.submit',
    fullyQualifiedName: 'simulations.achTransfers.submit',
    httpMethod: 'post',
    httpPath: '/simulations/ach_transfers/{ach_transfer_id}/submit',
  },
  {
    clientCallName: 'client.simulations.cardAuthentications.create',
    fullyQualifiedName: 'simulations.cardAuthentications.create',
    httpMethod: 'post',
    httpPath: '/simulations/card_authentications',
  },
  {
    clientCallName: 'client.simulations.cardAuthentications.createChallenge',
    fullyQualifiedName: 'simulations.cardAuthentications.createChallenge',
    httpMethod: 'post',
    httpPath: '/simulations/card_authentications/{card_payment_id}/challenges',
  },
  {
    clientCallName: 'client.simulations.cardAuthentications.createChallengeAttempt',
    fullyQualifiedName: 'simulations.cardAuthentications.createChallengeAttempt',
    httpMethod: 'post',
    httpPath: '/simulations/card_authentications/{card_payment_id}/challenge_attempts',
  },
  {
    clientCallName: 'client.simulations.cardDisputes.advanceState',
    fullyQualifiedName: 'simulations.cardDisputes.advanceState',
    httpMethod: 'post',
    httpPath: '/simulations/card_disputes/{card_dispute_id}/action',
  },
  {
    clientCallName: 'client.simulations.checkDeposits.adjust',
    fullyQualifiedName: 'simulations.checkDeposits.adjust',
    httpMethod: 'post',
    httpPath: '/simulations/check_deposits/{check_deposit_id}/adjustment',
  },
  {
    clientCallName: 'client.simulations.checkDeposits.reject',
    fullyQualifiedName: 'simulations.checkDeposits.reject',
    httpMethod: 'post',
    httpPath: '/simulations/check_deposits/{check_deposit_id}/reject',
  },
  {
    clientCallName: 'client.simulations.checkDeposits.return',
    fullyQualifiedName: 'simulations.checkDeposits.return',
    httpMethod: 'post',
    httpPath: '/simulations/check_deposits/{check_deposit_id}/return',
  },
  {
    clientCallName: 'client.simulations.checkDeposits.submit',
    fullyQualifiedName: 'simulations.checkDeposits.submit',
    httpMethod: 'post',
    httpPath: '/simulations/check_deposits/{check_deposit_id}/submit',
  },
  {
    clientCallName: 'client.simulations.checkTransfers.mail',
    fullyQualifiedName: 'simulations.checkTransfers.mail',
    httpMethod: 'post',
    httpPath: '/simulations/check_transfers/{check_transfer_id}/mail',
  },
  {
    clientCallName: 'client.simulations.inboundCheckDeposits.create',
    fullyQualifiedName: 'simulations.inboundCheckDeposits.create',
    httpMethod: 'post',
    httpPath: '/simulations/inbound_check_deposits',
  },
  {
    clientCallName: 'client.simulations.inboundCheckDeposits.adjust',
    fullyQualifiedName: 'simulations.inboundCheckDeposits.adjust',
    httpMethod: 'post',
    httpPath: '/simulations/inbound_check_deposits/{inbound_check_deposit_id}/adjustment',
  },
  {
    clientCallName: 'client.simulations.pendingTransactions.releaseInboundFundsHold',
    fullyQualifiedName: 'simulations.pendingTransactions.releaseInboundFundsHold',
    httpMethod: 'post',
    httpPath: '/simulations/pending_transactions/{pending_transaction_id}/release_inbound_funds_hold',
  },
  {
    clientCallName: 'client.simulations.physicalCards.advanceShipment',
    fullyQualifiedName: 'simulations.physicalCards.advanceShipment',
    httpMethod: 'post',
    httpPath: '/simulations/physical_cards/{physical_card_id}/advance_shipment',
  },
  {
    clientCallName: 'client.simulations.physicalCards.createTrackingUpdate',
    fullyQualifiedName: 'simulations.physicalCards.createTrackingUpdate',
    httpMethod: 'post',
    httpPath: '/simulations/physical_cards/{physical_card_id}/tracking_updates',
  },
  {
    clientCallName: 'client.simulations.realTimePaymentsTransfers.complete',
    fullyQualifiedName: 'simulations.realTimePaymentsTransfers.complete',
    httpMethod: 'post',
    httpPath: '/simulations/real_time_payments_transfers/{real_time_payments_transfer_id}/complete',
  },
  {
    clientCallName: 'client.simulations.wireDrawdownRequests.refuse',
    fullyQualifiedName: 'simulations.wireDrawdownRequests.refuse',
    httpMethod: 'post',
    httpPath: '/simulations/wire_drawdown_requests/{wire_drawdown_request_id}/refuse',
  },
  {
    clientCallName: 'client.simulations.wireDrawdownRequests.submit',
    fullyQualifiedName: 'simulations.wireDrawdownRequests.submit',
    httpMethod: 'post',
    httpPath: '/simulations/wire_drawdown_requests/{wire_drawdown_request_id}/submit',
  },
  {
    clientCallName: 'client.simulations.wireTransfers.reverse',
    fullyQualifiedName: 'simulations.wireTransfers.reverse',
    httpMethod: 'post',
    httpPath: '/simulations/wire_transfers/{wire_transfer_id}/reverse',
  },
  {
    clientCallName: 'client.simulations.wireTransfers.submit',
    fullyQualifiedName: 'simulations.wireTransfers.submit',
    httpMethod: 'post',
    httpPath: '/simulations/wire_transfers/{wire_transfer_id}/submit',
  },
  {
    clientCallName: 'client.swiftTransfers.create',
    fullyQualifiedName: 'swiftTransfers.create',
    httpMethod: 'post',
    httpPath: '/swift_transfers',
  },
  {
    clientCallName: 'client.swiftTransfers.retrieve',
    fullyQualifiedName: 'swiftTransfers.retrieve',
    httpMethod: 'get',
    httpPath: '/swift_transfers/{swift_transfer_id}',
  },
  {
    clientCallName: 'client.swiftTransfers.list',
    fullyQualifiedName: 'swiftTransfers.list',
    httpMethod: 'get',
    httpPath: '/swift_transfers',
  },
  {
    clientCallName: 'client.swiftTransfers.approve',
    fullyQualifiedName: 'swiftTransfers.approve',
    httpMethod: 'post',
    httpPath: '/swift_transfers/{swift_transfer_id}/approve',
  },
  {
    clientCallName: 'client.swiftTransfers.cancel',
    fullyQualifiedName: 'swiftTransfers.cancel',
    httpMethod: 'post',
    httpPath: '/swift_transfers/{swift_transfer_id}/cancel',
  },
  {
    clientCallName: 'client.transactions.retrieve',
    fullyQualifiedName: 'transactions.retrieve',
    httpMethod: 'get',
    httpPath: '/transactions/{transaction_id}',
  },
  {
    clientCallName: 'client.transactions.list',
    fullyQualifiedName: 'transactions.list',
    httpMethod: 'get',
    httpPath: '/transactions',
  },
  {
    clientCallName: 'client.wireDrawdownRequests.create',
    fullyQualifiedName: 'wireDrawdownRequests.create',
    httpMethod: 'post',
    httpPath: '/wire_drawdown_requests',
  },
  {
    clientCallName: 'client.wireDrawdownRequests.retrieve',
    fullyQualifiedName: 'wireDrawdownRequests.retrieve',
    httpMethod: 'get',
    httpPath: '/wire_drawdown_requests/{wire_drawdown_request_id}',
  },
  {
    clientCallName: 'client.wireDrawdownRequests.list',
    fullyQualifiedName: 'wireDrawdownRequests.list',
    httpMethod: 'get',
    httpPath: '/wire_drawdown_requests',
  },
  {
    clientCallName: 'client.wireTransfers.create',
    fullyQualifiedName: 'wireTransfers.create',
    httpMethod: 'post',
    httpPath: '/wire_transfers',
  },
  {
    clientCallName: 'client.wireTransfers.retrieve',
    fullyQualifiedName: 'wireTransfers.retrieve',
    httpMethod: 'get',
    httpPath: '/wire_transfers/{wire_transfer_id}',
  },
  {
    clientCallName: 'client.wireTransfers.list',
    fullyQualifiedName: 'wireTransfers.list',
    httpMethod: 'get',
    httpPath: '/wire_transfers',
  },
  {
    clientCallName: 'client.wireTransfers.approve',
    fullyQualifiedName: 'wireTransfers.approve',
    httpMethod: 'post',
    httpPath: '/wire_transfers/{wire_transfer_id}/approve',
  },
  {
    clientCallName: 'client.wireTransfers.cancel',
    fullyQualifiedName: 'wireTransfers.cancel',
    httpMethod: 'post',
    httpPath: '/wire_transfers/{wire_transfer_id}/cancel',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
