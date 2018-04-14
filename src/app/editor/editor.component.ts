import { Component, OnInit } from '@angular/core';

import { StateService } from '../state.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  /*package*/ stateService : StateService;

  constructor( private state : StateService )
  {
    this.stateService = state;
  }

  ngOnInit()
  {
  }
}
