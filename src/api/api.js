const API_URL = 'https://swapi.dev'; // вынеси в глобальные константы

const request = (url) => {
  return fetch(`${API_URL}${url}`)
    .then(response => {
      if (response.ok) {

        return response.json();
      }
      // почему не в .catch() ?
      throw new Error(`${response.status} - ${response.statusText}`);
    })
}

export const getCharacters = () =>
  request('/api/people/');
