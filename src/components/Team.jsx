import Card from "./Card";
const Team = () => {
  return (
    <div className="team">
      <section>
        <div>
          <h2>Meet Our Team</h2>
          <h3>FOUR MEN ASSOCIATION</h3>
          <p>Who is doing what in your team?</p>
          <div className="team-container">
            <Card
              title="Erick Eduardo Gonzalez Perez"
              content="Marketing Specialist and Web Developer"
              src="/src/assets/images/systems.webp"
            />
            <Card
              title="Javier"
              content=""
              src="/src/assets/images/mechanic.webp"
            />
            <Card
              title="Vicente"
              content=""
              src="/src/assets/images/office.webp"
            />
            <Card
              title="Manuel"
              content=""
              src="/src/assets/images/entrepreneur.webp"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
