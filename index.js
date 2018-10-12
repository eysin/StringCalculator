function Add(numbers){
    if(numbers === ""){
        return 0;
    }
    var splits = numbers.split(',');
    if(splits.length === 1){
        return parseInt(splits[0]);
    }
    if(splits.length === 2){
        return parseInt(splits[0]) + parseInt(splits[1]);
    }
}


module.exports = Add;