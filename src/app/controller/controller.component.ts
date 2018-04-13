import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  private mState : StateService;

  constructor( private state : StateService )
  {
    this.mState = state;
  }

  ngOnInit()
  {
  }

  prev() : void
  {
    //let index = this.mState.getName();
    //if ( index > 1 )
    //{
    //  location.hash = "#" + ( index - 1 );
    //}
  }

  next() : void
  {
    //let index = this.mState.getIndex();
    //if ( true ) //TODO: limit by number of dots
    //{
    //  location.hash = "#" + ( index + 1 );
    //}
  }
}
