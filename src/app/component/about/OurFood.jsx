import Image from "next/image";
import Food from "../../../../public/assets/food.svg";
const OurTeam = () => {
    return (
        <>
            <div className="">
                <div className="flex flex-col justify-center items-center m-auto">
                    <div className="flex flex-col gap-4 p-20 text-center">
                        <h3 className="text-[42px]">
                            Our Food Journey
                        </h3>
                        <p className="text-xl">
                            Founded by a group of food enthusiasts, our company has evolved into a leading provider of innovative
                            solutions for managing food inventory effectively.
                        </p>
                    </div>

                    <Image className="w-[1114px]" src={Food} alt="Food image" />
                </div>
            </div>
        </>
    );
};

export default OurTeam;
