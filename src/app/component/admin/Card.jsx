import Link from "next/link";
import {BiMenu, BiPlus, BiSearch} from "react-icons/bi";

const Card = ({title, body}) => {

    const navLinks = [
        { name: "Dashboard", link: "/add-item", icon: <BiMenu /> },
        { name: "View Users", link: "/view-users", icon: <BiSearch /> },
        { name: "Add Users", link: "/add-users", icon: <BiPlus /> },
    ];

    return (
        <>
            <div className="flex flex-col justify-center items-start px-8 w-[345px] h-[148px] rounded-3xl bg-gray">
                <h2 className="font-bold text-xl">{title}</h2>
                <p className="text-xl">{body}</p>
            </div>
        </>
    );
};

export default Card;
