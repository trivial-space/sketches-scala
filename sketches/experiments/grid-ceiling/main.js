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
  return (arg0.$classData.Z ? arg0.aX() : $objectClone(arg0));
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.l();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.l();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.l();
        } else {
          return $d_jl_Integer.l();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.l();
      } else {
        return $d_jl_Double.l();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.l();
    }
    case "undefined": {
      return $d_jl_Void.l();
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return $d_jl_Long.l();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.l();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.l();
      } else {
        return null;
      }
    }
  }
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
        return null.qk();
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.v(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.v.call(instance, x0);
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
        return instance.z();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.z.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.ql(x0);
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
$p.z = (function() {
  return $systemIdentityHashCode(this);
});
$p.v = (function(that) {
  return (this === that);
});
$p.q = (function() {
  var i = this.z();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.q();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.g = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.g[i] = null;
    }
  } else {
    this.g = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.aS = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.g, srcPos, dest.g, destPos, length);
});
$p.aX = (function() {
  return new $ac_O(this.g.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.g = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.g[i] = false;
    }
  } else {
    this.g = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.aS = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.g, srcPos, dest.g, destPos, length);
});
$p.aX = (function() {
  return new $ac_Z(this.g.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.g = new Uint16Array(arg);
  } else {
    this.g = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.aS = (function(srcPos, dest, destPos, length) {
  dest.g.set(this.g.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aX = (function() {
  return new $ac_C(this.g.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.g = new Int8Array(arg);
  } else {
    this.g = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.aS = (function(srcPos, dest, destPos, length) {
  dest.g.set(this.g.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aX = (function() {
  return new $ac_B(this.g.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.g = new Int16Array(arg);
  } else {
    this.g = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.aS = (function(srcPos, dest, destPos, length) {
  dest.g.set(this.g.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aX = (function() {
  return new $ac_S(this.g.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.g = new Int32Array(arg);
  } else {
    this.g = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.aS = (function(srcPos, dest, destPos, length) {
  dest.g.set(this.g.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aX = (function() {
  return new $ac_I(this.g.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.g = new Int32Array(arg);
  } else {
    this.g = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.aS = (function(srcPos, dest, destPos, length) {
  dest.g.set(this.g.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.aX = (function() {
  return new $ac_J(this.g.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.g = new Float32Array(arg);
  } else {
    this.g = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.aS = (function(srcPos, dest, destPos, length) {
  dest.g.set(this.g.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aX = (function() {
  return new $ac_F(this.g.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.g = new Float64Array(arg);
  } else {
    this.g = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.aS = (function(srcPos, dest, destPos, length) {
  dest.g.set(this.g.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aX = (function() {
  return new $ac_D(this.g.slice());
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
    v: 1,
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
    var u = result.g;
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
      this.g = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.g[i] = null;
      }
    } else {
      this.g = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.aS = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.g, srcPos, dest.g, destPos, length);
  });
  $p.aX = (function() {
    return new ArrayClass(this.g.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    v: 1,
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
$p.l = (function() {
  if ((!this.L)) {
    this.L = new $c_jl_Class(this);
  }
  return this.L;
});
$p.R = (function(that) {
  return ((this === that) || this.F(that));
});
$p.S = (function() {
  return (this.P ? this.P.l() : null);
});
$p.Q = (function() {
  return (this.O ? this.O.l() : null);
});
$p.U = (function(length) {
  if ((this === $d_V)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return new (this.r().C)(length);
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
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = ({});
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  result["java.vm.version"] = "1.22.0";
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result;
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.ig = null;
  this.jU = null;
  $n_jl_System$SystemProperties$ = this;
  this.ig = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.jU = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.my = (function(key, default$1) {
  if ((this.ig !== null)) {
    var dict = this.ig;
    return ((!(!$m_jl_Utils$Cache$().jW.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.jU.my(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  b0: 1
}));
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$();
  }
  return $n_jl_System$SystemProperties$;
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.jW = null;
  $n_jl_Utils$Cache$ = this;
  this.jW = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  b2: 1
}));
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$();
  }
  return $n_jl_Utils$Cache$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  b3: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$p = $c_jl_reflect_Array$.prototype = new $h_O();
$p.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $p;
$p.jz = (function(array) {
  if ((array instanceof $ac_O)) {
    return array.g.length;
  } else if ((array instanceof $ac_Z)) {
    return array.g.length;
  } else if ((array instanceof $ac_C)) {
    return array.g.length;
  } else if ((array instanceof $ac_B)) {
    return array.g.length;
  } else if ((array instanceof $ac_S)) {
    return array.g.length;
  } else if ((array instanceof $ac_I)) {
    return array.g.length;
  } else if ((array instanceof $ac_J)) {
    return ((array.g.length >>> 1) | 0);
  } else if ((array instanceof $ac_F)) {
    return array.g.length;
  } else {
    if ((!(array instanceof $ac_D))) {
      $p_jl_reflect_Array$__mismatch__O__E(this, array);
    }
    return array.g.length;
  }
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  b4: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
/** @constructor */
function $c_ju_Arrays$() {
}
$p = $c_ju_Arrays$.prototype = new $h_O();
$p.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
}
$h_ju_Arrays$.prototype = $p;
$p.nE = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.g.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (~startIndex);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.g[mid];
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid;
        continue;
      }
      if ((cmp !== 0)) {
        startIndex = ((1 + mid) | 0);
        continue;
      }
      return mid;
    }
  }
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  b5: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().pz(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().py(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().nV(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().nU(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().h3(value);
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
  return $m_RTLong$().n6(lo, hi);
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
$p.n6 = (function(lo, hi) {
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
$p.h3 = (function(value) {
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
$p.nU = (function(alo, ahi, blo, bhi) {
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
$p.nV = (function(alo, ahi, blo, bhi) {
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
$p.py = (function(alo, ahi, blo, bhi) {
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
$p.pz = (function(alo, ahi, blo, bhi) {
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
  b7: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
/** @constructor */
function $c_s_Array$() {
}
$p = $c_s_Array$.prototype = new $h_O();
$p.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $p;
$p.o1 = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.g.length !== ys.g.length)) {
    return false;
  }
  var len = xs.g.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().b(xs.g[i], ys.g[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  b8: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
/** @constructor */
function $c_s_LowPriorityImplicits2() {
}
$p = $c_s_LowPriorityImplicits2.prototype = new $h_O();
$p.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
}
$h_s_LowPriorityImplicits2.prototype = $p;
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.af();
  while (it.T()) {
    f.h(it.O());
  }
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.aq() === 0) ? (("" + start) + end) : $thiz.jq($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).aT.ab);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.aT;
  if ((start.length !== 0)) {
    jsb.ab = (("" + jsb.ab) + start);
  }
  var it = $thiz.af();
  if (it.T()) {
    var obj = it.O();
    jsb.ab = (("" + jsb.ab) + obj);
    while (it.T()) {
      if ((sep.length !== 0)) {
        jsb.ab = (("" + jsb.ab) + sep);
      }
      var obj$1 = it.O();
      jsb.ab = (("" + jsb.ab) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.ab = (("" + jsb.ab) + end);
  }
  return b;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.k2 = null;
  this.go = null;
  this.k2 = head;
  this.go = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.oi = (function() {
  return this.k2.h0().af();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  bR: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.k3 = null;
  $n_sc_StringOps$ = this;
  this.k3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.k3));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  c0: 1
}));
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$();
  }
  return $n_sc_StringOps$;
}
/** @constructor */
function $c_sci_IndexedSeqDefaults$() {
  this.k4 = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().or($m_jl_System$SystemProperties$().my("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.k4 = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  c4: 1
}));
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$();
  }
  return $n_sci_IndexedSeqDefaults$;
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$p = $c_sr_BoxesRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $p;
$p.b = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.o3(x, y) : ((x instanceof $Char) ? this.o2(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.o3 = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.i5(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $Long)) {
      var $x_1 = $uJ(xn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = y.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
  }
});
$p.i5 = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $Long)) {
      var $x_1 = $uJ(yn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      return (x2 === ((4.294967296E9 * x3_$_hi) + (x3_$_lo >>> 0.0)));
    } else {
      return (false && yn.v(x2));
    }
  } else if ((xn instanceof $Long)) {
    var $x_2 = $uJ(xn);
    var x3$2_$_lo = $x_2.l;
    var x3$2_$_hi = $x_2.h;
    if ((yn instanceof $Long)) {
      var $x_3 = $uJ(yn);
      var x2$3_$_lo = $x_3.l;
      var x2$3_$_hi = $x_3.h;
      return (((x3$2_$_lo ^ x2$3_$_lo) | (x3$2_$_hi ^ x2$3_$_hi)) === 0);
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return (((4.294967296E9 * x3$2_$_hi) + (x3$2_$_lo >>> 0.0)) === x3$3);
    } else {
      return (false && yn.v($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.o2 = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $Long)) {
      var $x_1 = $uJ(y);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = xc.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((y === null) ? (xc === null) : $dp_equals__O__Z(y, xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().i($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  cE: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
/** @constructor */
function $c_sr_Scala3RunTime$() {
}
$p = $c_sr_Scala3RunTime$.prototype = new $h_O();
$p.constructor = $c_sr_Scala3RunTime$;
/** @constructor */
function $h_sr_Scala3RunTime$() {
}
$h_sr_Scala3RunTime$.prototype = $p;
$p.nD = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
$p.i8 = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  cF: 1
}));
var $n_sr_Scala3RunTime$;
function $m_sr_Scala3RunTime$() {
  if ((!$n_sr_Scala3RunTime$)) {
    $n_sr_Scala3RunTime$ = new $c_sr_Scala3RunTime$();
  }
  return $n_sr_Scala3RunTime$;
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
$p.gc = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.g[idx];
  }
  if ((xs instanceof $ac_I)) {
    return xs.g[idx];
  }
  if ((xs instanceof $ac_D)) {
    return xs.g[idx];
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = xs.g;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  }
  if ((xs instanceof $ac_F)) {
    return xs.g[idx];
  }
  if ((xs instanceof $ac_C)) {
    return $bC(xs.g[idx]);
  }
  if ((xs instanceof $ac_B)) {
    return xs.g[idx];
  }
  if ((xs instanceof $ac_S)) {
    return xs.g[idx];
  }
  if ((xs instanceof $ac_Z)) {
    return xs.g[idx];
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.nm = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.P(), (x.L() + "("), ",", ")");
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  cG: 1
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
$p.ow = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.nX = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().h3(dv);
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
$p.a6 = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.nX((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.ow($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.op = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  cI: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
function $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product($thiz, x, self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return new $c_T1(x);
  }
  if ((self instanceof $c_T1)) {
    return new $c_T2(x, self.fv);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.Q, self.as);
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.bh, self.b2, self.b3);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.fJ, self.eD, self.eE, self.eF);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.fK, self.eG, self.eH, self.eI, self.eJ);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.fL, self.eK, self.eL, self.eM, self.eN, self.eO);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.fM, self.eP, self.eQ, self.eR, self.eS, self.eT, self.eU);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.fN, self.eV, self.eW, self.eX, self.eY, self.eZ, self.f0, self.f1);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.fO, self.f2, self.f3, self.f4, self.f5, self.f6, self.f7, self.f8, self.f9);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.fw, self.bu, self.bv, self.bw, self.bx, self.by, self.bz, self.bA, self.bB, self.bt);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.fx, self.bE, self.bF, self.bG, self.bH, self.bI, self.bJ, self.bK, self.bL, self.bC, self.bD);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.fy, self.bP, self.bQ, self.bR, self.bS, self.bT, self.bU, self.bV, self.bW, self.bM, self.bN, self.bO);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.fz, self.c1, self.c2, self.c3, self.c4, self.c5, self.c6, self.c7, self.c8, self.bX, self.bY, self.bZ, self.c0);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.fA, self.ce, self.cf, self.cg, self.ch, self.ci, self.cj, self.ck, self.cl, self.c9, self.ca, self.cb, self.cc, self.cd);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.fB, self.cs, self.ct, self.cu, self.cv, self.cw, self.cx, self.cy, self.cz, self.cm, self.cn, self.co, self.cp, self.cq, self.cr);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.fC, self.cH, self.cI, self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cA, self.cB, self.cC, self.cD, self.cE, self.cF, self.cG);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.fD, self.cX, self.cY, self.cZ, self.d0, self.d1, self.d2, self.d3, self.d4, self.cP, self.cQ, self.cR, self.cS, self.cT, self.cU, self.cV, self.cW);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.fE, self.de, self.df, self.dg, self.dh, self.di, self.dj, self.dk, self.dl, self.d5, self.d6, self.d7, self.d8, self.d9, self.da, self.db, self.dc, self.dd);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.fF, self.dx, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dm, self.dn, self.dp, self.dq, self.dr, self.ds, self.dt, self.du, self.dv, self.dw);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.fG, self.dP, self.dR, self.dS, self.dT, self.dU, self.dV, self.dW, self.dX, self.dF, self.dG, self.dH, self.dI, self.dJ, self.dK, self.dL, self.dM, self.dN, self.dO, self.dQ);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.fH, self.e8, self.eb, self.ec, self.ed, self.ee, self.ef, self.eg, self.eh, self.dY, self.dZ, self.e0, self.e1, self.e2, self.e3, self.e4, self.e5, self.e6, self.e7, self.e9, self.ea);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.fI, self.es, self.ew, self.ex, self.ey, self.ez, self.eA, self.eB, self.eC, self.ei, self.ej, self.ek, self.el, self.em, self.en, self.eo, self.ep, self.eq, self.er, self.et, self.eu, self.ev]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.I()) | 0));
  arr.g[0] = x;
  var src = xxl.ac;
  var length = xxl.I();
  src.aS(0, arr, 1, length);
  return new $c_sr_TupleXXL(arr);
}
function $p_sr_Tuples$__specialCaseTail__s_Product__s_Product($thiz, self) {
  matchResult34$1: {
    var $x_1;
    if ((self instanceof $c_T1)) {
      var $x_1 = $m_T$package$EmptyTuple$();
      break matchResult34$1;
    }
    if ((self instanceof $c_T2)) {
      var $x_1 = new $c_T1(self.as);
      break matchResult34$1;
    }
    if ((self instanceof $c_T3)) {
      var $x_1 = new $c_T2(self.b2, self.b3);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.eD, self.eE, self.eF);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.eG, self.eH, self.eI, self.eJ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.eK, self.eL, self.eM, self.eN, self.eO);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.eP, self.eQ, self.eR, self.eS, self.eT, self.eU);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.eV, self.eW, self.eX, self.eY, self.eZ, self.f0, self.f1);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.f2, self.f3, self.f4, self.f5, self.f6, self.f7, self.f8, self.f9);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.bu, self.bv, self.bw, self.bx, self.by, self.bz, self.bA, self.bB, self.bt);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.bE, self.bF, self.bG, self.bH, self.bI, self.bJ, self.bK, self.bL, self.bC, self.bD);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.bP, self.bQ, self.bR, self.bS, self.bT, self.bU, self.bV, self.bW, self.bM, self.bN, self.bO);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.c1, self.c2, self.c3, self.c4, self.c5, self.c6, self.c7, self.c8, self.bX, self.bY, self.bZ, self.c0);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.ce, self.cf, self.cg, self.ch, self.ci, self.cj, self.ck, self.cl, self.c9, self.ca, self.cb, self.cc, self.cd);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.cs, self.ct, self.cu, self.cv, self.cw, self.cx, self.cy, self.cz, self.cm, self.cn, self.co, self.cp, self.cq, self.cr);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.cH, self.cI, self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cA, self.cB, self.cC, self.cD, self.cE, self.cF, self.cG);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.cX, self.cY, self.cZ, self.d0, self.d1, self.d2, self.d3, self.d4, self.cP, self.cQ, self.cR, self.cS, self.cT, self.cU, self.cV, self.cW);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.de, self.df, self.dg, self.dh, self.di, self.dj, self.dk, self.dl, self.d5, self.d6, self.d7, self.d8, self.d9, self.da, self.db, self.dc, self.dd);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.dx, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dm, self.dn, self.dp, self.dq, self.dr, self.ds, self.dt, self.du, self.dv, self.dw);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.dP, self.dR, self.dS, self.dT, self.dU, self.dV, self.dW, self.dX, self.dF, self.dG, self.dH, self.dI, self.dJ, self.dK, self.dL, self.dM, self.dN, self.dO, self.dQ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.e8, self.eb, self.ec, self.ed, self.ee, self.ef, self.eg, self.eh, self.dY, self.dZ, self.e0, self.e1, self.e2, self.e3, self.e4, self.e5, self.e6, self.e7, self.e9, self.ea);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.es, self.ew, self.ex, self.ey, self.ez, self.eA, self.eB, self.eC, self.ei, self.ej, self.ek, self.el, self.em, self.en, self.eo, self.ep, self.eq, self.er, self.et, self.eu, self.ev);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.I() === 23)) {
    var elems = xxl.ac;
    return new $c_T22(elems.g[1], elems.g[2], elems.g[3], elems.g[4], elems.g[5], elems.g[6], elems.g[7], elems.g[8], elems.g[9], elems.g[10], elems.g[11], elems.g[12], elems.g[13], elems.g[14], elems.g[15], elems.g[16], elems.g[17], elems.g[18], elems.g[19], elems.g[20], elems.g[21], elems.g[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.ac.g.length - 1) | 0));
    var src = xxl.ac;
    var length = ((xxl.ac.g.length - 1) | 0);
    src.aS(1, arr$1, 0, length);
    return new $c_sr_TupleXXL(arr$1);
  }
}
/** @constructor */
function $c_sr_Tuples$() {
}
$p = $c_sr_Tuples$.prototype = new $h_O();
$p.constructor = $c_sr_Tuples$;
/** @constructor */
function $h_sr_Tuples$() {
}
$h_sr_Tuples$.prototype = $p;
$p.nO = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.pU = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  cJ: 1
}));
var $n_sr_Tuples$;
function $m_sr_Tuples$() {
  if ((!$n_sr_Tuples$)) {
    $n_sr_Tuples$ = new $c_sr_Tuples$();
  }
  return $n_sr_Tuples$;
}
/** @constructor */
function $c_sjs_js_Any$ObjectCompanionOps$() {
}
$p = $c_sjs_js_Any$ObjectCompanionOps$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Any$ObjectCompanionOps$;
/** @constructor */
function $h_sjs_js_Any$ObjectCompanionOps$() {
}
$h_sjs_js_Any$ObjectCompanionOps$.prototype = $p;
$p.og = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  cL: 1
}));
var $n_sjs_js_Any$ObjectCompanionOps$;
function $m_sjs_js_Any$ObjectCompanionOps$() {
  if ((!$n_sjs_js_Any$ObjectCompanionOps$)) {
    $n_sjs_js_Any$ObjectCompanionOps$ = new $c_sjs_js_Any$ObjectCompanionOps$();
  }
  return $n_sjs_js_Any$ObjectCompanionOps$;
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
$p.mA = (function(this$, elem, from) {
  var len = (this$.length | 0);
  var i = from;
  while ((i < len)) {
    if ($m_sr_BoxesRunTime$().b(elem, this$[i])) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.nb = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.af();
  while (((i < len) && it.T())) {
    b.push(new $c_T2(this$[i], it.O()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.nc = (function(this$) {
  var len = (this$.length | 0);
  var b = new Array(len);
  var i = 0;
  while ((i < len)) {
    b[i] = new $c_T2(this$[i], i);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.M = (function(this$, f) {
  var len = (this$.length | 0);
  var i = 0;
  while ((i < len)) {
    f.h(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  cM: 1
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
  cN: 1
}));
var $n_sjs_js_ArrayOpsCommon$;
function $m_sjs_js_ArrayOpsCommon$() {
  if ((!$n_sjs_js_ArrayOpsCommon$)) {
    $n_sjs_js_ArrayOpsCommon$ = new $c_sjs_js_ArrayOpsCommon$();
  }
  return $n_sjs_js_ArrayOpsCommon$;
}
/** @constructor */
function $c_sjs_js_WrappedDictionary$Cache$() {
  this.ke = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.ke = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  cR: 1
}));
var $n_sjs_js_WrappedDictionary$Cache$;
function $m_sjs_js_WrappedDictionary$Cache$() {
  if ((!$n_sjs_js_WrappedDictionary$Cache$)) {
    $n_sjs_js_WrappedDictionary$Cache$ = new $c_sjs_js_WrappedDictionary$Cache$();
  }
  return $n_sjs_js_WrappedDictionary$Cache$;
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
$p.d = (function(properties) {
  var result = ({});
  properties.jx(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((pair$2$2) => {
    result[pair$2$2.Q] = pair$2$2.as;
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  cS: 1
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
$p.c = (function(array) {
  var len = array.g.length;
  var result = [];
  var i = 0;
  while ((i !== len)) {
    var x1 = i;
    result.push(array.g[x1]);
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_sjsr_package$ = new $TypeData().i($c_sjsr_package$, "scala.scalajs.runtime.package$", ({
  cU: 1
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
$p.K = (function(hash, data) {
  var h = this.mV(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.mV = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.ax = (function(hash, length) {
  return this.hp((hash ^ length));
});
$p.hp = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.U = (function(x, seed, ignorePrefix) {
  var arr = x.I();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.L()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.K(h, $f_T__hashCode__I(x.L()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.K(h, $m_sr_Statics$().a6(x.r(i)));
      i = ((1 + i) | 0);
    }
    return this.ax(h, arr);
  }
});
$p.nL = (function(x, seed, caseClassName) {
  var arr = x.I();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.L()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.K(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.K(h, $m_sr_Statics$().a6(x.r(i)));
      i = ((1 + i) | 0);
    }
    return this.ax(h, arr);
  }
});
$p.q1 = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.af();
  while (iterator.T()) {
    var x = iterator.O();
    var h = $m_sr_Statics$().a6(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.K(h$2, a);
  h$2 = this.K(h$2, b);
  h$2 = this.mV(h$2, c);
  return this.ax(h$2, n);
});
$p.pf = (function(xs, seed) {
  var it = xs.af();
  var h = seed;
  if ((!it.T())) {
    return this.ax(h, 0);
  }
  var x0 = it.O();
  if ((!it.T())) {
    return this.ax(this.K(h, $m_sr_Statics$().a6(x0)), 1);
  }
  var x1 = it.O();
  var initial = $m_sr_Statics$().a6(x0);
  h = this.K(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().a6(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.T()) {
    h = this.K(h, prev);
    var hash = $m_sr_Statics$().a6(it.O());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.K(h, hash);
      i = ((1 + i) | 0);
      while (it.T()) {
        h = this.K(h, $m_sr_Statics$().a6(it.O()));
        i = ((1 + i) | 0);
      }
      return this.ax(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.hp(this.K(this.K(h0, rangeDiff), prev));
});
$p.nC = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().jz(a);
  switch (l) {
    case 0: {
      return this.ax(h, 0);
      break;
    }
    case 1: {
      return this.ax(this.K(h, $m_sr_Statics$().a6($m_sr_ScalaRunTime$().gc(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().a6($m_sr_ScalaRunTime$().gc(a, 0));
      h = this.K(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().a6($m_sr_ScalaRunTime$().gc(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.K(h, prev);
        var hash = $m_sr_Statics$().a6($m_sr_ScalaRunTime$().gc(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.K(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.K(h, $m_sr_Statics$().a6($m_sr_ScalaRunTime$().gc(a, i)));
            i = ((1 + i) | 0);
          }
          return this.ax(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.hp(this.K(this.K(h0, rangeDiff), prev));
    }
  }
});
$p.pu = (function(start, step, last, seed) {
  return this.hp(this.K(this.K(this.K(seed, start), step), last));
});
$p.ok = (function(a, seed) {
  var h = seed;
  var l = a.R();
  switch (l) {
    case 0: {
      return this.ax(h, 0);
      break;
    }
    case 1: {
      return this.ax(this.K(h, $m_sr_Statics$().a6(a.aa(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().a6(a.aa(0));
      h = this.K(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().a6(a.aa(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.K(h, prev);
        var hash = $m_sr_Statics$().a6(a.aa(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.K(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.K(h, $m_sr_Statics$().a6(a.aa(i)));
            i = ((1 + i) | 0);
          }
          return this.ax(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.hp(this.K(this.K(h0, rangeDiff), prev));
    }
  }
});
$p.ov = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.a7())) {
    elems.i7();
  }
  return ((rangeState === 2) ? this.pu(initial, rangeDiff, prev, seed) : this.ax(h, n));
});
function $p_Lsketches_experiments_gridceiling_GridCeiling$package$__fbm$1__I__I__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, FbmOctaves$2, domainPeriod$1, FbmGain$2, domainPos) {
  var acc = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(0.0);
  var freq = 1;
  var amp = 1.0;
  var totalAmp = 0.0;
  var o = 0;
  while ((o < FbmOctaves$2)) {
    var pd = Math.imul(domainPeriod$1, freq);
    acc = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jp(acc, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_shader_lib_noise_Extended$().pc($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().mf(domainPos, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), freq), $m_Ltrivalibs_graphics_math_gpu_vec3$().aM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(pd), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(pd)), null, null), amp));
    totalAmp = (totalAmp + amp);
    freq = (freq << 1);
    amp = (amp * FbmGain$2);
    o = ((1 + o) | 0);
  }
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().h1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().o7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jo(acc, totalAmp)));
}
function $p_Lsketches_experiments_gridceiling_GridCeiling$package$__bakeShade$1__I__D__Ltrivalibs_graphics_painter_Painter__D__I__Ltrivalibs_graphics_painter_Shade($thiz, FbmOctaves$1, FbmGain$1, p$1, NoiseScale$1, domainPeriod) {
  var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
  try {
    var uv = ctx.be.k("uv");
    var AssignTarget_this = ctx.bf.a3("worldPos");
    var value$proxy1 = ctx.be.k("position");
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x0 = (((("  " + AssignTarget_this.X) + " = ") + value$proxy1.e) + ";");
    var AssignTarget_this$2 = ctx.bf.gQ;
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().mw($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().bs(uv));
    var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
    var e$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().gl(uv);
    var L$proxy1 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aZ();
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var value$proxy3 = $x_4.mh($x_3, $x_2.mw(L$proxy1.b1((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(1.0)) + " - ") + e$proxy2.e) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(1.0));
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x1 = (((("  " + AssignTarget_this$2.X) + " = ") + value$proxy3.e) + ";");
    var array = [x0, x1];
    var out = [];
    var i = 0;
    while ((i < (array.length | 0))) {
      var idx = i;
      var p = array[idx];
      if ((p.length > 0)) {
        out.push(p);
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = out.join("\n");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
  }
  program.bd = $x_1;
  var array$1 = reg.a2;
  var len = (array$1.length | 0);
  var i$1 = 0;
  while ((i$1 < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i$1]);
    i$1 = ((1 + i$1) | 0);
  }
  var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2;
  try {
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var n = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("n");
    var x0$2 = n.u($p_Lsketches_experiments_gridceiling_GridCeiling$package$__fbm$1__I__I__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, FbmOctaves$1, domainPeriod, FbmGain$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().mf(ctx$2.ap.k("worldPos"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), NoiseScale$1)));
    var AssignTarget_this$1 = ctx$2.ah.a3("color");
    var value$proxy5 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ae($m_Ltrivalibs_graphics_math_gpu_vec3$().aW(n), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(1.0));
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x1$1 = (((("  " + AssignTarget_this$1.X) + " = ") + value$proxy5.e) + ";");
    var array$2 = [x0$2, x1$1];
    var out$1 = [];
    var i$2 = 0;
    while ((i$2 < (array$2.length | 0))) {
      var idx$1 = i$2;
      var p$2 = array$2[idx$1];
      if ((p$2.length > 0)) {
        out$1.push(p$2);
      }
      i$2 = ((1 + i$2) | 0);
    }
    var $x_5 = out$1.join("\n");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2;
  }
  program.bc = $x_5;
  var array$3 = reg$2.a2;
  var len$1 = (array$3.length | 0);
  var i$3 = 0;
  while ((i$3 < len$1)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$3[i$3]);
    i$3 = ((1 + i$3) | 0);
  }
  var b = program.bd;
  var b$1 = program.bc;
  var helperFns$proxy1 = program.ak();
  var id = p$1.o;
  p$1.o = ((1 + p$1.o) | 0);
  var names = [];
  var dict = ({});
  var i$4 = 0;
  while ((i$4 < (names.length | 0))) {
    dict[names[i$4]] = i$4;
    i$4 = ((1 + i$4) | 0);
  }
  var names$2 = [];
  var dict$2 = ({});
  var i$2$1 = 0;
  while ((i$2$1 < (names$2.length | 0))) {
    dict$2[names$2[i$2$1]] = i$2$1;
    i$2$1 = ((1 + i$2$1) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, "", sd.a5, sd.a4, fragBuiltinParams);
  console.log(baseWgsl);
  var module = p$1.f.createShaderModule(({
    "code": baseWgsl
  }));
  var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], []));
  var sizes = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], []));
  var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
  var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
  var attributes = [];
  var i$3$1 = 0;
  while ((i$3$1 < (formats.length | 0))) {
    var value$2 = i$3$1;
    var value$3 = (offsets[i$3$1] | 0);
    var s = formats[i$3$1];
    attributes.push(({
      "shaderLocation": value$2,
      "offset": value$3,
      "format": s
    }));
    i$3$1 = ((1 + i$3$1) | 0);
  }
  var vbl = ({
    "arrayStride": stride,
    "attributes": attributes
  });
  var bgls = [];
  return new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, null, null, $m_Ltrivalibs_graphics_shader_layouts$().N(p$1.f, bgls), false, dict, dict$2);
}
function $p_Lsketches_experiments_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$2, faces) {
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().ny(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, ref$3) => {
    var values$proxy1 = vl.kx.gj(v$3);
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.r(0);
    var value = nestedValues.r(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.r(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.r(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.r(1);
    var value$4 = nestedValues$2.r(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.r(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.b7.length | 0))) {
    var n = (mesh$proxy1.b7[fi].length | 0);
    vertexCount = ((vertexCount + n) | 0);
    if ((n === 4)) {
      hasQuads = true;
    }
    fi = ((1 + fi) | 0);
  }
  var count$proxy1 = vertexCount;
  var buffer = new ArrayBuffer(Math.imul(20, count$proxy1));
  var verts = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), count$proxy1);
  var vi = 0;
  if ((!hasQuads)) {
    fi = 0;
    while ((fi < (mesh$proxy1.b7.length | 0))) {
      var arr = mesh$proxy1.b7[fi];
      var si = 0;
      while ((si < (arr.length | 0))) {
        var x0 = arr[si];
        var index$proxy1 = vi;
        var offset$proxy6 = Math.imul(20, index$proxy1);
        var x1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy6);
        f(x0, x1);
        vi = ((1 + vi) | 0);
        si = ((1 + si) | 0);
      }
      fi = ((1 + fi) | 0);
    }
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, null);
  } else {
    var idxBuf = [];
    var base = 0;
    fi = 0;
    while ((fi < (mesh$proxy1.b7.length | 0))) {
      var arr$2 = mesh$proxy1.b7[fi];
      var n$2 = (arr$2.length | 0);
      var si$2 = 0;
      while ((si$2 < n$2)) {
        var x0$1 = arr$2[si$2];
        var index$proxy2 = vi;
        var offset$proxy7 = Math.imul(20, index$proxy2);
        var x1$1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy7);
        f(x0$1, x1$1);
        vi = ((1 + vi) | 0);
        si$2 = ((1 + si$2) | 0);
      }
      if ((n$2 === 3)) {
        idxBuf.push(base, ((1 + base) | 0), ((2 + base) | 0));
      } else {
        idxBuf.push(base, ((1 + base) | 0), ((2 + base) | 0));
        idxBuf.push(base, ((2 + base) | 0), ((3 + base) | 0));
      }
      base = ((base + n$2) | 0);
      fi = ((1 + fi) | 0);
    }
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.p3(idxBuf, vertexCount));
  }
  return p$2.o9($x_1, (void 0), (void 0), (void 0), (void 0), (void 0));
}
function $p_Lsketches_experiments_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel($thiz, p$3, w, h, faces, shade) {
  var shape$1 = p$3.gh($p_Lsketches_experiments_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$3, faces), shade, "none", (void 0));
  return p$3.bg(w, h, (void 0), (void 0), (void 0), (void 0), true, (void 0), (void 0), shape$1, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
}
/** @constructor */
function $c_Lsketches_experiments_gridceiling_GridCeiling$package$() {
}
$p = $c_Lsketches_experiments_gridceiling_GridCeiling$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_experiments_gridceiling_GridCeiling$package$;
/** @constructor */
function $h_Lsketches_experiments_gridceiling_GridCeiling$package$() {
}
$h_Lsketches_experiments_gridceiling_GridCeiling$package$.prototype = $p;
$p.aC = (function(c, u, v) {
  return new $c_T2(c, new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, v));
});
$p.n3 = (function(n, length, xCenter, startZ, step, gridY, sw, sh, tileWorld, vTileCount) {
  var perStripV = ((2.0 * sh) + sw);
  var vFull = (vTileCount * perStripV);
  var vH = (sh / vFull);
  var vB = (sw / vFull);
  var perStripVn = (perStripV / vFull);
  var faces = [];
  var i = 0;
  while ((i < n)) {
    var box = $m_Ltrivalibs_graphics_geometry_Box$().js(new $c_Ltrivalibs_graphics_math_cpu_Vec3(xCenter, gridY, (startZ + (i * step))), length, sh, sw);
    var vb = (i * perStripVn);
    var f = ((tileWorld, vb, vH) => ((c$2, uvw$2) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2, (c$2.w / tileWorld), (vb + (uvw$2.t * vH)))))(tileWorld, vb, vH);
    var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0 = box.fT;
    var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
    var $x_3 = f(x0, x1);
    var x0$1 = box.fd;
    var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_2 = f(x0$1, x1$1);
    var x0$2 = box.fe;
    var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    var $x_1 = f(x0$2, x1$2);
    var x0$3 = box.fU;
    var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
    faces.push($x_4.aB($x_3, $x_2, $x_1, f(x0$3, x1$3)));
    var f$1 = ((tileWorld, vb, vH) => ((c$2$1, uvw$2$1) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2$1, (c$2$1.w / tileWorld), ((vb + vH) + (uvw$2$1.t * vH)))))(tileWorld, vb, vH);
    var $x_8 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$4 = box.fS;
    var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
    var $x_7 = f$1(x0$4, x1$4);
    var x0$5 = box.fc;
    var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_6 = f$1(x0$5, x1$5);
    var x0$6 = box.fb;
    var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_5 = f$1(x0$6, x1$6);
    var x0$7 = box.fR;
    var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
    faces.push($x_8.aB($x_7, $x_6, $x_5, f$1(x0$7, x1$7)));
    var f$2 = ((tileWorld, vb, vH, vB) => ((c$2$2, uvw$2$2) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2$2, (c$2$2.w / tileWorld), ((vb + (2.0 * vH)) + (uvw$2$2.x * vB)))))(tileWorld, vb, vH, vB);
    var $x_12 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$8 = box.fd;
    var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_11 = f$2(x0$8, x1$8);
    var x0$9 = box.fb;
    var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_10 = f$2(x0$9, x1$9);
    var x0$10 = box.fc;
    var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_9 = f$2(x0$10, x1$10);
    var x0$11 = box.fe;
    var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    faces.push($x_12.aB($x_11, $x_10, $x_9, f$2(x0$11, x1$11)));
    i = ((1 + i) | 0);
  }
  return faces;
});
$p.mq = (function(n, length, zCenter, startX, step, gridY, sw, sh, tileWorld, vTileCount) {
  var perStripV = ((2.0 * sh) + sw);
  var vFull = (vTileCount * perStripV);
  var vH = (sh / vFull);
  var vB = (sw / vFull);
  var perStripVn = (perStripV / vFull);
  var faces = [];
  var i = 0;
  while ((i < n)) {
    var box = $m_Ltrivalibs_graphics_geometry_Box$().js(new $c_Ltrivalibs_graphics_math_cpu_Vec3((startX + (i * step)), gridY, zCenter), sw, sh, length);
    var vb = (i * perStripVn);
    var f = ((tileWorld, vb, vH) => ((c$2, uvw$2) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2, (c$2.x / tileWorld), (vb + (uvw$2.t * vH)))))(tileWorld, vb, vH);
    var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0 = box.fR;
    var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
    var $x_3 = f(x0, x1);
    var x0$1 = box.fb;
    var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_2 = f(x0$1, x1$1);
    var x0$2 = box.fd;
    var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_1 = f(x0$2, x1$2);
    var x0$3 = box.fT;
    var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
    faces.push($x_4.aB($x_3, $x_2, $x_1, f(x0$3, x1$3)));
    var f$1 = ((tileWorld, vb, vH) => ((c$2$1, uvw$2$1) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2$1, (c$2$1.x / tileWorld), ((vb + vH) + (uvw$2$1.t * vH)))))(tileWorld, vb, vH);
    var $x_8 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$4 = box.fU;
    var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
    var $x_7 = f$1(x0$4, x1$4);
    var x0$5 = box.fe;
    var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    var $x_6 = f$1(x0$5, x1$5);
    var x0$6 = box.fc;
    var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_5 = f$1(x0$6, x1$6);
    var x0$7 = box.fS;
    var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
    faces.push($x_8.aB($x_7, $x_6, $x_5, f$1(x0$7, x1$7)));
    var f$2 = ((tileWorld, vb, vH, vB) => ((c$2$2, uvw$2$2) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2$2, (c$2$2.x / tileWorld), ((vb + (2.0 * vH)) + (uvw$2$2.w * vB)))))(tileWorld, vb, vH, vB);
    var $x_12 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$8 = box.fd;
    var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_11 = f$2(x0$8, x1$8);
    var x0$9 = box.fb;
    var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_10 = f$2(x0$9, x1$9);
    var x0$10 = box.fc;
    var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_9 = f$2(x0$10, x1$10);
    var x0$11 = box.fe;
    var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    faces.push($x_12.aB($x_11, $x_10, $x_9, f$2(x0$11, x1$11)));
    i = ((1 + i) | 0);
  }
  return faces;
});
$p.i9 = (function(size, centerXZ, y, normal, tileWorld) {
  var center$proxy1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(centerXZ, y, centerXZ);
  var f = ((pos$2, _$1$2) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(pos$2, (pos$2.w / tileWorld), (pos$2.x / tileWorld)));
  var uvAtPivot = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
  var n = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().S(), normal, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
  var x = n.t;
  if (((+Math.abs(x)) > 0.999)) {
    var up = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().S(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
  } else {
    var up = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  }
  var tangent = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().S(), up, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n);
  var n$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().S(), n, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
  var uDir = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().S(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().S(), tangent, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().S(), n$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n$1, tangent))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
  var uVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().S(), uDir, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), size);
  var vVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().S(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().S(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().S(), n$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), size);
  var tlPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().S(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().S(), center$proxy1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().S(), uVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.iH)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().S(), vVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.iI));
  var trPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().S(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
  var blPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().S(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec);
  var brPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().S(), blPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
  var $x_3 = f(tlPos, x1);
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
  var $x_2 = f(blPos, x1$1);
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
  var $x_1 = f(brPos, x1$2);
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
  return [$x_4.aB($x_3, $x_2, $x_1, f(trPos, x1$3))];
});
$p.mk = (function(size, height) {
  var box = $m_Ltrivalibs_graphics_geometry_Box$().js(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, (0.5 * height), 0.0), size, height, size);
  var f = ((c$2, uvw$2) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2, uvw$2.w, (0.0 + (0.2 * uvw$2.x))));
  var $x_24 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0 = box.fR;
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_23 = f(x0, x1);
  var x0$1 = box.fT;
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_22 = f(x0$1, x1$1);
  var x0$2 = box.fU;
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_21 = f(x0$2, x1$2);
  var x0$3 = box.fS;
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  var $x_20 = $x_24.aB($x_23, $x_22, $x_21, f(x0$3, x1$3));
  var f$1 = ((c$2$1, uvw$2$1) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2$1, uvw$2$1.w, (0.2 + (0.2 * uvw$2$1.t))));
  var $x_19 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$4 = box.fT;
  var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_18 = f$1(x0$4, x1$4);
  var x0$5 = box.fd;
  var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_17 = f$1(x0$5, x1$5);
  var x0$6 = box.fe;
  var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_16 = f$1(x0$6, x1$6);
  var x0$7 = box.fU;
  var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_15 = $x_19.aB($x_18, $x_17, $x_16, f$1(x0$7, x1$7));
  var f$2 = ((c$2$2, uvw$2$2) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2$2, uvw$2$2.w, (0.4 + (0.2 * uvw$2$2.t))));
  var $x_14 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$8 = box.fS;
  var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  var $x_13 = f$2(x0$8, x1$8);
  var x0$9 = box.fc;
  var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_12 = f$2(x0$9, x1$9);
  var x0$10 = box.fb;
  var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_11 = f$2(x0$10, x1$10);
  var x0$11 = box.fR;
  var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_10 = $x_14.aB($x_13, $x_12, $x_11, f$2(x0$11, x1$11));
  var f$3 = ((c$2$3, uvw$2$3) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2$3, uvw$2$3.x, (0.6000000000000001 + (0.2 * uvw$2$3.t))));
  var $x_9 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$12 = box.fR;
  var x1$12 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_8 = f$3(x0$12, x1$12);
  var x0$13 = box.fb;
  var x1$13 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_7 = f$3(x0$13, x1$13);
  var x0$14 = box.fd;
  var x1$14 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_6 = f$3(x0$14, x1$14);
  var x0$15 = box.fT;
  var x1$15 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_5 = $x_9.aB($x_8, $x_7, $x_6, f$3(x0$15, x1$15));
  var f$4 = ((c$2$4, uvw$2$4) => $m_Lsketches_experiments_gridceiling_GridCeiling$package$().aC(c$2$4, uvw$2$4.x, (0.8 + (0.2 * uvw$2$4.t))));
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$16 = box.fU;
  var x1$16 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_3 = f$4(x0$16, x1$16);
  var x0$17 = box.fe;
  var x1$17 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_2 = f$4(x0$17, x1$17);
  var x0$18 = box.fc;
  var x1$18 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_1 = f$4(x0$18, x1$18);
  var x0$19 = box.fS;
  var x1$19 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  return [$x_20, $x_15, $x_10, $x_5, $x_4.aB($x_3, $x_2, $x_1, f$4(x0$19, x1$19))];
});
$p.pF = (function(canvas) {
  $m_Ltrivalibs_graphics_painter_Painter$().ol(canvas, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$11) => {
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().ns(0.6, 1.0, 0.1, 340.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 3.0, 15.0));
    $m_Ltrivalibs_dev_devPreserve$().nB(cam, "camera");
    var rowCount = $doubleToInt((+Math.floor(226.66666666666666)));
    var colCount = $doubleToInt((+Math.floor(226.66666666666666)));
    var gridStep = (340.0 / rowCount);
    var gridStart = ((-170.0) + (0.5 * gridStep));
    var LightColor = new $c_Ltrivalibs_graphics_math_cpu_Vec3(2.4, 2.2, 2.0);
    var p$proxy3 = (28.0 / gridStep);
    var $x_1 = $m_RTLong$().h3((+Math.round(p$proxy3)));
    var x_$_lo = $x_1.l;
    var x_$_hi = $x_1.h;
    var p$proxy4 = $doubleToInt(((4.294967296E9 * x_$_hi) + (x_$_lo >>> 0.0)));
    var TileCells = ((p$proxy4 > 1) ? p$proxy4 : 1);
    var tileWorld = (TileCells * gridStep);
    var p$proxy5 = (0.075 * tileWorld);
    var $x_2 = $m_RTLong$().h3((+Math.round(p$proxy5)));
    var x$1_$_lo = $x_2.l;
    var x$1_$_hi = $x_2.h;
    var p$proxy6 = $doubleToInt(((4.294967296E9 * x$1_$_hi) + (x$1_$_lo >>> 0.0)));
    var noisePeriod = ((p$proxy6 > 1) ? p$proxy6 : 1);
    var NoiseScale = (noisePeriod / tileWorld);
    var noiseBakeShade = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__bakeShade$1__I__D__Ltrivalibs_graphics_painter_Painter__D__I__Ltrivalibs_graphics_painter_Shade(this, 4, 0.3, p$11, NoiseScale, noisePeriod);
    var gridTileU = $doubleToInt((24.0 * tileWorld));
    var gridTileV = $doubleToInt((24.0 * (1.75 * TileCells)));
    var planeTilePx = $doubleToInt((24.0 * tileWorld));
    var rowTile = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$11, gridTileU, gridTileV, $m_Lsketches_experiments_gridceiling_GridCeiling$package$().n3(TileCells, tileWorld, (0.5 * tileWorld), gridStart, gridStep, 19.0, 0.15, 0.8, tileWorld, TileCells), noiseBakeShade);
    var colTile = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$11, gridTileU, gridTileV, $m_Lsketches_experiments_gridceiling_GridCeiling$package$().mq(TileCells, tileWorld, (0.5 * tileWorld), gridStart, gridStep, 19.0, 0.15, 0.8, tileWorld, TileCells), noiseBakeShade);
    var groundTile = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$11, planeTilePx, planeTilePx, $m_Lsketches_experiments_gridceiling_GridCeiling$package$().i9(tileWorld, (0.5 * tileWorld), 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), tileWorld), noiseBakeShade);
    var ceilTile = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$11, planeTilePx, planeTilePx, $m_Lsketches_experiments_gridceiling_GridCeiling$package$().i9(tileWorld, (0.5 * tileWorld), 20.0, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().S(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), tileWorld), noiseBakeShade);
    var boxTile = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$11, 1024, 1024, $m_Lsketches_experiments_gridceiling_GridCeiling$package$().mk(7.0, 10.5), noiseBakeShade);
    var rowForm = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$11, $m_Lsketches_experiments_gridceiling_GridCeiling$package$().n3(rowCount, 340.0, 0.0, gridStart, gridStep, 19.0, 0.15, 0.8, tileWorld, TileCells));
    var colForm = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$11, $m_Lsketches_experiments_gridceiling_GridCeiling$package$().mq(colCount, 340.0, 0.0, gridStart, gridStep, 19.0, 0.15, 0.8, tileWorld, TileCells));
    var groundForm = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$11, $m_Lsketches_experiments_gridceiling_GridCeiling$package$().i9(340.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), tileWorld));
    var ceilForm = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$11, $m_Lsketches_experiments_gridceiling_GridCeiling$package$().i9(340.0, 0.0, 20.0, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().S(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), tileWorld));
    var boxForm = $p_Lsketches_experiments_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$11, $m_Lsketches_experiments_gridceiling_GridCeiling$package$().mk(7.0, 10.5));
    var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
      var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
        var $x_6 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_5 = $m_sjsr_package$();
        var AssignTarget_this = ctx$2.bf.gQ;
        var value$proxy7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().hs(ctx$2.hX.k("mvp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h4(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ae(ctx$2.be.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_4 = AssignTarget_this.X;
        var $x_3 = value$proxy7.e;
        var AssignTarget_this$2 = ctx$2.bf.a3("uv");
        var value$proxy9 = ctx$2.be.k("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_6.aL(new $c_sjsr_WrappedVarArgs($x_5.c(new ($d_T.r().C)([(((("  " + $x_4) + " = ") + $x_3) + ";"), (((("  " + AssignTarget_this$2.X) + " = ") + value$proxy9.e) + ";")]))));
      }));
      var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
      try {
        var $x_7 = body$proxy5.h(ctx);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
      }
      program$3.bd = $x_7;
      $m_sjs_js_ArrayOps$().M(reg.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$11) => ((data$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$11, data$3);
      }))(program$3)));
      var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var n = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("n");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var lum = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("lum");
        var $x_13 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_12 = $m_sjsr_package$();
        var $x_11 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$();
        var tex = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var uv = ctx$2$1.ap.k("uv");
        var sampler = ctx$2$1.C.k("samp");
        var $x_10 = n.u($x_11.bs($m_Ltrivalibs_graphics_math_gpu_expr$package$().aM(tex, uv, sampler)));
        var $x_9 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var e$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().fr(n, 0.5), 0.3);
        var L$proxy3 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aZ();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_8 = lum.u($x_9.h1(L$proxy3.b1((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(0.85)) + " + ") + e$proxy3.e) + ")"))));
        var AssignTarget_this$1 = ctx$2$1.ah.a3("color");
        var value$proxy11 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ae($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().br(ctx$2$1.C.k("tint"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), lum), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_13.aL(new $c_sjsr_WrappedVarArgs($x_12.c(new ($d_T.r().C)([$x_10, $x_8, (((("  " + AssignTarget_this$1.X) + " = ") + value$proxy11.e) + ";")]))));
      }));
      var ctx$2$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2;
      try {
        var $x_14 = body$proxy7.h(ctx$2$2);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2;
      }
      program$3.bc = $x_14;
      $m_sjs_js_ArrayOps$().M(reg$2.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$12) => ((data$3$1) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$12, data$3$1);
      }))(program$3)));
    }));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy2.h(program);
    var b = program.bd;
    var b$1 = program.bc;
    var helperFns$proxy2 = program.ak();
    var id = p$11.o;
    p$11.o = ((1 + p$11.o) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().a(["mvp"], $m_sjs_js_ArrayOpsCommon$().a(["tint"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])));
    var dict = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i = 0;
    while ((i < (names.length | 0))) {
      dict[names[i]] = i;
      i = ((1 + i) | 0);
    }
    var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
    var dict$2 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$2 = 0;
    while ((i$2 < (names$2.length | 0))) {
      dict$2[names$2[i$2]] = i$2;
      i$2 = ((1 + i$2) | 0);
    }
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy2);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["mvp"], $m_sjs_js_ArrayOpsCommon$().a(["tint"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).gP.s()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).J.s()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).J.s()], []))));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a5, sd.a4, fragBuiltinParams);
    var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    console.log(wgsl);
    var module = p$11.f.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl)])))));
    var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], []));
    var sizes = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], []));
    var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var attributes = [];
    var i$3 = 0;
    while ((i$3 < (formats.length | 0))) {
      attributes.push($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$3), new $c_T2("offset", (offsets[i$3] | 0)), new $c_T2("format", formats[i$3])])))));
      i$3 = ((1 + i$3) | 0);
    }
    var vbl = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("arrayStride", stride), new $c_T2("attributes", attributes)]))));
    var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], [])))], []);
    var result = [];
    $m_sjs_js_ArrayOps$().M(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$1) => ((entries$2) => (result.push(Painter_this$1.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0)))(p$11)));
    var x1 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().N(p$11.f, result));
    var \u03b42$ = x1;
    var bgls$2 = \u03b42$.Q;
    var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl = p$11.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
    if ((panelBgl !== null)) {
      var other$proxy1 = [panelBgl];
      var allBgls = bgls$2.concat(other$proxy1);
    } else {
      var allBgls = bgls$2;
    }
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().N(p$11.f, allBgls);
    var renderShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], panelBgl, pl, false, dict, dict$2);
    var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
      var body$proxy9 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
        var $x_18 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_17 = $m_sjsr_package$();
        var AssignTarget_this$3 = ctx$2$3.bf.gQ;
        var value$proxy13 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().hs(ctx$2$3.hX.k("mvp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h4(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ae(ctx$2$3.be.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_16 = AssignTarget_this$3.X;
        var $x_15 = value$proxy13.e;
        var AssignTarget_this$2$1 = ctx$2$3.bf.a3("uv");
        var value$proxy15 = ctx$2$3.be.k("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_18.aL(new $c_sjsr_WrappedVarArgs($x_17.c(new ($d_T.r().C)([(((("  " + $x_16) + " = ") + $x_15) + ";"), (((("  " + AssignTarget_this$2$1.X) + " = ") + value$proxy15.e) + ";")]))));
      }));
      var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$1;
      try {
        var $x_19 = body$proxy9.h(ctx$1);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$1;
      }
      program$3$1.bd = $x_19;
      $m_sjs_js_ArrayOps$().M(reg$1.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$13) => ((data$3$2) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$13, data$3$2);
      }))(program$3$1)));
      var body$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$4) => {
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var n$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("n");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var lum$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("lum");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var worldZ = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldZ");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var s$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("s");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var band = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("band");
        var $x_28 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_27 = $m_sjsr_package$();
        var $x_26 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$();
        var tex$1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var uv$1 = ctx$2$4.ap.k("uv");
        var sampler$1 = ctx$2$4.C.k("samp");
        var $x_25 = n$1.u($x_26.bs($m_Ltrivalibs_graphics_math_gpu_expr$package$().aM(tex$1, uv$1, sampler$1)));
        var $x_24 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var e$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().fr(n$1, 0.5), 0.3);
        var L$proxy5 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aZ();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_23 = lum$1.u($x_24.h1(L$proxy5.b1((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(0.85)) + " + ") + e$proxy4.e) + ")"))));
        var $x_22 = worldZ.u($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().gl(ctx$2$4.ap.k("uv")), tileWorld));
        var $x_21 = s$1.u($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().oa($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jo(worldZ, 1.2)));
        var $x_20 = band.u($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().n5($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().nn($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().fr(s$1, 0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(0.06), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(0.03)));
        var AssignTarget_this$4 = ctx$2$4.ah.a3("color");
        var value$proxy17 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ae($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jr($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().br(ctx$2$4.C.k("tint"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), lum$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().o5(band, $m_Ltrivalibs_graphics_math_gpu_vec3$().aM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(LightColor.w), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(LightColor.t), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(LightColor.x)))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_28.aL(new $c_sjsr_WrappedVarArgs($x_27.c(new ($d_T.r().C)([$x_25, $x_23, $x_22, $x_21, $x_20, (((("  " + AssignTarget_this$4.X) + " = ") + value$proxy17.e) + ";")]))));
      }));
      var ctx$2$5 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2$1;
      try {
        var $x_29 = body$proxy11.h(ctx$2$5);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2$1;
      }
      program$3$1.bc = $x_29;
      $m_sjs_js_ArrayOps$().M(reg$2$1.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$14) => ((data$3$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$14, data$3$3);
      }))(program$3$1)));
    }));
    var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy3.h(program$2);
    var b$2 = program$2.bd;
    var b$3 = program$2.bc;
    var helperFns$proxy3 = program$2.ak();
    var id$2 = p$11.o;
    p$11.o = ((1 + p$11.o) | 0);
    var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["mvp"], $m_sjs_js_ArrayOpsCommon$().a(["tint"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])));
    var dict$3 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$4 = 0;
    while ((i$4 < (names$4.length | 0))) {
      dict$3[names$4[i$4]] = i$4;
      i$4 = ((1 + i$4) | 0);
    }
    var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
    var dict$4 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$5 = 0;
    while ((i$5 < (names$5.length | 0))) {
      dict$4[names$5[i$5]] = i$5;
      i$5 = ((1 + i$5) | 0);
    }
    var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$2, b$3, helperFns$proxy3);
    var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["mvp"], $m_sjs_js_ArrayOpsCommon$().a(["tint"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).gP.s()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).J.s()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).J.s()], []))));
    var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a5, sd$2.a4, fragBuiltinParams$2);
    var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    console.log(wgsl$2);
    var module$2 = p$11.f.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$2)])))));
    var formats$2 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], []));
    var sizes$2 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], []));
    var offsets$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var stride$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var attributes$2 = [];
    var i$6 = 0;
    while ((i$6 < (formats$2.length | 0))) {
      attributes$2.push($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$6), new $c_T2("offset", (offsets$2[i$6] | 0)), new $c_T2("format", formats$2[i$6])])))));
      i$6 = ((1 + i$6) | 0);
    }
    var vbl$2 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("arrayStride", stride$2), new $c_T2("attributes", attributes$2)]))));
    var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], [])))], []);
    var result$2 = [];
    $m_sjs_js_ArrayOps$().M(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$2) => ((entries$2$1) => (result$2.push(Painter_this$2.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$1)])))))) | 0)))(p$11)));
    var x4 = new $c_T2(result$2, $m_Ltrivalibs_graphics_shader_layouts$().N(p$11.f, result$2));
    var \u03b42$$2 = x4;
    var bgls$4 = \u03b42$$2.Q;
    var entries$2$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$2 = p$11.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$2)])))));
    if ((panelBgl$2 !== null)) {
      var other$proxy2 = [panelBgl$2];
      var allBgls$2 = bgls$4.concat(other$proxy2);
    } else {
      var allBgls$2 = bgls$4;
    }
    var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p$11.f, allBgls$2);
    var ceilShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, vbl$2, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
    var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy1 = ul$proxy1.au;
    var buffer = new ArrayBuffer(64);
    var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var mvp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), p$11.f, uv$proxy1);
    var samp = p$11.jC("linear", "linear", "linear", "repeat", (void 0), (void 0));
    var clampSamp = p$11.jC("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    var Bindable_this = p$11.gh(ceilForm, ceilShade, "none", (void 0));
    var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", ceilTile);
    var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("tint", new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.1, 1.1, 1.12));
    var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", samp);
    var \u03b4scrutinee242 = e1$proxy1.m;
    var idx = (Bindable_this.Z.ad.tex | 0);
    while (((Bindable_this.Y.length | 0) <= idx)) {
      Bindable_this.Y.push(null);
    }
    Bindable_this.Y[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee242);
    var \u03b4scrutinee248 = e2$proxy1.m;
    var idx$2 = (Bindable_this.Z.H.tint | 0);
    var existing = ((idx$2 < (Bindable_this.p.length | 0)) ? Bindable_this.p[idx$2] : null);
    var device$proxy1 = Bindable_this.g5.f;
    if ((existing !== null)) {
      existing.E.A(existing.j, \u03b4scrutinee248);
      var $x_32 = existing.D.queue;
      var $x_31 = existing.B;
      var s$proxy2 = existing.j;
      var $x_30 = s$proxy2.dv.buffer;
      $x_32.writeBuffer($x_31, 0.0, $x_30);
      var bb = existing;
    } else {
      var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
      var buffer$2 = new ArrayBuffer(16);
      var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
      var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), device$proxy1, uv$3);
      b$4.E.A(b$4.j, \u03b4scrutinee248);
      var $x_35 = b$4.D.queue;
      var $x_34 = b$4.B;
      var s$proxy3 = b$4.j;
      var $x_33 = s$proxy3.dv.buffer;
      $x_35.writeBuffer($x_34, 0.0, $x_33);
      var bb = b$4;
    }
    while (((Bindable_this.p.length | 0) <= idx$2)) {
      Bindable_this.p.push(null);
    }
    Bindable_this.p[idx$2] = bb;
    var \u03b4scrutinee269 = e3$proxy1.m;
    var idx$3 = (Bindable_this.Z.H.samp | 0);
    while (((Bindable_this.p.length | 0) <= idx$3)) {
      Bindable_this.p.push(null);
    }
    Bindable_this.p[idx$3] = \u03b4scrutinee269;
    var Bindable_this$6 = p$11.gh(rowForm, renderShade, "none", (void 0));
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", rowTile);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tint", new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.9, 0.9, 0.92));
    var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", samp);
    var \u03b4scrutinee289 = e1$proxy2.m;
    var idx$4 = (Bindable_this$6.Z.ad.tex | 0);
    while (((Bindable_this$6.Y.length | 0) <= idx$4)) {
      Bindable_this$6.Y.push(null);
    }
    Bindable_this$6.Y[idx$4] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee289);
    var \u03b4scrutinee295 = e2$proxy2.m;
    var idx$5 = (Bindable_this$6.Z.H.tint | 0);
    var existing$2 = ((idx$5 < (Bindable_this$6.p.length | 0)) ? Bindable_this$6.p[idx$5] : null);
    var device$proxy2 = Bindable_this$6.g5.f;
    if ((existing$2 !== null)) {
      existing$2.E.A(existing$2.j, \u03b4scrutinee295);
      var $x_38 = existing$2.D.queue;
      var $x_37 = existing$2.B;
      var s$proxy4 = existing$2.j;
      var $x_36 = s$proxy4.dv.buffer;
      $x_38.writeBuffer($x_37, 0.0, $x_36);
      var bb$2 = existing$2;
    } else {
      var uv$2$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
      var buffer$3 = new ArrayBuffer(16);
      var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
      var b$2$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), device$proxy2, uv$2$1);
      b$2$1.E.A(b$2$1.j, \u03b4scrutinee295);
      var $x_41 = b$2$1.D.queue;
      var $x_40 = b$2$1.B;
      var s$proxy5 = b$2$1.j;
      var $x_39 = s$proxy5.dv.buffer;
      $x_41.writeBuffer($x_40, 0.0, $x_39);
      var bb$2 = b$2$1;
    }
    while (((Bindable_this$6.p.length | 0) <= idx$5)) {
      Bindable_this$6.p.push(null);
    }
    Bindable_this$6.p[idx$5] = bb$2;
    var \u03b4scrutinee316 = e3$proxy2.m;
    var idx$6 = (Bindable_this$6.Z.H.samp | 0);
    while (((Bindable_this$6.p.length | 0) <= idx$6)) {
      Bindable_this$6.p.push(null);
    }
    Bindable_this$6.p[idx$6] = \u03b4scrutinee316;
    var Bindable_this$11 = p$11.gh(colForm, renderShade, "none", (void 0));
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", colTile);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tint", new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.9, 0.9, 0.92));
    var e3$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", samp);
    var \u03b4scrutinee336 = e1$proxy3.m;
    var idx$7 = (Bindable_this$11.Z.ad.tex | 0);
    while (((Bindable_this$11.Y.length | 0) <= idx$7)) {
      Bindable_this$11.Y.push(null);
    }
    Bindable_this$11.Y[idx$7] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee336);
    var \u03b4scrutinee342 = e2$proxy3.m;
    var idx$8 = (Bindable_this$11.Z.H.tint | 0);
    var existing$3 = ((idx$8 < (Bindable_this$11.p.length | 0)) ? Bindable_this$11.p[idx$8] : null);
    var device$proxy3 = Bindable_this$11.g5.f;
    if ((existing$3 !== null)) {
      existing$3.E.A(existing$3.j, \u03b4scrutinee342);
      var $x_44 = existing$3.D.queue;
      var $x_43 = existing$3.B;
      var s$proxy6 = existing$3.j;
      var $x_42 = s$proxy6.dv.buffer;
      $x_44.writeBuffer($x_43, 0.0, $x_42);
      var bb$3 = existing$3;
    } else {
      var uv$3$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
      var buffer$4 = new ArrayBuffer(16);
      var arr$proxy7 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
      var b$3$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy7.dv, 0), device$proxy3, uv$3$1);
      b$3$1.E.A(b$3$1.j, \u03b4scrutinee342);
      var $x_47 = b$3$1.D.queue;
      var $x_46 = b$3$1.B;
      var s$proxy7 = b$3$1.j;
      var $x_45 = s$proxy7.dv.buffer;
      $x_47.writeBuffer($x_46, 0.0, $x_45);
      var bb$3 = b$3$1;
    }
    while (((Bindable_this$11.p.length | 0) <= idx$8)) {
      Bindable_this$11.p.push(null);
    }
    Bindable_this$11.p[idx$8] = bb$3;
    var \u03b4scrutinee363 = e3$proxy3.m;
    var idx$9 = (Bindable_this$11.Z.H.samp | 0);
    while (((Bindable_this$11.p.length | 0) <= idx$9)) {
      Bindable_this$11.p.push(null);
    }
    Bindable_this$11.p[idx$9] = \u03b4scrutinee363;
    var Bindable_this$16 = p$11.gh(boxForm, renderShade, "none", (void 0));
    var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", boxTile);
    var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("tint", new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.28, 0.27, 0.27));
    var e3$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", clampSamp);
    var \u03b4scrutinee383 = e1$proxy4.m;
    var idx$10 = (Bindable_this$16.Z.ad.tex | 0);
    while (((Bindable_this$16.Y.length | 0) <= idx$10)) {
      Bindable_this$16.Y.push(null);
    }
    Bindable_this$16.Y[idx$10] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee383);
    var \u03b4scrutinee389 = e2$proxy4.m;
    var idx$11 = (Bindable_this$16.Z.H.tint | 0);
    var existing$4 = ((idx$11 < (Bindable_this$16.p.length | 0)) ? Bindable_this$16.p[idx$11] : null);
    var device$proxy4 = Bindable_this$16.g5.f;
    if ((existing$4 !== null)) {
      existing$4.E.A(existing$4.j, \u03b4scrutinee389);
      var $x_50 = existing$4.D.queue;
      var $x_49 = existing$4.B;
      var s$proxy8 = existing$4.j;
      var $x_48 = s$proxy8.dv.buffer;
      $x_50.writeBuffer($x_49, 0.0, $x_48);
      var bb$4 = existing$4;
    } else {
      var uv$4 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
      var buffer$5 = new ArrayBuffer(16);
      var arr$proxy8 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
      var b$4$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy8.dv, 0), device$proxy4, uv$4);
      b$4$1.E.A(b$4$1.j, \u03b4scrutinee389);
      var $x_53 = b$4$1.D.queue;
      var $x_52 = b$4$1.B;
      var s$proxy9 = b$4$1.j;
      var $x_51 = s$proxy9.dv.buffer;
      $x_53.writeBuffer($x_52, 0.0, $x_51);
      var bb$4 = b$4$1;
    }
    while (((Bindable_this$16.p.length | 0) <= idx$11)) {
      Bindable_this$16.p.push(null);
    }
    Bindable_this$16.p[idx$11] = bb$4;
    var \u03b4scrutinee410 = e3$proxy4.m;
    var idx$12 = (Bindable_this$16.Z.H.samp | 0);
    while (((Bindable_this$16.p.length | 0) <= idx$12)) {
      Bindable_this$16.p.push(null);
    }
    Bindable_this$16.p[idx$12] = \u03b4scrutinee410;
    var shapes$2 = [Bindable_this$6, Bindable_this$11, Bindable_this, Bindable_this$16];
    $m_Lsketchlib_utils_mirror_MirrorReflection$();
    var mirror$1 = $m_Ltrivalibs_graphics_geometry_Plane$().kw;
    $m_Lsketchlib_utils_mirror_MirrorReflection$();
    var stretch$1 = 0.0;
    $m_Lsketchlib_utils_mirror_MirrorReflection$();
    var overscan$1 = 3.0;
    $m_Lsketchlib_utils_mirror_MirrorReflection$();
    var clearColor$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec4(0.0, 0.0, 0.0, 0.0);
    var mirror = $m_Lsketchlib_utils_mirror_MirrorReflection$().nA(p$11, cam, shapes$2, "mvp", 10.0, mirror$1, 3.2, stretch$1, 6, overscan$1, clearColor$2);
    var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
    var uv$proxy2 = ul$proxy2.au;
    var buffer$6 = new ArrayBuffer(4);
    var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
    var b$5 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), p$11.f, uv$proxy2);
    b$5.E.A(b$5.j, 0.4);
    var $x_56 = b$5.D.queue;
    var $x_55 = b$5.B;
    var s$proxy10 = b$5.j;
    var $x_54 = s$proxy10.dv.buffer;
    $x_56.writeBuffer($x_55, 0.0, $x_54);
    var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
      var body$proxy13 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$6) => {
        var $x_60 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_59 = $m_sjsr_package$();
        var AssignTarget_this$5 = ctx$2$6.bf.gQ;
        var value$proxy23 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().hs(ctx$2$6.hX.k("mvp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h4(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ae(ctx$2$6.be.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_58 = AssignTarget_this$5.X;
        var $x_57 = value$proxy23.e;
        var AssignTarget_this$2$2 = ctx$2$6.bf.a3("uv");
        var value$proxy25 = ctx$2$6.be.k("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_60.aL(new $c_sjsr_WrappedVarArgs($x_59.c(new ($d_T.r().C)([(((("  " + $x_58) + " = ") + $x_57) + ";"), (((("  " + AssignTarget_this$2$2.X) + " = ") + value$proxy25.e) + ";")]))));
      }));
      var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$3;
      try {
        var $x_61 = body$proxy13.h(ctx$3);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$3;
      }
      program$3$2.bd = $x_61;
      $m_sjs_js_ArrayOps$().M(reg$3.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$15) => ((data$3$4) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$15, data$3$4);
      }))(program$3$2)));
      var body$proxy15 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$7) => {
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var n$2 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("n");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var lum$2 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("lum");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var base = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("base");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var refl = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("refl");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var falloff = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("falloff");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var mix = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("mix");
        var $x_76 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_75 = $m_sjsr_package$();
        var $x_74 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$();
        var tex$2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var uv$6 = ctx$2$7.ap.k("uv");
        var sampler$2 = ctx$2$7.C.k("samp");
        var $x_73 = n$2.u($x_74.bs($m_Ltrivalibs_graphics_math_gpu_expr$package$().aM(tex$2, uv$6, sampler$2)));
        var $x_72 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var e$proxy5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().fr(n$2, 0.5), 0.3);
        var L$proxy7 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aZ();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_71 = lum$2.u($x_72.h1(L$proxy7.b1((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(0.85)) + " + ") + e$proxy5.e) + ")"))));
        var $x_70 = base.u($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().br(ctx$2$7.C.k("tint"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), lum$2));
        var tex$3 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "reflTex");
        var coord = $m_Ltrivalibs_graphics_math_gpu_ivec2$().aW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fu(ctx$2$7.fn));
        var $x_69 = refl.u($m_Ltrivalibs_graphics_math_gpu_expr$package$().h6(tex$3, coord));
        var $x_68 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var e$proxy6 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().ic(refl);
        var L$proxy9 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aZ();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_67 = falloff.u($x_68.p5(L$proxy9.b1((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(1.0)) + " - ") + e$proxy6.e) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(0.1)));
        var $x_66 = mix.u($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().gZ(ctx$2$7.C.k("reflStrength"), falloff));
        var AssignTarget_this$6 = ctx$2$7.ah.a3("color");
        var $x_65 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
        var $x_64 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_63 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_62 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
        var L$proxy11 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aZ();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var value$proxy27 = $x_65.ae($x_64.jr($x_63.br(base, $x_62, L$proxy11.b1((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(1.0)) + " - ") + mix.e) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().br($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gk(refl), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), mix)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_76.aL(new $c_sjsr_WrappedVarArgs($x_75.c(new ($d_T.r().C)([$x_73, $x_71, $x_70, $x_69, $x_67, $x_66, (((("  " + AssignTarget_this$6.X) + " = ") + value$proxy27.e) + ";")]))));
      }));
      var ctx$2$8 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2$2;
      try {
        var $x_77 = body$proxy15.h(ctx$2$8);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2$2;
      }
      program$3$2.bc = $x_77;
      $m_sjs_js_ArrayOps$().M(reg$2$2.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$16) => ((data$3$5) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$16, data$3$5);
      }))(program$3$2)));
    }));
    var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy4.h(program$3$3);
    var b$6 = program$3$3.bd;
    var b$7 = program$3$3.bc;
    var helperFns$proxy4 = program$3$3.ak();
    var id$3 = p$11.o;
    p$11.o = ((1 + p$11.o) | 0);
    var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["mvp"], $m_sjs_js_ArrayOpsCommon$().a(["tint"], $m_sjs_js_ArrayOpsCommon$().a(["reflStrength"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))));
    var dict$5 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$7 = 0;
    while ((i$7 < (names$7.length | 0))) {
      dict$5[names$7[i$7]] = i$7;
      i$7 = ((1 + i$7) | 0);
    }
    var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["reflTex"], []));
    var dict$6 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$8 = 0;
    while ((i$8 < (names$8.length | 0))) {
      dict$6[names$8[i$8]] = i$8;
      i$8 = ((1 + i$8) | 0);
    }
    var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$6, b$7, helperFns$proxy4);
    var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["mvp"], $m_sjs_js_ArrayOpsCommon$().a(["tint"], $m_sjs_js_ArrayOpsCommon$().a(["reflStrength"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).gP.s()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).J.s()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.s()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).J.s()], [])))));
    var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.a5, sd$3.a4, fragBuiltinParams$3);
    var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;\n@group(1) @binding(1) var reflTex: texture_2d<f32>;");
    console.log(wgsl$3);
    var module$3 = p$11.f.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$3)])))));
    var formats$3 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], []));
    var sizes$3 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], []));
    var offsets$3 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$3);
    var stride$9 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$3);
    var attributes$3 = [];
    var i$9 = 0;
    while ((i$9 < (formats$3.length | 0))) {
      attributes$3.push($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$9), new $c_T2("offset", (offsets$3[i$9] | 0)), new $c_T2("format", formats$3[i$9])])))));
      i$9 = ((1 + i$9) | 0);
    }
    var vbl$3 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("arrayStride", stride$9), new $c_T2("attributes", attributes$3)]))));
    var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 3), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []))))], []);
    var result$3 = [];
    $m_sjs_js_ArrayOps$().M(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$3) => ((entries$2$3) => (result$3.push(Painter_this$3.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$3)])))))) | 0)))(p$11)));
    var x7 = new $c_T2(result$3, $m_Ltrivalibs_graphics_shader_layouts$().N(p$11.f, result$3));
    var \u03b42$$3 = x7;
    var bgls$6 = \u03b42$$3.Q;
    var entries$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []));
    var panelBgl$3 = p$11.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$3)])))));
    if ((panelBgl$3 !== null)) {
      var other$proxy3 = [panelBgl$3];
      var allBgls$3 = bgls$6.concat(other$proxy3);
    } else {
      var allBgls$3 = bgls$6;
    }
    var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().N(p$11.f, allBgls$3);
    var groundShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, vbl$3, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
    var Bindable_this$21 = p$11.gh(groundForm, groundShade, "none", (void 0));
    var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", groundTile);
    var e2$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("tint", new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.85, 0.84, 0.82));
    var e3$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("reflStrength", b$5);
    var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", samp);
    var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("reflTex", mirror.kq);
    var \u03b4scrutinee528 = e1$proxy5.m;
    var idx$13 = (Bindable_this$21.Z.ad.tex | 0);
    while (((Bindable_this$21.Y.length | 0) <= idx$13)) {
      Bindable_this$21.Y.push(null);
    }
    Bindable_this$21.Y[idx$13] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee528);
    var \u03b4scrutinee534 = e2$proxy5.m;
    var idx$14 = (Bindable_this$21.Z.H.tint | 0);
    var existing$5 = ((idx$14 < (Bindable_this$21.p.length | 0)) ? Bindable_this$21.p[idx$14] : null);
    var device$proxy5 = Bindable_this$21.g5.f;
    if ((existing$5 !== null)) {
      existing$5.E.A(existing$5.j, \u03b4scrutinee534);
      var $x_80 = existing$5.D.queue;
      var $x_79 = existing$5.B;
      var s$proxy11 = existing$5.j;
      var $x_78 = s$proxy11.dv.buffer;
      $x_80.writeBuffer($x_79, 0.0, $x_78);
      var bb$5 = existing$5;
    } else {
      var uv$5$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
      var buffer$7 = new ArrayBuffer(16);
      var arr$proxy10 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$7), 1);
      var b$6$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy10.dv, 0), device$proxy5, uv$5$1);
      b$6$1.E.A(b$6$1.j, \u03b4scrutinee534);
      var $x_83 = b$6$1.D.queue;
      var $x_82 = b$6$1.B;
      var s$proxy12 = b$6$1.j;
      var $x_81 = s$proxy12.dv.buffer;
      $x_83.writeBuffer($x_82, 0.0, $x_81);
      var bb$5 = b$6$1;
    }
    while (((Bindable_this$21.p.length | 0) <= idx$14)) {
      Bindable_this$21.p.push(null);
    }
    Bindable_this$21.p[idx$14] = bb$5;
    var \u03b4scrutinee555 = e3$proxy5.m;
    var idx$15 = (Bindable_this$21.Z.H.reflStrength | 0);
    while (((Bindable_this$21.p.length | 0) <= idx$15)) {
      Bindable_this$21.p.push(null);
    }
    Bindable_this$21.p[idx$15] = \u03b4scrutinee555;
    var \u03b4scrutinee576 = e4$proxy1.m;
    var idx$16 = (Bindable_this$21.Z.H.samp | 0);
    while (((Bindable_this$21.p.length | 0) <= idx$16)) {
      Bindable_this$21.p.push(null);
    }
    Bindable_this$21.p[idx$16] = \u03b4scrutinee576;
    var \u03b4scrutinee602 = e5$proxy1.m;
    var idx$17 = (Bindable_this$21.Z.ad.reflTex | 0);
    while (((Bindable_this$21.Y.length | 0) <= idx$17)) {
      Bindable_this$21.Y.push(null);
    }
    Bindable_this$21.Y[idx$17] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee602);
    var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy3 = ul$proxy3.au;
    var buffer$8 = new ArrayBuffer(64);
    var arr$proxy11 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$8), 1);
    var invVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy11.dv, 0), p$11.f, uv$proxy3);
    var ul$proxy4 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$());
    var uv$proxy4 = ul$proxy4.au;
    var buffer$9 = new ArrayBuffer(16);
    var arr$proxy12 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$9), 1);
    var camPos = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy12.dv, 0), p$11.f, uv$proxy4);
    var fogColor = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.48, 0.49, 0.5);
    var clearColor$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec4(fogColor.w, fogColor.t, fogColor.x, 1.0);
    var shapes$3 = [Bindable_this$21, Bindable_this, Bindable_this$6, Bindable_this$11, Bindable_this$16];
    var Panel_this = p$11.bg((void 0), (void 0), clearColor$3, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes$3, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    var e1$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("mvp", mvp);
    var \u03b4scrutinee603 = e1$proxy6.m;
    var dict$proxy1 = Panel_this.gJ;
    dict$proxy1.mvp = \u03b4scrutinee603;
    var build$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
      var body$proxy17 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$9) => {
        var AssignTarget_this$7 = ctx$2$9.ah.a3("color");
        var tex$4 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "src");
        var uv$9 = ctx$2$9.ap.k("uv");
        var sampler$3 = ctx$2$9.C.k("samp");
        var value$proxy31 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().aM(tex$4, uv$9, sampler$3);
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return (((("  " + AssignTarget_this$7.X) + " = ") + value$proxy31.e) + ";");
      }));
      var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$4 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$4 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$4;
      try {
        var $x_84 = body$proxy17.h(ctx$4);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$4;
      }
      program$3$4.a0 = $x_84;
      $m_sjs_js_ArrayOps$().M(reg$4.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$4) => ((data$3$6) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$4, data$3$6);
      }))(program$3$4)));
    }));
    var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy5.h(program$4);
    var b$8 = program$4.a0;
    var helperFns$proxy5 = program$4.ak();
    var id$4 = p$11.o;
    p$11.o = ((1 + p$11.o) | 0);
    var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["samp"], []);
    var dict$7 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$10 = 0;
    while ((i$10 < (names$10.length | 0))) {
      dict$7[names$10[i$10]] = i$10;
      i$10 = ((1 + i$10) | 0);
    }
    var names$11 = $m_sjs_js_ArrayOpsCommon$().a(["src"], []);
    var dict$8 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$11 = 0;
    while ((i$11 < (names$11.length | 0))) {
      dict$8[names$11[i$11]] = i$11;
      i$11 = ((1 + i$11) | 0);
    }
    var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$8, helperFns$proxy5);
    var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["samp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).J.s()], []));
    var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.a5, sd$4.a4, fragBuiltinParams$4);
    var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var src: texture_2d<f32>;");
    console.log(wgsl$4);
    var module$4 = p$11.f.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$4)])))));
    var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], [])], []);
    var result$4 = [];
    $m_sjs_js_ArrayOps$().M(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$4) => ((entries$2$4) => (result$4.push(Painter_this$4.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$4)])))))) | 0)))(p$11)));
    var x10 = new $c_T2(result$4, $m_Ltrivalibs_graphics_shader_layouts$().N(p$11.f, result$4));
    var \u03b46$ = x10;
    var bgls$8 = \u03b46$.Q;
    var entries$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$4 = p$11.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$4)])))));
    if ((panelBgl$4 !== null)) {
      var other$proxy4 = [panelBgl$4];
      var allBgls$4 = bgls$8.concat(other$proxy4);
    } else {
      var allBgls$4 = bgls$8;
    }
    var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().N(p$11.f, allBgls$4);
    var copyShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
    var build$proxy6 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$5) => {
      var body$proxy19 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$10) => {
        var AssignTarget_this$8 = ctx$2$10.ah.a3("color");
        var value$proxy33 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().jL($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$10.C.k("samp"), ctx$2$10.ap.k("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(4.0), null);
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return (((("  " + AssignTarget_this$8.X) + " = ") + value$proxy33.e) + ";");
      }));
      var ctx$5 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$5 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$5 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$5;
      try {
        var $x_85 = body$proxy19.h(ctx$5);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$5;
      }
      program$3$5.a0 = $x_85;
      $m_sjs_js_ArrayOps$().M(reg$5.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3$7) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3$7);
      }))(program$3$5)));
    }));
    var program$5 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy6.h(program$5);
    var b$9 = program$5.a0;
    var helperFns$proxy6 = program$5.ak();
    var id$5 = p$11.o;
    p$11.o = ((1 + p$11.o) | 0);
    var names$13 = $m_sjs_js_ArrayOpsCommon$().a(["samp"], []);
    var dict$9 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$12 = 0;
    while ((i$12 < (names$13.length | 0))) {
      dict$9[names$13[i$12]] = i$12;
      i$12 = ((1 + i$12) | 0);
    }
    var names$14 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
    var dict$10 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$13 = 0;
    while ((i$13 < (names$14.length | 0))) {
      dict$10[names$14[i$13]] = i$13;
      i$13 = ((1 + i$13) | 0);
    }
    var sd$5 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$9, helperFns$proxy6);
    var vertexInputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$5 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["samp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).J.s()], []));
    var fragBuiltinParams$5 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$5 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$5, vertexInputStruct$5, vertexOutputStruct$5, fragmentOutputStruct$5, groupDecls$5, sd$5.a5, sd$5.a4, fragBuiltinParams$5);
    var wgsl$5 = (baseWgsl$5 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    console.log(wgsl$5);
    var module$5 = p$11.f.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$5)])))));
    var descriptors$5 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], [])], []);
    var result$5 = [];
    $m_sjs_js_ArrayOps$().M(descriptors$5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$5) => ((entries$2$5) => (result$5.push(Painter_this$5.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$5)])))))) | 0)))(p$11)));
    var x13 = new $c_T2(result$5, $m_Ltrivalibs_graphics_shader_layouts$().N(p$11.f, result$5));
    var \u03b46$$2 = x13;
    var bgls$10 = \u03b46$$2.Q;
    var entries$5 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$5 = p$11.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$5)])))));
    if ((panelBgl$5 !== null)) {
      var other$proxy5 = [panelBgl$5];
      var allBgls$5 = bgls$10.concat(other$proxy5);
    } else {
      var allBgls$5 = bgls$10;
    }
    var pl$5 = $m_Ltrivalibs_graphics_shader_layouts$().N(p$11.f, allBgls$5);
    var downBlurShade = new $c_Ltrivalibs_graphics_painter_Shade(id$5, module$5, null, bgls$10[0], panelBgl$5, pl$5, false, dict$9, dict$10);
    var fadeLayers = [];
    var Bindable_this$28 = p$11.b0(copyShade, (void 0), (void 0), (void 0));
    var e1$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("src", Panel_this);
    var e2$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", clampSamp);
    var \u03b4scrutinee725 = e1$proxy7.m;
    var idx$18 = (Bindable_this$28.y.ad.src | 0);
    while (((Bindable_this$28.G.length | 0) <= idx$18)) {
      Bindable_this$28.G.push(null);
    }
    Bindable_this$28.G[idx$18] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee725);
    Bindable_this$28.F = null;
    var \u03b4scrutinee729 = e2$proxy6.m;
    var idx$19 = (Bindable_this$28.y.H.samp | 0);
    while (((Bindable_this$28.i.length | 0) <= idx$19)) {
      Bindable_this$28.i.push(null);
    }
    Bindable_this$28.i[idx$19] = \u03b4scrutinee729;
    Bindable_this$28.F = null;
    fadeLayers.push(Bindable_this$28);
    var fm = 0;
    while ((fm < 5)) {
      var mipSource$1 = fm;
      var mipTarget$1 = ((1 + fm) | 0);
      var Bindable_this$31 = p$11.b0(downBlurShade, (void 0), mipSource$1, mipTarget$1);
      var e1$proxy8 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", clampSamp);
      var \u03b4scrutinee737 = e1$proxy8.m;
      var idx$20 = (Bindable_this$31.y.H.samp | 0);
      while (((Bindable_this$31.i.length | 0) <= idx$20)) {
        Bindable_this$31.i.push(null);
      }
      Bindable_this$31.i[idx$20] = \u03b4scrutinee737;
      Bindable_this$31.F = null;
      fadeLayers.push(Bindable_this$31);
      fm = ((1 + fm) | 0);
    }
    var fadeBlurPanel = p$11.bg((void 0), (void 0), (void 0), (void 0), (void 0), 6, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), fadeLayers, (void 0), (void 0), (void 0), (void 0), (void 0));
    var build$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$6) => {
      var body$proxy21 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$11) => {
        var uv$10 = ctx$2$11.ap.k("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var d = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("d");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var ndc = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("ndc");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var worldH = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldH");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var worldPos = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldPos");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var dist = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("dist");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var f = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("f");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var lod = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("lod");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var col = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("col");
        var $x_100 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_99 = $m_sjsr_package$();
        var tex$5 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "depth");
        var coord$1 = $m_Ltrivalibs_graphics_math_gpu_ivec2$().aW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fu(ctx$2$11.fn));
        var $x_98 = d.u($m_Ltrivalibs_graphics_math_gpu_expr$package$().mr(tex$5, coord$1));
        var $x_97 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
        var $x_96 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().fr($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().bs(uv$10), 2.0), 1.0);
        var e$proxy7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().gl(uv$10), 2.0);
        var L$proxy13 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aZ();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_95 = ndc.u($x_97.aM($x_96, L$proxy13.b1((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(1.0)) + " - ") + e$proxy7.e) + ")")), d));
        var $x_94 = worldH.u($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().hs(ctx$2$11.C.k("invVp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h4(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ae(ndc, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().mz().h(1)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
        var $x_93 = worldPos.u($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().mu($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gk(worldH), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().ic(worldH)));
        var $x_92 = dist.u($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ou($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jJ(worldPos, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), ctx$2$11.C.k("camPos"))));
        var $x_91 = f.u($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().n5(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(18.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(160.0)));
        var $x_90 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var $x_89 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var e$proxy8 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1(f, 4.0);
        var L$proxy15 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aZ();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_88 = lod.u($x_90.mU($x_89.mC(L$proxy15.b1((("(f32(1) + " + e$proxy8.e) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().mz().h(5)));
        var $x_87 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$();
        var tex$6 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col");
        var sampler$4 = ctx$2$11.C.k("samp");
        var $x_86 = col.u($x_87.gk($m_Ltrivalibs_graphics_math_gpu_expr$package$().gg(tex$6, uv$10, sampler$4, lod)));
        var AssignTarget_this$9 = ctx$2$11.ah.a3("color");
        var value$proxy35 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ae($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().p8(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_vec3$().aM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(fogColor.w), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(fogColor.t), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(fogColor.x)), f), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_100.aL(new $c_sjsr_WrappedVarArgs($x_99.c(new ($d_T.r().C)([$x_98, $x_95, $x_94, $x_93, $x_92, $x_91, $x_88, $x_86, (((("  " + AssignTarget_this$9.X) + " = ") + value$proxy35.e) + ";")]))));
      }));
      var ctx$6 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$6 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$6 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$6;
      try {
        var $x_101 = body$proxy21.h(ctx$6);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$6;
      }
      program$3$6.a0 = $x_101;
      $m_sjs_js_ArrayOps$().M(reg$6.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3$8) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3$8);
      }))(program$3$6)));
    }));
    var program$6 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy7.h(program$6);
    var b$10 = program$6.a0;
    var helperFns$proxy7 = program$6.ak();
    var id$6 = p$11.o;
    p$11.o = ((1 + p$11.o) | 0);
    var names$16 = $m_sjs_js_ArrayOpsCommon$().a(["invVp"], $m_sjs_js_ArrayOpsCommon$().a(["camPos"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])));
    var dict$11 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$14 = 0;
    while ((i$14 < (names$16.length | 0))) {
      dict$11[names$16[i$14]] = i$14;
      i$14 = ((1 + i$14) | 0);
    }
    var names$17 = $m_sjs_js_ArrayOpsCommon$().a(["col"], $m_sjs_js_ArrayOpsCommon$().a(["depth"], []));
    var dict$12 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$15 = 0;
    while ((i$15 < (names$17.length | 0))) {
      dict$12[names$17[i$15]] = i$15;
      i$15 = ((1 + i$15) | 0);
    }
    var sd$6 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$10, helperFns$proxy7);
    var vertexInputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$6 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["invVp"], $m_sjs_js_ArrayOpsCommon$().a(["camPos"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).J.s()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).J.s()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).J.s()], []))));
    var fragBuiltinParams$6 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$6 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$6, vertexInputStruct$6, vertexOutputStruct$6, fragmentOutputStruct$6, groupDecls$6, sd$6.a5, sd$6.a4, fragBuiltinParams$6);
    var wgsl$6 = (baseWgsl$6 + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;\n@group(1) @binding(1) var depth: texture_depth_2d;");
    console.log(wgsl$6);
    var module$6 = p$11.f.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$6)])))));
    var descriptors$6 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], [])))], []);
    var result$6 = [];
    $m_sjs_js_ArrayOps$().M(descriptors$6, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$6) => ((entries$2$6) => (result$6.push(Painter_this$6.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$6)])))))) | 0)))(p$11)));
    var x16 = new $c_T2(result$6, $m_Ltrivalibs_graphics_shader_layouts$().N(p$11.f, result$6));
    var \u03b46$$3 = x16;
    var bgls$12 = \u03b46$$3.Q;
    var entries$6 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("sampleType", "depth")])))))]))))], []));
    var panelBgl$6 = p$11.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$6)])))));
    if ((panelBgl$6 !== null)) {
      var other$proxy6 = [panelBgl$6];
      var allBgls$6 = bgls$12.concat(other$proxy6);
    } else {
      var allBgls$6 = bgls$12;
    }
    var pl$6 = $m_Ltrivalibs_graphics_shader_layouts$().N(p$11.f, allBgls$6);
    var resolveShade = new $c_Ltrivalibs_graphics_painter_Shade(id$6, module$6, null, bgls$12[0], panelBgl$6, pl$6, false, dict$11, dict$12);
    var Bindable_this$33 = p$11.b0(resolveShade, (void 0), (void 0), (void 0));
    var e1$proxy9 = new $c_Ltrivalibs_graphics_painter_BindPair("col", fadeBlurPanel);
    var e2$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("depth", Panel_this.mj(0, (-1), true));
    var e3$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("invVp", invVp);
    var e4$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("camPos", camPos);
    var e5$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", clampSamp);
    var \u03b4scrutinee828 = e1$proxy9.m;
    var idx$21 = (Bindable_this$33.y.ad.col | 0);
    while (((Bindable_this$33.G.length | 0) <= idx$21)) {
      Bindable_this$33.G.push(null);
    }
    Bindable_this$33.G[idx$21] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee828);
    Bindable_this$33.F = null;
    var \u03b4scrutinee842 = e2$proxy7.m;
    var idx$22 = (Bindable_this$33.y.ad.depth | 0);
    while (((Bindable_this$33.G.length | 0) <= idx$22)) {
      Bindable_this$33.G.push(null);
    }
    Bindable_this$33.G[idx$22] = \u03b4scrutinee842;
    Bindable_this$33.F = null;
    var \u03b4scrutinee846 = e3$proxy6.m;
    var idx$23 = (Bindable_this$33.y.H.invVp | 0);
    while (((Bindable_this$33.i.length | 0) <= idx$23)) {
      Bindable_this$33.i.push(null);
    }
    Bindable_this$33.i[idx$23] = \u03b4scrutinee846;
    Bindable_this$33.F = null;
    var \u03b4scrutinee856 = e4$proxy2.m;
    var idx$24 = (Bindable_this$33.y.H.camPos | 0);
    while (((Bindable_this$33.i.length | 0) <= idx$24)) {
      Bindable_this$33.i.push(null);
    }
    Bindable_this$33.i[idx$24] = \u03b4scrutinee856;
    Bindable_this$33.F = null;
    var \u03b4scrutinee870 = e5$proxy2.m;
    var idx$25 = (Bindable_this$33.y.H.samp | 0);
    while (((Bindable_this$33.i.length | 0) <= idx$25)) {
      Bindable_this$33.i.push(null);
    }
    Bindable_this$33.i[idx$25] = \u03b4scrutinee870;
    Bindable_this$33.F = null;
    var fadePanel = p$11.bg((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), Bindable_this$33, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    var bloom = $m_Lsketchlib_utils_bloom_Bloom$().nz(p$11, fadePanel, 0.005, 1.0, 4.0, 5, 1.0, 2.0);
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().oo(p$11.nK(), true, 400.0, 5.0, true, (void 0), 90.0, 50.0);
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, input, 2.5, 3.0);
    p$11.pd(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      var w = (+v1$2);
      var h = (+v2$2);
      var aspect$2 = (w / h);
      var fov$1 = cam.ba;
      var near$1 = cam.g7;
      var far$1 = cam.g6;
      var rotH$2 = cam.aw;
      var rotV$2 = cam.bb;
      var pos$2 = cam.a9;
      cam.jE(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$2);
      mirror.pD(w, h);
    })));
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$11, rowTile);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$11, colTile);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$11, groundTile);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$11, ceilTile);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$11, boxTile);
    $m_Ltrivalibs_utils_animation_animate$package$().nr(((p$5) => ((arg1$2) => {
      var tpf = (+arg1$2);
      input.ft(tpf);
      controller.ft(tpf);
      var vp = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().fs(), cam.hW, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.n9());
      mvp.E.A(mvp.j, vp);
      var $x_104 = mvp.D.queue;
      var $x_103 = mvp.B;
      var s$proxy13 = mvp.j;
      var $x_102 = s$proxy13.dv.buffer;
      $x_104.writeBuffer($x_103, 0.0, $x_102);
      var value$proxy38 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().fs(), vp, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
      invVp.E.A(invVp.j, value$proxy38);
      var $x_107 = invVp.D.queue;
      var $x_106 = invVp.B;
      var s$proxy14 = invVp.j;
      var $x_105 = s$proxy14.dv.buffer;
      $x_107.writeBuffer($x_106, 0.0, $x_105);
      var value$proxy39 = cam.a9;
      camPos.E.A(camPos.j, value$proxy39);
      var $x_110 = camPos.D.queue;
      var $x_109 = camPos.B;
      var s$proxy15 = camPos.j;
      var $x_108 = s$proxy15.dv.buffer;
      $x_110.writeBuffer($x_109, 0.0, $x_108);
      mirror.pg(vp);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$5, Panel_this);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$5, fadeBlurPanel);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$5, fadePanel);
      bloom.ph();
      p$5.pK(bloom.kj);
    }))(p$11));
  })));
});
var $d_Lsketches_experiments_gridceiling_GridCeiling$package$ = new $TypeData().i($c_Lsketches_experiments_gridceiling_GridCeiling$package$, "sketches.experiments.gridceiling.GridCeiling$package$", ({
  cX: 1
}));
var $n_Lsketches_experiments_gridceiling_GridCeiling$package$;
function $m_Lsketches_experiments_gridceiling_GridCeiling$package$() {
  if ((!$n_Lsketches_experiments_gridceiling_GridCeiling$package$)) {
    $n_Lsketches_experiments_gridceiling_GridCeiling$package$ = new $c_Lsketches_experiments_gridceiling_GridCeiling$package$();
  }
  return $n_Lsketches_experiments_gridceiling_GridCeiling$package$;
}
/** @constructor */
function $c_Lsketchlib_utils_bloom_Bloom$() {
}
$p = $c_Lsketchlib_utils_bloom_Bloom$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bloom_Bloom$;
/** @constructor */
function $h_Lsketchlib_utils_bloom_Bloom$() {
}
$h_Lsketchlib_utils_bloom_Bloom$.prototype = $p;
$p.nz = (function(p, scene, intensity, threshold, blurRadius, mipLevels, toneKnee, toneWhite) {
  if ((mipLevels < 2)) {
    var message$proxy1 = (("bloom mipLevels must be >= 2 (got " + mipLevels) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).V;
  }
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy1 = ul$proxy1.au;
  var buffer = new ArrayBuffer(4);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.f, uv$proxy1);
  b.E.A(b.j, blurRadius);
  var $x_3 = b.D.queue;
  var $x_2 = b.B;
  var s$proxy1 = b.j;
  var $x_1 = s$proxy1.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy2 = ul$proxy2.au;
  var buffer$2 = new ArrayBuffer(4);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.f, uv$proxy2);
  b$2.E.A(b$2.j, intensity);
  var $x_6 = b$2.D.queue;
  var $x_5 = b$2.B;
  var s$proxy2 = b$2.j;
  var $x_4 = s$proxy2.dv.buffer;
  $x_6.writeBuffer($x_5, 0.0, $x_4);
  var sampler = p.jD();
  var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
    var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var color = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("color");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var brightness = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("brightness");
      var $x_10 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_9 = $m_sjsr_package$();
      var $x_8 = color.u($m_Ltrivalibs_graphics_math_gpu_expr$package$().h6($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().aW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fu(ctx$2.fn))));
      var $x_7 = brightness.u($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jp($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jp($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().bs(color), 0.2126), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().gl(color), 0.7152)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().qh(color), 0.0722)));
      var AssignTarget_this = ctx$2.ah.a3("color");
      var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().pG($m_Ltrivalibs_graphics_math_gpu_vec4$().mh($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(1.0)), color, $m_Ltrivalibs_graphics_math_gpu_expr$package$().o8(brightness, ctx$2.C.k("threshold")));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_10.aL(new $c_sjsr_WrappedVarArgs($x_9.c(new ($d_T.r().C)([$x_8, $x_7, (((("  " + AssignTarget_this.X) + " = ") + value$proxy1.e) + ";")]))));
    }));
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
    try {
      var $x_11 = body$proxy1.h(ctx);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
    }
    program$3.a0 = $x_11;
    $m_sjs_js_ArrayOps$().M(reg.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3);
    }))(program$3)));
  }));
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy1.h(program);
  var b$1 = program.a0;
  var helperFns$proxy1 = program.ak();
  var id = p.o;
  p.o = ((1 + p.o) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["threshold"], []);
  var dict = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i = 0;
  while ((i < (names.length | 0))) {
    dict[names[i]] = i;
    i = ((1 + i) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["scene"], []);
  var dict$2 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["threshold"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.s()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a5, sd.a4, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;");
  console.log(wgsl);
  var module = p.f.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl)])))));
  var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])], []);
  var result = [];
  $m_sjs_js_ArrayOps$().M(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2) => (result.push(p.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0))));
  var x1 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().N(p.f, result));
  var \u03b46$ = x1;
  var bgls$2 = \u03b46$.Q;
  var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl = p.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
  if ((panelBgl !== null)) {
    var other$proxy1 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy1);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().N(p.f, allBgls);
  var thresholdShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
    var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
      var AssignTarget_this$1 = ctx$2$1.ah.a3("color");
      var value$proxy3 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().nH($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$1.C.k("samp"), ctx$2$1.ap.k("uv"), ctx$2$1.C.k("blurRadius"), null);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return (((("  " + AssignTarget_this$1.X) + " = ") + value$proxy3.e) + ";");
    }));
    var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$1;
    try {
      var $x_12 = body$proxy3.h(ctx$1);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$1;
    }
    program$3$1.a0 = $x_12;
    $m_sjs_js_ArrayOps$().M(reg$1.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3$1) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3$1);
    }))(program$3$1)));
  }));
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy2.h(program$2);
  var b$3 = program$2.a0;
  var helperFns$proxy2 = program$2.ak();
  var id$2 = p.o;
  p.o = ((1 + p.o) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict$3 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$3 = 0;
  while ((i$3 < (names$4.length | 0))) {
    dict$3[names$4[i$3]] = i$3;
    i$3 = ((1 + i$3) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$4 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$4 = 0;
  while ((i$4 < (names$5.length | 0))) {
    dict$4[names$5[i$4]] = i$4;
    i$4 = ((1 + i$4) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$3, helperFns$proxy2);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.s()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).J.s()], [])));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a5, sd$2.a4, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  console.log(wgsl$2);
  var module$2 = p.f.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$2)])))));
  var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []))], []);
  var result$2 = [];
  $m_sjs_js_ArrayOps$().M(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$1) => (result$2.push(p.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$1)])))))) | 0))));
  var x4 = new $c_T2(result$2, $m_Ltrivalibs_graphics_shader_layouts$().N(p.f, result$2));
  var \u03b46$$2 = x4;
  var bgls$4 = \u03b46$$2.Q;
  var entries$2$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl$2 = p.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$2)])))));
  if ((panelBgl$2 !== null)) {
    var other$proxy2 = [panelBgl$2];
    var allBgls$2 = bgls$4.concat(other$proxy2);
  } else {
    var allBgls$2 = bgls$4;
  }
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.f, allBgls$2);
  var downsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
    var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
      var AssignTarget_this$2 = ctx$2$2.ah.a3("color");
      var value$proxy5 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().jL($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$2.C.k("samp"), ctx$2$2.ap.k("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1(ctx$2$2.C.k("blurRadius"), 0.5), null);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return (((("  " + AssignTarget_this$2.X) + " = ") + value$proxy5.e) + ";");
    }));
    var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2;
    try {
      var $x_13 = body$proxy5.h(ctx$3);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2;
    }
    program$3$2.a0 = $x_13;
    $m_sjs_js_ArrayOps$().M(reg$2.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$7) => ((data$3$2) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$7, data$3$2);
    }))(program$3$2)));
  }));
  var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy3.h(program$3$3);
  var b$4 = program$3$3.a0;
  var helperFns$proxy3 = program$3$3.ak();
  var id$3 = p.o;
  p.o = ((1 + p.o) | 0);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict$5 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$5 = 0;
  while ((i$5 < (names$7.length | 0))) {
    dict$5[names$7[i$5]] = i$5;
    i$5 = ((1 + i$5) | 0);
  }
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$6 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$6 = 0;
  while ((i$6 < (names$8.length | 0))) {
    dict$6[names$8[i$6]] = i$6;
    i$6 = ((1 + i$6) | 0);
  }
  var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$4, helperFns$proxy3);
  var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.s()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).J.s()], [])));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.a5, sd$3.a4, fragBuiltinParams$3);
  var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  console.log(wgsl$3);
  var module$3 = p.f.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$3)])))));
  var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []))], []);
  var result$3 = [];
  $m_sjs_js_ArrayOps$().M(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$3) => (result$3.push(p.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$3)])))))) | 0))));
  var x7 = new $c_T2(result$3, $m_Ltrivalibs_graphics_shader_layouts$().N(p.f, result$3));
  var \u03b46$$3 = x7;
  var bgls$6 = \u03b46$$3.Q;
  var entries$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl$3 = p.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$3)])))));
  if ((panelBgl$3 !== null)) {
    var other$proxy3 = [panelBgl$3];
    var allBgls$3 = bgls$6.concat(other$proxy3);
  } else {
    var allBgls$3 = bgls$6;
  }
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.f, allBgls$3);
  var upsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
  var layers = [];
  var Bindable_this = p.b0(thresholdShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("threshold", threshold);
  var \u03b4scrutinee192 = e1$proxy1.m;
  var idx = (Bindable_this.y.ad.scene | 0);
  while (((Bindable_this.G.length | 0) <= idx)) {
    Bindable_this.G.push(null);
  }
  Bindable_this.G[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee192);
  Bindable_this.F = null;
  var \u03b4scrutinee196 = (+e2$proxy1.m);
  var idx$2 = (Bindable_this.y.H.threshold | 0);
  var existing = ((idx$2 < (Bindable_this.i.length | 0)) ? Bindable_this.i[idx$2] : null);
  var device$proxy1 = Bindable_this.gz.f;
  if ((existing !== null)) {
    existing.E.A(existing.j, \u03b4scrutinee196);
    var $x_16 = existing.D.queue;
    var $x_15 = existing.B;
    var s$proxy3 = existing.j;
    var $x_14 = s$proxy3.dv.buffer;
    $x_16.writeBuffer($x_15, 0.0, $x_14);
    var bb = existing;
  } else {
    var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$3 = new ArrayBuffer(4);
    var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var b$3$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), device$proxy1, uv$2);
    b$3$1.E.A(b$3$1.j, \u03b4scrutinee196);
    var $x_19 = b$3$1.D.queue;
    var $x_18 = b$3$1.B;
    var s$proxy4 = b$3$1.j;
    var $x_17 = s$proxy4.dv.buffer;
    $x_19.writeBuffer($x_18, 0.0, $x_17);
    var bb = b$3$1;
  }
  while (((Bindable_this.i.length | 0) <= idx$2)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$2] = bb;
  Bindable_this.F = null;
  layers.push(Bindable_this);
  var di = 0;
  while ((di < ((mipLevels - 1) | 0))) {
    var mipSource$1 = di;
    var mipTarget$1 = ((1 + di) | 0);
    var Bindable_this$5 = p.b0(downsampleShade, (void 0), mipSource$1, mipTarget$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee212 = e1$proxy2.m;
    var idx$3 = (Bindable_this$5.y.H.blurRadius | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$3)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$3] = \u03b4scrutinee212;
    Bindable_this$5.F = null;
    var \u03b4scrutinee225 = e2$proxy2.m;
    var idx$4 = (Bindable_this$5.y.H.samp | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$4)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$4] = \u03b4scrutinee225;
    Bindable_this$5.F = null;
    layers.push(Bindable_this$5);
    di = ((1 + di) | 0);
  }
  var ui = ((mipLevels - 2) | 0);
  while ((ui >= 0)) {
    var Bindable_this$8 = p.b0(upsampleShade, $m_Ltrivalibs_graphics_painter_BlendState$().kS, ((1 + ui) | 0), ui);
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee235 = e1$proxy3.m;
    var idx$5 = (Bindable_this$8.y.H.blurRadius | 0);
    while (((Bindable_this$8.i.length | 0) <= idx$5)) {
      Bindable_this$8.i.push(null);
    }
    Bindable_this$8.i[idx$5] = \u03b4scrutinee235;
    Bindable_this$8.F = null;
    var \u03b4scrutinee248 = e2$proxy3.m;
    var idx$6 = (Bindable_this$8.y.H.samp | 0);
    while (((Bindable_this$8.i.length | 0) <= idx$6)) {
      Bindable_this$8.i.push(null);
    }
    Bindable_this$8.i[idx$6] = \u03b4scrutinee248;
    Bindable_this$8.F = null;
    layers.push(Bindable_this$8);
    ui = ((ui - 1) | 0);
  }
  var bloomP = p.bg((void 0), (void 0), (void 0), (void 0), (void 0), mipLevels, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers, (void 0), (void 0), (void 0), (void 0), (void 0));
  var toneOn = (toneWhite > toneKnee);
  var toneLift = (toneOn ? (1.0 - toneKnee) : 0.0);
  var toneFalloff = (toneOn ? ((-1.0) / (toneWhite - toneKnee)) : (-1.0));
  var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
    var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
      var coord = $m_Ltrivalibs_graphics_math_gpu_ivec2$().aW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fu(ctx$2$3.fn));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var c = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("c");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var low = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("low");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var over = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("over");
      var $x_24 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_23 = $m_sjsr_package$();
      var $x_22 = c.u($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gk($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().i2($m_Ltrivalibs_graphics_math_gpu_expr$package$().h6($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().mX($m_Ltrivalibs_graphics_math_gpu_expr$package$().h6($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "bloom"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), ctx$2$3.C.k("intensity")))));
      var $x_21 = low.u($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().p7(c, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_vec3$().aW(ctx$2$3.C.k("knee"))));
      var $x_20 = over.u($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jJ(c, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), low));
      var AssignTarget_this$3 = ctx$2$3.ah.a3("color");
      var value$proxy7 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ae($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jr(low, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().br($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jJ($m_Ltrivalibs_graphics_math_gpu_vec3$().nt(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().o4($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().br(over, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), ctx$2$3.C.k("falloff")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$())), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), ctx$2$3.C.k("lift"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(1.0));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_24.aL(new $c_sjsr_WrappedVarArgs($x_23.c(new ($d_T.r().C)([$x_22, $x_21, $x_20, (((("  " + AssignTarget_this$3.X) + " = ") + value$proxy7.e) + ";")]))));
    }));
    var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$3;
    try {
      var $x_25 = body$proxy7.h(ctx$4);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$3;
    }
    program$3$4.a0 = $x_25;
    $m_sjs_js_ArrayOps$().M(reg$3.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$8) => ((data$3$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$8, data$3$3);
    }))(program$3$4)));
  }));
  var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy4.h(program$4);
  var b$5 = program$4.a0;
  var helperFns$proxy4 = program$4.ak();
  var id$4 = p.o;
  p.o = ((1 + p.o) | 0);
  var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["intensity"], $m_sjs_js_ArrayOpsCommon$().a(["knee"], $m_sjs_js_ArrayOpsCommon$().a(["lift"], $m_sjs_js_ArrayOpsCommon$().a(["falloff"], []))));
  var dict$7 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$7 = 0;
  while ((i$7 < (names$10.length | 0))) {
    dict$7[names$10[i$7]] = i$7;
    i$7 = ((1 + i$7) | 0);
  }
  var names$11 = $m_sjs_js_ArrayOpsCommon$().a(["scene"], $m_sjs_js_ArrayOpsCommon$().a(["bloom"], []));
  var dict$8 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$8 = 0;
  while ((i$8 < (names$11.length | 0))) {
    dict$8[names$11[i$8]] = i$8;
    i$8 = ((1 + i$8) | 0);
  }
  var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$5, helperFns$proxy4);
  var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["intensity"], $m_sjs_js_ArrayOpsCommon$().a(["knee"], $m_sjs_js_ArrayOpsCommon$().a(["lift"], $m_sjs_js_ArrayOpsCommon$().a(["falloff"], [])))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.s()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.s()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.s()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.s()], [])))));
  var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.a5, sd$4.a4, fragBuiltinParams$4);
  var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;\n@group(1) @binding(1) var bloom: texture_2d<f32>;");
  console.log(wgsl$4);
  var module$4 = p.f.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$4)])))));
  var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 3), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], []))))], []);
  var result$4 = [];
  $m_sjs_js_ArrayOps$().M(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$4) => (result$4.push(p.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$4)])))))) | 0))));
  var x10 = new $c_T2(result$4, $m_Ltrivalibs_graphics_shader_layouts$().N(p.f, result$4));
  var \u03b46$$4 = x10;
  var bgls$8 = \u03b46$$4.Q;
  var entries$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []));
  var panelBgl$4 = p.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$4)])))));
  if ((panelBgl$4 !== null)) {
    var other$proxy4 = [panelBgl$4];
    var allBgls$4 = bgls$8.concat(other$proxy4);
  } else {
    var allBgls$4 = bgls$8;
  }
  var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.f, allBgls$4);
  var compositeShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
  var Bindable_this$11 = p.b0(compositeShade, (void 0), (void 0), (void 0));
  var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("bloom", bloomP);
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("intensity", b$2);
  var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("knee", toneKnee);
  var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("lift", toneLift);
  var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("falloff", toneFalloff);
  var \u03b4scrutinee350 = e1$proxy4.m;
  var idx$7 = (Bindable_this$11.y.ad.scene | 0);
  while (((Bindable_this$11.G.length | 0) <= idx$7)) {
    Bindable_this$11.G.push(null);
  }
  Bindable_this$11.G[idx$7] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee350);
  Bindable_this$11.F = null;
  var \u03b4scrutinee366 = e2$proxy4.m;
  var idx$8 = (Bindable_this$11.y.ad.bloom | 0);
  while (((Bindable_this$11.G.length | 0) <= idx$8)) {
    Bindable_this$11.G.push(null);
  }
  Bindable_this$11.G[idx$8] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee366);
  Bindable_this$11.F = null;
  var \u03b4scrutinee370 = e3$proxy1.m;
  var idx$9 = (Bindable_this$11.y.H.intensity | 0);
  while (((Bindable_this$11.i.length | 0) <= idx$9)) {
    Bindable_this$11.i.push(null);
  }
  Bindable_this$11.i[idx$9] = \u03b4scrutinee370;
  Bindable_this$11.F = null;
  var \u03b4scrutinee383 = (+e4$proxy1.m);
  var idx$10 = (Bindable_this$11.y.H.knee | 0);
  var existing$2 = ((idx$10 < (Bindable_this$11.i.length | 0)) ? Bindable_this$11.i[idx$10] : null);
  var device$proxy2 = Bindable_this$11.gz.f;
  if ((existing$2 !== null)) {
    existing$2.E.A(existing$2.j, \u03b4scrutinee383);
    var $x_28 = existing$2.D.queue;
    var $x_27 = existing$2.B;
    var s$proxy5 = existing$2.j;
    var $x_26 = s$proxy5.dv.buffer;
    $x_28.writeBuffer($x_27, 0.0, $x_26);
    var bb$5 = existing$2;
  } else {
    var uv$2$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$4 = new ArrayBuffer(4);
    var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
    var b$4$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), device$proxy2, uv$2$1);
    b$4$1.E.A(b$4$1.j, \u03b4scrutinee383);
    var $x_31 = b$4$1.D.queue;
    var $x_30 = b$4$1.B;
    var s$proxy6 = b$4$1.j;
    var $x_29 = s$proxy6.dv.buffer;
    $x_31.writeBuffer($x_30, 0.0, $x_29);
    var bb$5 = b$4$1;
  }
  while (((Bindable_this$11.i.length | 0) <= idx$10)) {
    Bindable_this$11.i.push(null);
  }
  Bindable_this$11.i[idx$10] = bb$5;
  Bindable_this$11.F = null;
  var \u03b4scrutinee407 = (+e5$proxy1.m);
  var idx$11 = (Bindable_this$11.y.H.lift | 0);
  var existing$3 = ((idx$11 < (Bindable_this$11.i.length | 0)) ? Bindable_this$11.i[idx$11] : null);
  var device$proxy3 = Bindable_this$11.gz.f;
  if ((existing$3 !== null)) {
    existing$3.E.A(existing$3.j, \u03b4scrutinee407);
    var $x_34 = existing$3.D.queue;
    var $x_33 = existing$3.B;
    var s$proxy7 = existing$3.j;
    var $x_32 = s$proxy7.dv.buffer;
    $x_34.writeBuffer($x_33, 0.0, $x_32);
    var bb$6 = existing$3;
  } else {
    var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$5 = new ArrayBuffer(4);
    var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
    var b$5$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), device$proxy3, uv$3);
    b$5$1.E.A(b$5$1.j, \u03b4scrutinee407);
    var $x_37 = b$5$1.D.queue;
    var $x_36 = b$5$1.B;
    var s$proxy8 = b$5$1.j;
    var $x_35 = s$proxy8.dv.buffer;
    $x_37.writeBuffer($x_36, 0.0, $x_35);
    var bb$6 = b$5$1;
  }
  while (((Bindable_this$11.i.length | 0) <= idx$11)) {
    Bindable_this$11.i.push(null);
  }
  Bindable_this$11.i[idx$11] = bb$6;
  Bindable_this$11.F = null;
  var \u03b4scrutinee437 = (+e6$proxy1.m);
  var idx$12 = (Bindable_this$11.y.H.falloff | 0);
  var existing$4 = ((idx$12 < (Bindable_this$11.i.length | 0)) ? Bindable_this$11.i[idx$12] : null);
  var device$proxy4 = Bindable_this$11.gz.f;
  if ((existing$4 !== null)) {
    existing$4.E.A(existing$4.j, \u03b4scrutinee437);
    var $x_40 = existing$4.D.queue;
    var $x_39 = existing$4.B;
    var s$proxy9 = existing$4.j;
    var $x_38 = s$proxy9.dv.buffer;
    $x_40.writeBuffer($x_39, 0.0, $x_38);
    var bb$7 = existing$4;
  } else {
    var uv$4 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$6 = new ArrayBuffer(4);
    var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
    var b$6 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), device$proxy4, uv$4);
    b$6.E.A(b$6.j, \u03b4scrutinee437);
    var $x_43 = b$6.D.queue;
    var $x_42 = b$6.B;
    var s$proxy10 = b$6.j;
    var $x_41 = s$proxy10.dv.buffer;
    $x_43.writeBuffer($x_42, 0.0, $x_41);
    var bb$7 = b$6;
  }
  while (((Bindable_this$11.i.length | 0) <= idx$12)) {
    Bindable_this$11.i.push(null);
  }
  Bindable_this$11.i[idx$12] = bb$7;
  Bindable_this$11.F = null;
  return new $c_Lsketchlib_utils_bloom_Bloom$$anon$1(bloomP, p.bg((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this$11, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0)), p, b, b$2);
});
var $d_Lsketchlib_utils_bloom_Bloom$ = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$, "sketchlib.utils.bloom.Bloom$", ({
  cZ: 1
}));
var $n_Lsketchlib_utils_bloom_Bloom$;
function $m_Lsketchlib_utils_bloom_Bloom$() {
  if ((!$n_Lsketchlib_utils_bloom_Bloom$)) {
    $n_Lsketchlib_utils_bloom_Bloom$ = new $c_Lsketchlib_utils_bloom_Bloom$();
  }
  return $n_Lsketchlib_utils_bloom_Bloom$;
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_MirrorReflection$() {
  this.ij = 0.0;
  this.kk = null;
  $n_Lsketchlib_utils_mirror_MirrorReflection$ = this;
  this.ij = 2.0;
  this.kk = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("mirror_tex_height", "fn mirror_tex_height(tex: texture_2d<f32>) -> f32 {\n  return f32(textureDimensions(tex).y);\n}");
}
$p = $c_Lsketchlib_utils_mirror_MirrorReflection$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_MirrorReflection$;
/** @constructor */
function $h_Lsketchlib_utils_mirror_MirrorReflection$() {
}
$h_Lsketchlib_utils_mirror_MirrorReflection$.prototype = $p;
$p.nA = (function(p, camera, shapes, vpName, alphaScale, mirror, blurStrength, stretch, mipLevels, overscan, clearColor) {
  if ((mipLevels < 2)) {
    var message$proxy1 = (("MirrorReflection mipLevels must be >= 2 (got " + mipLevels) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).V;
  }
  if ((overscan < 0.0)) {
    var message$proxy2 = (("MirrorReflection overscan must be >= 0 (got " + overscan) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy2)).V;
  }
  var reflMat = mirror.pw();
  var p$proxy1 = ((mipLevels - 1) | 0);
  var maxRadius = ((+Math.pow(2.0, p$proxy1)) - 1.0);
  if ((((0.0062499999999999995 * blurStrength) * p.h5()) > maxRadius)) {
    var $x_2 = p.h5();
    var p$proxy2 = ((0.0062499999999999995 * blurStrength) * p.h5());
    var $x_1 = $m_RTLong$().h3((+Math.round(p$proxy2)));
    var x_$_lo = $x_1.l;
    var x_$_hi = $x_1.h;
    var s = (((((((("MirrorReflection: blurStrength " + blurStrength) + "% of height ") + $x_2) + " ") + ("needs a " + ((4.294967296E9 * x_$_hi) + (x_$_lo >>> 0.0)))) + " px mip ") + ((("radius, beyond the reach of " + mipLevels) + " mip levels (") + maxRadius)) + " px) \u2014 the blur will saturate before alphaScale. Raise mipLevels.");
    console.log(s);
  }
  var pn = mirror.gu;
  var pd = mirror.gt;
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.au;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var uVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.f, uv$proxy1);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy2 = ul$proxy2.au;
  var buffer$2 = new ArrayBuffer(64);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var uInvVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.f, uv$proxy2);
  var value$proxy1 = (0.0062499999999999995 * blurStrength);
  var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy3 = ul$proxy3.au;
  var buffer$3 = new ArrayBuffer(4);
  var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), p.f, uv$proxy3);
  b.E.A(b.j, value$proxy1);
  var $x_5 = b.D.queue;
  var $x_4 = b.B;
  var s$proxy1 = b.j;
  var $x_3 = s$proxy1.dv.buffer;
  $x_5.writeBuffer($x_4, 0.0, $x_3);
  var ul$proxy4 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy4 = ul$proxy4.au;
  var buffer$4 = new ArrayBuffer(4);
  var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), p.f, uv$proxy4);
  b$2.E.A(b$2.j, stretch);
  var $x_8 = b$2.D.queue;
  var $x_7 = b$2.B;
  var s$proxy2 = b$2.j;
  var $x_6 = s$proxy2.dv.buffer;
  $x_8.writeBuffer($x_7, 0.0, $x_6);
  var ul$proxy5 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy5 = ul$proxy5.au;
  var buffer$5 = new ArrayBuffer(4);
  var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
  var b$3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), p.f, uv$proxy5);
  b$3.E.A(b$3.j, 0.0);
  var $x_11 = b$3.D.queue;
  var $x_10 = b$3.B;
  var s$proxy3 = b$3.j;
  var $x_9 = s$proxy3.dv.buffer;
  $x_11.writeBuffer($x_10, 0.0, $x_9);
  var value$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec4(1.0, 1.0, 0.0, 0.0);
  var ul$proxy6 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$());
  var uv$proxy6 = ul$proxy6.au;
  var buffer$6 = new ArrayBuffer(16);
  var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
  var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), p.f, uv$proxy6);
  b$4.E.A(b$4.j, value$proxy2);
  var $x_14 = b$4.D.queue;
  var $x_13 = b$4.B;
  var s$proxy4 = b$4.j;
  var $x_12 = s$proxy4.dv.buffer;
  $x_14.writeBuffer($x_13, 0.0, $x_12);
  var sampler = p.jD();
  var mirrorPanel = p.bg((void 0), (void 0), clearColor, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
  var dict$proxy1 = mirrorPanel.gJ;
  dict$proxy1[vpName] = uVp;
  var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
    var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
      var uv$6 = ctx$2.ap.k("uv");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var d = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("d");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var ndc = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("ndc");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var worldH = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldH");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var worldPos = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldPos");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var t = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("t");
      var $x_23 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_22 = $m_sjsr_package$();
      var $x_21 = d.u($m_Ltrivalibs_graphics_math_gpu_expr$package$().mr($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "depth"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().aW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fu(ctx$2.fn))));
      var $x_20 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
      var $x_19 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().fr($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().bs(uv$6), 2.0), 1.0);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().gl(uv$6), 2.0);
      var $x_18 = ndc.u($x_20.aM($x_19, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aZ().b1((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(1.0)) + " - ") + e$proxy1.e) + ")")), d));
      var $x_17 = worldH.u($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().hs(ctx$2.C.k("invVp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h4(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ae(ndc, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
      var $x_16 = worldPos.u($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().mu($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gk(worldH), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().ic(worldH)));
      var $x_15 = t.u($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().h1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jo($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().fr($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().nW($m_Ltrivalibs_graphics_math_gpu_vec3$().aM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(pn.w), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(pn.t), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(pn.x)), worldPos), pd), alphaScale)));
      var AssignTarget_this = ctx$2.ah.a3("color");
      var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ae($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gk($m_Ltrivalibs_graphics_math_gpu_expr$package$().h6($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().aW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fu(ctx$2.fn)))), t);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_23.aL(new $c_sjsr_WrappedVarArgs($x_22.c(new ($d_T.r().C)([$x_21, $x_18, $x_17, $x_16, $x_15, (((("  " + AssignTarget_this.X) + " = ") + value$proxy3.e) + ";")]))));
    }));
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg;
    try {
      var $x_24 = body$proxy1.h(ctx);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev;
    }
    program$3.a0 = $x_24;
    $m_sjs_js_ArrayOps$().M(reg.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$4) => ((data$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$4, data$3);
    }))(program$3)));
  }));
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy1.h(program);
  var b$1 = program.a0;
  var helperFns$proxy1 = program.ak();
  var id = p.o;
  p.o = ((1 + p.o) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["invVp"], []);
  var dict = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i = 0;
  while ((i < (names.length | 0))) {
    dict[names[i]] = i;
    i = ((1 + i) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["col"], $m_sjs_js_ArrayOpsCommon$().a(["depth"], []));
  var dict$2 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["invVp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).J.s()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a5, sd.a4, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;\n@group(1) @binding(1) var depth: texture_depth_2d;");
  console.log(wgsl);
  var module = p.f.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl)])))));
  var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])], []);
  var result = [];
  $m_sjs_js_ArrayOps$().M(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2) => (result.push(p.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0))));
  var x1 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().N(p.f, result));
  var \u03b46$ = x1;
  var bgls$2 = \u03b46$.Q;
  var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("sampleType", "depth")])))))]))))], []));
  var panelBgl = p.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
  if ((panelBgl !== null)) {
    var other$proxy1 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy1);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().N(p.f, allBgls);
  var bakeShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
    var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
      var AssignTarget_this$1 = ctx$2$1.ah.a3("color");
      var value$proxy5 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().jL($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$1.C.k("samp"), ctx$2$1.ap.k("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(4.0), null);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return (((("  " + AssignTarget_this$1.X) + " = ") + value$proxy5.e) + ";");
    }));
    var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$1;
    try {
      var $x_25 = body$proxy3.h(ctx$1);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$1;
    }
    program$3$1.a0 = $x_25;
    $m_sjs_js_ArrayOps$().M(reg$1.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3$1) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3$1);
    }))(program$3$1)));
  }));
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy2.h(program$2);
  var b$5 = program$2.a0;
  var helperFns$proxy2 = program$2.ak();
  var id$2 = p.o;
  p.o = ((1 + p.o) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["samp"], []);
  var dict$3 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$3 = 0;
  while ((i$3 < (names$4.length | 0))) {
    dict$3[names$4[i$3]] = i$3;
    i$3 = ((1 + i$3) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$4 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$4 = 0;
  while ((i$4 < (names$5.length | 0))) {
    dict$4[names$5[i$4]] = i$4;
    i$4 = ((1 + i$4) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$5, helperFns$proxy2);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["samp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).J.s()], []));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a5, sd$2.a4, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  console.log(wgsl$2);
  var module$2 = p.f.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$2)])))));
  var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], [])], []);
  var result$2 = [];
  $m_sjs_js_ArrayOps$().M(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$1) => (result$2.push(p.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$1)])))))) | 0))));
  var x4 = new $c_T2(result$2, $m_Ltrivalibs_graphics_shader_layouts$().N(p.f, result$2));
  var \u03b46$$2 = x4;
  var bgls$4 = \u03b46$$2.Q;
  var entries$2$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl$2 = p.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$2)])))));
  if ((panelBgl$2 !== null)) {
    var other$proxy2 = [panelBgl$2];
    var allBgls$2 = bgls$4.concat(other$proxy2);
  } else {
    var allBgls$2 = bgls$4;
  }
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.f, allBgls$2);
  var downBlurShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var blurLayers = [];
  var Bindable_this = p.b0(bakeShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("col", mirrorPanel);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("depth", mirrorPanel.mj(0, (-1), true));
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("invVp", uInvVp);
  var \u03b4scrutinee134 = e1$proxy1.m;
  var idx = (Bindable_this.y.ad.col | 0);
  while (((Bindable_this.G.length | 0) <= idx)) {
    Bindable_this.G.push(null);
  }
  Bindable_this.G[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee134);
  Bindable_this.F = null;
  var \u03b4scrutinee144 = e2$proxy1.m;
  var idx$2 = (Bindable_this.y.ad.depth | 0);
  while (((Bindable_this.G.length | 0) <= idx$2)) {
    Bindable_this.G.push(null);
  }
  Bindable_this.G[idx$2] = \u03b4scrutinee144;
  Bindable_this.F = null;
  var \u03b4scrutinee148 = e3$proxy1.m;
  var idx$3 = (Bindable_this.y.H.invVp | 0);
  while (((Bindable_this.i.length | 0) <= idx$3)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$3] = \u03b4scrutinee148;
  Bindable_this.F = null;
  blurLayers.push(Bindable_this);
  var mi = 0;
  while ((mi < ((mipLevels - 1) | 0))) {
    var mipSource$1 = mi;
    var mipTarget$1 = ((1 + mi) | 0);
    var Bindable_this$5 = p.b0(downBlurShade, (void 0), mipSource$1, mipTarget$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee156 = e1$proxy2.m;
    var idx$4 = (Bindable_this$5.y.H.samp | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$4)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$4] = \u03b4scrutinee156;
    Bindable_this$5.F = null;
    blurLayers.push(Bindable_this$5);
    mi = ((1 + mi) | 0);
  }
  var _blurPanel = p.bg((void 0), (void 0), (void 0), (void 0), (void 0), mipLevels, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), blurLayers, (void 0), (void 0), (void 0), (void 0), (void 0));
  var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
    var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var uv$7 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("uv");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var t$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("t");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var h = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("h");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var radius = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("radius");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var lod = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("lod");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var s$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("s");
      var $x_34 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_33 = $m_sjsr_package$();
      var $x_32 = uv$7.u($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().nq($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().pa(ctx$2$2.ap.k("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fu(ctx$2$2.C.k("crop"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().qj(ctx$2$2.C.k("crop"))));
      var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy1 = this.kk;
      var a1$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col");
      var s$proxy5 = WgslFn$_this.mn(fn$proxy1, a1$proxy1);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var $x_31 = h.u($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy5));
      var $x_30 = t$1.u($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().ic($m_Ltrivalibs_graphics_math_gpu_expr$package$().gg($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), uv$7, ctx$2$2.C.k("samp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(0.0))));
      var $x_29 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var e$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().gZ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().gZ(t$1, ctx$2$2.C.k("blurStrength")), ctx$2$2.C.k("visHeight"));
      var $x_28 = radius.u($x_29.mU($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aZ().b1((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(1.0)) + " + ") + e$proxy2.e) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(maxRadius)));
      var $x_27 = lod.u($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().mC(radius));
      var $x_26 = s$1.u($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().me($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().gZ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1(ctx$2$2.C.k("stretch"), this.ij), radius), h));
      var AssignTarget_this$2 = ctx$2$2.ah.a3("color");
      var value$proxy8 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().i2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().i2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().i2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().i1($m_Ltrivalibs_graphics_math_gpu_expr$package$().gg($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), uv$7, ctx$2$2.C.k("samp"), lod), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), 0.4), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().i1($m_Ltrivalibs_graphics_math_gpu_expr$package$().gg($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().jI(uv$7, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_vec2$().ae($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(0.0), s$1)), ctx$2$2.C.k("samp"), lod), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), 0.3)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().i1($m_Ltrivalibs_graphics_math_gpu_expr$package$().gg($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().jI(uv$7, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_vec2$().ae($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1(s$1, 2.0))), ctx$2$2.C.k("samp"), lod), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), 0.2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().i1($m_Ltrivalibs_graphics_math_gpu_expr$package$().gg($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().jI(uv$7, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_vec2$().ae($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1(s$1, 3.0))), ctx$2$2.C.k("samp"), lod), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), 0.1));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_34.aL(new $c_sjsr_WrappedVarArgs($x_33.c(new ($d_T.r().C)([$x_32, $x_31, $x_30, $x_28, $x_27, $x_26, (((("  " + AssignTarget_this$2.X) + " = ") + value$proxy8.e) + ";")]))));
    }));
    var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = reg$2;
    try {
      var $x_35 = body$proxy5.h(ctx$3);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().l = prev$2;
    }
    program$3$2.a0 = $x_35;
    $m_sjs_js_ArrayOps$().M(reg$2.a2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3$2) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3$2);
    }))(program$3$2)));
  }));
  var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy3.h(program$3$3);
  var b$6 = program$3$3.a0;
  var helperFns$proxy3 = program$3$3.ak();
  var id$3 = p.o;
  p.o = ((1 + p.o) | 0);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().a(["stretch"], $m_sjs_js_ArrayOpsCommon$().a(["visHeight"], $m_sjs_js_ArrayOpsCommon$().a(["crop"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])))));
  var dict$5 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$5 = 0;
  while ((i$5 < (names$7.length | 0))) {
    dict$5[names$7[i$5]] = i$5;
    i$5 = ((1 + i$5) | 0);
  }
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["col"], []);
  var dict$6 = $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
  var i$6 = 0;
  while ((i$6 < (names$8.length | 0))) {
    dict$6[names$8[i$6]] = i$6;
    i$6 = ((1 + i$6) | 0);
  }
  var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$6, helperFns$proxy3);
  var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().a(["stretch"], $m_sjs_js_ArrayOpsCommon$().a(["visHeight"], $m_sjs_js_ArrayOpsCommon$().a(["crop"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.s()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.s()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).J.s()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$()).J.s()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).J.s()], []))))));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.a5, sd$3.a4, fragBuiltinParams$3);
  var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;");
  console.log(wgsl$3);
  var module$3 = p.f.createShaderModule($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$3)])))));
  var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 3), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 4), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], [])))))], []);
  var result$3 = [];
  $m_sjs_js_ArrayOps$().M(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$3) => (result$3.push(p.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$3)])))))) | 0))));
  var x7 = new $c_T2(result$3, $m_Ltrivalibs_graphics_shader_layouts$().N(p.f, result$3));
  var \u03b46$$3 = x7;
  var bgls$6 = \u03b46$$3.Q;
  var entries$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl$3 = p.f.createBindGroupLayout($m_sjs_js_special_package$().d(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$3)])))));
  if ((panelBgl$3 !== null)) {
    var other$proxy3 = [panelBgl$3];
    var allBgls$3 = bgls$6.concat(other$proxy3);
  } else {
    var allBgls$3 = bgls$6;
  }
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.f, allBgls$3);
  var resolveShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
  var Bindable_this$7 = p.b0(resolveShade, (void 0), (void 0), (void 0));
  var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("col", _blurPanel);
  var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurStrength", b);
  var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("stretch", b$2);
  var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("visHeight", b$3);
  var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("crop", b$4);
  var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
  var \u03b4scrutinee258 = e1$proxy3.m;
  var idx$5 = (Bindable_this$7.y.ad.col | 0);
  while (((Bindable_this$7.G.length | 0) <= idx$5)) {
    Bindable_this$7.G.push(null);
  }
  Bindable_this$7.G[idx$5] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee258);
  Bindable_this$7.F = null;
  var \u03b4scrutinee262 = e2$proxy2.m;
  var idx$6 = (Bindable_this$7.y.H.blurStrength | 0);
  while (((Bindable_this$7.i.length | 0) <= idx$6)) {
    Bindable_this$7.i.push(null);
  }
  Bindable_this$7.i[idx$6] = \u03b4scrutinee262;
  Bindable_this$7.F = null;
  var \u03b4scrutinee275 = e3$proxy2.m;
  var idx$7 = (Bindable_this$7.y.H.stretch | 0);
  while (((Bindable_this$7.i.length | 0) <= idx$7)) {
    Bindable_this$7.i.push(null);
  }
  Bindable_this$7.i[idx$7] = \u03b4scrutinee275;
  Bindable_this$7.F = null;
  var \u03b4scrutinee292 = e4$proxy1.m;
  var idx$8 = (Bindable_this$7.y.H.visHeight | 0);
  while (((Bindable_this$7.i.length | 0) <= idx$8)) {
    Bindable_this$7.i.push(null);
  }
  Bindable_this$7.i[idx$8] = \u03b4scrutinee292;
  Bindable_this$7.F = null;
  var \u03b4scrutinee313 = e5$proxy1.m;
  var idx$9 = (Bindable_this$7.y.H.crop | 0);
  while (((Bindable_this$7.i.length | 0) <= idx$9)) {
    Bindable_this$7.i.push(null);
  }
  Bindable_this$7.i[idx$9] = \u03b4scrutinee313;
  Bindable_this$7.F = null;
  var \u03b4scrutinee335 = e6$proxy1.m;
  var idx$10 = (Bindable_this$7.y.H.samp | 0);
  while (((Bindable_this$7.i.length | 0) <= idx$10)) {
    Bindable_this$7.i.push(null);
  }
  Bindable_this$7.i[idx$10] = \u03b4scrutinee335;
  Bindable_this$7.F = null;
  var layers$2 = [Bindable_this$7];
  return new $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1(mirrorPanel, p.bg((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers$2, (void 0), (void 0), (void 0), (void 0), (void 0)), camera, blurStrength, stretch, overscan, _blurPanel, b$3, b$4, b, 0.0062499999999999995, b$2, reflMat, uVp, uInvVp, p);
});
var $d_Lsketchlib_utils_mirror_MirrorReflection$ = new $TypeData().i($c_Lsketchlib_utils_mirror_MirrorReflection$, "sketchlib.utils.mirror.MirrorReflection$", ({
  d2: 1
}));
var $n_Lsketchlib_utils_mirror_MirrorReflection$;
function $m_Lsketchlib_utils_mirror_MirrorReflection$() {
  if ((!$n_Lsketchlib_utils_mirror_MirrorReflection$)) {
    $n_Lsketchlib_utils_mirror_MirrorReflection$ = new $c_Lsketchlib_utils_mirror_MirrorReflection$();
  }
  return $n_Lsketchlib_utils_mirror_MirrorReflection$;
}
/** @constructor */
function $c_Ltrivalibs_dev_DevHandle(resetFn) {
}
$p = $c_Ltrivalibs_dev_DevHandle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_DevHandle;
/** @constructor */
function $h_Ltrivalibs_dev_DevHandle() {
}
$h_Ltrivalibs_dev_DevHandle.prototype = $p;
var $d_Ltrivalibs_dev_DevHandle = new $TypeData().i($c_Ltrivalibs_dev_DevHandle, "trivalibs.dev.DevHandle", ({
  d4: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.fQ = null;
  this.io = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.fQ = [];
  this.io = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.nS = (function() {
  return (import.meta.hot !== (void 0));
});
$p.p6 = (function() {
  var u = import.meta.url;
  var end = (u.indexOf("?") | 0);
  if ((end < 0)) {
    end = (u.indexOf("#") | 0);
  }
  if ((end >= 0)) {
    var endIndex = end;
    return u.substring(0, endIndex);
  } else {
    return u;
  }
});
$p.pS = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().p6()) + ":") + label);
});
$p.jH = (function() {
  return window.sessionStorage;
});
$p.pv = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().jH().getItem(key);
  if ((raw === null)) {
    return null;
  } else {
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }
});
$p.qb = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().jH().setItem(key, JSON.stringify(json));
});
$p.pA = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().jH().removeItem(key);
});
$p.o0 = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().io)) {
    $m_Ltrivalibs_dev_dev$package$().io = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().fQ.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().fQ[i].h0();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.px = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().o0();
  $m_Ltrivalibs_dev_dev$package$().fQ.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().mA($m_Ltrivalibs_dev_dev$package$().fQ, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().fQ.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  d5: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.a9.w, cam.a9.t, cam.a9.x, cam.aw, cam.bb];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.ba;
      var aspect$1 = cam.fm;
      var near$1 = cam.g7;
      var far$1 = cam.g6;
      cam.jE(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
    }
  }
}
/** @constructor */
function $c_Ltrivalibs_dev_devPreserve$() {
}
$p = $c_Ltrivalibs_dev_devPreserve$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_devPreserve$;
/** @constructor */
function $h_Ltrivalibs_dev_devPreserve$() {
}
$h_Ltrivalibs_dev_devPreserve$.prototype = $p;
$p.nB = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().nS())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().pS(label);
    var initPos = cam.a9;
    var initRotH = cam.aw;
    var initRotV = cam.bb;
    var stored = $m_Ltrivalibs_dev_dev$package$().pv(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.h0();
      $m_Ltrivalibs_dev_dev$package$().pA(sk);
      var fov$proxy1 = cam.ba;
      var aspect$proxy1 = cam.fm;
      var near$proxy1 = cam.g7;
      var far$proxy1 = cam.g6;
      cam.jE(fov$proxy1, aspect$proxy1, near$proxy1, far$proxy1, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().px(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().qb(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  d6: 1
}));
var $n_Ltrivalibs_dev_devPreserve$;
function $m_Ltrivalibs_dev_devPreserve$() {
  if ((!$n_Ltrivalibs_dev_devPreserve$)) {
    $n_Ltrivalibs_dev_devPreserve$ = new $c_Ltrivalibs_dev_devPreserve$();
  }
  return $n_Ltrivalibs_dev_devPreserve$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_BufferBinding(buffer, device, uv) {
  this.j = null;
  this.D = null;
  this.E = null;
  this.B = null;
  this.j = buffer;
  this.D = device;
  this.E = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.B = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ay)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  ay: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box(center, size, frontTopLeft, frontTopRight, frontBottomLeft, frontBottomRight, backTopLeft, backTopRight, backBottomLeft, backBottomRight) {
  this.fT = null;
  this.fU = null;
  this.fd = null;
  this.fe = null;
  this.fR = null;
  this.fS = null;
  this.fb = null;
  this.fc = null;
  this.fT = frontTopLeft;
  this.fU = frontTopRight;
  this.fd = frontBottomLeft;
  this.fe = frontBottomRight;
  this.fR = backTopLeft;
  this.fS = backTopRight;
  this.fb = backBottomLeft;
  this.fc = backBottomRight;
}
$p = $c_Ltrivalibs_graphics_geometry_Box.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box() {
}
$h_Ltrivalibs_graphics_geometry_Box.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Box = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box, "trivalibs.graphics.geometry.Box", ({
  dd: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box$() {
}
$p = $c_Ltrivalibs_graphics_geometry_Box$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box$() {
}
$h_Ltrivalibs_graphics_geometry_Box$.prototype = $p;
$p.js = (function(center, width, height, depth) {
  var hw = (0.5 * width);
  var hh = (0.5 * height);
  var hd = (0.5 * depth);
  var cx = center.w;
  var cy = center.t;
  var cz = center.x;
  return new $c_Ltrivalibs_graphics_geometry_Box(center, new $c_Ltrivalibs_graphics_math_cpu_Vec3(width, height, depth), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz - hd)));
});
var $d_Ltrivalibs_graphics_geometry_Box$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box$, "trivalibs.graphics.geometry.Box$", ({
  de: 1
}));
var $n_Ltrivalibs_graphics_geometry_Box$;
function $m_Ltrivalibs_graphics_geometry_Box$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Box$)) {
    $n_Ltrivalibs_graphics_geometry_Box$ = new $c_Ltrivalibs_graphics_geometry_Box$();
  }
  return $n_Ltrivalibs_graphics_geometry_Box$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_BufferedGeometry(vertices, indices) {
  this.ip = null;
  this.hz = null;
  this.ip = vertices;
  this.hz = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  df: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FaceData(normal, section) {
}
$p = $c_Ltrivalibs_graphics_geometry_FaceData.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FaceData;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FaceData() {
}
$h_Ltrivalibs_graphics_geometry_FaceData.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_FaceData = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FaceData, "trivalibs.graphics.geometry.FaceData", ({
  dg: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.iq = null;
  this.b7 = null;
  this.kv = null;
  this.hB = null;
  this.hA = null;
  this.iq = evidence$1;
  this.b7 = [];
  this.kv = [];
  this.hB = [];
  this.hA = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.no = (function(face, normal, section) {
  var faceIdx = (this.b7.length | 0);
  this.b7.push(face);
  this.kv.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().pm(this.iq.n0(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().og(Object, this.hA, key)) {
      var $x_2 = this.hB;
      var dict = this.hA;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().ke.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.kA.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.hB.length | 0);
      var dict$1 = this.hA;
      dict$1[key] = idx;
      this.hB.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.iq.n0(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  dj: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh$() {
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh$() {
}
$h_Ltrivalibs_graphics_geometry_Mesh$.prototype = $p;
$p.ny = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().np(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  dk: 1
}));
var $n_Ltrivalibs_graphics_geometry_Mesh$;
function $m_Ltrivalibs_graphics_geometry_Mesh$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Mesh$)) {
    $n_Ltrivalibs_graphics_geometry_Mesh$ = new $c_Ltrivalibs_graphics_geometry_Mesh$();
  }
  return $n_Ltrivalibs_graphics_geometry_Mesh$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Plane(normal, d) {
  this.gu = null;
  this.gt = 0.0;
  this.gu = normal;
  this.gt = d;
}
$p = $c_Ltrivalibs_graphics_geometry_Plane.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane() {
}
$h_Ltrivalibs_graphics_geometry_Plane.prototype = $p;
$p.pw = (function() {
  var a = this.gu.w;
  var b = this.gu.t;
  var c = this.gu.x;
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((1.0 - ((2.0 * a) * a)), (((-2.0) * a) * b), (((-2.0) * a) * c), 0.0, (((-2.0) * a) * b), (1.0 - ((2.0 * b) * b)), (((-2.0) * b) * c), 0.0, (((-2.0) * a) * c), (((-2.0) * b) * c), (1.0 - ((2.0 * c) * c)), 0.0, ((2.0 * a) * this.gt), ((2.0 * b) * this.gt), ((2.0 * c) * this.gt), 1.0);
});
var $d_Ltrivalibs_graphics_geometry_Plane = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane, "trivalibs.graphics.geometry.Plane", ({
  dl: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Plane$() {
  this.kw = null;
  $n_Ltrivalibs_graphics_geometry_Plane$ = this;
  this.kw = new $c_Ltrivalibs_graphics_geometry_Plane(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), 0.0);
}
$p = $c_Ltrivalibs_graphics_geometry_Plane$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane$() {
}
$h_Ltrivalibs_graphics_geometry_Plane$.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Plane$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane$, "trivalibs.graphics.geometry.Plane$", ({
  dm: 1
}));
var $n_Ltrivalibs_graphics_geometry_Plane$;
function $m_Ltrivalibs_graphics_geometry_Plane$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Plane$)) {
    $n_Ltrivalibs_graphics_geometry_Plane$ = new $c_Ltrivalibs_graphics_geometry_Plane$();
  }
  return $n_Ltrivalibs_graphics_geometry_Plane$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIndex, vertexSlot) {
  this.ne = 0;
  this.nf = 0;
  this.ne = faceIndex;
  this.nf = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  dp: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.kA = null;
  this.kA = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  du: 1
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
$p.p3 = (function(idxBuf, vertexCount) {
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
  dv: 1
}));
var $n_Ltrivalibs_graphics_geometry_buffers$package$;
function $m_Ltrivalibs_graphics_geometry_buffers$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_buffers$package$)) {
    $n_Ltrivalibs_graphics_geometry_buffers$package$ = new $c_Ltrivalibs_graphics_geometry_buffers$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_buffers$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_mesh$package$() {
}
$p = $c_Ltrivalibs_graphics_geometry_mesh$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_mesh$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_mesh$package$() {
}
$h_Ltrivalibs_graphics_geometry_mesh$package$.prototype = $p;
$p.np = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.no(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  dw: 1
}));
var $n_Ltrivalibs_graphics_geometry_mesh$package$;
function $m_Ltrivalibs_graphics_geometry_mesh$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_mesh$package$)) {
    $n_Ltrivalibs_graphics_geometry_mesh$package$ = new $c_Ltrivalibs_graphics_geometry_mesh$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_mesh$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_package$package$() {
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$() {
}
$h_Ltrivalibs_graphics_geometry_package$package$.prototype = $p;
$p.pm = (function(v) {
  return (((($doubleToInt((10000.0 * v.w)) + ",") + $doubleToInt((10000.0 * v.t))) + ",") + $doubleToInt((10000.0 * v.x)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  dx: 1
}));
var $n_Ltrivalibs_graphics_geometry_package$package$;
function $m_Ltrivalibs_graphics_geometry_package$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_package$package$)) {
    $n_Ltrivalibs_graphics_geometry_package$package$ = new $c_Ltrivalibs_graphics_geometry_package$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_package$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
}
$p = $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
}
$h_Ltrivalibs_graphics_geometry_polygon$package$Quad$.prototype = $p;
$p.aB = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  dz: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Quad$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($thiz, fovY, aspect, near, far) {
  var x = (0.5 * fovY);
  var f = (1.0 / (+Math.tan(x)));
  var rInv = (1.0 / (near - far));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((f / aspect), 0.0, 0.0, 0.0, 0.0, f, 0.0, 0.0, 0.0, 0.0, (far * rInv), (-1.0), 0.0, 0.0, ((near * far) * rInv), 0.0);
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($thiz, m, x$2, other) {
  var a00 = (+x$2.h7(m));
  var a01 = (+x$2.h8(m));
  var a02 = (+x$2.h9(m));
  var a03 = (+x$2.ha(m));
  var a10 = (+x$2.hb(m));
  var a11 = (+x$2.hc(m));
  var a12 = (+x$2.hd(m));
  var a13 = (+x$2.he(m));
  var a20 = (+x$2.hf(m));
  var a21 = (+x$2.hg(m));
  var a22 = (+x$2.hh(m));
  var a23 = (+x$2.hi(m));
  var a30 = (+x$2.hj(m));
  var a31 = (+x$2.hk(m));
  var a32 = (+x$2.hl(m));
  var a33 = (+x$2.hm(m));
  var b00 = (+x$2.h7(other));
  var b01 = (+x$2.h8(other));
  var b02 = (+x$2.h9(other));
  var b03 = (+x$2.ha(other));
  var b10 = (+x$2.hb(other));
  var b11 = (+x$2.hc(other));
  var b12 = (+x$2.hd(other));
  var b13 = (+x$2.he(other));
  var b20 = (+x$2.hf(other));
  var b21 = (+x$2.hg(other));
  var b22 = (+x$2.hh(other));
  var b23 = (+x$2.hi(other));
  var b30 = (+x$2.hj(other));
  var b31 = (+x$2.hk(other));
  var b32 = (+x$2.hl(other));
  var b33 = (+x$2.hm(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.h7(m));
  var a01 = (+x$2.h8(m));
  var a02 = (+x$2.h9(m));
  var a03 = (+x$2.ha(m));
  var a10 = (+x$2.hb(m));
  var a11 = (+x$2.hc(m));
  var a12 = (+x$2.hd(m));
  var a13 = (+x$2.he(m));
  var a20 = (+x$2.hf(m));
  var a21 = (+x$2.hg(m));
  var a22 = (+x$2.hh(m));
  var a23 = (+x$2.hi(m));
  var a30 = (+x$2.hj(m));
  var a31 = (+x$2.hk(m));
  var a32 = (+x$2.hl(m));
  var a33 = (+x$2.hm(m));
  var b00 = ((a00 * a11) - (a01 * a10));
  var b01 = ((a00 * a12) - (a02 * a10));
  var b02 = ((a00 * a13) - (a03 * a10));
  var b03 = ((a01 * a12) - (a02 * a11));
  var b04 = ((a01 * a13) - (a03 * a11));
  var b05 = ((a02 * a13) - (a03 * a12));
  var b06 = ((a20 * a31) - (a21 * a30));
  var b07 = ((a20 * a32) - (a22 * a30));
  var b08 = ((a20 * a33) - (a23 * a30));
  var b09 = ((a21 * a32) - (a22 * a31));
  var b10 = ((a21 * a33) - (a23 * a31));
  var b11 = ((a22 * a33) - (a23 * a32));
  var det = ((((((b00 * b11) - (b01 * b10)) + (b02 * b09)) + (b03 * b08)) - (b04 * b07)) + (b05 * b06));
  var invDet = (1.0 / det);
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a11 * b11) - (a12 * b10)) + (a13 * b09)) * invDet), (((((-a01) * b11) + (a02 * b10)) - (a03 * b09)) * invDet), ((((a31 * b05) - (a32 * b04)) + (a33 * b03)) * invDet), (((((-a21) * b05) + (a22 * b04)) - (a23 * b03)) * invDet), (((((-a10) * b11) + (a12 * b08)) - (a13 * b07)) * invDet), ((((a00 * b11) - (a02 * b08)) + (a03 * b07)) * invDet), (((((-a30) * b05) + (a32 * b02)) - (a33 * b01)) * invDet), ((((a20 * b05) - (a22 * b02)) + (a23 * b01)) * invDet), ((((a10 * b10) - (a11 * b08)) + (a13 * b06)) * invDet), (((((-a00) * b10) + (a01 * b08)) - (a03 * b06)) * invDet), ((((a30 * b04) - (a31 * b02)) + (a33 * b00)) * invDet), (((((-a20) * b04) + (a21 * b02)) - (a23 * b00)) * invDet), (((((-a10) * b09) + (a11 * b07)) - (a12 * b06)) * invDet), ((((a00 * b09) - (a01 * b07)) + (a02 * b06)) * invDet), (((((-a30) * b03) + (a31 * b01)) - (a32 * b00)) * invDet), ((((a20 * b03) - (a21 * b01)) + (a22 * b00)) * invDet));
}
function $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($thiz, m, mb, other, x$4) {
  mb.mD(m, (+x$4.h7(other)));
  mb.mE(m, (+x$4.h8(other)));
  mb.mF(m, (+x$4.h9(other)));
  mb.mG(m, (+x$4.ha(other)));
  mb.mH(m, (+x$4.hb(other)));
  mb.mI(m, (+x$4.hc(other)));
  mb.mJ(m, (+x$4.hd(other)));
  mb.mK(m, (+x$4.he(other)));
  mb.mL(m, (+x$4.hf(other)));
  mb.mM(m, (+x$4.hg(other)));
  mb.mN(m, (+x$4.hh(other)));
  mb.mO(m, (+x$4.hi(other)));
  mb.mP(m, (+x$4.hj(other)));
  mb.mQ(m, (+x$4.hk(other)));
  mb.mR(m, (+x$4.hl(other)));
  mb.mS(m, (+x$4.hm(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.w + other.w), (v.t + other.t), (v.x + other.x));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((-v.w), (-v.t), (-v.x));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.w - other.w), (v.t - other.t), (v.x - other.x));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.w * scalar), (v.t * scalar), (v.x * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.w / scalar), (v.t / scalar), (v.x / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.t * other.x) - (v.x * other.t)), ((v.x * other.w) - (v.w * other.x)), ((v.w * other.t) - (v.t * other.w)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(x$2, v));
}
function $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($thiz, v, x$2, other, x$4) {
  x$2.jR(v, (+x$4.aP(other)));
  x$2.jS(v, (+x$4.aQ(other)));
  x$2.jT(v, (+x$4.aR(other)));
  x$2.jQ(v, (+x$4.aO(other)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.ir = 0.0;
  this.is = 0.0;
  this.it = 0.0;
  this.iu = 0.0;
  this.iv = 0.0;
  this.iw = 0.0;
  this.ix = 0.0;
  this.iy = 0.0;
  this.iz = 0.0;
  this.iA = 0.0;
  this.iB = 0.0;
  this.iC = 0.0;
  this.iD = 0.0;
  this.iE = 0.0;
  this.iF = 0.0;
  this.iG = 0.0;
  this.ir = m00;
  this.is = m01;
  this.it = m02;
  this.iu = m03;
  this.iv = m10;
  this.iw = m11;
  this.ix = m12;
  this.iy = m13;
  this.iz = m20;
  this.iA = m21;
  this.iB = m22;
  this.iC = m23;
  this.iD = m30;
  this.iE = m31;
  this.iF = m32;
  this.iG = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  dL: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.hD = 0.0;
  this.hE = 0.0;
  this.hF = 0.0;
  this.hC = 0.0;
  this.hD = x;
  this.hE = y;
  this.hF = z;
  this.hC = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  dO: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat$() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat$.prototype = $p;
$p.ob = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.oc = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  dP: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((((((+x$2.aO(q)) * (+x$2.aP(p))) + ((+x$2.aP(q)) * (+x$2.aO(p)))) + ((+x$2.aQ(q)) * (+x$2.aR(p)))) - ((+x$2.aR(q)) * (+x$2.aQ(p)))), (((((+x$2.aO(q)) * (+x$2.aQ(p))) - ((+x$2.aP(q)) * (+x$2.aR(p)))) + ((+x$2.aQ(q)) * (+x$2.aO(p)))) + ((+x$2.aR(q)) * (+x$2.aP(p)))), (((((+x$2.aO(q)) * (+x$2.aR(p))) + ((+x$2.aP(q)) * (+x$2.aQ(p)))) - ((+x$2.aQ(q)) * (+x$2.aP(p)))) + ((+x$2.aR(q)) * (+x$2.aO(p)))), (((((+x$2.aO(q)) * (+x$2.aO(p))) - ((+x$2.aP(q)) * (+x$2.aP(p)))) - ((+x$2.aQ(q)) * (+x$2.aQ(p)))) - ((+x$2.aR(q)) * (+x$2.aR(p)))));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.iH = 0.0;
  this.iI = 0.0;
  this.iH = x;
  this.iI = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  dT: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.w = 0.0;
  this.t = 0.0;
  this.x = 0.0;
  this.w = x;
  this.t = y;
  this.x = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  dU: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4(x, y, z, w) {
  this.fW = 0.0;
  this.fX = 0.0;
  this.fY = 0.0;
  this.fV = 0.0;
  this.fW = x;
  this.fX = y;
  this.fY = z;
  this.fV = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4, "trivalibs.graphics.math.cpu.Vec4", ({
  dX: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  this.kG = null;
  this.kH = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.of = (function() {
  if ((!this.kH)) {
    this.kG = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.kH = true;
  }
  return this.kG;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  dZ: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
  this.kI = null;
  this.kJ = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = $p;
$p.q4 = (function() {
  if ((!this.kJ)) {
    this.kI = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8();
    this.kJ = true;
  }
  return this.kI;
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$", ({
  e2: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
}
function $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, wgsl) {
  $thiz.e = wgsl;
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_Expr() {
  this.e = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_Expr.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_Expr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_Expr() {
}
$h_Ltrivalibs_graphics_math_gpu_Expr.prototype = $p;
$p.q = (function() {
  return this.e;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  aE: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$.prototype = $p;
$p.aZ = (function() {
  return new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$10$2) => {
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), _$10$2);
  })));
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$, "trivalibs.graphics.math.gpu.LeftScalar$", ({
  e6: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_LeftScalar$;
function $m_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_LeftScalar$)) {
    $n_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_LeftScalar$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$.prototype = $p;
$p.pY = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(v));
});
var $d_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$, "trivalibs.graphics.math.gpu.cpu_interop$package$", ({
  e9: 1
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
$p.aM = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.e) + ", ") + sampler.e) + ", ") + uv.e) + ")"));
});
$p.gg = (function(tex, uv, sampler, level) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("textureSampleLevel(" + tex.e) + ", ") + sampler.e) + ", ") + uv.e) + ", ") + level.e) + ")"));
});
$p.h6 = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.e) + ", ") + coord.e) + ", 0)"));
});
$p.mr = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.e) + ", ") + coord.e) + ", 0)"));
});
$p.pG = (function(onFalse, onTrue, cond) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("select(" + onFalse.e) + ", ") + onTrue.e) + ", ") + cond.e) + ")"));
});
$p.o8 = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " > ") + b.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  ea: 1
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
$p.aL = (function(parts) {
  var out = [];
  var i = 0;
  while ((i < parts.R())) {
    var p = parts.aa(i);
    if ((p.length > 0)) {
      out.push(p);
    }
    i = ((1 + i) | 0);
  }
  return out.join("\n");
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$Block$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$Block$, "trivalibs.graphics.math.gpu.expr$package$Block$", ({
  eb: 1
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
  this.kM = null;
  this.kN = false;
  this.kO = null;
  this.kP = false;
  this.kQ = null;
  this.kR = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.aY = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.n = (function() {
  if ((!this.kN)) {
    this.kM = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.kN = true;
  }
  return this.kM;
});
$p.mz = (function() {
  if ((!this.kP)) {
    this.kO = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3();
    this.kP = true;
  }
  return this.kO;
});
$p.h4 = (function() {
  if ((!this.kR)) {
    this.kQ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.kR = true;
  }
  return this.kQ;
});
$p.fu = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".xy"));
});
$p.qj = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".zw"));
});
$p.gk = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".xyz"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  ec: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_ivec2$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_ivec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_ivec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_ivec2$() {
}
$h_Ltrivalibs_graphics_math_gpu_ivec2$.prototype = $p;
$p.aW = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec2<i32>(" + v.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_ivec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_ivec2$, "trivalibs.graphics.math.gpu.ivec2$", ({
  ep: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_ivec2$;
function $m_Ltrivalibs_graphics_math_gpu_ivec2$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_ivec2$)) {
    $n_Ltrivalibs_graphics_math_gpu_ivec2$ = new $c_Ltrivalibs_graphics_math_gpu_ivec2$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_ivec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_vec2$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_vec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_vec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_vec2$() {
}
$h_Ltrivalibs_graphics_math_gpu_vec2$.prototype = $p;
$p.ae = (function(x, y) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec2<f32>(" + x.e) + ", ") + y.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec2$, "trivalibs.graphics.math.gpu.vec2$", ({
  eq: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_vec2$;
function $m_Ltrivalibs_graphics_math_gpu_vec2$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_vec2$)) {
    $n_Ltrivalibs_graphics_math_gpu_vec2$ = new $c_Ltrivalibs_graphics_math_gpu_vec2$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_vec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_vec3$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_vec3$() {
}
$h_Ltrivalibs_graphics_math_gpu_vec3$.prototype = $p;
$p.aM = (function(x, y, z) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.e) + ", ") + y.e) + ", ") + z.e) + ")"));
});
$p.aW = (function(scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec3<f32>(" + scalar.e) + ")"));
});
$p.nt = (function(scalar) {
  return this.aW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(scalar));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  er: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_vec3$;
function $m_Ltrivalibs_graphics_math_gpu_vec3$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_vec3$)) {
    $n_Ltrivalibs_graphics_math_gpu_vec3$ = new $c_Ltrivalibs_graphics_math_gpu_vec3$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_vec3$;
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
$p.mh = (function(x, y, z, w) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("vec4<f32>(" + x.e) + ", ") + y.e) + ", ") + z.e) + ", ") + w.e) + ")"));
});
$p.ae = (function(xyz, w) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.e) + ", ") + w.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  es: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_vec4$;
function $m_Ltrivalibs_graphics_math_gpu_vec4$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_vec4$)) {
    $n_Ltrivalibs_graphics_math_gpu_vec4$ = new $c_Ltrivalibs_graphics_math_gpu_vec4$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_vec4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BindPair(name, value) {
  this.m = null;
  this.m = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  et: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BlendState$() {
  this.kS = null;
  $n_Ltrivalibs_graphics_painter_BlendState$ = this;
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one-minus-src-alpha"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one-minus-src-alpha"));
  this.kS = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one"));
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst", "zero"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst-alpha", "zero"));
}
$p = $c_Ltrivalibs_graphics_painter_BlendState$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BlendState$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BlendState$() {
}
$h_Ltrivalibs_graphics_painter_BlendState$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BlendState$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_BlendState$, "trivalibs.graphics.painter.BlendState$", ({
  eu: 1
}));
var $n_Ltrivalibs_graphics_painter_BlendState$;
function $m_Ltrivalibs_graphics_painter_BlendState$() {
  if ((!$n_Ltrivalibs_graphics_painter_BlendState$)) {
    $n_Ltrivalibs_graphics_painter_BlendState$ = new $c_Ltrivalibs_graphics_painter_BlendState$();
  }
  return $n_Ltrivalibs_graphics_painter_BlendState$;
}
function $p_Ltrivalibs_graphics_painter_CanvasSurface$__preferredFormat__T($thiz) {
  var gpu = $m_Ltrivalibs_graphics_painter_WebGPU$().mx();
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
$p.nx = (function(canvas, format) {
  return new $c_Ltrivalibs_graphics_painter_CanvasSurface(canvas, ((format === (void 0)) ? $p_Ltrivalibs_graphics_painter_CanvasSurface$__preferredFormat__T(this) : format));
});
var $d_Ltrivalibs_graphics_painter_CanvasSurface$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_CanvasSurface$, "trivalibs.graphics.painter.CanvasSurface$", ({
  ev: 1
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
  while ((i < $thiz.ff)) {
    var b = $thiz.fg[i];
    if (((format === null) && (b.bm > 0))) {
      format = b.fh;
    }
    i = ((1 + i) | 0);
  }
  $thiz.iN = format;
}
function $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V($thiz, index, verts, indices, widenTo32) {
  while ((($thiz.fg.length | 0) <= index)) {
    $thiz.fg.push(new $c_Ltrivalibs_graphics_painter_FormBuffers());
  }
  var b = $thiz.fg[index];
  $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts);
  if ((indices !== null)) {
    $p_Ltrivalibs_graphics_painter_Form__uploadIndices__Ltrivalibs_graphics_painter_FormBuffers__sjs_js_typedarray_TypedArray__Z__V($thiz, b, indices, widenTo32);
  } else {
    b.bm = 0;
    b.gw = 0;
  }
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts) {
  var data = verts.dv.buffer;
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.bn === null) || (b.iQ < padded))) {
    if ((b.bn !== null)) {
      b.bn.destroy();
    }
    b.bn = $thiz.gv.f.createBuffer(({
      "size": padded,
      "usage": 40
    }));
    b.iQ = padded;
  }
  $thiz.gv.an.writeBuffer(b.bn, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.hH = size;
  b.fZ = (verts.off | 0);
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
    b.fh = "uint32";
    var data = u32.buffer;
  } else if ((!(!(raw instanceof Uint16Array)))) {
    count = (raw.length | 0);
    b.fh = "uint16";
    var data = raw.buffer;
  } else {
    count = (raw.length | 0);
    b.fh = "uint32";
    var data = raw.buffer;
  }
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.bl === null) || (b.iP < padded))) {
    if ((b.bl !== null)) {
      b.bl.destroy();
    }
    b.bl = $thiz.gv.f.createBuffer(({
      "size": padded,
      "usage": 24
    }));
    b.iP = padded;
  }
  $thiz.gv.an.writeBuffer(b.bl, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.gw = size;
  b.bm = count;
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
  this.gv = null;
  this.fg = null;
  this.ff = 0;
  this.iO = null;
  this.iM = null;
  this.iN = null;
  this.gv = painter;
  this.fg = [];
  this.ff = 0;
  this.iO = "triangle-list";
  this.iM = "ccw";
  this.iN = null;
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.pH = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.iO = topology;
  }
  if ((frontFace !== (void 0))) {
    this.iM = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, geometry.ip, geometry.hz, false);
    this.ff = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, vertices, null, false);
    this.ff = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((geometries !== (void 0))) {
    var use32 = false;
    var i = 0;
    while ((i < (geometries.length | 0))) {
      var idx = geometries[i].hz;
      if (((idx !== null) && (!(!(idx instanceof Uint32Array))))) {
        use32 = true;
      }
      i = ((1 + i) | 0);
    }
    i = 0;
    while ((i < (geometries.length | 0))) {
      var geo = geometries[i];
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i, geo.ip, geo.hz, use32);
      i = ((1 + i) | 0);
    }
    this.ff = (geometries.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((verticesAll !== (void 0))) {
    var i$1 = 0;
    while ((i$1 < (verticesAll.length | 0))) {
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i$1, verticesAll[i$1], null, false);
      i$1 = ((1 + i$1) | 0);
    }
    this.ff = (verticesAll.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  ew: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_FormBuffers() {
  this.bn = null;
  this.iQ = 0;
  this.hH = 0;
  this.fZ = 0;
  this.bl = null;
  this.iP = 0;
  this.gw = 0;
  this.bm = 0;
  this.fh = null;
  this.bn = null;
  this.iQ = 0;
  this.hH = 0;
  this.fZ = 0;
  this.bl = null;
  this.iP = 0;
  this.gw = 0;
  this.bm = 0;
  this.fh = "uint16";
}
$p = $c_Ltrivalibs_graphics_painter_FormBuffers.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_FormBuffers;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_FormBuffers() {
}
$h_Ltrivalibs_graphics_painter_FormBuffers.prototype = $p;
var $d_Ltrivalibs_graphics_painter_FormBuffers = new $TypeData().i($c_Ltrivalibs_graphics_painter_FormBuffers, "trivalibs.graphics.painter.FormBuffers", ({
  ex: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.gx = null;
  this.gx = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.R = (function() {
  return (this.gx.length | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  ey: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_LayerBindCache(panelId, epoch, valueGroup, panelGroup) {
  this.kU = 0;
  this.kT = 0;
  this.iT = null;
  this.iS = null;
  this.kU = panelId;
  this.kT = epoch;
  this.iT = valueGroup;
  this.iS = panelGroup;
}
$p = $c_Ltrivalibs_graphics_painter_LayerBindCache.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_LayerBindCache;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_LayerBindCache() {
}
$h_Ltrivalibs_graphics_painter_LayerBindCache.prototype = $p;
var $d_Ltrivalibs_graphics_painter_LayerBindCache = new $TypeData().i($c_Ltrivalibs_graphics_painter_LayerBindCache, "trivalibs.graphics.painter.LayerBindCache", ({
  eA: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__fireResize__D__D__V($thiz, w, h) {
  var k = 0;
  while ((k < ($thiz.hK.length | 0))) {
    $thiz.hK[k].mg(w, h);
    k = ((1 + k) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  panel.jw($doubleToInt($thiz.na()), $doubleToInt($thiz.h5()));
  if (panel.jG()) {
    return (void 0);
  }
  $thiz.n2(panel);
}
function $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, shape, depthTest, multisample, formats, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.gA]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Z__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.Z, shape.j1, fmts, depthTest, multisample, shape.gN.iO, shape.j2, shape.gN.iM, shape.gN.iN, false);
  pass.setPipeline(pipeline);
  var form = shape.gN;
  var bufferCount = form.ff;
  var instanceCount = shape.j3.R();
  var runtime = $p_Ltrivalibs_graphics_painter_Painter__runtimeBindingsOf__Ltrivalibs_graphics_painter_Panel__sjs_js_Dictionary($thiz, panel);
  if ((instanceCount === 0)) {
    $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.Z, shape.p, shape.Y, null, runtime, null);
    var b = 0;
    while ((b < bufferCount)) {
      var buf = form.fg[b];
      if ((buf.fZ > 0)) {
        pass.setVertexBuffer(0, buf.bn, 0.0, buf.hH);
        if ((buf.bm > 0)) {
          pass.setIndexBuffer(buf.bl, buf.fh, 0.0, buf.gw);
          pass.drawIndexed(buf.bm);
        } else {
          pass.draw(buf.fZ);
        }
      }
      b = ((1 + b) | 0);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.Z, shape.p, shape.Y, shape.j3.gx[i], runtime, null);
      var b$2 = 0;
      while ((b$2 < bufferCount)) {
        var buf$2 = form.fg[b$2];
        if ((buf$2.fZ > 0)) {
          pass.setVertexBuffer(0, buf$2.bn, 0.0, buf$2.hH);
          if ((buf$2.bm > 0)) {
            pass.setIndexBuffer(buf$2.bl, buf$2.fh, 0.0, buf$2.gw);
            pass.drawIndexed(buf$2.bm);
          } else {
            pass.draw(buf$2.fZ);
          }
        }
        b$2 = ((1 + b$2) | 0);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.gA]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Z__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.y, layer.iR, fmts, depthTest, multisample, "triangle-list", "none", "ccw", null, false);
  pass.setPipeline(pipeline);
  var instanceCount = layer.hI.R();
  var runtime = $p_Ltrivalibs_graphics_painter_Painter__runtimeBindingsOf__Ltrivalibs_graphics_painter_Panel__sjs_js_Dictionary($thiz, panel);
  if (((instanceCount === 0) && (runtime === null))) {
    var c = layer.F;
    if (((((c !== null) && (panel !== null)) && (c.kU === panel.iY)) && (c.kT === panel.fi))) {
      if ((c.iT !== null)) {
        pass.setBindGroup(0, c.iT);
      }
      if ((c.iS !== null)) {
        pass.setBindGroup(1, c.iS);
      }
    } else {
      var shade = layer.y;
      var vg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, layer.i, null, null);
      var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, layer.G, null, null, srcView);
      if ((vg !== null)) {
        pass.setBindGroup(0, vg);
      }
      if ((pg !== null)) {
        pass.setBindGroup(1, pg);
      }
      layer.F = ((panel !== null) ? new $c_Ltrivalibs_graphics_painter_LayerBindCache(panel.iY, panel.fi, vg, pg) : null);
    }
    pass.draw(3);
  } else if ((instanceCount === 0)) {
    $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.y, layer.i, layer.G, null, runtime, srcView);
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.y, layer.i, layer.G, layer.hI.gx[i], runtime, srcView);
      pass.draw(3);
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__runtimeBindingsOf__Ltrivalibs_graphics_painter_Panel__sjs_js_Dictionary($thiz, panel) {
  if ((panel === null)) {
    return null;
  } else {
    var dict = panel.gJ;
    var keys = Object.keys(dict);
    return (((keys.length | 0) > 0) ? dict : null);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__resolveValueSlot__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__O($thiz, shade, i, bindings, inst, runtime) {
  var fromInst = (((inst !== null) && (i < (inst.nF().length | 0))) ? inst.nF()[i] : null);
  if ((fromInst !== null)) {
    return fromInst;
  } else {
    var own = ((i < (bindings.length | 0)) ? bindings[i] : null);
    if ((own !== null)) {
      return own;
    } else {
      if ((runtime !== null)) {
        var key$proxy3 = shade.hU[i];
        var $x_1 = (!(!(!(!runtime.hasOwnProperty(key$proxy3)))));
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        var key$proxy4 = shade.hU[i];
        return runtime[key$proxy4];
      } else {
        return null;
      }
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelSlot__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUTextureView($thiz, shade, k, panelBindings, inst, runtime, srcView) {
  var fromInst = (((inst !== null) && (k < (inst.mY().length | 0))) ? inst.mY()[k] : null);
  if ((fromInst !== null)) {
    return $p_Ltrivalibs_graphics_painter_Painter__panelBindingView__Ltrivalibs_graphics_painter_PanelBinding__Ltrivalibs_graphics_painter_GPUTextureView($thiz, fromInst);
  } else {
    var own = ((k < (panelBindings.length | 0)) ? panelBindings[k] : null);
    if ((own !== null)) {
      return $p_Ltrivalibs_graphics_painter_Painter__panelBindingView__Ltrivalibs_graphics_painter_PanelBinding__Ltrivalibs_graphics_painter_GPUTextureView($thiz, own);
    } else {
      if ((runtime !== null)) {
        var key$proxy5 = shade.gM[k];
        var $x_1 = (!(!(!(!runtime.hasOwnProperty(key$proxy5)))));
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        var key$proxy6 = shade.gM[k];
        var value = runtime[key$proxy6];
        return ((!(!(value instanceof $a_Ltrivalibs_graphics_painter_PanelBinding()))) ? $p_Ltrivalibs_graphics_painter_Painter__panelBindingView__Ltrivalibs_graphics_painter_PanelBinding__Ltrivalibs_graphics_painter_GPUTextureView($thiz, value) : value.W[0].j5);
      } else {
        return ((k === 0) ? srcView : null);
      }
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__panelBindingView__Ltrivalibs_graphics_painter_PanelBinding__Ltrivalibs_graphics_painter_GPUTextureView($thiz, pb) {
  return ((!(!pb.depth)) ? pb.panel.nR() : (((pb.mipLevel | 0) < 0) ? pb.panel.W[(pb.index | 0)].j5 : pb.panel.W[(pb.index | 0)].ao[(pb.mipLevel | 0)]));
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
  if ((shade.iZ === null)) {
    return null;
  } else {
    var names = shade.hU;
    var entries = [];
    var i = 0;
    while ((i < (names.length | 0))) {
      var b = $p_Ltrivalibs_graphics_painter_Painter__resolveValueSlot__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__O($thiz, shade, i, bindings, inst, runtime);
      if ((b === null)) {
        var message$proxy2 = $p_Ltrivalibs_graphics_painter_Painter__missingBindingMessage__T__T($thiz, names[i]);
        throw new $c_sjs_js_JavaScriptException(Error(message$proxy2)).V;
      }
      entries.push($p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b));
      i = ((1 + i) | 0);
    }
    var $x_1 = $thiz.f;
    var _2 = shade.iZ;
    return $x_1.createBindGroup(({
      "layout": _2,
      "entries": entries
    }));
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, panelBindings, inst, runtime, srcView) {
  if ((shade.hS === null)) {
    return null;
  } else {
    var names = shade.gM;
    var entries = [];
    var k = 0;
    while ((k < (names.length | 0))) {
      var view = $p_Ltrivalibs_graphics_painter_Painter__resolvePanelSlot__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUTextureView($thiz, shade, k, panelBindings, inst, runtime, srcView);
      if ((view === null)) {
        var message$proxy3 = $p_Ltrivalibs_graphics_painter_Painter__missingBindingMessage__T__T($thiz, names[k]);
        throw new $c_sjs_js_JavaScriptException(Error(message$proxy3)).V;
      }
      var value = k;
      entries.push(({
        "binding": value,
        "resource": view
      }));
      k = ((1 + k) | 0);
    }
    var $x_1 = $thiz.f;
    var _2 = shade.hS;
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
    var _2 = b.B;
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
  var key = (((((((((((((((shade.lf + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthKey) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace) + stripKey);
  var cached = $thiz.iX[key];
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
    if ((shade.j0 !== null)) {
      var _2 = shade.hT;
      var _2$1 = [shade.j0];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.hT;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.lg;
    var _2$4 = shade.hT;
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
    var p = $thiz.f.createRenderPipeline(desc);
    $thiz.iX[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.l3)) {
    $thiz.l2 = $thiz.f.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.l3 = true;
  }
  return $thiz.l2;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.kX)) {
    var $x_2 = $thiz.f;
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
    $thiz.kW = $x_1;
    $thiz.kX = true;
  }
  return $thiz.kW;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitModule__Ltrivalibs_graphics_painter_GPUShaderModule($thiz) {
  if ((!$thiz.kZ)) {
    $thiz.kY = $thiz.f.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    $thiz.kZ = true;
  }
  return $thiz.kY;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipelineLayout__Ltrivalibs_graphics_painter_GPUPipelineLayout($thiz) {
  if ((!$thiz.l1)) {
    var $x_2 = $thiz.f;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var $x_1 = $x_2.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    $thiz.l0 = $x_1;
    $thiz.l1 = true;
  }
  return $thiz.l0;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipelineFor__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  var cached = $thiz.iU[format];
  if ((cached !== (void 0))) {
    return cached;
  } else {
    var $x_1 = $thiz.f;
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
    $thiz.iU[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__sourceShade__Ltrivalibs_graphics_painter_Shade($thiz) {
  if ((!$thiz.le)) {
    var id = $thiz.o;
    $thiz.o = ((1 + $thiz.o) | 0);
    $thiz.ld = new $c_Ltrivalibs_graphics_painter_Shade(id, $p_Ltrivalibs_graphics_painter_Painter__blitModule__Ltrivalibs_graphics_painter_GPUShaderModule($thiz), null, null, null, $p_Ltrivalibs_graphics_painter_Painter__blitPipelineLayout__Ltrivalibs_graphics_painter_GPUPipelineLayout($thiz), false, ({}), ({}));
    $thiz.le = true;
  }
  return $thiz.ld;
}
function $p_Ltrivalibs_graphics_painter_Painter__drawSource__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Panel__Z__sjs_js_Array__V($thiz, pass, panel, multisample, formats) {
  var group = panel.hR;
  if ((group === null)) {
    if (((panel.fl === "rgba32float") && (!(!(!$thiz.f.features.has("float32-filterable")))))) {
      throw new $c_sjs_js_JavaScriptException(Error("Panel: drawing an rgba32float source needs the device feature 'float32-filterable'. Pass requiredFeatures = Arr(\"float32-filterable\") to Painter.init, use rgba16float, or keep the panel on the direct path (source size and format, no shapes or layers).")).V;
    }
    var $x_1 = $thiz.f;
    var _2 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
    var x$proxy12 = panel.gL;
    var _2$1 = $thiz.jD();
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
    panel.hR = group;
  }
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Z__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, $p_Ltrivalibs_graphics_painter_Painter__sourceShade__Ltrivalibs_graphics_painter_Shade($thiz), panel.hQ, formats, panel.bp, multisample, "triangle-list", "none", "ccw", null, true));
  pass.setBindGroup(0, group);
  pass.draw(3);
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.l5)) {
    var $x_2 = $thiz.f;
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
    $thiz.l4 = $x_1;
    $thiz.l5 = true;
  }
  return $thiz.l4;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.l7)) {
    var module = $thiz.f.createShaderModule(({
      "code": "\n@group(0) @binding(0) var ms_depth: texture_depth_multisampled_2d;\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4f {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  return vec4f(x, y, 0.0, 1.0);\n}\n\n@fragment\nfn fs_main(@builtin(position) pos: vec4f) -> @builtin(frag_depth) f32 {\n  return textureLoad(ms_depth, vec2i(pos.xy), 0);\n}\n"
    }));
    var $x_1 = $thiz.f;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.f;
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
    $thiz.l6 = $x_2;
    $thiz.l7 = true;
  }
  return $thiz.l6;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.f.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.pE();
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
  var $x_1 = $thiz.f;
  var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
  var _2$4 = panel.ms();
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
  $thiz.an.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.la)) {
    $thiz.l9 = $thiz.f.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.la = true;
  }
  return $thiz.l9;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Painter(device, surface, adapter, gpu) {
  this.f = null;
  this.bo = null;
  this.kV = null;
  this.l8 = null;
  this.an = null;
  this.gA = null;
  this.o = 0;
  this.hK = null;
  this.iW = 0;
  this.iV = 0;
  this.iX = null;
  this.iU = null;
  this.lb = null;
  this.lc = false;
  this.l2 = null;
  this.l3 = false;
  this.kW = null;
  this.kX = false;
  this.kY = null;
  this.kZ = false;
  this.l0 = null;
  this.l1 = false;
  this.ld = null;
  this.le = false;
  this.l4 = null;
  this.l5 = false;
  this.l6 = null;
  this.l7 = false;
  this.l9 = null;
  this.la = false;
  this.f = device;
  this.bo = surface;
  this.kV = adapter;
  this.l8 = gpu;
  this.an = device.queue;
  if ((adapter !== null)) {
    adapter.info;
  }
  this.gA = surface.iK;
  this.o = 0;
  this.hK = [];
  this.iW = 0;
  this.iV = 0;
  this.iX = ({});
  this.iU = ({});
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.nK = (function() {
  var x1 = this.bo;
  if ((x1 instanceof $c_Ltrivalibs_graphics_painter_CanvasSurface)) {
    return x1.am;
  }
  throw new $c_sjs_js_JavaScriptException(Error("Painter.canvas: this painter has no canvas")).V;
});
$p.on = (function() {
  this.bo.nN(this);
  this.bo.pe(((arg1$2, arg2$2) => {
    $p_Ltrivalibs_graphics_painter_Painter__fireResize__D__D__V(this, (arg1$2 | 0), (arg2$2 | 0));
  }));
});
$p.na = (function() {
  return ((this.iW > 0) ? this.iW : this.bo.q7());
});
$p.h5 = (function() {
  return ((this.iV > 0) ? this.iV : this.bo.oj());
});
$p.pd = (function(cb) {
  this.hK.push(cb);
  cb.mg(this.na(), this.h5());
});
$p.jC = (function(magFilter, minFilter, mipmapFilter, addressMode, addressModeU, addressModeV) {
  var $x_1 = this.f;
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
$p.jD = (function() {
  if ((!this.lc)) {
    this.lb = this.jC("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    this.lc = true;
  }
  return this.lb;
});
$p.o9 = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).pH(geometry, vertices, geometries, verticesAll, topology, frontFace);
});
$p.gh = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).pJ(cullMode, blendState);
});
$p.b0 = (function(shade, blendState, mipSource, mipTarget) {
  return new $c_Ltrivalibs_graphics_painter_Layer(this, shade).pI(blendState, mipSource, mipTarget);
});
$p.bg = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers, source, sourceBlend, followSurface, flipY, premultipliedAlpha) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).jF(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers, source, sourceBlend, followSurface, flipY, premultipliedAlpha);
});
$p.pK = (function(panel) {
  var encoder = this.f.createCommandEncoder();
  this.nG(encoder, panel, this.bo.nP(), this.gA);
  this.bo.pn(encoder);
});
$p.n2 = (function(panel) {
  var msaa = panel.fj;
  var encoder = this.f.createCommandEncoder();
  var panelFormats = panel.gd();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.pV())) {
    if ((panel.hL !== null)) {
      var x$proxy4 = panel.hL;
      if (msaa) {
        var _2 = panel.mW(t);
        var TextureViewBundle_this = panel.W[t];
        var _2$1 = TextureViewBundle_this.ao[0];
        var value = x$proxy4.fW;
        var value$1 = x$proxy4.fX;
        var value$2 = x$proxy4.fY;
        var value$3 = x$proxy4.fV;
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
        var TextureViewBundle_this$2 = panel.W[t];
        var _2$3 = TextureViewBundle_this$2.ao[0];
        var value$4 = x$proxy4.fW;
        var value$5 = x$proxy4.fX;
        var value$6 = x$proxy4.fY;
        var value$7 = x$proxy4.fV;
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
      var _2$5 = panel.mW(t);
      var TextureViewBundle_this$3 = panel.W[t];
      var _2$6 = TextureViewBundle_this$3.ao[0];
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var TextureViewBundle_this$4 = panel.W[t];
      var _2$7 = TextureViewBundle_this$4.ao[0];
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
  if (panel.bp) {
    var _2$8 = panel.ms();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  if (panel.nY()) {
    $p_Ltrivalibs_graphics_painter_Painter__drawSource__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Panel__Z__sjs_js_Array__V(this, shapePass, panel, msaa, panelFormats);
  }
  var i = 0;
  while ((i < (panel.gK.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V(this, shapePass, panel.gK[i], panel.bp, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  this.an.submit([encoder.finish()]);
  if (panel.gD) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V(this, panel);
  }
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.b8.length | 0))) {
    var layer = panel.b8[j];
    var needsPingPong = layer.pl(panel);
    if ((layer.gy >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        this.an.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.W[0].ao[layer.gy];
      var mipSrcView = ((layer.hJ >= 0) ? panel.W[0].ao[layer.hJ] : panel.jM());
      var enc = this.f.createCommandEncoder();
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
      this.an.submit([enc.finish()]);
    } else if (needsPingPong) {
      if ((curPass !== null)) {
        curPass.end();
        this.an.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = this.f.createCommandEncoder();
      var _2$10 = panel.pk();
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
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V(this, ppPass, layer, false, false, panelFormats, panel.jM(), panel);
      ppPass.end();
      this.an.submit([enc$2.finish()]);
      panel.pT();
    } else {
      if ((curPass === null)) {
        curEncoder = this.f.createCommandEncoder();
        var $x_1 = curEncoder;
        var _2$13 = panel.jM();
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
    this.an.submit([curEncoder.finish()]);
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.b8.length | 0))) {
    if ((panel.b8[mi].gy >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.hn() > 1) && (!hasMipTargetLayers))) {
    this.jy(panel);
  }
});
$p.nG = (function(encoder, panel, dst, dstFormat) {
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
  var bundle = panel.W[0];
  var group = bundle.j4;
  if ((group === null)) {
    var $x_1 = this.f;
    var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
    var _2$4 = bundle.ao[0];
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
    bundle.j4 = group;
  }
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__blitPipelineFor__T__Ltrivalibs_graphics_painter_GPURenderPipeline(this, dstFormat));
  pass.setBindGroup(0, group);
  pass.draw(3);
  pass.end();
});
$p.jy = (function(panel) {
  var mipCount = panel.hn();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__blitPipelineFor__T__Ltrivalibs_graphics_painter_GPURenderPipeline(this, panel.gd()[0]);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.W[0].ao[((i - 1) | 0)];
    var dstView = panel.W[0].ao[i];
    var encoder = this.f.createCommandEncoder();
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
    var $x_1 = this.f;
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
    this.an.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
});
Object.defineProperty($p, "adapter", ({
  "get": (function() {
    return this.kV;
  }),
  "configurable": true
}));
Object.defineProperty($p, "gpu", ({
  "get": (function() {
    return this.l8;
  }),
  "configurable": true
}));
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  eB: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter$__createPainter__Ltrivalibs_graphics_painter_GPUDevice__Ltrivalibs_graphics_painter_Surface__Ltrivalibs_graphics_painter_GPUAdapter__Ltrivalibs_graphics_painter_GPU__Ltrivalibs_graphics_painter_Painter($thiz, device, surface, adapter, gpu) {
  var painter = new $c_Ltrivalibs_graphics_painter_Painter(device, surface, adapter, gpu);
  painter.on();
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
$p.om = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().mx();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var surface = $m_Ltrivalibs_graphics_painter_CanvasSurface$().nx(canvas, maybeGpu.getPreferredCanvasFormat());
    var promise$proxy2 = $m_Ltrivalibs_graphics_painter_WebGPU$().pB(maybeGpu, (void 0), false, (void 0), false);
    var f$proxy16 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy1 = $m_Ltrivalibs_graphics_painter_WebGPU$().pC(adapter$2, (void 0), (void 0));
      var f$proxy15 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => $p_Ltrivalibs_graphics_painter_Painter$__createPainter__Ltrivalibs_graphics_painter_GPUDevice__Ltrivalibs_graphics_painter_Surface__Ltrivalibs_graphics_painter_GPUAdapter__Ltrivalibs_graphics_painter_GPU__Ltrivalibs_graphics_painter_Painter(this, device$2, surface, adapter$2, maybeGpu)));
      return promise$proxy1.then($m_sjs_js_Any$().ge(f$proxy15));
    }));
    return promise$proxy2.then($m_sjs_js_Any$().ge(f$proxy16));
  }
});
$p.ol = (function(canvas, setup) {
  var promise$proxy3 = this.om(canvas);
  return promise$proxy3.then($m_sjs_js_Any$().ge(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  eC: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  if (($thiz.bq !== null)) {
    $thiz.bq.destroy();
  }
  if (($thiz.gH !== null)) {
    $thiz.gH.destroy();
  }
  var depthUsage = ($thiz.gE ? 20 : 16);
  var $x_1 = $thiz.ag.f;
  var value = $thiz.g1;
  var value$1 = $thiz.g0;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.fj ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.bq = depthTex;
  $thiz.gC = depthTex.createView();
  if (($thiz.gE && $thiz.fj)) {
    var $x_2 = $thiz.ag.f;
    var value$2 = $thiz.g1;
    var value$3 = $thiz.g0;
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
    $thiz.gH = resTex;
    $thiz.gI = resTex.createView();
    $thiz.gD = true;
  } else {
    $thiz.gH = null;
    $thiz.gI = null;
    $thiz.gD = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.b8.length | 0))) {
    if ($thiz.b8[i].mT()) {
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
  return ((((((((((($thiz.aF.length | 0) > 0) ? $thiz.aF.join(",") : ($thiz.aG ? $thiz.fk : "preferred")) + "|") + $thiz.fj) + "|") + $thiz.bp) + "|") + $thiz.g2) + "|") + $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz));
}
function $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz) {
  return ($thiz.aG ? 23 : 20);
}
function $p_Ltrivalibs_graphics_painter_Panel__allocationStale__I__I__Z($thiz, w, h) {
  return ((((w !== $thiz.g1) || (h !== $thiz.g0)) || $thiz.gG) || (($thiz.gB & $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz)) !== $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz)));
}
function $p_Ltrivalibs_graphics_painter_Panel__reallocate__I__I__V($thiz, w, h) {
  var d = 0;
  while ((d < ($thiz.av.length | 0))) {
    $thiz.av[d].destroy();
    d = ((1 + d) | 0);
  }
  d = 0;
  while ((d < ($thiz.gF.length | 0))) {
    $thiz.gF[d].destroy();
    d = ((1 + d) | 0);
  }
  if (((!$thiz.bp) && ($thiz.bq !== null))) {
    $thiz.bq.destroy();
    $thiz.bq = null;
    $thiz.gC = null;
  }
  $thiz.g1 = w;
  $thiz.g0 = h;
  $thiz.gB = $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz);
  $thiz.gG = false;
  var mipCount = $thiz.hn();
  var fmts = $thiz.gd();
  var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz);
  $thiz.av = [];
  $thiz.W = [];
  $thiz.gF = [];
  $thiz.hO = [];
  var i = 0;
  while ((i < (fmts.length | 0))) {
    var fmt = fmts[i];
    var $x_1 = $thiz.ag.f;
    var _2 = ({
      "width": w,
      "height": h
    });
    var value = $thiz.gB;
    var tex = $x_1.createTexture(({
      "size": _2,
      "format": fmt,
      "usage": value,
      "mipLevelCount": mipCount
    }));
    $thiz.av.push(tex);
    $thiz.W.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle($thiz, tex, mipCount));
    if ($thiz.fj) {
      var $x_2 = $thiz.ag.f;
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
      $thiz.gF.push(msaaTex);
      $thiz.hO.push(msaaTex.createView());
    }
    i = ((1 + i) | 0);
  }
  if (hasPong) {
    var $x_3 = $thiz.ag.f;
    var _2$2 = ({
      "width": w,
      "height": h
    });
    var f$proxy6 = fmts[0];
    var value$1 = $thiz.gB;
    var pongTex = $x_3.createTexture(({
      "size": _2$2,
      "format": f$proxy6,
      "usage": value$1,
      "mipLevelCount": mipCount
    }));
    $thiz.av.push(pongTex);
    $thiz.W.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle($thiz, pongTex, mipCount));
  }
  if ($thiz.bp) {
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz);
  }
  $thiz.fi = ((1 + $thiz.fi) | 0);
}
function $p_Ltrivalibs_graphics_painter_Panel__noteSource__sjs_js_Object__V($thiz, source) {
  $thiz.aG = true;
  if ($m_Ltrivalibs_graphics_painter_sources$package$TextureSource$().mB(source)) {
    $m_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$().q2(source, "Panel.set(source)");
    $thiz.aI = (source.width | 0);
    $thiz.aH = (source.height | 0);
    $thiz.fk = source.format;
    $thiz.fl = $thiz.fk;
  } else {
    $thiz.aI = $p_Ltrivalibs_graphics_painter_sources$package$TextureSource$__size__sjs_js_Object__T__T__T__T__I($m_Ltrivalibs_graphics_painter_sources$package$TextureSource$(), source, "videoWidth", "naturalWidth", "displayWidth", "width");
    $thiz.aH = $p_Ltrivalibs_graphics_painter_sources$package$TextureSource$__size__sjs_js_Object__T__T__T__T__I($m_Ltrivalibs_graphics_painter_sources$package$TextureSource$(), source, "videoHeight", "naturalHeight", "displayHeight", "height");
    if ((($thiz.aI <= 0) || ($thiz.aH <= 0))) {
      throw new $c_sjs_js_JavaScriptException(Error("Panel.set(source): the image has no size yet \u2014 an <img> still loading, or a <video> before its first frame")).V;
    }
    $thiz.fk = "rgba8unorm";
    $thiz.fl = $thiz.gd()[0];
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__uploadSource__sjs_js_Object__V($thiz, source) {
  if ($thiz.i3()) {
    $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
    $thiz.b9 = false;
    $thiz.jw(0, 0);
    $m_Ltrivalibs_graphics_painter_sources$package$TextureSource$().n7($thiz.ag.an, source, $thiz.av[0], $thiz.aI, $thiz.aH, $thiz.hM, $thiz.hP);
    $thiz.b9 = true;
    if (($thiz.hn() > 1)) {
      $thiz.ag.jy($thiz);
    }
  } else {
    $thiz.b9 = false;
    var current = $thiz.aU;
    if (((((current === null) || ((current.width | 0) !== $thiz.aI)) || ((current.height | 0) !== $thiz.aH)) || (current.format !== $thiz.fl))) {
      $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
      var $x_1 = $thiz.ag.f;
      var value = $thiz.aI;
      var value$1 = $thiz.aH;
      var _2 = ({
        "width": value,
        "height": value$1
      });
      var f$proxy9 = $thiz.fl;
      var tex = $x_1.createTexture(({
        "size": _2,
        "format": f$proxy9,
        "usage": 23
      }));
      $thiz.aU = tex;
      $thiz.gL = tex.createView();
    }
    $m_Ltrivalibs_graphics_painter_sources$package$TextureSource$().n7($thiz.ag.an, source, $thiz.aU, $thiz.aI, $thiz.aH, $thiz.hM, $thiz.hP);
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__releaseSource__V($thiz) {
  $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
  $thiz.b9 = false;
}
function $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz) {
  if (($thiz.aU !== null)) {
    $thiz.aU.destroy();
  }
  $thiz.aU = null;
  $thiz.gL = null;
  $thiz.hR = null;
}
function $p_Ltrivalibs_graphics_painter_Panel__adoptSlot0AsSource__V($thiz) {
  $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
  $thiz.aU = $thiz.av.shift();
  var TextureViewBundle_this = $thiz.W.shift();
  $thiz.gL = TextureViewBundle_this.ao[0];
  $thiz.b9 = false;
  $thiz.gG = true;
}
function $p_Ltrivalibs_graphics_painter_Panel__restoreSourceToSlot0__V($thiz) {
  var encoder = $thiz.ag.f.createCommandEncoder();
  var x$proxy10 = $thiz.aU;
  var _2 = $thiz.av[0];
  var value = $thiz.aI;
  var value$1 = $thiz.aH;
  encoder.copyTextureToTexture(({
    "texture": x$proxy10
  }), ({
    "texture": _2
  }), ({
    "width": value,
    "height": value$1
  }));
  $thiz.ag.an.submit([encoder.finish()]);
  $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
  $thiz.b9 = true;
  if (($thiz.hn() > 1)) {
    $thiz.ag.jy($thiz);
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
  this.ag = null;
  this.g4 = 0;
  this.g3 = 0;
  this.hL = null;
  this.bp = false;
  this.fj = false;
  this.g2 = 0;
  this.aF = null;
  this.gK = null;
  this.b8 = null;
  this.hQ = null;
  this.hN = false;
  this.hM = false;
  this.hP = false;
  this.gJ = null;
  this.iY = 0;
  this.fi = 0;
  this.av = null;
  this.W = null;
  this.bq = null;
  this.gC = null;
  this.gE = false;
  this.gH = null;
  this.gI = null;
  this.gD = false;
  this.gF = null;
  this.hO = null;
  this.g1 = 0;
  this.g0 = 0;
  this.gB = 0;
  this.gG = false;
  this.aG = false;
  this.aI = 0;
  this.aH = 0;
  this.fk = null;
  this.fl = null;
  this.b9 = false;
  this.aU = null;
  this.gL = null;
  this.hR = null;
  this.ag = painter;
  this.g4 = 0;
  this.g3 = 0;
  this.hL = null;
  this.bp = false;
  this.fj = false;
  this.g2 = 1;
  this.aF = [];
  this.gK = [];
  this.b8 = [];
  this.hQ = null;
  this.hN = false;
  this.hM = false;
  this.hP = false;
  this.gJ = ({});
  $m_Ltrivalibs_graphics_painter_panel$package$().hV = ((1 + $m_Ltrivalibs_graphics_painter_panel$package$().hV) | 0);
  this.iY = $m_Ltrivalibs_graphics_painter_panel$package$().hV;
  this.fi = 0;
  this.av = [];
  this.W = [];
  this.bq = null;
  this.gC = null;
  this.gE = false;
  this.gH = null;
  this.gI = null;
  this.gD = false;
  this.gF = [];
  this.hO = [];
  this.g1 = 0;
  this.g0 = 0;
  this.gB = 0;
  this.gG = false;
  this.aG = false;
  this.aI = 0;
  this.aH = 0;
  this.fk = "rgba8unorm";
  this.fl = "rgba8unorm";
  this.b9 = false;
  this.aU = null;
  this.gL = null;
  this.hR = null;
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.hn = (function() {
  if ((this.g2 === 0)) {
    var a = this.g1;
    var b = this.g0;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.g2;
  }
});
$p.gd = (function() {
  return (((this.aF.length | 0) > 0) ? this.aF : (this.aG ? [this.fk] : [this.ag.gA]));
});
$p.jG = (function() {
  return ((((this.aG && ((this.gK.length | 0) === 0)) && ((this.b8.length | 0) === 0)) && (this.hQ === null)) && (!this.hN));
});
$p.i3 = (function() {
  return ((((this.jG() && ((this.g4 === 0) || (this.g4 === this.aI))) && ((this.g3 === 0) || (this.g3 === this.aH))) && ((this.aF.length | 0) <= 1)) && (this.gd()[0] === this.fl));
});
$p.nY = (function() {
  return (this.aG && (!this.i3()));
});
$p.pV = (function() {
  return (this.gd().length | 0);
});
$p.jM = (function() {
  var TextureViewBundle_this = this.W[0];
  return TextureViewBundle_this.ao[0];
});
$p.pk = (function() {
  var TextureViewBundle_this = this.W[1];
  return TextureViewBundle_this.ao[0];
});
$p.ms = (function() {
  return this.gC;
});
$p.pE = (function() {
  return this.gI;
});
$p.mW = (function(index) {
  return this.hO[index];
});
$p.pT = (function() {
  var t = this.av[0];
  this.av[0] = this.av[1];
  this.av[1] = t;
  var sv = this.W[0];
  this.W[0] = this.W[1];
  this.W[1] = sv;
  this.fi = ((1 + this.fi) | 0);
});
$p.nR = (function() {
  if (((!this.gE) && (this.bq !== null))) {
    this.gE = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.gD ? this.gI : this.gC);
});
$p.mj = (function(index, mipLevel, depth) {
  return new ($a_Ltrivalibs_graphics_painter_PanelBinding())(this, index, mipLevel, depth);
});
$p.jF = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers, source, sourceBlend, followSurface, flipY, premultipliedAlpha) {
  var allocationBefore = $p_Ltrivalibs_graphics_painter_Panel__allocationKey__T(this);
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.g4 = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.g3 = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.hL = ((clearColor === null) ? null : new $c_Ltrivalibs_graphics_math_cpu_Vec4(clearColor.fW, clearColor.fX, clearColor.fY, clearColor.fV));
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.bp = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.fj = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.g2 = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.g2 = v$5;
    }
  }
  var x$1 = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy1$1__O__O(this, format) : formats);
  if ((x$1 !== (void 0))) {
    this.aF = x$1;
  }
  var x$2 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy2$1__O__O(this, shape) : shapes);
  if ((x$2 !== (void 0))) {
    this.gK = x$2;
  }
  var x$3 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy3$1__O__O(this, layer) : layers);
  if ((x$3 !== (void 0))) {
    this.b8 = x$3;
  }
  if ((sourceBlend !== (void 0))) {
    this.hQ = sourceBlend;
  }
  if ((followSurface !== (void 0))) {
    var v$6 = (!(!followSurface));
    this.hN = v$6;
  }
  if ((flipY !== (void 0))) {
    var v$7 = (!(!flipY));
    this.hM = v$7;
  }
  if ((premultipliedAlpha !== (void 0))) {
    var v$8 = (!(!premultipliedAlpha));
    this.hP = v$8;
  }
  if ((source !== (void 0))) {
    if ((source === null)) {
      if ((this.aG && ((this.aF.length | 0) === 0))) {
        this.aF = [this.fk];
      }
      this.aG = false;
    } else {
      $p_Ltrivalibs_graphics_painter_Panel__noteSource__sjs_js_Object__V(this, source);
    }
  }
  if ((((this.aF.length | 0) > 1) && $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this))) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot host auto-pong layers. Chain a single-format panel for post-processing instead.")).V;
  }
  if ((((this.aF.length | 0) > 1) && this.aG)) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot have a source. Bind the source panel as a texture of the MRT shapes instead.")).V;
  }
  if (($p_Ltrivalibs_graphics_painter_Panel__allocationKey__T(this) !== allocationBefore)) {
    this.gG = true;
  }
  if ((source !== (void 0))) {
    if ((source === null)) {
      $p_Ltrivalibs_graphics_painter_Panel__releaseSource__V(this);
    } else {
      $p_Ltrivalibs_graphics_painter_Panel__uploadSource__sjs_js_Object__V(this, source);
    }
  }
  if (this.jG()) {
    this.jw(0, 0);
    if ((!this.i3())) {
      this.ag.n2(this);
    }
  }
  return this;
});
$p.jw = (function(surfaceW, surfaceH) {
  var useSource = (this.aG && (!this.hN));
  var w = ((this.g4 > 0) ? this.g4 : (useSource ? this.aI : surfaceW));
  var h = ((this.g3 > 0) ? this.g3 : (useSource ? this.aH : surfaceH));
  var direct = this.i3();
  if ((this.b9 && ((!direct) || $p_Ltrivalibs_graphics_painter_Panel__allocationStale__I__I__Z(this, w, h)))) {
    $p_Ltrivalibs_graphics_painter_Panel__adoptSlot0AsSource__V(this);
  }
  if ($p_Ltrivalibs_graphics_painter_Panel__allocationStale__I__I__Z(this, w, h)) {
    $p_Ltrivalibs_graphics_painter_Panel__reallocate__I__I__V(this, w, h);
  }
  if (((direct && (!this.b9)) && (this.aU !== null))) {
    $p_Ltrivalibs_graphics_painter_Panel__restoreSourceToSlot0__V(this);
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  eD: 1
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
  this.lf = 0;
  this.hT = null;
  this.j0 = null;
  this.iZ = null;
  this.hS = null;
  this.lg = null;
  this.H = null;
  this.ad = null;
  this.hU = null;
  this.gM = null;
  this.lf = id;
  this.hT = shaderModule;
  this.j0 = vertexBufferLayout;
  this.iZ = valueBindGroupLayout;
  this.hS = panelBindGroupLayout;
  this.lg = pipelineLayout;
  this.H = uniformIndices;
  this.ad = panelIndices;
  this.hU = $p_Ltrivalibs_graphics_painter_Shade__slotNames__sjs_js_Dictionary__sjs_js_Array(this, uniformIndices);
  this.gM = $p_Ltrivalibs_graphics_painter_Shade__slotNames__sjs_js_Dictionary__sjs_js_Array(this, panelIndices);
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  eE: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, sampling) {
  this.ao = null;
  this.j5 = null;
  this.j4 = null;
  this.ao = perMip;
  this.j5 = sampling;
  this.j4 = null;
}
$p = $c_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_TextureViewBundle;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_TextureViewBundle() {
}
$h_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = $p;
var $d_Ltrivalibs_graphics_painter_TextureViewBundle = new $TypeData().i($c_Ltrivalibs_graphics_painter_TextureViewBundle, "trivalibs.graphics.painter.TextureViewBundle", ({
  eH: 1
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
$p.mx = (function() {
  return (((typeof navigator) === "undefined") ? (void 0) : navigator.gpu);
});
$p.oe = (function(canvas) {
  return canvas.getContext("webgpu");
});
$p.pB = (function(gpu, powerPreference, forceFallbackAdapter, requireAdapter, logAdapter) {
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
      throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).V;
    } else {
      return value$2;
    }
  }));
  var f$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
    if (logAdapter) {
      var s = ("WebGPU adapter: " + this.mt(adapter$2.info));
      console.log(s);
    }
    if ((requireAdapter !== (void 0))) {
      if ((!(!(!requireAdapter(adapter$2.info))))) {
        var message$proxy1 = ("WebGPU adapter rejected by requireAdapter: " + this.mt(adapter$2.info));
        throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).V;
      }
    }
    return adapter$2;
  }));
  return promise$proxy2.then($m_sjs_js_Any$().ge(f$proxy1));
});
$p.pC = (function(adapter, requiredFeatures, requiredLimits) {
  var descriptor = ({});
  if ((requiredFeatures !== (void 0))) {
    descriptor.requiredFeatures = requiredFeatures;
  }
  if ((requiredLimits !== (void 0))) {
    descriptor.requiredLimits = requiredLimits;
  }
  return adapter.requestDevice(descriptor);
});
$p.mt = (function(info) {
  return ((info === (void 0)) ? "(no adapter info)" : ((((((info.vendor + " / ") + info.architecture) + " / ") + info.device) + " / ") + info.description));
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  eI: 1
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
  this.hV = 0;
  this.hV = 0;
}
$p = $c_Ltrivalibs_graphics_painter_panel$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_panel$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_panel$package$() {
}
$h_Ltrivalibs_graphics_painter_panel$package$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_panel$package$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_panel$package$, "trivalibs.graphics.painter.panel$package$", ({
  eJ: 1
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
$p.ot = (function(data) {
  return (data.length | 0);
});
$p.p4 = (function(format, data) {
  return ((format === "rgba8unorm") ? (!(!(data instanceof Uint8Array))) : ((format === "rgba32float") ? (!(!(data instanceof Float32Array))) : (((typeof Float16Array) !== "undefined") && (!(!(data instanceof Float16Array))))));
});
var $d_Ltrivalibs_graphics_painter_pixels$package$PixelData$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_pixels$package$PixelData$, "trivalibs.graphics.painter.pixels$package$PixelData$", ({
  eK: 1
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
  this.ni = null;
  this.ng = null;
  this.nh = null;
  this.ni = "rgba8unorm";
  this.ng = "rgba16float";
  this.nh = "rgba32float";
}
$p = $c_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$() {
}
$h_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$.prototype = $p;
$p.ml = (function(f) {
  return ((f === "rgba8unorm") ? 4 : ((f === "rgba16float") ? 8 : ((f === "rgba32float") ? 16 : 0)));
});
var $d_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$, "trivalibs.graphics.painter.pixels$package$PixelFormat$", ({
  eL: 1
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
$p.q2 = (function(target, where) {
  var width = (target.width | 0);
  var height = (target.height | 0);
  var format = target.format;
  if (($m_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$().ml(format) === 0)) {
    var message$proxy3 = (((where + ": unsupported pixel target format '") + format) + "'; use rgba8unorm, rgba16float or rgba32float");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy3)).V;
  }
  if ((!((width > 0) && (height > 0)))) {
    var message$proxy4 = ((((where + ": invalid pixel target size ") + width) + "\u00d7") + height);
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy4)).V;
  }
  if ((!(!("frames" in target)))) {
    var arg = target.frames;
    if ((!(!(!Array.isArray(arg))))) {
      var message$proxy5 = (where + ": PixelFrames.frames must be an array");
      throw new $c_sjs_js_JavaScriptException(Error(message$proxy5)).V;
    }
  } else {
    var data = target.data;
    if (((data === (void 0)) || (!$m_Ltrivalibs_graphics_painter_pixels$package$PixelData$().p4(format, data)))) {
      var message$proxy6 = (((where + ": PixelImage.data must be the array type of '") + format) + "' (Uint8Array / Float16Array / Float32Array)");
      throw new $c_sjs_js_JavaScriptException(Error(message$proxy6)).V;
    }
    var length = $m_Ltrivalibs_graphics_painter_pixels$package$PixelData$().ot(data);
    if ((length !== (Math.imul(width, height) << 2))) {
      var message$proxy7 = ((((where + ": PixelImage.data length ") + length) + " is not width \u00b7 height \u00b7 4 = ") + (Math.imul(width, height) << 2));
      throw new $c_sjs_js_JavaScriptException(Error(message$proxy7)).V;
    }
  }
});
var $d_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$, "trivalibs.graphics.painter.pixels$package$PixelTarget$", ({
  eM: 1
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
$p.mB = (function(source) {
  return ((!(!("data" in source))) && (!(!("format" in source))));
});
$p.n7 = (function(queue, source, texture, width, height, flipY, premultipliedAlpha) {
  if (this.mB(source)) {
    var data = source.data;
    var $x_1 = data.buffer;
    var value = (data.byteOffset | 0);
    var value$1 = Math.imul(width, $m_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$().ml(source.format));
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
  eN: 1
}));
var $n_Ltrivalibs_graphics_painter_sources$package$TextureSource$;
function $m_Ltrivalibs_graphics_painter_sources$package$TextureSource$() {
  if ((!$n_Ltrivalibs_graphics_painter_sources$package$TextureSource$)) {
    $n_Ltrivalibs_graphics_painter_sources$package$TextureSource$ = new $c_Ltrivalibs_graphics_painter_sources$package$TextureSource$();
  }
  return $n_Ltrivalibs_graphics_painter_sources$package$TextureSource$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, in$1, sensitivity, speed) {
  this.lh = null;
  this.a8 = null;
  this.j6 = 0.0;
  this.li = 0.0;
  this.lh = cam;
  this.a8 = in$1;
  this.j6 = sensitivity;
  this.li = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.ft = (function(tpf) {
  var dist = ((this.li * tpf) / 1000.0);
  var forward = 0.0;
  if (((this.a8.ai.aN("KeyW") || this.a8.ai.aN("ArrowUp")) || (this.a8.jh.fq && (this.a8.ai.mZ() === 1)))) {
    forward = (forward + dist);
  }
  if ((((this.a8.ai.aN("KeyS") || this.a8.ai.aN("ArrowDown")) || this.a8.ai.oq(2)) || (this.a8.ai.mZ() >= 2))) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((this.a8.ai.aN("KeyA") || this.a8.ai.aN("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((this.a8.ai.aN("KeyD") || this.a8.ai.aN("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (this.a8.ai.aN("Space")) {
    up = (up + dist);
  }
  if ((this.a8.ai.aN("ShiftLeft") || this.a8.ai.aN("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = this.a8.jg.nQ();
  var deltaH = (((+drag.Q) * this.j6) / 1000.0);
  var deltaV = (((+drag.as) * this.j6) / 1000.0);
  this.lh.p9(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  eO: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.ba = 0.0;
  this.fm = 0.0;
  this.g7 = 0.0;
  this.g6 = 0.0;
  this.aw = 0.0;
  this.bb = 0.0;
  this.a9 = null;
  this.hW = null;
  this.ba = fov;
  this.fm = aspect;
  this.g7 = near;
  this.g6 = far;
  this.aw = rotH;
  this.bb = rotV;
  this.a9 = pos;
  this.hW = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.jE = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.ba) || (aspect !== this.fm)) || (near !== this.g7)) || (far !== this.g6));
  this.ba = fov;
  this.fm = aspect;
  this.g7 = near;
  this.g6 = far;
  if ((rotH !== this.aw)) {
    this.aw = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jP(rotH);
  }
  if ((rotV !== this.bb)) {
    this.bb = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jN(rotV);
  }
  this.a9 = pos;
  if (needsProj) {
    this.hW = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jO(this.ba, this.fm), aspect, near, far);
  }
});
$p.p9 = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.aw = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jP((this.aw + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.bb = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jN((this.bb + deltaV));
  }
  if ((up !== 0.0)) {
    this.a9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.a9.w, (this.a9.t + up), this.a9.x);
  }
  if ((forward !== 0.0)) {
    var $x_5 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().S();
    var $x_4 = this.a9;
    var $x_3 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().S();
    var p$proxy1 = this.aw;
    var $x_1 = Math.sin(p$proxy1);
    var p$proxy2 = this.aw;
    this.a9 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_5, $x_4, $x_3, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_2, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_1)), 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_10 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().S();
    var $x_9 = this.a9;
    var $x_8 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().S();
    var p$proxy3 = this.aw;
    var $x_6 = Math.cos(p$proxy3);
    var p$proxy4 = this.aw;
    this.a9 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_10, $x_9, $x_8, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_7, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_6)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.q0 = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.a9, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().oc(this.aw), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().ob(this.bb)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.n9 = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().fs();
  var t = this.q0();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().od(t.ll, t.lj, t.lk), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  eP: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera$() {
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera$;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera$() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera$.prototype = $p;
$p.jP = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.jN = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.jO = (function(fov, aspect) {
  var p$proxy5 = (0.5 * fov);
  var p$proxy6 = ((+Math.tan(p$proxy5)) / (+Math.min(aspect, 1.0)));
  return (2.0 * (+Math.atan(p$proxy6)));
});
$p.ns = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), this.jO(fov, aspect), aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.jP(rotH), this.jN(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  eQ: 1
}));
var $n_Ltrivalibs_graphics_scene_PerspectiveCamera$;
function $m_Ltrivalibs_graphics_scene_PerspectiveCamera$() {
  if ((!$n_Ltrivalibs_graphics_scene_PerspectiveCamera$)) {
    $n_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $c_Ltrivalibs_graphics_scene_PerspectiveCamera$();
  }
  return $n_Ltrivalibs_graphics_scene_PerspectiveCamera$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_scene_Transform(translation, rotation, scale) {
  this.ll = null;
  this.lj = null;
  this.lk = null;
  this.ll = translation;
  this.lj = rotation;
  this.lk = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  eR: 1
}));
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.b2) + ") ") + b.bh) + ": ")) + b.b3);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().nc($m_sjs_js_ArrayOps$().nb(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_1 = i;
    var x0 = array$1[i];
    var x11 = x0.Q;
    var name = x11.Q;
    var typ = x11.as;
    res[$x_1] = (((((("  @location(" + (x0.as | 0)) + ") ") + name) + ": ") + typ) + ",");
    i = ((1 + i) | 0);
  }
  var len$1 = (builtins.length | 0);
  var res$1 = new Array(len$1);
  var i$1 = 0;
  while ((i$1 < len$1)) {
    var $x_2 = i$1;
    var x0$1 = builtins[i$1];
    var name$1 = x0$1.bh;
    var builtin = x0$1.b2;
    var typ$1 = x0$1.b3;
    res$1[$x_2] = (((((("  @builtin(" + builtin) + ") ") + name$1) + ": ") + typ$1) + ",");
    i$1 = ((1 + i$1) | 0);
  }
  var allFields = $m_sjs_js_ArrayOpsCommon$().a(res, res$1);
  return (((allFields.length | 0) === 0) ? "" : (((("struct " + structName) + " {\n") + allFields.join("\n")) + "\n}"));
}
function $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($thiz, groupIdx, names, types) {
  var array$1 = $m_sjs_js_ArrayOps$().nc($m_sjs_js_ArrayOps$().nb(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    var x20 = x0.Q;
    var name = x20.Q;
    var typ = x20.as;
    var bindingIdx = (x0.as | 0);
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
  eU: 1
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
  this.X = null;
  this.X = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  eV: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.j7 = null;
  this.a2 = null;
  this.j7 = ({});
  this.a2 = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
$p.n8 = (function(d) {
  if ((!(!(!(!(!this.j7.hasOwnProperty(d.name))))))) {
    this.j7[d.name] = true;
    var array = d.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      this.n8(array[i]);
      i = ((1 + i) | 0);
    }
    this.a2.push(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  eW: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  this.l = null;
  this.l = null;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = $p;
$p.hr = (function(d) {
  var r = this.l;
  if ((r !== null)) {
    r.n8(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  eX: 1
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
  this.ap = null;
  this.ah = null;
  this.C = null;
  this.nj = null;
  this.fn = null;
  this.ap = in$1;
  this.ah = out;
  this.C = bindings;
  this.nj = textures;
  this.fn = ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "in.position"));
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  eY: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.j8.hasOwnProperty(data.name))))))) {
    var dict = $thiz.j8;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.j9.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
  this.a0 = null;
  this.j9 = null;
  this.j8 = null;
  this.a0 = "";
  this.j9 = [];
  this.j8 = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
}
$h_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = $p;
$p.ak = (function() {
  return this.j9.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_LayerProgram = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_LayerProgram, "trivalibs.graphics.shader.dsl.LayerProgram", ({
  eZ: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.ja.hasOwnProperty(data.name))))))) {
    var dict = $thiz.ja;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.jb.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.bd = null;
  this.bc = null;
  this.jb = null;
  this.ja = null;
  this.bd = "";
  this.bc = "";
  this.jb = [];
  this.ja = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.ak = (function() {
  return this.jb.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  f0: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, textures) {
  this.be = null;
  this.bf = null;
  this.hX = null;
  this.be = in$1;
  this.bf = out;
  this.hX = bindings;
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
  f4: 1
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
$p.nk = (function() {
  return [];
});
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_WgslFnData$, "trivalibs.graphics.shader.dsl.WgslFnData$", ({
  f6: 1
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
$p.ar = (function(fn, ds) {
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
  ds.jx(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    if ((!(!(!(!(!seen.hasOwnProperty(d$3.name))))))) {
      seen[d$3.name] = true;
      merged.push(d$3);
    }
  })));
  return new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())(fn.name, fn.src, merged);
});
$p.mn = (function(fn, a1) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hr(fn);
  return (((fn.name + "(") + a1) + ")");
});
$p.jv = (function(fn, a1, a2) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hr(fn);
  return (((((fn.name + "(") + a1) + ", ") + a2) + ")");
});
$p.ju = (function(fn, a1, a2, a3) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hr(fn);
  return (((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ")");
});
$p.jt = (function(fn, a1, a2, a3, a4) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hr(fn);
  return (((((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ", ") + a4) + ")");
});
$p.mm = (function(fn, a1, a2, a3, a4, a5) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hr(fn);
  return (((((((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ", ") + a4) + ", ") + a5) + ")");
});
var $d_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$, "trivalibs.graphics.shader.dsl.fn$package$WgslFn$", ({
  f7: 1
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
$p.N = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  f8: 1
}));
var $n_Ltrivalibs_graphics_shader_layouts$;
function $m_Ltrivalibs_graphics_shader_layouts$() {
  if ((!$n_Ltrivalibs_graphics_shader_layouts$)) {
    $n_Ltrivalibs_graphics_shader_layouts$ = new $c_Ltrivalibs_graphics_shader_layouts$();
  }
  return $n_Ltrivalibs_graphics_shader_layouts$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
}
$p = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
}
$h_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = $p;
$p.nH = (function(tex, s, uv, radius, res) {
  if ((res === null)) {
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().nJ();
    var s$proxy1 = WgslFn$_this.jt(fn$proxy1, tex, s, uv, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy1);
  } else {
    var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy2 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().nI();
    var s$proxy2 = WgslFn$_this$2.mm(fn$proxy2, tex, s, uv, res, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy2);
  }
});
$p.jL = (function(tex, s, uv, radius, res) {
  if ((res === null)) {
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy3 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().pX();
    var s$proxy3 = WgslFn$_this.jt(fn$proxy3, tex, s, uv, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy3);
  } else {
    var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy4 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().pW();
    var s$proxy4 = WgslFn$_this$2.mm(fn$proxy4, tex, s, uv, res, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy4);
  }
});
var $d_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_blur_Blur$, "trivalibs.graphics.shader.lib.blur.Blur$", ({
  f9: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_blur_Blur$;
function $m_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_blur_Blur$)) {
    $n_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $c_Ltrivalibs_graphics_shader_lib_blur_Blur$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_blur_Blur$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$() {
  this.ln = null;
  this.lq = false;
  this.lr = null;
  this.lu = false;
  this.lo = null;
  this.lp = false;
  this.ls = null;
  this.lt = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$.prototype = $p;
$p.nI = (function() {
  if ((!this.lq)) {
    this.ln = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_box_2d", "fn blur_box_2d(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, res: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n    var color = textureSample(tex, s, uv - o);\n    color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n    color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n    color += textureSample(tex, s, uv + o);\n    return color * 0.25;\n}");
    this.lq = true;
  }
  return this.ln;
});
$p.pW = (function() {
  if ((!this.lu)) {
    this.lr = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_tent_2d", "fn blur_tent_2d(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, res: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n    var color = textureSample(tex, s, uv) * 0.25;\n    color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n    color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n    return color;\n}");
    this.lu = true;
  }
  return this.lr;
});
$p.nJ = (function() {
  if ((!this.lp)) {
    this.lo = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_box_2d_auto", "fn blur_box_2d_auto(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n    var color = textureSample(tex, s, uv - o);\n    color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n    color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n    color += textureSample(tex, s, uv + o);\n    return color * 0.25;\n}");
    this.lp = true;
  }
  return this.lo;
});
$p.pX = (function() {
  if ((!this.lt)) {
    this.ls = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_tent_2d_auto", "fn blur_tent_2d_auto(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n    var color = textureSample(tex, s, uv) * 0.25;\n    color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n    color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n    return color;\n}");
    this.lt = true;
  }
  return this.ls;
});
var $d_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$, "trivalibs.graphics.shader.lib.blur.Blur$wgsl$", ({
  fa: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$;
function $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$)) {
    $n_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$ = new $c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_noise_Extended$() {
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_Extended$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_Extended$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_Extended$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_Extended$.prototype = $p;
$p.pc = (function(pos, tilingPeriod, rot, seed) {
  var p = (tilingPeriod !== null);
  var r = (rot !== null);
  if ((seed === null)) {
    if ((p && r)) {
      var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy41 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().pr();
      var a3$proxy7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1(rot, 6.283185307179586);
      var s$proxy41 = WgslFn$_this.ju(fn$proxy41, pos, tilingPeriod, a3$proxy7);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy41);
    } else if (p) {
      var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy42 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().po();
      var s$proxy42 = WgslFn$_this$2.jv(fn$proxy42, pos, tilingPeriod);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy42);
    } else if (r) {
      var WgslFn$_this$3 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy43 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().pO();
      var a2$proxy21 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1(rot, 6.283185307179586);
      var s$proxy43 = WgslFn$_this$3.jv(fn$proxy43, pos, a2$proxy21);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy43);
    } else {
      var WgslFn$_this$4 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy44 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().pL();
      var s$proxy44 = WgslFn$_this$4.mn(fn$proxy44, pos);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy44);
    }
  } else if ((p && r)) {
    var WgslFn$_this$5 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy45 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().ps();
    var a3$proxy8 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1(rot, 6.283185307179586);
    var s$proxy45 = WgslFn$_this$5.jt(fn$proxy45, pos, tilingPeriod, a3$proxy8, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy45);
  } else if (p) {
    var WgslFn$_this$6 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy46 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().pp();
    var s$proxy46 = WgslFn$_this$6.ju(fn$proxy46, pos, tilingPeriod, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy46);
  } else if (r) {
    var WgslFn$_this$7 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy47 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().pP();
    var a2$proxy24 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().a1(rot, 6.283185307179586);
    var s$proxy47 = WgslFn$_this$7.ju(fn$proxy47, pos, a2$proxy24, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy47);
  } else {
    var WgslFn$_this$8 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy48 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().pM();
    var s$proxy48 = WgslFn$_this$8.jv(fn$proxy48, pos, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy48);
  }
});
var $d_Ltrivalibs_graphics_shader_lib_noise_Extended$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_Extended$, "trivalibs.graphics.shader.lib.noise.Extended$", ({
  fb: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_noise_Extended$;
function $m_Ltrivalibs_graphics_shader_lib_noise_Extended$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_noise_Extended$)) {
    $n_Ltrivalibs_graphics_shader_lib_noise_Extended$ = new $c_Ltrivalibs_graphics_shader_lib_noise_Extended$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_noise_Extended$;
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__mod289v4__Ltrivalibs_graphics_shader_dsl_WgslFnData($thiz) {
  if ((!$thiz.lw)) {
    $thiz.lv = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_mod289_4", "fn extended_mod289_4(i: vec4<f32>) -> vec4<f32> {\n  return i - floor(i / 289.0) * 289.0;\n}");
    $thiz.lw = true;
  }
  return $thiz.lv;
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData($thiz) {
  if ((!$thiz.ly)) {
    $thiz.lx = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$().ar(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_permute_4", "fn extended_permute_4(i: vec4<f32>) -> vec4<f32> {\n  let im = extended_mod289_4(i);\n  return extended_mod289_4((im * 34.0 + 10.0) * im);\n}"), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__mod289v4__Ltrivalibs_graphics_shader_dsl_WgslFnData($thiz)]));
    $thiz.ly = true;
  }
  return $thiz.lx;
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T($thiz, periodic, rotating, gradient, seeded) {
  var wrap = (periodic ? "  if (any(p > vec3<f32>(0.0))) {\n    var vx = vec4<f32>(v0.x, v1.x, v2.x, v3.x);\n    var vy = vec4<f32>(v0.y, v1.y, v2.y, v3.y);\n    var vz = vec4<f32>(v0.z, v1.z, v2.z, v3.z);\n    if (p.x > 0.0) {\n      vx = vx - floor(vx / p.x) * p.x;\n    }\n    if (p.y > 0.0) {\n      vy = vy - floor(vy / p.y) * p.y;\n    }\n    if (p.z > 0.0) {\n      vz = vz - floor(vz / p.z) * p.z;\n    }\n    i0 = floor(M * vec3<f32>(vx.x, vy.x, vz.x) + 0.5);\n    i1 = floor(M * vec3<f32>(vx.y, vy.y, vz.y) + 0.5);\n    i2 = floor(M * vec3<f32>(vx.z, vy.z, vz.z) + 0.5);\n    i3 = floor(M * vec3<f32>(vx.w, vy.w, vz.w) + 0.5);\n  }\n" : "");
  var seed = (seeded ? "  hash = extended_permute_4(extended_permute_4(hash + so.x) + so.y);\n" : "");
  var gradients = (rotating ? "  let psi = hash * 0.108705628;\n  let Ct = cos(theta);\n  let St = sin(theta);\n  let sz_ = sqrt(1.0 - sz * sz);\n  var gx: vec4<f32>;\n  var gy: vec4<f32>;\n  var gz: vec4<f32>;\n  if (alpha != 0.0) {\n    let px = Ct * sz_;\n    let py = St * sz_;\n    let pz = sz;\n    let Sp = sin(psi);\n    let Cp = cos(psi);\n    let Ctp = St * Sp - Ct * Cp;\n    let qx = mix(Ctp * St, Sp, sz);\n    let qy = mix(-Ctp * Ct, Cp, sz);\n    let qz = -(py * Cp + px * Sp);\n    let Sa = vec4<f32>(sin(alpha));\n    let Ca = vec4<f32>(cos(alpha));\n    gx = Ca * px + Sa * qx;\n    gy = Ca * py + Sa * qy;\n    gz = Ca * pz + Sa * qz;\n  } else {\n    gx = Ct * sz_;\n    gy = St * sz_;\n    gz = sz;\n  }\n" : "  let Ct = cos(theta);\n  let St = sin(theta);\n  let sz_ = sqrt(1.0 - sz * sz);\n  let gx = Ct * sz_;\n  let gy = St * sz_;\n  let gz = sz;\n");
  var result = (gradient ? "  let n = 39.5 * dot(w3, gdotx);\n  let dw = -6.0 * w2 * gdotx;\n  let dn0 = w3.x * g0 + dw.x * x0;\n  let dn1 = w3.y * g1 + dw.y * x1;\n  let dn2 = w3.z * g2 + dw.z * x2;\n  let dn3 = w3.w * g3 + dw.w * x3;\n  let g = 39.5 * (dn0 + dn1 + dn2 + dn3);\n  return vec4<f32>(n, g);" : "  let n = dot(w3, gdotx);\n  return 39.5 * n;");
  return ((((((("  let M = mat3x3<f32>(0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0);\n  let Mi = mat3x3<f32>(-0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5);\n  let uvw = M * x;\n  var i0 = floor(uvw);\n  let f0 = uvw - i0;\n  let gt_ = step(f0.xyx, f0.yzz);\n  let lt_ = 1.0 - gt_;\n  let gt = vec3<f32>(lt_.z, gt_.xy);\n  let lt = vec3<f32>(lt_.xy, gt_.z);\n  let o1 = min(gt, lt);\n  let o2 = max(gt, lt);\n  var i1 = i0 + o1;\n  var i2 = i0 + o2;\n  var i3 = i0 + vec3<f32>(1.0, 1.0, 1.0);\n  let v0 = Mi * i0;\n  let v1 = Mi * i1;\n  let v2 = Mi * i2;\n  let v3 = Mi * i3;\n  let x0 = x - v0;\n  let x1 = x - v1;\n  let x2 = x - v2;\n  let x3 = x - v3;\n" + wrap) + "  var hash = extended_permute_4(extended_permute_4(extended_permute_4(vec4<f32>(i0.z, i1.z, i2.z, i3.z)) + vec4<f32>(i0.y, i1.y, i2.y, i3.y)) + vec4<f32>(i0.x, i1.x, i2.x, i3.x));\n") + seed) + "  let theta = hash * 3.883222077;\n  let sz = hash * -0.006920415 + 0.996539792;\n") + gradients) + "  let g0 = vec3<f32>(gx.x, gy.x, gz.x);\n  let g1 = vec3<f32>(gx.y, gy.y, gz.y);\n  let g2 = vec3<f32>(gx.z, gy.z, gz.z);\n  let g3 = vec3<f32>(gx.w, gy.w, gz.w);\n  var w = 0.5 - vec4<f32>(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3));\n  w = max(w, vec4<f32>(0.0, 0.0, 0.0, 0.0));\n  let w2 = w * w;\n  let w3 = w2 * w;\n  let gdotx = vec4<f32>(dot(g0, x0), dot(g1, x1), dot(g2, x2), dot(g3, x3));\n") + result);
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__seededFwd__T__T__T($thiz, variant, args) {
  return (((("  return extended_" + variant) + "_so(") + args) + ", noise_seed_offsets(seed));");
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$() {
  this.lv = null;
  this.lw = false;
  this.lx = null;
  this.ly = false;
  this.lF = null;
  this.lK = false;
  this.lz = null;
  this.lE = false;
  this.lR = null;
  this.lW = false;
  this.lL = null;
  this.lQ = false;
  this.lI = null;
  this.lJ = false;
  this.lC = null;
  this.lD = false;
  this.lU = null;
  this.lV = false;
  this.lO = null;
  this.lP = false;
  this.lG = null;
  this.lH = false;
  this.lA = null;
  this.lB = false;
  this.lS = null;
  this.lT = false;
  this.lM = null;
  this.lN = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$.prototype = $p;
$p.pr = (function() {
  if ((!this.lK)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy17 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, true, true, false, false);
    var src = (("fn extended_psrnoise_3(x: vec3<f32>, p: vec3<f32>, alpha: f32) -> f32 {\n" + body$proxy17) + "\n}");
    this.lF = $x_1.ar(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psrnoise_3", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.lK = true;
  }
  return this.lF;
});
$p.po = (function() {
  if ((!this.lE)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy18 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, true, false, false, false);
    var src = (("fn extended_psnoise_3(x: vec3<f32>, p: vec3<f32>) -> f32 {\n" + body$proxy18) + "\n}");
    this.lz = $x_1.ar(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psnoise_3", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.lE = true;
  }
  return this.lz;
});
$p.pO = (function() {
  if ((!this.lW)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy19 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, false, true, false, false);
    var src = (("fn extended_srnoise_3(x: vec3<f32>, alpha: f32) -> f32 {\n" + body$proxy19) + "\n}");
    this.lR = $x_1.ar(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_srnoise_3", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.lW = true;
  }
  return this.lR;
});
$p.pL = (function() {
  if ((!this.lQ)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy20 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, false, false, false, false);
    var src = (("fn extended_snoise_3(x: vec3<f32>) -> f32 {\n" + body$proxy20) + "\n}");
    this.lL = $x_1.ar(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_snoise_3", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.lQ = true;
  }
  return this.lL;
});
$p.pt = (function() {
  if ((!this.lJ)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy25 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, true, true, false, true);
    var src = (("fn extended_psrnoise_3_so(x: vec3<f32>, p: vec3<f32>, alpha: f32, so: vec2<f32>) -> f32 {\n" + body$proxy25) + "\n}");
    this.lI = $x_1.ar(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psrnoise_3_so", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.lJ = true;
  }
  return this.lI;
});
$p.pq = (function() {
  if ((!this.lD)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy26 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, true, false, false, true);
    var src = (("fn extended_psnoise_3_so(x: vec3<f32>, p: vec3<f32>, so: vec2<f32>) -> f32 {\n" + body$proxy26) + "\n}");
    this.lC = $x_1.ar(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psnoise_3_so", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.lD = true;
  }
  return this.lC;
});
$p.pQ = (function() {
  if ((!this.lV)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy27 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, false, true, false, true);
    var src = (("fn extended_srnoise_3_so(x: vec3<f32>, alpha: f32, so: vec2<f32>) -> f32 {\n" + body$proxy27) + "\n}");
    this.lU = $x_1.ar(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_srnoise_3_so", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.lV = true;
  }
  return this.lU;
});
$p.pN = (function() {
  if ((!this.lP)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy28 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, false, false, false, true);
    var src = (("fn extended_snoise_3_so(x: vec3<f32>, so: vec2<f32>) -> f32 {\n" + body$proxy28) + "\n}");
    this.lO = $x_1.ar(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_snoise_3_so", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.lP = true;
  }
  return this.lO;
});
$p.ps = (function() {
  if ((!this.lH)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy33 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__seededFwd__T__T__T(this, "psrnoise_3", "x, p, alpha");
    var src = (("fn extended_psrnoise_3_seeded(x: vec3<f32>, p: vec3<f32>, alpha: f32, seed: f32) -> f32 {\n" + body$proxy33) + "\n}");
    this.lG = $x_1.ar(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psrnoise_3_seeded", src), new $c_sjsr_WrappedVarArgs([this.pt(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().ia()]));
    this.lH = true;
  }
  return this.lG;
});
$p.pp = (function() {
  if ((!this.lB)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy34 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__seededFwd__T__T__T(this, "psnoise_3", "x, p");
    var src = (("fn extended_psnoise_3_seeded(x: vec3<f32>, p: vec3<f32>, seed: f32) -> f32 {\n" + body$proxy34) + "\n}");
    this.lA = $x_1.ar(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psnoise_3_seeded", src), new $c_sjsr_WrappedVarArgs([this.pq(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().ia()]));
    this.lB = true;
  }
  return this.lA;
});
$p.pP = (function() {
  if ((!this.lT)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy35 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__seededFwd__T__T__T(this, "srnoise_3", "x, alpha");
    var src = (("fn extended_srnoise_3_seeded(x: vec3<f32>, alpha: f32, seed: f32) -> f32 {\n" + body$proxy35) + "\n}");
    this.lS = $x_1.ar(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_srnoise_3_seeded", src), new $c_sjsr_WrappedVarArgs([this.pQ(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().ia()]));
    this.lT = true;
  }
  return this.lS;
});
$p.pM = (function() {
  if ((!this.lN)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy36 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__seededFwd__T__T__T(this, "snoise_3", "x");
    var src = (("fn extended_snoise_3_seeded(x: vec3<f32>, seed: f32) -> f32 {\n" + body$proxy36) + "\n}");
    this.lM = $x_1.ar(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_snoise_3_seeded", src), new $c_sjsr_WrappedVarArgs([this.pN(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().ia()]));
    this.lN = true;
  }
  return this.lM;
});
var $d_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$, "trivalibs.graphics.shader.lib.noise.Extended$wgsl$", ({
  fc: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$;
function $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$)) {
    $n_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$ = new $c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$() {
  this.lX = null;
  this.lY = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$.prototype = $p;
$p.ia = (function() {
  if ((!this.lY)) {
    this.lX = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$().ar(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_seed_offsets", "fn noise_seed_offsets(seed: f32) -> vec2<f32> {\n  let h = hash1i(bitcast<u32>(seed));\n  return vec2<f32>(f32(h % 289u), f32((h / 289u) % 289u));\n}"), new $c_sjsr_WrappedVarArgs([$m_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$().oh()]));
    this.lY = true;
  }
  return this.lX;
});
var $d_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$, "trivalibs.graphics.shader.lib.noise.NoiseCommon$", ({
  fd: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$;
function $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$)) {
    $n_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$ = new $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$() {
  this.lZ = null;
  this.m0 = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$.prototype = $p;
$p.oh = (function() {
  if ((!this.m0)) {
    this.lZ = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("hash1i", "fn hash1i(x: u32) -> u32 {\n  var v = x;\n    v ^= v >> 16u;\n    v = v * 0x21f0aaadu;\n    v ^= v >> 15u;\n    v = v * 0xd35a2d97u;\n    return v ^ (v >> 15u);\n}");
    this.m0 = true;
  }
  return this.lZ;
});
var $d_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$, "trivalibs.graphics.shader.lib.random.Hash$wgsl$", ({
  fe: 1
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
  this.m1 = null;
  this.je = null;
  this.gR = 0;
  this.gS = 0.0;
  this.hY = 0.0;
  this.hZ = 0.0;
  this.jf = false;
  this.m1 = frame;
  this.je = onFpsCallback;
  this.gR = 0;
  this.gS = 0.0;
  this.hY = 0.0;
  this.hZ = (-1.0);
  this.jf = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.n1 = (function(time) {
  this.gR = ((1 + this.gR) | 0);
  if ((this.gS === 0.0)) {
    this.gS = time;
    this.hY = time;
  }
  var fpsElapsed = (time - this.gS);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.gR) / fpsElapsed);
    if (((time - this.hY) >= 1000.0)) {
      var s = (fps.toFixed(1) + " FPS");
      console.log(s);
      this.hY = time;
      if ((this.je !== null)) {
        (0, this.je)(fps);
      }
    }
    this.gR = 0;
    this.gS = time;
  }
  var delta = ((this.hZ < 0.0) ? 0.0 : (time - this.hZ));
  this.hZ = time;
  (0, this.m1)(delta);
  if (this.jf) {
    requestAnimationFrame($m_sjs_js_Any$().ge(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.n1((+v1$2));
    }))));
  }
});
$p.pR = (function() {
  this.jf = true;
  return requestAnimationFrame($m_sjs_js_Any$().ge(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.n1((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  fk: 1
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
$p.nr = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.pR();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  fl: 1
}));
var $n_Ltrivalibs_utils_animation_animate$package$;
function $m_Ltrivalibs_utils_animation_animate$package$() {
  if ((!$n_Ltrivalibs_utils_animation_animate$package$)) {
    $n_Ltrivalibs_utils_animation_animate$package$ = new $c_Ltrivalibs_utils_animation_animate$package$();
  }
  return $n_Ltrivalibs_utils_animation_animate$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_CanvasInput(input, drag, hold) {
  this.ai = null;
  this.jg = null;
  this.jh = null;
  this.ai = input;
  this.jg = drag;
  this.jh = hold;
}
$p = $c_Ltrivalibs_utils_events_CanvasInput.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_CanvasInput;
/** @constructor */
function $h_Ltrivalibs_utils_events_CanvasInput() {
}
$h_Ltrivalibs_utils_events_CanvasInput.prototype = $p;
$p.ft = (function(tpf) {
  this.jg.ft(tpf);
  this.jh.ft(tpf);
});
var $d_Ltrivalibs_utils_events_CanvasInput = new $TypeData().i($c_Ltrivalibs_utils_events_CanvasInput, "trivalibs.utils.events.CanvasInput", ({
  fm: 1
}));
function $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, pointersOf, glideMinSpeed, glideHalfLife) {
  $thiz.m4 = pointersOf;
  $thiz.m3 = glideHalfLife;
  $thiz.g8 = null;
  $thiz.jj = 0.0;
  $thiz.jk = 0.0;
  $thiz.fo = 0.0;
  $thiz.fp = 0.0;
  $thiz.aJ = 0.0;
  $thiz.aK = 0.0;
  $thiz.ji = (glideHalfLife > 0.0);
  var s = (glideMinSpeed / 1000.0);
  $thiz.m2 = ((s < 0.001) ? 0.001 : s);
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, glideMinSpeed, glideHalfLife) {
  $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife), glideMinSpeed, glideHalfLife);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.aA));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_DragGesture() {
  this.m4 = null;
  this.m3 = 0.0;
  this.g8 = null;
  this.jj = 0.0;
  this.jk = 0.0;
  this.fo = 0.0;
  this.fp = 0.0;
  this.aJ = 0.0;
  this.aK = 0.0;
  this.ji = false;
  this.m2 = 0.0;
}
$p = $c_Ltrivalibs_utils_events_DragGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_DragGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_DragGesture() {
}
$h_Ltrivalibs_utils_events_DragGesture.prototype = $p;
$p.nQ = (function() {
  return new $c_T2(this.fo, this.fp);
});
$p.ft = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().mv(this.m4.h0());
  if ((d === null)) {
    this.g8 = null;
    if (this.ji) {
      var p$proxy1 = ((this.aJ * this.aJ) + (this.aK * this.aK));
      var $x_1 = ((+Math.sqrt(p$proxy1)) >= this.m2);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var e$proxy1 = (tpf / this.m3);
      var f = (+Math.pow(0.5, e$proxy1));
      this.aJ = (this.aJ * f);
      this.aK = (this.aK * f);
      this.fo = (this.aJ * tpf);
      this.fp = (this.aK * tpf);
    } else {
      this.aJ = 0.0;
      this.aK = 0.0;
      this.fo = 0.0;
      this.fp = 0.0;
    }
  } else {
    if ((((this.g8 !== null) && (d.aV !== null)) && $m_sr_BoxesRunTime$().i5((+this.g8), (+d.aV)))) {
      this.fo = (d.ga - this.jj);
      this.fp = (d.gb - this.jk);
      if ((this.ji && (tpf > 0.0))) {
        var e$proxy2 = (tpf / 40.0);
        var k = (1.0 - (+Math.pow(0.5, e$proxy2)));
        this.aJ = (this.aJ + (((this.fo / tpf) - this.aJ) * k));
        this.aK = (this.aK + (((this.fp / tpf) - this.aK) * k));
      }
    } else {
      if ((this.g8 === null)) {
        this.aJ = 0.0;
        this.aK = 0.0;
      }
      this.fo = 0.0;
      this.fp = 0.0;
    }
    this.g8 = d.aV;
    this.jj = d.ga;
    this.jk = d.gb;
  }
});
var $d_Ltrivalibs_utils_events_DragGesture = new $TypeData().i($c_Ltrivalibs_utils_events_DragGesture, "trivalibs.utils.events.DragGesture", ({
  fn: 1
}));
function $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, pointersOf, holdDelay, holdRadius) {
  $thiz.m7 = pointersOf;
  $thiz.m5 = holdDelay;
  $thiz.m6 = holdRadius;
  $thiz.gU = null;
  $thiz.g9 = 0.0;
  $thiz.gV = false;
  $thiz.gT = false;
  $thiz.fq = false;
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, holdDelay, holdRadius) {
  $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius), holdDelay, holdRadius);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.aA));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_HoldGesture() {
  this.m7 = null;
  this.m5 = 0.0;
  this.m6 = 0.0;
  this.gU = null;
  this.g9 = 0.0;
  this.gV = false;
  this.gT = false;
  this.fq = false;
}
$p = $c_Ltrivalibs_utils_events_HoldGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_HoldGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_HoldGesture() {
}
$h_Ltrivalibs_utils_events_HoldGesture.prototype = $p;
$p.ft = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().mv(this.m7.h0());
  if ((d === null)) {
    this.gU = null;
    this.g9 = 0.0;
    this.gV = false;
    this.gT = false;
    this.fq = false;
  } else {
    var pid = d.aV;
    if ((!(((this.gU !== null) && (pid !== null)) && $m_sr_BoxesRunTime$().i5((+this.gU), (+pid))))) {
      this.gU = pid;
      this.g9 = 0.0;
      this.gV = false;
      this.gT = false;
    }
    this.g9 = (this.g9 + tpf);
    if (this.gT) {
      this.fq = true;
    } else if ((this.g9 < this.m5)) {
      var dx = (d.ga - d.jm);
      var dy = (d.gb - d.jn);
      var p$proxy2 = ((dx * dx) + (dy * dy));
      if (((+Math.sqrt(p$proxy2)) > this.m6)) {
        this.gV = true;
      }
      this.fq = false;
    } else if (this.gV) {
      this.fq = false;
    } else {
      this.gT = true;
      this.fq = true;
    }
  }
});
var $d_Ltrivalibs_utils_events_HoldGesture = new $TypeData().i($c_Ltrivalibs_utils_events_HoldGesture, "trivalibs.utils.events.HoldGesture", ({
  fo: 1
}));
function $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz) {
  var i = 0;
  while ((i < ($thiz.gY.length | 0))) {
    if (($thiz.gY[i].aV === null)) {
      return $thiz.gY[i];
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id) {
  var i = 0;
  while ((i < ($thiz.aA.length | 0))) {
    var p = $thiz.aA[i];
    if (((p.aV !== null) && $m_sr_BoxesRunTime$().i5((+p.aV), id))) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id) {
  var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id);
  if ((p !== null)) {
    p.aV = null;
    var idx = $m_sjs_js_ArrayOps$().mA($thiz.aA, p, 0);
    if ((idx >= 0)) {
      $thiz.aA.splice(idx, 1);
    }
  }
}
function $p_Ltrivalibs_utils_events_InputState__install__V($thiz) {
  var i = 0;
  while ((i < $thiz.mc)) {
    $thiz.gY.push(new $c_Ltrivalibs_utils_events_Pointer());
    i = ((1 + i) | 0);
  }
  $m_Ltrivalibs_utils_events_keyboard$package$().os($thiz.gW, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!$thiz.gX.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      $thiz.gX[k$3] = value$proxy1;
      if ((!($thiz.aj === (void 0)))) {
        (0, $thiz.aj)();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete $thiz.gX[k$3$1];
    if ((!($thiz.aj === (void 0)))) {
      (0, $thiz.aj)();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().pi($thiz.m9, $m_Ltrivalibs_utils_events_pointer$package$().pj(), new $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(((v1$2, v2$2, v3$2, v4$2, v5$2) => {
    var button = (v1$2 | 0);
    var id = (+v2$2);
    var x$1 = (+v3$2);
    var y = (+v4$2);
    if ($thiz.mb) {
      $thiz.gW.focus();
    }
    var key$proxy3 = ("" + button);
    var value$proxy2 = (+Date.now());
    $thiz.i0[key$proxy3] = value$proxy2;
    var slot = $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz);
    if ((slot !== null)) {
      slot.aV = id;
      slot.jl = button;
      (+Date.now());
      slot.jm = x$1;
      slot.jn = y;
      slot.ga = x$1;
      slot.gb = y;
      $thiz.aA.push(slot);
      ($thiz.aA.length | 0);
    }
    if ((!($thiz.aj === (void 0)))) {
      (0, $thiz.aj)();
    }
  })), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2$1, v2$2$1, v3$2$1) => {
    var id$1 = (+v1$2$1);
    var x$2 = (+v2$2$1);
    var y$1 = (+v3$2$1);
    var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id$1);
    if ((p !== null)) {
      p.ga = x$2;
      p.gb = y$1;
      if ((($thiz.aA.length | 0) > 0)) {
        $thiz.aA[0];
      }
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2$1) => {
    var button$1 = (v1$2$2 | 0);
    var id$2 = (+v2$2$2);
    delete $thiz.i0[("" + button$1)];
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id$2);
    if ((!($thiz.aj === (void 0)))) {
      (0, $thiz.aj)();
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2$3) => {
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, (+v1$2$3));
    if ((!($thiz.aj === (void 0)))) {
      (0, $thiz.aj)();
    }
  })), $thiz.md);
  $thiz.gW.addEventListener("focus", $thiz.ma);
  $thiz.gW.addEventListener("blur", $thiz.m8);
}
/** @constructor */
function $c_Ltrivalibs_utils_events_InputState(el, keyTarget, suppressContextMenu, onActivity, focusOnPointerDown, maxPointers) {
  this.m9 = null;
  this.gW = null;
  this.md = false;
  this.aj = null;
  this.mb = false;
  this.mc = 0;
  this.gX = null;
  this.i0 = null;
  this.gY = null;
  this.aA = null;
  this.ma = null;
  this.m8 = null;
  this.m9 = el;
  this.gW = keyTarget;
  this.md = suppressContextMenu;
  this.aj = onActivity;
  this.mb = focusOnPointerDown;
  this.mc = maxPointers;
  this.gX = ({});
  this.i0 = ({});
  this.gY = [];
  this.aA = [];
  if ($m_sr_BoxesRunTime$().b(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().b(keyTarget, document.activeElement);
  }
  this.ma = ((_$1$3) => {
    if ((!(this.aj === (void 0)))) {
      (0, this.aj)();
    }
  });
  this.m8 = ((_$2$3) => {
    if ((!(this.aj === (void 0)))) {
      (0, this.aj)();
    }
  });
  $p_Ltrivalibs_utils_events_InputState__install__V(this);
}
$p = $c_Ltrivalibs_utils_events_InputState.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_InputState;
/** @constructor */
function $h_Ltrivalibs_utils_events_InputState() {
}
$h_Ltrivalibs_utils_events_InputState.prototype = $p;
$p.aN = (function(key) {
  return (!(!(!(!this.gX.hasOwnProperty(key)))));
});
$p.oq = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.i0.hasOwnProperty(key$proxy7)))));
});
$p.mZ = (function() {
  return (this.aA.length | 0);
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  fp: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_Pointer() {
  this.aV = null;
  this.jl = 0;
  this.jm = 0.0;
  this.jn = 0.0;
  this.ga = 0.0;
  this.gb = 0.0;
  this.aV = null;
  this.jl = 0;
  this.jm = 0.0;
  this.jn = 0.0;
  this.ga = 0.0;
  this.gb = 0.0;
}
$p = $c_Ltrivalibs_utils_events_Pointer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_Pointer;
/** @constructor */
function $h_Ltrivalibs_utils_events_Pointer() {
}
$h_Ltrivalibs_utils_events_Pointer.prototype = $p;
var $d_Ltrivalibs_utils_events_Pointer = new $TypeData().i($c_Ltrivalibs_utils_events_Pointer, "trivalibs.utils.events.Pointer", ({
  fq: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_gestures$package$() {
}
$p = $c_Ltrivalibs_utils_events_gestures$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_gestures$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_gestures$package$() {
}
$h_Ltrivalibs_utils_events_gestures$package$.prototype = $p;
$p.mv = (function(pointers) {
  var i = 0;
  while ((i < (pointers.length | 0))) {
    var p = pointers[i];
    if ((p.jl === 0)) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
});
var $d_Ltrivalibs_utils_events_gestures$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_gestures$package$, "trivalibs.utils.events.gestures$package$", ({
  fr: 1
}));
var $n_Ltrivalibs_utils_events_gestures$package$;
function $m_Ltrivalibs_utils_events_gestures$package$() {
  if ((!$n_Ltrivalibs_utils_events_gestures$package$)) {
    $n_Ltrivalibs_utils_events_gestures$package$ = new $c_Ltrivalibs_utils_events_gestures$package$();
  }
  return $n_Ltrivalibs_utils_events_gestures$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
}
$p = $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
}
$h_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$.prototype = $p;
$p.oo = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity, dragGlideHalfLife, dragGlideMinSpeed) {
  canvas.setAttribute("tabindex", "0");
  var \u03b41$ = canvas.style;
  \u03b41$.setProperty("outline", "none");
  var \u03b42$ = canvas.style;
  \u03b42$.setProperty("touch-action", "none");
  var \u03b43$ = canvas.style;
  \u03b43$.setProperty("user-select", "none");
  var \u03b44$ = canvas.style;
  \u03b44$.setProperty("-webkit-user-select", "none");
  var \u03b45$ = canvas.style;
  \u03b45$.setProperty("-webkit-touch-callout", "none");
  var \u03b46$ = canvas.style;
  \u03b46$.setProperty("-webkit-tap-highlight-color", "transparent");
  var input = new $c_Ltrivalibs_utils_events_InputState(canvas, canvas, suppressContextMenu, onActivity, true, 4);
  if (initialFocus) {
    canvas.focus();
  }
  return new $c_Ltrivalibs_utils_events_CanvasInput(input, $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__D__D__(new $c_Ltrivalibs_utils_events_DragGesture(), input, dragGlideMinSpeed, dragGlideHalfLife), $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__(new $c_Ltrivalibs_utils_events_HoldGesture(), input, holdDelay, holdRadius));
});
var $d_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$, "trivalibs.utils.events.interactive_canvas$package$", ({
  fs: 1
}));
var $n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$;
function $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
  if ((!$n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$)) {
    $n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$ = new $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$();
  }
  return $n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_keyboard$package$() {
}
$p = $c_Ltrivalibs_utils_events_keyboard$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_keyboard$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_keyboard$package$() {
}
$h_Ltrivalibs_utils_events_keyboard$package$.prototype = $p;
$p.os = (function(el, onDown, onUp, keepDefault) {
  var down = ((e$3) => {
    var isTab = (e$3.code === "Tab");
    if (((!keepDefault) && (!isTab))) {
      e$3.preventDefault();
    }
    if ((!(!(!e$3.repeat)))) {
      onDown.h(e$3.code);
    }
  });
  var up = ((e$3$1) => {
    onUp.h(e$3$1.code);
  });
  el.addEventListener("keydown", down);
  el.addEventListener("keyup", up);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    el.removeEventListener("keydown", down);
    el.removeEventListener("keyup", up);
  }));
});
var $d_Ltrivalibs_utils_events_keyboard$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_keyboard$package$, "trivalibs.utils.events.keyboard$package$", ({
  ft: 1
}));
var $n_Ltrivalibs_utils_events_keyboard$package$;
function $m_Ltrivalibs_utils_events_keyboard$package$() {
  if ((!$n_Ltrivalibs_utils_events_keyboard$package$)) {
    $n_Ltrivalibs_utils_events_keyboard$package$ = new $c_Ltrivalibs_utils_events_keyboard$package$();
  }
  return $n_Ltrivalibs_utils_events_keyboard$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_pointer$package$() {
}
$p = $c_Ltrivalibs_utils_events_pointer$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_pointer$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_pointer$package$() {
}
$h_Ltrivalibs_utils_events_pointer$package$.prototype = $p;
$p.pi = (function(el, moveTarget, onDown, onMove, onUp, onCancel, suppressContextMenu) {
  var downFn = ((e$3) => {
    onDown.nu((e$3.button | 0), (+e$3.pointerId), (+e$3.clientX), (+e$3.clientY), (!(!e$3.isPrimary)));
  });
  var moveFn = ((e$3$1) => {
    onMove.nw((+e$3$1.pointerId), (+e$3$1.clientX), (+e$3$1.clientY));
  });
  var upFn = ((e$3$2) => {
    onUp.nv((e$3$2.button | 0), (+e$3$2.pointerId), (+e$3$2.clientX), (+e$3$2.clientY));
  });
  var cancelFn = ((e$3$3) => {
    onCancel.h((+e$3$3.pointerId));
  });
  var ctxFn = ((e$3$4) => {
    e$3$4.preventDefault();
  });
  el.addEventListener("pointerdown", downFn);
  moveTarget.addEventListener("pointermove", moveFn);
  moveTarget.addEventListener("pointerup", upFn);
  moveTarget.addEventListener("pointercancel", cancelFn);
  if (suppressContextMenu) {
    el.addEventListener("contextmenu", ctxFn);
  }
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    el.removeEventListener("pointerdown", downFn);
    moveTarget.removeEventListener("pointermove", moveFn);
    moveTarget.removeEventListener("pointerup", upFn);
    moveTarget.removeEventListener("pointercancel", cancelFn);
    if (suppressContextMenu) {
      el.removeEventListener("contextmenu", ctxFn);
    }
  }));
});
$p.pj = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  fu: 1
}));
var $n_Ltrivalibs_utils_events_pointer$package$;
function $m_Ltrivalibs_utils_events_pointer$package$() {
  if ((!$n_Ltrivalibs_utils_events_pointer$package$)) {
    $n_Ltrivalibs_utils_events_pointer$package$ = new $c_Ltrivalibs_utils_events_pointer$package$();
  }
  return $n_Ltrivalibs_utils_events_pointer$package$;
}
/** @constructor */
function $c_jl_Character$() {
  this.ie = null;
  $n_jl_Character$ = this;
  this.ie = $constArrUDiffs_I(67, "1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]");
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.pZ = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.nT = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().nE(this.ie, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.ie.g[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  aN: 1,
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
function $c_jl_Integer$() {
}
$p = $c_jl_Integer$.prototype = new $h_O();
$p.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
}
$h_jl_Integer$.prototype = $p;
$p.ho = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.or = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().ho(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().ho(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) | 0);
  if ((i >= len)) {
    $m_jl_Integer$().ho(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.nT(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().ho(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().ho(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  aT: 1,
  a: 1
}));
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$();
  }
  return $n_jl_Integer$;
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
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $Long));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.l)));
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jV = s;
  if (writableStackTrace) {
    $thiz.o6();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jV = null;
  }
  i6() {
    return this.jV;
  }
  o6() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.V : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  q() {
    var className = $objectClassName(this);
    var message = this.i6();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  z() {
    return $c_O.prototype.z.call(this);
  }
  v(that) {
    return $c_O.prototype.v.call(this, that);
  }
  get "message"() {
    var m = this.i6();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.q();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f)));
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
$p.q = (function() {
  return "<function1>";
});
/** @constructor */
function $c_s_LowPriorityImplicits() {
}
$p = $c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$p.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
}
$h_s_LowPriorityImplicits.prototype = $p;
$p.q8 = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.g.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.k5;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$p = $c_sr_AbstractFunction0.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $p;
$p.q = (function() {
  return "<function0>";
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
$p.q = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_AbstractFunction2() {
}
$p = $c_sr_AbstractFunction2.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
}
$h_sr_AbstractFunction2.prototype = $p;
$p.q = (function() {
  return "<function2>";
});
/** @constructor */
function $c_sr_AbstractFunction3() {
}
$p = $c_sr_AbstractFunction3.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction3;
/** @constructor */
function $h_sr_AbstractFunction3() {
}
$h_sr_AbstractFunction3.prototype = $p;
$p.q = (function() {
  return "<function3>";
});
/** @constructor */
function $c_sr_AbstractFunction4() {
}
$p = $c_sr_AbstractFunction4.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction4;
/** @constructor */
function $h_sr_AbstractFunction4() {
}
$h_sr_AbstractFunction4.prototype = $p;
$p.q = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_AbstractFunction5() {
}
$p = $c_sr_AbstractFunction5.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction5;
/** @constructor */
function $h_sr_AbstractFunction5() {
}
$h_sr_AbstractFunction5.prototype = $p;
$p.q = (function() {
  return "<function5>";
});
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.gr = 0;
  this.kf = 0;
  this.nd = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.gr = $f_T__hashCode__I("Seq");
  this.kf = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.nd = this.q1($m_sci_Nil$(), this.kf);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.n4 = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.ok(xs, this.gr) : ((xs instanceof $c_sci_List) ? this.ov(xs, this.gr) : this.pf(xs, this.gr)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  cW: 1,
  cV: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_Lsketchlib_utils_bloom_Bloom$$anon$1(bloomP$1, resultP$1, p$1, uBlurRadius$1, uIntensity$1) {
  this.kh = null;
  this.kg = null;
  this.ki = null;
  this.kj = null;
  this.kh = p$1;
  this.kg = bloomP$1;
  this.ki = resultP$1;
  this.kj = resultP$1;
}
$p = $c_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bloom_Bloom$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_bloom_Bloom$$anon$1() {
}
$h_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = $p;
$p.ph = (function() {
  var Painter_this = this.kh;
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.kg);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.ki);
});
var $d_Lsketchlib_utils_bloom_Bloom$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$$anon$1, "sketchlib.utils.bloom.Bloom$$anon$1", ({
  d0: 1,
  cY: 1
}));
function $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__applySizing__V($thiz) {
  if (($thiz.fa > 0.0)) {
    var sigma = ((0.01 * $thiz.kl) * $thiz.hy);
    var vRatio = (1.0 + ($thiz.km * $m_Lsketchlib_utils_mirror_MirrorReflection$().ij));
    var p$proxy3 = ($thiz.im * sigma);
    var p$proxy4 = (+Math.ceil(p$proxy3));
    var other$proxy4 = (0.5 * $thiz.gs);
    var mx = (+Math.min(p$proxy4, other$proxy4));
    var p$proxy5 = (($thiz.im * sigma) * vRatio);
    var p$proxy6 = (+Math.ceil(p$proxy5));
    var other$proxy5 = (0.5 * $thiz.fa);
    var my = (+Math.min(p$proxy6, other$proxy5));
    var pw = $doubleToInt(($thiz.gs + (2.0 * mx)));
    var ph = $doubleToInt(($thiz.fa + (2.0 * my)));
    $thiz.il.jF(pw, ph, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    $thiz.ik.jF(pw, ph, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    var BufferBinding_this = $thiz.kt;
    var value$proxy10 = $thiz.hy;
    BufferBinding_this.E.A(BufferBinding_this.j, value$proxy10);
    var $x_3 = BufferBinding_this.D.queue;
    var $x_2 = BufferBinding_this.B;
    var s$proxy6 = BufferBinding_this.j;
    var $x_1 = s$proxy6.dv.buffer;
    $x_3.writeBuffer($x_2, 0.0, $x_1);
    $thiz.hw = ($thiz.gs / pw);
    $thiz.hx = ($thiz.fa / ph);
    var BufferBinding_this$3 = $thiz.kr;
    var value$proxy11 = new $c_Ltrivalibs_graphics_math_cpu_Vec4($thiz.hw, $thiz.hx, (mx / pw), (my / ph));
    BufferBinding_this$3.E.A(BufferBinding_this$3.j, value$proxy11);
    var $x_6 = BufferBinding_this$3.D.queue;
    var $x_5 = BufferBinding_this$3.B;
    var s$proxy7 = BufferBinding_this$3.j;
    var $x_4 = s$proxy7.dv.buffer;
    $x_6.writeBuffer($x_5, 0.0, $x_4);
  }
}
function $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__deriveRefH__V($thiz) {
  var $x_2 = $thiz.fa;
  var $x_1 = $thiz.hv.ba;
  var this$1 = $thiz.hv;
  $thiz.hy = (($x_2 * $x_1) / $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jO(this$1.ba, this$1.fm));
}
function $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_math_cpu_Mat4($thiz) {
  var this$1 = $thiz.hv;
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().fs(), this$1.hW, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this$1.n9());
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1(mirrorPanel$1, resolvePanel$1, camera$1, blurStrength$1, stretch$1, overscan$1, _blurPanel$1, uVisHeight$1, uCrop$1, uBlurStrength$1, strengthScale$1, uStretch$1, reflMat$1, uVp$1, uInvVp$1, p$1) {
  this.im = 0.0;
  this.il = null;
  this.ik = null;
  this.kt = null;
  this.kr = null;
  this.ko = null;
  this.ku = null;
  this.ks = null;
  this.kn = null;
  this.kp = null;
  this.kq = null;
  this.hv = null;
  this.gs = 0.0;
  this.fa = 0.0;
  this.hy = 0.0;
  this.kl = 0.0;
  this.km = 0.0;
  this.hw = 0.0;
  this.hx = 0.0;
  this.im = overscan$1;
  this.il = mirrorPanel$1;
  this.ik = _blurPanel$1;
  this.kt = uVisHeight$1;
  this.kr = uCrop$1;
  this.ko = reflMat$1;
  this.ku = uVp$1;
  this.ks = uInvVp$1;
  this.kn = p$1;
  this.kp = resolvePanel$1;
  this.kq = resolvePanel$1;
  this.hv = camera$1;
  this.gs = 0.0;
  this.fa = 0.0;
  this.hy = 0.0;
  this.kl = blurStrength$1;
  this.km = stretch$1;
  this.hw = 1.0;
  this.hx = 1.0;
}
$p = $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_mirror_MirrorReflection$$anon$1() {
}
$h_Lsketchlib_utils_mirror_MirrorReflection$$anon$1.prototype = $p;
$p.pD = (function(w, h) {
  var x = $doubleToInt(w);
  this.gs = ((x > 1) ? x : 1);
  var x$1 = $doubleToInt(h);
  this.fa = ((x$1 > 1) ? x$1 : 1);
  $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__deriveRefH__V(this);
  $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__applySizing__V(this);
});
$p.pg = (function(vp) {
  var cameraVP = ((vp === (void 0)) ? $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_math_cpu_Mat4(this) : vp);
  var m$1 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().fs(), new $c_Ltrivalibs_graphics_math_cpu_Mat4(this.hw, 0.0, 0.0, 0.0, 0.0, this.hx, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().fs(), cameraVP, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this.ko));
  var BufferBinding_this = this.ku;
  BufferBinding_this.E.A(BufferBinding_this.j, m$1);
  var $x_3 = BufferBinding_this.D.queue;
  var $x_2 = BufferBinding_this.B;
  var s$proxy10 = BufferBinding_this.j;
  var $x_1 = s$proxy10.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var BufferBinding_this$3 = this.ks;
  var value$proxy13 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().fs(), m$1, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
  BufferBinding_this$3.E.A(BufferBinding_this$3.j, value$proxy13);
  var $x_6 = BufferBinding_this$3.D.queue;
  var $x_5 = BufferBinding_this$3.B;
  var s$proxy11 = BufferBinding_this$3.j;
  var $x_4 = s$proxy11.dv.buffer;
  $x_6.writeBuffer($x_5, 0.0, $x_4);
  var Painter_this = this.kn;
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.il);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.ik);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.kp);
});
var $d_Lsketchlib_utils_mirror_MirrorReflection$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1, "sketchlib.utils.mirror.MirrorReflection$$anon$1", ({
  d3: 1,
  d1: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT(uv) {
  this.au = null;
  this.au = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  d8: 1,
  d7: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$.prototype = $p;
$p.q9 = (function(ref, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.A = (function(ref, value) {
  this.q9(ref, (+value));
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Double_$times$colon$", ({
  d9: 1,
  E: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$.prototype = $p;
$p.A = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().of(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  da: 1,
  E: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
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
$p.qa = (function(ref, value) {
  var value$proxy2 = value.w;
  var value$proxy3 = Math.fround(value$proxy2);
  var offset$proxy5 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy5, value$proxy3, true);
  var value$proxy4 = value.t;
  var value$proxy5 = Math.fround(value$proxy4);
  var offset$proxy6 = ((4 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy6, value$proxy5, true);
  var value$proxy6 = value.x;
  var value$proxy7 = Math.fround(value$proxy6);
  var offset$proxy7 = ((8 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy7, value$proxy7, true);
});
$p.A = (function(ref, value) {
  this.qa(ref, value);
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec3_Vec4Buffer$", ({
  db: 1,
  E: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$.prototype = $p;
$p.A = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$().q4(), ref, $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec4_Vec4Buffer$", ({
  dc: 1,
  E: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$() {
}
$p = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$() {
}
$h_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$.prototype = $p;
$p.gj = (function(t) {
  return new $c_T2(t.iH, t.iI);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  dh: 1,
  az: 1
}));
var $n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$;
function $m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$() {
  if ((!$n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$)) {
    $n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$();
  }
  return $n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$() {
}
$p = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$() {
}
$h_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$.prototype = $p;
$p.gj = (function(t) {
  return new $c_T3(t.w, t.t, t.x);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  di: 1,
  az: 1
}));
var $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$;
function $m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$() {
  if ((!$n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$)) {
    $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$();
  }
  return $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayout$named(x$1) {
  this.kx = null;
  this.kx = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  dr: 1,
  dq: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.ky = null;
  this.kz = null;
  this.ky = x$1;
  this.kz = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.q3 = (function(t) {
  return $m_sr_Tuples$().nO(this.ky.gj(t.r(0)), this.kz.gj($m_sr_Tuples$().pU(t)));
});
$p.gj = (function(t) {
  return this.q3(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  ds: 1,
  aA: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$() {
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$.prototype = $p;
$p.gj = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  dt: 1,
  aA: 1
}));
var $n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$;
function $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$() {
  if ((!$n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$)) {
    $n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$();
  }
  return $n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(idx$2) {
  this.kB = 0;
  this.kB = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.n0 = (function(t) {
  return t.r(this.kB);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  dy: 1,
  dn: 1
}));
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.w * other.w) + (v.t * other.t)) + (v.x * other.x));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$() {
  this.kC = null;
  this.kD = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.fs = (function() {
  if ((!this.kD)) {
    this.kC = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.kD = true;
  }
  return this.kC;
});
$p.od = (function(t, r, s) {
  var x = r.hD;
  var y = r.hE;
  var z = r.hF;
  var w = r.hC;
  var x2 = (x + x);
  var y2 = (y + y);
  var z2 = (z + z);
  var xx = (x * x2);
  var xy = (x * y2);
  var xz = (x * z2);
  var yy = (y * y2);
  var yz = (y * z2);
  var zz = (z * z2);
  var wx = (w * x2);
  var wy = (w * y2);
  var wz = (w * z2);
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.w), ((xy + wz) * s.w), ((xz - wy) * s.w), 0.0, ((xy - wz) * s.t), ((1.0 - (xx + zz)) * s.t), ((yz + wx) * s.t), 0.0, ((xz + wy) * s.x), ((yz - wx) * s.x), ((1.0 - (xx + yy)) * s.x), 0.0, t.w, t.t, t.x, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  dM: 1,
  dA: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Mat4$;
function $m_Ltrivalibs_graphics_math_cpu_Mat4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Mat4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Mat4$ = new $c_Ltrivalibs_graphics_math_cpu_Mat4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Mat4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_QuatImmutableOps_Quat$", ({
  dQ: 1,
  dS: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3$() {
  this.kE = null;
  this.kF = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.S = (function() {
  if ((!this.kF)) {
    this.kE = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.kF = true;
  }
  return this.kE;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  dV: 1,
  dG: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$$anon$18", ({
  e0: 1,
  dC: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$$anon$8", ({
  e3: 1,
  dK: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13(f$2) {
  this.kK = null;
  this.kK = f$2;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13.prototype = $p;
$p.b1 = (function(s) {
  return this.kK.h(s);
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13, "trivalibs.graphics.math.gpu.LeftScalar$$anon$13", ({
  e7: 1,
  e5: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr(name) {
  this.e = null;
  this.kL = null;
  this.kL = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(this, name);
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.u = (function(value) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return (((("  let " + this.kL) + " = ") + value.e) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  e8: 1,
  aE: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6.prototype = $p;
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6, "trivalibs.graphics.math.gpu.float_expr$package$$anon$6", ({
  ef: 1,
  Q: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$.prototype = $p;
$p.hs = (function(m, x$2, v, x$4, x$5) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.e) + " * ") + v.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  eg: 1,
  dB: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$.prototype = $p;
$p.nn = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("abs(" + a.e) + ")"));
});
$p.oa = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("fract(" + a.e) + ")"));
});
$p.mC = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("log2(" + a.e) + ")"));
});
$p.mU = (function(a, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + a.e) + ", ") + other.e) + ")"));
});
$p.p5 = (function(a, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("max(" + a.e) + ", ") + other.e) + ")"));
});
$p.h1 = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("saturate(" + a.e) + ")"));
});
$p.mw = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.e) + " * 2.0 - 1.0)"));
});
$p.o7 = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.e) + " * 0.5 + 0.5)"));
});
$p.n5 = (function(a, edge0, edge1) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("smoothstep(" + edge0.e) + ", ") + edge1.e) + ", ") + a.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumExt_FloatExpr$", ({
  eh: 1,
  fv: 1
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
$p.jp = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " + ") + b.e) + ")"));
});
$p.nl = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " - ") + b.e) + ")"));
});
$p.gZ = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " * ") + b.e) + ")"));
});
$p.me = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " / ") + b.e) + ")"));
});
$p.fr = (function(a, b) {
  return this.nl(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(b));
});
$p.a1 = (function(a, b) {
  return this.gZ(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(b));
});
$p.jo = (function(a, b) {
  return this.me(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(b));
});
$p.o5 = (function(a, v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " * ") + v.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumOps_FloatExpr$", ({
  ei: 1,
  fw: 1
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
$p.bs = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".x"));
});
$p.gl = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".y"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2BaseG_FloatExpr_Vec2Expr$", ({
  ej: 1,
  dD: 1
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
$p.nq = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " + ") + other.e) + ")"));
});
$p.jI = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " - ") + other.e) + ")"));
});
$p.pa = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " * ") + other.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  ek: 1,
  dE: 1
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
$p.nW = (function(v, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("dot(" + v.e) + ", ") + other.e) + ")"));
});
$p.ou = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("length(" + v.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3BaseG_FloatExpr_Vec3Expr$", ({
  el: 1,
  aD: 1
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
$p.jr = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " + ") + other.e) + ")"));
});
$p.jJ = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " - ") + other.e) + ")"));
});
$p.br = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " * ") + scalar.e) + ")"));
});
$p.mf = (function(v, x$2, scalar) {
  return this.br(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(scalar));
});
$p.mu = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " / ") + scalar.e) + ")"));
});
$p.o4 = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("exp(" + v.e) + ")"));
});
$p.p7 = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + v.e) + ", ") + other.e) + ")"));
});
$p.p8 = (function(v, x$2, b, t) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + v.e) + ", ") + b.e) + ", ") + t.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  em: 1,
  dH: 1
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
$p.bs = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".x"));
});
$p.gl = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".y"));
});
$p.qh = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".z"));
});
$p.ic = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".w"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4BaseG_FloatExpr_Vec4Expr$", ({
  en: 1,
  F: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$.prototype = $p;
$p.i2 = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " + ") + other.e) + ")"));
});
$p.mX = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " * ") + scalar.e) + ")"));
});
$p.i1 = (function(v, x$2, scalar) {
  return this.mX(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n().h(scalar));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  eo: 1,
  dJ: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_CanvasSurface(canvas, format) {
  this.am = null;
  this.iK = null;
  this.iL = null;
  this.iJ = null;
  this.hG = null;
  this.am = canvas;
  this.iK = format;
  this.iL = null;
  this.iJ = null;
  this.hG = [];
}
$p = $c_Ltrivalibs_graphics_painter_CanvasSurface.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_CanvasSurface;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_CanvasSurface() {
}
$h_Ltrivalibs_graphics_painter_CanvasSurface.prototype = $p;
$p.q7 = (function() {
  return (this.am.width | 0);
});
$p.oj = (function() {
  return (this.am.height | 0);
});
$p.nN = (function(painter) {
  var device = painter.f;
  this.iL = device.queue;
  var canvasContext = $m_Ltrivalibs_graphics_painter_WebGPU$().oe(this.am);
  var f$proxy1 = this.iK;
  canvasContext.configure(({
    "device": device,
    "format": f$proxy1
  }));
  this.iJ = canvasContext;
  this.am.width = (this.am.clientWidth | 0);
  this.am.height = (this.am.clientHeight | 0);
  var observer = new ResizeObserver(((entries$3) => {
    var entry = entries$3[0];
    var rw = (+entry.contentRect.width);
    var rh = (+entry.contentRect.height);
    if (((rw > 0.0) && (rh > 0.0))) {
      var w = $doubleToInt(rw);
      var h = $doubleToInt(rh);
      if (((w !== (this.am.width | 0)) || (h !== (this.am.height | 0)))) {
        this.am.width = w;
        this.am.height = h;
        var k = 0;
        while ((k < (this.hG.length | 0))) {
          (0, this.hG[k])(w, h);
          k = ((1 + k) | 0);
        }
      }
    }
  }));
  observer.observe(this.am);
});
$p.nP = (function() {
  return this.iJ.getCurrentTexture();
});
$p.pn = (function(encoder) {
  this.iL.submit([encoder.finish()]);
});
$p.pe = (function(cb) {
  this.hG.push(cb);
});
function $isArrayOf_Ltrivalibs_graphics_painter_CanvasSurface(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aG)));
}
var $d_Ltrivalibs_graphics_painter_CanvasSurface = new $TypeData().i($c_Ltrivalibs_graphics_painter_CanvasSurface, "trivalibs.graphics.painter.CanvasSurface", ({
  aG: 1,
  eG: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Layer(painter, shade) {
  this.gz = null;
  this.y = null;
  this.iR = null;
  this.hJ = 0;
  this.gy = 0;
  this.i = null;
  this.G = null;
  this.F = null;
  this.hI = null;
  this.gz = painter;
  this.y = shade;
  this.iR = null;
  this.hJ = (-1);
  this.gy = (-1);
  this.i = [];
  this.G = [];
  this.F = null;
  this.hI = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Layer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Layer;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Layer() {
}
$h_Ltrivalibs_graphics_painter_Layer.prototype = $p;
$p.mT = (function() {
  return ((this.y.hS !== null) && (((this.G.length | 0) === 0) || (this.G[0] === null)));
});
$p.pl = (function(panel) {
  if (this.mT()) {
    var dict$proxy1 = panel.gJ;
    var key$proxy1 = this.y.gM[0];
    if ((!(!(!(!(!dict$proxy1.hasOwnProperty(key$proxy1))))))) {
      var items = this.hI.gx;
      if (((items.length | 0) === 0)) {
        return true;
      } else {
        var any = false;
        var i = 0;
        while (((i < (items.length | 0)) && (!any))) {
          var pbs = items[i].mY();
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
$p.pI = (function(blendState, mipSource, mipTarget) {
  if ((blendState !== (void 0))) {
    this.iR = blendState;
  }
  if ((mipSource !== (void 0))) {
    var v = (mipSource | 0);
    this.hJ = v;
  }
  if ((mipTarget !== (void 0))) {
    var v$1 = (mipTarget | 0);
    this.gy = v$1;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Layer = new $TypeData().i($c_Ltrivalibs_graphics_painter_Layer, "trivalibs.graphics.painter.Layer", ({
  ez: 1,
  aF: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.g5 = null;
  this.gN = null;
  this.Z = null;
  this.j2 = null;
  this.j1 = null;
  this.p = null;
  this.Y = null;
  this.j3 = null;
  this.g5 = painter;
  this.gN = form;
  this.Z = shade;
  this.j2 = "none";
  this.j1 = null;
  this.p = [];
  this.Y = [];
  this.j3 = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.pJ = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.j2 = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.j1 = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  eF: 1,
  aF: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform(inner) {
  this.J = null;
  this.J = inner;
}
$p = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform() {
}
$h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = $p;
$p.s = (function() {
  return this.J.s();
});
var $d_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform, "trivalibs.graphics.shader.FragmentUniform$given_WGSLType_FragmentUniform", ({
  eS: 1,
  p: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.gP = null;
  this.gP = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.s = (function() {
  return this.gP.s();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  eT: 1,
  p: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.jc = null;
  this.jc = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.a3 = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.jc === "") ? name : ((this.jc + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  f1: 1,
  A: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.jd = null;
  this.jd = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.k = (function(name) {
  return ((this.jd === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.jd + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  f2: 1,
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
  f3: 1,
  A: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.lm = null;
  this.gQ = null;
  this.lm = prefix;
  this.gQ = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.a3 = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.lm + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  f5: 1,
  A: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$.prototype = $p;
$p.s = (function() {
  return "f32";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$, "trivalibs.graphics.shader.types$package$given_WGSLType_Float$", ({
  ff: 1,
  p: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$.prototype = $p;
$p.s = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  fg: 1,
  p: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$.prototype = $p;
$p.s = (function() {
  return "sampler";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$, "trivalibs.graphics.shader.types$package$given_WGSLType_Sampler$", ({
  fh: 1,
  p: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
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
$p.s = (function() {
  return "vec3<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec3$", ({
  fi: 1,
  p: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$.prototype = $p;
$p.s = (function() {
  return "vec4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec4$", ({
  fj: 1,
  p: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$;
}
/** @constructor */
function $c_jl_Class($data) {
  this.id = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.q = (function() {
  return ((this.id.Y ? "interface " : (this.id.X ? "" : "class ")) + this.id.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  aO: 1,
  a: 1,
  g: 1
}));
class $c_jl_Error extends $c_jl_Throwable {
}
class $c_jl_Exception extends $c_jl_Throwable {
}
/** @constructor */
function $c_s_Predef$() {
  $n_s_Predef$ = this;
  $m_sci_List$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  bh: 1,
  be: 1,
  bf: 1
}));
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$();
  }
  return $n_s_Predef$;
}
function $f_s_Product1__productElement__I__O($thiz, n) {
  if ((n === 0)) {
    return $thiz.fv;
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fw;
      break;
    }
    case 1: {
      return $thiz.bu;
      break;
    }
    case 2: {
      return $thiz.bv;
      break;
    }
    case 3: {
      return $thiz.bw;
      break;
    }
    case 4: {
      return $thiz.bx;
      break;
    }
    case 5: {
      return $thiz.by;
      break;
    }
    case 6: {
      return $thiz.bz;
      break;
    }
    case 7: {
      return $thiz.bA;
      break;
    }
    case 8: {
      return $thiz.bB;
      break;
    }
    case 9: {
      return $thiz.bt;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 9)"));
    }
  }
}
function $f_s_Product11__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fx;
      break;
    }
    case 1: {
      return $thiz.bE;
      break;
    }
    case 2: {
      return $thiz.bF;
      break;
    }
    case 3: {
      return $thiz.bG;
      break;
    }
    case 4: {
      return $thiz.bH;
      break;
    }
    case 5: {
      return $thiz.bI;
      break;
    }
    case 6: {
      return $thiz.bJ;
      break;
    }
    case 7: {
      return $thiz.bK;
      break;
    }
    case 8: {
      return $thiz.bL;
      break;
    }
    case 9: {
      return $thiz.bC;
      break;
    }
    case 10: {
      return $thiz.bD;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 10)"));
    }
  }
}
function $f_s_Product12__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fy;
      break;
    }
    case 1: {
      return $thiz.bP;
      break;
    }
    case 2: {
      return $thiz.bQ;
      break;
    }
    case 3: {
      return $thiz.bR;
      break;
    }
    case 4: {
      return $thiz.bS;
      break;
    }
    case 5: {
      return $thiz.bT;
      break;
    }
    case 6: {
      return $thiz.bU;
      break;
    }
    case 7: {
      return $thiz.bV;
      break;
    }
    case 8: {
      return $thiz.bW;
      break;
    }
    case 9: {
      return $thiz.bM;
      break;
    }
    case 10: {
      return $thiz.bN;
      break;
    }
    case 11: {
      return $thiz.bO;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 11)"));
    }
  }
}
function $f_s_Product13__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fz;
      break;
    }
    case 1: {
      return $thiz.c1;
      break;
    }
    case 2: {
      return $thiz.c2;
      break;
    }
    case 3: {
      return $thiz.c3;
      break;
    }
    case 4: {
      return $thiz.c4;
      break;
    }
    case 5: {
      return $thiz.c5;
      break;
    }
    case 6: {
      return $thiz.c6;
      break;
    }
    case 7: {
      return $thiz.c7;
      break;
    }
    case 8: {
      return $thiz.c8;
      break;
    }
    case 9: {
      return $thiz.bX;
      break;
    }
    case 10: {
      return $thiz.bY;
      break;
    }
    case 11: {
      return $thiz.bZ;
      break;
    }
    case 12: {
      return $thiz.c0;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 12)"));
    }
  }
}
function $f_s_Product14__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fA;
      break;
    }
    case 1: {
      return $thiz.ce;
      break;
    }
    case 2: {
      return $thiz.cf;
      break;
    }
    case 3: {
      return $thiz.cg;
      break;
    }
    case 4: {
      return $thiz.ch;
      break;
    }
    case 5: {
      return $thiz.ci;
      break;
    }
    case 6: {
      return $thiz.cj;
      break;
    }
    case 7: {
      return $thiz.ck;
      break;
    }
    case 8: {
      return $thiz.cl;
      break;
    }
    case 9: {
      return $thiz.c9;
      break;
    }
    case 10: {
      return $thiz.ca;
      break;
    }
    case 11: {
      return $thiz.cb;
      break;
    }
    case 12: {
      return $thiz.cc;
      break;
    }
    case 13: {
      return $thiz.cd;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 13)"));
    }
  }
}
function $f_s_Product15__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fB;
      break;
    }
    case 1: {
      return $thiz.cs;
      break;
    }
    case 2: {
      return $thiz.ct;
      break;
    }
    case 3: {
      return $thiz.cu;
      break;
    }
    case 4: {
      return $thiz.cv;
      break;
    }
    case 5: {
      return $thiz.cw;
      break;
    }
    case 6: {
      return $thiz.cx;
      break;
    }
    case 7: {
      return $thiz.cy;
      break;
    }
    case 8: {
      return $thiz.cz;
      break;
    }
    case 9: {
      return $thiz.cm;
      break;
    }
    case 10: {
      return $thiz.cn;
      break;
    }
    case 11: {
      return $thiz.co;
      break;
    }
    case 12: {
      return $thiz.cp;
      break;
    }
    case 13: {
      return $thiz.cq;
      break;
    }
    case 14: {
      return $thiz.cr;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 14)"));
    }
  }
}
function $f_s_Product16__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fC;
      break;
    }
    case 1: {
      return $thiz.cH;
      break;
    }
    case 2: {
      return $thiz.cI;
      break;
    }
    case 3: {
      return $thiz.cJ;
      break;
    }
    case 4: {
      return $thiz.cK;
      break;
    }
    case 5: {
      return $thiz.cL;
      break;
    }
    case 6: {
      return $thiz.cM;
      break;
    }
    case 7: {
      return $thiz.cN;
      break;
    }
    case 8: {
      return $thiz.cO;
      break;
    }
    case 9: {
      return $thiz.cA;
      break;
    }
    case 10: {
      return $thiz.cB;
      break;
    }
    case 11: {
      return $thiz.cC;
      break;
    }
    case 12: {
      return $thiz.cD;
      break;
    }
    case 13: {
      return $thiz.cE;
      break;
    }
    case 14: {
      return $thiz.cF;
      break;
    }
    case 15: {
      return $thiz.cG;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 15)"));
    }
  }
}
function $f_s_Product17__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fD;
      break;
    }
    case 1: {
      return $thiz.cX;
      break;
    }
    case 2: {
      return $thiz.cY;
      break;
    }
    case 3: {
      return $thiz.cZ;
      break;
    }
    case 4: {
      return $thiz.d0;
      break;
    }
    case 5: {
      return $thiz.d1;
      break;
    }
    case 6: {
      return $thiz.d2;
      break;
    }
    case 7: {
      return $thiz.d3;
      break;
    }
    case 8: {
      return $thiz.d4;
      break;
    }
    case 9: {
      return $thiz.cP;
      break;
    }
    case 10: {
      return $thiz.cQ;
      break;
    }
    case 11: {
      return $thiz.cR;
      break;
    }
    case 12: {
      return $thiz.cS;
      break;
    }
    case 13: {
      return $thiz.cT;
      break;
    }
    case 14: {
      return $thiz.cU;
      break;
    }
    case 15: {
      return $thiz.cV;
      break;
    }
    case 16: {
      return $thiz.cW;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 16)"));
    }
  }
}
function $f_s_Product18__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fE;
      break;
    }
    case 1: {
      return $thiz.de;
      break;
    }
    case 2: {
      return $thiz.df;
      break;
    }
    case 3: {
      return $thiz.dg;
      break;
    }
    case 4: {
      return $thiz.dh;
      break;
    }
    case 5: {
      return $thiz.di;
      break;
    }
    case 6: {
      return $thiz.dj;
      break;
    }
    case 7: {
      return $thiz.dk;
      break;
    }
    case 8: {
      return $thiz.dl;
      break;
    }
    case 9: {
      return $thiz.d5;
      break;
    }
    case 10: {
      return $thiz.d6;
      break;
    }
    case 11: {
      return $thiz.d7;
      break;
    }
    case 12: {
      return $thiz.d8;
      break;
    }
    case 13: {
      return $thiz.d9;
      break;
    }
    case 14: {
      return $thiz.da;
      break;
    }
    case 15: {
      return $thiz.db;
      break;
    }
    case 16: {
      return $thiz.dc;
      break;
    }
    case 17: {
      return $thiz.dd;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 17)"));
    }
  }
}
function $f_s_Product19__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fF;
      break;
    }
    case 1: {
      return $thiz.dx;
      break;
    }
    case 2: {
      return $thiz.dy;
      break;
    }
    case 3: {
      return $thiz.dz;
      break;
    }
    case 4: {
      return $thiz.dA;
      break;
    }
    case 5: {
      return $thiz.dB;
      break;
    }
    case 6: {
      return $thiz.dC;
      break;
    }
    case 7: {
      return $thiz.dD;
      break;
    }
    case 8: {
      return $thiz.dE;
      break;
    }
    case 9: {
      return $thiz.dm;
      break;
    }
    case 10: {
      return $thiz.dn;
      break;
    }
    case 11: {
      return $thiz.dp;
      break;
    }
    case 12: {
      return $thiz.dq;
      break;
    }
    case 13: {
      return $thiz.dr;
      break;
    }
    case 14: {
      return $thiz.ds;
      break;
    }
    case 15: {
      return $thiz.dt;
      break;
    }
    case 16: {
      return $thiz.du;
      break;
    }
    case 17: {
      return $thiz.dv;
      break;
    }
    case 18: {
      return $thiz.dw;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 18)"));
    }
  }
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.Q;
      break;
    }
    case 1: {
      return $thiz.as;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $f_s_Product20__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fG;
      break;
    }
    case 1: {
      return $thiz.dP;
      break;
    }
    case 2: {
      return $thiz.dR;
      break;
    }
    case 3: {
      return $thiz.dS;
      break;
    }
    case 4: {
      return $thiz.dT;
      break;
    }
    case 5: {
      return $thiz.dU;
      break;
    }
    case 6: {
      return $thiz.dV;
      break;
    }
    case 7: {
      return $thiz.dW;
      break;
    }
    case 8: {
      return $thiz.dX;
      break;
    }
    case 9: {
      return $thiz.dF;
      break;
    }
    case 10: {
      return $thiz.dG;
      break;
    }
    case 11: {
      return $thiz.dH;
      break;
    }
    case 12: {
      return $thiz.dI;
      break;
    }
    case 13: {
      return $thiz.dJ;
      break;
    }
    case 14: {
      return $thiz.dK;
      break;
    }
    case 15: {
      return $thiz.dL;
      break;
    }
    case 16: {
      return $thiz.dM;
      break;
    }
    case 17: {
      return $thiz.dN;
      break;
    }
    case 18: {
      return $thiz.dO;
      break;
    }
    case 19: {
      return $thiz.dQ;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 19)"));
    }
  }
}
function $f_s_Product21__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fH;
      break;
    }
    case 1: {
      return $thiz.e8;
      break;
    }
    case 2: {
      return $thiz.eb;
      break;
    }
    case 3: {
      return $thiz.ec;
      break;
    }
    case 4: {
      return $thiz.ed;
      break;
    }
    case 5: {
      return $thiz.ee;
      break;
    }
    case 6: {
      return $thiz.ef;
      break;
    }
    case 7: {
      return $thiz.eg;
      break;
    }
    case 8: {
      return $thiz.eh;
      break;
    }
    case 9: {
      return $thiz.dY;
      break;
    }
    case 10: {
      return $thiz.dZ;
      break;
    }
    case 11: {
      return $thiz.e0;
      break;
    }
    case 12: {
      return $thiz.e1;
      break;
    }
    case 13: {
      return $thiz.e2;
      break;
    }
    case 14: {
      return $thiz.e3;
      break;
    }
    case 15: {
      return $thiz.e4;
      break;
    }
    case 16: {
      return $thiz.e5;
      break;
    }
    case 17: {
      return $thiz.e6;
      break;
    }
    case 18: {
      return $thiz.e7;
      break;
    }
    case 19: {
      return $thiz.e9;
      break;
    }
    case 20: {
      return $thiz.ea;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 20)"));
    }
  }
}
function $f_s_Product22__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fI;
      break;
    }
    case 1: {
      return $thiz.es;
      break;
    }
    case 2: {
      return $thiz.ew;
      break;
    }
    case 3: {
      return $thiz.ex;
      break;
    }
    case 4: {
      return $thiz.ey;
      break;
    }
    case 5: {
      return $thiz.ez;
      break;
    }
    case 6: {
      return $thiz.eA;
      break;
    }
    case 7: {
      return $thiz.eB;
      break;
    }
    case 8: {
      return $thiz.eC;
      break;
    }
    case 9: {
      return $thiz.ei;
      break;
    }
    case 10: {
      return $thiz.ej;
      break;
    }
    case 11: {
      return $thiz.ek;
      break;
    }
    case 12: {
      return $thiz.el;
      break;
    }
    case 13: {
      return $thiz.em;
      break;
    }
    case 14: {
      return $thiz.en;
      break;
    }
    case 15: {
      return $thiz.eo;
      break;
    }
    case 16: {
      return $thiz.ep;
      break;
    }
    case 17: {
      return $thiz.eq;
      break;
    }
    case 18: {
      return $thiz.er;
      break;
    }
    case 19: {
      return $thiz.et;
      break;
    }
    case 20: {
      return $thiz.eu;
      break;
    }
    case 21: {
      return $thiz.ev;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 21)"));
    }
  }
}
function $f_s_Product3__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.bh;
      break;
    }
    case 1: {
      return $thiz.b2;
      break;
    }
    case 2: {
      return $thiz.b3;
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
      return $thiz.fJ;
      break;
    }
    case 1: {
      return $thiz.eD;
      break;
    }
    case 2: {
      return $thiz.eE;
      break;
    }
    case 3: {
      return $thiz.eF;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 3)"));
    }
  }
}
function $f_s_Product5__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fK;
      break;
    }
    case 1: {
      return $thiz.eG;
      break;
    }
    case 2: {
      return $thiz.eH;
      break;
    }
    case 3: {
      return $thiz.eI;
      break;
    }
    case 4: {
      return $thiz.eJ;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 4)"));
    }
  }
}
function $f_s_Product6__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fL;
      break;
    }
    case 1: {
      return $thiz.eK;
      break;
    }
    case 2: {
      return $thiz.eL;
      break;
    }
    case 3: {
      return $thiz.eM;
      break;
    }
    case 4: {
      return $thiz.eN;
      break;
    }
    case 5: {
      return $thiz.eO;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 5)"));
    }
  }
}
function $f_s_Product7__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fM;
      break;
    }
    case 1: {
      return $thiz.eP;
      break;
    }
    case 2: {
      return $thiz.eQ;
      break;
    }
    case 3: {
      return $thiz.eR;
      break;
    }
    case 4: {
      return $thiz.eS;
      break;
    }
    case 5: {
      return $thiz.eT;
      break;
    }
    case 6: {
      return $thiz.eU;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 6)"));
    }
  }
}
function $f_s_Product8__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fN;
      break;
    }
    case 1: {
      return $thiz.eV;
      break;
    }
    case 2: {
      return $thiz.eW;
      break;
    }
    case 3: {
      return $thiz.eX;
      break;
    }
    case 4: {
      return $thiz.eY;
      break;
    }
    case 5: {
      return $thiz.eZ;
      break;
    }
    case 6: {
      return $thiz.f0;
      break;
    }
    case 7: {
      return $thiz.f1;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 7)"));
    }
  }
}
function $f_s_Product9__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fO;
      break;
    }
    case 1: {
      return $thiz.f2;
      break;
    }
    case 2: {
      return $thiz.f3;
      break;
    }
    case 3: {
      return $thiz.f4;
      break;
    }
    case 4: {
      return $thiz.f5;
      break;
    }
    case 5: {
      return $thiz.f6;
      break;
    }
    case 6: {
      return $thiz.f7;
      break;
    }
    case 7: {
      return $thiz.f8;
      break;
    }
    case 8: {
      return $thiz.f9;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 8)"));
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).nM(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().b5 : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.af();
  while ($thiz.T()) {
    if ((!those.T())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().b($thiz.O(), those.O()))) {
      return false;
    }
  }
  return (!those.T());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.b5 = null;
  $n_sc_Iterator$ = this;
  this.b5 = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  bP: 1,
  a: 1,
  ak: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ck)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.k6 = null;
  this.k6 = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.h0 = (function() {
  return (0, this.k6)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  ct: 1,
  cs: 1,
  b9: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.k7 = null;
  this.k7 = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.h = (function(x0) {
  return (0, this.k7)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  cv: 1,
  cu: 1,
  k: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.k8 = null;
  this.k8 = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.mg = (function(x0, x1) {
  return (0, this.k8)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  cx: 1,
  cw: 1,
  ba: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.k9 = null;
  this.k9 = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.nw = (function(x0, x1, x2) {
  return (0, this.k9)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  cz: 1,
  cy: 1,
  bb: 1
}));
/** @constructor */
function $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(f) {
  this.ka = null;
  this.ka = f;
}
$p = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a;
/** @constructor */
function $h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a() {
}
$h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = $p;
$p.nv = (function(x0, x1, x2, x3) {
  return (0, this.ka)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  cB: 1,
  cA: 1,
  bc: 1
}));
/** @constructor */
function $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(f) {
  this.kb = null;
  this.kb = f;
}
$p = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = new $h_sr_AbstractFunction5();
$p.constructor = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078;
/** @constructor */
function $h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078() {
}
$h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = $p;
$p.nu = (function(x0, x1, x2, x3, x4) {
  return (0, this.kb)(x0, x1, x2, x3, x4);
});
var $d_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078 = new $TypeData().i($c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078, "scala.runtime.AbstractFunction5.$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078", ({
  cD: 1,
  cC: 1,
  bd: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.ac = null;
  this.ac = es;
  if ((es.g.length <= 22)) {
    $m_sr_Scala3RunTime$().nD();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.r = (function(n) {
  return this.ac.g[n];
});
$p.I = (function() {
  return this.ac.g.length;
});
$p.L = (function() {
  return "Tuple";
});
$p.q = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().q8(this.ac), "(", ",", ")");
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().nL(this, (-889275714), null);
});
$p.v = (function(that) {
  if ((that instanceof $c_sr_TupleXXL)) {
    if ((this.ac === that.ac)) {
      return true;
    } else {
      if ((this.ac.g.length !== that.ac.g.length)) {
        return false;
      }
      var i = 0;
      while ((i < this.ac.g.length)) {
        var $x_2 = $m_sr_BoxesRunTime$();
        var arr$3 = this.ac;
        var n = i;
        var $x_1 = arr$3.g[n];
        var arr$4 = that.ac;
        var n$1 = i;
        if ((!$x_2.b($x_1, arr$4.g[n$1]))) {
          return false;
        }
        i = ((1 + i) | 0);
      }
      return true;
    }
  } else {
    return false;
  }
});
function $isArrayOf_sr_TupleXXL(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aw)));
}
var $d_sr_TupleXXL = new $TypeData().i($c_sr_TupleXXL, "scala.runtime.TupleXXL", ({
  aw: 1,
  b: 1,
  c: 1
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
$p.ge = (function(f) {
  return ((arg1$2) => f.h(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  cK: 1,
  cO: 1,
  cP: 1
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
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1.prototype = $p;
$p.h = (function(x) {
  return $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().pY((+x));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  ed: 1,
  X: 1,
  k: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3.prototype = $p;
$p.h = (function(x) {
  var v = (x | 0);
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("f32(" + v) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3, "trivalibs.graphics.math.gpu.float_expr$package$$anon$3", ({
  ee: 1,
  X: 1,
  k: 1
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
        deps = ((rest[0] === (void 0)) ? $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$().nk() : rest[0]);
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
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  aK: 1,
  aP: 1,
  f: 1,
  a: 1
}));
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  aL: 1,
  a: 1,
  h: 1,
  g: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  return ((that instanceof $Char) && ($thiz === that.c));
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.T)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  T: 1,
  a: 1,
  h: 1,
  g: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.ab = null;
  this.ab = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.q = (function() {
  return this.ab;
});
$p.R = (function() {
  return this.ab.length;
});
$p.mp = (function(index) {
  return this.ab.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  aZ: 1,
  G: 1,
  aI: 1,
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
$p.aq = (function() {
  return (-1);
});
$p.jq = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.af = (function() {
  return this;
});
$p.i4 = (function(n) {
  return this.ib(n, (-1));
});
$p.ib = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.q = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.gf(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.aq();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.aq();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.af(), that);
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$.prototype = $p;
$p.h7 = (function(m) {
  return m.ir;
});
$p.h8 = (function(m) {
  return m.is;
});
$p.h9 = (function(m) {
  return m.it;
});
$p.ha = (function(m) {
  return m.iu;
});
$p.hb = (function(m) {
  return m.iv;
});
$p.hc = (function(m) {
  return m.iw;
});
$p.hd = (function(m) {
  return m.ix;
});
$p.he = (function(m) {
  return m.iy;
});
$p.hf = (function(m) {
  return m.iz;
});
$p.hg = (function(m) {
  return m.iA;
});
$p.hh = (function(m) {
  return m.iB;
});
$p.hi = (function(m) {
  return m.iC;
});
$p.hj = (function(m) {
  return m.iD;
});
$p.hk = (function(m) {
  return m.iE;
});
$p.hl = (function(m) {
  return m.iF;
});
$p.hm = (function(m) {
  return m.iG;
});
$p.mD = (function(m, v) {
  m.ir = v;
});
$p.mE = (function(m, v) {
  m.is = v;
});
$p.mF = (function(m, v) {
  m.it = v;
});
$p.mG = (function(m, v) {
  m.iu = v;
});
$p.mH = (function(m, v) {
  m.iv = v;
});
$p.mI = (function(m, v) {
  m.iw = v;
});
$p.mJ = (function(m, v) {
  m.ix = v;
});
$p.mK = (function(m, v) {
  m.iy = v;
});
$p.mL = (function(m, v) {
  m.iz = v;
});
$p.mM = (function(m, v) {
  m.iA = v;
});
$p.mN = (function(m, v) {
  m.iB = v;
});
$p.mO = (function(m, v) {
  m.iC = v;
});
$p.mP = (function(m, v) {
  m.iD = v;
});
$p.mQ = (function(m, v) {
  m.iE = v;
});
$p.mR = (function(m, v) {
  m.iF = v;
});
$p.mS = (function(m, v) {
  m.iG = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  dN: 1,
  Q: 1,
  aB: 1,
  aC: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
function $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$.prototype = $p;
$p.aP = (function(v) {
  return v.hD;
});
$p.aQ = (function(v) {
  return v.hE;
});
$p.aR = (function(v) {
  return v.hF;
});
$p.aO = (function(v) {
  return v.hC;
});
$p.jR = (function(v, value) {
  v.hD = value;
});
$p.jS = (function(v, value) {
  v.hE = value;
});
$p.jT = (function(v, value) {
  v.hF = value;
});
$p.jQ = (function(v, value) {
  v.hC = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  dR: 1,
  F: 1,
  R: 1,
  S: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$, "trivalibs.graphics.math.cpu.Vec3$given_Vec3Mutable_Vec3$", ({
  dW: 1,
  aD: 1,
  dF: 1,
  dI: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$.prototype = $p;
$p.aP = (function(v) {
  return v.fW;
});
$p.aQ = (function(v) {
  return v.fX;
});
$p.aR = (function(v) {
  return v.fY;
});
$p.aO = (function(v) {
  return v.fV;
});
$p.jR = (function(v, value) {
  v.fW = value;
});
$p.jS = (function(v, value) {
  v.fX = value;
});
$p.jT = (function(v, value) {
  v.fY = value;
});
$p.jQ = (function(v, value) {
  v.fV = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$, "trivalibs.graphics.math.cpu.Vec4$given_Vec4Mutable_Vec4$", ({
  dY: 1,
  F: 1,
  R: 1,
  S: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$;
function $m_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$ = new $c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$.prototype = $p;
$p.ox = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.oz = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.oB = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.oD = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.oF = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.oH = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.oJ = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.oL = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.oN = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.oP = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.oR = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.oT = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.oV = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.oX = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.oZ = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.p1 = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.oy = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.oA = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.oC = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.oE = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.oG = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.oI = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.oK = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.oM = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.oO = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.oQ = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.oS = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.oU = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.oW = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.oY = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.p0 = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.p2 = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.h7 = (function(m) {
  return this.ox(m);
});
$p.h8 = (function(m) {
  return this.oz(m);
});
$p.h9 = (function(m) {
  return this.oB(m);
});
$p.ha = (function(m) {
  return this.oD(m);
});
$p.hb = (function(m) {
  return this.oF(m);
});
$p.hc = (function(m) {
  return this.oH(m);
});
$p.hd = (function(m) {
  return this.oJ(m);
});
$p.he = (function(m) {
  return this.oL(m);
});
$p.hf = (function(m) {
  return this.oN(m);
});
$p.hg = (function(m) {
  return this.oP(m);
});
$p.hh = (function(m) {
  return this.oR(m);
});
$p.hi = (function(m) {
  return this.oT(m);
});
$p.hj = (function(m) {
  return this.oV(m);
});
$p.hk = (function(m) {
  return this.oX(m);
});
$p.hl = (function(m) {
  return this.oZ(m);
});
$p.hm = (function(m) {
  return this.p1(m);
});
$p.mD = (function(m, v) {
  this.oy(m, v);
});
$p.mE = (function(m, v) {
  this.oA(m, v);
});
$p.mF = (function(m, v) {
  this.oC(m, v);
});
$p.mG = (function(m, v) {
  this.oE(m, v);
});
$p.mH = (function(m, v) {
  this.oG(m, v);
});
$p.mI = (function(m, v) {
  this.oI(m, v);
});
$p.mJ = (function(m, v) {
  this.oK(m, v);
});
$p.mK = (function(m, v) {
  this.oM(m, v);
});
$p.mL = (function(m, v) {
  this.oO(m, v);
});
$p.mM = (function(m, v) {
  this.oQ(m, v);
});
$p.mN = (function(m, v) {
  this.oS(m, v);
});
$p.mO = (function(m, v) {
  this.oU(m, v);
});
$p.mP = (function(m, v) {
  this.oW(m, v);
});
$p.mQ = (function(m, v) {
  this.oY(m, v);
});
$p.mR = (function(m, v) {
  this.p0(m, v);
});
$p.mS = (function(m, v) {
  this.p2(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  e1: 1,
  Q: 1,
  aB: 1,
  aC: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$.prototype = $p;
$p.qc = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.qe = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.qg = (function(v) {
  var offset$proxy3 = ((8 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy3, true));
});
$p.q5 = (function(v) {
  var offset$proxy4 = ((12 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy4, true));
});
$p.qd = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy5 = (v.off | 0);
  v.dv.setFloat32(offset$proxy5, value$proxy1, true);
});
$p.qf = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy6 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy6, value$proxy2, true);
});
$p.qi = (function(v, value) {
  var value$proxy3 = Math.fround(value);
  var offset$proxy7 = ((8 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy7, value$proxy3, true);
});
$p.q6 = (function(v, value) {
  var value$proxy4 = Math.fround(value);
  var offset$proxy8 = ((12 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy8, value$proxy4, true);
});
$p.aP = (function(v) {
  return this.qc(v);
});
$p.aQ = (function(v) {
  return this.qe(v);
});
$p.aR = (function(v) {
  return this.qg(v);
});
$p.aO = (function(v) {
  return this.q5(v);
});
$p.jR = (function(v, value) {
  this.qd(v, value);
});
$p.jS = (function(v, value) {
  this.qf(v, value);
});
$p.jT = (function(v, value) {
  this.qi(v, value);
});
$p.jQ = (function(v, value) {
  this.q6(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$vec4MutableBuffer$", ({
  e4: 1,
  F: 1,
  R: 1,
  S: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$;
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T($thiz, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, vertexBody, fragmentBody, fragBuiltinParams) {
  var f$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildVertexMain__T__T($thiz, vertexBody);
  var g$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T__T($thiz, fragmentBody, fragBuiltinParams);
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.gO, f$proxy1, g$proxy1];
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
  this.a5 = null;
  this.a4 = null;
  this.gO = null;
  this.a5 = vertexBody;
  this.a4 = fragmentBody;
  this.gO = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, (-1488826029), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.a5 === x$0.a5) && (this.a4 === x$0.a4)) && (this.gO === x$0.gO))));
});
$p.q = (function() {
  return $m_sr_ScalaRunTime$().nm(this);
});
$p.I = (function() {
  return 3;
});
$p.L = (function() {
  return "ShaderDef";
});
$p.r = (function(n) {
  switch (n) {
    case 0: {
      return this.a5;
      break;
    }
    case 1: {
      return this.a4;
      break;
    }
    case 2: {
      return this.gO;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Ltrivalibs_graphics_shader_ShaderDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aH)));
}
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  aH: 1,
  b: 1,
  c: 1,
  a: 1
}));
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  aJ: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  aM: 1,
  l: 1,
  a: 1,
  h: 1,
  g: 1
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
  V: 1,
  j: 1,
  i: 1,
  f: 1,
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
  aR: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $ct_jl_NullPointerException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_NullPointerException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  aU: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aW)));
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  aX: 1,
  l: 1,
  a: 1,
  h: 1,
  g: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  b1: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  b6: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.jY)) {
    if (($thiz.ht === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.ht;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.id.N));
      try {
        var $x_1 = ((($thiz.ht + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.jX = $x_1;
    $thiz.jY = true;
  }
  return $thiz.jX;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.ht = null;
    this.jX = null;
    this.jY = false;
    this.ht = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  i6() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  bg: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.gm = 0;
  this.k0 = 0;
  this.jZ = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.jZ = outer;
  this.gm = 0;
  this.k0 = outer.I();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.T = (function() {
  return (this.gm < this.k0);
});
$p.O = (function() {
  var result = this.jZ.r(this.gm);
  this.gm = ((1 + this.gm) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bi: 1,
  m: 1,
  d: 1,
  e: 1,
  n: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.fv = null;
  this.fv = _1;
}
$p = $c_T1.prototype = new $h_O();
$p.constructor = $c_T1;
/** @constructor */
function $h_T1() {
}
$h_T1.prototype = $p;
$p.I = (function() {
  return 1;
});
$p.r = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.q = (function() {
  return (("(" + this.fv) + ")");
});
$p.L = (function() {
  return "Tuple1";
});
$p.P = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, 1228477340, true);
});
$p.v = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().b(this.fv, x$1.fv)));
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Y)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  Y: 1,
  bj: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.fw = null;
  this.bu = null;
  this.bv = null;
  this.bw = null;
  this.bx = null;
  this.by = null;
  this.bz = null;
  this.bA = null;
  this.bB = null;
  this.bt = null;
  this.fw = _1;
  this.bu = _2;
  this.bv = _3;
  this.bw = _4;
  this.bx = _5;
  this.by = _6;
  this.bz = _7;
  this.bA = _8;
  this.bB = _9;
  this.bt = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 10;
});
$p.r = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, 2104595240, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().b(this.fw, x$0.fw) && $m_sr_BoxesRunTime$().b(this.bu, x$0.bu)) && $m_sr_BoxesRunTime$().b(this.bv, x$0.bv)) && $m_sr_BoxesRunTime$().b(this.bw, x$0.bw)) && $m_sr_BoxesRunTime$().b(this.bx, x$0.bx)) && $m_sr_BoxesRunTime$().b(this.by, x$0.by)) && $m_sr_BoxesRunTime$().b(this.bz, x$0.bz)) && $m_sr_BoxesRunTime$().b(this.bA, x$0.bA)) && $m_sr_BoxesRunTime$().b(this.bB, x$0.bB)) && $m_sr_BoxesRunTime$().b(this.bt, x$0.bt))));
});
$p.L = (function() {
  return "Tuple10";
});
$p.q = (function() {
  return (((((((((((((((((((("(" + this.fw) + ",") + this.bu) + ",") + this.bv) + ",") + this.bw) + ",") + this.bx) + ",") + this.by) + ",") + this.bz) + ",") + this.bA) + ",") + this.bB) + ",") + this.bt) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Z)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  Z: 1,
  b: 1,
  c: 1,
  bk: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.fx = null;
  this.bE = null;
  this.bF = null;
  this.bG = null;
  this.bH = null;
  this.bI = null;
  this.bJ = null;
  this.bK = null;
  this.bL = null;
  this.bC = null;
  this.bD = null;
  this.fx = _1;
  this.bE = _2;
  this.bF = _3;
  this.bG = _4;
  this.bH = _5;
  this.bI = _6;
  this.bJ = _7;
  this.bK = _8;
  this.bL = _9;
  this.bC = _10;
  this.bD = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 11;
});
$p.r = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, 838406606, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().b(this.fx, x$0.fx) && $m_sr_BoxesRunTime$().b(this.bE, x$0.bE)) && $m_sr_BoxesRunTime$().b(this.bF, x$0.bF)) && $m_sr_BoxesRunTime$().b(this.bG, x$0.bG)) && $m_sr_BoxesRunTime$().b(this.bH, x$0.bH)) && $m_sr_BoxesRunTime$().b(this.bI, x$0.bI)) && $m_sr_BoxesRunTime$().b(this.bJ, x$0.bJ)) && $m_sr_BoxesRunTime$().b(this.bK, x$0.bK)) && $m_sr_BoxesRunTime$().b(this.bL, x$0.bL)) && $m_sr_BoxesRunTime$().b(this.bC, x$0.bC)) && $m_sr_BoxesRunTime$().b(this.bD, x$0.bD))));
});
$p.L = (function() {
  return "Tuple11";
});
$p.q = (function() {
  return (((((((((((((((((((((("(" + this.fx) + ",") + this.bE) + ",") + this.bF) + ",") + this.bG) + ",") + this.bH) + ",") + this.bI) + ",") + this.bJ) + ",") + this.bK) + ",") + this.bL) + ",") + this.bC) + ",") + this.bD) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a0)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  a0: 1,
  b: 1,
  c: 1,
  bl: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.fy = null;
  this.bP = null;
  this.bQ = null;
  this.bR = null;
  this.bS = null;
  this.bT = null;
  this.bU = null;
  this.bV = null;
  this.bW = null;
  this.bM = null;
  this.bN = null;
  this.bO = null;
  this.fy = _1;
  this.bP = _2;
  this.bQ = _3;
  this.bR = _4;
  this.bS = _5;
  this.bT = _6;
  this.bU = _7;
  this.bV = _8;
  this.bW = _9;
  this.bM = _10;
  this.bN = _11;
  this.bO = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 12;
});
$p.r = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, (-1964145863), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().b(this.fy, x$0.fy) && $m_sr_BoxesRunTime$().b(this.bP, x$0.bP)) && $m_sr_BoxesRunTime$().b(this.bQ, x$0.bQ)) && $m_sr_BoxesRunTime$().b(this.bR, x$0.bR)) && $m_sr_BoxesRunTime$().b(this.bS, x$0.bS)) && $m_sr_BoxesRunTime$().b(this.bT, x$0.bT)) && $m_sr_BoxesRunTime$().b(this.bU, x$0.bU)) && $m_sr_BoxesRunTime$().b(this.bV, x$0.bV)) && $m_sr_BoxesRunTime$().b(this.bW, x$0.bW)) && $m_sr_BoxesRunTime$().b(this.bM, x$0.bM)) && $m_sr_BoxesRunTime$().b(this.bN, x$0.bN)) && $m_sr_BoxesRunTime$().b(this.bO, x$0.bO))));
});
$p.L = (function() {
  return "Tuple12";
});
$p.q = (function() {
  return (((((((((((((((((((((((("(" + this.fy) + ",") + this.bP) + ",") + this.bQ) + ",") + this.bR) + ",") + this.bS) + ",") + this.bT) + ",") + this.bU) + ",") + this.bV) + ",") + this.bW) + ",") + this.bM) + ",") + this.bN) + ",") + this.bO) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a1)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  a1: 1,
  b: 1,
  c: 1,
  bm: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.fz = null;
  this.c1 = null;
  this.c2 = null;
  this.c3 = null;
  this.c4 = null;
  this.c5 = null;
  this.c6 = null;
  this.c7 = null;
  this.c8 = null;
  this.bX = null;
  this.bY = null;
  this.bZ = null;
  this.c0 = null;
  this.fz = _1;
  this.c1 = _2;
  this.c2 = _3;
  this.c3 = _4;
  this.c4 = _5;
  this.c5 = _6;
  this.c6 = _7;
  this.c7 = _8;
  this.c8 = _9;
  this.bX = _10;
  this.bY = _11;
  this.bZ = _12;
  this.c0 = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 13;
});
$p.r = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, 1224168367, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().b(this.fz, x$0.fz) && $m_sr_BoxesRunTime$().b(this.c1, x$0.c1)) && $m_sr_BoxesRunTime$().b(this.c2, x$0.c2)) && $m_sr_BoxesRunTime$().b(this.c3, x$0.c3)) && $m_sr_BoxesRunTime$().b(this.c4, x$0.c4)) && $m_sr_BoxesRunTime$().b(this.c5, x$0.c5)) && $m_sr_BoxesRunTime$().b(this.c6, x$0.c6)) && $m_sr_BoxesRunTime$().b(this.c7, x$0.c7)) && $m_sr_BoxesRunTime$().b(this.c8, x$0.c8)) && $m_sr_BoxesRunTime$().b(this.bX, x$0.bX)) && $m_sr_BoxesRunTime$().b(this.bY, x$0.bY)) && $m_sr_BoxesRunTime$().b(this.bZ, x$0.bZ)) && $m_sr_BoxesRunTime$().b(this.c0, x$0.c0))));
});
$p.L = (function() {
  return "Tuple13";
});
$p.q = (function() {
  return (((((((((((((((((((((((((("(" + this.fz) + ",") + this.c1) + ",") + this.c2) + ",") + this.c3) + ",") + this.c4) + ",") + this.c5) + ",") + this.c6) + ",") + this.c7) + ",") + this.c8) + ",") + this.bX) + ",") + this.bY) + ",") + this.bZ) + ",") + this.c0) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a2)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  a2: 1,
  b: 1,
  c: 1,
  bn: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.fA = null;
  this.ce = null;
  this.cf = null;
  this.cg = null;
  this.ch = null;
  this.ci = null;
  this.cj = null;
  this.ck = null;
  this.cl = null;
  this.c9 = null;
  this.ca = null;
  this.cb = null;
  this.cc = null;
  this.cd = null;
  this.fA = _1;
  this.ce = _2;
  this.cf = _3;
  this.cg = _4;
  this.ch = _5;
  this.ci = _6;
  this.cj = _7;
  this.ck = _8;
  this.cl = _9;
  this.c9 = _10;
  this.ca = _11;
  this.cb = _12;
  this.cc = _13;
  this.cd = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 14;
});
$p.r = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, 147759069, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().b(this.fA, x$0.fA) && $m_sr_BoxesRunTime$().b(this.ce, x$0.ce)) && $m_sr_BoxesRunTime$().b(this.cf, x$0.cf)) && $m_sr_BoxesRunTime$().b(this.cg, x$0.cg)) && $m_sr_BoxesRunTime$().b(this.ch, x$0.ch)) && $m_sr_BoxesRunTime$().b(this.ci, x$0.ci)) && $m_sr_BoxesRunTime$().b(this.cj, x$0.cj)) && $m_sr_BoxesRunTime$().b(this.ck, x$0.ck)) && $m_sr_BoxesRunTime$().b(this.cl, x$0.cl)) && $m_sr_BoxesRunTime$().b(this.c9, x$0.c9)) && $m_sr_BoxesRunTime$().b(this.ca, x$0.ca)) && $m_sr_BoxesRunTime$().b(this.cb, x$0.cb)) && $m_sr_BoxesRunTime$().b(this.cc, x$0.cc)) && $m_sr_BoxesRunTime$().b(this.cd, x$0.cd))));
});
$p.L = (function() {
  return "Tuple14";
});
$p.q = (function() {
  return (((((((((((((((((((((((((((("(" + this.fA) + ",") + this.ce) + ",") + this.cf) + ",") + this.cg) + ",") + this.ch) + ",") + this.ci) + ",") + this.cj) + ",") + this.ck) + ",") + this.cl) + ",") + this.c9) + ",") + this.ca) + ",") + this.cb) + ",") + this.cc) + ",") + this.cd) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  a3: 1,
  b: 1,
  c: 1,
  bo: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.fB = null;
  this.cs = null;
  this.ct = null;
  this.cu = null;
  this.cv = null;
  this.cw = null;
  this.cx = null;
  this.cy = null;
  this.cz = null;
  this.cm = null;
  this.cn = null;
  this.co = null;
  this.cp = null;
  this.cq = null;
  this.cr = null;
  this.fB = _1;
  this.cs = _2;
  this.ct = _3;
  this.cu = _4;
  this.cv = _5;
  this.cw = _6;
  this.cx = _7;
  this.cy = _8;
  this.cz = _9;
  this.cm = _10;
  this.cn = _11;
  this.co = _12;
  this.cp = _13;
  this.cq = _14;
  this.cr = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 15;
});
$p.r = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, 1834180931, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().b(this.fB, x$0.fB) && $m_sr_BoxesRunTime$().b(this.cs, x$0.cs)) && $m_sr_BoxesRunTime$().b(this.ct, x$0.ct)) && $m_sr_BoxesRunTime$().b(this.cu, x$0.cu)) && $m_sr_BoxesRunTime$().b(this.cv, x$0.cv)) && $m_sr_BoxesRunTime$().b(this.cw, x$0.cw)) && $m_sr_BoxesRunTime$().b(this.cx, x$0.cx)) && $m_sr_BoxesRunTime$().b(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().b(this.cz, x$0.cz)) && $m_sr_BoxesRunTime$().b(this.cm, x$0.cm)) && $m_sr_BoxesRunTime$().b(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().b(this.co, x$0.co)) && $m_sr_BoxesRunTime$().b(this.cp, x$0.cp)) && $m_sr_BoxesRunTime$().b(this.cq, x$0.cq)) && $m_sr_BoxesRunTime$().b(this.cr, x$0.cr))));
});
$p.L = (function() {
  return "Tuple15";
});
$p.q = (function() {
  return (((((((((((((((((((((((((((((("(" + this.fB) + ",") + this.cs) + ",") + this.ct) + ",") + this.cu) + ",") + this.cv) + ",") + this.cw) + ",") + this.cx) + ",") + this.cy) + ",") + this.cz) + ",") + this.cm) + ",") + this.cn) + ",") + this.co) + ",") + this.cp) + ",") + this.cq) + ",") + this.cr) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  a4: 1,
  b: 1,
  c: 1,
  bp: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.fC = null;
  this.cH = null;
  this.cI = null;
  this.cJ = null;
  this.cK = null;
  this.cL = null;
  this.cM = null;
  this.cN = null;
  this.cO = null;
  this.cA = null;
  this.cB = null;
  this.cC = null;
  this.cD = null;
  this.cE = null;
  this.cF = null;
  this.cG = null;
  this.fC = _1;
  this.cH = _2;
  this.cI = _3;
  this.cJ = _4;
  this.cK = _5;
  this.cL = _6;
  this.cM = _7;
  this.cN = _8;
  this.cO = _9;
  this.cA = _10;
  this.cB = _11;
  this.cC = _12;
  this.cD = _13;
  this.cE = _14;
  this.cF = _15;
  this.cG = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 16;
});
$p.r = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, 499793902, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().b(this.fC, x$0.fC) && $m_sr_BoxesRunTime$().b(this.cH, x$0.cH)) && $m_sr_BoxesRunTime$().b(this.cI, x$0.cI)) && $m_sr_BoxesRunTime$().b(this.cJ, x$0.cJ)) && $m_sr_BoxesRunTime$().b(this.cK, x$0.cK)) && $m_sr_BoxesRunTime$().b(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().b(this.cM, x$0.cM)) && $m_sr_BoxesRunTime$().b(this.cN, x$0.cN)) && $m_sr_BoxesRunTime$().b(this.cO, x$0.cO)) && $m_sr_BoxesRunTime$().b(this.cA, x$0.cA)) && $m_sr_BoxesRunTime$().b(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().b(this.cC, x$0.cC)) && $m_sr_BoxesRunTime$().b(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().b(this.cE, x$0.cE)) && $m_sr_BoxesRunTime$().b(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().b(this.cG, x$0.cG))));
});
$p.L = (function() {
  return "Tuple16";
});
$p.q = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.fC) + ",") + this.cH) + ",") + this.cI) + ",") + this.cJ) + ",") + this.cK) + ",") + this.cL) + ",") + this.cM) + ",") + this.cN) + ",") + this.cO) + ",") + this.cA) + ",") + this.cB) + ",") + this.cC) + ",") + this.cD) + ",") + this.cE) + ",") + this.cF) + ",") + this.cG) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  a5: 1,
  b: 1,
  c: 1,
  bq: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.fD = null;
  this.cX = null;
  this.cY = null;
  this.cZ = null;
  this.d0 = null;
  this.d1 = null;
  this.d2 = null;
  this.d3 = null;
  this.d4 = null;
  this.cP = null;
  this.cQ = null;
  this.cR = null;
  this.cS = null;
  this.cT = null;
  this.cU = null;
  this.cV = null;
  this.cW = null;
  this.fD = _1;
  this.cX = _2;
  this.cY = _3;
  this.cZ = _4;
  this.d0 = _5;
  this.d1 = _6;
  this.d2 = _7;
  this.d3 = _8;
  this.d4 = _9;
  this.cP = _10;
  this.cQ = _11;
  this.cR = _12;
  this.cS = _13;
  this.cT = _14;
  this.cU = _15;
  this.cV = _16;
  this.cW = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 17;
});
$p.r = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, (-934366247), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().b(this.fD, x$0.fD) && $m_sr_BoxesRunTime$().b(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().b(this.cY, x$0.cY)) && $m_sr_BoxesRunTime$().b(this.cZ, x$0.cZ)) && $m_sr_BoxesRunTime$().b(this.d0, x$0.d0)) && $m_sr_BoxesRunTime$().b(this.d1, x$0.d1)) && $m_sr_BoxesRunTime$().b(this.d2, x$0.d2)) && $m_sr_BoxesRunTime$().b(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().b(this.d4, x$0.d4)) && $m_sr_BoxesRunTime$().b(this.cP, x$0.cP)) && $m_sr_BoxesRunTime$().b(this.cQ, x$0.cQ)) && $m_sr_BoxesRunTime$().b(this.cR, x$0.cR)) && $m_sr_BoxesRunTime$().b(this.cS, x$0.cS)) && $m_sr_BoxesRunTime$().b(this.cT, x$0.cT)) && $m_sr_BoxesRunTime$().b(this.cU, x$0.cU)) && $m_sr_BoxesRunTime$().b(this.cV, x$0.cV)) && $m_sr_BoxesRunTime$().b(this.cW, x$0.cW))));
});
$p.L = (function() {
  return "Tuple17";
});
$p.q = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.fD) + ",") + this.cX) + ",") + this.cY) + ",") + this.cZ) + ",") + this.d0) + ",") + this.d1) + ",") + this.d2) + ",") + this.d3) + ",") + this.d4) + ",") + this.cP) + ",") + this.cQ) + ",") + this.cR) + ",") + this.cS) + ",") + this.cT) + ",") + this.cU) + ",") + this.cV) + ",") + this.cW) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a6)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  a6: 1,
  b: 1,
  c: 1,
  br: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.fE = null;
  this.de = null;
  this.df = null;
  this.dg = null;
  this.dh = null;
  this.di = null;
  this.dj = null;
  this.dk = null;
  this.dl = null;
  this.d5 = null;
  this.d6 = null;
  this.d7 = null;
  this.d8 = null;
  this.d9 = null;
  this.da = null;
  this.db = null;
  this.dc = null;
  this.dd = null;
  this.fE = _1;
  this.de = _2;
  this.df = _3;
  this.dg = _4;
  this.dh = _5;
  this.di = _6;
  this.dj = _7;
  this.dk = _8;
  this.dl = _9;
  this.d5 = _10;
  this.d6 = _11;
  this.d7 = _12;
  this.d8 = _13;
  this.d9 = _14;
  this.da = _15;
  this.db = _16;
  this.dc = _17;
  this.dd = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 18;
});
$p.r = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, (-937041276), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().b(this.fE, x$0.fE) && $m_sr_BoxesRunTime$().b(this.de, x$0.de)) && $m_sr_BoxesRunTime$().b(this.df, x$0.df)) && $m_sr_BoxesRunTime$().b(this.dg, x$0.dg)) && $m_sr_BoxesRunTime$().b(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().b(this.di, x$0.di)) && $m_sr_BoxesRunTime$().b(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().b(this.dk, x$0.dk)) && $m_sr_BoxesRunTime$().b(this.dl, x$0.dl)) && $m_sr_BoxesRunTime$().b(this.d5, x$0.d5)) && $m_sr_BoxesRunTime$().b(this.d6, x$0.d6)) && $m_sr_BoxesRunTime$().b(this.d7, x$0.d7)) && $m_sr_BoxesRunTime$().b(this.d8, x$0.d8)) && $m_sr_BoxesRunTime$().b(this.d9, x$0.d9)) && $m_sr_BoxesRunTime$().b(this.da, x$0.da)) && $m_sr_BoxesRunTime$().b(this.db, x$0.db)) && $m_sr_BoxesRunTime$().b(this.dc, x$0.dc)) && $m_sr_BoxesRunTime$().b(this.dd, x$0.dd))));
});
$p.L = (function() {
  return "Tuple18";
});
$p.q = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.fE) + ",") + this.de) + ",") + this.df) + ",") + this.dg) + ",") + this.dh) + ",") + this.di) + ",") + this.dj) + ",") + this.dk) + ",") + this.dl) + ",") + this.d5) + ",") + this.d6) + ",") + this.d7) + ",") + this.d8) + ",") + this.d9) + ",") + this.da) + ",") + this.db) + ",") + this.dc) + ",") + this.dd) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a7)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  a7: 1,
  b: 1,
  c: 1,
  bs: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.fF = null;
  this.dx = null;
  this.dy = null;
  this.dz = null;
  this.dA = null;
  this.dB = null;
  this.dC = null;
  this.dD = null;
  this.dE = null;
  this.dm = null;
  this.dn = null;
  this.dp = null;
  this.dq = null;
  this.dr = null;
  this.ds = null;
  this.dt = null;
  this.du = null;
  this.dv = null;
  this.dw = null;
  this.fF = _1;
  this.dx = _2;
  this.dy = _3;
  this.dz = _4;
  this.dA = _5;
  this.dB = _6;
  this.dC = _7;
  this.dD = _8;
  this.dE = _9;
  this.dm = _10;
  this.dn = _11;
  this.dp = _12;
  this.dq = _13;
  this.dr = _14;
  this.ds = _15;
  this.dt = _16;
  this.du = _17;
  this.dv = _18;
  this.dw = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 19;
});
$p.r = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, (-1955940499), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().b(this.fF, x$0.fF) && $m_sr_BoxesRunTime$().b(this.dx, x$0.dx)) && $m_sr_BoxesRunTime$().b(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().b(this.dz, x$0.dz)) && $m_sr_BoxesRunTime$().b(this.dA, x$0.dA)) && $m_sr_BoxesRunTime$().b(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().b(this.dC, x$0.dC)) && $m_sr_BoxesRunTime$().b(this.dD, x$0.dD)) && $m_sr_BoxesRunTime$().b(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().b(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().b(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().b(this.dp, x$0.dp)) && $m_sr_BoxesRunTime$().b(this.dq, x$0.dq)) && $m_sr_BoxesRunTime$().b(this.dr, x$0.dr)) && $m_sr_BoxesRunTime$().b(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().b(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().b(this.du, x$0.du)) && $m_sr_BoxesRunTime$().b(this.dv, x$0.dv)) && $m_sr_BoxesRunTime$().b(this.dw, x$0.dw))));
});
$p.L = (function() {
  return "Tuple19";
});
$p.q = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.fF) + ",") + this.dx) + ",") + this.dy) + ",") + this.dz) + ",") + this.dA) + ",") + this.dB) + ",") + this.dC) + ",") + this.dD) + ",") + this.dE) + ",") + this.dm) + ",") + this.dn) + ",") + this.dp) + ",") + this.dq) + ",") + this.dr) + ",") + this.ds) + ",") + this.dt) + ",") + this.du) + ",") + this.dv) + ",") + this.dw) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  a8: 1,
  b: 1,
  c: 1,
  bt: 1,
  a: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.Q = null;
  this.as = null;
  this.Q = _1;
  this.as = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.I = (function() {
  return 2;
});
$p.r = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.q = (function() {
  return (((("(" + this.Q) + ",") + this.as) + ")");
});
$p.L = (function() {
  return "Tuple2";
});
$p.P = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, (-116390334), true);
});
$p.v = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().b(this.Q, x$1.Q) && $m_sr_BoxesRunTime$().b(this.as, x$1.as))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  a9: 1,
  bu: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.fG = null;
  this.dP = null;
  this.dR = null;
  this.dS = null;
  this.dT = null;
  this.dU = null;
  this.dV = null;
  this.dW = null;
  this.dX = null;
  this.dF = null;
  this.dG = null;
  this.dH = null;
  this.dI = null;
  this.dJ = null;
  this.dK = null;
  this.dL = null;
  this.dM = null;
  this.dN = null;
  this.dO = null;
  this.dQ = null;
  this.fG = _1;
  this.dP = _2;
  this.dR = _3;
  this.dS = _4;
  this.dT = _5;
  this.dU = _6;
  this.dV = _7;
  this.dW = _8;
  this.dX = _9;
  this.dF = _10;
  this.dG = _11;
  this.dH = _12;
  this.dI = _13;
  this.dJ = _14;
  this.dK = _15;
  this.dL = _16;
  this.dM = _17;
  this.dN = _18;
  this.dO = _19;
  this.dQ = _20;
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 20;
});
$p.r = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, 1328807075, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().b(this.fG, x$0.fG) && $m_sr_BoxesRunTime$().b(this.dP, x$0.dP)) && $m_sr_BoxesRunTime$().b(this.dR, x$0.dR)) && $m_sr_BoxesRunTime$().b(this.dS, x$0.dS)) && $m_sr_BoxesRunTime$().b(this.dT, x$0.dT)) && $m_sr_BoxesRunTime$().b(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().b(this.dV, x$0.dV)) && $m_sr_BoxesRunTime$().b(this.dW, x$0.dW)) && $m_sr_BoxesRunTime$().b(this.dX, x$0.dX)) && $m_sr_BoxesRunTime$().b(this.dF, x$0.dF)) && $m_sr_BoxesRunTime$().b(this.dG, x$0.dG)) && $m_sr_BoxesRunTime$().b(this.dH, x$0.dH)) && $m_sr_BoxesRunTime$().b(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().b(this.dJ, x$0.dJ)) && $m_sr_BoxesRunTime$().b(this.dK, x$0.dK)) && $m_sr_BoxesRunTime$().b(this.dL, x$0.dL)) && $m_sr_BoxesRunTime$().b(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().b(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().b(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().b(this.dQ, x$0.dQ))));
});
$p.L = (function() {
  return "Tuple20";
});
$p.q = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.fG) + ",") + this.dP) + ",") + this.dR) + ",") + this.dS) + ",") + this.dT) + ",") + this.dU) + ",") + this.dV) + ",") + this.dW) + ",") + this.dX) + ",") + this.dF) + ",") + this.dG) + ",") + this.dH) + ",") + this.dI) + ",") + this.dJ) + ",") + this.dK) + ",") + this.dL) + ",") + this.dM) + ",") + this.dN) + ",") + this.dO) + ",") + this.dQ) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  aa: 1,
  b: 1,
  c: 1,
  bv: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.fH = null;
  this.e8 = null;
  this.eb = null;
  this.ec = null;
  this.ed = null;
  this.ee = null;
  this.ef = null;
  this.eg = null;
  this.eh = null;
  this.dY = null;
  this.dZ = null;
  this.e0 = null;
  this.e1 = null;
  this.e2 = null;
  this.e3 = null;
  this.e4 = null;
  this.e5 = null;
  this.e6 = null;
  this.e7 = null;
  this.e9 = null;
  this.ea = null;
  this.fH = _1;
  this.e8 = _2;
  this.eb = _3;
  this.ec = _4;
  this.ed = _5;
  this.ee = _6;
  this.ef = _7;
  this.eg = _8;
  this.eh = _9;
  this.dY = _10;
  this.dZ = _11;
  this.e0 = _12;
  this.e1 = _13;
  this.e2 = _14;
  this.e3 = _15;
  this.e4 = _16;
  this.e5 = _17;
  this.e6 = _18;
  this.e7 = _19;
  this.e9 = _20;
  this.ea = _21;
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 21;
});
$p.r = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, (-21288119), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().b(this.fH, x$0.fH) && $m_sr_BoxesRunTime$().b(this.e8, x$0.e8)) && $m_sr_BoxesRunTime$().b(this.eb, x$0.eb)) && $m_sr_BoxesRunTime$().b(this.ec, x$0.ec)) && $m_sr_BoxesRunTime$().b(this.ed, x$0.ed)) && $m_sr_BoxesRunTime$().b(this.ee, x$0.ee)) && $m_sr_BoxesRunTime$().b(this.ef, x$0.ef)) && $m_sr_BoxesRunTime$().b(this.eg, x$0.eg)) && $m_sr_BoxesRunTime$().b(this.eh, x$0.eh)) && $m_sr_BoxesRunTime$().b(this.dY, x$0.dY)) && $m_sr_BoxesRunTime$().b(this.dZ, x$0.dZ)) && $m_sr_BoxesRunTime$().b(this.e0, x$0.e0)) && $m_sr_BoxesRunTime$().b(this.e1, x$0.e1)) && $m_sr_BoxesRunTime$().b(this.e2, x$0.e2)) && $m_sr_BoxesRunTime$().b(this.e3, x$0.e3)) && $m_sr_BoxesRunTime$().b(this.e4, x$0.e4)) && $m_sr_BoxesRunTime$().b(this.e5, x$0.e5)) && $m_sr_BoxesRunTime$().b(this.e6, x$0.e6)) && $m_sr_BoxesRunTime$().b(this.e7, x$0.e7)) && $m_sr_BoxesRunTime$().b(this.e9, x$0.e9)) && $m_sr_BoxesRunTime$().b(this.ea, x$0.ea))));
});
$p.L = (function() {
  return "Tuple21";
});
$p.q = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.fH) + ",") + this.e8) + ",") + this.eb) + ",") + this.ec) + ",") + this.ed) + ",") + this.ee) + ",") + this.ef) + ",") + this.eg) + ",") + this.eh) + ",") + this.dY) + ",") + this.dZ) + ",") + this.e0) + ",") + this.e1) + ",") + this.e2) + ",") + this.e3) + ",") + this.e4) + ",") + this.e5) + ",") + this.e6) + ",") + this.e7) + ",") + this.e9) + ",") + this.ea) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  ab: 1,
  b: 1,
  c: 1,
  bw: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.fI = null;
  this.es = null;
  this.ew = null;
  this.ex = null;
  this.ey = null;
  this.ez = null;
  this.eA = null;
  this.eB = null;
  this.eC = null;
  this.ei = null;
  this.ej = null;
  this.ek = null;
  this.el = null;
  this.em = null;
  this.en = null;
  this.eo = null;
  this.ep = null;
  this.eq = null;
  this.er = null;
  this.et = null;
  this.eu = null;
  this.ev = null;
  this.fI = _1;
  this.es = _2;
  this.ew = _3;
  this.ex = _4;
  this.ey = _5;
  this.ez = _6;
  this.eA = _7;
  this.eB = _8;
  this.eC = _9;
  this.ei = _10;
  this.ej = _11;
  this.ek = _12;
  this.el = _13;
  this.em = _14;
  this.en = _15;
  this.eo = _16;
  this.ep = _17;
  this.eq = _18;
  this.er = _19;
  this.et = _20;
  this.eu = _21;
  this.ev = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 22;
});
$p.r = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, (-139445068), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().b(this.fI, x$0.fI) && $m_sr_BoxesRunTime$().b(this.es, x$0.es)) && $m_sr_BoxesRunTime$().b(this.ew, x$0.ew)) && $m_sr_BoxesRunTime$().b(this.ex, x$0.ex)) && $m_sr_BoxesRunTime$().b(this.ey, x$0.ey)) && $m_sr_BoxesRunTime$().b(this.ez, x$0.ez)) && $m_sr_BoxesRunTime$().b(this.eA, x$0.eA)) && $m_sr_BoxesRunTime$().b(this.eB, x$0.eB)) && $m_sr_BoxesRunTime$().b(this.eC, x$0.eC)) && $m_sr_BoxesRunTime$().b(this.ei, x$0.ei)) && $m_sr_BoxesRunTime$().b(this.ej, x$0.ej)) && $m_sr_BoxesRunTime$().b(this.ek, x$0.ek)) && $m_sr_BoxesRunTime$().b(this.el, x$0.el)) && $m_sr_BoxesRunTime$().b(this.em, x$0.em)) && $m_sr_BoxesRunTime$().b(this.en, x$0.en)) && $m_sr_BoxesRunTime$().b(this.eo, x$0.eo)) && $m_sr_BoxesRunTime$().b(this.ep, x$0.ep)) && $m_sr_BoxesRunTime$().b(this.eq, x$0.eq)) && $m_sr_BoxesRunTime$().b(this.er, x$0.er)) && $m_sr_BoxesRunTime$().b(this.et, x$0.et)) && $m_sr_BoxesRunTime$().b(this.eu, x$0.eu)) && $m_sr_BoxesRunTime$().b(this.ev, x$0.ev))));
});
$p.L = (function() {
  return "Tuple22";
});
$p.q = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.fI) + ",") + this.es) + ",") + this.ew) + ",") + this.ex) + ",") + this.ey) + ",") + this.ez) + ",") + this.eA) + ",") + this.eB) + ",") + this.eC) + ",") + this.ei) + ",") + this.ej) + ",") + this.ek) + ",") + this.el) + ",") + this.em) + ",") + this.en) + ",") + this.eo) + ",") + this.ep) + ",") + this.eq) + ",") + this.er) + ",") + this.et) + ",") + this.eu) + ",") + this.ev) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  ac: 1,
  b: 1,
  c: 1,
  bx: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.bh = null;
  this.b2 = null;
  this.b3 = null;
  this.bh = _1;
  this.b2 = _2;
  this.b3 = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 3;
});
$p.r = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, (-192629203), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().b(this.bh, x$0.bh) && $m_sr_BoxesRunTime$().b(this.b2, x$0.b2)) && $m_sr_BoxesRunTime$().b(this.b3, x$0.b3))));
});
$p.L = (function() {
  return "Tuple3";
});
$p.q = (function() {
  return (((((("(" + this.bh) + ",") + this.b2) + ",") + this.b3) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  ad: 1,
  b: 1,
  c: 1,
  by: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.fJ = null;
  this.eD = null;
  this.eE = null;
  this.eF = null;
  this.fJ = _1;
  this.eD = _2;
  this.eE = _3;
  this.eF = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 4;
});
$p.r = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, (-1542739752), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().b(this.fJ, x$0.fJ) && $m_sr_BoxesRunTime$().b(this.eD, x$0.eD)) && $m_sr_BoxesRunTime$().b(this.eE, x$0.eE)) && $m_sr_BoxesRunTime$().b(this.eF, x$0.eF))));
});
$p.L = (function() {
  return "Tuple4";
});
$p.q = (function() {
  return (((((((("(" + this.fJ) + ",") + this.eD) + ",") + this.eE) + ",") + this.eF) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  ae: 1,
  b: 1,
  c: 1,
  bz: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.fK = null;
  this.eG = null;
  this.eH = null;
  this.eI = null;
  this.eJ = null;
  this.fK = _1;
  this.eG = _2;
  this.eH = _3;
  this.eI = _4;
  this.eJ = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 5;
});
$p.r = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, 417360321, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().b(this.fK, x$0.fK) && $m_sr_BoxesRunTime$().b(this.eG, x$0.eG)) && $m_sr_BoxesRunTime$().b(this.eH, x$0.eH)) && $m_sr_BoxesRunTime$().b(this.eI, x$0.eI)) && $m_sr_BoxesRunTime$().b(this.eJ, x$0.eJ))));
});
$p.L = (function() {
  return "Tuple5";
});
$p.q = (function() {
  return (((((((((("(" + this.fK) + ",") + this.eG) + ",") + this.eH) + ",") + this.eI) + ",") + this.eJ) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  af: 1,
  b: 1,
  c: 1,
  bA: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.fL = null;
  this.eK = null;
  this.eL = null;
  this.eM = null;
  this.eN = null;
  this.eO = null;
  this.fL = _1;
  this.eK = _2;
  this.eL = _3;
  this.eM = _4;
  this.eN = _5;
  this.eO = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 6;
});
$p.r = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, (-1037607828), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().b(this.fL, x$0.fL) && $m_sr_BoxesRunTime$().b(this.eK, x$0.eK)) && $m_sr_BoxesRunTime$().b(this.eL, x$0.eL)) && $m_sr_BoxesRunTime$().b(this.eM, x$0.eM)) && $m_sr_BoxesRunTime$().b(this.eN, x$0.eN)) && $m_sr_BoxesRunTime$().b(this.eO, x$0.eO))));
});
$p.L = (function() {
  return "Tuple6";
});
$p.q = (function() {
  return (((((((((((("(" + this.fL) + ",") + this.eK) + ",") + this.eL) + ",") + this.eM) + ",") + this.eN) + ",") + this.eO) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  ag: 1,
  b: 1,
  c: 1,
  bB: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.fM = null;
  this.eP = null;
  this.eQ = null;
  this.eR = null;
  this.eS = null;
  this.eT = null;
  this.eU = null;
  this.fM = _1;
  this.eP = _2;
  this.eQ = _3;
  this.eR = _4;
  this.eS = _5;
  this.eT = _6;
  this.eU = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 7;
});
$p.r = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, (-1050932777), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().b(this.fM, x$0.fM) && $m_sr_BoxesRunTime$().b(this.eP, x$0.eP)) && $m_sr_BoxesRunTime$().b(this.eQ, x$0.eQ)) && $m_sr_BoxesRunTime$().b(this.eR, x$0.eR)) && $m_sr_BoxesRunTime$().b(this.eS, x$0.eS)) && $m_sr_BoxesRunTime$().b(this.eT, x$0.eT)) && $m_sr_BoxesRunTime$().b(this.eU, x$0.eU))));
});
$p.L = (function() {
  return "Tuple7";
});
$p.q = (function() {
  return (((((((((((((("(" + this.fM) + ",") + this.eP) + ",") + this.eQ) + ",") + this.eR) + ",") + this.eS) + ",") + this.eT) + ",") + this.eU) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  ah: 1,
  b: 1,
  c: 1,
  bC: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.fN = null;
  this.eV = null;
  this.eW = null;
  this.eX = null;
  this.eY = null;
  this.eZ = null;
  this.f0 = null;
  this.f1 = null;
  this.fN = _1;
  this.eV = _2;
  this.eW = _3;
  this.eX = _4;
  this.eY = _5;
  this.eZ = _6;
  this.f0 = _7;
  this.f1 = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 8;
});
$p.r = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, 1998822530, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().b(this.fN, x$0.fN) && $m_sr_BoxesRunTime$().b(this.eV, x$0.eV)) && $m_sr_BoxesRunTime$().b(this.eW, x$0.eW)) && $m_sr_BoxesRunTime$().b(this.eX, x$0.eX)) && $m_sr_BoxesRunTime$().b(this.eY, x$0.eY)) && $m_sr_BoxesRunTime$().b(this.eZ, x$0.eZ)) && $m_sr_BoxesRunTime$().b(this.f0, x$0.f0)) && $m_sr_BoxesRunTime$().b(this.f1, x$0.f1))));
});
$p.L = (function() {
  return "Tuple8";
});
$p.q = (function() {
  return (((((((((((((((("(" + this.fN) + ",") + this.eV) + ",") + this.eW) + ",") + this.eX) + ",") + this.eY) + ",") + this.eZ) + ",") + this.f0) + ",") + this.f1) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  ai: 1,
  b: 1,
  c: 1,
  bD: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.fO = null;
  this.f2 = null;
  this.f3 = null;
  this.f4 = null;
  this.f5 = null;
  this.f6 = null;
  this.f7 = null;
  this.f8 = null;
  this.f9 = null;
  this.fO = _1;
  this.f2 = _2;
  this.f3 = _3;
  this.f4 = _4;
  this.f5 = _5;
  this.f6 = _6;
  this.f7 = _7;
  this.f8 = _8;
  this.f9 = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 9;
});
$p.r = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().U(this, (-1807911176), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().b(this.fO, x$0.fO) && $m_sr_BoxesRunTime$().b(this.f2, x$0.f2)) && $m_sr_BoxesRunTime$().b(this.f3, x$0.f3)) && $m_sr_BoxesRunTime$().b(this.f4, x$0.f4)) && $m_sr_BoxesRunTime$().b(this.f5, x$0.f5)) && $m_sr_BoxesRunTime$().b(this.f6, x$0.f6)) && $m_sr_BoxesRunTime$().b(this.f7, x$0.f7)) && $m_sr_BoxesRunTime$().b(this.f8, x$0.f8)) && $m_sr_BoxesRunTime$().b(this.f9, x$0.f9))));
});
$p.L = (function() {
  return "Tuple9";
});
$p.q = (function() {
  return (((((((((((((((((("(" + this.fO) + ",") + this.f2) + ",") + this.f3) + ",") + this.f4) + ",") + this.f5) + ",") + this.f6) + ",") + this.f7) + ",") + this.f8) + ",") + this.f9) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  aj: 1,
  b: 1,
  c: 1,
  bE: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.h2() + "("), ", ", ")");
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
$p.T = (function() {
  return false;
});
$p.pb = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.aq = (function() {
  return 0;
});
$p.O = (function() {
  this.pb();
});
$p.ib = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  bQ: 1,
  m: 1,
  d: 1,
  e: 1,
  n: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.al instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.al;
      $thiz.al = c.al;
      $thiz.bj = c.bj;
      if ((c.az !== null)) {
        if (($thiz.ay === null)) {
          $thiz.ay = c.ay;
        }
        var x$proxy10 = c.ay;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().i8();
        }
        x$proxy10.go = $thiz.az;
        $thiz.az = c.az;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.az === null)) {
      $thiz.al = null;
      $thiz.ay = null;
      return false;
    } else {
      $thiz.al = $thiz.az.oi();
      if (($thiz.ay === $thiz.az)) {
        var x$proxy12 = $thiz.ay;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().i8();
        }
        $thiz.ay = x$proxy12.go;
      }
      $thiz.az = $thiz.az.go;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.bj) {
        return true;
      } else {
        if ((!(($thiz.al !== null) && $thiz.al.T()))) {
          continue;
        }
        $thiz.bj = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.al = null;
  this.az = null;
  this.ay = null;
  this.bj = false;
  this.al = from;
  this.az = null;
  this.ay = null;
  this.bj = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.T = (function() {
  if (this.bj) {
    return true;
  } else if ((this.al !== null)) {
    if (this.al.T()) {
      this.bj = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.O = (function() {
  if (this.T()) {
    this.bj = false;
    var x$proxy13 = this.al;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().i8();
    }
    return x$proxy13.O();
  } else {
    return $m_sc_Iterator$().b5.O();
  }
});
$p.nM = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.az === null)) {
    this.az = c;
    this.ay = c;
  } else {
    var x$proxy14 = this.ay;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().i8();
    }
    x$proxy14.go = c;
    this.ay = c;
  }
  if ((this.al === null)) {
    this.al = $m_sc_Iterator$().b5;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.al)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  al: 1,
  m: 1,
  d: 1,
  e: 1,
  n: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.b6 > 0)) {
    if ($thiz.bk.T()) {
      $thiz.bk.O();
      $thiz.b6 = (($thiz.b6 - 1) | 0);
    } else {
      $thiz.b6 = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.at < 0)) {
    return (-1);
  } else {
    var that = (($thiz.at - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.bk = null;
  this.at = 0;
  this.b6 = 0;
  this.bk = underlying;
  this.at = limit;
  this.b6 = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.aq = (function() {
  var size = this.bk.aq();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.b6) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.at < 0)) {
      return dropSize;
    } else {
      var x = this.at;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.T = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.at !== 0) && this.bk.T());
});
$p.O = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.at > 0)) {
    this.at = ((this.at - 1) | 0);
    return this.bk.O();
  } else {
    return ((this.at < 0) ? this.bk.O() : $m_sc_Iterator$().b5.O());
  }
});
$p.ib = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.at < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.b6 + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().b5;
  } else if ((sum < 0)) {
    this.b6 = 2147483647;
    this.at = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.bk, ((sum - 2147483647) | 0), rest))));
  } else {
    this.b6 = sum;
    this.at = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  bS: 1,
  m: 1,
  d: 1,
  e: 1,
  n: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.nZ(n);
  if (skipped.a7()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.jA();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      if ((((!a$tailLocal1.a7()) && (!b$tailLocal1.a7())) && $m_sr_BoxesRunTime$().b(a$tailLocal1.jA(), b$tailLocal1.jA()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.jK();
        var b$tailLocal1$tmp1 = b$tailLocal1.jK();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.a7() && b$tailLocal1.a7());
    }
  }
}
/** @constructor */
function $c_sci_List$() {
  $n_sci_List$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_List$.prototype = new $h_O();
$p.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
}
$h_sci_List$.prototype = $p;
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  c8: 1,
  a: 1,
  ak: 1,
  bU: 1,
  bZ: 1
}));
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$();
  }
  return $n_sci_List$;
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.kd = null;
  this.gq = 0;
  this.kc = 0;
  this.kd = x$1;
  this.gq = 0;
  this.kc = x$1.I();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.T = (function() {
  return (this.gq < this.kc);
});
$p.O = (function() {
  var result = this.kd.r(this.gq);
  this.gq = ((1 + this.gq) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  cH: 1,
  m: 1,
  d: 1,
  e: 1,
  n: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.U)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  U: 1,
  l: 1,
  a: 1,
  h: 1,
  g: 1,
  w: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
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
  aQ: 1,
  l: 1,
  a: 1,
  h: 1,
  g: 1,
  w: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  aS: 1,
  l: 1,
  a: 1,
  h: 1,
  g: 1,
  w: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, $thizhi, that) {
  if ((that instanceof $Long)) {
    var $x_1 = that;
    var this$1_$_lo = $x_1.l;
    var this$1_$_hi = $x_1.h;
    return ((($thiz ^ this$1_$_lo) | ($thizhi ^ this$1_$_hi)) === 0);
  } else {
    return false;
  }
}
function $f_jl_Long__hashCode__I($thiz, $thizhi) {
  return ($thiz ^ $thizhi);
}
function $f_jl_Long__toString__T($thiz, $thizhi) {
  return $m_RTLong$().n6($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.W)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  W: 1,
  l: 1,
  a: 1,
  h: 1,
  g: 1,
  w: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  aV: 1,
  V: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
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
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().pZ(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  aY: 1,
  a: 1,
  h: 1,
  G: 1,
  g: 1,
  w: 1
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
$p.jq = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.h2 = (function() {
  return this.gi();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.hu = null;
  this.b4 = 0;
  this.gn = 0;
  this.hu = xs;
  this.b4 = 0;
  this.gn = $m_jl_reflect_Array$().jz(this.hu);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.aq = (function() {
  return ((this.gn - this.b4) | 0);
});
$p.T = (function() {
  return (this.b4 < this.gn);
});
$p.O = (function() {
  if ((this.b4 >= $m_jl_reflect_Array$().jz(this.hu))) {
    $m_sc_Iterator$().b5.O();
  }
  var r = $m_sr_ScalaRunTime$().gc(this.hu, this.b4);
  this.b4 = ((1 + this.b4) | 0);
  return r;
});
$p.i4 = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.b4 + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.gn;
    } else {
      var a = this.gn;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.b4 = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  bI: 1,
  m: 1,
  d: 1,
  e: 1,
  n: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.aD) ? $thiz.aD : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.k1 = null;
  this.bi = 0;
  this.aD = 0;
  this.k1 = self;
  this.bi = 0;
  this.aD = self.R();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.aq = (function() {
  return this.aD;
});
$p.T = (function() {
  return (this.aD > 0);
});
$p.O = (function() {
  if ((this.aD > 0)) {
    var r = this.k1.aa(this.bi);
    this.bi = ((1 + this.bi) | 0);
    this.aD = ((this.aD - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().b5.O();
  }
});
$p.i4 = (function(n) {
  if ((n > 0)) {
    this.bi = ((this.bi + n) | 0);
    var b = ((this.aD - n) | 0);
    this.aD = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.ib = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.aD = ((b < 0) ? 0 : b);
  this.bi = ((this.bi + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  bO: 1,
  m: 1,
  d: 1,
  e: 1,
  n: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$() {
  this.k5 = null;
  $n_scm_ArraySeq$ = this;
  this.k5 = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  cb: 1,
  a: 1,
  bL: 1,
  bJ: 1,
  bK: 1,
  bX: 1
}));
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$();
  }
  return $n_scm_ArraySeq$;
}
/** @constructor */
function $c_T$package$EmptyTuple$() {
}
$p = $c_T$package$EmptyTuple$.prototype = new $h_O();
$p.constructor = $c_T$package$EmptyTuple$;
/** @constructor */
function $h_T$package$EmptyTuple$() {
}
$h_T$package$EmptyTuple$.prototype = $p;
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 924202651;
});
$p.I = (function() {
  return 0;
});
$p.L = (function() {
  return "EmptyTuple";
});
$p.r = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.q = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  bF: 1,
  b: 1,
  c: 1,
  a: 1,
  ch: 1,
  ci: 1,
  cj: 1
}));
var $n_T$package$EmptyTuple$;
function $m_T$package$EmptyTuple$() {
  if ((!$n_T$package$EmptyTuple$)) {
    $n_T$package$EmptyTuple$ = new $c_T$package$EmptyTuple$();
  }
  return $n_T$package$EmptyTuple$;
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.gi() + "(<not computed>)");
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$p = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $p;
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.V = null;
    this.V = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  i6() {
    return $dp_toString__T(this.V);
  }
  L() {
    return "JavaScriptException";
  }
  I() {
    return 1;
  }
  r(x$1) {
    return ((x$1 === 0) ? this.V : $m_sr_Statics$().op(x$1));
  }
  P() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  z() {
    return $m_s_util_hashing_MurmurHash3$().U(this, 1744042595, true);
  }
  v(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().b(this.V, x$1.V)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ax)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  ax: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1,
  c: 1,
  b: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.a7())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.jK();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.ih = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.q = (function() {
  return this.ih;
});
$p.v = (function(that) {
  return (this === that);
});
$p.z = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_sc_AbstractView() {
}
$p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $p;
$p.q = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.ih = null;
  this.ih = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  cp: 1,
  cq: 1,
  co: 1,
  a: 1,
  cr: 1,
  cl: 1,
  b: 1,
  cm: 1,
  cn: 1
}));
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$();
  }
  return $n_s_reflect_ManifestFactory$ObjectManifest$;
}
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.mo($thiz)) {
        return $thiz.jB(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.o)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.o)));
}
/** @constructor */
function $c_sc_AbstractSeq() {
}
$p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $p;
$p.a7 = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.jB = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.mo = (function(that) {
  return true;
});
$p.v = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().n4(this);
});
$p.q = (function() {
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.q)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.q)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.H)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.H)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.gp = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.gp = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.aa = (function(idx) {
  return this.gp.aa(idx);
});
$p.R = (function() {
  return this.gp.R();
});
$p.a7 = (function() {
  return this.gp.a7();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.gp = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.gf = (function(len) {
  var x = this.R();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aq = (function() {
  return this.R();
});
$p.af = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.gi = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  bN: 1,
  bW: 1,
  bG: 1,
  bH: 1,
  y: 1,
  d: 1,
  e: 1,
  t: 1,
  s: 1,
  r: 1,
  a: 1,
  c1: 1,
  u: 1,
  bV: 1,
  z: 1,
  bM: 1
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
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  return ($is_sci_IndexedSeq(that) ? ($thiz.R() === that.R()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.R();
      var equal = (length === o.R());
      if (equal) {
        var index = 0;
        var a = $thiz.mi();
        var b = o.mi();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? ((length >>> 0) > (lo >>> 0)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength;
        } else {
          var maxApplyCompare = length;
        }
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().b($thiz.aa(index), o.aa(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.af().i4(index);
          var thatIt = o.af().i4(index);
          while ((equal && thisIt.T())) {
            equal = $m_sr_BoxesRunTime$().b(thisIt.O(), thatIt.O());
          }
        }
      }
      return equal;
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o);
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.I)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.I)));
}
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
  this.ii = null;
  this.ii = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.mo = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.jB = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.mi = (function() {
  return $m_sci_IndexedSeqDefaults$().k4;
});
$p.af = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.gf = (function(len) {
  var x = this.R();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aq = (function() {
  return this.R();
});
$p.v = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.z = (function() {
  return $m_s_util_hashing_MurmurHash3$().n4(this);
});
$p.q = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.a7 = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.jx = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.jq = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.R = (function() {
  return (this.ii.length | 0);
});
$p.aa = (function(idx) {
  return this.ii[idx];
});
$p.h2 = (function() {
  return "WrappedVarArgs";
});
$p.h = (function(v1) {
  return this.aa((v1 | 0));
});
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  cT: 1,
  I: 1,
  d: 1,
  e: 1,
  t: 1,
  s: 1,
  r: 1,
  am: 1,
  k: 1,
  x: 1,
  u: 1,
  b: 1,
  o: 1,
  ap: 1,
  ao: 1,
  z: 1,
  q: 1,
  c5: 1,
  aq: 1,
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
/** @constructor */
function $c_scm_ArraySeq() {
}
$p = $c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
$h_scm_ArraySeq.prototype = $p;
$p.gf = (function(len) {
  var x = this.aE.g.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aq = (function() {
  return this.aE.g.length;
});
$p.gi = (function() {
  return "IndexedSeq";
});
$p.h2 = (function() {
  return "ArraySeq";
});
$p.v = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.aE.g.length !== other.aE.g.length)) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ar)));
}
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return ((!xs$tailLocal1.a7()) | 0);
    } else {
      if ((!xs$tailLocal1.a7())) {
        xs$tailLocal1.hq();
      }
      return (-1);
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.a7();
      var bEmpty = b$tailLocal1.a7();
      if ((!(aEmpty || bEmpty))) {
        a$tailLocal1.i7();
      }
      if (false) {
        a$tailLocal1.hq();
      }
      return (aEmpty && bEmpty);
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $p;
$p.aa = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.jB = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.gi = (function() {
  return "LinearSeq";
});
$p.a7 = (function() {
  return (this === $m_sci_Nil$());
});
$p.jx = (function(f) {
  var these = this;
  while ((!these.a7())) {
    f.h(these.i7());
    these.hq();
  }
});
$p.R = (function() {
  var these = this;
  var len = 0;
  while ((!these.a7())) {
    len = ((1 + len) | 0);
    these.hq();
  }
  return len;
});
$p.gf = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.h2 = (function() {
  return "List";
});
$p.v = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.nZ = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.h = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.aE = null;
  this.aE = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.R = (function() {
  return this.aE.g.length;
});
$p.aa = (function(index) {
  return this.aE.g[index];
});
$p.z = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.nC(this.aE, this$1.gr);
});
$p.v = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().o1(this.aE, that.aE) : $c_scm_ArraySeq.prototype.v.call(this, that));
});
$p.af = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aE);
});
$p.h = (function(v1) {
  return this.aa((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.as)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  as: 1,
  ar: 1,
  J: 1,
  B: 1,
  y: 1,
  d: 1,
  e: 1,
  t: 1,
  s: 1,
  r: 1,
  k: 1,
  x: 1,
  u: 1,
  b: 1,
  o: 1,
  N: 1,
  v: 1,
  K: 1,
  P: 1,
  O: 1,
  z: 1,
  q: 1,
  M: 1,
  L: 1,
  C: 1,
  D: 1,
  a: 1
}));
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
$p.P = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.I = (function() {
  return 0;
});
$p.L = (function() {
  return "Nil";
});
$p.r = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.i7 = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.hq = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.aq = (function() {
  return 0;
});
$p.af = (function() {
  return $m_sc_Iterator$().b5;
});
$p.jA = (function() {
  this.i7();
});
$p.jK = (function() {
  this.hq();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  c9: 1,
  an: 1,
  c3: 1,
  B: 1,
  y: 1,
  d: 1,
  e: 1,
  t: 1,
  s: 1,
  r: 1,
  k: 1,
  x: 1,
  u: 1,
  b: 1,
  o: 1,
  am: 1,
  ap: 1,
  ao: 1,
  bT: 1,
  H: 1,
  c7: 1,
  c6: 1,
  C: 1,
  D: 1,
  bY: 1,
  aq: 1,
  a: 1,
  c2: 1,
  c: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.aT = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.aT = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.af = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.gf = (function(len) {
  var x = this.aT.R();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.gi = (function() {
  return "IndexedSeq";
});
$p.R = (function() {
  return this.aT.R();
});
$p.aq = (function() {
  return this.aT.R();
});
$p.q = (function() {
  return this.aT.ab;
});
$p.a7 = (function() {
  return (this.aT.R() === 0);
});
$p.aa = (function(i) {
  return $bC(this.aT.mp(i));
});
$p.h = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.aT.mp(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cg: 1,
  J: 1,
  B: 1,
  y: 1,
  d: 1,
  e: 1,
  t: 1,
  s: 1,
  r: 1,
  k: 1,
  x: 1,
  u: 1,
  b: 1,
  o: 1,
  N: 1,
  v: 1,
  K: 1,
  P: 1,
  O: 1,
  au: 1,
  av: 1,
  at: 1,
  ce: 1,
  z: 1,
  q: 1,
  M: 1,
  L: 1,
  G: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.fP = null;
  this.fP = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.gi = (function() {
  return "IndexedSeq";
});
$p.af = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.gf = (function(len) {
  var x = (this.fP.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aa = (function(index) {
  return this.fP[index];
});
$p.R = (function() {
  return (this.fP.length | 0);
});
$p.aq = (function() {
  return (this.fP.length | 0);
});
$p.h2 = (function() {
  return "WrappedArray";
});
$p.h = (function(v1) {
  var index = (v1 | 0);
  return this.fP[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  cQ: 1,
  ca: 1,
  J: 1,
  B: 1,
  y: 1,
  d: 1,
  e: 1,
  t: 1,
  s: 1,
  r: 1,
  k: 1,
  x: 1,
  u: 1,
  b: 1,
  o: 1,
  N: 1,
  v: 1,
  K: 1,
  P: 1,
  O: 1,
  au: 1,
  av: 1,
  cf: 1,
  cc: 1,
  D: 1,
  C: 1,
  L: 1,
  z: 1,
  q: 1,
  M: 1,
  cd: 1,
  at: 1,
  a: 1
}));
let $e_sketch = (function(arg) {
  $m_Lsketches_experiments_gridceiling_GridCeiling$package$().pF(arg);
});
export { $e_sketch as sketch };
