export async function getStaticPaths() {
  const res = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
  );
  const data = await res.json();

  const paths = data.drinks.map(drink => ({
    params: { id: drink.idDrink }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`
  );
  const data = await res.json();

  return { props: { data } };
}

function Post({ data }) {
  return <div>{data.drinks[0].strDrink}</div>;
}

export default Post;
