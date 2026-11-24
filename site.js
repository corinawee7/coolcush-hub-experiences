
const menuToggle = document.querySelector('.menu-toggle');
const mobileLayout = window.matchMedia('(max-width: 980px)');
function setMenu(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
}
setMenu(false);
menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
mobileLayout.addEventListener('change', () => setMenu(false));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileLayout.matches && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuToggle.focus();
  }
});
const language = document.documentElement.lang;
const locale = JSON.parse(document.body.dataset.locale);
const messages = {
  en: ['Light mode', 'Night mode', 'Answers copied.', 'My Transylvania adventure', 'I’m interested in this itinerary: '],
  ro: ['Mod luminos', 'Mod întunecat', 'Răspunsurile au fost copiate.', 'Aventura mea în Transilvania', 'Mă interesează acest traseu: '],
  es: ['Modo claro', 'Modo oscuro', 'Respuestas copiadas.', 'Mi aventura en Transilvania', 'Me interesa esta ruta: ']
}[language];
for (const link of document.querySelectorAll('.languages a')) {
  link.href += location.search + location.hash;
}
const theme=document.querySelector('#theme');function applyTheme(dark){document.body.classList.toggle('dark',dark);theme.textContent=dark?messages[0]:messages[1];theme.setAttribute('aria-pressed',String(dark))}applyTheme(localStorage.getItem('coolcush-theme')==='dark');theme.onclick=()=>{const dark=!document.body.classList.contains('dark');applyTheme(dark);localStorage.setItem('coolcush-theme',dark?'dark':'light')};const form=document.querySelector('form');
if (form) {
  const fieldLabels = { ...locale.fields, email: locale.fields.Email, pickup_location: locale.fields['Pick-up location'], 'Activity[]': locale.fields.Activity };
  const answers = () => Array.from(new FormData(form))
    .filter(([name, value]) => !name.startsWith('_') && name !== 'Trip_details' && value)
    .map(([name, value]) => (fieldLabels[name] || name) + ' — ' + value)
    .join('\n');
  const sendButton = form.querySelector('[type=submit]');
  const summary = form.elements.Trip_details;
  let sending = false;
  form.addEventListener('submit', event => {
    if (sending) {
      event.preventDefault();
      return;
    }
    summary.value = answers();
    summary.disabled = false;
    sending = true;
    sendButton.disabled = true;
    form.querySelector('[role=status]').textContent = {
      en: 'Sending your request…', ro: 'Se trimite cererea…', es: 'Enviando la solicitud…'
    }[language];
  });
  window.addEventListener('pageshow', () => {
    sending = false;
    sendButton.disabled = false;
    summary.disabled = true;
    form.querySelector('[role=status]').textContent = '';
  });
  document.querySelector('#copy').onclick = async () => {
    const status = form.querySelector('[role=status]');
    try {
      await navigator.clipboard.writeText(answers());
      status.textContent = messages[2];
    } catch {
      status.textContent = answers();
    }
  };
}
const dialog=document.querySelector('dialog');if(dialog){document.querySelectorAll('.gallery a').forEach(a=>a.onclick=e=>{e.preventDefault();dialog.querySelector('img').src=a.href;dialog.querySelector('img').alt=a.textContent;dialog.querySelector('p').textContent=a.textContent;dialog.showModal()});dialog.querySelector('button').onclick=()=>dialog.close();dialog.onclick=e=>{if(e.target===dialog)dialog.close()}}

const route = new URLSearchParams(location.search).get('route');
if (route && form && !form.elements.Message.value) {
  form.elements.Message.value = messages[4] + (locale.routes[route] || route);
}
