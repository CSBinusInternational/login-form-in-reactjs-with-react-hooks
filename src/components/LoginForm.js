import React, { useState } from 'react'
import { FormGroup, TextField, Button, makeStyles, createTheme, Typography, ThemeProvider, Grid, Box } from '@material-ui/core';
import { orange, green } from '@material-ui/core/colors';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        password: ""
    });

    const theme = createTheme({
        palette: {
            primary: {
                main: orange[400]
            },
            secondary: {
                main: green[400]
            }
        },
    });

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    const formGroupStyling = makeStyles({
        root: {
            width: '20em'
        }
    })();

    const submitButtonStyling = makeStyles({
        root: {
            
        }
    })();

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner"
                style={{height: "100vh", overflowY: 'hidden'}}
            >
                <Box
                    sx={{width: '100%', height: '100%'}}
                >
                    <ThemeProvider theme={theme}>
                        <FormGroup
                            style={{width: '100%', height: '100%'}}
                            onSubmit={submitHandler}
                            >
                            <Grid
                                container
                                spacing={2}
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                style={{width: '100%', height: '100%'}}
                            >
                                {/* <h2>Login</h2> */}
                                <Grid item>
                                    <Typography variant="h4" component="div" gutterBottom>
                                        Login
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        type='text'
                                        label="Name"
                                        variant="filled"
                                        placeholder="MrFancyPants"
                                        onChange={e => setDetails({...details, name: e.target.value})}
                                        />
                                </Grid>
                                {/* <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" name="name" id="name" 
                                    onChange={e => setDetails({...details, name: e.target.value})}
                                    value={details.name}/>
                                </div> */}
                                <Grid item>
                                    <TextField
                                        type='text'
                                        label="Email"
                                        variant="filled"
                                        placeholder="name@example.com"
                                        onChange={e => setDetails({...details, email: e.target.value})}
                                        />
                                </Grid>
                                {/* <div className="form-group">
                                    <label htmlFor="email">Email: </label>
                                    <input type="email" name="email" id="email" 
                                    onChange={e => setDetails({...details, email:e.target.value})}
                                    value={details.email}/>
                                </div> */}
                                <Grid item>
                                    <TextField
                                        label="Password"
                                        variant="filled"
                                        type='password'
                                        onChange={e => setDetails({...details, password: e.target.value})}
                                        />
                                </Grid>
                                {/* <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" name="password" id="password" 
                                    onChange={e => setDetails({...details, password: e.target.value})}
                                    value={details.password}/>
                                </div> */}
                                {/* <input type="submit" value="LOGIN" /> */}
                                <Grid item>
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                        disableElevation
                                        type="submit"
                                        >
                                        LOGIN
                                    </Button>
                                </Grid>
                                <Grid item>
                                {(error != "") ? (
                                    // <div className="error">{error}</div>
                                    <Typography variant="body2" component="div">{error}</Typography>
                                    ) : ""}
                                </Grid>
                                
                            </Grid>
                        </FormGroup>
                    </ThemeProvider>
                </Box>
            </div>
        </form>
    )
}

export default LoginForm