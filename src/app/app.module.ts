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
import { FieldGroupComponent } from './field-group/field-group.component';
import { PropFieldGroupComponent } from './prop-field-group/prop-field-group.component';
import { PageCreateItemComponent } from './page-create-item/page-create-item.component';
import { PageStashComponent } from './page-stash/page-stash.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { AlertToastComponent } from './alert-toast/alert-toast.component';
import { AlertHandlerComponent, ToastContainerDirective } from './alert-handler/alert-handler.component';

@NgModule({
  declarations: [
    AppComponent,
    ValuePipe,
    ImportExportModalComponent,
    ItemRendererComponent,
    ItemEditorComponent,
    FieldGroupComponent,
    PropFieldGroupComponent,
    PageCreateItemComponent,
    PageStashComponent,
    AlertModalComponent,
    AlertToastComponent,
    AlertHandlerComponent,
    ToastContainerDirective
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
