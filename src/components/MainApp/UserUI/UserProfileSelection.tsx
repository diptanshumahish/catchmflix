"use client";
import React from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import UserProfile from "@/components/MainApp/UserUI/UserProfile";
import { static_internal_text } from "@/static/static_internal_text";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const user_profiles = [
    {
        name: "Me",
        image: "1",
    },
    {
        name: "Kevin",
        image: "2",
    },
    {
        name: "Patrick",
        image: "3",
    },
    {
        name: "Arjun",
        image: "4",
    },
];
const UserProfileSelection = () => {
    const stt = static_internal_text.en;
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <Button className="bg-white text-black hover:bg-primary-cyan">
                    {stt.lets_go}
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-secondary-violet border-opacity-30">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-white">
                        {stt.whos_watching}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Select your user profile to start watching
                    </AlertDialogDescription>
                    <div className="flex justify-between pt-6 pb-4">
                        {user_profiles.map((ele, idx) => (
                            <AlertDialogAction
                                className="bg-transparent p-0"
                                key={idx}
                            >
                                <UserProfile
                                    image={ele.image}
                                    name={ele.name}
                                />
                            </AlertDialogAction>
                        ))}
                    </div>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default dynamic(() => Promise.resolve(UserProfileSelection), {
    ssr: false,
});
