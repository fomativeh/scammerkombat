import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

const Invite = ({
  setCurrentPage,
}: {
  setCurrentPage: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-center">
      <section className="mt-[30px] flex items-center">
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
    </section>
  );
};

export default Invite;
