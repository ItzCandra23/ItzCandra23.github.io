"use client";
import NextNProgress from 'nextjs-progressbar';

function Progressbar() {
    return <NextNProgress color="#9561E2" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
}

export default Progressbar;