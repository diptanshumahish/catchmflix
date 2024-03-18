"use client";
import { Button } from "@/components/ui/button";
import { prettify } from "@/services/extensions/string";
import React from "react";
import { toast } from "sonner";

interface Props {
    content: string;
}
export default function RegisterButton({ content }: Props) {
    return (
        <Button
            className="bg-primary-cyan text-black"
            onClick={(e) => {
                e.preventDefault();
                toast(`registrations for CatchMflixx users coming soon `, {
                    description: "Stay Tuned ✅",
                });
            }}
        >
            {prettify(content)}
        </Button>
    );
}
