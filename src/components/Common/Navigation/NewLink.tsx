"use client";
import React from "react";
import Link from "next/link";
import {
    usePathname,
    useSelectedLayoutSegment,
    useSelectedLayoutSegments,
} from "next/navigation";
import { getCookie } from "cookies-next";
interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    link: string;
    content?: string;
    data?: JSX.Element;
    anchor?: boolean;
}

export default function NewLink({
    anchor = false,
    data,
    link,
    content,
    ...props
}: Props) {
    const lang = getCookie("NEXT_LOCALE") ?? "en";
    const path = `/${lang}${link}`;
    if (anchor === true) {
        return (
            <a href={path} className={props.className}>
                {content}
                {data}{" "}
            </a>
        );
    }
    return (
        <Link className={props.className} href={path}>
            {content}
            {data}
        </Link>
    );
}
