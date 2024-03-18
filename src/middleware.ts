import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["en", "te", "hi", "kn", "ta", "ml"],
    defaultLocale: "en",
});

export const config = {
    matcher: ["/", "/(te|en|hi|kn|ta|ml)/:path*"],
};
