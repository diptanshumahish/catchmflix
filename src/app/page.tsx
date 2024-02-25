import ImageGradientHeader from "@/components/Common/Header/ImageGradientHeader";
import BottomCards from "@/components/Landing/Home/BottomCards";
import ComingSoon from "@/components/Landing/Home/ComingSoon";
import HomeFeaturesOne from "@/components/Landing/Home/HomeFeaturesOne";
import HomeFeaturesTwo from "@/components/Landing/Home/HomeFeaturesTwo";
import PingScroller from "@/components/Landing/Home/PingScroller";
import { static_images } from "@/static/static_images";
import { static_text } from "@/static/static_text";

export default function Home() {
    return (
        <main className="relative">
            <div className="relative">
                <ImageGradientHeader
                    imageLink={static_images.dummyBackgrounds[0]}
                />
            </div>
            <div className="flex flex-col gap-8 items-center  pt-[40vh] justify-center w-full">
                <div className="z-10 text-sm text-white bg-secondary-text px-4 py-1 rounded-full bg-opacity-20 border border-white border-opacity-20">
                    {static_text.en.landingTop}
                </div>
                <h2 className="z-10 text-5xl font-medium text-white max-w-[30%] text-center">
                    {static_text.en.landing_header1}{" "}
                    <span className="font-semibold text-primary-cyan">
                        {static_text.en.landing_header2}
                    </span>
                    {static_text.en.landing_header3}{" "}
                    <span className="font-semibold text-primary-cyan">
                        {static_text.en.leading_header4}
                    </span>
                </h2>
            </div>
            <PingScroller />
            <HomeFeaturesOne />
            <HomeFeaturesTwo />
            <ComingSoon />
            <BottomCards />
        </main>
    );
}
