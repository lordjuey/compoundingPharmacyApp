const router = require('express').Router();
let Pharmacist = require('../models/pharmacist.model');

router.route('/').get((req,res)=> {
    Pharmacist.find()
    .then(pharmacists => res.json(pharmacists))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=>{

    const phName = req.body.phName;
    const newPharmacist = new Pharmacist({phName});

    newPharmacist.save()
    .then(()=> res.json('new pharmacist added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;  

