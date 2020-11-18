import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TextField, Button, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { addNote } from '../redux/action';
import { v1 as uuidv1 } from 'uuid';

//@ts-ignore
const useStyles = makeStyles((theme) => ({
    root: {
        // width: '100%',
        margin: '2.5%',
        overflowX:"hidden"
        // marginLeft:'2%',
        // marginRight:'2%'
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

function AddNote(props: any) {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [expanded, setExpanded] = React.useState('false');

    const handleChange = (panel: any) => (event: any, isExpanded: any) => {
        setExpanded(isExpanded ? panel : false);
    };

    const addNote = (title: string, description: string) => {
        let titleVar = title;
        let descVar = description;
        setTitle('');
        setDescription('');
        setExpanded('');
        props.addNote(
            {
                id: uuidv1(),
                title: titleVar,
                description: descVar
            }
        );

    };

    return (
        <div className={classes.root}>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    {/* <Typography className={classes.heading}>General settings</Typography> */}
                    <Typography className={classes.secondaryHeading}>Take a note...</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container
                        direction="column"
                        justify="center"
                        alignItems="center">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            addNote(title, description);
                        }
                        }>

                            <Grid item container ><TextField required id="title" label="Title" value={title} onChange={(e) => { e.preventDefault(); setTitle(e.target.value); }} /></Grid>
                            <Grid item container><TextField required id="description" label="Description" value={description} onChange={(e) => { e.preventDefault(); setDescription(e.target.value); }} /></Grid>
                            <Grid item container style={{ marginTop: 5, marginBottom: 10 }}>
                                <Button variant="contained" color="primary" type="submit"
                                >Add Note</Button></Grid>
                        </form>
                    </Grid>

                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}
const mapStateToProps = (state: any) => (
    {
        notes: state.notes
    });
export default connect(mapStateToProps, { addNote })(AddNote);