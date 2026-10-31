'use strict';
var $p;
var $fileLevelThis = this;
function $Char(c) {
  this.c = c;
}
$p = $Char.prototype;
$p.toString = (function() {
  return String.fromCharCode(this.c);
});
function $Long(lo, hi) {
  this.l = lo;
  this.h = hi;
}
$p = $Long.prototype;
$p.toString = (function() {
  return $s_RTLong__toString__I__I__T(this.l, this.h);
});
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), Object.getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.Z ? arg0.a7() : $objectClone(arg0));
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.N;
      } else {
        return null.hO();
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.O();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.O.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.hP(x0);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $checkIntDivisor(arg0) {
  if ((arg0 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return arg0;
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
var $fpBitsDataView = new DataView(new ArrayBuffer(8));
function $floatToBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setFloat32(0, arg0, true);
  return dataView.getInt32(0, true);
}
function $floatFromBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setInt32(0, arg0, true);
  return dataView.getFloat32(0, true);
}
function $doubleToBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__fromDoubleBits__D__O__J(arg0, dataView);
}
function $doubleFromBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__bitsToDouble__I__I__O__D(arg0.l, arg0.h, dataView);
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  if (((arg0 !== arg2) || (((arg3 - arg1) >>> 0) > (arg4 >>> 0)))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $bL(arg0, arg1) {
  return new $Long(arg0, arg1);
}
var $bL0 = $bL(0, 0);
function $uC(arg0) {
  return ((arg0 === null) ? 0 : arg0.c);
}
function $uJ(arg0) {
  return ((arg0 === null) ? $bL0 : arg0);
}
/** @constructor */
function $c_O() {
}
$p = $c_O.prototype;
$p.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $p;
$p.O = (function() {
  return $systemIdentityHashCode(this);
});
$p.p = (function() {
  var i = this.O();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.p();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.d = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.d[i] = null;
    }
  } else {
    this.d = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.ak = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.d, srcPos, dest.d, destPos, length);
});
$p.a7 = (function() {
  return new $ac_O(this.d.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.d = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.d[i] = false;
    }
  } else {
    this.d = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.ak = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.d, srcPos, dest.d, destPos, length);
});
$p.a7 = (function() {
  return new $ac_Z(this.d.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.d = new Uint16Array(arg);
  } else {
    this.d = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.ak = (function(srcPos, dest, destPos, length) {
  dest.d.set(this.d.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.a7 = (function() {
  return new $ac_C(this.d.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.d = new Int8Array(arg);
  } else {
    this.d = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.ak = (function(srcPos, dest, destPos, length) {
  dest.d.set(this.d.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.a7 = (function() {
  return new $ac_B(this.d.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.d = new Int16Array(arg);
  } else {
    this.d = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.ak = (function(srcPos, dest, destPos, length) {
  dest.d.set(this.d.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.a7 = (function() {
  return new $ac_S(this.d.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.d = new Int32Array(arg);
  } else {
    this.d = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.ak = (function(srcPos, dest, destPos, length) {
  dest.d.set(this.d.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.a7 = (function() {
  return new $ac_I(this.d.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.d = new Int32Array(arg);
  } else {
    this.d = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.ak = (function(srcPos, dest, destPos, length) {
  dest.d.set(this.d.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.a7 = (function() {
  return new $ac_J(this.d.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.d = new Float32Array(arg);
  } else {
    this.d = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.ak = (function(srcPos, dest, destPos, length) {
  dest.d.set(this.d.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.a7 = (function() {
  return new $ac_F(this.d.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.d = new Float64Array(arg);
  } else {
    this.d = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.ak = (function(srcPos, dest, destPos, length) {
  dest.d.set(this.d.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.a7 = (function() {
  return new $ac_D(this.d.slice());
});
function $TypeData() {
  this.C = (void 0);
  this.n = null;
  this.O = null;
  this.B = null;
  this.D = 0;
  this.z = null;
  this.E = "";
  this.L = (void 0);
  this.A = (void 0);
  this.F = (void 0);
  this.w = (void 0);
  this.J = false;
  this.N = "";
  this.X = false;
  this.Y = false;
  this.Z = false;
  this.I = (void 0);
}
$p = $TypeData.prototype;
$p.p = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.n = ({});
  this.z = zero;
  this.E = arrayEncodedName;
  var self = this;
  this.F = ((that) => (that === self));
  this.N = displayName;
  this.X = true;
  this.I = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this.A = new $TypeData().y(this, arrayClass, typedArrayClass, (arrayEncodedName === "J"));
  }
  return this;
});
$p.i = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.n = ancestors;
  this.E = (("L" + fullName) + ";");
  this.F = ((that) => (!(!that.n[internalName])));
  this.J = (kindOrCtor === 2);
  this.N = fullName;
  this.Y = (kindOrCtor === 1);
  this.I = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.n[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$p.y = (function(componentData, arrayClass, typedArrayClass, isLongArray, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.E);
  this.C = arrayClass;
  this.n = ({
    z: 1,
    a: 1
  });
  this.O = componentData;
  this.B = componentData;
  this.D = 1;
  this.E = name;
  this.N = name;
  this.Z = true;
  var self = this;
  this.F = (isAssignableFromFun || ((that) => (self === that)));
  this.w = (isLongArray ? ((array) => {
    var len = (array.length | 0);
    var result = new arrayClass(len);
    var u = result.d;
    for (var i = 0; (i < len); i = ((i + 1) | 0)) {
      var srcElem = array[i];
      u[(i << 1)] = srcElem.l;
      u[(((i << 1) + 1) | 0)] = srcElem.h;
    }
    return result;
  }) : (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array))));
  this.I = ((obj) => (obj instanceof arrayClass));
  return this;
});
$p.a = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.d = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.d[i] = null;
      }
    } else {
      this.d = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.ak = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.d, srcPos, dest.d, destPos, length);
  });
  $p.a7 = (function() {
    return new ArrayClass(this.d.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    z: 1,
    a: 1
  });
  this.O = componentData;
  this.B = arrayBase;
  this.D = arrayDepth;
  this.E = name;
  this.N = name;
  this.Z = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.D;
    return ((thatDepth === arrayDepth) ? arrayBase.F(that.B) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.F = isAssignableFromFun;
  this.w = ((array) => new ArrayClass(array));
  var self = this;
  this.I = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$p.r = (function() {
  if ((!this.A)) {
    this.A = new $TypeData().a(this);
  }
  return this.A;
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.D;
    return ((arrayDepth === depth) ? (!data.B.X) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_D))));
}
var $d_O = new $TypeData();
$d_O.n = ({});
$d_O.E = "Ljava.lang.Object;";
$d_O.F = ((that) => (!that.X));
$d_O.N = "java.lang.Object";
$d_O.I = ((obj) => (obj !== null));
$d_O.A = new $TypeData().y($d_O, $ac_O, (void 0), false, ((that) => {
  var thatDepth = that.D;
  return ((thatDepth === 1) ? (!that.B.X) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().p((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().p(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().p(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().p(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().p(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().p(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().p($bL0, "J", "long", $ac_J, Int32Array);
var $d_F = new $TypeData().p(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().p(0.0, "D", "double", $ac_D, Float64Array);
var $typedArraysAreBigEndian = (new Int8Array(new Int32Array([1]).buffer)[0] === 0);
function $constArrayBuffer_B(len, encoded) {
  var buf = new ArrayBuffer(len);
  var view = new DataView(buf);
  var regularChunksEnd = ((encoded.length - 4) | 0);
  var i = 0;
  var j = 0;
  var chunk = 0;
  while (true) {
    chunk = (((encoded.charCodeAt(i) | (encoded.charCodeAt(((i + 1) | 0)) << 8)) | (encoded.charCodeAt(((i + 2) | 0)) << 16)) | (encoded.charCodeAt(((i + 3) | 0)) << 24));
    chunk = ((((chunk - 808464432) | 0) - ((chunk & 1616928864) >>> 3)) | 0);
    chunk = (((chunk & 1056980736) >>> 2) | (chunk & 4128831));
    chunk = (((chunk & 268369920) >>> 4) | (chunk & 4095));
    if ((i === regularChunksEnd)) {
      break;
    }
    view.setUint32(j, chunk, true);
    i = ((i + 4) | 0);
    j = ((j + 3) | 0);
  }
  var trailing = ((len - j) | 0);
  view.setUint8(j, chunk);
  if ((trailing !== 1)) {
    view.setUint8(((j + 1) | 0), (chunk >>> 8));
    if ((trailing === 3)) {
      view.setUint8(((j + 2) | 0), (chunk >>> 16));
    }
  }
  return buf;
}
function $constArrayBuffer_S(len, encoded) {
  var buf = $constArrayBuffer_B((len << 1), encoded);
  if ($typedArraysAreBigEndian) {
    var view = new DataView(buf);
    var i = 0;
    while ((i !== len)) {
      view.putInt16(i, view.getInt16(i, true), false);
      i = ((i + 2) | 0);
    }
  }
  return buf;
}
function $constArrayBuffer_I(len, encoded) {
  var buf = $constArrayBuffer_B((len << 2), encoded);
  if ($typedArraysAreBigEndian) {
    var view = new DataView(buf);
    var i = 0;
    while ((i !== len)) {
      view.putInt32(i, view.getInt32(i, true), false);
      i = ((i + 4) | 0);
    }
  }
  return buf;
}
function $constArrayBuffer_J(len, encoded) {
  return $constArrayBuffer_I((len << 1), encoded);
}
function $constTypedArrayU_I(len, encoded, prevMask) {
  var buf = new Int32Array(len);
  var inLen = (encoded.length | 0);
  var prev = 0;
  var i = 0;
  var j = 0;
  var v = 0;
  while ((i !== inLen)) {
    var c = encoded.charCodeAt(i);
    if ((c < 80)) {
      v = ((v | (c - 48)) << 5);
    } else {
      v = (v | (c - 93));
      prev = (((prev & prevMask) + v) | 0);
      buf[j] = prev;
      j = ((j + 1) | 0);
      v = 0;
    }
    i = ((i + 1) | 0);
  }
  return buf;
}
function $constTypedArrayS_I(len, encoded, prevMask) {
  var buf = new Int32Array(len);
  var inLen = (encoded.length | 0);
  var prev = 0;
  var i = 0;
  var j = 0;
  var v = 0;
  var first = true;
  while ((i !== inLen)) {
    var c = encoded.charCodeAt(i);
    if ((c < 80)) {
      if (first) {
        v = (((c - 48) << 27) >> 22);
        first = false;
      } else {
        v = ((v | (c - 48)) << 5);
      }
    } else {
      if (first) {
        v = (((c - 93) << 27) >> 27);
      } else {
        v = (v | (c - 93));
        first = true;
      }
      prev = (((prev & prevMask) + v) | 0);
      buf[j] = prev;
      j = ((j + 1) | 0);
    }
    i = ((i + 1) | 0);
  }
  return buf;
}
function $constArrRaw_B(len, encoded) {
  return new $ac_B(new Int8Array($constArrayBuffer_B(len, encoded)));
}
function $constArrRaw_S(len, encoded) {
  return new $ac_S(new Int16Array($constArrayBuffer_S(len, encoded)));
}
function $constArrRaw_C(len, encoded) {
  return new $ac_C(new Uint16Array($constArrayBuffer_S(len, encoded)));
}
function $constArrRaw_I(len, encoded) {
  return new $ac_I(new Int32Array($constArrayBuffer_I(len, encoded)));
}
function $constArrRaw_J(len, encoded) {
  return new $ac_J(new Int32Array($constArrayBuffer_J(len, encoded)));
}
function $constArrUVals_I(len, encoded) {
  return new $ac_I($constTypedArrayU_I(len, encoded, 0));
}
function $constArrUDiffs_I(len, encoded) {
  return new $ac_I($constTypedArrayU_I(len, encoded, (-1)));
}
function $constArrSVals_I(len, encoded) {
  return new $ac_I($constTypedArrayS_I(len, encoded, 0));
}
function $constArrSDiffs_I(len, encoded) {
  return new $ac_I($constTypedArrayS_I(len, encoded, (-1)));
}
function $constArrUVals_J(len, encoded) {
  return new $ac_J($constTypedArrayU_I((len << 1), encoded, 0));
}
function $constArrUDiffs_J(len, encoded) {
  return new $ac_J($constTypedArrayU_I((len << 1), encoded, (-1)));
}
function $constArrSVals_J(len, encoded) {
  return new $ac_J($constTypedArrayS_I((len << 1), encoded, 0));
}
function $constArrSDiffs_J(len, encoded) {
  return new $ac_J($constTypedArrayS_I((len << 1), encoded, (-1)));
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  ao: 1
}), ((x) => (x === (void 0))));
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().hf(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().he(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().gl(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().gk(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().fh(value);
}
function $s_RTLong__fromUnsignedInt__I__J(value) {
  return $bL(value, 0);
}
function $s_RTLong__fromInt__I__J(value) {
  var hi = (value >> 31);
  return $bL(value, hi);
}
function $s_RTLong__clz__I__I__I(lo, hi) {
  return ((hi !== 0) ? Math.clz32(hi) : ((32 + Math.clz32(lo)) | 0));
}
function $s_RTLong__toFloat__I__I__F(lo, hi) {
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
}
function $s_RTLong__toDouble__I__I__D(lo, hi) {
  return ((4.294967296E9 * hi) + (lo >>> 0.0));
}
function $s_RTLong__toInt__I__I__I(lo, hi) {
  return lo;
}
function $s_RTLong__toString__I__I__T(lo, hi) {
  return $m_RTLong$().fA(lo, hi);
}
function $s_RTLong__bitsToDouble__I__I__O__D(lo, hi, fpBitsDataView) {
  fpBitsDataView.setInt32(0, lo, true);
  fpBitsDataView.setInt32(4, hi, true);
  return (+fpBitsDataView.getFloat64(0, true));
}
function $s_RTLong__mul__I__I__I__I__J(alo, ahi, blo, bhi) {
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, bhi) + Math.imul(ahi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sub__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo - blo) | 0);
  var hi = ((((ahi - bhi) | 0) - (((lo >>> 0) > (alo >>> 0)) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__add__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo + blo) | 0);
  var hi = ((((ahi + bhi) | 0) + (((lo >>> 0) < (alo >>> 0)) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sar__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : (hi >> n));
  var hi$1 = (((32 & n) === 0) ? (hi >> n) : (hi >> 31));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shr__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : ((hi >>> n) | 0));
  var hi$1 = (((32 & n) === 0) ? ((hi >>> n) | 0) : 0);
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shl__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (lo << n) : 0);
  var hi$1 = (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> (~n)) | 0) | (hi << n)) : (lo << n));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__xor__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo ^ blo);
  var hi = (ahi ^ bhi);
  return $bL(lo, hi);
}
function $s_RTLong__and__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo & blo);
  var hi = (ahi & bhi);
  return $bL(lo, hi);
}
function $s_RTLong__or__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo | blo);
  var hi = (ahi | bhi);
  return $bL(lo, hi);
}
function $s_RTLong__geu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__gtu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__leu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ltu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ge__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__gt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__le__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__lt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__notEquals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) !== 0);
}
function $s_RTLong__equals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) === 0);
}
/** @constructor */
function $c_RTLong$() {
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.fA = (function(lo, hi) {
  if ((hi === (lo >> 31))) {
    return ("" + lo);
  } else if ((((-2097152) & (hi ^ (hi >> 10))) === 0)) {
    return ("" + ((4.294967296E9 * hi) + (lo >>> 0.0)));
  } else {
    var sign = (hi >> 31);
    var xlo = (lo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((hi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var qHat = (+Math.floor((1.0000000000000265E-9 * aHat)));
    var rHat = ((rlo - Math.imul(1000000000, (qHat | 0.0))) | 0);
    if ((rHat < 0)) {
      qHat = (qHat - 1.0);
      rHat = ((1000000000 + rHat) | 0);
    }
    var this$7 = rHat;
    var remStr = ("" + this$7);
    var $x_1 = qHat;
    var start = remStr.length;
    var s = ((("" + $x_1) + "000000000".substring(start)) + remStr);
    return ((hi < 0) ? ("-" + s) : s);
  }
});
$p.fh = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    return $bL(0, (-2147483648));
  } else if ((value >= 9.223372036854776E18)) {
    return $bL((-1), 2147483647);
  } else {
    var rawLo = (value | 0.0);
    var rawHi = ((2.3283064365386963E-10 * value) | 0.0);
    var hi = (((value < 0.0) && (rawLo !== 0)) ? ((rawHi - 1) | 0) : rawHi);
    return $bL(rawLo, hi);
  }
});
$p.gk = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((rlo$1 >>> 0) < (xlo$1 >>> 0)) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var quotHi = (((rhi >>> 0) / ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var k = ((rhi - Math.imul(rlo$1, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var absR_$_lo = quotLo;
    var absR_$_hi = quotHi;
  } else {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    if ((((((rhi - ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0)) | 0) - (((((rlo - lo$1) | 0) >>> 0) > (rlo >>> 0)) | 0)) | 0) < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + ((lo$3 !== (-1)) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else {
      var absR_$_lo = lo;
      var absR_$_hi = hi;
    }
  }
  if (((ahi ^ bhi) >= 0)) {
    return $bL(absR_$_lo, absR_$_hi);
  } else {
    var lo$4 = ((-absR_$_lo) | 0);
    var hi$4 = ((((-absR_$_hi) | 0) - ((lo$4 !== 0) | 0)) | 0);
    return $bL(lo$4, hi$4);
  }
});
$p.gl = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var quotHi = (((ahi >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    var k = ((ahi - Math.imul(blo, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (alo >>> 0.0)) / blo) | 0.0);
    return $bL(quotLo, quotHi);
  } else if ((bhi >= 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    if ((((((ahi - ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0)) | 0) - (((((alo - lo$1) | 0) >>> 0) > (alo >>> 0)) | 0)) | 0) < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + ((lo$3 !== (-1)) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else {
      return $bL(lo, hi);
    }
  } else if (((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)))) {
    return $bL(0, 0);
  } else {
    return $bL(1, 0);
  }
});
$p.he = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((rlo$1 >>> 0) < (xlo$1 >>> 0)) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var k$2 = (((rhi >>> 0) % ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var remLo = ((rlo - Math.imul(rlo$1, quotLo$2)) | 0);
    var absR_$_lo = remLo;
    var absR_$_hi = 0;
  } else {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((rlo - lo$1) | 0);
    var hi$2 = ((((rhi - hi$1) | 0) - (((lo$2 >>> 0) > (rlo >>> 0)) | 0)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + rlo$1) | 0);
      var hi$3 = ((((hi$2 + rhi$1) | 0) + (((lo$3 >>> 0) < (lo$2 >>> 0)) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else {
      var absR_$_lo = lo$2;
      var absR_$_hi = hi$2;
    }
  }
  if ((ahi < 0)) {
    var lo$4 = ((-absR_$_lo) | 0);
    var hi$4 = ((((-absR_$_hi) | 0) - ((lo$4 !== 0) | 0)) | 0);
    return $bL(lo$4, hi$4);
  } else {
    return $bL(absR_$_lo, absR_$_hi);
  }
});
$p.hf = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var k$2 = (((ahi >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (alo >>> 0.0)) / blo) | 0.0);
    var remLo = ((alo - Math.imul(blo, quotLo$2)) | 0);
    return $bL(remLo, 0);
  } else if ((bhi >= 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((alo - lo$1) | 0);
    var hi$2 = ((((ahi - hi$1) | 0) - (((lo$2 >>> 0) > (alo >>> 0)) | 0)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + blo) | 0);
      var hi$3 = ((((hi$2 + bhi) | 0) + (((lo$3 >>> 0) < (lo$2 >>> 0)) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else {
      return $bL(lo$2, hi$2);
    }
  } else if (((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)))) {
    return $bL(alo, ahi);
  } else {
    var lo$4 = ((alo - blo) | 0);
    var hi$4 = ((((ahi - bhi) | 0) - (((lo$4 >>> 0) > (alo >>> 0)) | 0)) | 0);
    return $bL(lo$4, hi$4);
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  aq: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.a0();
  while (it.N()) {
    f.i(it.E());
  }
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.a9() === 0) ? (("" + start) + end) : $thiz.dy($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).am.z);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.am;
  if ((start.length !== 0)) {
    jsb.z = (("" + jsb.z) + start);
  }
  var it = $thiz.a0();
  if (it.N()) {
    var obj = it.E();
    jsb.z = (("" + jsb.z) + obj);
    while (it.N()) {
      if ((sep.length !== 0)) {
        jsb.z = (("" + jsb.z) + sep);
      }
      var obj$1 = it.E();
      jsb.z = (("" + jsb.z) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.z = (("" + jsb.z) + end);
  }
  return b;
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$p = $c_sr_ScalaRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $p;
$p.g5 = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.ba(), (x.az() + "("), ",", ")");
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  b5: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$p = $c_sr_Statics$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $p;
$p.gP = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.gm = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().fh(dv);
    var lv_$_lo = $x_1.l;
    var lv_$_hi = $x_1.h;
    if ((((4.294967296E9 * lv_$_hi) + (lv_$_lo >>> 0.0)) === dv)) {
      return (lv_$_lo ^ lv_$_hi);
    } else {
      var valueInt = (dv | 0);
      if (((valueInt === dv) && ((1.0 / dv) !== (-Infinity)))) {
        return valueInt;
      } else if ((dv !== dv)) {
        return 2146959360;
      } else {
        var fpBitsDataView = $fpBitsDataView;
        fpBitsDataView.setFloat64(0, dv, true);
        return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
      }
    }
  }
});
$p.T = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.gm((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.gP($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.gK = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  b7: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
/** @constructor */
function $c_sjs_js_ArrayOps$() {
}
$p = $c_sjs_js_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sjs_js_ArrayOps$;
/** @constructor */
function $h_sjs_js_ArrayOps$() {
}
$h_sjs_js_ArrayOps$.prototype = $p;
$p.fK = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.a0();
  while (((i < len) && it.N())) {
    b.push(new $c_T2(this$[i], it.E()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.fL = (function(this$) {
  var len = (this$.length | 0);
  var b = new Array(len);
  var i = 0;
  while ((i < len)) {
    b[i] = new $c_T2(this$[i], i);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.a8 = (function(this$, f) {
  var len = (this$.length | 0);
  var i = 0;
  while ((i < len)) {
    f.i(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  b9: 1
}));
var $n_sjs_js_ArrayOps$;
function $m_sjs_js_ArrayOps$() {
  if ((!$n_sjs_js_ArrayOps$)) {
    $n_sjs_js_ArrayOps$ = new $c_sjs_js_ArrayOps$();
  }
  return $n_sjs_js_ArrayOps$;
}
/** @constructor */
function $c_sjs_js_ArrayOpsCommon$() {
}
$p = $c_sjs_js_ArrayOpsCommon$.prototype = new $h_O();
$p.constructor = $c_sjs_js_ArrayOpsCommon$;
/** @constructor */
function $h_sjs_js_ArrayOpsCommon$() {
}
$h_sjs_js_ArrayOpsCommon$.prototype = $p;
$p.a = (function(left, right) {
  var leftLength = (left.length | 0);
  var rightLength = (right.length | 0);
  var result = new Array(((leftLength + rightLength) | 0));
  var i = 0;
  while (true) {
    if ((i !== leftLength)) {
      result[i] = left[i];
      i = ((1 + i) | 0);
      continue;
    }
    break;
  }
  var i$1 = 0;
  while (true) {
    if ((i$1 !== rightLength)) {
      result[((i$1 + leftLength) | 0)] = right[i$1];
      i$1 = ((1 + i$1) | 0);
      continue;
    }
    break;
  }
  return result;
});
var $d_sjs_js_ArrayOpsCommon$ = new $TypeData().i($c_sjs_js_ArrayOpsCommon$, "scala.scalajs.js.ArrayOpsCommon$", ({
  ba: 1
}));
var $n_sjs_js_ArrayOpsCommon$;
function $m_sjs_js_ArrayOpsCommon$() {
  if ((!$n_sjs_js_ArrayOpsCommon$)) {
    $n_sjs_js_ArrayOpsCommon$ = new $c_sjs_js_ArrayOpsCommon$();
  }
  return $n_sjs_js_ArrayOpsCommon$;
}
/** @constructor */
function $c_sjs_js_special_package$() {
}
$p = $c_sjs_js_special_package$.prototype = new $h_O();
$p.constructor = $c_sjs_js_special_package$;
/** @constructor */
function $h_sjs_js_special_package$() {
}
$h_sjs_js_special_package$.prototype = $p;
$p.g = (function(properties) {
  var result = ({});
  properties.bP(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((pair$2$2) => {
    result[pair$2$2.F] = pair$2$2.a1;
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  be: 1
}));
var $n_sjs_js_special_package$;
function $m_sjs_js_special_package$() {
  if ((!$n_sjs_js_special_package$)) {
    $n_sjs_js_special_package$ = new $c_sjs_js_special_package$();
  }
  return $n_sjs_js_special_package$;
}
/** @constructor */
function $c_sjsr_package$() {
}
$p = $c_sjsr_package$.prototype = new $h_O();
$p.constructor = $c_sjsr_package$;
/** @constructor */
function $h_sjsr_package$() {
}
$h_sjsr_package$.prototype = $p;
$p.e = (function(array) {
  var len = array.d.length;
  var result = [];
  var i = 0;
  while ((i !== len)) {
    var x1 = i;
    result.push(array.d[x1]);
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_sjsr_package$ = new $TypeData().i($c_sjsr_package$, "scala.scalajs.runtime.package$", ({
  bg: 1
}));
var $n_sjsr_package$;
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$();
  }
  return $n_sjsr_package$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.m = (function(hash, data) {
  var h = this.fm(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.fm = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.aj = (function(hash, length) {
  return this.cF((hash ^ length));
});
$p.cF = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.bU = (function(x, seed, ignorePrefix) {
  var arr = x.ax();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.az()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.m(h, $f_T__hashCode__I(x.az()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.m(h, $m_sr_Statics$().T(x.ay(i)));
      i = ((1 + i) | 0);
    }
    return this.aj(h, arr);
  }
});
$p.hD = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.a0();
  while (iterator.N()) {
    var x = iterator.E();
    var h = $m_sr_Statics$().T(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.m(h$2, a);
  h$2 = this.m(h$2, b);
  h$2 = this.fm(h$2, c);
  return this.aj(h$2, n);
});
$p.h2 = (function(xs, seed) {
  var it = xs.a0();
  var h = seed;
  if ((!it.N())) {
    return this.aj(h, 0);
  }
  var x0 = it.E();
  if ((!it.N())) {
    return this.aj(this.m(h, $m_sr_Statics$().T(x0)), 1);
  }
  var x1 = it.E();
  var initial = $m_sr_Statics$().T(x0);
  h = this.m(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().T(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.N()) {
    h = this.m(h, prev);
    var hash = $m_sr_Statics$().T(it.E());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.m(h, hash);
      i = ((1 + i) | 0);
      while (it.N()) {
        h = this.m(h, $m_sr_Statics$().T(it.E()));
        i = ((1 + i) | 0);
      }
      return this.aj(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.cF(this.m(this.m(h0, rangeDiff), prev));
});
$p.ft = (function(start, step, last, seed) {
  return this.cF(this.m(this.m(this.m(seed, start), step), last));
});
$p.gG = (function(a, seed) {
  var h = seed;
  var l = a.t();
  switch (l) {
    case 0: {
      return this.aj(h, 0);
      break;
    }
    case 1: {
      return this.aj(this.m(h, $m_sr_Statics$().T(a.J(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().T(a.J(0));
      h = this.m(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().T(a.J(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.m(h, prev);
        var hash = $m_sr_Statics$().T(a.J(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.m(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.m(h, $m_sr_Statics$().T(a.J(i)));
            i = ((1 + i) | 0);
          }
          return this.aj(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.cF(this.m(this.m(h0, rangeDiff), prev));
    }
  }
});
$p.gO = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.bR())) {
    elems.dH();
  }
  return ((rangeState === 2) ? this.ft(initial, rangeDiff, prev, seed) : this.aj(h, n));
});
/** @constructor */
function $c_Lsketches_paintings_tile\uff3fstrokes_Color(hue, lightness) {
  this.e5 = 0.0;
  this.e6 = 0.0;
  this.e5 = hue;
  this.e6 = lightness;
}
$p = $c_Lsketches_paintings_tile\uff3fstrokes_Color.prototype = new $h_O();
$p.constructor = $c_Lsketches_paintings_tile\uff3fstrokes_Color;
/** @constructor */
function $h_Lsketches_paintings_tile\uff3fstrokes_Color() {
}
$h_Lsketches_paintings_tile\uff3fstrokes_Color.prototype = $p;
var $d_Lsketches_paintings_tile\uff3fstrokes_Color = new $TypeData().i($c_Lsketches_paintings_tile\uff3fstrokes_Color, "sketches.paintings.tile_strokes.Color", ({
  bj: 1
}));
/** @constructor */
function $c_Lsketches_paintings_tile\uff3fstrokes_Painting(width, height, brushSize, tiles, palette) {
  this.bn = 0.0;
  this.bm = 0.0;
  this.cK = 0.0;
  this.aR = null;
  this.cL = null;
  this.bn = width;
  this.bm = height;
  this.cK = brushSize;
  this.aR = tiles;
  this.cL = palette;
}
$p = $c_Lsketches_paintings_tile\uff3fstrokes_Painting.prototype = new $h_O();
$p.constructor = $c_Lsketches_paintings_tile\uff3fstrokes_Painting;
/** @constructor */
function $h_Lsketches_paintings_tile\uff3fstrokes_Painting() {
}
$h_Lsketches_paintings_tile\uff3fstrokes_Painting.prototype = $p;
$p.hd = (function() {
  if (((this.cL.length | 0) > 1)) {
    var tile = $m_Ltrivalibs_utils_random_random$package$().bT(this.aR);
    tile.c4 = $m_Ltrivalibs_utils_random_random$package$().bT(this.cL);
  }
});
var $d_Lsketches_paintings_tile\uff3fstrokes_Painting = new $TypeData().i($c_Lsketches_paintings_tile\uff3fstrokes_Painting, "sketches.paintings.tile_strokes.Painting", ({
  bk: 1
}));
function $p_Lsketches_paintings_tile\uff3fstrokes_Painting$package$__delta$1__D__D($thiz, step$1) {
  return ((0.29 * step$1) * ((2.0 * (0.5 * ($m_Ltrivalibs_utils_random_random$package$().U() + $m_Ltrivalibs_utils_random_random$package$().U()))) - 1.0));
}
/** @constructor */
function $c_Lsketches_paintings_tile\uff3fstrokes_Painting$package$() {
}
$p = $c_Lsketches_paintings_tile\uff3fstrokes_Painting$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_paintings_tile\uff3fstrokes_Painting$package$;
/** @constructor */
function $h_Lsketches_paintings_tile\uff3fstrokes_Painting$package$() {
}
$h_Lsketches_paintings_tile\uff3fstrokes_Painting$package$.prototype = $p;
$p.hc = (function(v) {
  var idx = $m_Ltrivalibs_utils_random_random$package$().dK((((v.length | 0) - 1) | 0));
  var res = [];
  if ((!(idx < 0))) {
    var i = 0;
    while (true) {
      var x0 = i;
      var a$proxy4 = (+v[x0]);
      res.push(a$proxy4);
      if ((i === idx)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  var p$proxy4 = (+v[idx]);
  var b$proxy2 = (+v[((1 + idx) | 0)]);
  var t$proxy1 = $m_Ltrivalibs_utils_random_random$package$().U();
  var a$proxy5 = ((p$proxy4 * (1.0 - t$proxy1)) + (b$proxy2 * t$proxy1));
  res.push(a$proxy5);
  var x = ((1 + idx) | 0);
  var end = (v.length | 0);
  var isEmpty$1 = (x >= end);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty$1)) {
    var i$1 = x;
    while (true) {
      var x0$1 = i$1;
      var a$proxy6 = (+v[x0$1]);
      res.push(a$proxy6);
      if ((i$1 === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i$1 = ((1 + i$1) | 0);
    }
  }
  return res;
});
$p.gf = (function(width, height, colorCount) {
  var elem = [0.0, 1.0];
  var elem$1 = null;
  elem$1 = elem;
  var end = ((colorCount - 1) | 0);
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      elem$1 = $m_Lsketches_paintings_tile\uff3fstrokes_Painting$package$().hc(elem$1);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  elem$1.pop();
  var hueShift = $m_Ltrivalibs_utils_random_random$package$().U();
  var array = elem$1;
  var len = (array.length | 0);
  var res = new Array(len);
  var i$1 = 0;
  while ((i$1 < len)) {
    var $x_1 = i$1;
    var x0$1 = array[i$1];
    var h$2 = (+x0$1);
    var hue = (h$2 + hueShift);
    res[$x_1] = new $c_Lsketches_paintings_tile\uff3fstrokes_Color((hue - (+Math.floor(hue))), ((0.4 * ($m_Ltrivalibs_utils_random_random$package$().U() + $m_Ltrivalibs_utils_random_random$package$().U())) + 0.1));
    i$1 = ((1 + i$1) | 0);
  }
  var brushSize = (height / 17.0);
  var elem$2 = [new $c_Lsketches_paintings_tile\uff3fstrokes_Tile(0.0, 0.0, width, height, $m_Ltrivalibs_utils_random_random$package$().bT(res))];
  var elem$3 = null;
  elem$3 = elem$2;
  var end$1 = ((1 + $m_Ltrivalibs_utils_random_random$package$().dK(4)) | 0);
  var isEmpty$1 = (end$1 <= 0);
  var scala$collection$immutable$Range$$lastElement$1 = ((end$1 - 1) | 0);
  if ((!isEmpty$1)) {
    var i$2 = 0;
    while (true) {
      var newTiles = [];
      var array$1 = elem$3;
      var len$1 = (array$1.length | 0);
      var i$3 = 0;
      while ((i$3 < len$1)) {
        var x0$3 = array$1[i$3];
        var maxSplits = ((2 + $m_Ltrivalibs_utils_random_random$package$().dK(3)) | 0);
        var minSize = (1.5 * brushSize);
        var f = ((res) => (() => $m_Ltrivalibs_utils_random_random$package$().bT(res)))(res);
        if (((x0$3.a3 <= minSize) || (x0$3.an <= minSize))) {
          var array$2 = [x0$3];
        } else {
          var divideHorizontally = (((x0$3.a3 / x0$3.an) + (0.5 * ((2.0 * $m_Ltrivalibs_utils_random_random$package$().U()) - 1.0))) > 1.0);
          var tileLength = (divideHorizontally ? x0$3.a3 : x0$3.an);
          var p$proxy2 = (tileLength / minSize);
          var other$proxy3 = $doubleToInt((+Math.floor(p$proxy2)));
          var tileCount = ((maxSplits < other$proxy3) ? maxSplits : other$proxy3);
          if ((tileCount < 2)) {
            var array$2 = [x0$3];
          } else {
            var splitRatios = [0.0];
            var isEmpty$2 = (tileCount <= 1);
            var scala$collection$immutable$Range$$lastElement$2 = ((tileCount - 1) | 0);
            if ((!isEmpty$2)) {
              var i$4 = 1;
              while (true) {
                var x0$4 = i$4;
                var a$proxy2 = (((0.5 * (0.5 * ((2.0 * $m_Ltrivalibs_utils_random_random$package$().U()) - 1.0))) + x0$4) / tileCount);
                splitRatios.push(a$proxy2);
                if ((i$4 === scala$collection$immutable$Range$$lastElement$2)) {
                  break;
                }
                i$4 = ((1 + i$4) | 0);
              }
            }
            splitRatios.push(1.0);
            var tiles = [];
            var end$2 = (((splitRatios.length | 0) - 1) | 0);
            var isEmpty$3 = (end$2 <= 0);
            var scala$collection$immutable$Range$$lastElement$3 = ((end$2 - 1) | 0);
            if ((!isEmpty$3)) {
              var i$5 = 0;
              while (true) {
                var x0$5 = i$5;
                var start = ((+splitRatios[x0$5]) * tileLength);
                var length = (((+splitRatios[((1 + x0$5) | 0)]) - (+splitRatios[x0$5])) * tileLength);
                var a$proxy3 = (divideHorizontally ? new $c_Lsketches_paintings_tile\uff3fstrokes_Tile(x0$3.aS, (start + x0$3.ac), length, x0$3.an, f()) : new $c_Lsketches_paintings_tile\uff3fstrokes_Tile((start + x0$3.aS), x0$3.ac, x0$3.a3, length, f()));
                tiles.push(a$proxy3);
                if ((i$5 === scala$collection$immutable$Range$$lastElement$3)) {
                  break;
                }
                i$5 = ((1 + i$5) | 0);
              }
            }
            var array$2 = tiles;
          }
        }
        var len$2 = (array$2.length | 0);
        var i$6 = 0;
        while ((i$6 < len$2)) {
          var x0$6 = array$2[i$6];
          newTiles.push(x0$6);
          i$6 = ((1 + i$6) | 0);
        }
        i$3 = ((1 + i$3) | 0);
      }
      elem$3 = newTiles;
      if ((i$2 === scala$collection$immutable$Range$$lastElement$1)) {
        break;
      }
      i$2 = ((1 + i$2) | 0);
    }
  }
  return new $c_Lsketches_paintings_tile\uff3fstrokes_Painting(width, height, brushSize, elem$3, res);
});
$p.fc = (function(color) {
  var p$proxy5 = (color.e5 + (0.1 * $m_Ltrivalibs_utils_random_random$package$().fs()));
  var x = (p$proxy5 - (+Math.floor(p$proxy5)));
  var p$proxy6 = (0.5 * ($m_Ltrivalibs_utils_random_random$package$().U() + $m_Ltrivalibs_utils_random_random$package$().U()));
  var y = (+Math.pow(p$proxy6, 1.5));
  var p$proxy7 = (color.e6 + (0.4 * $m_Ltrivalibs_utils_random_random$package$().ha()));
  var c$proxy1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, ((p$proxy7 < 0.0) ? 0.0 : ((p$proxy7 > 1.0) ? 1.0 : p$proxy7)));
  return $m_Ltrivalibs_graphics_lib_color_Color$kernel$().gF(c$proxy1.c9, c$proxy1.ca, c$proxy1.cb, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0));
});
$p.gA = (function(tile, brushSize) {
  var p$proxy8 = (((2.6 * tile.an) * $m_Ltrivalibs_utils_random_random$package$().fr(0.8, 1.2)) / brushSize);
  var p$proxy9 = (+Math.floor(p$proxy8));
  var steps = (+Math.max(p$proxy9, 4.0));
  var step = (tile.an / steps);
  var pointWOffset = (0.09 * step);
  var p$proxy10 = ((2.64 * tile.a3) / (+Math.pow(brushSize, 1.4)));
  var widthJitter = (+Math.max(p$proxy10, 2.2));
  var elem = $m_Ltrivalibs_utils_random_random$package$().h9();
  var elem$1 = false;
  elem$1 = elem;
  var points = [];
  var a$proxy8 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(((elem$1 ? (tile.ac - pointWOffset) : ((tile.ac + tile.a3) + pointWOffset)) + ($p_Lsketches_paintings_tile\uff3fstrokes_Painting$package$__delta$1__D__D(this, step) * widthJitter)), ((tile.aS + (1.25 * step)) + $p_Lsketches_paintings_tile\uff3fstrokes_Painting$package$__delta$1__D__D(this, step)));
  points.push(a$proxy8);
  elem$1 = (!elem$1);
  var end = $doubleToInt(((2.0 * steps) - 1.0));
  var isEmpty = (end <= 1);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 1;
    while (true) {
      var x0 = i;
      var a$proxy9 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(((elem$1 ? (tile.ac - pointWOffset) : ((tile.ac + tile.a3) + pointWOffset)) + ($p_Lsketches_paintings_tile\uff3fstrokes_Painting$package$__delta$1__D__D(this, step) * widthJitter)), (((tile.aS + (0.49 * (step * x0))) + (0.75 * step)) + $p_Lsketches_paintings_tile\uff3fstrokes_Painting$package$__delta$1__D__D(this, step)));
      points.push(a$proxy9);
      elem$1 = (!elem$1);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  var a$proxy10 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(((elem$1 ? (tile.ac - pointWOffset) : ((tile.ac + tile.a3) + pointWOffset)) + ($p_Lsketches_paintings_tile\uff3fstrokes_Painting$package$__delta$1__D__D(this, step) * widthJitter)), ((tile.aS + (step * (steps - 1.0))) + $p_Lsketches_paintings_tile\uff3fstrokes_Painting$package$__delta$1__D__D(this, step)));
  points.push(a$proxy10);
  return new $c_T2(points, elem$1);
});
$p.gQ = (function(width, brushSize, p1, p2, reverse) {
  var p$proxy12 = ((2.0 * width) / brushSize);
  var normalScale = ((brushSize / 12.0) * (+Math.min(p$proxy12, 15.0)));
  var line = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), p2, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), p1);
  var p$proxy13 = ($f_Ltrivalibs_graphics_math_Vec2Base__length__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), line) / 35.0);
  var p$proxy14 = $doubleToInt((+Math.floor(p$proxy13)));
  var steps = ((p$proxy14 > 8) ? p$proxy14 : 8);
  var normal = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec2Base__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), (reverse ? new $c_Ltrivalibs_graphics_math_cpu_Vec2((-line.s), line.r) : new $c_Ltrivalibs_graphics_math_cpu_Vec2(line.s, (-line.r))), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$());
  var mid = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), p1, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), line, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), 0.5));
  var c1 = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), mid, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), normal, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), (($m_Ltrivalibs_utils_random_random$package$().U() - 0.6) * normalScale)));
  var c2 = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), mid, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), normal, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), (($m_Ltrivalibs_utils_random_random$package$().U() - 0.6) * normalScale)));
  var points = [];
  if ((!(steps < 0))) {
    var i = 0;
    while (true) {
      var x0 = i;
      var a$proxy11 = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__cubicBezier__D__O__O__O__O__Ltrivalibs_graphics_math_Vec2Base__O($m_Ltrivalibs_graphics_math_cpu_Vec2$(), (x0 / steps), p1, c1, c2, p2, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$());
      points.push(a$proxy11);
      if ((i === steps)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  return points;
});
$p.dR = (function(painting, tile) {
  var p$proxy15 = (2.0 * tile.an);
  var other$proxy4 = ((+Math.pow(p$proxy15, 0.8)) / 5.0);
  var a = painting.cK;
  var p$proxy16 = (+Math.max(a, other$proxy4));
  var other$proxy5 = (3.0 * painting.cK);
  var brushSize = (+Math.min(p$proxy16, other$proxy5));
  var edges = $m_Lsketches_paintings_tile\uff3fstrokes_Painting$package$().gA(tile, brushSize);
  var points = edges.F;
  var elem = (!(!edges.a1));
  var elem$1 = false;
  elem$1 = elem;
  var segments = [];
  var end = (((points.length | 0) - 1) | 0);
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var a$proxy12 = $m_Lsketches_paintings_tile\uff3fstrokes_Painting$package$().gQ(tile.a3, brushSize, points[x0], points[((1 + x0) | 0)], elem$1);
      segments.push(a$proxy12);
      elem$1 = (!elem$1);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  return new $c_Lsketches_paintings_tile\uff3fstrokes_TileStroke(segments, brushSize, $m_Lsketches_paintings_tile\uff3fstrokes_Painting$package$().fc(tile.c4));
});
$p.gy = (function(painting) {
  var result = [];
  var array = $m_Ltrivalibs_utils_random_random$package$().dO(painting.aR);
  var len = (array.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = array[i];
    var a$proxy13 = $m_Lsketches_paintings_tile\uff3fstrokes_Painting$package$().dR(painting, x0);
    result.push(a$proxy13);
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_Lsketches_paintings_tile\uff3fstrokes_Painting$package$ = new $TypeData().i($c_Lsketches_paintings_tile\uff3fstrokes_Painting$package$, "sketches.paintings.tile_strokes.Painting$package$", ({
  bl: 1
}));
var $n_Lsketches_paintings_tile\uff3fstrokes_Painting$package$;
function $m_Lsketches_paintings_tile\uff3fstrokes_Painting$package$() {
  if ((!$n_Lsketches_paintings_tile\uff3fstrokes_Painting$package$)) {
    $n_Lsketches_paintings_tile\uff3fstrokes_Painting$package$ = new $c_Lsketches_paintings_tile\uff3fstrokes_Painting$package$();
  }
  return $n_Lsketches_paintings_tile\uff3fstrokes_Painting$package$;
}
/** @constructor */
function $c_Lsketches_paintings_tile\uff3fstrokes_Tile(top, left, width, height, color) {
  this.aS = 0.0;
  this.ac = 0.0;
  this.a3 = 0.0;
  this.an = 0.0;
  this.c4 = null;
  this.aS = top;
  this.ac = left;
  this.a3 = width;
  this.an = height;
  this.c4 = color;
}
$p = $c_Lsketches_paintings_tile\uff3fstrokes_Tile.prototype = new $h_O();
$p.constructor = $c_Lsketches_paintings_tile\uff3fstrokes_Tile;
/** @constructor */
function $h_Lsketches_paintings_tile\uff3fstrokes_Tile() {
}
$h_Lsketches_paintings_tile\uff3fstrokes_Tile.prototype = $p;
var $d_Lsketches_paintings_tile\uff3fstrokes_Tile = new $TypeData().i($c_Lsketches_paintings_tile\uff3fstrokes_Tile, "sketches.paintings.tile_strokes.Tile", ({
  bm: 1
}));
/** @constructor */
function $c_Lsketches_paintings_tile\uff3fstrokes_TileStroke(segments, brushSize, color) {
  this.bo = null;
  this.cM = 0.0;
  this.e7 = null;
  this.c5 = null;
  this.c6 = 0.0;
  this.bo = segments;
  this.cM = brushSize;
  this.e7 = color;
  var lengths = [];
  var len = (segments.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = segments[i];
    var elem = 0.0;
    elem = 0.0;
    var end = (((x0.length | 0) - 1) | 0);
    var isEmpty = (end <= 0);
    var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
    if ((!isEmpty)) {
      var i$1 = 0;
      while (true) {
        var x0$1 = i$1;
        elem = (elem + $f_Ltrivalibs_graphics_math_Vec2Base__distance__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), x0[x0$1], x0[((1 + x0$1) | 0)]));
        if ((i$1 === scala$collection$immutable$Range$$lastElement)) {
          break;
        }
        i$1 = ((1 + i$1) | 0);
      }
    }
    var a$proxy1 = elem;
    lengths.push(a$proxy1);
    i = ((1 + i) | 0);
  }
  this.c5 = lengths;
  var elem$1 = 0.0;
  elem$1 = 0.0;
  var array = this.c5;
  var len$1 = (array.length | 0);
  var i$2 = 0;
  while ((i$2 < len$1)) {
    var x0$2 = array[i$2];
    var l = (+x0$2);
    elem$1 = (elem$1 + l);
    i$2 = ((1 + i$2) | 0);
  }
  this.c6 = elem$1;
}
$p = $c_Lsketches_paintings_tile\uff3fstrokes_TileStroke.prototype = new $h_O();
$p.constructor = $c_Lsketches_paintings_tile\uff3fstrokes_TileStroke;
/** @constructor */
function $h_Lsketches_paintings_tile\uff3fstrokes_TileStroke() {
}
$h_Lsketches_paintings_tile\uff3fstrokes_TileStroke.prototype = $p;
$p.gN = (function(segIdx, ptIdx, frac) {
  var lines = [];
  var other$proxy1 = (((this.bo.length | 0) - 1) | 0);
  var lastSeg = ((segIdx < other$proxy1) ? segIdx : other$proxy1);
  var partial = (segIdx <= lastSeg);
  var elem = 0.0;
  elem = 0.0;
  if ((!(lastSeg < 0))) {
    var i = 0;
    while (true) {
      var x0 = i;
      var pts = this.bo[x0];
      var line = new $c_Ltrivalibs_graphics_geometry_Line(this.cM, elem, (void 0));
      if (((x0 === lastSeg) && partial)) {
        var other$proxy2 = (((pts.length | 0) - 1) | 0);
        var upTo = ((ptIdx < other$proxy2) ? ptIdx : other$proxy2);
        if ((!(upTo < 0))) {
          var i$1 = 0;
          while (true) {
            var x0$1 = i$1;
            line.dx(pts[x0$1]);
            if ((i$1 === upTo)) {
              break;
            }
            i$1 = ((1 + i$1) | 0);
          }
        }
        if (((frac > 0.0) && (((1 + upTo) | 0) < (pts.length | 0)))) {
          line.dx($f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mixScalar__O__Ltrivalibs_graphics_math_Vec2Base__O__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), pts[upTo], $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), pts[((1 + upTo) | 0)], frac));
        }
      } else {
        var len = (pts.length | 0);
        var i$2 = 0;
        while ((i$2 < len)) {
          line.dx(pts[i$2]);
          i$2 = ((1 + i$2) | 0);
        }
      }
      line.cO = this.c5[x0];
      elem = (elem + (+this.c5[x0]));
      if ((line.dV() >= 2)) {
        lines.push(line);
      }
      if ((i === lastSeg)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  return lines;
});
var $d_Lsketches_paintings_tile\uff3fstrokes_TileStroke = new $TypeData().i($c_Lsketches_paintings_tile\uff3fstrokes_TileStroke, "sketches.paintings.tile_strokes.TileStroke", ({
  bn: 1
}));
function $p_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$__drawStroke$1__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_Form__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Panel__Lsketches_paintings_tile\uff3fstrokes_TileStroke__I__I__D__V($thiz, brushTip$1, form$1, p$2, strokePanel$1, stroke, segIdx, ptIdx, frac) {
  var lines = stroke.gN(segIdx, ptIdx, frac);
  if (((lines.length | 0) === 0)) {
    var tip = 0.0;
  } else {
    var last = lines[(((lines.length | 0) - 1) | 0)];
    var tip = ((last.aD + last.aX) / stroke.c6);
  }
  var value$proxy17 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(tip, (stroke.cM / stroke.c6));
  brushTip$1.aU.bd(brushTip$1.V, value$proxy17);
  var $x_3 = brushTip$1.aT.queue;
  var $x_2 = brushTip$1.aC;
  var s$proxy3 = brushTip$1.V;
  var $x_1 = s$proxy3.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var geometries$1 = $m_Ltrivalibs_graphics_geometry_Line$().hy(lines, 0, 0.05, 3.0, stroke.c6, 0);
  form$1.dN((void 0), (void 0), geometries$1, (void 0), (void 0), (void 0));
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$2, strokePanel$1);
}
function $p_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$__mergeStroke$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Panel__V($thiz, p$3, canvasPanel$1) {
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$3, canvasPanel$1);
}
function $p_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$__clearStroke$1__Ltrivalibs_graphics_painter_Form__sjs_js_Array__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Panel__V($thiz, form$2, NoGeometry$1, p$4, strokePanel$2) {
  form$2.dN((void 0), (void 0), NoGeometry$1, (void 0), (void 0), (void 0));
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$4, strokePanel$2);
}
function $p_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$__useStroke$1__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Lsketches_paintings_tile\uff3fstrokes_TileStroke__V($thiz, color$1, randOffset$1, stroke) {
  color$1.aU.bd(color$1.V, stroke.e7);
  var $x_3 = color$1.aT.queue;
  var $x_2 = color$1.aC;
  var s$proxy4 = color$1.V;
  var $x_1 = s$proxy4.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var value$proxy18 = $m_Ltrivalibs_utils_random_random$package$().hb();
  randOffset$1.aU.bd(randOffset$1.V, value$proxy18);
  var $x_6 = randOffset$1.aT.queue;
  var $x_5 = randOffset$1.aC;
  var s$proxy5 = randOffset$1.V;
  var $x_4 = s$proxy5.dv.buffer;
  $x_6.writeBuffer($x_5, 0.0, $x_4);
}
function $p_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$__startTile$1__sr_IntRef__sr_ObjectRef__Lsketches_paintings_tile\uff3fstrokes_Painting__sr_ObjectRef__sr_IntRef__sr_IntRef__sr_DoubleRef__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__V($thiz, next$1, order$1, painting$2, stroke$1, segIdx$1, ptIdx$1, advance$1, color$3, randOffset$3) {
  if ((next$1.j >= (order$1.G.length | 0))) {
    order$1.G = $m_Ltrivalibs_utils_random_random$package$().dO(painting$2.aR);
    next$1.j = 0;
  }
  stroke$1.G = $m_Lsketches_paintings_tile\uff3fstrokes_Painting$package$().dR(painting$2, order$1.G[next$1.j]);
  next$1.j = ((1 + next$1.j) | 0);
  segIdx$1.j = 0;
  ptIdx$1.j = 0;
  advance$1.A = 0.0;
  $p_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$__useStroke$1__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Lsketches_paintings_tile\uff3fstrokes_TileStroke__V($thiz, color$3, randOffset$3, stroke$1.G);
}
function $p_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$__stepBrush$1__sr_IntRef__sr_ObjectRef__sr_IntRef__Z($thiz, ptIdx$2, stroke$2, segIdx$2) {
  ptIdx$2.j = ((1 + ptIdx$2.j) | 0);
  if ((ptIdx$2.j >= (stroke$2.G.bo[segIdx$2.j].length | 0))) {
    segIdx$2.j = ((1 + segIdx$2.j) | 0);
    ptIdx$2.j = 0;
  }
  return (segIdx$2.j >= (stroke$2.G.bo.length | 0));
}
/** @constructor */
function $c_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$() {
  this.fP = 0;
  this.fR = 0;
  this.fO = 0.0;
  this.fT = 0.0;
  this.fS = 0.0;
  this.fV = 0.0;
  this.fU = 0;
  this.fQ = 0;
  this.fP = 5;
  this.fR = 3;
  this.fO = 25.0;
  this.fT = 500.0;
  this.fS = 3000.0;
  this.fV = 1.0;
  this.fU = 8;
  this.fQ = 16;
}
$p = $c_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$;
/** @constructor */
function $h_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$() {
}
$h_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$.prototype = $p;
$p.hx = (function(canvas) {
  $m_Ltrivalibs_graphics_painter_Painter$().gH(canvas, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$7) => {
    var painting = $m_Lsketches_paintings_tile\uff3fstrokes_Painting$package$().gf(p$7.fF(), p$7.fj(), 5);
    var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
      var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
        var AssignTarget_this = ctx$2.bK.aP("color");
        var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_vec4$().dB(ctx$2.af.o("color"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().i(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return (((("  " + AssignTarget_this.av) + " = ") + value$proxy1.c) + ";");
      }));
      var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = reg;
      try {
        var $x_1 = body$proxy1.i(ctx);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = prev;
      }
      program$3.aN = $x_1;
      $m_sjs_js_ArrayOps$().a8(reg.aM, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$4) => ((data$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$4, data$3);
      }))(program$3)));
    }));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy1.i(program);
    var b = program.aN;
    var helperFns$proxy1 = program.bQ();
    var id = p$7.C;
    p$7.C = ((1 + p$7.C) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().a(["color"], []);
    var dict = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i = 0;
    while ((i < (names.length | 0))) {
      dict[names[i]] = i;
      i = ((1 + i) | 0);
    }
    var names$2 = [];
    var dict$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$2 = 0;
    while ((i$2 < (names$2.length | 0))) {
      dict$2[names$2[i$2]] = i$2;
      i$2 = ((1 + i$2) | 0);
    }
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b, helperFns$proxy1);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).au.P()], []));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.b6, sd.b5, fragBuiltinParams);
    console.log(baseWgsl);
    var module = p$7.b.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", baseWgsl)])))));
    var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])], []);
    var result = [];
    $m_sjs_js_ArrayOps$().a8(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$1) => ((entries$2) => (result.push(Painter_this$1.b.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0)))(p$7)));
    var x1 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().aw(p$7.b, result));
    var \u03b46$ = x1;
    var bgls$2 = \u03b46$.F;
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().aw(p$7.b, bgls$2);
    var bgShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], null, pl, false, dict, dict$2);
    var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
      var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var pos = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "pos");
        var $x_8 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_7 = $m_sjsr_package$();
        var $x_6 = pos.ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().gu($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().gj(ctx$2$1.cw.o("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), ctx$2$1.eK.o("size")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$()));
        var AssignTarget_this$1 = ctx$2$1.cx.aP("uv");
        var value$proxy3 = ctx$2$1.cw.o("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_5 = AssignTarget_this$1.av;
        var $x_4 = value$proxy3.c;
        var AssignTarget_this$2 = ctx$2$1.cx.aP("localUv");
        var value$proxy5 = ctx$2$1.cw.o("localUv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_3 = AssignTarget_this$2.av;
        var $x_2 = value$proxy5.c;
        var AssignTarget_this$3 = ctx$2$1.cx.eL;
        var value$proxy7 = $m_Ltrivalibs_graphics_math_gpu_vec4$().g9($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().bV(pos), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().hC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().dW(pos)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().i(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().i(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_8.dz(new $c_sjsr_WrappedVarArgs($x_7.e(new ($d_T.r().C)([$x_6, (((("  " + $x_5) + " = ") + $x_4) + ";"), (((("  " + $x_3) + " = ") + $x_2) + ";"), (((("  " + AssignTarget_this$3.av) + " = ") + value$proxy7.c) + ";")]))));
      }));
      var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = reg$1;
      try {
        var $x_9 = body$proxy3.i(ctx$1);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = prev$1;
      }
      program$3$1.dr = $x_9;
      $m_sjs_js_ArrayOps$().a8(reg$1.aM, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$3) => ((data$3$1) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$3, data$3$1);
      }))(program$3$1)));
      var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var base = new $c_Ltrivalibs_graphics_math_gpu_VarExpr("base");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var edgeFade = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "edgeFade");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var tipFade = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "tipFade");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var alpha = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "alpha");
        var $x_16 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_15 = $m_sjsr_package$();
        var $x_14 = base.ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().f6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().g0($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gv($m_Ltrivalibs_graphics_shader_lib_noise_Simplex$().gp($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().g6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().g4(ctx$2$2.ag.o("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), 1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), ctx$2$2.af.o("randOffset")), ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "4")), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().dU(2.2), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().dU(0.8), null)), 4.0), 0.08));
        var $x_13 = base.ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().g3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().dJ(base, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().i(0.9)), 0.04));
        var $x_12 = edgeFade.ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().f7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().dJ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().f9($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fg($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().bV(ctx$2$2.ag.o("localUv")))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().i(13.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().dJ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().f9($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fg($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().dW(ctx$2$2.ag.o("uv")))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().i(10.0))));
        var $x_11 = tipFade.ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fy($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().dw($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().bV(ctx$2$2.af.o("brushTip")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().bV(ctx$2$2.ag.o("uv"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().i(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().dW(ctx$2$2.af.o("brushTip"))));
        var $x_10 = alpha.ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().f8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().f8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gd($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().f6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().dw(base, edgeFade), 0.3)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fy($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().bV(ctx$2$2.ag.o("uv")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().i(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().i(0.87))), tipFade));
        var AssignTarget_this$4 = ctx$2$2.bK.aP("color");
        var value$proxy9 = $m_Ltrivalibs_graphics_math_gpu_vec4$().dB(ctx$2$2.af.o("color"), alpha);
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_16.dz(new $c_sjsr_WrappedVarArgs($x_15.e(new ($d_T.r().C)([$x_14, $x_13, $x_12, $x_11, $x_10, (((("  " + AssignTarget_this$4.av) + " = ") + value$proxy9.c) + ";")]))));
      }));
      var ctx$2$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = reg$2;
      try {
        var $x_17 = body$proxy5.i(ctx$2$3);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = prev$2;
      }
      program$3$1.dq = $x_17;
      $m_sjs_js_ArrayOps$().a8(reg$2.aM, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$4) => ((data$3$2) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$4, data$3$2);
      }))(program$3$1)));
    }));
    var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy2.i(program$2);
    var b$1 = program$2.dr;
    var b$2 = program$2.dq;
    var helperFns$proxy2 = program$2.bQ();
    var id$2 = p$7.C;
    p$7.C = ((1 + p$7.C) | 0);
    var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["size"], $m_sjs_js_ArrayOpsCommon$().a(["color"], $m_sjs_js_ArrayOpsCommon$().a(["randOffset"], $m_sjs_js_ArrayOpsCommon$().a(["brushTip"], []))));
    var dict$3 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$3 = 0;
    while ((i$3 < (names$4.length | 0))) {
      dict$3[names$4[i$3]] = i$3;
      i$3 = ((1 + i$3) | 0);
    }
    var names$5 = [];
    var dict$4 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$4 = 0;
    while ((i$4 < (names$5.length | 0))) {
      dict$4[names$5[i$4]] = i$4;
      i$4 = ((1 + i$4) | 0);
    }
    var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$1, b$2, helperFns$proxy2);
    var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["width"], $m_sjs_js_ArrayOpsCommon$().a(["length"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["localUv"], []))))), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["localUv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["size"], $m_sjs_js_ArrayOpsCommon$().a(["color"], $m_sjs_js_ArrayOpsCommon$().a(["randOffset"], $m_sjs_js_ArrayOpsCommon$().a(["brushTip"], [])))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).dj.P()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).au.P()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).au.P()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).au.P()], [])))));
    var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.b6, sd$2.b5, fragBuiltinParams$2);
    console.log(baseWgsl$2);
    var module$2 = p$7.b.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", baseWgsl$2)])))));
    var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32"], $m_sjs_js_ArrayOpsCommon$().a(["float32"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], [])))));
    var sizes = $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([4], $m_sjs_js_ArrayOpsCommon$().a([4], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([8], [])))));
    var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var attributes = [];
    var i$5 = 0;
    while ((i$5 < (formats.length | 0))) {
      attributes.push($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$5), new $c_T2("offset", (offsets[i$5] | 0)), new $c_T2("format", formats[i$5])])))));
      i$5 = ((1 + i$5) | 0);
    }
    var vbl = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("arrayStride", stride), new $c_T2("attributes", attributes)]))));
    var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 3), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], []))))], []);
    var result$2 = [];
    $m_sjs_js_ArrayOps$().a8(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$2) => ((entries$2$1) => (result$2.push(Painter_this$2.b.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$1)])))))) | 0)))(p$7)));
    var x4 = new $c_T2(result$2, $m_Ltrivalibs_graphics_shader_layouts$().aw(p$7.b, result$2));
    var \u03b42$ = x4;
    var bgls$4 = \u03b42$.F;
    var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().aw(p$7.b, bgls$4);
    var lineShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, vbl, bgls$4[0], null, pl$2, false, dict$3, dict$4);
    var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
      var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$4) => {
        var AssignTarget_this$5 = ctx$2$4.bK.aP("color");
        var tex = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "src");
        var uv = ctx$2$4.ag.o("uv");
        var sampler = ctx$2$4.af.o("samp");
        var value$proxy11 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().dA(tex, uv, sampler);
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return (((("  " + AssignTarget_this$5.av) + " = ") + value$proxy11.c) + ";");
      }));
      var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = reg$3;
      try {
        var $x_18 = body$proxy7.i(ctx$3);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = prev$3;
      }
      program$3$2.aN = $x_18;
      $m_sjs_js_ArrayOps$().a8(reg$3.aM, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3$3);
      }))(program$3$2)));
    }));
    var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy3.i(program$3$3);
    var b$3 = program$3$3.aN;
    var helperFns$proxy3 = program$3$3.bQ();
    var id$3 = p$7.C;
    p$7.C = ((1 + p$7.C) | 0);
    var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["samp"], []);
    var dict$5 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$6 = 0;
    while ((i$6 < (names$7.length | 0))) {
      dict$5[names$7[i$6]] = i$6;
      i$6 = ((1 + i$6) | 0);
    }
    var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["src"], []);
    var dict$6 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$7 = 0;
    while ((i$7 < (names$8.length | 0))) {
      dict$6[names$8[i$7]] = i$7;
      i$7 = ((1 + i$7) | 0);
    }
    var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$3, helperFns$proxy3);
    var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["samp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).au.P()], []));
    var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.b6, sd$3.b5, fragBuiltinParams$3);
    var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var src: texture_2d<f32>;");
    console.log(wgsl$3);
    var module$3 = p$7.b.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", wgsl$3)])))));
    var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], [])], []);
    var result$3 = [];
    $m_sjs_js_ArrayOps$().a8(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$3) => ((entries$2$2) => (result$3.push(Painter_this$3.b.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$2)])))))) | 0)))(p$7)));
    var x7 = new $c_T2(result$3, $m_Ltrivalibs_graphics_shader_layouts$().aw(p$7.b, result$3));
    var \u03b46$$2 = x7;
    var bgls$6 = \u03b46$$2.F;
    var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$3 = p$7.b.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
    if ((panelBgl$3 !== null)) {
      var other$proxy3 = [panelBgl$3];
      var allBgls$3 = bgls$6.concat(other$proxy3);
    } else {
      var allBgls$3 = bgls$6;
    }
    var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().aw(p$7.b, allBgls$3);
    var canvasShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
    var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
      var body$proxy9 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$5) => {
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var canvasCol = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "canvasCol");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var strokeCol = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "strokeCol");
        var $x_22 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_21 = $m_sjsr_package$();
        var tex$1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "canvasTex");
        var uv$1 = ctx$2$5.ag.o("uv");
        var sampler$1 = ctx$2$5.af.o("samp");
        var $x_20 = canvasCol.ah($m_Ltrivalibs_graphics_math_gpu_expr$package$().dA(tex$1, uv$1, sampler$1));
        var tex$2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "strokeTex");
        var uv$2 = ctx$2$5.ag.o("uv");
        var sampler$2 = ctx$2$5.af.o("samp");
        var $x_19 = strokeCol.ah($m_Ltrivalibs_graphics_math_gpu_expr$package$().dA(tex$2, uv$2, sampler$2));
        var AssignTarget_this$6 = ctx$2$5.bK.aP("color");
        var value$proxy13 = $m_Ltrivalibs_graphics_math_gpu_vec4$().dB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().gU($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fI(canvasCol), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fI(strokeCol), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().hG(strokeCol)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().i(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_22.dz(new $c_sjsr_WrappedVarArgs($x_21.e(new ($d_T.r().C)([$x_20, $x_19, (((("  " + AssignTarget_this$6.av) + " = ") + value$proxy13.c) + ";")]))));
      }));
      var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$4 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$4 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = reg$4;
      try {
        var $x_23 = body$proxy9.i(ctx$4);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = prev$4;
      }
      program$3$4.aN = $x_23;
      $m_sjs_js_ArrayOps$().a8(reg$4.aM, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3$4) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3$4);
      }))(program$3$4)));
    }));
    var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy4.i(program$4);
    var b$4 = program$4.aN;
    var helperFns$proxy4 = program$4.bQ();
    var id$4 = p$7.C;
    p$7.C = ((1 + p$7.C) | 0);
    var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["samp"], []);
    var dict$7 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$8 = 0;
    while ((i$8 < (names$10.length | 0))) {
      dict$7[names$10[i$8]] = i$8;
      i$8 = ((1 + i$8) | 0);
    }
    var names$11 = $m_sjs_js_ArrayOpsCommon$().a(["canvasTex"], $m_sjs_js_ArrayOpsCommon$().a(["strokeTex"], []));
    var dict$8 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$9 = 0;
    while ((i$9 < (names$11.length | 0))) {
      dict$8[names$11[i$9]] = i$9;
      i$9 = ((1 + i$9) | 0);
    }
    var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$4, helperFns$proxy4);
    var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["samp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).au.P()], []));
    var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.b6, sd$4.b5, fragBuiltinParams$4);
    var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var canvasTex: texture_2d<f32>;\n@group(1) @binding(1) var strokeTex: texture_2d<f32>;");
    console.log(wgsl$4);
    var module$4 = p$7.b.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", wgsl$4)])))));
    var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], [])], []);
    var result$4 = [];
    $m_sjs_js_ArrayOps$().a8(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$4) => ((entries$2$3) => (result$4.push(Painter_this$4.b.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$3)])))))) | 0)))(p$7)));
    var x10 = new $c_T2(result$4, $m_Ltrivalibs_graphics_shader_layouts$().aw(p$7.b, result$4));
    var \u03b46$$3 = x10;
    var bgls$8 = \u03b46$$3.F;
    var entries$2$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], []));
    var panelBgl$4 = p$7.b.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$4)])))));
    if ((panelBgl$4 !== null)) {
      var other$proxy4 = [panelBgl$4];
      var allBgls$4 = bgls$8.concat(other$proxy4);
    } else {
      var allBgls$4 = bgls$8;
    }
    var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().aw(p$7.b, allBgls$4);
    var displayShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
    var value$proxy15 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(painting.bn, painting.bm);
    var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
    var uv$proxy1 = ul$proxy1.aV;
    var buffer = new ArrayBuffer(8);
    var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b$5 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p$7.b, uv$proxy1);
    b$5.aU.bd(b$5.V, value$proxy15);
    var $x_26 = b$5.aT.queue;
    var $x_25 = b$5.aC;
    var s$proxy1 = b$5.V;
    var $x_24 = s$proxy1.dv.buffer;
    $x_26.writeBuffer($x_25, 0.0, $x_24);
    var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$());
    var uv$proxy2 = ul$proxy2.aV;
    var buffer$2 = new ArrayBuffer(16);
    var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
    var color = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p$7.b, uv$proxy2);
    var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
    var uv$proxy3 = ul$proxy3.aV;
    var buffer$3 = new ArrayBuffer(8);
    var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var randOffset = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), p$7.b, uv$proxy3);
    var ul$proxy4 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
    var uv$proxy4 = ul$proxy4.aV;
    var buffer$4 = new ArrayBuffer(8);
    var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
    var brushTip = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), p$7.b, uv$proxy4);
    var value$proxy16 = $m_Lsketches_paintings_tile\uff3fstrokes_Painting$package$().fc($m_Ltrivalibs_utils_random_random$package$().bT(painting.aR).c4);
    var ul$proxy5 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$());
    var uv$proxy5 = ul$proxy5.aV;
    var buffer$5 = new ArrayBuffer(16);
    var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
    var b$2$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), p$7.b, uv$proxy5);
    b$2$1.aU.bd(b$2$1.V, value$proxy16);
    var $x_29 = b$2$1.aT.queue;
    var $x_28 = b$2$1.aC;
    var s$proxy2 = b$2$1.V;
    var $x_27 = s$proxy2.dv.buffer;
    $x_29.writeBuffer($x_28, 0.0, $x_27);
    var Bindable_this = p$7.dI(bgShade, (void 0), (void 0), (void 0));
    var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("color", b$2$1);
    var \u03b4scrutinee272 = e1$proxy1.R;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, (Bindable_this.S.at.color | 0), \u03b4scrutinee272);
    var bgPanel = p$7.cE(2, 2, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    var form = p$7.gx((void 0), (void 0), (void 0), (void 0), "triangle-strip", (void 0));
    var blendState$1 = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "zero", "add"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one-minus-src-alpha", "add"));
    var Bindable_this$3 = p$7.hp(form, lineShade, (void 0), blendState$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("size", b$5);
    var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("color", color);
    var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("randOffset", randOffset);
    var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("brushTip", brushTip);
    var \u03b4scrutinee280 = e1$proxy2.R;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$3, (Bindable_this$3.aL.at.size | 0), \u03b4scrutinee280);
    var \u03b4scrutinee290 = e2$proxy1.R;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$3, (Bindable_this$3.aL.at.color | 0), \u03b4scrutinee290);
    var \u03b4scrutinee304 = e3$proxy1.R;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$3, (Bindable_this$3.aL.at.randOffset | 0), \u03b4scrutinee304);
    var \u03b4scrutinee322 = e4$proxy1.R;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$3, (Bindable_this$3.aL.at.brushTip | 0), \u03b4scrutinee322);
    var width$1 = $doubleToInt(painting.bn);
    var height$1 = $doubleToInt(painting.bm);
    var clearColor$2 = $m_Ltrivalibs_graphics_math_cpu_Vec4$().gB().i(new $c_T4(0.0, 0.0, 0.0, 0.0));
    var strokePanel = p$7.cE(width$1, height$1, clearColor$2, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this$3, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    var Bindable_this$8 = p$7.dI(canvasShade, $m_Ltrivalibs_graphics_painter_BlendState$().eg, (void 0), (void 0));
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("src", bgPanel);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", p$7.dL());
    var \u03b4scrutinee340 = e1$proxy3.R;
    $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$8, (Bindable_this$8.S.bH.src | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee340));
    var \u03b4scrutinee344 = e2$proxy2.R;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$8, (Bindable_this$8.S.at.samp | 0), \u03b4scrutinee344);
    var width$2 = $doubleToInt(painting.bn);
    var height$2 = $doubleToInt(painting.bm);
    var canvasPanel = p$7.cE(width$2, height$2, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this$8, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    var width$3 = $doubleToInt(painting.bn);
    var height$3 = $doubleToInt(painting.bm);
    var Bindable_this$11 = p$7.dI(displayShade, (void 0), (void 0), (void 0));
    var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("canvasTex", canvasPanel);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("strokeTex", strokePanel);
    var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", p$7.dL());
    var \u03b4scrutinee356 = e1$proxy4.R;
    $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$11, (Bindable_this$11.S.bH.canvasTex | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee356));
    var \u03b4scrutinee366 = e2$proxy3.R;
    $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$11, (Bindable_this$11.S.bH.strokeTex | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee366));
    var \u03b4scrutinee370 = e3$proxy2.R;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$11, (Bindable_this$11.S.at.samp | 0), \u03b4scrutinee370);
    var displayPanel = p$7.cE(width$3, height$3, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this$11, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    var NoGeometry = [];
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$7, bgPanel);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$7, canvasPanel);
    var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("src", strokePanel);
    var \u03b4scrutinee382 = e1$proxy5.R;
    $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$8, (Bindable_this$8.S.bH.src | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee382));
    new $c_sci_Range$Exclusive(0, 3, 1).bP(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$9) => ((v1$2) => {
      $m_sjs_js_ArrayOps$().a8($m_Lsketches_paintings_tile\uff3fstrokes_Painting$package$().gy(painting), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((stroke$3) => {
        $p_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$__useStroke$1__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Lsketches_paintings_tile\uff3fstrokes_TileStroke__V(this, color, randOffset, stroke$3);
        $p_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$__drawStroke$1__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_Form__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Panel__Lsketches_paintings_tile\uff3fstrokes_TileStroke__I__I__D__V(this, brushTip, form, p$9, strokePanel, stroke$3, 2147483647, 2147483647, 0.0);
        $p_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$__mergeStroke$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Panel__V(this, p$9, canvasPanel);
      })));
    }))(p$7)));
    var order = new $c_sr_ObjectRef($m_Ltrivalibs_utils_random_random$package$().dO(painting.aR));
    var next = new $c_sr_IntRef(0);
    var stroke = new $c_sr_ObjectRef($m_Lsketches_paintings_tile\uff3fstrokes_Painting$package$().dR(painting, order.G[next.j]));
    var segIdx = new $c_sr_IntRef(0);
    var ptIdx = new $c_sr_IntRef(0);
    var advance = new $c_sr_DoubleRef(0.0);
    var pauseLeft = new $c_sr_DoubleRef(0.0);
    var sinceRecolor = new $c_sr_IntRef(0);
    next.j = ((1 + next.j) | 0);
    $p_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$__useStroke$1__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Lsketches_paintings_tile\uff3fstrokes_TileStroke__V(this, color, randOffset, stroke.G);
    $m_Ltrivalibs_utils_animation_animate$package$().g7(((p$10) => ((arg1$2) => {
      var tpf = (+arg1$2);
      if ((pauseLeft.A > 0.0)) {
        pauseLeft.A = (pauseLeft.A - tpf);
        if ((pauseLeft.A <= 0.0)) {
          $p_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$__startTile$1__sr_IntRef__sr_ObjectRef__Lsketches_paintings_tile\uff3fstrokes_Painting__sr_ObjectRef__sr_IntRef__sr_IntRef__sr_DoubleRef__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__V(this, next, order, painting, stroke, segIdx, ptIdx, advance, color, randOffset);
          $p_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$__drawStroke$1__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_Form__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Panel__Lsketches_paintings_tile\uff3fstrokes_TileStroke__I__I__D__V(this, brushTip, form, p$10, strokePanel, stroke.G, segIdx.j, ptIdx.j, advance.A);
        }
      } else {
        advance.A = (advance.A + ((25.0 * tpf) / 1000.0));
        var done = false;
        var steps = 0;
        while ((((advance.A >= 1.0) && (!done)) && (steps < 16))) {
          advance.A = (advance.A - 1.0);
          done = $p_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$__stepBrush$1__sr_IntRef__sr_ObjectRef__sr_IntRef__Z(this, ptIdx, stroke, segIdx);
          steps = ((1 + steps) | 0);
        }
        if ((steps === 16)) {
          advance.A = 0.0;
        }
        if (done) {
          $p_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$__drawStroke$1__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_Form__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Panel__Lsketches_paintings_tile\uff3fstrokes_TileStroke__I__I__D__V(this, brushTip, form, p$10, strokePanel, stroke.G, 2147483647, 2147483647, 0.0);
          $p_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$__mergeStroke$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Panel__V(this, p$10, canvasPanel);
          $p_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$__clearStroke$1__Ltrivalibs_graphics_painter_Form__sjs_js_Array__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Panel__V(this, form, NoGeometry, p$10, strokePanel);
          pauseLeft.A = $m_Ltrivalibs_utils_random_random$package$().fr(500.0, 3000.0);
          sinceRecolor.j = ((1 + sinceRecolor.j) | 0);
          if ((sinceRecolor.j >= 8)) {
            sinceRecolor.j = 0;
            painting.hd();
          }
        } else {
          $p_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$__drawStroke$1__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_Form__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Panel__Lsketches_paintings_tile\uff3fstrokes_TileStroke__I__I__D__V(this, brushTip, form, p$10, strokePanel, stroke.G, segIdx.j, ptIdx.j, advance.A);
        }
      }
      p$10.h3(displayPanel);
    }))(p$7));
  })));
});
var $d_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$ = new $TypeData().i($c_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$, "sketches.paintings.tile_strokes.TileStrokesSketch$package$", ({
  bo: 1
}));
var $n_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$;
function $m_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$() {
  if ((!$n_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$)) {
    $n_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$ = new $c_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$();
  }
  return $n_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_BufferBinding(buffer, device, uv) {
  this.V = null;
  this.aT = null;
  this.aU = null;
  this.aC = null;
  this.V = buffer;
  this.aT = device;
  this.aU = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.aC = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  a4: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_BufferedGeometry(vertices, indices) {
  this.cN = null;
  this.c7 = null;
  this.cN = vertices;
  this.c7 = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  bt: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Line(defaultWidth, lenOffset, defaultData) {
  this.aW = 0.0;
  this.aD = 0.0;
  this.c8 = null;
  this.a4 = null;
  this.aX = 0.0;
  this.cO = null;
  this.aW = defaultWidth;
  this.aD = lenOffset;
  this.c8 = defaultData;
  this.a4 = [];
  this.aX = 0.0;
  this.cO = null;
}
$p = $c_Ltrivalibs_graphics_geometry_Line.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Line;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Line() {
}
$h_Ltrivalibs_graphics_geometry_Line.prototype = $p;
$p.dV = (function() {
  return (this.a4.length | 0);
});
$p.v = (function(i) {
  return this.a4[i];
});
$p.gt = (function() {
  return this.a4[0];
});
$p.gL = (function() {
  return this.a4[(((this.a4.length | 0) - 1) | 0)];
});
$p.dx = (function(pos) {
  this.a6(new $c_Ltrivalibs_graphics_geometry_LineVertex(pos, this.aW, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0), this.c8));
});
$p.b7 = (function(pos, width, data) {
  this.a6(new $c_Ltrivalibs_graphics_geometry_LineVertex(pos, width, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0), data));
});
$p.a6 = (function(vert) {
  var n = (this.a4.length | 0);
  if ((n > 0)) {
    var prev = this.a4[((n - 1) | 0)];
    prev.h4(vert.k);
    this.aX = (this.aX + prev.n);
    vert.h = prev.h;
  }
  this.a4.push(vert);
});
var $d_Ltrivalibs_graphics_geometry_Line = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Line, "trivalibs.graphics.geometry.Line", ({
  bu: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Line$() {
}
$p = $c_Ltrivalibs_graphics_geometry_Line$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Line$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Line$() {
}
$h_Ltrivalibs_graphics_geometry_Line$.prototype = $p;
$p.hz = (function(line, smoothDepth, smoothAngleThreshold, smoothMinLength, totalLength, prevDirection, nextDirection, swapTextureOrientation, foldTreatment) {
  var clampInner = (foldTreatment === 1);
  var elem = new $c_Ltrivalibs_graphics_geometry_Line(line.aW, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0));
  var elem$1 = null;
  elem$1 = elem;
  var elem$2 = new $c_Ltrivalibs_graphics_geometry_Line(line.aW, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0));
  var elem$3 = null;
  elem$3 = elem$2;
  var elem$4 = line.aD;
  var elem$5 = 0.0;
  elem$5 = elem$4;
  var src = line.a4;
  var n = (src.length | 0);
  var i = 0;
  while ((i < n)) {
    var v = src[i];
    var hasPrev = (i > 0);
    var hasNext = (i < ((n - 1) | 0));
    var halfWidth = (0.5 * v.B);
    var nextNormal = $m_Ltrivalibs_graphics_geometry_line2d$package$().fp(v.h);
    var normal = nextNormal;
    var offset = halfWidth;
    if (hasPrev) {
      var prevDir = src[((i - 1) | 0)].h;
      if (((prevDir.r !== v.h.r) || (prevDir.s !== v.h.s))) {
        var prevNormal = $m_Ltrivalibs_graphics_geometry_line2d$package$().fp(prevDir);
        normal = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec2Base__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), nextNormal, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), prevNormal), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$());
        var p$proxy5 = (halfWidth / $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), normal, prevNormal));
        var other$proxy1 = (5.0 * halfWidth);
        offset = (+Math.min(p$proxy5, other$proxy1));
      }
    }
    var topOffset = offset;
    var bottomOffset = offset;
    var topUv = 0.0;
    var bottomUv = 1.0;
    if (((clampInner && hasPrev) && hasNext)) {
      var reach = $m_Ltrivalibs_graphics_geometry_line2d$package$().gT(src, i, false);
      if ((reach < offset)) {
        if (($m_Ltrivalibs_graphics_geometry_line2d$package$().cB(src[((i - 1) | 0)].h, v.h) > 0.0)) {
          bottomOffset = reach;
          bottomUv = (0.5 + (reach / (2.0 * offset)));
        } else {
          topOffset = reach;
          topUv = (0.5 - (reach / (2.0 * offset)));
        }
      }
    }
    var top = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), normal, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), topOffset), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), v.k);
    var bottom = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), normal, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), (-bottomOffset)), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), v.k);
    if ((!hasPrev)) {
      elem$1.b7(v.k, v.B, new $c_Ltrivalibs_graphics_math_cpu_Vec2(elem$5, 0.5));
      elem$3.b7(v.k, v.B, new $c_Ltrivalibs_graphics_math_cpu_Vec2(elem$5, 0.5));
      if ((prevDirection !== null)) {
        var c = (halfWidth / $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec2Base__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), prevDirection, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), (-1.0)), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), v.h), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$()), v.h));
        var p$proxy6 = ((c * c) - (halfWidth * halfWidth));
        var a = (+Math.sqrt(p$proxy6));
        if ((a > 0.001)) {
          if (($m_Ltrivalibs_graphics_geometry_line2d$package$().cB(v.h, prevDirection) > 0.0)) {
            top = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), top, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), v.h, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), (-a)));
            bottom = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), bottom, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), v.h, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), a));
          } else {
            top = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), top, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), v.h, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), a));
            bottom = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), bottom, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), v.h, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), (-a)));
          }
        }
      }
    }
    if (((!hasNext) && (nextDirection !== null))) {
      var c$2 = (halfWidth / $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec2Base__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), v.h, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), (-1.0)), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), nextDirection), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$()), nextDirection));
      var p$proxy7 = ((c$2 * c$2) - (halfWidth * halfWidth));
      var a$2 = (+Math.sqrt(p$proxy7));
      if ((a$2 > 0.001)) {
        if (($m_Ltrivalibs_graphics_geometry_line2d$package$().cB(nextDirection, v.h) > 0.0)) {
          top = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), top, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), v.h, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), a$2));
          bottom = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), bottom, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), v.h, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), (-a$2)));
        } else {
          top = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), top, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), v.h, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), (-a$2)));
          bottom = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), bottom, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), v.h, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), a$2));
        }
      }
    }
    elem$1.b7(top, v.B, new $c_Ltrivalibs_graphics_math_cpu_Vec2(elem$5, topUv));
    elem$3.b7(bottom, v.B, new $c_Ltrivalibs_graphics_math_cpu_Vec2(elem$5, bottomUv));
    if ((!hasNext)) {
      elem$1.b7(v.k, v.B, new $c_Ltrivalibs_graphics_math_cpu_Vec2(elem$5, 0.5));
      elem$3.b7(v.k, v.B, new $c_Ltrivalibs_graphics_math_cpu_Vec2(elem$5, 0.5));
    }
    elem$5 = (elem$5 + v.n);
    i = ((1 + i) | 0);
  }
  var d = 0;
  while ((d < smoothDepth)) {
    var smoothed = $m_Ltrivalibs_graphics_geometry_line2d$package$().hs(elem$1, elem$3, 0.25, smoothMinLength, smoothAngleThreshold, $m_Ltrivalibs_graphics_math_cpu_Vec2$lerpInstance$());
    elem$1 = smoothed.F;
    elem$3 = smoothed.a1;
    d = ((1 + d) | 0);
  }
  var uvLength = ((totalLength === null) ? elem$5 : (+totalLength));
  var x$proxy5 = line.cO;
  var localLength = ((x$proxy5 === null) ? line.aX : (+x$proxy5));
  var ribCount = elem$1.dV();
  var vertCount = (ribCount << 1);
  var buffer = new ArrayBuffer((vertCount << 5));
  var out = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), vertCount);
  var indices = [];
  var r = 0;
  while ((r < ribCount)) {
    var tv = elem$1.v(r);
    var bv = elem$3.v(r);
    var r$1 = r;
    if ((r$1 === 0)) {
      var x$7 = ((ribCount - 1) | 0);
      var i$1 = ((x$7 < 1) ? x$7 : 1);
    } else if ((r$1 === ((ribCount - 1) | 0))) {
      var x$8 = ((ribCount - 2) | 0);
      var i$1 = ((x$8 > 0) ? x$8 : 0);
    } else {
      var i$1 = r$1;
    }
    var tv$1 = elem$1.v(i$1);
    var bv$1 = elem$3.v(i$1);
    var span = (bv$1.q.s - tv$1.q.s);
    var width = ((span < 1.0E-9) ? 0.0 : ($f_Ltrivalibs_graphics_math_Vec2Base__length__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), tv$1.k, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), bv$1.k)) / span));
    var topUvY = (swapTextureOrientation ? (1.0 - tv.q.s) : tv.q.s);
    var bottomUvY = (swapTextureOrientation ? (1.0 - bv.q.s) : bv.q.s);
    var $x_1 = $m_Ltrivalibs_graphics_geometry_line2d$package$();
    var index$proxy1 = (r << 1);
    var offset$proxy1 = (index$proxy1 << 5);
    $x_1.fG(new ($a_Ltrivalibs_bufferdata_BufferView())(out.dv, offset$proxy1), tv.k, width, tv.q.r, (tv.q.r / uvLength), topUvY, ((tv.q.r - line.aD) / localLength));
    var $x_2 = $m_Ltrivalibs_graphics_geometry_line2d$package$();
    var index$proxy2 = ((1 + (r << 1)) | 0);
    var offset$proxy2 = (index$proxy2 << 5);
    $x_2.fG(new ($a_Ltrivalibs_bufferdata_BufferView())(out.dv, offset$proxy2), bv.k, width, bv.q.r, (bv.q.r / uvLength), bottomUvY, ((bv.q.r - line.aD) / localLength));
    indices.push((r << 1));
    indices.push(((1 + (r << 1)) | 0));
    r = ((1 + r) | 0);
  }
  return new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(out, $m_Ltrivalibs_graphics_geometry_buffers$package$().gR(indices, vertCount));
});
$p.hy = (function(lines, smoothDepth, smoothAngleThreshold, smoothMinLength, totalLength, foldTreatment) {
  var total = 0.0;
  if ((totalLength !== null)) {
    total = (+totalLength);
  } else {
    var i = 0;
    while ((i < (lines.length | 0))) {
      total = (total + lines[i].aX);
      i = ((1 + i) | 0);
    }
  }
  var out = [];
  var i$2 = 0;
  while ((i$2 < (lines.length | 0))) {
    var prevDir = ((i$2 === 0) ? null : lines[((i$2 - 1) | 0)].gL().h);
    var nextDir = ((i$2 === (((lines.length | 0) - 1) | 0)) ? null : lines[((1 + i$2) | 0)].gt().h);
    var $x_2 = lines[i$2];
    var $x_1 = total;
    var num = i$2;
    var t = ((num >>> 31) | 0);
    out.push(this.hz($x_2, smoothDepth, smoothAngleThreshold, smoothMinLength, $x_1, prevDir, nextDir, ((((1 & ((num + t) | 0)) - t) | 0) !== 0), foldTreatment));
    i$2 = ((1 + i$2) | 0);
  }
  return out;
});
var $d_Ltrivalibs_graphics_geometry_Line$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Line$, "trivalibs.graphics.geometry.Line$", ({
  bv: 1
}));
var $n_Ltrivalibs_graphics_geometry_Line$;
function $m_Ltrivalibs_graphics_geometry_Line$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Line$)) {
    $n_Ltrivalibs_graphics_geometry_Line$ = new $c_Ltrivalibs_graphics_geometry_Line$();
  }
  return $n_Ltrivalibs_graphics_geometry_Line$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_LineVertex(pos, width, len, dir, data) {
  this.k = null;
  this.B = 0.0;
  this.n = 0.0;
  this.h = null;
  this.q = null;
  this.k = pos;
  this.B = width;
  this.n = len;
  this.h = dir;
  this.q = data;
}
$p = $c_Ltrivalibs_graphics_geometry_LineVertex.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_LineVertex;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_LineVertex() {
}
$h_Ltrivalibs_graphics_geometry_LineVertex.prototype = $p;
$p.h4 = (function(point) {
  var vx = (point.r - this.k.r);
  var vy = (point.s - this.k.s);
  var p$proxy1 = ((vx * vx) + (vy * vy));
  var l = (+Math.sqrt(p$proxy1));
  this.n = l;
  this.h = new $c_Ltrivalibs_graphics_math_cpu_Vec2((vx / l), (vy / l));
});
var $d_Ltrivalibs_graphics_geometry_LineVertex = new $TypeData().i($c_Ltrivalibs_graphics_geometry_LineVertex, "trivalibs.graphics.geometry.LineVertex", ({
  bw: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_buffers$package$() {
}
$p = $c_Ltrivalibs_graphics_geometry_buffers$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_buffers$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_buffers$package$() {
}
$h_Ltrivalibs_graphics_geometry_buffers$package$.prototype = $p;
$p.gR = (function(idxBuf, vertexCount) {
  if (((idxBuf.length | 0) === 0)) {
    return null;
  } else if ((vertexCount <= 65535)) {
    var ua = new Uint16Array((idxBuf.length | 0));
    var i = 0;
    while ((i < (idxBuf.length | 0))) {
      ua[i] = idxBuf[i];
      i = ((1 + i) | 0);
    }
    return ua;
  } else {
    var ua$2 = new Uint32Array((idxBuf.length | 0));
    var i$2 = 0;
    while ((i$2 < (idxBuf.length | 0))) {
      ua$2[i$2] = (idxBuf[i$2] | 0);
      i$2 = ((1 + i$2) | 0);
    }
    return ua$2;
  }
});
var $d_Ltrivalibs_graphics_geometry_buffers$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_buffers$package$, "trivalibs.graphics.geometry.buffers$package$", ({
  bx: 1
}));
var $n_Ltrivalibs_graphics_geometry_buffers$package$;
function $m_Ltrivalibs_graphics_geometry_buffers$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_buffers$package$)) {
    $n_Ltrivalibs_graphics_geometry_buffers$package$ = new $c_Ltrivalibs_graphics_geometry_buffers$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_buffers$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_line2d$package$() {
}
$p = $c_Ltrivalibs_graphics_geometry_line2d$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_line2d$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_line2d$package$() {
}
$h_Ltrivalibs_graphics_geometry_line2d$package$.prototype = $p;
$p.cD = (function(a, b, t, evidence$1) {
  return new $c_Ltrivalibs_graphics_geometry_LineVertex($f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mixScalar__O__Ltrivalibs_graphics_math_Vec2Base__O__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), a.k, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), b.k, t), (a.B + ((b.B - a.B) * t)), 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mixScalar__O__Ltrivalibs_graphics_math_Vec2Base__O__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$(), a.q, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), b.q, t));
});
$p.fp = (function(dir) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2(dir.s, (-dir.r));
});
$p.hB = (function(a, b) {
  var p$proxy8 = $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), a, b);
  var p$proxy9 = ((p$proxy8 < (-1.0)) ? (-1.0) : ((p$proxy8 > 1.0) ? 1.0 : p$proxy8));
  return (+Math.acos(p$proxy9));
});
$p.dP = (function(a, b) {
  var y = $m_Ltrivalibs_graphics_geometry_line2d$package$().cB(a, b);
  var x = $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), a, b);
  return (+Math.atan2(y, x));
});
$p.gT = (function(verts, i, proximity) {
  var curvature = $m_Ltrivalibs_graphics_geometry_line2d$package$().gh(verts, i);
  if ((!proximity)) {
    return curvature;
  } else {
    var near = $m_Ltrivalibs_graphics_geometry_line2d$package$().h8(verts, i);
    return ((near < curvature) ? near : curvature);
  }
});
$p.h8 = (function(verts, i) {
  var n = (verts.length | 0);
  var p = verts[i].k;
  var maxArc = (3.0 * verts[i].B);
  var limit = Infinity;
  var arc = 0.0;
  var j = ((i - 1) | 0);
  while (((j >= 0) && (arc <= maxArc))) {
    arc = (arc + verts[j].n);
    var gap = $f_Ltrivalibs_graphics_math_Vec2Base__length__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), verts[j].k, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), p));
    if (((arc > (1.5 * gap)) && ((0.5 * gap) < limit))) {
      limit = (0.5 * gap);
    }
    j = ((j - 1) | 0);
  }
  arc = 0.0;
  j = i;
  while (((j < ((n - 1) | 0)) && (arc <= maxArc))) {
    arc = (arc + verts[j].n);
    var gap$2 = $f_Ltrivalibs_graphics_math_Vec2Base__length__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().f(), verts[((1 + j) | 0)].k, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), p));
    if (((arc > (1.5 * gap$2)) && ((0.5 * gap$2) < limit))) {
      limit = (0.5 * gap$2);
    }
    j = ((1 + j) | 0);
  }
  return limit;
});
$p.gh = (function(verts, i) {
  var n = (verts.length | 0);
  if (((i <= 0) || (i >= ((n - 1) | 0)))) {
    return Infinity;
  } else {
    var turn = $m_Ltrivalibs_graphics_geometry_line2d$package$().hB(verts[((i - 1) | 0)].h, verts[i].h);
    if ((turn <= 1.0E-6)) {
      return Infinity;
    } else {
      var p$proxy10 = verts[((i - 1) | 0)].n;
      var other$proxy2 = verts[i].n;
      var $x_1 = Math.min(p$proxy10, other$proxy2);
      var p$proxy11 = (0.5 * turn);
      var limit = ((+$x_1) / (+Math.tan(p$proxy11)));
      var lo = ((i - 1) | 0);
      var hi = ((1 + i) | 0);
      var arc = (verts[((i - 1) | 0)].n + verts[i].n);
      var sum = $m_Ltrivalibs_graphics_geometry_line2d$package$().dP(verts[((i - 1) | 0)].h, verts[i].h);
      var searching = true;
      while (searching) {
        var canGrowLo = (lo > 0);
        var canGrowHi = (hi < ((n - 1) | 0));
        if (((!canGrowLo) && (!canGrowHi))) {
          searching = false;
        } else {
          if ((canGrowLo && ((!canGrowHi) || (verts[((lo - 1) | 0)].n <= verts[hi].n)))) {
            lo = ((lo - 1) | 0);
            sum = (sum + $m_Ltrivalibs_graphics_geometry_line2d$package$().dP(verts[lo].h, verts[((1 + lo) | 0)].h));
            arc = (arc + verts[lo].n);
          } else {
            hi = ((1 + hi) | 0);
            sum = (sum + $m_Ltrivalibs_graphics_geometry_line2d$package$().dP(verts[((hi - 1) | 0)].h, verts[hi].h));
            arc = (arc + verts[((hi - 1) | 0)].n);
          }
          var p$proxy12 = sum;
          var net = (+Math.abs(p$proxy12));
          if ((net > 1.0E-6)) {
            var radius = (arc / net);
            if ((radius < limit)) {
              limit = radius;
            }
          }
          if ((arc > (4.0 * limit))) {
            searching = false;
          }
        }
      }
      return limit;
    }
  }
});
$p.fE = (function(line, i, minDist, angleThreshold) {
  var prev = line.v(((i - 1) | 0));
  var curr = line.v(i);
  return ((!((prev.n < minDist) || (curr.n < minDist))) && ((1.0 - $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), curr.h, prev.h)) > angleThreshold));
});
$p.hs = (function(top, bottom, ratio, minDist, angleThreshold, evidence$1) {
  var outTop = new $c_Ltrivalibs_graphics_geometry_Line(top.aW, top.aD, top.c8);
  var outBottom = new $c_Ltrivalibs_graphics_geometry_Line(bottom.aW, bottom.aD, bottom.c8);
  var n = top.dV();
  var i = 0;
  while ((i < n)) {
    if (((i === 0) || (i === ((n - 1) | 0)))) {
      var this$1 = top.v(i);
      outTop.a6(new $c_Ltrivalibs_graphics_geometry_LineVertex(this$1.k, this$1.B, this$1.n, this$1.h, this$1.q));
      var this$2 = bottom.v(i);
      outBottom.a6(new $c_Ltrivalibs_graphics_geometry_LineVertex(this$2.k, this$2.B, this$2.n, this$2.h, this$2.q));
    } else if (($m_Ltrivalibs_graphics_geometry_line2d$package$().fE(top, i, minDist, angleThreshold) || $m_Ltrivalibs_graphics_geometry_line2d$package$().fE(bottom, i, minDist, angleThreshold))) {
      outTop.a6($m_Ltrivalibs_graphics_geometry_line2d$package$().cD(top.v(((i - 1) | 0)), top.v(i), (1.0 - ratio), evidence$1));
      outTop.a6($m_Ltrivalibs_graphics_geometry_line2d$package$().cD(top.v(i), top.v(((1 + i) | 0)), ratio, evidence$1));
      outBottom.a6($m_Ltrivalibs_graphics_geometry_line2d$package$().cD(bottom.v(((i - 1) | 0)), bottom.v(i), (1.0 - ratio), evidence$1));
      outBottom.a6($m_Ltrivalibs_graphics_geometry_line2d$package$().cD(bottom.v(i), bottom.v(((1 + i) | 0)), ratio, evidence$1));
    } else {
      var this$3 = top.v(i);
      outTop.a6(new $c_Ltrivalibs_graphics_geometry_LineVertex(this$3.k, this$3.B, this$3.n, this$3.h, this$3.q));
      var this$4 = bottom.v(i);
      outBottom.a6(new $c_Ltrivalibs_graphics_geometry_LineVertex(this$4.k, this$4.B, this$4.n, this$4.h, this$4.q));
    }
    i = ((1 + i) | 0);
  }
  return new $c_T2(outTop, outBottom);
});
$p.cB = (function(a, b) {
  return ((a.r * b.s) - (a.s * b.r));
});
$p.fG = (function(ref, pos, width, length, uvX, uvY, localUvX) {
  var x$proxy7 = pos.r;
  var _1 = Math.fround(x$proxy7);
  var x$proxy8 = pos.s;
  var _2 = Math.fround(x$proxy8);
  var baseOffset$proxy1 = (ref.off | 0);
  ref.dv.setFloat32(baseOffset$proxy1, _1, true);
  var tailOffset = ((4 + baseOffset$proxy1) | 0);
  ref.dv.setFloat32(tailOffset, _2, true);
  var _1$1 = Math.fround(width);
  var baseOffset$proxy2 = ((8 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(baseOffset$proxy2, _1$1, true);
  var _1$2 = Math.fround(length);
  var baseOffset$proxy3 = ((12 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(baseOffset$proxy3, _1$2, true);
  var _1$3 = Math.fround(uvX);
  var _2$1 = Math.fround(uvY);
  var baseOffset$proxy4 = ((16 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(baseOffset$proxy4, _1$3, true);
  var tailOffset$5 = ((4 + baseOffset$proxy4) | 0);
  ref.dv.setFloat32(tailOffset$5, _2$1, true);
  var _1$4 = Math.fround(localUvX);
  var _2$2 = Math.fround(uvY);
  var baseOffset$proxy5 = ((24 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(baseOffset$proxy5, _1$4, true);
  var tailOffset$7 = ((4 + baseOffset$proxy5) | 0);
  ref.dv.setFloat32(tailOffset$7, _2$2, true);
});
var $d_Ltrivalibs_graphics_geometry_line2d$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_line2d$package$, "trivalibs.graphics.geometry.line2d$package$", ({
  by: 1
}));
var $n_Ltrivalibs_graphics_geometry_line2d$package$;
function $m_Ltrivalibs_graphics_geometry_line2d$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_line2d$package$)) {
    $n_Ltrivalibs_graphics_geometry_line2d$package$ = new $c_Ltrivalibs_graphics_geometry_line2d$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_line2d$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_lib_args$package$() {
}
$p = $c_Ltrivalibs_graphics_lib_args$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_lib_args$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_lib_args$package$() {
}
$h_Ltrivalibs_graphics_lib_args$package$.prototype = $p;
$p.fz = (function(x) {
  if ($isInt(x)) {
    var i = (x | 0);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ("" + i));
  } else {
    return x;
  }
});
var $d_Ltrivalibs_graphics_lib_args$package$ = new $TypeData().i($c_Ltrivalibs_graphics_lib_args$package$, "trivalibs.graphics.lib.args$package$", ({
  bz: 1
}));
var $n_Ltrivalibs_graphics_lib_args$package$;
function $m_Ltrivalibs_graphics_lib_args$package$() {
  if ((!$n_Ltrivalibs_graphics_lib_args$package$)) {
    $n_Ltrivalibs_graphics_lib_args$package$ = new $c_Ltrivalibs_graphics_lib_args$package$();
  }
  return $n_Ltrivalibs_graphics_lib_args$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_lib_color_Color$kernel$() {
}
$p = $c_Ltrivalibs_graphics_lib_color_Color$kernel$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_lib_color_Color$kernel$;
/** @constructor */
function $h_Ltrivalibs_graphics_lib_color_Color$kernel$() {
}
$h_Ltrivalibs_graphics_lib_color_Color$kernel$.prototype = $p;
$p.gF = (function(h, s, v, out) {
  var h6 = (6.0 * h);
  var p$proxy1 = (((h6 + 0.0) % 6.0) - 3.0);
  var p$proxy2 = ((+Math.abs(p$proxy1)) - 1.0);
  out.c9 = (v * (1.0 + ((((p$proxy2 < 0.0) ? 0.0 : ((p$proxy2 > 1.0) ? 1.0 : p$proxy2)) - 1.0) * s)));
  var p$proxy3 = (((h6 + 4.0) % 6.0) - 3.0);
  var p$proxy4 = ((+Math.abs(p$proxy3)) - 1.0);
  out.ca = (v * (1.0 + ((((p$proxy4 < 0.0) ? 0.0 : ((p$proxy4 > 1.0) ? 1.0 : p$proxy4)) - 1.0) * s)));
  var p$proxy5 = (((h6 + 2.0) % 6.0) - 3.0);
  var p$proxy6 = ((+Math.abs(p$proxy5)) - 1.0);
  out.cb = (v * (1.0 + ((((p$proxy6 < 0.0) ? 0.0 : ((p$proxy6 > 1.0) ? 1.0 : p$proxy6)) - 1.0) * s)));
  return out;
});
var $d_Ltrivalibs_graphics_lib_color_Color$kernel$ = new $TypeData().i($c_Ltrivalibs_graphics_lib_color_Color$kernel$, "trivalibs.graphics.lib.color.Color$kernel$", ({
  bA: 1
}));
var $n_Ltrivalibs_graphics_lib_color_Color$kernel$;
function $m_Ltrivalibs_graphics_lib_color_Color$kernel$() {
  if ((!$n_Ltrivalibs_graphics_lib_color_Color$kernel$)) {
    $n_Ltrivalibs_graphics_lib_color_Color$kernel$ = new $c_Ltrivalibs_graphics_lib_color_Color$kernel$();
  }
  return $n_Ltrivalibs_graphics_lib_color_Color$kernel$;
}
function $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__cubicBezier__D__O__O__O__O__Ltrivalibs_graphics_math_Vec2Base__O($thiz, t, a, c1, c2, b, x$6) {
  var oneT = (1.0 - t);
  var oneT2 = (oneT * oneT);
  var oneT3 = (oneT2 * oneT);
  var t2 = (t * t);
  var t3 = (t2 * t);
  var w1 = (3.0 * (oneT2 * t));
  var w2 = (3.0 * (oneT * t2));
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2((((((+x$6.w(a)) * oneT3) + ((+x$6.w(c1)) * w1)) + ((+x$6.w(c2)) * w2)) + ((+x$6.w(b)) * t3)), (((((+x$6.x(a)) * oneT3) + ((+x$6.x(c1)) * w1)) + ((+x$6.x(c2)) * w2)) + ((+x$6.x(b)) * t3)));
}
function $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2(((+x$2.w(v)) + (+x$2.w(other))), ((+x$2.x(v)) + (+x$2.x(other))));
}
function $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2(((+x$2.w(v)) - (+x$2.w(other))), ((+x$2.x(v)) - (+x$2.x(other))));
}
function $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2(((+x$2.w(v)) * scalar), ((+x$2.x(v)) * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2(((+x$2.w(v)) / scalar), ((+x$2.x(v)) / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec2Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec2Base__length__O__D(x$2, v));
}
function $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mixScalar__O__Ltrivalibs_graphics_math_Vec2Base__O__D__O($thiz, v, x$2, b, t) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2((((+x$2.w(v)) * (1.0 - t)) + ((+x$2.w(b)) * t)), (((+x$2.x(v)) * (1.0 - t)) + ((+x$2.x(b)) * t)));
}
function $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($thiz, v, x$2, other, x$4) {
  x$2.fH(v, (+x$4.w(other)));
  x$2.fJ(v, (+x$4.x(other)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.r = 0.0;
  this.s = 0.0;
  this.r = x;
  this.s = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  bJ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.c9 = 0.0;
  this.ca = 0.0;
  this.cb = 0.0;
  this.c9 = x;
  this.ca = y;
  this.cb = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  bN: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4(x, y, z, w) {
  this.cd = 0.0;
  this.ce = 0.0;
  this.cf = 0.0;
  this.cc = 0.0;
  this.cd = x;
  this.ce = y;
  this.cf = z;
  this.cc = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4, "trivalibs.graphics.math.cpu.Vec4", ({
  bO: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
  this.ec = null;
  this.ed = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = $p;
$p.hF = (function() {
  if ((!this.ed)) {
    this.ec = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6();
    this.ed = true;
  }
  return this.ec;
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$", ({
  bR: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
}
function $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, wgsl) {
  $thiz.c = wgsl;
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_Expr() {
  this.c = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_Expr.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_Expr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_Expr() {
}
$h_Ltrivalibs_graphics_math_gpu_Expr.prototype = $p;
$p.p = (function() {
  return this.c;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  K: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$.prototype = $p;
$p.dU = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gw(v));
});
var $d_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$, "trivalibs.graphics.math.gpu.cpu_interop$package$", ({
  bV: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$;
function $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$ = new $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$() {
  $n_Ltrivalibs_graphics_math_gpu_expr$package$ = this;
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = $p;
$p.dA = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.c) + ", ") + sampler.c) + ", ") + uv.c) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  bW: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_expr$package$;
function $m_Ltrivalibs_graphics_math_gpu_expr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_expr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_expr$package$ = new $c_Ltrivalibs_graphics_math_gpu_expr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_expr$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$Block$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$Block$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$Block$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$Block$() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$Block$.prototype = $p;
$p.dz = (function(parts) {
  var out = [];
  var i = 0;
  while ((i < parts.t())) {
    var p = parts.J(i);
    if ((p.length > 0)) {
      out.push(p);
    }
    i = ((1 + i) | 0);
  }
  return out.join("\n");
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$Block$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$Block$, "trivalibs.graphics.math.gpu.expr$package$Block$", ({
  bX: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_expr$package$Block$;
function $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_expr$package$Block$)) {
    $n_Ltrivalibs_graphics_math_gpu_expr$package$Block$ = new $c_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_expr$package$Block$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  this.ee = null;
  this.ef = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.gw = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.K = (function() {
  if ((!this.ef)) {
    this.ee = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.ef = true;
  }
  return this.ee;
});
$p.fI = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.c + ".xyz"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  bY: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_vec4$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_vec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_vec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_vec4$() {
}
$h_Ltrivalibs_graphics_math_gpu_vec4$.prototype = $p;
$p.g9 = (function(x, y, z, w) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("vec4<f32>(" + x.c) + ", ") + y.c) + ", ") + z.c) + ", ") + w.c) + ")"));
});
$p.dB = (function(xyz, w) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.c) + ", ") + w.c) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  c7: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_vec4$;
function $m_Ltrivalibs_graphics_math_gpu_vec4$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_vec4$)) {
    $n_Ltrivalibs_graphics_math_gpu_vec4$ = new $c_Ltrivalibs_graphics_math_gpu_vec4$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_vec4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BindCache() {
  this.cT = null;
  this.cV = 0;
  this.cU = 0;
  this.cQ = null;
  this.cS = 0;
  this.cR = 0;
  this.aY = null;
  this.bq = null;
  this.cg = null;
  this.cT = null;
  this.cV = (-1);
  this.cU = (-1);
  this.cQ = null;
  this.cS = (-1);
  this.cR = (-1);
  this.aY = [];
  this.bq = [];
  this.cg = null;
}
$p = $c_Ltrivalibs_graphics_painter_BindCache.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindCache;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindCache() {
}
$h_Ltrivalibs_graphics_painter_BindCache.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindCache = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindCache, "trivalibs.graphics.painter.BindCache", ({
  c8: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BindPair(name, value) {
  this.R = null;
  this.R = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  c9: 1
}));
function $f_Ltrivalibs_graphics_painter_Bindable__$init$__V($thiz) {
  $thiz.cA(0);
  $thiz.dD(null);
}
function $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V($thiz, idx, value) {
  while ((($thiz.ai().length | 0) <= idx)) {
    $thiz.ai().push(null);
  }
  if ((!($thiz.ai()[idx] === value))) {
    $thiz.ai()[idx] = value;
    $thiz.cA(((1 + $thiz.bN()) | 0));
  }
}
function $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V($thiz, idx, pb) {
  while ((($thiz.aa().length | 0) <= idx)) {
    $thiz.aa().push(null);
  }
  var old = $thiz.aa()[idx];
  if ((old === null)) {
    var $x_1 = true;
  } else {
    var x = old.panel;
    var x$2 = pb.panel;
    var $x_1 = (!((x === null) ? (x$2 === null) : (x === x$2)));
  }
  if (((($x_1 || ((old.index | 0) !== (pb.index | 0))) || ((old.mipLevel | 0) !== (pb.mipLevel | 0))) || ((!(!old.depth)) !== (!(!pb.depth))))) {
    $thiz.aa()[idx] = pb;
    $thiz.cA(((1 + $thiz.bN()) | 0));
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BlendState$() {
  this.eg = null;
  $n_Ltrivalibs_graphics_painter_BlendState$ = this;
  this.eg = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one-minus-src-alpha"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one-minus-src-alpha"));
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one"));
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst", "zero"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst-alpha", "zero"));
}
$p = $c_Ltrivalibs_graphics_painter_BlendState$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BlendState$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BlendState$() {
}
$h_Ltrivalibs_graphics_painter_BlendState$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BlendState$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_BlendState$, "trivalibs.graphics.painter.BlendState$", ({
  ca: 1
}));
var $n_Ltrivalibs_graphics_painter_BlendState$;
function $m_Ltrivalibs_graphics_painter_BlendState$() {
  if ((!$n_Ltrivalibs_graphics_painter_BlendState$)) {
    $n_Ltrivalibs_graphics_painter_BlendState$ = new $c_Ltrivalibs_graphics_painter_BlendState$();
  }
  return $n_Ltrivalibs_graphics_painter_BlendState$;
}
function $p_Ltrivalibs_graphics_painter_CanvasSurface$__preferredFormat__T($thiz) {
  var gpu = $m_Ltrivalibs_graphics_painter_WebGPU$().fi();
  return ((gpu === (void 0)) ? "bgra8unorm" : gpu.getPreferredCanvasFormat());
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_CanvasSurface$() {
}
$p = $c_Ltrivalibs_graphics_painter_CanvasSurface$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_CanvasSurface$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_CanvasSurface$() {
}
$h_Ltrivalibs_graphics_painter_CanvasSurface$.prototype = $p;
$p.g8 = (function(canvas, format) {
  return new $c_Ltrivalibs_graphics_painter_CanvasSurface(canvas, ((format === (void 0)) ? $p_Ltrivalibs_graphics_painter_CanvasSurface$__preferredFormat__T(this) : format));
});
var $d_Ltrivalibs_graphics_painter_CanvasSurface$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_CanvasSurface$, "trivalibs.graphics.painter.CanvasSurface$", ({
  cc: 1
}));
var $n_Ltrivalibs_graphics_painter_CanvasSurface$;
function $m_Ltrivalibs_graphics_painter_CanvasSurface$() {
  if ((!$n_Ltrivalibs_graphics_painter_CanvasSurface$)) {
    $n_Ltrivalibs_graphics_painter_CanvasSurface$ = new $c_Ltrivalibs_graphics_painter_CanvasSurface$();
  }
  return $n_Ltrivalibs_graphics_painter_CanvasSurface$;
}
function $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V($thiz) {
  var format = null;
  var i = 0;
  while ((i < $thiz.aE)) {
    var b = $thiz.aF[i];
    if (((format === null) && (b.ap > 0))) {
      format = b.aG;
    }
    i = ((1 + i) | 0);
  }
  $thiz.d0 = format;
}
function $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V($thiz, index, verts, indices, widenTo32) {
  while ((($thiz.aF.length | 0) <= index)) {
    $thiz.aF.push(new $c_Ltrivalibs_graphics_painter_FormBuffers());
  }
  var b = $thiz.aF[index];
  $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts);
  if ((indices !== null)) {
    $p_Ltrivalibs_graphics_painter_Form__uploadIndices__Ltrivalibs_graphics_painter_FormBuffers__sjs_js_typedarray_TypedArray__Z__V($thiz, b, indices, widenTo32);
  } else {
    b.ap = 0;
    b.bs = 0;
  }
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts) {
  var data = verts.dv.buffer;
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.aq === null) || (b.d3 < padded))) {
    if ((b.aq !== null)) {
      b.aq.destroy();
    }
    b.aq = $thiz.br.b.createBuffer(({
      "size": padded,
      "usage": 40
    }));
    b.d3 = padded;
  }
  $thiz.br.H.writeBuffer(b.aq, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.ci = size;
  b.aZ = (verts.off | 0);
}
function $p_Ltrivalibs_graphics_painter_Form__uploadIndices__Ltrivalibs_graphics_painter_FormBuffers__sjs_js_typedarray_TypedArray__Z__V($thiz, b, raw, widenTo32) {
  var count = 0;
  if (((!(!(raw instanceof Uint16Array))) && widenTo32)) {
    var u32 = new Uint32Array((raw.length | 0));
    var i = 0;
    while ((i < (raw.length | 0))) {
      u32[i] = (raw[i] | 0);
      i = ((1 + i) | 0);
    }
    count = (u32.length | 0);
    b.aG = "uint32";
    var data = u32.buffer;
  } else if ((!(!(raw instanceof Uint16Array)))) {
    count = (raw.length | 0);
    b.aG = "uint16";
    var data = raw.buffer;
  } else {
    count = (raw.length | 0);
    b.aG = "uint32";
    var data = raw.buffer;
  }
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.ao === null) || (b.d2 < padded))) {
    if ((b.ao !== null)) {
      b.ao.destroy();
    }
    b.ao = $thiz.br.b.createBuffer(({
      "size": padded,
      "usage": 24
    }));
    b.d2 = padded;
  }
  $thiz.br.H.writeBuffer(b.ao, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.bs = size;
  b.ap = count;
}
function $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data) {
  var size = (data.byteLength | 0);
  if (((3 & size) === 0)) {
    return data;
  } else {
    var $x_1 = ArrayBuffer;
    var p = ((-4) & ((3 + size) | 0));
    var out = new $x_1(((p < 4) ? 4 : p));
    new Uint8Array(out).set(new Uint8Array(data));
    return out;
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Form(painter) {
  this.br = null;
  this.aF = null;
  this.aE = 0;
  this.d1 = null;
  this.cZ = null;
  this.d0 = null;
  this.br = painter;
  this.aF = [];
  this.aE = 0;
  this.d1 = "triangle-list";
  this.cZ = "ccw";
  this.d0 = null;
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.dN = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.d1 = topology;
  }
  if ((frontFace !== (void 0))) {
    this.cZ = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, geometry.cN, geometry.c7, false);
    this.aE = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, vertices, null, false);
    this.aE = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((geometries !== (void 0))) {
    var use32 = false;
    var i = 0;
    while ((i < (geometries.length | 0))) {
      var idx = geometries[i].c7;
      if (((idx !== null) && (!(!(idx instanceof Uint32Array))))) {
        use32 = true;
      }
      i = ((1 + i) | 0);
    }
    i = 0;
    while ((i < (geometries.length | 0))) {
      var geo = geometries[i];
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i, geo.cN, geo.c7, use32);
      i = ((1 + i) | 0);
    }
    this.aE = (geometries.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((verticesAll !== (void 0))) {
    var i$1 = 0;
    while ((i$1 < (verticesAll.length | 0))) {
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i$1, verticesAll[i$1], null, false);
      i$1 = ((1 + i$1) | 0);
    }
    this.aE = (verticesAll.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  cd: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_FormBuffers() {
  this.aq = null;
  this.d3 = 0;
  this.ci = 0;
  this.aZ = 0;
  this.ao = null;
  this.d2 = 0;
  this.bs = 0;
  this.ap = 0;
  this.aG = null;
  this.aq = null;
  this.d3 = 0;
  this.ci = 0;
  this.aZ = 0;
  this.ao = null;
  this.d2 = 0;
  this.bs = 0;
  this.ap = 0;
  this.aG = "uint16";
}
$p = $c_Ltrivalibs_graphics_painter_FormBuffers.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_FormBuffers;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_FormBuffers() {
}
$h_Ltrivalibs_graphics_painter_FormBuffers.prototype = $p;
var $d_Ltrivalibs_graphics_painter_FormBuffers = new $TypeData().i($c_Ltrivalibs_graphics_painter_FormBuffers, "trivalibs.graphics.painter.FormBuffers", ({
  ce: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.bt = null;
  this.bt = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.t = (function() {
  return (this.bt.length | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  cf: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__fireResize__D__D__V($thiz, w, h) {
  var k = 0;
  while ((k < ($thiz.d9.length | 0))) {
    $thiz.d9[k].hN(w, h);
    k = ((1 + k) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  panel.dE($doubleToInt($thiz.fF()), $doubleToInt($thiz.fj()));
  if (panel.dQ()) {
    return (void 0);
  }
  $thiz.fv(panel);
}
function $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, shape, depthTest, multisample, formats, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.bv]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Z__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.aL, shape.dd, fmts, depthTest, multisample, shape.bJ.d1, shape.de, shape.bJ.cZ, shape.bJ.d0, false);
  pass.setPipeline(pipeline);
  var form = shape.bJ;
  var bufferCount = form.aE;
  var instanceCount = shape.df.t();
  var runtime = $p_Ltrivalibs_graphics_painter_Painter__runtimeBindingsOf__Ltrivalibs_graphics_painter_Panel__sjs_js_Dictionary($thiz, panel);
  if ((instanceCount === 0)) {
    $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Bindable__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape, null, runtime, null);
    var b = 0;
    while ((b < bufferCount)) {
      var buf = form.aF[b];
      if ((buf.aZ > 0)) {
        pass.setVertexBuffer(0, buf.aq, 0.0, buf.ci);
        if ((buf.ap > 0)) {
          pass.setIndexBuffer(buf.ao, buf.aG, 0.0, buf.bs);
          pass.drawIndexed(buf.ap);
        } else {
          pass.draw(buf.aZ);
        }
      }
      b = ((1 + b) | 0);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Bindable__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape, shape.df.bt[i], runtime, null);
      var b$2 = 0;
      while ((b$2 < bufferCount)) {
        var buf$2 = form.aF[b$2];
        if ((buf$2.aZ > 0)) {
          pass.setVertexBuffer(0, buf$2.aq, 0.0, buf$2.ci);
          if ((buf$2.ap > 0)) {
            pass.setIndexBuffer(buf$2.ao, buf$2.aG, 0.0, buf$2.bs);
            pass.drawIndexed(buf$2.ap);
          } else {
            pass.draw(buf$2.aZ);
          }
        }
        b$2 = ((1 + b$2) | 0);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.bv]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Z__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.S, layer.d4, fmts, depthTest, multisample, "triangle-list", "none", "ccw", null, false);
  pass.setPipeline(pipeline);
  var instanceCount = layer.cj.t();
  var runtime = $p_Ltrivalibs_graphics_painter_Painter__runtimeBindingsOf__Ltrivalibs_graphics_painter_Panel__sjs_js_Dictionary($thiz, panel);
  if ((instanceCount === 0)) {
    $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Bindable__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer, null, runtime, srcView);
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Bindable__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer, layer.cj.bt[i], runtime, srcView);
      pass.draw(3);
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__runtimeBindingsOf__Ltrivalibs_graphics_painter_Panel__sjs_js_Dictionary($thiz, panel) {
  if ((panel === null)) {
    return null;
  } else {
    var dict = panel.da;
    var keys = Object.keys(dict);
    return (((keys.length | 0) > 0) ? dict : null);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__resolveValueSlot__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__O($thiz, shade, i, bindings, inst, runtime) {
  var fromInst = (((inst !== null) && (i < (inst.ai().length | 0))) ? inst.ai()[i] : null);
  if ((fromInst !== null)) {
    return fromInst;
  } else {
    var own = ((i < (bindings.length | 0)) ? bindings[i] : null);
    if ((own !== null)) {
      return own;
    } else {
      if ((runtime !== null)) {
        var key$proxy3 = shade.cv[i];
        var $x_1 = (!(!(!(!runtime.hasOwnProperty(key$proxy3)))));
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        var key$proxy4 = shade.cv[i];
        return runtime[key$proxy4];
      } else {
        return null;
      }
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__boundPanelSlot__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__Ltrivalibs_graphics_painter_PanelBinding($thiz, k, panelBindings, inst) {
  var fromInst = (((inst !== null) && (k < (inst.aa().length | 0))) ? inst.aa()[k] : null);
  return ((fromInst !== null) ? fromInst : ((k < (panelBindings.length | 0)) ? panelBindings[k] : null));
}
function $p_Ltrivalibs_graphics_painter_Painter__fallbackPanelView__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUTextureView($thiz, shade, k, runtime, srcView) {
  if ((runtime !== null)) {
    var key$proxy5 = shade.bI[k];
    var $x_1 = (!(!(!(!runtime.hasOwnProperty(key$proxy5)))));
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    var key$proxy6 = shade.bI[k];
    var value = runtime[key$proxy6];
    return ((!(!(value instanceof $a_Ltrivalibs_graphics_painter_PanelBinding()))) ? $p_Ltrivalibs_graphics_painter_Painter__panelBindingView__Ltrivalibs_graphics_painter_PanelBinding__Ltrivalibs_graphics_painter_GPUTextureView($thiz, value) : value.l[0].dh);
  } else {
    return ((k === 0) ? srcView : null);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__panelBindingView__Ltrivalibs_graphics_painter_PanelBinding__Ltrivalibs_graphics_painter_GPUTextureView($thiz, pb) {
  return ((!(!pb.depth)) ? pb.panel.gi() : (((pb.mipLevel | 0) < 0) ? pb.panel.l[(pb.index | 0)].dh : pb.panel.l[(pb.index | 0)].I[(pb.mipLevel | 0)]));
}
function $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Bindable__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, x, inst, runtime, srcView) {
  var shade = x.fx();
  if ((runtime !== null)) {
    var vg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, x.ai(), inst, runtime);
    if ((vg !== null)) {
      pass.setBindGroup(0, vg);
    }
    var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_BindCache__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, x.aa(), inst, runtime, srcView, null);
    if ((pg !== null)) {
      pass.setBindGroup(1, pg);
    }
  } else {
    var owner = ((inst !== null) ? inst : x);
    if ((owner.dC() === null)) {
      owner.dD(new $c_Ltrivalibs_graphics_painter_BindCache());
    }
    var x$proxy12 = owner.dC();
    var ownVersion = owner.bN();
    var parentVersion = ((inst !== null) ? x.bN() : 0);
    if (((x$proxy12.cV !== ownVersion) || (x$proxy12.cU !== parentVersion))) {
      x$proxy12.cT = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, x.ai(), inst, null);
      x$proxy12.cV = ownVersion;
      x$proxy12.cU = parentVersion;
    }
    var vg$2 = x$proxy12.cT;
    if ((vg$2 !== null)) {
      pass.setBindGroup(0, vg$2);
    }
    if ((((x$proxy12.cS !== ownVersion) || (x$proxy12.cR !== parentVersion)) || (!$p_Ltrivalibs_graphics_painter_Painter__panelViewsCurrent__Ltrivalibs_graphics_painter_BindCache__Ltrivalibs_graphics_painter_GPUTextureView__Z($thiz, x$proxy12, srcView)))) {
      x$proxy12.cQ = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_BindCache__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, x.aa(), inst, null, srcView, x$proxy12);
      x$proxy12.cS = ownVersion;
      x$proxy12.cR = parentVersion;
    }
    var pg$2 = x$proxy12.cQ;
    if ((pg$2 !== null)) {
      pass.setBindGroup(1, pg$2);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__panelViewsCurrent__Ltrivalibs_graphics_painter_BindCache__Ltrivalibs_graphics_painter_GPUTextureView__Z($thiz, c, srcView) {
  var builtSrc = c.cg;
  var current = ((builtSrc === null) || (builtSrc === srcView));
  var k = 0;
  while ((current && (k < (c.aY.length | 0)))) {
    var p = c.aY[k];
    if (((p !== null) && (p.bx !== (c.bq[k] | 0)))) {
      current = false;
    }
    k = ((1 + k) | 0);
  }
  return current;
}
function $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings, inst, runtime) {
  if ((shade.db === null)) {
    return null;
  } else {
    var names = shade.cv;
    var entries = [];
    var i = 0;
    while ((i < (names.length | 0))) {
      var b = $p_Ltrivalibs_graphics_painter_Painter__resolveValueSlot__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__O($thiz, shade, i, bindings, inst, runtime);
      if ((b === null)) {
        var message$proxy2 = $p_Ltrivalibs_graphics_painter_Painter__missingBindingMessage__T__T($thiz, names[i]);
        throw new $c_sjs_js_JavaScriptException(Error(message$proxy2)).u;
      }
      entries.push($p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b));
      i = ((1 + i) | 0);
    }
    var $x_1 = $thiz.b;
    var _2 = shade.db;
    return $x_1.createBindGroup(({
      "layout": _2,
      "entries": entries
    }));
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_BindCache__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, panelBindings, inst, runtime, srcView, cache) {
  if ((shade.ct === null)) {
    return null;
  } else {
    var names = shade.bI;
    if ((cache !== null)) {
      cache.aY.length = (names.length | 0);
      cache.bq.length = (names.length | 0);
      cache.cg = null;
    }
    var entries = [];
    var k = 0;
    while ((k < (names.length | 0))) {
      var pb = $p_Ltrivalibs_graphics_painter_Painter__boundPanelSlot__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__Ltrivalibs_graphics_painter_PanelBinding($thiz, k, panelBindings, inst);
      var view = ((pb !== null) ? $p_Ltrivalibs_graphics_painter_Painter__panelBindingView__Ltrivalibs_graphics_painter_PanelBinding__Ltrivalibs_graphics_painter_GPUTextureView($thiz, pb) : $p_Ltrivalibs_graphics_painter_Painter__fallbackPanelView__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUTextureView($thiz, shade, k, runtime, srcView));
      if ((view === null)) {
        var message$proxy3 = $p_Ltrivalibs_graphics_painter_Painter__missingBindingMessage__T__T($thiz, names[k]);
        throw new $c_sjs_js_JavaScriptException(Error(message$proxy3)).u;
      }
      if ((cache !== null)) {
        if ((pb !== null)) {
          cache.aY[k] = pb.panel;
          cache.bq[k] = pb.panel.bx;
        } else {
          cache.aY[k] = null;
          cache.bq[k] = 0;
          cache.cg = view;
        }
      }
      var value = k;
      entries.push(({
        "binding": value,
        "resource": view
      }));
      k = ((1 + k) | 0);
    }
    var $x_1 = $thiz.b;
    var _2 = shade.ct;
    return $x_1.createBindGroup(({
      "layout": _2,
      "entries": entries
    }));
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__missingBindingMessage__T__T($thiz, name) {
  return (("Painter: '" + name) + "' is not bound. Bind it on the shape or layer, its instance, or the panel.");
}
function $p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b) {
  if ((b instanceof $c_Ltrivalibs_graphics_buffers_BufferBinding)) {
    var _2 = b.aC;
    var _2$1 = ({
      "buffer": _2
    });
    return ({
      "binding": i,
      "resource": _2$1
    });
  } else {
    return ({
      "binding": i,
      "resource": b
    });
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, bs) {
  if ((bs === null)) {
    return "n";
  } else {
    var c = bs.color;
    var a = bs.alpha;
    return ((((((((((c.srcFactor + ".") + c.dstFactor) + ".") + c.operation) + "|") + a.srcFactor) + ".") + a.dstFactor) + ".") + a.operation);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Z__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shade, blendState, formats, depthTest, multisample, topology, cullMode, frontFace, indexFormat, depthAlways) {
  var stripIndexFormat = (((indexFormat !== null) && ((topology === "triangle-strip") || (topology === "line-strip"))) ? indexFormat : null);
  var stripKey = ((stripIndexFormat === null) ? "" : ((stripIndexFormat === "uint32") ? "4" : "2"));
  var depthKey = ((!depthTest) ? "n" : (depthAlways ? "a" : "l"));
  var key = (((((((((((((((shade.eE + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthKey) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace) + stripKey);
  var cached = $thiz.d8[key];
  if ((cached !== (void 0))) {
    return cached;
  } else {
    var targets = [];
    var ti = 0;
    while ((ti < (formats.length | 0))) {
      if ((blendState === null)) {
        var f$proxy8 = formats[ti];
        var target = ({
          "format": f$proxy8
        });
      } else {
        var f$proxy9 = formats[ti];
        var target = ({
          "format": f$proxy9,
          "blend": blendState
        });
      }
      targets.push(target);
      ti = ((1 + ti) | 0);
    }
    if ((shade.dc !== null)) {
      var _2 = shade.cu;
      var _2$1 = [shade.dc];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.cu;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.eF;
    var _2$4 = shade.cu;
    var _2$5 = ({
      "module": _2$4,
      "entryPoint": "fs_main",
      "targets": targets
    });
    var _2$6 = ({
      "topology": topology,
      "cullMode": cullMode,
      "frontFace": frontFace
    });
    var desc = ({
      "layout": _2$3,
      "vertex": vertexDescriptor,
      "fragment": _2$5,
      "primitive": _2$6
    });
    if ((stripIndexFormat !== null)) {
      desc.primitive.stripIndexFormat = stripIndexFormat;
    }
    if (depthTest) {
      var value = (!depthAlways);
      var _2$7 = (depthAlways ? "always" : "less");
      desc.depthStencil = ({
        "format": "depth24plus",
        "depthWriteEnabled": value,
        "depthCompare": _2$7
      });
    }
    if (multisample) {
      desc.multisample = ({
        "count": 4
      });
    }
    var p = $thiz.b.createRenderPipeline(desc);
    $thiz.d8[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.es)) {
    $thiz.er = $thiz.b.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.es = true;
  }
  return $thiz.er;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.em)) {
    var $x_2 = $thiz.b;
    var _2 = ({});
    var _2$1 = ({});
    var _2$2 = [({
      "binding": 0,
      "visibility": 2,
      "texture": _2
    }), ({
      "binding": 1,
      "visibility": 2,
      "sampler": _2$1
    })];
    var $x_1 = $x_2.createBindGroupLayout(({
      "entries": _2$2
    }));
    $thiz.el = $x_1;
    $thiz.em = true;
  }
  return $thiz.el;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitModule__Ltrivalibs_graphics_painter_GPUShaderModule($thiz) {
  if ((!$thiz.eo)) {
    $thiz.en = $thiz.b.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    $thiz.eo = true;
  }
  return $thiz.en;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipelineLayout__Ltrivalibs_graphics_painter_GPUPipelineLayout($thiz) {
  if ((!$thiz.eq)) {
    var $x_2 = $thiz.b;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var $x_1 = $x_2.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    $thiz.ep = $x_1;
    $thiz.eq = true;
  }
  return $thiz.ep;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipelineFor__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  var cached = $thiz.d5[format];
  if ((cached !== (void 0))) {
    return cached;
  } else {
    var $x_1 = $thiz.b;
    var _2 = $p_Ltrivalibs_graphics_painter_Painter__blitPipelineLayout__Ltrivalibs_graphics_painter_GPUPipelineLayout($thiz);
    var _2$1 = $p_Ltrivalibs_graphics_painter_Painter__blitModule__Ltrivalibs_graphics_painter_GPUShaderModule($thiz);
    var _2$2 = ({
      "module": _2$1,
      "entryPoint": "vs_main"
    });
    var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__blitModule__Ltrivalibs_graphics_painter_GPUShaderModule($thiz);
    var _2$4 = [({
      "format": format
    })];
    var _2$5 = ({
      "module": _2$3,
      "entryPoint": "fs_main",
      "targets": _2$4
    });
    var _2$6 = ({
      "topology": "triangle-list"
    });
    var p = $x_1.createRenderPipeline(({
      "layout": _2,
      "vertex": _2$2,
      "fragment": _2$5,
      "primitive": _2$6
    }));
    $thiz.d5[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__sourceShade__Ltrivalibs_graphics_painter_Shade($thiz) {
  if ((!$thiz.eD)) {
    var id = $thiz.C;
    $thiz.C = ((1 + $thiz.C) | 0);
    $thiz.eC = new $c_Ltrivalibs_graphics_painter_Shade(id, $p_Ltrivalibs_graphics_painter_Painter__blitModule__Ltrivalibs_graphics_painter_GPUShaderModule($thiz), null, null, null, $p_Ltrivalibs_graphics_painter_Painter__blitPipelineLayout__Ltrivalibs_graphics_painter_GPUPipelineLayout($thiz), false, ({}), ({}));
    $thiz.eD = true;
  }
  return $thiz.eC;
}
function $p_Ltrivalibs_graphics_painter_Painter__drawSource__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Panel__Z__sjs_js_Array__V($thiz, pass, panel, multisample, formats) {
  var group = panel.cs;
  if ((group === null)) {
    if (((panel.aK === "rgba32float") && (!(!(!$thiz.b.features.has("float32-filterable")))))) {
      throw new $c_sjs_js_JavaScriptException(Error("Panel: drawing an rgba32float source needs the device feature 'float32-filterable'. Pass requiredFeatures = Arr(\"float32-filterable\") to Painter.init, use rgba16float, or keep the panel on the direct path (source size and format, no shapes or layers).")).u;
    }
    var $x_1 = $thiz.b;
    var _2 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
    var x$proxy13 = panel.bG;
    var _2$1 = $thiz.dL();
    var _2$2 = [({
      "binding": 0,
      "resource": x$proxy13
    }), ({
      "binding": 1,
      "resource": _2$1
    })];
    group = $x_1.createBindGroup(({
      "layout": _2,
      "entries": _2$2
    }));
    panel.cs = group;
  }
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Z__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, $p_Ltrivalibs_graphics_painter_Painter__sourceShade__Ltrivalibs_graphics_painter_Shade($thiz), panel.cr, formats, panel.ar, multisample, "triangle-list", "none", "ccw", null, true));
  pass.setBindGroup(0, group);
  pass.draw(3);
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.eu)) {
    var $x_2 = $thiz.b;
    var _2 = ({
      "sampleType": "depth",
      "multisampled": true
    });
    var _2$1 = [({
      "binding": 0,
      "visibility": 2,
      "texture": _2
    })];
    var $x_1 = $x_2.createBindGroupLayout(({
      "entries": _2$1
    }));
    $thiz.et = $x_1;
    $thiz.eu = true;
  }
  return $thiz.et;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.ew)) {
    var module = $thiz.b.createShaderModule(({
      "code": "\n@group(0) @binding(0) var ms_depth: texture_depth_multisampled_2d;\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4f {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  return vec4f(x, y, 0.0, 1.0);\n}\n\n@fragment\nfn fs_main(@builtin(position) pos: vec4f) -> @builtin(frag_depth) f32 {\n  return textureLoad(ms_depth, vec2i(pos.xy), 0);\n}\n"
    }));
    var $x_1 = $thiz.b;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.b;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var _2$2 = [];
    var _2$3 = ({
      "module": module,
      "entryPoint": "fs_main",
      "targets": _2$2
    });
    var _2$4 = ({
      "topology": "triangle-list"
    });
    var _2$5 = ({
      "format": "depth24plus",
      "depthWriteEnabled": true,
      "depthCompare": "always"
    });
    var $x_2 = $x_3.createRenderPipeline(({
      "layout": pl,
      "vertex": _2$1,
      "fragment": _2$3,
      "primitive": _2$4,
      "depthStencil": _2$5
    }));
    $thiz.ev = $x_2;
    $thiz.ew = true;
  }
  return $thiz.ev;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.b.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.hi();
  var _2$2 = ({
    "view": _2$1,
    "depthLoadOp": "clear",
    "depthStoreOp": "store",
    "depthClearValue": 1.0
  });
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2,
    "depthStencilAttachment": _2$2
  }));
  var $x_1 = $thiz.b;
  var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
  var _2$4 = panel.fe();
  var _2$5 = [({
    "binding": 0,
    "resource": _2$4
  })];
  var bindGroup = $x_1.createBindGroup(({
    "layout": _2$3,
    "entries": _2$5
  }));
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz));
  pass.setBindGroup(0, bindGroup);
  pass.draw(3);
  pass.end();
  $thiz.H.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.ez)) {
    $thiz.ey = $thiz.b.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.ez = true;
  }
  return $thiz.ey;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Painter(device, surface, adapter, gpu) {
  this.b = null;
  this.aH = null;
  this.ek = null;
  this.ex = null;
  this.H = null;
  this.bv = null;
  this.C = 0;
  this.d9 = null;
  this.d7 = 0;
  this.d6 = 0;
  this.d8 = null;
  this.d5 = null;
  this.eA = null;
  this.eB = false;
  this.er = null;
  this.es = false;
  this.el = null;
  this.em = false;
  this.en = null;
  this.eo = false;
  this.ep = null;
  this.eq = false;
  this.eC = null;
  this.eD = false;
  this.et = null;
  this.eu = false;
  this.ev = null;
  this.ew = false;
  this.ey = null;
  this.ez = false;
  this.b = device;
  this.aH = surface;
  this.ek = adapter;
  this.ex = gpu;
  this.H = device.queue;
  if ((adapter !== null)) {
    adapter.info;
  }
  this.bv = surface.cX;
  this.C = 0;
  this.d9 = [];
  this.d7 = 0;
  this.d6 = 0;
  this.d8 = ({});
  this.d5 = ({});
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.gJ = (function() {
  this.aH.ge(this);
  this.aH.h1(((arg1$2, arg2$2) => {
    $p_Ltrivalibs_graphics_painter_Painter__fireResize__D__D__V(this, (arg1$2 | 0), (arg2$2 | 0));
  }));
});
$p.fF = (function() {
  return ((this.d7 > 0) ? this.d7 : this.aH.hH());
});
$p.fj = (function() {
  return ((this.d6 > 0) ? this.d6 : this.aH.gE());
});
$p.hj = (function(magFilter, minFilter, mipmapFilter, addressMode, addressModeU, addressModeV) {
  var $x_1 = this.b;
  var a$proxy1 = ((addressModeU === (void 0)) ? addressMode : addressModeU);
  var a$proxy2 = ((addressModeV === (void 0)) ? addressMode : addressModeV);
  return $x_1.createSampler(({
    "magFilter": magFilter,
    "minFilter": minFilter,
    "mipmapFilter": mipmapFilter,
    "addressModeU": a$proxy1,
    "addressModeV": a$proxy2
  }));
});
$p.dL = (function() {
  if ((!this.eB)) {
    this.eA = this.hj("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    this.eB = true;
  }
  return this.eA;
});
$p.gx = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).dN(geometry, vertices, geometries, verticesAll, topology, frontFace);
});
$p.hp = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).ho(cullMode, blendState);
});
$p.dI = (function(shade, blendState, mipSource, mipTarget) {
  return new $c_Ltrivalibs_graphics_painter_Layer(this, shade).hn(blendState, mipSource, mipTarget);
});
$p.cE = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers, source, sourceBlend, followSurface, flipY, premultipliedAlpha) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).hm(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers, source, sourceBlend, followSurface, flipY, premultipliedAlpha);
});
$p.hq = (function(panel) {
  var encoder = this.b.createCommandEncoder();
  this.ga(encoder, panel, this.aH.gg(), this.bv);
  this.aH.h7(encoder);
});
$p.h3 = (function(p) {
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(this, p);
  this.hq(p);
});
$p.fv = (function(panel) {
  var msaa = panel.aI;
  var encoder = this.b.createCommandEncoder();
  var panelFormats = panel.b8();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.hw())) {
    if ((panel.cm !== null)) {
      var x$proxy4 = panel.cm;
      if (msaa) {
        var _2 = panel.fo(t);
        var TextureViewBundle_this = panel.l[t];
        var _2$1 = TextureViewBundle_this.I[0];
        var value = x$proxy4.cd;
        var value$1 = x$proxy4.ce;
        var value$2 = x$proxy4.cf;
        var value$3 = x$proxy4.cc;
        var _2$2 = ({
          "r": value,
          "g": value$1,
          "b": value$2,
          "a": value$3
        });
        var attachment = ({
          "view": _2,
          "resolveTarget": _2$1,
          "loadOp": "clear",
          "storeOp": "discard",
          "clearValue": _2$2
        });
      } else {
        var TextureViewBundle_this$2 = panel.l[t];
        var _2$3 = TextureViewBundle_this$2.I[0];
        var value$4 = x$proxy4.cd;
        var value$5 = x$proxy4.ce;
        var value$6 = x$proxy4.cf;
        var value$7 = x$proxy4.cc;
        var _2$4 = ({
          "r": value$4,
          "g": value$5,
          "b": value$6,
          "a": value$7
        });
        var attachment = ({
          "view": _2$3,
          "loadOp": "clear",
          "storeOp": "store",
          "clearValue": _2$4
        });
      }
    } else if (msaa) {
      var _2$5 = panel.fo(t);
      var TextureViewBundle_this$3 = panel.l[t];
      var _2$6 = TextureViewBundle_this$3.I[0];
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var TextureViewBundle_this$4 = panel.l[t];
      var _2$7 = TextureViewBundle_this$4.I[0];
      var attachment = ({
        "view": _2$7,
        "loadOp": "load",
        "storeOp": "store"
      });
    }
    colorAttachments.push(attachment);
    t = ((1 + t) | 0);
  }
  var passDesc = ({
    "colorAttachments": colorAttachments
  });
  if (panel.ar) {
    var _2$8 = panel.fe();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  if (panel.gn()) {
    $p_Ltrivalibs_graphics_painter_Painter__drawSource__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Panel__Z__sjs_js_Array__V(this, shapePass, panel, msaa, panelFormats);
  }
  var i = 0;
  while ((i < (panel.bF.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V(this, shapePass, panel.bF[i], panel.ar, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  this.H.submit([encoder.finish()]);
  if (panel.bz) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V(this, panel);
  }
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.ad.length | 0))) {
    var layer = panel.ad[j];
    var needsPingPong = layer.h6(panel);
    if ((layer.bu >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        this.H.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.l[0].I[layer.bu];
      var mipSrcView = ((layer.ck >= 0) ? panel.l[0].I[layer.ck] : panel.dT());
      var enc = this.b.createCommandEncoder();
      var _2$9 = [({
        "view": mipDstView,
        "loadOp": "load",
        "storeOp": "store"
      })];
      var mipPass = enc.beginRenderPass(({
        "colorAttachments": _2$9
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V(this, mipPass, layer, false, false, panelFormats, mipSrcView, panel);
      mipPass.end();
      this.H.submit([enc.finish()]);
    } else if (needsPingPong) {
      if ((curPass !== null)) {
        curPass.end();
        this.H.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = this.b.createCommandEncoder();
      var _2$10 = panel.h5();
      var _2$11 = ({
        "r": 0,
        "g": 0,
        "b": 0,
        "a": 0
      });
      var _2$12 = [({
        "view": _2$10,
        "loadOp": "clear",
        "storeOp": "store",
        "clearValue": _2$11
      })];
      var ppPass = enc$2.beginRenderPass(({
        "colorAttachments": _2$12
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V(this, ppPass, layer, false, false, panelFormats, panel.dT(), panel);
      ppPass.end();
      this.H.submit([enc$2.finish()]);
      panel.hu();
    } else {
      if ((curPass === null)) {
        curEncoder = this.b.createCommandEncoder();
        var $x_1 = curEncoder;
        var _2$13 = panel.dT();
        var _2$14 = [({
          "view": _2$13,
          "loadOp": "load",
          "storeOp": "store"
        })];
        curPass = $x_1.beginRenderPass(({
          "colorAttachments": _2$14
        }));
      }
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V(this, curPass, layer, false, false, panelFormats, null, panel);
    }
    j = ((1 + j) | 0);
  }
  if ((curPass !== null)) {
    curPass.end();
    this.H.submit([curEncoder.finish()]);
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.ad.length | 0))) {
    if ((panel.ad[mi].bu >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.bS() > 1) && (!hasMipTargetLayers))) {
    this.dF(panel);
  }
});
$p.ga = (function(encoder, panel, dst, dstFormat) {
  var _2 = dst.createView();
  var _2$1 = ({
    "r": 0,
    "g": 0,
    "b": 0,
    "a": 0
  });
  var _2$2 = [({
    "view": _2,
    "loadOp": "clear",
    "storeOp": "store",
    "clearValue": _2$1
  })];
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2$2
  }));
  var bundle = panel.l[0];
  var group = bundle.dg;
  if ((group === null)) {
    var $x_1 = this.b;
    var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
    var _2$4 = bundle.I[0];
    var _2$5 = $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler(this);
    var _2$6 = [({
      "binding": 0,
      "resource": _2$4
    }), ({
      "binding": 1,
      "resource": _2$5
    })];
    group = $x_1.createBindGroup(({
      "layout": _2$3,
      "entries": _2$6
    }));
    bundle.dg = group;
  }
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__blitPipelineFor__T__Ltrivalibs_graphics_painter_GPURenderPipeline(this, dstFormat));
  pass.setBindGroup(0, group);
  pass.draw(3);
  pass.end();
});
$p.dF = (function(panel) {
  var mipCount = panel.bS();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__blitPipelineFor__T__Ltrivalibs_graphics_painter_GPURenderPipeline(this, panel.b8()[0]);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.l[0].I[((i - 1) | 0)];
    var dstView = panel.l[0].I[i];
    var encoder = this.b.createCommandEncoder();
    var _2 = ({
      "r": 0,
      "g": 0,
      "b": 0,
      "a": 0
    });
    var _2$1 = [({
      "view": dstView,
      "loadOp": "clear",
      "storeOp": "store",
      "clearValue": _2
    })];
    var pass = encoder.beginRenderPass(({
      "colorAttachments": _2$1
    }));
    var $x_1 = this.b;
    var _2$2 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
    var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler(this);
    var _2$4 = [({
      "binding": 0,
      "resource": srcView
    }), ({
      "binding": 1,
      "resource": _2$3
    })];
    var bindGroup = $x_1.createBindGroup(({
      "layout": _2$2,
      "entries": _2$4
    }));
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bindGroup);
    pass.draw(3);
    pass.end();
    this.H.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
});
Object.defineProperty($p, "adapter", ({
  "get": (function() {
    return this.ek;
  }),
  "configurable": true
}));
Object.defineProperty($p, "gpu", ({
  "get": (function() {
    return this.ex;
  }),
  "configurable": true
}));
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  ch: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter$__createPainter__Ltrivalibs_graphics_painter_GPUDevice__Ltrivalibs_graphics_painter_Surface__Ltrivalibs_graphics_painter_GPUAdapter__Ltrivalibs_graphics_painter_GPU__Ltrivalibs_graphics_painter_Painter($thiz, device, surface, adapter, gpu) {
  var painter = new $c_Ltrivalibs_graphics_painter_Painter(device, surface, adapter, gpu);
  painter.gJ();
  return painter;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Painter$() {
}
$p = $c_Ltrivalibs_graphics_painter_Painter$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter$() {
}
$h_Ltrivalibs_graphics_painter_Painter$.prototype = $p;
$p.gI = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().fi();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var surface = $m_Ltrivalibs_graphics_painter_CanvasSurface$().g8(canvas, maybeGpu.getPreferredCanvasFormat());
    var promise$proxy2 = $m_Ltrivalibs_graphics_painter_WebGPU$().hg(maybeGpu, (void 0), false, (void 0), false);
    var f$proxy16 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy1 = $m_Ltrivalibs_graphics_painter_WebGPU$().hh(adapter$2, (void 0), (void 0));
      var f$proxy15 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => $p_Ltrivalibs_graphics_painter_Painter$__createPainter__Ltrivalibs_graphics_painter_GPUDevice__Ltrivalibs_graphics_painter_Surface__Ltrivalibs_graphics_painter_GPUAdapter__Ltrivalibs_graphics_painter_GPU__Ltrivalibs_graphics_painter_Painter(this, device$2, surface, adapter$2, maybeGpu)));
      return promise$proxy1.then($m_sjs_js_Any$().b9(f$proxy15));
    }));
    return promise$proxy2.then($m_sjs_js_Any$().b9(f$proxy16));
  }
});
$p.gH = (function(canvas, setup) {
  var promise$proxy3 = this.gI(canvas);
  return promise$proxy3.then($m_sjs_js_Any$().b9(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  ci: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  $thiz.cG();
  if (($thiz.as !== null)) {
    $thiz.as.destroy();
  }
  if (($thiz.bD !== null)) {
    $thiz.bD.destroy();
  }
  var depthUsage = ($thiz.bA ? 20 : 16);
  var $x_1 = $thiz.D.b;
  var value = $thiz.b1;
  var value$1 = $thiz.b0;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.aI ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.as = depthTex;
  $thiz.by = depthTex.createView();
  if (($thiz.bA && $thiz.aI)) {
    var $x_2 = $thiz.D.b;
    var value$2 = $thiz.b1;
    var value$3 = $thiz.b0;
    var _2$2 = ({
      "width": value$2,
      "height": value$3
    });
    var resTex = $x_2.createTexture(({
      "size": _2$2,
      "format": "depth24plus",
      "usage": 20,
      "sampleCount": 1
    }));
    $thiz.bD = resTex;
    $thiz.bE = resTex.createView();
    $thiz.bz = true;
  } else {
    $thiz.bD = null;
    $thiz.bE = null;
    $thiz.bz = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.ad.length | 0))) {
    if ($thiz.ad[i].fl()) {
      return true;
    }
    i = ((1 + i) | 0);
  }
  return false;
}
function $p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle($thiz, tex, mipCount) {
  var perMip = [];
  var m = 0;
  while ((m < mipCount)) {
    var value = m;
    var $x_1 = tex.createView(({
      "baseMipLevel": value,
      "mipLevelCount": 1
    }));
    perMip.push($x_1);
    m = ((1 + m) | 0);
  }
  return new $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, tex.createView());
}
function $p_Ltrivalibs_graphics_painter_Panel__allocationKey__T($thiz) {
  return ((((((((((($thiz.W.length | 0) > 0) ? $thiz.W.join(",") : ($thiz.X ? $thiz.aJ : "preferred")) + "|") + $thiz.aI) + "|") + $thiz.ar) + "|") + $thiz.b2) + "|") + $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz));
}
function $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz) {
  return ($thiz.X ? 23 : 20);
}
function $p_Ltrivalibs_graphics_painter_Panel__allocationStale__I__I__Z($thiz, w, h) {
  return ((((w !== $thiz.b1) || (h !== $thiz.b0)) || $thiz.bC) || (($thiz.bw & $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz)) !== $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz)));
}
function $p_Ltrivalibs_graphics_painter_Panel__reallocate__I__I__V($thiz, w, h) {
  var d = 0;
  while ((d < ($thiz.M.length | 0))) {
    $thiz.M[d].destroy();
    d = ((1 + d) | 0);
  }
  d = 0;
  while ((d < ($thiz.bB.length | 0))) {
    $thiz.bB[d].destroy();
    d = ((1 + d) | 0);
  }
  if (((!$thiz.ar) && ($thiz.as !== null))) {
    $thiz.as.destroy();
    $thiz.as = null;
    $thiz.by = null;
  }
  $thiz.b1 = w;
  $thiz.b0 = h;
  $thiz.bw = $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz);
  $thiz.bC = false;
  var mipCount = $thiz.bS();
  var fmts = $thiz.b8();
  var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz);
  $thiz.M = [];
  $thiz.l = [];
  $thiz.bB = [];
  $thiz.cp = [];
  var i = 0;
  while ((i < (fmts.length | 0))) {
    var fmt = fmts[i];
    var $x_1 = $thiz.D.b;
    var _2 = ({
      "width": w,
      "height": h
    });
    var value = $thiz.bw;
    var tex = $x_1.createTexture(({
      "size": _2,
      "format": fmt,
      "usage": value,
      "mipLevelCount": mipCount
    }));
    $thiz.M.push(tex);
    $thiz.l.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle($thiz, tex, mipCount));
    if ($thiz.aI) {
      var $x_2 = $thiz.D.b;
      var _2$1 = ({
        "width": w,
        "height": h
      });
      var msaaTex = $x_2.createTexture(({
        "size": _2$1,
        "format": fmt,
        "sampleCount": 4,
        "usage": 16
      }));
      $thiz.bB.push(msaaTex);
      $thiz.cp.push(msaaTex.createView());
    }
    i = ((1 + i) | 0);
  }
  if (hasPong) {
    var $x_3 = $thiz.D.b;
    var _2$2 = ({
      "width": w,
      "height": h
    });
    var f$proxy6 = fmts[0];
    var value$1 = $thiz.bw;
    var pongTex = $x_3.createTexture(({
      "size": _2$2,
      "format": f$proxy6,
      "usage": value$1,
      "mipLevelCount": mipCount
    }));
    $thiz.M.push(pongTex);
    $thiz.l.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle($thiz, pongTex, mipCount));
  }
  if ($thiz.ar) {
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz);
  }
  $thiz.cG();
}
function $p_Ltrivalibs_graphics_painter_Panel__noteSource__sjs_js_Object__V($thiz, source) {
  $thiz.X = true;
  if ($m_Ltrivalibs_graphics_painter_sources$package$TextureSource$().fk(source)) {
    $m_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$().hE(source, "Panel.set(source)");
    $thiz.Z = (source.width | 0);
    $thiz.Y = (source.height | 0);
    $thiz.aJ = source.format;
    $thiz.aK = $thiz.aJ;
  } else {
    $thiz.Z = $p_Ltrivalibs_graphics_painter_sources$package$TextureSource$__size__sjs_js_Object__T__T__T__T__I($m_Ltrivalibs_graphics_painter_sources$package$TextureSource$(), source, "videoWidth", "naturalWidth", "displayWidth", "width");
    $thiz.Y = $p_Ltrivalibs_graphics_painter_sources$package$TextureSource$__size__sjs_js_Object__T__T__T__T__I($m_Ltrivalibs_graphics_painter_sources$package$TextureSource$(), source, "videoHeight", "naturalHeight", "displayHeight", "height");
    if ((($thiz.Z <= 0) || ($thiz.Y <= 0))) {
      throw new $c_sjs_js_JavaScriptException(Error("Panel.set(source): the image has no size yet \u2014 an <img> still loading, or a <video> before its first frame")).u;
    }
    $thiz.aJ = "rgba8unorm";
    $thiz.aK = $thiz.b8()[0];
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__uploadSource__sjs_js_Object__V($thiz, source) {
  if ($thiz.cC()) {
    $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
    $thiz.ae = false;
    $thiz.dE(0, 0);
    $m_Ltrivalibs_graphics_painter_sources$package$TextureSource$().fC($thiz.D.H, source, $thiz.M[0], $thiz.Z, $thiz.Y, $thiz.cn, $thiz.cq);
    $thiz.ae = true;
    if (($thiz.bS() > 1)) {
      $thiz.D.dF($thiz);
    }
  } else {
    $thiz.ae = false;
    var current = $thiz.a5;
    if (((((current === null) || ((current.width | 0) !== $thiz.Z)) || ((current.height | 0) !== $thiz.Y)) || (current.format !== $thiz.aK))) {
      $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
      var $x_1 = $thiz.D.b;
      var value = $thiz.Z;
      var value$1 = $thiz.Y;
      var _2 = ({
        "width": value,
        "height": value$1
      });
      var f$proxy9 = $thiz.aK;
      var tex = $x_1.createTexture(({
        "size": _2,
        "format": f$proxy9,
        "usage": 23
      }));
      $thiz.a5 = tex;
      $thiz.bG = tex.createView();
    }
    $m_Ltrivalibs_graphics_painter_sources$package$TextureSource$().fC($thiz.D.H, source, $thiz.a5, $thiz.Z, $thiz.Y, $thiz.cn, $thiz.cq);
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__releaseSource__V($thiz) {
  $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
  $thiz.ae = false;
}
function $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz) {
  if (($thiz.a5 !== null)) {
    $thiz.a5.destroy();
  }
  $thiz.a5 = null;
  $thiz.bG = null;
  $thiz.cs = null;
}
function $p_Ltrivalibs_graphics_painter_Panel__adoptSlot0AsSource__V($thiz) {
  $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
  $thiz.a5 = $thiz.M.shift();
  var TextureViewBundle_this = $thiz.l.shift();
  $thiz.bG = TextureViewBundle_this.I[0];
  $thiz.ae = false;
  $thiz.bC = true;
  $thiz.cG();
}
function $p_Ltrivalibs_graphics_painter_Panel__restoreSourceToSlot0__V($thiz) {
  var encoder = $thiz.D.b.createCommandEncoder();
  var x$proxy10 = $thiz.a5;
  var _2 = $thiz.M[0];
  var value = $thiz.Z;
  var value$1 = $thiz.Y;
  encoder.copyTextureToTexture(({
    "texture": x$proxy10
  }), ({
    "texture": _2
  }), ({
    "width": value,
    "height": value$1
  }));
  $thiz.D.H.submit([encoder.finish()]);
  $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
  $thiz.ae = true;
  if (($thiz.bS() > 1)) {
    $thiz.D.dF($thiz);
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy1$1__O__O($thiz, format$1) {
  return ((format$1 === (void 0)) ? (void 0) : [format$1]);
}
function $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy2$1__O__O($thiz, shape$1) {
  return ((shape$1 === (void 0)) ? (void 0) : [shape$1]);
}
function $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy3$1__O__O($thiz, layer$1) {
  return ((layer$1 === (void 0)) ? (void 0) : [layer$1]);
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Panel(painter) {
  this.D = null;
  this.b4 = 0;
  this.b3 = 0;
  this.cm = null;
  this.ar = false;
  this.aI = false;
  this.b2 = 0;
  this.W = null;
  this.bF = null;
  this.ad = null;
  this.cr = null;
  this.co = false;
  this.cn = false;
  this.cq = false;
  this.da = null;
  this.bx = 0;
  this.M = null;
  this.l = null;
  this.as = null;
  this.by = null;
  this.bA = false;
  this.bD = null;
  this.bE = null;
  this.bz = false;
  this.bB = null;
  this.cp = null;
  this.b1 = 0;
  this.b0 = 0;
  this.bw = 0;
  this.bC = false;
  this.X = false;
  this.Z = 0;
  this.Y = 0;
  this.aJ = null;
  this.aK = null;
  this.ae = false;
  this.a5 = null;
  this.bG = null;
  this.cs = null;
  this.D = painter;
  this.b4 = 0;
  this.b3 = 0;
  this.cm = null;
  this.ar = false;
  this.aI = false;
  this.b2 = 1;
  this.W = [];
  this.bF = [];
  this.ad = [];
  this.cr = null;
  this.co = false;
  this.cn = false;
  this.cq = false;
  this.da = ({});
  this.bx = 0;
  this.M = [];
  this.l = [];
  this.as = null;
  this.by = null;
  this.bA = false;
  this.bD = null;
  this.bE = null;
  this.bz = false;
  this.bB = [];
  this.cp = [];
  this.b1 = 0;
  this.b0 = 0;
  this.bw = 0;
  this.bC = false;
  this.X = false;
  this.Z = 0;
  this.Y = 0;
  this.aJ = "rgba8unorm";
  this.aK = "rgba8unorm";
  this.ae = false;
  this.a5 = null;
  this.bG = null;
  this.cs = null;
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.bS = (function() {
  if ((this.b2 === 0)) {
    var a = this.b1;
    var b = this.b0;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.b2;
  }
});
$p.b8 = (function() {
  return (((this.W.length | 0) > 0) ? this.W : (this.X ? [this.aJ] : [this.D.bv]));
});
$p.dQ = (function() {
  return ((((this.X && ((this.bF.length | 0) === 0)) && ((this.ad.length | 0) === 0)) && (this.cr === null)) && (!this.co));
});
$p.cC = (function() {
  return ((((this.dQ() && ((this.b4 === 0) || (this.b4 === this.Z))) && ((this.b3 === 0) || (this.b3 === this.Y))) && ((this.W.length | 0) <= 1)) && (this.b8()[0] === this.aK));
});
$p.gn = (function() {
  return (this.X && (!this.cC()));
});
$p.hw = (function() {
  return (this.b8().length | 0);
});
$p.dT = (function() {
  var TextureViewBundle_this = this.l[0];
  return TextureViewBundle_this.I[0];
});
$p.h5 = (function() {
  var TextureViewBundle_this = this.l[1];
  return TextureViewBundle_this.I[0];
});
$p.fe = (function() {
  return this.by;
});
$p.hi = (function() {
  return this.bE;
});
$p.fo = (function(index) {
  return this.cp[index];
});
$p.hu = (function() {
  var t = this.M[0];
  this.M[0] = this.M[1];
  this.M[1] = t;
  var sv = this.l[0];
  this.l[0] = this.l[1];
  this.l[1] = sv;
  this.cG();
});
$p.cG = (function() {
  this.bx = ((1 + this.bx) | 0);
});
$p.gi = (function() {
  if (((!this.bA) && (this.as !== null))) {
    this.bA = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.bz ? this.bE : this.by);
});
$p.hm = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers, source, sourceBlend, followSurface, flipY, premultipliedAlpha) {
  var allocationBefore = $p_Ltrivalibs_graphics_painter_Panel__allocationKey__T(this);
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.b4 = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.b3 = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.cm = ((clearColor === null) ? null : new $c_Ltrivalibs_graphics_math_cpu_Vec4(clearColor.cd, clearColor.ce, clearColor.cf, clearColor.cc));
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.ar = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.aI = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.b2 = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.b2 = v$5;
    }
  }
  var x$1 = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy1$1__O__O(this, format) : formats);
  if ((x$1 !== (void 0))) {
    this.W = x$1;
  }
  var x$2 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy2$1__O__O(this, shape) : shapes);
  if ((x$2 !== (void 0))) {
    this.bF = x$2;
  }
  var x$3 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy3$1__O__O(this, layer) : layers);
  if ((x$3 !== (void 0))) {
    this.ad = x$3;
  }
  if ((sourceBlend !== (void 0))) {
    this.cr = sourceBlend;
  }
  if ((followSurface !== (void 0))) {
    var v$6 = (!(!followSurface));
    this.co = v$6;
  }
  if ((flipY !== (void 0))) {
    var v$7 = (!(!flipY));
    this.cn = v$7;
  }
  if ((premultipliedAlpha !== (void 0))) {
    var v$8 = (!(!premultipliedAlpha));
    this.cq = v$8;
  }
  if ((source !== (void 0))) {
    if ((source === null)) {
      if ((this.X && ((this.W.length | 0) === 0))) {
        this.W = [this.aJ];
      }
      this.X = false;
    } else {
      $p_Ltrivalibs_graphics_painter_Panel__noteSource__sjs_js_Object__V(this, source);
    }
  }
  if ((((this.W.length | 0) > 1) && $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this))) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot host auto-pong layers. Chain a single-format panel for post-processing instead.")).u;
  }
  if ((((this.W.length | 0) > 1) && this.X)) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot have a source. Bind the source panel as a texture of the MRT shapes instead.")).u;
  }
  if (($p_Ltrivalibs_graphics_painter_Panel__allocationKey__T(this) !== allocationBefore)) {
    this.bC = true;
  }
  if ((source !== (void 0))) {
    if ((source === null)) {
      $p_Ltrivalibs_graphics_painter_Panel__releaseSource__V(this);
    } else {
      $p_Ltrivalibs_graphics_painter_Panel__uploadSource__sjs_js_Object__V(this, source);
    }
  }
  if (this.dQ()) {
    this.dE(0, 0);
    if ((!this.cC())) {
      this.D.fv(this);
    }
  }
  return this;
});
$p.dE = (function(surfaceW, surfaceH) {
  var useSource = (this.X && (!this.co));
  var w = ((this.b4 > 0) ? this.b4 : (useSource ? this.Z : surfaceW));
  var h = ((this.b3 > 0) ? this.b3 : (useSource ? this.Y : surfaceH));
  var direct = this.cC();
  if ((this.ae && ((!direct) || $p_Ltrivalibs_graphics_painter_Panel__allocationStale__I__I__Z(this, w, h)))) {
    $p_Ltrivalibs_graphics_painter_Panel__adoptSlot0AsSource__V(this);
  }
  if ($p_Ltrivalibs_graphics_painter_Panel__allocationStale__I__I__Z(this, w, h)) {
    $p_Ltrivalibs_graphics_painter_Panel__reallocate__I__I__V(this, w, h);
  }
  if (((direct && (!this.ae)) && (this.a5 !== null))) {
    $p_Ltrivalibs_graphics_painter_Panel__restoreSourceToSlot0__V(this);
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  cj: 1
}));
function $p_Ltrivalibs_graphics_painter_Shade__slotNames__sjs_js_Dictionary__sjs_js_Array($thiz, indices) {
  var keys = Object.keys(indices);
  var names = [];
  var i = 0;
  while ((i < (keys.length | 0))) {
    var key$proxy1 = keys[i];
    var idx = (indices[key$proxy1] | 0);
    while (((names.length | 0) <= idx)) {
      names.push("");
    }
    names[idx] = keys[i];
    i = ((1 + i) | 0);
  }
  return names;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.eE = 0;
  this.cu = null;
  this.dc = null;
  this.db = null;
  this.ct = null;
  this.eF = null;
  this.at = null;
  this.bH = null;
  this.cv = null;
  this.bI = null;
  this.eE = id;
  this.cu = shaderModule;
  this.dc = vertexBufferLayout;
  this.db = valueBindGroupLayout;
  this.ct = panelBindGroupLayout;
  this.eF = pipelineLayout;
  this.at = uniformIndices;
  this.bH = panelIndices;
  this.cv = $p_Ltrivalibs_graphics_painter_Shade__slotNames__sjs_js_Dictionary__sjs_js_Array(this, uniformIndices);
  this.bI = $p_Ltrivalibs_graphics_painter_Shade__slotNames__sjs_js_Dictionary__sjs_js_Array(this, panelIndices);
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  ck: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, sampling) {
  this.I = null;
  this.dh = null;
  this.dg = null;
  this.I = perMip;
  this.dh = sampling;
  this.dg = null;
}
$p = $c_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_TextureViewBundle;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_TextureViewBundle() {
}
$h_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = $p;
var $d_Ltrivalibs_graphics_painter_TextureViewBundle = new $TypeData().i($c_Ltrivalibs_graphics_painter_TextureViewBundle, "trivalibs.graphics.painter.TextureViewBundle", ({
  cn: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_WebGPU$() {
}
$p = $c_Ltrivalibs_graphics_painter_WebGPU$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_WebGPU$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_WebGPU$() {
}
$h_Ltrivalibs_graphics_painter_WebGPU$.prototype = $p;
$p.fi = (function() {
  return (((typeof navigator) === "undefined") ? (void 0) : navigator.gpu);
});
$p.gz = (function(canvas) {
  return canvas.getContext("webgpu");
});
$p.hg = (function(gpu, powerPreference, forceFallbackAdapter, requireAdapter, logAdapter) {
  var options = ({});
  if ((powerPreference !== (void 0))) {
    options.powerPreference = powerPreference;
  }
  if (forceFallbackAdapter) {
    options.forceFallbackAdapter = true;
  }
  var promise$proxy1 = gpu.requestAdapter(options);
  var promise$proxy2 = promise$proxy1.then(((value$2) => {
    if ((value$2 === null)) {
      throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).u;
    } else {
      return value$2;
    }
  }));
  var f$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
    if (logAdapter) {
      var s = ("WebGPU adapter: " + this.ff(adapter$2.info));
      console.log(s);
    }
    if ((requireAdapter !== (void 0))) {
      if ((!(!(!requireAdapter(adapter$2.info))))) {
        var message$proxy1 = ("WebGPU adapter rejected by requireAdapter: " + this.ff(adapter$2.info));
        throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).u;
      }
    }
    return adapter$2;
  }));
  return promise$proxy2.then($m_sjs_js_Any$().b9(f$proxy1));
});
$p.hh = (function(adapter, requiredFeatures, requiredLimits) {
  var descriptor = ({});
  if ((requiredFeatures !== (void 0))) {
    descriptor.requiredFeatures = requiredFeatures;
  }
  if ((requiredLimits !== (void 0))) {
    descriptor.requiredLimits = requiredLimits;
  }
  return adapter.requestDevice(descriptor);
});
$p.ff = (function(info) {
  return ((info === (void 0)) ? "(no adapter info)" : ((((((info.vendor + " / ") + info.architecture) + " / ") + info.device) + " / ") + info.description));
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  co: 1
}));
var $n_Ltrivalibs_graphics_painter_WebGPU$;
function $m_Ltrivalibs_graphics_painter_WebGPU$() {
  if ((!$n_Ltrivalibs_graphics_painter_WebGPU$)) {
    $n_Ltrivalibs_graphics_painter_WebGPU$ = new $c_Ltrivalibs_graphics_painter_WebGPU$();
  }
  return $n_Ltrivalibs_graphics_painter_WebGPU$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_pixels$package$PixelData$() {
}
$p = $c_Ltrivalibs_graphics_painter_pixels$package$PixelData$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_pixels$package$PixelData$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_pixels$package$PixelData$() {
}
$h_Ltrivalibs_graphics_painter_pixels$package$PixelData$.prototype = $p;
$p.gM = (function(data) {
  return (data.length | 0);
});
$p.gS = (function(format, data) {
  return ((format === "rgba8unorm") ? (!(!(data instanceof Uint8Array))) : ((format === "rgba32float") ? (!(!(data instanceof Float32Array))) : (((typeof Float16Array) !== "undefined") && (!(!(data instanceof Float16Array))))));
});
var $d_Ltrivalibs_graphics_painter_pixels$package$PixelData$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_pixels$package$PixelData$, "trivalibs.graphics.painter.pixels$package$PixelData$", ({
  cp: 1
}));
var $n_Ltrivalibs_graphics_painter_pixels$package$PixelData$;
function $m_Ltrivalibs_graphics_painter_pixels$package$PixelData$() {
  if ((!$n_Ltrivalibs_graphics_painter_pixels$package$PixelData$)) {
    $n_Ltrivalibs_graphics_painter_pixels$package$PixelData$ = new $c_Ltrivalibs_graphics_painter_pixels$package$PixelData$();
  }
  return $n_Ltrivalibs_graphics_painter_pixels$package$PixelData$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$() {
  this.fY = null;
  this.fW = null;
  this.fX = null;
  this.fY = "rgba8unorm";
  this.fW = "rgba16float";
  this.fX = "rgba32float";
}
$p = $c_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$() {
}
$h_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$.prototype = $p;
$p.fb = (function(f) {
  return ((f === "rgba8unorm") ? 4 : ((f === "rgba16float") ? 8 : ((f === "rgba32float") ? 16 : 0)));
});
var $d_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$, "trivalibs.graphics.painter.pixels$package$PixelFormat$", ({
  cq: 1
}));
var $n_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$;
function $m_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$() {
  if ((!$n_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$)) {
    $n_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$ = new $c_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$();
  }
  return $n_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$() {
}
$p = $c_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$() {
}
$h_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$.prototype = $p;
$p.hE = (function(target, where) {
  var width = (target.width | 0);
  var height = (target.height | 0);
  var format = target.format;
  if (($m_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$().fb(format) === 0)) {
    var message$proxy3 = (((where + ": unsupported pixel target format '") + format) + "'; use rgba8unorm, rgba16float or rgba32float");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy3)).u;
  }
  if ((!((width > 0) && (height > 0)))) {
    var message$proxy4 = ((((where + ": invalid pixel target size ") + width) + "\u00d7") + height);
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy4)).u;
  }
  if ((!(!("frames" in target)))) {
    var arg = target.frames;
    if ((!(!(!Array.isArray(arg))))) {
      var message$proxy5 = (where + ": PixelFrames.frames must be an array");
      throw new $c_sjs_js_JavaScriptException(Error(message$proxy5)).u;
    }
  } else {
    var data = target.data;
    if (((data === (void 0)) || (!$m_Ltrivalibs_graphics_painter_pixels$package$PixelData$().gS(format, data)))) {
      var message$proxy6 = (((where + ": PixelImage.data must be the array type of '") + format) + "' (Uint8Array / Float16Array / Float32Array)");
      throw new $c_sjs_js_JavaScriptException(Error(message$proxy6)).u;
    }
    var length = $m_Ltrivalibs_graphics_painter_pixels$package$PixelData$().gM(data);
    if ((length !== (Math.imul(width, height) << 2))) {
      var message$proxy7 = ((((where + ": PixelImage.data length ") + length) + " is not width \u00b7 height \u00b7 4 = ") + (Math.imul(width, height) << 2));
      throw new $c_sjs_js_JavaScriptException(Error(message$proxy7)).u;
    }
  }
});
var $d_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$, "trivalibs.graphics.painter.pixels$package$PixelTarget$", ({
  cr: 1
}));
var $n_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$;
function $m_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$() {
  if ((!$n_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$)) {
    $n_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$ = new $c_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$();
  }
  return $n_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$;
}
function $p_Ltrivalibs_graphics_painter_sources$package$TextureSource$__size__sjs_js_Object__T__T__T__T__I($thiz, source, a, b, c, d) {
  var value = ((!(source[a] === (void 0))) ? source[a] : ((!(source[b] === (void 0))) ? source[b] : ((!(source[c] === (void 0))) ? source[c] : source[d])));
  return ((value === (void 0)) ? 0 : (value | 0));
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_sources$package$TextureSource$() {
}
$p = $c_Ltrivalibs_graphics_painter_sources$package$TextureSource$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_sources$package$TextureSource$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_sources$package$TextureSource$() {
}
$h_Ltrivalibs_graphics_painter_sources$package$TextureSource$.prototype = $p;
$p.fk = (function(source) {
  return ((!(!("data" in source))) && (!(!("format" in source))));
});
$p.fC = (function(queue, source, texture, width, height, flipY, premultipliedAlpha) {
  if (this.fk(source)) {
    var data = source.data;
    var $x_1 = data.buffer;
    var value = (data.byteOffset | 0);
    var value$1 = Math.imul(width, $m_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$().fb(source.format));
    queue.writeTexture(({
      "texture": texture
    }), $x_1, ({
      "offset": value,
      "bytesPerRow": value$1,
      "rowsPerImage": height
    }), ({
      "width": width,
      "height": height
    }));
  } else {
    queue.copyExternalImageToTexture(({
      "source": source,
      "flipY": flipY
    }), ({
      "texture": texture,
      "premultipliedAlpha": premultipliedAlpha
    }), ({
      "width": width,
      "height": height
    }));
  }
});
var $d_Ltrivalibs_graphics_painter_sources$package$TextureSource$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_sources$package$TextureSource$, "trivalibs.graphics.painter.sources$package$TextureSource$", ({
  cs: 1
}));
var $n_Ltrivalibs_graphics_painter_sources$package$TextureSource$;
function $m_Ltrivalibs_graphics_painter_sources$package$TextureSource$() {
  if ((!$n_Ltrivalibs_graphics_painter_sources$package$TextureSource$)) {
    $n_Ltrivalibs_graphics_painter_sources$package$TextureSource$ = new $c_Ltrivalibs_graphics_painter_sources$package$TextureSource$();
  }
  return $n_Ltrivalibs_graphics_painter_sources$package$TextureSource$;
}
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.bg) + ") ") + b.bf) + ": ")) + b.bh);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().fL($m_sjs_js_ArrayOps$().fK(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_1 = i;
    var x0 = array$1[i];
    var x11 = x0.F;
    var name = x11.F;
    var typ = x11.a1;
    res[$x_1] = (((((("  @location(" + (x0.a1 | 0)) + ") ") + name) + ": ") + typ) + ",");
    i = ((1 + i) | 0);
  }
  var len$1 = (builtins.length | 0);
  var res$1 = new Array(len$1);
  var i$1 = 0;
  while ((i$1 < len$1)) {
    var $x_2 = i$1;
    var x0$1 = builtins[i$1];
    var name$1 = x0$1.bf;
    var builtin = x0$1.bg;
    var typ$1 = x0$1.bh;
    res$1[$x_2] = (((((("  @builtin(" + builtin) + ") ") + name$1) + ": ") + typ$1) + ",");
    i$1 = ((1 + i$1) | 0);
  }
  var allFields = $m_sjs_js_ArrayOpsCommon$().a(res, res$1);
  return (((allFields.length | 0) === 0) ? "" : (((("struct " + structName) + " {\n") + allFields.join("\n")) + "\n}"));
}
function $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($thiz, groupIdx, names, types) {
  var array$1 = $m_sjs_js_ArrayOps$().fL($m_sjs_js_ArrayOps$().fK(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    var x20 = x0.F;
    var name = x20.F;
    var typ = x20.a1;
    var bindingIdx = (x0.a1 | 0);
    res[$x_2] = ((typ === "sampler") ? (((((("@group(" + groupIdx) + ") @binding(") + bindingIdx) + ") var ") + name) + ": sampler;") : (((((((("@group(" + groupIdx) + ") @binding(") + bindingIdx) + ") var<uniform> ") + name) + ": ") + typ) + ";"));
    i = ((1 + i) | 0);
  }
  var $x_1 = res.join("\n");
  return $x_1;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_derive$() {
}
$p = $c_Ltrivalibs_graphics_shader_derive$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_derive$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_derive$() {
}
$h_Ltrivalibs_graphics_shader_derive$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_derive$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_derive$, "trivalibs.graphics.shader.derive$", ({
  cw: 1
}));
var $n_Ltrivalibs_graphics_shader_derive$;
function $m_Ltrivalibs_graphics_shader_derive$() {
  if ((!$n_Ltrivalibs_graphics_shader_derive$)) {
    $n_Ltrivalibs_graphics_shader_derive$ = new $c_Ltrivalibs_graphics_shader_derive$();
  }
  return $n_Ltrivalibs_graphics_shader_derive$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(target) {
  this.av = null;
  this.av = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  cx: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.dk = null;
  this.aM = null;
  this.dk = ({});
  this.aM = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
$p.fD = (function(d) {
  if ((!(!(!(!(!this.dk.hasOwnProperty(d.name))))))) {
    this.dk[d.name] = true;
    var array = d.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      this.fD(array[i]);
      i = ((1 + i) | 0);
    }
    this.aM.push(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  cy: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  this.y = null;
  this.y = null;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = $p;
$p.fB = (function(d) {
  var r = this.y;
  if ((r !== null)) {
    r.fD(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  cz: 1
}));
var $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
function $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  if ((!$n_Ltrivalibs_graphics_shader_dsl_FnRegistry$)) {
    $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$();
  }
  return $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(in$1, out, bindings, textures) {
  this.ag = null;
  this.bK = null;
  this.af = null;
  this.fZ = null;
  this.ag = in$1;
  this.bK = out;
  this.af = bindings;
  this.fZ = textures;
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  cA: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.dl.hasOwnProperty(data.name))))))) {
    var dict = $thiz.dl;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.dm.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
  this.aN = null;
  this.dm = null;
  this.dl = null;
  this.aN = "";
  this.dm = [];
  this.dl = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
}
$h_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = $p;
$p.bQ = (function() {
  return this.dm.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_LayerProgram = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_LayerProgram, "trivalibs.graphics.shader.dsl.LayerProgram", ({
  cB: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.dn.hasOwnProperty(data.name))))))) {
    var dict = $thiz.dn;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.dp.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.dr = null;
  this.dq = null;
  this.dp = null;
  this.dn = null;
  this.dr = "";
  this.dq = "";
  this.dp = [];
  this.dn = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.bQ = (function() {
  return this.dp.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  cC: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, textures) {
  this.cw = null;
  this.cx = null;
  this.eK = null;
  this.cw = in$1;
  this.cx = out;
  this.eK = bindings;
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_VertexCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexCtx, "trivalibs.graphics.shader.dsl.VertexCtx", ({
  cG: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$() {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_WgslFnData$() {
}
$h_Ltrivalibs_graphics_shader_dsl_WgslFnData$.prototype = $p;
$p.g2 = (function() {
  return [];
});
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_WgslFnData$, "trivalibs.graphics.shader.dsl.WgslFnData$", ({
  cI: 1
}));
var $n_Ltrivalibs_graphics_shader_dsl_WgslFnData$;
function $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$() {
  if ((!$n_Ltrivalibs_graphics_shader_dsl_WgslFnData$)) {
    $n_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$();
  }
  return $n_Ltrivalibs_graphics_shader_dsl_WgslFnData$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$() {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$() {
}
$h_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$.prototype = $p;
$p.bc = (function(fn, ds) {
  var seen = ({});
  var merged = [];
  var i = 0;
  while ((i < (fn.deps.length | 0))) {
    var d = fn.deps[i];
    if ((!(!(!(!(!seen.hasOwnProperty(d.name))))))) {
      seen[d.name] = true;
      merged.push(d);
    }
    i = ((1 + i) | 0);
  }
  ds.bP(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    if ((!(!(!(!(!seen.hasOwnProperty(d$3.name))))))) {
      seen[d$3.name] = true;
      merged.push(d$3);
    }
  })));
  return new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())(fn.name, fn.src, merged);
});
$p.gc = (function(fn, a1, a2, a3, a4) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().fB(fn);
  return (((((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ", ") + a4) + ")");
});
$p.gb = (function(fn, a1, a2, a3, a4, a5) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().fB(fn);
  return (((((((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ", ") + a4) + ", ") + a5) + ")");
});
var $d_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$, "trivalibs.graphics.shader.dsl.fn$package$WgslFn$", ({
  cJ: 1
}));
var $n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$;
function $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$() {
  if ((!$n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$)) {
    $n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  }
  return $n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$;
}
function $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($thiz, sizes) {
  var offsets = [];
  var elem = 0;
  elem = 0;
  var len = (sizes.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = sizes[i];
    var size = (x0 | 0);
    offsets.push(elem);
    elem = ((elem + size) | 0);
    i = ((1 + i) | 0);
  }
  return offsets;
}
function $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($thiz, sizes) {
  var elem = 0;
  elem = 0;
  var len = (sizes.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = sizes[i];
    var size = (x0 | 0);
    elem = ((elem + size) | 0);
    i = ((1 + i) | 0);
  }
  return elem;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_layouts$() {
}
$p = $c_Ltrivalibs_graphics_shader_layouts$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_layouts$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_layouts$() {
}
$h_Ltrivalibs_graphics_shader_layouts$.prototype = $p;
$p.aw = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  cK: 1
}));
var $n_Ltrivalibs_graphics_shader_layouts$;
function $m_Ltrivalibs_graphics_shader_layouts$() {
  if ((!$n_Ltrivalibs_graphics_shader_layouts$)) {
    $n_Ltrivalibs_graphics_shader_layouts$ = new $c_Ltrivalibs_graphics_shader_layouts$();
  }
  return $n_Ltrivalibs_graphics_shader_layouts$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$() {
  this.eN = null;
  this.eO = false;
  this.eP = null;
  this.eQ = false;
  this.eR = null;
  this.eS = false;
  this.eT = null;
  this.eU = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$.prototype = $p;
$p.fn = (function() {
  if ((!this.eO)) {
    this.eN = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_mod289_2", "fn noise_mod289_2(x: vec2<f32>) -> vec2<f32> {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}");
    this.eO = true;
  }
  return this.eN;
});
$p.gV = (function() {
  if ((!this.eQ)) {
    this.eP = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_mod289_3", "fn noise_mod289_3(x: vec3<f32>) -> vec3<f32> {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}");
    this.eQ = true;
  }
  return this.eP;
});
$p.fq = (function() {
  if ((!this.eS)) {
    this.eR = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$().bc(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_permute_3", "fn noise_permute_3(x: vec3<f32>) -> vec3<f32> {\n  return noise_mod289_3(((x * 34.0) + 10.0) * x);\n}"), new $c_sjsr_WrappedVarArgs([this.gV()]));
    this.eS = true;
  }
  return this.eR;
});
$p.hl = (function() {
  if ((!this.eU)) {
    this.eT = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$().bc(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_seed_offsets", "fn noise_seed_offsets(seed: f32) -> vec2<f32> {\n  let h = hash1i(bitcast<u32>(seed));\n  return vec2<f32>(f32(h % 289u), f32((h / 289u) % 289u));\n}"), new $c_sjsr_WrappedVarArgs([$m_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$().gC()]));
    this.eU = true;
  }
  return this.eT;
});
var $d_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$, "trivalibs.graphics.shader.lib.noise.NoiseCommon$", ({
  cL: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$;
function $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$)) {
    $n_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$ = new $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$() {
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_Simplex$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_Simplex$.prototype = $p;
$p.gp = (function(pos, octaves, lacunarity, gain, seed) {
  if ((seed === null)) {
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy7 = $m_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$().gq();
    var a2$proxy4 = $m_Ltrivalibs_graphics_lib_args$package$().fz(octaves);
    var s$proxy7 = WgslFn$_this.gc(fn$proxy7, pos, a2$proxy4, lacunarity, gain);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy7);
  } else {
    var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy8 = $m_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$().gr();
    var a2$proxy5 = $m_Ltrivalibs_graphics_lib_args$package$().fz(octaves);
    var s$proxy8 = WgslFn$_this$2.gb(fn$proxy8, pos, a2$proxy5, lacunarity, gain, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy8);
  }
});
var $d_Ltrivalibs_graphics_shader_lib_noise_Simplex$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_Simplex$, "trivalibs.graphics.shader.lib.noise.Simplex$", ({
  cM: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_noise_Simplex$;
function $m_Ltrivalibs_graphics_shader_lib_noise_Simplex$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_noise_Simplex$)) {
    $n_Ltrivalibs_graphics_shader_lib_noise_Simplex$ = new $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_noise_Simplex$;
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__body2__Z__T($thiz, seeded) {
  return (("  let C = vec4<f32>(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);\n  var i = floor(v + dot(v, C.yy));\n  let x0 = v - i + dot(i, C.xx);\n  let i1 = select(vec2<f32>(0.0, 1.0), vec2<f32>(1.0, 0.0), x0.x > x0.y);\n  var x12 = x0.xyxy + C.xxzz;\n  x12 = vec4<f32>(x12.xy - i1, x12.zw);\n  i = noise_mod289_2(i);\n  var p = noise_permute_3(noise_permute_3(i.y + vec3<f32>(0.0, i1.y, 1.0)) + i.x + vec3<f32>(0.0, i1.x, 1.0));\n" + $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__seedStage__Z__T__T__T($thiz, seeded, "p", "noise_permute_3")) + "  var m = max(0.5 - vec3<f32>(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), vec3<f32>(0.0));\n  m = m * m;\n  m = m * m;\n  let x = 2.0 * fract(p * C.www) - 1.0;\n  let h = abs(x) - 0.5;\n  let ox = floor(x + 0.5);\n  let a0 = x - ox;\n  m = m * (1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h));\n  let g = vec3<f32>(a0.x * x0.x + h.x * x0.y, a0.yz * x12.xz + h.yz * x12.yw);\n  return 130.0 * dot(m, g);");
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__seedStage__Z__T__T__T($thiz, seeded, v, permute) {
  return (seeded ? (((((((("  " + v) + " = ") + permute) + "(") + permute) + "(") + v) + " + so.x) + so.y);\n") : "");
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__fbmBody__T__Z__T($thiz, noise, seeded) {
  var sample = (seeded ? (noise + "(v * frequency, vec2<f32>((so.x + f32(i)) % 289.0, so.y))") : (noise + "(v * frequency)"));
  return ((((seeded ? "  let so = noise_seed_offsets(seed);\n" : "") + "  var sum = 0.0;\n  var amplitude = 1.0;\n  var total = 0.0;\n  var frequency = 1.0;\n  for (var i = 0; i < octaves; i += 1) {\n    sum += ") + sample) + " * amplitude;\n    total += amplitude;\n    amplitude *= gain;\n    frequency *= lacunarity;\n  }\n  return sum / total;");
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$() {
  this.eZ = null;
  this.f2 = false;
  this.f0 = null;
  this.f1 = false;
  this.eV = null;
  this.eY = false;
  this.eW = null;
  this.eX = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$.prototype = $p;
$p.gZ = (function() {
  if ((!this.f2)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy1 = $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__body2__Z__T(this, false);
    var src = (("fn simplex_noise_2d(v: vec2<f32>) -> f32 {\n" + body$proxy1) + "\n}");
    this.eZ = $x_1.bc(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_2d", src), new $c_sjsr_WrappedVarArgs([$m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().fn(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().fq()]));
    this.f2 = true;
  }
  return this.eZ;
});
$p.h0 = (function() {
  if ((!this.f1)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy2 = $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__body2__Z__T(this, true);
    var src = (("fn simplex_noise_2d_so(v: vec2<f32>, so: vec2<f32>) -> f32 {\n" + body$proxy2) + "\n}");
    this.f0 = $x_1.bc(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_2d_so", src), new $c_sjsr_WrappedVarArgs([$m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().fn(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().fq()]));
    this.f1 = true;
  }
  return this.f0;
});
$p.gq = (function() {
  if ((!this.eY)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy7 = $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__fbmBody__T__Z__T(this, "simplex_noise_2d", false);
    var src = (("fn simplex_fbm_2d(v: vec2<f32>, octaves: i32, lacunarity: f32, gain: f32) -> f32 {\n" + body$proxy7) + "\n}");
    this.eV = $x_1.bc(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_fbm_2d", src), new $c_sjsr_WrappedVarArgs([this.gZ()]));
    this.eY = true;
  }
  return this.eV;
});
$p.gr = (function() {
  if ((!this.eX)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy8 = $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__fbmBody__T__Z__T(this, "simplex_noise_2d_so", true);
    var src = (("fn simplex_fbm_2d_seeded(v: vec2<f32>, octaves: i32, lacunarity: f32, gain: f32, seed: f32) -> f32 {\n" + body$proxy8) + "\n}");
    this.eW = $x_1.bc(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_fbm_2d_seeded", src), new $c_sjsr_WrappedVarArgs([this.h0(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().hl()]));
    this.eX = true;
  }
  return this.eW;
});
var $d_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$, "trivalibs.graphics.shader.lib.noise.Simplex$wgsl$", ({
  cN: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$;
function $m_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$)) {
    $n_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$ = new $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$() {
  this.f3 = null;
  this.f4 = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$.prototype = $p;
$p.gC = (function() {
  if ((!this.f4)) {
    this.f3 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("hash1i", "fn hash1i(x: u32) -> u32 {\n  var v = x;\n    v ^= v >> 16u;\n    v = v * 0x21f0aaadu;\n    v ^= v >> 15u;\n    v = v * 0xd35a2d97u;\n    return v ^ (v >> 15u);\n}");
    this.f4 = true;
  }
  return this.f3;
});
var $d_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$, "trivalibs.graphics.shader.lib.random.Hash$wgsl$", ({
  cO: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$;
function $m_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$)) {
    $n_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$ = new $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$;
}
/** @constructor */
function $c_Ltrivalibs_utils_animation_Animator(frame, onFpsCallback) {
  this.f5 = null;
  this.du = null;
  this.bL = 0;
  this.bM = 0.0;
  this.cy = 0.0;
  this.cz = 0.0;
  this.dv = false;
  this.f5 = frame;
  this.du = onFpsCallback;
  this.bL = 0;
  this.bM = 0.0;
  this.cy = 0.0;
  this.cz = (-1.0);
  this.dv = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.fu = (function(time) {
  this.bL = ((1 + this.bL) | 0);
  if ((this.bM === 0.0)) {
    this.bM = time;
    this.cy = time;
  }
  var fpsElapsed = (time - this.bM);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.bL) / fpsElapsed);
    if (((time - this.cy) >= 1000.0)) {
      var s = (fps.toFixed(1) + " FPS");
      console.log(s);
      this.cy = time;
      if ((this.du !== null)) {
        (0, this.du)(fps);
      }
    }
    this.bL = 0;
    this.bM = time;
  }
  var delta = ((this.cz < 0.0) ? 0.0 : (time - this.cz));
  this.cz = time;
  (0, this.f5)(delta);
  if (this.dv) {
    requestAnimationFrame($m_sjs_js_Any$().b9(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.fu((+v1$2));
    }))));
  }
});
$p.ht = (function() {
  this.dv = true;
  return requestAnimationFrame($m_sjs_js_Any$().b9(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.fu((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  cS: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_animation_animate$package$() {
}
$p = $c_Ltrivalibs_utils_animation_animate$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_animate$package$;
/** @constructor */
function $h_Ltrivalibs_utils_animation_animate$package$() {
}
$h_Ltrivalibs_utils_animation_animate$package$.prototype = $p;
$p.g7 = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.ht();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  cT: 1
}));
var $n_Ltrivalibs_utils_animation_animate$package$;
function $m_Ltrivalibs_utils_animation_animate$package$() {
  if ((!$n_Ltrivalibs_utils_animation_animate$package$)) {
    $n_Ltrivalibs_utils_animation_animate$package$ = new $c_Ltrivalibs_utils_animation_animate$package$();
  }
  return $n_Ltrivalibs_utils_animation_animate$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_random_random$package$() {
}
$p = $c_Ltrivalibs_utils_random_random$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_random_random$package$;
/** @constructor */
function $h_Ltrivalibs_utils_random_random$package$() {
}
$h_Ltrivalibs_utils_random_random$package$.prototype = $p;
$p.U = (function() {
  return (+Math.random());
});
$p.fr = (function(min, max) {
  return (((+Math.random()) * (max - min)) + min);
});
$p.dK = (function(max) {
  return $doubleToInt(((+Math.random()) * max));
});
$p.h9 = (function() {
  return ((+Math.random()) < 0.5);
});
$p.fs = (function() {
  return ((((+Math.random()) + (+Math.random())) + (+Math.random())) / 3.0);
});
$p.ha = (function() {
  return ((2.0 * $m_Ltrivalibs_utils_random_random$package$().fs()) - 1.0);
});
$p.hb = (function() {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2((+Math.random()), (+Math.random()));
});
$p.bT = (function(arr) {
  if (((arr.length | 0) === 0)) {
    throw new $c_sjs_js_JavaScriptException(Error("pick(): empty array")).u;
  }
  return arr[$doubleToInt(((+Math.random()) * (arr.length | 0)))];
});
$p.hr = (function(arr) {
  var i = (((arr.length | 0) - 1) | 0);
  while ((i > 0)) {
    var j = $doubleToInt(((+Math.random()) * ((1 + i) | 0)));
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    i = ((i - 1) | 0);
  }
});
$p.dO = (function(arr) {
  var out = Array.from(arr);
  $m_Ltrivalibs_utils_random_random$package$().hr(out);
  return out;
});
var $d_Ltrivalibs_utils_random_random$package$ = new $TypeData().i($c_Ltrivalibs_utils_random_random$package$, "trivalibs.utils.random.random$package$", ({
  cW: 1
}));
var $n_Ltrivalibs_utils_random_random$package$;
function $m_Ltrivalibs_utils_random_random$package$() {
  if ((!$n_Ltrivalibs_utils_random_random$package$)) {
    $n_Ltrivalibs_utils_random_random$package$ = new $c_Ltrivalibs_utils_random_random$package$();
  }
  return $n_Ltrivalibs_utils_random_random$package$;
}
/** @constructor */
function $c_jl_Character$() {
  this.fM = null;
  $n_jl_Character$ = this;
  this.fM = $constArrUDiffs_I(67, "1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]");
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.hA = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  af: 1,
  a: 1
}));
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$();
  }
  return $n_jl_Character$;
}
/** @constructor */
function $c_jl_Number() {
}
$p = $c_jl_Number.prototype = new $h_O();
$p.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $p;
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.dX = s;
  if (writableStackTrace) {
    $thiz.gs();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.dX = null;
  }
  dG() {
    return this.dX;
  }
  gs() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.u : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  p() {
    var className = $objectClassName(this);
    var message = this.dG();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  O() {
    return $c_O.prototype.O.call(this);
  }
  get "message"() {
    var m = this.dG();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.p();
  }
}
/** @constructor */
function $c_s_Conversion() {
}
$p = $c_s_Conversion.prototype = new $h_O();
$p.constructor = $c_s_Conversion;
/** @constructor */
function $h_s_Conversion() {
}
$h_s_Conversion.prototype = $p;
$p.p = (function() {
  return "<function1>";
});
function $p_sci_Range$__description__I__I__I__Z__T($thiz, start, end, step, isInclusive) {
  return ((((start + (isInclusive ? " to " : " until ")) + end) + " by ") + step);
}
/** @constructor */
function $c_sci_Range$() {
}
$p = $c_sci_Range$.prototype = new $h_O();
$p.constructor = $c_sci_Range$;
/** @constructor */
function $h_sci_Range$() {
}
$h_sci_Range$.prototype = $p;
$p.fw = (function(start, end, step, isInclusive) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ($p_sci_Range$__description__I__I__I__Z__T(this, start, end, step, isInclusive) + ": seqs cannot contain more than Int.MaxValue elements."));
});
var $d_sci_Range$ = new $TypeData().i($c_sci_Range$, "scala.collection.immutable.Range$", ({
  aR: 1,
  a: 1
}));
var $n_sci_Range$;
function $m_sci_Range$() {
  if ((!$n_sci_Range$)) {
    $n_sci_Range$ = new $c_sci_Range$();
  }
  return $n_sci_Range$;
}
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$p = $c_sr_AbstractFunction1.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $p;
$p.p = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_DoubleRef(elem) {
  this.A = 0.0;
  this.A = elem;
}
$p = $c_sr_DoubleRef.prototype = new $h_O();
$p.constructor = $c_sr_DoubleRef;
/** @constructor */
function $h_sr_DoubleRef() {
}
$h_sr_DoubleRef.prototype = $p;
$p.p = (function() {
  return ("" + this.A);
});
var $d_sr_DoubleRef = new $TypeData().i($c_sr_DoubleRef, "scala.runtime.DoubleRef", ({
  b2: 1,
  a: 1
}));
/** @constructor */
function $c_sr_IntRef(elem) {
  this.j = 0;
  this.j = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.p = (function() {
  return ("" + this.j);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  b3: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.G = null;
  this.G = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.p = (function() {
  return ("" + this.G);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  b4: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.bl = 0;
  this.e4 = 0;
  this.fN = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.bl = $f_T__hashCode__I("Seq");
  this.e4 = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.fN = this.hD($m_sci_Nil$(), this.e4);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.dM = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.gG(xs, this.bl) : ((xs instanceof $c_sci_List) ? this.gO(xs, this.bl) : this.h2(xs, this.bl)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  bi: 1,
  bh: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT(uv) {
  this.aV = null;
  this.aV = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  bq: 1,
  bp: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$.prototype = $p;
$p.bd = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$().hF(), ref, $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec2_Vec2Buffer$", ({
  br: 1,
  a5: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$.prototype = $p;
$p.hI = (function(ref, value) {
  var value$proxy2 = value.c9;
  var value$proxy3 = Math.fround(value$proxy2);
  var offset$proxy5 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy5, value$proxy3, true);
  var value$proxy4 = value.ca;
  var value$proxy5 = Math.fround(value$proxy4);
  var offset$proxy6 = ((4 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy6, value$proxy5, true);
  var value$proxy6 = value.cb;
  var value$proxy7 = Math.fround(value$proxy6);
  var offset$proxy7 = ((8 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy7, value$proxy7, true);
});
$p.bd = (function(ref, value) {
  this.hI(ref, value);
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec3_Vec4Buffer$", ({
  bs: 1,
  a5: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
}
function $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($thiz, v, other) {
  return (((+$thiz.w(v)) * (+$thiz.w(other))) + ((+$thiz.x(v)) * (+$thiz.x(other))));
}
function $f_Ltrivalibs_graphics_math_Vec2Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
function $f_Ltrivalibs_graphics_math_Vec2Base__distance__O__O__D($thiz, v, other) {
  var dx = ((+$thiz.w(v)) - (+$thiz.w(other)));
  var dy = ((+$thiz.x(v)) - (+$thiz.x(other)));
  var p$proxy2 = ((dx * dx) + (dy * dy));
  return (+Math.sqrt(p$proxy2));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2$() {
  this.e8 = null;
  this.e9 = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2$.prototype = $p;
$p.f = (function() {
  if ((!this.e9)) {
    this.e8 = $m_Ltrivalibs_graphics_math_cpu_Vec2$();
    this.e9 = true;
  }
  return this.e8;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2$, "trivalibs.graphics.math.cpu.Vec2$", ({
  bK: 1,
  bC: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec2$;
function $m_Ltrivalibs_graphics_math_cpu_Vec2$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec2$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec2$ = new $c_Ltrivalibs_graphics_math_cpu_Vec2$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2$lerpInstance$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2$lerpInstance$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2$lerpInstance$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2$lerpInstance$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2$lerpInstance$.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2$lerpInstance$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2$lerpInstance$, "trivalibs.graphics.math.cpu.Vec2$lerpInstance$", ({
  bM: 1,
  bB: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec2$lerpInstance$;
function $m_Ltrivalibs_graphics_math_cpu_Vec2$lerpInstance$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec2$lerpInstance$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec2$lerpInstance$ = new $c_Ltrivalibs_graphics_math_cpu_Vec2$lerpInstance$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec2$lerpInstance$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4$() {
  this.ea = null;
  this.eb = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = $p;
$p.gB = (function() {
  if ((!this.eb)) {
    this.ea = new $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3();
    this.eb = true;
  }
  return this.ea;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$, "trivalibs.graphics.math.cpu.Vec4$", ({
  bP: 1,
  bI: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec4$;
function $m_Ltrivalibs_graphics_math_cpu_Vec4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec4$ = new $c_Ltrivalibs_graphics_math_cpu_Vec4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$$anon$6", ({
  bS: 1,
  bE: 1
}));
function $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__($thiz, name) {
  $thiz.bp = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, name);
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr() {
  this.c = null;
  this.bp = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.ah = (function(value) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return (((("  let " + this.bp) + " = ") + value.c) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  a8: 1,
  K: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$.prototype = $p;
$p.dJ = (function(a, exp) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("pow(" + a.c) + ", ") + exp.c) + ")"));
});
$p.f9 = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("abs(" + a.c) + ")"));
});
$p.gd = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("saturate(" + a.c) + ")"));
});
$p.fg = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.c) + " * 2.0 - 1.0)"));
});
$p.gv = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.c) + " * 0.5 + 0.5)"));
});
$p.fy = (function(a, edge0, edge1) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("smoothstep(" + edge0.c) + ", ") + edge1.c) + ", ") + a.c) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumExt_FloatExpr$", ({
  c0: 1,
  cU: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$.prototype = $p;
$p.f7 = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.c) + " + ") + b.c) + ")"));
});
$p.dw = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.c) + " - ") + b.c) + ")"));
});
$p.f8 = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.c) + " * ") + b.c) + ")"));
});
$p.g1 = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.c) + " / ") + b.c) + ")"));
});
$p.hC = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(-" + a.c) + ")"));
});
$p.f6 = (function(a, b) {
  return this.f7(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().i(b));
});
$p.g3 = (function(a, b) {
  return this.dw(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().i(b));
});
$p.g0 = (function(a, b) {
  return this.g1(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().i(b));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumOps_FloatExpr$", ({
  c1: 1,
  cV: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$.prototype = $p;
$p.bV = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.c + ".x"));
});
$p.dW = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.c + ".y"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2BaseG_FloatExpr_Vec2Expr$", ({
  c2: 1,
  J: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$.prototype = $p;
$p.g6 = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.c) + " + ") + other.c) + ")"));
});
$p.gW = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.c) + " * ") + scalar.c) + ")"));
});
$p.g4 = (function(v, x$2, scalar) {
  return this.gW(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().i(scalar));
});
$p.gj = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.c) + " / ") + other.c) + ")"));
});
$p.gu = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + v.c) + " * 2.0 - 1.0)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  c3: 1,
  bD: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$.prototype = $p;
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3BaseG_FloatExpr_Vec3Expr$", ({
  c4: 1,
  bF: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$.prototype = $p;
$p.gU = (function(v, x$2, b, t) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + v.c) + ", ") + b.c) + ", ") + t.c) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  c5: 1,
  bG: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$.prototype = $p;
$p.hG = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.c + ".w"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4BaseG_FloatExpr_Vec4Expr$", ({
  c6: 1,
  bH: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_CanvasSurface(canvas, format) {
  this.L = null;
  this.cX = null;
  this.cY = null;
  this.cW = null;
  this.ch = null;
  this.L = canvas;
  this.cX = format;
  this.cY = null;
  this.cW = null;
  this.ch = [];
}
$p = $c_Ltrivalibs_graphics_painter_CanvasSurface.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_CanvasSurface;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_CanvasSurface() {
}
$h_Ltrivalibs_graphics_painter_CanvasSurface.prototype = $p;
$p.hH = (function() {
  return (this.L.width | 0);
});
$p.gE = (function() {
  return (this.L.height | 0);
});
$p.ge = (function(painter) {
  var device = painter.b;
  this.cY = device.queue;
  var canvasContext = $m_Ltrivalibs_graphics_painter_WebGPU$().gz(this.L);
  var f$proxy1 = this.cX;
  canvasContext.configure(({
    "device": device,
    "format": f$proxy1
  }));
  this.cW = canvasContext;
  this.L.width = (this.L.clientWidth | 0);
  this.L.height = (this.L.clientHeight | 0);
  var observer = new ResizeObserver(((entries$3) => {
    var entry = entries$3[0];
    var rw = (+entry.contentRect.width);
    var rh = (+entry.contentRect.height);
    if (((rw > 0.0) && (rh > 0.0))) {
      var w = $doubleToInt(rw);
      var h = $doubleToInt(rh);
      if (((w !== (this.L.width | 0)) || (h !== (this.L.height | 0)))) {
        this.L.width = w;
        this.L.height = h;
        var k = 0;
        while ((k < (this.ch.length | 0))) {
          (0, this.ch[k])(w, h);
          k = ((1 + k) | 0);
        }
      }
    }
  }));
  observer.observe(this.L);
});
$p.gg = (function() {
  return this.cW.getCurrentTexture();
});
$p.h7 = (function(encoder) {
  this.cY.submit([encoder.finish()]);
});
$p.h1 = (function(cb) {
  this.ch.push(cb);
});
var $d_Ltrivalibs_graphics_painter_CanvasSurface = new $TypeData().i($c_Ltrivalibs_graphics_painter_CanvasSurface, "trivalibs.graphics.painter.CanvasSurface", ({
  cb: 1,
  cm: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Layer(painter, shade) {
  this.ei = 0;
  this.eh = null;
  this.S = null;
  this.d4 = null;
  this.ck = 0;
  this.bu = 0;
  this.ej = null;
  this.cl = null;
  this.cj = null;
  this.S = shade;
  $f_Ltrivalibs_graphics_painter_Bindable__$init$__V(this);
  this.d4 = null;
  this.ck = (-1);
  this.bu = (-1);
  this.ej = [];
  this.cl = [];
  this.cj = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Layer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Layer;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Layer() {
}
$h_Ltrivalibs_graphics_painter_Layer.prototype = $p;
$p.bN = (function() {
  return this.ei;
});
$p.dC = (function() {
  return this.eh;
});
$p.cA = (function(x$1) {
  this.ei = x$1;
});
$p.dD = (function(x$1) {
  this.eh = x$1;
});
$p.fx = (function() {
  return this.S;
});
$p.ai = (function() {
  return this.ej;
});
$p.aa = (function() {
  return this.cl;
});
$p.fl = (function() {
  return ((this.S.ct !== null) && (((this.cl.length | 0) === 0) || (this.cl[0] === null)));
});
$p.h6 = (function(panel) {
  if (this.fl()) {
    var dict$proxy1 = panel.da;
    var key$proxy1 = this.S.bI[0];
    if ((!(!(!(!(!dict$proxy1.hasOwnProperty(key$proxy1))))))) {
      var items = this.cj.bt;
      if (((items.length | 0) === 0)) {
        return true;
      } else {
        var any = false;
        var i = 0;
        while (((i < (items.length | 0)) && (!any))) {
          var pbs = items[i].aa();
          if ((((pbs.length | 0) === 0) || (pbs[0] === null))) {
            any = true;
          }
          i = ((1 + i) | 0);
        }
        return any;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.hn = (function(blendState, mipSource, mipTarget) {
  if ((blendState !== (void 0))) {
    this.d4 = blendState;
  }
  if ((mipSource !== (void 0))) {
    var v = (mipSource | 0);
    this.ck = v;
  }
  if ((mipTarget !== (void 0))) {
    var v$1 = (mipTarget | 0);
    this.bu = v$1;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Layer = new $TypeData().i($c_Ltrivalibs_graphics_painter_Layer, "trivalibs.graphics.painter.Layer", ({
  cg: 1,
  a9: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.eH = 0;
  this.eG = null;
  this.bJ = null;
  this.aL = null;
  this.de = null;
  this.dd = null;
  this.eI = null;
  this.eJ = null;
  this.df = null;
  this.bJ = form;
  this.aL = shade;
  $f_Ltrivalibs_graphics_painter_Bindable__$init$__V(this);
  this.de = "none";
  this.dd = null;
  this.eI = [];
  this.eJ = [];
  this.df = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.bN = (function() {
  return this.eH;
});
$p.dC = (function() {
  return this.eG;
});
$p.cA = (function(x$1) {
  this.eH = x$1;
});
$p.dD = (function(x$1) {
  this.eG = x$1;
});
$p.fx = (function() {
  return this.aL;
});
$p.ai = (function() {
  return this.eI;
});
$p.aa = (function() {
  return this.eJ;
});
$p.ho = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.de = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.dd = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  cl: 1,
  a9: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform(inner) {
  this.au = null;
  this.au = inner;
}
$p = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform() {
}
$h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = $p;
$p.P = (function() {
  return this.au.P();
});
var $d_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform, "trivalibs.graphics.shader.FragmentUniform$given_WGSLType_FragmentUniform", ({
  ct: 1,
  y: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.dj = null;
  this.dj = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.P = (function() {
  return this.dj.P();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  cv: 1,
  y: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.ds = null;
  this.ds = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.aP = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.ds === "") ? name : ((this.ds + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  cD: 1,
  A: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.dt = null;
  this.dt = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.o = (function(name) {
  return ((this.dt === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.dt + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  cE: 1,
  A: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor() {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor, "trivalibs.graphics.shader.dsl.TypedPanelAccessor", ({
  cF: 1,
  A: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.eM = null;
  this.eL = null;
  this.eM = prefix;
  this.eL = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.aP = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.eM + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  cH: 1,
  A: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$.prototype = $p;
$p.P = (function() {
  return "sampler";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$, "trivalibs.graphics.shader.types$package$given_WGSLType_Sampler$", ({
  cP: 1,
  y: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$.prototype = $p;
$p.P = (function() {
  return "vec2<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec2$", ({
  cQ: 1,
  y: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$.prototype = $p;
$p.P = (function() {
  return "vec3<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec3$", ({
  cR: 1,
  y: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
}
class $c_jl_Exception extends $c_jl_Throwable {
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.F;
      break;
    }
    case 1: {
      return $thiz.a1;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $f_s_Product3__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.bf;
      break;
    }
    case 1: {
      return $thiz.bg;
      break;
    }
    case 2: {
      return $thiz.bh;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 2)"));
    }
  }
}
function $f_s_Product4__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.bW;
      break;
    }
    case 1: {
      return $thiz.bX;
      break;
    }
    case 2: {
      return $thiz.bY;
      break;
    }
    case 3: {
      return $thiz.bZ;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 3)"));
    }
  }
}
/** @constructor */
function $c_sc_Iterator$() {
  this.c1 = null;
  $n_sc_Iterator$ = this;
  this.c1 = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  aE: 1,
  a: 1,
  aD: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.e1 = null;
  this.e1 = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.i = (function(x0) {
  return (0, this.e1)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  b1: 1,
  b0: 1,
  g: 1
}));
/** @constructor */
function $c_sjs_js_Any$() {
}
$p = $c_sjs_js_Any$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
}
$h_sjs_js_Any$.prototype = $p;
$p.b9 = (function(f) {
  return ((arg1$2) => f.i(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  b8: 1,
  bb: 1,
  bc: 1
}));
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
}
var $b_Ltrivalibs_bufferdata_BufferView;
function $a_Ltrivalibs_bufferdata_BufferView() {
  if ((!$b_Ltrivalibs_bufferdata_BufferView)) {
    $b_Ltrivalibs_bufferdata_BufferView = class $b_Ltrivalibs_bufferdata_BufferView extends Object {
      constructor(arg, arg$2) {
        var dv = null;
        var off = 0;
        dv = arg;
        off = (arg$2 | 0);
        super();
        Object.defineProperty(this, "dv", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "off", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0
        }));
        this.dv = dv;
        this.off = off;
      }
    };
  }
  return $b_Ltrivalibs_bufferdata_BufferView;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3.prototype = $p;
$p.i = (function(x) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec4((+x.bW), (+x.bX), (+x.bY), (+x.bZ));
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3, "trivalibs.graphics.math.cpu.Vec4$$anon$3", ({
  bQ: 1,
  O: 1,
  g: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_VarExpr(name) {
  this.c = null;
  this.bp = null;
  this.cP = false;
  $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(this, name);
  this.cP = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_VarExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_LetExpr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_VarExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_VarExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_VarExpr.prototype = $p;
$p.ah = (function(value) {
  if ((!this.cP)) {
    this.cP = true;
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return (((("  var " + this.bp) + " = ") + value.c) + ";");
  } else {
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return (((("  " + this.bp) + " = ") + value.c) + ";");
  }
});
var $d_Ltrivalibs_graphics_math_gpu_VarExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_VarExpr, "trivalibs.graphics.math.gpu.VarExpr", ({
  bU: 1,
  a8: 1,
  K: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1.prototype = $p;
$p.i = (function(x) {
  return $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().dU((+x));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  bZ: 1,
  O: 1,
  g: 1
}));
var $b_Ltrivalibs_graphics_painter_BlendFn;
function $a_Ltrivalibs_graphics_painter_BlendFn() {
  if ((!$b_Ltrivalibs_graphics_painter_BlendFn)) {
    $b_Ltrivalibs_graphics_painter_BlendFn = class $b_Ltrivalibs_graphics_painter_BlendFn extends Object {
      constructor(arg, arg$2, ...rest) {
        var srcFactor = null;
        var dstFactor = null;
        var operation = null;
        srcFactor = arg;
        dstFactor = arg$2;
        operation = ((rest[0] === (void 0)) ? "add" : rest[0]);
        super();
        Object.defineProperty(this, "srcFactor", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "dstFactor", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "operation", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        this.srcFactor = srcFactor;
        this.dstFactor = dstFactor;
        this.operation = operation;
      }
    };
  }
  return $b_Ltrivalibs_graphics_painter_BlendFn;
}
var $b_Ltrivalibs_graphics_painter_BlendState;
function $a_Ltrivalibs_graphics_painter_BlendState() {
  if ((!$b_Ltrivalibs_graphics_painter_BlendState)) {
    $b_Ltrivalibs_graphics_painter_BlendState = class $b_Ltrivalibs_graphics_painter_BlendState extends Object {
      constructor(arg, arg$2) {
        var color = null;
        var alpha = null;
        color = arg;
        alpha = arg$2;
        super();
        Object.defineProperty(this, "color", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "alpha", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        this.color = color;
        this.alpha = alpha;
      }
    };
  }
  return $b_Ltrivalibs_graphics_painter_BlendState;
}
var $b_Ltrivalibs_graphics_painter_PanelBinding;
function $a_Ltrivalibs_graphics_painter_PanelBinding() {
  if ((!$b_Ltrivalibs_graphics_painter_PanelBinding)) {
    $b_Ltrivalibs_graphics_painter_PanelBinding = class $b_Ltrivalibs_graphics_painter_PanelBinding extends Object {
      constructor(arg, ...rest) {
        var panel = null;
        var index = 0;
        var mipLevel = 0;
        var depth = false;
        panel = arg;
        index = ((rest[0] === (void 0)) ? 0 : (rest[0] | 0));
        mipLevel = ((rest[1] === (void 0)) ? (-1) : (rest[1] | 0));
        depth = ((rest[2] !== (void 0)) && (!(!rest[2])));
        super();
        Object.defineProperty(this, "panel", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "index", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0
        }));
        Object.defineProperty(this, "mipLevel", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0
        }));
        Object.defineProperty(this, "depth", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": false
        }));
        this.panel = panel;
        this.index = index;
        this.mipLevel = mipLevel;
        this.depth = depth;
      }
    };
  }
  return $b_Ltrivalibs_graphics_painter_PanelBinding;
}
var $b_Ltrivalibs_graphics_shader_dsl_WgslFnData;
function $a_Ltrivalibs_graphics_shader_dsl_WgslFnData() {
  if ((!$b_Ltrivalibs_graphics_shader_dsl_WgslFnData)) {
    $b_Ltrivalibs_graphics_shader_dsl_WgslFnData = class $b_Ltrivalibs_graphics_shader_dsl_WgslFnData extends Object {
      constructor(arg, arg$2, ...rest) {
        var name = null;
        var src = null;
        var deps = null;
        name = arg;
        src = arg$2;
        deps = ((rest[0] === (void 0)) ? $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$().g2() : rest[0]);
        super();
        Object.defineProperty(this, "name", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "src", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "deps", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        this.name = name;
        this.src = src;
        this.deps = deps;
      }
    };
  }
  return $b_Ltrivalibs_graphics_shader_dsl_WgslFnData;
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  ac: 1,
  a: 1,
  e: 1,
  f: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  ae: 1,
  a: 1,
  e: 1,
  f: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.z = null;
  this.z = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.p = (function() {
  return this.z;
});
$p.t = (function() {
  return this.z.length;
});
$p.fd = (function(index) {
  return this.z.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  am: 1,
  E: 1,
  aa: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterator() {
}
$p = $c_sc_AbstractIterator.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $p;
$p.a9 = (function() {
  return (-1);
});
$p.dy = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.a0 = (function() {
  return this;
});
$p.p = (function() {
  return "<iterator>";
});
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$.prototype = $p;
$p.w = (function(v) {
  return v.r;
});
$p.x = (function(v) {
  return v.s;
});
$p.fH = (function(v, value) {
  v.r = value;
});
$p.fJ = (function(v, value) {
  v.s = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$, "trivalibs.graphics.math.cpu.Vec2$given_Vec2Mutable_Vec2$", ({
  bL: 1,
  J: 1,
  a6: 1,
  a7: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
function $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$ = new $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$.prototype = $p;
$p.hJ = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.hL = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.hK = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (v.off | 0);
  v.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.hM = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy4 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy4, value$proxy2, true);
});
$p.w = (function(v) {
  return this.hJ(v);
});
$p.x = (function(v) {
  return this.hL(v);
});
$p.fH = (function(v, value) {
  this.hK(v, value);
});
$p.fJ = (function(v, value) {
  this.hM(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$vec2MutableBuffer$", ({
  bT: 1,
  J: 1,
  a6: 1,
  a7: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T($thiz, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, vertexBody, fragmentBody, fragBuiltinParams) {
  var f$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildVertexMain__T__T($thiz, vertexBody);
  var g$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T__T($thiz, fragmentBody, fragBuiltinParams);
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.di, f$proxy1, g$proxy1];
  var parts = [];
  var i = 0;
  while ((i < (all.length | 0))) {
    if ((all[i].length > 0)) {
      parts.push(all[i]);
    }
    i = ((1 + i) | 0);
  }
  return parts.join("\n\n");
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildVertexMain__T__T($thiz, body) {
  return (("@vertex\nfn vs_main(in: VertexInput) -> VertexOutput {\n  var out: VertexOutput;\n" + body) + "\n  return out;\n}");
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T__T($thiz, body, builtinParams) {
  return (((("@fragment\nfn fs_main(in: VertexOutput" + builtinParams) + ") -> FragmentOutput {\n  var out: FragmentOutput;\n") + body) + "\n  return out;\n}");
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_ShaderDef(vertexBody, fragmentBody, helperFns) {
  this.b6 = null;
  this.b5 = null;
  this.di = null;
  this.b6 = vertexBody;
  this.b5 = fragmentBody;
  this.di = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.ba = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.O = (function() {
  return $m_s_util_hashing_MurmurHash3$().bU(this, (-1488826029), true);
});
$p.p = (function() {
  return $m_sr_ScalaRunTime$().g5(this);
});
$p.ax = (function() {
  return 3;
});
$p.az = (function() {
  return "ShaderDef";
});
$p.ay = (function(n) {
  switch (n) {
    case 0: {
      return this.b6;
      break;
    }
    case 1: {
      return this.b5;
      break;
    }
    case 2: {
      return this.di;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  cu: 1,
  d: 1,
  l: 1,
  a: 1
}));
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  ab: 1,
  i: 1,
  h: 1,
  j: 1,
  a: 1
}));
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  ad: 1,
  k: 1,
  a: 1,
  e: 1,
  f: 1
}), ((x) => $isByte(x)));
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().i($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  ah: 1,
  i: 1,
  h: 1,
  j: 1,
  a: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IndexOutOfBoundsException__I__($thiz, index) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, ("Index out of range: " + index), null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  ai: 1,
  i: 1,
  h: 1,
  j: 1,
  a: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  aj: 1,
  i: 1,
  h: 1,
  j: 1,
  a: 1
}));
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  ak: 1,
  k: 1,
  a: 1,
  e: 1,
  f: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  an: 1,
  i: 1,
  h: 1,
  j: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  ap: 1,
  i: 1,
  h: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.be = 0;
  this.dZ = 0;
  this.dY = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.dY = outer;
  this.be = 0;
  this.dZ = outer.ax();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.N = (function() {
  return (this.be < this.dZ);
});
$p.E = (function() {
  var result = this.dY.ay(this.be);
  this.be = ((1 + this.be) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  ar: 1,
  u: 1,
  b: 1,
  c: 1,
  w: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.F = null;
  this.a1 = null;
  this.F = _1;
  this.a1 = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.ax = (function() {
  return 2;
});
$p.ay = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.p = (function() {
  return (((("(" + this.F) + ",") + this.a1) + ")");
});
$p.az = (function() {
  return "Tuple2";
});
$p.ba = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.O = (function() {
  return $m_s_util_hashing_MurmurHash3$().bU(this, (-116390334), true);
});
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  av: 1,
  as: 1,
  l: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.bf = null;
  this.bg = null;
  this.bh = null;
  this.bf = _1;
  this.bg = _2;
  this.bh = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.ba = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.ax = (function() {
  return 3;
});
$p.ay = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.O = (function() {
  return $m_s_util_hashing_MurmurHash3$().bU(this, (-192629203), true);
});
$p.az = (function() {
  return "Tuple3";
});
$p.p = (function() {
  return (((((("(" + this.bf) + ",") + this.bg) + ",") + this.bh) + ")");
});
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  aw: 1,
  d: 1,
  l: 1,
  at: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.bW = null;
  this.bX = null;
  this.bY = null;
  this.bZ = null;
  this.bW = _1;
  this.bX = _2;
  this.bY = _3;
  this.bZ = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.ba = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.ax = (function() {
  return 4;
});
$p.ay = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.O = (function() {
  return $m_s_util_hashing_MurmurHash3$().bU(this, (-1542739752), true);
});
$p.az = (function() {
  return "Tuple4";
});
$p.p = (function() {
  return (((((((("(" + this.bW) + ",") + this.bX) + ",") + this.bY) + ",") + this.bZ) + ")");
});
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  ax: 1,
  d: 1,
  l: 1,
  au: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.bO() + "("), ", ", ")");
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $p;
$p.N = (function() {
  return false;
});
$p.gX = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.a9 = (function() {
  return 0;
});
$p.E = (function() {
  this.gX();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  aF: 1,
  u: 1,
  b: 1,
  c: 1,
  w: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.go(n);
  if (skipped.bR()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.gD();
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.e3 = null;
  this.bj = 0;
  this.e2 = 0;
  this.e3 = x$1;
  this.bj = 0;
  this.e2 = x$1.ax();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.N = (function() {
  return (this.bj < this.e2);
});
$p.E = (function() {
  var result = this.e3.ay(this.bj);
  this.bj = ((1 + this.bj) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  b6: 1,
  u: 1,
  b: 1,
  c: 1,
  w: 1
}));
function $f_jl_Double__hashCode__I($thiz) {
  var valueInt = ($thiz | 0);
  if (((valueInt === $thiz) && ((1.0 / $thiz) !== (-Infinity)))) {
    return valueInt;
  } else if (($thiz !== $thiz)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, $thiz, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.L)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  L: 1,
  k: 1,
  a: 1,
  e: 1,
  f: 1,
  r: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  var valueInt = (value | 0);
  if (((valueInt === value) && ((1.0 / value) !== (-Infinity)))) {
    return valueInt;
  } else if ((value !== value)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, value, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  ag: 1,
  k: 1,
  a: 1,
  e: 1,
  f: 1,
  r: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Integer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.M)));
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  M: 1,
  k: 1,
  a: 1,
  e: 1,
  f: 1,
  r: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__hashCode__I($thiz, $thizhi) {
  return ($thiz ^ $thizhi);
}
function $f_jl_Long__toString__T($thiz, $thizhi) {
  return $m_RTLong$().fA($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.N)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  N: 1,
  k: 1,
  a: 1,
  e: 1,
  f: 1,
  r: 1
}), ((x) => (x instanceof $Long)));
function $f_T__hashCode__I($thiz) {
  var n = $thiz.length;
  var h = 0;
  var i = 0;
  while ((i !== n)) {
    h = (((((h << 5) - h) | 0) + $thiz.charCodeAt(i)) | 0);
    i = ((1 + i) | 0);
  }
  return h;
}
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().hA(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  al: 1,
  a: 1,
  e: 1,
  E: 1,
  f: 1,
  r: 1
}), ((x) => ((typeof x) === "string")));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$p = $c_sc_AbstractIterable.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $p;
$p.dy = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.bO = (function() {
  return this.bb();
});
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.e0 = null;
  this.c0 = 0;
  this.aQ = 0;
  this.e0 = self;
  this.c0 = 0;
  this.aQ = self.t();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.a9 = (function() {
  return this.aQ;
});
$p.N = (function() {
  return (this.aQ > 0);
});
$p.E = (function() {
  if ((this.aQ > 0)) {
    var r = this.e0.J(this.c0);
    this.c0 = ((1 + this.c0) | 0);
    this.aQ = ((this.aQ - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().c1.E();
  }
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  aC: 1,
  u: 1,
  b: 1,
  c: 1,
  w: 1,
  a: 1
}));
/** @constructor */
function $c_sci_RangeIterator(start, step, lastElement, initiallyEmpty) {
  this.cI = 0;
  this.cH = 0;
  this.bi = false;
  this.c3 = 0;
  this.cI = step;
  this.cH = lastElement;
  this.bi = (!initiallyEmpty);
  this.c3 = start;
}
$p = $c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
}
$h_sci_RangeIterator.prototype = $p;
$p.a9 = (function() {
  return (this.bi ? ((1 + ((((this.cH - this.c3) | 0) / $checkIntDivisor(this.cI)) | 0)) | 0) : 0);
});
$p.N = (function() {
  return this.bi;
});
$p.gY = (function() {
  if ((!this.bi)) {
    $m_sc_Iterator$().c1.E();
  }
  var value = this.c3;
  this.bi = (value !== this.cH);
  this.c3 = ((value + this.cI) | 0);
  return value;
});
$p.E = (function() {
  return this.gY();
});
var $d_sci_RangeIterator = new $TypeData().i($c_sci_RangeIterator, "scala.collection.immutable.RangeIterator", ({
  aT: 1,
  u: 1,
  b: 1,
  c: 1,
  w: 1,
  a: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.bb() + "(<not computed>)");
}
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.u = null;
    this.u = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  dG() {
    return $dp_toString__T(this.u);
  }
  az() {
    return "JavaScriptException";
  }
  ax() {
    return 1;
  }
  ay(x$1) {
    return ((x$1 === 0) ? this.u : $m_sr_Statics$().gK(x$1));
  }
  ba() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  O() {
    return $m_s_util_hashing_MurmurHash3$().bU(this, 1744042595, true);
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  a3: 1,
  i: 1,
  h: 1,
  j: 1,
  a: 1,
  l: 1,
  d: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.bR())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.hv();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_sc_AbstractView() {
}
$p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $p;
$p.p = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_sc_AbstractSeq() {
}
$p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $p;
$p.O = (function() {
  return $m_s_util_hashing_MurmurHash3$().dM(this);
});
$p.p = (function() {
  return $f_sc_Iterable__toString__T(this);
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$p = $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $p;
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.m)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.m)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.c2 = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.c2 = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.J = (function(idx) {
  return this.c2.J(idx);
});
$p.t = (function() {
  return this.c2.t();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.c2 = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.a9 = (function() {
  return this.t();
});
$p.a0 = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.bb = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  aB: 1,
  aJ: 1,
  ay: 1,
  az: 1,
  t: 1,
  b: 1,
  c: 1,
  p: 1,
  o: 1,
  n: 1,
  a: 1,
  aL: 1,
  q: 1,
  aI: 1,
  v: 1,
  aA: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$p = $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $p;
/** @constructor */
function $c_scm_AbstractSeq() {
}
$p = $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $p;
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.cJ = null;
  this.cJ = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.a0 = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.a9 = (function() {
  return this.t();
});
$p.O = (function() {
  return $m_s_util_hashing_MurmurHash3$().dM(this);
});
$p.p = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.bP = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.dy = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.t = (function() {
  return (this.cJ.length | 0);
});
$p.J = (function(idx) {
  return this.cJ[idx];
});
$p.bO = (function() {
  return "WrappedVarArgs";
});
$p.i = (function(v1) {
  return this.J((v1 | 0));
});
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  bf: 1,
  Q: 1,
  b: 1,
  c: 1,
  p: 1,
  o: 1,
  n: 1,
  F: 1,
  g: 1,
  s: 1,
  q: 1,
  d: 1,
  x: 1,
  H: 1,
  G: 1,
  v: 1,
  m: 1,
  R: 1,
  I: 1,
  C: 1,
  D: 1,
  a: 1
}));
/** @constructor */
function $c_scm_AbstractBuffer() {
}
$p = $c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
$h_scm_AbstractBuffer.prototype = $p;
function $p_sci_Range__isInexact$1__Z($thiz) {
  return ($thiz.aO() ? ($thiz.aB !== $thiz.aA) : ((($thiz.aB + $thiz.Q) | 0) !== $thiz.aA));
}
function $ct_sci_Range__I__I__I__($thiz, start, end, step) {
  $thiz.a2 = start;
  $thiz.aA = end;
  $thiz.Q = step;
  $thiz.ab = ($thiz.aO() ? ((step >= 0) ? (start > end) : (start < end)) : ((step >= 0) ? (start >= end) : (start <= end)));
  if ((step === 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "step cannot be 0.");
  }
  var stepSign = (step >> 31);
  var gap = (((((end - start) | 0) ^ stepSign) - stepSign) | 0);
  var absStep = (((step ^ stepSign) - stepSign) | 0);
  var div = (((gap >>> 0) / ($checkIntDivisor(absStep) >>> 0)) | 0);
  $thiz.al = (($thiz.aO() || (Math.imul(absStep, div) !== gap)) ? ((1 + div) | 0) : div);
  if ((((-3) & ((1 + step) | 0)) === 0)) {
    var $x_1 = ($thiz.aO() ? end : ((end - step) | 0));
  } else {
    var n = (($thiz.al - 1) | 0);
    var $x_1 = (($thiz.a2 + Math.imul($thiz.Q, n)) | 0);
  }
  $thiz.aB = $x_1;
  return $thiz;
}
/** @constructor */
function $c_sci_Range() {
  this.a2 = 0;
  this.aA = 0;
  this.Q = 0;
  this.ab = false;
  this.al = 0;
  this.aB = 0;
}
$p = $c_sci_Range.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Range;
/** @constructor */
function $h_sci_Range() {
}
$h_sci_Range.prototype = $p;
$p.bb = (function() {
  return "IndexedSeq";
});
$p.a9 = (function() {
  return this.t();
});
$p.a0 = (function() {
  return new $c_sci_RangeIterator(this.a2, this.Q, this.aB, this.ab);
});
$p.t = (function() {
  if (this.ab) {
    return 0;
  } else {
    if ((this.al <= 0)) {
      $m_sci_Range$().fw(this.a2, this.aA, this.Q, this.aO());
    }
    return this.al;
  }
});
$p.hk = (function() {
  if (((this.al <= 0) && (!this.ab))) {
    $m_sci_Range$().fw(this.a2, this.aA, this.Q, this.aO());
  }
});
$p.bP = (function(f) {
  if ((!this.ab)) {
    var i = this.a2;
    while (true) {
      f.i(i);
      if ((i === this.aB)) {
        return (void 0);
      }
      i = ((i + this.Q) | 0);
    }
  }
});
$p.O = (function() {
  if ((this.t() >= 2)) {
    var this$1 = $m_s_util_hashing_MurmurHash3$();
    return this$1.ft(this.a2, this.Q, this.aB, this$1.bl);
  } else {
    return $m_s_util_hashing_MurmurHash3$().dM(this);
  }
});
$p.p = (function() {
  var preposition = (this.aO() ? "to" : "until");
  var stepped = ((this.Q === 1) ? "" : (" by " + this.Q));
  return ((((((((this.ab ? "empty " : ($p_sci_Range__isInexact$1__Z(this) ? "inexact " : "")) + "Range ") + this.a2) + " ") + preposition) + " ") + this.aA) + stepped);
});
$p.bO = (function() {
  return "Range";
});
$p.fa = (function(idx) {
  if ((((idx < 0) || (idx >= this.al)) || this.ab)) {
    this.hk();
    var max = (this.ab ? (-1) : ((this.al - 1) | 0));
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((idx + " is out of bounds (min 0, max ") + max) + ")"));
  } else {
    return ((this.a2 + Math.imul(this.Q, idx)) | 0);
  }
});
$p.i = (function(v1) {
  return this.fa((v1 | 0));
});
$p.J = (function(i) {
  return this.fa(i);
});
/** @constructor */
function $c_sci_Range$Exclusive(start, end, step) {
  this.a2 = 0;
  this.aA = 0;
  this.Q = 0;
  this.ab = false;
  this.al = 0;
  this.aB = 0;
  $ct_sci_Range__I__I__I__(this, start, end, step);
}
$p = $c_sci_Range$Exclusive.prototype = new $h_sci_Range();
$p.constructor = $c_sci_Range$Exclusive;
/** @constructor */
function $h_sci_Range$Exclusive() {
}
$h_sci_Range$Exclusive.prototype = $p;
$p.aO = (function() {
  return false;
});
var $d_sci_Range$Exclusive = new $TypeData().i($c_sci_Range$Exclusive, "scala.collection.immutable.Range$Exclusive", ({
  aS: 1,
  aQ: 1,
  P: 1,
  B: 1,
  t: 1,
  b: 1,
  c: 1,
  p: 1,
  o: 1,
  n: 1,
  g: 1,
  s: 1,
  q: 1,
  d: 1,
  x: 1,
  F: 1,
  H: 1,
  G: 1,
  Q: 1,
  v: 1,
  m: 1,
  R: 1,
  I: 1,
  C: 1,
  D: 1,
  a: 1
}));
/** @constructor */
function $c_sci_List() {
}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $p;
$p.J = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.bb = (function() {
  return "LinearSeq";
});
$p.bR = (function() {
  return (this === $m_sci_Nil$());
});
$p.bP = (function(f) {
  var these = this;
  while ((!these.bR())) {
    f.i(these.dH());
    these.dS();
  }
});
$p.t = (function() {
  var these = this;
  var len = 0;
  while ((!these.bR())) {
    len = ((1 + len) | 0);
    these.dS();
  }
  return len;
});
$p.bO = (function() {
  return "List";
});
$p.go = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.i = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.S)));
}
/** @constructor */
function $c_sci_Nil$() {
  $n_sci_Nil$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_Nil$.prototype = new $h_sci_List();
$p.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $p;
$p.ba = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.ax = (function() {
  return 0;
});
$p.az = (function() {
  return "Nil";
});
$p.ay = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.dH = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.dS = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.a9 = (function() {
  return 0;
});
$p.a0 = (function() {
  return $m_sc_Iterator$().c1;
});
$p.gD = (function() {
  this.dH();
});
$p.hv = (function() {
  this.dS();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  aP: 1,
  S: 1,
  P: 1,
  B: 1,
  t: 1,
  b: 1,
  c: 1,
  p: 1,
  o: 1,
  n: 1,
  g: 1,
  s: 1,
  q: 1,
  d: 1,
  x: 1,
  F: 1,
  H: 1,
  G: 1,
  aH: 1,
  aG: 1,
  aO: 1,
  aN: 1,
  C: 1,
  D: 1,
  aK: 1,
  I: 1,
  a: 1,
  aM: 1,
  l: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.am = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.am = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.a0 = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.bb = (function() {
  return "IndexedSeq";
});
$p.t = (function() {
  return this.am.t();
});
$p.a9 = (function() {
  return this.am.t();
});
$p.p = (function() {
  return this.am.z;
});
$p.J = (function(i) {
  return $bC(this.am.fd(i));
});
$p.i = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.am.fd(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  aZ: 1,
  T: 1,
  B: 1,
  t: 1,
  b: 1,
  c: 1,
  p: 1,
  o: 1,
  n: 1,
  g: 1,
  s: 1,
  q: 1,
  d: 1,
  x: 1,
  a0: 1,
  z: 1,
  W: 1,
  a2: 1,
  a1: 1,
  V: 1,
  X: 1,
  U: 1,
  aX: 1,
  v: 1,
  m: 1,
  Z: 1,
  Y: 1,
  E: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.bk = null;
  this.bk = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.bb = (function() {
  return "IndexedSeq";
});
$p.a0 = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.J = (function(index) {
  return this.bk[index];
});
$p.t = (function() {
  return (this.bk.length | 0);
});
$p.a9 = (function() {
  return (this.bk.length | 0);
});
$p.bO = (function() {
  return "WrappedArray";
});
$p.i = (function(v1) {
  var index = (v1 | 0);
  return this.bk[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  bd: 1,
  aU: 1,
  T: 1,
  B: 1,
  t: 1,
  b: 1,
  c: 1,
  p: 1,
  o: 1,
  n: 1,
  g: 1,
  s: 1,
  q: 1,
  d: 1,
  x: 1,
  a0: 1,
  z: 1,
  W: 1,
  a2: 1,
  a1: 1,
  V: 1,
  X: 1,
  aY: 1,
  aV: 1,
  D: 1,
  C: 1,
  Y: 1,
  v: 1,
  m: 1,
  Z: 1,
  aW: 1,
  U: 1,
  a: 1
}));
let $e_sketch = (function(arg) {
  $m_Lsketches_paintings_tile\uff3fstrokes_TileStrokesSketch$package$().hx(arg);
});
export { $e_sketch as sketch };
