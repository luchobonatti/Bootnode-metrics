// ** Next Imports
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Router } from 'next/router'
// ** Loader Import
import { ComponentType, ReactElement, ReactNode } from 'react'

import type { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import NProgress from 'nprogress'
// ** Config Imports
import { SWRConfig } from 'swr'

import SafeSuspense from '../components/global/SafeSuspense'
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'
import ThemeComponent from 'src/@core/theme/ThemeComponent'
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'
import themeConfig from 'src/configs/themeConfig'
// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'

// ** Contexts

// ** Utils Imports

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../../styles/globals.css'

export type Page<P = Record<string, unknown>> = NextPage<P> & {
  // You can disable whichever you don't need
  getLayout?: (page: ReactElement) => ReactNode
  layout?: ComponentType
}

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: Page
  emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Variables
  const getLayout = Component.getLayout ?? ((page: ReactNode) => <UserLayout>{page}</UserLayout>)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{`${themeConfig.templateName} - Material Design React Admin Template`}</title>
        <meta
          content={`${themeConfig.templateName} – Material Design React Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.`}
          name="description"
        />
        <meta
          content="Material Design, MUI, Admin Template, React Admin Template"
          name="keywords"
        />
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <SWRConfig
        value={{
          suspense: true,
        }}
      >
        <SafeSuspense>
          <SettingsProvider>
            <SettingsConsumer>
              {({ settings }) => {
                return (
                  <ThemeComponent settings={settings}>
                    {getLayout(<Component {...pageProps} />)}
                  </ThemeComponent>
                )
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </SafeSuspense>
      </SWRConfig>
    </CacheProvider>
  )
}

export default App
