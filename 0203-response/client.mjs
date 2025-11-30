const response = 
await fetch('http://localhost:3000/produtos', 
  {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username: 'Bento', password: '2102'})
  }
);

console.log(response); 

const body = await response.json();
console.log(body.nome);