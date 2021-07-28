
<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="store.methods.createCustomer"
      @reset="resetCustomerInfo"
      class="q-gutter-md"
    >
      <q-input
        filled
        type="string"
        v-model="store.state.customer.orderId"
        label="Order ID *"
        hint="Order ID"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please supply the order ID',
          (val) =>
            (val[0] === 'N' && val.length > 0 && val.length < 7) ||
            'Invalid Order ID',
        ]"
      />

      <q-input
        filled
        v-model="store.state.customer.name"
        label="Customer name *"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Cannot be blank']"
      />

      <q-input
        filled
        v-model="store.state.customer.company"
        label="Customer company name"
        hint="Company name"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { inject } from "vue";

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
.outer-card {
  padding: 1rem;
}
.inner-card {
  padding: 1rem;
  margin: 1rem;
}
</style>