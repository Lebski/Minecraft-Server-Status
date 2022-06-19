import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ServerStats from './ServerStats';
import './assets/css/font.css';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/Lebski/">
                PulpMud
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function App() {
    return (
        <Box style={{ backgroundImage: `url("/background.jpg")`, backgroundSize: "cover" }} height="100vh" marginTop="-30px" >
            <Container maxWidth="sm" style={{ paddingTop: "40px", }} >
                <Box sx={{ my: 4 }} style={{ backgroundColor: "rgba(0, 0, 0, 0.54)", paddingBottom: "10px", borderRadius: "15px" }}  >
                    <Typography variant="h2" component="h1" gutterBottom fontFamily={"VT323"} align="center" fontWeight={"600"}>
                        Minecraft Status
                    </Typography>
                    <ServerStats />
                    <Copyright />
                </Box>
            </Container>
        </Box >
    );
}