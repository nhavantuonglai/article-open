import React, { useEffect, useState } from 'react';
import shiki from 'shiki';

const MyComponent = () => {
	const [highlightedCode, setHighlightedCode] = useState('');

	useEffect(() => {
		async function highlightCode() {
			const highlighter = await shiki.getHighlighter({
				theme: 'nord',
				langs: ['javascript', 'CSS', 'HTML', 'plaintext'],
			});

			const code = `console.log('nhavantuonglai.com')`;
			const highlighted = highlighter.codeToHtml(code, { lang: 'javascript' });
			setHighlightedCode(highlighted);
		}

		highlightCode();
	}, []);

	return (
		<div>
			<h1>Highlighted Code</h1>
			<div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
		</div>
	);
};

export default MyComponent;