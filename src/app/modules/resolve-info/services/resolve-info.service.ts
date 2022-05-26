import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

@Injectable()
export class ResolveInfoService{
    constructor() {}

    getInfo(info: string): Observable<string>
    {
        return of(info);
    }
}