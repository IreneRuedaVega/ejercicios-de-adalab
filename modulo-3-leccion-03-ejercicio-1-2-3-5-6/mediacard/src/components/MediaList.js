import React from "react";
import MediaCard from "./MediaCard";
import irene from "../images/Irene.jpg";
import heartFilled from "../images/535234.svg";
import heartEmpty from "../images/1077035.svg";

class MediaList extends React.Component {
  render() {
    return (
      <ul>
        <li li className="App-liElement" id="1">
          <MediaCard
            name="Irene"
            date="30 de Marzo de 1992"
            image={irene}
            heart={heartFilled}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            number="30"
          />
        </li>
        <li li className="App-liElement" id="2">
          <MediaCard
            name="Lucia"
            date="19 de Agosto de 1996"
            image={irene}
            heart={heartEmpty}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            number="19"
          />
        </li>
        <li li className="App-liElement" id="3">
          <MediaCard
            name="María"
            date="22 de Febrero de 2005"
            image={irene}
            heart={heartEmpty}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            number="22"
          />
        </li>
      </ul>
    );
  }
}
export default MediaList;
