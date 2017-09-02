import { storiesOf } from '@storybook/vue'

import GroupCard from './GroupCard.vue'

storiesOf('GroupCard', module)
  .add('Default', () => ({
    components: { GroupCard },
    template: '<div id="q-app"><group-card :group="group"></group-card></div>',
    data () {
      return {
        group: {
          name: 'bla',
          public_description: 'hello'
        }
      }
    }
  }))
  .add('with long text', () => ({
    components: { GroupCard },
    template: '<div id="q-app"><group-card :group="group"></group-card></div>',
    data () {
      return {
        group: {
          name: 'blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla',
          public_description: 'helloblablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla'
        }
      }
    }
  }))
