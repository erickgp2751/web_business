import Card from "./Card";
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
              src="/src/assets/images/systems.webp"
            />
            <Card
              title="Javier Castañon Cortez"
              content="Responsible for quotations and finances for raw materials and production."
              src="/src/assets/images/mechanic.webp"
            />
            <Card
              title="Vicente Martinez Hernandez"
              content="CEO and Founder"
              src="/src/assets/images/office.webp"
            />
            <Card
              title="Victor Manuel Hernandez Hernandez"
              content="Logistics and Operations Manager"
              src="/src/assets/images/entrepreneur.webp"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
