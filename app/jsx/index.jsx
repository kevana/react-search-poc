var React = require('react');
//var omdb = require('omdb-client');
//var omdb = require('./fake-omdb-client');
var ItemContainer = require('./ItemContainer');
var ItemTileLayout = require('./ItemTileLayout');
var ItemListLayout = require('./ItemListLayout');
var preload = require('./netflix');
var productResponse = require('./products')
var Header = require('./Header');
var _ = require('lodash');

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      layout: 'list',
      results: _.clone(productResponse.products, true),
      term: ""
    };
  }

  changeLayout(layout) {
    this.setState({layout:layout});
  }

  search(term) {
    // this.setState({term:term});
    // omdb.search({query:term}, (err, data) => {
    //   this.setState({results: data.Search});
    // });
    console.log('unimplemented');
  }

  clearTerm() {
    console.log('unimplemented');
    //this.setState({term:"", results: _.clone(preload.Search, true)});
  }

  render() {
    var layout;
    if (this.state.layout === 'tile') {
      layout = ItemTileLayout;
    }
    else {
      layout = ItemListLayout;
    }
    return (
      <div className="app-container">
        <Header 
          changeLayout={this.changeLayout.bind(this)}
          layout={this.state.layout}
          term={this.state.term}
          search={this.search.bind(this)}
          clearTerm={this.clearTerm.bind(this)}
        />
        <div className="movies-list">
          {this.state.results.map((el, idx) => {
            return (
              <ItemContainer
                id={idx}
                key={idx}
                layout={layout}
                product={el}
              />
            );
          })}
        </div>
      </div>
    );
  }

}

module.exports = App;
