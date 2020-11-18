import React from 'react';
import { connect } from "react-redux";
import { getAllNotes } from '../redux/action';
import { Grid } from '@material-ui/core';
import Note from './Note';

function Dashboard(props: any) {


    return (
        //marginLeft:20,marginRight:20,
        <div style={{marginTop:10,marginBottom:100}}>
            <Grid container>
            {
                props.notes.map((note:any)=>{
                   return <Grid key={Math.random()} container item xs={12} md={6}><Note key={note.id} id={note.id} title={note.title} description={note.description}></Note></Grid>;
                })
            }                       
                
            </Grid>
    </div>
    );
};

const mapStateToProps=(state:any)=>
({  
    notes:state.notes
});

export default connect(mapStateToProps,{getAllNotes})(Dashboard);