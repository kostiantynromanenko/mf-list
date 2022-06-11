import React from 'react';
import { List } from './list';
import { Box, Toolbar } from '@mui/material';
import styled from '@emotion/styled';

export default () => (
  <Box>
    <StyledToolbar>Image list</StyledToolbar>
    <List />
  </Box>
);

const StyledToolbar = styled(Toolbar)({
  color: 'red'
});
