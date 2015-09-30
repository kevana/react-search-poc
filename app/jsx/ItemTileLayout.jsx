var React = require('react');
var RatingStars = require('./RatingStars');

class ItemTileLayout extends React.Component {

  render() {
    var img = 'http://s7d5.scene7.com/is/image/bluestembrands/'  + this.props.displayImage.url.replace('.jpg', '') + '?$thumbnail300$';
    var url = '//fingerhut.com' + this.props.productURL;
    return (
      <div className="movie-tile">
        <a href={url}>
        <div className="movie-tile__img-container">
          <div className="movie-tile__img" style={{'backgroundImage': `url(${img})`}} />
        </div>
        <div className="movie-tile__info">
          <h1 className="movie-tile__title">{this.props.name}</h1>
          <h2 className="movie-tile__year">${this.props.price}</h2>
          <div className="movie-tile__stars">
            <RatingStars
              max={5}
              score={this.props.score}
            />
          </div>
        </div>
        </a>
      </div>
    );

  }

}

module.exports = ItemTileLayout;
