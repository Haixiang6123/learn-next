import path from 'path'
import fs, {promises as fsPromise} from 'fs'
import matter from 'gray-matter'

export const getPosts = async () => {
  const markdownDir = path.join(process.cwd(), 'markdown');

  const fileNames = await fsPromise.readdir(markdownDir)

  return fileNames.map(fileName => {
    const postPath = path.join(markdownDir, fileName)
    const id = fileName.replace(/\.md$/g, '')

    const raw = fs.readFileSync(postPath, 'utf8')

    const {data: {title, date}, content} = matter(raw)

    return { id, title, date, content }
  })
}
