<script>
import { defineComponent } from '@vue/composition-api';
import arcadeCardImage from '@/assets/arcade.jpg';
import AppstorePage from '@/components/AppstorePage.vue';
import AppstorePageTitle from '@/components/AppstorePageTitle.vue';
import AppstoreCard from '@/components/AppstoreCard.vue';

import { apps, games } from '@/data';

export default defineComponent({
  name: 'today',
  components: {
    AppstorePage,
    AppstorePageTitle,
    AppstoreCard,
  },
  setup () {
    const todayDate = new Date();
    const todayDateTitle = 'Today';
    const todayDateHeading = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'long', weekday: 'long' }).format(todayDate);
    const yesterdayDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
    const yesterdayDateTitle = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(yesterdayDate);
    const yesterdayDateHeading = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'long' }).format(yesterdayDate);

    const appCrossyRoad = games.find((app) => app.title === 'Crossy Road');
    const appNetlfix = apps.find((app) => app.title === 'Netflix');
    const appInstagram = apps.find((app) => app.title === 'Instagram');
    const appSevenSins = games.find((app) => app.title === 'The Seven Deadly Sins');

    return {
      todayDateTitle,
      todayDateHeading,
      yesterdayDateTitle,
      yesterdayDateHeading,
      appCrossyRoad,
      appNetlfix,
      appInstagram,
      appSevenSins,
      arcadeCardImage,
    };
  },
});
</script>

<template>
  <appstore-page noCollapsedNavbar>
      <appstore-page-title :title="todayDateTitle" :heading="todayDateHeading" accountLink />
      <div class="appstore-card-grid">
        <appstore-card
          :image="arcadeCardImage"
          title="5 awesome Apple Arcade puzzle games"
          titleColor="#000"
          titlePosition="top"
          subtitle="Apple Arcade"
          subtitleColor="#000"
          closeButtonColor="#000"
        >
          <p>
            <b>Lorem ipsum dolor sit amet</b>
            consectetur adipisicing elit. Repellendus unde quam voluptate iure.
          </p>
          <p>
            <b>Lorem ipsum dolor sit amet</b>
            consectetur adipisicing elit. Repellendus unde quam voluptate iure.
          </p>
          <h3>Ratione eos perspiciatis</h3>
          <p>Obcaecati, libero corrupti! Modi asperiores debitis eius, culpa, quisquam .</p>
          <p>Obcaecati, libero corrupti! Modi asperiores debitis eius, culpa, quisquam .</p>
          <p>Obcaecati, libero corrupti! Modi asperiores debitis eius, culpa, quisquam .</p>
        </appstore-card>

        <appstore-card
          image="/static/apps-images/crossy-road-5.jpg"
          :title="`<span>GAME<br />OF THE<br />DAY</span>`"
          titleColor="#fff"
          titlePosition="bottom"
          titleLarge
          :app="appCrossyRoad"
        >
         <p>Obcaecati, libero corrupti! Modi asperiores debitis eius, culpa, quisquam .</p>
         <p>Obcaecati, libero corrupti! Modi asperiores debitis eius, culpa, quisquam .</p>
         <h3>Minus at repudiandae</h3>
         <p>Obcaecati, libero corrupti! Modi asperiores debitis eius, culpa, quisquam .</p>
        <p>Dolore exercitationem consequuntur excepturi? Voluptatem totam adipisci illum</p>
        </appstore-card>
        <appstore-card
          image="/static/apps-images/netflix-7.jpg"
          :title="`<span>APP<br />OF THE<br />DAY</span>`"
          titleColor="#fff"
          titlePosition="bottom"
          titleLarge
          :app="appNetlfix"
        >
          <p>Lorem ipsum, <b>dolor sit amet consectetur adipisicing</b> elit. Explicabo s?</p>
          <p>Magnam obcaecati fugit, ullam nostrum in dolore sed ab culpa ipsum architecto?</p>
          <h3>Enim laboriosam repellat</h3>
          <p>Dignissimos recusandae consectetur adipisci minima vel molestiae laboriosam ?</p>
          <p>Commodi, similique tempora, nesciunt voluptatem blanditiis, dignissimos voluptas.</p>
        </appstore-card>
      </div>

      <appstore-page-title
      :title="yesterdayDateTitle" :heading="yesterdayDateHeading" :accountLink="false" />
      <div class="appstore-card-grid">
        <appstore-card
          image="/static/apps-images/the-seven-deadly-sins-8.jpg"
          :title="`<span>GAME<br />OF THE<br />DAY</span>`"
          titleColor="#fff"
          titlePosition="bottom"
          titleLarge
          :app="appSevenSins"
        >
          <p>Lorem ipsum dolor sit amet <b>consectetur adipisicing elit</b>. Quam corporis?</p>
          <p>Ducimus, eveniet ea adipisci, impedit repellendus rem doloremque minima?</p>
          <h3>Minus at repudiandae</h3>
          <p>Repellendus qui possimus repellat? Voluptas distinctio asperiores impedit.</p>
          <p>Dolore exercitationem consequuntur excepturi? Voluptatem totam adipisci .</p>
        </appstore-card>
        <appstore-card
          image="/static/apps-images/instagram-5.jpg"
          :title="`<span>APP<br />OF THE<br />DAY</span>`"
          titleColor="#000"
          titlePosition="bottom"
          titleLarge
          closeButtonColor="#000"
          :app="appInstagram"
          appColor="#000"
        >
          <p>Lorem ipsum, <b>dolor sit amet consectetur adipisicing</b> elit. Explicabo?</p>
          <p>Magnam obcaecati fugit, ullam nostrum in dolore sed ab culpa ipsum architecto?</p>
          <h3>Enim laboriosam repellat</h3>
          <p>Dignissimos recusandae consectetur adipisci minima vel molestiae laboriosam ?</p>
          <p>Commodi, similique tempora, nesciunt voluptatem blanditiis, dignissimos.</p>
        </appstore-card>
      </div>
    </appstore-page>
</template>

<style lang="less" scoped>
</style>
