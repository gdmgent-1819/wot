function ready(cb) {
    /in/.test(document.readyState)
    ? setTimeout(ready.bind(null, cb), 90)
    : cb();
};

ready(_ => {

    let Sitemap = {
        init() {
            console.log('init');
            this._integrateContentHeadingsIntoSitemap = true;

            if(this._integrateContentHeadingsIntoSitemap == true) {
                this.integrateContentHeadingsIntoSitemap();
            }
        },
        integrateContentHeadingsIntoSitemap() {
            var sitemapItemElements = document.querySelectorAll('.ahs-sitemap__item');
            if(sitemapItemElements != null && sitemapItemElements.length > 0) {
                var that = this;
                var arrayLength = sitemapItemElements.length; // Fix for Microsoft Edge 15
                for (var i = 0; i < arrayLength; i++) {
                    var sitemapItemElement = sitemapItemElements[i];
//                sitemapItemElements.forEach(sitemapItemElement => {
                    if(sitemapItemElement.querySelector('ul') == null) {
                        var anchorElement = sitemapItemElement.querySelector('a');
                        if(anchorElement != null && typeof anchorElement != 'undefined') {
                            var url = anchorElement.href;
                            console.log(url);
                            var xhr = new XMLHttpRequest();
                            xhr.open('get', url, true);
                            xhr.responseType = 'text';
                            xhr.onload = function() {
                                if(xhr.status == 200) {
                                    var data = (!xhr.responseType)?(xhr.response):xhr.response;
                                    var doc = that.parseHTMLString(data);
                                    
                                    var bodyContent = doc.querySelector('.ahs-main__body');
                                    headingElements = bodyContent.querySelectorAll('h2, h3, h4, h5, h6');
                                    if(headingElements != null && headingElements.length > 0) {
                                        var tempStr = '';
                                        var currentLevel = 2;
                                        var level = null;
                                        var ulElement = document.createElement('ul');

                                        var arrayLength = headingElements.length; // Fix for Microsoft Edge 15
                                        for (var i = 0; i < arrayLength; i++) {
                                            var headingElement = headingElements[i];
//                                       headingElements.forEach(headingElement => {
                                            level = parseInt(headingElement.tagName.slice(1, 2));
                                            if(level > currentLevel) {
                                                tempStr += '<ul>';
                                            } else if (level < currentLevel) {
                                                tempStr += '</li>';
                                                tempStr += '</ul>';
                                            } else {
                                                tempStr += '</li>';
                                            }

                                            tempStr += '<li class="ahs-sitemap__item">';
                                            var id = headingElement.getAttribute('id');
                                            var html = headingElement.textContent;
                                            console.info(html);
                                            tempStr += `<a href="${url}#${id}" title="${html}">${html}</a>`;

                                            currentLevel = level;
//                                        });
                                        }
                                        ulElement.innerHTML = tempStr;
                                        sitemapItemElement.appendChild(ulElement);
                                    }
                                } else {
                                    console.log(xhr.status);
                                }
                            }
                            xhr.onerror = function() {
                                console.log(Error('Network Error!'));
                            }
                            xhr.send();
                        }
                    }
//                });
                }
            }
        },
        parseHTMLString(text) {
            var doc = document.implementation.createHTMLDocument("");
            doc.documentElement.innerHTML = text;
            return doc;
        }
    };

    Sitemap.init();
});