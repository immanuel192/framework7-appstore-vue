// To setup vue local instance for vue-jest
import Vue from 'vue';
import VueComposition from '@vue/composition-api';
import Framework7 from '@/framework7-custom';
import Framework7Vue from 'framework7-vue';

Vue.use(VueComposition);
Framework7.use(Framework7Vue);
