import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <>
            <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
                <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0 bg-gradient-to-b from-[#FBD3E9] to-[#fbc7d4]">
                    <div className="text-black text-1xl w-full h-full flex flex-col justify-center items-center ">
                        <p>This is for Landing Page</p>
                        <p>Image or Logo</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-[480px] text-center">
                        Template For a Landing Page With NextJS 14, TailwindCSS
                    </h1>
                </div>
            </div>
            <Button size="lg" className="mb-4">
                Click me : Example Button
            </Button>
        </>
    );
}
