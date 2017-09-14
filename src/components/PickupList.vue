<template>
  <div>
    <div class="topbar">
      <h3 class="md-title">
        <i class="icon fa fa-shopping-basket" aria-hidden="true"></i>
        Pickups
      </h3>
    </div>
    <div>
      <PickupItem v-for="pickup in pickups"
                  @join="join"
                  :pickup="pickup"
                  :key="pickup.id">
        <q-btn v-if="options.showStore" href="google.de">Store</q-btn>
      </PickupItem>
    </div>
  </div>
</template>

<script>
import { QCardTitle, QCard, QCardMain, QCardSeparator, QCardActions, QBtn, QIcon } from 'quasar'
import PickupItem from './PickupItem.vue'

export default {
  props: {
    options: {
      required: false,
      default () {
        return {
          showStore: false // either time or store
        }
      }
    },
    pickups: {
      required: true
    }
  },
  components: {
    QCardTitle, QCard, QCardMain, QCardSeparator, QCardActions, QBtn, QIcon, PickupItem
  },
  methods: {
    join () {
      console.log('join')
    }
  }
}
</script>

<style scoped lang="stylus">
</style>