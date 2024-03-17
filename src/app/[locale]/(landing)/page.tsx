import ImageGradientHeader from "@/components/Common/Header/ImageGradientHeader";
import BottomCards from "@/components/Landing/Home/BottomCards";
import ComingSoon from "@/components/Landing/Home/ComingSoon";
import ForMovieMakers from "@/components/Landing/Home/ForMovieMakers";
import HomeFeaturesOne from "@/components/Landing/Home/HomeFeaturesOne";
import HomeFeaturesTwo from "@/components/Landing/Home/HomeFeaturesTwo";
import HomeWrapper from "@/components/Landing/Home/HomeWrapper";
import PingScroller from "@/components/Landing/Home/PingScroller";
import { static_images } from "@/static/static_images";
import { static_text } from "@/static/static_text";

export default function Home() {
    return (
        <main className="relative">
            <HomeWrapper />
            <PingScroller />
            <ForMovieMakers />
            <HomeFeaturesOne />
            <HomeFeaturesTwo />
            <ComingSoon />
            <BottomCards />
        </main>
    );
}
