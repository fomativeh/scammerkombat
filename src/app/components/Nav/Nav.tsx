"use client";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

type NavProps = {
  currentPage: String;
  setCurrentPage: Dispatch<SetStateAction<String>>;
};

const Nav = ({ currentPage, setCurrentPage }: NavProps) => {
  const navIconsLeft = ["Upgrades", "Invite"];
  const navIconsRight = ["Earn", "Activity"];

  return (
    <section className="z-[9] flex justify-center items-center w-full fixed bottom-[10px] left-0">
      <nav className="w-[95%] bg-[#1D142F] opacity-[74%] rounded-[30px] px-[10px] py-[15px] flex justify-between items-center">
        <section className="flex w-[35%] justify-between items-center">
          {navIconsLeft.map((eachIcon, i) => {
            return (
              <section
                onClick={() => setCurrentPage(eachIcon)}
                key={i}
                className="flex flex-col justify-start items-center"
              >
                <figure className="relative w-[20px] h-[15px] mb-[10px]">
                  <Image
                    src={`/assets/icons/${eachIcon}-${
                      currentPage == eachIcon ? `active` : `inactive`
                    }.svg`}
                    alt={"Nav icon"}
                    fill
                  />
                </figure>
                <span
                  className={`
                    font-2 text-[12px]
                    ${
                    currentPage == eachIcon ? `text-white` : `text-[#9E86FF]`
                  }`}
                >
                  {eachIcon}
                </span>
              </section>
            );
          })}
        </section>

        <section className="flex w-[35%] justify-between items-center">
          {navIconsRight.map((eachIcon, i) => {
            return (
              <section
                onClick={() => setCurrentPage(eachIcon)}
                key={i}
                className="flex flex-col justify-start items-center"
              >
                <figure className="relative w-[20px] h-[15px] mb-[10px]">
                  <Image
                    src={`/assets/icons/${eachIcon}-${
                      currentPage == eachIcon ? `active` : `inactive`
                    }.svg`}
                    alt={"Nav icon"}
                    fill
                  />
                </figure>
                <span
                  className={`
                    font-2 text-[12px]
                    ${
                    currentPage == eachIcon ? `text-white` : `text-[#9E86FF]`
                  }`}
                >
                  {eachIcon}
                </span>
              </section>
            );
          })}
        </section>
      </nav>
    </section>
  );
};

export default Nav;
