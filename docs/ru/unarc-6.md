# ISDone.dll - An error occurred while unpacking! Unarc.dll returned an error code: -6

![Unarc.dll error code: -6](assets/errors/unarc-6.png)

Эта ошибка появляется, когда в системе отсутствует одна из версий Visual C++. Вам необходимо [установить common redistributables](common-redistributables.md).

Также [переместите папку с установщиком в корнень диска](root-drive.md) и выберите установку игры туда же:

![Installation Directory on Disk Root](assets/errors/unarc-6-root.png)

После этого запустите установку снова.

::: tip Если это игра от FitGirl, также включите ограничение использования оперативной памяти в начале установки:

![RAM Limiter](assets/errors/2gb-ram.png)

:::

Если ошибка сохраняется, попробуйте установить игру из другого источника, который предоставляет игры [уже в установленном](download-sources.html#pre-installed) или [портативном](download-sources.html#portable) формате.