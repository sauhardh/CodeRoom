import fs from "fs";
import dotenv from "dotenv";
import path from "path";
import { langSpecific_docker } from "./langSpecific_docker.js";
dotenv.config();
import { give_me_path } from "./path.js";



const docker_compiler = async (InputText = "", extension) => {

    try {


        let PATH;
        let data;
        let img_tag


        if (extension == ".py") {
            PATH = give_me_path("python")
            img_tag = process.env.PYTHON_TAG

        }
        else
            if (extension == ".js") {
                console.log("path run")
                PATH = give_me_path("javascript")
                img_tag = process.env.JS_TAG



            }
            else
                if (extension == ".cpp") {
                    PATH = give_me_path("cpp")
                    img_tag = process.env.CPP_TAG



                }


        const file = fs.writeFileSync(`${PATH}/myapp${extension}`, InputText)



        data = (await langSpecific_docker(PATH, img_tag)).toString();
        console.log('Data given by docker', data)




        // delete file
        fs.unlinkSync(`${PATH}/myapp${extension}`, (err) => {
            if (err) {
                console.log("error on deleting file from docker_compiler ", err)
            }
        });

        return data;


    } catch (error) {

        console.log("eerror", error.toString())

    }
}

export { docker_compiler }