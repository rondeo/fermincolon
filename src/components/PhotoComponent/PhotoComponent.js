import React from 'react';
import Grid from '@material-ui/core/Grid';
import fermincolon from '../../images/fermincolon.jpg'
const PhotoComponent = () => {
    return (
        <div>
            <Grid container spacing={24} >
                <div>
                    <img src={fermincolon} alt="face" className="profilephoto" />
                </div>
            </Grid>
        </div>
    );
};

export default PhotoComponent;