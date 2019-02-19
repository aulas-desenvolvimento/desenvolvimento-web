package imd.web.exemplo1.dominio;

public class Chefe extends Funcionario {

	private Departamento Dpto;

	/**
	 * @return the dpto
	 */
	public Departamento getDpto() {
		return Dpto;
	}

	/**
	 * @param dpto the dpto to set
	 */
	public void setDpto(Departamento dpto) {
		Dpto = dpto;
	}
	
	public String toString() {
		return getNome() + " - " + getSalario() + " : " + getLotacao().getNome() + " ** " + Dpto.getNome();
	}
	
}
