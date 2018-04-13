import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ViewerComponent } from './viewer/viewer.component';
import { EditorComponent } from './editor/editor.component';
import { ControllerComponent } from './controller/controller.component';
import { StateService } from './state.service';
import { IndexMonitor } from './index-monitor';

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
  providers: [StateService, IndexMonitor],
  bootstrap: [AppComponent]
})
export class AppModule { }
