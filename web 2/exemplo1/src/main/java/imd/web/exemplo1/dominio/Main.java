package imd.web.exemplo1.dominio;

public class Main {

	public static void main(String[] args) {
		
		Funcionario f1 = new Funcionario("Jerffeson Gomes", 2700);
		Funcionario f2 = new Funcionario();
		
		Chefe chefe = new Chefe();
		chefe.setNome("Itamir Filho");
		chefe.setSalario(12000);
		
		
		Departamento dti = new Departamento();
		Departamento ascom = new Departamento();
		
		dti.setNome("DTI");
		chefe.setDpto(dti);
		chefe.setLotacao(dti);
		
		ascom.setNome("ASCOM");
		
		f1.setLotacao(dti);
		
		f2.setNome("Leticia");
		f2.setSalario(400);
		f2.setLotacao(ascom);

		System.out.println(f1);
		System.out.println(chefe);
		
	}

}
