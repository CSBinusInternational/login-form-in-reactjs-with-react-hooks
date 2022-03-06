import React, {useState} from "react";
import LoginForm from "./components/LoginForm";
import {Box, Grid, Typography} from '@material-ui/core';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  };

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    // if ((details.email == adminUser.email) && (details.password == adminUser.password)) {
    //   console.log("Logged in");
    //   setUser({
    //     name: details.name,
    //     email: details.email,
    //   });
    // } else {
    //   console.log("Invalid Login");
    //   setError("Invalid login");
    // }
      setUser({
        name: details.name,
        email: details.email,
      });
  }

  const Logout = () => {
    console.log("Logout");
    setUser({name: "", email: ""});
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        // <div className="welcome">
        //   <h2>Welcome, <span>{user.name}</span></h2>
        //   <button onClick={Logout}>Logout</button>
        // </div>
        <Box
          component='div'
          sx={{width: '100vw', height: '100vh', overflow: 'hidden'}}
        >
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{width: '100%', height: '100%'}}
          >
            <Grid item>
                <Typography variant="h1" component="div" gutterBottom>
                    Welcome
                </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h1" component="div" gutterBottom>
                  {user.name}
              </Typography>
            </Grid>
          </Grid>
        
        </Box>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
