import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";

function Form() {
  const [table, setTable] = useState([]);

  useEffect(() => {
    // Access initial value from session storage
    var data = sessionStorage.getItem("data");

    // Verify if data exists and SetTable
    if (data) {
      setTable(JSON.parse(data));
    }
  }, []);

  const [task, setTask] = useState([]);

  const [isValid, setIsValid] = useState(false);

  // This effect runs when 'task' changes
  useEffect(() => {
    // If there is data, the form is valid
    setIsValid(
      task.month && task.year && task.agente && task.mercado ? true : false
    );
  }, [task]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTable((prevTable) => [...prevTable, task]);
    sessionStorage.setItem("data", JSON.stringify(table));
  };

  const handleChange = (event) => {
    setTask((prevTask) => ({
      ...prevTask,
      [event.target.name]: event.target.value,
    }));
  };

  const sendTable = () => {
    alert("Tabla enviada");
    setTable([]);
    sessionStorage.removeItem("data", []);
  };

  const deleteTask = (index) => {
    var newTable = [...table];
    newTable.splice(index, 1);
    setTable(newTable);
    console.log(setTable(newTable));
    sessionStorage.setItem("data", JSON.stringify(newTable));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div id="Title" className="mt-24 mb-4">
        <span className="text-xl font-semibold whitespace-nowrap text-blue-900 mb-2">
          TARIFAS DE COMERCIALIZACIÓN
        </span>
        <p>
          Formulario para el ingreso de las tarifas de los diferentes
          comercializadores a nivel nacional.{" "}
        </p>
      </div>

      <div id="Form" className="mb-4">
        <form onSubmit={handleSubmit}>
          <select
            defaultValue={"DEFAULT"}
            onChange={handleChange}
            name="month"
            autoFocus
            className="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-15 p-1 mx-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="DEFAULT" disabled>
              Mes
            </option>
            {months.map((month) => {
              return (
                <option value={month} key={month}>
                  {month}
                </option>
              );
            })}
          </select>

          <select
            defaultValue={"DEFAULT"}
            onChange={handleChange}
            name="year"
            className="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-15 p-1  mx-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="DEFAULT" disabled>
              Año
            </option>
            {years.map((year) => {
              return (
                <option value={year} key={year}>
                  {year}
                </option>
              );
            })}
          </select>

          <select
            defaultValue={"DEFAULT"}
            onChange={handleChange}
            name="agente"
            className="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-18 p-1  mx-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="DEFAULT" disabled>
              Agente
            </option>
            {agentes.map((agente) => {
              return (
                <option value={agente} key={agente}>
                  {agente}
                </option>
              );
            })}
          </select>

          <select
            defaultValue={"DEFAULT"}
            onChange={handleChange}
            name="mercado"
            className="h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline w-18 py-1  mx-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="DEFAULT" disabled>
              Mercado
            </option>
            {mercados.map((mercados) => {
              return (
                <option value={mercados} key={mercados}>
                  {mercados}
                </option>
              );
            })}
          </select>

          <input
            type="number"
            placeholder="G"
            step="0.01"
            name="G"
            onChange={handleChange}
            required
            className="text-center inline m-1 p-1 h-8 w-14 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="T"
            step="0.01"
            name="T"
            onChange={handleChange}
            required
            className="text-center inline m-1 p-1 h-8 w-14 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="D (NT 1 OR)"
            step="0.01"
            name="D (NT 1 OR)"
            onChange={handleChange}
            required
            className="text-center inline m-1 p-1 h-8 w-24 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="D (NT 1 US)"
            step="0.01"
            name="D (NT 1 US)"
            onChange={handleChange}
            required
            className="text-center inline m-1 p-1 h-8 w-24 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="D (NT 2)"
            step="0.01"
            name="D (NT 2)"
            onChange={handleChange}
            required
            className="text-center inline m-1 p-1 h-8 w-20 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="D (NT 3)"
            step="0.01"
            name="D (NT 3)"
            onChange={handleChange}
            required
            className="text-center inline m-1 p-1 h-8 w-20 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="CV"
            step="0.01"
            name="CV"
            onChange={handleChange}
            required
            className="text-center inline m-1 p-1 h-8 w-12 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="PR (NT 1 OR)"
            step="0.01"
            name="PR (NT 1 OR)"
            onChange={handleChange}
            required
            className="text-center inline m-1 p-1 h-8 w-24 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="PR (NT 1 US)"
            step="0.01"
            name="PR (NT 1 US)"
            onChange={handleChange}
            required
            className="text-center inline m-1 p-1 h-8 w-24 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="PR (NT 2)"
            step="0.01"
            name="PR (NT 2)"
            onChange={handleChange}
            required
            className="text-center inline m-1 p-1 h-8 w-20 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="PR (NT 3)"
            step="0.01"
            name="PR (NT 3)"
            onChange={handleChange}
            required
            className="text-center inline m-1 p-1 h-8 w-20 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="R"
            step="0.01"
            name="R"
            onChange={handleChange}
            required
            className="text-center inline m-1 p-1 h-8 w-12 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <button
            type="submit"
            className="rounded hover:bg-blue-800 bg-color bg-blue-700 py-1 px-2 m-1 h-8 w-15 inline text-white sm:text-xs font-bold"
            disabled={!isValid}
          >
            AGREGAR
          </button>
        </form>
      </div>

      <div className="overflow-x-auto relative w-11/12 shadow-md  sm:rounded-lg flex flex-col justify-center items-center pb-2 mb-10 bg-gray-100 max-h-screen">
        <table className="table-fixed w-11/12 text-sm text-left text-gray-500 dark:text-gray-400 sm:rounded-lg">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-gray-100 dark:text-white dark:bg-gray-800">
            Tabla de envio
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Esta tabla será enviada a la base de datos de Dynamo AWS
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
            <tr>
              <th className="text-center py-4 w-24 rounded-l-lg">Fecha</th>
              <th className="text-center py-4 w-28">Agente</th>
              <th className="text-center py-4 w-28">Mercado</th>
              <th className="text-center py-4 w-14">G</th>
              <th className="text-center py-4 w-24">D (NT 1 OR)</th>
              <th className="text-center py-4 w-24">D (NT 1 US)</th>
              <th className="text-center py-4 w-24">D (NT 2)</th>
              <th className="text-center py-4 w-24">D (NT 3)</th>
              <th className="text-center py-4 w-14">CV</th>
              <th className="text-center py-4 w-24">PR (NT 1 OR)</th>
              <th className="text-center py-4 w-24">PR (NT 1 US)</th>
              <th className="text-center py-4 w-20">PR (NT 2)</th>
              <th className="text-center py-4 w-20">PR (NT 3)</th>
              <th className="text-center py-4 w-14">R</th>
              <th className="text-center py-4 w-28 rounded-r-lg">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {table.map((task, index) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={index}
                >
                  <td className="text-center text-gray-900 py-2 dark:text-white rounded-l-lg">
                    {task.month + "-" + task.year}
                  </td>
                  <td className="text-center text-gray-900 py-2 dark:text-white">
                    {task.agente}
                  </td>
                  <td className="text-center text-gray-900 py-2 dark:text-white">
                    {task.mercado}
                  </td>
                  <td className="text-center text-gray-900 py-2 dark:text-white">
                    {task.G}
                  </td>
                  <td className="text-center text-gray-900 py-2 dark:text-white">
                    {task["D (NT 1 OR)"]}
                  </td>
                  <td className="text-center text-gray-900 py-2 dark:text-white">
                    {task["D (NT 1 US)"]}
                  </td>
                  <td className="text-center text-gray-900 py-2 dark:text-white">
                    {task["D (NT 2)"]}
                  </td>
                  <td className="text-center text-gray-900 py-2 dark:text-white">
                    {task["D (NT 3)"]}
                  </td>
                  <td className="text-center text-gray-900 py-2 dark:text-white">
                    {task.CV}
                  </td>
                  <td className="text-center text-gray-900 py-2 dark:text-white">
                    {task["PR (NT 1 OR)"]}
                  </td>
                  <td className="text-center text-gray-900 py-2 dark:text-white">
                    {task["PR (NT 1 US)"]}
                  </td>
                  <td className="text-center text-gray-900 py-2 dark:text-white">
                    {task["PR (NT 2)"]}
                  </td>
                  <td className="text-center text-gray-900 py-2 dark:text-white">
                    {task["PR (NT 3)"]}
                  </td>
                  <td className="text-center text-gray-900 py-2 dark:text-white">
                    {task.R}
                  </td>
                  <td className="text-center text-gray-900 py-2 dark:text-white rounded-r-lg">
                    <button onClick={(index) => deleteTask(index)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <button
          onClick={sendTable}
          disabled={table.length > 0 ? false : true}
          className="rounded hover:bg-blue-800 bg-color bg-blue-700 py-1 px-2 m-5 h-8 w-18 text-white sm:text-xs font-bold"
        >
          GUARDAR
        </button>
      </div>
    </div>
  );
}

const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

const years = [2018, 2019, 2020, 2021, 2022, 2023];

const agentes = ["DICEL", "CEDENAR", "CODENSA", "EPM", "ENERTOTAL"];

const mercados = ["ANTIOQUIA", "BOGOTA", "COSTA CARIBE"];

export default Form;
