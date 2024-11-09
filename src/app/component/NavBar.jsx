"use client";
import Image from "next/image";
import Logo from "../../../public/assets/logo.svg";
import Link from "next/link";
import CustomButton from "@/app/component/common/CustomButton";

const navLinks = [
    { name: "Add Items", link: "/add-item" },
    { name: "Contact", link: "/contact" },
    { name: "About Us", link: "/about-us" },
];

const NavBar = () => {

    return (
        <nav className="container m-auto px-5 py-4 lg:px-0 flex justify-between items-center">
            <div className="flex items-center gap-8">
                <div className="flex gap-1 items-center">
                    <Image src={Logo} alt="Logo" />
                    <h2 className="font-semibold text-lg leading-2">Welcome to</h2>
                </div>
                {/* desktop menu */}
                <ul className="hidden lg:flex gap-x-8">
                    {navLinks.map((item, index) => (
                        <li key={index}>
                            <Link
                                className="text-base"
                                href={item.link}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Link href={'/login'}>
                <CustomButton text='Sign In' btnClassName="bg-primary"/>
            </Link>
        </nav>
    );
};

export default NavBar;
