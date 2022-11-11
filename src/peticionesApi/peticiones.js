export const obtenerDatos = async () => {
  const listaCaballeros = await fetch("http://localhost:5000/santos", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  if (listaCaballeros.ok) {
    return listaCaballeros.json();
  }
};

export const enviarDatos = async (data) => {
  const caballeroEnviar = await fetch("http://localhost:5000/santos", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });
  if (caballeroEnviar.ok) {
    return caballeroEnviar.json();
  }
};
export const editarDatos = async (data) => {
  const caballeroEditar = await fetch(
    `http://localhost:5000/santos/${data.id}`,
    {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  if (caballeroEditar.ok) {
    return caballeroEditar.json();
  }
};
export const eliminarDatos = async (id) => {
  const caballeroEliminar = await fetch(`http://localhost:5000/santos/${id}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(),
  });
  if (caballeroEliminar.ok) {
    return caballeroEliminar.json();
  }
};
