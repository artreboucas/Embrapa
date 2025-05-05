import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="cards-container">
        <div className="card card-orange">
          <div className="card-header">
            <FontAwesomeIcon icon={faTree} className="card-icon" />
            <h2>Implantação de Pomar</h2>
          </div>
          <div className="card-body">
            <p>
              Simulação de custos para implantação de pomar de cajueiro-anão no
              espaçamento 7m x 7m
            </p>
          </div>
          <div className="card-footer">
            <Link to="/simulação-implantação-de-pomar" className="card-button">
              Acessar Simulação
            </Link>
          </div>
        </div>

        <div className="card card-orange-dark">
          <div className="card-header">
            <FontAwesomeIcon icon={faExchangeAlt} className="card-icon" />
            <h2>Substituição de Copa</h2>
          </div>
          <div className="card-body">
            <p>
              Simulação de custos de para substituição de copa de cajueiro no
              espaçamento 10m x 10m
            </p>
          </div>
          <div className="card-footer">
            <Link to="/simulação-substituição-de-copa" className="card-button">
              Acessar Simulação
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
