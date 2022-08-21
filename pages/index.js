import Head from 'next/head';
import Header from '../components/Header.js';
import Nav from '../components/Nav'

function Home() {

  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      <Nav />
      {/* Results */}

    </div>
  )
}
export default Home;
