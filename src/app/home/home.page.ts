import { Component } from '@angular/core';
import { DadosService } from '../servicos/dados.service';
import { Router } from '@angular/router';
import { IPokemon } from '../interfaces/iPokemon';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaPokemons=[ //se exite um [](array), só tem como exibir TODOS OS DADOS usando FOR (ngFoR) - funcionando como um BD
    {
      numero:'N°001',
      nome:'Bulbasaur', 
      tipos:['Grass', 'Poison'],
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
    },

    {numero: 'N°004', nome: 'Charmander', tipos: ['Fire'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'},
    {numero: 'N°007', nome: 'Squirtle', tipos: ['Water'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'},
    {numero: 'N°012', nome: 'Butterfree', tipos: ['Bug', 'Flying'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png'},
    {numero: 'N°025', nome: 'Pikachu', tipos: ['Eletric'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'},
    {numero: 'N°043', nome: 'Oddish', tipos: ['Grass', 'Poison'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png'},
    {numero: 'N°060', nome: 'Poliwag', tipos: ['Water'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png'},
    {numero: 'N°116', nome: 'Horsea', tipos: ['Water'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png'},
    {numero: 'N°133', nome: 'Eevee', tipos: ['Normal'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png'},
    {numero: 'N°151', nome: 'Mew', tipos: ['Psychic'], img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png'}



  ];
  public listaFiltrada=[];

  constructor(
    public dadosService: DadosService,
    public router: Router
    ) {
    this.resetarLista();
  }

  abrirDadosPokemon(pokemon: IPokemon){
    //salva os dados do pokemon no db virtual
    this.dadosService.setDados('dadosPokemon', pokemon);
    //abre a pagina para exibir os dados
    this.router.navigateByUrl('/dados-pokemon');
  }

  private resetarLista(){
    this.listaFiltrada = this.listaPokemons;
  }

  public buscarPokemon(evento: any){
    let busca = evento.target.value;

    this.resetarLista();

    if(busca && busca.trim() != ''){
      this.listaFiltrada = this.listaFiltrada.filter(dados => {
        if (dados.nome.toLowerCase().indexOf(busca.toLowerCase()) > -1) {
          return true;
        }
        else if(dados.numero.indexOf(busca) > -1){
          return true; 
        }
        return false;
      });
    }
    
  }


}
