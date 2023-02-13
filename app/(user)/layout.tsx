"use client"
import "../../styles/globals.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import CookieConsent  from "react-cookie-consent";

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
    {children}
    <CookieConsent
      location="bottom"
      buttonText="I am aware 🚀"
      cookieName="customCookie"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
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
