// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { YolkenIncreaseTest } from '../client';

export abstract class APIResource {
  protected _client: YolkenIncreaseTest;

  constructor(client: YolkenIncreaseTest) {
    this._client = client;
  }
}
