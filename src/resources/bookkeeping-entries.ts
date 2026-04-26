// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BookkeepingEntries extends APIResource {
  /**
   * Retrieve a Bookkeeping Entry
   *
   * @example
   * ```ts
   * const bookkeepingEntry =
   *   await client.bookkeepingEntries.retrieve(
   *     'bookkeeping_entry_ctjpajsj3ks2blx10375',
   *   );
   * ```
   */
  retrieve(bookkeepingEntryID: string, options?: RequestOptions): APIPromise<BookkeepingEntry> {
    return this._client.get(path`/bookkeeping_entries/${bookkeepingEntryID}`, options);
  }

  /**
   * List Bookkeeping Entries
   *
   * @example
   * ```ts
   * const bookkeepingEntries =
   *   await client.bookkeepingEntries.list();
   * ```
   */
  list(query: BookkeepingEntryListParams | null | undefined = {}, options?: RequestOptions): APIPromise<BookkeepingEntryListResponse> {
    return this._client.get('/bookkeeping_entries', { query, ...options });
  }
}

/**
 * Entries are T-account entries recording debits and credits. Your compliance
 * setup might require annotating money movements using this API. Learn more in our
 * [guide to Bookkeeping](https://increase.com/documentation/bookkeeping#bookkeeping).
 */
export interface BookkeepingEntry {
  /**
   * The entry identifier.
   */
  id: string;

  /**
   * The identifier for the Account the Entry belongs to.
   */
  account_id: string;

  /**
   * The Entry amount in the minor unit of its currency. For dollars, for example,
   * this is cents.
   */
  amount: number;

  /**
   * When the entry set was created.
   */
  created_at: string;

  /**
   * The identifier for the Entry Set the Entry belongs to.
   */
  entry_set_id: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `bookkeeping_entry`.
   */
  type: 'bookkeeping_entry';
}

/**
 * A list of Bookkeeping Entry objects.
 */
export interface BookkeepingEntryListResponse {
  /**
   * The contents of the list.
   */
  data: Array<BookkeepingEntry>;

  /**
   * A pointer to a place in the list.
   */
  next_cursor: string | null;

[k: string]: unknown
}

export interface BookkeepingEntryListParams {
  /**
   * The identifier for the Bookkeeping Account to filter by.
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
}

export declare namespace BookkeepingEntries {
  export {
    type BookkeepingEntry as BookkeepingEntry,
    type BookkeepingEntryListResponse as BookkeepingEntryListResponse,
    type BookkeepingEntryListParams as BookkeepingEntryListParams
  };
}
