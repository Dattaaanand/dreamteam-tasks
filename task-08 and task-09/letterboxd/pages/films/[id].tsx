import { GetServerSideProps } from "next";
import Image from "next/image";
import styles from "../../styles/MovieDetails.module.css";

interface Movie {
  id: number;
  title: string;
  backdrop_path: string | null;
  overview: string;
  poster_path: string | null;
  release_date: string;
}

interface Cast {
  id: number;
  name: string;
  profile_path: string | null;
  character: string;
}

interface FilmDetailProps {
  movie: Movie;
  cast: Cast[];
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params!;
  
  const movieRes = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
  );
  const movieData = await movieRes.json();

  const castRes = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
        accept: "application/json",
      },
    }
  );
  const castData = await castRes.json();
  const topCast = castData.cast.slice(0, 6);

  return {
    props: { movie: movieData, cast: topCast },
  };
};

export default function FilmDetail({ movie, cast }: FilmDetailProps) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w1280";
  const PROFILE_BASE_URL = "https://image.tmdb.org/t/p/w200";

  return (
    <div className={styles.container}>
      <div className={styles.backdropContainer}>
        <Image
          src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
          alt={movie.title}
          layout="responsive"
          width={1280}
          height={720}
          unoptimized
          className={styles.backdropImage}
        />
      </div>

      <div className={styles.detailContainer}>
        <div className={styles.posterContainer}>
          <Image
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            width={200}
            height={300}
            className={styles.posterImage}
          />
        </div>

        <div className={styles.detailHolder}>
          <h2>
            {movie.title} | {movie.release_date}
          </h2>
          <p>{movie.overview}</p>
        </div>
      </div>


      <div className={styles.castHolder}>
        <h3 className={styles.castText}>Cast</h3>
        <div className={styles.gridHolder}>
          {cast.map((actor) => (
            <div key={actor.id} className={styles.castColumn}>
              <Image
                src={`${PROFILE_BASE_URL}${actor.profile_path}`
                }
                alt={actor.name}
                width={100}
                height={150}
                className={styles.actorImage}
              />
              <div className={styles.castInfo}>
                <p className={styles.actorName}>{actor.name}</p>
                <p className={styles.actorCharacter}>{actor.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.ratingContainer}>
        <div className={styles.ratingImg}>
          <h1 className={styles.ratingText}>Rating</h1>
          <Image className={styles.imageStyle} src="/images/rating.png" alt='rating' width={500} height={200} unoptimized/>
        </div>
      </div>
    </div>
  );
}
