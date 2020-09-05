<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { f7Page, f7Navbar, f7Block } from 'framework7-vue';

export default defineComponent({
  components: { f7Page, f7Navbar, f7Block },
});
</script>
<template>
  <f7-page>
    <f7-navbar title="Not found" backLink="Back" />
    <f7-block strong>
      <p>Sorry</p>
      <p>Requested content not found.</p>
    </f7-block>
  </f7-page>
</template>
