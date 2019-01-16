const Influx = require('influx');
const url = 'http://localhost:8086/task';
const influx = new Influx.InfluxDB(url);
influx.getDatabaseNames().then(names=>{
    if(!names.includes('task')){
        console.log('new database created');
        return influx.createDatabase('task');
    }
    else{
        console.log('database already exist');
    }
});
influx
module.exports = influx;