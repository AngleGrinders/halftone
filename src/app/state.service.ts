import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

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

  public getDot() : string
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
              if ( currentName === this.name )
              {
                  return "digraph" + partialDot;
              }
          }
      }
    }
    return "digraph NotFound { \"Could not find a diagram\" }";
  }
}
