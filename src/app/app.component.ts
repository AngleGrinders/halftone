import { Component, OnInit } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private mState: StateService;
  title = 'diag';

  constructor(private state: StateService) {
      this.mState = state;
  }
  isShowEditor(): boolean {
    return this.mState.getShowEditor();
   }
}
