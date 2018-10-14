import "whatwg-fetch";
import { Aurelia, PLATFORM } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import * as Bluebird from 'bluebird';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
declare const IS_DEV_BUILD: boolean; // The value is supplied by Webpack during the build

Bluebird.config({ warnings: { wForgottenReturn: false }, longStackTraces: false }); // Dramatically decreases loading times in IE.

export async function configure(aurelia: Aurelia) {
    aurelia.use.standardConfiguration();
    //.plugin(PLATFORM.moduleName('aurelia-validation')) // Plugin example, you must use PLATFORM.moduleName when using webpack.

    if (IS_DEV_BUILD) {
        aurelia.use.developmentLogging();
    }

    new HttpClient().configure(config => { config.withBaseUrl(document.getElementsByTagName("base")[0].href) });

    await aurelia.start();
    await aurelia.setRoot(PLATFORM.moduleName("components/app/app"));
}

export const fetchCredentials: RequestCredentials = "include";
export const appHeaders: string[][] = ([
    ['pragma', 'no-cache'],
    ['cache-control', 'no-cache']
]);