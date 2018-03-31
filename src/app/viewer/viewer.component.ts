import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
//import { graphviz } from 'd3-graphviz';
//import * as d3 from 'd3';
declare var d3;

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
})
export class ViewerComponent implements OnInit {

  /*package*/ mIndex : number;

  private mState : StateService;

  private mGraphViz;

  constructor( private state : StateService )
  {
    this.mIndex = 1;
    this.mState = state;
  }

  ngOnInit()
  {
    this.mGraphViz = d3.select("#graph").graphviz();
    this.mState.subscribe( ( index : number ) =>
    {
      console.log( "New index: " + index );
      this.updateGraph( index );
      this.mIndex = index;
    } );
  }

  private updateGraph( index : number ) : void
  {
    this.mGraphViz.transition(
      d3.transition()
        .duration(1000) );

    switch ( index )
       {
         case 1:
         {
          this.mGraphViz.renderDot( `digraph {
            One [URL="#1"];
            Two [URL="#2"];
            Three [URL="#3"];
            One ->  { Two Three }
          }`, null );
        break;
      }
      case 2:
      {
        this.mGraphViz.renderDot( `digraph {
          Un [URL="#1"];
          Deux [URL="#2"];
          Trois [URL="#3"];
          { Un Deux } ->  Trois
        }`, null );
        break;
      }
      case 3:
      {
        this.mGraphViz.renderDot( `digraph {
          Uno [URL="#1"];
          Dos [URL="#2"];
          Tres [URL="#3"];
          Uno ->  Dos -> Tres
        }`, null );
        break;
      }
      default:
      {
        this.mGraphViz.renderDot( `digraph {
          "Too far"
        }`, null );
        break;
      }
    }
  }
}
