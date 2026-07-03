
import { spawn } from 'node:child_process';
import dotenv from "dotenv";
dotenv.config({ path: '../.env' });


const langSpecific_docker = async (PATH, img_tag) => {

    try {

        return new Promise((resolve, reject) => {

            const child = spawn("docker", ["run", "--rm", "-v", `${PATH}:/app`, `${img_tag}`]);


            let output = '';

            child.stdout.on("data", data => {

                output = data;
            })

            child.stderr.on("data", data => {

                output = data;
            });

            child.on("close", code => {


                resolve(output);



            })

        })



    } catch (error) {

        console.log("error from langSpecific_docker", error);

    }

};


export { langSpecific_docker }