function ButtonFiltrarTodos({
  listTransactions,
  setListTransactions,
  setFilterList,
}) {
  function filtratTodos() {
    setFilterList(listTransactions);
  }

  return (
    <button className="buttonList" onClick={filtratTodos}>
      Todos
    </button>
  );
}

export default ButtonFiltrarTodos;
