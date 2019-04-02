class Atividade {
	titulo
	nomeResponsavel;
	prazo;
	situacao;

	constructor(titulo, nomeResponsavel, prazo){
		this.titulo = titulo;
		this.nomeResponsavel = nomeResponsavel;
		this.prazo = prazo;
		this.situacao = 0;
	}

}

class Projeto {
    nome;
    atividades= [];

    constructor(nome){
		this.nome = nome;
	}
}

var listProjetos = [];
var projetoListado = -1;

function addProjeto()  {

	var projeto = new Projeto($("#nome-projeto").val());
	var indexProjeto = $("#index-projeto").val();
	console.log(indexProjeto);
	if(indexProjeto == null ||  indexProjeto == "") {
		listProjetos.push(projeto);
		$("#list-projetos").append(prepararProjeto(projeto, (listProjetos.length-1)));
	} else if (indexProjeto >=0 && indexProjeto < listProjetos.length) {
		listProjetos[indexProjeto].nome = projeto.nome;
		atualizarListagemProjetos();
	}
	

	$("#nome-projeto").val("");
	$("#modalAddProjeto").modal('hide');

}

function editarProjeto (indexProjeto) {

	$("#modalAddProjeto").modal('show');

	$("#nome-projeto").val(listProjetos[indexProjeto].nome);
	$("#index-projeto").val(indexProjeto);

}

function deletarProjeto(indexProjeto)  {

	listProjetos.splice(indexProjeto, 1);
	atualizarListagemProjetos()

}

function visualizarAtividades(indexProjeto) {

	$("#titulo-nome-projeto").html(listProjetos[indexProjeto].nome);
	atualizarListagemAtividades(indexProjeto);
	projetoListado = indexProjeto;
}

function addAtividade()  {


	if (projetoListado == -1) {
		alert('Primeiro você precisa visualizar um projeto.') ;
	} else {

		var atividade = new Atividade($("#input-titulo-atividade").val(), $("#input-responsavel-atividade").val(), $("#input-prazo-atividade").val());
		var indexAtividade = $("#index-atividade").val();

		if(indexAtividade == null || indexAtividade == "") {

			listProjetos[projetoListado].atividades.push(atividade);
			atualizarListagemAtividades(projetoListado);

		} else if (indexProjeto >=0 && indexProjeto < listProjetos.length) {
			listProjetos[projetoListado].atividades[indexAtividade].titulo = atividade.titulo;
			listProjetos[projetoListado].atividades[indexAtividade].nomeResponsavel = atividade.nomeResponsavel;
			listProjetos[projetoListado].atividades[indexAtividade].prazo = atividade.prazo;
			listProjetos[projetoListado].atividades[indexAtividade].situacao = atividade.situacao;
			atualizarListagemProjetos(projetoListado);
		}
		
		$("#input-titulo-atividade").val("");
		$("#input-responsavel-atividade").val("");
		$("#input-prazo-atividade").val("");
		$("#index-atividade").val("");

	}
	
	$("#modalAddAtividade").modal('hide');

}

function atualizarListagemProjetos() {

	$("#list-projetos").html('');

	$.each(listProjetos, function( index, projeto ) {
		$("#list-projetos").append(prepararProjeto(projeto, index));
	});
}

function atualizarListagemAtividades(indexProjeto) {

	$("#list-afazer").html('');
	$("#list-fazendo").html('');
	$("#list-feita").html('');


	$.each(listProjetos[indexProjeto].atividades, function( index, atividade ) {

		if(atividade.situacao == 0) {
			$("#list-afazer").append(prepararAtividade(atividade, index));
		} else if (atividade.situacao == 1) {
			$("#list-fazendo").append(prepararAtividade(atividade, index));
		} else if (atividade.situacao == 2) {
			$("#list-feita").append(prepararAtividade(atividade, index));
		}
		
	});
}

function prepararProjeto(projeto, indexProjeto) {

	return '<div class="col-4 m-4 border border-blue rounded" style="min-width: 350px; max-width: 350px;"><div class="card-body"><header class="row p-0">'+
	'<h4 class="card-title col-7">' + projeto.nome + '</h4><div class="col-5 p-0 text-right"><button type="button" onclick="deletarProjeto('+indexProjeto+')" class=" btn btn-primary p-1"><i class="fas fa-trash-alt text-danger"></i></button>'+
	'</div></header><div class="row justify-content-center">'+
	'<button class="btn btn-primary col-5 mr-1" onclick="visualizarAtividades('+indexProjeto+')" ><i class="fas fa-eye"></i> ver</button>'+
	'<button class="btn btn-primary col-5" onclick="editarProjeto('+indexProjeto+')" ><i class="fas fa-edit"></i> Editar</button></div></div></div>';

}


function prepararAtividade(atividade, indexAtividade) {

	return '<div draggable="true" ondragstart="drag(event)" id="'+indexAtividade+'" class="row border atividade"><div class="col-12" ><header class="row p-0"><span clas="titulo-tarefa">'+ atividade.titulo +'</span><div class="col-5 p-0 text-right">'+
	'<a href="#" class="p-1"><i class="fas fa-edit"></i></a><a href="#" class="p-1"><i class="fas fa-trash-alt text-danger"></i></a></div></header>'+
	'<div class="row text-secondary data-responsavel">'+atividade.prazo+' - '+atividade.nomeResponsavel+'</div></div></div>';

}

function atualizarSituacaoAtividade(indexAtividade, idLista) {

	if (idLista == "list-afazer") {
		listProjetos[projetoListado].atividades[indexAtividade].situacao = 0;
	} else if (idLista == "list-fazendo") {
		listProjetos[projetoListado].atividades[indexAtividade].situacao = 1;
	} else if (idLista == "list-feita") {
		listProjetos[projetoListado].atividades[indexAtividade].situacao = 2;
	}

	atualizarListagemAtividades(projetoListado);

}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, lista) {

	var indexAtividade = ev.dataTransfer.getData("text");
	atualizarSituacaoAtividade(indexAtividade, $(lista).attr('id'));
  
}