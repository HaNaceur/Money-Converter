function Main({ ingredients }) {
  return (
    <main className="container main">
      <h2>La recette:</h2>
      <p>Liste des ingredients</p>
      <ul className="ingredients">

        {ingredients.map((ingredient, index) => (
          <li
            key={ingredient}
          >
            {ingredient}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Main;
