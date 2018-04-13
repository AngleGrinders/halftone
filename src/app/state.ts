export class State {
  
  public readonly name : string;
  public readonly dots : string;

  constructor( name : string, dots : string )
  {
    this.name = name;
    this.dots = dots;
  }

  public getDot() : string
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
    return "digraph NotFound { \"Could not find a diagram\" }";
  }
}
