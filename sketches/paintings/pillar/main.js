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
  return (arg0.$classData.Z ? arg0.s() : $objectClone(arg0));
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
        return null.d1();
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
        return instance.J();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.J.call(instance);
      }
    }
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
$p.J = (function() {
  return $systemIdentityHashCode(this);
});
$p.t = (function() {
  var i = this.J();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.t();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = null;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.z = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.s = (function() {
  return new $ac_O(this.a.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = false;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.z = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.s = (function() {
  return new $ac_Z(this.a.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Uint16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.z = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.s = (function() {
  return new $ac_C(this.a.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int8Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.z = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.s = (function() {
  return new $ac_B(this.a.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.z = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.s = (function() {
  return new $ac_S(this.a.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.z = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.s = (function() {
  return new $ac_I(this.a.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.z = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.s = (function() {
  return new $ac_J(this.a.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.z = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.s = (function() {
  return new $ac_F(this.a.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float64Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.z = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.s = (function() {
  return new $ac_D(this.a.slice());
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
    m: 1,
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
    var u = result.a;
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
      this.a = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.a[i] = null;
      }
    } else {
      this.a = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.z = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.s = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    m: 1,
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
  R: 1
}), ((x) => (x === (void 0))));
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().cz(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().cy(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().c1(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().c0(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().bA(value);
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
  return $m_RTLong$().bM(lo, hi);
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
$p.bM = (function(lo, hi) {
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
$p.bA = (function(value) {
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
$p.c0 = (function(alo, ahi, blo, bhi) {
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
$p.c1 = (function(alo, ahi, blo, bhi) {
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
$p.cy = (function(alo, ahi, blo, bhi) {
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
$p.cz = (function(alo, ahi, blo, bhi) {
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
  T: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.a6() === 0) ? (("" + start) + end) : $thiz.bu($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).A.f);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.A;
  if ((start.length !== 0)) {
    jsb.f = (("" + jsb.f) + start);
  }
  var it = $thiz.S();
  if (it.D()) {
    var obj = it.y();
    jsb.f = (("" + jsb.f) + obj);
    while (it.D()) {
      if ((sep.length !== 0)) {
        jsb.f = (("" + jsb.f) + sep);
      }
      var obj$1 = it.y();
      jsb.f = (("" + jsb.f) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.f = (("" + jsb.f) + end);
  }
  return b;
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
$p.cl = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.c2 = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().bA(dv);
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
$p.l = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.c2((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.cl($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.ch = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  ay: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
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
$p.d = (function(hash, data) {
  var h = this.bG(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.bG = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.x = (function(hash, length) {
  return this.aw((hash ^ length));
});
$p.aw = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.cw = (function(x, seed, ignorePrefix) {
  var arr = x.bI();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.aV()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.d(h, $f_T__hashCode__I(x.aV()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.d(h, $m_sr_Statics$().l(x.bJ(i)));
      i = ((1 + i) | 0);
    }
    return this.x(h, arr);
  }
});
$p.cL = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.S();
  while (iterator.D()) {
    var x = iterator.y();
    var h = $m_sr_Statics$().l(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.d(h$2, a);
  h$2 = this.d(h$2, b);
  h$2 = this.bG(h$2, c);
  return this.x(h$2, n);
});
$p.cq = (function(xs, seed) {
  var it = xs.S();
  var h = seed;
  if ((!it.D())) {
    return this.x(h, 0);
  }
  var x0 = it.y();
  if ((!it.D())) {
    return this.x(this.d(h, $m_sr_Statics$().l(x0)), 1);
  }
  var x1 = it.y();
  var initial = $m_sr_Statics$().l(x0);
  h = this.d(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().l(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.D()) {
    h = this.d(h, prev);
    var hash = $m_sr_Statics$().l(it.y());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.d(h, hash);
      i = ((1 + i) | 0);
      while (it.D()) {
        h = this.d(h, $m_sr_Statics$().l(it.y()));
        i = ((1 + i) | 0);
      }
      return this.x(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.aw(this.d(this.d(h0, rangeDiff), prev));
});
$p.cx = (function(start, step, last, seed) {
  return this.aw(this.d(this.d(this.d(seed, start), step), last));
});
$p.cd = (function(a, seed) {
  var h = seed;
  var l = a.q();
  switch (l) {
    case 0: {
      return this.x(h, 0);
      break;
    }
    case 1: {
      return this.x(this.d(h, $m_sr_Statics$().l(a.w(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().l(a.w(0));
      h = this.d(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().l(a.w(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.d(h, prev);
        var hash = $m_sr_Statics$().l(a.w(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.d(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.d(h, $m_sr_Statics$().l(a.w(i)));
            i = ((1 + i) | 0);
          }
          return this.x(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.aw(this.d(this.d(h0, rangeDiff), prev));
    }
  }
});
$p.ck = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.av())) {
    elems.bC();
  }
  return ((rangeState === 2) ? this.cx(initial, rangeDiff, prev, seed) : this.x(h, n));
});
/** @constructor */
function $c_Lsketches_paintings_pillar_Pillar$package$() {
  this.bP = 0;
  this.bO = 0;
  this.bP = 640;
  this.bO = 1000;
}
$p = $c_Lsketches_paintings_pillar_Pillar$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_paintings_pillar_Pillar$package$;
/** @constructor */
function $h_Lsketches_paintings_pillar_Pillar$package$() {
}
$h_Lsketches_paintings_pillar_Pillar$package$.prototype = $p;
$p.ct = (function(canvas) {
  $m_Ltrivalibs_graphics_painter_Painter$().ce(canvas, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$3) => {
    var panel = p$3.cs(640, 1000, ($m_Ltrivalibs_graphics_math_cpu_Vec4$().c7(), new $c_Ltrivalibs_graphics_math_cpu_Vec4(0.9, 0.88, 0.84, 1.0)), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    p$3.cr(panel);
  })));
});
var $d_Lsketches_paintings_pillar_Pillar$package$ = new $TypeData().i($c_Lsketches_paintings_pillar_Pillar$package$, "sketches.paintings.pillar.Pillar$package$", ({
  aE: 1
}));
var $n_Lsketches_paintings_pillar_Pillar$package$;
function $m_Lsketches_paintings_pillar_Pillar$package$() {
  if ((!$n_Lsketches_paintings_pillar_Pillar$package$)) {
    $n_Lsketches_paintings_pillar_Pillar$package$ = new $c_Lsketches_paintings_pillar_Pillar$package$();
  }
  return $n_Lsketches_paintings_pillar_Pillar$package$;
}
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aF)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4(x, y, z, w) {
  this.ac = 0.0;
  this.ad = 0.0;
  this.ae = 0.0;
  this.ab = 0.0;
  this.ac = x;
  this.ad = y;
  this.ae = z;
  this.ab = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4, "trivalibs.graphics.math.cpu.Vec4", ({
  aH: 1
}));
function $p_Ltrivalibs_graphics_painter_CanvasSurface$__preferredFormat__T($thiz) {
  var gpu = $m_Ltrivalibs_graphics_painter_WebGPU$().bB();
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
$p.bT = (function(canvas, format) {
  return new $c_Ltrivalibs_graphics_painter_CanvasSurface(canvas, ((format === (void 0)) ? $p_Ltrivalibs_graphics_painter_CanvasSurface$__preferredFormat__T(this) : format));
});
var $d_Ltrivalibs_graphics_painter_CanvasSurface$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_CanvasSurface$, "trivalibs.graphics.painter.CanvasSurface$", ({
  aL: 1
}));
var $n_Ltrivalibs_graphics_painter_CanvasSurface$;
function $m_Ltrivalibs_graphics_painter_CanvasSurface$() {
  if ((!$n_Ltrivalibs_graphics_painter_CanvasSurface$)) {
    $n_Ltrivalibs_graphics_painter_CanvasSurface$ = new $c_Ltrivalibs_graphics_painter_CanvasSurface$();
  }
  return $n_Ltrivalibs_graphics_painter_CanvasSurface$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_LayerBindCache(panelId, epoch, valueGroup, panelGroup) {
  this.b6 = 0;
  this.b5 = 0;
  this.aD = null;
  this.aC = null;
  this.b6 = panelId;
  this.b5 = epoch;
  this.aD = valueGroup;
  this.aC = panelGroup;
}
$p = $c_Ltrivalibs_graphics_painter_LayerBindCache.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_LayerBindCache;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_LayerBindCache() {
}
$h_Ltrivalibs_graphics_painter_LayerBindCache.prototype = $p;
var $d_Ltrivalibs_graphics_painter_LayerBindCache = new $TypeData().i($c_Ltrivalibs_graphics_painter_LayerBindCache, "trivalibs.graphics.painter.LayerBindCache", ({
  aM: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__fireResize__D__D__V($thiz, w, h) {
  var k = 0;
  while ((k < ($thiz.aI.length | 0))) {
    $thiz.aI[k].cW(w, h);
    k = ((1 + k) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  panel.aP($doubleToInt($thiz.cP()), $doubleToInt($thiz.c9()));
  if (panel.aW()) {
    return (void 0);
  }
  $thiz.bK(panel);
}
function $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, shape, depthTest, multisample, formats, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.V]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Z__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.U(), shape.bU(), fmts, depthTest, multisample, shape.aQ().d5(), shape.cZ(), shape.aQ().d0(), shape.aQ().bD(), false);
  pass.setPipeline(pipeline);
  var form = shape.aQ();
  var bufferCount = form.cV();
  var instanceCount = shape.aU().q();
  var runtime = $p_Ltrivalibs_graphics_painter_Painter__runtimeBindingsOf__Ltrivalibs_graphics_painter_Panel__sjs_js_Dictionary($thiz, panel);
  if ((instanceCount === 0)) {
    $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.U(), shape.Q(), shape.T(), null, runtime, null);
    var b = 0;
    while ((b < bufferCount)) {
      var buf = form.bW()[b];
      if ((buf.aY() > 0)) {
        pass.setVertexBuffer(0, buf.cN(), 0.0, buf.cO());
        if ((buf.aT() > 0)) {
          pass.setIndexBuffer(buf.cb(), buf.bD(), 0.0, buf.cc());
          pass.drawIndexed(buf.aT());
        } else {
          pass.draw(buf.aY());
        }
      }
      b = ((1 + b) | 0);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.U(), shape.Q(), shape.T(), shape.aU().ci()[i], runtime, null);
      var b$2 = 0;
      while ((b$2 < bufferCount)) {
        var buf$2 = form.bW()[b$2];
        if ((buf$2.aY() > 0)) {
          pass.setVertexBuffer(0, buf$2.cN(), 0.0, buf$2.cO());
          if ((buf$2.aT() > 0)) {
            pass.setIndexBuffer(buf$2.cb(), buf$2.bD(), 0.0, buf$2.cc());
            pass.drawIndexed(buf$2.aT());
          } else {
            pass.draw(buf$2.aY());
          }
        }
        b$2 = ((1 + b$2) | 0);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.V]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Z__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.U(), layer.bU(), fmts, depthTest, multisample, "triangle-list", "none", "ccw", null, false);
  pass.setPipeline(pipeline);
  var instanceCount = layer.aU().q();
  var runtime = $p_Ltrivalibs_graphics_painter_Painter__runtimeBindingsOf__Ltrivalibs_graphics_painter_Panel__sjs_js_Dictionary($thiz, panel);
  if (((instanceCount === 0) && (runtime === null))) {
    var c = layer.cX();
    if (((((c !== null) && (panel !== null)) && (c.b6 === panel.aJ)) && (c.b5 === panel.F))) {
      if ((c.aD !== null)) {
        pass.setBindGroup(0, c.aD);
      }
      if ((c.aC !== null)) {
        pass.setBindGroup(1, c.aC);
      }
    } else {
      var shade = layer.U();
      var vg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, layer.Q(), null, null);
      var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, layer.T(), null, null, srcView);
      if ((vg !== null)) {
        pass.setBindGroup(0, vg);
      }
      if ((pg !== null)) {
        pass.setBindGroup(1, pg);
      }
      layer.cY(((panel !== null) ? new $c_Ltrivalibs_graphics_painter_LayerBindCache(panel.aJ, panel.F, vg, pg) : null));
    }
    pass.draw(3);
  } else if ((instanceCount === 0)) {
    $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.U(), layer.Q(), layer.T(), null, runtime, srcView);
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.U(), layer.Q(), layer.T(), layer.aU().ci()[i], runtime, srcView);
      pass.draw(3);
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__runtimeBindingsOf__Ltrivalibs_graphics_painter_Panel__sjs_js_Dictionary($thiz, panel) {
  if ((panel === null)) {
    return null;
  } else {
    var dict = panel.br;
    var keys = Object.keys(dict);
    return (((keys.length | 0) > 0) ? dict : null);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__resolveValueSlot__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__O($thiz, shade, i, bindings, inst, runtime) {
  var fromInst = (((inst !== null) && (i < (inst.Q().length | 0))) ? inst.Q()[i] : null);
  if ((fromInst !== null)) {
    return fromInst;
  } else {
    var own = ((i < (bindings.length | 0)) ? bindings[i] : null);
    if ((own !== null)) {
      return own;
    } else {
      if ((runtime !== null)) {
        var key$proxy3 = shade.aq[i];
        var $x_1 = (!(!(!(!runtime.hasOwnProperty(key$proxy3)))));
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        var key$proxy4 = shade.aq[i];
        return runtime[key$proxy4];
      } else {
        return null;
      }
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelSlot__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUTextureView($thiz, shade, k, panelBindings, inst, runtime, srcView) {
  var fromInst = (((inst !== null) && (k < (inst.T().length | 0))) ? inst.T()[k] : null);
  if ((fromInst !== null)) {
    return $p_Ltrivalibs_graphics_painter_Painter__panelBindingView__Ltrivalibs_graphics_painter_PanelBinding__Ltrivalibs_graphics_painter_GPUTextureView($thiz, fromInst);
  } else {
    var own = ((k < (panelBindings.length | 0)) ? panelBindings[k] : null);
    if ((own !== null)) {
      return $p_Ltrivalibs_graphics_painter_Painter__panelBindingView__Ltrivalibs_graphics_painter_PanelBinding__Ltrivalibs_graphics_painter_GPUTextureView($thiz, own);
    } else {
      if ((runtime !== null)) {
        var key$proxy5 = shade.ao[k];
        var $x_1 = (!(!(!(!runtime.hasOwnProperty(key$proxy5)))));
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        var key$proxy6 = shade.ao[k];
        var value = runtime[key$proxy6];
        return ((!(!(value instanceof $a_Ltrivalibs_graphics_painter_PanelBinding()))) ? $p_Ltrivalibs_graphics_painter_Painter__panelBindingView__Ltrivalibs_graphics_painter_PanelBinding__Ltrivalibs_graphics_painter_GPUTextureView($thiz, value) : value.c[0].aO);
      } else {
        return ((k === 0) ? srcView : null);
      }
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__panelBindingView__Ltrivalibs_graphics_painter_PanelBinding__Ltrivalibs_graphics_painter_GPUTextureView($thiz, pb) {
  return ((!(!pb.depth)) ? pb.panel.bZ() : (((pb.mipLevel | 0) < 0) ? pb.panel.c[(pb.index | 0)].aO : pb.panel.c[(pb.index | 0)].h[(pb.mipLevel | 0)]));
}
function $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shade, bindings, panelBindings, inst, runtime, srcView) {
  var vg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings, inst, runtime);
  if ((vg !== null)) {
    pass.setBindGroup(0, vg);
  }
  var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, panelBindings, inst, runtime, srcView);
  if ((pg !== null)) {
    pass.setBindGroup(1, pg);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings, inst, runtime) {
  if ((shade.aL === null)) {
    return null;
  } else {
    var names = shade.aq;
    var entries = [];
    var i = 0;
    while ((i < (names.length | 0))) {
      var b = $p_Ltrivalibs_graphics_painter_Painter__resolveValueSlot__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__O($thiz, shade, i, bindings, inst, runtime);
      if ((b === null)) {
        var message$proxy2 = $p_Ltrivalibs_graphics_painter_Painter__missingBindingMessage__T__T($thiz, names[i]);
        throw new $c_sjs_js_JavaScriptException(Error(message$proxy2)).e;
      }
      entries.push($p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b));
      i = ((1 + i) | 0);
    }
    var $x_1 = $thiz.b;
    var _2 = shade.aL;
    return $x_1.createBindGroup(({
      "layout": _2,
      "entries": entries
    }));
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, panelBindings, inst, runtime, srcView) {
  if ((shade.aK === null)) {
    return null;
  } else {
    var names = shade.ao;
    var entries = [];
    var k = 0;
    while ((k < (names.length | 0))) {
      var view = $p_Ltrivalibs_graphics_painter_Painter__resolvePanelSlot__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUTextureView($thiz, shade, k, panelBindings, inst, runtime, srcView);
      if ((view === null)) {
        var message$proxy3 = $p_Ltrivalibs_graphics_painter_Painter__missingBindingMessage__T__T($thiz, names[k]);
        throw new $c_sjs_js_JavaScriptException(Error(message$proxy3)).e;
      }
      var value = k;
      entries.push(({
        "binding": value,
        "resource": view
      }));
      k = ((1 + k) | 0);
    }
    var $x_1 = $thiz.b;
    var _2 = shade.aK;
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
  if (false) {
    var _2 = b.d2();
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
  var key = (((((((((((((((shade.bs + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthKey) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace) + stripKey);
  var cached = $thiz.aH[key];
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
    if ((shade.aM !== null)) {
      var _2 = shade.ap;
      var _2$1 = [shade.aM];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.ap;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.bt;
    var _2$4 = shade.ap;
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
    $thiz.aH[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.bf)) {
    $thiz.be = $thiz.b.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.bf = true;
  }
  return $thiz.be;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.b9)) {
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
    $thiz.b8 = $x_1;
    $thiz.b9 = true;
  }
  return $thiz.b8;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitModule__Ltrivalibs_graphics_painter_GPUShaderModule($thiz) {
  if ((!$thiz.bb)) {
    $thiz.ba = $thiz.b.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    $thiz.bb = true;
  }
  return $thiz.ba;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipelineLayout__Ltrivalibs_graphics_painter_GPUPipelineLayout($thiz) {
  if ((!$thiz.bd)) {
    var $x_2 = $thiz.b;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var $x_1 = $x_2.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    $thiz.bc = $x_1;
    $thiz.bd = true;
  }
  return $thiz.bc;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipelineFor__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  var cached = $thiz.aE[format];
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
    $thiz.aE[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__sourceShade__Ltrivalibs_graphics_painter_Shade($thiz) {
  if ((!$thiz.bq)) {
    var id = $thiz.ag;
    $thiz.ag = ((1 + $thiz.ag) | 0);
    $thiz.bp = new $c_Ltrivalibs_graphics_painter_Shade(id, $p_Ltrivalibs_graphics_painter_Painter__blitModule__Ltrivalibs_graphics_painter_GPUShaderModule($thiz), null, null, null, $p_Ltrivalibs_graphics_painter_Painter__blitPipelineLayout__Ltrivalibs_graphics_painter_GPUPipelineLayout($thiz), false, ({}), ({}));
    $thiz.bq = true;
  }
  return $thiz.bp;
}
function $p_Ltrivalibs_graphics_painter_Painter__drawSource__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Panel__Z__sjs_js_Array__V($thiz, pass, panel, multisample, formats) {
  var group = panel.an;
  if ((group === null)) {
    if (((panel.I === "rgba32float") && (!(!(!$thiz.b.features.has("float32-filterable")))))) {
      throw new $c_sjs_js_JavaScriptException(Error("Panel: drawing an rgba32float source needs the device feature 'float32-filterable'. Pass requiredFeatures = Arr(\"float32-filterable\") to Painter.init, use rgba16float, or keep the panel on the direct path (source size and format, no shapes or layers).")).e;
    }
    var $x_1 = $thiz.b;
    var _2 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
    var x$proxy12 = panel.a5;
    var _2$1 = $thiz.cE();
    var _2$2 = [({
      "binding": 0,
      "resource": x$proxy12
    }), ({
      "binding": 1,
      "resource": _2$1
    })];
    group = $x_1.createBindGroup(({
      "layout": _2,
      "entries": _2$2
    }));
    panel.an = group;
  }
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Z__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, $p_Ltrivalibs_graphics_painter_Painter__sourceShade__Ltrivalibs_graphics_painter_Shade($thiz), panel.am, formats, panel.B, multisample, "triangle-list", "none", "ccw", null, true));
  pass.setBindGroup(0, group);
  pass.draw(3);
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.bh)) {
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
    $thiz.bg = $x_1;
    $thiz.bh = true;
  }
  return $thiz.bg;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.bj)) {
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
    $thiz.bi = $x_2;
    $thiz.bj = true;
  }
  return $thiz.bi;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.b.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.cC();
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
  var _2$4 = panel.by();
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
  $thiz.k.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.bm)) {
    $thiz.bl = $thiz.b.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.bm = true;
  }
  return $thiz.bl;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Painter(device, surface, adapter, gpu) {
  this.b = null;
  this.E = null;
  this.b7 = null;
  this.bk = null;
  this.k = null;
  this.V = null;
  this.ag = 0;
  this.aI = null;
  this.aG = 0;
  this.aF = 0;
  this.aH = null;
  this.aE = null;
  this.bn = null;
  this.bo = false;
  this.be = null;
  this.bf = false;
  this.b8 = null;
  this.b9 = false;
  this.ba = null;
  this.bb = false;
  this.bc = null;
  this.bd = false;
  this.bp = null;
  this.bq = false;
  this.bg = null;
  this.bh = false;
  this.bi = null;
  this.bj = false;
  this.bl = null;
  this.bm = false;
  this.b = device;
  this.E = surface;
  this.b7 = adapter;
  this.bk = gpu;
  this.k = device.queue;
  if ((adapter !== null)) {
    adapter.info;
  }
  this.V = surface.aA;
  this.ag = 0;
  this.aI = [];
  this.aG = 0;
  this.aF = 0;
  this.aH = ({});
  this.aE = ({});
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.cg = (function() {
  this.E.bX(this);
  this.E.cp(((arg1$2, arg2$2) => {
    $p_Ltrivalibs_graphics_painter_Painter__fireResize__D__D__V(this, (arg1$2 | 0), (arg2$2 | 0));
  }));
});
$p.cP = (function() {
  return ((this.aG > 0) ? this.aG : this.E.cQ());
});
$p.c9 = (function() {
  return ((this.aF > 0) ? this.aF : this.E.ca());
});
$p.cD = (function(magFilter, minFilter, mipmapFilter, addressMode, addressModeU, addressModeV) {
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
$p.cE = (function() {
  if ((!this.bo)) {
    this.bn = this.cD("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    this.bo = true;
  }
  return this.bn;
});
$p.cs = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers, source, sourceBlend, followSurface, flipY, premultipliedAlpha) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).cG(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers, source, sourceBlend, followSurface, flipY, premultipliedAlpha);
});
$p.cH = (function(panel) {
  var encoder = this.b.createCommandEncoder();
  this.bV(encoder, panel, this.E.bY(), this.V);
  this.E.cv(encoder);
});
$p.cr = (function(p) {
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(this, p);
  this.cH(p);
});
$p.bK = (function(panel) {
  var msaa = panel.G;
  var encoder = this.b.createCommandEncoder();
  var panelFormats = panel.R();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.cK())) {
    if ((panel.ah !== null)) {
      var x$proxy4 = panel.ah;
      if (msaa) {
        var _2 = panel.bH(t);
        var TextureViewBundle_this = panel.c[t];
        var _2$1 = TextureViewBundle_this.h[0];
        var value = x$proxy4.ac;
        var value$1 = x$proxy4.ad;
        var value$2 = x$proxy4.ae;
        var value$3 = x$proxy4.ab;
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
        var TextureViewBundle_this$2 = panel.c[t];
        var _2$3 = TextureViewBundle_this$2.h[0];
        var value$4 = x$proxy4.ac;
        var value$5 = x$proxy4.ad;
        var value$6 = x$proxy4.ae;
        var value$7 = x$proxy4.ab;
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
      var _2$5 = panel.bH(t);
      var TextureViewBundle_this$3 = panel.c[t];
      var _2$6 = TextureViewBundle_this$3.h[0];
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var TextureViewBundle_this$4 = panel.c[t];
      var _2$7 = TextureViewBundle_this$4.h[0];
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
  if (panel.B) {
    var _2$8 = panel.by();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  if (panel.c3()) {
    $p_Ltrivalibs_graphics_painter_Painter__drawSource__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Panel__Z__sjs_js_Array__V(this, shapePass, panel, msaa, panelFormats);
  }
  var i = 0;
  while ((i < (panel.a4.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V(this, shapePass, panel.a4[i], panel.B, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  this.k.submit([encoder.finish()]);
  if (panel.Y) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V(this, panel);
  }
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.u.length | 0))) {
    var layer = panel.u[j];
    var needsPingPong = layer.d4(panel);
    if ((layer.bF() >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        this.k.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.c[0].h[layer.bF()];
      var mipSrcView = ((layer.cn() >= 0) ? panel.c[0].h[layer.cn()] : panel.aX());
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
      this.k.submit([enc.finish()]);
    } else if (needsPingPong) {
      if ((curPass !== null)) {
        curPass.end();
        this.k.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = this.b.createCommandEncoder();
      var _2$10 = panel.cu();
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
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V(this, ppPass, layer, false, false, panelFormats, panel.aX(), panel);
      ppPass.end();
      this.k.submit([enc$2.finish()]);
      panel.cI();
    } else {
      if ((curPass === null)) {
        curEncoder = this.b.createCommandEncoder();
        var $x_1 = curEncoder;
        var _2$13 = panel.aX();
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
    this.k.submit([curEncoder.finish()]);
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.u.length | 0))) {
    if ((panel.u[mi].bF() >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.a7() > 1) && (!hasMipTargetLayers))) {
    this.aR(panel);
  }
});
$p.bV = (function(encoder, panel, dst, dstFormat) {
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
  var bundle = panel.c[0];
  var group = bundle.aN;
  if ((group === null)) {
    var $x_1 = this.b;
    var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
    var _2$4 = bundle.h[0];
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
    bundle.aN = group;
  }
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__blitPipelineFor__T__Ltrivalibs_graphics_painter_GPURenderPipeline(this, dstFormat));
  pass.setBindGroup(0, group);
  pass.draw(3);
  pass.end();
});
$p.aR = (function(panel) {
  var mipCount = panel.a7();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__blitPipelineFor__T__Ltrivalibs_graphics_painter_GPURenderPipeline(this, panel.R()[0]);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.c[0].h[((i - 1) | 0)];
    var dstView = panel.c[0].h[i];
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
    this.k.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
});
Object.defineProperty($p, "adapter", ({
  "get": (function() {
    return this.b7;
  }),
  "configurable": true
}));
Object.defineProperty($p, "gpu", ({
  "get": (function() {
    return this.bk;
  }),
  "configurable": true
}));
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  aN: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter$__createPainter__Ltrivalibs_graphics_painter_GPUDevice__Ltrivalibs_graphics_painter_Surface__Ltrivalibs_graphics_painter_GPUAdapter__Ltrivalibs_graphics_painter_GPU__Ltrivalibs_graphics_painter_Painter($thiz, device, surface, adapter, gpu) {
  var painter = new $c_Ltrivalibs_graphics_painter_Painter(device, surface, adapter, gpu);
  painter.cg();
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
$p.cf = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().bB();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var surface = $m_Ltrivalibs_graphics_painter_CanvasSurface$().bT(canvas, maybeGpu.getPreferredCanvasFormat());
    var promise$proxy2 = $m_Ltrivalibs_graphics_painter_WebGPU$().cA(maybeGpu, (void 0), false, (void 0), false);
    var f$proxy16 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy1 = $m_Ltrivalibs_graphics_painter_WebGPU$().cB(adapter$2, (void 0), (void 0));
      var f$proxy15 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => $p_Ltrivalibs_graphics_painter_Painter$__createPainter__Ltrivalibs_graphics_painter_GPUDevice__Ltrivalibs_graphics_painter_Surface__Ltrivalibs_graphics_painter_GPUAdapter__Ltrivalibs_graphics_painter_GPU__Ltrivalibs_graphics_painter_Painter(this, device$2, surface, adapter$2, maybeGpu)));
      return promise$proxy1.then($m_sjs_js_Any$().au(f$proxy15));
    }));
    return promise$proxy2.then($m_sjs_js_Any$().au(f$proxy16));
  }
});
$p.ce = (function(canvas, setup) {
  var promise$proxy3 = this.cf(canvas);
  return promise$proxy3.then($m_sjs_js_Any$().au(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  aO: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  if (($thiz.C !== null)) {
    $thiz.C.destroy();
  }
  if (($thiz.a2 !== null)) {
    $thiz.a2.destroy();
  }
  var depthUsage = ($thiz.Z ? 20 : 16);
  var $x_1 = $thiz.g.b;
  var value = $thiz.M;
  var value$1 = $thiz.L;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.G ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.C = depthTex;
  $thiz.X = depthTex.createView();
  if (($thiz.Z && $thiz.G)) {
    var $x_2 = $thiz.g.b;
    var value$2 = $thiz.M;
    var value$3 = $thiz.L;
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
    $thiz.a2 = resTex;
    $thiz.a3 = resTex.createView();
    $thiz.Y = true;
  } else {
    $thiz.a2 = null;
    $thiz.a3 = null;
    $thiz.Y = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.u.length | 0))) {
    if ($thiz.u[i].d3()) {
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
  return ((((((((((($thiz.m.length | 0) > 0) ? $thiz.m.join(",") : ($thiz.n ? $thiz.H : "preferred")) + "|") + $thiz.G) + "|") + $thiz.B) + "|") + $thiz.N) + "|") + $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz));
}
function $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz) {
  return ($thiz.n ? 23 : 20);
}
function $p_Ltrivalibs_graphics_painter_Panel__allocationStale__I__I__Z($thiz, w, h) {
  return ((((w !== $thiz.M) || (h !== $thiz.L)) || $thiz.a1) || (($thiz.W & $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz)) !== $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz)));
}
function $p_Ltrivalibs_graphics_painter_Panel__reallocate__I__I__V($thiz, w, h) {
  var d = 0;
  while ((d < ($thiz.j.length | 0))) {
    $thiz.j[d].destroy();
    d = ((1 + d) | 0);
  }
  d = 0;
  while ((d < ($thiz.a0.length | 0))) {
    $thiz.a0[d].destroy();
    d = ((1 + d) | 0);
  }
  if (((!$thiz.B) && ($thiz.C !== null))) {
    $thiz.C.destroy();
    $thiz.C = null;
    $thiz.X = null;
  }
  $thiz.M = w;
  $thiz.L = h;
  $thiz.W = $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz);
  $thiz.a1 = false;
  var mipCount = $thiz.a7();
  var fmts = $thiz.R();
  var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz);
  $thiz.j = [];
  $thiz.c = [];
  $thiz.a0 = [];
  $thiz.ak = [];
  var i = 0;
  while ((i < (fmts.length | 0))) {
    var fmt = fmts[i];
    var $x_1 = $thiz.g.b;
    var _2 = ({
      "width": w,
      "height": h
    });
    var value = $thiz.W;
    var tex = $x_1.createTexture(({
      "size": _2,
      "format": fmt,
      "usage": value,
      "mipLevelCount": mipCount
    }));
    $thiz.j.push(tex);
    $thiz.c.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle($thiz, tex, mipCount));
    if ($thiz.G) {
      var $x_2 = $thiz.g.b;
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
      $thiz.a0.push(msaaTex);
      $thiz.ak.push(msaaTex.createView());
    }
    i = ((1 + i) | 0);
  }
  if (hasPong) {
    var $x_3 = $thiz.g.b;
    var _2$2 = ({
      "width": w,
      "height": h
    });
    var f$proxy6 = fmts[0];
    var value$1 = $thiz.W;
    var pongTex = $x_3.createTexture(({
      "size": _2$2,
      "format": f$proxy6,
      "usage": value$1,
      "mipLevelCount": mipCount
    }));
    $thiz.j.push(pongTex);
    $thiz.c.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle($thiz, pongTex, mipCount));
  }
  if ($thiz.B) {
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz);
  }
  $thiz.F = ((1 + $thiz.F) | 0);
}
function $p_Ltrivalibs_graphics_painter_Panel__noteSource__sjs_js_Object__V($thiz, source) {
  $thiz.n = true;
  if ($m_Ltrivalibs_graphics_painter_sources$package$TextureSource$().bE(source)) {
    $m_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$().cM(source, "Panel.set(source)");
    $thiz.p = (source.width | 0);
    $thiz.o = (source.height | 0);
    $thiz.H = source.format;
    $thiz.I = $thiz.H;
  } else {
    $thiz.p = $p_Ltrivalibs_graphics_painter_sources$package$TextureSource$__size__sjs_js_Object__T__T__T__T__I($m_Ltrivalibs_graphics_painter_sources$package$TextureSource$(), source, "videoWidth", "naturalWidth", "displayWidth", "width");
    $thiz.o = $p_Ltrivalibs_graphics_painter_sources$package$TextureSource$__size__sjs_js_Object__T__T__T__T__I($m_Ltrivalibs_graphics_painter_sources$package$TextureSource$(), source, "videoHeight", "naturalHeight", "displayHeight", "height");
    if ((($thiz.p <= 0) || ($thiz.o <= 0))) {
      throw new $c_sjs_js_JavaScriptException(Error("Panel.set(source): the image has no size yet \u2014 an <img> still loading, or a <video> before its first frame")).e;
    }
    $thiz.H = "rgba8unorm";
    $thiz.I = $thiz.R()[0];
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__uploadSource__sjs_js_Object__V($thiz, source) {
  if ($thiz.at()) {
    $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
    $thiz.v = false;
    $thiz.aP(0, 0);
    $m_Ltrivalibs_graphics_painter_sources$package$TextureSource$().bN($thiz.g.k, source, $thiz.j[0], $thiz.p, $thiz.o, $thiz.ai, $thiz.al);
    $thiz.v = true;
    if (($thiz.a7() > 1)) {
      $thiz.g.aR($thiz);
    }
  } else {
    $thiz.v = false;
    var current = $thiz.r;
    if (((((current === null) || ((current.width | 0) !== $thiz.p)) || ((current.height | 0) !== $thiz.o)) || (current.format !== $thiz.I))) {
      $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
      var $x_1 = $thiz.g.b;
      var value = $thiz.p;
      var value$1 = $thiz.o;
      var _2 = ({
        "width": value,
        "height": value$1
      });
      var f$proxy9 = $thiz.I;
      var tex = $x_1.createTexture(({
        "size": _2,
        "format": f$proxy9,
        "usage": 23
      }));
      $thiz.r = tex;
      $thiz.a5 = tex.createView();
    }
    $m_Ltrivalibs_graphics_painter_sources$package$TextureSource$().bN($thiz.g.k, source, $thiz.r, $thiz.p, $thiz.o, $thiz.ai, $thiz.al);
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__releaseSource__V($thiz) {
  $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
  $thiz.v = false;
}
function $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz) {
  if (($thiz.r !== null)) {
    $thiz.r.destroy();
  }
  $thiz.r = null;
  $thiz.a5 = null;
  $thiz.an = null;
}
function $p_Ltrivalibs_graphics_painter_Panel__adoptSlot0AsSource__V($thiz) {
  $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
  $thiz.r = $thiz.j.shift();
  var TextureViewBundle_this = $thiz.c.shift();
  $thiz.a5 = TextureViewBundle_this.h[0];
  $thiz.v = false;
  $thiz.a1 = true;
}
function $p_Ltrivalibs_graphics_painter_Panel__restoreSourceToSlot0__V($thiz) {
  var encoder = $thiz.g.b.createCommandEncoder();
  var x$proxy10 = $thiz.r;
  var _2 = $thiz.j[0];
  var value = $thiz.p;
  var value$1 = $thiz.o;
  encoder.copyTextureToTexture(({
    "texture": x$proxy10
  }), ({
    "texture": _2
  }), ({
    "width": value,
    "height": value$1
  }));
  $thiz.g.k.submit([encoder.finish()]);
  $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
  $thiz.v = true;
  if (($thiz.a7() > 1)) {
    $thiz.g.aR($thiz);
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
  this.g = null;
  this.P = 0;
  this.O = 0;
  this.ah = null;
  this.B = false;
  this.G = false;
  this.N = 0;
  this.m = null;
  this.a4 = null;
  this.u = null;
  this.am = null;
  this.aj = false;
  this.ai = false;
  this.al = false;
  this.br = null;
  this.aJ = 0;
  this.F = 0;
  this.j = null;
  this.c = null;
  this.C = null;
  this.X = null;
  this.Z = false;
  this.a2 = null;
  this.a3 = null;
  this.Y = false;
  this.a0 = null;
  this.ak = null;
  this.M = 0;
  this.L = 0;
  this.W = 0;
  this.a1 = false;
  this.n = false;
  this.p = 0;
  this.o = 0;
  this.H = null;
  this.I = null;
  this.v = false;
  this.r = null;
  this.a5 = null;
  this.an = null;
  this.g = painter;
  this.P = 0;
  this.O = 0;
  this.ah = null;
  this.B = false;
  this.G = false;
  this.N = 1;
  this.m = [];
  this.a4 = [];
  this.u = [];
  this.am = null;
  this.aj = false;
  this.ai = false;
  this.al = false;
  this.br = ({});
  $m_Ltrivalibs_graphics_painter_panel$package$().ar = ((1 + $m_Ltrivalibs_graphics_painter_panel$package$().ar) | 0);
  this.aJ = $m_Ltrivalibs_graphics_painter_panel$package$().ar;
  this.F = 0;
  this.j = [];
  this.c = [];
  this.C = null;
  this.X = null;
  this.Z = false;
  this.a2 = null;
  this.a3 = null;
  this.Y = false;
  this.a0 = [];
  this.ak = [];
  this.M = 0;
  this.L = 0;
  this.W = 0;
  this.a1 = false;
  this.n = false;
  this.p = 0;
  this.o = 0;
  this.H = "rgba8unorm";
  this.I = "rgba8unorm";
  this.v = false;
  this.r = null;
  this.a5 = null;
  this.an = null;
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.a7 = (function() {
  if ((this.N === 0)) {
    var a = this.M;
    var b = this.L;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.N;
  }
});
$p.R = (function() {
  return (((this.m.length | 0) > 0) ? this.m : (this.n ? [this.H] : [this.g.V]));
});
$p.aW = (function() {
  return ((((this.n && ((this.a4.length | 0) === 0)) && ((this.u.length | 0) === 0)) && (this.am === null)) && (!this.aj));
});
$p.at = (function() {
  return ((((this.aW() && ((this.P === 0) || (this.P === this.p))) && ((this.O === 0) || (this.O === this.o))) && ((this.m.length | 0) <= 1)) && (this.R()[0] === this.I));
});
$p.c3 = (function() {
  return (this.n && (!this.at()));
});
$p.cK = (function() {
  return (this.R().length | 0);
});
$p.aX = (function() {
  var TextureViewBundle_this = this.c[0];
  return TextureViewBundle_this.h[0];
});
$p.cu = (function() {
  var TextureViewBundle_this = this.c[1];
  return TextureViewBundle_this.h[0];
});
$p.by = (function() {
  return this.X;
});
$p.cC = (function() {
  return this.a3;
});
$p.bH = (function(index) {
  return this.ak[index];
});
$p.cI = (function() {
  var t = this.j[0];
  this.j[0] = this.j[1];
  this.j[1] = t;
  var sv = this.c[0];
  this.c[0] = this.c[1];
  this.c[1] = sv;
  this.F = ((1 + this.F) | 0);
});
$p.bZ = (function() {
  if (((!this.Z) && (this.C !== null))) {
    this.Z = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.Y ? this.a3 : this.X);
});
$p.cG = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers, source, sourceBlend, followSurface, flipY, premultipliedAlpha) {
  var allocationBefore = $p_Ltrivalibs_graphics_painter_Panel__allocationKey__T(this);
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.P = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.O = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.ah = ((clearColor === null) ? null : new $c_Ltrivalibs_graphics_math_cpu_Vec4(clearColor.ac, clearColor.ad, clearColor.ae, clearColor.ab));
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.B = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.G = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.N = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.N = v$5;
    }
  }
  var x$1 = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy1$1__O__O(this, format) : formats);
  if ((x$1 !== (void 0))) {
    this.m = x$1;
  }
  var x$2 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy2$1__O__O(this, shape) : shapes);
  if ((x$2 !== (void 0))) {
    this.a4 = x$2;
  }
  var x$3 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy3$1__O__O(this, layer) : layers);
  if ((x$3 !== (void 0))) {
    this.u = x$3;
  }
  if ((sourceBlend !== (void 0))) {
    this.am = sourceBlend;
  }
  if ((followSurface !== (void 0))) {
    var v$6 = (!(!followSurface));
    this.aj = v$6;
  }
  if ((flipY !== (void 0))) {
    var v$7 = (!(!flipY));
    this.ai = v$7;
  }
  if ((premultipliedAlpha !== (void 0))) {
    var v$8 = (!(!premultipliedAlpha));
    this.al = v$8;
  }
  if ((source !== (void 0))) {
    if ((source === null)) {
      if ((this.n && ((this.m.length | 0) === 0))) {
        this.m = [this.H];
      }
      this.n = false;
    } else {
      $p_Ltrivalibs_graphics_painter_Panel__noteSource__sjs_js_Object__V(this, source);
    }
  }
  if ((((this.m.length | 0) > 1) && $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this))) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot host auto-pong layers. Chain a single-format panel for post-processing instead.")).e;
  }
  if ((((this.m.length | 0) > 1) && this.n)) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot have a source. Bind the source panel as a texture of the MRT shapes instead.")).e;
  }
  if (($p_Ltrivalibs_graphics_painter_Panel__allocationKey__T(this) !== allocationBefore)) {
    this.a1 = true;
  }
  if ((source !== (void 0))) {
    if ((source === null)) {
      $p_Ltrivalibs_graphics_painter_Panel__releaseSource__V(this);
    } else {
      $p_Ltrivalibs_graphics_painter_Panel__uploadSource__sjs_js_Object__V(this, source);
    }
  }
  if (this.aW()) {
    this.aP(0, 0);
    if ((!this.at())) {
      this.g.bK(this);
    }
  }
  return this;
});
$p.aP = (function(surfaceW, surfaceH) {
  var useSource = (this.n && (!this.aj));
  var w = ((this.P > 0) ? this.P : (useSource ? this.p : surfaceW));
  var h = ((this.O > 0) ? this.O : (useSource ? this.o : surfaceH));
  var direct = this.at();
  if ((this.v && ((!direct) || $p_Ltrivalibs_graphics_painter_Panel__allocationStale__I__I__Z(this, w, h)))) {
    $p_Ltrivalibs_graphics_painter_Panel__adoptSlot0AsSource__V(this);
  }
  if ($p_Ltrivalibs_graphics_painter_Panel__allocationStale__I__I__Z(this, w, h)) {
    $p_Ltrivalibs_graphics_painter_Panel__reallocate__I__I__V(this, w, h);
  }
  if (((direct && (!this.v)) && (this.r !== null))) {
    $p_Ltrivalibs_graphics_painter_Panel__restoreSourceToSlot0__V(this);
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  aP: 1
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
  this.bs = 0;
  this.ap = null;
  this.aM = null;
  this.aL = null;
  this.aK = null;
  this.bt = null;
  this.aq = null;
  this.ao = null;
  this.bs = id;
  this.ap = shaderModule;
  this.aM = vertexBufferLayout;
  this.aL = valueBindGroupLayout;
  this.aK = panelBindGroupLayout;
  this.bt = pipelineLayout;
  this.aq = $p_Ltrivalibs_graphics_painter_Shade__slotNames__sjs_js_Dictionary__sjs_js_Array(this, uniformIndices);
  this.ao = $p_Ltrivalibs_graphics_painter_Shade__slotNames__sjs_js_Dictionary__sjs_js_Array(this, panelIndices);
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  aQ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, sampling) {
  this.h = null;
  this.aO = null;
  this.aN = null;
  this.h = perMip;
  this.aO = sampling;
  this.aN = null;
}
$p = $c_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_TextureViewBundle;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_TextureViewBundle() {
}
$h_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = $p;
var $d_Ltrivalibs_graphics_painter_TextureViewBundle = new $TypeData().i($c_Ltrivalibs_graphics_painter_TextureViewBundle, "trivalibs.graphics.painter.TextureViewBundle", ({
  aS: 1
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
$p.bB = (function() {
  return (((typeof navigator) === "undefined") ? (void 0) : navigator.gpu);
});
$p.c6 = (function(canvas) {
  return canvas.getContext("webgpu");
});
$p.cA = (function(gpu, powerPreference, forceFallbackAdapter, requireAdapter, logAdapter) {
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
      throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).e;
    } else {
      return value$2;
    }
  }));
  var f$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
    if (logAdapter) {
      var s = ("WebGPU adapter: " + this.bz(adapter$2.info));
      console.log(s);
    }
    if ((requireAdapter !== (void 0))) {
      if ((!(!(!requireAdapter(adapter$2.info))))) {
        var message$proxy1 = ("WebGPU adapter rejected by requireAdapter: " + this.bz(adapter$2.info));
        throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).e;
      }
    }
    return adapter$2;
  }));
  return promise$proxy2.then($m_sjs_js_Any$().au(f$proxy1));
});
$p.cB = (function(adapter, requiredFeatures, requiredLimits) {
  var descriptor = ({});
  if ((requiredFeatures !== (void 0))) {
    descriptor.requiredFeatures = requiredFeatures;
  }
  if ((requiredLimits !== (void 0))) {
    descriptor.requiredLimits = requiredLimits;
  }
  return adapter.requestDevice(descriptor);
});
$p.bz = (function(info) {
  return ((info === (void 0)) ? "(no adapter info)" : ((((((info.vendor + " / ") + info.architecture) + " / ") + info.device) + " / ") + info.description));
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  aT: 1
}));
var $n_Ltrivalibs_graphics_painter_WebGPU$;
function $m_Ltrivalibs_graphics_painter_WebGPU$() {
  if ((!$n_Ltrivalibs_graphics_painter_WebGPU$)) {
    $n_Ltrivalibs_graphics_painter_WebGPU$ = new $c_Ltrivalibs_graphics_painter_WebGPU$();
  }
  return $n_Ltrivalibs_graphics_painter_WebGPU$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_panel$package$() {
  this.ar = 0;
  this.ar = 0;
}
$p = $c_Ltrivalibs_graphics_painter_panel$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_panel$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_panel$package$() {
}
$h_Ltrivalibs_graphics_painter_panel$package$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_panel$package$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_panel$package$, "trivalibs.graphics.painter.panel$package$", ({
  aU: 1
}));
var $n_Ltrivalibs_graphics_painter_panel$package$;
function $m_Ltrivalibs_graphics_painter_panel$package$() {
  if ((!$n_Ltrivalibs_graphics_painter_panel$package$)) {
    $n_Ltrivalibs_graphics_painter_panel$package$ = new $c_Ltrivalibs_graphics_painter_panel$package$();
  }
  return $n_Ltrivalibs_graphics_painter_panel$package$;
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
$p.cj = (function(data) {
  return (data.length | 0);
});
$p.cm = (function(format, data) {
  return ((format === "rgba8unorm") ? (!(!(data instanceof Uint8Array))) : ((format === "rgba32float") ? (!(!(data instanceof Float32Array))) : (((typeof Float16Array) !== "undefined") && (!(!(data instanceof Float16Array))))));
});
var $d_Ltrivalibs_graphics_painter_pixels$package$PixelData$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_pixels$package$PixelData$, "trivalibs.graphics.painter.pixels$package$PixelData$", ({
  aV: 1
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
  this.bS = null;
  this.bQ = null;
  this.bR = null;
  this.bS = "rgba8unorm";
  this.bQ = "rgba16float";
  this.bR = "rgba32float";
}
$p = $c_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$() {
}
$h_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$.prototype = $p;
$p.bv = (function(f) {
  return ((f === "rgba8unorm") ? 4 : ((f === "rgba16float") ? 8 : ((f === "rgba32float") ? 16 : 0)));
});
var $d_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$, "trivalibs.graphics.painter.pixels$package$PixelFormat$", ({
  aW: 1
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
$p.cM = (function(target, where) {
  var width = (target.width | 0);
  var height = (target.height | 0);
  var format = target.format;
  if (($m_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$().bv(format) === 0)) {
    var message$proxy3 = (((where + ": unsupported pixel target format '") + format) + "'; use rgba8unorm, rgba16float or rgba32float");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy3)).e;
  }
  if ((!((width > 0) && (height > 0)))) {
    var message$proxy4 = ((((where + ": invalid pixel target size ") + width) + "\u00d7") + height);
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy4)).e;
  }
  if ((!(!("frames" in target)))) {
    var arg = target.frames;
    if ((!(!(!Array.isArray(arg))))) {
      var message$proxy5 = (where + ": PixelFrames.frames must be an array");
      throw new $c_sjs_js_JavaScriptException(Error(message$proxy5)).e;
    }
  } else {
    var data = target.data;
    if (((data === (void 0)) || (!$m_Ltrivalibs_graphics_painter_pixels$package$PixelData$().cm(format, data)))) {
      var message$proxy6 = (((where + ": PixelImage.data must be the array type of '") + format) + "' (Uint8Array / Float16Array / Float32Array)");
      throw new $c_sjs_js_JavaScriptException(Error(message$proxy6)).e;
    }
    var length = $m_Ltrivalibs_graphics_painter_pixels$package$PixelData$().cj(data);
    if ((length !== (Math.imul(width, height) << 2))) {
      var message$proxy7 = ((((where + ": PixelImage.data length ") + length) + " is not width \u00b7 height \u00b7 4 = ") + (Math.imul(width, height) << 2));
      throw new $c_sjs_js_JavaScriptException(Error(message$proxy7)).e;
    }
  }
});
var $d_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$, "trivalibs.graphics.painter.pixels$package$PixelTarget$", ({
  aX: 1
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
$p.bE = (function(source) {
  return ((!(!("data" in source))) && (!(!("format" in source))));
});
$p.bN = (function(queue, source, texture, width, height, flipY, premultipliedAlpha) {
  if (this.bE(source)) {
    var data = source.data;
    var $x_1 = data.buffer;
    var value = (data.byteOffset | 0);
    var value$1 = Math.imul(width, $m_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$().bv(source.format));
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
  aY: 1
}));
var $n_Ltrivalibs_graphics_painter_sources$package$TextureSource$;
function $m_Ltrivalibs_graphics_painter_sources$package$TextureSource$() {
  if ((!$n_Ltrivalibs_graphics_painter_sources$package$TextureSource$)) {
    $n_Ltrivalibs_graphics_painter_sources$package$TextureSource$ = new $c_Ltrivalibs_graphics_painter_sources$package$TextureSource$();
  }
  return $n_Ltrivalibs_graphics_painter_sources$package$TextureSource$;
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
  $thiz.aZ = s;
  if (writableStackTrace) {
    $thiz.c5();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.aZ = null;
  }
  aS() {
    return this.aZ;
  }
  c5() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.e : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  t() {
    var className = $objectClassName(this);
    var message = this.aS();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  J() {
    return $c_O.prototype.J.call(this);
  }
  get "message"() {
    var m = this.aS();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.t();
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
$p.t = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$p = $c_sr_AbstractFunction1.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $p;
$p.t = (function() {
  return "<function1>";
});
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.aa = 0;
  this.b2 = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.aa = $f_T__hashCode__I("Seq");
  this.b2 = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.cL($m_sci_Nil$(), this.b2);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.cF = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.cd(xs, this.aa) : ((xs instanceof $c_sci_List) ? this.ck(xs, this.aa) : this.cq(xs, this.aa)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  aD: 1,
  aC: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4$() {
  this.b3 = null;
  this.b4 = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = $p;
$p.c7 = (function() {
  if ((!this.b4)) {
    this.b3 = new $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3();
    this.b4 = true;
  }
  return this.b3;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$, "trivalibs.graphics.math.cpu.Vec4$", ({
  aI: 1,
  aG: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec4$;
function $m_Ltrivalibs_graphics_math_cpu_Vec4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec4$ = new $c_Ltrivalibs_graphics_math_cpu_Vec4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_CanvasSurface(canvas, format) {
  this.i = null;
  this.aA = null;
  this.aB = null;
  this.az = null;
  this.af = null;
  this.i = canvas;
  this.aA = format;
  this.aB = null;
  this.az = null;
  this.af = [];
}
$p = $c_Ltrivalibs_graphics_painter_CanvasSurface.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_CanvasSurface;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_CanvasSurface() {
}
$h_Ltrivalibs_graphics_painter_CanvasSurface.prototype = $p;
$p.cQ = (function() {
  return (this.i.width | 0);
});
$p.ca = (function() {
  return (this.i.height | 0);
});
$p.bX = (function(painter) {
  var device = painter.b;
  this.aB = device.queue;
  var canvasContext = $m_Ltrivalibs_graphics_painter_WebGPU$().c6(this.i);
  var f$proxy1 = this.aA;
  canvasContext.configure(({
    "device": device,
    "format": f$proxy1
  }));
  this.az = canvasContext;
  this.i.width = (this.i.clientWidth | 0);
  this.i.height = (this.i.clientHeight | 0);
  var observer = new ResizeObserver(((entries$3) => {
    var entry = entries$3[0];
    var rw = (+entry.contentRect.width);
    var rh = (+entry.contentRect.height);
    if (((rw > 0.0) && (rh > 0.0))) {
      var w = $doubleToInt(rw);
      var h = $doubleToInt(rh);
      if (((w !== (this.i.width | 0)) || (h !== (this.i.height | 0)))) {
        this.i.width = w;
        this.i.height = h;
        var k = 0;
        while ((k < (this.af.length | 0))) {
          (0, this.af[k])(w, h);
          k = ((1 + k) | 0);
        }
      }
    }
  }));
  observer.observe(this.i);
});
$p.bY = (function() {
  return this.az.getCurrentTexture();
});
$p.cv = (function(encoder) {
  this.aB.submit([encoder.finish()]);
});
$p.cp = (function(cb) {
  this.af.push(cb);
});
var $d_Ltrivalibs_graphics_painter_CanvasSurface = new $TypeData().i($c_Ltrivalibs_graphics_painter_CanvasSurface, "trivalibs.graphics.painter.CanvasSurface", ({
  aK: 1,
  aR: 1
}));
class $c_jl_Exception extends $c_jl_Throwable {
}
/** @constructor */
function $c_sc_Iterator$() {
  this.ay = null;
  $n_sc_Iterator$ = this;
  this.ay = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  a1: 1,
  a: 1,
  a0: 1
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
  this.b1 = null;
  this.b1 = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.as = (function(x0) {
  return (0, this.b1)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  ax: 1,
  aw: 1,
  k: 1
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
$p.au = (function(f) {
  return ((arg1$2) => f.as(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  az: 1,
  aA: 1,
  aB: 1
}));
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
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
$p.as = (function(x) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec4((+x.cR), (+x.cS), (+x.cT), (+x.cU));
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3, "trivalibs.graphics.math.cpu.Vec4$$anon$3", ({
  aJ: 1,
  U: 1,
  k: 1
}));
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
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  H: 1,
  a: 1,
  b: 1,
  c: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  J: 1,
  a: 1,
  b: 1,
  c: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.f = null;
  this.f = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.t = (function() {
  return this.f;
});
$p.q = (function() {
  return this.f.length;
});
$p.bw = (function(index) {
  return this.f.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  P: 1,
  l: 1,
  F: 1,
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
$p.bu = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.S = (function() {
  return this;
});
$p.t = (function() {
  return "<iterator>";
});
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  G: 1,
  f: 1,
  e: 1,
  g: 1,
  a: 1
}));
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  I: 1,
  d: 1,
  a: 1,
  b: 1,
  c: 1
}), ((x) => $isByte(x)));
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
  L: 1,
  f: 1,
  e: 1,
  g: 1,
  a: 1
}));
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  N: 1,
  d: 1,
  a: 1,
  b: 1,
  c: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  Q: 1,
  f: 1,
  e: 1,
  g: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  S: 1,
  f: 1,
  e: 1,
  g: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.bx() + "("), ", ", ")");
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
$p.D = (function() {
  return false;
});
$p.co = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.a6 = (function() {
  return 0;
});
$p.y = (function() {
  this.co();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  a2: 1,
  y: 1,
  i: 1,
  j: 1,
  B: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.c4(n);
  if (skipped.av()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.c8();
}
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.u)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  u: 1,
  d: 1,
  a: 1,
  b: 1,
  c: 1,
  h: 1
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
  K: 1,
  d: 1,
  a: 1,
  b: 1,
  c: 1,
  h: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  M: 1,
  d: 1,
  a: 1,
  b: 1,
  c: 1,
  h: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__hashCode__I($thiz, $thizhi) {
  return ($thiz ^ $thizhi);
}
function $f_jl_Long__toString__T($thiz, $thizhi) {
  return $m_RTLong$().bM($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.v)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  v: 1,
  d: 1,
  a: 1,
  b: 1,
  c: 1,
  h: 1
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
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  O: 1,
  a: 1,
  b: 1,
  l: 1,
  c: 1,
  h: 1
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
$p.bu = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.bx = (function() {
  return this.ax();
});
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.b0 = null;
  this.a8 = 0;
  this.K = 0;
  this.b0 = self;
  this.a8 = 0;
  this.K = self.q();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.a6 = (function() {
  return this.K;
});
$p.D = (function() {
  return (this.K > 0);
});
$p.y = (function() {
  if ((this.K > 0)) {
    var r = this.b0.w(this.a8);
    this.a8 = ((1 + this.a8) | 0);
    this.K = ((this.K - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().ay.y();
  }
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  Z: 1,
  y: 1,
  i: 1,
  j: 1,
  B: 1,
  a: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.ax() + "(<not computed>)");
}
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.e = null;
    this.e = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  aS() {
    return $dp_toString__T(this.e);
  }
  aV() {
    return "JavaScriptException";
  }
  bI() {
    return 1;
  }
  bJ(x$1) {
    return ((x$1 === 0) ? this.e : $m_sr_Statics$().ch(x$1));
  }
  J() {
    return $m_s_util_hashing_MurmurHash3$().cw(this, 1744042595, true);
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.E)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  E: 1,
  f: 1,
  e: 1,
  g: 1,
  a: 1,
  x: 1,
  n: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.av())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.cJ();
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
$p.t = (function() {
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
$p.J = (function() {
  return $m_s_util_hashing_MurmurHash3$().cF(this);
});
$p.t = (function() {
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.p)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.p)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.a9 = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.a9 = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.w = (function(idx) {
  return this.a9.w(idx);
});
$p.q = (function() {
  return this.a9.q();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.a9 = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.a6 = (function() {
  return this.q();
});
$p.S = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.ax = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  Y: 1,
  a6: 1,
  V: 1,
  W: 1,
  o: 1,
  i: 1,
  j: 1,
  s: 1,
  r: 1,
  q: 1,
  a: 1,
  aa: 1,
  t: 1,
  a5: 1,
  A: 1,
  X: 1
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
function $c_sci_List() {
}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $p;
$p.w = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.ax = (function() {
  return "LinearSeq";
});
$p.av = (function() {
  return (this === $m_sci_Nil$());
});
$p.q = (function() {
  var these = this;
  var len = 0;
  while ((!these.av())) {
    len = ((1 + len) | 0);
    these.bL();
  }
  return len;
});
$p.bx = (function() {
  return "List";
});
$p.c4 = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.as = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.D)));
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
$p.bI = (function() {
  return 0;
});
$p.aV = (function() {
  return "Nil";
});
$p.bJ = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.bC = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.bL = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.a6 = (function() {
  return 0;
});
$p.S = (function() {
  return $m_sc_Iterator$().ay;
});
$p.c8 = (function() {
  this.bC();
});
$p.cJ = (function() {
  this.bL();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  ag: 1,
  D: 1,
  ac: 1,
  z: 1,
  o: 1,
  i: 1,
  j: 1,
  s: 1,
  r: 1,
  q: 1,
  k: 1,
  w: 1,
  t: 1,
  n: 1,
  C: 1,
  ad: 1,
  ai: 1,
  ah: 1,
  a4: 1,
  a3: 1,
  af: 1,
  ae: 1,
  a7: 1,
  a9: 1,
  a8: 1,
  aj: 1,
  a: 1,
  ab: 1,
  x: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.A = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.A = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.S = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.ax = (function() {
  return "IndexedSeq";
});
$p.q = (function() {
  return this.A.q();
});
$p.a6 = (function() {
  return this.A.q();
});
$p.t = (function() {
  return this.A.f;
});
$p.w = (function(i) {
  return $bC(this.A.bw(i));
});
$p.as = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.A.bw(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  av: 1,
  ak: 1,
  z: 1,
  o: 1,
  i: 1,
  j: 1,
  s: 1,
  r: 1,
  q: 1,
  k: 1,
  w: 1,
  t: 1,
  n: 1,
  C: 1,
  ar: 1,
  m: 1,
  an: 1,
  au: 1,
  at: 1,
  am: 1,
  ao: 1,
  al: 1,
  as: 1,
  A: 1,
  p: 1,
  aq: 1,
  ap: 1,
  l: 1,
  a: 1
}));
let $e_sketch = (function(arg) {
  $m_Lsketches_paintings_pillar_Pillar$package$().ct(arg);
});
export { $e_sketch as sketch };
