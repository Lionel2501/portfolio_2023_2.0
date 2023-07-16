// /** @type {import('next').NextConfig} */
// const { i18n } = require("next-i18next");

module.exports = {
  env: {
    PUBLIC_URL: "",
    NEXT_PUBLIC_ALLOWMULTILENGUAGE : false, //Para activar el multilenguaje, se tiene que poner true
    NEXT_PUBLIC_DEFAULT_LANG: process.env.NEXT_PUBLIC_DEFAULT_LANG
  },
  i18n: {
    locales: ['es', 'en', 'pt'],
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LANG,
    localeDetection: true,
  },
  nextConfig: {
    reactStrictMode: true
  }
}
