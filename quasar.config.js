/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js


const { configure } = require('quasar/wrappers');

module.exports = configure(function (/* ctx */) {
  return {

    i18n: {
      locale: 'en-US',
      fallbackLocale: 'en-US',
      import: [
        'src/i18n'
      ],
      vueI18n: {
        fallbackLocale: 'en-US',
        messages: null
      },
      enableWarn: true,
      enableInSFC: true
    },
    
    eslint: {
      // fix: true,
      // include: [],
      // exclude: [],
      // rawOptions: {},
      warnings: true,
      errors: true
    },

    // https://v2.quasar.dev/quasar-cli-vite/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://v2.quasar.dev/quasar-cli-vite/boot-files
    boot: [
      'i18n'
    ],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#css
    css: [
      'app.scss'
    ],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      // 'mdi-v5',
      // 'fontawesome-v6',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons', // optional, you are not bound to it
    ],

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#build
    build: {
      target: {
        browser: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
        node: 'node16'
      },

      vueRouterMode: 'hash', // available values: 'hash', 'history'
      // vueRouterBase,
      // vueDevtools,
      // vueOptionsAPI: false,

      // rebuildCache: true, // rebuilds Vite/linter/etc cache on startup

      // publicPath: '/',
      // analyze: true,
      // env: {},
      // rawDefine: {}
      // ignorePublicFolder: true,
      // minify: false,
      // polyfillModulePreload: true,
      // distDir

      // extendViteConf (viteConf) {},
      // viteVuePluginOptions: {},

      
      // vitePlugins: [
      //   [ 'package-name', { ..options.. } ]
      // ]
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#devServer
    devServer: {
      // https: true
      open: true // opens browser window automatically
    },

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#framework
    framework: {
      config: {},

      // iconSet: 'material-icons', // Quasar icon set
      icons: {
        'search_icon': '<path fill="currentColor" d="M168 112a56 56 0 1 1-56-56a56 56 0 0 1 56 56Zm61.66 117.66a8 8 0 0 1-11.32 0l-50.06-50.07a88 88 0 1 1 11.32-11.31l50.06 50.06a8 8 0 0 1 0 11.32ZM112 184a72 72 0 1 0-72-72a72.08 72.08 0 0 0 72 72Z"></path>',
        'user_icon': '<path fill="currentColor" d="m42.2,27.58l.93-.37c.19.47.66.79,1.15.74.45-.04.84-.34.99-.79l.95.32c-.28.82-1.01,1.4-1.86,1.47-.05,0-.1,0-.16,0-.87,0-1.67-.55-2-1.37Zm-7.43,1.44s.05,0,.07,0c1.32-.04,2-1.1,2.07-1.22l-.86-.51s-.44.71-1.24.73c-.55.06-1.08-.29-1.35-.79l-.88.48c.44.81,1.28,1.31,2.19,1.31Zm4.51,8.64c2.92.05,5.57-1.86,6.47-4.7l-12.62.21c.93,2.64,3.4,4.44,6.16,4.49Zm25.13-1.42c0,13.77-11.2,24.97-24.97,24.97s-24.97-11.2-24.97-24.97,11.2-24.97,24.97-24.97,24.97,11.2,24.97,24.97Zm-34.49-6.29c0,3.37,1.05,6.42,2.74,8.65,0,0,0,0,0,0,.65.85,1.39,1.58,2.2,2.16,0,0,0,0,0,0,.26.18.52.35.79.5.02,0,.03.02.05.03.25.14.51.26.77.37.04.02.07.04.11.05.25.1.5.18.75.25.06.02.11.04.17.06.25.07.5.11.75.15.07.01.13.03.2.04.32.04.65.06.98.06s.66-.02.98-.06c.07,0,.13-.03.2-.04.25-.04.51-.09.75-.15.05-.01.11-.04.16-.05.26-.07.51-.16.76-.26.04-.02.08-.04.11-.05.26-.11.52-.23.77-.37.02-.01.04-.02.06-.04.27-.15.53-.32.78-.5,0,0,0,0,0,0,2.94-2.1,4.94-6.16,4.94-10.81,0-6.8-4.27-12.33-9.52-12.33s-9.52,5.53-9.52,12.33Zm22.45,17.18c0-3.62-2.14-6.73-5.22-8.16-1.92,2.64-4.67,4.31-7.72,4.31s-5.8-1.67-7.72-4.31c-3.08,1.43-5.22,4.54-5.22,8.16v9.88c3.75,2.34,8.19,3.7,12.94,3.7s9.18-1.36,12.94-3.7v-9.88Zm-13.02.07c-.43,0-.78.35-.78.78s.35.78.78.78.78-.35.78-.78-.35-.78-.78-.78Zm0,3.68c-.43,0-.78.35-.78.78s.35.78.78.78.78-.35.78-.78-.35-.78-.78-.78Zm0,3.68c-.43,0-.78.35-.78.78s.35.78.78.78.78-.35.78-.78-.35-.78-.78-.78Z"></path>'
      },
      // lang: 'en-US', // Quasar language pack



      // For special cases outside of where the auto-import strategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],

      // Quasar plugins
      plugins: []
    },

    // animations: 'all', // --- includes all animations
    // https://v2.quasar.dev/options/animations
    animations: [],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#property-sourcefiles
    // sourceFiles: {
    //   rootComponent: 'src/App.vue',
    //   router: 'src/router/index',
    //   store: 'src/store/index',
    //   registerServiceWorker: 'src-pwa/register-service-worker',
    //   serviceWorker: 'src-pwa/custom-service-worker',
    //   pwaManifestFile: 'src-pwa/manifest.json',
    //   electronMain: 'src-electron/electron-main',
    //   electronPreload: 'src-electron/electron-preload'
    // },

    // https://v2.quasar.dev/quasar-cli-vite/developing-ssr/configuring-ssr
    ssr: {
      // ssrPwaHtmlFilename: 'offline.html', // do NOT use index.html as name!
                                          // will mess up SSR

      // extendSSRWebserverConf (esbuildConf) {},
      // extendPackageJson (json) {},

      pwa: false,

      // manualStoreHydration: true,
      // manualPostHydrationTrigger: true,

      prodPort: 3000, // The default port that the production server should use
                      // (gets superseded if process.env.PORT is specified at runtime)

      middlewares: [
        'render' // keep this as last one
      ]
    },

    // https://v2.quasar.dev/quasar-cli-vite/developing-pwa/configuring-pwa
    pwa: {
      workboxMode: 'generateSW', // or 'injectManifest'
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
      // useFilenameHashes: true,
      // extendGenerateSWOptions (cfg) {}
      // extendInjectManifestOptions (cfg) {},
      // extendManifestJson (json) {}
      // extendPWACustomSWConf (esbuildConf) {}
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/configuring-electron
    electron: {
      // extendElectronMainConf (esbuildConf)
      // extendElectronPreloadConf (esbuildConf)

      // specify the debugging port to use for the Electron app when running in development mode
      inspectPort: 5858,

      bundler: 'packager', // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: 'onewater'
      }
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-browser-extensions/configuring-bex
    bex: {
      contentScripts: [
        'my-content-script'
      ],

      // extendBexScriptsConf (esbuildConf) {}
      // extendBexManifestJson (json) {}
    }
  }
});
