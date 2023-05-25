<script setup>
const username = ref('')
const email = ref('')
const password = ref()
const checkbox = ref(false)

const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref([])
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <AppTextField
          v-model="username"
          label="Username"
          placeholder="Username"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <AppTextField
          v-model="password"
          label="Password"
          type="password"
          persistent-hint
          placeholder="Password"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
