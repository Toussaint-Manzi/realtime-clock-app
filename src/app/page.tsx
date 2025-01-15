'use client';

import Image from "next/image";
import { useSocket } from "../hooks/useSocket";
import { useEffect, useState } from "react";
import { formatTime } from "@/utils";
import Footer from "@/components/Footer";

export default function Home() {
  const { time, error } = useSocket();
  const [timeFormat, setTimeFormat] = useState<"12" | "24">("24");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <h1 className="text-center text-2xl mb-2 font-[700] uppercase">
          welcome to <span className="text-[#FFBF4B] font-black">realtime</span> clock
        </h1>
        {error && <p className="text-red-500">{error}</p>}
        <h1 key={time} className="text-center text-7xl mb-2 font-[family-name:var(--font-custom)] font-[700]">
          {formatTime(time, timeFormat)}
        </h1>
      </main>
      <Footer timeFormat={timeFormat} setTimeFormat={setTimeFormat}/>
    </div>
  );
}
