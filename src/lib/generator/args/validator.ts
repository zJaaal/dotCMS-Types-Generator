const REQUIRED_ARGS = ['host', 'contentTypes', 'token', 'target'];

// Create an array of valid argument keys
const VALID_ARGS = ['host', 'contentTypes', 'token', 'target'];

const checkFormat = (arg: string) => {
    return arg.includes('--') && arg.includes('=');
};

const checkValid = (arg: string) => {
    const argWithoutDashes = arg.replace('--', '').replace(/=.*/, '');

    return VALID_ARGS.includes(argWithoutDashes);
};
const checkRequired = (arg: string) => {
    const argWithoutDashes = arg.replace('--', '').replace(/=.*/, '');

    return REQUIRED_ARGS.includes(argWithoutDashes);
};

export const checkArgs = (args: string[]) => {
    if (!args.every(checkFormat)) {
        throw new Error(
            'Invalid argument format\nExpected format: --host=https://your-host.com --contentTypes=contentType1,contentType2 --token=your-token'
        );
    }

    if (!args.every(checkRequired)) {
        throw new Error(
            'Required arguments are missing\nRequired arguments: ' + REQUIRED_ARGS.join(', ')
        );
    }

    if (!args.every(checkValid)) {
        throw new Error('Invalid arguments\nExpected arguments: ' + VALID_ARGS.join(', '));
    }
};
