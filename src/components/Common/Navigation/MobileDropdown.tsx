"use client";
import React from "react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Languages, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Link from "next/link";
import LanguagesDrawer from "./LanguagesDrawer";

export default function MobileDropdown() {
    return (
        <Drawer>
            <DrawerTrigger className="flex items-center lg:hidden">
                <Menu color="white" />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-white flex flex-col items-center justify-center">
                    <DrawerTitle className="flex gap-2 items-center">
                        Navigation menu
                    </DrawerTitle>
                    <DrawerDescription>
                        Where do you want to go?
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <div className="flex flex-col  text-white justify-center items-center py-6  gap-2 ">
                        <Button asChild>
                            <DrawerClose>
                                <a href="/">Home</a>{" "}
                            </DrawerClose>
                        </Button>

                        <Button asChild>
                            <DrawerClose>
                                <a href="/about-us">About Us</a>
                            </DrawerClose>
                        </Button>
                        {/* <Button asChild>
                            <DrawerClose>
                                <a href="/pricing">Pricing</a>
                            </DrawerClose>
                        </Button> */}
                        <Button asChild>
                            <DrawerClose>
                                <a href="/prizes">Prizes</a>
                            </DrawerClose>
                        </Button>
                        <Button
                            asChild
                            className=" bg-primary-cyan text-black px-6 hover:bg-white hover:text-white"
                        >
                            <DrawerClose>
                                <a href="/onboard">Sign In</a>
                            </DrawerClose>
                        </Button>
                        <DrawerClose>
                            <span className="text-xs text-secondary-text pt-4">
                                Language selection
                            </span>
                            <div className="flex items-center  gap-1  justify-center flex-wrap">
                                <Button
                                    className="text-xs"
                                    onClick={() =>
                                        toast(
                                            "Language has been set to English(EN)",
                                            {
                                                description: "Happy watching!",
                                                action: {
                                                    label: "Done",
                                                    onClick: () =>
                                                        console.log("close"),
                                                },
                                            }
                                        )
                                    }
                                >
                                    English (EN)
                                </Button>
                                <Button
                                    className="text-xs"
                                    onClick={() =>
                                        toast(
                                            "Language has been set to Telegu(TG)",
                                            {
                                                description: "Happy watching!",
                                                action: {
                                                    label: "Done",
                                                    onClick: () =>
                                                        console.log("close"),
                                                },
                                            }
                                        )
                                    }
                                >
                                    Telegu (TN)
                                </Button>
                                <Button
                                    className="text-xs"
                                    onClick={() =>
                                        toast(
                                            "Language has been set to Hindi(HN)",
                                            {
                                                description: "Happy watching!",
                                                action: {
                                                    label: "Done",
                                                    onClick: () =>
                                                        console.log("close"),
                                                },
                                            }
                                        )
                                    }
                                >
                                    Hindi (HN)
                                </Button>
                            </div>
                        </DrawerClose>
                    </div>
                    <DrawerClose>
                        <Button variant="outline">Close</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
