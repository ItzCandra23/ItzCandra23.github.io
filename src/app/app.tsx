
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => {
    NProgress.start();
    console.log("Start");
});

Router.events.on("routeChangeComplete", () => {
    NProgress.done();
    console.log("Complete");
});

Router.events.on("routeChangeError", () => {
    NProgress.done();
    console.log("Complete");
});