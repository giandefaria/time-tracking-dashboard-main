# Time tracking dashboard
challenge from frontendmentor.io. https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw

# Preview
![preview-da-página](./design/desktop-preview.jpg)

**O objetivo é treinar as habilidades com o uso do grid. Há também a possibilidade de praticar o uso de dados de um arquivo JSON no projeto, arquivo esse já fornecido pelo challenge.** 
**Para executar esse projeto basta executar o arquivo index.html**
 ### Tarefas
 [X] criar os grids do projeto 
 [X] adicionar a imagem e a caixa do jeremy robson
 [X] criar os campos nos grids para os dados json
 [X] fazer o js imprimir os dados JSON nos grids
 [X] Adicionar imagens dentro dos box's
 [X] adicionar os seletores de dia, semana e ano
 [X] alterar os dados de acordo com o selor selecionado
 [X] adicionar cor background nos box
 [X] Alterar visual do box Jeremy Robson
 [X] Alterar visual do box das atividades
 [x] Alterar visual dos seletores ao clicar
 [X] adicionar mediaQuery para o celular.
 [X] Ajustar os grids da página
 [X] Ajustar largura dos boxes



 # Arquivo index.html
 * Arquivo para iniciar o projeto. Aqui consta a marcação dos elementos no html.

 # Arquivo style.css
 * Responsável por adicionar o visual da página.

 # Arquivo script.js
  * Esse arquivo possuirá a responsabilidade de adicionar os valores no HTML, de acordo com o seletor selecionado (daily, weekly, mounthly). 
  * Dependendo do seletor selecionado, o arquivo script.js buscará os dados, escritos em Json na variável 'obj', constante no arquivo dataJson.js
  * A função insertData é a responsável por inserir os dados de acordo com o seletor indicado na variável 'selector'
  * Foi criado também um for para mapear os seletores quando forem clicados, alterando o valor da variável 'selector' e executando a função 'insertData' para alterar as informações de acordo com o seletor selecionado.