import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { State } from './state';

@Injectable()
export class StateService
{
    private stateSubject$ : Subject<State>;
    private name : string;
    private lastDots : string;
    private dots : string;

    constructor()
    {
      this.stateSubject$ = new Subject<State>();
      this.name = "None";
      this.dots = `
        digraph one { 
          two[URL="#two"]
          one->two
        }

        digraph two {
          one[URL="#one"]
          two[URL="#two"]
          three[URL="#three"]
          
          one->two->three
        }
        digraph three { 
          
          one[URL="#one"]
          two[URL="#two"]
          three[URL="#three"]
          four[URL="#four"]
          
         one->two->{three four}
        }
      `;
    }

  subscribe( lambda : ( state : State ) => void ) : void
  {
    this.stateSubject$.subscribe( lambda );
  }

  public getName() : string
  {
    return this.name;
  }

  public setName( newName : string )
  {
    // Get first name
    if ( newName.length == 0 || newName === "None" )
    {
      newName = this.getNames()[0];
      location.hash = "#" + newName;
    }

    if ( newName != this.name )
    {
      this.name = newName;
      this.notify();
    }
  }

  public getDots() : string
  {
    return this.dots;
  }

  public setDots( newDots : string )
  {
    if ( newDots !== this.dots )
    {
      this.dots = newDots;
      this.notify();
    }
  }

  private notify()
  {
    console.log( "Notifying " + this.name );
    this.stateSubject$.next( new State( this.name, this.dots ) );
  }

  public getNames() : Array<string>
  {
    let names = new Array<string>();

    let partialDots = this.dots.trim().split( 'digraph' );
    for ( let partialDot of partialDots )
    {
        let splittedPartialDot = partialDot.split( "{" );
        if ( splittedPartialDot.length > 1 )
        {
            let currentName = splittedPartialDot[0].trim();
            names.push( currentName );
        }
    }

    return names;
  }
}
