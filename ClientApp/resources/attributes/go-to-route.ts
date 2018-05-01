import { customAttribute, bindable, autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@autoinject
@customAttribute('go-to-route')
export class GoToRoute {

    @bindable route: any;
    @bindable params: any;

    constructor(
        private _element: Element,
        private _router: Router
    ) {

    }

    attached() {
        this._element.addEventListener("click", () => {
            this._router.navigateToRoute(this.route, this.params);
        });
    }
}