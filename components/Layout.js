import Link from 'next/link'
import Head from 'next/head'

export const Layout = (props) => {
  return (
    <div
      style={{
        margin: '3rem',
      }}
    >
      <Head>
        <title>Stardust DAO</title>
        <meta name="description" content="Stardust DAO App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{props.children}</main>
    </div>
  )
}
