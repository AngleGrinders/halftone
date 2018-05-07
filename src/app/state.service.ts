import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { resolve } from 'url';

@Injectable()
export class StateService
{
  /*package*/ name: string;
  /*package*/ dots: string;
  /*package*/ showEditor: boolean;

  constructor()
  {
      this.name = 'None';
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
    this.showEditor = false;
  }

  public getShowEditor(): boolean
  {
    return this.showEditor;
  }

  public togleShowEditor(): void
  {
    this.showEditor = !this.showEditor;
  }

  public getName(): string
  {
    return this.name;
  }

  // Called by NameMonitor
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
    }
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

  public getCurrentDot() : string
  {
    return this.getDot( this.name );
  }

  public getDot( name : string ) : string
  {
    if ( this.dots != null )
    {
      let partialDots = this.dots.trim().split( 'digraph' );
      for ( let partialDot of partialDots )
      {
          let splittedPartialDot = partialDot.split( "{" );
          if ( splittedPartialDot.length > 1 )
          {
              let currentName = splittedPartialDot[0].trim();
              if ( currentName === name )
              {
                  return this.resolveDot( "digraph" + partialDot );
              }
          }
      }
    }
    return "digraph NotFound { \"Could not find a diagram\" }";
  }

  private resolveDot( dot : string ) : string
  {
    let subgraphMatcher = /^\s*subgraph\s+import_(\w+)\s*{\s*}\s*;?\s*$/gm;
    let names = this.getNames();
    let state = this;
    return dot.replace( subgraphMatcher, function ( line, name ) : string
    {
      if ( name === state.name )
      {
        console.error( "Recursive import not allowed" );
        return line;
      }

      if ( names.indexOf( name ) >= 0 )
      {
        //console.log( name );
        return state.getDot( name )
                    .replace( "digraph", "subgraph" );
      }
      // Nothing to replace
      console.error( "Invalid import " + name + " is not a diagram name" );
      return line;
    } );
  }
}
