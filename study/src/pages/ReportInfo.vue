<template>
  <div>
    <div class="q-pa-md" style="max-width: 50vw">
      <h2>Report Details</h2>
    </div>
    <div class="q-pa-md" style="max-width: 33vw">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h6">Order ID</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input
            filled
            v-model="store.state.survey.orderId"
            label="Order Id"
            mask="N#####"
            unmasked-value
            hint="Order ID: N#####"
          />
        </q-card-section>
      </q-card>

      <q-card flat bordered class="my-card">
        <q-card-section>
          <div class="text-h6">Survey Type</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="q-gutter-sm">
            <q-radio
              keep-color
              v-model="store.state.survey.type"
              val="Basic"
              label="Basic"
              color="teal"
            />
            <q-radio
              keep-color
              v-model="store.state.survey.type"
              val="Detailed"
              label="Detailed"
              color="orange"
            />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "PageCustomerInfo",
  setup() {
    const store = inject("store");

    return {
      store,
    };
  },
});
</script>

<style scoped>
.my-card {
  margin: 1rem;
}
</style>