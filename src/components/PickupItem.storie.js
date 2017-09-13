import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import PickupItem from './PickupItem.vue'

storiesOf('PickupItem', module)
  .add('Join', () => ({
    components: { PickupItem },
    template: '<div id="q-app"><pickup-item @join="join" :meta="meta" :data="data"></pickup-item></div>',
    data () {
      return {
        data: {
          date: '12:00',
          description: 'hello'
        },
        meta: {
          isFull: false,
          isUserMember: false,
          showStoreDetail: false
        }
      }
    },
    methods: {
      join: action('join')
    }
  }))
  .add('Full', () => ({
    components: { PickupItem },
    template: '<div id="q-app"><pickup-item :meta="meta" :data="data"></pickup-item></div>',
    data () {
      return {
        data: {
          date: '00:00',
          description: 'hello'
        },
        meta: {
          isFull: true,
          isUserMember: false
        }
      }
    }
  }))
  .add('Leave', () => ({
    components: { PickupItem },
    template: '<div id="q-app"><pickup-item @leave="leave" :meta="meta" :data="data"></pickup-item></div>',
    data () {
      return {
        data: {
          date: '05:30 PM',
          description: 'hello'
        },
        meta: {
          isFull: false,
          isUserMember: true
        }
      }
    },
    methods: {
      leave: action('leave')
    }
  }))
