<script setup>
const props = defineProps({
  data: {
    type: null,
    required: true,
  },
})
</script>

<template>
  <VCard class="mb-4">
    <VCardText>
      <p class="text-xs">
        ABOUT
      </p>

      <VList class="card-list text-medium-emphasis">
        <VListItem
          v-for="item in props.data.about"
          :key="item.property"
        >
          <template #prepend>
            <VIcon
              :icon="item.icon"
              size="20"
              class="me-2"
            />
          </template>
          <VListItemTitle>
            <span class="font-weight-medium me-1">{{ item.property }}:</span>
            <span>{{ item.value }}</span>
          </VListItemTitle>
        </VListItem>
      </VList>

      <p class="text-xs mt-5">
        CONTACTS
      </p>

      <VList class="card-list text-medium-emphasis">
        <VListItem
          v-for="item in props.data.contacts"
          :key="item.property"
        >
          <template #prepend>
            <VIcon
              :icon="item.icon"
              size="20"
              class="me-2"
            />
          </template>
          <VListItemTitle>
            <span class="font-weight-medium me-1">{{ item.property }}:</span>
            <span>{{ item.value }}</span>
          </VListItemTitle>
        </VListItem>
      </VList>

      <p class="text-xs mt-5">
        TEAMS
      </p>

      <VList class="card-list text-medium-emphasis">
        <VListItem
          v-for="item in props.data.teams"
          :key="item.property"
        >
          <template #prepend>
            <VIcon
              :icon="item.icon"
              size="20"
              :color="item.color"
              class="me-2"
            />
          </template>
          <VListItemTitle>
            <span class="font-weight-medium me-1">{{ item.property }}:</span>
            <span>{{ item.value }}</span>
          </VListItemTitle>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>

  <VCard>
    <VCardText>
      <p class="text-xs">
        OVERVIEW
      </p>

      <VList class="card-list text-medium-emphasis">
        <VListItem
          v-for="item in props.data.overview"
          :key="item.property"
        >
          <template #prepend>
            <VIcon
              :icon="item.icon"
              size="20"
              class="me-2"
            />
          </template>
          <VListItemTitle>
            <span class="font-weight-medium me-1">{{ item.property }}:</span>
            <span>{{ item.value }}</span>
          </VListItemTitle>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 16px;
}
</style>
