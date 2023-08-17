import { db } from '@vercel/postgres'

export default async function handler(request, response) {
  const client = await db.connect();

  try {
    await client.sql`CREATE TABLE IF NOT EXISTS News ( Title varchar(255), Abstract varchar(255), Link varchar(255));`;
    const noticias = ['Energisa', 'Teste', 'Postgres']

    await client.sql`INSERT INTO News (Title, Abstract, Link) VALUES (${noticias[0]}, ${noticias[1]},${noticias[3]});`;
  } catch (err) {
    return response.status(500).json({err});
  }

  const noticias = await client.sql`SELECT * FROM News;`;
  return response.status(200).json({noticias});

}