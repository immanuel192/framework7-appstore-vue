<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api';
import {
  f7,
  f7Page,
  f7Navbar,
  f7Button,
  f7Link,
  f7Icon,
  f7List,
  f7ListItem,
} from 'framework7-vue';

import { apps, games } from '@/data';
import RatingStars from '@/components/RatingStars.vue';
import AppstoreBlockTitle from '@/components/AppstoreBlockTitle.vue';
import ScreenshotThumb from '@/components/ScreenshotThumb.vue';
import './AppDetails.less';

function getAppById(id) {
  return [...apps, ...games].find((app) => app.id === parseInt(id, 10));
}

export default defineComponent({
  name: 'app-detail',
  props: ['id', 'backText'],
  components: {
    f7,
    f7Page,
    f7Navbar,
    f7Button,
    f7Link,
    f7Icon,
    f7List,
    f7ListItem,
    RatingStars,
    AppstoreBlockTitle,
    ScreenshotThumb,
  },
  setup(props) {
    const app = getAppById(props.id);
    const pb: any = ref(null);
    const showFullDescription = ref(false);
    const ratingVotes = {
      5: 500,
      4: 100,
      3: 80,
      2: 50,
      1: 200,
    };

    const totalVotes = Object.values(ratingVotes).reduce((acc, current) => acc + current);

    function pageInit() {
      pb.value = f7.photoBrowser.create({
        photos: [...app.screenshots],
        toolbar: false,
        navbarShowCount: false,
      });
    }
    function formatDate(date) {
      const formatter = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric' });
      return formatter.format(new Date(date));
    }
    function pageDestroy() {
      if (pb.value) pb.value.destroy();
    }
    function openPhotoBrowser(index) {
      if (!pb.value) return;
      pb.value.open(index);
    }

    const createAppDescription = computed(() => (app.description || '').replace(/\n/g, '<br>'));

    return {
      showFullDescription,
      totalVotes,
      pageInit,
      pageDestroy,
      openPhotoBrowser,
      createAppDescription,
      formatDate,
      app,
      ratingVotes,
    };
  },
});
</script>
<template>
    <f7-page
      @pageInit="pageInit"
      @pageBeforeRemove="pageDestroy" >
      <f7-navbar
        transparent
        :backLink="backText || 'Back'"
        class="app-navbar"
      >
        <div class="app-navbar-icon" slot="title">
          <img :src="app.icon" alt="app.title" />
        </div>
        <div class="app-navbar-button" slot="right">
          <f7-button external target="_blank" :href="`https://apps.apple.com/app/id${app.id}`" round fill>GET</f7-button>
        </div>
      </f7-navbar>
      <div class="block app-header">
        <img :src="app.icon" :alt="app.title" class="app-header-icon" />
        <div class="app-header-content">
          <div class="app-header-title">{{app.title}}</div>
          <div class="app-header-subtitle">{{app.subtitle}}</div>
          <div class="app-header-actions">
            <f7-button external target="_blank" :href="`https://apps.apple.com/app/id${app.id}`" round fill>GET</f7-button>
            <f7-link iconF7="square_arrow_up" />
          </div>
          <div class="app-header-ratings">
            <div class="app-header-rating">
              <div class="app-header-rating-value">{{app.rating}}</div>
              <rating-stars :rating="app.rating" />
              <div class="app-header-rating-sub">930 Ratings</div>
            </div>
          </div>
        </div>
      </div>
      <div class="block app-screenshots">
         <screenshot-thumb
            v-for="(screenshot, index) in app.screenshotsThumbs"
            :key="index"
            @click="openPhotoBrowser(index)"
            :src="screenshot"
            alt="Screenshot"
          />
      </div>
      <div
        class="block app-description"
        v-bind:class="{'app-description-full': showFullDescription}" >
        <div class="app-description-content">
          <div class="app-description-text" dangerouslySetInnerHTML="createAppDescription()" />
          <f7-link :click="showFullDescription=true" >more</f7-link>
        </div>
      </div>
      <appstore-block-title title="Ratings & Reviews">
        <f7-link>See All</f7-link>
      </appstore-block-title>
      <div class="block app-ratings">
        <div class="app-ratings-number">
          <b>{{app.rating}}</b>
          <span>out of 5</span>
        </div>
        <div class="app-ratings-votes">
          <div
            class="app-ratings-votes-row"
            v-for="rating in [5, 4, 3, 2, 1]"
            :key="rating">
            <div class="app-ratings-votes-stars">
              <f7-icon v-for="index in rating" :key="index" f7="star_fill" />
            </div>
            <div class="app-ratings-votes-progress">
              <span v-bind:style="{ width: `${(ratingVotes[rating] / totalVotes) * 100}%` }" />
            </div>
          </div>
          <div class="app-ratings-votes-total">{{totalVotes}} Ratings</div>
        </div>
      </div>
      <!-- Random reviews -->
      <div class="block app-reviews">
        <div class="app-review">
          <div class="app-review-header">
            <span><b>John</b></span>
            <span>2d ago</span>
          </div>
          <div class="app-review-header">
            <rating-stars rating="5" />
            <span>johndoe</span>
          </div>
          <div class="app-review-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ratione laborum debitis natus cum quae est rerum cupiditate cumque delectus eaque ipsa,
            accusamus facilis deleniti consequuntur, aliquam soluta minima, eos exercitationem.
          </div>
        </div>
        <div class="app-review">
          <div class="app-review-header">
            <span><b>Mike</b></span>
            <span>3d ago</span>
          </div>
          <div class="app-review-header">
            <rating-stars rating="3" />
            <span>johndoe</span>
          </div>
          <div class="app-review-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Placeat pariatur laudantium, laborum sunt adipisci magni in doloremque
            neque error earum fugiat! Nihil
            molestias rem tenetur laboriosam illo similique nobis adipisci?
          </div>
        </div>
        <div class="app-review">
          <div class="app-review-header">
            <span><b>Vladimir</b></span>
            <span>3d ago</span>
          </div>
          <div class="app-review-header">
            <rating-stars rating="2" />
            <span>johndoe</span>
          </div>
          <div class="app-review-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At,
             repudiandae minima? Reprehenderit ab placeat delectus necessitatibus
              suscipit cumque laborum modi, eaque, a consequuntur,
              pariatur et itaque. Vitae odio necessitatibus amet.
          </div>
        </div>
        <div class="app-review">
          <div class="app-review-header">
            <span><b>Karoly</b></span>
            <span>4d ago</span>
          </div>
          <div class="app-review-header">
            <rating-stars rating="4" />
            <span>johndoe</span>
          </div>
          <div class="app-review-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ab ex! Architecto
            alias delectus, optio eos nostrum obcaecati repellat distinctio, ab, quam dolores
            voluptatem ex inventore facere expedita exercitationem repudiandae?
          </div>
        </div>
        <div class="app-review">
          <div class="app-review-header">
            <span><b>Peter</b></span>
            <span>4d ago</span>
          </div>
          <div class="app-review-header">
            <rating-stars rating="5" />
            <span>johndoe</span>
          </div>
          <div class="app-review-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo odit exercitationem
            eligendi maiores rerum quo, quos ullam quam! Quia facilis consequatur
            vitae cupiditate molestias maiores odit magnam quo itaque.
          </div>
        </div>
        <div class="app-review">
          <div class="app-review-header">
            <span><b>Alim</b></span>
            <span>5d ago</span>
          </div>
          <div class="app-review-header">
            <rating-stars rating="1" />
            <span>johndoe</span>
          </div>
          <div class="app-review-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ipsa accusantium qui
            praesentium, obcaecati quae illum, tempora molestias similique nihil
            sunt in tempore ipsam laborum illo maxime amet quos consectetur!
          </div>
        </div>
      </div>
      <div v-if="app.versions && app.versions.length > 0">
        <appstore-block-title title="What's New" />
        <div class="block">
          <p class="display-flex justify-content-space-between" :style="{ opacity: 0.55 }">
            <span>Version {{app.versions[app.versions.length - 1].version}} </span>
            <span>{{ formatDate(app.versions[app.versions.length - 1].release_date) }}</span>
          </p>
          <p> {{app.versions[app.versions.length - 1].release_notes || ''}}</p>
        </div>
      </div>
      <appstore-block-title title="Information" />
      <f7-list noHairlines noChevron class="safe-areas-inset app-information-list">
        <f7-list-item title="Provider" :after="app.developer.name" />
        <f7-list-item title="Size" :after="`${Math.floor(app.size / 1000000)} MB`" />
        <f7-list-item title="Compatibility" after="Works on this iPhone" />
        <f7-list-item title="Languages" after="English" />
        <f7-list-item title="Age Rating" after="12+" />
        <f7-list-item title="In-App Purchases" after="Yes" />
        <f7-list-item title="Copyright" :after="`© ${app.developer.name}`" />
        <f7-list-item :link="`https://apps.apple.com/developer/id${app.developer.id}`" external target="_blank" title="Developer Website">
          <f7-icon slot="after" f7="compass" />
        </f7-list-item>
        <f7-list-item :link="`https://apps.apple.com/developer/id${app.developer.id}`" external target="_blank" title="Privacy Policy">
          <f7-icon slot="after" f7="hand_raised_fill" />
        </f7-list-item>
      </f7-list>
    </f7-page>
</template>
