# Web.MiyaAccess

## Installation
1. cd to new project directory 
```
cd <path>/newProjectDirectory```
2. Clone from Git Repo.
```
git clone http://ac-tfs:8080/tfs/Product/Miya/_git/Web.MiyaAccess```
3. Install Dependencies
```
npm install```
4. Start Webpack Server
```
npm start```

## NPM Scripts

### typecheck
Runs `flow check` to perform static type analysis and checking

### lint
Runs `eslint -ext js,jsx` with a (very slightly modified) AirBnB Config

### test
Runs `jest` to execute all tests found in the file.

## Code Structure

```
    assets/
            css/
                        bootstrap.scss
                        common.scss
                        mixins.scss
                        mobile.scss        
                        screen.scss
                        utilities.scss
                        variables.scss
                        <font>.css
            fonts/
            images/
            templates/
    scripts/
            server.js
            setup-jasmine-env.js
    src/
            actions/
            api/
            components/
                        ComponentName/
                                        ComponentName.jsx
                                        ComponentName.test.jsx
                                        ComponentName.scss
                                        variables.scss
            controllers/
            reducers/
                fixtures/
                    fixtureName.fixture.js
                reducerName.js
                reducerName.test.js
            sagas/
            utilities/
            views/
```
        
