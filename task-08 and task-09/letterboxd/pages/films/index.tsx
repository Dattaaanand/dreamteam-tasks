import { GetServerSideProps } from "next";
import Image from "next/image";
import styles from 'styles/Films.module.css'
import Link from "next/link";

interface Movie {
  id: number;
  title: string;
  backdrop_path: string | null;
  overview : string;
  poster_path: string;
  release_date: string;
}

interface FilmsProps {
  movies: Movie[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
        accept: 'application/json',
      },
    }
  );
  const data = await res.json();

  return {
    props: { movies: data.results },
  };
};

export default function Films({ movies }: FilmsProps) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainHeading}>Popular Movies</h1>
      <div className={styles.gridContainer}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movieContainer}>
            <Link href={`/films/${movie.id}`}>
                <h2 style={{ fontSize: "16px", marginTop: "10px" }}>{movie.title}</h2><br />
                <h3 >{movie.release_date}</h3>
                  <Image
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    width={500}
                    height={300}
                    className={styles.movieInfo}
                  />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
