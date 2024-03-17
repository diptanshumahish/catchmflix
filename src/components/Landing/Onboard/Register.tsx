import LogoImage from "@/components/Common/Logo/LogoImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { prettify } from "@/services/extensions/string";
import { useTranslations } from "next-intl";
import React from "react";
import { toast } from "sonner";
import RegisterButton from "./RegisterButton";

export default function Register() {
    const t = useTranslations();
    return (
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-between">
            <div className="flex flex-col  gap-1 lg:max-w-[45%]">
                <LogoImage size={180} />
                <h3 className="text-4xl font-bold text-primary-cyan">
                    {prettify(t("register"))}
                </h3>
                <span className="text-secondary-text">
                    {t("useLoginInfo")}{" "}
                    <a
                        className="text-white font-medium"
                        href="mailto:contact@catchmflix.com"
                    >
                        contact@catchmflix.com
                    </a>
                </span>
            </div>
            <div className="g:w-[50%] w-full">
                <form action="" className="flex flex-col gap-3">
                    <div className="text-sm text-secondary-text">
                        {t("fill")}
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <span className="font-medium">Full Name</span>
                        <Input type="text" placeholder="Ajay Sharma" />
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <span className="font-medium">email</span>
                        <Input type="email" placeholder="johdoe@gmail.com" />
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <span className="font-medium">Mobile number</span>
                        <Input type="tel" placeholder="+91 1234567890" />
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <span className="font-medium">
                            City, where you reside
                        </span>
                        <Input type="text" placeholder="Telengana" />
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <span className="font-medium">Area zip code</span>
                        <Input type="number" placeholder="123123" />
                    </div>

                    <div className="flex flex-col gap-1 ">
                        <span className="font-medium">create password</span>
                        <Input type="password" placeholder="****" />
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <span className="font-medium">re enter password</span>
                        <Input type="password" placeholder="****" />
                    </div>
                    <RegisterButton content={t("register")} />
                </form>
            </div>
        </div>
    );
}
