

function validate_object(obj){
    if (obj.topic == 'A'){
        if(obj.name != 'a'){
            return false
        }
        if(obj.description.length<10 || obj.description.length>100){
            return false
            }
    }
    else if(obj.topic == 'B'){
        if(obj.name != 'x'){
            return false
        }
        if(obj.description.length >=40){
            return false
            }
        }
    else{
        return false
    }
return true
}