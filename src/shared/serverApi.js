export default async function ServerApi({ newEmail }) {
  const response = await fetch('http://localhost:3001/userEmail', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(
    {emailInfo: newEmail  , 
    }
  )
})
  if (!response.ok) throw new Error(`Server error: ${response.status}`);
  return response.json().catch(() => null);
}


