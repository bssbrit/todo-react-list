/* criar uma variavel temaClaro = true
função ligar() = {
if (temaClaro) {
  temaClaro 
}
  tema */

const ThemeBtn = () => {
  let temaClaro = true;
  const changeTheme = () => {
    if (!temaClaro) {
      document.body.className = "lightTheme";
      temaClaro = true;
      console.log("claro");
    } else {
      document.body.className = "darkTheme";
      temaClaro = false;
      console.log("escuro ");
    }
  };
  return (
    <div>
      <button onClick={changeTheme}></button>
    </div>
  );
};

export default ThemeBtn;
