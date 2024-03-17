import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["en", "te", "hi", "kn", "ta"],
    defaultLocale: "en",
});

export const config = {
    matcher: ["/", "/(te|en|hi|kn|ta)/:path*"],
};
