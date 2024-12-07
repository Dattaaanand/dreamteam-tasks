import Image from "next/image";
import MovieCard from "../pages/homepage/moviecard/MovieCard";
import Posters from "../pages/homepage/posters/Posters";
import Grid from "../pages/homepage/grid/Grid";
import Footer from "../pages/footer/Footer";
import Header from '../pages/header/Header'

export default function Home() {
  return (
    <>
    <div>
      <Header/>
      <MovieCard/>
      <Posters/>
      <Grid/>
      <Footer/>
    </div>
    </>
  );
}
