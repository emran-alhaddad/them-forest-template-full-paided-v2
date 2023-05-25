<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import { paginationMeta } from '@/@fake-db/utils'
import { useProjectStore } from '@/views/dashboards/analytics/useProjectStore'
import { avatarText } from '@core/utils/formatters'

const projectStore = useProjectStore()
const searchQuery = ref('')

const options = ref({
  page: 1,
  itemsPerPage: 10,
  sortBy: [],
  groupBy: [],
  search: undefined,
})

const projects = ref([])

// 👉 headers
const headers = [
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Leader',
    key: 'leader',
  },
  {
    title: 'Team',
    key: 'team',
  },
  {
    title: 'Status',
    key: 'status',
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  },
]

// 👉 Fetch Projects
onMounted(() => {
  projectStore.fetchProjects().then(response => {
    projects.value = response.data
  }).catch(error => {
    console.log(error)
  })
})
</script>

<template>
  <VCard v-if="projects">
    <VCardItem class="project-header d-flex flex-wrap justify-space-between py-4 gap-4">
      <VCardTitle>Projects</VCardTitle>

      <template #append>
        <div style="inline-size: 272px;">
          <AppTextField
            v-model="searchQuery"
            placeholder="Search"
          />
        </div>
      </template>
    </VCardItem>

    <VDivider />

    <!-- SECTION Table -->
    <VDataTable
      v-model:page="options.page"
      :items-per-page="5"
      show-select
      :search="searchQuery"
      :headers="headers"
      :items="projects"
      class="text-no-wrap"
      @update:options="options = $event"
    >
      <!-- 👉 Name -->
      <template #item.name="{ item }">
        <div class="d-flex align-center gap-3 py-2">
          <VAvatar
            :variant="!item.raw.logo.length ? 'tonal' : undefined"
            :color="!item.raw.logo.length ? 'primary' : undefined"
            size="38"
          >
            <VImg
              v-if="item.raw.logo.length"
              :src="item.raw.logo"
            />
            <span
              v-else
              class="font-weight-medium"
            >{{ avatarText(item.raw.name) }}</span>
          </VAvatar>

          <div>
            <p class="font-weight-medium mb-0">
              {{ item.raw.name }}
            </p>
            <span class="text-disabled text-sm">{{ item.raw.date }}</span>
          </div>
        </div>
      </template>

      <!-- 👉 team -->
      <template #item.team="{ item }">
        <div class="v-avatar-group">
          <VAvatar
            v-for="(avatar, index) in item.raw.team"
            :key="index"
            :size="30"
            :image="avatar"
          />
        </div>
      </template>

      <!-- 👉 Status -->
      <template #item.status="{ item }">
        <div
          class="d-flex align-center gap-3"
          style="min-inline-size: 150px;"
        >
          <div class="flex-grow-1">
            <VProgressLinear
              :model-value="item.raw.status"
              color="primary"
              height="8"
              rounded
              rounded-bar
            />
          </div>
          <span>{{ item.raw.status }}%</span>
        </div>
      </template>

      <!-- 👉 Actions -->
      <template #item.actions>
        <MoreBtn
          color="default"
          :menu-list="[{ title: 'Details', value: 'Details' }, { title: 'Archive', value: 'Archive' }]"
        />
      </template>

      <template #bottom>
        <VDivider />

        <div class="d-flex align-center justify-center justify-sm-space-between flex-wrap gap-3 pa-5 pt-3">
          <p class="text-sm text-disabled mb-0">
            {{ paginationMeta(options, projects.length) }}
          </p>

          <VPagination
            v-model="options.page"
            :total-visible="Math.ceil(projects.length / options.itemsPerPage)"
            :length="Math.ceil(projects.length / options.itemsPerPage)"
          >
            <template #next="slotProps">
              <VBtn
                v-bind="slotProps"
                :icon="false"
                variant="tonal"
                color="default"
              >
                Next
              </VBtn>
            </template>

            <template #prev="slotProps">
              <VBtn
                v-bind="slotProps"
                :icon="false"
                variant="tonal"
                color="default"
              >
                Previous
              </VBtn>
            </template>
          </VPagination>
        </div>
      </template>
    </VDataTable>
    <!-- !SECTION -->
  </VCard>
</template>

<style lang="scss">
.project-header .v-card-item__append {
  padding-inline-start: 0;
}
</style>
