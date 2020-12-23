

    let lastRenderArgs;
let renderHTML = ``;
const ALGOLIA_APP_ID = "KL3UEHFLE7";
const ALGOLIA_API_KEY = "9216222240a120ca2d6c266ebd945046";
const ALGOLIA_INDEX = "test_PRODUCT_DOCS";
    const infiniteHits = instantsearch.connectors.connectInfiniteHits(
      (renderArgs, isFirstRender) => {
        const {
          hits,
          showMore,
          widgetParams
        } = renderArgs;
        const {
          container
        } = widgetParams;
        lastRenderArgs = renderArgs;
        if (isFirstRender) {
          const sentinel = document.createElement('div');
          container.appendChild(document.createElement('ul'));
          container.appendChild(sentinel);
          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting && !lastRenderArgs.isLastPage) {
                showMore();
              }
            });
          });
          observer.observe(sentinel);
          return;
        }
        container.querySelector('ul').innerHTML = hits
          .map(
            (hit) => {
                renderHTML = `<li class="hit-item-single">
                  <div class="row">
                    <div class="col-sm-12">
             
                   
                        <p class="search-summary">${instantsearch.highlight({ attribute: 'content', hit })}</p>
                     
                 
                  </div>
                </div>
              </li>`;
              return renderHTML;
            }
          )
          .join('');
      }
    );
    const renderStats = (renderOptions, isFirstRender) => {
      const {
        nbHits,
        widgetParams
      } = renderOptions;
      if (isFirstRender) {
        return;
      }

      let count = '';
      if (nbHits > 1) {
        count += `<p class="results-p">${nbHits} results found</p>`;
      } else if (nbHits === 1) {
        count += `<p>1 result found</p>`;
      } else {
        count += `<p class="no-results-p1">No results found</p>
        <p class="no-results-p2">It seems we can’t find any results based on your search.</p>`;
      }
      widgetParams.container.innerHTML = `${count}`;
    };
    const algoliaClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const searchClient = {
      search(requests) {
        if (requests.every(({
            params
          }) => !params.query)) {
          return Promise.resolve({
            results: requests.map(() => ({
              hits: [],
              nbHits: 0,
              nbPages: 0,
            })),
          });
        }
        return algoliaClient.search(requests);
      },
    };
    // Create the custom widget
    const customStats = instantsearch.connectors.connectStats(renderStats);
    const search = instantsearch({
      indexName: ALGOLIA_INDEX,
      searchClient: searchClient,
      searchFunction(helper) {
        const hitsContainer = document.querySelector('#hits');
        const paginationContainer = document.querySelector('#pagination');
        const statsContainer = document.querySelector('#stats');
        hitsContainer.style.display = helper.state.query === '' ? 'none' : '';
        paginationContainer.style.display = helper.state.query === '' ? 'none' : '';
        statsContainer.style.display = helper.state.query === '' ? 'none' : '';
        helper.search();
      },
    });
    search.addWidgets([
      instantsearch.widgets.searchBox({
        container: '#searchbox',
        placeholder: '',
        autofocus: true,
        showLoadingIndicator: true,
        searchAsYouType: true,
        wrapInput: false,
        magnifier: false,
        reset: false,
        poweredBy: false,
        escapeHTML: true
      }),
      instantsearch.widgets.configure({
        attributesToHighlight: [
          'content:160'
        ],
        attributesToRetrieve: [
          '*'
        ]
      }),
      infiniteHits({
        container: document.querySelector('#hits')
      }),
      customStats({
        container: document.querySelector('#stats'),
      })
    ]);
    search.start();