import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ViewerComponent } from './viewer/viewer.component';
import { EditorComponent } from './editor/editor.component';
import { ControllerComponent } from './controller/controller.component';
import { StateService } from './state.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent,
    EditorComponent,
    ControllerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
