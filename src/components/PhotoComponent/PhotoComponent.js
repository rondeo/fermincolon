import React from 'react';
import Grid from '@material-ui/core/Grid';
import profileimage from '../../images/profileimage.jpg'
const PhotoComponent = () => {
    return (
        <div>
            <Grid container spacing={24} >
                <div>
                    <div className="profilephotobackground">
                    <Grid container spacing={24}
                    direction="collumn"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12}>
                    <div>&nbsp;</div>
                    </Grid>
                    <Grid item xs={12}>
                    <div>&nbsp;</div>
                    </Grid>
                    <Grid item xs={12} >
                    <img src={profileimage} alt="face" className="profilephoto" width="200" height="270"/>
                    </Grid>
                    </Grid>
                    </div>
                </div>
            </Grid>
        </div>
    );
};

export default PhotoComponent;