<script lang="ts" setup>
import { useRoute } from 'vue-router'
import AccountSettingsAccount from '@/views/pages/account-settings/AccountSettingsAccount.vue'
import AccountSettingsBillingAndPlans from '@/views/pages/account-settings/AccountSettingsBillingAndPlans.vue'
import AccountSettingsConnections from '@/views/pages/account-settings/AccountSettingsConnections.vue'
import AccountSettingsNotification from '@/views/pages/account-settings/AccountSettingsNotification.vue'
import AccountSettingsSecurity from '@/views/pages/account-settings/AccountSettingsSecurity.vue'

const route = useRoute()

const activeTab = ref(route.params.tab)

// tabs
const tabs = [
  { title: 'Account', icon: 'tabler-users', tab: 'account' },
  { title: 'Security', icon: 'tabler-lock', tab: 'security' },
  { title: 'Billing & Plans', icon: 'tabler-file-text', tab: 'billing-plans' },
  { title: 'Notifications', icon: 'tabler-bell', tab: 'notification' },
  { title: 'Connections', icon: 'tabler-link', tab: 'connection' },
]
</script>

<template>
  <div>
    <VTabs
      v-model="activeTab"
      class="v-tabs-pill"
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
        :to="{ name: 'pages-account-settings-tab', params: { tab: item.tab } }"
      >
        <VIcon
          size="20"
          start
          :icon="item.icon"
        />
        {{ item.title }}
      </VTab>
    </VTabs>

    <VWindow
      v-model="activeTab"
      class="mt-6 disable-tab-transition"
      :touch="false"
    >
      <!-- Account -->
      <VWindowItem value="account">
        <AccountSettingsAccount />
      </VWindowItem>

      <!-- Security -->
      <VWindowItem value="security">
        <AccountSettingsSecurity />
      </VWindowItem>

      <!-- Billing -->
      <VWindowItem value="billing-plans">
        <AccountSettingsBillingAndPlans />
      </VWindowItem>

      <!-- Notification -->
      <VWindowItem value="notification">
        <AccountSettingsNotification />
      </VWindowItem>

      <!-- Connections -->
      <VWindowItem value="connection">
        <AccountSettingsConnections />
      </VWindowItem>
    </VWindow>
  </div>
</template>

<route lang="yaml">
meta:
  navActiveLink: pages-account-settings-tab
</route>
