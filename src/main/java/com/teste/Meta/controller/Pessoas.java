package com.teste.Meta.controller;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teste.Meta.model.Pessoa;

public interface Pessoas extends JpaRepository<Pessoa, String>{
	Pessoa findByCpf(String cpf);
}
