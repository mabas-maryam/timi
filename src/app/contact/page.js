import Image from "next/image";
import BgContact from "../../../public/assets/bg-contact.svg";
import CustomInput from "@/app/component/common/CustomInput";
import CustomButton from "@/app/component/common/CustomButton";
import NavBar from "@/app/component/NavBar";
import CustomTextArea from "@/app/component/common/CustomTextArea";

export default function Home() {
  return (
      <>
          <NavBar />

          <div className="w-2/3 m-auto h-screen flex justify-center items-center">
              <div className="flex justify-center items-center">
                  <Image className="m-auto w-[428px]" src={BgContact} alt="login bg image" />
              </div>
              <div className="flex flex-col w-1/2 m-auto gap-8">
                  <h2 className="font-bold text-[40px]">Contact Us</h2>
                  <p className="">Get in touch for inventory management solutions.</p>
                  <div className="w-full flex flex-col gap-8">
                      <CustomInput
                          type="text"
                          inputLabel="Name"
                          id="user-name"
                      />
                      <CustomInput
                          type="email"
                          inputLabel="Email"
                          placeholder="mabas.maryammabas@gmail.com"
                          id="user-email"
                      />
                     <CustomTextArea
                        inputLabel="Message"
                     />
                  </div>
                  <div className="w-full text-end">
                      <CustomButton
                          text="Send"
                          btnClassName="bg-primary w-fit"
                      />
                  </div>
              </div>
          </div>
      </>
  );
}
