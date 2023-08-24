import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await db.connect();
    const result = await client.query('SELECT * FROM Projects;');
    client.release();

    // Converter os dados binários em base64
    const rowsWithBase64Images = result.rows.map((row: any) => {
      const imageBase64 = Buffer.from(row.image).toString('base64');
      
      // Retornar um novo objeto com a imagem em base64 e outras variáveis do objeto original
      const newRow = {
        ...row,
        image: imageBase64,
      };
      
      return newRow;
    });

    return res.status(200).json(rowsWithBase64Images);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao buscar notícias.' });
  }
}
