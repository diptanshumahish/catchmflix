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
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import useLanguage from "@/state-management/state/language.state";
export default function LanguagesDrawer() {
    const { lang, setLang } = useLanguage();
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
                    <div className="flex items-center gap-4 py-4 justify-center flex-wrap">
                        <DrawerClose>
                            <Button
                                onClick={() => {
                                    setLang({ lang: "en" });
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
                                    );
                                }}
                            >
                                English (EN)
                            </Button>
                        </DrawerClose>
                        <DrawerClose>
                            <Button
                                onClick={() => {
                                    setLang({ lang: "tg" });
                                    toast("భాష తెలుగుకు సెట్ చేయబడింది", {
                                        description: "చూడటం ఆనందంగా ఉంది!",
                                        action: {
                                            label: "పూర్తి",
                                            onClick: () => console.log("close"),
                                        },
                                    });
                                }}
                            >
                                Telugu
                            </Button>
                        </DrawerClose>
                    </div>

                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
