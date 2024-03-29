import { AxiosResponse, isAxiosError } from "axios";

const baseUrl = {
    development: "https://lunar-linker-397305.el.r.appspot.com",
    production: "https://lunar-linker-397305.el.r.appspot.com",
};

export const getBaseUrl = () =>
    process.env.NODE_ENV === "development"
        ? baseUrl.development
        : baseUrl.production;

export async function apiCalls<T = unknown>(
    callback: () => Promise<AxiosResponse<T>>
) {
    const response: { data: T | null; error: any } = {
        data: null,
        error: null,
    };
    try {
        const res = await callback();
        console.log("request to: ", res.config.method, " ");
        response.data = res.data;
        // console.log("\n\n");
        // console.log(`Headers: ${JSON.stringify(res.config.headers, null, 2)}`);
        // console.log("\n");
        // console.log(`Response from: ${res.config.method} ${res.config.url}`);
        // console.log(JSON.stringify(res.data, null, 2));
        // console.log("\n\n");
    } catch (error) {
        if (isAxiosError(error)) {
            response.error = error.response?.data;
            console.log("\n\n");
            console.log(
                `Error Response from: ${error.config?.method} ${error.config?.baseURL}${error.config?.url}`
            );
            console.log(JSON.stringify(error, null, 2));
            console.log(JSON.stringify(error.config?.data, null, 2));
            console.log(JSON.stringify(error.config?.params, null, 2));
            console.info("\n", JSON.stringify(error.config?.headers, null, 2));
            console.log("\n\n");
        }
    }

    return response;
}

export async function queryCalls<T>(
    callback: () => Promise<AxiosResponse<T, unknown>>
) {
    const res = await callback();

    return res.data;
}
