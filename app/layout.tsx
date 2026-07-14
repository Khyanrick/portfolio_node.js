import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/navbar";

import "./globals.css";
import "./styles/base.css";
import "./styles/home.css";
import "./styles/about.css";
import "./styles/projects.css";
import "./styles/contact.css";
import "./styles/responsive.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khyanrick | Portfolio",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* ================= HEADER ================= */}
        <Navbar />

        {/* ================= MAIN CONTENT ================= */}
        <main>{children}</main>

        {/* ================= FOOTER ================= */}
        <footer className="footer">
          <div className="footer-content">
            <p>
              © {new Date().getFullYear()} Khyanrick. All Rights Reserved.
            </p>

            <div className="social-links">
              <a
                href="https://github.com/Khyanrick"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://in.linkedin.com/in/khyanrick-borah-207210282"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a href="mailto:khyanrickb@gmail.com">Email</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}