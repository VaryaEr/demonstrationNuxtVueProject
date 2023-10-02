import fs from 'fs'
import path from 'path'
export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const currentDirectory = process.cwd()
        const absolutePath = path.resolve(currentDirectory)
        const parentDir = `${absolutePath}/.output/public/images/uploaded_files/`
        const parentNewDir = parentDir + body.newDir
        if (body.oldDir !== null) {
            const parentOldDir = parentDir + body.oldDir
            if (!fs.existsSync(parentOldDir)) {

                setResponseStatus(event, 421)
                return { status: false, path: null, error: 'Старый каталог не существует.' }
            }
            fs.renameSync(parentOldDir, parentNewDir)
            setResponseStatus(event, 201)
            return { status: true, path: parentNewDir, error: null }
        }
        else {
            fs.mkdirSync(parentNewDir)
            setResponseStatus(event, 201)
            return { status: true, path: parentNewDir, error: null }
        }


    } catch (error) {
        console.log(error)
        setResponseStatus(event, 422)
        return { status: false, path: null, error: error }
    }

})
