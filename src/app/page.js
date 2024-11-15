import Image from "next/image";
import NavBar from "@/app/component/NavBar";
import Hero from "@/app/component/Hero";
import Feature from "@/app/component/Feature";
import Footer from "@/app/component/Footer";

export default function Home() {
    return (
        <div className="m-auto">
            <NavBar />
            <Hero />
            <Feature />
            <Footer />
        </div>
    );
}
