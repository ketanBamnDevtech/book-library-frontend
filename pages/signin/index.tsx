import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import API_URL from "../../config"
import { useRouter } from 'next/router'
import { useFormik } from 'formik';
import { signInSchema } from "../../utils/schema"
import { SIGNIN_USER } from '@/gql/userQueries';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { setToken } from '@/store/slices/user.slice';
import { useAppDispatch } from '@/hooks';
import { set_cookie } from '@/utils/functions';

import styles from '@/styles/login.module.css'
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

export default function SignIn() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [loginUser, { loading, error, data }] = useMutation(SIGNIN_USER, {
    onError: (error) => {
      console.log(error);
      // handle error here
    },
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: async values => {
      loginUser({ variables: { input: { ...values } } })
        .then((result: any) => {
          const { errors, data } = result;
          if (errors?.name === "ApolloError") {
            return toast.error(errors.message);
          }
          dispatch(setToken(data?.loginUser?.access_token))
          set_cookie('token', data?.loginUser?.access_token)
          router.push('/dashboard');
        })
        .catch((error) => {
          console.log(error);
        }
      );
    },
  });

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = formik;
  return (
    <ThemeProvider theme={theme} >
      <div className={styles.signinmain}>
        
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
          <Avatar sx={{ m: 1, bgcolor: '#1A0F07' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" className={styles.signinbox}
            noValidate sx={{ mt: 1 }}>
            <TextField className={styles.inputfield}
              style={{borderRadius:"50px"}}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              error={touched.email && errors.email ? true : false}
              helperText={touched.email && errors.email}
            />
            <TextField className={styles.inputfield}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={touched.password && errors.password ? true : false}
              helperText={touched.password && errors.password}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button  className={styles.siginBTN}
              type="button"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{ mt: 3, mb: 2 }}
              onClick={(e: React.MouseEvent<HTMLElement>): void => {
                handleSubmit()
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2" className={styles.signinLink}> 
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link variant="body2" className={styles.signinLink}
                  onClick={() => {
                    router.push('/signup')
                  }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>

      </div>
    </ThemeProvider>
  );
}