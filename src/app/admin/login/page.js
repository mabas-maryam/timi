import CustomInput from "@/app/component/common/CustomInput";
import CustomButton from "@/app/component/common/CustomButton";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col items-center justify-center w-1/4 m-auto gap-8">
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
  );
}