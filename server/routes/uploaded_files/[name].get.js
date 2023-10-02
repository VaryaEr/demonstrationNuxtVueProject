import fs from "fs";
import path from 'path'

export default defineEventHandler(async (event) => {
    const base = "./public/images/uploaded_files/statya1/";
    const filePath = path.join(base, event.context.params.name);
    console.log('lol', event.context)
    return sendStream(event, fs.createReadStream(filePath));
    // return sendStream(event, fs.createReadStream('./public/images/uploaded_files/statya1/1694622148185.jpg'));

});