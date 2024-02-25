import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { static_text } from "@/static/static_text";
import Login from "./Login";
import Register from "./Register";
export default function OnboardWrapper() {
    return (
        <div className="py-[5%] z-10">
            <Tabs defaultValue="Login" className="lg:w-[900px] w-[300px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="Login">Login</TabsTrigger>
                    <TabsTrigger value="Register">Register</TabsTrigger>
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
