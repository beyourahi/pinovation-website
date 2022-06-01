import Head from "next/head";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <main>
    <Head>
      <title>Pinovation Tech LTD</title>
      <meta name="description" content="Official website of Pinovation Tech LTD" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
  </main>
);
