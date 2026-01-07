import "./globals.css";
import { ThemeProvider } from "./ThemeContext";

export const metadata = {
  title: "Varun Joshi | Staff Software Engineer @ Meta",
  description: "Portfolio of Varun Joshi, a Staff Software Engineer at Meta with 11+ years of experience in Scalable Frontend Systems, React Architecture, and UI Performance.",
  keywords: ["Varun Joshi", "Staff Software Engineer", "Meta", "Frontend Engineer", "React", "JavaScript", "Scalability", "UI Architecture"],
  authors: [{ name: "Varun Joshi" }],
  creator: "Varun Joshi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://varunjoshi.com",
    title: "Varun Joshi | Staff Software Engineer",
    description: "Building scalable frontend systems at Meta. Expert in React, Performance, and UI Architecture.",
    siteName: "Varun Joshi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varun Joshi | Staff Software Engineer",
    description: "Building scalable frontend systems at Meta.",
    creator: "@varunjoshi91",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
