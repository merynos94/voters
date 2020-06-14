const express = require('express');

const router = express.Router();


const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State ',
        description: ' One of the most skycrapper in the world',
        location: {
            lat: 40.7484474,
            lng: -73.9871516
        },
        address: 'Krakow 2212',
        creator: 'u1' 

    }
];

router.get('/:pid', (req,res,next) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    });
    
    res.json({place});
});

module.exports = router;