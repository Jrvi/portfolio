const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '250px', padding: '20px', backgroundColor: '#f4f4f4' }}>
        <img src="https://via.placeholder.com/200" alt="placeholder" />
        <h2>Juho Järvi</h2>
        <p>Email: placeholder</p>
        <h3>Taidot</h3>
        <ul>
          <li>JavaScript <span>★★★★☆</span></li>
          <li>Python <span>★★★☆☆</span></li>
          <li>Java <span>★★★★☆</span></li>
          <li>HTML <span>★★★★★</span></li>
          <li>CSS <span>★★★★☆</span></li>
          <li>React <span>★★★★☆</span></li>
          <li>Node.js <span>★★★☆☆</span></li>
          <li>SQL <span>★★★☆☆</span></li>
          <li>MongoDB <span>★★★☆☆</span></li>
          <li>AWS <span>★★★☆☆</span></li>
          <li>Docker <span>★★★☆☆</span></li>
          <li>Git <span>★★★★☆</span></li>
          <li>Scrum <span>★★★☆☆</span></li>
        </ul>
      </aside>
      <main style={{ flex: 1, padding: '20px' }}>
        <section>
          <h2>Kokemus</h2>
          <article>
            <h3>Software Developer</h3>
            <p>Yritys: Solteq Oyj</p>
            <p>Sijainti: Jyväskylä</p>
            <p>Kesto: marraskuu 2022-nykyhetki</p>
            <p>Kuvaus: Työskennellyt useassa asiakasprojekteissa toimien backendkehittäjänä HCL commerce ja Liferay projekteissa</p>
          </article>
        </section>
        <section>
          <h2>Education</h2>
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
  )
}

export default App
