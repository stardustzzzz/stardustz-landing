import Link from 'next/link'
import Head from 'next/head'

export const Layout = (props) => {
  return (
    <div

    >
      <Head>
        <title>Stardust DAO</title>
        <meta name="description" content="Stardust DAO App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>

      </header>
      <main>{props.children}</main>
      <footer></footer>
    </div>
  )
}
