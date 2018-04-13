import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { graphviz } from 'd3-graphviz';
import * as d3 from 'd3';
import { State } from '../state';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
})
export class ViewerComponent implements OnInit {

  private stateService : StateService;

  private graphviz;

  constructor( private state : StateService )
  {
    this.stateService = state;
  }

  ngOnInit()
  {
    this.graphviz = graphviz( "#graph", false );
    
    this.stateService.subscribe( ( state : State ) =>
    {
      this.updateGraph( state.getDot() );
    } );
  }

  private findDot( state : State ) : string
  {
    //TODO: split dots on digraph, parse the names, return correct one.
    return state.dots;
  }

  private updateGraph( dot : string ) : void
  {
    this.graphviz.transition(
      d3.transition()
        .duration(1000) );

    this.graphviz.renderDot( dot );

    // switch ( index )
    //    {
    //      case 1:
    //      {
    //       this.mGraphViz.renderDot( `digraph {
    //         One [URL="#1"];
    //         Two [URL="#2"];
    //         Three [URL="#3"];
    //         One ->  { Two Three }
    //       }`, null );
    //     break;
    //   }
    //   case 2:
    //   {
    //     this.mGraphViz.renderDot( `digraph {
    //       Un [URL="#1"];
    //       Deux [URL="#2"];
    //       Trois [URL="#3"];
    //       { Un Deux } ->  Trois
    //     }`, null );
    //     break;
    //   }
    //   case 3:
    //   {
    //     this.mGraphViz.renderDot( `digraph {
    //       Uno [URL="#1"];
    //       Dos [URL="#2"];
    //       Tres [URL="#3"];
    //       Uno ->  Dos -> Tres
    //     }`, null );
    //     break;
    //   }
    //   default:
    //   {
    //     this.mGraphViz.renderDot( `digraph {
    //       "Too far"
    //     }`, null );
    //     break;
    //   }
    // }
  }
}
