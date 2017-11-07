var botao = $("#botao-enviar");


function limpaInformacoesUsuario(){
	$("#primeiro-nome-usuario").val("");
	$("#ultimo-nome-usuario").val("");
	$("#email-usuario").val("");
	$("#idade-usuario").val("");
}

$(".botao-excluir").click(excluirUsuario);
//botaoExcluirUsuario.click(excluirUsuario);

botao.on("click", function(){
	$(".mostra-usuarios").css("visibility", "visible");

	var nome = $("#primeiro-nome-usuario").val();
	var sobrenome = $("#ultimo-nome-usuario").val();
	var email = $("#email-usuario").val();
	var idade = $("#idade-usuario").val();

	limpaInformacoesUsuario();

	var lista = $(".mostra-usuarios").find("ul");
	var linha = montaUsuario(nome, sobrenome, email, idade);
	lista.append(linha);

});


function montaUsuario(nome, sobrenome, email, idade){

	var item = $("<li>").addClass("usuario");
	var cabecalhoItem = $("<div>").addClass("collapsible-header");
	var iconeCabecalhoUsuario = $("<i>").addClass("material-icons").text("person");
	var nomeCabecalhoUsuario = $("<span>").text(nome + " " + sobrenome);
	var elementoExcluir = $("<span>").addClass("badge");
	var linkExcluir = $("<a>").attr("href", "#").addClass("botao-excluir");
	var iconeExcluirUsuario = $("<i>").addClass("material-icons").text("delete");

	var corpoItem = $("<div>").addClass("collapsible-body");
	var textoIdade = $("<p>").text("Idade: " + idade);
	var textoEmail = $("<p>").text("Email: " + email);

	//implementar o botao de excluir no collapsible
	corpoItem.append(textoIdade);
	corpoItem.append(textoEmail);

	cabecalhoItem.append(iconeCabecalhoUsuario);
	cabecalhoItem.append(nomeCabecalhoUsuario);

	cabecalhoItem.append(elementoExcluir); //Teste apenas
	elementoExcluir.append(linkExcluir);
	linkExcluir.append(iconeExcluirUsuario);

	item.append(cabecalhoItem);
	item.append(corpoItem);

	return item;
		
}

function excluirUsuario(){
	event.preventDefault();
	$(this).parent().parent().parent().remove();
}