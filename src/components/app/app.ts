import { Aurelia, PLATFORM } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";

// import entire folders if you want like this:

// import solid from '@fortawesome/fontawesome-free-solid';
// import regular from '@fortawesome/fontawesome-free-regular';
// import brands from '@fortawesome/fontawesome-free-brands';

import fontawesome from '@fortawesome/fontawesome';
import { faHome, faPlus, faThList } from '@fortawesome/fontawesome-free-solid';

// Pre-registering icon definitions so that you do not have to explicitly pass them to render an icon.
fontawesome.library.add(faHome, faPlus, faThList, faThList, /*solid, etc..*/);

export class App {
	configureRouter(config: RouterConfiguration, router: Router) {
		config.title = "AureliaDotnetTemplate";
		config.map([{
			route: ["", "home"],
			name: "home",
			settings: { icon: faHome.iconName, prefix: faHome.prefix },
			fontPrefix: 'fa',
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
