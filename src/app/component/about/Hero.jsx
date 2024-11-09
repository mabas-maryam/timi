import Image from "next/image";
import Food from "../../../../public/assets/food.svg";
import AboutHero from "../../../../public/assets/about-us-hero.svg";

const Hero = () => {
    return (
        <>
            <div className="bg-gray">
                <div className="m-auto grid grid-cols-2 justify-between items-center">
                    <div className="flex flex-col gap-10 p-20">
                        <h3 className="font-bold text-[52px]">
                            FoodInventoryPro and data management
                        </h3>
                        <p className="text-xl">
                            We&#39;re passionate about revolutionizing food
                            inventory management.
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <Image className="w-[636px]" src={AboutHero} alt="About us hero image" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
