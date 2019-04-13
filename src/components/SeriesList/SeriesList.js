import React from 'react';
import styles from './SeriesList.module.css';
import { Link } from 'react-router-dom';

const SeriesListItem = ({ series }) => (
  <li>
    <Link to={`series/${series.show.id}`}>{series.show.name}</Link>
  </li>
)

const SeriesList = (props) => {
  return (
    <div>
      <ul className={styles.seriesList}>
        {
          props.list.map((series) => (
            <SeriesListItem series={series} key={series.show.id} />
          ))
        }
      </ul>
    </div>
  )
}

export default SeriesList;