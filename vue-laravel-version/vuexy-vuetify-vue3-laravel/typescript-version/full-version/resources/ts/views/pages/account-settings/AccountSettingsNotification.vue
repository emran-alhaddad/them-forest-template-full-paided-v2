<script lang="ts" setup>
const recentDevices = ref(
  [
    {
      type: 'New for you',
      email: true,
      browser: true,
      app: true,
    },
    {
      type: 'Account activity',
      email: true,
      browser: true,
      app: true,
    },
    {
      type: 'A new browser used to sign in',
      email: true,
      browser: true,
      app: false,
    },
    {
      type: 'A new device is linked',
      email: true,
      browser: false,
      app: false,
    },
  ],
)

const selectedNotification = ref('Only when I\'m online')
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Recent Devices</VCardTitle>
      <p class="text-sm mt-2 mb-0">
        We need permission from your browser to show notifications. <span class="font-weight-bold">Request Permission</span>
      </p>
    </VCardItem>

    <VCardText>
      <VTable class="text-no-wrap rounded border">
        <thead>
          <tr>
            <th scope="col">
              Type
            </th>
            <th scope="col">
              EMAIL
            </th>
            <th scope="col">
              BROWSER
            </th>
            <th scope="col">
              App
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="device in recentDevices"
            :key="device.type"
          >
            <td>
              {{ device.type }}
            </td>
            <td>
              <VCheckbox v-model="device.email" />
            </td>
            <td>
              <VCheckbox v-model="device.browser" />
            </td>
            <td>
              <VCheckbox v-model="device.app" />
            </td>
          </tr>
        </tbody>
      </VTable>
    </VCardText>
    <VDivider />

    <VCardText>
      <VForm @submit.prevent="() => {}">
        <h6 class="text-base font-weight-medium mb-3">
          When should we send you notifications?
        </h6>

        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
            <AppSelect
              v-model="selectedNotification"
              mandatory
              :items="['Only when I\'m online', 'Anytime']"
            />
          </VCol>
        </VRow>

        <div class="d-flex flex-wrap gap-4 mt-4">
          <VBtn type="submit">
            Save Changes
          </VBtn>
          <VBtn
            color="secondary"
            variant="tonal"
            type="reset"
          >
            Reset
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
