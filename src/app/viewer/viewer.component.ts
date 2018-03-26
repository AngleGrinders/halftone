import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
  providers: [StateService],
})
export class ViewerComponent implements OnInit {

  mIndex : number;

  constructor( private mState : StateService ) { }

  ngOnInit()
  {
    this.mState.subscribe( ( index : number ) =>
    {
      console.log( "New index: " + index );
      this.mIndex = index;
    } );
  }

}
