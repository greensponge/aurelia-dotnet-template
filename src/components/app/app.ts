import { Aurelia, PLATFORM } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";
import 'font-awesome/css/font-awesome.css';

export class App {
	configureRouter(config: RouterConfiguration, router: Router) {
		config.title = "AureliaDotnetTemplate";
		config.map([{
			route: ["", "home"],
			name: "home",
			settings: { icon: 'home' },
			moduleId: PLATFORM.moduleName("../../components/pages/home/home"),
			nav: true,
			title: "Home"
		}, {
			route: "counter",
			name: "counter",
			settings: { icon: "plus" },
			moduleId: PLATFORM.moduleName("../../components/pages/counter/counter"),
			nav: true,
			title: "Counter"
		}, {
			route: "fetch-data",
			name: "fetchdata",
			settings: { icon: "th-list" },
			moduleId: PLATFORM.moduleName("../../components/pages/fetchdata/fetchdata"),
			nav: true,
			title: "Fetch"
		}]);
	}
}
