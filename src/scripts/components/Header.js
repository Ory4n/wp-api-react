import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';

class Header extends React.Component {

    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order

        return (
          <div>
          <div class="preloader">
            <div class="centrize full-width">
              <div class="vertical-center">
                <div class="spinner">
                  <div class="double-bounce1"></div>
                  <div class="double-bounce2"></div>
                </div>
              </div>
            </div>
          </div>
          <header className="header">

        {/*logo*/}
      			<div className="logo">
      				<Link to="/"><span>P</span></Link>
      			</div>

        {/*Menu generated from wordpress pages*/}
            <div className="top-menu">
            <ul>
                <li><Link to="/">Home</Link></li>

                {allPages.map((page) => {
                    if(page.slug != 'home'){
                       return(
                            <li>
                            <Link
                                key={page.id}
                                to={`/${page.slug}`}
                            >
                            <span className="icon fas fa-info"></span>
                            <span className="link">{page.title.rendered}</span>
                            </Link>
                            </li>
                        )
                   }
                })}
                </ul>
            </div>

            {/*Social*/}
            <div className="social">
      				<a target="_blank" href="https://dribbble.com/"><span className="icon la la-dribbble"></span></a>
      				<a target="_blank" href="https://facebook.com/"><span className="icon la la-facebook"></span></a>
      				<a target="_blank" href="https://github.com/"><span className="icon la la-github"></span></a>
      				<a target="_blank" href="https://stackoverflow.com/"><span className="icon la la-stack-overflow"></span></a>
      			</div>

      			{/*Mobile Menu*/}
      			<span className="menu-btn">
      				<span className="m-line"></span>
      			</span>

      		</header>
          </div>
        );
    }
}

export default Header;
