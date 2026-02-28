import React from 'react';
import { motion } from 'framer-motion';

const Animations = () => (
    <div className="animated-section">
    
        <motion.div animate={{ scale: 1.2 }} transition={{ duration: 0.5 }}>
            <h2>Animated Section</h2>
        </motion.div>
    
    </div>

);

export default Animations;
