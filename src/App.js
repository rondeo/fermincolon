import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Grid from '@material-ui/core/Grid'
import { Paper, Tooltip } from '@material-ui/core';
import Fermin from './components/Fermin/Fermin';
import papibeisbol from './images/papibeisbol.jpg';
import fermincolon from './images/fermincolon.jpg';
import italy from './images/italy.jpg';
import hassan from './images/hassan.jpg';
import UPR from './images/UPR.jpg';
import Acuity_institute from './images/Acuity_Institute.png';
import taubetapirium from './images/taubetapirum.jpg';
import NNA from './images/NNA.png';

function App() {
  return (
    <div className="App">
      <div className="opacitybox">
                    <div>
                      <p className="underconstruction">This site is under construction</p>
                    </div>
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
                    <p className="quote " >Quality is not an act, it is a habit.</p>
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
          I am Scientist that enjoys data analysis and using systems of efficiency to break down a a problem and finding the most elegant and outright solution. I value analytical thinking and using rational discourse.
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
          <li><img src={Acuity_institute}  alt="sixsigma" height="200px" width="200px" /></li>
          </Grid>
          <Grid item xs={6} >
          <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5IaQ_l6gPewl9f42q91B20Ysovz2M9rpcg9teWNF8D87M-yzR"  alt="RIT" height="200px" width="200px" /></li>
          </Grid>
          <Grid item xs={6} >
          <li><img src={UPR} alt="UPR" height="200px" width="200px" /></li>
          </Grid>
          <Grid item xs={6} >
          <li><img src="http://scholarmathtutoring.com/wp-content/uploads/2016/03/Logo2016-1-e1458933919449.jpg"  alt="smart" height="200px" width="200px" /></li>
          </Grid>
          <Grid item xs={6} >
          <li><img src={taubetapirium}  alt="smart" height="200px" width="200px" /></li>
          </Grid>
          <Grid item xs={6} >
          <li><img src={NNA}  alt="smart" height="200px" width="200px" /></li>
          </Grid>
          </Grid>
        </ul>
         </div>
        </Paper>
        </Grid>
        <Grid item xs={1} />

        {/*  */}
        <Grid item xs={2} />
        <Grid item xs={8} >
          <div>
          <Paper className="papercolors">
          <Tooltip title="Link to Work">
          <p>Doctorate Work: <a href="https://scholarworks.rit.edu/theses/3025/" >A New Framework for an electrophotographic printer model</a></p>
          </Tooltip>
          <div className="educationlist">
          <p>Education:</p>
          <ul>
            <li>Ph.D.</li>
            <li>First Masters</li>
            <li>Second Masters</li>
          </ul> 
          </div> 
            </Paper>
          </div>
        </Grid>
        <Grid item xs={2} />
        </Grid>
        <Grid container spacing={24} >
          <Grid item xs={12} >
            <div className="middlespace">
              <div className="spacerdiv">
                <p>Interests:</p>
                <Grid container spacing={24}
                direction="row"
                justify="flex-start"
                alignItems="center" >
                <Grid item xs={3} >
                <Tooltip title="Beisbol" >
                <img src={papibeisbol} alt="beisbol" height="400" width="400" className="interestpictures" />
                </Tooltip>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={3}>
                <Tooltip title="Travel" >
                <img src={italy} alt="Wedding" height="400" width="400" className="interestpictures" />
                </Tooltip>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={3}>
                <Tooltip title="Celebrations" >
                <img src={fermincolon} alt="Wedding" height="400" width="400" className="interestpictures" />
                </Tooltip>
                </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      <Grid container spacing={24}>
        <Grid item xs={2} />
        <Grid item xs={8} >
          <Paper className="papercolors">
            <p>I revel in life and love to be out on the Baseball field. The game has enchanted me since my father showed me on the Island of Puerto Rico</p>
            <p>My three children, Ambar, Adriel, and Ulyses, who throughout this journey
              metamorphosed from young adults into amazing human beings, remind me of the
                true purpose in life, unconditional love.</p>
            <p>To the most important person in my life, my wife Aida, I offer my unconditional thanks for your support. I know what you had to put up with. Now
              we both have come to understand the challenges and sacrifices associated with
              being a Ph.D. candidate or the companion of one. Without you, I would not
              have been able to complete this process. I am grateful for your patience, love and
              understanding. I also know that despite the pride that comes with completing
              one of my childhood dreams, my life would be pointless without you, and that
              I would trade everything in an instant to assure that we continue to spend our
              lives together. Omaetoy!
              </p><img src={hassan} height="100" width ="100" alt="hassan" ></img>
          </Paper>
        </Grid>
        <Grid item xs={2} />
      </Grid>
      </div>
      </header>
    </div>
  );
}

export default App;
