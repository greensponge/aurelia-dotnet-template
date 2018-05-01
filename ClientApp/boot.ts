import "whatwg-fetch";
import { Aurelia, PLATFORM } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import * as Bluebird from 'bluebird';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
declare const IS_DEV_BUILD: boolean; // The value is supplied by Webpack during the build

Bluebird.config({ warnings: { wForgottenReturn: false }, longStackTraces: false });

export function configure(aurelia: Aurelia) {
    aurelia.use.standardConfiguration();
    //.plugin(PLATFORM.moduleName('aurelia-validation')) //plugin example, must use PLATFORM.moduleName if using webpack

    if (IS_DEV_BUILD) {
        aurelia.use.developmentLogging();
    }

    new HttpClient().configure(config => {
        const baseUrl = document.getElementsByTagName("base")[0].href;
        config.withBaseUrl(baseUrl);
    });

    aurelia.start().then(() => aurelia.setRoot("components/app/app"));
}

export const fetchCredentials: RequestCredentials = "include";
export const appHeaders: string[][] = ([['pragma', 'no-cache'], ['cache-control', 'no-cache']]);