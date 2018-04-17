import { StateService } from './state.service';
import { Injectable } from '@angular/core';

@Injectable()
export class NameMonitor
{
    constructor( private state : StateService )
    {

        let initialHash = this.getHash();
        if ( initialHash.startsWith( "dots=" ) )
        {
            state.setDots( decodeURIComponent( initialHash.substr( 5 ) ) );
            location.hash = "";
        }
    }

    /**
     * Parses the URL hash and sets the mIndex
     */
    private parseLocationHash() : void
    {
        //TODO: Should I be using $location?
        let newName = this.getHash();

        if ( ! newName.startsWith( "dots=" ) )
        {
            this.state.setName( newName );
        }
    }

    start() : void
    {
        //TODO: Should I be using $interval?
        setInterval( () => { this.parseLocationHash(); }, 100 );
    }

    private getHash()
    {
        return ( location.hash.length > 1 ? location.hash.substring( 1 ) : "" );
    }
}
