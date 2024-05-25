import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}