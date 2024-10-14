module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          components: './src/components',
          constants: './src/constants',
          helpers: './src/helpers',
          navigation: './src/navigation',
          screens: './src/screens',
          services: './src/services',
          reduxData: './src/reduxData',
          providers: './src/providers',
          stacks: './src/navigation/stacks',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
