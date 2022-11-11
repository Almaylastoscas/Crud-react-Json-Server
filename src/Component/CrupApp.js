import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import React, { useEffect, useState } from "react";
import { obtenerDatos } from "../peticionesApi/peticiones";
import { enviarDatos } from "../peticionesApi/peticiones";
import { editarDatos } from "../peticionesApi/peticiones";
import { eliminarDatos } from "../peticionesApi/peticiones";
import Loadig from "./Loadig";

export const CrupApp = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      obtenerDatos().then(setDb);
      setLoading(false);
    }, 4000);
  }, []);

  const createData = (data) => {
    data.id = Date.now();

    enviarDatos(data).then((res) => console.log(res));
    setDb([...db, data]);
  };
  const updateData = (data) => {
    editarDatos(data).then((res) => console.log(res));
    let NewData = db.map((el) => (el.id === data.id ? data : el));

    setDb(NewData);
  };
  const deleteData = (id) => {
    let eliminar = window.confirm(
      `esta seguro de editar el registro con el Id  ${id}`
    );

    if (eliminar) {
      eliminarDatos(id).then((res) => console.log(res));
      setDb((old) => old.filter((el) => el.id !== id));
    }
  };
  return (
    <div>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {loading && <Loadig />}
      {db && (
        <CrudTable
          data={db}
          deleteData={deleteData}
          setDataToEdit={setDataToEdit}
        />
      )}
    </div>
  );
};
