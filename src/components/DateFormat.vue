<script setup>
import { computed } from "vue";

const props = defineProps({
  date: {
    type: [String, Date],
    default: new Date(),
  },
  hasTime: {
    type: Boolean,
    default: false,
  },
  noSeconds: {
    type: Boolean,
    default: false,
  },
  noMinutes: {
    type: Boolean,
    default: false,
  },
  noDays: {
    type: Boolean,
    default: false,
  },
  noMonths: {
    type: Boolean,
    default: false,
  },
  noYears: {
    type: Boolean,
    default: false,
  },
  shortMonth: {
    type: Boolean,
    default: false,
  },
  classes: {
    type: String,
    default: "",
  },
  locales: {
    type: [String, Array],
    default: navigator.languages,
  },
});

const options = computed(() => {
  let baseOptions = {};

  baseOptions.year = "numeric";

  props.noDays ? null : (baseOptions.day = "numeric");
  props.noYears ? null : (baseOptions.year = "numeric");
  props.noMonth ? null : (baseOptions.month = "numeric");

  props.shortMonth
    ? (baseOptions.month = "short")
    : (baseOptions.month = "long");

  if (props.hasTime) {
    baseOptions.hour = "numeric";
    baseOptions.minute = "numeric";
    props.noSeconds ? null : (baseOptions.second = "numeric");
    props.noMinutes ? null : (baseOptions.minute = "numeric");
  }

  if (props.noDate) {
    baseOptions.day = undefined;
    baseOptions.month = undefined;
    baseOptions.year = undefined;
  }

  return baseOptions;
});

const classes = computed(() => {
  let baseClass = "";

  if (props.small) baseClass += "dateformat-small";

  return baseClass;
});
</script>

<template>
  <span :class="classes">
    {{ new Date(props.date).toLocaleString(locales, options) }}
  </span>
</template>