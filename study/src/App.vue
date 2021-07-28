<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";

import { provide } from "vue";
import store from "./store";

export default defineComponent({
  name: "App",
  setup() {
    provide("store", store);
  },
});
</script>
