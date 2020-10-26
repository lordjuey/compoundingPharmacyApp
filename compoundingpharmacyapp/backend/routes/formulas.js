const router = require ('express').Router();
let Formula = require('../models/formula.model');

router.route('/').get((req,res)=>{
    Formula.find() 
    .then(formulas => res.json (formulas))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=> {
    const formulaname = req.body.formulaname;
    const formulatype = req.body.formulatype;
    const strength = req.body.strength;
    const noteDate = Date.parse(req.body.noteDate);
    const formulaNote = req.body.formulaNote;


    const newFormula = new Formula({
    formulaname,
    formulatype,
    strength,
    noteDate,
    formulaNote,
});

newFormula.save()
 .then(()=> res.json ('New formula joined the chaos!'))
 .catch((err => res.status(400).json('Error: ' + error)));

 router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
      .then(exercise => res.json(exercise))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
      .then(() => res.json('Exercise deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
      .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);
  
        exercise.save()
          .then(() => res.json('Exercise updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;