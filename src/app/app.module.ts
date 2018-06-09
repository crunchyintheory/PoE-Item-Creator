import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ValuePipe } from './value.pipe';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { RootComponent } from './root/root.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: ':item',
    component: AppComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ValuePipe,
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
