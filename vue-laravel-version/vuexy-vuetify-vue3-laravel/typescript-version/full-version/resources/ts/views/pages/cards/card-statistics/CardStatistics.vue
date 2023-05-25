<template>
  <VCard>
    <VCardItem class="pb-2">
      <VCardTitle>Statistics</VCardTitle>

      <template #append>
        <div class="me-n3">
          <IconBtn>
            <VIcon icon="tabler-dots-vertical" />
          </IconBtn>
        </div>
      </template>
    </VCardItem>

    <VCardText>
      <div class="d-flex justify-space-between mb-2">
        <h6 class="text-base font-weight-medium">
          Subscribers Gained
        </h6>
        <VChip
          label
          color="success"
        >
          <span class="font-weight-medium">+92k</span>
        </VChip>
      </div>

      <div class="d-flex justify-space-between mb-1">
        <span class="text-base">
          1.2k new subscriber
        </span>

        <span class="text-disabled text-sm">85%</span>
      </div>

      <VProgressLinear
        model-value="85"
        color="primary"
        height="8"
        rounded
      />

      <div class="d-flex justify-space-between mb-2 mt-6">
        <h6 class="text-base font-weight-medium">
          Orders Received
        </h6>
        <VChip
          label
          color="success"
        >
          <span class="font-weight-medium">+38k</span>
        </VChip>
      </div>

      <div class="d-flex justify-space-between mb-1">
        <span class="text-base">
          2.4k new orders
        </span>

        <span class="text-disabled text-sm">65%</span>
      </div>

      <VProgressLinear
        model-value="65"
        color="info"
        height="8"
        rounded
      />
    </VCardText>
  </VCard>
</template>
