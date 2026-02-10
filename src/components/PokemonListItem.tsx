import React from 'react';
import { tss } from 'src/tss';
import { useNavigate, useLocation } from 'react-router-dom';

interface PokemonListItemProps {
  id: string;
  name: string;
  types?: string[];
  sprite?: string;
}

const PokemonListItem = ({ id, name, types = [], sprite = '' }: PokemonListItemProps) => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick() {
    navigate(`/list/${id}`, { state: { background: location } });
  }

  return (
    <div className={classes.root} onClick={handleClick} aria-hidden="true">
      <div className={classes.listItem}>
        {sprite && <img src={sprite} alt={name} className={classes.image} />}
        <div className={classes.informationColumn}>
          <h1>
            {`${id}: `}
            <span>{name}</span>
          </h1>
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
    ...theme.flex,
    ...theme.flex.row,
    ...theme.border.solidWhite,
    padding: '1rem',
    gap: '5rem',
    transition: 'transform 0.3s',

    '&:hover': {
      transform: 'scale(1.025)',
      cursor: 'pointer',
    },
  },
  image: {
    width: '200px',
  },
  informationColumn: {
    ...theme.flex,
    ...theme.flex.column,
    alignItems: 'flex-start',
  },
}));

export default PokemonListItem;
