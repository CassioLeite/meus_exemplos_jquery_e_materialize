var botao = $("#botao-enviar");

function limpaInformacoesUsuario(){
	$("#primeiro-nome-usuario").val("");
	$("#ultimo-nome-usuario").val("");
	$("#email-usuario").val("");
	$("#idade-usuario").val("");
}

botao.on("click", function(){

	var nome = $("#primeiro-nome-usuario").val();
	var sobrenome = $("#ultimo-nome-usuario").val();
	var email = $("#email-usuario").val();
	var idade = $("#idade-usuario").val();

	limpaInformacoesUsuario();
	var corpoElemento = $(".mostra-usuarios").find("ul");
	var linha = montaUsuario(nome, sobrenome, email, idade);
	corpoElemento.append(linha);
});

function montaUsuario(nome, sobrenome, email, idade){
	var item = $("<li>");
	var cabecalhoItem = $("<div>").addClass("collapsible-header");
	var iconeCabecalhoUsuario = $("<i>").addClass("material-icons").text("person");
	var nomeCabecalhoUsuario = $("<span>").text(nome + " " + sobrenome);

	var corpoItem = $("<div>").addClass("collapsible-body");
	var textoIdade = $("<p>").text("Idade: " + idade);
	var textoEmail = $("<p>").text("Email: " + email);

	corpoItem.append(textoIdade);
	corpoItem.append(textoEmail);

	cabecalhoItem.append(iconeCabecalhoUsuario);
	cabecalhoItem.append(nomeCabecalhoUsuario);
	item.append(cabecalhoItem);
	item.append(corpoItem);

	return item;
}