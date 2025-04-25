import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Hydra-Guide/',

  title: 'Hydra Guide',
  titleTemplate: 'Hydra Guide',
  description: 'Um guia completo de autoajuda para erros comuns entre os jogos baixados no Hydra Launcher.',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/Hydra-Guide/logo.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: 'Guias',
        collapsed: false,
        items: [
          { text: 'Restaurando arquivos no Windows Defender', link: '/restaurar-arquivos' },
          { text: 'Adicionando uma exclusão no Windows Defender', link: '/adicionar-exclusão' },
          { text: 'Aplicando o Fix-Repair', link: '/fix-repair' },
          { text: 'Habilitando extensões dos arquivos', link: '/extensões-dos-arquivos' },
          { text: 'Instalando o Microsoft Gaming Services', link: '/microsoft-gaming-services' },
          { text: 'Movendo a pasta do jogo para a raiz do seu disco', link: '/raiz-disco' }
        ]
      },
      {
        text: 'Erros',
        collapsed: false,
        items: [
          { text: 'Failed to load OnlineFix64.dll from the list', link: '/onlinefix64.dll.md' },
          { text: 'Failed to load Custom.dll from the list', link: '/custom.dll.md' },
          { text: 'EMP.dll não foi encontrado', link: '/emp.dll.md' },
          { text: 'UnityPlayer.dll não foi encontrado', link: '/unityplayer.dll.md' },
          { text: 'Failed to load xgameruntime.dll from the list', link: '/xgameruntime.dll.md' },
          { text: 'O aplicativo não pôde ser inicializado corretamente (0xc0000906)', link: '/0xc0000906' },
          { text: 'O aplicativo não pôde ser inicializado corretamente (0xc0000142)', link: '/0xc0000142' },
          { text: "'HarmonyLib HarmonyShadedState' threw an exception", link: '/harmonylib' },
          { text: 'You are having non-latin characters in your game path', link: '/non-latin-characters' },
          { text: 'Internal error 0x06: System error!', link: '/0x06' },
          { text: 'Steamworks Fix Activation', link: '/steamworks-activation' }
        ]
      }
    ],
    
    logo: '/logo.png',
    nav: [
      { text: 'Fontes de download', link: '/fontes-de-download' },
      { text: 'Central de ajuda oficial do Hydra', link: 'https://help.hydralauncher.gg/pt/help' }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/hydralaunchercommunity' },
      { icon: 'github', link: 'https://github.com/galinhaman/Hydra-Guide' }
    ],
    search: {
      provider: 'local'
    },

    footer: {
      message: 'Feito por galinhaman 🐔❤️'
    }
  },
  markdown: {
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    }
  }
})
