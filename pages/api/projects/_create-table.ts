import { db } from '@vercel/postgres';

export default async function post(request, response) {
  const client = await db.connect();

  try {
    const { title, abstract, link, autor, state, date, text, image } = request.body;

    await client.query(`
      CREATE TABLE IF NOT EXISTS Projects (
        Id serial PRIMARY KEY,
        Title varchar(255),
        Abstract varchar(255),
        Link varchar(255),
        Autor varchar(255),
        State varchar(255),
        Date varchar(255),
        Text varchar(255),
        Image bytea
      );
    `);

    const imageBytes = image.toString('base64')

    await client.query(
      `INSERT INTO Projects (Title, Abstract, Link, Autor, State, Date, Text, Image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`,
      [title, abstract, link, autor, state, date, text, imageBytes]
    );

    return response.status(201).json({ message: 'Projects added successfully' });
  } catch (err) {
    return response.status(500).json({ error: err.message });
  } finally {
    client.release();
  }
}
