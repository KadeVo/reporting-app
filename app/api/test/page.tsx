import type { NextApiRequest, NextApiResponse } from 'next'
import client from '@/lib/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db_Name = process.env.DB_NAME as string
  try {
    if (!client) {
      throw new Error('MongoDB client is not initialized')
    }
    await client.connect()
    const db = client.db('testdb')
    const result = await db.collection(db_Name).find({}).toArray()
    console.log('Connected')
    // res.status(200).json({ success: true, data: result })
  } catch (error: unknown) {
    console.error('Database connection error:', error)

    // res.status(500).json({ error: 'Failed connecting to database' })
  } finally {
    await client.close()
  }
}
