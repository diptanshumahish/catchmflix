import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    active?: boolean;
    selectionFunction?: () => void;
}
export default function Indicator({
    active = false,
    selectionFunction,
}: Props) {
    return (
        <div
            onClick={selectionFunction}
            className={twMerge(
                active
                    ? "bg-white size-[10px] "
                    : "bg-white opacity-35 size-[8px]",
                " rounded-full z-10 border border-white transition-transform cursor-pointer"
            )}
        />
    );
}
