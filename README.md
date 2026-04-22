# Gilson Fonseca — Portfolio

Portfolio pessoal desenvolvido em **Angular 21**, com design inspirado em portfolios minimalistas de alto impacto visual. Fundo preto, tipografia gigante animada, foto em preto e branco e animações de entrada sequenciais.

---

## Tecnologias

- [Angular 21](https://angular.dev) — framework principal
- [SCSS](https://sass-lang.com) — estilização com variáveis e BEM
- [Unbounded](https://fonts.google.com/specimen/Unbounded) — fonte display para o nome
- [Inter](https://fonts.google.com/specimen/Inter) — fonte para textos e navbar

---

## Estrutura do projeto

```text
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Navegação fixa (desktop + mobile com menu hamburguer)
│   │   │   ├── navbar.ts
│   │   │   ├── navbar.html
│   │   │   └── navbar.scss
│   │   └── hero/            # Seção principal com foto, marquee e animações
│   │       ├── hero.ts
│   │       ├── hero.html
│   │       └── hero.scss
│   ├── app.ts
│   ├── app.html
│   └── app.scss
├── styles.scss               # Estilos globais e variáveis CSS
└── index.html                # Import das fontes Google
public/
└── foto.jpg                  # Foto do hero (preto e branco aplicado via CSS)
```

---

## Funcionalidades

- **Animação de entrada sequencial** — foto aparece primeiro, depois a navbar, o nome e o rodapé
- **Marquee infinito** — nome percorre a tela horizontalmente em loop
- **Foto em preto e branco** — efeito aplicado via CSS (`grayscale + brightness`)
- **Navbar responsiva** — links visíveis no desktop; menu hamburguer com overlay no mobile
- **Menu mobile** — abre em tela cheia com itens grandes e fundo semi-transparente
- **Totalmente responsivo** — adaptado para desktop e mobile com `clamp()` e media queries

---

## Rodando localmente

**Pré-requisito:** Node.js 18+ e Angular CLI instalados.

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
ng serve

# Acessar no navegador
http://localhost:4200
```

---

## Build para produção

```bash
ng build
```

Os arquivos gerados ficam em `dist/portfolio/browser/`. Podem ser publicados em qualquer serviço de hospedagem estática (Vercel, Netlify, GitHub Pages, etc).

---

## Personalização

| O que alterar           | Onde                                  |
| ----------------------- | ------------------------------------- |
| Nome na navbar e hero   | `navbar.html` e `hero.html`           |
| Profissao e localizacao | `hero.html`                           |
| Foto                    | Substitua `public/foto.jpg`           |
| Velocidade do marquee   | `hero.scss` -> `animation: marquee Xs`|
| Cores globais           | `styles.scss` -> variaveis `:root`    |
| Fontes                  | `index.html` + `styles.scss`          |

---

## Licença

Projeto pessoal — todos os direitos reservados a Gilson Fonseca.
