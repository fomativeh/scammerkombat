import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

type InviteBannerProps = {
  value: string;
  caption: string;
  valueColor?: string;
};

const InviteBanner = ({ value, caption, valueColor }: InviteBannerProps) => {
  return (
    <section className="w-[48%] invite-banner flex flex-col items-center justify-start text-[#DADADA] py-[20px]">
      <span
        className={`font-[700] text-[16px] mb-[15px]`}
        style={{color:`${valueColor?valueColor:`inherit`}`}}
      >
        {value}
      </span>
      <p className="max-w-[94%] text-center font-[400] text-[12px]">{caption}</p>
    </section>
  );
};

const Invite = ({
  setCurrentPage,
}: {
  setCurrentPage: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-center">
      <section className="mt-[30px] mb-[20px] flex items-center">
        <div
          onClick={() => setCurrentPage("Upgrades")}
          className="w-[26px] h-[26px] bg-white rounded-[50px] flex justify-center items-center mr-[15px]"
        >
          <figure className="w-[30%] h-[30%] relative">
            <Image
              src={"/assets/icons/left-angle.svg"}
              alt={"Left angle image"}
              fill
            />
          </figure>
        </div>

        <span className="font-[600] font-2 text-[20px] text-white">
          Invite Friends
        </span>
      </section>

      <section className="w-[95%] flex justify-between items-center">
        <InviteBanner value="+10,000" valueColor="#DCF88E" caption="Invite Friends With Premium"/>
        <InviteBanner value="+2,500" caption="Invite Friends"/>
      </section>

      <section className="w-[95%] my-[20px] py-[20px] invite-gradient-bg flex flex-col justify-start items-center font-3 text-[#222]">
        <span className="font-[700] my-[15px]">Invite a friend and get +2,500</span>
        <p className="font-[400] text-center max-w-[80%] text-[14px] mb-[20px]">Earn +2,500 for each invite, while your friend receives +3,000</p>
        <button className="rounded-[48px] bg-black text-white py-[21px] px-[17px]">Invite Friends</button>
      </section>

      {/* Invitee list */}
      <section className="w-full flex flex-col justify-start items-center mt-[20px] mb-[100px]">
        <section className="w-[95%] flex justify-between items-center invitee py-[15px] px-[12px] mb-[20px]">
            <section className="flex flex-col items-start">
                {/* Invitee name */}
                <span className="font-3 text-white font-[500] mb-[5px]">Gamblify</span>

                {/* Invitee level */}
                <span className="font-[500] font-4 text-[#D8F894]">Lvl.Gold</span>
            </section>

            {/* Credits from invitee */}
            <span className="font-[400] text-black bg-[#D8F894] rounded-[15px] p-[10px] font-4">+2,500</span>

        </section>

        <section className="w-[95%] flex justify-between items-center invitee py-[15px] px-[12px] mb-[20px]">
            <section className="flex flex-col items-start">
                {/* Invitee name */}
                <span className="font-3 text-white font-[500] mb-[5px]">Gamblify</span>

                {/* Invitee level */}
                <span className="font-[500] font-4 text-[#D8F894]">Lvl.Gold</span>
            </section>

            {/* Credits from invitee */}
            <span className="font-[400] text-black bg-[#D8F894] rounded-[15px] p-[10px] font-4">+2,500</span>

        </section>


        <section className="w-[95%] flex justify-between items-center invitee py-[15px] px-[12px] mb-[20px]">
            <section className="flex flex-col items-start">
                {/* Invitee name */}
                <span className="font-3 text-white font-[500] mb-[5px]">Gamblify</span>

                {/* Invitee level */}
                <span className="font-[500] font-4 text-[#D8F894]">Lvl.Gold</span>
            </section>

            {/* Credits from invitee */}
            <span className="font-[400] text-black bg-[#D8F894] rounded-[15px] p-[10px] font-4">+2,500</span>

        </section>

      </section>
    </section>
  );
};

export default Invite;
