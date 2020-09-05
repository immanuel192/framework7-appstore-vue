<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import {
  f7Block, f7Button, f7Link, f7List, f7ListItem,
} from 'framework7-vue';
import AppstorePage from '@/components/AppstorePage.vue';
import FeaturedApps from '@/components/FeaturedApps.vue';
import AppsTableList from '@/components/AppsTableList.vue';
import AppstoreBlockTitle from '@/components/AppstoreBlockTitle.vue';

import { games } from '@/data';

export default defineComponent({
  name: 'page-games',
  components: {
    AppstorePage,
    AppsTableList,
    AppstoreBlockTitle,
    FeaturedApps,
    f7Block,
    f7Button,
    f7Link,
    f7List,
    f7ListItem,
  },
  setup() {
    const featuredGames = games.filter((app) => !!app.featured);
    const playingNow = games;
    const popularGames = [...games]
      .sort((app1, app2) => app2.rating - app1.rating)
      .slice(0, 13)
      .slice(1);
    const newGames = [...games]
      .sort((app1, app2) => new Date(app2.release_date).getTime()
      - new Date(app1.release_date).getTime())
      .slice(0, 12);
    const topFreeGames = [...popularGames].reverse();
    const editorsChoice = games.slice(10);

    return {
      featuredGames,
      playingNow,
      popularGames,
      newGames,
      topFreeGames,
      editorsChoice,
    };
  },
});
</script>

<template>
    <AppstorePage title="Games">
      <FeaturedApps backText="Games" :apps="featuredGames" />

      <AppstoreBlockTitle title="What We're Playing Now">
        <f7Link>See All</f7Link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Games" :apps="playingNow" />

      <AppstoreBlockTitle title="Popular Games">
        <f7Link>See All</f7Link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Games" :apps="popularGames" />

      <AppstoreBlockTitle title="New Games We Love">
        <f7Link>See All</f7Link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Games" :apps="newGames" />

      <AppstoreBlockTitle title="Top Free Games">
        <f7Link>See All</f7Link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Games" :apps="topFreeGames" />

      <AppstoreBlockTitle title="Top Categories">
        <f7Link>See All</f7Link>
      </AppstoreBlockTitle>
      <f7List class="categories-list safe-areas-inset" noChevron noHairlines>
        <f7ListItem title="Indie" link="#" >
          <span role="img" slot="media" aria-label="Indie">💎</span>
        </f7ListItem>
        <f7ListItem title="Casual" link="#" >
          <span role="img" slot="media" aria-label="Casual">👾</span>
        </f7ListItem>
        <f7ListItem title="Strategy" link="#" >
          <span role="img" slot="media" aria-label="Strategy">🏰</span>
        </f7ListItem>
        <f7ListItem title="Action" link="#" >
          <span role="img" slot="media" aria-label="Action">⚔️</span>
        </f7ListItem>
        <f7ListItem title="Racing" link="#" >
          <span role="img" slot="media" aria-label="Racing">🏁</span>
        </f7ListItem>
      </f7List>

      <AppstoreBlockTitle title="Editors' Choice">
        <f7Link>See All</f7Link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Games" :apps="editorsChoice" />

      <AppstoreBlockTitle title="Quick Links">
        <f7Link>See All</f7Link>
      </AppstoreBlockTitle>
      <f7List class="quick-links-list safe-areas-inset" noChevron noHairlines>
        <f7ListItem title="Try Apple Arcade" link="#" />
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
