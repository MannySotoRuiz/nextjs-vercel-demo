import Image from "next/image";

// export async function generateStaticParams() {
//     type MovieInfo = {
//         adult: boolean;
//         backdrop_path: string;
//         genre_ids: number[];
//         id: number;
//         original_language: string;
//         original_title: string;
//         overview: string;
//         popularity: number;
//         poster_path: string;
//         release_date: string;
//         title: string;
//         video: boolean;
//         vote_average: number;
//         vote_count: number
//     }
//     const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
//     const res = await data.json();
//     return res.results.map((movie: MovieInfo) => ({
//         movie: toString(movie.id),
//     }));
//     // so when we are pushing this code to production, it is going to go through
//     // each movie, get their id and then go through each one of them and render them out
// }

type MovieProp = { params: { movie: string } };

export default async function MovieDetail({ params }: MovieProp) {
    const { movie } = params;
    const imgPath: string = "https://image.tmdb.org/t/p/original";
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, { next: { revalidate: 60 } });
    const res = await data.json();

    return (
        <div>
           <div>
                <h2 className="text-2xl">{res.title}</h2>
                <h2 className="text-lg">{res.release_date}</h2>
                <h2>Runtime: {res.runtime} minutes</h2>
                <h2 className="bg-green-600 text-sm text-white inline-block my-2 py-2 px-4 rounded-md">{res.status}</h2>
                <Image className="my-12 w-full" src={imgPath + res.backdrop_path} width={1000} height={1000} alt={res.title} priority/>
                <p>{res.overview}</p>
           </div>
        </div>
    );
}