module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: "last 2 versions"
        },
        modules: false
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    "react-hot-loader/babel",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties"
  ]
};
