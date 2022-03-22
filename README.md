`postcss-flex-value` is a plugin of [postcss](https://postcss.org/), it transforms flex's "start" to "flex-start" to avoid issue like [start value has mixed support, consider using flex-start instead](https://github.com/mozilla/addons-frontend/issues/7312)

## Install

```sh
yarn add -D postcss-flex-value
```

## Demo

### Input

```css
.a {
    display: flex;
    justify-content: start;
    align-items: end;
}
```

### Output

```css
.a {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
}
```

## Usage

### Postcss

```js
postcss([require('postcss-flex-value')]);
```

### Webpack

```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [{
                    loader: require.resolve('postcss-loader'),
                    options: {
                        postcssOptions: {
                            plugins: require('postcss-flex-value')
                        }
                    }
                }]
            }
        ]
    }
}
```