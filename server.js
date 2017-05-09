
"use strict";

var isAnagram = function(s,t){
    var c = {};
    var i;

    if(s.length !== t.length){
        return false;
    }

    for(i=0;i<s.length;i++){
        if(!c[s[i]]){
            c[s[i]]=1;
        }
        else{
            c[s[i]]++;
        }
    }

    for(i=0;i<t.length;i++){
        if(!c[s[i]] || c[s[i]]==0){
            return false;
        }
        else{
            c[s[i]]--;;
        }
    }
    return true;
};

console.log(isAnagram("cat","act"));