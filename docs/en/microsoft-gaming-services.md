# How to install Microsoft Gaming Services

`Microsoft Gaming Services` is a Microsoft dependency used by some `Online-Fix` games that use Xbox resources for multiplayer to work.

Here is a guide on how to install it:

## Open the Start menu and search for `powershell`, and run `Windows PowerShell` **as administrator**:

![Powershell](assets/guides/powershell.png)

## With `Windows PowerShell` open, run the following commands:

```powershell
get-appxpackage Microsoft.GamingServices
get-appxpackage Microsoft.GamingServices | remove-AppxPackage -allusers
start ms-windows-store://pdp/?productid=9MWPM2CQNLHN
```

::: info Run 1 command line at a time. 
:::

After executing all the commands, a Microsoft Store tab will open.

## Click "Install" to install `Microsoft Gaming Services`:

![Microsoft Gaming Services](assets/guides/microsoft-gaming-services.png)

___

After that, `Microsoft Gaming Services` will be installed on your computer.