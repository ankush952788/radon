const express = require('express');
const router=express.Router();

router.get('/movies', function (req,res){
     const movie=['SPIDERMAN','KRISH','BATMAN','TITANIC','RAAZ','ALONE']
     res.send(movie)
})


          
router.get('/movies/:indexNumber', function (req,res){
         const movie=['SPIDERMAN','KRISH','BATMAN','TITANIC','RAAZ','ALONE']   
         const id = req.params.indexNumber   
        if(id < movie.length){
            res.send(movie[id])
        }else{
            res.send ('used valid index')
        }
})

router.get('/films', function (req,res){
  const movie=[{
    'id': 1,
    'name': 'The Shining'
   }, {
    'id': 2,
    'name': 'Incendies'
   }, {
    'id': 3,
    'name': 'Rang de Basanti'
   }, {
    'id': 4,
    'name': 'Finding Nemo'
   }]
   res.send(movie)
})

router.get('/films/:filmId', function (req,res){
    const movie=[{
      'id': 1,
      'name': 'The Shining'
     }, {
      'id': 2,
      'name': 'Incendies'
     }, {
      'id': 3,
      'name': 'Rang de Basanti'
     }, {
      'id': 4,
      'name': 'Finding Nemo'
     }]
     const Id= req.params.filmId
     if(Id < movie.length){
        res.send(movie[Id])
     }   else{
         res.send('No movie exists with this id')
     }   
     
    
  })
  

module.exports = router;