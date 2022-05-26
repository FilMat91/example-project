import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-variable-example',
  templateUrl: './element-info.component.html',
  styleUrls: ['./element-info.component.css']
})
export class ElementInfoComponent implements OnInit {

  info: Observable<any> = this.route.data;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {}


}
