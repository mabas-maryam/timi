import NavBar from "@/app/component/NavBar";
import Hero from "@/app/component/about/Hero";
import OurFood from "@/app/component/about/OurFood";
import OurTeam from "@/app/component/about/OurTeam";
import GetStarted from "@/app/component/GetStarted";

export default function Home() {
    return (
        <div className="m-auto">
            <NavBar />
            <Hero />
            <OurFood />
            <OurTeam />
            <GetStarted />
        </div>
    );
}
