<script lang="ts">
import {
  defineComponent, ref, watchEffect, onMounted,
} from '@vue/composition-api';
import {
  f7App, f7Views, f7View, f7Toolbar, f7Link,
} from 'framework7-vue';

// import PWA from '../js/pwa';
import routes from '@/routes';

export default defineComponent({
  components: {
    f7App, f7Views, f7View, f7Toolbar, f7Link,
  },
  setup() {
    const activeTab = ref('today');
    const refs = ref([]);
    let previousTab = ref('');

    onMounted(() => {
      watchEffect(() => {
        previousTab = activeTab;
      });
    });

    // Framework7 Parameters
    const f7params = {
      name: 'Homework',
      theme: 'ios',
      routes,
      autoDarkTheme: true,
    };
    // if (process.env.NODE_ENV === 'production') {
    // // Register service worker in production mode only
    //   PWA.init();
    // }

    function onTabLinkClick(tab) {
      if (previousTab.value !== activeTab.value) return;
      if (activeTab.value === tab) {
        debugger;
        (refs[tab] as any).f7View.router.back();
        // $(`#view-${tab}`)[0].f7View.router.back();
      }
    }
    return {
      onTabLinkClick,
      f7params,
      activeTab,
      previousTab,
      refs,
    };
  },
});

</script>

<template>
  <f7-app :params="f7params">
    <f7-views tabs class="safe-areas">
      <f7-toolbar tabbar labels bottom>
        <f7-link
          :click="onTabLinkClick('today')"
          tabLink="#view-today"
          tabLinkActive
          iconF7="today"
          text="Today"
          :ref="el=>{ refs['today'] = el }"
        />
        <f7-link
          :click="onTabLinkClick('games')"
          tabLink="#view-games"
          iconF7="rocket_fill"
          text="Games"
          :ref="el=>{ refs['games'] = el }"
        />
        <f7-link
          :click="onTabLinkClick('apps')"
          tabLink="#view-apps"
          iconF7="layers_alt_fill"
          text="Apps"
          :ref="el=>{ refs['apps'] = el }"
        />
      </f7-toolbar>
      <f7-view
        id="view-today" v-on:tabShow="setActiveTab('today')" main tab tabActive url="/today/" />
      <f7-view
        id="view-games" v-on:tabShow="setActiveTab('games')" tab url="/games/" />
      <f7-view
        id="view-apps" v-on:tabShow="setActiveTab('apps')" tab url="/apps/" />
    </f7-views>
  </f7-app>
</template>
