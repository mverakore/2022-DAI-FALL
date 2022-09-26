// import '../styles/globals.css'
import * as eva from '@eva-design/eva';
import Main from '../screens/main';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

function MyApp({ Component, pageProps }) {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Main></Main>
    </ApplicationProvider>
  )
}

export default MyApp
