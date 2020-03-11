import { resolve } from 'path';

import { recursiveReaddir } from './recursiveReadDir';

export async function unifyRoutes() {
    const files = await recursiveReaddir(resolve(__dirname, '../'), '.*.controller.js');
    let controllers = [];
    for (let file of files) {
        controllers.push(require(file).default);
    }
    return controllers;
}

export async function applyRoutes(router) {
    const routesFn = await unifyRoutes();
    for (const fn of routesFn) {
        fn(await router);
    }
}
