# Loop para solicitar o nome do módulo até que seja informado ou o usuário digite 'exit'
while ($true) {
	$moduleName = Read-Host "Digite o nome do módulo (ou 'exit' para sair)"
	if ([string]::IsNullOrWhiteSpace($moduleName)) {
		Write-Host "Por favor, digite um nome de módulo ou 'exit' para sair."
		continue
	}
	if ($moduleName -eq 'exit') {
		Write-Host "Saindo..."
		break
	}
	npm exec nest g resource $moduleName
	break
}
