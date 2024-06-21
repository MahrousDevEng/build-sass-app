"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { digitalFont } from "@/lib/fonts";

type ClockProps = {
  serverTime: Date;
};

export default function Clock({ serverTime }: ClockProps) {
  const [time, setTime] = useState(serverTime);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={cn("text-5xl tabular-nums sm:text-7xl", digitalFont.className)}
    >
      {time.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })}
    </div>
  );
}
