<template>
  <div>
    <div class="q-pa-md" style="max-width: 33vw">
      <q-btn
        label="Add Customer"
        @click="store.methods.createCustomer('', '', '')"
        color="primary"
      />

      <q-list
        bordered
        separator
        style="display: flex; flex-flow: column wrap; max-height: 100vh"
      >
        <q-item
          v-for="(customer, index) of store.state.customers"
          :key="customer.id"
        >
          <q-card class="std-card" style="width: clamp(20vw, 30vw, 25vw)">
            <q-card-section class="bg-primary text-white">
              <div class="text-h6">{{ customer.name || "Customer Name" }}</div>
              <div class="text-subtitle2">
                {{ customer.company || "Company Name" }}
              </div>
              <div class="text-subtitle2">
                {{ `Order ID: ${store.state.survey.orderId}` || "Order ID" }}
              </div>
            </q-card-section>

            <q-separator />

            <q-form
              @submit="store.methods.createCustomer('', '', '')"
              class="q-gutter-md"
            >
              <q-input
                color="purple-12"
                filled
                v-model="store.state.customers[index].name"
                label="Customer name *"
                hint="Name and surname"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Cannot be blank']"
              />

              <q-input
                color="purple-12"
                v-model="store.state.customers[index].company"
                filled
                type="string"
                label="Customer company name"
                hint="Company name"
              />
            </q-form>
            <q-card-actions align="right">
              <q-btn
                label="Delete"
                color="red"
                rounded
                @click="store.methods.removeCustomer(customer.id)"
              />
            </q-card-actions>
          </q-card>
        </q-item>
      </q-list>
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
.outer-card {
  padding: 1rem;
}
.inner-card {
  padding: 1rem;
  margin: 1rem;
}

.std-card {
  padding: 1rem;
  margin: 1rem;
}
</style>