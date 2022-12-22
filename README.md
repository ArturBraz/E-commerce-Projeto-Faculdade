<h1>Projeto e-commerce - Shop Shoes</h1>

>Status: Developing


+ <a href="#Apresentação">Apresentação</a>
+ <a href="#Requisitos">Requisitos da entrega</a>
+ <a href="#Negocios">Regras de negócio</a>
+ <a href="#Limitações">Condições, Limitações e Alcances</a>


<hr>
<h2 id="Apresentação">Apresentação:</h2>

O projeto consiste em um E-commerce focado em produtos de calçados esportivos utilizando uma API ViaCEP(buscar os campos de endereço a partir do CEP) e uma interação com Backend(carregamento do database dos cards de produtos).

A escolha da ideia do projeto foi devivo a possibilidade de expandir em varios aspectos no futuro alem das entregas para a disciplina de Dev WEB da faculdade.

A escolha do produto de calçados esportivos foi por gosto pessoal alem da facilidade de encontrar as imagens prontas sem necessitar qualquer edição.

<br>

<hr>
<h2 id="Requisitos">Requisitos:</h2>

Os Requisitos para este trabalho eram:

+ Apresentar a descrição do projeto
+ Motivações do projeto
+ Condições, Limitações e Alcances
+ O Código(em um repositorio do git)

<br>

<hr>
<h2 id="Negocios">Regras de negócio:</h2>

As regras de negócio são:

+ A quantidade de produtos e calculo de preço final serão feitos somente na tela de carrinho.
+ produtos apresentados possuem categoria para futuros filtros de busca.

<br>

<hr>
<h2 id="Limitações">Condições, Limitações e Alcances:</h2>

A principal limitação foi o Back-end pois devido ao prazo curto(15dias) não foi possivel aprender o Node e implementar, então foi realizado apenas a estrutura do node junto as dependencias que serão utilizadas no futuro

<hr>
<h2>Instruções de utilização do projeto:</h2>

Para acessar ao projeto basta realizar um clone com o git ou baixar o arquivo .ZIP no proprio repositório.

Como muitas funcionalidades não possuem back-end, parte da navegação pode não ser intuitiva.

Orientações:
<br>
abrindo o index.html os cards de produtos serão carregados pelo JS, as telas de login e carrinho estão concluidas e para acessar a etapa de consumo da API é necessario clickar no icone da "Bag" e selecionar o botão "Finish Buy".

As proximas etapas funcionam normalmente exceto a tela de pagamento que não foi incluida no projeto.

A API ViaCEP foi implementada na tela de endereço (seguindo pelo caminho do carrinho) consumindo os dados de endereço e gerando um auto-complete dos campos do formulário.

