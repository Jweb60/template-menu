import { cn } from "@/lib/utils";

type Props = {
    className?: string;
};
import Image from "next/image";

export const Sidebar = ({ className }: Props) => {
    return (
        <div
            className={cn(
                "flex bg-blue-500 h-full lg:w-[256px] lg:fixed left:0 top-0 px-4 border-r-2 flex-col ",
                className
            )}
        >
            Sidebar
            <div className="pt-8 p-4 pb-7 flex items-center gap-x-3">
                <Image src="/logo.svg" alt="logo" width={40} height={40} />
                <h1 className="text-2xl font-extrabold tracking-wide text-white">
                    Skeleton Landing Page
                </h1>
            </div>
        </div>
    );
};
