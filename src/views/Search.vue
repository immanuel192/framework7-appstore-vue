<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { f7Block } from 'framework7-vue';
import AppStorePage from '@/components/AppstorePage.vue';

export default defineComponent({
  name: 'page-search',
  components: { f7Block, AppStorePage },
});
</script>

<template>
  <AppStorePage title="Search">
    <f7-block>Work in progress</f7-block>
  </AppStorePage>
</template>
