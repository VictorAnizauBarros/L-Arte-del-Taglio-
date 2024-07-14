const produtos = [
    { id: 1, nome: 'Fettucine Alfredo', descricao: 'Um prato italiano clássico composto por massa fettucine envolta em um molho cremoso de manteiga e queijo parmesão.', preco: 80.0, imagem: 'src/imagens/dishes-png/230/fettuccine-alfredo-230.png' },
    { id: 2, nome: 'Pasta alla Bolognese', descricao: 'Um prato italiano tradicional feito com massa e um rico molho de carne moída, tomate, cebola, cenoura, aipo e temperos.', preco: 100.00, imagem: 'src/imagens/dishes-png/230/bolognese-1-230.png' },
    { id: 3, nome: 'Pasta alla Carbonara', descricao: 'Um clássico feito com massa, ovos, queijo pecorino romano, guanciale (bochecha de porco curada) e pimenta preta.', preco: 120.00, imagem: 'src/imagens/dishes-png/230/pasta-carbonara-230.png' },
    { id: 4, nome: 'Tiramisù', descricao: 'Biscoitos savoiardi embebidos em café, camadas de mascarpone, ovos, açúcar e cacau em pó, clássica sobremesa italiana.', preco: 50.00, imagem: 'src/imagens/dishes-png/230/old-school-tiramisu-230.png' },
    { id: 5, nome: 'Ragú de porco', descricao: 'Carne de porco cozida em molho de tomate e especiarias, servida sobre polenta cremosa de milho, prato reconfortante.', preco: 72.50, imagem: 'src/imagens/dishes-png/230/ragu-de-porco.png' },
    { id: 6, nome: 'Salada Caprese ', descricao: 'Tomates frescos, mussarela de búfala, manjericão e azeite de oliva. Simplicidade, frescor e equilíbrio em receita italiana clássica.', preco: 40.00, imagem: 'src/imagens/dishes-png/230/salada-caprese.png' },
    { id: 7, nome: 'Berinjela à Parmigiana ', descricao: 'Fatias empanadas, fritas, com molho de tomate, queijo parmesão e mussarela, gratinadas ao forno. Texturas e sabores ricos.', preco: 57.50, imagem: 'src/imagens/dishes-png/230/berinjela.png' },
    { id: 8, nome: 'Lasanha de Espinafre', descricao: 'Camadas de massa, espinafre, ricota, molho de tomate e queijo derretido, harmonizadas em um festival de sabores.', preco: 65.00, imagem: 'src/imagens/dishes-png/230/lasanha-espinafre.png' },
    { id: 9, nome: 'Panna Cotta', descricao: 'Delicada fusão de nata, leite, açúcar e gelatina, resultando numa sobremesa cremosa e sofisticada, irresistível ao paladar.', preco: 35.00, imagem: 'src/imagens/dishes-png/230/panna-cotta.png' },
    { id: 10, nome: 'Tomate Confit', descricao: 'Um prato onde os tomates são cozidos lentamente em azeite de oliva com alho e ervas até ficarem macios e intensamente saborosos.', preco: 40.00, imagem: 'src/imagens/dishes-png/230/tomate-confit.png' },
    { id: 11, nome: 'Gnudi de Ricota', descricao: 'Delicado prato italiano, bolinhos de ricota e espinafre em molho fresco de tomate, ressaltando sabores suaves e frescos em harmonia sublime.', preco: 75.00, imagem: 'src/imagens/dishes-png/230/ricota-gnudi.png' },
    { id: 12, nome: 'Ribollita', descricao: 'Uma sopa de legumes, feijão branco, pão rústico e azeite de oliva, um clássico da culinária da Toscana.', preco: 55.00, imagem: 'src/imagens/dishes-png/230/Basically-Ribollita-230.png' },
    
  ];
  
  const container = document.querySelector('#produtos-container');
  const mensagemNenhumProduto = document.querySelector('#mensagem-nenhum-produto');
  const pesquisaInput = document.querySelector('#pesquisa');
  const contadorCarrinho = document.querySelector('#contador-carrinho');
  
  let carrinhoCount = 0;
  
  const renderizarProdutos = (produtosParaRenderizar) => {
    container.innerHTML = '';
    if (produtosParaRenderizar.length === 0) {
      mensagemNenhumProduto.style.display = 'block';
    } else {
      mensagemNenhumProduto.style.display = 'none';
      produtosParaRenderizar.map(produto => {
        const card = document.createElement('div');
        card.className = 'produto-card';
        
        const imagem = document.createElement('img');
        imagem.src = produto.imagem;

        const nome = document.createElement('h2');
        nome.textContent = produto.nome;
        
        const descricao = document.createElement('p');
        descricao.textContent = produto.descricao;
        
        const preco = document.createElement('h4');
        preco.textContent = `R$${produto.preco.toFixed(2)}`;
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', (e) => {
       if (e.target.checked) {
            carrinhoCount++;
            alert(`Você adicionou ${produto.nome} ao carrinho`)
          } else {
             carrinhoCount--;
             alert(`Você retirou ${produto.nome} do carrinho`)
          }
          contadorCarrinho.textContent = carrinhoCount;
        });   
        
        const inptCheckBox = document.createElement('div');
        inptCheckBox.className = 'inptCheckBox'
        const descInptCheckBox = document.createElement('p'); 
        descInptCheckBox.innerHTML = 'Adicionar ao carrinho'
        const infPreco = document.createElement('div')
        infPreco.className = 'infpreco'; 
        descricao.className='desc'
        
        card.appendChild(imagem);
        card.appendChild(nome);
        card.appendChild(descricao);
        card.appendChild(preco);
        card.appendChild(inptCheckBox);
        card.appendChild(infPreco);
        inptCheckBox.appendChild(descInptCheckBox);
        inptCheckBox.appendChild(checkbox);
        infPreco.appendChild(inptCheckBox);
        infPreco.appendChild(preco); 
  
        card.addEventListener('click', (e) => {
          if (e.target !== checkbox) {
            window.location.href = `detalhes.html?id=${produto.id}`;
          }
        });
  
        container.appendChild(card);
      });
    }
  };
  
  pesquisaInput.addEventListener('input', () => {
    const textoPesquisa = pesquisaInput.value.toLowerCase();
    const produtosFiltrados = produtos.filter(produto =>
      produto.nome.toLowerCase().includes(textoPesquisa)
    );
    renderizarProdutos(produtosFiltrados);
  });
  
  renderizarProdutos(produtos);
  