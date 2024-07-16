"use client";

import Image from "next/image";
import HomePage from "./Homepage/Homepage";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import ConnectWallet from "./ConnectWallet/ConnectWallet";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<String>("Wallet");
  return (
    <main className="h-[100vh] w-[100vw] flex flex-col justify-start items-center">
      {currentPage == "Upgrades" && <HomePage />}
      {currentPage == "Wallet" && <ConnectWallet/>}
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </main>
  );
}
