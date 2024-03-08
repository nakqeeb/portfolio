import "./sidebar.css";
import { motion } from 'framer-motion';

const Sidebar = () => {
    return (
        <motion.div 
        className="sidebar"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </motion.div>
    );
  };
  
  export default Sidebar;