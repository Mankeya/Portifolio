# Portfólio Pessoal Interativo

Este é um projeto de um portfólio pessoal de página única (Single Page Application), desenvolvido para apresentar informações de currículo de forma moderna e interativa. O foco foi criar uma experiência de usuário limpa e agradável, utilizando tecnologias web fundamentais.

## ✨ Visão Geral

O projeto transforma um currículo tradicional em uma página web dinâmica. Ele é totalmente responsivo e inclui elementos interativos para destacar as habilidades e a experiência profissional do desenvolvedor.

---

## 🚀 Tecnologias Utilizadas

A simplicidade foi um pilar na escolha das tecnologias, focando em uma base sólida de desenvolvimento web:

* **HTML5:** Para a estruturação semântica de todo o conteúdo da página.
* **CSS3:** Utilizado para estilizações personalizadas e complexas, como a criação da timeline de experiência e animações sutis.
* **Tailwind CSS:** Um framework CSS utility-first que foi a principal ferramenta para a construção do layout, espaçamentos, cores e responsividade. Ele permitiu criar um design consistente e adaptável de forma rápida e eficiente.
* **JavaScript (Vanilla):** Usado para adicionar toda a interatividade da página, sem a necessidade de frameworks pesados.

---

## 🏗️ Estrutura e Princípios

O desenvolvimento seguiu alguns princípios básicos de design e codificação:

1.  **Estrutura de Página Única:** Todo o conteúdo é apresentado em uma única página com seções bem definidas. A navegação é facilitada por um menu fixo com links que utilizam rolagem suave (`scroll-smooth`) para guiar o usuário pelas seções.

2.  **Estilização com Tailwind CSS:** A maior parte do design foi feita com as classes utilitárias do Tailwind. Isso garante que o estilo seja previsível e fácil de manter. Princípios como o design responsivo (`md:`, `lg:`) foram aplicados para garantir que o layout se adapte a diferentes tamanhos de tela.

3.  **JavaScript para Interatividade:**
    * **Gráfico de Habilidades:** A biblioteca `Chart.js` foi usada para renderizar um gráfico de radar que exibe visualmente as competências técnicas.
    * **Filtro de Habilidades:** Funções em JavaScript puro manipulam o DOM para filtrar e exibir as habilidades de acordo com a categoria selecionada pelo usuário.
    * **Menu Mobile:** O menu de navegação em telas menores é controlado por JavaScript, que alterna sua visibilidade.

---

## 🌟 Funcionalidades

* **Tema Escuro (Dark Mode):** Um design elegante e moderno com foco no conforto visual.
* **Navegação Fixa e Suave:** O menu principal permanece no topo da tela e permite navegar suavemente entre as seções.
* **Gráfico de Habilidades Interativo:** Uma representação visual das competências que responde ao mouse.
* **Filtragem de Habilidades:** Botões que permitem ao usuário filtrar as habilidades por categoria (Frontend, Backend, etc.).
* **Timeline de Experiência:** Uma linha do tempo visualmente clara para apresentar a trajetória profissional.
* **Totalmente Responsivo:** O layout se adapta perfeitamente a desktops, tablets e smartphones.

---

## 📂 Como Executar

Este é um projeto front-end puro e não requer um servidor ou processo de build.

1.  Clone ou baixe este repositório.
2.  Abra o arquivo `index.html` diretamente em qualquer navegador web moderno (como Chrome, Firefox, ou Edge).

E pronto! O portfólio será exibido.
