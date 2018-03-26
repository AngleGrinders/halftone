import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StateService
{
  private mIndex$ = new Subject<number>();

  constructor() { }

  init()
  {
    let lastIndex = -1;

    //TODO: Should I be using $timeout because this does not work?
    setTimeout( ( index : Subject<number> ) =>
    {
      console.log( "Checking hash..." );
      let currentIndex = Number.parseInt( location.hash );
      if ( currentIndex != lastIndex )
      {
        index.next( currentIndex );
        lastIndex = currentIndex;
      }
    }, 
    1000,
    this.mIndex$ );
  }

  subscribe( lambda : ( index : number ) => void ) : void
  {
    this.mIndex$.subscribe( lambda );
  }
}
