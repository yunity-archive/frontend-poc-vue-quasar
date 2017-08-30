<template>
  <q-card>
    <q-card-title>
      {{ group.name }}
    </q-card-title>
    <q-card-separator v-if="group.public_description" />
    <q-card-main v-if="group.public_description">
      {{ group.public_description }}
    </q-card-main>
    <q-card-actions class="justify-end">
      <q-btn class="float-right">
        <q-icon name="flight takeoff" />
        &nbsp;Join
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { QCardTitle, QCard, QCardMain, QCardSeparator, QCardActions, QBtn, QIcon } from 'quasar'

export default {
  props: {
    group: {
      required: true
    }
  },
  components: {
    QCardTitle, QCard, QCardMain, QCardSeparator, QCardActions, QBtn, QIcon
  }
}
</script>

<style scoped lang="stylus">
</style>
