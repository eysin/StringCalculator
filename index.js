function Add(numbers){
    if(numbers === ""){
        return 0;
    }
    var splits = numbers.split(',');
    let returner = 0;
    for(let i = 0; i < splits.length; i++){
        returner += parseInt(splits[i]);
    }
    return returner;
}


module.exports = Add;