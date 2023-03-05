"use client";
import "../../styles/globals.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import CookieConsent from "react-cookie-consent";
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>

    <body className="mx-auto bg-gray-600">

    <Header />
    <Banner />
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
    <CookieConsent
      location="bottom"
      buttonText="I am aware 🍪"
      cookieName="customCookie"
      style={{ background: "#1F2937" }}
      buttonStyle={{ borderRadius: "16px", color: "#fff", fontSize: "13px", backgroundColor: "#3B82F6" }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.
      <span style={{ fontSize: "15px" }}> Click ~ I am aware, if you accept this.</span>
    </CookieConsent>
    <Footer />

    </body>
    </html>
  );
}
