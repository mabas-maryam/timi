import Image from "next/image";
import HeroImage from "../../../public/assets/hero.svg";
import CustomButton from "./common/CustomButton";
import CustomInput from "./common/CustomInput";

const Hero = () => {
  return (
    <div className="container m-auto flex flex-col gap-6">
      <div className="px-5 pt-4 pb-8">
        <h1 className="font-bold text-6xl text-center lg:pt-11 lg:pb-6">
            How does FoodInventoryPro work?
        </h1>
      </div>

        <div className="flex ">
            <div className="">
                <h3 className="font-bold text-[40px] mt-6">
                    Essential features for new users
                </h3>
                <p className="text-xl mt-8">
                    New users can start using FoodInventoryPro without technical
                    knowledge. Go to our website, add items to your inventory, and
                    easily manage your food storage.
                </p>
                <div className="text-3xl mt-16">
                    Don’t Forget, Simple is better
                </div>
            </div>
            <div className="w-full lg:container">
                <Image className="m-auto w-[446px]" src={HeroImage} alt="heroImage" />
            </div>
        </div>
    </div>
  );
};

export default Hero;
