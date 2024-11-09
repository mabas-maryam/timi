import Image from "next/image";
import Navbar from "@/app/component/Navbar";
import Hero from "@/app/component/Hero";
import Feature from "@/app/component/Feature";
import Footer from "@/app/component/Footer";

export default function Home() {
    return (
        <div className="m-auto">
            <Navbar />
            <Hero />
            <Feature />
            <Footer />
        </div>
    );
}
