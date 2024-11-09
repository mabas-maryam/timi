import {BsThreeDotsVertical} from "react-icons/bs";
import Image from "next/image";
import BgLogin from "../../../../public/assets/bg-login.svg";

const InventoryCard = (
    {
        name,
        imageSrc,
        expiryDate,
        category,
        numbOfItemsInCategory,
        description
    }
) => {
    return (
        <>
            <div className="border-0 border-b-2 p-4 flex items-center justify-between">
                <div className="flex items-center">
                    <div>
                        <Image className="w-48 h-20" src={BgLogin} alt="Inventory image" />
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    );
};

export default InventoryCard;
