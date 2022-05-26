import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {ResolveInfoService} from "../services/resolve-info.service";
import {Observable} from "rxjs";

@Injectable()
export class ResolveInfoResolver implements  Resolve<string>{
    constructor(private resolveInfoService: ResolveInfoService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<string>
    {
        return this.resolveInfoService.getInfo(route.params.info);
    }
}