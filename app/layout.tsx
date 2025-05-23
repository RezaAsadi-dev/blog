import type { Metadata } from "next";
import ReactQueryProvider from "../utils/queryProvider";
import "./globals.css";
import ToastProvider from "@/utils/toastProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCookie } from "cookies-next";
export const metadata: Metadata = {
  title: "مقاله ها",
  description: "blog text project-reza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ReactQueryProvider>
          <ToastProvider>
            <Header />
            {children}
            <Footer />
          </ToastProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
