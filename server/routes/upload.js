import fs from 'fs'
// import path from 'path'
import { readFiles } from 'h3-formidable'
export default defineEventHandler(async (event) => {
	try {
		const headers = getRequestHeaders(event)

		if (!headers['content-type']?.includes('multipart/form-data')) {
			setResponseStatus(event, 421)
			return { status: false, path: null, error: 'Файл не найден' };
		}
		const { fields, files } = await readFiles(event, {
			includeFields: true,
		})

		const img = files.file[0]
		const catalogName = fields.url_name[0]
		if (!img || !catalogName) {
			setResponseStatus(event, 422)
			return { status: false, name: null, error: 'Не все данные переданы!' };
		}
		let parentDir = `./.output/public/images/uploaded_files/${catalogName}/`
		if (!fs.existsSync(parentDir)) {
			fs.mkdirSync(parentDir, { recursive: false })
		}
		const newName = Date.now() + '.' + img.originalFilename.split('.').pop()
		const filePath = parentDir + newName
		// fs.renameSync(img.filepath, filePath)
		fs.copyFileSync(img.filepath, filePath)

		setResponseStatus(event, 201)
		return { status: true, name: newName, error: null };
	} catch (error) {
		console.log('try error', error)
		setResponseStatus(event, 423)
		return { status: false, name: null, error: error };
	}

});
