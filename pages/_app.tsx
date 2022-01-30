import React from 'react'
import { AppProps } from 'next/app'

export const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp