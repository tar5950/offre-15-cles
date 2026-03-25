export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  try {
    const response = await fetch('http://204.168.143.240:3001/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    })
    const data = await response.json()
    res.json(data)
  } catch (e) {
    res.status(500).json({ reply: 'Erreur serveur' })
  }
}
