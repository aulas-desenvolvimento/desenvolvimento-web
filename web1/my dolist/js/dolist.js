class Atividade {
	nomeResponsavel;
	prazo;
	situacao;

	constructor(nomeResponsavel, prazo){
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

function addProjeto()  {

	var projeto = new Projeto($("#nome-projeto").val());
	var indexProjeto = $("#index-projeto").val();

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


function atualizarListagemProjetos() {

	$("#list-projetos").html('');

	$.each(listProjetos, function( index, projeto ) {
		$("#list-projetos").append(prepararProjeto(projeto, index));
	});
}

function visualizarAtividades() {


}

function prepararProjeto(projeto, indexProjeto) {

	return '<div class="col-4 m-4 border border-blue rounded" style="min-width: 350px; max-width: 350px;"><div class="card-body"><header class="row p-0">'+
	'<h4 class="card-title col-7">' + projeto.nome + '</h4><div class="col-5 p-0 text-right"><button type="button" onclick="deletarProjeto('+indexProjeto+')" class=" btn btn-primary p-1"><i class="fas fa-trash-alt text-danger"></i></button>'+
	'</div></header><div class="row justify-content-center">'+
	'<a class="btn btn-primary col-5 mr-1" href="#"><i class="fas fa-eye"></i> ver</a>'+
	'<button class="btn btn-primary col-5" onclick="editarProjeto('+indexProjeto+')" ><i class="fas fa-edit"></i> Editar</button></div></div></div>';

}