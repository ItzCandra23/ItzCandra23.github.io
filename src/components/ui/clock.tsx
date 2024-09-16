"use client";
import { useEffect, useState } from "react";

function Clock(props: { timeZone?: string; showTimeZone?: boolean; className?: string; }) {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString('en-US', {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
                timeZone: props.timeZone ?? "Asia/Jakarta",
            });
            
            setTime(props.showTimeZone ? `${formattedTime} ${props.timeZone ?? "Asia/Jakarta"}` : formattedTime);
        };

        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, [props.timeZone, props.showTimeZone]);

    return <div className={props.className}>{time}</div>;
}

export default Clock;
