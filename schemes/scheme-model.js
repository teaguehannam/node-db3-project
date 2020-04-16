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
function findSteps(id){
    return 
        db('steps as s' ).join('schemes as sc', 'sc.id', 's.scheme_id')
            .select('s.id', 'sc.scheme_name', 's.instructions')
            .where({ scheme_id: id });
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