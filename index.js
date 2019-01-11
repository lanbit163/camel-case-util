function dashToCamelCase(input) {
    return input.replace(/-(\w)/g, function(all, letter){
        return letter.toUpperCase();
    });
}
function underscoreToCamelCase(input){
    return input.replace(/\_(\w)/g, function(all, letter){
        return letter.toUpperCase();
    });
}
function camelCaseToDash(input){
    return input.replace(/([A-Z])/g,"-$1").toLowerCase();
}
function camelCaseToUnderscore(input){
    return input.replace(/([A-Z])/g,"_$1").toLowerCase();
}

exports.dashToCamelCase = dashToCamelCase;
exports.underscoreToCamelCase = underscoreToCamelCase;
exports.camelCaseToDash = camelCaseToDash;
exports.camelCaseToUnderscore = camelCaseToUnderscore;
