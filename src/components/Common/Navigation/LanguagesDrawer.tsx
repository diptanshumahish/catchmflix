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
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import useLanguage from "@/state-management/state/language.state";
import { useRouter } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function LanguagesDrawer() {
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
            <DrawerTrigger className="flex items-center gap-1">
                Language <Languages size={15} />{" "}
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-white flex flex-col items-center justify-center">
                    <DrawerTitle className="flex gap-2 items-center">
                        Select Your desired language <Languages />
                    </DrawerTitle>
                    <DrawerDescription>
                        Chose from the various languages we support in our
                        application
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
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

                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
