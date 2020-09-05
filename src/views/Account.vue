<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import {
  f7Popup,
  f7Page,
  f7Navbar,
  f7Link,
  f7List,
  f7ListItem,
  f7ListButton,
} from 'framework7-vue';

export default defineComponent({
  components: {
    f7Popup,
    f7Page,
    f7Navbar,
    f7Link,
    f7List,
    f7ListItem,
    f7ListButton,
  },
});
</script>

<template>
    <f7-popup
      push
      swipeToClose="to-bottom"
      class="account-popup" >
      <f7-page class="account-page">
        <f7-navbar title="Account">
          <f7-link popupClose slot="right">Done</f7-link>
        </f7-navbar>
        <f7-list mediaList>
          <f7-list-item
            class="account-user"
            title="Elsa"
            subtitle="username@website.com"
            chevronCenter
            link
          >
            <img slot="media" src="/avatar.jpg" alt="Elsa" />
          </f7-list-item>
        </f7-list>
        <f7-list>
          <f7-list-item
            title="Purchased"
            link
          />
          <f7-list-item
            title="Subscriptions"
            link
          />
        </f7-list>
        <f7-list>
          <f7-list-button>Redeem Gift Card or Code</f7-list-button>
          <f7-list-button>Send Gift Card by Email</f7-list-button>
          <f7-list-button>Add Funds to Apple ID</f7-list-button>
        </f7-list>
        <f7-list>
          <f7-list-item
            title="Personalised Recommendations"
            link
          />
        </f7-list>
      </f7-page>
    </f7-popup>
</template>

<style lang="less" scoped>
.account-popup {
  --f7-popup-tablet-border-radius: 15px;
}
.account-page {
  --f7-navbar-height: 56px;
  --f7-list-button-text-align: left;
  --f7-list-margin-vertical: 20px;
  .theme-dark & {
    --f7-navbar-bg-color: #2C2C2E;
    --f7-navbar-bg-color-rgb: 50, 50, 50;
    --f7-page-bg-color: #1C1C1E;
    --f7-list-bg-color: #2C2C2E;
    --f7-block-strong-bg-color: #2C2C2E;
  }
  .account-user {
    .item-inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    .item-title {
      font-weight: normal;
    }
    .item-subtitle {
      opacity: 0.55;
    }
    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }
  }
}
</style>
