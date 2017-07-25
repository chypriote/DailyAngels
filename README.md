#Installation

First you need to install the Aurelia CLI and a Json-server which will be used as a mock API:  
`npm install -g json-server aurelia-cli`

Then install the dependencies:  
`npm install`

Run the fake webserver:  
`json-server --watch db.json &`

Build the project:  
`au build`

And run it:
`au run --watch`
