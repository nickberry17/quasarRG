<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Report Generator | {{ store.state.survey.type }} |
          {{ store.state.survey.orderId }} | Revision
          {{ store.state.survey.revisionNumber }}</q-toolbar-title
        >

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="200"
      :breakpoint="400"
    >
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item to="/ReportInfo" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="description" />
            </q-item-section>
            <q-item-section> Report Information </q-item-section>
          </q-item>

          <q-item to="/CustomerInfo" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="face" />
            </q-item-section>
            <q-item-section> Customer Information </q-item-section>
          </q-item>

          <q-item to="/LocationInfo" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="place" />
            </q-item-section>
            <q-item-section> Location Information </q-item-section>
          </q-item>

          <q-item to="/BaseStationInfo" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="settings_input_antenna" />
            </q-item-section>
            <q-item-section> Base Station Information </q-item-section>
          </q-item>

          <q-item to="/FresnelCalc" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="calculate" />
            </q-item-section>
            <q-item-section> Fresnel Zone Calculator </q-item-section>
          </q-item>

          <q-item to="/help" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>
            <q-item-section> Help </q-item-section>
          </q-item>

          <q-item to="/CreatePDF" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="picture_as_pdf" />
            </q-item-section>
            <q-item-section> Create PDF </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Nic S</div>
          <div></div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Fresnel Zone Calculator",
    caption: "quasar.dev",
    icon: "school",
    link: "#/FresnelCalc",
  },
];

import { defineComponent, ref, inject } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const store = inject("store");

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      store,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
