/**
 * Created by Lucien on 11/3/2015.
 */
define(['storage'],function(storage){
    return function(key, value, isDel){
        return storage(key, value, isDel,sessionStorage);
    }

});