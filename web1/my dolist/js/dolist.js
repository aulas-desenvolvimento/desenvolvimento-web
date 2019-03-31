
function addProjeto()  {

	console.log($("#nome-projeto").val());

	$("#list-projetos").append(prepararProjeto($("#nome-projeto").val()));

	$("#nome-projeto").val("");
	$("#modalAddProjeto").modal('hide');


}


function prepararProjeto(nomeProjeto) {


	return '<div class="col-4 m-4 border border-blue rounded" style="min-width: 350px; max-width: 350px;"><div class="card-body"><header class="row p-0">'+
	'<h4 class="card-title col-7">' + nomeProjeto + '</h4><div class="col-5 p-0 text-right"><a href="#" class="p-1"><i class="fas fa-trash-alt text-danger"></i></a>'+
	'</div></header><div class="row justify-content-center">'+
	'<a class="btn btn-primary col-5 mr-1" href="#"><i class="fas fa-eye"></i> ver</a>'+
	'<a class="btn btn-primary col-5" href="#"><i class="fas fa-edit"></i> Editar</a></div></div></div>';

}