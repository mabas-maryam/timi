import Image from "next/image";
import TeamMember1 from "../../../../public/assets/team-member-1.svg";
import TeamMember2 from "../../../../public/assets/team-member-2.svg";
import TeamMember3 from "../../../../public/assets/team-member-3.svg";
const OurTeam = () => {
    return (
        <>
            <div className="">
                <div className="flex flex-col justify-center items-center m-auto">
                    <div className="flex flex-col gap-4 pt-20 px-20 text-center">
                        <h3 className="text-[42px]">
                            Our Team
                        </h3>
                        <p className="text-xl">
                            Meet the dedicated individuals behind our innovative food inventory solution
                        </p>
                    </div>

                    <div className="grid grid-cols-2 justify-center gap-10 py-20">
                        <div className="col-span-2 flex justify-center items-center">
                            <Image className="w-[324px]" src={TeamMember1} alt="TeamMember1 image" />
                        </div>
                        <div>
                            <Image className="w-[324px]" src={TeamMember2} alt="TeamMember2 image" />
                        </div>
                        <div>
                            <Image className="w-[324px]" src={TeamMember3} alt="TeamMember3 image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurTeam;
