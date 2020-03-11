export function applyMiddleware(middlewareFn, router) {
    for (const f of middlewareFn) {
        f(router);
    }
}
