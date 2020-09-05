<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { f7Icon } from 'framework7-vue';

export default defineComponent({
  name: 'rating-stars',
  props: ['rating'],
  components: { f7Icon },
  setup(props) {
    function icon(n) {
      if (n <= Math.floor(props.rating)) return 'star_fill';
      if (n > Math.ceil(props.rating)) return 'star';
      return 'star_lefthalf_fill';
    }

    return { icon };
  },
});
</script>

<template>
  <div class="rating-stars">
    <f7-icon v-for="n in [1, 2, 3, 4, 5]" :key="n" :f7="icon(n)" />
  </div>
</template>
