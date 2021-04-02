export async function getStaticProps() {
  const res = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
  );
  const data = await res.json();
  return {
    props: {
      data
    }
  };
}

function Blog({ data }) {
  return (
    <ul>
      {data.drinks.map(drink => (
        <li key={drink.idDrink}>
          {' '}
          <div>
            <p>{drink.strDrink}</p>
            <img width="100" src={drink.strDrinkThumb} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Blog;
