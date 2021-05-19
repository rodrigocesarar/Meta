package com.teste.Meta.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Endereco {
	@Column(length = 40, nullable = false)
	private String logradouro;
	
	@Column(length = 50)
	private String complemento;
	
	@Column(length = 45, nullable = false)
	private String cidade;
	
	@Column(length = 2, nullable = false)
	private String estado;

	public String getLogradouro() {
		return logradouro;
	}
	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}
	public String getComplemento() {
		return complemento;
	}
	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
}
