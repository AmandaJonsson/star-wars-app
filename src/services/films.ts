export async function fetchFilms() {
    try { 
        const response = await fetch('https://swapi.dev/api/films');
        const data = await response.json();
        return data;
    } catch(error){
        alert('Failed to fetch films');
    }
   
}