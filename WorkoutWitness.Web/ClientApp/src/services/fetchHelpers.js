export function Get(url) {
  return fetch(url, {
    credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'GET'
  });
} 

export function Post(url, body) {
   return fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
   });
}
