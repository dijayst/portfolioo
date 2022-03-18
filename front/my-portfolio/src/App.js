
import Carrier from './navi/Carrier';
//import './navi/Navi.css';
import Typography from '@material-ui/core/Typography';
import './scss/style.scss' 

function App() {
  return (
    <div className="App">
      <Carrier/>
      <Typography>
        
      </Typography>
    </div>
  );
}

export default App;





/*


<header>
<div class="container-fluid">
    <div class="logo">
        <a href="#"><img src="./assets/images/logo1.png" alt="cstep" class="img1" /></a>
        <a href="#"><img src="./assets/images/logo2.png" alt="caps" class="img2" /></a>
    </div>
    <button class="navbar-toggler" type="button" (click)="isCollapsed = !isCollapsed" [attr.aria-expanded]="!isCollapsed" style="z-index: 1;">
    <span class="navbar-toggler-icon"></span>
</button>
    <nav id="main-nav-wrap" style="z-index: 1;">
        <ul class="main-navigation">
            <li><a href="#intro">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#about1">about1</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a routerLink='/2019'>2019</a></li>
        </ul>
    </nav>
</div>








.navbar {
  position: relative;
  min-height: $navbar-height; // Ensure a navbar always shows (e.g., without a .navbar-brand in collapsed mode)
  margin-bottom: $navbar-margin-bottom;
  border: 1px solid transparent;

  // Prevent floats from breaking the navbar
  @include clearfix;

  @media (min-width: $grid-float-breakpoint) {
    border-radius: $navbar-border-radius;
  }
}
*/