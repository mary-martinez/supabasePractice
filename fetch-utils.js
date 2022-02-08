const SUPABASE_URL = "https://nxkfcrgevcuksvdnaugc.supabase.co";
const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54a2ZjcmdldmN1a3N2ZG5hdWdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NjAsImV4cCI6MTk1OTkxNzQ2MH0.9e3rnFUxMChSkwzJQcBImTDSwY_4VDtfmLDUZ-dY7gc";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function getMovies() {
    // return the list of all movies
    const resp = await client.from("movies").select("*");
    // console.log(resp);
    return checkError(resp);
}

export async function getMoviesWithDirector() {
    // return the list of all the movies with their director
    const resp = await client.from('movies').select(`title, directors (name)`);
    // console.log(resp);
    return checkError(resp);
}

export async function getDirectorNames() {
    // return the list of the director's names
    const resp = await client.from('directors').select('name');
    // console.log(resp);
    return checkError(resp);
}

export async function getMovieById(id) {
    // return the movie with the given id
    // const resp = await client.from('movies').select(`id, title`);
    // const resp = await client.from('movies').select(`id, title`);
    // const title = resp[id];
    // console.log(title);
    const resp = await client.from('movies').select('title').eq('id', id).single();
    console.log(resp);
    return checkError(resp);
}

export async function getMovieByTitle(title) {
    // return the movie with the given title
}

export async function getOldestMovie() {
    // return the oldest movie (assume the database is not sorted)
}

export async function getMoviesAfter(year) {
    // return movies made after the year passed in
}

export async function getHighestGrossingMovie() {
    // return movie with the highest box office total
}
