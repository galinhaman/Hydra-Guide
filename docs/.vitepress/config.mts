import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',

  title: 'Hydra Guide',
  titleTemplate: 'Hydra Guide',
  description: 'Um guia completo de autoajuda para erros comuns entre os jogos baixados no Hydra Launcher.',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]
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
                { text: 'Desativando o Controle Inteligente de Aplicativos', link: '/smart-app-control' },
                { text: 'Aplicando o Fix-Repair', link: '/fix-repair' },
                { text: 'Habilitando extensões dos arquivos', link: '/file-extensions' },
                { text: 'Instalando o Microsoft Gaming Services', link: '/microsoft-gaming-services' },
                { text: 'Movendo a pasta do jogo para a raiz do seu disco', link: '/root-drive' },
                { text: 'Instalando os componentes recomendados', link: '/common-redistributables' },
                { text: 'Adicionando um jogo na Steam e habilitando o Steam Input', link: '/steam-input' }
              ]
            },
            {
              text: 'Erros',
              collapsed: false,
              items: [
                { text: 'Failed to load OnlineFix64.dll from the list', link: '/onlinefix64.dll.md' },
                { text: 'Failed to load Custom.dll from the list', link: '/custom.dll.md' },
                { text: 'Failed to load xgameruntime.dll from the list', link: '/xgameruntime.dll.md' },
                { text: 'Error code: 4556/4557', link: '/4556.md' },
                { text: 'Error status 0xc0e9007/0xc0e9008', link: '/0xc0e90007.md' },
                { text: 'EMP.dll não foi encontrado', link: '/emp.dll.md' },
                { text: 'UnityPlayer.dll não foi encontrado', link: '/unityplayer.dll.md' },
                { text: 'uplay_r1_loader64.dll não foi encontrado', link: '/uplay_r1_loader64.dll.md' },
                { text: 'MSVCR100/110/120/140.dll não foi encontrado', link: '/msvcr1xx.dll.md' },
                { text: 'XINPUT1_3.dll não foi encontrado', link: '/xinput1_3.dll.md' },
                { text: 'The EOS SDK could not be found. Please reinstall the application', link: '/eos-sdk.md' },
                { text: 'O aplicativo não pôde ser inicializado corretamente (0xc0000906)', link: '/0xc0000906' },
                { text: 'O aplicativo não pôde ser inicializado corretamente (0xc0000142)', link: '/0xc0000142' },
                { text: 'Falha na inicialização do aplicativo devido a configuração lado a lado incorreta.', link: '/side-by-side' },
                { text: 'Unarc.dll returned an error code: -1/-12', link: '/unarc-1-12' },
                { text: 'Unarc.dll returned an error code: -6', link: '/unarc-6' },
                { text: 'Unarc.dll returned an error code: -11', link: '/unarc-11' },
                { text: 'Download failed: File not found (404)', link: '/404' },
                { text: "'HarmonyLib HarmonyShadedState' threw an exception", link: '/harmonylib' },
                { text: 'You are having non-latin characters in your game path', link: '/non-latin-characters' },
                { text: 'Internal error 0x06: System error!', link: '/0x06' },
                { text: 'Steam is not launched.', link: '/steam-is-not-launched' },
                { text: 'RegOpenKeyExW failed. Function result: 2 Error code: 0', link: '/regopenkeyexw' },
                { text: 'Steamworks Fix Activation', link: '/steamworks-activation' },
                { text: 'The fix is made by online-fix.me.', link: '/online-fix.me.md' },
                { text: 'Não é Possível Concluir o Assistente de Extração de Arquivo', link: '/extracting' },
                { text: 'Tela de instalação presa com uma imagem do jogo e o texto "Dodi Repacks"', link: '/dodi-repacks' }
              ],
          },
        ],
        logo: '/logo.png',
        nav: [
          { text: 'Conquistas', link: 'https://youtu.be/WJq7ZmaaGc8' },
          { text: 'Fontes de download', link: '/download-sources' },
          { text: 'Central de Ajuda oficial do Hydra', link: 'https://hydra.workwonders.app/knowledge' }
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
                { text: 'Disabling Smart App Control', link: '/en/smart-app-control' },
                { text: 'Applying the Fix-Repair', link: '/en/fix-repair' },
                { text: 'Enabling file extensions', link: '/en/file-extensions' },
                { text: 'Installing Microsoft Gaming Services', link: '/en/microsoft-gaming-services' },
                { text: 'Moving the game folder to the root of your drive', link: '/en/root-drive' },
                { text: 'Installing the common redistributables', link: '/en/common-redistributables' },
                { text: 'Adding a game to Steam and enabling Steam Input', link: '/en/steam-input' }
              ]
            },
            {
              text: 'Errors',
              collapsed: false,
              items: [
                { text: 'Failed to load OnlineFix64.dll from the list', link: '/en/onlinefix64.dll.md' },
                { text: 'Failed to load Custom.dll from the list', link: '/en/custom.dll.md' },
                { text: 'Failed to load xgameruntime.dll from the list', link: '/en/xgameruntime.dll.md' },
                { text: 'Error code: 4556/4557', link: '/en/4556.md' },
                { text: 'Error status 0xc0e90007/0xc0e9008', link: '/en/0xc0e90007.md' },
                { text: 'EMP.dll was not found', link: '/en/emp.dll.md' },
                { text: 'UnityPlayer.dll was not found', link: '/en/unityplayer.dll.md' },
                { text: 'uplay_r1_loader64.dll was not found', link: '/en/uplay_r1_loader64.dll.md' },
                { text: 'MSVCR100/110/120/140.dll was not found', link: '/en/msvcr1xx.dll.md' },
                { text: 'XINPUT1_3.dll was not found', link: '/en/xinput1_3.dll.md' },
                { text: 'The EOS SDK could not be found. Please reinstall the application', link: '/en/eos-sdk.md' },
                { text: 'The application was unable to start correctly (0xc0000906)', link: '/en/0xc0000906' },
                { text: 'The application was unable to start correctly (0xc0000142)', link: '/en/0xc0000142' },
                { text: 'The application has failed to start because its side-by-side configuration is incorrect', link: '/en/side-by-side' },
                { text: 'Unarc.dll returned an error code: -1/-12', link: '/en/unarc-1-12' },
                { text: 'Unarc.dll returned an error code: -6', link: '/en/unarc-6' },
                { text: 'Unarc.dll returned an error code: -11', link: '/en/unarc-11' },
                { text: 'Download failed: File not found (404)', link: '/en/404' },
                { text: "'HarmonyLib HarmonyShadedState' threw an exception", link: '/en/harmonylib' },
                { text: 'You are having non-latin characters in your game path', link: '/en/non-latin-characters' },
                { text: 'Internal error 0x06: System error!', link: '/en/0x06' },
                { text: 'Steam is not launched.', link: '/en/steam-is-not-launched' },
                { text: 'RegOpenKeyExW failed. Function result: 2 Error code: 0', link: '/en/regopenkeyexw' },
                { text: 'Steamworks Fix Activation', link: '/en/steamworks-activation' },
                { text: 'The fix is made by online-fix.me.', link: '/en/online-fix.me.md' },
                { text: 'Cannot Complete the Archive Extraction Wizard', link: '/en/extracting' },
                { text: 'Installation screen stuck with a screenshot of the game and the text "Dodi Repacks"', link: '/en/dodi-repacks' }
              ],
          },
        ],
        logo: '/logo.png',
        nav: [
          { text: 'Achievements', link: 'https://youtu.be/WJq7ZmaaGc8' },
          { text: 'Download sources', link: '/en/download-sources' },
          { text: "Hydra's official Help Center", link: 'https://hydra.workwonders.app/knowledge' }
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
              text: 'Руководства',
              collapsed: false,
              items: [
                { text: 'Восстановление файлов в Windows Defender', link: '/ru/restore-files' },
                { text: 'Добавление исключения в Windows Defender', link: '/ru/add-exclusion' },
                { text: 'Отключение Smart App Control', link: '/ru/smart-app-control' },
                { text: 'Применение Fix-Repair', link: '/ru/fix-repair' },
                { text: 'Включение отображения расширений файлов', link: '/ru/file-extensions' },
                { text: 'Установка Игровых Сервисов Microsoft', link: '/ru/microsoft-gaming-services' },
                { text: 'Перемещение папки с игрой в корень диска', link: '/ru/root-drive' },
                { text: 'Установка Common redistributables', link: '/ru/common-redistributables' },
                { text: 'Добавление игры в Steam и включение Steam Input', link: '/ru/steam-input' }
              ]
            },
            {
              text: 'Ошибки',
              collapsed: false,
              items: [
                { text: 'Failed to load OnlineFix64.dll from the list', link: '/ru/onlinefix64.dll.md' },
                { text: 'Failed to load Custom.dll from the list', link: '/ru/custom.dll.md' },
                { text: 'Failed to load xgameruntime.dll from the list', link: '/ru/xgameruntime.dll.md' },
                { text: 'Error code: 4556/4557', link: '/ru/4556.md' },
                { text: 'Error status 0xc0e90007/0xc0e90008', link: '/ru/0xc0e90007.md' },
                { text: 'EMP.dll не обнаружена', link: '/ru/emp.dll.md' },
                { text: 'UnityPlayer.dll не обнаружена', link: '/ru/unityplayer.dll.md' },
                { text: 'uplay_r1_loader64.dll не обнаружена', link: '/ru/uplay_r1_loader64.dll.md' },
                { text: 'MSVCR100/110/120/140.dll не обнаружена', link: '/ru/msvcr1xx.dll.md' },
                { text: 'XINPUT1_3.dll не обнаружена', link: '/ru/xinput1_3.dll.md' },
                { text: 'The EOS SDK could not be found. Please reinstall the application', link: '/ru/eos-sdk.md' },
                { text: 'Ошибка при запуске приложения (0xc0000906)', link: '/ru/0xc0000906' },
                { text: 'Ошибка при запуске приложения (0xc0000142)', link: '/ru/0xc0000142' },
                { text: 'Не удалось запустить приложение, поскольку его параллельная конфигурация неправильна', link: '/ru/side-by-side' },
                { text: 'Unarc.dll returned an error code: -1/-12', link: '/ru/unarc-1-12' },
                { text: 'Unarc.dll returned an error code: -6', link: '/ru/unarc-6' },
                { text: 'Unarc.dll returned an error code: -11', link: '/ru/unarc-11' },
                { text: 'Download failed: File not found (404)', link: '/ru/404' },
                { text: "'HarmonyLib HarmonyShadedState' threw an exception", link: '/ru/harmonylib' },
                { text: 'You are having non-latin characters in your game path', link: '/ru/non-latin-characters' },
                { text: 'Internal error 0x06: System error!', link: '/ru/0x06' },
                { text: 'Steam is not launched.', link: '/ru/steam-is-not-launched' },
                { text: 'RegOpenKeyExW failed. Function result: 2 Error code: 0', link: '/ru/regopenkeyexw' },
                { text: 'Steamworks Fix Activation', link: '/ru/steamworks-activation' },
                { text: 'The fix is made by online-fix.me.', link: '/ru/online-fix.me.md' },
                { text: 'Невозможно завершить извлечения архива', link: '/ru/extracting' },
                { text: 'Экран установки завис на изображении игры с надписью "Dodi Repacks"', link: '/ru/dodi-repacks' }
              ],
          },
        ],
        logo: '/logo.png',
        nav: [
          { text: 'Достижения', link: 'https://youtu.be/WJq7ZmaaGc8' },
          { text: 'Источники для скачивания', link: '/ru/download-sources' },
          { text: "Hydra's official Help Center", link: 'https://hydra.workwonders.app/knowledge' }
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
    themeConfig: {
      search: {
        provider: 'local'
    }
  }
})
