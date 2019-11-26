
function print(str) {
    console.log(str);
}

function printjson(str) {
    console.log(JSON.parse(str));
}

module.exports = {print, printjson};