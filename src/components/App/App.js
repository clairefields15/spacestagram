import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { fetchPhotos } from '../../utils/apiCalls';
import { Cards } from '../Cards/Cards';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';
import rocket from '../../images/loading-rocket.gif';
import './App.css';

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      try {
        let data = await fetchPhotos();
        setPhotos(data);
      } catch (error) {
        setErrorMessage(error.message);
      }
      setLoading(false);
    };
    getPhotos();
  }, []);

  const handleLike = id => {
    if (!liked.includes(id)) {
      return setLiked([...liked, id]);
    } else {
      let newLikes = liked.filter(like => like !== id);
      return setLiked(newLikes);
    }
  };

  return (
    <main>
      <header>
        <h1>spacestagram</h1>
      </header>
      {!!errorMessage && <ErrorComponent message={errorMessage} />}
      {!errorMessage && loading && (
        <div className='loading'>
          <img src={rocket} alt='rocket launch gif' />
          <p>Loading photos...</p>
        </div>
      )}
      {!errorMessage && !loading && (
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Cards photos={photos} handleLike={handleLike} liked={liked} />
            )}
          />
          <Route
            render={() => (
              <ErrorComponent message={"Sorry that page doesn't exist"} />
            )}
          />
        </Switch>
      )}
    </main>
  );
};
