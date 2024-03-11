"use client";
import LogoImage from "@/components/Common/Logo/LogoImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { prettify } from "@/services/extensions/string";
import useLanguage from "@/state-management/state/language.state";
import { getStaticText, static_text } from "@/static/static_text";
import React from "react";
import { toast } from "sonner";

export default function Login() {
    const { lang } = useLanguage();
    const stt = getStaticText(lang.lang);
    return (
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-between">
            <div className="flex flex-col  gap-1 lg:max-w-[45%]">
                <LogoImage size={180} />
                <h3 className="text-4xl font-bold text-primary-cyan">
                    {prettify(stt.login)}
                </h3>
                <span className="text-secondary-text">
                    {stt.useLoginInfo}
                    <a
                        className="text-white font-medium"
                        href="mailto:contact@catchmflix.com"
                    >
                        contact@catchmflix.com
                    </a>
                </span>
            </div>
            <div className="lg:w-[50%] w-full">
                <form action="" className="flex flex-col gap-2">
                    <div className="text-sm text-secondary-text">
                        {stt.fill}
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <span className="font-medium">email</span>
                        <Input type="email" placeholder="johdoe@gmail.com" />
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <span className="font-medium">password</span>
                        <Input type="password" placeholder="****" />
                    </div>
                    <Button
                        className="bg-primary-cyan text-black"
                        onClick={(e) => {
                            e.preventDefault();
                            toast(
                                `Login/registrations for CatchMFlix users coming soon `,
                                {
                                    description: "Stay Tuned ✨",
                                }
                            );
                        }}
                    >
                        Log In
                    </Button>
                </form>
            </div>
        </div>
    );
}
