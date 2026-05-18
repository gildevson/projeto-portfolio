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

Os arquivos gerados ficam em `dist/` (configurado via `outputPath` no `angular.json`).

---

## Deploy na Hostinger

### Configurações de compilação

| Campo | Valor |
| --- | --- |
| Configuração predefinida | Angular |
| Branch | main |
| Versão do Node | 22.x |
| Output directory | `dist` |

### Erro 403 Forbidden — causa e solução

**Causa:** O Angular 17+ com o builder `@angular/build:application` gera os arquivos em `dist/[nome-projeto]/browser/` por padrão. Sem um `outputPath` explícito no `angular.json`, o Hostinger não encontra o `index.html` e retorna **403 Forbidden**.

**Solução 1 — `angular.json`:** Definir o `outputPath` para que os arquivos fiquem direto em `dist/`, sem subpastas:

```json
"outputPath": {
  "base": "dist",
  "browser": ""
}
```

**Solução 2 — `.htaccess`:** O Hostinger usa Apache. Sem esse arquivo, qualquer rota do Angular (ex: `/privacy`) faz o Apache procurar uma pasta física que não existe, retornando erro. O arquivo `public/.htaccess` redireciona tudo para o `index.html` e deixa o Angular gerenciar as rotas:

```apache
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^.*$ /index.html [L,QSA]
```

> Este arquivo fica em `public/` e é copiado automaticamente para o output no build.

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
