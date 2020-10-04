import React, { Fragment } from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Mainbody from './mainbody.js';
import Footer from './footer.js';
import ScrollToTop from './scrolltop.js';
import './headstyle.css';

import Login from './Login/login.js';

class App extends React.Component {
	state = {
		navBackground: 'transparent',
	};

	componentDidMount() {
		document.addEventListener('scroll', () => {
			const backgroundcolor =
				window.scrollY < 50 ? 'transparent' : 'White';

			this.setState({ navBackground: backgroundcolor });
		});
	}
	render() {
		return (
			<Router>
				<div className=' stic '>
					<nav
						className='navbar navbar-expand-lg navbar-light '
						style={{
							backgroundColor: `${this.state.navBackground}`,
						}}
					>
						<a className='navbar-brand' href='#'>
							<img
								src={require('./images/logo.png')}
								alt='logo'
								width='150'
								height='40'
							></img>
						</a>
						<button
							className='navbar-toggler hidden-lg-up'
							type='button'
							data-toggle='collapse'
							data-target='#collapsibleNavId'
							aria-controls='collapsibleNavId'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span
								className='glyphicon glyphicon-tasks'
								id='sz'
							></span>
						</button>
						<div
							className='collapse navbar-collapse'
							id='collapsibleNavId'
						>
							<ul className='navbar-nav mr-auto mt-2 mt-lg-0 nav  nav-right '>
								<li className='nav-item '>
									<Link
										className='nav-link'
										to='/'
										activeClassName='active'
									>
										Home{' '}
										<span className='sr-only'>
											(current)
										</span>
									</Link>
								</li>
								<li className='nav-item '>
									<Link className='nav-link' to='/contact'>
										Contact
									</Link>
								</li>
								<li className='nav-item '>
									<Link className='nav-link' to='/login'>
										Login
									</Link>
								</li>
								<li className='nav-item '>
									<Link className='nav-link'>
										<span
											className='glyphicon glyphicon-tasks'
											id='hid'
										></span>
									</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/login' component={Logins} />
				</Switch>
			</Router>
		);
	}
}
export default App;

const Home = () => (
	<Fragment>
		<ScrollToTop />

		<div>
			<Mainbody />
		</div>
		<Footer />
	</Fragment>
);
const Logins = () => (
	<Fragment>
		<ScrollToTop />
		<div>
			<Login />
		</div>
		<Footer />
	</Fragment>
);
