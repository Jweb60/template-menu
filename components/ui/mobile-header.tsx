import Link from "next/link";
import { MobileSidebar } from "./mobile-sidebar";

export const MobileHeader = () => {
    return (
        <nav className="lg:hidden px-6 h-[50px] flex items-center bg-yellow-500 border-b fixed top-0 w-full z-50">
            <div className="flex items-center gap-x-3">
                <MobileSidebar />
                <h1 className="text-xl font-extrabold tracking-wide text-white">
                    Skeleton Landing Page
                </h1>
                <Link href="/"> MainPage</Link>
            </div>
        </nav>
    );
};
