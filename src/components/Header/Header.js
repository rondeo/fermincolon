import React from 'react';
import Grid from '@material-ui/core/Grid';
import PhotoComponent from '../PhotoComponent/PhotoComponent';

const Header = () => {
    return (
        <div>
            <Grid container spacing={24} >
                <div>
                    <Grid item xs={3} >
                       <PhotoComponent />
                       <p>hello</p>
                    </Grid>
                    <Grid item xs={7} >
                        {/* blank space fopr filling */}
                    </Grid>
                    <Grid item xs={2} >
                        {/* Contacts and links */}
                    </Grid>
                </div>
            </Grid>
        </div>
    );
};

export default Header;