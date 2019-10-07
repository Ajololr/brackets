module.exports = function check(str, bracketsConfig) {
    let resultMas = [];
    let map = new Map(bracketsConfig);
    for (let i = str.length - 1; i >= 0; i--) {
        if ((map.get(str[i]) === resultMas[0]) && (resultMas[0] !== undefined)) {
            resultMas.shift();
        }
            else {
                resultMas.unshift(str[i]);
            }
    }
    return resultMas.length === 0; 
} 
