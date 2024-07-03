import path, { dirname } from "node:path"
import { fileURLToPath } from "node:url"
const __dirname = dirname(fileURLToPath(import.meta.url));



const give_me_path = (dir) => {

    let path_to_compiler = path.join(__dirname, dir)
    return path_to_compiler
}


export { give_me_path }