import { defineComponent, Fragment } from 'vue'
export default defineComponent({
  props: {
    add: {
      type: String
    }
  },
  setup (props) {
    return () => (
      <Fragment>
        {props.add}
      </Fragment>
    )
  }
})
