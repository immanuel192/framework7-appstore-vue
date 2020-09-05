<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'screenshot-thumb',
  props: ['src', 'alt'],
  setup(_, ctx) {
    const loaded = ref(false);
    const onClick = () => {
      ctx.emit('click');
    };
    return {
      loaded,
      onClick,
    };
  },
});
</script>

<template>
<img :style="{ opacity: loaded ? 1 : 0, transitionDuration: '600ms' }"
    @load="loaded=true"
    @click="onClick"
    :src="src"
    :alt="alt"
/>
</template>
