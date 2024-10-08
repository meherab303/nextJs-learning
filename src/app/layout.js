import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Next Js App",
  description: "This is Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='light'>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={inter.className}
      >
        <div><Navbar></Navbar></div>
        <div className="mt-24">{children}</div>
      </body>
    </html>
  );
}