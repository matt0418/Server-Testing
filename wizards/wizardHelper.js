const db = require('../data/dbConfig')

module.exports = {
    getAll,
    add,
    remove
}

function getAll() {
    return db('wizards')
}

async function add(wizard) {
    const [id] = await db('wizards').insert(wizard)
    return db('wizards').where({ id }).first()
}

async function remove(id) {
    return db('wizards')
    .where({id})
    .del()
}