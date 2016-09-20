# CD.ReactPlayground

## Git Clone Url
http://ac-tfs:8080/tfs/Product/Research/_git/CD.ReactPlayground

## Installation
1. cd to new project directory 
```cd <path>/newProjectDirectory```
2. Clone from Git Repo.
```git clone http://ac-tfs:8080/tfs/Product/Research/_git/CD.ReactPlayground```

## Code Structure

```
assets/
        css/
                bootstrap.scss
                common.scss
                mixins.scss
                mobile.scss        
                screen.scss         <-- This is where your primary layout lives
                utilities.scss      <-- Optional mobile layout
                variables.scss      <-- Contains all App level style variables
                <font>.css
        fonts/
                EOT/
                OTF/
                TTF/
                WOFF/
                WOFF2/
        images/
                favicon.ico
        templates/
                index.ejs
flow_typed/
        jest.flow.js
scripts/
        server.js                   <-- Webpack enabled server
        setup-jasmine-env.js
        

```
        
