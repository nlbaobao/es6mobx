const path = require("path");
const webpack = require("webpack");
const static = path.resolve(__dirname, "../static");

const config = {
  mode: "development",
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom', 'mobx']
},
  output: {
   path: static,
   filename: 'dll.name.js',
   library: '[name]_[hash]',
  },
  
  plugins: [
   new webpack.DllPlugin({
       path:path.resolve(__dirname, "../static", '[name].manifest.json'),
       name:'[name]_[hash]'
   })
  ],
};
module.exports = config;
