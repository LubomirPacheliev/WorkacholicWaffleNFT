const config = {
    preset: 'ts-jest',
    verbose: true,
    errorOnDeprecated: true,
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    extraGlobals: [], // in case I need extra props to be defined inside the jest VM

    // notify: true,
    // notifyMode: 'failure'
}

module.exports = config;

// this exists in case you need to change the testing env
//@jest-environment jsdom