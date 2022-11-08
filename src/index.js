import DateFormat from './components/DateFormat.vue';

export default {
    install: (app, options) => {
        app.component('DateFormat', DateFormat);
    }
}