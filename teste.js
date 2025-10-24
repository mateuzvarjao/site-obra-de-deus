document.addEventListener("DOMContentLoaded", () => {
    
  const heroSection = document.querySelector(".heroSection");

  // NAV
  const nav = document.createElement("nav");
  nav.classList.add("navbar", "navbar-expand-lg");
  nav.setAttribute("data-bs-theme", "dark");

  const container = document.createElement("div");
  container.classList.add("container-fluid");

  // LOGO
  const divLogo = document.createElement("div");
  divLogo.classList.add("divLogo");
  const logoLink = document.createElement("a");
  logoLink.href = "index.html";
  const logoImg = document.createElement("img");
  logoImg.src = "images/logo_OD.png";
  logoImg.alt = "";
  logoImg.classList.add("divLogo");
  logoLink.appendChild(logoImg);
  divLogo.appendChild(logoLink);

  // BOTÃO TOGGLER (mobile)
  const button = document.createElement("button");
  button.classList.add("navbar-toggler");
  button.type = "button";
  button.setAttribute("data-bs-toggle", "collapse");
  button.setAttribute("data-bs-target", "#navbarNavAltMarkup");
  button.setAttribute("aria-controls", "navbarNavAltMarkup");
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-label", "Toggle navigation");

  const spanIcon = document.createElement("span");
  spanIcon.classList.add("navbar-toggler-icon");
  button.appendChild(spanIcon);

  // CONTEÚDO DO MENU
  const collapseDiv = document.createElement("div");
  collapseDiv.classList.add("collapse", "navbar-collapse");
  collapseDiv.id = "navbarNavAltMarkup";

  const navDiv = document.createElement("div");
  navDiv.classList.add("navbar-nav");

  // Função auxiliar para criar itens simples
  function criarLink(texto, href) {
    const li = document.createElement("li");
    li.classList.add("nav-item");
    const a = document.createElement("a");
    a.classList.add("nav-link", "linksNavbar");
    a.href = href;
    a.textContent = texto;
    li.appendChild(a);
    return li;
  }

  // Função auxiliar para dropdowns
  function criarDropdown(titulo, itens) {
    const li = document.createElement("li");
    li.classList.add("nav-item", "dropdown");

    const a = document.createElement("a");
    a.classList.add("nav-link", "dropdown-toggle", "linksNavbar");
    a.href = "#";
    a.role = "button";
    a.setAttribute("data-bs-toggle", "dropdown");
    a.setAttribute("aria-expanded", "false");
    a.textContent = titulo;
    li.appendChild(a);

    const ul = document.createElement("ul");
    ul.classList.add("dropdown-menu");
    ul.style.backgroundColor = "transparent";
    ul.style.borderColor = "transparent";

    itens.forEach(item => {
      const dropdownLi = document.createElement("li");
      const dropdownA = document.createElement("a");
      dropdownA.classList.add("dropdown-item");
      dropdownA.href = item.href;
      dropdownA.textContent = item.texto;
      dropdownLi.appendChild(dropdownA);
      ul.appendChild(dropdownLi);
    });

    li.appendChild(ul);
    return li;
  }

  // Itens principais
  const itensPrincipais = [
    criarLink("INÍCIO", "index.html"),
    criarDropdown("SOBRE NÓS", [
      { texto: "A OBRA DE DEUS", href: "aObraDeDeus.html" },
      { texto: "MISSÕES", href: "ondeEstamos.html" }
    ]),
    criarDropdown("LOJA", [
      { texto: "ARTIGOS RELIGIOSOS", href: "artigosReligiosos.html" },
      { texto: "PASSAGENS/ROMARIAS", href: "passagens.html" }
    ]),
    criarLink("MÚSICAS", "musicas.html"),
    criarLink("VOCACIONAL", "vocacional.html"),
    criarLink("EVENTOS", "eventos.html"),
    criarLink("JUVENTUDE", "juventude.html"),
    criarLink("FALE CONOSCO", "faleConosco.html"),
  ];

  // Adiciona todos ao navDiv
  itensPrincipais.forEach(item => navDiv.appendChild(item));

  // Monta toda a hierarquia
  collapseDiv.appendChild(navDiv);
  container.appendChild(divLogo);
  container.appendChild(button);
  container.appendChild(collapseDiv);
  nav.appendChild(container);

  heroSection.appendChild(nav);
});
