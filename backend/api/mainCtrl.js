const { JSONParser } = require('formidable');
var formidable = require('formidable');

function mergeLetters(str) {
    let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    const mumber = str.split('')
    const code = []
    mumber.forEach(m => {
    if (map[m]) {
        code.push(map[m])
    }
    })

    const merge = (ary) => {
    let temAry = []

    for (let i = 0; i < ary[0].length; i++) {
        const cur = ary[0][i];
        for (let j = 0; j < ary[1].length; j++) {
        const cur2 = ary[1][j];
        temAry.push(`${cur}${cur2}`)
        }
    }

    ary.splice(0, 2, temAry)

    if(ary.length > 1) {
        merge(ary)
        console.log(ary)
    } else {
        return temAry
    }

    return ary[0]
    }
    return merge(code)
}

exports.doConvert=function(req,res){
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    let form = new formidable.IncomingForm()
    form.parse(req, (err, fields, file) => {
        const inputValue=fields.input;
        //console.log(inputValue)
        const result = mergeLetters(inputValue)
        //console.log(result)
        res.json({"result":result})
    })
    
}
