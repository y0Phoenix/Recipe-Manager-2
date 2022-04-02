import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { logout } from '../actions/user';
const animate = {
  scale: 1.03
};

const Navbar = ({isAuthenticated, logout, setNavigate}) => {
  return (
    <Fragment>
      {isAuthenticated ? 
      <div className='navbar-container'>
        <div className='nav-item nav-1'>
          <motion.button whileHover={animate} className='nav-btn' onClick={() => setNavigate('/dashboard')}>
           <i className="fa fa-folder-open"></i> Reciger 
          </motion.button>
        </div>
        <div className='nav-item nav-2'>
          <motion.button whileHover={animate} className='nav-btn' onClick={() => setNavigate('/recipes/1')}>
           <i className='fa-solid fa-book'></i> Recipes 
          </motion.button>
        </div>
        <div className='nav-item nav-3'>
          <motion.button whileHover={animate} className='nav-btn' onClick={() => setNavigate('/ingredients/1')}>
           <i className='fa-solid fa-carrot'></i> Ingredients 
          </motion.button>
        </div>
        <div className='nav-item nav-4'>
          <motion.button whileHover={animate} className='nav-btn' onClick={() => setNavigate('/account/personal')}>
           <i className='fa-solid fa-user'></i> Account 
          </motion.button>
        </div>
        <div className='nav-item nav-5'>
          <motion.button whileHover={animate} className='nav-btn' onClick={e => {
              logout(e);
              setNavigate('/');
            }}>
           <i className="fa-solid fa-right-from-bracket"></i> Logout 
          </motion.button>
        </div>
      </div> : 
      <div className='navbar-container'>
        <div className='nav-item nav-1'>
          <motion.button whileHover={animate} className='nav-btn' onClick={() => setNavigate('/login')}>
           <i className='fa fa-user'></i> Login 
          </motion.button>
        </div>
        <div className='nav-item nav-2'>
          <motion.button whileHover={animate} className='nav-btn' onClick={() => setNavigate('/register')}>
           <i className='fa fa-user-check'></i> Register 
          </motion.button>
        </div>
        <div className='nan-item nav-3'>
          <motion.button whileHover={animate} className='nav-btn' onClick={() => setNavigate('/')}>
           <i className='fa fa-folder-open'></i> Reciger 
          </motion.button>
        </div>
      </div>}
    </Fragment>
  )
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
})

export default connect(mapStateToProps, {logout})(Navbar)