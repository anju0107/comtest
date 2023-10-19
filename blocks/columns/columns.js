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
  // const highlightElements = document.getElementsByClassName('section highlight columns-container');
  // const supportHeader = document.getElementById('circle-support--faqs');
  // if (supportHeader) {
  //   console.log('33');
  //   const supportHeaderChevron = document.createElement('div');
  //   supportHeaderChevron.className = 'header-chevron-up';
  //   supportHeader.parentNode.insertBefore(supportHeaderChevron, supportHeader.nextElementSibling);
  //   // break; // Exit the loop once the element is found
  // }

  // const highlight = document.getElementsByClassName('section highlight columns-container');

  // if (highlight) {
  //   const circleSupportFaqs = highlight.querySelector('#circle-support--faqs');
  //   if (circleSupportFaqs) {
  //     // Do something with the element
  //   }
  // }
  // const supportHeader = highlight.getElementById('circle-support--faqs');
  // console.log(supportHeader);
  // const supportHeaderChevron = document.createElement('div');
  // supportHeaderChevron.className = 'header-chevron-up';
  // supportHeader.parentNode.insertBefore(supportHeaderChevron, supportHeader.nextElementSibling);

  // supportHeader.addEventListener('click', () => {
  //   toggleAccordian();
  // })
}
