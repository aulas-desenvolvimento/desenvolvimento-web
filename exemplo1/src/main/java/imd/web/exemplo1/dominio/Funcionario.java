package imd.web.exemplo1.dominio;

public class Funcionario {
	
	private String nome;
	private double salario;
	private Departamento lotacao;
	
	public Funcionario() {
		
	}
	
	public Funcionario(String _nome, double _salario) {
		this.nome = _nome;
		this.salario = _salario;
	}
	
	public String toString() {
		return nome + " - " + salario + " : " + lotacao.getNome();
	}
	
	/**
	 * @return the nome
	 */
	public String getNome() {
		return nome;
	}
	/**
	 * @param nome the nome to set
	 */
	public void setNome(String nome) {
		this.nome = nome;
	}
	/**
	 * @return the salario
	 */
	public double getSalario() {
		return salario;
	}
	/**
	 * @param salario the salario to set
	 */
	public void setSalario(double salario) {
		this.salario = salario;
	}

	/**
	 * @return the lotacao
	 */
	public Departamento getLotacao() {
		return lotacao;
	}

	/**
	 * @param lotacao the lotacao to set
	 */
	public void setLotacao(Departamento lotacao) {
		this.lotacao = lotacao;
	}


}
