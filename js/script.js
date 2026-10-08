/* ===== CONFIGURAÇÃO (edite aqui) ===== */
const BOOKING_URL   = "https://cashbarber.com.br/barbinharia/inicio"; // NÃO ALTERAR
const WHATSAPP_NUMBER = "5521971545111";                              // DDI+DDD+número, só dígitos
const WHATSAPP_MSG  = "Olá! Vim pelo site da Barbinharia e gostaria de saber mais informações.";
const INSTAGRAM_URL = "https://www.instagram.com/barbinharia_/";      // ou "COLOQUE_AQUI_O_INSTAGRAM_OFICIAL"
const ADDRESS       = "Estrada do Quafá, 363, Vila Kennedy, Rio de Janeiro - RJ, 23098-030";
const PHONE_DISPLAY = "(21) 97154-5111";

(function () {
  "use strict";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* Links de contato */
  $$("[data-book]").forEach(a => a.href = BOOKING_URL);
  $$("[data-whatsapp]").forEach(a => a.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MSG));
  $$("[data-tel]").forEach(a => a.href = "tel:+" + WHATSAPP_NUMBER);
  const ig = INSTAGRAM_URL.startsWith("http");
  $$("[data-instagram]").forEach(a => {
    if (ig) a.href = INSTAGRAM_URL; else { a.removeAttribute("target"); a.href = "#contato"; a.title = "Instagram em breve"; }
  });
  $("#route").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS);

  /* Header + menu mobile */
  const header = $("#header"), burger = $("#burger"), menu = $("#menu");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  const setMenu = open => {
    menu.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    document.body.style.overflow = open ? "hidden" : "";
  };
  burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  $$("a", menu).forEach(a => a.addEventListener("click", () => setMenu(false)));
  window.addEventListener("resize", () => { if (innerWidth >= 1024) setMenu(false); });

  /* Animações de entrada */
  const items = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } }), { threshold: .12 });
    items.forEach(el => io.observe(el));
  } else items.forEach(el => el.classList.add("show"));

  /* Lightbox */
  const lb = $("#lightbox"), lbImg = $("#lb-img"), links = $$(".g-item");
  let idx = 0, lastFocus = null;
  const show = i => { idx = (i + links.length) % links.length; lbImg.src = links[idx].href; lbImg.alt = $("img", links[idx]).alt; };
  const open = i => { lastFocus = document.activeElement; show(i); lb.hidden = false; document.body.style.overflow = "hidden"; $(".lb-close").focus(); };
  const close = () => { lb.hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); };
  links.forEach((a, i) => a.addEventListener("click", e => { e.preventDefault(); open(i); }));
  $(".lb-close").onclick = close; $(".lb-prev").onclick = () => show(idx - 1); $(".lb-next").onclick = () => show(idx + 1);
  lb.addEventListener("click", e => { if (e.target === lb) close(); });
  document.addEventListener("keydown", e => {
    if (lb.hidden) { if (e.key === "Escape") setMenu(false); return; }
    if (e.key === "Escape") close(); if (e.key === "ArrowLeft") show(idx - 1); if (e.key === "ArrowRight") show(idx + 1);
  });
  let sx = 0;
  lb.addEventListener("touchstart", e => sx = e.touches[0].clientX, { passive: true });
  lb.addEventListener("touchend", e => { const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 50) show(idx + (d < 0 ? 1 : -1)); });
})();
