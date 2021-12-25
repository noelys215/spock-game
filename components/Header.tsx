import { AnimateSharedLayout, motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import styles from '../styles/Header.module.css';

type HeaderProps = {
	advanced: boolean;
	score?: number;
	houseScore?: number;
};

export const Header: FunctionComponent<HeaderProps> = ({ advanced, score, houseScore }) => (
	<AnimateSharedLayout>
		<div className={styles.header}>
			<motion.div className={advanced ? styles.advancedTitle : styles.title} layout>
				<div>Rock</div>
				<div>Paper</div>
				<div>Scissors</div>
				{advanced && (
					<>
						<div>Lizard</div>
						<div>Spock</div>
					</>
				)}
			</motion.div>
			<div className={styles.score}>
				<h4>Player</h4>
				<h1>{score}</h1>
			</div>
			<div className={styles.score}>
				<h4>House</h4>
				<h1>{houseScore}</h1>
			</div>
		</div>
	</AnimateSharedLayout>
);
