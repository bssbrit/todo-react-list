const Searchbar = ({ name, funcao }) => {
  return (
    <div>
      <p>{name}</p>
      <form>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => {
              funcao(e.target.value);
            }}
          />
        </label>
      </form>
      <button type="submit">Add</button>
    </div>
  );
};

export default Searchbar;
