import Image from "next/image";
import Feature1 from "../../../public/assets/feature-1.svg";
import Feature2 from "../../../public/assets/feature-2.svg";
import Feature3 from "../../../public/assets/feature-3.svg";
import CustomButton from "./common/CustomButton";
import {BiArrowBack, BiLeftArrow} from "react-icons/bi";

const BackNav = () => {
    return (
        <>
            <div className="container m-auto">
                <div className="flex items-center gap-2 my-10 font-bold text-xl">
                    <BiArrowBack />
                    <div className="">Back</div>
                </div>
            </div>
        </>
    );
};

export default BackNav;
