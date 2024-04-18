import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landingPage/Navbar";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });
// const poppins = Poppins({ subsets: ['latin']});

export const metadata = {
  title: "MEDGuard",
  description: "Ready to help you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
