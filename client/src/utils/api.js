fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: 'example_user',
      password: 'password123',
      email: 'example_user@example.com'
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
  