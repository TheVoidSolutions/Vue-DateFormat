# Vue Dateformat

Vue-Dateformat is a component designed to format dates in a Vue.js application.

## Installation

```npm install vue-dateformat```

## Usage as a global component

In your ```main.js``` file, import the component and register it as a global component.

```javascript
import { createApp } from 'vue'
const app = createApp(App)
...

import DateFormat from '@void/vue-dateformat'
app.use(DateFormat);

...

app.mount('#app')
```

In your template, use the component as follows:

```html

<date-format :date="date" />

```

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| date | String or Date | new Date() | The date to be formatted |
| has-time | Boolean | false | Whether to show a time component |

