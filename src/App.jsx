import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Skill from "./components/Skill"

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', marginTop: '60px' }}>
        <aside style={{ width: '250px', padding: '20px', backgroundColor: '#f4f4f4' }}>
          <img src="https://via.placeholder.com/200" alt="placeholder" />
          <h2>Juho Järvi</h2>
          <Contact />
          <h3>Taidot</h3>
          <Skill name="Java" percentage={90} />
          <Skill name="Python" percentage={80} />
          <Skill name="AWS" percentage={60} />
          <Skill name="Docker" percentage={70} />
          <Skill name="Kubernates" percentage={20} />
        </aside>
        <main style={{ flex: 1, padding: '20px' }}>
          <section id="experience">
            <h2>Kokemus</h2>
            <article>
              <h3>Software Developer</h3>
              <p>Yritys: Solteq Oyj</p>
              <p>Sijainti: Jyväskylä</p>
              <p>Kesto: marraskuu 2022-nykyhetki</p>
              <p>Kuvaus: Työskennellyt osa-aikaisesti opintojen ohella useassa asiakasprojekteissa toimien backendkehittäjänä HCL commerce ja Liferay projekteissa</p>
            </article>
            <article>
              <h3>Opiskelijayhdyshenkilö</h3>
              <p>Yritys: Tekniikan akateemiset TEK</p>
              <p>Sijainti: Jyväskylä ja Kuopio</p>
              <p>Kesto: 2024-nykyhetki</p>
              <p>Kuvaus: Työskennellyt yhdishenkilönä Tekniikan akateemisten ja Jyväskylän ja Kuopion ainejärjestöjen välillä. Työnkuva on ollut luoda sopimuksia, hallita yhteyshenkilöitä ja kehittää suhteita</p>
            </article>
          </section>
          <section id="education">
            <h2>Koulutus</h2>
            <article>
              <h3>Jyväskylän Yliopisto</h3>
              <p>aika: 2023-nykyhetki</p>
              <p>Tutkinto: Teknologiajohtaminen kandidaatti- ja DI-tutkinto</p>
              <p>Kuvaus: Vaihdoin opiskelemaan tietotekniikan kandiohjelmasta teknologiajohtamisen kandiohjelmaan</p>
            </article>
            <article>
              <h3>Jyväskylän Yliopisto</h3>
              <p>aika: 2020-2023</p>
              <p>Tutkinto: Tietotekniikan kandidaatti</p>
              <p>Kuvaus: Opiskelin tietotekniikkaa ja sivuaineena Johtamista</p>
            </article>
            <article>
              <h3>Lappeenrannan ja lahden teknillinen Yliopisto</h3>
              <p>aika: 2019-2020</p>
              <p>Tutkinto: Tietotekniikan kandidaatti</p>
              <p>Kuvaus: Opiskelin tietotekniikkaa</p>
            </article>
            <article>
              <h3>Jämsän lukio</h3>
              <p>aika: 2015-2018</p>
              <p>Kuvaus: Opiskelin lukiossa</p>
            </article>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App