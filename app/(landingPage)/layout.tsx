import { Sidebar } from "@/components/ui/sidebar";
import { Footer } from "./footer";
import { Header } from "./header";

type Props = {
    children: React.ReactNode;
};

const marketingLayout = ({ children }: Props) => {
    return (
        <>
            <Sidebar className="hidden lg:flex" />
            <div className="lg:pl-[256px] h-full flex flex-col">
                <Header />
                <main className=" flex-1 flex flex-col items-center justify-center ">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
};

export default marketingLayout;
