<script setup>
import standingGirlImg from '@images/illustrations/standingGirlImg.png'

const props = defineProps({
  formData: {
    type: null,
    required: true,
  },
})

const emit = defineEmits(['update:formData'])

const formData = ref(props.formData)

watch(formData, () => {
  emit('update:formData', formData.value)
})
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="7"
    >
      <h5 class="text-h5 mb-5">
        Almost done! 🚀
      </h5>

      <p>Confirm your deal details information and submit to create it.</p>

      <table class="text-base">
        <tr>
          <td style="width: 202px;">
            <p class="font-weight-medium mb-2">
              Deal Type
            </p>
          </td>
          <td>
            <p class="mb-2">
              Percentage
            </p>
          </td>
        </tr>

        <tr>
          <td>
            <p class="font-weight-medium mb-2">
              Amount
            </p>
          </td>
          <td>
            <p class="mb-2">
              25%
            </p>
          </td>
        </tr>

        <tr>
          <td>
            <p class="font-weight-medium mb-2">
              Deal Code
            </p>
          </td>
          <td>
            <p class="mb-2">
              <VChip
                size="small"
                color="warning"
                label
              >
                25PEROFF
              </VChip>
            </p>
          </td>
        </tr>

        <tr>
          <td>
            <p class="font-weight-medium mb-2">
              Deal Title
            </p>
          </td>
          <td>
            <p class="mb-2">
              Black friday sale, 25% OFF
            </p>
          </td>
        </tr>

        <tr>
          <td>
            <p class="font-weight-medium mb-2">
              Deal Duration
            </p>
          </td>
          <td>
            <p class="mb-2">
              2021-07-14 to 2021-07-30
            </p>
          </td>
        </tr>
      </table>

      <VSwitch
        v-model="formData.isDealDetailsConfirmed"
        label="I have confirmed the deal details."
        class="mb-3"
      />
    </VCol>

    <VCol
      cols="12"
      md="5"
    >
      <div class="border rounded pa-4 pb-0">
        <VImg
          width="178"
          :src="standingGirlImg"
          class="mx-auto"
        />
      </div>
    </VCol>
  </VRow>
</template>
