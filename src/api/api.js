const API_URL = 'https://swapi.dev';

const request = (url) => {
  return fetch(`${API_URL}${url}`)
    .then(response => {
      if (response.ok) {

        return response.json();
      }

      throw new Error(`${response.status} - ${response.statusText}`);
    })
}

export const getCharacters = () =>
  request('/api/people/');
