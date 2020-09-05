<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import {
  f7Block, f7Button, f7Link, f7List, f7ListItem,
} from 'framework7-vue';

import { apps } from '@/data';

import AppstorePage from '@/components/AppstorePage.vue';
import FeaturedApps from '@/components/FeaturedApps.vue';
import AppsTableList from '@/components/AppsTableList.vue';
import AppstoreBlockTitle from '@/components/AppstoreBlockTitle.vue';

export default defineComponent({
  name: 'page-apps',
  components: {
    f7Block,
    f7Button,
    f7Link,
    f7List,
    f7ListItem,
    AppstorePage,
    FeaturedApps,
    AppsTableList,
    AppstoreBlockTitle,
  },
  setup() {
    const featuredApps = apps.filter((app) => !!app.featured);
    const usingNow = apps;
    const popularApps = [...apps]
      .sort((app1, app2) => app2.rating - app1.rating)
      .slice(0, 13)
      .slice(1);
    const newApps = [...apps]
      .sort((app1, app2) => new Date(app2.release_date).getTime()
       - new Date(app1.release_date).getTime())
      .slice(0, 12);
    const topFreeApps = [...popularApps].reverse();
    const editorsChoice = apps.slice(5);
    return {
      featuredApps, usingNow, newApps, topFreeApps, editorsChoice, popularApps,
    };
  },
});
</script>

<template>
    <AppstorePage title="Apps">
      <FeaturedApps backText="Apps" :apps="featuredApps" useIcon />

      <AppstoreBlockTitle title="Using Now">
        <f7Link>See All</f7Link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Apps" :apps="usingNow" />

      <AppstoreBlockTitle title="Popular Apps">
        <f7Link>See All</f7Link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Apps" :apps="popularApps" />

      <AppstoreBlockTitle title="New & Updated">
        <f7Link>See All</f7Link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Apps" :apps="newApps" />

      <AppstoreBlockTitle title="Top Free Apps">
        <f7Link>See All</f7Link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Apps" :apps="topFreeApps" />

      <AppstoreBlockTitle title="Top Categories">
        <f7Link>See All</f7Link>
      </AppstoreBlockTitle>
      <f7List class="categories-list safe-areas-inset" noChevron noHairlines>
        <f7ListItem title="Apple Watch Apps" link="#" >
          <span role="img" slot="media" aria-label="Apple Watch Apps">⌚</span>
        </f7ListItem>
        <f7ListItem title="Photo & Video" link="#" >
          <span role="img" slot="media" aria-label="Photo & Video">📷</span>
        </f7ListItem>
        <f7ListItem title="Entertaiment" link="#" >
          <span role="img" slot="media" aria-label="Entertaiment">🍿</span>
        </f7ListItem>
        <f7ListItem title="Kids" link="#" >
          <span role="img" slot="media" aria-label="Kids">🎈</span>
        </f7ListItem>
        <f7ListItem title="Social Networking" link="#" >
          <span role="img" slot="media" aria-label="Social Networking">💬</span>
        </f7ListItem>
        <f7ListItem title="Lifestyle" link="#" >
          <span role="img" slot="media" aria-label="Lifestyle">🛋️</span>
        </f7ListItem>
      </f7List>

      <AppstoreBlockTitle title="Editors' Choice">
        <f7Link>See All</f7Link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Apps" :apps="editorsChoice" />

      <AppstoreBlockTitle title="Quick Links">
        <f7Link>See All</f7Link>
      </AppstoreBlockTitle>
      <f7List class="quick-links-list safe-areas-inset" noChevron noHairlines>
        <f7ListItem title="About In-App Purchases" link="#" />
        <f7ListItem title="Parents' Guide to the App Store" link="#" />
        <f7ListItem title="About Apps & Games for You" link="#" />
        <f7ListItem title="About Personalisation" link="#" />
      </f7List>

      <f7Block class="buttons-list">
        <f7Button large>Redeem</f7Button>
        <f7Button large>Send Gift</f7Button>
        <f7Button large>Add Funds to Apple ID</f7Button>
      </f7Block>
    </AppstorePage>
</template>
