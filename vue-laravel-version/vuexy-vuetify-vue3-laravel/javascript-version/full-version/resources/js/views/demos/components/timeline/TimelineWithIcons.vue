<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import pdf from '@images/icons/project-icons/pdf.png'
import pumaShoes from '@images/pages/puma-shoes.jpeg'

const serverSwitch = ref(false)
</script>

<template>
  <VCard
    variant="text"
    title="Timeline With Icons"
  >
    <VCardText>
      <VTimeline
        align="start"
        justify="center"
        truncate-line="both"
        :density="$vuetify.display.smAndDown ? 'compact' : 'default'"
        class="v-timeline-icon-only"
      >
        <!-- SECTION Timeline Item: Flight -->
        <VTimelineItem>
          <template #icon>
            <VIcon
              size="20"
              icon="tabler-plane-tilt"
              color="primary"
            />
          </template>

          <VCard>
            <VCardText>
              <!-- 👉 Header -->
              <div class="d-flex justify-space-between align-center mb-1">
                <span class="app-timeline-title">
                  Get on the flight
                </span>
                <span class="app-timeline-meta">Wednesday</span>
              </div>

              <!-- 👉 Content -->
              <p class="app-timeline-text mb-1">
                <span>Charles de Gaulle Airport, Paris</span>
                <VIcon
                  size="20"
                  icon="tabler-arrow-right"
                  class="mx-2 flip-in-rtl"
                />
                <span>Heathrow Airport, London</span>
              </p>

              <p class="app-timeline-meta mb-2">
                6:30 AM
              </p>

              <div class="app-timeline-text d-flex align-center gap-2">
                <div>
                  <VImg
                    :src="pdf"
                    :width="22"
                  />
                </div>

                <span>booking-card.pdf</span>
              </div>
            </VCardText>
          </VCard>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Interview -->
        <VTimelineItem>
          <template #icon>
            <VIcon
              size="20"
              icon="tabler-clock"
              color="success"
            />
          </template>

          <VCard>
            <VCardText>
              <!-- 👉 Header -->
              <div class="d-flex justify-space-between align-center mb-1">
                <span class="app-timeline-title">
                  Interview Schedule
                </span>
                <span class="app-timeline-meta">April, 18</span>
              </div>

              <p class="app-timeline-text mb-0">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quos, voluptates voluptas rem veniam
                expedita.
              </p>

              <!-- 👉 Divider -->
              <VDivider class="my-4" />

              <!-- 👉 Person -->
              <div class="d-flex justify-space-between align-center flex-wrap gap-4">
                <!-- 👉 Avatar & Personal Info -->
                <span class="d-flex align-bottom">
                  <VAvatar
                    size="40"
                    :image="avatar2"
                    class="me-3"
                  />
                  <div class="d-flex flex-column">
                    <h6 class="text-sm font-weight-medium">Rebecca Godman</h6>
                    <span class="text-xs">Javascript Developer</span>
                  </div>
                </span>

                <!-- 👉 Person Actions -->
                <div>
                  <IconBtn>
                    <VIcon
                      icon="tabler-message"
                      size="20"
                    />
                  </IconBtn>
                  <IconBtn>
                    <VIcon
                      icon="tabler-phone"
                      size="20"
                    />
                  </IconBtn>
                </div>
              </div>
            </VCardText>
          </VCard>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Puma Shoes -->
        <VTimelineItem>
          <template #icon>
            <VIcon
              size="20"
              icon="tabler-shopping-cart"
              color="warning"
            />
          </template>

          <VCard>
            <VCardText>
              <div class="d-flex align-start flex-sm-row flex-column mb-3 gap-y-2">
                <VImg
                  height="62"
                  width="62"
                  :src="pumaShoes"
                  class="rounded me-4"
                />

                <div>
                  <!-- 👉 Header -->
                  <div class="d-flex justify-space-between align-center mb-1">
                    <span class="app-timeline-title">
                      Sold Puma POPX Blue Color
                    </span>
                    <span class="app-timeline-meta">January, 10
                    </span>
                  </div>
                  <span class="app-timeline-text">PUMA presents the latest shoes from its collection. Light &amp;
                    comfortable made with highly durable material.</span>
                </div>
              </div>

              <!-- 👉 Timeline Item: Meta Content -->
              <div class="d-flex justify-space-between flex-sm-row flex-column gap-3">
                <div class="text-sm-center">
                  <h6 class="text-sm font-weight-medium">
                    Customer
                  </h6>
                  <span class="text-xs">Micheal Scott</span>
                </div>

                <div class="text-sm-center">
                  <h6 class="text-sm font-weight-medium">
                    Price
                  </h6>
                  <span class="text-xs">$375.00</span>
                </div>

                <div class="text-sm-center">
                  <h6 class="text-sm font-weight-medium">
                    Quantity
                  </h6>
                  <span class="text-xs">1</span>
                </div>
              </div>
            </VCardText>
          </VCard>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Design Review -->
        <VTimelineItem>
          <template #icon>
            <VIcon
              size="20"
              icon="tabler-edit"
              color="info"
            />
          </template>

          <VCard>
            <VCardText>
              <!-- 👉 Header -->
              <div class="d-flex justify-space-between align-center">
                <span class="app-timeline-title">
                  Design Review
                </span>
                <span class="app-timeline-meta">September, 20</span>
              </div>

              <!-- 👉 Content -->
              <p class="app-timeline-text">
                Weekly review of freshly prepared design for our new application.
              </p>

              <div class="d-flex align-center">
                <VAvatar
                  size="40"
                  :image="avatar1"
                  class="me-3"
                />
                <h6 class="text-sm font-weight-medium">
                  John Doe (Client)
                </h6>
              </div>
            </VCardText>
          </VCard>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Ubuntu Server -->
        <VTimelineItem>
          <template #icon>
            <VIcon
              size="20"
              icon="tabler-server"
              color="error"
            />
          </template>

          <VCard>
            <VCardText>
              <!-- 👉 Header -->
              <div class="d-flex justify-space-between align-center mb-1">
                <span class="app-timeline-title">
                  Ubuntu Server
                </span>

                <VChip
                  color="error"
                  size="small"
                >
                  Inactive
                </VChip>
              </div>

              <!-- 👉 Content -->
              <table class="text-sm w-100 mt-3">
                <tr>
                  <td class="d-flex align-center pb-2">
                    <VIcon
                      icon="tabler-world"
                      class="me-1"
                    />
                    <span>IP Address</span>
                  </td>

                  <td class="text-right">
                    192.654.8.566
                  </td>
                </tr>

                <tr>
                  <td class="d-flex align-center pb-2">
                    <VIcon
                      icon="tabler-cpu"
                      class="me-1"
                    />
                    <span>CPU</span>
                  </td>

                  <td class="text-right">
                    4 Cores
                  </td>
                </tr>

                <tr>
                  <td class="d-flex align-center pb-2">
                    <VIcon
                      icon="tabler-cpu-2"
                      class="me-1"
                    />
                    <span>Memory</span>
                  </td>

                  <td class="text-right">
                    2 GB
                  </td>
                </tr>
              </table>

              <VDivider class="my-3" />

              <div class="d-flex justify-space-between align-end">
                <div>
                  <IconBtn>
                    <VIcon
                      icon="tabler-share"
                      size="20"
                    />
                  </IconBtn>
                  <IconBtn>
                    <VIcon
                      icon="tabler-reload"
                      size="20"
                    />
                  </IconBtn>
                </div>

                <VSwitch v-model="serverSwitch" />
              </div>
            </VCardText>
          </VCard>
        </VTimelineItem>
        <!-- !SECTION -->

        <!-- SECTION Timeline Item: Location -->
        <VTimelineItem>
          <template #icon>
            <VIcon
              size="20"
              icon="tabler-map-pin"
              color="success"
            />
          </template>

          <VCard>
            <VCardText>
              <!-- 👉 Header -->
              <div class="d-flex justify-space-between align-center mb-1">
                <div class="d-flex align-end mb-3">
                  <VIcon
                    icon="tabler-map-pin"
                    class="me-1"
                  />

                  <span class="app-timeline-title">Location</span>
                </div>

                <VChip
                  color="error"
                  size="small"
                >
                  High
                </VChip>
              </div>

              <!-- 👉 Content -->
              <p class="app-timeline-text mb-0">
                Find location for the company celebration.
              </p>
              <p class="app-timeline-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>

              <VDivider />

              <div class="d-flex justify-space-between mt-4 flex-wrap">
                <div>
                  <IconBtn>
                    <VIcon
                      size="20"
                      icon="tabler-link"
                    />
                  </IconBtn>

                  <IconBtn>
                    <VIcon
                      size="20"
                      icon="tabler-message"
                    />
                  </IconBtn>
                  <IconBtn>
                    <VIcon
                      size="20"
                      icon="tabler-user"
                    />
                  </IconBtn>
                </div>

                <span class="app-timeline-meta">Due date: 15th Jan</span>
              </div>
            </VCardText>
          </VCard>
        </VTimelineItem>
        <!-- !SECTION -->
      </VTimeline>
    </VCardText>
  </VCard>
</template>
