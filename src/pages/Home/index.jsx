import React from 'react';
import { styled } from '@mui/material/styles';

import { Box, Grid, Paper } from '@mui/material';

import { MovieCard } from '../../components';

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: 'calc(100vh - 100px)',
  position: 'sticky',
  top: '20px',
}));

export const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>Filters section</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Box sx={{ flexGrow: 1, padding: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={4} lg={3}>
                  <MovieCard />
                </Grid>
                <Grid item xs={6} sm={4} lg={3}>
                  <MovieCard />
                </Grid>
                <Grid item xs={6} sm={4} lg={3}>
                  <MovieCard />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedMovies>Selected movies</SelectedMovies>
        </Grid>
      </Grid>
    </Box>
  );
};
