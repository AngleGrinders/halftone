import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ViewerComponent } from './viewer/viewer.component';
import { EditorComponent } from './editor/editor.component';
import { ControllerComponent } from './controller/controller.component';
import { StateService } from './state.service';
import { NameMonitor } from './name.monitor';

@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent,
    EditorComponent,
    ControllerComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  providers: [StateService, NameMonitor],
  bootstrap: [AppComponent]
})
export class AppModule { }
