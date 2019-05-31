 export const handleFunction = function(name, func){
    var value = this.name.target.value.bind(this)
    if(name.target.value.length > 0){
        this.setState({
            name : value 
        }, func)
    }
    else{
        this.setState({
            name: name.target.value 
        })
    }
}