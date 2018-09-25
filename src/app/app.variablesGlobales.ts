import { Injectable } from "@angular/core";


@Injectable()
export class Globals {

    private sideNavStatus : boolean;

    constructor () {
        this.sideNavStatus = false;
    }

    public getSideNavStatus() : boolean {
        return this.sideNavStatus;
    }

    public setSideNavStatus(s) {
        this.setSideNavStatus = s;
    }
}