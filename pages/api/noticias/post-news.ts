import { db } from '@vercel/postgres';

export default async function post(request, response) {
  const client = await db.connect();

  try {
    const { title, abstract, link } = request.body;

    // Criar a tabela se ela não existir
    await client.query(`
      CREATE TABLE IF NOT EXISTS News (
        Title varchar(255),
        Abstract varchar(255),
        Link varchar(255)
      );
    `);

    // Inserir os dados na tabela
    await client.query(
      `INSERT INTO News (Title, Abstract, Link) VALUES ($1, $2, $3);`,
      [title, abstract, link]
    );

    return response.status(201).json({ message: 'News added successfully' });
  } catch (err) {
    return response.status(500).json({ error: err.message });
  } finally {
    client.release(); // Liberar o cliente após uso
  }
}





