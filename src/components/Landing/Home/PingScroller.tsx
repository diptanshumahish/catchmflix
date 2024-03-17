import { static_images } from "@/static/static_images";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function PingScroller() {
    const t = useTranslations();
    return (
        <div className="flex flex-col justify-center animate-pulse gap-2 items-center py-[5%]">
            <Image
                src={static_images.circleSymbol}
                height={60}
                width={60}
                alt="circle symbol"
                className="object-cover animate-bounce"
            />
            <span className="text-secondary-text">{t("scroll")}</span>
        </div>
    );
}
