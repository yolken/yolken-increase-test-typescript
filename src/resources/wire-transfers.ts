// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SimulationsWireTransfersAPI from './simulations/wire-transfers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class WireTransfers extends APIResource {
  /**
   * Create a Wire Transfer
   *
   * @example
   * ```ts
   * const wireTransfer = await client.wireTransfers.create({
   *   account_id: 'account_in71c4amph0vgo2qllky',
   *   amount: 100,
   *   creditor: { name: 'Ian Crease' },
   *   remittance: { category: 'unstructured' },
   * });
   * ```
   */
  create(
    body: WireTransferCreateParams,
    options?: RequestOptions,
  ): APIPromise<SimulationsWireTransfersAPI.WireTransfer> {
    return this._client.post('/wire_transfers', { body, ...options });
  }

  /**
   * Retrieve a Wire Transfer
   *
   * @example
   * ```ts
   * const wireTransfer = await client.wireTransfers.retrieve(
   *   'wire_transfer_5akynk7dqsq25qwk9q2u',
   * );
   * ```
   */
  retrieve(
    wireTransferID: string,
    options?: RequestOptions,
  ): APIPromise<SimulationsWireTransfersAPI.WireTransfer> {
    return this._client.get(path`/wire_transfers/${wireTransferID}`, options);
  }

  /**
   * List Wire Transfers
   *
   * @example
   * ```ts
   * const wireTransfers = await client.wireTransfers.list();
   * ```
   */
  list(
    query: WireTransferListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WireTransferListResponse> {
    return this._client.get('/wire_transfers', { query, ...options });
  }

  /**
   * Approve a Wire Transfer
   *
   * @example
   * ```ts
   * const wireTransfer = await client.wireTransfers.approve(
   *   'wire_transfer_5akynk7dqsq25qwk9q2u',
   * );
   * ```
   */
  approve(
    wireTransferID: string,
    options?: RequestOptions,
  ): APIPromise<SimulationsWireTransfersAPI.WireTransfer> {
    return this._client.post(path`/wire_transfers/${wireTransferID}/approve`, options);
  }

  /**
   * Cancel a pending Wire Transfer
   *
   * @example
   * ```ts
   * const wireTransfer = await client.wireTransfers.cancel(
   *   'wire_transfer_5akynk7dqsq25qwk9q2u',
   * );
   * ```
   */
  cancel(
    wireTransferID: string,
    options?: RequestOptions,
  ): APIPromise<SimulationsWireTransfersAPI.WireTransfer> {
    return this._client.post(path`/wire_transfers/${wireTransferID}/cancel`, options);
  }
}

/**
 * A list of Wire Transfer objects.
 */
export interface WireTransferListResponse {
  /**
   * The contents of the list.
   */
  data: Array<SimulationsWireTransfersAPI.WireTransfer>;

  /**
   * A pointer to a place in the list.
   */
  next_cursor: string | null;

  [k: string]: unknown;
}

export interface WireTransferCreateParams {
  /**
   * The identifier for the account that will send the transfer.
   */
  account_id: string;

  /**
   * The transfer amount in USD cents.
   */
  amount: number;

  /**
   * The person or business that is receiving the funds from the transfer.
   */
  creditor: WireTransferCreateParams.Creditor;

  /**
   * Additional remittance information related to the wire transfer.
   */
  remittance: WireTransferCreateParams.Remittance;

  /**
   * The account number for the destination account.
   */
  account_number?: string;

  /**
   * The person or business whose funds are being transferred. This is only necessary
   * if you're transferring from a commingled account. Otherwise, we'll use the
   * associated entity's details.
   */
  debtor?: WireTransferCreateParams.Debtor;

  /**
   * The ID of an External Account to initiate a transfer to. If this parameter is
   * provided, `account_number` and `routing_number` must be absent.
   */
  external_account_id?: string;

  /**
   * The ID of an Inbound Wire Drawdown Request in response to which this transfer is
   * being sent.
   */
  inbound_wire_drawdown_request_id?: string;

  /**
   * Whether the transfer requires explicit approval via the dashboard or API.
   */
  require_approval?: boolean;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the
   * destination account.
   */
  routing_number?: string;

  /**
   * The ID of an Account Number that will be passed to the wire's recipient
   */
  source_account_number_id?: string;

  [k: string]: unknown;
}

export namespace WireTransferCreateParams {
  /**
   * The person or business that is receiving the funds from the transfer.
   */
  export interface Creditor {
    /**
     * The person or business's name.
     */
    name: string;

    /**
     * The person or business's address.
     */
    address?: Creditor.Address;
  }

  export namespace Creditor {
    /**
     * The person or business's address.
     */
    export interface Address {
      /**
       * Unstructured address lines.
       */
      unstructured: Address.Unstructured;
    }

    export namespace Address {
      /**
       * Unstructured address lines.
       */
      export interface Unstructured {
        /**
         * The address line 1.
         */
        line1: string;

        /**
         * The address line 2.
         */
        line2?: string;

        /**
         * The address line 3.
         */
        line3?: string;
      }
    }
  }

  /**
   * Additional remittance information related to the wire transfer.
   */
  export interface Remittance {
    /**
     * The type of remittance information being passed.
     *
     * - `unstructured` - The wire transfer contains unstructured remittance
     *   information.
     * - `tax` - The wire transfer is for tax payment purposes to the Internal Revenue
     *   Service (IRS).
     */
    category: 'unstructured' | 'tax';

    /**
     * Internal Revenue Service (IRS) tax repayment information. Required if `category`
     * is equal to `tax`.
     */
    tax?: Remittance.Tax;

    /**
     * Unstructured remittance information. Required if `category` is equal to
     * `unstructured`.
     */
    unstructured?: Remittance.Unstructured;
  }

  export namespace Remittance {
    /**
     * Internal Revenue Service (IRS) tax repayment information. Required if `category`
     * is equal to `tax`.
     */
    export interface Tax {
      /**
       * The month and year the tax payment is for, in YYYY-MM-DD format. The day is
       * ignored.
       */
      date: string;

      /**
       * The 9-digit Tax Identification Number (TIN) or Employer Identification Number
       * (EIN).
       */
      identification_number: string;

      /**
       * The 5-character tax type code.
       */
      type_code: string;
    }

    /**
     * Unstructured remittance information. Required if `category` is equal to
     * `unstructured`.
     */
    export interface Unstructured {
      /**
       * The information.
       */
      message: string;
    }
  }

  /**
   * The person or business whose funds are being transferred. This is only necessary
   * if you're transferring from a commingled account. Otherwise, we'll use the
   * associated entity's details.
   */
  export interface Debtor {
    /**
     * The person or business's name.
     */
    name: string;

    /**
     * The person or business's address.
     */
    address?: Debtor.Address;
  }

  export namespace Debtor {
    /**
     * The person or business's address.
     */
    export interface Address {
      /**
       * Unstructured address lines.
       */
      unstructured: Address.Unstructured;
    }

    export namespace Address {
      /**
       * Unstructured address lines.
       */
      export interface Unstructured {
        /**
         * The address line 1.
         */
        line1: string;

        /**
         * The address line 2.
         */
        line2?: string;

        /**
         * The address line 3.
         */
        line3?: string;
      }
    }
  }
}

export interface WireTransferListParams {
  /**
   * Filter Wire Transfers to those belonging to the specified Account.
   */
  account_id?: string;

  created_at?: WireTransferListParams.CreatedAt;

  /**
   * Return the page of entries after this one.
   */
  cursor?: string;

  /**
   * Filter Wire Transfers to those made to the specified External Account.
   */
  external_account_id?: string;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  /**
   * Limit the size of the list that is returned. The default (and maximum) is 100
   * objects.
   */
  limit?: number;

  status?: WireTransferListParams.Status;
}

export namespace WireTransferListParams {
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
     * Return results whose value is in the provided list. For GET requests, this
     * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<
      | 'pending_approval'
      | 'canceled'
      | 'pending_reviewing'
      | 'rejected'
      | 'requires_attention'
      | 'pending_creating'
      | 'reversed'
      | 'submitted'
      | 'complete'
    >;
  }
}

export declare namespace WireTransfers {
  export {
    type WireTransferListResponse as WireTransferListResponse,
    type WireTransferCreateParams as WireTransferCreateParams,
    type WireTransferListParams as WireTransferListParams,
  };
}
