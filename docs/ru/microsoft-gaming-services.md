# Как установить Игровые Сервисы Microsoft?

`Игровые Сервисы Microsoft` Это зависимость Microsoft, используемая в некоторых играх от `Online-Fix` которые задействуют ресурсы Xbox для работы мультиплеера.

Инструкция как установить это:

## Откройте меню пуск и в поиске введите `powershell`, после, запустите `Windows PowerShell` **с правами администратора**:

![Powershell](assets/guides/powershell.png)

## После открытия `Windows PowerShell`, введите следующие комманды.:

```powershell
get-appxpackage Microsoft.GamingServices
get-appxpackage Microsoft.GamingServices | remove-AppxPackage -allusers
start ms-windows-store://pdp/?productid=9MWPM2CQNLHN
```

::: info Вводите комманды по одному, сверху вниз. 
:::

После ввода всех комманд, откроется окно с Microsoft Store.
## Нажмите "Установить" что бы установить `Игровые Сервисы Microsoft`:

![Microsoft Gaming Services](assets/guides/microsoft-gaming-services.png)

___

После этого, `Игровые Сервисы Microsoft` будут установлены на ваш компьютер.
