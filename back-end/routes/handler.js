import express from 'express';
const router = express.Router();
import fs from 'fs'
// import {main} from "../compile.js";
import {compileFunc, compilerVersion} from '@ton-community/func-js';
import {Cell} from 'ton';

// import fs from "fs";

 async function main(params) {
     // console.log(params);

     let arrayOfCode = params.split('$');
     console.log(arrayOfCode);
     // console.log(arrayOfCode);
     // while( params[arrayOfCode.length-1]===`$` && params[arrayOfCode.length-1]===' '){
     //     arrayOfCode.pop();
     // }
    // console.log(arrayOfCode[0][arrayOfCode[0].length-1]);
     let filteredArray = arrayOfCode.filter(word => word ===' ')
     console.log(filteredArray[0]);
    for(let i =0;i<filteredArray.length;i++){
        filteredArray[i] =filteredArray[i]+'\n'
    }
    const stringifiedCode = filteredArray.join('');

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