import Image from "next/image";

export const Header = () => {
    return (
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full bg-red-800/70">
                <div className="pt-8 p-4 pb-7 flex items-center gap-x-3">
                    <Image src="/logo.svg" alt="logo" width={40} height={40} />
                    <h1 className="text-2xl font-extrabold tracking-wide text-white">
                        Skeleton Landing Page
                    </h1>
                </div>
                <div className="text-white pr-2 cursor-pointer">
                    {" "}
                    Auth here !
                </div>
            </div>
        </header>
    );
};
<svg
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <g clip-path="url(#clip0_270_54958)">
        <rect width="16" height="12" fill="white" />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 0H16V12H11V0Z"
            fill="#F50100"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0H6V12H0V0Z"
            fill="#2E42A5"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 0H11V12H5V0Z"
            fill="#F7FCFF"
        />
    </g>
    <defs>
        <clipPath id="clip0_270_54958">
            <rect width="16" height="12" fill="white" />
        </clipPath>
    </defs>
</svg>;
