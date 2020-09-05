<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { f7Block } from 'framework7-vue';
import AppstorePage from '@/components/AppstorePage.vue';

export default defineComponent({
  name: 'page-arcade',
  components: { f7Block, AppstorePage },
});
</script>

<template>
  <AppstorePage title="Arcade">
    <f7Block>Work in progress</f7Block>
  </AppstorePage>
</template>
