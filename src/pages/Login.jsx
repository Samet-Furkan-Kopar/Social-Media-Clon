import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import HttpsIcon from "@mui/icons-material/Https";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { AccountCircle } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setProgress(true);
  
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
  
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", requestOptions);
      const responseData = await response.json();
      console.log(responseData);

      setProgress(false);
  
      navigate("/");
    } catch (error) {
      setProgress(false);
      console.error("error:", error.message);
    }
  };
  
  const EndAdorment = ({ visible, setVisible }) => {
    return (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={() => setVisible(!visible)}
          onMouseDown={(e) => e.preventDefault()}
        >
          {visible ? (
            <VisibilityIcon color="secondary" />
          ) : (
            <VisibilityOffIcon />
          )}
        </IconButton>
      </InputAdornment>
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login Form
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            variant="outlined"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            autoComplete="email"
            autoFocus
            color="secondary"
            {...register("email")}
            error={!!errors.email}
            helperText={errors?.email?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle color="secondary" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            variant="outlined"
            id="password"
            name="password"
            label="Password"
            type={visible ? "text" : "password"}
            autoComplete="current-password"
            color="secondary"
            {...register("password")}
            error={!!errors.password}
            helperText={errors?.password?.message}
            InputProps={{
              endAdornment: (
                <EndAdorment visible={visible} setVisible={setVisible} />
              ),
              startAdornment: (
                <InputAdornment position="start">
                  <HttpsIcon color="secondary" />
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="secondary"
            startIcon={
              progress ? (
                <CircularProgress color="inherit" size={"16px"} />
              ) : (
                <LoginIcon />
              )
            }
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"You don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;

Login.propTypes = {
  visible: propTypes.bool,
  setVisible: propTypes.func,
};