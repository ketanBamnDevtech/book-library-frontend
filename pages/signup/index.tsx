import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import { signUpSchema } from "../../utils/schema"
import { useQuery, useMutation } from '@apollo/client';
import { SIGNUP_USER } from '@/gql/userQueries';
import { setUser } from '@/store/slices/user.slice';
import { toast } from 'react-toastify';
import { useAppDispatch } from '@/hooks';
import { setUseProxies } from 'immer';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SingUp() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [signupUser, { loading, error, data }] = useMutation(SIGNUP_USER, {
    onError: (error) => {
      //handle error
    },
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      passwordConfirm: ''
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
        signupUser({ variables: { input: { ...values } } })
        .then((result: any) => {
          const { errors,data } = result;
          if (errors?.name === "ApolloError") {
            toast.error(errors.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });  
    },
  });

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = formik;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate autoComplete='off'
            sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  autoFocus
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  error={touched.name && errors.name ? true : false}
                  helperText={touched.name && errors.name}
                />

                {/* <TextField
                  error
                  id="outlined-error-helper-text"
                  label="Error"
                  defaultValue="Hello World"
                  helperText="Incorrect entry."
                /> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={touched.email && errors.email ? true : false}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={touched.password && errors.password ? true : false}
                  helperText={touched.password && errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordConfirm"
                  label="confirm Password"
                  type="password"
                  id="passwordConfirm"
                  autoComplete="new-password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordConfirm}
                  error={touched.passwordConfirm && errors.passwordConfirm ? true : false}
                  helperText={touched.passwordConfirm && errors.passwordConfirm}
                />
              </Grid>

              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
              onClick={(e: React.MouseEvent<HTMLElement>): void => {
                handleSubmit()
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link variant="body2"
                  onClick={() => {
                    router.push('/signin')
                  }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}