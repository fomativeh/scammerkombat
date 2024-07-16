"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SDKProvider } from "@tma.js/sdk-react";
import dynamic from "next/dynamic";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <SDKProvider>
        <body>{children}</body>
      </SDKProvider>
    </html>
  );
};

export default dynamic(() => Promise.resolve(RootLayout), { ssr: false });
