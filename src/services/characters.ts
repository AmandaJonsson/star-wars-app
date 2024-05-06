export async function fetchCharacters(url: string) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(error){
        alert('Error fetching people'); 
    }
}