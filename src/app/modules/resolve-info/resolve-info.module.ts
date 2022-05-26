import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementInfoComponent } from './components/element-info/element-info.component';
import {RouterModule, Routes} from "@angular/router";
import {MainInfoComponent} from "./components/main/main-info.component";
import {ResolveInfoResolver} from "./resolvers/resolve-info.resolver";
import {ResolveInfoService} from "./services/resolve-info.service";

const routes: Routes = [
  {
    path: '',
    component: MainInfoComponent,
    children: [
      {
        path: 'resolveRequest/:info',
        component: ElementInfoComponent,
        resolve: { resolveInfo: ResolveInfoResolver }
      }

    ] }
];

@NgModule({
  declarations: [
    ElementInfoComponent,
    MainInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    ],
  providers: [
      ResolveInfoResolver,
      ResolveInfoService
  ]
})
export class ResolveInfoModule { }
