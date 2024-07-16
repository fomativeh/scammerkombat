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
      <nav className="w-[95%] bg-[#1D142F] opacity-[74%] rounded-[30px] px-[10px] h-[70px] flex justify-between items-center">
        <section className="flex w-[35%] justify-between items-center">
          {navIconsLeft.map((eachIcon, i) => {
            return (
              <section
                onClick={() => setCurrentPage(eachIcon)}
                key={i}
                className="flex flex-col justify-start items-center"
              >
                <figure className="relative w-[25px] h-[25px] mb-[5px]">
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

        <section className="w-[30%] relative flex justify-center h-full">
          <figure className="absolute mt-[-25%] bg-[#9E86FF] w-[50px] h-[50px] rounded-[50px] flex justify-center items-center">
            <img src={`/assets/icons/wallet.svg`} alt={"Wallet icon"} />
          </figure>
        </section>

        <section className="flex w-[35%] justify-between items-center">
          {navIconsRight.map((eachIcon, i) => {
            return (
              <section
                onClick={() => setCurrentPage(eachIcon)}
                key={i}
                className="flex flex-col justify-start items-center"
              >
                <figure className="relative w-[25px] h-[25px] mb-[5px]">
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
