# Vue DateFormat
This plugin is compatible with **Vue 3**

Vue-DateFormat is a component designed to format dates in a Vue.js application. It simple takes in a `Date` or `String` and converts it via `toLocaleString()` with different options passed in depending on your props.


For any bugs or feature requests, regarding this component, head on over to the [issues](https://github.com/VoidSolutionsGit/Vue-DateFormat/issues) page. For any queries that do not relate to this exact component, contact us at [Void Solutions](https://voidsolutions.net/).


## Installation

```npm i @voidsolutions/vue-dateformat```

## Usage as a global component

In your ```main.js``` file, import the component and register it as a global component.

```javascript
import { createApp } from 'vue'
const app = createApp(App)
...

import DateFormat from '@voidsolutions/vue-dateformat'
app.use(DateFormat);

...

app.mount('#app')
```

In your template, use the component as follows:

```html

<date-format :date="new Date()" />

```

### Props

| Prop        | Type           | Default               | Description                                         |
| ----------- | -------------- | --------------------- | --------------------------------------------------- |
| date        | String or Date | `new Date()`          | The date to be formatted                            |
| no-days     | Boolean        | `false`               | If true, the day of the month will not be displayed |
| no-month    | Boolean        | `false`               | If true, the month will not be displayed            |
| short-month | Boolean        | `false`               | If true, the month will be abbreviated              |
| no-year     | Boolean        | `false`               | If true, the year will not be displayed             |
| has-time    | Boolean        | `false`               | Whether to show a time component                    |
| classes     | String         | `'vs-date'`           | Classes to be applied to the \<span>                |
| locales     | String or Array| `navigator.languages` | The locale to be used for formatting                |

# Examples
Here are some examples for you to become familiar with our date formatter.
## No Props
    
```html
<date-format :date="1/1/2020" />

Output: 1 January 1970
```

## No days, Short month
```html
<date-format :date="1/1/2020" no-days short-month />

Output:  Jan 2020
```

## Custom Styling

You can also use the `classes` prop to pass any specific class over to the `<span>` tag, just on the off chance you need something like that.


