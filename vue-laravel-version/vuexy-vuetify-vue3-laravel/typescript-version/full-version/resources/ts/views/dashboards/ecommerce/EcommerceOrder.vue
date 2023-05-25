<script setup lang="ts">
const currentActiveTab = ref('New')

const orders = [
  {
    tabName: 'New',
    timeline1: [
      {
        icon: 'tabler-circle-check',
        type: 'SENDER',
        name: 'Myrtle Ullrich',
        address: '101 Boulder, California(CA), 95959',
      },
      {
        icon: 'tabler-map-pin',
        type: 'RECEIVER',
        name: 'Barry Schowalter',
        address: '939 Orange, California(CA),92118',
      },

    ],
    timeline2: [
      {
        icon: 'tabler-circle-check',
        type: 'SENDER',
        name: 'Veronica Herman',
        address: '162 Windsor, California(CA), 95492',
      },
      {
        icon: 'tabler-map-pin',
        type: 'RECEIVER',
        name: 'Helen Jacobs',
        address: '487 Sunset, California(CA), 94043',
      },

    ],
  },
  {
    tabName: 'Preparing',
    timeline1: [
      {
        icon: 'tabler-circle-check',
        type: 'SENDER',
        name: 'Barry Schowalter',
        address: '939 Orange, California(CA),92118',
      },
      {
        icon: 'tabler-map-pin',
        type: 'RECEIVER',
        name: 'Myrtle Ullrich',
        address: '101 Boulder, California(CA), 95959',
      },

    ],
    timeline2: [
      {
        icon: 'tabler-circle-check',
        type: 'SENDER',
        name: 'Veronica Herman',
        address: '162 Windsor, California(CA), 95492',
      },
      {
        icon: 'tabler-map-pin',
        type: 'RECEIVER',
        name: 'Helen Jacobs',
        address: '487 Sunset, California(CA), 94043',
      },

    ],
  },
  {
    tabName: 'Shipping',
    timeline1: [
      {
        icon: 'tabler-circle-check',
        type: 'SENDER',
        name: 'Veronica Herman',
        address: '101 Boulder, California(CA), 95959',
      },
      {
        icon: 'tabler-map-pin',
        type: 'RECEIVER',
        name: 'Barry Schowalter',
        address: '939 Orange, California(CA),92118',
      },

    ],
    timeline2: [
      {
        icon: 'tabler-circle-check',
        type: 'SENDER',
        name: 'Myrtle Ullrich',
        address: '162 Windsor, California(CA), 95492',
      },
      {
        icon: 'tabler-map-pin',
        type: 'RECEIVER',
        name: 'Helen Jacobs',
        address: '487 Sunset, California(CA), 94043',
      },

    ],
  },
]

const moreList = [
  { title: 'Refresh', value: 'refresh' },
  { title: 'Download', value: 'Download' },
  { title: 'View All', value: 'View All' },
]
</script>

<template>
  <VCard>
    <VCardItem class="pb-0">
      <VCardTitle>Sales by Orders</VCardTitle>
      <VCardSubtitle>62 Deliveries in Progress</VCardSubtitle>

      <template #append>
        <div class="mt-n4 me-n2">
          <MoreBtn :menu-list="moreList" />
        </div>
      </template>
    </VCardItem>

    <VTabs
      v-model="currentActiveTab"
      grow
    >
      <VTab
        v-for="order in orders"
        :key="order.tabName"
        :value="order.tabName"
      >
        {{ order.tabName }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow
        v-model="currentActiveTab"
        class="disable-tab-transition"
      >
        <VWindowItem
          v-for="order in orders"
          :key="order.tabName"
          :value="order.tabName"
        >
          <VTimeline
            side="end"
            align="start"
            truncate-line="both"
            density="compact"
            class="v-timeline-density-compact v-timeline-icon-only"
          >
            <VTimelineItem
              v-for="item in order.timeline1"
              :key="item.icon"
              fill-dot
              size="small"
            >
              <template #icon>
                <VIcon
                  size="20"
                  :icon="item.icon"
                  :color="item.type === 'SENDER' ? 'success' : 'primary'"
                />
              </template>

              <p :class="`text-sm font-weight-medium text-${item.type === 'SENDER' ? 'success' : 'primary'} mb-0`">
                {{ item.type }}
              </p>
              <p class="app-timeline-title mb-0">
                {{ item.name }}
              </p>
              <p class="text-disabled mb-0">
                {{ item.address }}
              </p>
            </VTimelineItem>
          </VTimeline>

          <VDivider
            class="my-5"
            style="border-style: dashed;"
          />

          <VTimeline
            side="end"
            align="start"
            truncate-line="both"
            density="compact"
            class="v-timeline-density-compact v-timeline-icon-only"
          >
            <VTimelineItem
              v-for="item in order.timeline2"
              :key="item.icon"
              fill-dot
              size="small"
            >
              <template #icon>
                <VIcon
                  size="20"
                  :icon="item.icon"
                  :color="item.type === 'SENDER' ? 'success' : 'primary'"
                />
              </template>
              <p :class="`text-sm font-weight-medium text-${item.type === 'SENDER' ? 'success' : 'primary'} mb-0`">
                {{ item.type }}
              </p>

              <p class="app-timeline-title mb-0">
                {{ item.name }}
              </p>
              <p class="text-disabled mb-0">
                {{ item.address }}
              </p>
            </VTimelineItem>
          </VTimeline>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
