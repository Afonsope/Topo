# Topo
### Resumo do Código: Botão de Rolagem para o Topo

Este projeto HTML implementa um botão que permite aos usuários voltar rapidamente ao topo da página ao rolar. O botão é exibido quando o usuário desce mais de 1000 pixels.

#### Funcionalidades:

1. **HTML Estrutural**:
   - Um botão com o texto "↑ Topo" é criado e posicionado fixamente no canto inferior direito da tela.

2. **Estilização**:
   - O botão é estilizado com CSS para ter um fundo escuro, texto branco e um efeito de mudança de cor quando o cursor está sobre ele (note que há um pequeno erro no seletor CSS `#scrollTop:houver`, que deveria ser `#scrollTop:hover`).
   - O corpo da página é configurado para ter uma altura de 2000 pixels, permitindo a rolagem.

3. **JavaScript Interativo**:
   - Um ouvinte de eventos é adicionado ao botão que, ao ser clicado, rola suavemente a página para o topo.
   - Outro ouvinte de eventos monitora a rolagem da página. Se o usuário rolar mais de 1000 pixels para baixo, o botão é exibido; caso contrário, ele permanece oculto.

#### Considerações:
- Este exemplo é uma implementação prática de manipulação de eventos e DOM em JavaScript, além de incluir elementos básicos de design e usabilidade em uma página da web.
