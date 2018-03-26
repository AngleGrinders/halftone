import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
})
export class ViewerComponent implements OnInit {

  private mIndex : number;

  private mState : StateService;

  constructor( private state : StateService )
  {
    this.mIndex = 0;
    this.mState = state;
  }

  ngOnInit()
  {
    this.mState.subscribe( ( index : number ) =>
    {
      console.log( "New index: " + index );
      this.mIndex = index;
    } );
  }

}
