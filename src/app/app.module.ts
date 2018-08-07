import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ValuePipe } from './value.pipe';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, ActivatedRoute, Route } from '@angular/router';
import { RootComponent } from './root/root.component';

import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'gist/:username/:gistid/:fileid/:filename',
    component: AppComponent
  },
  {
    path: 'gist/:username/:gistid/raw/:fileid/:filename',
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
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
