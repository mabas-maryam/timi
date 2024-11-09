import Image from "next/image";
import NavBar from "@/app/component/NavBar";
import Hero from "@/app/component/Hero";
import Feature from "@/app/component/Feature";
import Footer from "@/app/component/Footer";
import BackNav from "@/app/component/BackNav";
import AddItemForm from "@/app/component/addItem/AddItemForm";

export default function Home() {
    return (
        <div className="m-auto">
            <NavBar />
            <BackNav />
            <AddItemForm />
        </div>
    );
}
