import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StateService
{

  private mLastIndex;
  private mIndex$;

  constructor()
  {
    this.mLastIndex = NaN;
    this.mIndex$ = new Subject<number>();

    //TODO: Should I be using $interval?
    setInterval( () => { this.parseLocationHash(); }, 1000 );
  }

  subscribe( lambda : ( index : number ) => void ) : void
  {
    this.mIndex$.subscribe( lambda );

    // Initialize the index immediately
    this.parseLocationHash();
  }

  getIndex() : number
  {
    return this.mLastIndex;
  }

  /**
   * Parses the URL hash and sets the mIndex
   */
  private parseLocationHash() : void
  {
    //TODO: Should I be using $location?
    let currentIndex = Number.parseInt( location.hash.substring( 1 ) );
    if ( Number.isNaN( currentIndex ) )
    {
      //console.error( "Location hash is not a number: " + location.hash );
      currentIndex = 1;
    }
    if ( currentIndex != this.mLastIndex )
    {
      console.log( "State Change, index = " + currentIndex );
      this.mIndex$.next( currentIndex );
      this.mLastIndex = currentIndex;
    }  
  }
}
