import * as React from 'react';
import { Modal } from 'antd';
import { useGetPokemonDetails } from 'src/hooks/useGetPokemons';
import { useNavigate, useParams } from 'react-router-dom';
import { tss } from 'src/tss';
import { Loading } from 'src/components/Loading';
import { isErrorLike } from '@apollo/client/errors';

export const DetailsPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useGetPokemonDetails(Number(id));
  const navigate = useNavigate();
  const { classes } = useStyles();

  const handleOk = () => navigate('/list');

  const handleCancel = () => navigate('/list');

  if (loading) {
    return (
      <Modal
        title={`${data.id}: ${data.name}`}
        closable={{ 'aria-label': 'Custom Close Button' }}
        open
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Loading />
      </Modal>
    );
  }

  if (isErrorLike(error)) {
    return <p>Error fetching data. Please try again.</p>;
  }

  return (
    <Modal
      title={`${data.id}: ${data.name}`}
      closable={{ 'aria-label': 'Custom Close Button' }}
      open
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div>
        <div className={classes.imageContainer}>
          <img src={data.sprite} alt={data.name} className={classes.image} />
        </div>
        <h3 className={classes.header}>Types</h3>
        <ul>{data.types?.map((type) => <li>{type}</li>)}</ul>
        <h3 className={classes.header}>Size</h3>
        <ul>
          <li>Height: {data.height === undefined ? 'Unknown' : `${data.height}m`}</li>
          <li>Weight: {data.weight === undefined ? 'Unknown' : `${data.weight}kg`}</li>
        </ul>
        <h3 className={classes.header}>Stats</h3>{' '}
        <ul>
          {data.stats === undefined || data.stats.length === 0 ? (
            <p>No stats reported.</p>
          ) : (
            data.stats?.map((stat) => (
              <li>
                {stat.name.charAt(0).toUpperCase() + stat.name.slice(1).replaceAll('-', ' ')}:{' '}
                {stat.base_stat}
              </li>
            ))
          )}
        </ul>
        <p />
      </div>
    </Modal>
  );
};

const useStyles = tss.create(({ theme }: any) => ({
  header: {
    color: theme.color.text.surface,
  },
  imageContainer: {
    ...theme.flex,
    ...theme.flex.column,
    width: '100%',
  },
  image: {
    width: '200px',
  },
}));
