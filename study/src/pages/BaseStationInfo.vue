<template>
  <div>
    <div class="q-pa-md" style="max-width: 33vw; max-height: 100vh">
      <q-btn
        label="Add Base Station"
        @click="store.methods.createBaseStation()"
        color="primary"
      />

      <q-list
        separator
        style="display: flex; flex-flow: column wrap; max-height: 100vh"
      >
        <q-expansion-item
          v-for="(baseStation, index) of store.state.baseStations"
          :key="baseStation.id"
          default-opened
        >
          <template v-slot:header>
            <q-item-section avatar>
              <q-avatar
                icon="settings_input_antenna"
                color="primary"
                text-color="white"
              />
            </q-item-section>

            <q-item-section>
              {{ baseStation.name || "Base Station Name" }}
            </q-item-section>
          </template>
          <q-item-section style="width: 100%">
            <div class="row justify-between">
              <div class="text-h6 gt-xs">Base Station</div>
              <q-btn
                style="float: right; margin: 0.5rem"
                icon="delete_forever"
                class="gt-xs"
                color="red"
                rounded
                @click="store.methods.removeBaseStation(baseStation.id)"
              />
            </div>
          </q-item-section>
          <q-form>
            <q-card-section>
              <q-input
                color="purple-12"
                filled
                v-model="baseStation.name"
                label="Base station name *"
                hint="Name"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Cannot be blank']"
              />

              <q-input
                color="purple-12"
                filled
                v-model="baseStation.description"
                label="Base station description *"
                hint="Description"
              />
            </q-card-section>

            <q-card-section>
              <div class="text-h6">Access Technologies</div>
              <div class="q-gutter-sm">
                <q-checkbox
                  label="5G NR"
                  val="nr5g"
                  keep-color
                  v-model="baseStation.accessTechnologies"
                  color="red"
                />

                <q-checkbox
                  label="4G LTE"
                  val="lte"
                  keep-color
                  v-model="baseStation.accessTechnologies"
                  color="teal"
                />

                <q-checkbox
                  label="3G UMTS"
                  val="umts"
                  keep-color
                  v-model="baseStation.accessTechnologies"
                  color="orange"
                />
                <q-checkbox
                  label="Microwave or WiFi"
                  val="wifi"
                  keep-color
                  v-model="baseStation.accessTechnologies"
                  color="purple"
                />
              </div>
            </q-card-section>

            <!-- 5G bands -->
            <q-card-section
              v-if="
                store.state.baseStations[index].accessTechnologies.includes(
                  'nr5g'
                )
              "
            >
              <div class="text-h6">5G NR Bands</div>
              <div class="q-gutter-sm">
                <q-checkbox
                  v-for="b in store.state.baseStations[index].nr5gBands"
                  :key="b.band"
                  :label="`${b.band} - ${b.frequency}MHz`"
                  :val="b.band"
                  keep-color
                  v-model="b.present"
                  color="red"
                />
              </div>
            </q-card-section>

            <!-- 4G bands -->
            <q-card-section
              v-if="baseStation.accessTechnologies.includes('lte')"
            >
              <div class="text-h6">4G LTE Bands</div>
              <div class="q-gutter-sm">
                <q-checkbox
                  v-for="b in baseStation.lteBands"
                  :key="b.band"
                  :label="`${b.band} - ${b.frequency}MHz`"
                  :val="b.band"
                  keep-color
                  v-model="b.present"
                  color="teal"
                />
              </div>
            </q-card-section>

            <!-- 3G bands -->
            <q-card-section
              v-if="baseStation.accessTechnologies.includes('umts')"
            >
              <div class="text-h6">3G UMTS Bands</div>
              <div class="q-gutter-sm">
                <q-checkbox
                  v-for="b in baseStation.umtsBands"
                  :key="b.band"
                  :label="`${b.band} - ${b.frequency}MHz`"
                  :val="b.band"
                  keep-color
                  v-model="b.present"
                  color="orange"
                />
              </div>
            </q-card-section>

            <!-- Microwave bands -->
            <q-card-section
              v-if="baseStation.accessTechnologies.includes('wifi')"
            >
              <div class="text-h6">Microwave and WiFi Bands</div>
              <div class="q-gutter-sm">
                <q-checkbox
                  v-for="b in baseStation.microwaveBands"
                  :key="b.band"
                  :label="`${b.frequency}MHz`"
                  :val="b.band"
                  keep-color
                  v-model="b.present"
                  color="purple"
                />
              </div>
            </q-card-section>

            <!-- Operators  -->
            <q-card-section
              v-if="
                store.state.baseStations[index].accessTechnologies.includes(
                  'nr5g'
                ) ||
                store.state.baseStations[index].accessTechnologies.includes(
                  'lte'
                ) ||
                store.state.baseStations[index].accessTechnologies.includes(
                  'umts'
                )
              "
            >
              <div class="text-h6">Mobile Network Operators</div>
              <div class="q-gutter-sm">
                <q-checkbox
                  v-for="o in store.state.baseStations[index].operators"
                  :key="o.operator"
                  :label="`${o.operator}`"
                  :val="o.operator"
                  keep-color
                  v-model="o.present"
                />
              </div>
            </q-card-section>
          </q-form>
        </q-expansion-item>
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
  padding: 0.5rem;
  margin: 0.5rem;
}
</style>