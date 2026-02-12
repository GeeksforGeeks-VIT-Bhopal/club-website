import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "GeeksforGeeks Student Chapter — VIT Bhopal",
  description:
    "Official website of the GeeksforGeeks Student Chapter at VIT Bhopal University. Join our community of coders, builders, and tech enthusiasts.",
  keywords: [
    "GeeksforGeeks",
    "GfG",
    "VIT Bhopal",
    "Student Chapter",
    "Coding",
    "Programming",
    "Hackathon",
    "Computer Science",
  ],
  openGraph: {
    title: "GeeksforGeeks Student Chapter — VIT Bhopal",
    description:
      "A community of passionate coders, builders, and tech enthusiasts at VIT Bhopal University.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
