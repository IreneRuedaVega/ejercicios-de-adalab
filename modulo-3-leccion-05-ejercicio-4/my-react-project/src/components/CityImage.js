import React from "react";

class CityImage extends React.Component {
  constructor(props) {
    super(props);
    this.cities = {
      Praga: "https://www.viajarpraga.com/img/guia-viaje-praga.jpg",
      Boston:
        "https://www.langan.com/wp-content/uploads/2019/02/Boston-996x554.jpg",
      BuenosAires:
        "https://www.cronista.com/__export/1589398341205/sites/diarioelcronista/img/2020/05/13/ciudad_vacia_crop1589398340532.png_258117318.png",
      Sydney:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/1200px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg",
      Tokio:
        "https://www.japonalternativo.com/wp-content/uploads/2018/10/barrio-de-akihabara-en-tokio.jpg",
    };
  }
  render() {
    return (
      <div>
        <img src={this.cities[this.props.city]} alt={this.props.city} />
      </div>
    );
  }
}

export default CityImage;
