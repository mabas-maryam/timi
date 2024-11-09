import Link from "next/link";
import {BiMenu, BiPlus, BiSearch} from "react-icons/bi";

const SideNav = () => {

    const navLinks = [
        { name: "Dashboard", link: "/admin", icon: <BiMenu /> },
        { name: "View Users", link: "/admin/view-users", icon: <BiSearch /> },
        { name: "View Inventory", link: "/admin/view-inventory", icon: <BiSearch /> },
        { name: "Add Users", link: "/admin/add-users", icon: <BiPlus /> },
    ];

    return (
        <>
            <div className="h-screen w-2/12 bg-gray">
                <ul className="flex flex-col gap-8 py-40 px-8">
                    {navLinks.map((item, index) => (
                        <li key={index}>
                            <Link
                                className="font-semibold"
                                href={item.link}
                            >
                                <div className="flex gap-2 justify-start items-center">
                                    {item.icon}
                                    {item.name}
                                </div>
                            </Link>
                        </li>
                    ))}
                   <div className="pt-8">
                       <Link className="font-semibold" href={'/admin/login'}>
                           Logout
                       </Link>
                   </div>
                </ul>
            </div>
        </>
    );
};

export default SideNav;
