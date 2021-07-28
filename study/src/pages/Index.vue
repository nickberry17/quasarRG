<template>
  <q-page class="flex flex-center"> Hello </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { inject } from "vue";

export default defineComponent({
  name: "PageIndex",
  setup() {
    const store = inject("store");

    return {
      store,
    };
  },
});
</script>
