import { createTss, keyframes } from 'tss-react';

function useContext() {
  const theme = {
    color: {
      surface: '#000E1C',
      text: {
        primary: '#FAFAFA',
      },
    },

    pokemonGrid: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '3rem',
      width: '100%',
    },

    pokemonItem: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      padding: '1rem',
      borderRadius: '0.5rem',
      borderColor: '#FFFFFF',
      borderWidth: '1px',
      borderStyle: 'solid',
      gap: '5rem',
      transition: 'transform 0.3s',

      '&:hover': {
        transform: 'scale(1.025)',
        cursor: 'pointer',
      },

      informationColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.5rem',
      },

      image: {
        width: '200px',
      },
    },

    loading: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      color: '#FFFFFF',

      spinner: {
        width: '48px',
        height: '48px',
        border: '5px solid #FFF',
        borderBottomColor: 'transparent',
        borderRadius: '50%',
        display: 'inline-block',
        boxSizing: 'border-box',
        animation: `${spinnerRotation} 1s linear infinite`,
      },
    },

    search: {
      bar: {
        padding: '0.5rem',
        borderRadius: '0.5rem',
        borderColor: '#FFFFFF',
        borderWidth: '1px',
        borderStyle: 'solid',
        width: '80%',
        marginBottom: '2rem',
      },
      message: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
  };

  return { theme };
}

const spinnerRotation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const { tss } = createTss({ useContext });
export const useStyles = tss.create({});
