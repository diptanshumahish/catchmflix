import LogoImage from "@/components/Common/Logo/LogoImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { static_text } from "@/static/static_text";
import React from "react";

export default function Register() {
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-col  gap-1 max-w-[45%]">
                <LogoImage size={180} />
                <h3 className="text-4xl font-bold text-primary-cyan">
                    Register
                </h3>
                <span className="text-secondary-text">
                    {static_text.en.useLoginInfo}{" "}
                    <a
                        className="text-white font-medium"
                        href="mailto:contact@catchmflix.com"
                    >
                        contact@catchmflix.com
                    </a>
                </span>
            </div>
            <div className="w-[50%]">
                <form action="" className="flex flex-col gap-3">
                    <div className="text-sm text-secondary-text">
                        Please fill up the fields properly
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
                    <Button className="bg-primary-cyan text-black">
                        Register
                    </Button>
                </form>
            </div>
        </div>
    );
}
