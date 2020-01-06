## Install

`npm install -D clean-output-plugin`

## Usage

```
const CleanOutputPlugin = require('clean-output-plugin')

config.plugins.push(
    new CleanOutputPlugin(
        hook: 'done', //default is 'emit'
        ignoreFiles: [], //the files which will not be removed
        explicitlyDelFiles: [
            'bundle.js',
            '*.js.map',
        ] // the files which will be removed, if a file path is set in the ignoreFiles at the same time, the plugin will delete this file
        // the path of ignoreFiles and explicitlyDelFiles is relative to webpack.output.path
    )
)
```
