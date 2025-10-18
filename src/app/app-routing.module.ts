import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCreateItemComponent } from './page-create-item/page-create-item.component';
import { PageStashComponent } from './page-stash/page-stash.component';
import { PageHelpComponent } from "./page-help/page-help.component";

const routes: Routes = [
  { path: '', redirectTo: 'create', pathMatch: 'full' },
  { path: 'create', component: PageCreateItemComponent },
  { path: 'stash', component: PageStashComponent },
  { path: 'help', component: PageHelpComponent },
  { path: '**', redirectTo: 'create', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
