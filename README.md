vue-props
========

Spread props object for vue component.

## Requirements

* Vue ^1.0

## Install

```shell
npm install vue-props
```

or just download `build/vue-props.min.js`.

## Usage

```html
<component v-for="comp in cList"
            :is="comp.type"
            v-props="comp.props"></component>

```

