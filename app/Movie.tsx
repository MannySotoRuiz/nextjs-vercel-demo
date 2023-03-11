import Link from "next/link";
import Image from "next/image";

export default function Movie({title, id, poster_path, release_date} : { title: string, id: number, poster_path: string, release_date: string }) {
    const imgPath: string = "https://image.tmdb.org/t/p/original";

    return (
        <div>
            <h1>{title}</h1>
            <h2>{release_date}</h2>
            <h2>
                <Link href={`/${id}`}>
                    <Image src={imgPath + poster_path} width={800} height={800} alt={title}/>
                </Link>
            </h2>
        </div>
    );
}