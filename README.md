# Halftone
Halftone is a printing technique that produces images using a pattern of dots.
This webapp produces interactive, animated GraphViz diagrams from a sequence of DOTs.

## Architecture
The Halftone webapp is a client-side only application.
This means that it can be served by a simple web server, for example github pages :)

This Angular project is composed of 3 components:
1. controler: 
    1. Handle the toolbar buttons (Prev, Next)
    2. Populate the dynamic dropdown index box.
2. editor:
    1. Display the list of DOT graphs.
3. viewer:
    1. Display the current diagram.
    2. Animate between diagram transitions.
    3. Display error message when a DOT syntax error is encountered.
    
And 1 state:
1. State:
    1. Holds the DOT model (list of DOTs).
    2. Holds the name of the current DOT.
    3. Provides logic to select a named DOT.
    4. Resolves recursive imported graphs.
    
And 1 class:
1. name-monitor:
    1. Monitors the URL for # arguments and updates the state accordingly.

## Usage
1. Press edit on the toolbar.
    * An editor pane will open on the left hand side.
2. Modify the list of GraphViz diagrams.
    * The displayed graph will dynamically update as you type.
    * Errors will show on the bottom in red.
3. Click on the link toolbar icon to generate a URL embedding your diagram.
    * This URL can be copy-pasted and shared.

## DOT Language Customization
### URL Linking
The URL attribute can be used to link to another DOT diagram by its name. For example:
```
digraph first {
  forward[URL="#second"]
}
digraph second {
  backward[URL="#first"]
}
```

### Subgraph Importing
Similar to clusters, when and empty subgraph prefexed by `import_` is entered,
The graph by that name will be inserted (recursively) into that empty subgraph block.
This allows the author to reuse previously written graphs without duplicating the code.
Example: 
```
digraph first {
  a->b->c
}
digraph second {
  subgraph import_first {}
  b->d
}
```
### Adding to imported clusters
When a graph is imported, we simply drop the `import_` prefix and use it as a normal subgraph.
In the following example, `d` is inserted into the cluster declared in the first diagram.
```
digraph first {
  subgraph cluster_firstbox {
    a;
    b;
  }
  a->b->c
}
digraph second {
  subgraph import_first {}
  
  subgraph first {
    subgraph cluster_firstbox {
      d;
    }
  }
  b->d
}
```
## Prerequisites
1. Node.js (Download from [node.js](https://nodejs.org/en/download/))

## Installation & Run
1. npm install
2. ng serve

## Build & Publish
1. ng build --prod --base-href="https://AngleGrinders.github.io/halftone/"
2. node_modules/angular-cli-ghpages/bin/angular-cli-ghpages

# Samples
1. [Example IntelePACS Doc](https://anglegrinders.github.io/halftone/#dots=digraph%20overview%20%7B%0A%20%20rankdir%3DLR%0A%20%20node%5Bstyle%3Dfilled%5D%0A%20%20subgraph%20cluster_pipeline%20%7B%0Alabel%3DIntelePACS%0A%20%20%20%20LDS%5BURL%3D%22%23lds%22%5D%0A%20%20%20%20DMS%5BURL%3D%22%23dms%22%5D%0Aimage_server%5BURL%3D%22%23image_server%22%5D%0A%20%20%20%20UMDB%5BURL%3D%22%23umdb%22%5D%0A%20%20%20%20AutoRoute%5BURL%3D%22%23autoroute%22%5D%0A%20%20%20%20AutoMove%5BURL%3D%22%23automove%22%5D%0A%20%20%20%20%0A%20%20%7D%0A%20%20%20%20scanner%20-%3E%20image_server%20-%3E%20LDS%20-%3E%20%7B%20AutoRoute%20UMDB%20AutoMove%20DMS%7D%0A%20%20%20%20UMDB-%3EDMS%0A%0A%7D%0A%0Adigraph%20image_server%20%7B%0A%20%20rankdir%3DLR%0A%20%20node%5Bstyle%3Dfilled%5D%0A%20%20subgraph%20cluster_pipeline%20%7B%0Alabel%3DIntelePACS%0A%20%20%20%20LDS%5BURL%3D%22%23lds%22%5D%0A%20%20%20%20DMS%5BURL%3D%22%23dms%22%5D%0Aimage_server%5BURL%3D%22%23image_server%22%5D%0A%20%20%20%20UMDB%5BURL%3D%22%23umdb%22%5D%0A%20%20%20%20AutoRoute%5BURL%3D%22%23autoroute%22%5D%0A%20%20%20%20AutoMove%5BURL%3D%22%23automove%22%5D%0A%20%20%20%20%0A%20%20%7D%0A%20%20%20%20scanner%20-%3E%20image_server%20-%3E%20LDS%20-%3E%20%7B%20AutoRoute%20UMDB%20AutoMove%20DMS%7D%0A%20%20%20%20UMDB-%3EDMS%0A%0Asubgraph%20cluster_FAQ%20%7B%0A%20%20faq1%5Blabel%3D%22Association%20Rejected%22%20URL%3D%22%23image_server_faq1%22%5D%0A%20%20faq2%5Blabel%3D%22Too%20slow%22%20URL%3D%22%23image_server_faq2%22%5D%0A%20%20faq3%5Blabel%3D%22Load%20Balancing%22%5D%0A%20%20faq4%5Blabel%3D%22...%22%5D%0A%7D%0Aimage_server-%3E%7B%20faq1%20faq2%20faq3%20faq4%20%7D%0A%7D%0A%0Adigraph%20image_server_faq1%20%7B%0A%20%20rankdir%3DLR%0A%20%20node%5Bstyle%3Dfilled%5D%0A%20%20subgraph%20cluster_pipeline%20%7B%0Alabel%3DIntelePACS%0A%20%20%20%20LDS%5BURL%3D%22%23lds%22%5D%0A%20%20%20%20DMS%5BURL%3D%22%23dms%22%5D%0Aimage_server%5BURL%3D%22%23image_server%22%5D%0A%20%20%20%20UMDB%5BURL%3D%22%23umdb%22%5D%0A%20%20%20%20AutoRoute%5BURL%3D%22%23autoroute%22%5D%0A%20%20%20%20AutoMove%5BURL%3D%22%23automove%22%5D%0A%20%20%7D%0A%20%20%20%20scanner%20-%3E%20image_server%20-%3E%20LDS%20-%3E%20%7B%20AutoRoute%20UMDB%20AutoMove%20DMS%7D%0A%20%20%20%20UMDB-%3EDMS%0A%0Asubgraph%20cluster_FAQ%20%7B%0A%20%20faq1%5Blabel%3D%22Association%20Rejected%22%20URL%3D%22%23image_server_faq1%22%5D%0A%20%20faq2%5Blabel%3D%22Too%20slow%22%20URL%3D%22%23image_server_faq2%22%5D%0A%20%20faq3%5Blabel%3D%22Load%20Balancing%22%5D%0A%20%20faq4%5Blabel%3D%22...%22%5D%0A%7D%0Aimage_server-%3E%7B%20faq1%20faq2%20faq3%20faq4%20%7D%0A%0Aans1%5Bshape%3Dbox%20label%3D%22Image%20server%20%0AANSWER%20%23%201%0A%0AThis%20service%20is%20performing%20the%20initial%20image%20ingestion%0A%0ALogs%3A%20%2Fvar%2Flog%2FPACS%2Fimage_server%0A%0ALink%20to%20training%20slide%3A%20Image%20Server%20training%20%22%5D%0Afaq1-%3Eans1%0A%7D%0A%0Adigraph%20image_server_faq2%20%7B%0A%20%20rankdir%3DLR%0A%20%20node%5Bstyle%3Dfilled%5D%0A%20%20subgraph%20cluster_pipeline%20%7B%0Alabel%3DIntelePACS%0A%20%20%20%20LDS%5BURL%3D%22%23lds%22%5D%0A%20%20%20%20DMS%5BURL%3D%22%23dms%22%5D%0Aimage_server%5BURL%3D%22%23image_server%22%5D%0A%20%20%20%20UMDB%5BURL%3D%22%23umdb%22%5D%0A%20%20%20%20AutoRoute%5BURL%3D%22%23autoroute%22%5D%0A%20%20%20%20AutoMove%5BURL%3D%22%23automove%22%5D%0A%20%20%7D%0A%20%20%20%20scanner%20-%3E%20image_server%20-%3E%20LDS%20-%3E%20%7B%20AutoRoute%20UMDB%20AutoMove%20DMS%7D%0A%20%20%20%20UMDB-%3EDMS%0A%0Asubgraph%20cluster_FAQ%20%7B%0A%20%20faq1%5Blabel%3D%22Association%20Rejected%22%20URL%3D%22%23image_server_faq1%22%5D%0A%20%20faq2%5Blabel%3D%22Too%20slow%22%20URL%3D%22%23image_server_faq2%22%5D%0A%20%20faq3%5Blabel%3D%22Load%20Balancing%22%5D%0A%20%20faq4%5Blabel%3D%22...%22%5D%0A%7D%0Aimage_server-%3E%7B%20faq1%20faq2%20faq3%20faq4%20%7D%0A%0Aans2%5Bshape%3Dbox%20label%3D%22Image%20server%20%0AANSWER%20%23%202%0AThis%20service%20is%20performing%20the%20initial%20image%20ingestion%0ALogs%3A%20%2Fvar%2Flog%2FPACS%2Fimage_server%0ALink%20to%20training%20slide%3A%20Image%20Server%20training%20%22%5D%0Afaq2-%3Eans2%0A%7D%0A%0A%0A%0Adigraph%20lds%20%7B%0A%20%20rankdir%3DLR%0A%20%20node%5Bstyle%3Dfilled%5D%0A%20%20subgraph%20cluster_pipeline%20%7B%0Alabel%3DIntelePACS%0A%20%20%20%20LDS%5BURL%3D%22%23lds%22%5D%0A%20%20%20%20DMS%5BURL%3D%22%23dms%22%5D%0Aimage_server%5BURL%3D%22%23image_server%22%5D%0A%20%20%20%20UMDB%5BURL%3D%22%23umdb%22%5D%0A%20%20%20%20AutoRoute%5BURL%3D%22%23autoroute%22%5D%0A%20%20%20%20AutoMove%5BURL%3D%22%23automove%22%5D%0A%20%20%20%20%0A%20%20%7D%0A%20%20%20%20scanner%20-%3E%20image_server%20-%3E%20LDS%20-%3E%20%7B%20AutoRoute%20UMDB%20AutoMove%20DMS%7D%0A%20%20%20%20UMDB-%3EDMS%0A%0Asubgraph%20cluster_FAQ%20%7B%0A%20%20faq1%5Blabel%3D%22Ingestion%20Failure%22%20URL%3D%22%23lds_faq1%22%5D%0A%20%20faq2%5Blabel%3D%22Bloat%22%20URL%3D%22%23lds_faq2%22%5D%0A%20%20faq3%5Blabel%3D%22...%22%5D%0A%7D%0ALDS-%3E%7B%20faq1%20faq2%20faq3%20%20%7D%0A%7D%0A%0Adigraph%20lds_faq1%20%7B%0A%20%20rankdir%3DLR%0A%20%20node%5Bstyle%3Dfilled%5D%0A%20%20subgraph%20cluster_pipeline%20%7B%0Alabel%3DIntelePACS%0A%20%20%20%20LDS%5BURL%3D%22%23lds%22%5D%0A%20%20%20%20DMS%5BURL%3D%22%23dms%22%5D%0Aimage_server%5BURL%3D%22%23image_server%22%5D%0A%20%20%20%20UMDB%5BURL%3D%22%23umdb%22%5D%0A%20%20%20%20AutoRoute%5BURL%3D%22%23autoroute%22%5D%0A%20%20%20%20AutoMove%5BURL%3D%22%23automove%22%5D%0A%20%20%20%20%0A%20%20%7D%0A%20%20%20%20scanner%20-%3E%20image_server%20-%3E%20LDS%20-%3E%20%7B%20AutoRoute%20UMDB%20AutoMove%20DMS%7D%0A%20%20%20%20UMDB-%3EDMS%0A%0Asubgraph%20cluster_FAQ%20%7B%0A%20%20faq1%5Blabel%3D%22Ingestion%20Failure%22%20URL%3D%22%23lds_faq1%22%5D%0A%20%20faq2%5Blabel%3D%22Bloat%22%20URL%3D%22%23lds_faq2%22%5D%0A%20%20faq3%5Blabel%3D%22...%22%5D%0A%7D%0ALDS-%3E%7B%20faq1%20faq2%20faq3%20%20%7D%0A%0Aans1%5Bshape%3Dbox%20label%3D%22LDS%20%0AANSWER%20%23%201%20%22%5D%0Afaq1-%3Eans1%0A%7D%0A%0Adigraph%20lds_faq2%20%7B%0A%20%20rankdir%3DLR%0A%20%20node%5Bstyle%3Dfilled%5D%0A%20%20subgraph%20cluster_pipeline%20%7B%0Alabel%3DIntelePACS%0A%20%20%20%20LDS%5BURL%3D%22%23lds%22%5D%0A%20%20%20%20DMS%5BURL%3D%22%23dms%22%5D%0Aimage_server%5BURL%3D%22%23image_server%22%5D%0A%20%20%20%20UMDB%5BURL%3D%22%23umdb%22%5D%0A%20%20%20%20AutoRoute%5BURL%3D%22%23autoroute%22%5D%0A%20%20%20%20AutoMove%5BURL%3D%22%23automove%22%5D%0A%20%20%20%20%0A%20%20%7D%0A%20%20%20%20scanner%20-%3E%20image_server%20-%3E%20LDS%20-%3E%20%7B%20AutoRoute%20UMDB%20AutoMove%20DMS%7D%0A%20%20%20%20UMDB-%3EDMS%0A%0Asubgraph%20cluster_FAQ%20%7B%0A%20%20faq1%5Blabel%3D%22Ingestion%20Failure%22%20URL%3D%22%23lds_faq1%22%5D%0A%20%20faq2%5Blabel%3D%22Bloat%22%20URL%3D%22%23lds_faq2%22%5D%0A%20%20faq3%5Blabel%3D%22...%22%5D%0A%7D%0ALDS-%3E%7B%20faq1%20faq2%20faq3%20%20%7D%0A%0Aans2%5Bshape%3Dbox%20label%3D%22LDS%20%0AANSWER%20%23%202%20%22%5D%0Afaq2-%3Eans2%0A%7D)
