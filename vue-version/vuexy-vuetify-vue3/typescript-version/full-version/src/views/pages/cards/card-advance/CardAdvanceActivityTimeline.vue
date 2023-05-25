<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'

const moreList = [
  { title: 'Refresh', value: 'refresh' },
  { title: 'Download', value: 'Download' },
  { title: 'View All', value: 'View All' },
]
</script>

<template>
  <VCard title="Activity Timeline">
    <template #append>
      <div class="me-n2">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>

    <VCardText>
      <VTimeline
        side="end"
        align="start"
        truncate-line="both"
        density="compact"
        class="v-timeline-density-compact"
      >
        <VTimelineItem
          dot-color="primary"
          size="x-small"
        >
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center flex-wrap mb-1">
            <span class="app-timeline-title">
              Client Meeting
            </span>
            <span class="app-timeline-meta">Today</span>
          </div>

          <!-- 👉 Content -->
          <p class="app-timeline-text mb-2">
            Project meeting with john @10:15am
          </p>

          <div class="d-flex align-center">
            <VAvatar
              :image="avatar1"
              class="me-3"
            />
            <div>
              <p class="text-high-emphasis mb-n1">
                Lester McCarthy (Client)
              </p>
              <span class="text-sm">CEO of Infibeam</span>
            </div>
          </div>
        </VTimelineItem>

        <VTimelineItem
          dot-color="success"
          size="x-small"
        >
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center mb-1">
            <span class="app-timeline-title">
              Create a new project for client
            </span>
            <span class="app-timeline-meta">2 Day Ago</span>
          </div>

          <!-- 👉 Content -->
          <p class="app-timeline-text mb-1">
            Add files to new design folder
          </p>
        </VTimelineItem>

        <VTimelineItem
          dot-color="error"
          size="x-small"
        >
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center mb-1">
            <span class="app-timeline-title">
              Shared 2 New Project Files
            </span>
            <span class="app-timeline-meta">6 Day Ago</span>
          </div>

          <!-- 👉 Content -->
          <p class="mb-1">
            <span class="app-timeline-text me-2">Sent by Mollie Dixon</span>
            <VAvatar
              :image="avatar2"
              size="20"
            />
          </p>
          <div class="d-flex align-center">
            <a
              href="#"
              class="d-flex align-center me-4"
            >
              <VIcon
                start
                size="18"
                color="warning"
                icon="tabler-file-description"
              />
              <span class="text-high-emphasis">App Guidelines</span>
            </a>
            <a
              href="#"
              class="d-flex align-center"
            >
              <VIcon
                start
                size="18"
                color="success"
                icon="tabler-table"
              />
              <span class="text-high-emphasis">Testing Results</span>
            </a>
          </div>
        </VTimelineItem>

        <VTimelineItem
          dot-color="info"
          size="x-small"
        >
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between">
            <span class="app-timeline-title">
              Project status updated
            </span>
            <span class="app-timeline-meta">10 Day Ago</span>
          </div>

          <!-- 👉 Content -->
          <p class="app-timeline-text mb-1">
            Ecommerce iOS App Completed
          </p>
        </VTimelineItem>
      </VTimeline>
    </VCardText>
  </VCard>
</template>
