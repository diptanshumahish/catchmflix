"use client";
import { Switch } from "@/components/ui/switch";
import { CheckCircle, Crown, HelpCircle, UserCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

const style =
    "border-b hover:bg-white hover:bg-opacity-5 transition-colors cursor-pointer flex justify-between items-center border-white border-opacity-30 pb-2";

export default function SettingsWrapper() {
    return (
        <div className="flex flex-col gap-2">
            <div className={style}>
                <div>
                    <h2 className="font-medium">✨ Raman Sharma</h2>
                    <span className="text-secondary-text">Premium user</span>
                </div>
                <Crown />
            </div>

            <div className={style}>
                <div>
                    <h2 className="font-medium">📌 Profiles Management</h2>
                    <span className="text-secondary-text">
                        Manage your profiles
                    </span>
                </div>
                <UserCheck />
            </div>
            <div className={style}>
                <div>
                    <h2 className="font-medium">
                        ✅ Receive updates for new releases
                    </h2>
                    <span className="text-secondary-text">
                        Keep this turned on if you donot want to miss out on new
                        releases
                    </span>
                </div>
                <Switch className="" />
            </div>
            <div className={style}>
                <div>
                    <h2 className="font-medium">🎞️ Preferred content</h2>
                    <span className="text-secondary-text">
                        select the genres you love
                    </span>
                </div>
                <CheckCircle className="" />
            </div>
            <div className={style}>
                <div>
                    <h2 className="font-medium">📞 Support</h2>
                    <span className="text-secondary-text">
                        Contact us if you need any help
                    </span>
                </div>
                <HelpCircle className="" />
            </div>
            <Link href="/privacy-policy" className="text-secondary-text">
                Privacy Policies
            </Link>
            <Link href="/terms-and-conditions" className="text-secondary-text">
                Terms and conditions
            </Link>
            <div className="text-red-500">Log out</div>
        </div>
    );
}
