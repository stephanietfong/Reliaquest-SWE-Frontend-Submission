import React from 'react';
import { tss } from 'src/tss';

interface PokemonListItemProps {
  id: string;
  name: string;
  types?: string[];
  sprite?: string;
}

const PokemonListItem = ({ id, name, types = [], sprite = '' }: PokemonListItemProps) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.listItem}>
        {sprite && <img src={sprite} alt={name} className={classes.image} />}
        <div className={classes.informationColumn}>
          <h1>{`${id}: ${name}`}</h1>
          <h3>{types.length === 1 ? `Type: ${types[0]}` : `Types: ${types.join(', ')}`}</h3>
          <p>Click to Learn More!</p>
        </div>
      </div>
    </div>
  );
};

PokemonListItem.defaultProps = {
  types: [],
  sprite: '',
};

const useStyles = tss.create(({ theme }: any) => ({
  root: {
    color: theme.color.text.primary,
    width: '80%',
  },
  listItem: {
    ...theme.pokemonItem,
  },
  image: {
    ...theme.pokemonItem.image,
  },
  informationColumn: {
    ...theme.pokemonItem.informationColumn,
  },
}));

export default PokemonListItem;
