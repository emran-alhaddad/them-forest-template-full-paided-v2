<!-- eslint-disable vue/no-mutating-props -->
<script setup lang="ts">
interface Emit {
  (e: 'removeProduct', value: number): void
  (e: 'totalAmount', value: number): void
}

interface Props {
  id: number
  data: {
    title: string
    cost: number
    qty: number
    description: string
  }
}

const props = withDefaults(defineProps<Props>(), {
  data: () => ({
    title: 'App Design',
    cost: 24,
    qty: 1,
    description: 'Designed UI kit & app pages.',
  }),
})

const emit = defineEmits<Emit>()

const itemsOptions: Props['data'][] = [
  {
    title: 'App Design',
    cost: 24,
    qty: 1,
    description: 'Designed UI kit & app pages.',
  },
  {
    title: 'App Customization',
    cost: 26,
    qty: 1,
    description: 'Customization & Bug Fixes.',
  },
  {
    title: 'ABC Template',
    cost: 28,
    qty: 1,
    description: 'Vuetify admin template.',
  },
  {
    title: 'App Development',
    cost: 32,
    qty: 1,
    description: 'Native App Development.',
  },
]

const selectedItem = ref('App Customization')
const localProductData = ref(structuredClone(toRaw(props.data)))

watch(selectedItem, () => {
  const item = itemsOptions.filter(obj => {
    return obj.title === selectedItem.value
  })

  localProductData.value = item[0]
})

const removeProduct = () => {
  emit('removeProduct', props.id)
}

const totalPrice = computed(() => Number(localProductData.value.cost) * Number(localProductData.value.qty))

watch(totalPrice, () => {
  emit('totalAmount', totalPrice.value)
}, { immediate: true })
</script>

<template>
  <!-- eslint-disable vue/no-mutating-props -->
  <div class="add-products-header mb-4 d-none d-md-flex ps-5 pe-16">
    <VRow class="font-weight-medium">
      <VCol
        cols="12"
        md="6"
      >
        <span class="text-base">
          Item
        </span>
      </VCol>

      <VCol
        cols="12"
        md="2"
      >
        <span class="text-base">
          Cost
        </span>
      </VCol>

      <VCol
        cols="12"
        md="2"
      >
        <span class="text-base">
          Qty
        </span>
      </VCol>

      <VCol
        cols="12"
        md="2"
      >
        <span class="text-base">
          Price
        </span>
      </VCol>
    </VRow>
  </div>

  <VCard
    flat
    border
    class="d-flex flex-row"
  >
    <!-- 👉 Left Form -->
    <div class="pa-5 flex-grow-1">
      <VRow>
        <VCol
          cols="12"
          md="6"
        >
          <AppSelect
            v-model="selectedItem"
            :items="itemsOptions"
            item-title="title"
            item-value="title"
            label="Select Item"
            class="mb-3"
          />

          <AppTextarea
            v-model="localProductData.description"
            rows="2"
            label="Description"
            placeholder="Description"
          />
        </VCol>

        <VCol
          cols="12"
          md="2"
          sm="4"
        >
          <AppTextField
            v-model="localProductData.cost"
            type="number"
            label="Cost"
          />

          <div class="text-body-2 text-no-wrap mt-4">
            <p class="mb-1">
              Discount
            </p>

            <span>0%</span>

            <span class="mx-2">
              0%
              <VTooltip activator="parent">Tax 1</VTooltip>
            </span>

            <span>
              0%
              <VTooltip activator="parent">Tax 2</VTooltip>
            </span>
          </div>
        </VCol>

        <VCol
          cols="12"
          md="2"
          sm="4"
        >
          <AppTextField
            v-model="localProductData.qty"
            type="number"
            label="Qty"
          />
        </VCol>

        <VCol
          cols="12"
          md="2"
          sm="4"
        >
          <p class="my-2">
            <span class="d-inline d-md-none">Price: </span>
            <span class="text-body-1">${{ totalPrice }}</span>
          </p>
        </VCol>
      </VRow>
    </div>

    <!-- 👉 Item Actions -->
    <div class="d-flex flex-column justify-space-between border-s pa-1">
      <IconBtn @click="removeProduct">
        <VIcon
          size="20"
          icon="tabler-x"
        />
      </IconBtn>

      <IconBtn>
        <VIcon
          size="20"
          icon="tabler-settings"
        />
      </IconBtn>
    </div>
  </VCard>
</template>
