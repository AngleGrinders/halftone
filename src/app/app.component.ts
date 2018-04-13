import { Component, OnInit } from '@angular/core';
import { StateService } from './state.service';
import { IndexMonitor } from './index-monitor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private mState: StateService;
  private indexMonitor: IndexMonitor;
  title = 'diag';

  constructor(private state: StateService, private indexMon: IndexMonitor ) {
      this.mState = state;
      this.indexMonitor = indexMon;
  }
  ngOnInit() {
    this.indexMonitor.start();
  }

  isShowEditor(): boolean {
    return this.mState.getShowEditor();
  }
}
