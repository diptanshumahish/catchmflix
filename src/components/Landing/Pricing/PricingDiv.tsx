import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { static_text } from "@/static/static_text";
export default function PricingDiv() {
    return (
        <div className="py-[5%]  z-10">
            <Tabs
                defaultValue="Premium"
                className="lg:w-[600px] z-10 w-[300px]"
            >
                <TabsList className="grid w-full grid-cols-3 z-10">
                    <TabsTrigger value="Premium">Premium</TabsTrigger>
                    <TabsTrigger value="Prime">Prime</TabsTrigger>
                    <TabsTrigger value="Family">Family</TabsTrigger>
                </TabsList>
                <TabsContent value="Premium">
                    <div className="flex flex-col py-8 border border-primary-cyan border-opacity-40 px-8 rounded-md text-white text-4xl">
                        <h2>{static_text.en.comingsoon}</h2>
                        <h3 className="text-5xl text-primary-cyan font-semibold">
                            {static_text.en.tillThenFree}
                        </h3>
                    </div>
                </TabsContent>
                <TabsContent value="Prime">
                    <div className="flex flex-col py-8 border border-primary-cyan border-opacity-40 px-8 rounded-md text-white text-4xl">
                        <h2>{static_text.en.comingsoon}</h2>
                        <h3 className="text-5xl text-primary-cyan font-semibold">
                            {static_text.en.getpopcorns}
                        </h3>
                    </div>
                </TabsContent>
                <TabsContent value="Family">
                    <div className="flex flex-col py-8 border border-primary-cyan border-opacity-40 px-8 rounded-md text-white text-4xl">
                        <h2>{static_text.en.comingsoon}</h2>
                        <h3 className="text-5xl text-primary-cyan font-semibold">
                            {static_text.en.almostThere}
                        </h3>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
