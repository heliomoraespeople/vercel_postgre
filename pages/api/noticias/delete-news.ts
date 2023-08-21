import { db } from '@vercel/postgres';

export default async function deleteNews(request, response) {
  const client = await db.connect();

  try {
    const { id } = request.body;

    // Deletar a notícia com base no ID
    await client.query(
      `
      DELETE FROM News
      WHERE TITLE = $1;
    `,
      [id]
    );

    return response.status(200).json({ message: 'News deleted successfully' });
  } catch (err) {
    return response.status(500).json({ error: err.message });
  } finally {
    client.release(); // Liberar o cliente após uso
  }
}
