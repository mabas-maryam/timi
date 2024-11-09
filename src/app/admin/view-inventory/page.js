import SideNav from "@/app/component/admin/SideNav";
import SearchBar from "@/app/component/common/SearchBar";
import UserCard from "@/app/component/admin/UserCard";
import InventoryCard from "@/app/component/admin/InventoryCard";
import BgLogin from "../../../../public/assets/bg-login.svg";

export default function Home() {
    const inventories = [
        {
            key:1,
            name: "Golden Morn",
            expiryDate: "01/01/2026",
            category: "Fast food",
            numbOfItemsInCategory: 5,
            imageSrc: <BgLogin />,
            description: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
        },
        {
            key:2,
            name: "Golden Morn",
            expiryDate: "01/01/2026",
            category: "Fast food",
            numbOfItemsInCategory: 5,
            imageSrc: <BgLogin />,
            description: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
        },
        {
            key:3,
            name: "Golden Morn",
            expiryDate: "01/01/2026",
            category: "Fast food",
            numbOfItemsInCategory: 5,
            imageSrc: <BgLogin />,
            description: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
        },
        {
            key:4,
            name: "Golden Morn",
            expiryDate: "01/01/2026",
            category: "Fast food",
            numbOfItemsInCategory: 5,
            imageSrc: <BgLogin />,
            description: "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
        },

    ];

    return (
        <div className="flex">
            <SideNav />

            <div className="container mx-auto p-20">
                <SearchBar />

                <h1 className="font-bold text-xl">Users</h1>

                <hr />

                <div className="py-10 flex flex-col gap-10">
                    {
                        inventories.map(({key, name, imageSrc,  numbOfItemsInCategory, category, expiryDate, description}) => (
                            <InventoryCard
                                key={key}
                                imageSrc={imageSrc}
                                name={name}
                                description={description}
                                category={category}
                                expiryDate={expiryDate}
                                numbOfItemsInCategory={numbOfItemsInCategory}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
