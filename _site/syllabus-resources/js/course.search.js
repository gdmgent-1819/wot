function ready(cb) {
    /in/.test(document.readyState)
    ? setTimeout(ready.bind(null, cb), 90)
    : cb();
};

ready(function(){

    var Search = {
        "init": function() {
            this.JSONFILES = [
                window.baseurl + '/api/content.json'
            ];
            this._searchStore = [];
            this._searchTerm = null;

            this.doSearch();
        },
        "doSearch": function() {
            this._searchTerm = this.getQueryVariable('search-query');
            var that = this;

            if (this._searchTerm) {
                document.querySelector('#search-query-inpage').setAttribute("value", this._searchTerm);

                Promise.all([
                    Utils.getJSONByPromise(this.JSONFILES[0])]).then(values => { 
                        var arrayLength = values.length; // Fix for Microsoft Edge 15
                        for (var i = 0; i < arrayLength; i++) {
                            var v = values[i];
//                        values.forEach(v => {
                            if(v != null) {
                                that._searchStore = that._searchStore.concat(that._searchStore, v);
                            }
//                        });
                        }
                        that.mapJsonToLunr();
                }, reason => {
                    console.log(reason)
                });
            }
        },
        "mapJsonToLunr": function() {
            if(this._searchStore != null) {
                // Initalize lunr with the fields it will be searching on. I've given title
                // a boost of 10 to indicate matches on this field are more important.
                var idx = lunr(function () {
                    this.field('id');
                    this.field('content');
                    this.field('title', { boost: 10 });
                    this.field('title_long', { boost: 10 });
                    this.field('description', { boost: 8 });
                    this.field('keywords', { boost: 6 });
                });
                for (var i=0; i < this._searchStore.length; i++) { // Add the data to lunr
                    idx.add({
                        'id': this._searchStore[i].id,
                        'title': this._searchStore[i].title,
                        'title_long': this._searchStore[i].title_long,
                        'description': this._searchStore[i].description,
                        'keywords': this._searchStore[i].keywords,
                        'content': this._searchStore[i].content,
                        'url': this._searchStore[i].url
                    });
                }

                this.displaySearchResults(idx.search(this._searchTerm), this._searchStore);
            }
        },
        "displaySearchResults": function(results, searchStore) {
            if (results != null && results.length > 0 && searchStore != null) { // Are there any results?
                var resultsHtmlString = '';
                for (var i = 0; i < results.length; i++) {  // Iterate over the results
                    var item = _.find(searchStore, function(o) {
                        return o.id == results[i].ref;
                    });
                    if(item != null && typeof item != 'undefined') {
                        resultsHtmlString += '<a href="' + item.url + '" class="search-results__item"><h3 class="search-results__title">' + item.title + '</h3>';
                        resultsHtmlString += '<p class="search-results__intro">' + item.description.substring(0, 150) + '...</p></a>';
                    }
                }
                document.querySelector('#search-results').innerHTML = resultsHtmlString;
            }
        },
        "getQueryVariable": function(variable) {
            var query = window.location.search.substring(1);
            var vars = query.split('&');

            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');

                if (pair[0] === variable) {
                    return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
                }
            }
        }
    };

    Search.init();
});