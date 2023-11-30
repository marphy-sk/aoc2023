import fs from 'fs';

export const parseDataFromFile = (path: fs.PathOrFileDescriptor) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
        err ? reject(err) : resolve(data);
        });
    });
}
