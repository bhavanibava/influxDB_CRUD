const influx = require('../db/index');
const getAllMeasurements = function(req,res){
    return influx.getMeasurements().then(names=>{
        console.log('measurement names are : ',names);
        return res.send(names);
    });
}
var getAllSeriesData = function(req,res){
    return influx.query(`select * from todoTask`).then(data=>{
        // console.log('series data : ',data);
        return res.send({
            status : 200,
            message : data
        });
    }).catch(err=>{
        console.log('error : ',err);
        return res.status(500).send(err);
    })
}
const getOneSeriesData = function(req,res){
    return influx.query(`select * from todoTask where time = 1547461675367723685`).then(data=>{
        console.log('data from get one series method : ',data);
        return res.send(data);
    })
} 

const writeNewSeriesData = function(req,res){
    return influx.writePoints([req.body]).then(()=>{
        console.log('successfully created');
        return res.send({
            status : 200,
            message : 'successfully created'
        });
    });
}
const createNewMeasurement = function(req,res){
    var measurement_name = req.params.name;
    return influx.writeMeasurement(measurement_name,[req.body]).then(()=>{
        console.log('measurement created successfully');
        return res.send({
            status : 200,
            message : 'measurement created successfully'
        });
    });
}

const deleteSeriesData = function(req,res){
    // console.log('req data : ',req.params.title,`'${req.params.title}'`);
    influx.query(`DELETE FROM todoTask WHERE title='${req.params.title}'`).then(()=>{
        console.log('series data deleted successfully');
        res.send({
            status : 200,
            message : 'series data deleted successfully'
        });
    })
}
exports.getAllMeasurements = getAllMeasurements;
exports.getAllSeriesData = getAllSeriesData;
exports.getOneSeriesData = getOneSeriesData;
exports.writeNewSeriesData = writeNewSeriesData;
exports.createNewMeasurement = createNewMeasurement;
exports.deleteSeriesData = deleteSeriesData;