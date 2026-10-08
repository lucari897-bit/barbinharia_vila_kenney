# Barbinharia — site estático (GitHub Pages)

HTML + CSS + JavaScript puro. Sem backend, sem build. Todos os caminhos são relativos.

## 1–3. Publicar no GitHub Pages
1. Crie um repositório em github.com (botão **New**), ex.: `barbinharia`.
2. Envie **o conteúdo** desta pasta (index.html, css/, js/, assets/) para a raiz do repositório (Add file → Upload files).
3. Em **Settings → Pages**, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)` e salve. O site fica em `https://usuario.github.io/barbinharia/`.

## 4. Trocar a logo
Substitua `assets/images/logo.png` mantendo o nome. (Use PNG com fundo transparente; o original está em `logo-original.png`.)

## 5. Trocar fotos
Substitua os arquivos de `assets/images/` mantendo os nomes: `hero-barbinharia.jpg` (foto oficial do hero, já incluída), `gallery-01…06.jpg`, `barber-01…05.jpg`. As demais são **placeholders** escuros. Use JPG otimizado (até ~200 KB cada).

## 6. Os 5 funcionários
No `index.html`, seção `#equipe`: edite em cada card o nome, a especialidade e a descrição (comentários `EDITAR`).

## 7–8. Instagram e WhatsApp
Tudo fica no topo de `js/script.js`: `INSTAGRAM_URL`, `WHATSAPP_NUMBER` (só dígitos com 55+DDD), `WHATSAPP_MSG`.

## 9. Endereço
Altere `ADDRESS` e `PHONE_DISPLAY` em `js/script.js` e o texto nas seções `#localizacao` e rodapé do `index.html` (também o `src` do `<iframe>` do mapa).

## 10. Horários
Bloco `<dl class="hours">` em `index.html`. Domingo está como "Fechado".

Agendamento: sempre via CashBarber (`BOOKING_URL`, não alterar).
