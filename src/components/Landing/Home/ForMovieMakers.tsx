import NewLink from "@/components/Common/Navigation/NewLink";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Film } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function ForMovieMakers() {
    const t = useTranslations();
    return (
        <div className="bg-primary-cyan w-full lg:px-[8%] px-[5%] py-6 flex flex-col lg:gap-0 gap-4 ">
            <span className="bg-design-black px-4 rounded-md text-primary-cyan py-1 w-fit">
                {t("aOp")}
            </span>
            <div className="flex justify-between lg:flex-row flex-col-reverse  lg:items-center">
                <h2 className="lg:text-6xl font-medium text-4xl lg:w-[60%]">
                    {t("offer")}
                </h2>
                <Film size={80} />
            </div>
            <span className="lg:text-lg  lg:w-[70%]">{t("ad2")}</span>
            <Button className="w-fit bg-transparent text-design-black px-0 border-b border-black rounded-none">
                <NewLink
                    link="/onboard"
                    className="flex items-center text-lg font-medium"
                    data={
                        <>
                            {t("letsGo")} <ArrowUpRight />
                        </>
                    }
                />
            </Button>
        </div>
    );
}
