<template>
  <div>
    <div class="q-pa-md" style="max-width: 50vw">
      <h4>Base Station Details</h4>
    </div>
    <div class="q-pa-md" style="max-width: 33vw">
      <q-btn
        label="Add Base Station"
        @click="store.methods.createBaseStation()"
        color="primary"
      />

      <q-list
        bordered
        separator
        style="display: flex; flex-flow: column wrap; max-height: 100vh"
      >
        <q-item
          v-for="(baseStation, index) of store.state.baseStations"
          :key="baseStation.id"
        >
          <q-card class="std-card" style="width: clamp(20vw, 30vw, 25vw)">
            <q-card-section class="bg-primary text-white">
              <div class="text-h6">
                {{ baseStation.name || "Base Station Name" }}
              </div>
              <div class="text-subtitle2">
                {{ baseStation.description || "Description" }}
              </div>
            </q-card-section>

            <q-form>
              <q-card-section>
                <div class="text-h6">Base Station Name</div>
                <q-input
                  color="purple-12"
                  filled
                  v-model="store.state.baseStations[index].name"
                  label="Base station name *"
                  hint="Name"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Cannot be blank',
                  ]"
                />

                <q-input
                  color="purple-12"
                  filled
                  v-model="store.state.baseStations[index].description"
                  label="Base station description *"
                  hint="Description"
                />
              </q-card-section>

              <q-card-section>
                <div class="text-h6">Access Technologies</div>
                <div class="q-gutter-sm">
                  <q-checkbox
                    label="5G NR"
                    val="5gnr"
                    keep-color
                    v-model="store.state.baseStations[index].accessTechnologies"
                    color="red"
                  />

                  <q-checkbox
                    label="4G LTE"
                    val="4glte"
                    keep-color
                    v-model="store.state.baseStations[index].accessTechnologies"
                    color="teal"
                  />

                  <q-checkbox
                    label="3G UMTS"
                    val="3gumts"
                    keep-color
                    v-model="store.state.baseStations[index].accessTechnologies"
                    color="orange"
                  />
                  <q-checkbox
                    label="WiFi"
                    val="wifi"
                    keep-color
                    v-model="store.state.baseStations[index].accessTechnologies"
                    color="purple"
                  />
                </div>
              </q-card-section>
            </q-form>
            <q-card-actions align="right">
              <q-btn
                label="Delete"
                color="red"
                rounded
                @click="store.methods.removeBaseStation(baseStation.id)"
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
  name: "PageBaseStationInfo",
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