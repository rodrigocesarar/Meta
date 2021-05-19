package com.teste.Meta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teste.Meta.model.Pessoa;

@RestController
@RequestMapping("/pessoas")
public class PessoasController {

	@Autowired
	private Pessoas pessoas;
	
	@PostMapping
	public Pessoa salvar(@RequestBody Pessoa pessoa) throws Exception {
		if (pessoa.getIdade() == 0) {
			throw new Exception("Idade deve ser maior que 0");
		}
		return pessoas.save(pessoa);
	}
	
	@GetMapping("/{cpf}")
	public Pessoa buscar(@PathVariable String cpf) {
		return pessoas.findByCpf(cpf);
	}
}
