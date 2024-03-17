import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
export default function PricingDiv() {
    const t = useTranslations();
    return (
        <div className="py-[5%] z-10 flex items-center justify-center">
            <Tabs defaultValue="Premium" className="lg:w-[600px] z-10 w-full">
                <TabsList className="grid w-full grid-cols-3 z-10">
                    <TabsTrigger value="Premium">Premium</TabsTrigger>
                    <TabsTrigger value="Prime">Prime</TabsTrigger>
                    <TabsTrigger value="Family">Family</TabsTrigger>
                </TabsList>
                <TabsContent value="Premium">
                    <div className="flex flex-col py-8 border border-primary-cyan border-opacity-40 px-8 rounded-md text-white text-4xl">
                        <h2>{t("comingsoon")}</h2>
                        <h3 className="text-5xl text-primary-cyan font-semibold">
                            {t("tillThenFree")}
                        </h3>
                    </div>
                </TabsContent>
                <TabsContent value="Prime">
                    <div className="flex flex-col py-8 border border-primary-cyan border-opacity-40 px-8 rounded-md text-white text-4xl">
                        <h2>{t("comingsoon")}</h2>
                        <h3 className="text-5xl text-primary-cyan font-semibold">
                            {t("getpopcorns")}
                        </h3>
                    </div>
                </TabsContent>
                <TabsContent value="Family">
                    <div className="flex flex-col py-8 border border-primary-cyan border-opacity-40 px-8 rounded-md text-white text-4xl">
                        <h2>{t("comingsoon")}</h2>
                        <h3 className="text-5xl text-primary-cyan font-semibold">
                            {t("almostThere")}
                        </h3>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
