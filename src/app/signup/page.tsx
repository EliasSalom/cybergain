'use client';

import  { FC, useState } from 'react';
import '@/style/SignUp/SignUpForm.scss';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
    TextField,
    Button,
    Container,
    Typography,
    Grid,
    Checkbox,
    FormControlLabel,
    InputAdornment,
    IconButton,
} from '@mui/material';

const SignUpForm: FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        termsAccepted: false,
    });

    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        termsAccepted: '',
    });

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    const validateForm = () => {
        const newErrors: typeof errors = {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phoneNumber: '',
            termsAccepted: '',
        };

        if (formData.fullName.trim().length < 2) {
            newErrors.fullName = 'Full Name must be at least 2 characters long';
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(formData.password)) {
            newErrors.password =
                'Password must be at least 8 characters long and contain uppercase, lowercase, digits, and special characters';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        const phonePattern = /^[0-9]{10}$/;
        if (formData.phoneNumber && !phonePattern.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Please enter a valid phone number';
        }

        if (!formData.termsAccepted) {
            newErrors.termsAccepted = 'You must accept the terms and conditions';
        }

        setErrors(newErrors);

        return Object.values(newErrors).every((error) => error === '');
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted successfully', formData);
            // TODO:
        }
    };

    return (
        <Container maxWidth="sm" className="signup-container">
            <Typography variant="h4" gutterBottom className="signup-title">
                Request A Demo
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Full Name"
                            name="fullName"
                            variant="outlined"
                            fullWidth
                            value={formData.fullName}
                            onChange={handleChange}
                            error={!!errors.fullName}
                            helperText={errors.fullName}
                            required
                            className="form-input"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email Address"
                            name="email"
                            type="email"
                            variant="outlined"
                            fullWidth
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            required
                            className="form-input"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            fullWidth
                            value={formData.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                            required
                            className="form-input"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Confirm Password"
                            name="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            variant="outlined"
                            fullWidth
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
                            required
                            className="form-input"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() =>
                                                setShowConfirmPassword(!showConfirmPassword)
                                            }
                                            edge="end"
                                        >
                                            {showConfirmPassword ? (<VisibilityOff />) : (<Visibility />)}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Phone Number"
                            name="phoneNumber"
                            variant="outlined"
                            fullWidth
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            error={!!errors.phoneNumber}
                            helperText={errors.phoneNumber}
                            className="form-input"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="termsAccepted"
                                    checked={formData.termsAccepted}
                                    onChange={handleCheckboxChange}
                                    className="form-checkbox"
                                />
                            }
                            label="I accept the terms and conditions"
                            className="form-checkbox-label"
                        />
                        {errors.termsAccepted && (
                            <Typography sx={{ color: "#ec7878" }} variant="body2">
                                {errors.termsAccepted}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            className="form-button"
                        >
                            Request A Demo
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default SignUpForm;
