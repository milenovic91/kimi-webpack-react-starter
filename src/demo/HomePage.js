import React from 'react';
import styles from './scss/HomePage.scss';
// when loading like this, value is either real resource url or base64 url - depends on configuration and image size.
import bgdUrl from './resources/Belgrade-Night-Panorama-870x400.jpg';
import smallIconUrl from './resources/home-icon.png';
import {connect} from 'react-redux';

export function HomePage({message}) {
  return (
    <div className={styles.homePage}>
      {message}
      <img src={bgdUrl} />
      <div className={styles.srbThumbnail} />
      <img src={smallIconUrl} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  message: state.homePage.message
});

export default connect(mapStateToProps)(HomePage);
