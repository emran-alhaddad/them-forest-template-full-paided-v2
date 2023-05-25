<script setup>
import avatar2 from '@images/avatars/avatar-2.png'
</script>

<template>
  <VCard>
    <VCardItem>
      <template #prepend>
        <VIcon icon="tabler-timeline" />
      </template>

      <VCardTitle>Activity Timeline</VCardTitle>

      <template #append>
        <div>
          <MoreBtn
            :menu-list="[
              { title: 'Share timeline', value: 'Share timeline' },
              { title: 'Suggest edits', value: 'Suggest edits' },
              { title: 'Report bug', value: 'Report bug' },
            ]"
          />
        </div>
      </template>
    </VCardItem>

    <VCardText>
      <VTimeline
        density="compact"
        align="start"
        truncate-line="both"
        class="v-timeline-density-compact"
      >
        <VTimelineItem
          dot-color="warning"
          size="x-small"
        >
          <div class="d-flex justify-space-between align-center flex-wrap">
            <span class="app-timeline-title">
              Client Meeting
            </span>
            <span class="app-timeline-meta">Today</span>
          </div>
          <p class="app-timeline-text mb-2">
            Project meeting with john @10:15am
          </p>

          <div class="d-flex align-center mt-3">
            <VAvatar
              size="38"
              class="me-3"
              :image="avatar2"
            />
            <div>
              <h6 class="text-sm font-weight-medium mb-n1">
                Lester McCarthy (Client)
              </h6>
              <span class="app-timeline-meta">
                CEO of Infidel
              </span>
            </div>
          </div>
        </VTimelineItem>

        <VTimelineItem
          dot-color="primary"
          size="x-small"
        >
          <div class="d-flex justify-space-between align-center flex-wrap">
            <span class="app-timeline-title">
              Create a new project for client 😎
            </span>
            <span class="app-timeline-meta">2 Day Ago</span>
          </div>

          <p class="app-timeline-text mb-1">
            Add files to new design folder
          </p>
        </VTimelineItem>

        <VTimelineItem
          dot-color="info"
          size="x-small"
        >
          <div class="d-flex justify-space-between align-center flex-wrap">
            <span class="app-timeline-title">
              Shared 2 New Project Files
            </span>
            <span class="app-timeline-meta">6 Day Ago</span>
          </div>
          <p class="app-timeline-text mb-0">
            Sent by Mollie Dixon
          </p>
          <div class="d-flex align-center mt-3">
            <VIcon
              color="warning"
              icon="tabler-file-text"
              size="20"
              class="me-2"
            />
            <h6 class="font-weight-medium text-xs me-3">
              App Guidelines
            </h6>

            <VIcon
              color="success"
              icon="tabler-table"
              size="20"
              class="me-2"
            />
            <h6 class="font-weight-medium text-xs">
              Testing Results
            </h6>
          </div>
        </VTimelineItem>

        <VTimelineItem
          dot-color="secondary"
          size="x-small"
        >
          <div class="d-flex justify-space-between align-center flex-wrap">
            <span class="app-timeline-title">
              Project status updated
            </span>
            <span class="app-timeline-meta">10 Day Ago</span>
          </div>
          <p class="app-timeline-text mb-1">
            WooCommerce iOS App Completed
          </p>
        </VTimelineItem>
      </VTimeline>
    </VCardText>
  </VCard>
</template>
