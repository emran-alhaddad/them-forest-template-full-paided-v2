<script setup lang="ts">
import asana from '@images/icons/brands/asana.png'
import behance from '@images/icons/brands/behance.png'
import dribbble from '@images/icons/brands/dribbble.png'
import facebook from '@images/icons/brands/facebook.png'
import github from '@images/icons/brands/github.png'
import google from '@images/icons/brands/google.png'
import intagram from '@images/icons/brands/instagram.png'
import mailchimp from '@images/icons/brands/mailchimp.png'
import slack from '@images/icons/brands/slack.png'
import twitter from '@images/icons/brands/twitter.png'

const connectedAccounts = ref([
  {
    logo: google,
    name: 'Google',
    subtitle: 'Calendar and contacts',
    connected: true,
  },
  {
    logo: slack,
    name: 'Slack',
    subtitle: 'Communication',
    connected: false,
  },
  {
    logo: github,
    name: 'GitHub',
    subtitle: 'Manage your Git repositories',
    connected: true,
  },
  {
    logo: mailchimp,
    name: 'MailChimp',
    subtitle: 'Email marketing service',
    connected: true,
  },
  {
    logo: asana,
    name: 'Asana',
    subtitle: 'Task management',
    connected: false,
  },

])

const socialAccounts = ref([
  {
    logo: facebook,
    name: 'Facebook',
    connected: false,
  },
  {
    logo: twitter,
    name: 'Twitter',
    links: { username: '@Pixinvent', link: 'https://twitter.com/Pixinvents' },
    connected: true,
  },
  {
    logo: intagram,
    name: 'Instagram',
    links: { username: '@Pixinvent', link: 'https://www.instagram.com/pixinvents/' },
    connected: true,
  },
  {
    logo: dribbble,
    name: 'Dribbble',
    connected: false,

  },
  {
    logo: behance,
    name: 'Behance',
    connected: false,
  },
])
</script>

<template>
  <VRow>
    <!-- 👉 Connected Accounts -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard title="Connected Accounts">
        <VCardText>
          <p class="mt-n4 mb-6 text-sm">
            Display content from your connected accounts on your site
          </p>
          <VList class="card-list">
            <VListItem
              v-for="item in connectedAccounts"
              :key="item.logo"
              :title="item.name"
            >
              <template #prepend>
                <VAvatar start>
                  <VImg
                    :src="item.logo"
                    height="30"
                  />
                </VAvatar>
              </template>

              <VListItemSubtitle class="text-xs">
                {{ item.subtitle }}
              </VListItemSubtitle>

              <template #append>
                <VListItemAction>
                  <VSwitch
                    v-model="item.connected"
                    density="compact"
                    class="me-1"
                  />
                </VListItemAction>
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Social Accounts -->
    <VCol
      cols="12"
      md="6"
    >
      <VCard title="Social Accounts">
        <VCardText>
          <p class="mt-n4 mb-6 text-sm">
            Display content from social accounts on your site
          </p>
          <VList class="card-list">
            <VListItem
              v-for="item in socialAccounts"
              :key="item.logo"
              :title="item.name"
            >
              <template #prepend>
                <VAvatar start>
                  <VImg
                    :src="item.logo"
                    height="30"
                  />
                </VAvatar>
              </template>

              <VListItemSubtitle
                v-if="item.links?.link"
                tag="a"
                :href="item.links?.link"
                style="opacity: 1;"
              >
                {{ item.links?.username }}
              </VListItemSubtitle>

              <VListItemSubtitle
                v-else
                class="text-xs"
              >
                Not Connected
              </VListItemSubtitle>

              <template #append>
                <VListItemAction>
                  <IconBtn
                    variant="tonal"
                    :color="item.connected ? 'error' : 'secondary'"
                    class="rounded"
                  >
                    <VIcon
                      size="20"
                      :icon="item.connected ? 'tabler-trash' : 'tabler-link' "
                    />
                  </IconBtn>
                </VListItemAction>
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
