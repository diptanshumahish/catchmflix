"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";

interface Props {
    content: string;
}
export default function LoginButton({ content }: Props) {
    return (
        <Button
            className="bg-primary-cyan text-black"
            onClick={(e) => {
                e.preventDefault();
                toast(`Login/registrations for CatchMFlix users coming soon `, {
                    description: "Stay Tuned ✨",
                });
            }}
        >
            {content}
        </Button>
    );
}
