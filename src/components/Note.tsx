import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from "react-redux";
import { deleteNote } from '../redux/action';
import { Card, CardContent, Typography, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: "smaller",
    },
    pos: {
        marginBottom: 12,
    },
});
function Note(props: any) {
    const classes = useStyles();
    console.info(props);
    const deleteNote = (id: any) => {
        console.info('delete clicked')
        props.deleteNote(id);
    };

    return (
        // ,paddingLeft:"3%",paddingRight:"3%"
        <div style={{ width: "100%", margin: "2%" }}>
            <Card className={classes.root}>
                <CardContent>
                    
                            <Typography style={{ fontSize: "medium",fontWeight:"bold" }}>                                
                                {props.title}<CloseIcon style={{ cursor: "hand", color: "red", float: "right" }} onClick={() => { deleteNote(props.id) }} />
                            </Typography>
                    
                            <Typography className={classes.title} color="textSecondary">
                                {props.description}
                            </Typography>
                    
                </CardContent>
            </Card>
        </div>
    );
};

const mapStateToProps = (state: any) => (
    {
        notes: state.notes
    });

export default connect(mapStateToProps, { deleteNote })(Note);