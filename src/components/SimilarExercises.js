import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import HorizontalScrollbar from "././HorizontalScrollbar";
import Loader from "./Loader";

const SimilarVideos=({targetMuscleExercises, equipmentExercises})=>{
    return(
        <Box sx={{ mt: "100px", xs: "0"}}>
           <Typography variant="h3"> Exercises that target the same muscle group</Typography>
           <Stack direction="row" sx={{ p: "2", position: "relative"}} >
              {targetMuscleExercises.length ? 
               <HorizontalScrollbar data={targetMuscleExercises}/>
               : <Loader />}
           </Stack>
        </Box>
    )
}

export default SimilarVideos;