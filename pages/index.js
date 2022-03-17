import Head from 'next/head'
import Layout from "../components/Layout";
import RandomGif from "../components/RandomGif";

export default function Index() {
  return (
    <>
      <Head>
        <title>kaye-holanda</title>
        <meta name="description" content="kaye-holanda personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <RandomGif />
      </Layout>
    </>
  );
}
