export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
  // // Accordian for highlight in mobile
  /* eslint-disable max-len */
  if (block.classList.contains('six-packs-module')) {
    const accordions = document.querySelectorAll('.six-packs-module div div');

    const openAccordion = (accordion) => {
      const content = accordion.querySelector('ul');
      accordion.classList.add('accordion-active');
      content.style.maxHeight = `${content.scrollHeight}px`;
    };

    const closeAccordion = (accordion) => {
      const content = accordion.querySelector('ul');
      accordion.classList.remove('accordion-active');
      content.style.maxHeight = null;
    };

    accordions.forEach((accordion) => {
      accordion.classList.add('accordion');
      const intro = accordion.querySelector('p strong');
      const content = accordion.querySelector('ul');
      intro.addEventListener('click', (e) => {
        e.preventDefault();
        if (content.style.maxHeight) {
          closeAccordion(accordion);
        } else {
          accordions.forEach((_accordion) => closeAccordion(_accordion));
          openAccordion(accordion);
        }
      });
    });
  }
  /* eslint-enable max-len */
}
