import Image from "next/image";
import React from "react";

interface Props {
    imageLink: string;
}
export default function ImageGradientHeader({ imageLink }: Props) {
    return (
        <>
            <Image
                src={imageLink}
                height={900}
                width={1920}
                alt="Background image"
                className="h-[70vh] -z-0 w-screen absolute top-0 left-0 right-0 object-cover"
            />
            <div className="absolute h-[70vh] top-0 left-0 right-0 bg-gradient-to-b from-transparent to-design-black" />
        </>
    );
}
