import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';


async function queryServer() {
    console.log("Start fetching server info")
    const response = await fetch('http://localhost:4000/');
    const data = await response.json();
    console.log(data)
    return data

}



function ServerStats() {
    const [players, setPlayers] = React.useState();
    const [latency, setLatency] = React.useState("");
    const [version, setVersion] = React.useState("");

    async function parseInfo() {
        let serverInfo = await queryServer()
        setPlayers(serverInfo.players.sample)
        setLatency(serverInfo.roundTripLatency)
        setVersion(serverInfo.version.name)

    }

    const displayStatus = () => {
        if (latency) {
            return (
                <Button endIcon={<PlayCircleFilledWhiteIcon />} style={{ color: "#5CFF5C" }}>
                    online
                </Button>
            )
        }
        return (
            <Button endIcon={<PauseCircleFilledIcon />} style={{ color: "#FF2E2E" }}>
                offline
            </Button>
        )

    }


    const displayPlayer = () => {

        console.log(players)
        if (players == null) {
            return <div></div>
        }


        players.sort((a, b) => {
            let fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });


        return (
            <Container>
                <Typography variant="h5">Players:</Typography>
                <br />
                {players.map((player, index) => (
                    <Typography key={index}>- {player.name}</Typography>
                ))}
                <br />
            </Container>
        )
    }

    React.useEffect(() => {
        parseInfo()
    }, []);

    return (
        <Container sx={{ mb: 3 }} color="text.secondary" align="center">
            {displayStatus()}
            {version && <Typography>Version: {version}</Typography>}
            {latency && <Typography>Latency: {latency}</Typography>}
            <br />
            {displayPlayer()}
            <Button variant="contained" onClick={async () => { await parseInfo() }} >Refresh Data</Button>
        </Container >
    );
}

export default ServerStats