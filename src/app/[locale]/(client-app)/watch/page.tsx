import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";
export default function page() {
    const lang = getCookie("NEXT_LOCALE") ?? "en";
    redirect(`/${lang}/watch/watch-now`);
}
