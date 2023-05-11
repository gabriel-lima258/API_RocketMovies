const sqliteConnection = require('../../sqlite');
const createUsers = require('./createUsers');

async function migrationRun(){
    const schemas = [createUsers].join(''); // join junta os valores

    sqliteConnection()
    .then(db => db.exec(schemas)) // promise executando as migrations
    .catch(error => console.error(error)) // caso dê erro chame a função erro
}

module.exports = migrationRun;