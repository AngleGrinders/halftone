import { Component, OnInit } from '@angular/core';

import { StateService } from '../state.service';
import { State } from '../state';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  private stateService : StateService;

  /*package*/ dots : string;

  constructor( private state : StateService )
  {
    this.stateService = state;
  }

  ngOnInit()
  {
    this.stateService.subscribe( ( state : State ) =>
    {
      if ( this.dots !== state.dots )
      {
        this.dots = state.dots;
      }
    } );
  }

  /*package*/ changed() : void
  {
    console.log("changed " + this.dots);

    this.stateService.setDots( this.dots );
  }
}
