import Image from "next/image";
import BgLogin from "../../../public/assets/bg-login.svg";
import CustomInput from "@/app/component/common/CustomInput";
import CustomButton from "@/app/component/common/CustomButton";
import NavBar from "@/app/component/NavBar";
import Hero from "@/app/component/Hero";
import Feature from "@/app/component/Feature";
import Footer from "@/app/component/Footer";

export default function Home() {
  return (
      <>
          <NavBar />

          <div className="grid grid-cols-2">
              <div>
                  <Image className="m-auto w-full" src={BgLogin} alt="login bg image" />
              </div>
              <div className="flex flex-col items-center justify-center w-1/2 m-auto gap-8">
                  <h2 className="font-bold text-[40px]">Log In</h2>
                  <div className="w-full flex flex-col gap-8">
                      <CustomInput
                          type="email"
                          inputLabel="Enter your email"
                          placeholder="mabas.maryammabas@gmail.com"
                          id="user-email"
                      />
                      <CustomInput
                          type="password"
                          inputLabel="Enter your password"
                          placeholder="*********************"
                          id="user-password"
                      />
                  </div>
                  <div className="w-full">
                      <CustomButton
                          text="Login"
                          btnClassName="bg-primary w-full"
                      />
                  </div>
              </div>
          </div>
      </>
  );
}
