import { Arguments } from '../../shared/types.js';
import { checkArgs } from './validator.js';

export const parseArgs = (args: string[]): Arguments => {
    checkArgs(args);

    const contentTypes =
        args
            .find((arg) => arg.includes('contentTypes'))
            ?.split('=')[1]
            ?.split(',') || [];

    const host = args.find((arg) => arg.includes('host'))?.split('=')[1] || '';
    const token = args.find((arg) => arg.includes('token'))?.split('=')[1] || '';
    const target = args.find((arg) => arg.includes('target'))?.split('=')[1] || '';

    return {
        contentTypes,
        host,
        token,
        target
    };
};
