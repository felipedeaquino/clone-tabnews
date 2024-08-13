import pg from 'pg'
const { Client } = pg

async function query(queryObject) {
  const client = new Client({
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
  })

  await client.connect()

  const result = await client.query(queryObject)

  await client.end()

  return result
}

export default {
  query,
};
