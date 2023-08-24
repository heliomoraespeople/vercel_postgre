import { db } from '@vercel/postgres';

export default async function deleteNewsTable(request, response) {
  const client = await db.connect();

  try {
    // Execute o comando DROP TABLE para excluir a tabela News
    await client.query(`DROP TABLE IF EXISTS Projects;`);

    return response.status(200).json({ message: 'Projects table deleted successfully' });
  } catch (err) {
    return response.status(500).json({ error: err.message });
  } finally {
    client.release();
  }
}
