import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: "español",
      genre: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeRadio = this.changeRadio.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
  }

  handleChange(ev) {
    const target = ev.target;
    const value = target.value;
    const id = target.id;

    this.setState(
      {
        [id]: value,
      },
      () => {
        this.sendDataToApp(this.state);
      }
    );
  }

  changeRadio(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const id = target.id;

    this.setState({
      [id]: value,
    });
  }

  changeSelect(event) {
    this.setState({ language: event.currentTarget.value });
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
            name="language"
            id="language"
            onChange={this.changeSelect}
          >
            <option value="español">Español</option>
            <option value="inglés">Inglés</option>
            <option value="portugués">Portugués</option>
          </select>
        </label>
        <label>Género:</label>
        <label>
          <input
            name="genre"
            id="comedia"
            type="checkbox"
            checked={this.state.genre.id}
            onChange={this.changeRadio}
          />
          <p>Comedia</p>
        </label>
        <label>
          <input
            name="genre"
            id="drama"
            type="checkbox"
            checked={this.state.genre.id}
            onChange={this.changeRadio}
          />
          <p>Drama</p>
        </label>
        <label>
          <input
            name="genre"
            id="fantasia"
            type="checkbox"
            checked={this.state.genre.id}
            onChange={this.changeRadio}
          />
          <p>Fantasía</p>
        </label>
        <label>
          <input
            type="checkbox"
            name="genre"
            id="accion"
            checked={this.state.genre.id}
            onChange={this.changeRadio}
          />
          <p>Acción</p>
        </label>
        <label>
          <input
            type="checkbox"
            name="genre"
            id="familia"
            checked={this.state.genre.id}
            onChange={this.changeRadio}
          />
          <p>Familia</p>
        </label>
        <label>
          <input
            type="checkbox"
            name="genre"
            id="terror"
            checked={this.state.genre.id}
            onChange={this.changeRadio}
          />
          <p>Terror</p>
        </label>
      </form>
    );
  }
}

export default Form;
