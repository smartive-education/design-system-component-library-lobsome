const path = require('path');
const pathToInlineSvg = path.resolve(__dirname, '../src/assets/icons');

module.exports = {
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
    stories: [
        "../src/components/**/*.stories.mdx",
        "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-postcss"
    ],
    framework: "@storybook/react",
    webpackFinal: async (config) => {
        const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test('.svg'));
        fileLoaderRule.exclude = pathToInlineSvg;
        config.module.rules.push({
            test: /\.svg$/,
            include: pathToInlineSvg,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        configFile: '.svgrrc.js',
                    },
                },
            ],
        });
        return config;
    },
}