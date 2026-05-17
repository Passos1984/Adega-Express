// O número de telefone e a exibição estão codificados em Base64 para proteção
const telefoneWhats = atob("NTU1MTk4MTk2MjgxOQ==");
const textoExibicao = atob("KDUxKSA5ODE5Ni0yODE5");

// Função para exibir o telefone no topo da página
function configurarExibicaoContato() {
    const el = document.getElementById("display-fone");
    if (el) {
        el.innerHTML = `📞 Fone / WhatsApp: ${textoExibicao}`;
    }
}

// Executa a função assim que carrega
configurarExibicaoContato();

// Função para gerar link do WhatsApp
function gerarLinkWhats(nomeProduto, valorTexto) {
    const mensagem = `Olá, Adega Express! Gostaria de pedir: *${nomeProduto}* - Valor: ${valorTexto}. Qual o tempo estimado de entrega?`;
    const msgEncoded = encodeURIComponent(mensagem);
    return `https://wa.me/${telefoneWhats}?text=${msgEncoded}`;
}

// Dados: COMBOS
const combosData = [
    { nome: "Combo Vodka Smirnoff + 4 Energéticos", preco: 79.90, imagem: "img/combo_vodeka.png", tag: "⚡ MAIS VENDIDO" },
    { nome: "Combo Gin Tanqueray + 4 Tônicas", preco: 159.90, imagem: "img/combo_gin.png", tag: "🔥 PROMOÇÃO" },
    { nome: "Combo Whisky Red Label + 4 Energéticos", preco: 129.00, imagem: "img/Combo hisky _red Label.png", tag: "⚡ EXPRESS" }
];

// Dados: CERVEJAS GELADAS
const cervejasData = [
    { nome: "Pack Heineken Long Neck (6 un)", preco: 45.00, imagem: "img/Pack_Heineken.png", tag: "🧊 TRINCANDO" },
    { nome: "Brahma Duplo Malte Lata (Fardo c/ 12)", preco: 48.00, imagem: "img/Brama_duplo_malte.png", tag: "🧊 TRINCANDO" },
    { nome: "Budweiser Long Neck (6 un)", preco: 38.00, imagem: "img/Budweiser_long_neck.png", tag: "🧊 TRINCANDO" }
];

// Dados: DESTILADOS
const destiladosData = [
    { nome: "Whisky Jack Daniel's 1L", preco: 169.90, imagem: "img/Whisky_Jack.png", tag: "🥃 CLÁSSICO" },
    { nome: "Vodka Absolut 1L", preco: 99.90, imagem: "img/Vodka_Absolut_1L.png", tag: "🥃 DESTILADOS" },
    { nome: "Gin Bombay Sapphire", preco: 139.90, imagem: "img/combo_gin.png", tag: "🥃 DESTILADOS" }
];

// Dados: EXTRAS (GELO, CARVÃO)
const extrasData = [
    { nome: "Gelo em Cubos 5kg", preco: 15.00, imagem: "img/gelo_cubo_5kg.png", tag: "🧊 EXTRA" },
    { nome: "Saco de Carvão 3kg", preco: 18.00, imagem: "img/saco_carvão_3kg.png", tag: "🔥 CHURRASCO" },
    { nome: "Red Bull 250ml (Unidade)", preco: 12.00, imagem: "img/red_bull_250ml.png", tag: "⚡ EXTRA" }
];

// Renderiza cards com preço fixo, imagem e tag personalizada
function renderizarGrid(containerId, arrayItens) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    arrayItens.forEach(item => {
        const precoFormatado = `R$ ${item.preco.toFixed(2)}`.replace('.', ',');
        const link = gerarLinkWhats(item.nome, precoFormatado);

        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" class="card-image" onerror="this.src='https://via.placeholder.com/300x180/1a1a1a/f1c40f?text=Sem+Foto'">
            <div class="card-content">
                <div class="badge-fixo">${item.tag}</div>
                <div class="service-name">${item.nome}</div>
                <div class="service-price">${precoFormatado}</div>
            </div>
            <a href="${link}" target="_blank" class="btn-wa">
                📲 Pedir via WhatsApp
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.003c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.644-.182-.066-.315-.099-.445.099-.133.197-.513.644-.63.776-.116.132-.232.148-.43.05-.197-.1-.834-.308-1.59-.984-.59-.525-.986-1.175-1.102-1.372-.116-.198-.012-.304.087-.403.088-.088.197-.232.296-.348.099-.115.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.445-1.076-.61-1.474-.16-.39-.323-.337-.445-.343a8 8 0 0 0-.38-.006c-.132 0-.347.05-.53.248-.181.198-.694.678-.694 1.653 0 .975.71 1.916.81 2.049.099.132 1.394 2.132 3.383 2.99.472.204.84.326 1.129.417.474.15.906.128 1.248.077.38-.056 1.17-.478 1.335-.94.165-.462.165-.858.116-.94-.05-.083-.182-.132-.38-.23z"/>
                </svg>
            </a>
        `;
        container.appendChild(card);
    });
}

// Inicialização nos blocos da adega
renderizarGrid("combos-grid", combosData);
renderizarGrid("cervejas-grid", cervejasData);
renderizarGrid("destilados-grid", destiladosData);
renderizarGrid("extras-grid", extrasData);