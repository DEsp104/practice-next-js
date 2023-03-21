import Layout from '../components/Layout'
// Below is the global style
import '@/styles/globals.css'




export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

// app.js wraps around all our page components and we can add a layout such as header, navigation, footer. This layout will be added to every components