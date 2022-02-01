import { defaults } from 'jest-config';

const config = {
    verbose: true,
    errorOnDeprecated: true,
    moduleFileExtensions: [...defaults, 'ts', 'tsx'],
    extraGlobals: [], // in case I need extra props to be defined inside the jest VM

    // notify: true,
    // notifyMode: 'failure'
}

export default config;

// this exists in case you need to change the testing env
//@jest-environment jsdom