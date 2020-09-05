<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { f7Link } from 'framework7-vue';

export default defineComponent({
  name: 'featured-app',
  props: {
    apps: {
      type: Array,
      required: true,
    },
    useIcon: {
      type: Boolean,
      required: false,
      default: false,
    },
    backText: {
      type: String,
      require: false,
      default: '',
    },
  },
  components: { f7Link },
});
</script>

<template>
<div class="block featured-apps">
  <div class="featured-app"
    v-for="app in apps"
    :key="app.id" >
    <f7Link
      noLinkClass :href="`/app/${app.id}`"
      :routeProps="{ backText }"
       >
      <div class="featured-app-headline">{{app.featured}}</div>
      <div class="featured-app-title">{{app.title}}</div>
      <div class="featured-app-subtitle">{{app.subtitle}}</div>
        <img
          loading="lazy" class="featured-app-image"
          :alt="app.title" :src="useIcon ? app.icon : app.screenshots[0]" />
    </f7Link>
  </div>
</div>
</template>

<style lang="less">
@import url("../css/_mixins.less");

.featured-apps {
  overflow: auto;
  display: flex;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  margin-top: 0;
  &::-webkit-scrollbar {
    display: none;
    opacity: 0;
  }
  &::after {
    content: '';
    width: calc(var(--f7-block-padding-horizontal) + var(--f7-safe-area-right));
    height: 1px;
    flex-shrink: 0;
  }
  @media (min-width: 768px) {
    scroll-padding-left: calc(20px + var(--f7-safe-area-left));
  }
}
.featured-app {
  flex-shrink: 0;
  width: 100%;
  max-width: 350px;
  scroll-snap-align: center center;
  padding: 5px 0px 0px;
  position: relative;
  margin-right: 10px;
  @media (min-width: 768px) {
    margin-right: 24px;
    scroll-snap-align: start start;
  }
  .hairline(top, var(--f7-block-strong-border-color));
  > a {
    color: inherit;
  }
  &-headline {
    text-transform: uppercase;
    color: var(--f7-theme-color);
    font-size: 11px;
    font-weight: 500;
  }
  &-title {
    font-size: 21px;
    line-height: 1.25;
  }
  &-subtitle {
    opacity: 0.54;
    font-size: 21px;
    line-height: 1.25;
    &:after {
      content: ' ';
      display: inline-block;
    }
  }
  &-image {
    width: 100%;
    margin-top: 5px;
    height: 220px;
    border-radius: 5px;
    background: #ccc;
    object-fit: cover;
  }
}
</style>
