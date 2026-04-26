// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import { stringifyQuery } from './internal/utils/query';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import { AccountNumber, AccountNumberCreateParams, AccountNumberListParams, AccountNumberListResponse, AccountNumberUpdateParams, AccountNumbers } from './resources/account-numbers';
import { AccountStatement, AccountStatementListParams, AccountStatementListResponse, AccountStatements } from './resources/account-statements';
import { AccountTransfer, AccountTransferCreateParams, AccountTransferListParams, AccountTransferListResponse, AccountTransfers } from './resources/account-transfers';
import { Account, AccountCreateParams, AccountListParams, AccountListResponse, AccountRetrieveBalanceParams, AccountRetrieveBalanceResponse, AccountRetrieveIntrafiBalanceResponse, AccountUpdateParams, Accounts } from './resources/accounts';
import { ACHPrenotification, ACHPrenotificationCreateParams, ACHPrenotificationListParams, ACHPrenotificationListResponse, ACHPrenotifications } from './resources/ach-prenotifications';
import { ACHTransfer, ACHTransferCreateParams, ACHTransferListParams, ACHTransferListResponse, ACHTransfers, InboundFundsHold } from './resources/ach-transfers';
import { BookkeepingAccount, BookkeepingAccountCreateParams, BookkeepingAccountListParams, BookkeepingAccountListResponse, BookkeepingAccountRetrieveBalanceParams, BookkeepingAccountRetrieveBalanceResponse, BookkeepingAccountUpdateParams, BookkeepingAccounts } from './resources/bookkeeping-accounts';
import { BookkeepingEntries, BookkeepingEntry, BookkeepingEntryListParams, BookkeepingEntryListResponse } from './resources/bookkeeping-entries';
import { BookkeepingEntrySet, BookkeepingEntrySetCreateParams, BookkeepingEntrySetListParams, BookkeepingEntrySetListResponse, BookkeepingEntrySets } from './resources/bookkeeping-entry-sets';
import { CardDispute, CardDisputeCreateParams, CardDisputeFileAttachment, CardDisputeListParams, CardDisputeListResponse, CardDisputeSubmitUserSubmissionParams, CardDisputeWithdrawParams, CardDisputes } from './resources/card-disputes';
import { CardPayment, CardPaymentListParams, CardPaymentListResponse, CardPayments } from './resources/card-payments';
import { CardPurchaseSupplement, CardPurchaseSupplementListParams, CardPurchaseSupplementListResponse, CardPurchaseSupplements } from './resources/card-purchase-supplements';
import { CardPushTransfer, CardPushTransferCreateParams, CardPushTransferListParams, CardPushTransferListResponse, CardPushTransfers } from './resources/card-push-transfers';
import { CardToken, CardTokenListParams, CardTokenListResponse, CardTokenRetrieveCapabilitiesResponse, CardTokens } from './resources/card-tokens';
import { CardValidation, CardValidationCreateParams, CardValidationListParams, CardValidationListResponse, CardValidations } from './resources/card-validations';
import { Card, CardCreateDetailsIframeParams, CardCreateDetailsIframeResponse, CardCreateParams, CardDetails, CardListParams, CardListResponse, CardUpdateParams, CardUpdatePinParams, Cards } from './resources/cards';
import { CheckDeposit, CheckDepositCreateParams, CheckDepositListParams, CheckDepositListResponse, CheckDeposits } from './resources/check-deposits';
import { CheckTransfer, CheckTransferCreateParams, CheckTransferListParams, CheckTransferListResponse, CheckTransferStopPaymentParams, CheckTransfers } from './resources/check-transfers';
import { DeclinedTransaction, DeclinedTransactionListParams, DeclinedTransactionListResponse, DeclinedTransactions } from './resources/declined-transactions';
import { DigitalCardProfile, DigitalCardProfileCloneParams, DigitalCardProfileCreateParams, DigitalCardProfileListParams, DigitalCardProfileListResponse, DigitalCardProfiles } from './resources/digital-card-profiles';
import { DigitalWalletToken, DigitalWalletTokenListParams, DigitalWalletTokenListResponse, DigitalWalletTokens } from './resources/digital-wallet-tokens';
import { Entities, Entity, EntityCreateParams, EntityListParams, EntityListResponse, EntityUpdateParams } from './resources/entities';
import { BeneficialOwner, EntityBeneficialOwnerCreateParams, EntityBeneficialOwnerListParams, EntityBeneficialOwnerListResponse, EntityBeneficialOwnerUpdateParams, EntityBeneficialOwners } from './resources/entity-beneficial-owners';
import { EntitySupplementalDocument, EntitySupplementalDocumentCreateParams, EntitySupplementalDocumentListParams, EntitySupplementalDocumentListResponse, EntitySupplementalDocuments } from './resources/entity-supplemental-documents';
import { EventSubscription, EventSubscriptionCreateParams, EventSubscriptionListParams, EventSubscriptionListResponse, EventSubscriptionUpdateParams, EventSubscriptions } from './resources/event-subscriptions';
import { Event, EventListParams, EventListResponse, Events } from './resources/events';
import { Export, ExportCreateParams, ExportListParams, ExportListResponse, Exports } from './resources/exports';
import { ExternalAccount, ExternalAccountCreateParams, ExternalAccountListParams, ExternalAccountListResponse, ExternalAccountUpdateParams, ExternalAccounts } from './resources/external-accounts';
import { FednowTransfer, FednowTransferCreateParams, FednowTransferListParams, FednowTransferListResponse, FednowTransfers } from './resources/fednow-transfers';
import { FileLinkCreateParams, FileLinkCreateResponse, FileLinks } from './resources/file-links';
import { File, FileCreateParams, FileListParams, FileListResponse, Files } from './resources/files';
import { GroupRetrieveCurrentResponse, Groups } from './resources/groups';
import { InboundACHTransfer, InboundACHTransferCreateNotificationOfChangeParams, InboundACHTransferDeclineParams, InboundACHTransferListParams, InboundACHTransferListResponse, InboundACHTransferReturnParams, InboundACHTransfers } from './resources/inbound-ach-transfers';
import { InboundCheckDeposit, InboundCheckDepositListParams, InboundCheckDepositListResponse, InboundCheckDepositReturnParams, InboundCheckDeposits } from './resources/inbound-check-deposits';
import { InboundFednowTransfer, InboundFednowTransferListParams, InboundFednowTransferListResponse, InboundFednowTransfers } from './resources/inbound-fednow-transfers';
import { InboundMailItem, InboundMailItemActionParams, InboundMailItemListParams, InboundMailItemListResponse, InboundMailItems } from './resources/inbound-mail-items';
import { InboundRealTimePaymentTransfer, InboundRealTimePaymentsTransferListParams, InboundRealTimePaymentsTransferListResponse, InboundRealTimePaymentsTransfers } from './resources/inbound-real-time-payments-transfers';
import { InboundWireDrawdownRequest, InboundWireDrawdownRequestListParams, InboundWireDrawdownRequestListResponse, InboundWireDrawdownRequests } from './resources/inbound-wire-drawdown-requests';
import { InboundWireTransfer, InboundWireTransferListParams, InboundWireTransferListResponse, InboundWireTransferReverseParams, InboundWireTransfers } from './resources/inbound-wire-transfers';
import { IntrafiAccountEnrollment, IntrafiAccountEnrollmentCreateParams, IntrafiAccountEnrollmentListParams, IntrafiAccountEnrollmentListResponse, IntrafiAccountEnrollments } from './resources/intrafi-account-enrollments';
import { IntrafiExclusion, IntrafiExclusionCreateParams, IntrafiExclusionListParams, IntrafiExclusionListResponse, IntrafiExclusions } from './resources/intrafi-exclusions';
import { Lockbox, LockboxCreateParams, LockboxListParams, LockboxListResponse, LockboxUpdateParams, Lockboxes } from './resources/lockboxes';
import { OAuth, OAuthCreateTokenParams, OAuthCreateTokenResponse } from './resources/oauth';
import { OAuthApplication, OAuthApplicationListParams, OAuthApplicationListResponse, OAuthApplications } from './resources/oauth-applications';
import { OAuthConnection, OAuthConnectionListParams, OAuthConnectionListResponse, OAuthConnections } from './resources/oauth-connections';
import { CardAuthorization, InboundWireTransferReversal, PendingTransaction, PendingTransactionCreateParams, PendingTransactionListParams, PendingTransactionListResponse, PendingTransactions } from './resources/pending-transactions';
import { PhysicalCardProfile, PhysicalCardProfileCloneParams, PhysicalCardProfileCreateParams, PhysicalCardProfileListParams, PhysicalCardProfileListResponse, PhysicalCardProfiles } from './resources/physical-card-profiles';
import { PhysicalCard, PhysicalCardCreateParams, PhysicalCardListParams, PhysicalCardListResponse, PhysicalCardUpdateParams, PhysicalCards } from './resources/physical-cards';
import { Program, ProgramListParams, ProgramListResponse, Programs } from './resources/programs';
import { RealTimeDecision, RealTimeDecisionActionParams, RealTimeDecisions } from './resources/real-time-decisions';
import { RealTimePaymentsTransferCreateParams, RealTimePaymentsTransferListParams, RealTimePaymentsTransferListResponse, RealTimePaymentsTransfers, Transfer } from './resources/real-time-payments-transfers';
import { RoutingNumberListParams, RoutingNumberListResponse, RoutingNumbers } from './resources/routing-numbers';
import { SwiftTransfer, SwiftTransferCreateParams, SwiftTransferListParams, SwiftTransferListResponse, SwiftTransfers } from './resources/swift-transfers';
import { TransactionListParams, TransactionListResponse, Transactions } from './resources/transactions';
import { WireDrawdownRequestCreateParams, WireDrawdownRequestListParams, WireDrawdownRequestListResponse, WireDrawdownRequests } from './resources/wire-drawdown-requests';
import { WireTransferCreateParams, WireTransferListParams, WireTransferListResponse, WireTransfers } from './resources/wire-transfers';
import { CardFinancial, CardRefund, CardSettlement, SimulationConfirmFuelAuthorizationParams, SimulationCreateAccountStatementParams, SimulationCreateCardAuthorizationParams, SimulationCreateCardAuthorizationResponse, SimulationCreateCardBalanceInquiryParams, SimulationCreateCardTokenParams, SimulationCreateDigitalWalletTokenRequestParams, SimulationCreateDigitalWalletTokenRequestResponse, SimulationCreateInboundACHTransferParams, SimulationCreateInboundFednowTransferParams, SimulationCreateInboundMailItemParams, SimulationCreateInboundRealTimePaymentsTransferParams, SimulationCreateInboundWireDrawdownRequestParams, SimulationCreateInboundWireTransferParams, SimulationCreateInterestPaymentParams, SimulationCreateProgramParams, SimulationExpireCardAuthorizationParams, SimulationGenerateTaxFormExportParams, SimulationIncrementCardAuthorizationParams, SimulationRefundCardTransactionParams, SimulationReverseCardAuthorizationParams, SimulationSettleCardAuthorizationParams, Simulations, Transaction } from './resources/simulations/simulations';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import { type LogLevel, type Logger, formatRequestDetails, loggerFor, parseLogLevel } from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

const environments = {
  production: 'https://api.increase.com',
  sandbox: 'https://sandbox.increase.com',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Defaults to process.env['YOLKEN_INCREASE_TEST_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://api.increase.com`
   * - `sandbox` corresponds to `https://sandbox.increase.com`
   */
  environment?: Environment | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['YOLKEN_INCREASE_TEST_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['YOLKEN_INCREASE_TEST_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Yolken Increase Test API. 
 */
export class YolkenIncreaseTest {
  apiKey: string;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Yolken Increase Test API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['YOLKEN_INCREASE_TEST_API_KEY'] ?? undefined]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['YOLKEN_INCREASE_TEST_BASE_URL'] ?? https://api.increase.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('YOLKEN_INCREASE_TEST_BASE_URL'),
    apiKey = readEnv('YOLKEN_INCREASE_TEST_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.YolkenIncreaseTestError(
        'The YOLKEN_INCREASE_TEST_API_KEY environment variable is missing or empty; either provide it, or instantiate the YolkenIncreaseTest client with an apiKey option, like new YolkenIncreaseTest({ apiKey: \'My API Key\' }).'
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.YolkenIncreaseTestError(
        'Ambiguous URL; The `baseURL` option (or YOLKEN_INCREASE_TEST_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null'
      )
    }

    this.baseURL = options.baseURL || environments[options.environment || 'production'];
    this.timeout = options.timeout ?? YolkenIncreaseTest.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel = parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ?? parseLogLevel(readEnv('YOLKEN_INCREASE_TEST_LOG'), 'process.env[\'YOLKEN_INCREASE_TEST_LOG\']', this) ?? defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.apiKey = apiKey;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      environment: options.environment ? options.environment : undefined,
      baseURL: options.environment ? undefined : this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      ...options
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== environments[this._options.environment || 'production'];
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    return buildHeaders([{ Authorization: `Bearer ${this.apiKey}` }]);
  }

  protected stringifyQuery(query: object | Record<string, unknown>): string {
    return stringifyQuery(query);
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(path: string, query: Record<string, unknown> | null | undefined, defaultBaseURL?: string | undefined): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    const pathQuery = Object.fromEntries(url.searchParams);
    if (!isEmptyObj(defaultQuery) || !isEmptyObj(pathQuery)) {
      query = { ...pathQuery, ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, { retryCount: maxRetries - retriesRemaining });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(`[${requestLogID}] sending request`, formatRequestDetails({ retryOfRequestLogID, method: options.method, url, options, headers: req.headers }));

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout = isAbortError(response) || /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''))
      if (retriesRemaining) {
        loggerFor(this).info(`[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`)
        loggerFor(this).debug(`[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`, formatRequestDetails({ retryOfRequestLogID, url, durationMs: headersTime - startTime, message: response.message }));
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(`[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`)
      loggerFor(this).debug(`[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`, formatRequestDetails({ retryOfRequestLogID, url, durationMs: headersTime - startTime, message: response.message }));
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${response.ok ? 'succeeded' : 'failed'} with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`)
        loggerFor(this).debug(`[${requestLogID}] response error (${retryMessage})`, formatRequestDetails({ retryOfRequestLogID, url: response.url, status: response.status, headers: response.headers, durationMs: headersTime - startTime }));
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID, response.headers);
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`)

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText) as any;
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(`[${requestLogID}] response error (${retryMessage})`, formatRequestDetails({ retryOfRequestLogID, url: response.url, status: response.status, headers: response.headers, message: errMessage, durationMs: Date.now() - startTime }));

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo)
    loggerFor(this).debug(`[${requestLogID}] response start`, formatRequestDetails({ retryOfRequestLogID, url: response.url, status: response.status, headers: response.headers, durationMs: headersTime - startTime }));

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    const abort = this._makeAbort(controller);
    if (signal) signal.addEventListener('abort', abort, { once: true });

    const timeout = setTimeout(abort, ms);

    const isReadableBody = ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) || (typeof options.body === "object" && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {

      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time, just do what it
    // says, but otherwise calculate a default
    if (timeoutMillis === undefined) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal}),
      ...((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream && { duplex: "half" }),
      ...(body && { body }),
      ...(this.fetchOptions as any ?? {}),
      ...(options.fetchOptions as any ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {Accept: 'application/json',
      'User-Agent': this.getUserAgent(),
      'X-Stainless-Retry-Count': String(retryCount),
      ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
      ...getPlatformHeaders()},
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private _makeAbort(controller: AbortController) {
    // note: we can't just inline this method inside `fetchWithTimeout()` because then the closure
    //       would capture all request options, and cause a memory leak.
    return () => controller.abort();
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (
        typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')
      ) ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else if (
      typeof body === 'object' &&
      headers.values.get('content-type') === 'application/x-www-form-urlencoded'
    ) {
      return {
        bodyHeaders: { 'content-type': 'application/x-www-form-urlencoded' },
        body: this.stringifyQuery(body),
      };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static YolkenIncreaseTest = this;
  static DEFAULT_TIMEOUT = 60000 // 1 minute

  static YolkenIncreaseTestError = Errors.YolkenIncreaseTestError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  accountNumbers: API.AccountNumbers = new API.AccountNumbers(this);
  accountStatements: API.AccountStatements = new API.AccountStatements(this);
  accountTransfers: API.AccountTransfers = new API.AccountTransfers(this);
  accounts: API.Accounts = new API.Accounts(this);
  achPrenotifications: API.ACHPrenotifications = new API.ACHPrenotifications(this);
  achTransfers: API.ACHTransfers = new API.ACHTransfers(this);
  bookkeepingAccounts: API.BookkeepingAccounts = new API.BookkeepingAccounts(this);
  bookkeepingEntries: API.BookkeepingEntries = new API.BookkeepingEntries(this);
  bookkeepingEntrySets: API.BookkeepingEntrySets = new API.BookkeepingEntrySets(this);
  cardDisputes: API.CardDisputes = new API.CardDisputes(this);
  cardPayments: API.CardPayments = new API.CardPayments(this);
  cardPurchaseSupplements: API.CardPurchaseSupplements = new API.CardPurchaseSupplements(this);
  cardPushTransfers: API.CardPushTransfers = new API.CardPushTransfers(this);
  cardTokens: API.CardTokens = new API.CardTokens(this);
  cardValidations: API.CardValidations = new API.CardValidations(this);
  cards: API.Cards = new API.Cards(this);
  checkDeposits: API.CheckDeposits = new API.CheckDeposits(this);
  checkTransfers: API.CheckTransfers = new API.CheckTransfers(this);
  declinedTransactions: API.DeclinedTransactions = new API.DeclinedTransactions(this);
  digitalCardProfiles: API.DigitalCardProfiles = new API.DigitalCardProfiles(this);
  digitalWalletTokens: API.DigitalWalletTokens = new API.DigitalWalletTokens(this);
  entities: API.Entities = new API.Entities(this);
  entityBeneficialOwners: API.EntityBeneficialOwners = new API.EntityBeneficialOwners(this);
  entitySupplementalDocuments: API.EntitySupplementalDocuments = new API.EntitySupplementalDocuments(this);
  eventSubscriptions: API.EventSubscriptions = new API.EventSubscriptions(this);
  events: API.Events = new API.Events(this);
  exports: API.Exports = new API.Exports(this);
  externalAccounts: API.ExternalAccounts = new API.ExternalAccounts(this);
  fednowTransfers: API.FednowTransfers = new API.FednowTransfers(this);
  fileLinks: API.FileLinks = new API.FileLinks(this);
  files: API.Files = new API.Files(this);
  groups: API.Groups = new API.Groups(this);
  inboundACHTransfers: API.InboundACHTransfers = new API.InboundACHTransfers(this);
  inboundCheckDeposits: API.InboundCheckDeposits = new API.InboundCheckDeposits(this);
  inboundFednowTransfers: API.InboundFednowTransfers = new API.InboundFednowTransfers(this);
  inboundMailItems: API.InboundMailItems = new API.InboundMailItems(this);
  inboundRealTimePaymentsTransfers: API.InboundRealTimePaymentsTransfers = new API.InboundRealTimePaymentsTransfers(this);
  inboundWireDrawdownRequests: API.InboundWireDrawdownRequests = new API.InboundWireDrawdownRequests(this);
  inboundWireTransfers: API.InboundWireTransfers = new API.InboundWireTransfers(this);
  intrafiAccountEnrollments: API.IntrafiAccountEnrollments = new API.IntrafiAccountEnrollments(this);
  intrafiExclusions: API.IntrafiExclusions = new API.IntrafiExclusions(this);
  lockboxes: API.Lockboxes = new API.Lockboxes(this);
  oauth: API.OAuth = new API.OAuth(this);
  oauthApplications: API.OAuthApplications = new API.OAuthApplications(this);
  oauthConnections: API.OAuthConnections = new API.OAuthConnections(this);
  pendingTransactions: API.PendingTransactions = new API.PendingTransactions(this);
  physicalCardProfiles: API.PhysicalCardProfiles = new API.PhysicalCardProfiles(this);
  physicalCards: API.PhysicalCards = new API.PhysicalCards(this);
  programs: API.Programs = new API.Programs(this);
  realTimeDecisions: API.RealTimeDecisions = new API.RealTimeDecisions(this);
  realTimePaymentsTransfers: API.RealTimePaymentsTransfers = new API.RealTimePaymentsTransfers(this);
  routingNumbers: API.RoutingNumbers = new API.RoutingNumbers(this);
  simulations: API.Simulations = new API.Simulations(this);
  swiftTransfers: API.SwiftTransfers = new API.SwiftTransfers(this);
  transactions: API.Transactions = new API.Transactions(this);
  wireDrawdownRequests: API.WireDrawdownRequests = new API.WireDrawdownRequests(this);
  wireTransfers: API.WireTransfers = new API.WireTransfers(this);
}

YolkenIncreaseTest.AccountNumbers = AccountNumbers;
YolkenIncreaseTest.AccountStatements = AccountStatements;
YolkenIncreaseTest.AccountTransfers = AccountTransfers;
YolkenIncreaseTest.Accounts = Accounts;
YolkenIncreaseTest.ACHPrenotifications = ACHPrenotifications;
YolkenIncreaseTest.ACHTransfers = ACHTransfers;
YolkenIncreaseTest.BookkeepingAccounts = BookkeepingAccounts;
YolkenIncreaseTest.BookkeepingEntries = BookkeepingEntries;
YolkenIncreaseTest.BookkeepingEntrySets = BookkeepingEntrySets;
YolkenIncreaseTest.CardDisputes = CardDisputes;
YolkenIncreaseTest.CardPayments = CardPayments;
YolkenIncreaseTest.CardPurchaseSupplements = CardPurchaseSupplements;
YolkenIncreaseTest.CardPushTransfers = CardPushTransfers;
YolkenIncreaseTest.CardTokens = CardTokens;
YolkenIncreaseTest.CardValidations = CardValidations;
YolkenIncreaseTest.Cards = Cards;
YolkenIncreaseTest.CheckDeposits = CheckDeposits;
YolkenIncreaseTest.CheckTransfers = CheckTransfers;
YolkenIncreaseTest.DeclinedTransactions = DeclinedTransactions;
YolkenIncreaseTest.DigitalCardProfiles = DigitalCardProfiles;
YolkenIncreaseTest.DigitalWalletTokens = DigitalWalletTokens;
YolkenIncreaseTest.Entities = Entities;
YolkenIncreaseTest.EntityBeneficialOwners = EntityBeneficialOwners;
YolkenIncreaseTest.EntitySupplementalDocuments = EntitySupplementalDocuments;
YolkenIncreaseTest.EventSubscriptions = EventSubscriptions;
YolkenIncreaseTest.Events = Events;
YolkenIncreaseTest.Exports = Exports;
YolkenIncreaseTest.ExternalAccounts = ExternalAccounts;
YolkenIncreaseTest.FednowTransfers = FednowTransfers;
YolkenIncreaseTest.FileLinks = FileLinks;
YolkenIncreaseTest.Files = Files;
YolkenIncreaseTest.Groups = Groups;
YolkenIncreaseTest.InboundACHTransfers = InboundACHTransfers;
YolkenIncreaseTest.InboundCheckDeposits = InboundCheckDeposits;
YolkenIncreaseTest.InboundFednowTransfers = InboundFednowTransfers;
YolkenIncreaseTest.InboundMailItems = InboundMailItems;
YolkenIncreaseTest.InboundRealTimePaymentsTransfers = InboundRealTimePaymentsTransfers;
YolkenIncreaseTest.InboundWireDrawdownRequests = InboundWireDrawdownRequests;
YolkenIncreaseTest.InboundWireTransfers = InboundWireTransfers;
YolkenIncreaseTest.IntrafiAccountEnrollments = IntrafiAccountEnrollments;
YolkenIncreaseTest.IntrafiExclusions = IntrafiExclusions;
YolkenIncreaseTest.Lockboxes = Lockboxes;
YolkenIncreaseTest.OAuth = OAuth;
YolkenIncreaseTest.OAuthApplications = OAuthApplications;
YolkenIncreaseTest.OAuthConnections = OAuthConnections;
YolkenIncreaseTest.PendingTransactions = PendingTransactions;
YolkenIncreaseTest.PhysicalCardProfiles = PhysicalCardProfiles;
YolkenIncreaseTest.PhysicalCards = PhysicalCards;
YolkenIncreaseTest.Programs = Programs;
YolkenIncreaseTest.RealTimeDecisions = RealTimeDecisions;
YolkenIncreaseTest.RealTimePaymentsTransfers = RealTimePaymentsTransfers;
YolkenIncreaseTest.RoutingNumbers = RoutingNumbers;
YolkenIncreaseTest.Simulations = Simulations;
YolkenIncreaseTest.SwiftTransfers = SwiftTransfers;
YolkenIncreaseTest.Transactions = Transactions;
YolkenIncreaseTest.WireDrawdownRequests = WireDrawdownRequests;
YolkenIncreaseTest.WireTransfers = WireTransfers;

export declare namespace YolkenIncreaseTest {
      export type RequestOptions = Opts.RequestOptions;

      export {
  AccountNumbers as AccountNumbers,
  type AccountNumber as AccountNumber,
  type AccountNumberListResponse as AccountNumberListResponse,
  type AccountNumberCreateParams as AccountNumberCreateParams,
  type AccountNumberUpdateParams as AccountNumberUpdateParams,
  type AccountNumberListParams as AccountNumberListParams
};

export {
  AccountStatements as AccountStatements,
  type AccountStatement as AccountStatement,
  type AccountStatementListResponse as AccountStatementListResponse,
  type AccountStatementListParams as AccountStatementListParams
};

export {
  AccountTransfers as AccountTransfers,
  type AccountTransfer as AccountTransfer,
  type AccountTransferListResponse as AccountTransferListResponse,
  type AccountTransferCreateParams as AccountTransferCreateParams,
  type AccountTransferListParams as AccountTransferListParams
};

export {
  Accounts as Accounts,
  type Account as Account,
  type AccountListResponse as AccountListResponse,
  type AccountRetrieveBalanceResponse as AccountRetrieveBalanceResponse,
  type AccountRetrieveIntrafiBalanceResponse as AccountRetrieveIntrafiBalanceResponse,
  type AccountCreateParams as AccountCreateParams,
  type AccountUpdateParams as AccountUpdateParams,
  type AccountListParams as AccountListParams,
  type AccountRetrieveBalanceParams as AccountRetrieveBalanceParams
};

export {
  ACHPrenotifications as ACHPrenotifications,
  type ACHPrenotification as ACHPrenotification,
  type ACHPrenotificationListResponse as ACHPrenotificationListResponse,
  type ACHPrenotificationCreateParams as ACHPrenotificationCreateParams,
  type ACHPrenotificationListParams as ACHPrenotificationListParams
};

export {
  ACHTransfers as ACHTransfers,
  type ACHTransfer as ACHTransfer,
  type InboundFundsHold as InboundFundsHold,
  type ACHTransferListResponse as ACHTransferListResponse,
  type ACHTransferCreateParams as ACHTransferCreateParams,
  type ACHTransferListParams as ACHTransferListParams
};

export {
  BookkeepingAccounts as BookkeepingAccounts,
  type BookkeepingAccount as BookkeepingAccount,
  type BookkeepingAccountListResponse as BookkeepingAccountListResponse,
  type BookkeepingAccountRetrieveBalanceResponse as BookkeepingAccountRetrieveBalanceResponse,
  type BookkeepingAccountCreateParams as BookkeepingAccountCreateParams,
  type BookkeepingAccountUpdateParams as BookkeepingAccountUpdateParams,
  type BookkeepingAccountListParams as BookkeepingAccountListParams,
  type BookkeepingAccountRetrieveBalanceParams as BookkeepingAccountRetrieveBalanceParams
};

export {
  BookkeepingEntries as BookkeepingEntries,
  type BookkeepingEntry as BookkeepingEntry,
  type BookkeepingEntryListResponse as BookkeepingEntryListResponse,
  type BookkeepingEntryListParams as BookkeepingEntryListParams
};

export {
  BookkeepingEntrySets as BookkeepingEntrySets,
  type BookkeepingEntrySet as BookkeepingEntrySet,
  type BookkeepingEntrySetListResponse as BookkeepingEntrySetListResponse,
  type BookkeepingEntrySetCreateParams as BookkeepingEntrySetCreateParams,
  type BookkeepingEntrySetListParams as BookkeepingEntrySetListParams
};

export {
  CardDisputes as CardDisputes,
  type CardDispute as CardDispute,
  type CardDisputeFileAttachment as CardDisputeFileAttachment,
  type CardDisputeListResponse as CardDisputeListResponse,
  type CardDisputeCreateParams as CardDisputeCreateParams,
  type CardDisputeListParams as CardDisputeListParams,
  type CardDisputeSubmitUserSubmissionParams as CardDisputeSubmitUserSubmissionParams,
  type CardDisputeWithdrawParams as CardDisputeWithdrawParams
};

export {
  CardPayments as CardPayments,
  type CardPayment as CardPayment,
  type CardPaymentListResponse as CardPaymentListResponse,
  type CardPaymentListParams as CardPaymentListParams
};

export {
  CardPurchaseSupplements as CardPurchaseSupplements,
  type CardPurchaseSupplement as CardPurchaseSupplement,
  type CardPurchaseSupplementListResponse as CardPurchaseSupplementListResponse,
  type CardPurchaseSupplementListParams as CardPurchaseSupplementListParams
};

export {
  CardPushTransfers as CardPushTransfers,
  type CardPushTransfer as CardPushTransfer,
  type CardPushTransferListResponse as CardPushTransferListResponse,
  type CardPushTransferCreateParams as CardPushTransferCreateParams,
  type CardPushTransferListParams as CardPushTransferListParams
};

export {
  CardTokens as CardTokens,
  type CardToken as CardToken,
  type CardTokenListResponse as CardTokenListResponse,
  type CardTokenRetrieveCapabilitiesResponse as CardTokenRetrieveCapabilitiesResponse,
  type CardTokenListParams as CardTokenListParams
};

export {
  CardValidations as CardValidations,
  type CardValidation as CardValidation,
  type CardValidationListResponse as CardValidationListResponse,
  type CardValidationCreateParams as CardValidationCreateParams,
  type CardValidationListParams as CardValidationListParams
};

export {
  Cards as Cards,
  type Card as Card,
  type CardDetails as CardDetails,
  type CardListResponse as CardListResponse,
  type CardCreateDetailsIframeResponse as CardCreateDetailsIframeResponse,
  type CardCreateParams as CardCreateParams,
  type CardUpdateParams as CardUpdateParams,
  type CardListParams as CardListParams,
  type CardCreateDetailsIframeParams as CardCreateDetailsIframeParams,
  type CardUpdatePinParams as CardUpdatePinParams
};

export {
  CheckDeposits as CheckDeposits,
  type CheckDeposit as CheckDeposit,
  type CheckDepositListResponse as CheckDepositListResponse,
  type CheckDepositCreateParams as CheckDepositCreateParams,
  type CheckDepositListParams as CheckDepositListParams
};

export {
  CheckTransfers as CheckTransfers,
  type CheckTransfer as CheckTransfer,
  type CheckTransferListResponse as CheckTransferListResponse,
  type CheckTransferCreateParams as CheckTransferCreateParams,
  type CheckTransferListParams as CheckTransferListParams,
  type CheckTransferStopPaymentParams as CheckTransferStopPaymentParams
};

export {
  DeclinedTransactions as DeclinedTransactions,
  type DeclinedTransaction as DeclinedTransaction,
  type DeclinedTransactionListResponse as DeclinedTransactionListResponse,
  type DeclinedTransactionListParams as DeclinedTransactionListParams
};

export {
  DigitalCardProfiles as DigitalCardProfiles,
  type DigitalCardProfile as DigitalCardProfile,
  type DigitalCardProfileListResponse as DigitalCardProfileListResponse,
  type DigitalCardProfileCreateParams as DigitalCardProfileCreateParams,
  type DigitalCardProfileListParams as DigitalCardProfileListParams,
  type DigitalCardProfileCloneParams as DigitalCardProfileCloneParams
};

export {
  DigitalWalletTokens as DigitalWalletTokens,
  type DigitalWalletToken as DigitalWalletToken,
  type DigitalWalletTokenListResponse as DigitalWalletTokenListResponse,
  type DigitalWalletTokenListParams as DigitalWalletTokenListParams
};

export {
  Entities as Entities,
  type Entity as Entity,
  type EntityListResponse as EntityListResponse,
  type EntityCreateParams as EntityCreateParams,
  type EntityUpdateParams as EntityUpdateParams,
  type EntityListParams as EntityListParams
};

export {
  EntityBeneficialOwners as EntityBeneficialOwners,
  type BeneficialOwner as BeneficialOwner,
  type EntityBeneficialOwnerListResponse as EntityBeneficialOwnerListResponse,
  type EntityBeneficialOwnerCreateParams as EntityBeneficialOwnerCreateParams,
  type EntityBeneficialOwnerUpdateParams as EntityBeneficialOwnerUpdateParams,
  type EntityBeneficialOwnerListParams as EntityBeneficialOwnerListParams
};

export {
  EntitySupplementalDocuments as EntitySupplementalDocuments,
  type EntitySupplementalDocument as EntitySupplementalDocument,
  type EntitySupplementalDocumentListResponse as EntitySupplementalDocumentListResponse,
  type EntitySupplementalDocumentCreateParams as EntitySupplementalDocumentCreateParams,
  type EntitySupplementalDocumentListParams as EntitySupplementalDocumentListParams
};

export {
  EventSubscriptions as EventSubscriptions,
  type EventSubscription as EventSubscription,
  type EventSubscriptionListResponse as EventSubscriptionListResponse,
  type EventSubscriptionCreateParams as EventSubscriptionCreateParams,
  type EventSubscriptionUpdateParams as EventSubscriptionUpdateParams,
  type EventSubscriptionListParams as EventSubscriptionListParams
};

export {
  Events as Events,
  type Event as Event,
  type EventListResponse as EventListResponse,
  type EventListParams as EventListParams
};

export {
  Exports as Exports,
  type Export as Export,
  type ExportListResponse as ExportListResponse,
  type ExportCreateParams as ExportCreateParams,
  type ExportListParams as ExportListParams
};

export {
  ExternalAccounts as ExternalAccounts,
  type ExternalAccount as ExternalAccount,
  type ExternalAccountListResponse as ExternalAccountListResponse,
  type ExternalAccountCreateParams as ExternalAccountCreateParams,
  type ExternalAccountUpdateParams as ExternalAccountUpdateParams,
  type ExternalAccountListParams as ExternalAccountListParams
};

export {
  FednowTransfers as FednowTransfers,
  type FednowTransfer as FednowTransfer,
  type FednowTransferListResponse as FednowTransferListResponse,
  type FednowTransferCreateParams as FednowTransferCreateParams,
  type FednowTransferListParams as FednowTransferListParams
};

export {
  FileLinks as FileLinks,
  type FileLinkCreateResponse as FileLinkCreateResponse,
  type FileLinkCreateParams as FileLinkCreateParams
};

export {
  Files as Files,
  type File as File,
  type FileListResponse as FileListResponse,
  type FileCreateParams as FileCreateParams,
  type FileListParams as FileListParams
};

export {
  Groups as Groups,
  type GroupRetrieveCurrentResponse as GroupRetrieveCurrentResponse
};

export {
  InboundACHTransfers as InboundACHTransfers,
  type InboundACHTransfer as InboundACHTransfer,
  type InboundACHTransferListResponse as InboundACHTransferListResponse,
  type InboundACHTransferListParams as InboundACHTransferListParams,
  type InboundACHTransferCreateNotificationOfChangeParams as InboundACHTransferCreateNotificationOfChangeParams,
  type InboundACHTransferDeclineParams as InboundACHTransferDeclineParams,
  type InboundACHTransferReturnParams as InboundACHTransferReturnParams
};

export {
  InboundCheckDeposits as InboundCheckDeposits,
  type InboundCheckDeposit as InboundCheckDeposit,
  type InboundCheckDepositListResponse as InboundCheckDepositListResponse,
  type InboundCheckDepositListParams as InboundCheckDepositListParams,
  type InboundCheckDepositReturnParams as InboundCheckDepositReturnParams
};

export {
  InboundFednowTransfers as InboundFednowTransfers,
  type InboundFednowTransfer as InboundFednowTransfer,
  type InboundFednowTransferListResponse as InboundFednowTransferListResponse,
  type InboundFednowTransferListParams as InboundFednowTransferListParams
};

export {
  InboundMailItems as InboundMailItems,
  type InboundMailItem as InboundMailItem,
  type InboundMailItemListResponse as InboundMailItemListResponse,
  type InboundMailItemListParams as InboundMailItemListParams,
  type InboundMailItemActionParams as InboundMailItemActionParams
};

export {
  InboundRealTimePaymentsTransfers as InboundRealTimePaymentsTransfers,
  type InboundRealTimePaymentTransfer as InboundRealTimePaymentTransfer,
  type InboundRealTimePaymentsTransferListResponse as InboundRealTimePaymentsTransferListResponse,
  type InboundRealTimePaymentsTransferListParams as InboundRealTimePaymentsTransferListParams
};

export {
  InboundWireDrawdownRequests as InboundWireDrawdownRequests,
  type InboundWireDrawdownRequest as InboundWireDrawdownRequest,
  type InboundWireDrawdownRequestListResponse as InboundWireDrawdownRequestListResponse,
  type InboundWireDrawdownRequestListParams as InboundWireDrawdownRequestListParams
};

export {
  InboundWireTransfers as InboundWireTransfers,
  type InboundWireTransfer as InboundWireTransfer,
  type InboundWireTransferListResponse as InboundWireTransferListResponse,
  type InboundWireTransferListParams as InboundWireTransferListParams,
  type InboundWireTransferReverseParams as InboundWireTransferReverseParams
};

export {
  IntrafiAccountEnrollments as IntrafiAccountEnrollments,
  type IntrafiAccountEnrollment as IntrafiAccountEnrollment,
  type IntrafiAccountEnrollmentListResponse as IntrafiAccountEnrollmentListResponse,
  type IntrafiAccountEnrollmentCreateParams as IntrafiAccountEnrollmentCreateParams,
  type IntrafiAccountEnrollmentListParams as IntrafiAccountEnrollmentListParams
};

export {
  IntrafiExclusions as IntrafiExclusions,
  type IntrafiExclusion as IntrafiExclusion,
  type IntrafiExclusionListResponse as IntrafiExclusionListResponse,
  type IntrafiExclusionCreateParams as IntrafiExclusionCreateParams,
  type IntrafiExclusionListParams as IntrafiExclusionListParams
};

export {
  Lockboxes as Lockboxes,
  type Lockbox as Lockbox,
  type LockboxListResponse as LockboxListResponse,
  type LockboxCreateParams as LockboxCreateParams,
  type LockboxUpdateParams as LockboxUpdateParams,
  type LockboxListParams as LockboxListParams
};

export {
  OAuth as OAuth,
  type OAuthCreateTokenResponse as OAuthCreateTokenResponse,
  type OAuthCreateTokenParams as OAuthCreateTokenParams
};

export {
  OAuthApplications as OAuthApplications,
  type OAuthApplication as OAuthApplication,
  type OAuthApplicationListResponse as OAuthApplicationListResponse,
  type OAuthApplicationListParams as OAuthApplicationListParams
};

export {
  OAuthConnections as OAuthConnections,
  type OAuthConnection as OAuthConnection,
  type OAuthConnectionListResponse as OAuthConnectionListResponse,
  type OAuthConnectionListParams as OAuthConnectionListParams
};

export {
  PendingTransactions as PendingTransactions,
  type CardAuthorization as CardAuthorization,
  type InboundWireTransferReversal as InboundWireTransferReversal,
  type PendingTransaction as PendingTransaction,
  type PendingTransactionListResponse as PendingTransactionListResponse,
  type PendingTransactionCreateParams as PendingTransactionCreateParams,
  type PendingTransactionListParams as PendingTransactionListParams
};

export {
  PhysicalCardProfiles as PhysicalCardProfiles,
  type PhysicalCardProfile as PhysicalCardProfile,
  type PhysicalCardProfileListResponse as PhysicalCardProfileListResponse,
  type PhysicalCardProfileCreateParams as PhysicalCardProfileCreateParams,
  type PhysicalCardProfileListParams as PhysicalCardProfileListParams,
  type PhysicalCardProfileCloneParams as PhysicalCardProfileCloneParams
};

export {
  PhysicalCards as PhysicalCards,
  type PhysicalCard as PhysicalCard,
  type PhysicalCardListResponse as PhysicalCardListResponse,
  type PhysicalCardCreateParams as PhysicalCardCreateParams,
  type PhysicalCardUpdateParams as PhysicalCardUpdateParams,
  type PhysicalCardListParams as PhysicalCardListParams
};

export {
  Programs as Programs,
  type Program as Program,
  type ProgramListResponse as ProgramListResponse,
  type ProgramListParams as ProgramListParams
};

export {
  RealTimeDecisions as RealTimeDecisions,
  type RealTimeDecision as RealTimeDecision,
  type RealTimeDecisionActionParams as RealTimeDecisionActionParams
};

export {
  RealTimePaymentsTransfers as RealTimePaymentsTransfers,
  type Transfer as Transfer,
  type RealTimePaymentsTransferListResponse as RealTimePaymentsTransferListResponse,
  type RealTimePaymentsTransferCreateParams as RealTimePaymentsTransferCreateParams,
  type RealTimePaymentsTransferListParams as RealTimePaymentsTransferListParams
};

export {
  RoutingNumbers as RoutingNumbers,
  type RoutingNumberListResponse as RoutingNumberListResponse,
  type RoutingNumberListParams as RoutingNumberListParams
};

export {
  Simulations as Simulations,
  type CardFinancial as CardFinancial,
  type CardRefund as CardRefund,
  type CardSettlement as CardSettlement,
  type Transaction as Transaction,
  type SimulationCreateCardAuthorizationResponse as SimulationCreateCardAuthorizationResponse,
  type SimulationCreateDigitalWalletTokenRequestResponse as SimulationCreateDigitalWalletTokenRequestResponse,
  type SimulationConfirmFuelAuthorizationParams as SimulationConfirmFuelAuthorizationParams,
  type SimulationCreateAccountStatementParams as SimulationCreateAccountStatementParams,
  type SimulationCreateCardAuthorizationParams as SimulationCreateCardAuthorizationParams,
  type SimulationCreateCardBalanceInquiryParams as SimulationCreateCardBalanceInquiryParams,
  type SimulationCreateCardTokenParams as SimulationCreateCardTokenParams,
  type SimulationCreateDigitalWalletTokenRequestParams as SimulationCreateDigitalWalletTokenRequestParams,
  type SimulationCreateInboundACHTransferParams as SimulationCreateInboundACHTransferParams,
  type SimulationCreateInboundFednowTransferParams as SimulationCreateInboundFednowTransferParams,
  type SimulationCreateInboundMailItemParams as SimulationCreateInboundMailItemParams,
  type SimulationCreateInboundRealTimePaymentsTransferParams as SimulationCreateInboundRealTimePaymentsTransferParams,
  type SimulationCreateInboundWireDrawdownRequestParams as SimulationCreateInboundWireDrawdownRequestParams,
  type SimulationCreateInboundWireTransferParams as SimulationCreateInboundWireTransferParams,
  type SimulationCreateInterestPaymentParams as SimulationCreateInterestPaymentParams,
  type SimulationCreateProgramParams as SimulationCreateProgramParams,
  type SimulationExpireCardAuthorizationParams as SimulationExpireCardAuthorizationParams,
  type SimulationGenerateTaxFormExportParams as SimulationGenerateTaxFormExportParams,
  type SimulationIncrementCardAuthorizationParams as SimulationIncrementCardAuthorizationParams,
  type SimulationRefundCardTransactionParams as SimulationRefundCardTransactionParams,
  type SimulationReverseCardAuthorizationParams as SimulationReverseCardAuthorizationParams,
  type SimulationSettleCardAuthorizationParams as SimulationSettleCardAuthorizationParams
};

export {
  SwiftTransfers as SwiftTransfers,
  type SwiftTransfer as SwiftTransfer,
  type SwiftTransferListResponse as SwiftTransferListResponse,
  type SwiftTransferCreateParams as SwiftTransferCreateParams,
  type SwiftTransferListParams as SwiftTransferListParams
};

export {
  Transactions as Transactions,
  type TransactionListResponse as TransactionListResponse,
  type TransactionListParams as TransactionListParams
};

export {
  WireDrawdownRequests as WireDrawdownRequests,
  type WireDrawdownRequestListResponse as WireDrawdownRequestListResponse,
  type WireDrawdownRequestCreateParams as WireDrawdownRequestCreateParams,
  type WireDrawdownRequestListParams as WireDrawdownRequestListParams
};

export {
  WireTransfers as WireTransfers,
  type WireTransferListResponse as WireTransferListResponse,
  type WireTransferCreateParams as WireTransferCreateParams,
  type WireTransferListParams as WireTransferListParams
};
    }
