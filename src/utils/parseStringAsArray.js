module.exports = function parseStringAsArray(array){
    return array.split(',').map(tech => tech.trim()) // Trim remove os espacos antes e depois.
}