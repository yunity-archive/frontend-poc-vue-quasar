<template>
  <div class="hello">
    <h5>Vue.JS, Quasar and Vuex</h5>
    <ul>
      <li><a href="http://quasar-framework.org" target="_blank" rel="noopener">Docs</a></li>
      <li><a href="http://forum.quasar-framework.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://gitter.im/quasarframework/Lobby" target="_blank" rel="noopener">Gitter Chat</a></li>
      <li><a href="https://twitter.com/quasarframework" target="_blank" rel="noopener">Twitter</a></li>
    </ul>
    <group-list :groups="groups"/>
  </div>
</template>

<script>
import GroupList from './GroupList'

export default {
  groups: [],
  components: {
    GroupList
  },
  computed: {
    groups () {
      return this.$store.getters.allGroups
    }
  },
  mounted () {
    this.$store.dispatch('loadAllGroups')
  }
}
</script>

<style scoped lang="stylus">
@import '~variables'

.hello
  margin-top 50px
  a
    color #35495E

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px
</style>
