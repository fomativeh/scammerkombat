"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

type NavProps = {
  currentPage: String;
  setCurrentPage:Dispatch<SetStateAction<string>>
};

const Nav = ({ currentPage, setCurrentPage}: NavProps) => {
  const navIconsLeft = ["Upgrades", "Invite"];
  const navIconsRight = ["Earn", "Activity"];
  return (
    <section className="z-[9] flex justify-center items-center w-full fixed bottom-[10px] left-0">
      <nav className="w-[95%] opaque-bg rounded-[30px] px-[10px] h-[70px] flex justify-between items-center">
        {/* Nav buttons (mid to left) */}
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

        {/* Center button (Wallet) */}
        <section className="w-[30%] relative flex justify-center h-full">
          <figure
            className={`absolute mt-[-25%] ${
              currentPage == "Wallet" ? `bg-white` : `bg-[#9E86FF]`
            } w-[50px] h-[50px] rounded-[50px] flex justify-center items-center`}
            onClick={() => setCurrentPage("Wallet")}
          >
            <img src={`/assets/icons/wallet.svg`} alt={"Wallet icon"} />
          </figure>
        </section>

        {/* Nav buttons (mid to right) */}
        <section className="flex w-[35%] justify-between items-center">
          {navIconsRight.map((eachIcon, i) => {
            return (
              <section
                onClick={() => {
                  eachIcon == "Upgrades"
                    ? setCurrentPage("Upgrades")
                    : setCurrentPage(eachIcon);
                }}
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
