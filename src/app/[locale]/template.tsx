import ClientProvider from "@/context/ClientProvider";
import React from "react";

export default function template({ children }: React.PropsWithChildren) {
    return <ClientProvider>{children}</ClientProvider>;
}
