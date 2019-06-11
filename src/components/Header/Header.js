import React from 'react';
import Grid from '@material-ui/core/Grid';
import PhotoComponent from '../PhotoComponent/PhotoComponent';

const Header = () => {
    return (
        <div>
            <Grid container spacing={24}>
                    <Grid item xs={3} >
                       <PhotoComponent />
                    </Grid>
                    <Grid item xs={7}  >
                    </Grid>
                    <Grid item xs={3} >
                    </Grid>
            </Grid>
        </div>
    );
};

export default Header;