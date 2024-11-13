import { Recursive } from "next/font/google";

import "./globals.css";

const recursive = Recursive({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${recursive.className} antialiased`}>{children}</body>
    </html>
  );
}
