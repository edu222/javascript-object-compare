
function Comparison (target, data){
    this.target = target; //attributes
    this.data = data;
    
    this.compareKeys = function(){
        var keyMatches = [];
        for (var targetKeys in this.target){
            for (var dataKeys in this.data){
                if (targetKeys === dataKeys){
                    keyMatches.push(targetKeys);
                }
            }
        }
        return keyMatches;
    }
    this.compareData = function(){
        var keyMatches = this.compareKeys();
        var dataMatches = 0;
       
        for (var index in keyMatches){
            var key = keyMatches[index];

            if(this.target[key] === this.data[key]){
                dataMatches++;
            }
        }
        return dataMatches;
    }
    this.compare = function (){      
        var matches = this.compareData();
        var fieldsInA = Object.keys(this.target).length;
        var fieldsInB = Object.keys(this.data).length;

        return 2 * matches/(fieldsInA + fieldsInB)
    }
    
    this.search = function(blah){
        document.write(blah)
    }
}


// Comparison.prototype.name = function(){
//     return this.name
// }


