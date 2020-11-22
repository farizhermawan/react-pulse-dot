import * as React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'

const PulseDot = ({ color, ...otherProps }) => {
  let hexColor = '#1eb7ff'
  if (color === 'success') hexColor = '#1bb934'
  else if (color === 'warning') hexColor = '#f27212'
  else if (color === 'danger') hexColor = '#ed1c24'
  else if (color === 'info') hexColor = '#33ae9a'
  else if (color[0] === '#') hexColor = color

  return (
    <React.Fragment>
      <div className={styles.div} {...otherProps}>
        <FontAwesomeIcon
          icon={faCircle}
          size='2x'
          className={styles.dotBack}
          style={{ color: hexColor }}
        />
        <FontAwesomeIcon
          icon={faCircle}
          size='1x'
          className={styles.dotFront}
          style={{ color: hexColor }}
        />
      </div>
    </React.Fragment>
  )
}

PulseDot.propTypes = {
  color: PropTypes.string
}

PulseDot.defaultProps = {
  color: 'success'
}

export default PulseDot
