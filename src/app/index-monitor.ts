import { StateService } from './state.service';
import { Injectable } from '@angular/core';

@Injectable()
export class IndexMonitor
{
    private stateService : StateService;

    constructor( private stateServiceIn : StateService )
    {
        this.stateService = stateServiceIn;
    }

    /**
     * Parses the URL hash and sets the mIndex
     */
    private parseLocationHash() : void
    {
        //TODO: Should I be using $location?
        let newName = ( location.hash.length > 1 ? location.hash.substring( 1 ) : "" );
        this.stateService.setName( newName );
    }

    start() : void
    {
        //TODO: Should I be using $interval?
        setInterval( () => { this.parseLocationHash(); }, 100 );
    }
}
