<script setup>
import asana from '@images/icons/brands/asana.png'
import behance from '@images/icons/brands/behance.png'
import dribbble from '@images/icons/brands/dribbble.png'
import facebook from '@images/icons/brands/facebook.png'
import github from '@images/icons/brands/github.png'
import google from '@images/icons/brands/google.png'
import linkedin from '@images/icons/brands/linkedin.png'
import mailchimp from '@images/icons/brands/mailchimp.png'
import slack from '@images/icons/brands/slack.png'
import twitter from '@images/icons/brands/twitter.png'

const connectedAccounts = ref([
  {
    img: google,
    title: 'Google',
    text: 'Calendar and contacts',
    connected: true,
  },
  {
    img: slack,
    title: 'Slack',
    text: 'Communication',
    connected: false,
  },
  {
    img: github,
    title: 'Github',
    text: 'Manage your Git repositories',
    connected: true,
  },
  {
    img: mailchimp,
    title: 'Mailchimp',
    text: 'Email marketing service',
    connected: false,
  },
  {
    img: asana,
    title: 'Asana',
    text: 'Communication',
    connected: false,
  },
])

const socialAccounts = ref([
  {
    img: facebook,
    title: 'Facebook',
    connected: false,
  },
  {
    img: twitter,
    title: 'Twitter',
    link: 'https://twitter.com/theme_selection',
    username: '@Theme_Selection',
    connected: true,
  },
  {
    img: linkedin,
    title: 'Linkedin',
    link: 'https://www.linkedin.com/company/pixinvent',
    username: '@Pixinvent',
    connected: true,
  },
  {
    img: dribbble,
    title: 'Dribbble',
    connected: false,
  },
  {
    img: behance,
    title: 'Behance',
    connected: false,
  },
])
</script>

<template>
  <VRow>
    <!-- 👉 connected accounts -->
    <VCol cols="12">
      <VCard title="Connected Accounts">
        <VCardText>
          <p class="text-base mt-n6 mb-6">
            Display content from your connected accounts on your site
          </p>

          <VList class="card-list">
            <VListItem
              v-for="account in connectedAccounts"
              :key="account.title"
              :subtitle="account.text"
            >
              <template #title>
                <h6 class="text-h6">
                  {{ account.title }}
                </h6>
              </template>
              <template #prepend>
                <VAvatar
                  start
                  :size="35"
                  :image="account.img"
                />
              </template>

              <template #append>
                <VSwitch
                  v-model="account.connected"
                  density="compact"
                  class="me-1"
                />
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 social accounts -->
    <VCol cols="12">
      <VCard title="Social Accounts">
        <VCardText>
          <p class="text-base mb-6 mt-n6">
            Display content from social accounts on your site
          </p>

          <VList class="card-list">
            <VListItem
              v-for="(account) in socialAccounts"
              :key="account.title"
            >
              <h6 class="text-h6">
                {{ account.title }}
              </h6>
              <template #prepend>
                <VAvatar
                  start
                  size="35"
                  rounded="0"
                  :image="account.img"
                />
              </template>

              <VListItemSubtitle v-if="account.connected">
                <a
                  :href="account.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ account.username }}
                </a>
              </VListItemSubtitle>

              <VListItemSubtitle v-else>
                Not connected
              </VListItemSubtitle>

              <template #append>
                <IconBtn
                  variant="tonal"
                  :color="account.connected ? 'error' : 'secondary'"
                  class="rounded"
                >
                  <VIcon :icon="account.connected ? 'tabler-trash' : 'tabler-link'" />
                </IconBtn>
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
