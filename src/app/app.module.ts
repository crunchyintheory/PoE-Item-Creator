import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ValuePipe } from './value.pipe';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, ActivatedRoute, Route } from '@angular/router';
import { RootComponent } from './root/root.component';

import { HttpClientModule } from '@angular/common/http';
import { ImportExportModalComponent } from './import-export-modal/import-export-modal.component';

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
  },
  {
    path: '**',
    redirectTo: ''
  }
]

appRoutes.forEach((x: Route) => {
  x.children = [
    {
      path: 'import',
      component: ImportExportModalComponent
    },
    {
      path: 'export',
      component: ImportExportModalComponent
    }
  ]
})

@NgModule({
  declarations: [
    AppComponent,
    ValuePipe,
    RootComponent,
    ImportExportModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, useHash: true }
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
