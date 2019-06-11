import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Grid from '@material-ui/core/Grid'
import { Paper } from '@material-ui/core';
import Fermin from './components/Fermin/Fermin';


function App() {
  return (
    <div className="App">
      <div className="opacitybox">
      <Grid container
      spacing={24} 
      direction="row"
      justify="center"
      alignItems="center">
                    <Grid item xs={3} >
                    <Header />
                    </Grid>
                    <Grid item xs={6} >
                    <Fermin />
                    <p className="quote" >Quality is not an act, it is a habit.</p>
                    <p className="quote" >-Aristotle</p>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={2}
                    direction='column'
                    alignContent="center"
                    justify="center" >
                    <div className="contactlistdiv" >
                    <br />
                      <div>
                      <h1>  Contact</h1>
                       <ul className="contactlist">
                           <li><a href="https://www.linkedin.com/in/fermincolondatascientist/">Linked-in Account <img src="https://pbs.twimg.com/profile_images/1068098089125171200/jwQJ5rLn.jpg"  alt="linkedin" height="20px" /></a></li>
                           <br />
                           <li>fermincolon@gmail.com </li>
                       </ul>
                       </div>
                      </div>
                    </Grid>
            </Grid>
      </div>
      <header className="App-header">
      <div>
      <Grid container spacing={24}
      direction="row"
      justify="flex-start"
      alignItems="center" >
        <Grid item xs={2} />
        <Grid item xs={4} >
        <Paper className="papercolors">
        <h1>Who I am:</h1>
        <p>
          I am Scientist that enjoys data analysys and using systems of efficiency to break down a a problem and finding the most elegant and outright solution. I value analytical thinking and using rational discourse.
        </p>
        </Paper>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={4} >
        <Paper className="papercolors" >
        <div className="acoladeslist">
        <h1>Acolades:</h1>
        <ul>
          <Grid container spacing={24}
          direction="row"
          justify="flex-start"
          alignItems="center"
          >
          <Grid item xs={6} >
          <li><img src="https://media.licdn.com/dms/image/C4D0BAQEWJ3-pkBtkIA/company-logo_400_400/0?e=1568246400&v=beta&t=Kw_j53oklBFaMzAiFpC8PSGD6LDeTs3N_wXM-Qcs8cM"  alt="harvard" height="200px" width="200px" /></li>
          </Grid>
          <Grid item xs={6} >
          <li><img src="https://images.localist.com/photos/558629/huge/ef5bbd4e5dce05e18f5a12b414de0321288ef747.jpg"  alt="UofR" height="200px" width="200px" /></li>
          </Grid>
          <Grid item xs={6} >
          <li><img src="https://www.iassc.org/wp-content/uploads/2017/07/IASSC-Certification-Badge-250x250.png"  alt="sixsigma" height="200px" width="200px" /></li>
          </Grid>
          <Grid item xs={6} >
          <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5IaQ_l6gPewl9f42q91B20Ysovz2M9rpcg9teWNF8D87M-yzR"  alt="RIT" height="200px" width="200px" /></li>
          </Grid>
          <Grid item xs={6} >
          <li><img src="https://upload.wikimedia.org/wikipedia/en/3/39/Upr_logo.jpg"  alt="UPR" height="200px" width="200px" /></li>
          </Grid>
          <Grid item xs={6} >
          <li><img src="http://scholarmathtutoring.com/wp-content/uploads/2016/03/Logo2016-1-e1458933919449.jpg"  alt="smart" height="200px" width="200px" /></li>
          </Grid>
          </Grid>
        </ul>
         </div>
        </Paper>
        </Grid>
        <Grid item xs={1} />
        </Grid>
      </div>
      </header>
    </div>
  );
}

export default App;
