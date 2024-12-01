import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Dubhe Engine</span>,
  project: {
    link: 'https://github.com/0xobelisk/dubhe',
  },
  chat: {
    link: 'https://discord.gg/nveFk3p6za',
  },
  docsRepositoryBase: 'https://github.com/0xobelisk/dubhe-docs',
  footer: {
    content: 'Apache 2024 © Obelisk Labs.',
  },
  banner: {
    key: "v1-0-0-rc1 pre-mainnet released",
  // text: <a href="/docs/release-notes">🎉 v1.6.5 Released →</a>,
    content: <a href="/docs/release-notes">🎉 v1.0.0-rc1 pre-mainnet Released →</a>,
  },
}

export default config
