"use client";
import React from "react";

function AbstractComponent(props: { className?: string }) {
    return (
        <svg className={props.className} width="289" height="433" viewBox="0 0 289 433" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="73db2364" d="M134.5 431.5L1 1V278L134.5 431.5ZM134.5 431.5L288 78.5L134.5 198V431.5Z" stroke="#FBFBFB"></path>
        </svg>
    );
}

export default AbstractComponent;