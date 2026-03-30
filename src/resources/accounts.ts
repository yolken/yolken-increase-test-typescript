// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Create an Account
   *
   * @example
   * ```ts
   * const account = await client.accounts.create({
   *   name: 'New Account!',
   * });
   * ```
   */
  create(body: AccountCreateParams, options?: RequestOptions): APIPromise<Account> {
    return this._client.post('/accounts', { body, ...options });
  }

  /**
   * Retrieve an Account
   *
   * @example
   * ```ts
   * const account = await client.accounts.retrieve(
   *   'account_in71c4amph0vgo2qllky',
   * );
   * ```
   */
  retrieve(accountID: string, options?: RequestOptions): APIPromise<Account> {
    return this._client.get(path`/accounts/${accountID}`, options);
  }

  /**
   * Update an Account
   *
   * @example
   * ```ts
   * const account = await client.accounts.update(
   *   'account_in71c4amph0vgo2qllky',
   * );
   * ```
   */
  update(accountID: string, body: AccountUpdateParams, options?: RequestOptions): APIPromise<Account> {
    return this._client.patch(path`/accounts/${accountID}`, { body, ...options });
  }

  /**
   * List Accounts
   *
   * @example
   * ```ts
   * const accounts = await client.accounts.list();
   * ```
   */
  list(
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountListResponse> {
    return this._client.get('/accounts', { query, ...options });
  }

  /**
   * Close an Account
   *
   * @example
   * ```ts
   * const account = await client.accounts.close(
   *   'account_in71c4amph0vgo2qllky',
   * );
   * ```
   */
  close(accountID: string, options?: RequestOptions): APIPromise<Account> {
    return this._client.post(path`/accounts/${accountID}/close`, options);
  }

  /**
   * Retrieve the current and available balances for an account in minor units of the
   * account's currency. Learn more about [account balances](/documentation/balance).
   *
   * @example
   * ```ts
   * const response = await client.accounts.retrieveBalance(
   *   'account_in71c4amph0vgo2qllky',
   * );
   * ```
   */
  retrieveBalance(
    accountID: string,
    query: AccountRetrieveBalanceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountRetrieveBalanceResponse> {
    return this._client.get(path`/accounts/${accountID}/balance`, { query, ...options });
  }

  /**
   * Returns the IntraFi balance for the given account. IntraFi may sweep funds to
   * multiple banks. This endpoint will include both the total balance and the amount
   * swept to each institution.
   *
   * @example
   * ```ts
   * const response =
   *   await client.accounts.retrieveIntrafiBalance(
   *     'account_in71c4amph0vgo2qllky',
   *   );
   * ```
   */
  retrieveIntrafiBalance(
    accountID: string,
    options?: RequestOptions,
  ): APIPromise<AccountRetrieveIntrafiBalanceResponse> {
    return this._client.get(path`/accounts/${accountID}/intrafi_balance`, options);
  }
}

/**
 * Accounts are your bank accounts with Increase. They store money, receive
 * transfers, and send payments. They earn interest and have depository insurance.
 */
export interface Account {
  /**
   * The Account identifier.
   */
  id: string;

  /**
   * The account revenue rate currently being earned on the account, as a string
   * containing a decimal number. For example, a 1% account revenue rate would be
   * represented as "0.01". Account revenue is a type of non-interest income accrued
   * on the account.
   */
  account_revenue_rate: string | null;

  /**
   * The bank the Account is with.
   *
   * - `core_bank` - Core Bank
   * - `first_internet_bank` - First Internet Bank of Indiana
   * - `grasshopper_bank` - Grasshopper Bank
   */
  bank: 'core_bank' | 'first_internet_bank' | 'grasshopper_bank';

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Account
   * was closed.
   */
  closed_at: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Account
   * was created.
   */
  created_at: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Account
   * currency.
   *
   * - `USD` - US Dollar (USD)
   */
  currency: 'USD';

  /**
   * The identifier for the Entity the Account belongs to.
   */
  entity_id: string;

  /**
   * Whether the Account is funded by a loan or by deposits.
   *
   * - `loan` - An account funded by a loan. Before opening a loan account, contact
   *   support@increase.com to set up a loan program.
   * - `deposits` - An account funded by deposits.
   */
  funding: 'loan' | 'deposits';

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The identifier of an Entity that, while not owning the Account, is associated
   * with its activity.
   */
  informational_entity_id: string | null;

  /**
   * The interest accrued but not yet paid, expressed as a string containing a
   * floating-point value.
   */
  interest_accrued: string;

  /**
   * The latest [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which
   * interest was accrued.
   */
  interest_accrued_at: string | null;

  /**
   * The interest rate currently being earned on the account, as a string containing
   * a decimal number. For example, a 1% interest rate would be represented as
   * "0.01".
   */
  interest_rate: string;

  /**
   * The Account's loan-related information, if the Account is a loan account.
   */
  loan: Account.Loan | null;

  /**
   * The name you choose for the Account.
   */
  name: string;

  /**
   * The identifier of the Program determining the compliance and commercial terms of
   * this Account.
   */
  program_id: string;

  /**
   * The status of the Account.
   *
   * - `closed` - Closed Accounts on which no new activity can occur.
   * - `open` - Open Accounts that are ready to use.
   */
  status: 'closed' | 'open';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `account`.
   */
  type: 'account';

  [k: string]: unknown;
}

export namespace Account {
  /**
   * The Account's loan-related information, if the Account is a loan account.
   */
  export interface Loan {
    /**
     * The maximum amount of money that can be borrowed on the Account.
     */
    credit_limit: number;

    /**
     * The number of days after the statement date that the Account can be past due
     * before being considered delinquent.
     */
    grace_period_days: number;

    /**
     * The date on which the loan matures.
     */
    maturity_date: string | null;

    /**
     * The day of the month on which the loan statement is generated.
     */
    statement_day_of_month: number;

    /**
     * The type of payment for the loan.
     *
     * - `balance` - The borrower must pay the full balance of the loan at the end of
     *   the statement period.
     * - `interest_until_maturity` - The borrower must pay the accrued interest at the
     *   end of the statement period.
     */
    statement_payment_type: 'balance' | 'interest_until_maturity';
  }
}

/**
 * A list of Account objects.
 */
export interface AccountListResponse {
  /**
   * The contents of the list.
   */
  data: Array<Account>;

  /**
   * A pointer to a place in the list.
   */
  next_cursor: string | null;

  [k: string]: unknown;
}

/**
 * Represents a request to lookup the balance of an Account at a given point in
 * time.
 */
export interface AccountRetrieveBalanceResponse {
  /**
   * The identifier for the account for which the balance was queried.
   */
  account_id: string;

  /**
   * The Account's available balance, representing the current balance less any open
   * Pending Transactions on the Account.
   */
  available_balance: number;

  /**
   * The Account's current balance, representing the sum of all posted Transactions
   * on the Account.
   */
  current_balance: number;

  /**
   * The loan balances for the Account.
   */
  loan: AccountRetrieveBalanceResponse.Loan | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `balance_lookup`.
   */
  type: 'balance_lookup';
}

export namespace AccountRetrieveBalanceResponse {
  /**
   * The loan balances for the Account.
   */
  export interface Loan {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the loan
     * payment is due.
     */
    due_at: string | null;

    /**
     * The total amount due on the loan.
     */
    due_balance: number;

    /**
     * The amount past due on the loan.
     */
    past_due_balance: number;
  }
}

/**
 * When using IntraFi, each account's balance over the standard FDIC insurance
 * amount is swept to various other institutions. Funds are rebalanced across banks
 * as needed once per business day.
 */
export interface AccountRetrieveIntrafiBalanceResponse {
  /**
   * Each entry represents a balance held at a different bank. IntraFi separates the
   * total balance across many participating banks in the network.
   */
  balances: Array<AccountRetrieveIntrafiBalanceResponse.Balance>;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the account
   * currency.
   *
   * - `USD` - US Dollar (USD)
   */
  currency: 'USD';

  /**
   * The date this balance reflects.
   */
  effective_date: string;

  /**
   * The total balance, in minor units of `currency`. Increase reports this balance
   * to IntraFi daily.
   */
  total_balance: number;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `intrafi_balance`.
   */
  type: 'intrafi_balance';

  [k: string]: unknown;
}

export namespace AccountRetrieveIntrafiBalanceResponse {
  export interface Balance {
    /**
     * The balance, in minor units of `currency`, held with this bank.
     */
    balance: number;

    /**
     * The name of the bank holding these funds.
     */
    bank: string;

    /**
     * The primary location of the bank.
     */
    bank_location: Balance.BankLocation | null;

    /**
     * The Federal Deposit Insurance Corporation (FDIC) certificate number of the bank.
     * Because many banks have the same or similar names, this can be used to uniquely
     * identify the institution.
     */
    fdic_certificate_number: string;

    [k: string]: unknown;
  }

  export namespace Balance {
    /**
     * The primary location of the bank.
     */
    export interface BankLocation {
      /**
       * The bank's city.
       */
      city: string;

      /**
       * The bank's state.
       */
      state: string;
    }
  }
}

export interface AccountCreateParams {
  /**
   * The name you choose for the Account.
   */
  name: string;

  /**
   * The identifier for the Entity that will own the Account.
   */
  entity_id?: string;

  /**
   * Whether the Account is funded by a loan or by deposits.
   *
   * - `loan` - An account funded by a loan. Before opening a loan account, contact
   *   support@increase.com to set up a loan program.
   * - `deposits` - An account funded by deposits.
   */
  funding?: 'loan' | 'deposits';

  /**
   * The identifier of an Entity that, while not owning the Account, is associated
   * with its activity. This is generally the beneficiary of the funds.
   */
  informational_entity_id?: string;

  /**
   * The loan details for the account.
   */
  loan?: AccountCreateParams.Loan;

  /**
   * The identifier for the Program that this Account falls under. Required if you
   * operate more than one Program.
   */
  program_id?: string;

  [k: string]: unknown;
}

export namespace AccountCreateParams {
  /**
   * The loan details for the account.
   */
  export interface Loan {
    /**
     * The maximum amount of money that can be drawn from the Account.
     */
    credit_limit: number;

    /**
     * The number of days after the statement date that the Account can be past due
     * before being considered delinquent.
     */
    grace_period_days: number;

    /**
     * The day of the month on which the loan statement is generated.
     */
    statement_day_of_month: number;

    /**
     * The type of statement payment for the account.
     *
     * - `balance` - The borrower must pay the full balance of the loan at the end of
     *   the statement period.
     * - `interest_until_maturity` - The borrower must pay the accrued interest at the
     *   end of the statement period.
     */
    statement_payment_type: 'balance' | 'interest_until_maturity';

    /**
     * The date on which the loan matures.
     */
    maturity_date?: string;
  }
}

export interface AccountUpdateParams {
  /**
   * The loan details for the account.
   */
  loan?: AccountUpdateParams.Loan;

  /**
   * The new name of the Account.
   */
  name?: string;

  [k: string]: unknown;
}

export namespace AccountUpdateParams {
  /**
   * The loan details for the account.
   */
  export interface Loan {
    /**
     * The maximum amount of money that can be drawn from the Account.
     */
    credit_limit: number;
  }
}

export interface AccountListParams {
  created_at?: AccountListParams.CreatedAt;

  /**
   * Return the page of entries after this one.
   */
  cursor?: string;

  /**
   * Filter Accounts for those belonging to the specified Entity.
   */
  entity_id?: string;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  /**
   * Filter Accounts for those belonging to the specified Entity as informational.
   */
  informational_entity_id?: string;

  /**
   * Limit the size of the list that is returned. The default (and maximum) is 100
   * objects.
   */
  limit?: number;

  /**
   * Filter Accounts for those in a specific Program.
   */
  program_id?: string;

  status?: AccountListParams.Status;
}

export namespace AccountListParams {
  export interface CreatedAt {
    /**
     * Return results after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * timestamp.
     */
    after?: string;

    /**
     * Return results before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * timestamp.
     */
    before?: string;

    /**
     * Return results on or after this
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
     */
    on_or_after?: string;

    /**
     * Return results on or before this
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
     */
    on_or_before?: string;
  }

  export interface Status {
    /**
     * Filter Accounts for those with the specified status. For GET requests, this
     * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<'closed' | 'open'>;
  }
}

export interface AccountRetrieveBalanceParams {
  /**
   * The moment to query the balance at. If not set, returns the current balances.
   */
  at_time?: string;
}

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountListResponse as AccountListResponse,
    type AccountRetrieveBalanceResponse as AccountRetrieveBalanceResponse,
    type AccountRetrieveIntrafiBalanceResponse as AccountRetrieveIntrafiBalanceResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountRetrieveBalanceParams as AccountRetrieveBalanceParams,
  };
}
