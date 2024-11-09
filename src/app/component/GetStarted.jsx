import Image from "next/image";
import Feature1 from "../../../public/assets/feature-1.svg";
import Feature2 from "../../../public/assets/feature-2.svg";
import Feature3 from "../../../public/assets/feature-3.svg";
import CustomButton from "./common/CustomButton";
import {BiArrowBack, BiLeftArrow} from "react-icons/bi";

const GetStarted = () => {
    return (
        <>
            <div className="m-auto bg-primary h-[401px]">
              <div className="flex flex-col gap-8 p-20 w-1/2 m-auto text-center text-white">
                  <h2 className="font-bold text-[52px]">Get started for free</h2>
                  <p className="font-bold text-xl">No payment needed. Start optimizing your food inventory today.</p>
                  <div className="flex gap-2">
                      <CustomButton text="Start Now" btnClassName="bg-black text-white" />
                      <CustomButton text="Contact Us" btnClassName="bg-black text-white" />
                  </div>
              </div>
            </div>
        </>
    );
};

export default GetStarted;
