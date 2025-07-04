import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getProjectRootDir = (): string =>
	import.meta.env.MODE === 'production' ? path.join(__dirname, '../') : path.join(__dirname, '../../');

const __srcFolder = path.join(getProjectRootDir(), '/src');

export const getRelativeUrlByFilePath = (filepath: string): string => filepath.replace(__srcFolder, '');