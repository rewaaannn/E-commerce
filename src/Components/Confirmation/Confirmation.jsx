import React from 'react'
import { Container, Grid, List, ListItem, ListItemText, Button } from '@mui/material'

const Confirmation = ({ prevStep, nextStep, values }) => {
  console.log(values);
  const { userName, userEmail, userPassword, userNumber, Gender, userBirthday, userCountry, userCity, userAddress, verificationUserNumber, userImage } = values
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <Container  component="main" maxWidth="xs">
      <div>
        <List>
          <ListItem>
            <ListItemText primary="Email" secondary={userEmail}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Username" secondary={userName}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="password" secondary={userPassword}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="number" secondary={userNumber}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="gender" secondary={Gender}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="birthday" secondary={userBirthday}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="country" secondary={userCountry}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="city" secondary={userCity}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="address" secondary={userAddress}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="verification number" secondary={verificationUserNumber}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="user image" secondary={userImage}/>
          </ListItem>
        </List>

        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button 
              onClick={ Previous }
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Previous
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button 
              onClick={ Continue }
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Confirm & Continue
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default Confirmation