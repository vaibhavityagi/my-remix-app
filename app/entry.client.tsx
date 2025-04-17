import * as Sentry from "@sentry/remix";
/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser, useLocation, useMatches } from "@remix-run/react";
import { startTransition, StrictMode, useEffect } from "react";
import { hydrateRoot } from "react-dom/client";

Sentry.init({
    dsn: "https://a534143fa04badb1b65bd7b3501fa6f7@o4509152597704704.ingest.de.sentry.io/4509152599933008",
    tracesSampleRate: 1,

    integrations: [Sentry.browserTracingIntegration({
      useEffect,
      useLocation,
      useMatches
    })]
})

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});