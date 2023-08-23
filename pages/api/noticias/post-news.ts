import { db } from '@vercel/postgres';

export default async function post(request, response) {
  const client = await db.connect();

  try {
    const { title, abstract, link, image } = request.body;

    await client.query(`
      CREATE TABLE IF NOT EXISTS News (
        Id serial PRIMARY KEY,
        Title varchar(255),
        Abstract varchar(255),
        Link varchar(255),
        Image bytea
      );
    `);

    const imageBytes = image.toString('base64')

    await client.query(
      `INSERT INTO News (Title, Abstract, Link, Image) VALUES ($1, $2, $3, $4);`,
      [title, abstract, link, imageBytes]
    );

    return response.status(201).json({ message: 'News added successfully' });
  } catch (err) {
    return response.status(500).json({ error: err.message });
  } finally {
    client.release();
  }
}




