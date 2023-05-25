<script setup>
import avatar1 from '@images/avatars/avatar-1.png'

const moreList = [
  {
    title: 'Refresh',
    value: 'Refresh',
  },
  {
    title: 'Download',
    value: 'Download',
  },
  {
    title: 'View All',
    value: 'View All',
  },
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
          <div class="d-flex justify-space-between align-center flex-wrap">
            <span class="app-timeline-title">
              Client Meeting
            </span>
            <span class="app-timeline-meta">Today</span>
          </div>

          <!-- 👉 Content -->
          <p class="app-timeline-text mb-3">
            Project meeting with john @10:15am
          </p>
          <div class="d-flex align-center">
            <VAvatar
              :image="avatar1"
              class="me-3"
            />
            <div>
              <h6 class="text-h6">
                Lester McCarthy (Client)
              </h6>
              <p class="mb-0 text-sm">
                CEO of Infibeam
              </p>
            </div>
          </div>
        </VTimelineItem>

        <VTimelineItem
          dot-color="success"
          size="x-small"
        >
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center flex-wrap">
            <span class="app-timeline-title">
              Create a new project for client
            </span>
            <span class="app-timeline-meta">2 Days Ago</span>
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
          <div class="d-flex justify-space-between align-center flex-wrap">
            <span class="app-timeline-title">
              Shared 2 New Project Files
            </span>
            <span class="app-timeline-meta">6 Days Ago</span>
          </div>

          <!-- 👉 Content -->
          <p class="app-timeline-text mb-2">
            Sent by Mollie Dixon
          </p>
          <div class="d-flex align-center">
            <a
              href="javascript:void(0);"
              class="d-flex align-center me-4"
            >
              <VIcon
                start
                size="18"
                color="warning"
                icon="tabler-file-description"
              />
              <h6 class="font-weight-medium text-h6">App Guidelines</h6>
            </a>
            <a
              href="javascript:void(0);"
              class="d-flex align-center"
            >
              <VIcon
                start
                size="18"
                color="success"
                icon="tabler-table"
              />
              <h6 class="font-weight-medium text-h6">Testing Results</h6>
            </a>
          </div>
        </VTimelineItem>

        <VTimelineItem
          dot-color="info"
          size="x-small"
        >
          <!-- 👉 Header -->
          <div class="d-flex justify-space-between align-center flex-wrap">
            <span class="app-timeline-title">
              Project status updated
            </span>
            <span class="app-timeline-meta">10 Days Ago</span>
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
