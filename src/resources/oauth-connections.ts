// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class OAuthConnections extends APIResource {
  /**
   * Retrieve an OAuth Connection
   *
   * @example
   * ```ts
   * const oauthConnection =
   *   await client.oauthConnections.retrieve(
   *     'connection_dauknoksyr4wilz4e6my',
   *   );
   * ```
   */
  retrieve(oauthConnectionID: string, options?: RequestOptions): APIPromise<OAuthConnection> {
    return this._client.get(path`/oauth_connections/${oauthConnectionID}`, options);
  }

  /**
   * List OAuth Connections
   *
   * @example
   * ```ts
   * const oauthConnections =
   *   await client.oauthConnections.list();
   * ```
   */
  list(
    query: OAuthConnectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OAuthConnectionListResponse> {
    return this._client.get('/oauth_connections', { query, ...options });
  }
}

/**
 * When a user authorizes your OAuth application, an OAuth Connection object is
 * created. Learn more about OAuth
 * [here](https://increase.com/documentation/oauth).
 */
export interface OAuthConnection {
  /**
   * The OAuth Connection's identifier.
   */
  id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp when the OAuth
   * Connection was created.
   */
  created_at: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp when the OAuth
   * Connection was deleted.
   */
  deleted_at: string | null;

  /**
   * The identifier of the Group that has authorized your OAuth application.
   */
  group_id: string;

  /**
   * The identifier of the OAuth application this connection is for.
   */
  oauth_application_id: string;

  /**
   * Whether the connection is active.
   *
   * - `active` - The OAuth connection is active.
   * - `inactive` - The OAuth connection is permanently deactivated.
   */
  status: 'active' | 'inactive';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `oauth_connection`.
   */
  type: 'oauth_connection';
}

/**
 * A list of OAuth Connection objects.
 */
export interface OAuthConnectionListResponse {
  /**
   * The contents of the list.
   */
  data: Array<OAuthConnection>;

  /**
   * A pointer to a place in the list.
   */
  next_cursor: string | null;

  [k: string]: unknown;
}

export interface OAuthConnectionListParams {
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
   * Filter results to only include OAuth Connections for a specific OAuth
   * Application.
   */
  oauth_application_id?: string;

  status?: OAuthConnectionListParams.Status;
}

export namespace OAuthConnectionListParams {
  export interface Status {
    /**
     * Filter to OAuth Connections by their status. By default, return only the
     * `active` ones. For GET requests, this should be encoded as a comma-delimited
     * string, such as `?in=one,two,three`.
     */
    in?: Array<'active' | 'inactive'>;
  }
}

export declare namespace OAuthConnections {
  export {
    type OAuthConnection as OAuthConnection,
    type OAuthConnectionListResponse as OAuthConnectionListResponse,
    type OAuthConnectionListParams as OAuthConnectionListParams,
  };
}
