<script setup lang="ts">
import * as demoCode from '@/views/demos/components/progress-linear/demoCodeProgressLinear'
</script>

<template>
  <VRow class="match-height">
    <!-- 👉 Progress linear color -->
    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Color"
        :code="demoCode.color"
      >
        <p>Use the props <code>color</code> and <code>background-color</code> to set colors.</p>

        <DemoProgressLinearColor />
      </AppCardCode>
    </VCol>

    <!-- 👉 Progress linear Buffering -->
    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Buffering"
        :code="demoCode.buffering"
      >
        <p>The primary value is controlled by <code>v-model</code>, whereas the buffer is controlled by the <code>buffer-value</code> prop.</p>

        <DemoProgressLinearBuffering />
      </AppCardCode>
    </VCol>

    <!-- 👉 Progress linear indeterminate -->
    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Indeterminate"
        :code="demoCode.indeterminate"
      >
        <p>for continuously animating progress bar,use prop <code>indeterminate</code>. This indicates continuous process. </p>

        <DemoProgressLinearIndeterminate />
      </AppCardCode>
    </VCol>

    <!-- 👉 Progress linear Reversed -->
    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Reversed"
        :code="demoCode.reversed"
      >
        <p>Use prop <code>reverse</code> to animate continuously in reverse direction. The component also has RTL support.</p>

        <DemoProgressLinearReversed />
      </AppCardCode>
    </VCol>

    <!-- 👉 Progress linear Rounded -->
    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Rounded"
        :code="demoCode.rounded"
      >
        <p>
          The <code> rounded </code>prop is used to apply a border radius to the v-progress-linear component.
          By default we have set <code>rounded</code> prop true. You can disable it by using <code>:rounded='false'</code>.
        </p>
        <DemoProgressLinearRounded />
      </AppCardCode>
    </VCol>

    <!-- 👉 Progress linear Slot -->
    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Slots"
        :code="demoCode.slots"
      >
        <p>The v-progress-linear component will be responsive to user input when using <code>v-model</code>. You can use the default slot or bind a local model to display inside of the progress.</p>

        <DemoProgressLinearSlots />
      </AppCardCode>
    </VCol>

    <!-- 👉 Progress Linear Striped -->
    <VCol
      cols="12"
      md="6"
    >
      <AppCardCode
        title="Striped"
        :code="demoCode.striped"
      >
        <p> The <code>striped</code> prop is used to apply striped background.</p>
        <DemoProgressLinearStriped />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
