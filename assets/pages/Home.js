import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import '../styles/home.scss';

export default function Home() {
  return (
    <main className='home'>
      <Grid container>
        <Grid
          item
          className='left-home'
          xs={12}
          sm={5}
          lg={6}
        />
        <Grid
          item
          className='right-home'
          xs={12}
          sm={7}
          lg={6}
        >
          <Typography
            variant='h5'
            component='h1'
            className='logo-title'
            gutterBottom
          >
            HitMyTeam
          </Typography>
          <Typography
            variant='h2'
            component='h2'
            color='primary'
            gutterBottom
          >
            Prenez part à l’histoire dès maintenant
          </Typography>
          <Typography variant='h4' component='h3'>
            Rejoignez HitMyTeam dès aujourd’hui.
          </Typography>
          <div className='buttons'>
            <Button
              size='large'
              variant='contained'
              color='primary'
              className='register-button'
            >
              S'inscrire
            </Button>
            <Button
              size='large'
              variant='outlined'
              color='primary'
            >
              Se connecter
            </Button>
          </div>
        </Grid>
      </Grid>
      <footer>
        <Typography className='title-footer' component='p'>
          © 2021 HitMyTeam
        </Typography>
        <TwitterIcon color='primary' />
      </footer>
    </main>
  );
}
