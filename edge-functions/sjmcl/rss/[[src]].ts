import transform from '../../../src/sjmcl/rss';

export async function onRequestGet(ctx: any): Promise<Response>{
    const params: string | Array<string> = ctx.params.src;

    let src: string;
    if (Array.isArray(params)) src = params.join('/');
    else src = params;

    return transform(src);
}