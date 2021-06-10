module.exports = function util(string){
    if(typeof string !== 'string') throw new TypeError('util wants a string');
    return string.replace(/\s/g,'');     
}