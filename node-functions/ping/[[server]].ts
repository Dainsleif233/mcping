import mcping from '../../src/mcping';
import Logger from '../../src/utils/Logger';

export async function onRequestGet(ctx: any): Promise<Response> {
    const params: string[] = ctx.params.server;
    const server: string = params[0]

    const log = new Logger('MCPing');
    log.info('Pinging {}', server)
    return new Response(JSON.stringify(params));
    // return mcping(server);
}
