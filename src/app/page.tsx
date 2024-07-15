"use client"

import Image from "next/image";
import HomePage from "./Homepage/Homepage";
import Nav from "./components/Nav/Nav";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<String>("Upgrades")
  return (
    <main className="h-[100vh] w-[100vw] flex flex-col justify-start items-center">
      <HomePage/>
      <Nav currentPage={currentPage} setCurrentPage = {setCurrentPage}/>
    </main>
  );
}
