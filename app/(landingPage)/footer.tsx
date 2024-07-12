import { Button } from "@/components/ui/button";

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-sreen-lg mx-auto flex items-center justify-evenly h-full bg-slate-600">
                <Button variant={"primary"} size="lg" className="rounded-full">
                    Button For Auth
                </Button>
                <svg
                    width="32"
                    height="24"
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
                </svg>
                <svg
                    width="32"
                    height="24"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#clip0_270_54999)">
                        <rect width="16" height="12" fill="white" />
                        <rect width="16" height="12" fill="#F7FCFF" />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.87512 0H7.09734V5H0V7H7.09734V12H8.87512V7H16V5H8.87512V0Z"
                            fill="#F50302"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_270_54999">
                            <rect width="16" height="12" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </footer>
    );
};
