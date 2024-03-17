import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./Login";
import Register from "./Register";
import { useTranslations } from "next-intl";
export default function OnboardWrapper() {
    const t = useTranslations();
    return (
        <div className="py-[5%] z-10 flex items-center justify-center">
            <Tabs defaultValue="Login" className="lg:w-[900px] w-[90%]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="Login">{t("login")}</TabsTrigger>
                    <TabsTrigger value="Register">{t("register")}</TabsTrigger>
                </TabsList>
                <TabsContent value="Login">
                    <div className="flex flex-col lg:p-8 p-4 border border-primary-cyan border-opacity-40  rounded-md text-white">
                        <Login />
                    </div>
                </TabsContent>
                <TabsContent value="Register">
                    <div className="flex flex-col lg:p-8 p-4 border border-primary-cyan border-opacity-40  rounded-md text-white ">
                        <Register />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
