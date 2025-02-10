import { useLoaderData } from "react-router-dom";
interface SerieType {
  title: string;
  id: number;
  year: number;
  poster: string;
  country: string;
  synopsis: string;
}
export default function Programs() {
  const series = useLoaderData() as SerieType[];
  console.info(series);

  return (
    <section className="seriesConteneur">
      <h2>Séries</h2>
      <div>
        {series.map((serie) => (
          <article key={serie.id}>
            <h3>{serie.title}</h3>
            <img src={serie.poster} alt={serie.synopsis} />
            <p>Année: {serie.year}</p>
            <p>Pays: {serie.year}</p>
            <p>Sinopsis: {serie.synopsis}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
