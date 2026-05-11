import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "ZF Apparel - Global Luxury Manufacturing",
  description:
    "ZF Apparel delivers luxury knitwear and woven garment manufacturing with a premium single-page brand experience.",
};

const themeScript = `
  try {
    const theme = localStorage.getItem("zf-theme") || "light";
    document.body.classList.toggle("theme-dark", theme === "dark");
  } catch (error) {
    console.error(error);
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
