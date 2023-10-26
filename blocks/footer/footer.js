import { readBlockConfig, decorateIcons } from '../../scripts/aem.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  // fetch footer content
  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});

  if (resp.ok) {
    const html = await resp.text();

    // decorate footer DOM
    const footer = document.createElement('div');
    footer.innerHTML = html;

    decorateIcons(footer);
    block.append(footer);
  }
  // eslint-disable-next-line func-names
  (function (d, komm) {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    const appId1 = '1482105436ad330999fedb7b66ea215b8';
    if (page === 'home-loans') {
      // eslint-disable-next-line no-const-assign
      appId1 = '2c34670d00ccce92b195d47a29f2465bf';
    }
    const kommunicateSettings = {
      appId: appId1,
      popupWidget: true,
      automaticChatOpenOnNavigation: true,
    };
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(script);
    window.kommunicate = komm;
    /* eslint no-underscore-dangle: 0 */
    komm._globals = kommunicateSettings;
  }(document, window.kommunicate || {}));

  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires= ${date.toUTCString()}`;
    document.cookie = `${name} = ${value} ; ${expires} ;path=/`;
  }

  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i += 1) {
      const cookie = cookies[i].trim();
      if (cookie.indexOf(`${name}=`) === 0) {
        return cookie.substring(name.length + 1, cookie.length);
      }
    }
    return null;
  }

  const emailIds = ['user1@example.com', 'user2@example.com', 'user3@example.com', 'user4@example.com'];
  function setRandomEmailCookie() {
    const randomIndex = Math.floor(Math.random() * emailIds.length);
    const randomEmail = emailIds[randomIndex];
    if (!getCookie('email')) {
      setCookie('email', randomEmail, 30);
    }
  }
  setRandomEmailCookie();
}
