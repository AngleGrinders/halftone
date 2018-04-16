import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css'],
  providers: [NgbPaginationConfig]
})
export class ControllerComponent implements OnInit {

  private stateService: StateService;
  /*package*/ names : Array<string>;
  /*package*/ title : string;

  constructor( private state  : StateService, private config : NgbPaginationConfig )
  {
    this.stateService = state;
    let dots = this.getQueryParam( "dots" );
    if ( dots.length > 0 )
    {
      this.stateService.setDots( dots );
    }
    this.names = state.getNames();
    this.title = "Diag";
  }

  ngOnInit()
  {
    setInterval( () => { this.updateNames(); }, 100 );
  }

  /*package*/ changedName( name ) : void
  {
    location.hash = "#" + name;
  }

  /*package*/ prev(): void
  {
    let currentName = this.stateService.getName();
    let currentIndex = this.names.findIndex( name => name === currentName );
    if ( currentIndex > 0 )
    {
      location.hash = "#" + this.names[ currentIndex - 1 ];
    }
  }

  /*package*/ next(): void
  {
    let currentName = this.stateService.getName();
    let currentIndex = this.names.findIndex( name => name === currentName );
    if ( currentIndex < ( this.names.length - 1 ) )
    {
      location.hash = "#" + this.names[ currentIndex + 1 ];
    }
  }
  
  /*package*/ togleShowEditor(): void
  {
   this.stateService.togleShowEditor();
  }

  /*package*/ link(): void
  {
    window.location.search = "?dots=" + encodeURIComponent( this.stateService.dots );
  }

  private updateNames() : void
  {
    this.names = this.stateService.getNames();
  }

  private getQueryParam( param : string )
  {
    let query = window.location.search.substring(1);
    let vars = query.split( '&' );
    for ( let i = 0; i < vars.length; i++ ) {
        let pair = vars[i].split( '=' );
        if ( decodeURIComponent( pair[0] ) == param )
        {
            return decodeURIComponent( pair[1] );
        }
    }
    return "";
  }
}
