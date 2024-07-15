/// <reference types="node" />
import type { PathLike } from 'node:fs';
export declare function writeJson<T>(path: PathLike, data: T): Promise<void>;
export declare function emptyDir(dir: PathLike): Promise<void>;
export declare const getVercelOutput: (root: URL) => URL;
