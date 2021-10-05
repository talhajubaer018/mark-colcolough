import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/Layout'

library.add(fab, fas, faLongArrowAltRight)

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
