
<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-btn
      class="text-h3"
      label="Create PDF"
      @click="store.methods.createPDF()"
      color="green-9"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { inject } from "vue";

export default defineComponent({
  name: "PageCreatePDF",
  setup() {
    const store = inject("store");

    return {
      store,
    };
  },
});
</script>
