<template>
  <div class="hello">
    <h5>Vue.JS, Quasar and Vuex</h5>
    <ul>
      <li><a href="http://quasar-framework.org" target="_blank" rel="noopener">Docs</a></li>
      <li><a href="http://forum.quasar-framework.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://gitter.im/quasarframework/Lobby" target="_blank" rel="noopener">Gitter Chat</a></li>
      <li><a href="https://twitter.com/quasarframework" target="_blank" rel="noopener">Twitter</a></li>
    </ul>
    <group-list :groups="allGroups"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GroupList from './GroupList'

export default {
  components: {
    GroupList
  },
  computed: {
    ...mapGetters([
      'allGroups'
    ])
  },
  methods: {
    ...mapActions([
      'loadAllGroups'
    ])
  },
  mounted () {
    this.loadAllGroups()
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
