import React from "react";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.isHating = false;
  }

  handleChange(event) {
    //Al convertir lo que introduzca el usuario en letras minúsculas, no importa cómo lo escriba (con mayúsculas o no)
    //utilizamos toLowerCase()
    const value = event.target.value.toLowerCase();
    const windowColor = document.querySelector(".App");
    if (value.includes("cebolla")) {
      this.isHating = true;
      windowColor.classList.add("red");
    } else {
      this.isHating = false;
      windowColor.classList.remove("red");
    }
    this.forceUpdate();
  }

  render() {
    return (
      <form className="text">
        <label>
          <textarea onChange={this.handleChange}></textarea>
        </label>
      </form>
    );
  }
}

export default OnionHater;
