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
export default function LanguagesDrawer() {
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
                        </DrawerClose>
                        <DrawerClose>
                            <Button
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
                        </DrawerClose>
                        <DrawerClose>
                            <Button
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
