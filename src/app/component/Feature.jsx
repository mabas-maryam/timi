import Image from "next/image";
import Feature1 from "../../../public/assets/feature-1.svg";
import Feature2 from "../../../public/assets/feature-2.svg";
import Feature3 from "../../../public/assets/feature-3.svg";
import CustomButton from "./common/CustomButton";

const Feature = () => {
    return (
        <>
            <div className="bg-gray mt-10">
                <div className="container m-auto flex flex-row-reverse p-20">
                    <div className="flex flex-col gap-10">
                        <h3 className="font-bold text-[40px] leading-10">
                            FoodInventoryPro and data management
                        </h3>
                        <p className="text-xl">
                            FoodInventoryPro ensures efficient food
                            storage management. Its system is user-friendly, accessible, and reliable for all users.
                            It revolutionizes the way food inventory is managed.
                        </p>

                        <CustomButton text='Start managing food' btnClassName="bg-primary"/>
                    </div>
                    <div className="w-full lg:container">
                        <Image className="m-auto w-[446px]" src={Feature1} alt="Feature 1 image" />
                    </div>
                </div>
            </div>

            <div className="bg-white mt-10">
                <div className="container m-auto flex p-20">
                    <div className="flex flex-col gap-10">
                        <h3 className="font-bold text-[40px] leading-10">
                            Optimize your food inventory process
                        </h3>
                        <p className="text-xl">
                            FoodInventoryPro transforms food inventory processes, providing insights for better decision-making and value creation for users.
                        </p>
                    </div>
                    <div className="w-full lg:container">
                        <Image className="m-auto w-[446px]" src={Feature2} alt="Feature 2 image" />
                    </div>
                </div>
            </div>

            <div className="bg-gray mt-10">
                <div className="container m-auto flex flex-row-reverse p-20">
                    <div className="flex flex-col gap-10">
                        <h3 className="font-bold text-[40px] leading-10">
                            Efficient and smart transactions
                        </h3>
                        <p className="text-xl">
                            Explore how FoodInventoryPro's technology streamlines data into actionable insights, enhancing efficiency in food inventory management.
                        </p>

                        <CustomButton text='Start managing food' btnClassName="bg-primary"/>
                    </div>
                    <div className="w-full lg:container">
                        <Image className="m-auto w-[446px]" src={Feature3} alt="Feature 3 image" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feature;
