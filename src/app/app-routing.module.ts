import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByeComponent } from './bye/bye.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'bye', component: ByeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
