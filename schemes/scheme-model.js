const db = require('../data/db-config');

// Functions to pass
module.exports ={
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};


function find() {
    return db('schemes');
};

function findById(id){
    return db ('schemes').where({id}).first();
};

function findSteps(id) { 
    return db('steps')
        .join("schemes", "schemes.id", "=", "scheme_id")
        .select("schemes.id", "scheme_name", "step_number", "instructions")
        .where({'scheme_id' : id})
        .orderBy('step_number')
};

function add (dataToInsert){
    return db('schemes').insert(dataToInsert);
};

function update(change, id){
    return db('schemes')
            .where({id})
            .update(change);
};

function remove(id){
    return db('schemes')
            .where({id}).del();
};