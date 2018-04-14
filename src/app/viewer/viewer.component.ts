import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { graphviz } from 'd3-graphviz';
import * as d3 from 'd3';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
})
export class ViewerComponent implements OnInit {

  private stateService : StateService;
  private currentDot : string;

  private graphviz : graphviz;

  constructor( private state : StateService )
  {
    this.stateService = state;
  }

  ngOnInit()
  {
    this.graphviz = graphviz( "#graph", false );
    
    setInterval( () => { this.checkDotUpdate(); }, 100 );
  }

  private updateGraph( dot : string ) : void
  {
    this.graphviz.transition(
      d3.transition()
        .duration(1000) );

    this.graphviz.renderDot( dot );
  }

  private checkDotUpdate() : void
  {
    let newDot = this.stateService.getDot();
    if ( newDot != this.currentDot )
    {
      this.updateGraph( newDot );
      this.currentDot = newDot;
    }
  }
}
