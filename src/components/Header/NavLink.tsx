import React from 'react'
import Link from 'next/link'

import './header.module.scss'

type Props = {
    title: string;
    path: string;
  }

export function NavLink ({ title, path }: Props) {
  return (
    <Link href={path}>
        <a> {title} </a>
    </Link>
  )
}
