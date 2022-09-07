import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ValuePipe } from './value.pipe';
import { FormsModule } from '@angular/forms';

import { ImportExportModalComponent } from './import-export-modal/import-export-modal.component';
import { RouterModule } from '@angular/router';
import { ItemService } from './item-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ItemRendererComponent } from './item-renderer/item-renderer.component';
import { ItemEditorComponent } from './item-editor/item-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ValuePipe,
    ImportExportModalComponent,
    ItemRendererComponent,
    ItemEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
