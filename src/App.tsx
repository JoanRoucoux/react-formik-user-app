import * as React from 'react';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { Avatar, Typography } from '@mui/material';
import { EnhancedUserForm, Layout } from './components';

const App = () => (
  <Layout>
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Sign up
    </Typography>
    <EnhancedUserForm />
  </Layout>
);

export default App;
