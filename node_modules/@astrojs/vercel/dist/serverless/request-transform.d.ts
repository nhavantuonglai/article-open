/// <reference types="node" />
import type { IncomingMessage, ServerResponse } from 'node:http';
export declare function getRequest(base: string, req: IncomingMessage): Promise<Request>;
export declare function setResponse(res: ServerResponse, response: Response): Promise<void>;
