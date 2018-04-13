import { Component } from '@angular/core';
import { IndexMonitor } from './index-monitor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{  
  title = 'diag';
  private indexMonitor : IndexMonitor;

  constructor( private indexMon : IndexMonitor )
  {
    this.indexMonitor = indexMon;
  }


  ngOnInit()
  {
    this.indexMonitor.start();
  }
}
