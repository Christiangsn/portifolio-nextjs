import React, { ReactNode } from 'react'

import styles from './header.module.scss'
import { NavLink } from './NavLink'

export function Header () {
  return (
    <div className={styles.headers} >
      <ul>
          <NavLink title="Home" path="/" />
      </ul>
    </div>
  )
}
