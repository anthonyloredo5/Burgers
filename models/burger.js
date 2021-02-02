var orm = require('../config/orm.js');

const burger = {
    selectAll(cb){
       // cb()
        orm.selectAll(function(data){
            console.log('WE hit the model', data)
            cb(data);
        });
    },
    insertOne(input, input2, cb){
        orm.insertOne(input, input2, function(data){
            console.log(data);
            cb(data);
        });
    },
    updateOne(devoured,id, cb){
        orm.updateOne(devoured, id, function(data){
            console.log(data);
            cb(data);
        })
    }
}

module.exports = burger;