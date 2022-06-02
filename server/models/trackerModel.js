const { Pool } = require('pg');

// Check the readme on how to create your own database
//OLD: // const PG_URI = 'postgres://dgajqpxb:ARHWGQ1g6Mqr3jbjScZrkGQDDyL0g5gr@fanny.db.elephantsql.com/dgajqpxb';
const PG_URI = "postgres://dtovfolt:iMvC1QC4Lz3KRsir_CZBb6-Zrug09fxm@castor.db.elephantsql.com/dtovfolt";

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};