var connection = require('./connection');

// Object for all our SQL statement functions.
const orm = {
    selectAll(cb) {
        const queryString = `SELECT * FROM burgers`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result)
        });
    },
    insertOne(input, input2, cb) {
        console.log('INPUTS COMING TO ORM!!', input, input2)
        const queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ("${input}", ${input2})`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            console.log('JUST SAVED THIS!!!',result);
            cb(result)
        });
    },
    updateOne(devoured, id, cb) {
        const queryString = `UPDATE burgers SET devoured = ${devoured} WHERE id = ${id}`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        });
    },
};

module.exports = orm;

