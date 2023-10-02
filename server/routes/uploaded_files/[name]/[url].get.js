import fs from "fs";
import path from 'path'

export default defineEventHandler(async (event) => {
    const base = "./.output/public/images/uploaded_files/";
    const filePath = path.join(base, event.context.params.name, event.context.params.url);
    return sendStream(event, fs.createReadStream(filePath));

});