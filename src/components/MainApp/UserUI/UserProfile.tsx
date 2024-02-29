import Image from "next/image";
import React from "react";
import { toast } from "sonner";

interface Props {
    name: string;
    image: string;
}

export default function UserProfile({ name, image }: Props) {
    return (
        <div
            className="flex flex-col items-center justify-center gap-1 text-white"
            onClick={() => {
                toast(`Welcome back ${name}, let's watch some stuff `, {
                    description: "Happy watching!",
                });
            }}
        >
            <Image
                src={`/userprofiles/person${image}.svg`}
                height={60}
                width={60}
                alt={name}
                className="lg:size-14  size-10 aspect-square rounded-sm"
            />
            <span>{name}</span>
        </div>
    );
}
