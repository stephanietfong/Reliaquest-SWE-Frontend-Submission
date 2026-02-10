import * as React from 'react';
import { useState } from 'react';
import { tss } from '../tss';
import { useGetPokemons } from 'src/hooks/useGetPokemons';
import PokemonListItem from 'src/components/PokemonListItem';
import { Loading } from 'src/components/Loading';
import { isErrorLike } from '@apollo/client/errors';

export const PokemonListPage = () => {
  const { classes } = useStyles();
  const { data, loading, error } = useGetPokemons();
  const [search, setSearch] = useState('');
  const displayData = data.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()));

  if (loading) {
    return <Loading />;
  }

  if (isErrorLike(error)) {
    return <p>Error fetching data. Please try again.</p>;
  }

  return (
    <div className={classes.root}>
      <input
        type="text"
        placeholder="&#128269; Search Pokémon By Name..."
        onChange={(e) => setSearch(e.target.value)}
        className={classes.searchBar}
      />

      {displayData.length === 0 ? (
        <div className={classes.searchMessage}>
          <h1 style={{ color: 'white' }}>No Pokémon Found &#128533;</h1>
          <h1>Please Try Again!</h1>
        </div>
      ) : (
        <div className={classes.container}>
          {displayData.map((d) => (
            <PokemonListItem key={d.id} id={d.id} name={d.name} sprite={d.sprite} types={d.types} />
          ))}
        </div>
      )}
    </div>
  );
};

const useStyles = tss.create(({ theme }: any) => ({
  root: {
    color: theme.color.text.primary,
    ...theme.flex,
    ...theme.flex.column,
  },
  searchBar: {
    ...theme.border.solidWhite,
    padding: '0.5rem',
    width: '80%',
    marginBottom: '2rem',
  },
  searchMessage: {
    ...theme.flex,
    ...theme.flex.column,
  },
  container: {
    ...theme.flex,
    ...theme.flex.column,
    gap: '3rem',
    width: '100%',
  },
}));
