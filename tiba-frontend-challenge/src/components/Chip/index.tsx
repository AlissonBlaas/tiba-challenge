import * as React from 'react';
import Chip from '@mui/material/Chip';

type IProps = {
  label: string;
};

const ColorChips = ({ label }: IProps) => (
  <Chip
    label={label}
    color={label === 'ativo' ? 'success' : 'warning'}
    style={{ fontWeight: 'bold' }}
  />
);

export default ColorChips;
