import Image from "next/image";
import Feature1 from "../../../public/assets/feature-1.svg";
import Feature2 from "../../../public/assets/feature-2.svg";
import Feature3 from "../../../public/assets/feature-3.svg";
import CustomButton from "./common/CustomButton";

const Footer = () => {
    return (
        <>
            <div className="my-10">
                <div className="container m-auto">
                    <div className="text-[40px]">Food Inventory</div>
                    <p className="text-xl">Your go-to platform for managing food inventory with ease.</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
