// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SimulationsWireDrawdownRequestsAPI from './simulations/wire-drawdown-requests';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class WireDrawdownRequests extends APIResource {
  /**
   * Create a Wire Drawdown Request
   *
   * @example
   * ```ts
   * const wireDrawdownRequest =
   *   await client.wireDrawdownRequests.create({
   *     account_number_id:
   *       'account_number_v18nkfqm6afpsrvy82b2',
   *     amount: 10000,
   *     creditor_address: {
   *       city: 'New York',
   *       country: 'US',
   *       line1: '33 Liberty Street',
   *     },
   *     creditor_name: 'National Phonograph Company',
   *     debtor_address: {
   *       city: 'New York',
   *       country: 'US',
   *       line1: '33 Liberty Street',
   *     },
   *     debtor_name: 'Ian Crease',
   *     unstructured_remittance_information: 'Invoice 29582',
   *   });
   * ```
   */
  create(
    body: WireDrawdownRequestCreateParams,
    options?: RequestOptions,
  ): APIPromise<SimulationsWireDrawdownRequestsAPI.WireDrawdownRequest> {
    return this._client.post('/wire_drawdown_requests', { body, ...options });
  }

  /**
   * Retrieve a Wire Drawdown Request
   *
   * @example
   * ```ts
   * const wireDrawdownRequest =
   *   await client.wireDrawdownRequests.retrieve(
   *     'wire_drawdown_request_q6lmocus3glo0lr2bfv3',
   *   );
   * ```
   */
  retrieve(
    wireDrawdownRequestID: string,
    options?: RequestOptions,
  ): APIPromise<SimulationsWireDrawdownRequestsAPI.WireDrawdownRequest> {
    return this._client.get(path`/wire_drawdown_requests/${wireDrawdownRequestID}`, options);
  }

  /**
   * List Wire Drawdown Requests
   *
   * @example
   * ```ts
   * const wireDrawdownRequests =
   *   await client.wireDrawdownRequests.list();
   * ```
   */
  list(
    query: WireDrawdownRequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WireDrawdownRequestListResponse> {
    return this._client.get('/wire_drawdown_requests', { query, ...options });
  }
}

/**
 * A list of Wire Drawdown Request objects.
 */
export interface WireDrawdownRequestListResponse {
  /**
   * The contents of the list.
   */
  data: Array<SimulationsWireDrawdownRequestsAPI.WireDrawdownRequest>;

  /**
   * A pointer to a place in the list.
   */
  next_cursor: string | null;

  [k: string]: unknown;
}

export interface WireDrawdownRequestCreateParams {
  /**
   * The Account Number to which the debtor should send funds.
   */
  account_number_id: string;

  /**
   * The amount requested from the debtor, in USD cents.
   */
  amount: number;

  /**
   * The creditor's address.
   */
  creditor_address: WireDrawdownRequestCreateParams.CreditorAddress;

  /**
   * The creditor's name.
   */
  creditor_name: string;

  /**
   * The debtor's address.
   */
  debtor_address: WireDrawdownRequestCreateParams.DebtorAddress;

  /**
   * The debtor's name.
   */
  debtor_name: string;

  /**
   * Remittance information the debtor will see as part of the request.
   */
  unstructured_remittance_information: string;

  /**
   * Determines who bears the cost of the drawdown request. Defaults to `shared` if
   * not specified.
   *
   * - `shared` - Charges are shared between the debtor and creditor.
   * - `debtor` - Charges are borne by the debtor.
   * - `creditor` - Charges are borne by the creditor.
   * - `service_level` - Charges are determined by the service level.
   */
  charge_bearer?: 'shared' | 'debtor' | 'creditor' | 'service_level';

  /**
   * The debtor's account number.
   */
  debtor_account_number?: string;

  /**
   * The ID of an External Account to initiate a transfer to. If this parameter is
   * provided, `debtor_account_number` and `debtor_routing_number` must be absent.
   */
  debtor_external_account_id?: string;

  /**
   * The debtor's routing number.
   */
  debtor_routing_number?: string;

  /**
   * A free-form reference string set by the sender mirrored back in the subsequent
   * wire transfer.
   */
  end_to_end_identification?: string;

  [k: string]: unknown;
}

export namespace WireDrawdownRequestCreateParams {
  /**
   * The creditor's address.
   */
  export interface CreditorAddress {
    /**
     * The city, district, town, or village of the address.
     */
    city: string;

    /**
     * The two-letter
     * [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code for
     * the country of the address.
     */
    country: string;

    /**
     * The first line of the address. This is usually the street number and street.
     */
    line1: string;

    /**
     * The second line of the address. This might be the floor or room number.
     */
    line2?: string;

    /**
     * The ZIP code of the address.
     */
    postal_code?: string;

    /**
     * The address state.
     */
    state?: string;
  }

  /**
   * The debtor's address.
   */
  export interface DebtorAddress {
    /**
     * The city, district, town, or village of the address.
     */
    city: string;

    /**
     * The two-letter
     * [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code for
     * the country of the address.
     */
    country: string;

    /**
     * The first line of the address. This is usually the street number and street.
     */
    line1: string;

    /**
     * The second line of the address. This might be the floor or room number.
     */
    line2?: string;

    /**
     * The ZIP code of the address.
     */
    postal_code?: string;

    /**
     * The address state.
     */
    state?: string;
  }
}

export interface WireDrawdownRequestListParams {
  /**
   * Return the page of entries after this one.
   */
  cursor?: string;

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

  status?: WireDrawdownRequestListParams.Status;
}

export namespace WireDrawdownRequestListParams {
  export interface Status {
    /**
     * Filter Wire Drawdown Requests for those with the specified status. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<'pending_submission' | 'fulfilled' | 'pending_response' | 'refused'>;
  }
}

export declare namespace WireDrawdownRequests {
  export {
    type WireDrawdownRequestListResponse as WireDrawdownRequestListResponse,
    type WireDrawdownRequestCreateParams as WireDrawdownRequestCreateParams,
    type WireDrawdownRequestListParams as WireDrawdownRequestListParams,
  };
}
