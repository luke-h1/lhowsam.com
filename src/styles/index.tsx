import { BASE_FONT_SIZE } from '@src/utils/style';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	:root {
	--color-primary: rgb(0, 0, 0);
	--color-background: rgb(255, 255, 255);
	--color-inlineCode-fg: var(--color-primary);
	--color-inlineCode-bg: rgb(220, 220, 220);
	--values-primary-accent: 91, 52, 218;
	--color-primary-accent: #009CCC;
	--color-secondary-accent: rgb(53, 142, 241);
	--color-fancy-pants: var(--color-primary-accent);

	--font-family-code: Iosevka Web, SFMono-Regular, Consolas, Roboto Mono, Menlo, Monaco,
		Liberation Mono, Lucida Console, monospace;
	--color-success-accent: rgb(0, 255, 127);
	--color-success-accent-faded: rgba(0, 255, 127, 0.19);
	--color-danger-accent: rgb(255, 128, 0);
	--color-danger-accent-faded: rgba(255, 128, 0, 0.2);
	--color-info-accent: rgb(0, 191, 255);
	--color-info-accent-faded: rgba(0, 191, 255, 0.27);
	--color-error: rgb(255, 0, 0);
	--color-bg-blurred: rgba(255,255,255,0.93);

	--max-width: 850px;
	--border-radius: 5px;
	--transition-duration: 0.1s;
	}

	[data-theme="dark"] {
		--color-primary: rgb(255, 255, 255);
		/* --color-primary-accent: #4299E1; */
		--color-primary-accent: #2BB67E;
		--values-primary-accent: 157, 134, 233;
		--color-secondary-accent: rgb(97, 218, 251);
		--color-background: rgb(0, 0, 0);
		--color-inlineCode-bg: rgb(51, 51, 51);
		--color-bg-blurred: rgba(15,10,35,0.9);
	}
	html,
	body {
		font-size: ${BASE_FONT_SIZE}px;
		font-family: -apple-system, BlinkMacSystemFont, Inter, Roboto, Segoe UI,
			Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
			sans-serif;
		color: var(--color-primary);
		background-color: var(--color-background);
		margin: 0;
		line-height: 1.5;
	}

	*, *:before, *:after {
		box-sizing: border-box;
	}

	/* :not(pre):not(span)::selection {
		background: rgba(var(--values-primary-accent), 0.99);
		color: var(--color-background)
	} */

	:focus:not(:focus-visible) {
		outline: 0;
	}

	:focus-visible {
		box-shadow: 0 0 0.1rem 0.1rem var(--color-primary-accent);
		opacity: 1;
		outline: 0;
	}

	h1,
	h2,
	h3,
	h4 {
		margin: 0;
		padding-top: 2rem;
	}

	h2 {
		font-size: 2rem;
	}
	h3 {
		font-size: 1.5rem;
	}

	a {
		text-decoration: none;
		color: var(--color-primary-accent);
		cursor: pointer;

		&:visited {
			text-decoration: none;
		}
		&:hover {
			text-decoration: underline;
		}
	}
	
`;
