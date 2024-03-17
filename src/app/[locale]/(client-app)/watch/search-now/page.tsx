import HeaderSlider from "@/components/MainApp/Header/HeaderSlider";
import SearchSlider from "@/components/MainApp/Header/SearchSlider";
import SearchMainArea from "@/components/MainApp/Search/SearchMainArea";
import React from "react";

export default function page() {
    return (
        <div>
            <SearchSlider />
            <SearchMainArea />
        </div>
    );
}
