<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { f7Page, f7Navbar } from 'framework7-vue';
import AppstorePageTitle from './AppstorePageTitle.vue';

export default defineComponent({
  name: 'appstore-page',
  components: { AppstorePageTitle, f7Page, f7Navbar },
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    navbarHeading: {
      type: String,
      required: false,
      default: '',
    },
    noCollapsedNavbar: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
});
</script>

<template>
  <f7-page
  class="appstore-page"
  v-bind:class="{ 'appstore-page-no-collapsed-navbar': noCollapsedNavbar  }" >
      <f7-navbar
        class="appstore-page-large-navbar"
        v-bind:class="{ 'appstore-page-no-collapsed-navbar': noCollapsedNavbar }"
        large transparent :title="title" />
        <appstore-page-title v-if="title" :title="title" :heading="navbarHeading"   />
      <slot></slot>
    </f7-page>
</template>

<style lang="less">
.appstore-page-large-navbar {
  &:not(.router-navbar-transition-from-large) .title-large {
    opacity: 0;
    pointer-events: none;
  }
  &.appstore-page-no-collapsed-navbar {
    --f7-navbar-height: 0px;
    --f7-navbar-large-title-height: 96px;
    .title {
      display: none;
    }
  }
}
</style>
