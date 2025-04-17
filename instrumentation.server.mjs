import * as Sentry from "@sentry/remix";

Sentry.init({
    dsn: "https://a534143fa04badb1b65bd7b3501fa6f7@o4509152597704704.ingest.de.sentry.io/4509152599933008",
    tracesSampleRate: 1
})