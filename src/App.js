import React from 'react'
import Grid from '@material-ui/core/Grid'
import Grow from '@material-ui/core/Grow'

import './App.css'
import Card from './components/card/Card'

function App() {
  return (
    <div className="App">
      <div className="App__main">
        <Grid
          container
          style={{ height: '100%', flexGrow: '1' }}
          direction="row"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item className="Grid__item" container xs={12} sm={6} md={4} lg={3}>
            <Grow>
              <Card></Card>
            </Grow>
          </Grid>
          <Grid item className="Grid__item" container xs={12} sm={6} md={4} lg={3}>
            <Grow>
              <Card></Card>
            </Grow>
          </Grid>
          <Grid item className="Grid__item" container xs={12} sm={6} md={4} lg={3}>
            <Grow>
              <Card></Card>
            </Grow>
          </Grid>
          <Grid item className="Grid__item" container xs={12} sm={6} md={4} lg={3}>
            <Grow>
              <Card></Card>
            </Grow>
          </Grid>
          <Grid item className="Grid__item" container xs={12} sm={6} md={4} lg={3}>
            <Grow>
              <Card></Card>
            </Grow>
          </Grid>
          <Grid item className="Grid__item" container xs={12} sm={6} md={4} lg={3}>
            <Grow>
              <Card></Card>
            </Grow>
          </Grid>
          <Grid item className="Grid__item" container xs={12} sm={6} md={4} lg={3}>
            <Grow>
              <Card></Card>
            </Grow>
          </Grid>
          <Grid item className="Grid__item" container xs={12} sm={6} md={4} lg={3}>
            <Grow>
              <Card></Card>
            </Grow>
          </Grid>
          <Grid item className="Grid__item" container xs={12} sm={6} md={4} lg={3}>
            <Grow>
              <Card></Card>
            </Grow>
          </Grid>
          <Grid item className="Grid__item" container xs={12} sm={6} md={4} lg={3}>
            <Grow>
              <Card></Card>
            </Grow>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default App
