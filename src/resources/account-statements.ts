// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AccountStatements extends APIResource {
  /**
   * Retrieve an Account Statement
   *
   * @example
   * ```ts
   * const accountStatement =
   *   await client.accountStatements.retrieve(
   *     'account_statement_lkc03a4skm2k7f38vj15',
   *   );
   * ```
   */
  retrieve(accountStatementID: string, options?: RequestOptions): APIPromise<AccountStatement> {
    return this._client.get(path`/account_statements/${accountStatementID}`, options);
  }

  /**
   * List Account Statements
   *
   * @example
   * ```ts
   * const accountStatements =
   *   await client.accountStatements.list();
   * ```
   */
  list(
    query: AccountStatementListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountStatementListResponse> {
    return this._client.get('/account_statements', { query, ...options });
  }
}

/**
 * Account Statements are generated monthly for every active Account. You can
 * access the statement's data via the API or retrieve a PDF with its details via
 * its associated File.
 */
export interface AccountStatement {
  /**
   * The Account Statement identifier.
   */
  id: string;

  /**
   * The identifier for the Account this Account Statement belongs to.
   */
  account_id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Account
   * Statement was created.
   */
  created_at: string;

  /**
   * The Account's balance at the end of its statement period.
   */
  ending_balance: number;

  /**
   * The identifier of the File containing a PDF of the statement.
   */
  file_id: string;

  /**
   * The loan balances.
   */
  loan: AccountStatement.Loan | null;

  /**
   * The Account's balance at the start of its statement period.
   */
  starting_balance: number;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time representing the end
   * of the period the Account Statement covers.
   */
  statement_period_end: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time representing the
   * start of the period the Account Statement covers.
   */
  statement_period_start: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `account_statement`.
   */
  type: 'account_statement';
}

export namespace AccountStatement {
  /**
   * The loan balances.
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
 * A list of Account Statement objects.
 */
export interface AccountStatementListResponse {
  /**
   * The contents of the list.
   */
  data: Array<AccountStatement>;

  /**
   * A pointer to a place in the list.
   */
  next_cursor: string | null;

  [k: string]: unknown;
}

export interface AccountStatementListParams {
  /**
   * Filter Account Statements to those belonging to the specified Account.
   */
  account_id?: string;

  /**
   * Return the page of entries after this one.
   */
  cursor?: string;

  /**
   * Limit the size of the list that is returned. The default (and maximum) is 100
   * objects.
   */
  limit?: number;

  statement_period_start?: AccountStatementListParams.StatementPeriodStart;
}

export namespace AccountStatementListParams {
  export interface StatementPeriodStart {
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
}

export declare namespace AccountStatements {
  export {
    type AccountStatement as AccountStatement,
    type AccountStatementListResponse as AccountStatementListResponse,
    type AccountStatementListParams as AccountStatementListParams,
  };
}
