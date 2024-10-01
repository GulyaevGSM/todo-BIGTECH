import type { Config } from 'jest';

const config: Config = {
    clearMocks: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    moduleDirectories: ['node_modules', 'src'],
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    moduleNameMapper: {
        '\\.svg$': [`<rootDir>/config/jest/jestEmptyComponent.tsx`],
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.s?css$': 'identity-obj-proxy'
    },
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

export default config;
