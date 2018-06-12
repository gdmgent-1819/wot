function ready(cb) {
  /in/.test(document.readyState)
  ? setTimeout(ready.bind(null, cb), 90)
  : cb();
};

ready(_ => {
  const Pagemap = {
      init() {
          this._integratePagemap = true;
          this._$pagemap = document.querySelector('.pagemap');

          if (this._integratePagemap === true) {
              this.integratePagemap();
          }
          // this.initAnchorsAnimation(); // Does not work in every browser
      },
      integratePagemap() {
          const headingElements = document.querySelectorAll('.ahs-main__body > h2'); //, .ahs-main__body > h3, .ahs-main__body > h4, .ahs-main__body > h5, .ahs-main__body > h6
          if (headingElements != null && headingElements.length > 0) {
              let tempStr = '';
              let level = null;
              const $ul = document.createElement('ul');
              $ul.setAttribute('class', 'pagemap__list');
              const arrayLength = headingElements.length; // Fix for Microsoft Edge 15
              for (let i = 0; i < arrayLength; i++) {
                  const headingElement = headingElements[i];
                  const id = headingElement.getAttribute('id');
                  const html = headingElement.innerHTML.replace(/<\/?(a|code)[^>]+(>|$)/g, '');
                  const htmlTitle = headingElement.textContent;
                  const item = document.createElement('li');
                  item.setAttribute('class', 'pagemap__item');
                  item.innerHTML = `<a class="pagemap__link" href="#${id}" title="${htmlTitle}">${html}</a>`;
                  $ul.appendChild(item);
              }
              this._$pagemap.appendChild($ul);
          } else {
              this._$pagemap.parentNode.removeChild(this._$pagemap);
          }
      },
      initAnchorsAnimation() {
          const $body = document.body;
          const anchorButtons = document.querySelectorAll("a[href^='#']:not(.footnote):not(.reversefootnote)");

          var arrayLength = anchorButtons.length; // Fix for Microsoft Edge 15
          for (let i = 0; i < arrayLength; i++) {
              let anchor = anchorButtons[i];
//            anchorButtons.forEach(anchor => {
              anchor.addEventListener("click", function (evt) {
                  evt.preventDefault();
                  const target = document.querySelector(this.getAttribute('href'));
                  scrollTo($body, target.offsetTop, 400); 
              });
          }
//            });
      }
  };
  Pagemap.init();
});