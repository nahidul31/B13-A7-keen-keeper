import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";
import AuthContext from "@/contexts/AuthContext";
import { ToastContainer } from "react-toastify";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: "Your personal connection manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={geistSans.variable}>
      <body
        className={`${roboto.className} min-h-screen flex flex-col bg-[#F8FAFC] antialiased`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 md:px-10 py-6">
          <AuthContext>{children}</AuthContext>
        </main>

        {/* Footer */}
        <Footer />

        <ToastContainer />
      </body>
    </html>
  );
}
