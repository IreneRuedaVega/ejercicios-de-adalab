import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    // Creamos estado con propiedades de la película
    this.state = {
      name: "",
      description: "",
      language: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendDataToApp = this.sendDataToApp.bind(this);
  }

  // función que recoge datos de los inputs y los mete en el estado
  handleChange(ev) {
    const target = ev.target;
    const value = target.value;
    const id = target.id;

    // el id según escribamos en el input de nombre, descripción o languages será diferente (name, description, language), por lo que esta es una manera bonita y sencilla de asignar automáticamente los valores de cada input a su propiedad
    this.setState(
      {
        [id]: value,
      },
      () => {
        // creo función callback para asegurarme que cuando mando los datos a APP, los datos están actualizados, es decir, se pasan justo después de actualizar el estado con setState (si lo pusiera fuera debajo de setState, se me podrian mandar datos desactualizados)
        this.sendDataToApp(this.state);
      }
    );
  }

  sendDataToApp(data) {
    this.props.handleFormInfo(data);
  }

  render() {
    return (
      <form>
        <label>
          Nombre
          <input
            type="text"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Descripción
          <textarea
            value={this.state.description}
            id="description"
            onChange={this.handleChange}
          />
        </label>

        <label>
          Escoge el idioma:
          <select
            value={this.state.language}
            id="language"
            onChange={this.handleChange}
          >
            <option value="Español" defaultChecked>
              Español
            </option>
            <option value="Inglés">Inglés</option>
            <option value="Portugués">Portugués</option>
          </select>
        </label>
      </form>
    );
  }
}
export default Form;
