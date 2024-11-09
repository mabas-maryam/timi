import Image from "next/image";
import Camera from "../../../../public/assets/camera.svg";
import CustomInput from "@/app/component/common/CustomInput";
import CustomTextArea from "@/app/component/common/CustomTextArea";
import CustomSelect from "@/app/component/common/CustomSelect";
import CustomButton from "@/app/component/common/CustomButton";

const AddItemForm = () => {
    return (
        <>
            <div className="container m-auto">
                <div className="grid grid-cols-2">
                    <div>
                        <h2 className="font-bold text-xl">Add images</h2>
                        <div className="flex flex-col items-center justify-center gap-1 w-[560px] h-[446px] rounded-3xl bg-gray mt-4">
                            <div>
                                <Image className="m-auto" src={Camera} alt="Camera icon" />
                            </div>
                            <div className="font-bold text-xl">Upload Image</div>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold text-[28px]">Upload new item</h2>
                        <div className="w-full flex flex-col gap-8">
                            <CustomInput
                                type="text"
                                inputLabel="Name"
                                placeholder="Enter name here"
                                id="item-name"
                            />
                            <CustomInput
                                type="datetime"
                                inputLabel="Expiry Date"
                                placeholder="MM/DD/YYYY"
                                id="item-expiry-date"
                            />
                            <CustomTextArea
                                inputLabel="Description"
                                placeholder="Enter description here"
                                id="item-description"
                            />
                            <CustomSelect
                                id="item-category"
                            />

                            <CustomButton text='Add Item' btnClassName="bg-black"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddItemForm;
