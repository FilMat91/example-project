import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariableExampleComponent } from './components/variable-example/variable-example.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: VariableExampleComponent }
];

@NgModule({
  declarations: [
    VariableExampleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    ]
})
export class VariableExampleModule { }
