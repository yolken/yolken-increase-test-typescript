// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SimulationsAPI from './simulations/simulations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Transactions extends APIResource {
  /**
   * Retrieve a Transaction
   *
   * @example
   * ```ts
   * const transaction = await client.transactions.retrieve(
   *   'transaction_uyrp7fld2ium70oa7oi',
   * );
   * ```
   */
  retrieve(transactionID: string, options?: RequestOptions): APIPromise<SimulationsAPI.Transaction> {
    return this._client.get(path`/transactions/${transactionID}`, options);
  }

  /**
   * List Transactions
   *
   * @example
   * ```ts
   * const transactions = await client.transactions.list();
   * ```
   */
  list(query: TransactionListParams | null | undefined = {}, options?: RequestOptions): APIPromise<TransactionListResponse> {
    return this._client.get('/transactions', { query, ...options });
  }
}

/**
 * A list of Transaction objects.
 */
export interface TransactionListResponse {
  /**
   * The contents of the list.
   */
  data: Array<SimulationsAPI.Transaction>;

  /**
   * A pointer to a place in the list.
   */
  next_cursor: string | null;

[k: string]: unknown
}

export interface TransactionListParams {
  /**
   * Filter Transactions for those belonging to the specified Account.
   */
  account_id?: string;

  category?: TransactionListParams.Category;

  created_at?: TransactionListParams.CreatedAt;

  /**
   * Return the page of entries after this one.
   */
  cursor?: string;

  /**
   * Limit the size of the list that is returned. The default (and maximum) is 100
   * objects.
   */
  limit?: number;

  /**
   * Filter Transactions for those belonging to the specified route. This could be a
   * Card ID or an Account Number ID.
   */
  route_id?: string;
}

export namespace TransactionListParams {
  export interface Category {
    /**
     * Return results whose value is in the provided list. For GET requests, this
     * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<'account_transfer_intention' | 'ach_transfer_intention' | 'ach_transfer_rejection' | 'ach_transfer_return' | 'cashback_payment' | 'card_dispute_acceptance' | 'card_dispute_financial' | 'card_dispute_loss' | 'card_refund' | 'card_settlement' | 'card_financial' | 'card_revenue_payment' | 'check_deposit_acceptance' | 'check_deposit_return' | 'fednow_transfer_acknowledgement' | 'check_transfer_deposit' | 'fee_payment' | 'inbound_ach_transfer' | 'inbound_ach_transfer_return_intention' | 'inbound_check_deposit_return_intention' | 'inbound_check_adjustment' | 'inbound_fednow_transfer_confirmation' | 'inbound_real_time_payments_transfer_confirmation' | 'inbound_wire_reversal' | 'inbound_wire_transfer' | 'inbound_wire_transfer_reversal' | 'interest_payment' | 'internal_source' | 'real_time_payments_transfer_acknowledgement' | 'sample_funds' | 'wire_transfer_intention' | 'swift_transfer_intention' | 'swift_transfer_return' | 'card_push_transfer_acceptance' | 'account_revenue_payment' | 'blockchain_onramp_transfer_intention' | 'blockchain_offramp_transfer_settlement' | 'other'>;
  }

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
}

export declare namespace Transactions {
  export {
    type TransactionListResponse as TransactionListResponse,
    type TransactionListParams as TransactionListParams
  };
}
