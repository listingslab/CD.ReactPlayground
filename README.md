# CD.ReactPlayground

## Installation
1. cd to new project directory 
```
cd <path>/newProjectDirectory```
2. Clone from Git Repo.
```
git clone http://ac-tfs:8080/tfs/Product/Research/_git/CD.ReactPlayground```
3. Install Dependencies
```
npm install```
4. Start Webpack Server
```
npm start```

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
        
src/
        
        actions/
                    NameAction.jsx
        components/
                    ComponentName/
                                ComponentName.jsx
                                ComponentName.scss
                                variables.scss
        controllers/
                    NameController.jsx
        reducers/
                    NameReducer.jsx
        sagas/
                    NameSaga.jsx
        view/
                    NameView.jsx

```
        
