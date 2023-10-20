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
  (function(d, komm) {
    const kommunicateSettings = {
      'appId': '1482105436ad330999fedb7b66ea215b8',
      'popupWidget': true,
      'automaticChatOpenOnNavigation': true
    };
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(script);
    window.kommunicate = komm;
    komm._globals = kommunicateSettings;
  })(document, window.kommunicate || {});

}
