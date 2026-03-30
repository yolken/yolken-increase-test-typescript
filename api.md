# AccountNumbers

Types:

- <code><a href="./src/resources/account-numbers.ts">AccountNumber</a></code>
- <code><a href="./src/resources/account-numbers.ts">AccountNumberListResponse</a></code>

Methods:

- <code title="post /account_numbers">client.accountNumbers.<a href="./src/resources/account-numbers.ts">create</a>({ ...params }) -> AccountNumber</code>
- <code title="get /account_numbers/{account_number_id}">client.accountNumbers.<a href="./src/resources/account-numbers.ts">retrieve</a>(accountNumberID) -> AccountNumber</code>
- <code title="patch /account_numbers/{account_number_id}">client.accountNumbers.<a href="./src/resources/account-numbers.ts">update</a>(accountNumberID, { ...params }) -> AccountNumber</code>
- <code title="get /account_numbers">client.accountNumbers.<a href="./src/resources/account-numbers.ts">list</a>({ ...params }) -> AccountNumberListResponse</code>

# AccountStatements

Types:

- <code><a href="./src/resources/account-statements.ts">AccountStatement</a></code>
- <code><a href="./src/resources/account-statements.ts">AccountStatementListResponse</a></code>

Methods:

- <code title="get /account_statements/{account_statement_id}">client.accountStatements.<a href="./src/resources/account-statements.ts">retrieve</a>(accountStatementID) -> AccountStatement</code>
- <code title="get /account_statements">client.accountStatements.<a href="./src/resources/account-statements.ts">list</a>({ ...params }) -> AccountStatementListResponse</code>

# AccountTransfers

Types:

- <code><a href="./src/resources/account-transfers.ts">AccountTransfer</a></code>
- <code><a href="./src/resources/account-transfers.ts">AccountTransferListResponse</a></code>

Methods:

- <code title="post /account_transfers">client.accountTransfers.<a href="./src/resources/account-transfers.ts">create</a>({ ...params }) -> AccountTransfer</code>
- <code title="get /account_transfers/{account_transfer_id}">client.accountTransfers.<a href="./src/resources/account-transfers.ts">retrieve</a>(accountTransferID) -> AccountTransfer</code>
- <code title="get /account_transfers">client.accountTransfers.<a href="./src/resources/account-transfers.ts">list</a>({ ...params }) -> AccountTransferListResponse</code>
- <code title="post /account_transfers/{account_transfer_id}/approve">client.accountTransfers.<a href="./src/resources/account-transfers.ts">approve</a>(accountTransferID) -> AccountTransfer</code>
- <code title="post /account_transfers/{account_transfer_id}/cancel">client.accountTransfers.<a href="./src/resources/account-transfers.ts">cancel</a>(accountTransferID) -> AccountTransfer</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">Account</a></code>
- <code><a href="./src/resources/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountRetrieveBalanceResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountRetrieveIntrafiBalanceResponse</a></code>

Methods:

- <code title="post /accounts">client.accounts.<a href="./src/resources/accounts.ts">create</a>({ ...params }) -> Account</code>
- <code title="get /accounts/{account_id}">client.accounts.<a href="./src/resources/accounts.ts">retrieve</a>(accountID) -> Account</code>
- <code title="patch /accounts/{account_id}">client.accounts.<a href="./src/resources/accounts.ts">update</a>(accountID, { ...params }) -> Account</code>
- <code title="get /accounts">client.accounts.<a href="./src/resources/accounts.ts">list</a>({ ...params }) -> AccountListResponse</code>
- <code title="post /accounts/{account_id}/close">client.accounts.<a href="./src/resources/accounts.ts">close</a>(accountID) -> Account</code>
- <code title="get /accounts/{account_id}/balance">client.accounts.<a href="./src/resources/accounts.ts">retrieveBalance</a>(accountID, { ...params }) -> AccountRetrieveBalanceResponse</code>
- <code title="get /accounts/{account_id}/intrafi_balance">client.accounts.<a href="./src/resources/accounts.ts">retrieveIntrafiBalance</a>(accountID) -> AccountRetrieveIntrafiBalanceResponse</code>

# ACHPrenotifications

Types:

- <code><a href="./src/resources/ach-prenotifications.ts">ACHPrenotification</a></code>
- <code><a href="./src/resources/ach-prenotifications.ts">ACHPrenotificationListResponse</a></code>

Methods:

- <code title="post /ach_prenotifications">client.achPrenotifications.<a href="./src/resources/ach-prenotifications.ts">create</a>({ ...params }) -> ACHPrenotification</code>
- <code title="get /ach_prenotifications/{ach_prenotification_id}">client.achPrenotifications.<a href="./src/resources/ach-prenotifications.ts">retrieve</a>(achPrenotificationID) -> ACHPrenotification</code>
- <code title="get /ach_prenotifications">client.achPrenotifications.<a href="./src/resources/ach-prenotifications.ts">list</a>({ ...params }) -> ACHPrenotificationListResponse</code>

# ACHTransfers

Types:

- <code><a href="./src/resources/ach-transfers.ts">ACHTransfer</a></code>
- <code><a href="./src/resources/ach-transfers.ts">InboundFundsHold</a></code>
- <code><a href="./src/resources/ach-transfers.ts">ACHTransferListResponse</a></code>

Methods:

- <code title="post /ach_transfers">client.achTransfers.<a href="./src/resources/ach-transfers.ts">create</a>({ ...params }) -> ACHTransfer</code>
- <code title="get /ach_transfers/{ach_transfer_id}">client.achTransfers.<a href="./src/resources/ach-transfers.ts">retrieve</a>(achTransferID) -> ACHTransfer</code>
- <code title="get /ach_transfers">client.achTransfers.<a href="./src/resources/ach-transfers.ts">list</a>({ ...params }) -> ACHTransferListResponse</code>
- <code title="post /ach_transfers/{ach_transfer_id}/approve">client.achTransfers.<a href="./src/resources/ach-transfers.ts">approve</a>(achTransferID) -> ACHTransfer</code>
- <code title="post /ach_transfers/{ach_transfer_id}/cancel">client.achTransfers.<a href="./src/resources/ach-transfers.ts">cancel</a>(achTransferID) -> ACHTransfer</code>

# BookkeepingAccounts

Types:

- <code><a href="./src/resources/bookkeeping-accounts.ts">BookkeepingAccount</a></code>
- <code><a href="./src/resources/bookkeeping-accounts.ts">BookkeepingAccountListResponse</a></code>
- <code><a href="./src/resources/bookkeeping-accounts.ts">BookkeepingAccountRetrieveBalanceResponse</a></code>

Methods:

- <code title="post /bookkeeping_accounts">client.bookkeepingAccounts.<a href="./src/resources/bookkeeping-accounts.ts">create</a>({ ...params }) -> BookkeepingAccount</code>
- <code title="patch /bookkeeping_accounts/{bookkeeping_account_id}">client.bookkeepingAccounts.<a href="./src/resources/bookkeeping-accounts.ts">update</a>(bookkeepingAccountID, { ...params }) -> BookkeepingAccount</code>
- <code title="get /bookkeeping_accounts">client.bookkeepingAccounts.<a href="./src/resources/bookkeeping-accounts.ts">list</a>({ ...params }) -> BookkeepingAccountListResponse</code>
- <code title="get /bookkeeping_accounts/{bookkeeping_account_id}/balance">client.bookkeepingAccounts.<a href="./src/resources/bookkeeping-accounts.ts">retrieveBalance</a>(bookkeepingAccountID, { ...params }) -> BookkeepingAccountRetrieveBalanceResponse</code>

# BookkeepingEntries

Types:

- <code><a href="./src/resources/bookkeeping-entries.ts">BookkeepingEntry</a></code>
- <code><a href="./src/resources/bookkeeping-entries.ts">BookkeepingEntryListResponse</a></code>

Methods:

- <code title="get /bookkeeping_entries/{bookkeeping_entry_id}">client.bookkeepingEntries.<a href="./src/resources/bookkeeping-entries.ts">retrieve</a>(bookkeepingEntryID) -> BookkeepingEntry</code>
- <code title="get /bookkeeping_entries">client.bookkeepingEntries.<a href="./src/resources/bookkeeping-entries.ts">list</a>({ ...params }) -> BookkeepingEntryListResponse</code>

# BookkeepingEntrySets

Types:

- <code><a href="./src/resources/bookkeeping-entry-sets.ts">BookkeepingEntrySet</a></code>
- <code><a href="./src/resources/bookkeeping-entry-sets.ts">BookkeepingEntrySetListResponse</a></code>

Methods:

- <code title="post /bookkeeping_entry_sets">client.bookkeepingEntrySets.<a href="./src/resources/bookkeeping-entry-sets.ts">create</a>({ ...params }) -> BookkeepingEntrySet</code>
- <code title="get /bookkeeping_entry_sets/{bookkeeping_entry_set_id}">client.bookkeepingEntrySets.<a href="./src/resources/bookkeeping-entry-sets.ts">retrieve</a>(bookkeepingEntrySetID) -> BookkeepingEntrySet</code>
- <code title="get /bookkeeping_entry_sets">client.bookkeepingEntrySets.<a href="./src/resources/bookkeeping-entry-sets.ts">list</a>({ ...params }) -> BookkeepingEntrySetListResponse</code>

# CardDisputes

Types:

- <code><a href="./src/resources/card-disputes.ts">CardDispute</a></code>
- <code><a href="./src/resources/card-disputes.ts">CardDisputeFileAttachment</a></code>
- <code><a href="./src/resources/card-disputes.ts">CardDisputeListResponse</a></code>

Methods:

- <code title="post /card_disputes">client.cardDisputes.<a href="./src/resources/card-disputes.ts">create</a>({ ...params }) -> CardDispute</code>
- <code title="get /card_disputes/{card_dispute_id}">client.cardDisputes.<a href="./src/resources/card-disputes.ts">retrieve</a>(cardDisputeID) -> CardDispute</code>
- <code title="get /card_disputes">client.cardDisputes.<a href="./src/resources/card-disputes.ts">list</a>({ ...params }) -> CardDisputeListResponse</code>
- <code title="post /card_disputes/{card_dispute_id}/submit_user_submission">client.cardDisputes.<a href="./src/resources/card-disputes.ts">submitUserSubmission</a>(cardDisputeID, { ...params }) -> CardDispute</code>
- <code title="post /card_disputes/{card_dispute_id}/withdraw">client.cardDisputes.<a href="./src/resources/card-disputes.ts">withdraw</a>(cardDisputeID, { ...params }) -> CardDispute</code>

# CardPayments

Types:

- <code><a href="./src/resources/card-payments.ts">CardPayment</a></code>
- <code><a href="./src/resources/card-payments.ts">CardPaymentListResponse</a></code>

Methods:

- <code title="get /card_payments/{card_payment_id}">client.cardPayments.<a href="./src/resources/card-payments.ts">retrieve</a>(cardPaymentID) -> CardPayment</code>
- <code title="get /card_payments">client.cardPayments.<a href="./src/resources/card-payments.ts">list</a>({ ...params }) -> CardPaymentListResponse</code>

# CardPurchaseSupplements

Types:

- <code><a href="./src/resources/card-purchase-supplements.ts">CardPurchaseSupplement</a></code>
- <code><a href="./src/resources/card-purchase-supplements.ts">CardPurchaseSupplementListResponse</a></code>

Methods:

- <code title="get /card_purchase_supplements/{card_purchase_supplement_id}">client.cardPurchaseSupplements.<a href="./src/resources/card-purchase-supplements.ts">retrieve</a>(cardPurchaseSupplementID) -> CardPurchaseSupplement</code>
- <code title="get /card_purchase_supplements">client.cardPurchaseSupplements.<a href="./src/resources/card-purchase-supplements.ts">list</a>({ ...params }) -> CardPurchaseSupplementListResponse</code>

# CardPushTransfers

Types:

- <code><a href="./src/resources/card-push-transfers.ts">CardPushTransfer</a></code>
- <code><a href="./src/resources/card-push-transfers.ts">CardPushTransferListResponse</a></code>

Methods:

- <code title="post /card_push_transfers">client.cardPushTransfers.<a href="./src/resources/card-push-transfers.ts">create</a>({ ...params }) -> CardPushTransfer</code>
- <code title="get /card_push_transfers/{card_push_transfer_id}">client.cardPushTransfers.<a href="./src/resources/card-push-transfers.ts">retrieve</a>(cardPushTransferID) -> CardPushTransfer</code>
- <code title="get /card_push_transfers">client.cardPushTransfers.<a href="./src/resources/card-push-transfers.ts">list</a>({ ...params }) -> CardPushTransferListResponse</code>
- <code title="post /card_push_transfers/{card_push_transfer_id}/approve">client.cardPushTransfers.<a href="./src/resources/card-push-transfers.ts">approve</a>(cardPushTransferID) -> CardPushTransfer</code>
- <code title="post /card_push_transfers/{card_push_transfer_id}/cancel">client.cardPushTransfers.<a href="./src/resources/card-push-transfers.ts">cancel</a>(cardPushTransferID) -> CardPushTransfer</code>

# CardTokens

Types:

- <code><a href="./src/resources/card-tokens.ts">CardToken</a></code>
- <code><a href="./src/resources/card-tokens.ts">CardTokenListResponse</a></code>
- <code><a href="./src/resources/card-tokens.ts">CardTokenRetrieveCapabilitiesResponse</a></code>

Methods:

- <code title="get /card_tokens/{card_token_id}">client.cardTokens.<a href="./src/resources/card-tokens.ts">retrieve</a>(cardTokenID) -> CardToken</code>
- <code title="get /card_tokens">client.cardTokens.<a href="./src/resources/card-tokens.ts">list</a>({ ...params }) -> CardTokenListResponse</code>
- <code title="get /card_tokens/{card_token_id}/capabilities">client.cardTokens.<a href="./src/resources/card-tokens.ts">retrieveCapabilities</a>(cardTokenID) -> CardTokenRetrieveCapabilitiesResponse</code>

# CardValidations

Types:

- <code><a href="./src/resources/card-validations.ts">CardValidation</a></code>
- <code><a href="./src/resources/card-validations.ts">CardValidationListResponse</a></code>

Methods:

- <code title="post /card_validations">client.cardValidations.<a href="./src/resources/card-validations.ts">create</a>({ ...params }) -> CardValidation</code>
- <code title="get /card_validations/{card_validation_id}">client.cardValidations.<a href="./src/resources/card-validations.ts">retrieve</a>(cardValidationID) -> CardValidation</code>
- <code title="get /card_validations">client.cardValidations.<a href="./src/resources/card-validations.ts">list</a>({ ...params }) -> CardValidationListResponse</code>

# Cards

Types:

- <code><a href="./src/resources/cards.ts">Card</a></code>
- <code><a href="./src/resources/cards.ts">CardDetails</a></code>
- <code><a href="./src/resources/cards.ts">CardListResponse</a></code>
- <code><a href="./src/resources/cards.ts">CardCreateDetailsIframeResponse</a></code>

Methods:

- <code title="post /cards">client.cards.<a href="./src/resources/cards.ts">create</a>({ ...params }) -> Card</code>
- <code title="get /cards/{card_id}">client.cards.<a href="./src/resources/cards.ts">retrieve</a>(cardID) -> Card</code>
- <code title="patch /cards/{card_id}">client.cards.<a href="./src/resources/cards.ts">update</a>(cardID, { ...params }) -> Card</code>
- <code title="get /cards">client.cards.<a href="./src/resources/cards.ts">list</a>({ ...params }) -> CardListResponse</code>
- <code title="post /cards/{card_id}/create_details_iframe">client.cards.<a href="./src/resources/cards.ts">createDetailsIframe</a>(cardID, { ...params }) -> CardCreateDetailsIframeResponse</code>
- <code title="get /cards/{card_id}/details">client.cards.<a href="./src/resources/cards.ts">retrieveDetails</a>(cardID) -> CardDetails</code>
- <code title="post /cards/{card_id}/update_pin">client.cards.<a href="./src/resources/cards.ts">updatePin</a>(cardID, { ...params }) -> CardDetails</code>

# CheckDeposits

Types:

- <code><a href="./src/resources/check-deposits.ts">CheckDeposit</a></code>
- <code><a href="./src/resources/check-deposits.ts">CheckDepositListResponse</a></code>

Methods:

- <code title="post /check_deposits">client.checkDeposits.<a href="./src/resources/check-deposits.ts">create</a>({ ...params }) -> CheckDeposit</code>
- <code title="get /check_deposits/{check_deposit_id}">client.checkDeposits.<a href="./src/resources/check-deposits.ts">retrieve</a>(checkDepositID) -> CheckDeposit</code>
- <code title="get /check_deposits">client.checkDeposits.<a href="./src/resources/check-deposits.ts">list</a>({ ...params }) -> CheckDepositListResponse</code>

# CheckTransfers

Types:

- <code><a href="./src/resources/check-transfers.ts">CheckTransfer</a></code>
- <code><a href="./src/resources/check-transfers.ts">CheckTransferListResponse</a></code>

Methods:

- <code title="post /check_transfers">client.checkTransfers.<a href="./src/resources/check-transfers.ts">create</a>({ ...params }) -> CheckTransfer</code>
- <code title="get /check_transfers/{check_transfer_id}">client.checkTransfers.<a href="./src/resources/check-transfers.ts">retrieve</a>(checkTransferID) -> CheckTransfer</code>
- <code title="get /check_transfers">client.checkTransfers.<a href="./src/resources/check-transfers.ts">list</a>({ ...params }) -> CheckTransferListResponse</code>
- <code title="post /check_transfers/{check_transfer_id}/approve">client.checkTransfers.<a href="./src/resources/check-transfers.ts">approve</a>(checkTransferID) -> CheckTransfer</code>
- <code title="post /check_transfers/{check_transfer_id}/cancel">client.checkTransfers.<a href="./src/resources/check-transfers.ts">cancel</a>(checkTransferID) -> CheckTransfer</code>
- <code title="post /check_transfers/{check_transfer_id}/stop_payment">client.checkTransfers.<a href="./src/resources/check-transfers.ts">stopPayment</a>(checkTransferID, { ...params }) -> CheckTransfer</code>

# DeclinedTransactions

Types:

- <code><a href="./src/resources/declined-transactions.ts">DeclinedTransaction</a></code>
- <code><a href="./src/resources/declined-transactions.ts">DeclinedTransactionListResponse</a></code>

Methods:

- <code title="get /declined_transactions/{declined_transaction_id}">client.declinedTransactions.<a href="./src/resources/declined-transactions.ts">retrieve</a>(declinedTransactionID) -> DeclinedTransaction</code>
- <code title="get /declined_transactions">client.declinedTransactions.<a href="./src/resources/declined-transactions.ts">list</a>({ ...params }) -> DeclinedTransactionListResponse</code>

# DigitalCardProfiles

Types:

- <code><a href="./src/resources/digital-card-profiles.ts">DigitalCardProfile</a></code>
- <code><a href="./src/resources/digital-card-profiles.ts">DigitalCardProfileListResponse</a></code>

Methods:

- <code title="post /digital_card_profiles">client.digitalCardProfiles.<a href="./src/resources/digital-card-profiles.ts">create</a>({ ...params }) -> DigitalCardProfile</code>
- <code title="get /digital_card_profiles/{digital_card_profile_id}">client.digitalCardProfiles.<a href="./src/resources/digital-card-profiles.ts">retrieve</a>(digitalCardProfileID) -> DigitalCardProfile</code>
- <code title="get /digital_card_profiles">client.digitalCardProfiles.<a href="./src/resources/digital-card-profiles.ts">list</a>({ ...params }) -> DigitalCardProfileListResponse</code>
- <code title="post /digital_card_profiles/{digital_card_profile_id}/archive">client.digitalCardProfiles.<a href="./src/resources/digital-card-profiles.ts">archive</a>(digitalCardProfileID) -> DigitalCardProfile</code>
- <code title="post /digital_card_profiles/{digital_card_profile_id}/clone">client.digitalCardProfiles.<a href="./src/resources/digital-card-profiles.ts">clone</a>(digitalCardProfileID, { ...params }) -> DigitalCardProfile</code>

# DigitalWalletTokens

Types:

- <code><a href="./src/resources/digital-wallet-tokens.ts">DigitalWalletToken</a></code>
- <code><a href="./src/resources/digital-wallet-tokens.ts">DigitalWalletTokenListResponse</a></code>

Methods:

- <code title="get /digital_wallet_tokens/{digital_wallet_token_id}">client.digitalWalletTokens.<a href="./src/resources/digital-wallet-tokens.ts">retrieve</a>(digitalWalletTokenID) -> DigitalWalletToken</code>
- <code title="get /digital_wallet_tokens">client.digitalWalletTokens.<a href="./src/resources/digital-wallet-tokens.ts">list</a>({ ...params }) -> DigitalWalletTokenListResponse</code>

# Entities

Types:

- <code><a href="./src/resources/entities.ts">Entity</a></code>
- <code><a href="./src/resources/entities.ts">EntityListResponse</a></code>

Methods:

- <code title="post /entities">client.entities.<a href="./src/resources/entities.ts">create</a>({ ...params }) -> Entity</code>
- <code title="get /entities/{entity_id}">client.entities.<a href="./src/resources/entities.ts">retrieve</a>(entityID) -> Entity</code>
- <code title="patch /entities/{entity_id}">client.entities.<a href="./src/resources/entities.ts">update</a>(entityID, { ...params }) -> Entity</code>
- <code title="get /entities">client.entities.<a href="./src/resources/entities.ts">list</a>({ ...params }) -> EntityListResponse</code>
- <code title="post /entities/{entity_id}/archive">client.entities.<a href="./src/resources/entities.ts">archive</a>(entityID) -> Entity</code>

# EntityBeneficialOwners

Types:

- <code><a href="./src/resources/entity-beneficial-owners.ts">BeneficialOwner</a></code>
- <code><a href="./src/resources/entity-beneficial-owners.ts">EntityBeneficialOwnerListResponse</a></code>

Methods:

- <code title="post /entity_beneficial_owners">client.entityBeneficialOwners.<a href="./src/resources/entity-beneficial-owners.ts">create</a>({ ...params }) -> BeneficialOwner</code>
- <code title="get /entity_beneficial_owners/{entity_beneficial_owner_id}">client.entityBeneficialOwners.<a href="./src/resources/entity-beneficial-owners.ts">retrieve</a>(entityBeneficialOwnerID) -> BeneficialOwner</code>
- <code title="patch /entity_beneficial_owners/{entity_beneficial_owner_id}">client.entityBeneficialOwners.<a href="./src/resources/entity-beneficial-owners.ts">update</a>(entityBeneficialOwnerID, { ...params }) -> BeneficialOwner</code>
- <code title="get /entity_beneficial_owners">client.entityBeneficialOwners.<a href="./src/resources/entity-beneficial-owners.ts">list</a>({ ...params }) -> EntityBeneficialOwnerListResponse</code>
- <code title="post /entity_beneficial_owners/{entity_beneficial_owner_id}/archive">client.entityBeneficialOwners.<a href="./src/resources/entity-beneficial-owners.ts">archive</a>(entityBeneficialOwnerID) -> BeneficialOwner</code>

# EntitySupplementalDocuments

Types:

- <code><a href="./src/resources/entity-supplemental-documents.ts">EntitySupplementalDocument</a></code>
- <code><a href="./src/resources/entity-supplemental-documents.ts">EntitySupplementalDocumentListResponse</a></code>

Methods:

- <code title="post /entity_supplemental_documents">client.entitySupplementalDocuments.<a href="./src/resources/entity-supplemental-documents.ts">create</a>({ ...params }) -> EntitySupplementalDocument</code>
- <code title="get /entity_supplemental_documents">client.entitySupplementalDocuments.<a href="./src/resources/entity-supplemental-documents.ts">list</a>({ ...params }) -> EntitySupplementalDocumentListResponse</code>

# EventSubscriptions

Types:

- <code><a href="./src/resources/event-subscriptions.ts">EventSubscription</a></code>
- <code><a href="./src/resources/event-subscriptions.ts">EventSubscriptionListResponse</a></code>

Methods:

- <code title="post /event_subscriptions">client.eventSubscriptions.<a href="./src/resources/event-subscriptions.ts">create</a>({ ...params }) -> EventSubscription</code>
- <code title="get /event_subscriptions/{event_subscription_id}">client.eventSubscriptions.<a href="./src/resources/event-subscriptions.ts">retrieve</a>(eventSubscriptionID) -> EventSubscription</code>
- <code title="patch /event_subscriptions/{event_subscription_id}">client.eventSubscriptions.<a href="./src/resources/event-subscriptions.ts">update</a>(eventSubscriptionID, { ...params }) -> EventSubscription</code>
- <code title="get /event_subscriptions">client.eventSubscriptions.<a href="./src/resources/event-subscriptions.ts">list</a>({ ...params }) -> EventSubscriptionListResponse</code>

# Events

Types:

- <code><a href="./src/resources/events.ts">Event</a></code>
- <code><a href="./src/resources/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /events/{event_id}">client.events.<a href="./src/resources/events.ts">retrieve</a>(eventID) -> Event</code>
- <code title="get /events">client.events.<a href="./src/resources/events.ts">list</a>({ ...params }) -> EventListResponse</code>

# Exports

Types:

- <code><a href="./src/resources/exports.ts">Export</a></code>
- <code><a href="./src/resources/exports.ts">ExportListResponse</a></code>

Methods:

- <code title="post /exports">client.exports.<a href="./src/resources/exports.ts">create</a>({ ...params }) -> Export</code>
- <code title="get /exports/{export_id}">client.exports.<a href="./src/resources/exports.ts">retrieve</a>(exportID) -> Export</code>
- <code title="get /exports">client.exports.<a href="./src/resources/exports.ts">list</a>({ ...params }) -> ExportListResponse</code>

# ExternalAccounts

Types:

- <code><a href="./src/resources/external-accounts.ts">ExternalAccount</a></code>
- <code><a href="./src/resources/external-accounts.ts">ExternalAccountListResponse</a></code>

Methods:

- <code title="post /external_accounts">client.externalAccounts.<a href="./src/resources/external-accounts.ts">create</a>({ ...params }) -> ExternalAccount</code>
- <code title="get /external_accounts/{external_account_id}">client.externalAccounts.<a href="./src/resources/external-accounts.ts">retrieve</a>(externalAccountID) -> ExternalAccount</code>
- <code title="patch /external_accounts/{external_account_id}">client.externalAccounts.<a href="./src/resources/external-accounts.ts">update</a>(externalAccountID, { ...params }) -> ExternalAccount</code>
- <code title="get /external_accounts">client.externalAccounts.<a href="./src/resources/external-accounts.ts">list</a>({ ...params }) -> ExternalAccountListResponse</code>

# FednowTransfers

Types:

- <code><a href="./src/resources/fednow-transfers.ts">FednowTransfer</a></code>
- <code><a href="./src/resources/fednow-transfers.ts">FednowTransferListResponse</a></code>

Methods:

- <code title="post /fednow_transfers">client.fednowTransfers.<a href="./src/resources/fednow-transfers.ts">create</a>({ ...params }) -> FednowTransfer</code>
- <code title="get /fednow_transfers/{fednow_transfer_id}">client.fednowTransfers.<a href="./src/resources/fednow-transfers.ts">retrieve</a>(fednowTransferID) -> FednowTransfer</code>
- <code title="get /fednow_transfers">client.fednowTransfers.<a href="./src/resources/fednow-transfers.ts">list</a>({ ...params }) -> FednowTransferListResponse</code>
- <code title="post /fednow_transfers/{fednow_transfer_id}/approve">client.fednowTransfers.<a href="./src/resources/fednow-transfers.ts">approve</a>(fednowTransferID) -> FednowTransfer</code>
- <code title="post /fednow_transfers/{fednow_transfer_id}/cancel">client.fednowTransfers.<a href="./src/resources/fednow-transfers.ts">cancel</a>(fednowTransferID) -> FednowTransfer</code>

# FileLinks

Types:

- <code><a href="./src/resources/file-links.ts">FileLinkCreateResponse</a></code>

Methods:

- <code title="post /file_links">client.fileLinks.<a href="./src/resources/file-links.ts">create</a>({ ...params }) -> FileLinkCreateResponse</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">File</a></code>
- <code><a href="./src/resources/files.ts">FileListResponse</a></code>

Methods:

- <code title="post /files">client.files.<a href="./src/resources/files.ts">create</a>({ ...params }) -> File</code>
- <code title="get /files/{file_id}">client.files.<a href="./src/resources/files.ts">retrieve</a>(fileID) -> File</code>
- <code title="get /files">client.files.<a href="./src/resources/files.ts">list</a>({ ...params }) -> FileListResponse</code>

# Groups

Types:

- <code><a href="./src/resources/groups.ts">GroupRetrieveCurrentResponse</a></code>

Methods:

- <code title="get /groups/current">client.groups.<a href="./src/resources/groups.ts">retrieveCurrent</a>() -> GroupRetrieveCurrentResponse</code>

# InboundACHTransfers

Types:

- <code><a href="./src/resources/inbound-ach-transfers.ts">InboundACHTransfer</a></code>
- <code><a href="./src/resources/inbound-ach-transfers.ts">InboundACHTransferListResponse</a></code>

Methods:

- <code title="get /inbound_ach_transfers/{inbound_ach_transfer_id}">client.inboundACHTransfers.<a href="./src/resources/inbound-ach-transfers.ts">retrieve</a>(inboundACHTransferID) -> InboundACHTransfer</code>
- <code title="get /inbound_ach_transfers">client.inboundACHTransfers.<a href="./src/resources/inbound-ach-transfers.ts">list</a>({ ...params }) -> InboundACHTransferListResponse</code>
- <code title="post /inbound_ach_transfers/{inbound_ach_transfer_id}/create_notification_of_change">client.inboundACHTransfers.<a href="./src/resources/inbound-ach-transfers.ts">createNotificationOfChange</a>(inboundACHTransferID, { ...params }) -> InboundACHTransfer</code>
- <code title="post /inbound_ach_transfers/{inbound_ach_transfer_id}/decline">client.inboundACHTransfers.<a href="./src/resources/inbound-ach-transfers.ts">decline</a>(inboundACHTransferID, { ...params }) -> InboundACHTransfer</code>
- <code title="post /inbound_ach_transfers/{inbound_ach_transfer_id}/transfer_return">client.inboundACHTransfers.<a href="./src/resources/inbound-ach-transfers.ts">return</a>(inboundACHTransferID, { ...params }) -> InboundACHTransfer</code>

# InboundCheckDeposits

Types:

- <code><a href="./src/resources/inbound-check-deposits.ts">InboundCheckDeposit</a></code>
- <code><a href="./src/resources/inbound-check-deposits.ts">InboundCheckDepositListResponse</a></code>

Methods:

- <code title="get /inbound_check_deposits/{inbound_check_deposit_id}">client.inboundCheckDeposits.<a href="./src/resources/inbound-check-deposits.ts">retrieve</a>(inboundCheckDepositID) -> InboundCheckDeposit</code>
- <code title="get /inbound_check_deposits">client.inboundCheckDeposits.<a href="./src/resources/inbound-check-deposits.ts">list</a>({ ...params }) -> InboundCheckDepositListResponse</code>
- <code title="post /inbound_check_deposits/{inbound_check_deposit_id}/decline">client.inboundCheckDeposits.<a href="./src/resources/inbound-check-deposits.ts">decline</a>(inboundCheckDepositID) -> InboundCheckDeposit</code>
- <code title="post /inbound_check_deposits/{inbound_check_deposit_id}/return">client.inboundCheckDeposits.<a href="./src/resources/inbound-check-deposits.ts">return</a>(inboundCheckDepositID, { ...params }) -> InboundCheckDeposit</code>

# InboundFednowTransfers

Types:

- <code><a href="./src/resources/inbound-fednow-transfers.ts">InboundFednowTransfer</a></code>
- <code><a href="./src/resources/inbound-fednow-transfers.ts">InboundFednowTransferListResponse</a></code>

Methods:

- <code title="get /inbound_fednow_transfers/{inbound_fednow_transfer_id}">client.inboundFednowTransfers.<a href="./src/resources/inbound-fednow-transfers.ts">retrieve</a>(inboundFednowTransferID) -> InboundFednowTransfer</code>
- <code title="get /inbound_fednow_transfers">client.inboundFednowTransfers.<a href="./src/resources/inbound-fednow-transfers.ts">list</a>({ ...params }) -> InboundFednowTransferListResponse</code>

# InboundMailItems

Types:

- <code><a href="./src/resources/inbound-mail-items.ts">InboundMailItem</a></code>
- <code><a href="./src/resources/inbound-mail-items.ts">InboundMailItemListResponse</a></code>

Methods:

- <code title="get /inbound_mail_items/{inbound_mail_item_id}">client.inboundMailItems.<a href="./src/resources/inbound-mail-items.ts">retrieve</a>(inboundMailItemID) -> InboundMailItem</code>
- <code title="get /inbound_mail_items">client.inboundMailItems.<a href="./src/resources/inbound-mail-items.ts">list</a>({ ...params }) -> InboundMailItemListResponse</code>
- <code title="post /inbound_mail_items/{inbound_mail_item_id}/action">client.inboundMailItems.<a href="./src/resources/inbound-mail-items.ts">action</a>(inboundMailItemID, { ...params }) -> InboundMailItem</code>

# InboundRealTimePaymentsTransfers

Types:

- <code><a href="./src/resources/inbound-real-time-payments-transfers.ts">InboundRealTimePaymentTransfer</a></code>
- <code><a href="./src/resources/inbound-real-time-payments-transfers.ts">InboundRealTimePaymentsTransferListResponse</a></code>

Methods:

- <code title="get /inbound_real_time_payments_transfers/{inbound_real_time_payments_transfer_id}">client.inboundRealTimePaymentsTransfers.<a href="./src/resources/inbound-real-time-payments-transfers.ts">retrieve</a>(inboundRealTimePaymentsTransferID) -> InboundRealTimePaymentTransfer</code>
- <code title="get /inbound_real_time_payments_transfers">client.inboundRealTimePaymentsTransfers.<a href="./src/resources/inbound-real-time-payments-transfers.ts">list</a>({ ...params }) -> InboundRealTimePaymentsTransferListResponse</code>

# InboundWireDrawdownRequests

Types:

- <code><a href="./src/resources/inbound-wire-drawdown-requests.ts">InboundWireDrawdownRequest</a></code>
- <code><a href="./src/resources/inbound-wire-drawdown-requests.ts">InboundWireDrawdownRequestListResponse</a></code>

Methods:

- <code title="get /inbound_wire_drawdown_requests/{inbound_wire_drawdown_request_id}">client.inboundWireDrawdownRequests.<a href="./src/resources/inbound-wire-drawdown-requests.ts">retrieve</a>(inboundWireDrawdownRequestID) -> InboundWireDrawdownRequest</code>
- <code title="get /inbound_wire_drawdown_requests">client.inboundWireDrawdownRequests.<a href="./src/resources/inbound-wire-drawdown-requests.ts">list</a>({ ...params }) -> InboundWireDrawdownRequestListResponse</code>

# InboundWireTransfers

Types:

- <code><a href="./src/resources/inbound-wire-transfers.ts">InboundWireTransfer</a></code>
- <code><a href="./src/resources/inbound-wire-transfers.ts">InboundWireTransferListResponse</a></code>

Methods:

- <code title="get /inbound_wire_transfers/{inbound_wire_transfer_id}">client.inboundWireTransfers.<a href="./src/resources/inbound-wire-transfers.ts">retrieve</a>(inboundWireTransferID) -> InboundWireTransfer</code>
- <code title="get /inbound_wire_transfers">client.inboundWireTransfers.<a href="./src/resources/inbound-wire-transfers.ts">list</a>({ ...params }) -> InboundWireTransferListResponse</code>
- <code title="post /inbound_wire_transfers/{inbound_wire_transfer_id}/reverse">client.inboundWireTransfers.<a href="./src/resources/inbound-wire-transfers.ts">reverse</a>(inboundWireTransferID, { ...params }) -> InboundWireTransfer</code>

# IntrafiAccountEnrollments

Types:

- <code><a href="./src/resources/intrafi-account-enrollments.ts">IntrafiAccountEnrollment</a></code>
- <code><a href="./src/resources/intrafi-account-enrollments.ts">IntrafiAccountEnrollmentListResponse</a></code>

Methods:

- <code title="post /intrafi_account_enrollments">client.intrafiAccountEnrollments.<a href="./src/resources/intrafi-account-enrollments.ts">create</a>({ ...params }) -> IntrafiAccountEnrollment</code>
- <code title="get /intrafi_account_enrollments/{intrafi_account_enrollment_id}">client.intrafiAccountEnrollments.<a href="./src/resources/intrafi-account-enrollments.ts">retrieve</a>(intrafiAccountEnrollmentID) -> IntrafiAccountEnrollment</code>
- <code title="get /intrafi_account_enrollments">client.intrafiAccountEnrollments.<a href="./src/resources/intrafi-account-enrollments.ts">list</a>({ ...params }) -> IntrafiAccountEnrollmentListResponse</code>
- <code title="post /intrafi_account_enrollments/{intrafi_account_enrollment_id}/unenroll">client.intrafiAccountEnrollments.<a href="./src/resources/intrafi-account-enrollments.ts">unenroll</a>(intrafiAccountEnrollmentID) -> IntrafiAccountEnrollment</code>

# IntrafiExclusions

Types:

- <code><a href="./src/resources/intrafi-exclusions.ts">IntrafiExclusion</a></code>
- <code><a href="./src/resources/intrafi-exclusions.ts">IntrafiExclusionListResponse</a></code>

Methods:

- <code title="post /intrafi_exclusions">client.intrafiExclusions.<a href="./src/resources/intrafi-exclusions.ts">create</a>({ ...params }) -> IntrafiExclusion</code>
- <code title="get /intrafi_exclusions/{intrafi_exclusion_id}">client.intrafiExclusions.<a href="./src/resources/intrafi-exclusions.ts">retrieve</a>(intrafiExclusionID) -> IntrafiExclusion</code>
- <code title="get /intrafi_exclusions">client.intrafiExclusions.<a href="./src/resources/intrafi-exclusions.ts">list</a>({ ...params }) -> IntrafiExclusionListResponse</code>
- <code title="post /intrafi_exclusions/{intrafi_exclusion_id}/archive">client.intrafiExclusions.<a href="./src/resources/intrafi-exclusions.ts">archive</a>(intrafiExclusionID) -> IntrafiExclusion</code>

# Lockboxes

Types:

- <code><a href="./src/resources/lockboxes.ts">Lockbox</a></code>
- <code><a href="./src/resources/lockboxes.ts">LockboxListResponse</a></code>

Methods:

- <code title="post /lockboxes">client.lockboxes.<a href="./src/resources/lockboxes.ts">create</a>({ ...params }) -> Lockbox</code>
- <code title="get /lockboxes/{lockbox_id}">client.lockboxes.<a href="./src/resources/lockboxes.ts">retrieve</a>(lockboxID) -> Lockbox</code>
- <code title="patch /lockboxes/{lockbox_id}">client.lockboxes.<a href="./src/resources/lockboxes.ts">update</a>(lockboxID, { ...params }) -> Lockbox</code>
- <code title="get /lockboxes">client.lockboxes.<a href="./src/resources/lockboxes.ts">list</a>({ ...params }) -> LockboxListResponse</code>

# OAuth

Types:

- <code><a href="./src/resources/oauth.ts">OAuthCreateTokenResponse</a></code>

Methods:

- <code title="post /oauth/tokens">client.oauth.<a href="./src/resources/oauth.ts">createToken</a>({ ...params }) -> OAuthCreateTokenResponse</code>

# OAuthApplications

Types:

- <code><a href="./src/resources/oauth-applications.ts">OAuthApplication</a></code>
- <code><a href="./src/resources/oauth-applications.ts">OAuthApplicationListResponse</a></code>

Methods:

- <code title="get /oauth_applications/{oauth_application_id}">client.oauthApplications.<a href="./src/resources/oauth-applications.ts">retrieve</a>(oauthApplicationID) -> OAuthApplication</code>
- <code title="get /oauth_applications">client.oauthApplications.<a href="./src/resources/oauth-applications.ts">list</a>({ ...params }) -> OAuthApplicationListResponse</code>

# OAuthConnections

Types:

- <code><a href="./src/resources/oauth-connections.ts">OAuthConnection</a></code>
- <code><a href="./src/resources/oauth-connections.ts">OAuthConnectionListResponse</a></code>

Methods:

- <code title="get /oauth_connections/{oauth_connection_id}">client.oauthConnections.<a href="./src/resources/oauth-connections.ts">retrieve</a>(oauthConnectionID) -> OAuthConnection</code>
- <code title="get /oauth_connections">client.oauthConnections.<a href="./src/resources/oauth-connections.ts">list</a>({ ...params }) -> OAuthConnectionListResponse</code>

# PendingTransactions

Types:

- <code><a href="./src/resources/pending-transactions.ts">CardAuthorization</a></code>
- <code><a href="./src/resources/pending-transactions.ts">InboundWireTransferReversal</a></code>
- <code><a href="./src/resources/pending-transactions.ts">PendingTransaction</a></code>
- <code><a href="./src/resources/pending-transactions.ts">PendingTransactionListResponse</a></code>

Methods:

- <code title="post /pending_transactions">client.pendingTransactions.<a href="./src/resources/pending-transactions.ts">create</a>({ ...params }) -> PendingTransaction</code>
- <code title="get /pending_transactions/{pending_transaction_id}">client.pendingTransactions.<a href="./src/resources/pending-transactions.ts">retrieve</a>(pendingTransactionID) -> PendingTransaction</code>
- <code title="get /pending_transactions">client.pendingTransactions.<a href="./src/resources/pending-transactions.ts">list</a>({ ...params }) -> PendingTransactionListResponse</code>
- <code title="post /pending_transactions/{pending_transaction_id}/release">client.pendingTransactions.<a href="./src/resources/pending-transactions.ts">release</a>(pendingTransactionID) -> PendingTransaction</code>

# PhysicalCardProfiles

Types:

- <code><a href="./src/resources/physical-card-profiles.ts">PhysicalCardProfile</a></code>
- <code><a href="./src/resources/physical-card-profiles.ts">PhysicalCardProfileListResponse</a></code>

Methods:

- <code title="post /physical_card_profiles">client.physicalCardProfiles.<a href="./src/resources/physical-card-profiles.ts">create</a>({ ...params }) -> PhysicalCardProfile</code>
- <code title="get /physical_card_profiles/{physical_card_profile_id}">client.physicalCardProfiles.<a href="./src/resources/physical-card-profiles.ts">retrieve</a>(physicalCardProfileID) -> PhysicalCardProfile</code>
- <code title="get /physical_card_profiles">client.physicalCardProfiles.<a href="./src/resources/physical-card-profiles.ts">list</a>({ ...params }) -> PhysicalCardProfileListResponse</code>
- <code title="post /physical_card_profiles/{physical_card_profile_id}/archive">client.physicalCardProfiles.<a href="./src/resources/physical-card-profiles.ts">archive</a>(physicalCardProfileID) -> PhysicalCardProfile</code>
- <code title="post /physical_card_profiles/{physical_card_profile_id}/clone">client.physicalCardProfiles.<a href="./src/resources/physical-card-profiles.ts">clone</a>(physicalCardProfileID, { ...params }) -> PhysicalCardProfile</code>

# PhysicalCards

Types:

- <code><a href="./src/resources/physical-cards.ts">PhysicalCard</a></code>
- <code><a href="./src/resources/physical-cards.ts">PhysicalCardListResponse</a></code>

Methods:

- <code title="post /physical_cards">client.physicalCards.<a href="./src/resources/physical-cards.ts">create</a>({ ...params }) -> PhysicalCard</code>
- <code title="get /physical_cards/{physical_card_id}">client.physicalCards.<a href="./src/resources/physical-cards.ts">retrieve</a>(physicalCardID) -> PhysicalCard</code>
- <code title="patch /physical_cards/{physical_card_id}">client.physicalCards.<a href="./src/resources/physical-cards.ts">update</a>(physicalCardID, { ...params }) -> PhysicalCard</code>
- <code title="get /physical_cards">client.physicalCards.<a href="./src/resources/physical-cards.ts">list</a>({ ...params }) -> PhysicalCardListResponse</code>

# Programs

Types:

- <code><a href="./src/resources/programs.ts">Program</a></code>
- <code><a href="./src/resources/programs.ts">ProgramListResponse</a></code>

Methods:

- <code title="get /programs/{program_id}">client.programs.<a href="./src/resources/programs.ts">retrieve</a>(programID) -> Program</code>
- <code title="get /programs">client.programs.<a href="./src/resources/programs.ts">list</a>({ ...params }) -> ProgramListResponse</code>

# RealTimeDecisions

Types:

- <code><a href="./src/resources/real-time-decisions.ts">RealTimeDecision</a></code>

Methods:

- <code title="get /real_time_decisions/{real_time_decision_id}">client.realTimeDecisions.<a href="./src/resources/real-time-decisions.ts">retrieve</a>(realTimeDecisionID) -> RealTimeDecision</code>
- <code title="post /real_time_decisions/{real_time_decision_id}/action">client.realTimeDecisions.<a href="./src/resources/real-time-decisions.ts">action</a>(realTimeDecisionID, { ...params }) -> RealTimeDecision</code>

# RealTimePaymentsTransfers

Types:

- <code><a href="./src/resources/real-time-payments-transfers.ts">Transfer</a></code>
- <code><a href="./src/resources/real-time-payments-transfers.ts">RealTimePaymentsTransferListResponse</a></code>

Methods:

- <code title="post /real_time_payments_transfers">client.realTimePaymentsTransfers.<a href="./src/resources/real-time-payments-transfers.ts">create</a>({ ...params }) -> Transfer</code>
- <code title="get /real_time_payments_transfers/{real_time_payments_transfer_id}">client.realTimePaymentsTransfers.<a href="./src/resources/real-time-payments-transfers.ts">retrieve</a>(realTimePaymentsTransferID) -> Transfer</code>
- <code title="get /real_time_payments_transfers">client.realTimePaymentsTransfers.<a href="./src/resources/real-time-payments-transfers.ts">list</a>({ ...params }) -> RealTimePaymentsTransferListResponse</code>
- <code title="post /real_time_payments_transfers/{real_time_payments_transfer_id}/approve">client.realTimePaymentsTransfers.<a href="./src/resources/real-time-payments-transfers.ts">approve</a>(realTimePaymentsTransferID) -> Transfer</code>
- <code title="post /real_time_payments_transfers/{real_time_payments_transfer_id}/cancel">client.realTimePaymentsTransfers.<a href="./src/resources/real-time-payments-transfers.ts">cancel</a>(realTimePaymentsTransferID) -> Transfer</code>

# RoutingNumbers

Types:

- <code><a href="./src/resources/routing-numbers.ts">RoutingNumberListResponse</a></code>

Methods:

- <code title="get /routing_numbers">client.routingNumbers.<a href="./src/resources/routing-numbers.ts">list</a>({ ...params }) -> RoutingNumberListResponse</code>

# Simulations

Types:

- <code><a href="./src/resources/simulations/simulations.ts">CardFinancial</a></code>
- <code><a href="./src/resources/simulations/simulations.ts">CardRefund</a></code>
- <code><a href="./src/resources/simulations/simulations.ts">CardSettlement</a></code>
- <code><a href="./src/resources/simulations/simulations.ts">Transaction</a></code>
- <code><a href="./src/resources/simulations/simulations.ts">SimulationCreateCardAuthorizationResponse</a></code>
- <code><a href="./src/resources/simulations/simulations.ts">SimulationCreateDigitalWalletTokenRequestResponse</a></code>

Methods:

- <code title="post /simulations/card_fuel_confirmations">client.simulations.<a href="./src/resources/simulations/simulations.ts">confirmFuelAuthorization</a>({ ...params }) -> CardPayment</code>
- <code title="post /simulations/account_statements">client.simulations.<a href="./src/resources/simulations/simulations.ts">createAccountStatement</a>({ ...params }) -> AccountStatement</code>
- <code title="post /simulations/card_authorizations">client.simulations.<a href="./src/resources/simulations/simulations.ts">createCardAuthorization</a>({ ...params }) -> SimulationCreateCardAuthorizationResponse</code>
- <code title="post /simulations/card_balance_inquiries">client.simulations.<a href="./src/resources/simulations/simulations.ts">createCardBalanceInquiry</a>({ ...params }) -> CardPayment</code>
- <code title="post /simulations/card_tokens">client.simulations.<a href="./src/resources/simulations/simulations.ts">createCardToken</a>({ ...params }) -> CardToken</code>
- <code title="post /simulations/digital_wallet_token_requests">client.simulations.<a href="./src/resources/simulations/simulations.ts">createDigitalWalletTokenRequest</a>({ ...params }) -> SimulationCreateDigitalWalletTokenRequestResponse</code>
- <code title="post /simulations/inbound_ach_transfers">client.simulations.<a href="./src/resources/simulations/simulations.ts">createInboundACHTransfer</a>({ ...params }) -> InboundACHTransfer</code>
- <code title="post /simulations/inbound_fednow_transfers">client.simulations.<a href="./src/resources/simulations/simulations.ts">createInboundFednowTransfer</a>({ ...params }) -> InboundFednowTransfer</code>
- <code title="post /simulations/inbound_mail_items">client.simulations.<a href="./src/resources/simulations/simulations.ts">createInboundMailItem</a>({ ...params }) -> InboundMailItem</code>
- <code title="post /simulations/inbound_real_time_payments_transfers">client.simulations.<a href="./src/resources/simulations/simulations.ts">createInboundRealTimePaymentsTransfer</a>({ ...params }) -> InboundRealTimePaymentTransfer</code>
- <code title="post /simulations/inbound_wire_drawdown_requests">client.simulations.<a href="./src/resources/simulations/simulations.ts">createInboundWireDrawdownRequest</a>({ ...params }) -> InboundWireDrawdownRequest</code>
- <code title="post /simulations/inbound_wire_transfers">client.simulations.<a href="./src/resources/simulations/simulations.ts">createInboundWireTransfer</a>({ ...params }) -> InboundWireTransfer</code>
- <code title="post /simulations/interest_payments">client.simulations.<a href="./src/resources/simulations/simulations.ts">createInterestPayment</a>({ ...params }) -> Transaction</code>
- <code title="post /simulations/programs">client.simulations.<a href="./src/resources/simulations/simulations.ts">createProgram</a>({ ...params }) -> Program</code>
- <code title="post /simulations/card_authorization_expirations">client.simulations.<a href="./src/resources/simulations/simulations.ts">expireCardAuthorization</a>({ ...params }) -> CardPayment</code>
- <code title="post /simulations/exports">client.simulations.<a href="./src/resources/simulations/simulations.ts">generateTaxFormExport</a>({ ...params }) -> Export</code>
- <code title="post /simulations/card_increments">client.simulations.<a href="./src/resources/simulations/simulations.ts">incrementCardAuthorization</a>({ ...params }) -> CardPayment</code>
- <code title="post /simulations/card_refunds">client.simulations.<a href="./src/resources/simulations/simulations.ts">refundCardTransaction</a>({ ...params }) -> Transaction</code>
- <code title="post /simulations/card_reversals">client.simulations.<a href="./src/resources/simulations/simulations.ts">reverseCardAuthorization</a>({ ...params }) -> CardPayment</code>
- <code title="post /simulations/card_settlements">client.simulations.<a href="./src/resources/simulations/simulations.ts">settleCardAuthorization</a>({ ...params }) -> Transaction</code>

## AccountTransfers

Methods:

- <code title="post /simulations/account_transfers/{account_transfer_id}/complete">client.simulations.accountTransfers.<a href="./src/resources/simulations/account-transfers.ts">completeTransfer</a>(accountTransferID) -> AccountTransfer</code>

## ACHTransfers

Methods:

- <code title="post /simulations/ach_transfers/{ach_transfer_id}/acknowledge">client.simulations.achTransfers.<a href="./src/resources/simulations/ach-transfers.ts">acknowledge</a>(achTransferID) -> ACHTransfer</code>
- <code title="post /simulations/ach_transfers/{ach_transfer_id}/create_notification_of_change">client.simulations.achTransfers.<a href="./src/resources/simulations/ach-transfers.ts">createNotificationOfChange</a>(achTransferID, { ...params }) -> ACHTransfer</code>
- <code title="post /simulations/ach_transfers/{ach_transfer_id}/return">client.simulations.achTransfers.<a href="./src/resources/simulations/ach-transfers.ts">return</a>(achTransferID, { ...params }) -> ACHTransfer</code>
- <code title="post /simulations/ach_transfers/{ach_transfer_id}/settle">client.simulations.achTransfers.<a href="./src/resources/simulations/ach-transfers.ts">settle</a>(achTransferID, { ...params }) -> ACHTransfer</code>
- <code title="post /simulations/ach_transfers/{ach_transfer_id}/submit">client.simulations.achTransfers.<a href="./src/resources/simulations/ach-transfers.ts">submit</a>(achTransferID) -> ACHTransfer</code>

## CardAuthentications

Methods:

- <code title="post /simulations/card_authentications">client.simulations.cardAuthentications.<a href="./src/resources/simulations/card-authentications.ts">create</a>({ ...params }) -> CardPayment</code>
- <code title="post /simulations/card_authentications/{card_payment_id}/challenges">client.simulations.cardAuthentications.<a href="./src/resources/simulations/card-authentications.ts">createChallenge</a>(cardPaymentID) -> CardPayment</code>
- <code title="post /simulations/card_authentications/{card_payment_id}/challenge_attempts">client.simulations.cardAuthentications.<a href="./src/resources/simulations/card-authentications.ts">createChallengeAttempt</a>(cardPaymentID, { ...params }) -> CardPayment</code>

## CardDisputes

Methods:

- <code title="post /simulations/card_disputes/{card_dispute_id}/action">client.simulations.cardDisputes.<a href="./src/resources/simulations/card-disputes.ts">advanceState</a>(cardDisputeID, { ...params }) -> CardDispute</code>

## CheckDeposits

Methods:

- <code title="post /simulations/check_deposits/{check_deposit_id}/adjustment">client.simulations.checkDeposits.<a href="./src/resources/simulations/check-deposits.ts">adjust</a>(checkDepositID, { ...params }) -> CheckDeposit</code>
- <code title="post /simulations/check_deposits/{check_deposit_id}/reject">client.simulations.checkDeposits.<a href="./src/resources/simulations/check-deposits.ts">reject</a>(checkDepositID) -> CheckDeposit</code>
- <code title="post /simulations/check_deposits/{check_deposit_id}/return">client.simulations.checkDeposits.<a href="./src/resources/simulations/check-deposits.ts">return</a>(checkDepositID) -> CheckDeposit</code>
- <code title="post /simulations/check_deposits/{check_deposit_id}/submit">client.simulations.checkDeposits.<a href="./src/resources/simulations/check-deposits.ts">submit</a>(checkDepositID, { ...params }) -> CheckDeposit</code>

## CheckTransfers

Methods:

- <code title="post /simulations/check_transfers/{check_transfer_id}/mail">client.simulations.checkTransfers.<a href="./src/resources/simulations/check-transfers.ts">mail</a>(checkTransferID) -> CheckTransfer</code>

## InboundCheckDeposits

Methods:

- <code title="post /simulations/inbound_check_deposits">client.simulations.inboundCheckDeposits.<a href="./src/resources/simulations/inbound-check-deposits.ts">create</a>({ ...params }) -> InboundCheckDeposit</code>
- <code title="post /simulations/inbound_check_deposits/{inbound_check_deposit_id}/adjustment">client.simulations.inboundCheckDeposits.<a href="./src/resources/simulations/inbound-check-deposits.ts">adjust</a>(inboundCheckDepositID, { ...params }) -> InboundCheckDeposit</code>

## PendingTransactions

Methods:

- <code title="post /simulations/pending_transactions/{pending_transaction_id}/release_inbound_funds_hold">client.simulations.pendingTransactions.<a href="./src/resources/simulations/pending-transactions.ts">releaseInboundFundsHold</a>(pendingTransactionID) -> PendingTransaction</code>

## PhysicalCards

Methods:

- <code title="post /simulations/physical_cards/{physical_card_id}/advance_shipment">client.simulations.physicalCards.<a href="./src/resources/simulations/physical-cards.ts">advanceShipment</a>(physicalCardID, { ...params }) -> PhysicalCard</code>
- <code title="post /simulations/physical_cards/{physical_card_id}/tracking_updates">client.simulations.physicalCards.<a href="./src/resources/simulations/physical-cards.ts">createTrackingUpdate</a>(physicalCardID, { ...params }) -> PhysicalCard</code>

## RealTimePaymentsTransfers

Methods:

- <code title="post /simulations/real_time_payments_transfers/{real_time_payments_transfer_id}/complete">client.simulations.realTimePaymentsTransfers.<a href="./src/resources/simulations/real-time-payments-transfers.ts">complete</a>(realTimePaymentsTransferID, { ...params }) -> Transfer</code>

## WireDrawdownRequests

Types:

- <code><a href="./src/resources/simulations/wire-drawdown-requests.ts">WireDrawdownRequest</a></code>

Methods:

- <code title="post /simulations/wire_drawdown_requests/{wire_drawdown_request_id}/refuse">client.simulations.wireDrawdownRequests.<a href="./src/resources/simulations/wire-drawdown-requests.ts">refuse</a>(wireDrawdownRequestID) -> WireDrawdownRequest</code>
- <code title="post /simulations/wire_drawdown_requests/{wire_drawdown_request_id}/submit">client.simulations.wireDrawdownRequests.<a href="./src/resources/simulations/wire-drawdown-requests.ts">submit</a>(wireDrawdownRequestID) -> WireDrawdownRequest</code>

## WireTransfers

Types:

- <code><a href="./src/resources/simulations/wire-transfers.ts">WireTransfer</a></code>

Methods:

- <code title="post /simulations/wire_transfers/{wire_transfer_id}/reverse">client.simulations.wireTransfers.<a href="./src/resources/simulations/wire-transfers.ts">reverse</a>(wireTransferID) -> WireTransfer</code>
- <code title="post /simulations/wire_transfers/{wire_transfer_id}/submit">client.simulations.wireTransfers.<a href="./src/resources/simulations/wire-transfers.ts">submit</a>(wireTransferID) -> WireTransfer</code>

# SwiftTransfers

Types:

- <code><a href="./src/resources/swift-transfers.ts">SwiftTransfer</a></code>
- <code><a href="./src/resources/swift-transfers.ts">SwiftTransferListResponse</a></code>

Methods:

- <code title="post /swift_transfers">client.swiftTransfers.<a href="./src/resources/swift-transfers.ts">create</a>({ ...params }) -> SwiftTransfer</code>
- <code title="get /swift_transfers/{swift_transfer_id}">client.swiftTransfers.<a href="./src/resources/swift-transfers.ts">retrieve</a>(swiftTransferID) -> SwiftTransfer</code>
- <code title="get /swift_transfers">client.swiftTransfers.<a href="./src/resources/swift-transfers.ts">list</a>({ ...params }) -> SwiftTransferListResponse</code>
- <code title="post /swift_transfers/{swift_transfer_id}/approve">client.swiftTransfers.<a href="./src/resources/swift-transfers.ts">approve</a>(swiftTransferID) -> SwiftTransfer</code>
- <code title="post /swift_transfers/{swift_transfer_id}/cancel">client.swiftTransfers.<a href="./src/resources/swift-transfers.ts">cancel</a>(swiftTransferID) -> SwiftTransfer</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="get /transactions/{transaction_id}">client.transactions.<a href="./src/resources/transactions.ts">retrieve</a>(transactionID) -> Transaction</code>
- <code title="get /transactions">client.transactions.<a href="./src/resources/transactions.ts">list</a>({ ...params }) -> TransactionListResponse</code>

# WireDrawdownRequests

Types:

- <code><a href="./src/resources/wire-drawdown-requests.ts">WireDrawdownRequestListResponse</a></code>

Methods:

- <code title="post /wire_drawdown_requests">client.wireDrawdownRequests.<a href="./src/resources/wire-drawdown-requests.ts">create</a>({ ...params }) -> WireDrawdownRequest</code>
- <code title="get /wire_drawdown_requests/{wire_drawdown_request_id}">client.wireDrawdownRequests.<a href="./src/resources/wire-drawdown-requests.ts">retrieve</a>(wireDrawdownRequestID) -> WireDrawdownRequest</code>
- <code title="get /wire_drawdown_requests">client.wireDrawdownRequests.<a href="./src/resources/wire-drawdown-requests.ts">list</a>({ ...params }) -> WireDrawdownRequestListResponse</code>

# WireTransfers

Types:

- <code><a href="./src/resources/wire-transfers.ts">WireTransferListResponse</a></code>

Methods:

- <code title="post /wire_transfers">client.wireTransfers.<a href="./src/resources/wire-transfers.ts">create</a>({ ...params }) -> WireTransfer</code>
- <code title="get /wire_transfers/{wire_transfer_id}">client.wireTransfers.<a href="./src/resources/wire-transfers.ts">retrieve</a>(wireTransferID) -> WireTransfer</code>
- <code title="get /wire_transfers">client.wireTransfers.<a href="./src/resources/wire-transfers.ts">list</a>({ ...params }) -> WireTransferListResponse</code>
- <code title="post /wire_transfers/{wire_transfer_id}/approve">client.wireTransfers.<a href="./src/resources/wire-transfers.ts">approve</a>(wireTransferID) -> WireTransfer</code>
- <code title="post /wire_transfers/{wire_transfer_id}/cancel">client.wireTransfers.<a href="./src/resources/wire-transfers.ts">cancel</a>(wireTransferID) -> WireTransfer</code>
