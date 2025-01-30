import picture from '../assets/oma_kuva.jpeg';

const Home = () => {
  return (
    <div className="container">
      <div>
        <img src={picture} alt="Juho Järvi" className="profile-picture" />
        <h1 className="center">Tervetuloa!</h1>
        <p>Hei, olen Juho Järvi. Tämä on henkilökohtainen portfoliosivustoni, jossa esittelen taitojani, kokemuksiani ja koulutustani.</p>
        <p>Tutustu projekteihini ja ansioluettelooni käyttämällä ylävalikon linkkejä.</p>
      </div>
      <div className="section">
        <h2 className="center">Käynnissä oleva harraste projekti</h2>
        <p>Työn alla on <strong>shopping-list-backend</strong></p>
        <p><a href="https://github.com/Jrvi/shopping-list-backend" target="_blank" rel="noopener noreferrer">Lähdekoodi</a></p>
      </div>
      <div className="section">
        <h2 className="center">Lisätietoja</h2>
        <p>Olen ohjelmistokehittäjä, jolla on kokemusta useista eri teknologioista ja projekteista. Olen työskennellyt sekä frontend- että backend-kehityksen parissa.</p>
        <p>Voit ottaa minuun yhteyttä sähköpostitse osoitteessa <a href="mailto:juho.jaervi@gmail.com">juho.jaervi@gmail.com</a> tai seuraamalla minua LinkedInissä ja GitHubissa.</p>
      </div>
    </div>
  );
};

export default Home;