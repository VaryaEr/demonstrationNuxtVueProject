import fs from 'fs'
import path from 'path'
export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const currentDirectory = process.cwd()
        const absolutePath = path.resolve(currentDirectory)
        const parentDir = `${absolutePath}/.output/public/images/uploaded_files/`
        const dir = parentDir + body.dirName

        if (!fs.existsSync(dir)) {
            setResponseStatus(event, 421)
            return { status: false, error: 'Каталог не существует.' }
        }
        else {
            fs.rmSync(dir, { recursive: true })
            setResponseStatus(event, 201)
            return { status: true, error: null }
        }

    } catch (error) {
        console.log(error)
        setResponseStatus(event, 422)
        return { status: false, error: error }
    }

});
