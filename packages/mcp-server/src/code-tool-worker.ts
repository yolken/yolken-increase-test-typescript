// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import path from 'node:path';
import util from 'node:util';
import Fuse from 'fuse.js';
import ts from 'typescript';
import { WorkerOutput } from './code-tool-types';
import { YolkenIncreaseTest, ClientOptions } from 'yolken-increase-test';

async function tseval(code: string) {
  return import('data:application/typescript;charset=utf-8;base64,' + Buffer.from(code).toString('base64'));
}

function getRunFunctionSource(code: string): {
  type: 'declaration' | 'expression';
  client: string | undefined;
  code: string;
} | null {
  const sourceFile = ts.createSourceFile('code.ts', code, ts.ScriptTarget.Latest, true);
  const printer = ts.createPrinter();

  for (const statement of sourceFile.statements) {
    // Check for top-level function declarations
    if (ts.isFunctionDeclaration(statement)) {
      if (statement.name?.text === 'run') {
        return {
          type: 'declaration',
          client: statement.parameters[0]?.name.getText(),
          code: printer.printNode(ts.EmitHint.Unspecified, statement.body!, sourceFile),
        };
      }
    }

    // Check for variable declarations: const run = () => {} or const run = function() {}
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (
          ts.isIdentifier(declaration.name) &&
          declaration.name.text === 'run' &&
          // Check if it's initialized with a function
          declaration.initializer &&
          (ts.isFunctionExpression(declaration.initializer) || ts.isArrowFunction(declaration.initializer))
        ) {
          return {
            type: 'expression',
            client: declaration.initializer.parameters[0]?.name.getText(),
            code: printer.printNode(ts.EmitHint.Unspecified, declaration.initializer, sourceFile),
          };
        }
      }
    }
  }

  return null;
}

function getTSDiagnostics(code: string): string[] {
  const functionSource = getRunFunctionSource(code)!;
  const codeWithImport = [
    'import { YolkenIncreaseTest } from "yolken-increase-test";',
    functionSource.type === 'declaration' ?
      `async function run(${functionSource.client}: YolkenIncreaseTest)` :
      `const run: (${functionSource.client}: YolkenIncreaseTest) => Promise<unknown> =`,
    functionSource.code,
  ].join('\n');
  const sourcePath = path.resolve('code.ts');
  const ast = ts.createSourceFile(sourcePath, codeWithImport, ts.ScriptTarget.Latest, true);
  const options = ts.getDefaultCompilerOptions();
  options.target = ts.ScriptTarget.Latest;
  options.module = ts.ModuleKind.NodeNext;
  options.moduleResolution = ts.ModuleResolutionKind.NodeNext;
  const host = ts.createCompilerHost(options, true);
  const newHost: typeof host = {
    ...host,
    getSourceFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return ast;
      }
      return host.getSourceFile(...args);
    },
    readFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return codeWithImport;
      }
      return host.readFile(...args);
    },
    fileExists: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return true;
      }
      return host.fileExists(...args);
    },
  };
  const program = ts.createProgram({
    options,
    rootNames: [sourcePath],
    host: newHost,
  });
  const diagnostics = ts.getPreEmitDiagnostics(program, ast);
  return diagnostics.map((d) => {
    const message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
    if (!d.file || !d.start) return `- ${message}`;
    const { line: lineNumber } = ts.getLineAndCharacterOfPosition(d.file, d.start);
    const line = codeWithImport.split('\n').at(lineNumber)?.trim();
    return line ? `- ${message}\n    ${line}` : `- ${message}`;
  });
}

const fuse = new Fuse(
  [
    "client.accountNumbers.create",
    "client.accountNumbers.list",
    "client.accountNumbers.retrieve",
    "client.accountNumbers.update",
    "client.accountStatements.list",
    "client.accountStatements.retrieve",
    "client.accountTransfers.approve",
    "client.accountTransfers.cancel",
    "client.accountTransfers.create",
    "client.accountTransfers.list",
    "client.accountTransfers.retrieve",
    "client.accounts.close",
    "client.accounts.create",
    "client.accounts.list",
    "client.accounts.retrieve",
    "client.accounts.retrieveBalance",
    "client.accounts.retrieveIntrafiBalance",
    "client.accounts.update",
    "client.achPrenotifications.create",
    "client.achPrenotifications.list",
    "client.achPrenotifications.retrieve",
    "client.achTransfers.approve",
    "client.achTransfers.cancel",
    "client.achTransfers.create",
    "client.achTransfers.list",
    "client.achTransfers.retrieve",
    "client.bookkeepingAccounts.create",
    "client.bookkeepingAccounts.list",
    "client.bookkeepingAccounts.retrieveBalance",
    "client.bookkeepingAccounts.update",
    "client.bookkeepingEntries.list",
    "client.bookkeepingEntries.retrieve",
    "client.bookkeepingEntrySets.create",
    "client.bookkeepingEntrySets.list",
    "client.bookkeepingEntrySets.retrieve",
    "client.cardDisputes.create",
    "client.cardDisputes.list",
    "client.cardDisputes.retrieve",
    "client.cardDisputes.submitUserSubmission",
    "client.cardDisputes.withdraw",
    "client.cardPayments.list",
    "client.cardPayments.retrieve",
    "client.cardPurchaseSupplements.list",
    "client.cardPurchaseSupplements.retrieve",
    "client.cardPushTransfers.approve",
    "client.cardPushTransfers.cancel",
    "client.cardPushTransfers.create",
    "client.cardPushTransfers.list",
    "client.cardPushTransfers.retrieve",
    "client.cardTokens.list",
    "client.cardTokens.retrieve",
    "client.cardTokens.retrieveCapabilities",
    "client.cardValidations.create",
    "client.cardValidations.list",
    "client.cardValidations.retrieve",
    "client.cards.create",
    "client.cards.createDetailsIframe",
    "client.cards.list",
    "client.cards.retrieve",
    "client.cards.retrieveDetails",
    "client.cards.update",
    "client.cards.updatePin",
    "client.checkDeposits.create",
    "client.checkDeposits.list",
    "client.checkDeposits.retrieve",
    "client.checkTransfers.approve",
    "client.checkTransfers.cancel",
    "client.checkTransfers.create",
    "client.checkTransfers.list",
    "client.checkTransfers.retrieve",
    "client.checkTransfers.stopPayment",
    "client.declinedTransactions.list",
    "client.declinedTransactions.retrieve",
    "client.digitalCardProfiles.archive",
    "client.digitalCardProfiles.clone",
    "client.digitalCardProfiles.create",
    "client.digitalCardProfiles.list",
    "client.digitalCardProfiles.retrieve",
    "client.digitalWalletTokens.list",
    "client.digitalWalletTokens.retrieve",
    "client.entities.archive",
    "client.entities.create",
    "client.entities.list",
    "client.entities.retrieve",
    "client.entities.update",
    "client.entityBeneficialOwners.archive",
    "client.entityBeneficialOwners.create",
    "client.entityBeneficialOwners.list",
    "client.entityBeneficialOwners.retrieve",
    "client.entityBeneficialOwners.update",
    "client.entitySupplementalDocuments.create",
    "client.entitySupplementalDocuments.list",
    "client.eventSubscriptions.create",
    "client.eventSubscriptions.list",
    "client.eventSubscriptions.retrieve",
    "client.eventSubscriptions.update",
    "client.events.list",
    "client.events.retrieve",
    "client.exports.create",
    "client.exports.list",
    "client.exports.retrieve",
    "client.externalAccounts.create",
    "client.externalAccounts.list",
    "client.externalAccounts.retrieve",
    "client.externalAccounts.update",
    "client.fednowTransfers.approve",
    "client.fednowTransfers.cancel",
    "client.fednowTransfers.create",
    "client.fednowTransfers.list",
    "client.fednowTransfers.retrieve",
    "client.fileLinks.create",
    "client.files.create",
    "client.files.list",
    "client.files.retrieve",
    "client.groups.retrieveCurrent",
    "client.inboundACHTransfers.createNotificationOfChange",
    "client.inboundACHTransfers.decline",
    "client.inboundACHTransfers.list",
    "client.inboundACHTransfers.retrieve",
    "client.inboundACHTransfers.return",
    "client.inboundCheckDeposits.decline",
    "client.inboundCheckDeposits.list",
    "client.inboundCheckDeposits.retrieve",
    "client.inboundCheckDeposits.return",
    "client.inboundFednowTransfers.list",
    "client.inboundFednowTransfers.retrieve",
    "client.inboundMailItems.action",
    "client.inboundMailItems.list",
    "client.inboundMailItems.retrieve",
    "client.inboundRealTimePaymentsTransfers.list",
    "client.inboundRealTimePaymentsTransfers.retrieve",
    "client.inboundWireDrawdownRequests.list",
    "client.inboundWireDrawdownRequests.retrieve",
    "client.inboundWireTransfers.list",
    "client.inboundWireTransfers.retrieve",
    "client.inboundWireTransfers.reverse",
    "client.intrafiAccountEnrollments.create",
    "client.intrafiAccountEnrollments.list",
    "client.intrafiAccountEnrollments.retrieve",
    "client.intrafiAccountEnrollments.unenroll",
    "client.intrafiExclusions.archive",
    "client.intrafiExclusions.create",
    "client.intrafiExclusions.list",
    "client.intrafiExclusions.retrieve",
    "client.lockboxes.create",
    "client.lockboxes.list",
    "client.lockboxes.retrieve",
    "client.lockboxes.update",
    "client.oauth.createToken",
    "client.oauthApplications.list",
    "client.oauthApplications.retrieve",
    "client.oauthConnections.list",
    "client.oauthConnections.retrieve",
    "client.pendingTransactions.create",
    "client.pendingTransactions.list",
    "client.pendingTransactions.release",
    "client.pendingTransactions.retrieve",
    "client.physicalCardProfiles.archive",
    "client.physicalCardProfiles.clone",
    "client.physicalCardProfiles.create",
    "client.physicalCardProfiles.list",
    "client.physicalCardProfiles.retrieve",
    "client.physicalCards.create",
    "client.physicalCards.list",
    "client.physicalCards.retrieve",
    "client.physicalCards.update",
    "client.programs.list",
    "client.programs.retrieve",
    "client.realTimeDecisions.action",
    "client.realTimeDecisions.retrieve",
    "client.realTimePaymentsTransfers.approve",
    "client.realTimePaymentsTransfers.cancel",
    "client.realTimePaymentsTransfers.create",
    "client.realTimePaymentsTransfers.list",
    "client.realTimePaymentsTransfers.retrieve",
    "client.routingNumbers.list",
    "client.simulations.confirmFuelAuthorization",
    "client.simulations.createAccountStatement",
    "client.simulations.createCardAuthorization",
    "client.simulations.createCardBalanceInquiry",
    "client.simulations.createCardToken",
    "client.simulations.createDigitalWalletTokenRequest",
    "client.simulations.createInboundACHTransfer",
    "client.simulations.createInboundFednowTransfer",
    "client.simulations.createInboundMailItem",
    "client.simulations.createInboundRealTimePaymentsTransfer",
    "client.simulations.createInboundWireDrawdownRequest",
    "client.simulations.createInboundWireTransfer",
    "client.simulations.createInterestPayment",
    "client.simulations.createProgram",
    "client.simulations.expireCardAuthorization",
    "client.simulations.generateTaxFormExport",
    "client.simulations.incrementCardAuthorization",
    "client.simulations.refundCardTransaction",
    "client.simulations.reverseCardAuthorization",
    "client.simulations.settleCardAuthorization",
    "client.simulations.accountTransfers.completeTransfer",
    "client.simulations.achTransfers.acknowledge",
    "client.simulations.achTransfers.createNotificationOfChange",
    "client.simulations.achTransfers.return",
    "client.simulations.achTransfers.settle",
    "client.simulations.achTransfers.submit",
    "client.simulations.cardAuthentications.create",
    "client.simulations.cardAuthentications.createChallenge",
    "client.simulations.cardAuthentications.createChallengeAttempt",
    "client.simulations.cardDisputes.advanceState",
    "client.simulations.checkDeposits.adjust",
    "client.simulations.checkDeposits.reject",
    "client.simulations.checkDeposits.return",
    "client.simulations.checkDeposits.submit",
    "client.simulations.checkTransfers.mail",
    "client.simulations.inboundCheckDeposits.adjust",
    "client.simulations.inboundCheckDeposits.create",
    "client.simulations.pendingTransactions.releaseInboundFundsHold",
    "client.simulations.physicalCards.advanceShipment",
    "client.simulations.physicalCards.createTrackingUpdate",
    "client.simulations.realTimePaymentsTransfers.complete",
    "client.simulations.wireDrawdownRequests.refuse",
    "client.simulations.wireDrawdownRequests.submit",
    "client.simulations.wireTransfers.reverse",
    "client.simulations.wireTransfers.submit",
    "client.swiftTransfers.approve",
    "client.swiftTransfers.cancel",
    "client.swiftTransfers.create",
    "client.swiftTransfers.list",
    "client.swiftTransfers.retrieve",
    "client.transactions.list",
    "client.transactions.retrieve",
    "client.wireDrawdownRequests.create",
    "client.wireDrawdownRequests.list",
    "client.wireDrawdownRequests.retrieve",
    "client.wireTransfers.approve",
    "client.wireTransfers.cancel",
    "client.wireTransfers.create",
    "client.wireTransfers.list",
    "client.wireTransfers.retrieve"
  ],
  { threshold: 1, shouldSort: true },
);

function getMethodSuggestions(fullyQualifiedMethodName: string): string[] {
  return fuse
    .search(fullyQualifiedMethodName)
    .map(({ item }) => item)
    .slice(0, 5);
}

const proxyToObj = new WeakMap<any, any>();
const objToProxy = new WeakMap<any, any>();

type ClientProxyConfig = {
  path: string[];
  isBelievedBad?: boolean;
};

function makeSdkProxy<T extends object>(obj: T, { path, isBelievedBad = false }: ClientProxyConfig): T {
  let proxy: T = objToProxy.get(obj);

  if (!proxy) {
    proxy = new Proxy(obj, {
      get(target, prop, receiver) {
        const propPath = [...path, String(prop)];
        const value = Reflect.get(target, prop, receiver);

        if (isBelievedBad || (!(prop in target) && value === undefined)) {
          // If we're accessing a path that doesn't exist, it will probably eventually error.
          // Let's proxy it and mark it bad so that we can control the error message.
          // We proxy an empty class so that an invocation or construction attempt is possible.
          return makeSdkProxy(class {}, { path: propPath, isBelievedBad: true });
        }

        if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
          return makeSdkProxy(value, { path: propPath, isBelievedBad });
        }

        return value;
      },

      apply(target, thisArg, args) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a function. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.apply(target, proxyToObj.get(thisArg) ?? thisArg, args);
      },

      construct(target, args, newTarget) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a constructor. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.construct(target, args, newTarget);
      },
    });

    objToProxy.set(obj, proxy);
    proxyToObj.set(proxy, obj);
  }

  return proxy;
}

function parseError(code: string, error: unknown): string | undefined {
  if (!(error instanceof Error)) return;
  const cause = error.cause instanceof Error ? `: ${error.cause.message}` : '';
  const message = error.name ? `${error.name}: ${error.message}${cause}` : `${error.message}${cause}`;
  try {
    // Deno uses V8; the first "<anonymous>:LINE:COLUMN" is the top of stack.
    const lineNumber = error.stack?.match(/<anonymous>:([0-9]+):[0-9]+/)?.[1];
    // -1 for the zero-based indexing
    const line = lineNumber && code.split('\n').at(parseInt(lineNumber, 10) - 1)?.trim();
    return line ? `${message}\n  at line ${lineNumber}\n    ${line}` : message;
  } catch {
    return message;
  }
}

const fetch = async (req: Request): Promise<Response> => {
  const { opts, code } = (await req.json()) as { opts: ClientOptions; code: string };

  const runFunctionSource = code ? getRunFunctionSource(code) : null;
  if (!runFunctionSource) {
    const message = code
      ? 'The code is missing a top-level `run` function.'
      : 'The code argument is missing. Provide one containing a top-level `run` function.';
    return Response.json(
      {
        is_error: true,
        result: `${message} Write code within this template:\n\n\`\`\`\nasync function run(client) {\n  // Fill this out\n}\n\`\`\``,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const diagnostics = getTSDiagnostics(code);
  if (diagnostics.length > 0) {
    return Response.json(
      {
        is_error: true,
        result: `The code contains TypeScript diagnostics:\n${diagnostics.join('\n')}`,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const client = new YolkenIncreaseTest({
    ...opts,
  });

  const log_lines: string[] = [];
  const err_lines: string[] = [];
  const originalConsole = globalThis.console;
  globalThis.console = {
    ...originalConsole,
    log: (...args: unknown[]) => {
      log_lines.push(util.format(...args));
    },
    error: (...args: unknown[]) => {
      err_lines.push(util.format(...args));
    },
  };
  try {
    let run_ = async (client: any) => {};
    run_ = (await tseval(`${code}\nexport default run;`)).default;
    const result = await run_(makeSdkProxy(client, { path: ["client"] }));
    return Response.json({
      is_error: false,
      result,
      log_lines,
      err_lines,
    } satisfies WorkerOutput);
  } catch (e) {
    return Response.json(
      {
        is_error: true,
        result: parseError(code, e),
        log_lines,
        err_lines,
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  } finally {
    globalThis.console = originalConsole;
  }
};

export default { fetch };
