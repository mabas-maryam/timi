import SideNav from "@/app/component/admin/SideNav";
import Image from "next/image";
import BgAddUser from "../../../../public/assets/bg-add-user.svg";
import CustomInput from "@/app/component/common/CustomInput";
import CustomTextArea from "@/app/component/common/CustomTextArea";
import CustomButton from "@/app/component/common/CustomButton";

export default function Home() {
    return (
        <div className="flex">
            <SideNav />

            <div className="container m-auto p-20">
                <h1 className="font-bold text-xl">Add User</h1>
                <div className="py-10 flex flex-col gap-10">
                    <div className="grid grid-cols-2 gap-10 justify-center items-center">
                        <div className="flex flex-col gap-8 justify-between">
                            <div className="flex flex-col gap-8">
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
                        <div className="flex justify-center items-center">
                            <Image className="m-auto w-[384px]" src={BgAddUser} alt="login bg image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
