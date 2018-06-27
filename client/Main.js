import React, { Component } from 'react'

export default class Main extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div className="main">
        {/* Jumbotron Section */}
        <div id="main">
          <p id="intro">Hello, I'm</p>
          <h1 id="main-title">Benito J. Suriano</h1>
        </div>
        {/* About Me Section */}
        <div id="about-me">
          <div className="container">
            <div className="img">
              <img src="gear-128.png" alt="Engineer-ish Gears"/>
            </div>
            <div className="info">
              <h3>Engineer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat maiores ex consequatur, facilis itaque dignissimos mollitia quis dolores dolor animi non nihil aperiam sapiente, debitis ducimus obcaecati doloremque, commodi sit!</p>
            </div>
          </div>
          <div className="container">
            <div className="img">
              <img src="code-128.png" alt="Eat.Code.Sleep.Repeat."/>
            </div>
            <div className="info">
              <h3>Programmer</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quo amet, sequi asperiores inventore animi! Error odit architecto omnis laboriosam autem molestiae voluptas atque accusamus itaque tenetur recusandae, quas id!</p>
            </div>
          </div>
          <div className="container">
            <div className="img">
              <img src="clef-128.png" alt="It\'s All About the Treble Clef"/>
            </div>
            <div className="info">
              <h3>Artist</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas odit, minima facilis vel porro consectetur fugiat nihil architecto atque animi laboriosam quia repudiandae rem dignissimos officiis distinctio adipisci in.</p>
            </div>
          </div>
          <div className="container">
            <div className="img">
              <img src="dumbbell-128.png" alt="Beast Mode: On."/>
            </div>
            <div className="info">
              <h3>Athlete</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugiat vitae sapiente iste id, quaerat quia atque, culpa inventore perspiciatis ducimus tempore sed voluptatem dolor magnam a totam porro vero.</p>
            </div>
          </div>
        </div>
        <div id="projects">
          <div className="container">
            <div className="img"></div>
            <div className="info">
              <h3>Automated Stand-Up Desk</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusamus tenetur perspiciatis nulla inventore maiores autem veritatis, labore sint quasi soluta consectetur saepe molestias iusto est ab distinctio, iste magni.</p>
            </div>
          </div>
          <div className="container">
            <div className="img"></div>
            <div className="info">
              <h3>Optikos Project Management Tool</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime unde magnam accusantium, nulla maiores autem laborum? Libero temporibus, quidem, quo, ullam odio fugiat et impedit nesciunt voluptatem esse officiis repudiandae!</p>
            </div>
          </div>
          <div className="container">
            <div className="img"></div>
            <div className="info">
              <h3>AI Donkey Car</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam excepturi, recusandae sit autem saepe molestiae, ratione molestias ipsa, maiores illum sapiente sint eum incidunt sequi provident dolore eveniet earum delectus.</p>
            </div>
          </div>
        </div>
        <div id="travel-and-living">
          <div className="spot">
            <p>Prague</p>
          </div>
          <div className="spot">
            <p>Rome</p>
          </div>
          <div className="spot">
            <p>Berlin</p>
          </div>
          <div className="spot">
            <p>Munich</p>
          </div>
          <div className="spot">
            <p>Cinque Terre</p>
          </div>
        </div>
        <section id="awwwards"></section>
      </div>
    )
  }
}
