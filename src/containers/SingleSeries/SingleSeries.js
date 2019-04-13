import React, { Component } from 'react';
import Loader from '../../components/Loader/Loader';
import { Link } from 'react-router-dom';

class SingleSeries extends Component {
  state = {
    show: null
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then((res) => res.json())
      .then(json => this.setState({ show: json }))
  }

  render() {
    const { show } = this.state;

    return (
      <div>
        {
          show === null && <Loader />
        }
        {
          show !== null
          &&
          <div>
            <p>{show.name}</p>
            <p>Premiered: {show.premiered}</p>
            {
              show.rating.average !== null
              &&
              <p>Rating - {show.rating.average}</p>
            }
            <p>Episodes - {show._embedded.episodes.length}</p>
            <p>
              <img alt="Show" src={show.image.medium} />
            </p>
          </div>
        }
        <div>
          <p>
            <Link to="/">Return to search list</Link>
          </p>
        </div>
      </div>
    )
  }
}

export default SingleSeries;