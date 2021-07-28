<template>
  <q-page class="flex flex-center dark">
    <q-card rounded class="outer-card">
      <q-card flat bordered class="inner-card">
        <q-card-section>
          <div class="text-h5">Fresnel Zone Radii</div>
        </q-card-section>

        <q-card-section rounded class="text-h2 q-pt-none bg-blue text-white">
          Fresnel zone radius: {{ store.state.fresnelZoneRadius }}m
        </q-card-section>

        <q-separator inset />

        <q-card-section class="text-h4 q-pt-none bg-orange text-black">
          60% Fresnel zone radius:
          {{ (store.state.fresnelZoneRadius * 0.6).toFixed(2) }}m
        </q-card-section>
      </q-card>
      <q-form>
        <q-input
          rounded
          class="text-h4"
          filled
          standout="bg-yellow text-white"
          stack-label
          type="number"
          placeholder="Frequency (GHz)"
          hint="Frequency (GHz)"
          v-on:change="store.methods.calculateFresnelZone"
          v-on:keyup="store.methods.calculateFresnelZone"
          v-model.number="store.state.frequency"
        />
        <q-input
          rounded
          class="text-h4"
          filled
          standout="bg-cyan text-white"
          stack-label
          type="number"
          placeholder="Distance (kilometers)"
          hint="Distance (km's)"
          v-on:change="store.methods.calculateFresnelZone"
          v-on:keyup="store.methods.calculateFresnelZone"
          v-model.number="store.state.distance"
        />
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { inject } from "vue";

export default defineComponent({
  name: "PageFresnelCalc",
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