<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

defineEmits<{
  (e: 'toggleComposeDialogVisibility'): void
}>()

const folders = [
  {
    title: 'Inbox',
    prependIcon: 'tabler-mail',
    to: { name: 'apps-email' },
    badge: { content: '4', color: 'primary' },
  },
  {
    title: 'Sent',
    prependIcon: 'tabler-send',
    to: {
      name: 'apps-email-filter',
      params: { filter: 'sent' },
    },
  },
  {
    title: 'Draft',
    prependIcon: 'tabler-pencil',
    to: {
      name: 'apps-email-filter',
      params: { filter: 'draft' },
    },
    badge: { content: '2', color: 'warning' },
  },
  {
    title: 'Starred',
    prependIcon: 'tabler-star',
    to: {
      name: 'apps-email-filter',
      params: { filter: 'starred' },
    },
    badge: { content: '9', color: 'success' },
  },
  {
    title: 'Spam',
    prependIcon: 'tabler-info-circle',
    to: {
      name: 'apps-email-filter',
      params: { filter: 'spam' },
    },
  },
  {
    title: 'Trash',
    prependIcon: 'tabler-trash',
    to: {
      name: 'apps-email-filter',
      params: { filter: 'trashed' },
    },
  },
]

const labels = [
  {
    title: 'Personal',
    color: 'success',
    to: {
      name: 'apps-email-label',
      params: { label: 'personal' },
    },
  },
  {
    title: 'Company',
    color: 'primary',
    to: {
      name: 'apps-email-label',
      params: { label: 'company' },
    },
  },
  {
    title: 'Important',
    color: 'warning',
    to: {
      name: 'apps-email-label',
      params: { label: 'important' },
    },
  },
  {
    title: 'Private',
    color: 'error',
    to: {
      name: 'apps-email-label',
      params: { label: 'private' },
    },
  },
]
</script>

<template>
  <div class="d-flex flex-column h-100">
    <!-- 👉 Compose -->
    <div class="px-6 pb-5 pt-6">
      <VBtn
        block
        @click="$emit('toggleComposeDialogVisibility')"
      >
        Compose
      </VBtn>
    </div>

    <!-- 👉 Folders -->
    <PerfectScrollbar
      :options="{ wheelPropagation: false }"
      class="h-100"
    >
      <!-- Filters -->
      <ul class="email-filters">
        <RouterLink
          v-for="folder in folders"
          :key="folder.title"
          v-slot="{ isActive, href, navigate }"
          class="d-flex align-center cursor-pointer"
          :to="folder.to"
          custom
        >
          <li
            v-bind="$attrs"
            :href="href"
            :class="isActive && 'email-filter-active text-primary'"
            class="d-flex align-center cursor-pointer"
            @click="navigate"
          >
            <VIcon
              :icon="folder.prependIcon"
              class="me-2"
              size="20"
            />
            <span class="font-weight-medium">{{ folder.title }}</span>

            <VSpacer />

            <VChip
              v-if="folder.badge?.content"
              :color="folder.badge.color"
              pill
            >
              {{ folder.badge.content }}
            </VChip>
          </li>
        </RouterLink>
      </ul>

      <ul class="email-labels">
        <!-- 👉 Labels -->
        <li class="text-xs d-block text-uppercase text-disabled mt-6 mb-2">
          LABELS
        </li>
        <RouterLink
          v-for="label in labels"
          :key="label.title"
          v-slot="{ isActive, href, navigate }"
          class="d-flex align-center"
          :to="label.to"
          custom
        >
          <li
            v-bind="$attrs"
            :href="href"
            :class="isActive && 'email-label-active text-primary'"
            class="cursor-pointer"
            @click="navigate"
          >
            <VBadge
              inline
              dot
              :color="label.color"
              class="me-4"
            />
            <span class="font-weight-medium">{{ label.title }}</span>
          </li>
        </RouterLink>
      </ul>
    </PerfectScrollbar>
  </div>
</template>

<style lang="scss">
.email-filters,
.email-labels {
  > li {
    position: relative;
    margin-block-end: 4px;
    padding-block: 8px;
    padding-inline: 24px;
  }

  .email-filter-active,
  .email-label-active {
    &::after {
      position: absolute;
      background: currentcolor;
      block-size: 100%;
      content: "";
      inline-size: 3px;
      inset-block-start: 0;
      inset-inline-start: 0;
    }
  }
}

.email-labels {
  > li {
    position: relative;
    margin-block-end: 4px;
    padding-block: 4px;
    padding-inline: 24px;
  }
}
</style>
