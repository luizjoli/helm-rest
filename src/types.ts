import { Router, Request, Response, NextFunction, express } from "express";

export interface IHelm {

    install(releaseName: string, chart: string, args?: string): Promise<string>;
    upgrade(releaseName: string, chart: string, args: string): Promise<string>;
    delete(releaseName: string, args?: string): Promise<string>;
    rollback(releaseName: string, revision: string, args?: string): Promise<string>;
    get(subcommand: string, releaseName: string, args?: string): Promise<string>;
    repoAdd(repoName: string, repoUrl: string, args?: string): Promise<string>;
    repoUpdate(args?: string): Promise<string>;
    registryLogin(host: string, username: string, password: string, args?: string): Promise<string>;
    command(command: string): Promise<string>;
    list(list: string): Promise<string>;

}

export interface IKubeConfiguration {

    setupKubeConfig(kubeconfigContent: string): Promise<void>;

}

export interface IExecHelper {

    exec(command: string): Promise<{ stdout: string; stderr: string; }>

}

// # Routes
export interface IHelmRoute extends ICustomRoute {

    install(req: Request, res: Response, next: NextFunction): void;
    upgrade(req: Request, res: Response, next: NextFunction): void;
    delete(req: Request, res: Response, next: NextFunction): void;
    rollback(req: Request, res: Response, next: NextFunction): void;
    get(req: Request, res: Response, next: NextFunction): void;
    repoAdd(req: Request, res: Response, next: NextFunction): void;
    repoUpdate(req: Request, res: Response, next: NextFunction): void;
    registryLogin(req: Request, res: Response, next: NextFunction): void;
    command(req: Request, res: Response, next: NextFunction): void;
    list(req: Request, res: Response, next: NextFunction): void;

}

export interface IRoute {
    route: string;
    method: string;
    handler: (req: Request, res: Response, next: NextFunction) => any
}

export interface ICustomRoute {

    routes: IRoute[];
    configureRouter(app: express.Application): Router

}