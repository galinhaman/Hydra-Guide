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
  locales: {
    root: {
      label: 'Português 🇧🇷',
      lang: 'pt',
        themeConfig: {
          sidebar: [
            {
              text: 'Guias',
              collapsed: false,
              items: [
                { text: 'Restaurando arquivos no Windows Defender', link: '/restore-files' },
                { text: 'Adicionando uma exclusão no Windows Defender', link: '/add-exclusion' },
                { text: 'Aplicando o Fix-Repair', link: '/fix-repair' },
                { text: 'Habilitando extensões dos arquivos', link: '/file-extensions' },
                { text: 'Instalando o Microsoft Gaming Services', link: '/microsoft-gaming-services' },
                { text: 'Movendo a pasta do jogo para a raiz do seu disco', link: '/root-drive' }
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
              ],
          },
        ],
        logo: '/logo.png',
        nav: [
          { text: 'Fontes de download', link: '/download-sources' },
          { text: 'Central de Ajuda oficial do Hydra', link: 'https://help.hydralauncher.gg/pt/help' }
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
      }
    },
    en: {
      label: 'English 🇺🇸',
      lang: 'en',
      link: '/en/',
        themeConfig: {
          sidebar: [
            {
              text: 'Guides',
              collapsed: false,
              items: [
                { text: 'Restoring files in Windows Defender', link: '/en/restore-files' },
                { text: 'Adding an exclusion in Windows Defender', link: '/en/add-exclusion' },
                { text: 'Applying the Fix-Repair', link: '/en/fix-repair' },
                { text: 'Enabling file extensions', link: '/en/file-extensions' },
                { text: 'Installing Microsoft Gaming Services', link: '/en/microsoft-gaming-services' },
                { text: 'Moving the game folder to the root of your drive', link: '/en/root-drive' }
              ]
            },
            {
              text: 'Errors',
              collapsed: false,
              items: [
                { text: 'Failed to load OnlineFix64.dll from the list', link: '/en/onlinefix64.dll.md' },
                { text: 'Failed to load Custom.dll from the list', link: '/en/custom.dll.md' },
                { text: 'EMP.dll was not found', link: '/en/emp.dll.md' },
                { text: 'UnityPlayer.dll was not found', link: '/en/unityplayer.dll.md' },
                { text: 'Failed to load xgameruntime.dll from the list', link: '/en/xgameruntime.dll.md' },
                { text: 'The application was unable to start correctly (0xc0000906)', link: '/en/0xc0000906' },
                { text: 'The application was unable to start correctly (0xc0000142)', link: '/en/0xc0000142' },
                { text: "'HarmonyLib HarmonyShadedState' threw an exception", link: '/en/harmonylib' },
                { text: 'You are having non-latin characters in your game path', link: '/en/non-latin-characters' },
                { text: 'Internal error 0x06: System error!', link: '/en/0x06' },
                { text: 'Steamworks Fix Activation', link: '/en/steamworks-activation' }
              ],
          },
        ],
        logo: '/logo.png',
        nav: [
          { text: 'Download sources', link: '/en/download-sources' },
          { text: "Hydra's official Help Center", link: 'https://help.hydralauncher.gg/en/help' }
        ],

        socialLinks: [
          { icon: 'discord', link: 'https://discord.gg/hydralaunchercommunity' },
          { icon: 'github', link: 'https://github.com/galinhaman/Hydra-Guide' }
        ],
        search: {
          provider: 'local'
        },

        footer: {
          message: 'Made by galinhaman 🐔❤️'
        }
      }
    },
    ru: {
      label: 'Русский 🇷🇺',
      lang: 'ru',
      link: '/ru/',
        themeConfig: {
          sidebar: [
            {
              text: 'Guides',
              collapsed: false,
              items: [
                { text: 'Restoring files in Windows Defender', link: '/ru/restore-files' },
                { text: 'Adding an exclusion in Windows Defender', link: '/ru/add-exclusion' },
                { text: 'Applying the Fix-Repair', link: '/ru/fix-repair' },
                { text: 'Enabling file extensions', link: '/ru/file-extensions' },
                { text: 'Installing Microsoft Gaming Services', link: '/ru/microsoft-gaming-services' },
                { text: 'Moving the game folder to the root of your drive', link: '/ru/root-drive' }
              ]
            },
            {
              text: 'Errors',
              collapsed: false,
              items: [
                { text: 'Failed to load OnlineFix64.dll from the list', link: '/ru/onlinefix64.dll.md' },
                { text: 'Failed to load Custom.dll from the list', link: '/ru/custom.dll.md' },
                { text: 'EMP.dll was not found', link: '/ru/emp.dll.md' },
                { text: 'UnityPlayer.dll was not found', link: '/ru/unityplayer.dll.md' },
                { text: 'Failed to load xgameruntime.dll from the list', link: '/ru/xgameruntime.dll.md' },
                { text: 'The application was unable to start correctly (0xc0000906)', link: '/ru/0xc0000906' },
                { text: 'The application was unable to start correctly (0xc0000142)', link: '/ru/0xc0000142' },
                { text: "'HarmonyLib HarmonyShadedState' threw an exception", link: '/ru/harmonylib' },
                { text: 'You are having non-latin characters in your game path', link: '/ru/non-latin-characters' },
                { text: 'Internal error 0x06: System error!', link: '/ru/0x06' },
                { text: 'Steamworks Fix Activation', link: '/ru/steamworks-activation' }
              ],
          },
        ],
        logo: '/logo.png',
        nav: [
          { text: 'Источники для скачивания', link: '/en/download-sources' },
          { text: "Hydra's official Help Center", link: 'https://help.hydralauncher.gg/en/help' }
        ],

        socialLinks: [
          { icon: 'discord', link: 'https://discord.gg/hydralaunchercommunity' },
          { icon: 'github', link: 'https://github.com/galinhaman/Hydra-Guide' }
        ],
        search: {
          provider: 'local'
        },

        footer: {
          message: 'Made by galinhaman 🐔❤️'
        }
      }
    }
  },
})
