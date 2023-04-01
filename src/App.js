import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Welcome></Welcome>

      <Home></Home>
      <Projects></Projects>
      <About></About>

      <Footer></Footer>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <ul class="header_link_list" >
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="https://github.com/timplay33">Github</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <a class="header_logo_element" href=".">Tim Heidler</a>
    </div>
  );
}

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome_content">
        <h1 className="welcome_primary">Welcome</h1>
        <p className="welcome_secondary">Hi I'm Tim!</p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="home" id="home">
      <div className="home_content">
        <h1 className="home_primary">Home</h1>
        <p className="home_secondary">This is the home page</p>
      </div>
    </div>
  );
}

function Projects(){
  return (
    <div className="projects" id="projects">
      <div className="projects_content">
        <h1 className="projects_primary">Projects</h1>
        <p className="projects_secondary">This is the projects page</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about" id="about">
      <div className="about_content">
        <h1 className="about_primary">About</h1>
        <p className="about_secondary">This is the about page</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <ul class="footer_link_list">
        <li><span>Instagram</span></li>
        <li><span>GitHub</span></li>
      </ul>
      <p>Copyright © 2023 Tim Heidler</p>
    </div>
  );
}

export default App;