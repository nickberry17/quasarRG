<template>
  <div>
    <div class="q-pa-md" style="max-width: 33vw">
      <q-btn
        label="Add Location"
        @click="store.methods.createLocation('')"
        color="primary"
      />

      <q-list
        bordered
        separator
        style="display: flex; flex-flow: column wrap; max-height: 100vh"
      >
        <q-item
          v-for="(location, index) of store.state.locations"
          :key="location.id"
        >
          <q-card class="std-card" style="width: clamp(20vw, 30vw, 25vw)">
            <q-card-section class="bg-primary text-white">
              <div class="text-h6">{{ location.name || "Name" }}</div>
              <div class="text-subtitle2">
                {{ location.description || "Description" }}
              </div>
            </q-card-section>

            <q-separator />

            <q-form
              @submit="store.methods.createLocation('')"
              class="q-gutter-md"
            >
              <q-input
                color="purple-12"
                filled
                v-model="store.state.locations[index].name"
                label="Location name *"
                hint="Location Name"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Cannot be blank']"
              />

              <q-input
                color="purple-12"
                v-model="store.state.locations[index].description"
                filled
                type="string"
                label="Location description"
                hint="Location description"
              />
            </q-form>
            <q-card-actions align="right">
              <q-btn
                icon="delete_forever"
                color="red"
                rounded
                @click="store.methods.removeLocation(location.id)"
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
  name: "PageLocationInfo",
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