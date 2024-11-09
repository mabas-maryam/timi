import Link from "next/link";
import {BiMenu, BiPlus, BiSearch} from "react-icons/bi";

const SideNav = () => {

    const navLinks = [
        { name: "Dashboard", link: "/admin/add-item", icon: <BiMenu /> },
        { name: "View Users", link: "/admin/view-users", icon: <BiSearch /> },
        { name: "Add Users", link: "/admin/add-users", icon: <BiPlus /> },
    ];

    return (
        <>
            <div className="h-screen w-2/12 bg-gray">
                <ul className="flex flex-col gap-8 py-40">
                    {navLinks.map((item, index) => (
                        <li key={index}>
                            <Link
                                className="font-semibold"
                                href={item.link}
                            >
                                <div className="flex gap-2 justify-center items-center">
                                    {item.icon}
                                    {item.name}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default SideNav;
