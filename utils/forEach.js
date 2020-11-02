
/**
 * 
 * @param {Object|Array} obj 
 * @param {FUnction} fn 
 */
function forEach(obj, fn) {
  if(obj === null || typeof obj === 'undefined') {
    return;
  }
 
  if(typeof obj !== 'object') {
    obj = [obj]
  }

  if(Array.isArray(obj)) {
    for(var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    for(var key in obj) {
      if(Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

// 测试..
forEach([1,3,5], function con(v, k, arr) {
  console.log(v, k, arr);
})