import { Router, Request, Response } from 'express';
import { getAllCharacters } from './characters.service';

export async function getCharacters(request, response) {
    response.send(await getAllCharacters());
}

export default async function(router) {
    return router.get('/', await getCharacters);
}
