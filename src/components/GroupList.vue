<template>
  <div>
    <group-card v-for="g in groups" :key="g.id" :group="g" />
  </div>
</template>

<script>
import GroupCard from './GroupCard'

export default {
  props: {
    groups: {
      required: true
    }
  },
  components: {
    GroupCard
  }
}
</script>

<style scoped>
</style>
