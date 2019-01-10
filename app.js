const express = require('express');
const Influx = require('influx');
const port = 3000;
const url = 'http://localhost:8086/sample'
const influx = new Influx.InfluxDB(url);
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    console.log('welcome');
    res.send('welcome');
});

app.get('/influx',(req,res)=>{
    influx.getSeries({
        measurement : "userDetails",
        database : "sample"
    }).then(names=>{
        console.log('series names are : ',names);
        res.send({
            status : 200,
            message : 'series details : '+names
        });
    });
    influx.getMeasurements().then(names=>{
        console.log('measurement names are : ',names);
    })
})
app.post('/influx',(req,res)=>{
    console.log("req data : ",req.body);
    influx.writePoints([req.body]).then(()=>{
        console.log('successfully created');
        res.send('successfully created');
    });
})
app.post('/influx/measurement/:name',function(req,res){
    var measurement_name = req.params.name;
    console.log("req data from params : ",measurement_name);
    console.log("req data : ",req.body);
    influx.writeMeasurement(measurement_name,[req.body]).then(()=>{
        console.log('measurement created successfully');
        res.send('measurement created successfully');
    });
})
app.delete('/influx/:measurement',function(req,res){
    console.log("req data from delete method : ",req.params.measurement);
    influx.dropMeasurement(req.params.measurement).then(()=>{
        res.send('measurement droped successfully');
    });
})
app.delete('/influx/db/:db',function(req,res){
    console.log("db name for drop db : ",req.params.db);
    influx.dropDatabase(req.params.db_name).then(()=>{
        res.send('database droped successfully');
    })
})
app.listen(port,()=>{
    console.log('app listening on : ',port);
});