import { promisify } from 'util';
import { readdir, statSync } from 'fs';

const readdirAsync = promisify(readdir);

export async function recursiveReaddir(path, regexString, initialFileList) {
    let fileList = initialFileList || [];
    const regex = new RegExp(regexString);

    const files = await readdirAsync(path);
    for (let file of files) {
        if (statSync(`${path}/${file}`).isDirectory()) {
            fileList = await recursiveReaddir(`${path}/${file}/`, regexString, fileList);
        } else {
            if (regex.test(file)) {
                fileList.push(`${path}${file}`);
            }
        }
    }

    return fileList;
}
