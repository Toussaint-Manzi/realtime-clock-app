import Image from "next/image";
import Link from "next/link";

// FooterProps type defined
type FooterProps = {
    timeFormat: "12" | "24";
    setTimeFormat: (format: "12" | "24") => void;
};

const Footer: React.FC<FooterProps> = ({ timeFormat, setTimeFormat }) => {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <div
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 cursor-pointer"
                onClick={() => setTimeFormat(timeFormat === "12" ? "24" : "12")}
            >
                <Image
                    aria-hidden
                    src="/icons/clock.svg"
                    alt="clock icon"
                    width={19}
                    height={19}
                />
                <h1>Switch to {timeFormat === "12" ? "24" : "12"}-hours format</h1>
            </div>
            <Link
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://github.com/Toussaint-Manzi/realtime-clock-app"
                target="_blank"
            >
                <Image
                    aria-hidden
                    src="/icons/globe.svg"
                    alt="Globe icon"
                    width={16}
                    height={16}
                />
                Go to github repo →
            </Link>
        </footer>
    );
};

export default Footer;
