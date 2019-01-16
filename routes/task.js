const express = require('express');
const router = express.Router();
const taskOperations = require('../resource/taskOperations');

router.get('/',function(req,res){
    taskOperations.getAllMeasurements(req,res);
})
router.get('/series',function(req,res){
    taskOperations.getAllSeriesData(req,res);
})
router.get('/getOneSeries',function(req,res){
    taskOperations.getOneSeriesData(req,res);
})
router.post('/',(req,res)=>{
    taskOperations.writeNewSeriesData(req,res);
})
router.post('/influx/measurement/:name',function(req,res){
    taskOperations.createNewMeasurement(req,res);
})
router.delete('/series/:title',function(req,res){
    taskOperations.deleteSeriesData(req,res);
})

module.exports = router;