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
      <p className="max-w-[80%] text-center font-[400] text-[12px]">{caption}</p>
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
    </section>
  );
};

export default Invite;
