import * as React from 'react';
import Box from '@mui/material/Box';

import { BorderLinearProgress } from './styles';

type IProps = {
  progressValue: number;
};

const CustomizedProgress = ({ progressValue }: IProps) => (
  <Box sx={{ flexGrow: 1 }}>
    <BorderLinearProgress variant="determinate" value={progressValue} />
  </Box>
);

export default CustomizedProgress;
