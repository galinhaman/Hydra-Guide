# ISDone.dll - An error occurred while unpacking! Unarc.dll returned an error code: -1/-12

![Unarc.dll error code: -1](assets/errors/unarc-1.png)

![Unarc.dll error code: -12](assets/errors/unarc-12.png)

Эта ошибка появляется, когда в системе отсутствует одна из версий Visual C++. Вам необходимо [установить common redistributables](common-redistributables.md).

Кроме того, рекомендуется создать отдельную папку для установки игр, [добавить её в исключения антивируса](add-exclusion.md) и выбрать её при установке.:

![Exclusion](assets/errors/unarc-1-12-exclusion.png)

![Installation directory](assets/errors/unarc-1-12-installation-directory.png)

После этого запустите установку снова.

::: tip Если это игра от FitGirl, также включите ограничение использования оперативной памяти в начале установки:

![RAM limiter](assets/errors/2gb-ram.png)

:::

Если ошибка сохраняется, попробуйте установить игру из другого источника, который предоставляет игры [уже в установленном](download-sources.html#pre-installed) или [портативном](download-sources.html#portable) формате.