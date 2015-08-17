module.exports = function(newModule, options){
  try{
    return ( ( options && options.parent ) || module.parent).require(newModule);
  }catch(err){ 
    if (err.code !== "MODULE_NOT_FOUND" && options && options.rethrow) {
      throw err;
    }
  }
  return null;
};
