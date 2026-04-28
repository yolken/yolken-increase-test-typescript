// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Programs extends APIResource {
  /**
   * Retrieve a Program
   *
   * @example
   * ```ts
   * const program = await client.programs.retrieve(
   *   'program_i2v2os4mwza1oetokh9i',
   * );
   * ```
   */
  retrieve(programID: string, options?: RequestOptions): APIPromise<Program> {
    return this._client.get(path`/programs/${programID}`, options);
  }

  /**
   * List Programs
   *
   * @example
   * ```ts
   * const programs = await client.programs.list();
   * ```
   */
  list(
    query: ProgramListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProgramListResponse> {
    return this._client.get('/programs', { query, ...options });
  }
}

/**
 * Programs determine the compliance and commercial terms of Accounts. By default,
 * you have a Commercial Banking program for managing your own funds. If you are
 * lending or managing funds on behalf of your customers, or otherwise engaged in
 * regulated activity, we will work together to create additional Programs for you.
 */
export interface Program {
  /**
   * The Program identifier.
   */
  id: string;

  /**
   * The Bank the Program is with.
   *
   * - `core_bank` - Core Bank
   * - `first_internet_bank` - First Internet Bank of Indiana
   * - `grasshopper_bank` - Grasshopper Bank
   */
  bank: 'core_bank' | 'first_internet_bank' | 'grasshopper_bank';

  /**
   * The Program billing account.
   */
  billing_account_id: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Program
   * was created.
   */
  created_at: string;

  /**
   * The default configuration for digital cards attached to this Program.
   */
  default_digital_card_profile_id: string | null;

  /**
   * The Interest Rate currently being earned on the accounts in this program, as a
   * string containing a decimal number. For example, a 1% interest rate would be
   * represented as "0.01".
   */
  interest_rate: string;

  /**
   * The lending details for the program.
   */
  lending: Program.Lending | null;

  /**
   * The name of the Program.
   */
  name: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `program`.
   */
  type: 'program';

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Program
   * was last updated.
   */
  updated_at: string;
}

export namespace Program {
  /**
   * The lending details for the program.
   */
  export interface Lending {
    /**
     * The maximum extendable credit of the program.
     */
    maximum_extendable_credit: number;
  }
}

/**
 * A list of Program objects.
 */
export interface ProgramListResponse {
  /**
   * The contents of the list.
   */
  data: Array<Program>;

  /**
   * A pointer to a place in the list.
   */
  next_cursor: string | null;

  [k: string]: unknown;
}

export interface ProgramListParams {
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

export declare namespace Programs {
  export {
    type Program as Program,
    type ProgramListResponse as ProgramListResponse,
    type ProgramListParams as ProgramListParams,
  };
}
