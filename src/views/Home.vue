<script>
import { defineComponent, computed } from '@vue/composition-api';
import HelloWorld from '@/components/HelloWorld.vue';
import chunk from 'lodash/chunk';
import { injectStore } from '@/share';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup () {
    const { state } = injectStore();
    const topics = computed(() => chunk(state.topics.data, 4));
    return { topics };
  },
});
</script>

<template>
  <div class="topic-dashboard">
    <section class="mb-5 text-center">
      <div
        class="row"
        v-for="(row, index) in topics"
        :key="index"
      >
        <div
          class="col-lg-3 col-md-12 mb-3"
          v-for="topic in row"
          :key="topic.id"
        >
          <div class="topic-item">
            <div class="view">
              <i class="fa-bootstrap fa-10x deep-purple-text"></i>
            </div>
            <h4 class="mb-3 font-weight-bold dark-grey-text">
              <strong>{{topic.name}}
              </strong>
            </h4>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="less" scoped>
.row {
  -ms-flex-wrap: wrap;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
.view {
  cursor: default;
  overflow: hidden;
  position: relative;
  i {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    text-rendering: auto;
  }
  .fa-10x {
    font-size: 10em;
  }
  .fa-bootstrap {
    &:before {
      content: "\f836";
    }
  }
  .deep-purple-text {
    color: #673ab7 !important;
  }
  .dark-grey-text {
    color: #4f4f4f !important;
  }
}
</style>
