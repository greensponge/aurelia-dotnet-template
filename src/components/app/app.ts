import { PLATFORM } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";


import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faHome, faPlus, faThList } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { faCalendar } from '@fortawesome/free-regular-svg-icons';

library.add(faHome, faPlus, faThList)

// Kicks off the process of finding <i> tags and replacing with <svg>
dom.watch()

export class App {
	configureRouter(config: RouterConfiguration, router: Router) {
		config.title = "AureliaDotnetTemplate";
		config.map([{
			route: ["", "home"],
			name: "home",
			settings: { icon: faHome.iconName, prefix: faHome.prefix },
			moduleId: PLATFORM.moduleName("../../components/pages/home/home"),
			nav: true,
			title: "Home"
		}, {
			route: "counter",
			name: "counter",
			settings: { icon: faPlus.iconName, prefix: faPlus.prefix },
			moduleId: PLATFORM.moduleName("../../components/pages/counter/counter"),
			nav: true,
			title: "Counter"
		}, {
			route: "fetch-data",
			name: "fetchdata",
			settings: { icon: faThList.iconName, prefix: faThList.prefix, },
			moduleId: PLATFORM.moduleName("../../components/pages/fetchdata/fetchdata"),
			nav: true,
			title: "Fetch"
		}]);
	}
}
