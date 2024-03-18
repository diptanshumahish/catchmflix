import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://catchmflixx.com",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://catchmflixx.com/about-us",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://catchmflixx.com/oboard",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: "https://catchmflixx.com/pricing",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: "https://catchmflixx.com/privacy-policy",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.2,
        },
    ];
}
