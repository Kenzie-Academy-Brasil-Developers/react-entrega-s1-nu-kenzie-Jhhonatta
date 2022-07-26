import { useState } from "react";

function ButtonDelete({
  listTransactions,
  indice,
  setListTransactions,
  setFilterList,
}) {
  function handleDelete() {
    const newArray = listTransactions.filter((_, index) => index !== indice);
    setListTransactions(newArray);

    console.log(newArray);
  }
  return <button className="imgTrash" onClick={handleDelete}></button>;
}

export default ButtonDelete;
