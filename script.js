const clienteAxios = axios.create({
  baseURL: "http://localhost",
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

const obtenerProductos = async () => {
  try {
    const { data } = await clienteAxios("/api/productos");
    console.log(data);
    console.log(data.data);
  } catch (error) {
    console.log(error);
  }
};
//obtenerProductos();

const datos = {
  email: "mimo027@gmail.com",
  password: "Ringostar_027",
};

async function logearse() {
  const { data } = await clienteAxios.post("/api/login", datos);
  localStorage.setItem("AUTH_TOKEN", data.token);
  console.log(token);
}
//logearse();

async function getUser() {
  const token = localStorage.getItem("AUTH_TOKEN");
  const response = await clienteAxios("/api/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data.name);
}
getUser();
