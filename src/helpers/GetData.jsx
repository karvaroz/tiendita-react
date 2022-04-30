import axios from "axios";

const URL_API = "http://la-tiendita.herokuapp.com/";

const ofertas = async (state) => {
  const request = await axios.get(
    `${URL_API}ofertas/`
  );
  state(request.data);
};

const populares = async (state) => {
  const request = await axios.get(`${URL_API}populares/`);
  state(request.data);
};

export { ofertas, populares };
