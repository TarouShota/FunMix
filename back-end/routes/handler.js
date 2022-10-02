import express from 'express';
const router = express.Router();
import fs from 'fs'
// import {main} from "../compile.js";
import {compileFunc, compilerVersion} from '@ton-community/func-js';
import {Cell} from 'ton';

// import fs from "fs";

 async function main(params) {

     const arrayOfCode = params.split('$');
     let i =0;
    // console.log(arrayOfCode[0][arrayOfCode[0].length-1]);
    for(i;i<arrayOfCode.length;i++){
        arrayOfCode[i]+='\n'
    }
    arrayOfCode.filter((e)=>e!==` \n`)
    console.log(arrayOfCode);
    const stringifiedCode = arrayOfCode.join('');
    console.log(stringifiedCode);
    // console.log(arrayOfCode)
    //  console.log(stringifie/dCode);
    let result = await compileFunc({
        // Entry points of your project
        entryPoints: ['main.fc','stdlib.fc'],
        // Sources
        sources: {
            "stdlib.fc": fs.readFileSync('./stdLibrary.fc','utf-8'),
            "main.fc": `${stringifiedCode}`+
                fs.readFileSync('./mainFun.fc','utf-8'), //pass here string from request
            // "utils.fc":fs.readFileSync('./utils.fc','utf-8'),
            // "constants.fc":fs.readFileSync('./const.fc','utf-8') #include "stdlib.fc"
            // Rest of the files which are included in main.fc if some

            // '() load_data() inline_ref {\n' +
            //         '    return ();\n' +
            //     '}'
        }
    });
    if (result.status === 'error') {
        // console.error(result.message)//
        return result
    }

    // result.codeBoc contains base64 encoded BOC with code cell
    let codeCell = Cell.fromBoc(Buffer.from(result.codeBoc, "base64"))[0];
    return result
}

router.get('/:data',async (req,res)=>{



    // const str = {
    //     fc:`${''}`
    //     }
    const result =await main(req.params.data);
    // result.converted = result.fiftCode.replace('\\n',' ');

    res.end(JSON.stringify(result));
})

// router.post('/addTweet', (req, res) => {
//     res.end('NA');
// });

export default router;