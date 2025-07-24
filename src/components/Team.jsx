import Card from "./Card";
import erickImage from "../assets/images/systems.webp";
import javierImage from "../assets/images/mechanic.webp";
import vicenteImage from "../assets/images/office.webp";
import victorImage from "../assets/images/entrepreneur.webp";

const Team = () => {
  return (
    <div className="team">
      <section>
        <div>
          <h2>Meet Our Team</h2>
          <h3>FOUR MEN ASSOCIATION</h3>
          <div className="team-container">
            <Card
              title="Erick Eduardo Gonzalez Perez"
              content="Marketing Specialist and Web Developer"
              src={erickImage}
            />
            <Card
              title="Javier Castañon Cortez"
              content="Responsible for quotations and finances for raw materials and production."
              src={javierImage}
            />
            <Card
              title="Vicente Martinez Hernandez"
              content="CEO and Founder"
              src={vicenteImage}
            />
            <Card
              title="Victor Manuel Hernandez Hernandez"
              content="Logistics and Operations Manager"
              src={victorImage}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;