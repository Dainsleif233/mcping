import mcping from '../../src/mcping';
import Logger from '../../src/libs/Logger';

export async function onRequest(ctx: any): Promise<Response> {
    if (ctx.request.method !== 'GET') return new Response('Method Not Allowed', { status: 405 });

    const params = ctx.params.server;
    const server: string = Array.isArray(params) ? params[0] : params;

    const log = new Logger('MCPing');
    log.info('Pinging {}', server)
    return mcping(server);
}
