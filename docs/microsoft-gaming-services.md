# Como instalar o Microsoft Gaming Services

O `Microsoft Gaming Services` é uma dependência da Microsoft usada por alguns jogos do `Online-Fix`, que utilizam recursos do Xbox para que o online funcione.

Aqui vai um guia de como instala-lo:

## Abra o menu Iniciar e pesquise por `powershell`, e execute o `Windows PowerShell` **como administrador**:

![Powershell](/assets/guias/powershell.png)

## Com o `Windows PowerShell` aberto, execute os seguintes comandos:

```powershell
get-appxpackage Microsoft.GamingServices
get-appxpackage Microsoft.GamingServices | remove-AppxPackage -allusers
start ms-windows-store://pdp/?productid=9MWPM2CQNLHN
```

::: info Execute 1 linha de comando por vez.
:::

Após a execução de todos os comandos, uma aba da Microsoft Store irá abrir.

## Clique em "Instalar" para instalar o `Microsoft Gaming Services`:

![Microsoft Gaming Services](/assets/guias/microsoft-gaming-services.png)

___

Após isso, o `Microsoft Gaming Services` estará instalado em seu computador.


