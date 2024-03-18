"use client";
import React, { useTransition } from "react";
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

import { useRouter } from "next/navigation";
import useLanguage from "@/state-management/state/language.state";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NewLink from "./NewLink";

export default function MobileDropdown() {
    const { lang, setLang } = useLanguage();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const onSelectChange = (sel: string) => {
        const nextLocale = sel;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    };
    const commonstyle = "text-white";

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
                                <NewLink anchor link="/" content="Home" />
                            </DrawerClose>
                        </Button>

                        <Button asChild>
                            <DrawerClose>
                                <NewLink
                                    anchor
                                    link="/about-us"
                                    content="About Us"
                                />
                            </DrawerClose>
                        </Button>
                        <Button asChild>
                            <DrawerClose>
                                <NewLink
                                    anchor
                                    link="/pricing"
                                    content="Pricing"
                                />
                            </DrawerClose>
                        </Button>
                        <Button
                            asChild
                            className=" bg-primary-cyan text-black px-6 hover:bg-white hover:text-white"
                        >
                            <DrawerClose>
                                <NewLink
                                    anchor
                                    link="/onboard"
                                    content="Sign In"
                                />
                            </DrawerClose>
                        </Button>
                        <DrawerClose>
                            <span className="text-xs text-secondary-text pt-4">
                                Language selection
                            </span>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="w-full flex items-center justify-center">
                                    <div className="text-white flex items-center gap-1 w-fit justify-center p-2 border border-white rounded-md border-opacity-20">
                                        Change <Languages />
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="bg-black border border-white border-opacity-20">
                                    <DropdownMenuItem className={commonstyle}>
                                        <DrawerClose
                                            onClick={() => {
                                                setLang({ lang: "en" });
                                                onSelectChange("en");
                                            }}
                                        >
                                            English
                                        </DrawerClose>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className={commonstyle}>
                                        <DrawerClose>
                                            <DrawerClose
                                                onClick={() => {
                                                    setLang({ lang: "tg" });
                                                    onSelectChange("te");
                                                }}
                                            >
                                                Telugu
                                            </DrawerClose>
                                        </DrawerClose>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className={commonstyle}>
                                        <DrawerClose>
                                            <DrawerClose
                                                onClick={() => {
                                                    setLang({ lang: "hi" });
                                                    onSelectChange("hi");
                                                }}
                                            >
                                                Hindi
                                            </DrawerClose>
                                        </DrawerClose>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className={commonstyle}>
                                        <DrawerClose>
                                            <DrawerClose
                                                onClick={() => {
                                                    setLang({ lang: "kn" });
                                                    onSelectChange("kn");
                                                }}
                                            >
                                                Kannada
                                            </DrawerClose>
                                        </DrawerClose>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className={commonstyle}>
                                        <DrawerClose>
                                            <DrawerClose
                                                onClick={() => {
                                                    setLang({ lang: "ta" });
                                                    onSelectChange("ta");
                                                }}
                                            >
                                                Tamil
                                            </DrawerClose>
                                        </DrawerClose>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className={commonstyle}>
                                        <DrawerClose>
                                            <DrawerClose
                                                onClick={() => {
                                                    setLang({ lang: "ml" });
                                                    onSelectChange("ml");
                                                }}
                                            >
                                                Malayalam
                                            </DrawerClose>
                                        </DrawerClose>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
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
