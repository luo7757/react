/* eslint-disable import/no-anonymous-default-export */
import PropTypes from 'prop-types'

export default {
  children: PropTypes.node,
  grounpDatas: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })),
  chooseDatas: PropTypes.arrayOf(PropTypes.string),
  info: PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }),
  func: PropTypes.func,
  choose: PropTypes.string
}