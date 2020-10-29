module.exports = {
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less)$': 'identity-obj-proxy',
        'ag-grid-enterprise': '<rootDir>/__mocks__/agGridMock.js',
    },
    rootDir: './',
    coverageDirectory: '<rootDir>/target/test-results/',
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    testMatch: ['**/__tests__/**/*.(spec|test).js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'ts', 'tsx'],
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: './target/test-results/jest',
                outputName: 'TESTS-results.xml',
            },
        ],
    ],
    testResultsProcessor: 'jest-sonar-reporter',
    coveragePathIgnorePatterns: ['/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/__tests__/SetupJest.js'],
};
