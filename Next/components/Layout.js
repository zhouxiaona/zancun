import Head from 'next/head'
export default ({ title, children }) =>
  (<div>
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
    </Head>
    {children}
  </div>)