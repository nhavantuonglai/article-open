import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Notification = ({ notifications = [] }) => {
	const [notificationQueue, setNotificationQueue] = useState([]);

	useEffect(() => {
		if (notifications.length > 0) {
			const newNotifications = notifications.filter(
				notify => !notificationQueue.some(queuedNotify => queuedNotify.message === notify.message)
			);

			newNotifications.forEach((notify, index) => {
				setTimeout(() => {
					setNotificationQueue(prev => {
						const updatedQueue = [
							...prev, 
							{ 
								...notify, 
								id: Date.now() + index, 
								createdAt: Date.now() 
							}
						];
						return updatedQueue.slice(-3);
					});
				}, index * 7000);
			});
		}
	}, [notifications]);

	useEffect(() => {
		const timer = setInterval(() => {
			setNotificationQueue(prev => 
				prev.filter(notify => Date.now() - notify.createdAt < 10000)
			);
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="fixed bottom-8 left-6 z-50 flex flex-col-reverse">
			<AnimatePresence>
				{notificationQueue.map((notify) => (
					<motion.div
						key={notify.id}
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, y: -50 }}
						transition={{ duration: 0.5 }}
						className="
							bg-white border border-primary w-[350px] min-h-[100px] max-w-[350px]
							rounded-xl mb-6 flex items-center justify-center
						"
					>
						<div className="m-6 text-justify text-xl break-words">
							{notify.message}
						</div>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
};


export const Slideup = ({ children, delay = 0, className = '' }) => (
	<motion.div
		initial={{ opacity: 0, y: 100 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 1, delay }}
		className={className}
	>
		{children}
	</motion.div>
);

export const Slideleft = ({ children, delay = 0, className = '' }) => (
	<motion.div
		initial={{ opacity: 0, x: -100 }}
		whileInView={{ opacity: 1, x: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 1, delay }}
		className={className}
	>
		{children}
	</motion.div>
);

export const Slideright = ({ children, delay = 0, className = '' }) => (
	<motion.div
		initial={{ opacity: 0, x: 100 }}
		whileInView={{ opacity: 1, x: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 1, delay }}
		className={className}
	>
		{children}
	</motion.div>
);

export const Carousel = ({ images, className = '' }) => {
	const duplicatedImages = [...images, ...images];

	return (
		<motion.div 
			className={`flex items-center ${className}`}
			animate={{
				x: [0, -images.length * 100],
				transition: {
					x: {
						repeat: Infinity,
						duration: 10,
						ease: "linear"
					}
				}
			}}
		>
			{duplicatedImages.map((image, index) => (
				<motion.img 
					key={index}
					src={image.src} 
					alt={image.alt || 'carousel image'}
					className="max-h-12 mx-4"
				/>
			))}
		</motion.div>
	);
};