"use client";

import Image from "next/image";
import { useState } from "react";
import Nav from "./components/Nav/Nav";
import Homepage from "./Homepage/Homepage";
import ConnectWallet from "./ConnectWallet/ConnectWallet";
import Invite from "./Invite/Invite";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<string>("Upgrades");

  return (
    <main className="w-full min-h-[100vh]">
      {currentPage == "Upgrades" && <Homepage />}

      {currentPage == "Wallet" && (
        <ConnectWallet setCurrentPage={setCurrentPage} />
      )}

      {currentPage == "Invite" && <Invite setCurrentPage={setCurrentPage} />}

      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </main>
  );
}
