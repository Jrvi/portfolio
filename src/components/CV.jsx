import Skill from './Skill';
import Contact from './Contact';
import picture from '../assets/oma_kuva.jpeg';

const CV = () => {
  const picture_width = 200;
  const picture_height = 200;

  return (
    <div className="cv-container">
      <aside className="aside">
        <img src={picture} width={picture_width} height={picture_height} alt="Me" />
        <h2 className="name">Juho Järvi</h2>
        <Contact />
        <h3 className="skills-h">Taidot</h3>
        <div className="skills">
          <Skill name="Java" percentage={70} />
          <Skill name="Python" percentage={60} />
          <Skill name="Go" percentage={30} />
          <Skill name="Node.js" percentage={50} />
          <Skill name="Flutter" percentage={30} />
          <Skill name="React-Native" percentage={10} />
          <Skill name="Nginx" percentage={20} />
          <Skill name="Github Actions" percentage={40} />
          <Skill name="AWS" percentage={40} />
          <Skill name="Docker" percentage={50} />
          <Skill name="Kubernates" percentage={20} />
        </div>
      </aside>
      <div className="main-content">
        <section id="experience">
          <h1 className="left">Kokemus</h1>
          <article>
            <h3 className="left">Software Developer</h3>
            <p>Työnantaja: Solteq Oyj</p>
            <p>Sijainti: Jyväskylä</p>
            <p>Kesto: marraskuu 2022-nykyhetki</p>
            <p>Kuvaus: Työskennellyt osa-aikaisesti opintojen ohella useassa asiakasprojekteissa toimien backendkehittäjänä HCL commerce ja Liferay projekteissa</p>
          </article>
          <article>
            <h3 className="left">Opiskelijayhdyshenkilö</h3>
            <p>Työnantaja: Tekniikan akateemiset TEK</p>
            <p>Sijainti: Jyväskylä ja Kuopio</p>
            <p>Kesto: 2023 joulukuu-2026 tammikuu</p>
            <p>Kuvaus: Työskennellyt yhdishenkilönä Tekniikan akateemisten ja Jyväskylän ja Kuopion ainejärjestöjen välillä. Työnkuva on ollut luoda sopimuksia, hallita yhteyshenkilöitä ja kehittää suhteita</p>
          </article>
        </section>
        <section id="education">
          <h1 className="left">Koulutus</h1>
          <article>
            <h3 className="left">Jyväskylän Yliopisto</h3>
            <p>aika: 2023-nykyhetki</p>
            <p>Tutkinto: Teknologiajohtaminen kandidaatti- ja DI-tutkinto</p>
            <p>Kuvaus: Vaihdoin opiskelemaan tietotekniikan kandiohjelmasta teknologiajohtamisen kandiohjelmaan</p>
          </article>
          <article>
            <h3 className="left">Jyväskylän Yliopisto</h3>
            <p>aika: 2020-2023</p>
            <p>Tutkinto: Tietotekniikan kandidaatti</p>
            <p>Kuvaus: Opiskelin tietotekniikkaa ja sivuaineena Johtamista vaihdoin kesken opintojen teknologiajohtamiselle</p>
          </article>
          <article>
            <h3 className="left">Lappeenrannan ja lahden teknillinen Yliopisto</h3>
            <p>aika: 2019-2020</p>
            <p>Tutkinto: Tietotekniikan kandidaatti</p>
            <p>Kuvaus: Opiskelin tietotekniikkaa vaihdoin vuoden jälkeen Jyväskylään jätin tutkinnon kesken</p>
          </article>
          <article>
            <h3 className="left">Jämsän lukio</h3>
            <p>aika: 2015-2018</p>
            <p>Kuvaus: Opiskelin lukiossa</p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default CV;