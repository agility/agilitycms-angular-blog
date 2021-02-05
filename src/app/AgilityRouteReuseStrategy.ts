import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from "@angular/router";

export class AgilityRouteReuseStrategy extends RouteReuseStrategy {
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        return null;
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return false;
    }

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return false;
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
		console.log("ROUTE REUSE CHECK", future, curr)
        const test = future.url === curr.url;
		console.log("ROUTE REUSE TEST RES", test)
		return test
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    }
}