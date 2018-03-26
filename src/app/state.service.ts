import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { timeout } from 'q';

@Injectable()
export class StateService
{

  private mLastIndex = 0;
  private mIndex$ = new Subject<number>();

  constructor()
  {
    console.log( "State constructed..." );

    //TODO: Should I be using $interval?
    setInterval( () =>
    {
      //TODO: Should I be using $location?
      let currentIndex = Number.parseInt( location.hash.substring( 1 ) );
      if ( currentIndex != this.mLastIndex )
      {
        this.mIndex$.next( currentIndex );
        this.mLastIndex = currentIndex;
      }     
    }, 
    1000 );
  }

  init()
  {
  }

  subscribe( lambda : ( index : number ) => void ) : void
  {
    this.mIndex$.subscribe( lambda );
  }
}
