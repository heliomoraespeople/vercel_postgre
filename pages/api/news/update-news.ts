import { db } from '@vercel/postgres';

export default async function updateNews(request, response) {
  const client = await db.connect();

  try {
    const { id, title, abstract, link, autor, state, date, text, image } = request.body;

    // Atualizar os dados na tabela com base no ID
    await client.query(
      `
      UPDATE News
      SET Title = $1, Abstract = $2, Link = $3, Autor = $4, State = $5, Date = $6, Text = $7, Image = $8
      WHERE ID = $9;
    `,
      [title, abstract, link, autor, state, date, text, image, id]
    );

    return response.status(200).json({ message: 'News updated successfully' });
  } catch (err) {
    return response.status(500).json({ error: err.message });
  } finally {
    client.release();
  }
}





