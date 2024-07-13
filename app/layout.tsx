import type { Metadata } from "next";
import { Grandstander } from "next/font/google";
import "./globals.css";

const font = Grandstander({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Template Landing Page",
    description: "Created with NextJs 14, TailwindCSS, TypeScript & Shadcn-UI",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={font.className}>{children}</body>
        </html>
    );
}
