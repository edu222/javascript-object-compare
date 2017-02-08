function compare (target, data)
{    
    // Find key matches
    var keyMatches = [];
    for (var targetKeys in target)
    {
        for (var dataKeys in data)
        {
            if (targetKeys === dataKeys)
            {
                keyMatches.push(targetKeys);
            }
        }
    }
    // Find data matches for keys that match
    var dataMatches = 0;       
    for (var index in keyMatches)
    {
        var key = keyMatches[index];
        if(target[key] === data[key])
        {
            dataMatches++;
        }
    }
    // Compute comparison level
    var fieldsInA = Object.keys(target).length;
    var fieldsInB = Object.keys(data).length;

    return 2 * matches/(fieldsInA + fieldsInB);
}
