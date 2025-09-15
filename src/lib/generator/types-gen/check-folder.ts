import path from 'path';
import fs from 'fs/promises';

export const checkFolder = async (folder: string) => {
    // Use the exact path provided by the user, relative to current working directory
    const folderPath = path.join(process.cwd(), folder);

    console.log('📡 Checking folder path:', folderPath);

    try {
        // Try to access the folder to see if it exists
        await fs.access(folderPath);
        console.log('📂 Folder already exists:', folderPath);
    } catch (error) {
        // Folder doesn't exist, create it
        console.log('📂 Creating folder:', folderPath);
        await fs.mkdir(folderPath, { recursive: true });
    }

    return folderPath;
};
