import React from "react";
import Image from "next/image";
import { static_images } from "@/static/static_images";
interface Props {
    size?: number;
}
export default function LogoImage({ size = 40 }: Props) {
    return (
        <Image
            src={static_images.logo}
            height={size}
            width={size}
            alt="main logo for CatchMflixx"
        />
    );
}
