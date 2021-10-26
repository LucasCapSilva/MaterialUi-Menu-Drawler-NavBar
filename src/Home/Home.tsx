import { Grid, Box, Typography } from '@material-ui/core'

import React from 'react'

function Home() {
    return (
        <div style={{ minHeight: "100vh", marginTop: "50px" }}>
            <Grid container >

                <Grid item xs={6}>
                    <Box display="flex" alignItems="center" sx={{ width: '100%', height: '100%' }}>
                        <Box display="flex" justifyContent="center">
                            <Box>
                                <Box display="flex" justifyContent="center">
                                    <Typography variant="h4" color="initial">Bem vindo ao blog</Typography>
                                </Box>

                                <Box p={2}>
                                    <Typography variant="body1" color="initial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate enim labore porro obcaecati necessitatibus a, reprehenderit saepe optio ducimus perferendis eos odio vero. Dolores eos sint saepe quaerat quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nostrum quasi doloremque corrupti aliquid doloribus mollitia delectus debitis autem enim eos odio quidem suscipit nam expedita quo consequatur quam perferendis!</Typography>
                                </Box>
                            </Box>


                        </Box>


                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box display="flex" justifyContent="center" mt={2} >
                        <img src="https://i.imgur.com/EcUJeAH.png" alt="" style={{ width: "100%" }} />
                    </Box>
                </Grid>


            </Grid>
        </div>
    )
}

export default Home