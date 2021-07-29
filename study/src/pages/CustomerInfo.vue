
<template>
  <div class="q-pa-md" style="max-width: 400px">
    <!--     <q-form
      @submit='store.methods.createCustomer(1, "Craig", "N12345", "Telco Antennas" )'
      class="q-gutter-md"
    >

      

      <q-input
        filled
        v-model="store.state.customers[$index].name"
        label="Customer name *"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Cannot be blank']"
      />

      <q-input
        filled
        v-model="store.state.customers[$index].company"
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
    </q-form> -->

    <q-list bordered separator>
      <q-item v-for="customer in store.state.customers" :key="customer.id"
        >{{ `${customer.name}  ${customer.company} ${customer.orderId}` }}
        <q-btn
          label="Delete"
          color="red"
          rounded
          @click="store.methods.removeCustomer(customer.id)"
        />
      </q-item>
    </q-list>

    <q-form
      @submit="
        store.methods.createCustomer('Craig', 'N12345', 'Telco Antennas')
      "
      class="q-gutter-md"
    >
      <div
        v-for="(customer, index) of store.state.customers"
        :key="customer.id"
      >
        <q-input
          v-model="store.state.customers[index].company"
          filled
          type="string"
          label="Customer company name"
          hint="Company name"
        />
      </div>
      <q-btn label="Add Customer" type="submit" color="primary" />
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