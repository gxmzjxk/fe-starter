import { version } from '../package.json';
export const hello = (): string =>  {
    let arr = [1, 2, 3];
    let a = [...arr];
    const msg = `[${version}]: hello, ${a.toString()}`;
    return msg;
}