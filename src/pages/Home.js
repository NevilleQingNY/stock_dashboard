import React, { useState } from 'react';
import Cards from '../components/Cards';
import Search from '../components/Search';

const Home = () => {
  const [searchString, setSearchString] = useState('');
  const handleSearchStringUpdate = (searchString) => {
    setSearchString(searchString);
  };

  return (
    <>
      <Search searchStringUpdated={handleSearchStringUpdate} />
      <Cards searchString={searchString} />
    </>
  );
}

export default Home;