var React = require('react');
var RatingStars = require('./RatingStars');

class ItemListLayout extends React.Component {

  render() {
    var img = 'http://s7d5.scene7.com/is/image/bluestembrands/'  + this.props.displayImage.url.replace('.jpg', '') + '?$thumbnail300$';
    return (
      <div className="movie-row">
        <div className="movie-row__img-container">
          <div className="movie-row__img" style={{'backgroundImage': `url(${img})`}} />
        </div>
        <div className="movie-row__info">
          <h1 className="movie-row__title">{this.props.name}</h1>
          <h2 className="movie-row__year">${this.props.price} Only ${this.props.pricePerMonth} per month</h2>
        </div>
        <div className="movie-row__desc" dangerouslySetInnerHTML={{__html: this.props.description}} />
        <RatingStars
          max={5}
          score={this.props.score}
        /> 
      </div>
    );
  }
}

module.exports = ItemListLayout;
