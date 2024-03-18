import LogoImage from "@/components/Common/Logo/LogoImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { prettify } from "@/services/extensions/string";
import { useTranslations } from "next-intl";
import React from "react";
import { toast } from "sonner";
import LoginButton from "./LoginButton";

export default function Login() {
    const t = useTranslations();
    return (
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-between">
            <div className="flex flex-col  gap-1 lg:max-w-[45%]">
                <LogoImage size={180} />
                <h3 className="text-4xl font-bold text-primary-cyan">
                    {prettify(t("login"))}
                </h3>
                <span className="text-secondary-text">
                    {t("useLoginInfo")}
                    <a
                        className="text-white font-medium"
                        href="mailto:contact@CatchMflixx.com"
                    >
                        contact@CatchMflixx.com
                    </a>
                </span>
            </div>
            <div className="lg:w-[50%] w-full">
                <form action="" className="flex flex-col gap-2">
                    <div className="text-sm text-secondary-text">
                        {t("fill")}
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <span className="font-medium">email</span>
                        <Input type="email" placeholder="johdoe@gmail.com" />
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <span className="font-medium">password</span>
                        <Input type="password" placeholder="****" />
                    </div>
                    <LoginButton content="Login" />
                </form>
            </div>
        </div>
    );
}
