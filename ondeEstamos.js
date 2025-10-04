document.addEventListener('DOMContentLoaded', () => {
  const conteudos = [
    { titulo: "Camaçari (BA) Sede",
      texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut doloribus eos illum eaque ipsa itaque nisi? Voluptatibus aperiam, dolore ipsa ad natus accusantium totam at, quam recusandae ullam magnam!" },
    { titulo: "Camaçari (BA) Orla",
      texto: "Nobis aut doloribus eos illum eaque ipsa itaque nisi? Voluptatibus aperiam, dolore ipsa ad natus accusantium totam at, quam recusandae ullam magnam!" },
    { titulo: "Miracema (TO)",
      texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aut doloribus eos illum eaque ipsa itaque nisi?" },
    { titulo: "Várzea do Poço (BA)",
      texto: "Voluptatibus aperiam, dolore ipsa ad natus accusantium totam at, quam recusandae ullam magnam!" },
    { titulo: "Alagoas (BA)",
      texto: "Nada com nada ipsum dolor sit amet consectetur adipisicing elit. Nobis aut doloribus eos illum eaque ipsa itaque nisi?" },
      { titulo: "Não sei mais (BA)", 
        texto: "Agua com agua dolore ipsa ad natus accusantium totam at, quam recusandae ullam magnam! Voluptatibus aperiam, dolore ipsa ad natus accusantium totam at, quam recusandae ullam" }
  ];

  const container = document.getElementById("cardsContainer");
  const output = document.getElementById("output");
  if (!container) return;
  container.innerHTML = '';

  // Cria os cards
  conteudos.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerText = item.titulo;
    card.dataset.texto = item.texto;
    container.appendChild(card);
  });

  // Função que define layout dinâmico
  function layoutCards() {
    const cards = Array.from(container.querySelectorAll('.card'));
    const n = cards.length;
    if (n === 0) return;

    cards.forEach(c => {
      c.style.width = '';
      c.classList.remove('corner-tl','corner-tr','corner-bl','corner-br');
    });

    // Define larguras automáticas
    let widths = [];
    if (n === 1) widths = [100];
    else if (n === 2) widths = [50,50];
    else if (n === 3) widths = [33.3333,33.3333,33.3333];
    else if (n === 4) widths = [50,50,50,50];
    else {
      const full = Math.floor(n / 3) * 3;
      for (let i = 0; i < full; i++) widths.push(33.3333);
      const rem = n - full;
      if (rem === 1) widths.push(100);
      else if (rem === 2) widths.push(50,50);
    }

    while (widths.length < n) widths.push(33.3333);

    cards.forEach((card, i) => {
      card.style.width = widths[i] + '%';
    });

    // Define cantos arredondados automáticos
    const rows = [];
    let row = [], acc = 0;
    const EPS = 0.5;
    cards.forEach((card, i) => {
      const w = parseFloat(card.style.width) || (100/3);
      if (acc + w <= 100 + EPS) {
        row.push(i);
        acc += w;
      } else {
        rows.push(row);
        row = [i];
        acc = w;
      }
    });
    if (row.length) rows.push(row);

    if (rows.length) {
      const first = rows[0], last = rows[rows.length - 1];
      const tl = first[0], tr = first[first.length - 1];
      const bl = last[0], br = last[last.length - 1];
      if (tl !== undefined) cards[tl].classList.add('corner-tl');
      if (tr !== undefined) cards[tr].classList.add('corner-tr');
      if (bl !== undefined) cards[bl].classList.add('corner-bl');
      if (br !== undefined) cards[br].classList.add('corner-br');
    }
  }

  function activateCard(card) {
    const all = container.querySelectorAll('.card');
    all.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    output.classList.remove('show');
    output.innerHTML = card.dataset.texto || '';
    setTimeout(() => output.classList.add('show'), 10);
  }

  // Clique nos cards
  const cards = container.querySelectorAll('.card');
  cards.forEach(card => card.addEventListener('click', () => activateCard(card)));

  // Layout inicial e ativação do primeiro card
  layoutCards();
  const first = container.querySelector('.card');
  if (first) activateCard(first);

  // Atualiza no resize
  window.addEventListener('resize', () => layoutCards());
});