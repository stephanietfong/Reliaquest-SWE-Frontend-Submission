import { createTss } from 'tss-react';

function useContext() {
  const theme = {
    color: {
      surface: '#000E1C',
      text: {
        primary: '#FAFAFA',
        secondary: '#808080',
      },
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      column: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
      },
    },
    border: {
      solidWhite: {
        borderRadius: '0.5rem',
        borderColor: '#FFFFFF',
        borderWidth: '1px',
        borderStyle: 'solid',
      },
    },
  };

  return { theme };
}

export const { tss } = createTss({ useContext });
export const useStyles = tss.create({});
