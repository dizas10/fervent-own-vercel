import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import type {Metadata} from "next";
import "./globals.css";

import NavBar from "@/components/Navbar";

export const metadata: Metadata = {
    title: {
        template: 'FERVENT | Multi-board Manufacturing', 
        default: 'Multi-board Manufacturing - Best High-Pressure Laminates',
    },
    description: 'Global leader in high-pressure laminate solutions.',
    openGraph: {
        type: 'website',
        siteName: 'Multi-board Manufacturing',
    },

};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="overflow-x-hidden">
        {/* <NavBar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer /> */}
        <main className=" w-full h-full mx-auto overflow-hidden ">
            <NavBar/>
            {children}
            <Footer/>
        </main>
        </body>
        </html>
    );
}
