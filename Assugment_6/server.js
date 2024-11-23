const express = require('express');
const app = express();
const port = 8000;

const motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
];


app.get('/', (req, res) => {
    res.json(motoGP);
});


app.get('/country', (req, res) => {
    const groupedByCountry = {};

    motoGP.forEach(race => {
        const country = race.winner.country;
        if (!groupedByCountry[country]) {
            groupedByCountry[country] = [];
        }
        groupedByCountry[country].push(race);
    });

    res.json(groupedByCountry);
});


app.get('/country/:country', (req, res) => {
    const country = req.params.country.toLowerCase();
    const racesInCountry = motoGP.filter(
        race => race.winner.country.toLowerCase() === country
    );

    if (racesInCountry.length > 0) {
        res.json(racesInCountry);
    } else {
        res.status(404).send('No races found with winners from this country');
    }
});


app.get('/name', (req, res) => {
    const groupedByName = {};

    motoGP.forEach(race => {
        const fullName = `${race.winner.firstName} ${race.winner.lastName}`;
        if (!groupedByName[fullName]) {
            groupedByName[fullName] = [];
        }
        groupedByName[fullName].push(race);
    });

    res.json(groupedByName);
});


app.get('/name/:fullName', (req, res) => {
    const fullName = req.params.fullName.toLowerCase();
    const racesByName = motoGP.filter(
        race =>
            `${race.winner.firstName} ${race.winner.lastName}`.toLowerCase() ===
            fullName
    );

    if (racesByName.length > 0) {
        res.json(racesByName);
    } else {
        res.status(404).send('No races found with this winner name');
    }
});


app.get('/races/:circuit', (req, res) => {
    const circuit = req.params.circuit.toLowerCase();
    const race = motoGP.find(r => r.circuit.toLowerCase() === circuit);
    if (race) {
        res.json(race);
    } else {
        res.status(404).send('Race not found');
    }
});

app.use((req, res) => {
    res.status(400).json({
        error: 'Bad Request. The URL you entered is invalid or not supported.'
    });
});


app.listen(port, () => {
    console.log(`MotoGP API is running at http://localhost:${port}`);
});


