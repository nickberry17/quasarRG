
<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px">
      <q-btn
        class="text-h3"
        label="Create PDF"
        icon="picture_as_pdf download"
        @click="store.methods.createPDF()"
        color="green-9"
      />
    </div>
  </q-page>
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
