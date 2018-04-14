import { Component, OnInit } from '@angular/core';
import { StateService } from './state.service';
import { NameMonitor } from './name.monitor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private mState: StateService;
  private nameMonitor: NameMonitor;
  title = 'diag';

  constructor(private state: StateService, private nameMon: NameMonitor ) {
      this.mState = state;
      this.nameMonitor = nameMon;
  }
  ngOnInit() {
    this.nameMonitor.start();
  }

  isShowEditor(): boolean {
    return this.mState.getShowEditor();
  }
}
