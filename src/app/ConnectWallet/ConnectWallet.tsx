import Image from "next/image";
import React, { useState } from "react";

const ConnectWallet = () => {
  const [activeWalletProvider, setActiveWalletProvider] =
    useState<String>("TON Wallet");
  const walletProviders = [
    { icon: "ton", title: "TON Wallet" },
    { icon: "coinbase", title: "Coinbase" },
    { icon: "Metamask", title: "Metamask" },
  ];
  return (
    <section className="w-full min-h-[100vh] flex flex-col justify-start items-center overflow-y-auto ">
      <section className="mt-[30px] flex items-center">
        <div className="w-[26px] h-[26px] bg-white rounded-[50px] flex justify-center items-center mr-[10px]">
          <figure className="w-[30%] h-[30%] relative">
            <Image
              src={"/assets/icons/left-angle.svg"}
              alt={"Left angle image"}
              fill
            />
          </figure>
        </div>

        <span className="font-[600] font-2 text-[20px] text-white">
          Connect wallet
        </span>
      </section>

      <figure className="w-[22vw] h-[22vw] min-h-[22vw] relative my-[20px]">
        <Image
          src={"/assets/images/Wallet_center.png"}
          alt={"Wallet Center image"}
          fill
        />
      </figure>

        <section className="font-2 w-[90vw] flex flex-col justify-start items-center opaque-bg rounded-[32px] py-[10px] px-[15px] mb-[200px]">
        <h1 className="font-[500] text-white text-[18px]">
          Choose your wallet
        </h1>

        <p className="text-[#777E90] text-[14px] text-center">
          By connecting your wallet, you agree to our{" "}
          <span className="text-[13px] font-medium text-white">
            Terms of Service{" "}
          </span>
          and our&nbsp;
          <span className="text-[14px] font-medium text-white">
            Privacy Policy
          </span>
          .
        </p>

        <section className="w-full flex flex-col justify-start items-center mt-[30px]">
          {walletProviders.map((each, i) => {
            return (
              <section
              onClick={()=>setActiveWalletProvider(each.title)}
                className={`${i>0 && `mt-[10px]`} ${i==2 && `mb-[20px]`} rounded-[16px] w-full flex justify-between items-center p-[15px] ${each.title==activeWalletProvider?`bg-white`:`opaque-bg`}`}
                key={i}
              >
                <section className="flex items-center">
                  <figure className="w-[30px] h-[30px] relative mr-[20px]">
                    <Image
                      src={`/assets/images/${each.icon}.png`}
                      alt={"Wallet Center image"}
                      fill
                    />
                  </figure>
                  <span className={`font-2 font-[600] ${each.title==activeWalletProvider?`text-black`:`text-white`}`}>{each.title}</span>
                </section>


                <figure className="w-[10px] h-[10px] relative">
                    <Image
                      src={`/assets/icons/${each.title==activeWalletProvider?`right-angle`:`right-angle-white`}.svg`}
                      alt={"Wallet Center image"}
                      fill
                    />
                  </figure>
              </section>
            );
          })}

          
        </section>
      </section>
    </section>
  );
};

export default ConnectWallet;
