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
  return (arg0.$classData.Z ? arg0.bn() : $objectClone(arg0));
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
        return null.vi();
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
        return instance.x();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.x.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.vj(x0);
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
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
$p.v = (function(that) {
  return (this === that);
});
$p.r = (function() {
  var i = this.x();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.r();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.b[i] = null;
    }
  } else {
    this.b = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.b2 = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.bn = (function() {
  return new $ac_O(this.b.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.b[i] = false;
    }
  } else {
    this.b = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.b2 = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.bn = (function() {
  return new $ac_Z(this.b.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Uint16Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.b2 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bn = (function() {
  return new $ac_C(this.b.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Int8Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.b2 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bn = (function() {
  return new $ac_B(this.b.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Int16Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.b2 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bn = (function() {
  return new $ac_S(this.b.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Int32Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.b2 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bn = (function() {
  return new $ac_I(this.b.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.b = new Int32Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.b2 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.bn = (function() {
  return new $ac_J(this.b.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Float32Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.b2 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bn = (function() {
  return new $ac_F(this.b.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Float64Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.b2 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bn = (function() {
  return new $ac_D(this.b.slice());
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
    B: 1,
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
    var u = result.b;
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
      this.b = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.b[i] = null;
      }
    } else {
      this.b = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.b2 = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
  });
  $p.bn = (function() {
    return new ArrayClass(this.b.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    B: 1,
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
  this.k2 = null;
  this.mc = null;
  $n_jl_System$SystemProperties$ = this;
  this.k2 = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.mc = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.qn = (function(key, default$1) {
  if ((this.k2 !== null)) {
    var dict = this.k2;
    return ((!(!$m_jl_Utils$Cache$().me.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.mc.qn(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  bi: 1
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
  this.me = null;
  $n_jl_Utils$Cache$ = this;
  this.me = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  bk: 1
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
  bl: 1
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
$p.iq = (function(array) {
  if ((array instanceof $ac_O)) {
    return array.b.length;
  } else if ((array instanceof $ac_Z)) {
    return array.b.length;
  } else if ((array instanceof $ac_C)) {
    return array.b.length;
  } else if ((array instanceof $ac_B)) {
    return array.b.length;
  } else if ((array instanceof $ac_S)) {
    return array.b.length;
  } else if ((array instanceof $ac_I)) {
    return array.b.length;
  } else if ((array instanceof $ac_J)) {
    return ((array.b.length >>> 1) | 0);
  } else if ((array instanceof $ac_F)) {
    return array.b.length;
  } else {
    if ((!(array instanceof $ac_D))) {
      $p_jl_reflect_Array$__mismatch__O__E(this, array);
    }
    return array.b.length;
  }
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  bm: 1
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
$p.rU = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.b.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (~startIndex);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.b[mid];
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
  bn: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().uk(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().uj(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().sk(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().sj(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().jI(value);
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
  return $m_RTLong$().r3(lo, hi);
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
$p.r3 = (function(lo, hi) {
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
$p.jI = (function(value) {
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
$p.sj = (function(alo, ahi, blo, bhi) {
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
$p.sk = (function(alo, ahi, blo, bhi) {
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
$p.uj = (function(alo, ahi, blo, bhi) {
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
$p.uk = (function(alo, ahi, blo, bhi) {
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
  bp: 1
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
$p.sp = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.b.length !== ys.b.length)) {
    return false;
  }
  var len = xs.b.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().c(xs.b[i], ys.b[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  bq: 1
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
    f.g(it.L());
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, dest, start, n) {
  var it = $thiz.af();
  var i = start;
  matchResult18: {
    var srclen;
    var x31 = $thiz.am();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().iq(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().iq(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.T())) {
    $m_sr_ScalaRunTime$().rN(dest, i, it.L());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.am() === 0) ? (("" + start) + end) : $thiz.lx($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).br.ay);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.br;
  if ((start.length !== 0)) {
    jsb.ay = (("" + jsb.ay) + start);
  }
  var it = $thiz.af();
  if (it.T()) {
    var obj = it.L();
    jsb.ay = (("" + jsb.ay) + obj);
    while (it.T()) {
      if ((sep.length !== 0)) {
        jsb.ay = (("" + jsb.ay) + sep);
      }
      var obj$1 = it.L();
      jsb.ay = (("" + jsb.ay) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.ay = (("" + jsb.ay) + end);
  }
  return b;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.mq = null;
  this.hw = null;
  this.mq = head;
  this.hw = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.sP = (function() {
  return this.mq.ik().af();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  cb: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.mr = null;
  $n_sc_StringOps$ = this;
  this.mr = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.mr));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  ck: 1
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
  this.mu = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().sZ($m_jl_System$SystemProperties$().qn("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.mu = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  co: 1
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
$p.c = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.sr(x, y) : ((x instanceof $Char) ? this.sq(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.sr = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.jH(xn, y);
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
$p.jH = (function(xn, yn) {
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
$p.sq = (function(xc, y) {
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
  cZ: 1
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
$p.rO = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
$p.jP = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  d1: 1
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
$p.hk = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_I)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_D)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = xs.b;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  }
  if ((xs instanceof $ac_F)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_C)) {
    return $bC(xs.b[idx]);
  }
  if ((xs instanceof $ac_B)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_S)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_Z)) {
    return xs.b[idx];
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.rN = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    xs.b[idx] = value;
    return (void 0);
  }
  if ((xs instanceof $ac_I)) {
    xs.b[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_D)) {
    xs.b[idx] = (+value);
    return (void 0);
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = $uJ(value);
    var $x_2 = xs.b;
    var $x_3 = (idx << 1);
    $x_2[$x_3] = $x_1.l;
    $x_2[(($x_3 + 1) | 0)] = $x_1.h;
    return (void 0);
  }
  if ((xs instanceof $ac_F)) {
    xs.b[idx] = Math.fround(value);
    return (void 0);
  }
  if ((xs instanceof $ac_C)) {
    xs.b[idx] = $uC(value);
    return (void 0);
  }
  if ((xs instanceof $ac_B)) {
    xs.b[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_S)) {
    xs.b[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_Z)) {
    xs.b[idx] = (!(!value));
    return (void 0);
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.ca = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.E(), (x.C() + "("), ",", ")");
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  d2: 1
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
$p.p = (function(hash, data) {
  var h = this.jO(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.jO = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.ak = (function(hash, length) {
  return this.rP((hash ^ length));
});
$p.rP = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.t5 = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.by = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().jI(dv);
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
$p.V = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.by((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.t5($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.sX = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  d4: 1
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
    return $ct_T2__O__O__(new $c_T2(), x, self.gy);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.a0(), self.a1());
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.aL, self.b3, self.bb);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.aM, self.aN, self.aU, self.aV);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.gM, self.fr, self.fs, self.ft, self.fu);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.gN, self.fv, self.fw, self.fx, self.fy, self.fz);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.gO, self.fA, self.fB, self.fC, self.fD, self.fE, self.fF);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.gP, self.fG, self.fH, self.fI, self.fJ, self.fK, self.fL, self.fM);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.gQ, self.fN, self.fO, self.fP, self.fQ, self.fR, self.fS, self.fT, self.fU);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.gz, self.ci, self.cj, self.ck, self.cl, self.cm, self.cn, self.co, self.cp, self.ch);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.gA, self.cs, self.ct, self.cu, self.cv, self.cw, self.cx, self.cy, self.cz, self.cq, self.cr);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.gB, self.cD, self.cE, self.cF, self.cG, self.cH, self.cI, self.cJ, self.cK, self.cA, self.cB, self.cC);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.gC, self.cP, self.cQ, self.cR, self.cS, self.cT, self.cU, self.cV, self.cW, self.cL, self.cM, self.cN, self.cO);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.gD, self.d2, self.d3, self.d4, self.d5, self.d6, self.d7, self.d8, self.d9, self.cX, self.cY, self.cZ, self.d0, self.d1);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.gE, self.dg, self.dh, self.di, self.dj, self.dk, self.dl, self.dm, self.dn, self.da, self.db, self.dc, self.dd, self.de, self.df);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.gF, self.dw, self.dx, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD, self.dp, self.dq, self.dr, self.ds, self.dt, self.du, self.dv);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.gG, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dR, self.dS, self.dT, self.dE, self.dF, self.dG, self.dH, self.dI, self.dJ, self.dK, self.dL);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.gH, self.e3, self.e4, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.dU, self.dV, self.dW, self.dX, self.dY, self.dZ, self.e0, self.e1, self.e2);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.gI, self.el, self.em, self.en, self.eo, self.ep, self.eq, self.er, self.es, self.eb, self.ec, self.ed, self.ee, self.ef, self.eg, self.eh, self.ei, self.ej, self.ek);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.gJ, self.eD, self.eF, self.eG, self.eH, self.eI, self.eJ, self.eK, self.eL, self.et, self.eu, self.ev, self.ew, self.ex, self.ey, self.ez, self.eA, self.eB, self.eC, self.eE);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.gK, self.eW, self.eZ, self.f0, self.f1, self.f2, self.f3, self.f4, self.f5, self.eM, self.eN, self.eO, self.eP, self.eQ, self.eR, self.eS, self.eT, self.eU, self.eV, self.eX, self.eY);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.gL, self.fg, self.fk, self.fl, self.fm, self.fn, self.fo, self.fp, self.fq, self.f6, self.f7, self.f8, self.f9, self.fa, self.fb, self.fc, self.fd, self.fe, self.ff, self.fh, self.fi, self.fj]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.z()) | 0));
  arr.b[0] = x;
  var src = xxl.aq;
  var length = xxl.z();
  src.b2(0, arr, 1, length);
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
      var $x_1 = new $c_T1(self.a1());
      break matchResult34$1;
    }
    if ((self instanceof $c_T3)) {
      var $x_1 = $ct_T2__O__O__(new $c_T2(), self.b3, self.bb);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.aN, self.aU, self.aV);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.fr, self.fs, self.ft, self.fu);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.fv, self.fw, self.fx, self.fy, self.fz);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.fA, self.fB, self.fC, self.fD, self.fE, self.fF);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.fG, self.fH, self.fI, self.fJ, self.fK, self.fL, self.fM);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.fN, self.fO, self.fP, self.fQ, self.fR, self.fS, self.fT, self.fU);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.ci, self.cj, self.ck, self.cl, self.cm, self.cn, self.co, self.cp, self.ch);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.cs, self.ct, self.cu, self.cv, self.cw, self.cx, self.cy, self.cz, self.cq, self.cr);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.cD, self.cE, self.cF, self.cG, self.cH, self.cI, self.cJ, self.cK, self.cA, self.cB, self.cC);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.cP, self.cQ, self.cR, self.cS, self.cT, self.cU, self.cV, self.cW, self.cL, self.cM, self.cN, self.cO);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.d2, self.d3, self.d4, self.d5, self.d6, self.d7, self.d8, self.d9, self.cX, self.cY, self.cZ, self.d0, self.d1);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.dg, self.dh, self.di, self.dj, self.dk, self.dl, self.dm, self.dn, self.da, self.db, self.dc, self.dd, self.de, self.df);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.dw, self.dx, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD, self.dp, self.dq, self.dr, self.ds, self.dt, self.du, self.dv);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.dM, self.dN, self.dO, self.dP, self.dQ, self.dR, self.dS, self.dT, self.dE, self.dF, self.dG, self.dH, self.dI, self.dJ, self.dK, self.dL);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.e3, self.e4, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.dU, self.dV, self.dW, self.dX, self.dY, self.dZ, self.e0, self.e1, self.e2);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.el, self.em, self.en, self.eo, self.ep, self.eq, self.er, self.es, self.eb, self.ec, self.ed, self.ee, self.ef, self.eg, self.eh, self.ei, self.ej, self.ek);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.eD, self.eF, self.eG, self.eH, self.eI, self.eJ, self.eK, self.eL, self.et, self.eu, self.ev, self.ew, self.ex, self.ey, self.ez, self.eA, self.eB, self.eC, self.eE);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.eW, self.eZ, self.f0, self.f1, self.f2, self.f3, self.f4, self.f5, self.eM, self.eN, self.eO, self.eP, self.eQ, self.eR, self.eS, self.eT, self.eU, self.eV, self.eX, self.eY);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.fg, self.fk, self.fl, self.fm, self.fn, self.fo, self.fp, self.fq, self.f6, self.f7, self.f8, self.f9, self.fa, self.fb, self.fc, self.fd, self.fe, self.ff, self.fh, self.fi, self.fj);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.z() === 23)) {
    var elems = xxl.aq;
    return new $c_T22(elems.b[1], elems.b[2], elems.b[3], elems.b[4], elems.b[5], elems.b[6], elems.b[7], elems.b[8], elems.b[9], elems.b[10], elems.b[11], elems.b[12], elems.b[13], elems.b[14], elems.b[15], elems.b[16], elems.b[17], elems.b[18], elems.b[19], elems.b[20], elems.b[21], elems.b[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.aq.b.length - 1) | 0));
    var src = xxl.aq;
    var length = ((xxl.aq.b.length - 1) | 0);
    src.b2(1, arr$1, 0, length);
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
$p.sD = (function(xs) {
  switch (xs.b.length) {
    case 0: {
      return $m_T$package$EmptyTuple$();
      break;
    }
    case 1: {
      return new $c_T1(xs.b[0]);
      break;
    }
    case 2: {
      return $ct_T2__O__O__(new $c_T2(), xs.b[0], xs.b[1]);
      break;
    }
    case 3: {
      return new $c_T3(xs.b[0], xs.b[1], xs.b[2]);
      break;
    }
    case 4: {
      return new $c_T4(xs.b[0], xs.b[1], xs.b[2], xs.b[3]);
      break;
    }
    case 5: {
      return new $c_T5(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4]);
      break;
    }
    case 6: {
      return new $c_T6(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5]);
      break;
    }
    case 7: {
      return new $c_T7(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6]);
      break;
    }
    case 8: {
      return new $c_T8(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7]);
      break;
    }
    case 9: {
      return new $c_T9(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8]);
      break;
    }
    case 10: {
      return new $c_T10(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9]);
      break;
    }
    case 11: {
      return new $c_T11(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10]);
      break;
    }
    case 12: {
      return new $c_T12(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11]);
      break;
    }
    case 13: {
      return new $c_T13(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12]);
      break;
    }
    case 14: {
      return new $c_T14(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13]);
      break;
    }
    case 15: {
      return new $c_T15(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14]);
      break;
    }
    case 16: {
      return new $c_T16(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15]);
      break;
    }
    case 17: {
      return new $c_T17(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16]);
      break;
    }
    case 18: {
      return new $c_T18(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17]);
      break;
    }
    case 19: {
      return new $c_T19(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17], xs.b[18]);
      break;
    }
    case 20: {
      return new $c_T20(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17], xs.b[18], xs.b[19]);
      break;
    }
    case 21: {
      return new $c_T21(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17], xs.b[18], xs.b[19], xs.b[20]);
      break;
    }
    case 22: {
      return new $c_T22(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17], xs.b[18], xs.b[19], xs.b[20], xs.b[21]);
      break;
    }
    default: {
      return new $c_sr_TupleXXL(xs.bn());
    }
  }
});
$p.sE = (function(xs) {
  return ((xs.b.length <= 22) ? this.sD(xs) : new $c_sr_TupleXXL(xs));
});
$p.lH = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.qb = (function(self, that) {
  var selfSize = $m_sr_Tuples$().qY(self);
  if ((selfSize === 0)) {
    return that;
  }
  var thatSize = $m_sr_Tuples$().qY(that);
  if ((thatSize === 0)) {
    return self;
  }
  var arr = new $ac_O(((selfSize + thatSize) | 0));
  if ((self instanceof $c_sr_TupleXXL)) {
    var src = self.aq;
    src.b2(0, arr, 0, selfSize);
  } else {
    self.E().qd(arr, 0, selfSize);
  }
  if ((that instanceof $c_sr_TupleXXL)) {
    var src$1 = that.aq;
    src$1.b2(0, arr, selfSize, thatSize);
  } else {
    that.E().qd(arr, selfSize, thatSize);
  }
  return this.sE(arr);
});
$p.qY = (function(self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return 0;
  }
  if ((self !== null)) {
    return self.z();
  }
  throw new $c_s_MatchError(self);
});
$p.uR = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  d5: 1
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
$p.sN = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  d7: 1
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
$p.qq = (function(this$, elem, from) {
  var len = (this$.length | 0);
  var i = from;
  while ((i < len)) {
    if ($m_sr_BoxesRunTime$().c(elem, this$[i])) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.rf = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.af();
  while (((i < len) && it.T())) {
    b.push($ct_T2__O__O__(new $c_T2(), this$[i], it.L()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.rg = (function(this$) {
  var len = (this$.length | 0);
  var b = new Array(len);
  var i = 0;
  while ((i < len)) {
    b[i] = $ct_T2__O__O__(new $c_T2(), this$[i], i);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.B = (function(this$, f) {
  var len = (this$.length | 0);
  var i = 0;
  while ((i < len)) {
    f.g(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  d8: 1
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
  d9: 1
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
  this.mE = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.mE = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  dd: 1
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
$p.e = (function(properties) {
  var result = ({});
  properties.bz(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((pair$2$2) => {
    result[pair$2$2.a0()] = pair$2$2.a1();
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  de: 1
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
$p.d = (function(array) {
  var len = array.b.length;
  var result = [];
  var i = 0;
  while ((i !== len)) {
    var x1 = i;
    result.push(array.b[x1]);
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_sjsr_package$ = new $TypeData().i($c_sjsr_package$, "scala.scalajs.runtime.package$", ({
  dg: 1
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
$p.p = (function(hash, data) {
  var h = this.jO(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.jO = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.ak = (function(hash, length) {
  return this.iK((hash ^ length));
});
$p.iK = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.a3 = (function(x, seed, ignorePrefix) {
  var arr = x.z();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.C()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.p(h, $f_T__hashCode__I(x.C()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.p(h, $m_sr_Statics$().V(x.m(i)));
      i = ((1 + i) | 0);
    }
    return this.ak(h, arr);
  }
});
$p.s4 = (function(x, seed, caseClassName) {
  var arr = x.z();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.C()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.p(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.p(h, $m_sr_Statics$().V(x.m(i)));
      i = ((1 + i) | 0);
    }
    return this.ak(h, arr);
  }
});
$p.v1 = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.af();
  while (iterator.T()) {
    var x = iterator.L();
    var h = $m_sr_Statics$().V(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.p(h$2, a);
  h$2 = this.p(h$2, b);
  h$2 = this.jO(h$2, c);
  return this.ak(h$2, n);
});
$p.tU = (function(xs, seed) {
  var it = xs.af();
  var h = seed;
  if ((!it.T())) {
    return this.ak(h, 0);
  }
  var x0 = it.L();
  if ((!it.T())) {
    return this.ak(this.p(h, $m_sr_Statics$().V(x0)), 1);
  }
  var x1 = it.L();
  var initial = $m_sr_Statics$().V(x0);
  h = this.p(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().V(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.T()) {
    h = this.p(h, prev);
    var hash = $m_sr_Statics$().V(it.L());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.p(h, hash);
      i = ((1 + i) | 0);
      while (it.T()) {
        h = this.p(h, $m_sr_Statics$().V(it.L()));
        i = ((1 + i) | 0);
      }
      return this.ak(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.iK(this.p(this.p(h0, rangeDiff), prev));
});
$p.rM = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().iq(a);
  switch (l) {
    case 0: {
      return this.ak(h, 0);
      break;
    }
    case 1: {
      return this.ak(this.p(h, $m_sr_Statics$().V($m_sr_ScalaRunTime$().hk(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().V($m_sr_ScalaRunTime$().hk(a, 0));
      h = this.p(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().V($m_sr_ScalaRunTime$().hk(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.p(h, prev);
        var hash = $m_sr_Statics$().V($m_sr_ScalaRunTime$().hk(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.p(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.p(h, $m_sr_Statics$().V($m_sr_ScalaRunTime$().hk(a, i)));
            i = ((1 + i) | 0);
          }
          return this.ak(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.iK(this.p(this.p(h0, rangeDiff), prev));
    }
  }
});
$p.qP = (function(start, step, last, seed) {
  return this.iK(this.p(this.p(this.p(seed, start), step), last));
});
$p.sS = (function(a, seed) {
  var h = seed;
  var l = a.R();
  switch (l) {
    case 0: {
      return this.ak(h, 0);
      break;
    }
    case 1: {
      return this.ak(this.p(h, $m_sr_Statics$().V(a.at(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().V(a.at(0));
      h = this.p(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().V(a.at(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.p(h, prev);
        var hash = $m_sr_Statics$().V(a.at(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.p(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.p(h, $m_sr_Statics$().V(a.at(i)));
            i = ((1 + i) | 0);
          }
          return this.ak(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.iK(this.p(this.p(h0, rangeDiff), prev));
    }
  }
});
$p.t4 = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.al())) {
    elems.jK();
  }
  return ((rangeState === 2) ? this.qP(initial, rangeDiff, prev, seed) : this.ak(h, n));
});
function $p_Lsketches_rooms_columns_Columns$package$__at$1__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, corner$1, along$1, inward$1, alongDist, inwardDist) {
  return $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().ir(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().ir(), corner$1, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().ir(), along$1, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), alongDist)), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().ir(), inward$1, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), inwardDist));
}
function $p_Lsketches_rooms_columns_Columns$package$__side$1__sjs_js_Array__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__I__V($thiz, points$1, corner, along, inward, colsHalf) {
  var length = ((colsHalf << 1) * $m_Lsketches_rooms_columns_Columns$package$().aX);
  points$1.push($p_Lsketches_rooms_columns_Columns$package$__at$1__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, corner, along, inward, $m_Lsketches_rooms_columns_Columns$package$().aD, $m_Lsketches_rooms_columns_Columns$package$().aD));
  points$1.push($p_Lsketches_rooms_columns_Columns$package$__at$1__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, corner, along, inward, $m_Lsketches_rooms_columns_Columns$package$().aD, 0.0));
  var end = (colsHalf << 1);
  var isEmpty = (end <= 1);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 1;
    while (true) {
      var x0 = i;
      var center = (x0 * $m_Lsketches_rooms_columns_Columns$package$().aX);
      points$1.push($p_Lsketches_rooms_columns_Columns$package$__at$1__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, corner, along, inward, (center - $m_Lsketches_rooms_columns_Columns$package$().aD), 0.0));
      points$1.push($p_Lsketches_rooms_columns_Columns$package$__at$1__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, corner, along, inward, (center - $m_Lsketches_rooms_columns_Columns$package$().aD), $m_Lsketches_rooms_columns_Columns$package$().aD));
      points$1.push($p_Lsketches_rooms_columns_Columns$package$__at$1__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, corner, along, inward, (center + $m_Lsketches_rooms_columns_Columns$package$().aD), $m_Lsketches_rooms_columns_Columns$package$().aD));
      (points$1.push($p_Lsketches_rooms_columns_Columns$package$__at$1__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, corner, along, inward, (center + $m_Lsketches_rooms_columns_Columns$package$().aD), 0.0)) | 0);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  points$1.push($p_Lsketches_rooms_columns_Columns$package$__at$1__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, corner, along, inward, (length - $m_Lsketches_rooms_columns_Columns$package$().aD), 0.0));
}
function $p_Lsketches_rooms_columns_Columns$package$__corner$4__Lsketchlib_utils_room_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__F4__Lsketches_rooms_columns_Face__D__Z__O($thiz, w$2, right$1, u0$1, total$2, vertex$2, f$1, fromLeft, top) {
  var up = (top ? (0.5 * w$2.g7) : (0.5 * (-w$2.g7)));
  var pos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), w$2.h2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), right$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (fromLeft - (0.5 * w$2.aB)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), up));
  var uv = new $c_Ltrivalibs_graphics_math_cpu_Vec2(((u0$1 + fromLeft) / total$2), (top ? 0.0 : 1.0));
  return vertex$2.jB(pos, uv, f$1, fromLeft);
}
function $p_Lsketches_rooms_columns_Columns$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$5, faces) {
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().lA(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, n$3, ref$3) => {
    var nVal = new $c_T3(n$3.w, n$3.A, n$3.u);
    var values$proxy1 = $m_sr_Tuples$().qb(vl.j9.bO(v$3), $m_sr_Tuples$().lH(nVal, $m_T$package$EmptyTuple$()));
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.m(0);
    var value = nestedValues.m(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.m(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.m(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.m(1);
    var value$4 = nestedValues$2.m(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.m(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
    var tailOffset$7 = ((8 + tailOffset$4) | 0);
    var nestedValues$3 = values$proxy1.m(2);
    var value$6 = nestedValues$3.m(0);
    ref$3.dv.setFloat32(tailOffset$7, Math.fround(value$6), true);
    var tailOffset$8 = ((4 + tailOffset$7) | 0);
    var value$7 = nestedValues$3.m(1);
    ref$3.dv.setFloat32(tailOffset$8, Math.fround(value$7), true);
    var tailOffset$9 = ((4 + tailOffset$8) | 0);
    var value$8 = nestedValues$3.m(2);
    ref$3.dv.setFloat32(tailOffset$9, Math.fround(value$8), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  mesh$proxy1.qi();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.ai.length | 0))) {
    var n = (mesh$proxy1.ai[fi].length | 0);
    vertexCount = ((vertexCount + n) | 0);
    if ((n === 4)) {
      hasQuads = true;
    }
    fi = ((1 + fi) | 0);
  }
  var count$proxy1 = vertexCount;
  var buffer = new ArrayBuffer((count$proxy1 << 5));
  var verts = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), count$proxy1);
  var vi = 0;
  if ((!hasQuads)) {
    fi = 0;
    while ((fi < (mesh$proxy1.ai.length | 0))) {
      var arr = mesh$proxy1.ai[fi];
      var x$proxy25 = mesh$proxy1.c0[fi].g8;
      var si = 0;
      while ((si < (arr.length | 0))) {
        var x0 = arr[si];
        var index$proxy1 = vi;
        var offset$proxy9 = (index$proxy1 << 5);
        var x2 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy9);
        f(x0, x$proxy25, x2);
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
    while ((fi < (mesh$proxy1.ai.length | 0))) {
      var arr$2 = mesh$proxy1.ai[fi];
      var n$2 = (arr$2.length | 0);
      var x$proxy26 = mesh$proxy1.c0[fi].g8;
      var si$2 = 0;
      while ((si$2 < n$2)) {
        var x0$1 = arr$2[si$2];
        var index$proxy2 = vi;
        var offset$proxy10 = (index$proxy2 << 5);
        var x2$1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy10);
        f(x0$1, x$proxy26, x2$1);
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.lQ(idxBuf, vertexCount));
  }
  return p$5.lM($x_1, (void 0), (void 0), (void 0), (void 0), (void 0));
}
function $p_Lsketches_rooms_columns_Columns$package$__wallForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$6, faces) {
  var mesh$proxy2 = $m_Ltrivalibs_graphics_geometry_Mesh$().lA(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec4Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())))));
  var f = ((v$3, n$3, ref$3) => {
    var nVal = new $c_T3(n$3.w, n$3.A, n$3.u);
    var values$proxy2 = $m_sr_Tuples$().qb(vl.j9.bO(v$3), $m_sr_Tuples$().lH(nVal, $m_T$package$EmptyTuple$()));
    var baseOffset$proxy5 = (ref$3.off | 0);
    var nestedValues = values$proxy2.m(0);
    var value = nestedValues.m(0);
    ref$3.dv.setFloat32(baseOffset$proxy5, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy5) | 0);
    var value$2 = nestedValues.m(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.m(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy5) | 0);
    var nestedValues$2 = values$proxy2.m(1);
    var value$4 = nestedValues$2.m(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.m(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
    var tailOffset$7 = ((8 + tailOffset$4) | 0);
    var nestedValues$3 = values$proxy2.m(2);
    var value$6 = nestedValues$3.m(0);
    ref$3.dv.setFloat32(tailOffset$7, Math.fround(value$6), true);
    var tailOffset$8 = ((4 + tailOffset$7) | 0);
    var value$7 = nestedValues$3.m(1);
    ref$3.dv.setFloat32(tailOffset$8, Math.fround(value$7), true);
    var tailOffset$9 = ((4 + tailOffset$8) | 0);
    var value$8 = nestedValues$3.m(2);
    ref$3.dv.setFloat32(tailOffset$9, Math.fround(value$8), true);
    var tailOffset$10 = ((4 + tailOffset$9) | 0);
    var value$9 = nestedValues$3.m(3);
    ref$3.dv.setFloat32(tailOffset$10, Math.fround(value$9), true);
    var tailOffset$12 = ((16 + tailOffset$7) | 0);
    var nestedValues$4 = values$proxy2.m(3);
    var value$10 = nestedValues$4.m(0);
    ref$3.dv.setFloat32(tailOffset$12, Math.fround(value$10), true);
    var tailOffset$13 = ((4 + tailOffset$12) | 0);
    var value$11 = nestedValues$4.m(1);
    ref$3.dv.setFloat32(tailOffset$13, Math.fround(value$11), true);
    var tailOffset$14 = ((4 + tailOffset$13) | 0);
    var value$12 = nestedValues$4.m(2);
    ref$3.dv.setFloat32(tailOffset$14, Math.fround(value$12), true);
    var tailOffset$16 = ((12 + tailOffset$12) | 0);
    var nestedValues$5 = values$proxy2.m(4);
    var value$13 = nestedValues$5.m(0);
    ref$3.dv.setFloat32(tailOffset$16, Math.fround(value$13), true);
    var tailOffset$17 = ((4 + tailOffset$16) | 0);
    var value$14 = nestedValues$5.m(1);
    ref$3.dv.setFloat32(tailOffset$17, Math.fround(value$14), true);
    var tailOffset$18 = ((4 + tailOffset$17) | 0);
    var value$15 = nestedValues$5.m(2);
    ref$3.dv.setFloat32(tailOffset$18, Math.fround(value$15), true);
  });
  var \u03b4proxy6 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  mesh$proxy2.qi();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy2.ai.length | 0))) {
    var n = (mesh$proxy2.ai[fi].length | 0);
    vertexCount = ((vertexCount + n) | 0);
    if ((n === 4)) {
      hasQuads = true;
    }
    fi = ((1 + fi) | 0);
  }
  var count$proxy3 = vertexCount;
  var buffer = new ArrayBuffer(Math.imul(60, count$proxy3));
  var verts = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), count$proxy3);
  var vi = 0;
  if ((!hasQuads)) {
    fi = 0;
    while ((fi < (mesh$proxy2.ai.length | 0))) {
      var arr = mesh$proxy2.ai[fi];
      var x$proxy27 = mesh$proxy2.c0[fi].g8;
      var si = 0;
      while ((si < (arr.length | 0))) {
        var x0 = arr[si];
        var index$proxy6 = vi;
        var offset$proxy29 = Math.imul(60, index$proxy6);
        var x2 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy29);
        f(x0, x$proxy27, x2);
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
    while ((fi < (mesh$proxy2.ai.length | 0))) {
      var arr$2 = mesh$proxy2.ai[fi];
      var n$2 = (arr$2.length | 0);
      var x$proxy28 = mesh$proxy2.c0[fi].g8;
      var si$2 = 0;
      while ((si$2 < n$2)) {
        var x0$1 = arr$2[si$2];
        var index$proxy7 = vi;
        var offset$proxy30 = Math.imul(60, index$proxy7);
        var x2$1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy30);
        f(x0$1, x$proxy28, x2$1);
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy6.lQ(idxBuf, vertexCount));
  }
  return p$6.lM($x_1, (void 0), (void 0), (void 0), (void 0), (void 0));
}
function $p_Lsketches_rooms_columns_Columns$package$__bakeAmbience$1__T4__Lsketchlib_utils_bake_TextureBaker__T__Ltrivalibs_graphics_painter_Form__I__I__Ltrivalibs_graphics_painter_Panel($thiz, ambienceClear$1, ambienceBaker$1, label, f, w, h) {
  $m_Lsketches_rooms_columns_Columns$package$().lG(label, w, h);
  return $m_Lsketchlib_utils_bake_Bake$package$().jC(ambienceBaker$1, f, w, h, (void 0), (void 0), true, $m_Ltrivalibs_graphics_math_cpu_Vec4$().lO().g(ambienceClear$1));
}
function $p_Lsketches_rooms_columns_Columns$package$__vertex$4__D__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__T2($thiz, margin$1, v, color) {
  return $ct_T2__O__O__(new $c_T2(), new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.l + margin$1), (v.k + margin$1), 0.0), color);
}
function $p_Lsketches_rooms_columns_Columns$package$__paintBay$1__Lsketches_rooms_columns_RoomPalette__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Lsketchlib_utils_room_Wall__T2($thiz, palette$1, p$7, paintShade$1, bay) {
  var pillarW = (bay.aB * $m_Ltrivalibs_utils_random_random$package$().lV($m_Lsketches_rooms_columns_Columns$package$().nb, $m_Lsketches_rooms_columns_Columns$package$().na));
  var pillarH = ($m_Lsketches_rooms_columns_Columns$package$().aP * $m_Ltrivalibs_utils_random_random$package$().lV($m_Lsketches_rooms_columns_Columns$package$().n9, $m_Lsketches_rooms_columns_Columns$package$().n8));
  var pillar = new $c_Lsketches_rooms_columns_PillarPainting(pillarW, pillarH, palette$1.u0());
  var margin = (pillarW * $m_Lsketches_rooms_columns_Pillars$package$().nn);
  var size = new $c_Ltrivalibs_graphics_math_cpu_Vec2((pillarW + (2.0 * margin)), (pillarH + (2.0 * margin)));
  var array = pillar.iY;
  var len = (array.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_1 = i;
    var x0 = array[i];
    var c$proxy2 = x0.iW;
    var rgb = $m_Ltrivalibs_graphics_lib_color_Color$kernel$().sR(c$proxy2.w, c$proxy2.A, c$proxy2.u, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0));
    res[$x_1] = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().hj($p_Lsketches_rooms_columns_Columns$package$__vertex$4__D__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__T2($thiz, margin, $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().r2(x0.hA), rgb), $p_Lsketches_rooms_columns_Columns$package$__vertex$4__D__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__T2($thiz, margin, $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().q6(x0.hA), rgb), $p_Lsketches_rooms_columns_Columns$package$__vertex$4__D__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__T2($thiz, margin, $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().q7(x0.hA), rgb), $p_Lsketches_rooms_columns_Columns$package$__vertex$4__D__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__T2($thiz, margin, $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().r5(x0.hA), rgb));
    i = ((1 + i) | 0);
  }
  var mesh$proxy3 = $m_Ltrivalibs_graphics_geometry_Mesh$().lA(res, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, ref$3) => {
    var values$proxy3 = vl.j9.bO(v$3);
    var baseOffset$proxy11 = (ref$3.off | 0);
    var nestedValues = values$proxy3.m(0);
    var value = nestedValues.m(0);
    ref$3.dv.setFloat32(baseOffset$proxy11, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy11) | 0);
    var value$2 = nestedValues.m(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.m(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy11) | 0);
    var nestedValues$2 = values$proxy3.m(1);
    var value$4 = nestedValues$2.m(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.m(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
    var tailOffset$6 = ((4 + tailOffset$5) | 0);
    var value$6 = nestedValues$2.m(2);
    ref$3.dv.setFloat32(tailOffset$6, Math.fround(value$6), true);
  });
  var \u03b4proxy10 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  var faces$proxy1 = mesh$proxy3.ai;
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (faces$proxy1.length | 0))) {
    var n = (faces$proxy1[fi].length | 0);
    vertexCount = ((vertexCount + n) | 0);
    if ((n === 4)) {
      hasQuads = true;
    }
    fi = ((1 + fi) | 0);
  }
  var count$proxy5 = vertexCount;
  var buffer = new ArrayBuffer(Math.imul(24, count$proxy5));
  var verts = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), count$proxy5);
  var vi = 0;
  if ((!hasQuads)) {
    fi = 0;
    while ((fi < (faces$proxy1.length | 0))) {
      var arr = faces$proxy1[fi];
      var si = 0;
      while ((si < (arr.length | 0))) {
        var x0$1 = arr[si];
        var index$proxy11 = vi;
        var offset$proxy40 = Math.imul(24, index$proxy11);
        var x1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy40);
        f(x0$1, x1);
        vi = ((1 + vi) | 0);
        si = ((1 + si) | 0);
      }
      fi = ((1 + fi) | 0);
    }
    var $x_2 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, null);
  } else {
    var idxBuf = [];
    var base = 0;
    fi = 0;
    while ((fi < (faces$proxy1.length | 0))) {
      var arr$2 = faces$proxy1[fi];
      var n$2 = (arr$2.length | 0);
      var si$2 = 0;
      while ((si$2 < n$2)) {
        var x0$2 = arr$2[si$2];
        var index$proxy12 = vi;
        var offset$proxy41 = Math.imul(24, index$proxy12);
        var x1$1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy41);
        f(x0$2, x1$1);
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
    var $x_2 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy10.lQ(idxBuf, vertexCount));
  }
  var paintForm = p$7.lM($x_2, (void 0), (void 0), (void 0), (void 0), (void 0));
  var px = $m_Lsketches_rooms_columns_Columns$package$().jW(size.l, size.k, $m_Lsketches_rooms_columns_Columns$package$().n5);
  $m_Lsketches_rooms_columns_Columns$package$().lG("painting", (px.a0() | 0), (px.a1() | 0));
  var width$2 = (px.a0() | 0);
  var height$2 = (px.a1() | 0);
  var clearColor$3 = $m_Ltrivalibs_graphics_math_cpu_Vec4$().lO().g(new $c_T4(0.0, 0.0, 0.0, 0.0));
  var blendState$1 = $m_Ltrivalibs_graphics_painter_BlendState$().oc;
  var Bindable_this = p$7.gu(paintForm, paintShade$1, (void 0), blendState$1);
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("size", size);
  var \u03b4scrutinee471 = e1$proxy1.s;
  var idx = (Bindable_this.Y.I.size | 0);
  var existing = ((idx < (Bindable_this.c7.length | 0)) ? Bindable_this.c7[idx] : null);
  var device$proxy1 = Bindable_this.jv.h;
  if ((existing !== null)) {
    existing.N.F(existing.o, \u03b4scrutinee471);
    var $x_6 = existing.M.queue;
    var $x_5 = existing.H;
    var s$proxy4 = existing.o;
    var $x_4 = s$proxy4.dv.buffer;
    $x_6.writeBuffer($x_5, 0.0, $x_4);
    var $x_3 = existing;
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$();
    var buffer$3 = new ArrayBuffer(8);
    var arr$proxy14 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy14.dv, 0), device$proxy1, uv);
    b.N.F(b.o, \u03b4scrutinee471);
    var $x_9 = b.M.queue;
    var $x_8 = b.H;
    var s$proxy5 = b.o;
    var $x_7 = s$proxy5.dv.buffer;
    $x_9.writeBuffer($x_8, 0.0, $x_7);
    var $x_3 = b;
  }
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, idx, $x_3);
  var panel = p$7.cd(width$2, height$2, clearColor$3, (void 0), true, (void 0), true, (void 0), (void 0), Bindable_this, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$7, panel);
  return $ct_T2__O__O__(new $c_T2(), panel, new $c_Ltrivalibs_graphics_math_cpu_Vec4(((0.5 * (bay.aB - pillarW)) - margin), ($m_Lsketches_rooms_columns_Columns$package$().n7 - margin), size.l, size.k));
}
function $p_Lsketches_rooms_columns_Columns$package$__isBay$1__Lsketches_rooms_columns_Face__Z($thiz, f) {
  return (f.aY.aB > (0.5 * $m_Lsketches_rooms_columns_Columns$package$().aX));
}
/** @constructor */
function $c_Lsketches_rooms_columns_Columns$package$() {
  this.aX = 0.0;
  this.iT = 0.0;
  this.fZ = 0.0;
  this.hz = 0.0;
  this.g1 = 0;
  this.g0 = 0;
  this.iU = 0.0;
  this.kf = 0.0;
  this.kc = 0.0;
  this.nh = 0.0;
  this.mN = 0.0;
  this.fY = 0.0;
  this.mK = 0.0;
  this.n0 = 0.0;
  this.nd = 0.0;
  this.g2 = 0;
  this.nj = 0.0;
  this.n3 = 0.0;
  this.n2 = 0.0;
  this.kd = 0.0;
  this.mG = 0.0;
  this.ke = 0.0;
  this.bT = null;
  this.ng = 0.0;
  this.mH = 0.0;
  this.ka = 0.0;
  this.k8 = 0.0;
  this.k7 = 0.0;
  this.k9 = 0.0;
  this.mO = 0.0;
  this.n6 = 0.0;
  this.ni = null;
  this.kg = null;
  this.nf = 0.0;
  this.mM = null;
  this.mI = null;
  this.mJ = 0.0;
  this.mR = null;
  this.gX = 0.0;
  this.kb = 0.0;
  this.mV = 0.0;
  this.mW = 0.0;
  this.ne = 0.0;
  this.mY = null;
  this.mX = null;
  this.mZ = 0.0;
  this.nb = 0.0;
  this.na = 0.0;
  this.n9 = 0.0;
  this.n8 = 0.0;
  this.n7 = 0.0;
  this.n4 = 0.0;
  this.n5 = 0.0;
  this.mS = 0.0;
  this.bU = 0.0;
  this.mU = 0.0;
  this.mT = 0.0;
  this.nc = 0.0;
  this.mL = 0.0;
  this.bF = 0.0;
  this.bs = 0.0;
  this.aD = 0.0;
  this.aP = 0.0;
  this.gW = 0.0;
  this.gV = 0.0;
  this.mQ = 0.0;
  this.mP = 0.0;
  this.n1 = 0.0;
  this.iV = 0.0;
  $n_Lsketches_rooms_columns_Columns$package$ = this;
  this.aX = 14.0;
  this.iT = 40.0;
  this.fZ = 2.0;
  this.hz = (3.4 * $m_Lsketches_rooms_columns_Columns$package$().fZ);
  this.g1 = 6;
  this.g0 = 3;
  this.iU = 1.7;
  this.kf = 0.5;
  this.kc = 0.1;
  this.nh = 4.0;
  this.mN = 0.75;
  this.fY = 16.0;
  this.mK = 16.0;
  this.n0 = 6.0;
  this.nd = 160.0;
  this.g2 = 8192;
  this.nj = 0.025;
  this.n3 = 0.04;
  this.n2 = 0.3;
  this.kd = 0.03;
  this.mG = 0.74;
  this.ke = 0.3;
  this.bT = new $c_T4(0.3, 0.6, 0.4, 0.2);
  this.ng = 0.25;
  this.mH = 0.06;
  this.ka = 0.15;
  this.k8 = 0.85;
  this.k7 = 0.05;
  this.k9 = 0.3;
  this.mO = 0.9;
  this.n6 = 2.07;
  this.ni = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.97, 0.97, 0.96);
  this.kg = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.88, 0.88, 0.87);
  this.nf = 4.0;
  this.mM = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.87, 0.87, 0.86);
  this.mI = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.99, 0.97);
  this.mJ = 0.7;
  this.mR = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.8, 0.78, 0.75);
  this.gX = 1.6;
  this.kb = 0.004;
  this.mV = 0.012;
  this.mW = 0.6;
  this.ne = 0.08;
  this.mY = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.72, 0.78, 0.86);
  this.mX = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.9, 1.82, 1.71);
  this.mZ = 0.03333333333333333;
  this.nb = 0.36;
  this.na = 0.46;
  this.n9 = 0.3333333333333333;
  this.n8 = 0.95;
  this.n7 = 0.4;
  this.n4 = 0.75;
  this.n5 = 48.0;
  this.mS = 0.01;
  this.bU = 1.0;
  this.mU = 512.0;
  this.mT = 0.16;
  this.nc = 0.25;
  this.mL = 0.0035;
  this.bF = ($m_Lsketches_rooms_columns_Columns$package$().g0 * $m_Lsketches_rooms_columns_Columns$package$().aX);
  this.bs = ($m_Lsketches_rooms_columns_Columns$package$().g1 * $m_Lsketches_rooms_columns_Columns$package$().aX);
  this.aD = (0.5 * $m_Lsketches_rooms_columns_Columns$package$().fZ);
  this.aP = ($m_Lsketches_rooms_columns_Columns$package$().iT - $m_Lsketches_rooms_columns_Columns$package$().hz);
  this.gW = ($m_Lsketches_rooms_columns_Columns$package$().iT + ($m_Lsketches_rooms_columns_Columns$package$().hz * $m_Lsketches_rooms_columns_Columns$package$().mN));
  var $x_2 = $m_Lsketches_rooms_columns_Columns$package$().gW;
  var $x_1 = $m_Lsketches_rooms_columns_Columns$package$().aP;
  var a = $m_Lsketches_rooms_columns_Columns$package$().bF;
  var b = $m_Lsketches_rooms_columns_Columns$package$().bs;
  this.gV = (1.05 * ((($x_2 - $x_1) * ((2.0 * (+Math.max(a, b))) - $m_Lsketches_rooms_columns_Columns$package$().kf)) / ($m_Lsketches_rooms_columns_Columns$package$().aP - $m_Lsketches_rooms_columns_Columns$package$().iU)));
  var spanX = (2.0 * ($m_Lsketches_rooms_columns_Columns$package$().bF + $m_Lsketches_rooms_columns_Columns$package$().gV));
  var spanZ = (2.0 * ($m_Lsketches_rooms_columns_Columns$package$().bs + $m_Lsketches_rooms_columns_Columns$package$().gV));
  var p$proxy3 = (((spanX * spanX) + (spanZ * spanZ)) + ($m_Lsketches_rooms_columns_Columns$package$().gW * $m_Lsketches_rooms_columns_Columns$package$().gW));
  this.mQ = (+Math.sqrt(p$proxy3));
  this.mP = (5.9604644775390625E-8 * (((20.0 * $m_Lsketches_rooms_columns_Columns$package$().aP) * $m_Lsketches_rooms_columns_Columns$package$().aP) / $m_Lsketches_rooms_columns_Columns$package$().kc));
  this.n1 = ($m_Lsketches_rooms_columns_Columns$package$().g2 / $m_Lsketches_rooms_columns_Columns$package$().fY);
  var a$1 = ($m_Lsketches_rooms_columns_Columns$package$().bU / $m_Lsketches_rooms_columns_Columns$package$().mS);
  var $x_3 = $m_RTLong$().jI((+Math.round(a$1)));
  var x_$_lo = $x_3.l;
  var x_$_hi = $x_3.h;
  var p$proxy4 = ((4.294967296E9 * x_$_hi) + (x_$_lo >>> 0.0));
  this.iV = (+Math.max(p$proxy4, 1.0));
}
$p = $c_Lsketches_rooms_columns_Columns$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_columns_Columns$package$;
/** @constructor */
function $h_Lsketches_rooms_columns_Columns$package$() {
}
$h_Lsketches_rooms_columns_Columns$package$.prototype = $p;
$p.tZ = (function() {
  var points = [];
  $p_Lsketches_rooms_columns_Columns$package$__side$1__sjs_js_Array__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__I__V(this, points, new $c_Ltrivalibs_graphics_math_cpu_Vec2((-$m_Lsketches_rooms_columns_Columns$package$().bF), (-$m_Lsketches_rooms_columns_Columns$package$().bs)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0), new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0), $m_Lsketches_rooms_columns_Columns$package$().g0);
  $p_Lsketches_rooms_columns_Columns$package$__side$1__sjs_js_Array__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__I__V(this, points, new $c_Ltrivalibs_graphics_math_cpu_Vec2($m_Lsketches_rooms_columns_Columns$package$().bF, (-$m_Lsketches_rooms_columns_Columns$package$().bs)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0), new $c_Ltrivalibs_graphics_math_cpu_Vec2((-1.0), 0.0), $m_Lsketches_rooms_columns_Columns$package$().g1);
  $p_Lsketches_rooms_columns_Columns$package$__side$1__sjs_js_Array__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__I__V(this, points, new $c_Ltrivalibs_graphics_math_cpu_Vec2($m_Lsketches_rooms_columns_Columns$package$().bF, $m_Lsketches_rooms_columns_Columns$package$().bs), new $c_Ltrivalibs_graphics_math_cpu_Vec2((-1.0), 0.0), new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, (-1.0)), $m_Lsketches_rooms_columns_Columns$package$().g0);
  $p_Lsketches_rooms_columns_Columns$package$__side$1__sjs_js_Array__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__I__V(this, points, new $c_Ltrivalibs_graphics_math_cpu_Vec2((-$m_Lsketches_rooms_columns_Columns$package$().bF), $m_Lsketches_rooms_columns_Columns$package$().bs), new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, (-1.0)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0), $m_Lsketches_rooms_columns_Columns$package$().g1);
  return new $c_Lsketchlib_utils_room_Ring(points, 1.0, $m_Lsketches_rooms_columns_Columns$package$().aP);
});
$p.sC = (function() {
  var ixMax = (($m_Lsketches_rooms_columns_Columns$package$().g0 - 1) | 0);
  var izMax = (($m_Lsketches_rooms_columns_Columns$package$().g1 - 1) | 0);
  var rings = [];
  var x = ((-ixMax) | 0);
  if ((!(x > ixMax))) {
    var i = x;
    while (true) {
      var x0 = i;
      var this$17 = new $c_sc_IterableOps$WithFilter(new $c_sci_Range$Inclusive(((-izMax) | 0), izMax, 1), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x0, ixMax, izMax) => ((iz$3) => {
        var iz$2 = (iz$3 | 0);
        var sign = (x0 >> 31);
        if (((((x0 ^ sign) - sign) | 0) === ixMax)) {
          return true;
        } else {
          var sign$1 = (iz$2 >> 31);
          return ((((iz$2 ^ sign$1) - sign$1) | 0) === izMax);
        }
      }))(x0, ixMax, izMax)));
      var f = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((rings, x0) => ((iz$3$1) => {
        var iz$2$1 = (iz$3$1 | 0);
        return (rings.push($m_Lsketchlib_utils_room_Ring$().ug(new $c_Ltrivalibs_graphics_math_cpu_Vec2((x0 * $m_Lsketches_rooms_columns_Columns$package$().aX), (iz$2$1 * $m_Lsketches_rooms_columns_Columns$package$().aX)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0), $m_Lsketches_rooms_columns_Columns$package$().fZ, $m_Lsketches_rooms_columns_Columns$package$().fZ, (-1.0), $m_Lsketches_rooms_columns_Columns$package$().aP)) | 0);
      }))(rings, x0));
      this$17.sz().bz(f);
      if ((i === ixMax)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  return rings;
});
$p.rS = (function() {
  var hx = ($m_Lsketches_rooms_columns_Columns$package$().bF + $m_Lsketches_rooms_columns_Columns$package$().aD);
  var hz = ($m_Lsketches_rooms_columns_Columns$package$().bs + $m_Lsketches_rooms_columns_Columns$package$().aD);
  return $m_Lsketchlib_utils_room_Boundary$().q4(new $c_Lsketchlib_utils_room_Ring([new $c_Ltrivalibs_graphics_math_cpu_Vec2((-hx), (-hz)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(hx, (-hz)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(hx, hz), new $c_Ltrivalibs_graphics_math_cpu_Vec2((-hx), hz)], 1.0, $m_Lsketches_rooms_columns_Columns$package$().iT));
});
$p.rT = (function(clip) {
  var families = [new $c_Lsketchlib_utils_room_BeamFamily(new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0), $m_Lsketches_rooms_columns_Columns$package$().aX, 0.0, $m_Lsketches_rooms_columns_Columns$package$().fZ), new $c_Lsketchlib_utils_room_BeamFamily(new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0), $m_Lsketches_rooms_columns_Columns$package$().aX, 0.0, $m_Lsketches_rooms_columns_Columns$package$().fZ)];
  var balks = [];
  var end = (families.length | 0);
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var soffit = ($m_Lsketches_rooms_columns_Columns$package$().aP - (x0 * $m_Lsketches_rooms_columns_Columns$package$().mP));
      var array = $m_Lsketchlib_utils_room_Raster$package$().su(families[x0], clip, $m_Lsketches_rooms_columns_Columns$package$().hz, soffit);
      var len = (array.length | 0);
      var i$1 = 0;
      while ((i$1 < len)) {
        var x0$1 = array[i$1];
        (balks.push(x0$1) | 0);
        i$1 = ((1 + i$1) | 0);
      }
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  return balks;
});
$p.qS = (function(r) {
  var bnd = $m_Lsketchlib_utils_room_Boundary$().q4(r);
  var edges = bnd.g5;
  var walls = $m_Lsketchlib_utils_room_Walls$package$().v9(bnd, $m_Lsketches_rooms_columns_Columns$package$().aP);
  var faces = [];
  var end = (edges.length | 0);
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var e = edges[x0];
      var nextArris = edges[((((1 + x0) | 0) % $checkIntDivisor((edges.length | 0))) | 0)].bY;
      var wall = walls[x0];
      var right = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), wall.bZ);
      var leftIsA = (((right.w * (e.aA.l - e.a4.l)) + (right.u * (e.aA.k - e.a4.k))) > 0.0);
      (faces.push(new $c_Lsketches_rooms_columns_Face(wall, (leftIsA ? e.bY : nextArris), (leftIsA ? nextArris : e.bY))) | 0);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  return faces;
});
$p.r4 = (function(faces) {
  var elem = 0.0;
  elem = 0.0;
  var len = (faces.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = faces[i];
    elem = (elem + x0.aY.aB);
    i = ((1 + i) | 0);
  }
  return elem;
});
$p.uO = (function(faces) {
  var strips = [];
  var elem = [];
  var elem$1 = null;
  elem$1 = elem;
  var elem$2 = 0.0;
  elem$2 = 0.0;
  var len = (faces.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = faces[i];
    if ((((elem$2 + x0.aY.aB) > $m_Lsketches_rooms_columns_Columns$package$().n1) && ((elem$1.length | 0) > 0))) {
      strips.push(elem$1);
      elem$1 = [];
      elem$2 = 0.0;
    }
    elem$1.push(x0);
    elem$2 = (elem$2 + x0.aY.aB);
    i = ((1 + i) | 0);
  }
  if (((elem$1.length | 0) > 0)) {
    strips.push(elem$1);
  }
  return strips;
});
$p.qZ = (function(faces, vertex) {
  var total = $m_Lsketches_rooms_columns_Columns$package$().r4(faces);
  var quads = [];
  var elem = 0.0;
  elem = 0.0;
  var len = (faces.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = faces[i];
    var w = x0.aY;
    var right = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), w.bZ);
    var u0 = elem;
    quads.push($m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().hj($p_Lsketches_rooms_columns_Columns$package$__corner$4__Lsketchlib_utils_room_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__F4__Lsketches_rooms_columns_Face__D__Z__O(this, w, right, u0, total, vertex, x0, 0.0, true), $p_Lsketches_rooms_columns_Columns$package$__corner$4__Lsketchlib_utils_room_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__F4__Lsketches_rooms_columns_Face__D__Z__O(this, w, right, u0, total, vertex, x0, 0.0, false), $p_Lsketches_rooms_columns_Columns$package$__corner$4__Lsketchlib_utils_room_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__F4__Lsketches_rooms_columns_Face__D__Z__O(this, w, right, u0, total, vertex, x0, w.aB, false), $p_Lsketches_rooms_columns_Columns$package$__corner$4__Lsketchlib_utils_room_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__F4__Lsketches_rooms_columns_Face__D__Z__O(this, w, right, u0, total, vertex, x0, w.aB, true)));
    elem = (elem + w.aB);
    i = ((1 + i) | 0);
  }
  return quads;
});
$p.rR = (function(pos, uv, f, fromLeft) {
  return $ct_T2__O__O__(new $c_T2(), pos, uv);
});
$p.um = (function(pos, uv, f, fromLeft) {
  return new $c_T4(pos, uv, new $c_Ltrivalibs_graphics_math_cpu_Vec4(fromLeft, f.aY.aB, (f.gY ? 1.0 : 0.0), (f.gZ ? 1.0 : 0.0)), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), f.aY.bZ));
});
$p.jW = (function(widthM, heightM, scale) {
  var a = (widthM * scale);
  var p$proxy5 = $doubleToInt((+Math.ceil(a)));
  var _1 = ((p$proxy5 > 1) ? p$proxy5 : 1);
  var a$1 = (heightM * scale);
  var p$proxy6 = $doubleToInt((+Math.ceil(a$1)));
  return $ct_T2__O__O__(new $c_T2(), _1, ((p$proxy6 > 1) ? p$proxy6 : 1));
});
$p.lG = (function(label, w, h) {
  if (((w > $m_Lsketches_rooms_columns_Columns$package$().g2) || (h > $m_Lsketches_rooms_columns_Columns$package$().g2))) {
    console.warn(((((((("columns: " + label) + " texture ") + w) + "\u00d7") + h) + " exceeds ") + $m_Lsketches_rooms_columns_Columns$package$().g2));
  }
});
$p.rd = (function(wp) {
  return $m_Ltrivalibs_graphics_math_gpu_vec3$().ad($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bx($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().a9(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().W(wp), $m_Lsketches_rooms_columns_Columns$package$().kd)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().W(wp), $m_Lsketches_rooms_columns_Columns$package$().n2), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bx($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().gx(wp), 0.8), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().W(wp), $m_Lsketches_rooms_columns_Columns$package$().kd)));
});
$p.vb = (function(wp) {
  return $m_Ltrivalibs_graphics_shader_lib_noise_Simplex$().ip($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().go($m_Lsketches_rooms_columns_Columns$package$().rd(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().nj), ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "5")), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(3.0), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(0.3), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(120.0));
});
$p.tV = (function(wp, normal) {
  return $m_Ltrivalibs_graphics_shader_lib_noise_Simplex$().ip($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().go($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().sb($m_Lsketches_rooms_columns_Columns$package$().rd(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), normal), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().n3), ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "3")), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(2.1), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(0.25), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(70.0));
});
$p.q2 = (function(world, orient, edge) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gt($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().mG), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lL($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jA($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bx(world, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(orient, $m_Lsketches_rooms_columns_Columns$package$().ke), edge)), (1.0 + $m_Lsketches_rooms_columns_Columns$package$().ke))));
});
$p.sa = (function(xz) {
  return $m_Ltrivalibs_graphics_shader_lib_noise_Simplex$().ip($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().go($m_Ltrivalibs_graphics_math_gpu_vec3$().ad($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a9(xz), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().W(xz)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().mO), ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "3")), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(2.0), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(0.5), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(41.0));
});
$p.tY = (function(xz) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lL($m_Ltrivalibs_graphics_shader_lib_noise_Simplex$().ip($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().go($m_Ltrivalibs_graphics_math_gpu_vec3$().ad($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a9(xz), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().W(xz)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().n6), ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "3")), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(2.0), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(0.5), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(9.0)));
});
$p.qX = (function(dist, isArris, neighborFacing) {
  var arrisRadius = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ba(neighborFacing, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().ng)), (+$m_Lsketches_rooms_columns_Columns$package$().bT.aV));
  var radius = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().lw($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().c9(arrisRadius, (+$m_Lsketches_rooms_columns_Columns$package$().bT.aU)), isArris), (+$m_Lsketches_rooms_columns_Columns$package$().bT.aU));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ba(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jN(radius, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.001)));
});
$p.ra = (function(wp, info, tangent, toEye) {
  var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b1($m_Lsketches_rooms_columns_Columns$package$().qX($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().a9(info), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().gx(info), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().im(toEye, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().go(tangent, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), (-1.0)))), $m_Lsketches_rooms_columns_Columns$package$().qX($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ii($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().W(info), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().a9(info)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().cg(info), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().im(toEye, tangent))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ba($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().W(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g((+$m_Lsketches_rooms_columns_Columns$package$().bT.aM))));
  var $x_1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
  var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().W(wp);
  var L$proxy1 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aT();
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $x_3.b1($x_2, $x_1.ba(L$proxy1.aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae($m_Lsketches_rooms_columns_Columns$package$().aP)) + " - ") + e$proxy1.f) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g((+$m_Lsketches_rooms_columns_Columns$package$().bT.aN))));
});
$p.rb = (function(amb, edge, y) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gt($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().W(amb), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().a9(amb), edge), ($m_Lsketches_rooms_columns_Columns$package$(), $m_Lsketchlib_shaders_room_Grime$package$().qo(y, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().qk($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().gx(amb)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().cg(amb), $m_Lsketches_rooms_columns_Columns$package$().ka, $m_Lsketches_rooms_columns_Columns$package$().k8, $m_Lsketches_rooms_columns_Columns$package$().k7, $m_Lsketches_rooms_columns_Columns$package$().k9)));
});
$p.rc = (function(y) {
  var $x_5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
  var $x_4 = $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().iO($m_Lsketches_rooms_columns_Columns$package$().ni);
  var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
  var $x_2 = $m_Lsketches_rooms_columns_Columns$package$().kg;
  var $x_1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
  var L$proxy3 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aT();
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $x_5.jL($x_4, $x_3, $x_2, $x_1.ba(L$proxy3.aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae($m_Lsketches_rooms_columns_Columns$package$().aP)) + " - ") + y.f) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().nf), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0)));
});
$p.r8 = (function(v) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().r0(v, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().sB(v, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$()));
});
$p.t1 = (function(p) {
  var node = $m_Lsketches_rooms_columns_Columns$package$().r8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().ru($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().lv(p, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Lsketches_rooms_columns_Columns$package$().aX), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), 0.5));
  var q = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().rt($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().rx($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().r0(p, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().rv(node, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Lsketches_rooms_columns_Columns$package$().aX)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$()), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Lsketches_rooms_columns_Columns$package$().aD);
  var boxDist = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().t3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().tD(q, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_vec2$().a7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0))));
  var hasColumn = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ba($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ij($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a9(node)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(($m_Lsketches_rooms_columns_Columns$package$().g0 - 1.6)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(($m_Lsketches_rooms_columns_Columns$package$().g0 - 1.4))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ba($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ij($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().W(node)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(($m_Lsketches_rooms_columns_Columns$package$().g1 - 1.6)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(($m_Lsketches_rooms_columns_Columns$package$().g1 - 1.4))));
  var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
  var e$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ij($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a9(p));
  var L$proxy5 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aT();
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  var $x_1 = L$proxy5.aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae($m_Lsketches_rooms_columns_Columns$package$().bF)) + " - ") + e$proxy2.f) + ")"));
  var e$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ij($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().W(p));
  var L$proxy7 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aT();
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  var wallDist = $x_2.lR($x_1, L$proxy7.aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae($m_Lsketches_rooms_columns_Columns$package$().bs)) + " - ") + e$proxy3.f) + ")")));
  var $x_5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
  var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  var L$proxy9 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aT();
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $x_5.lR($x_4.bx(boxDist, $x_3.S(L$proxy9.aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(1.0)) + " - ") + hasColumn.f) + ")")), 1000.0)), wallDist);
});
$p.s5 = (function(cell) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ql($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().uC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().sl(cell, new $c_Ltrivalibs_graphics_math_cpu_Vec2(12.9898, 78.233))), 43758.5453));
});
$p.ur = (function(canvas) {
  $m_Ltrivalibs_graphics_painter_Painter$().sT(canvas, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$5) => {
    var sampler = p$5.jT();
    var tileSampler = p$5.qU("linear", "linear", "linear", "repeat", (void 0), (void 0));
    var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, $m_Lsketches_rooms_columns_Columns$package$().iU, ($m_Lsketches_rooms_columns_Columns$package$().bs - (0.5 * $m_Lsketches_rooms_columns_Columns$package$().aX)));
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().rE(0.9, 1.0, $m_Lsketches_rooms_columns_Columns$package$().kc, $m_Lsketches_rooms_columns_Columns$package$().mQ, 0.0, 0.0, pos$1);
    $m_Ltrivalibs_dev_devPreserve$().rL(cam, "camera");
    var outerRing = $m_Lsketches_rooms_columns_Columns$package$().tZ();
    var columnRings = $m_Lsketches_rooms_columns_Columns$package$().sC();
    var rings = [outerRing];
    $m_sjs_js_ArrayOps$().B(columnRings, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((r$2) => (rings.push(r$2) | 0))));
    var footprint = new $c_Lsketchlib_utils_room_Footprint(rings);
    var floorBnd = $m_Lsketchlib_utils_room_Boundary$().rI(footprint.g6);
    var bounds = $m_Lsketchlib_utils_room_Plan$package$().rX(footprint);
    var clip = $m_Lsketches_rooms_columns_Columns$package$().rS();
    var atlas = new $c_Lsketchlib_utils_room_BeamAtlas($m_Lsketches_rooms_columns_Columns$package$().rT(clip), clip);
    var wallStrips = $m_Lsketches_rooms_columns_Columns$package$().uO($m_Lsketches_rooms_columns_Columns$package$().qS(outerRing));
    $m_sjs_js_ArrayOps$().B(columnRings, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((r$2$1) => (wallStrips.push($m_Lsketches_rooms_columns_Columns$package$().qS(r$2$1)) | 0))));
    var lightForm = $p_Lsketches_rooms_columns_Columns$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$5, [$m_Lsketchlib_utils_room_Surfaces$package$().jQ(bounds, $m_Lsketches_rooms_columns_Columns$package$().gW, true, $m_Lsketches_rooms_columns_Columns$package$().gV)]);
    var balkForm = $p_Lsketches_rooms_columns_Columns$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$5, atlas.nL);
    var frag$proxy1 = new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((wp$2, normal$2, _$1$2, out$2) => {
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var world = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("world");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var orient = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("orient");
      var $x_4 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_3 = $m_sjsr_package$();
      var $x_2 = world.P($m_Lsketches_rooms_columns_Columns$package$().vb(wp$2));
      var $x_1 = orient.P($m_Lsketches_rooms_columns_Columns$package$().tV(wp$2, normal$2));
      var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_vec4$().jD($m_Lsketches_rooms_columns_Columns$package$().q2(world, orient, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0)), $m_Lsketches_rooms_columns_Columns$package$().q2(world, orient, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().lw($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Lsketches_rooms_columns_Columns$package$().sa($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jY(wp$2)), 0.5), 0.5), $m_Lsketches_rooms_columns_Columns$package$().tY($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jY(wp$2)));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_4.ax(new $c_sjsr_WrappedVarArgs($x_3.d(new ($d_T.r().C)([$x_2, $x_1, (((("  " + out$2.y) + " = ") + value$proxy1.f) + ";")]))));
    }));
    var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3);
      var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => frag$proxy1.jB(ctx$2.J.i("worldPos"), ctx$2.J.i("normal"), ctx$2.J.i("uv"), ctx$2.ar.G("color"))));
      var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg;
      try {
        var $x_5 = body$proxy1.g(ctx);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev;
      }
      program$3.ac = $x_5;
      $m_sjs_js_ArrayOps$().B(reg.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$17) => ((data$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$17, data$3);
      }))(program$3)));
    }));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy1.g(program);
    var b = program.as;
    var b$1 = program.ac;
    var helperFns$proxy1 = program.au();
    var id = p$5.q;
    p$5.q = ((1 + p$5.q) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().a(["model"], []);
    var dict = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i = 0;
    while ((i < (names.length | 0))) {
      dict[names[i]] = i;
      i = ((1 + i) | 0);
    }
    var names$2 = [];
    var dict$2 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$2 = 0;
    while ((i$2 < (names$2.length | 0))) {
      dict$2[names$2[i$2]] = i$2;
      i$2 = ((1 + i$2) | 0);
    }
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy1);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).b8.t()], []));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.ab, sd.aa, fragBuiltinParams);
    console.log(baseWgsl);
    var module = p$5.h.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", baseWgsl)])))));
    var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var attributes = [];
    var i$3 = 0;
    while ((i$3 < (formats.length | 0))) {
      attributes.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$3), $ct_T2__O__O__(new $c_T2(), "offset", (offsets[i$3] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats[i$3])])))));
      i$3 = ((1 + i$3) | 0);
    }
    var vbl = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride), $ct_T2__O__O__(new $c_T2(), "attributes", attributes)]))));
    var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])], []);
    var result = [];
    $m_sjs_js_ArrayOps$().B(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$1) => ((entries$2) => (result.push(Painter_this$1.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2)])))))) | 0)))(p$5)));
    var x5 = $ct_T2__O__O__(new $c_T2(), result, $m_Ltrivalibs_graphics_shader_layouts$().K(p$5.h, result));
    var \u03b42$ = x5;
    var bgls$2 = \u03b42$.ao;
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().K(p$5.h, bgls$2);
    var ambienceBaker = new $c_Lsketchlib_utils_bake_TextureBaker(p$5, new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], null, pl, false, dict, dict$2));
    var ambienceClear = new $c_T4(0.87, 0.87, 0.5, 0.5);
    var x8 = atlas.uW($m_Lsketches_rooms_columns_Columns$package$().fY, $m_Lsketches_rooms_columns_Columns$package$().mK);
    (x8.a0() | 0);
    (x8.a1() | 0);
    var \u03b42$$2 = x8;
    var bw$2 = (\u03b42$$2.a0() | 0);
    var bh$2 = (\u03b42$$2.a1() | 0);
    var balkTex = $p_Lsketches_rooms_columns_Columns$package$__bakeAmbience$1__T4__Lsketchlib_utils_bake_TextureBaker__T__Ltrivalibs_graphics_painter_Form__I__I__Ltrivalibs_graphics_painter_Panel(this, ambienceClear, ambienceBaker, "balk atlas", balkForm, bw$2, bh$2);
    var lightSize = $m_Lsketches_rooms_columns_Columns$package$().jW((((+bounds.aU) - (+bounds.aM)) + (2.0 * $m_Lsketches_rooms_columns_Columns$package$().gV)), (((+bounds.aV) - (+bounds.aN)) + (2.0 * $m_Lsketches_rooms_columns_Columns$package$().gV)), $m_Lsketches_rooms_columns_Columns$package$().n0);
    $m_Lsketches_rooms_columns_Columns$package$().lG("light", (lightSize.a0() | 0), (lightSize.a1() | 0));
    var width$1 = (lightSize.a0() | 0);
    var height$1 = (lightSize.a1() | 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var transform$2 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var mips$2 = true;
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var clearColor$2 = (void 0);
    var frag$proxy2 = new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((wp$2$1, _$2$2, _$3$2, color$2) => {
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var level = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("level");
      var $x_8 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_7 = $m_sjsr_package$();
      var $x_6 = level.P($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ba($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lL($m_Ltrivalibs_graphics_shader_lib_noise_Simplex$().ip($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().go($m_Ltrivalibs_graphics_math_gpu_vec3$().ad($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().a9(wp$2$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().gx(wp$2$1)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().mZ), ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "3")), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(2.0), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(0.5), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(17.0))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.3), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.7)));
      var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_vec4$().a7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jL($m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().iO($m_Lsketches_rooms_columns_Columns$package$().mY), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().mX, level), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_8.ax(new $c_sjsr_WrappedVarArgs($x_7.d(new ($d_T.r().C)([$x_6, (((("  " + color$2.y) + " = ") + value$proxy3.f) + ";")]))));
    }));
    var $x_10 = $m_Lsketchlib_utils_bake_Bake$package$();
    var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3$1);
      var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => frag$proxy2.jB(ctx$2$1.J.i("worldPos"), ctx$2$1.J.i("normal"), ctx$2$1.J.i("uv"), ctx$2$1.ar.G("color"))));
      var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$1;
      try {
        var $x_9 = body$proxy3.g(ctx$1);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$1;
      }
      program$3$1.ac = $x_9;
      $m_sjs_js_ArrayOps$().B(reg$1.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$18) => ((data$3$1) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$18, data$3$1);
      }))(program$3$1)));
    }));
    var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy2.g(program$2);
    var b$2 = program$2.as;
    var b$3 = program$2.ac;
    var helperFns$proxy2 = program$2.au();
    var id$2 = p$5.q;
    p$5.q = ((1 + p$5.q) | 0);
    var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["model"], []);
    var dict$3 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$4 = 0;
    while ((i$4 < (names$4.length | 0))) {
      dict$3[names$4[i$4]] = i$4;
      i$4 = ((1 + i$4) | 0);
    }
    var names$5 = [];
    var dict$4 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$5 = 0;
    while ((i$5 < (names$5.length | 0))) {
      dict$4[names$5[i$5]] = i$5;
      i$5 = ((1 + i$5) | 0);
    }
    var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$2, b$3, helperFns$proxy2);
    var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).b8.t()], []));
    var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.ab, sd$2.aa, fragBuiltinParams$2);
    console.log(baseWgsl$2);
    var module$2 = p$5.h.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", baseWgsl$2)])))));
    var formats$2 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes$2 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var stride$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var attributes$2 = [];
    var i$6 = 0;
    while ((i$6 < (formats$2.length | 0))) {
      attributes$2.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$6), $ct_T2__O__O__(new $c_T2(), "offset", (offsets$2[i$6] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats$2[i$6])])))));
      i$6 = ((1 + i$6) | 0);
    }
    var vbl$2 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride$2), $ct_T2__O__O__(new $c_T2(), "attributes", attributes$2)]))));
    var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])], []);
    var result$2 = [];
    $m_sjs_js_ArrayOps$().B(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$2) => ((entries$2$1) => (result$2.push(Painter_this$2.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$1)])))))) | 0)))(p$5)));
    var x11 = $ct_T2__O__O__(new $c_T2(), result$2, $m_Ltrivalibs_graphics_shader_layouts$().K(p$5.h, result$2));
    var \u03b42$$3 = x11;
    var bgls$4 = \u03b42$$3.ao;
    var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().K(p$5.h, bgls$4);
    var lightTex = $x_10.jC(new $c_Lsketchlib_utils_bake_TextureBaker(p$5, new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, vbl$2, bgls$4[0], null, pl$2, false, dict$3, dict$4)), lightForm, width$1, height$1, transform$2, "rgba16float", mips$2, clearColor$2);
    var x$proxy45 = new $c_T4(0.0, 0.0, $m_Lsketches_rooms_columns_Columns$package$().gX, $m_Lsketches_rooms_columns_Columns$package$().gX);
    var slabForm = $p_Lsketches_rooms_columns_Columns$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$5, [$m_Lsketchlib_utils_room_Surfaces$package$().jQ(x$proxy45, 0.0, false, 0.0)]);
    var a = ($m_Lsketches_rooms_columns_Columns$package$().gX * $m_Lsketches_rooms_columns_Columns$package$().nd);
    var slabPx = $doubleToInt((+Math.ceil(a)));
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var transform$proxy1 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var format$proxy1 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var mips$proxy1 = true;
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var clearColor$proxy1 = (void 0);
    var frag$proxy3 = new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((_$4$2, _$5$2, uv$2) => {
      var $x_12 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
      var $x_11 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$();
      var L$proxy11 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().sK();
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var fromJoint = $x_12.tF(uv$2, $x_11, L$proxy11.aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(1.0)) + " - ") + uv$2.f) + ")")));
      var d = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a9(fromJoint), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().W(fromJoint)), $m_Lsketches_rooms_columns_Columns$package$().gX);
      var v$1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gt($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().mW), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ba(d, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().kb), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(($m_Lsketches_rooms_columns_Columns$package$().kb + $m_Lsketches_rooms_columns_Columns$package$().mV))));
      return $m_Ltrivalibs_graphics_math_gpu_vec4$().jD(v$1, v$1, v$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0));
    }));
    var $x_16 = $m_Lsketchlib_utils_bake_Bake$package$();
    var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3$2);
      var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
        var $x_14 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_13 = $m_sjsr_package$();
        var AssignTarget_this = ctx$2$2.ar.G("color");
        var value$proxy5 = frag$proxy3.lz(ctx$2$2.J.i("worldPos"), ctx$2$2.J.i("normal"), ctx$2$2.J.i("uv"));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_14.ax(new $c_sjsr_WrappedVarArgs($x_13.d(new ($d_T.r().C)([(((("  " + AssignTarget_this.y) + " = ") + value$proxy5.f) + ";")]))));
      }));
      var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$2;
      try {
        var $x_15 = body$proxy5.g(ctx$3);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$2;
      }
      program$3$2.ac = $x_15;
      $m_sjs_js_ArrayOps$().B(reg$2.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$19) => ((data$3$2) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$19, data$3$2);
      }))(program$3$2)));
    }));
    var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy3.g(program$3$3);
    var b$5 = program$3$3.as;
    var b$6 = program$3$3.ac;
    var helperFns$proxy3 = program$3$3.au();
    var id$3 = p$5.q;
    p$5.q = ((1 + p$5.q) | 0);
    var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["model"], []);
    var dict$5 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$7 = 0;
    while ((i$7 < (names$7.length | 0))) {
      dict$5[names$7[i$7]] = i$7;
      i$7 = ((1 + i$7) | 0);
    }
    var names$8 = [];
    var dict$6 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$8 = 0;
    while ((i$8 < (names$8.length | 0))) {
      dict$6[names$8[i$8]] = i$8;
      i$8 = ((1 + i$8) | 0);
    }
    var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$5, b$6, helperFns$proxy3);
    var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).b8.t()], []));
    var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.ab, sd$3.aa, fragBuiltinParams$3);
    console.log(baseWgsl$3);
    var module$3 = p$5.h.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", baseWgsl$3)])))));
    var formats$3 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes$3 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets$3 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$3);
    var stride$3 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$3);
    var attributes$3 = [];
    var i$9 = 0;
    while ((i$9 < (formats$3.length | 0))) {
      attributes$3.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$9), $ct_T2__O__O__(new $c_T2(), "offset", (offsets$3[i$9] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats$3[i$9])])))));
      i$9 = ((1 + i$9) | 0);
    }
    var vbl$3 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride$3), $ct_T2__O__O__(new $c_T2(), "attributes", attributes$3)]))));
    var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])], []);
    var result$3 = [];
    $m_sjs_js_ArrayOps$().B(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$3) => ((entries$2$2) => (result$3.push(Painter_this$3.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$2)])))))) | 0)))(p$5)));
    var x14 = $ct_T2__O__O__(new $c_T2(), result$3, $m_Ltrivalibs_graphics_shader_layouts$().K(p$5.h, result$3));
    var \u03b42$$4 = x14;
    var bgls$6 = \u03b42$$4.ao;
    var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().K(p$5.h, bgls$6);
    var slabTex = $x_16.jC(new $c_Lsketchlib_utils_bake_TextureBaker(p$5, new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, vbl$3, bgls$6[0], null, pl$3, false, dict$5, dict$6)), slabForm, slabPx, slabPx, transform$proxy1, format$proxy1, mips$proxy1, clearColor$proxy1);
    var x$proxy46 = new $c_T4(0.0, 0.0, $m_Lsketches_rooms_columns_Columns$package$().bU, $m_Lsketches_rooms_columns_Columns$package$().bU);
    var grainForm = $p_Lsketches_rooms_columns_Columns$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$5, [$m_Lsketchlib_utils_room_Surfaces$package$().jQ(x$proxy46, 0.0, false, 0.0)]);
    var a$2 = ($m_Lsketches_rooms_columns_Columns$package$().bU * $m_Lsketches_rooms_columns_Columns$package$().mU);
    var grainPx = $doubleToInt((+Math.ceil(a$2)));
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var transform$proxy2 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var format$proxy2 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var mips$proxy2 = true;
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var clearColor$proxy2 = (void 0);
    var frag$proxy4 = new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((_$6$2, _$7$2, uv$2$1) => $m_Ltrivalibs_graphics_math_gpu_vec4$().jD($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().lw($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_shader_lib_noise_Extended$().sx($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().go($m_Ltrivalibs_graphics_math_gpu_vec3$().ad($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a9(uv$2$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().W(uv$2$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().iV), ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "1")), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(2.0), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(0.5), $m_Ltrivalibs_graphics_math_gpu_vec3$().ad($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().iV), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().iV), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0)), null, $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(5.0)), 0.5), 0.5), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0))));
    var $x_20 = $m_Lsketchlib_utils_bake_Bake$package$();
    var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3$4);
      var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
        var $x_18 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_17 = $m_sjsr_package$();
        var AssignTarget_this$1 = ctx$2$3.ar.G("color");
        var value$proxy7 = frag$proxy4.lz(ctx$2$3.J.i("worldPos"), ctx$2$3.J.i("normal"), ctx$2$3.J.i("uv"));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_18.ax(new $c_sjsr_WrappedVarArgs($x_17.d(new ($d_T.r().C)([(((("  " + AssignTarget_this$1.y) + " = ") + value$proxy7.f) + ";")]))));
      }));
      var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$3;
      try {
        var $x_19 = body$proxy7.g(ctx$4);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$3;
      }
      program$3$4.ac = $x_19;
      $m_sjs_js_ArrayOps$().B(reg$3.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$20) => ((data$3$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$20, data$3$3);
      }))(program$3$4)));
    }));
    var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy4.g(program$4);
    var b$7 = program$4.as;
    var b$8 = program$4.ac;
    var helperFns$proxy4 = program$4.au();
    var id$4 = p$5.q;
    p$5.q = ((1 + p$5.q) | 0);
    var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["model"], []);
    var dict$7 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$10 = 0;
    while ((i$10 < (names$10.length | 0))) {
      dict$7[names$10[i$10]] = i$10;
      i$10 = ((1 + i$10) | 0);
    }
    var names$11 = [];
    var dict$8 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$11 = 0;
    while ((i$11 < (names$11.length | 0))) {
      dict$8[names$11[i$11]] = i$11;
      i$11 = ((1 + i$11) | 0);
    }
    var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$7, b$8, helperFns$proxy4);
    var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).b8.t()], []));
    var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.ab, sd$4.aa, fragBuiltinParams$4);
    console.log(baseWgsl$4);
    var module$4 = p$5.h.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", baseWgsl$4)])))));
    var formats$4 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes$4 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets$4 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$4);
    var stride$4 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$4);
    var attributes$4 = [];
    var i$12 = 0;
    while ((i$12 < (formats$4.length | 0))) {
      attributes$4.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$12), $ct_T2__O__O__(new $c_T2(), "offset", (offsets$4[i$12] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats$4[i$12])])))));
      i$12 = ((1 + i$12) | 0);
    }
    var vbl$4 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride$4), $ct_T2__O__O__(new $c_T2(), "attributes", attributes$4)]))));
    var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])], []);
    var result$4 = [];
    $m_sjs_js_ArrayOps$().B(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$4) => ((entries$2$3) => (result$4.push(Painter_this$4.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$3)])))))) | 0)))(p$5)));
    var x17 = $ct_T2__O__O__(new $c_T2(), result$4, $m_Ltrivalibs_graphics_shader_layouts$().K(p$5.h, result$4));
    var \u03b42$$5 = x17;
    var bgls$8 = \u03b42$$5.ao;
    var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().K(p$5.h, bgls$8);
    var grainTex = $x_20.jC(new $c_Lsketchlib_utils_bake_TextureBaker(p$5, new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, vbl$4, bgls$8[0], null, pl$4, false, dict$7, dict$8)), grainForm, grainPx, grainPx, transform$proxy2, format$proxy2, mips$proxy2, clearColor$proxy2);
    var build$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$5) => {
      var body$proxy9 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$4) => {
        var $x_24 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_23 = $m_sjsr_package$();
        var AssignTarget_this$2 = ctx$2$4.a2.G("color");
        var value$proxy9 = ctx$2$4.a5.i("color");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_22 = AssignTarget_this$2.y;
        var $x_21 = value$proxy9.f;
        var AssignTarget_this$2$1 = ctx$2$4.a2.c8;
        var value$proxy11 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ad($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().qj($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().lJ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().v5(ctx$2$4.a5.i("position")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), ctx$2$4.gk.i("size")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$()), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_24.ax(new $c_sjsr_WrappedVarArgs($x_23.d(new ($d_T.r().C)([(((("  " + $x_22) + " = ") + $x_21) + ";"), (((("  " + AssignTarget_this$2$1.y) + " = ") + value$proxy11.f) + ";")]))));
      }));
      var ctx$5 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$4 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$4 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$4;
      try {
        var $x_25 = body$proxy9.g(ctx$5);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$4;
      }
      program$3$5.as = $x_25;
      $m_sjs_js_ArrayOps$().B(reg$4.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$21) => ((data$3$4) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$21, data$3$4);
      }))(program$3$5)));
      var body$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$5) => {
        var AssignTarget_this$3 = ctx$2$5.ar.G("color");
        var value$proxy13 = $m_Ltrivalibs_graphics_math_gpu_vec4$().a7(ctx$2$5.J.i("color"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().n4));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return (((("  " + AssignTarget_this$3.y) + " = ") + value$proxy13.f) + ";");
      }));
      var ctx$2$6 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$2$1;
      try {
        var $x_26 = body$proxy11.g(ctx$2$6);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$2$1;
      }
      program$3$5.ac = $x_26;
      $m_sjs_js_ArrayOps$().B(reg$2$1.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$22) => ((data$3$5) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$22, data$3$5);
      }))(program$3$5)));
    }));
    var program$5 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy5.g(program$5);
    var b$9 = program$5.as;
    var b$10 = program$5.ac;
    var helperFns$proxy5 = program$5.au();
    var id$5 = p$5.q;
    p$5.q = ((1 + p$5.q) | 0);
    var names$13 = $m_sjs_js_ArrayOpsCommon$().a(["size"], []);
    var dict$9 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$13 = 0;
    while ((i$13 < (names$13.length | 0))) {
      dict$9[names$13[i$13]] = i$13;
      i$13 = ((1 + i$13) | 0);
    }
    var names$14 = [];
    var dict$10 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$14 = 0;
    while ((i$14 < (names$14.length | 0))) {
      dict$10[names$14[i$14]] = i$14;
      i$14 = ((1 + i$14) | 0);
    }
    var sd$5 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$9, b$10, helperFns$proxy5);
    var vertexInputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["color"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$5 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["size"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).b8.t()], []));
    var fragBuiltinParams$5 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$5 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$5, vertexInputStruct$5, vertexOutputStruct$5, fragmentOutputStruct$5, groupDecls$5, sd$5.ab, sd$5.aa, fragBuiltinParams$5);
    console.log(baseWgsl$5);
    var module$5 = p$5.h.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", baseWgsl$5)])))));
    var formats$5 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], []));
    var sizes$5 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([12], []));
    var offsets$5 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$5);
    var stride$5 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$5);
    var attributes$5 = [];
    var i$15 = 0;
    while ((i$15 < (formats$5.length | 0))) {
      attributes$5.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$15), $ct_T2__O__O__(new $c_T2(), "offset", (offsets$5[i$15] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats$5[i$15])])))));
      i$15 = ((1 + i$15) | 0);
    }
    var vbl$5 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride$5), $ct_T2__O__O__(new $c_T2(), "attributes", attributes$5)]))));
    var descriptors$5 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])], []);
    var result$5 = [];
    $m_sjs_js_ArrayOps$().B(descriptors$5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$5) => ((entries$2$4) => (result$5.push(Painter_this$5.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$4)])))))) | 0)))(p$5)));
    var x20 = $ct_T2__O__O__(new $c_T2(), result$5, $m_Ltrivalibs_graphics_shader_layouts$().K(p$5.h, result$5));
    var \u03b42$$6 = x20;
    var bgls$10 = \u03b42$$6.ao;
    var pl$5 = $m_Ltrivalibs_graphics_shader_layouts$().K(p$5.h, bgls$10);
    var paintShade = new $c_Ltrivalibs_graphics_painter_Shade(id$5, module$5, vbl$5, bgls$10[0], null, pl$5, false, dict$9, dict$10);
    var palette = new $c_Lsketches_rooms_columns_RoomPalette();
    var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$());
    var uv$proxy1 = ul$proxy1.aE;
    var buffer = new ArrayBuffer(16);
    var arr$proxy15 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var eyePos = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy15.dv, 0), p$5.h, uv$proxy1);
    var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
    var uv$proxy2 = ul$proxy2.aE;
    var buffer$2 = new ArrayBuffer(8);
    var arr$proxy16 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
    var canvasRes = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy16.dv, 0), p$5.h, uv$proxy2);
    var build$proxy6 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$6) => {
      var body$proxy13 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$7) => {
        var $x_30 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_29 = $m_sjsr_package$();
        var AssignTarget_this$4 = ctx$2$7.a2.G("uv");
        var value$proxy15 = ctx$2$7.a5.i("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_28 = AssignTarget_this$4.y;
        var $x_27 = value$proxy15.f;
        var AssignTarget_this$2$2 = ctx$2$7.a2.c8;
        var value$proxy17 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().cf(ctx$2$7.gk.i("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cb(), $m_Ltrivalibs_graphics_math_gpu_vec4$().a7(ctx$2$7.a5.i("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_30.ax(new $c_sjsr_WrappedVarArgs($x_29.d(new ($d_T.r().C)([(((("  " + $x_28) + " = ") + $x_27) + ";"), (((("  " + AssignTarget_this$2$2.y) + " = ") + value$proxy17.f) + ";")]))));
      }));
      var ctx$6 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$5 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$5 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$5;
      try {
        var $x_31 = body$proxy13.g(ctx$6);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$5;
      }
      program$3$6.as = $x_31;
      $m_sjs_js_ArrayOps$().B(reg$5.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$23) => ((data$3$6) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$23, data$3$6);
      }))(program$3$6)));
      var body$proxy15 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$8) => {
        var AssignTarget_this$5 = ctx$2$8.ar.G("color");
        var tex = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var uv$3 = ctx$2$8.J.i("uv");
        var sampler$1 = ctx$2$8.D.i("samp");
        var value$proxy19 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().ad(tex, uv$3, sampler$1);
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return (((("  " + AssignTarget_this$5.y) + " = ") + value$proxy19.f) + ";");
      }));
      var ctx$2$9 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$2$2;
      try {
        var $x_32 = body$proxy15.g(ctx$2$9);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$2$2;
      }
      program$3$6.ac = $x_32;
      $m_sjs_js_ArrayOps$().B(reg$2$2.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$24) => ((data$3$7) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$24, data$3$7);
      }))(program$3$6)));
    }));
    var program$6 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy6.g(program$6);
    var b$11 = program$6.as;
    var b$12 = program$6.ac;
    var helperFns$proxy6 = program$6.au();
    var id$6 = p$5.q;
    p$5.q = ((1 + p$5.q) | 0);
    var names$16 = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
    var dict$11 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$16 = 0;
    while ((i$16 < (names$16.length | 0))) {
      dict$11[names$16[i$16]] = i$16;
      i$16 = ((1 + i$16) | 0);
    }
    var names$17 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
    var dict$12 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$17 = 0;
    while ((i$17 < (names$17.length | 0))) {
      dict$12[names$17[i$17]] = i$17;
      i$17 = ((1 + i$17) | 0);
    }
    var sd$6 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$11, b$12, helperFns$proxy6);
    var vertexInputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$6 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).b8.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).O.t()], [])));
    var fragBuiltinParams$6 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$6 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$6, vertexInputStruct$6, vertexOutputStruct$6, fragmentOutputStruct$6, groupDecls$6, sd$6.ab, sd$6.aa, fragBuiltinParams$6);
    var wgsl$6 = (baseWgsl$6 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    console.log(wgsl$6);
    var module$6 = p$5.h.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$6)])))));
    var formats$6 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes$6 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets$6 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$6);
    var stride$8 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$6);
    var attributes$6 = [];
    var i$18 = 0;
    while ((i$18 < (formats$6.length | 0))) {
      attributes$6.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$18), $ct_T2__O__O__(new $c_T2(), "offset", (offsets$6[i$18] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats$6[i$18])])))));
      i$18 = ((1 + i$18) | 0);
    }
    var vbl$6 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride$8), $ct_T2__O__O__(new $c_T2(), "attributes", attributes$6)]))));
    var descriptors$6 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []))], []);
    var result$6 = [];
    $m_sjs_js_ArrayOps$().B(descriptors$6, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$6) => ((entries$2$5) => (result$6.push(Painter_this$6.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$5)])))))) | 0)))(p$5)));
    var x23 = $ct_T2__O__O__(new $c_T2(), result$6, $m_Ltrivalibs_graphics_shader_layouts$().K(p$5.h, result$6));
    var \u03b42$$7 = x23;
    var bgls$12 = \u03b42$$7.ao;
    var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$6 = p$5.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries)])))));
    if ((panelBgl$6 !== null)) {
      var other$proxy6 = [panelBgl$6];
      var allBgls$6 = bgls$12.concat(other$proxy6);
    } else {
      var allBgls$6 = bgls$12;
    }
    var pl$6 = $m_Ltrivalibs_graphics_shader_layouts$().K(p$5.h, allBgls$6);
    var lightShade = new $c_Ltrivalibs_graphics_painter_Shade(id$6, module$6, vbl$6, bgls$12[0], panelBgl$6, pl$6, false, dict$11, dict$12);
    var build$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$7) => {
      var body$proxy17 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$10) => {
        var $x_42 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_41 = $m_sjsr_package$();
        var AssignTarget_this$6 = ctx$2$10.a2.G("uv");
        var value$proxy21 = ctx$2$10.a5.i("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_40 = AssignTarget_this$6.y;
        var $x_39 = value$proxy21.f;
        var AssignTarget_this$2$3 = ctx$2$10.a2.G("worldPos");
        var value$proxy23 = ctx$2$10.a5.i("position");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_38 = AssignTarget_this$2$3.y;
        var $x_37 = value$proxy23.f;
        var AssignTarget_this$3$1 = ctx$2$10.a2.G("edgeInfo");
        var value$proxy25 = ctx$2$10.a5.i("edgeInfo");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_36 = AssignTarget_this$3$1.y;
        var $x_35 = value$proxy25.f;
        var AssignTarget_this$4$1 = ctx$2$10.a2.G("tangent");
        var value$proxy27 = ctx$2$10.a5.i("tangent");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_34 = AssignTarget_this$4$1.y;
        var $x_33 = value$proxy27.f;
        var AssignTarget_this$5$1 = ctx$2$10.a2.c8;
        var value$proxy29 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().cf(ctx$2$10.gk.i("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cb(), $m_Ltrivalibs_graphics_math_gpu_vec4$().a7(ctx$2$10.a5.i("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_42.ax(new $c_sjsr_WrappedVarArgs($x_41.d(new ($d_T.r().C)([(((("  " + $x_40) + " = ") + $x_39) + ";"), (((("  " + $x_38) + " = ") + $x_37) + ";"), (((("  " + $x_36) + " = ") + $x_35) + ";"), (((("  " + $x_34) + " = ") + $x_33) + ";"), (((("  " + AssignTarget_this$5$1.y) + " = ") + value$proxy29.f) + ";")]))));
      }));
      var ctx$7 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$6 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$6 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$6;
      try {
        var $x_43 = body$proxy17.g(ctx$7);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$6;
      }
      program$3$7.as = $x_43;
      $m_sjs_js_ArrayOps$().B(reg$6.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$25) => ((data$3$8) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$25, data$3$8);
      }))(program$3$7)));
      var body$proxy19 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$11) => {
        var wp = ctx$2$11.J.i("worldPos");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var amb = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("amb");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var toEye = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("toEye");
        var $x_47 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_46 = $m_sjsr_package$();
        var tex$1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var uv$4 = ctx$2$11.J.i("uv");
        var sampler$2 = ctx$2$11.D.i("samp");
        var $x_45 = amb.P($m_Ltrivalibs_graphics_math_gpu_expr$package$().ad(tex$1, uv$4, sampler$2));
        var $x_44 = toEye.P($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().lT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jV(ctx$2$11.D.i("eye"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$()));
        var AssignTarget_this$7 = ctx$2$11.ar.G("color");
        var value$proxy31 = $m_Ltrivalibs_graphics_math_gpu_vec4$().a7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().aJ($m_Lsketches_rooms_columns_Columns$package$().rc($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().W(wp)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().rb(amb, $m_Lsketches_rooms_columns_Columns$package$().ra(wp, ctx$2$11.J.i("edgeInfo"), ctx$2$11.J.i("tangent"), toEye), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().W(wp))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_47.ax(new $c_sjsr_WrappedVarArgs($x_46.d(new ($d_T.r().C)([$x_45, $x_44, (((("  " + AssignTarget_this$7.y) + " = ") + value$proxy31.f) + ";")]))));
      }));
      var ctx$2$12 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$2$3;
      try {
        var $x_48 = body$proxy19.g(ctx$2$12);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$2$3;
      }
      program$3$7.ac = $x_48;
      $m_sjs_js_ArrayOps$().B(reg$2$3.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$26) => ((data$3$9) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$26, data$3$9);
      }))(program$3$7)));
    }));
    var program$7 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy7.g(program$7);
    var b$13 = program$7.as;
    var b$14 = program$7.ac;
    var helperFns$proxy7 = program$7.au();
    var id$7 = p$5.q;
    p$5.q = ((1 + p$5.q) | 0);
    var names$19 = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["eye"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])));
    var dict$13 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$19 = 0;
    while ((i$19 < (names$19.length | 0))) {
      dict$13[names$19[i$19]] = i$19;
      i$19 = ((1 + i$19) | 0);
    }
    var names$20 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
    var dict$14 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$20 = 0;
    while ((i$20 < (names$20.length | 0))) {
      dict$14[names$20[i$20]] = i$20;
      i$20 = ((1 + i$20) | 0);
    }
    var sd$7 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$13, b$14, helperFns$proxy7);
    var vertexInputStruct$7 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["edgeInfo"], $m_sjs_js_ArrayOpsCommon$().a(["tangent"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$7 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], $m_sjs_js_ArrayOpsCommon$().a(["edgeInfo"], $m_sjs_js_ArrayOpsCommon$().a(["tangent"], [])))), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], [])))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$7 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$7 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["eye"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).b8.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).O.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).O.t()], []))));
    var fragBuiltinParams$7 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$7 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$7, vertexInputStruct$7, vertexOutputStruct$7, fragmentOutputStruct$7, groupDecls$7, sd$7.ab, sd$7.aa, fragBuiltinParams$7);
    var wgsl$7 = (baseWgsl$7 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    console.log(wgsl$7);
    var module$7 = p$5.h.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$7)])))));
    var formats$7 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x4"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])))));
    var sizes$7 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([16], $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([12], [])))));
    var offsets$7 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$7);
    var stride$9 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$7);
    var attributes$7 = [];
    var i$21 = 0;
    while ((i$21 < (formats$7.length | 0))) {
      attributes$7.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$21), $ct_T2__O__O__(new $c_T2(), "offset", (offsets$7[i$21] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats$7[i$21])])))));
      i$21 = ((1 + i$21) | 0);
    }
    var vbl$7 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride$9), $ct_T2__O__O__(new $c_T2(), "attributes", attributes$7)]))));
    var descriptors$7 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 2), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], [])))], []);
    var result$7 = [];
    $m_sjs_js_ArrayOps$().B(descriptors$7, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$7) => ((entries$2$6) => (result$7.push(Painter_this$7.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$6)])))))) | 0)))(p$5)));
    var x26 = $ct_T2__O__O__(new $c_T2(), result$7, $m_Ltrivalibs_graphics_shader_layouts$().K(p$5.h, result$7));
    var \u03b42$$8 = x26;
    var bgls$14 = \u03b42$$8.ao;
    var entries$2$7 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$7 = p$5.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$7)])))));
    if ((panelBgl$7 !== null)) {
      var other$proxy7 = [panelBgl$7];
      var allBgls$7 = bgls$14.concat(other$proxy7);
    } else {
      var allBgls$7 = bgls$14;
    }
    var pl$7 = $m_Ltrivalibs_graphics_shader_layouts$().K(p$5.h, allBgls$7);
    var wallShade = new $c_Ltrivalibs_graphics_painter_Shade(id$7, module$7, vbl$7, bgls$14[0], panelBgl$7, pl$7, false, dict$13, dict$14);
    var build$proxy8 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$8) => {
      var body$proxy21 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$13) => {
        var $x_58 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_57 = $m_sjsr_package$();
        var AssignTarget_this$8 = ctx$2$13.a2.G("uv");
        var value$proxy33 = ctx$2$13.a5.i("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_56 = AssignTarget_this$8.y;
        var $x_55 = value$proxy33.f;
        var AssignTarget_this$2$4 = ctx$2$13.a2.G("worldPos");
        var value$proxy35 = ctx$2$13.a5.i("position");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_54 = AssignTarget_this$2$4.y;
        var $x_53 = value$proxy35.f;
        var AssignTarget_this$3$2 = ctx$2$13.a2.G("edgeInfo");
        var value$proxy37 = ctx$2$13.a5.i("edgeInfo");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_52 = AssignTarget_this$3$2.y;
        var $x_51 = value$proxy37.f;
        var AssignTarget_this$4$2 = ctx$2$13.a2.G("tangent");
        var value$proxy39 = ctx$2$13.a5.i("tangent");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_50 = AssignTarget_this$4$2.y;
        var $x_49 = value$proxy39.f;
        var AssignTarget_this$5$2 = ctx$2$13.a2.c8;
        var value$proxy41 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().cf(ctx$2$13.gk.i("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cb(), $m_Ltrivalibs_graphics_math_gpu_vec4$().a7(ctx$2$13.a5.i("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_58.ax(new $c_sjsr_WrappedVarArgs($x_57.d(new ($d_T.r().C)([(((("  " + $x_56) + " = ") + $x_55) + ";"), (((("  " + $x_54) + " = ") + $x_53) + ";"), (((("  " + $x_52) + " = ") + $x_51) + ";"), (((("  " + $x_50) + " = ") + $x_49) + ";"), (((("  " + AssignTarget_this$5$2.y) + " = ") + value$proxy41.f) + ";")]))));
      }));
      var ctx$8 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$7 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$7 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$7;
      try {
        var $x_59 = body$proxy21.g(ctx$8);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$7;
      }
      program$3$8.as = $x_59;
      $m_sjs_js_ArrayOps$().B(reg$7.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$27) => ((data$3$10) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$27, data$3$10);
      }))(program$3$8)));
      var body$proxy23 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$14) => {
        var wp$1 = ctx$2$14.J.i("worldPos");
        var rect = ctx$2$14.D.i("paintRect");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var amb$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("amb");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var toEye$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("toEye");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var light = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("light");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var bayPos = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("bayPos");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var paint = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("paintColor");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var grain = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("grain");
        var $x_76 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_75 = $m_sjsr_package$();
        var tex$2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var uv$5 = ctx$2$14.J.i("uv");
        var sampler$3 = ctx$2$14.D.i("samp");
        var $x_74 = amb$1.P($m_Ltrivalibs_graphics_math_gpu_expr$package$().ad(tex$2, uv$5, sampler$3));
        var $x_73 = toEye$1.P($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().lT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jV(ctx$2$14.D.i("eye"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), wp$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$()));
        var $x_72 = light.P($m_Lsketches_rooms_columns_Columns$package$().rb(amb$1, $m_Lsketches_rooms_columns_Columns$package$().ra(wp$1, ctx$2$14.J.i("edgeInfo"), ctx$2$14.J.i("tangent"), toEye$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().W(wp$1)));
        var $x_71 = bayPos.P($m_Ltrivalibs_graphics_math_gpu_vec2$().a7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().a9(ctx$2$14.J.i("edgeInfo")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().W(wp$1)));
        var tex$3 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "paint");
        var uv$6 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().lJ($m_Ltrivalibs_graphics_math_gpu_vec2$().a7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ii($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a9(bayPos), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().a9(rect)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ii($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().cg(rect), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ii($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().W(bayPos), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().W(rect)))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().rh(rect));
        var sampler$4 = ctx$2$14.D.i("samp");
        var $x_70 = paint.P($m_Ltrivalibs_graphics_math_gpu_expr$package$().ad(tex$3, uv$6, sampler$4));
        var $x_69 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
        var $x_68 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
        var $x_67 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
        var $x_66 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$();
        var tex$4 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "grain");
        var uv$7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().lv($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().q1(bayPos, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), ctx$2$14.D.i("grainOffset")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Lsketches_rooms_columns_Columns$package$().bU);
        var sampler$5 = ctx$2$14.D.i("tileSamp");
        var e$proxy4 = $x_69.S($x_68.c9($x_67.S($x_66.a9($m_Ltrivalibs_graphics_math_gpu_expr$package$().ad(tex$4, uv$7, sampler$5)), 2.0), 1.0), $m_Lsketches_rooms_columns_Columns$package$().mT);
        var L$proxy13 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aT();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_65 = grain.P(L$proxy13.aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(1.0)) + " + ") + e$proxy4.f) + ")")));
        var AssignTarget_this$9 = ctx$2$14.ar.G("color");
        var $x_64 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
        var $x_63 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_62 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_61 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().aJ($m_Lsketches_rooms_columns_Columns$package$().rc($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().W(wp$1)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), light);
        var $x_60 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
        var e$proxy5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().cg(paint), grain);
        var L$proxy15 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aT();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var value$proxy43 = $x_64.a7($x_63.ly($x_62.aJ($x_61, $x_60, L$proxy15.aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(1.0)) + " - ") + e$proxy5.f) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().aJ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().aJ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gw(paint), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), grain), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), light)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_76.ax(new $c_sjsr_WrappedVarArgs($x_75.d(new ($d_T.r().C)([$x_74, $x_73, $x_72, $x_71, $x_70, $x_65, (((("  " + AssignTarget_this$9.y) + " = ") + value$proxy43.f) + ";")]))));
      }));
      var ctx$2$15 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$4 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$4 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$2$4;
      try {
        var $x_77 = body$proxy23.g(ctx$2$15);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$2$4;
      }
      program$3$8.ac = $x_77;
      $m_sjs_js_ArrayOps$().B(reg$2$4.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$28) => ((data$3$11) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$28, data$3$11);
      }))(program$3$8)));
    }));
    var program$8 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy8.g(program$8);
    var b$15 = program$8.as;
    var b$16 = program$8.ac;
    var helperFns$proxy8 = program$8.au();
    var id$8 = p$5.q;
    p$5.q = ((1 + p$5.q) | 0);
    var names$22 = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["eye"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], $m_sjs_js_ArrayOpsCommon$().a(["tileSamp"], $m_sjs_js_ArrayOpsCommon$().a(["paintRect"], $m_sjs_js_ArrayOpsCommon$().a(["grainOffset"], []))))));
    var dict$15 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$22 = 0;
    while ((i$22 < (names$22.length | 0))) {
      dict$15[names$22[i$22]] = i$22;
      i$22 = ((1 + i$22) | 0);
    }
    var names$23 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["paint"], $m_sjs_js_ArrayOpsCommon$().a(["grain"], [])));
    var dict$16 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$23 = 0;
    while ((i$23 < (names$23.length | 0))) {
      dict$16[names$23[i$23]] = i$23;
      i$23 = ((1 + i$23) | 0);
    }
    var sd$8 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$15, b$16, helperFns$proxy8);
    var vertexInputStruct$8 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["edgeInfo"], $m_sjs_js_ArrayOpsCommon$().a(["tangent"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$8 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], $m_sjs_js_ArrayOpsCommon$().a(["edgeInfo"], $m_sjs_js_ArrayOpsCommon$().a(["tangent"], [])))), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], [])))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$8 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$8 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["eye"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], $m_sjs_js_ArrayOpsCommon$().a(["tileSamp"], $m_sjs_js_ArrayOpsCommon$().a(["paintRect"], $m_sjs_js_ArrayOpsCommon$().a(["grainOffset"], [])))))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).b8.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).O.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).O.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).O.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$()).O.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).O.t()], [])))))));
    var fragBuiltinParams$8 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$8 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$8, vertexInputStruct$8, vertexOutputStruct$8, fragmentOutputStruct$8, groupDecls$8, sd$8.ab, sd$8.aa, fragBuiltinParams$8);
    var wgsl$8 = (baseWgsl$8 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;\n@group(1) @binding(1) var paint: texture_2d<f32>;\n@group(1) @binding(2) var grain: texture_2d<f32>;");
    console.log(wgsl$8);
    var module$8 = p$5.h.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$8)])))));
    var formats$8 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x4"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])))));
    var sizes$8 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([16], $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([12], [])))));
    var offsets$8 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$8);
    var stride$10 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$8);
    var attributes$8 = [];
    var i$24 = 0;
    while ((i$24 < (formats$8.length | 0))) {
      attributes$8.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$24), $ct_T2__O__O__(new $c_T2(), "offset", (offsets$8[i$24] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats$8[i$24])])))));
      i$24 = ((1 + i$24) | 0);
    }
    var vbl$8 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride$10), $ct_T2__O__O__(new $c_T2(), "attributes", attributes$8)]))));
    var descriptors$8 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 2), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 3), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 4), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 5), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], []))))))], []);
    var result$8 = [];
    $m_sjs_js_ArrayOps$().B(descriptors$8, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$8) => ((entries$2$8) => (result$8.push(Painter_this$8.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$8)])))))) | 0)))(p$5)));
    var x29 = $ct_T2__O__O__(new $c_T2(), result$8, $m_Ltrivalibs_graphics_shader_layouts$().K(p$5.h, result$8));
    var \u03b42$$9 = x29;
    var bgls$16 = \u03b42$$9.ao;
    var entries$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 2), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], [])));
    var panelBgl$8 = p$5.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$3)])))));
    if ((panelBgl$8 !== null)) {
      var other$proxy8 = [panelBgl$8];
      var allBgls$8 = bgls$16.concat(other$proxy8);
    } else {
      var allBgls$8 = bgls$16;
    }
    var pl$8 = $m_Ltrivalibs_graphics_shader_layouts$().K(p$5.h, allBgls$8);
    var bayShade = new $c_Ltrivalibs_graphics_painter_Shade(id$8, module$8, vbl$8, bgls$16[0], panelBgl$8, pl$8, false, dict$15, dict$16);
    var build$proxy9 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$9) => {
      var body$proxy25 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$16) => {
        var $x_83 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_82 = $m_sjsr_package$();
        var AssignTarget_this$10 = ctx$2$16.a2.G("uv");
        var value$proxy45 = ctx$2$16.a5.i("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_81 = AssignTarget_this$10.y;
        var $x_80 = value$proxy45.f;
        var AssignTarget_this$2$5 = ctx$2$16.a2.G("worldPos");
        var value$proxy47 = ctx$2$16.a5.i("position");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_79 = AssignTarget_this$2$5.y;
        var $x_78 = value$proxy47.f;
        var AssignTarget_this$3$3 = ctx$2$16.a2.c8;
        var value$proxy49 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().cf(ctx$2$16.gk.i("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cb(), $m_Ltrivalibs_graphics_math_gpu_vec4$().a7(ctx$2$16.a5.i("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_83.ax(new $c_sjsr_WrappedVarArgs($x_82.d(new ($d_T.r().C)([(((("  " + $x_81) + " = ") + $x_80) + ";"), (((("  " + $x_79) + " = ") + $x_78) + ";"), (((("  " + AssignTarget_this$3$3.y) + " = ") + value$proxy49.f) + ";")]))));
      }));
      var ctx$9 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$8 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$8 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$8;
      try {
        var $x_84 = body$proxy25.g(ctx$9);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$8;
      }
      program$3$9.as = $x_84;
      $m_sjs_js_ArrayOps$().B(reg$8.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$29) => ((data$3$12) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$29, data$3$12);
      }))(program$3$9)));
      var body$proxy27 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$17) => {
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var amb$2 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("amb");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var fromArris = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("fromArris");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var sideLift = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("sideLift");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var lit = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("lit");
        var $x_101 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_100 = $m_sjsr_package$();
        var tex$5 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var uv$8 = ctx$2$17.J.i("uv");
        var sampler$6 = ctx$2$17.D.i("samp");
        var $x_99 = amb$2.P($m_Ltrivalibs_graphics_math_gpu_expr$package$().ad(tex$5, uv$8, sampler$6));
        var $x_98 = fromArris.P($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().c9(atlas.uH(ctx$2$17.J.i("uv")), $m_Lsketches_rooms_columns_Columns$package$().aD), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0)));
        var $x_97 = sideLift.P($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().qa($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jA($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().c9($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().W(ctx$2$17.J.i("worldPos")), $m_Lsketches_rooms_columns_Columns$package$().aP), $m_Lsketches_rooms_columns_Columns$package$().hz)));
        var $x_96 = lit.P($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gt($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().W(amb$2), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().a9(amb$2), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ba(fromArris, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g((+$m_Lsketches_rooms_columns_Columns$package$().bT.aV)))));
        var AssignTarget_this$11 = ctx$2$17.ar.G("color");
        var $x_95 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
        var $x_94 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_93 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_92 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jL($m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().iO($m_Lsketches_rooms_columns_Columns$package$().kg), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().mI, sideLift);
        var $x_91 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_90 = $m_Lsketches_rooms_columns_Columns$package$().mM;
        var e$proxy6 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ba(fromArris, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().mH));
        var L$proxy17 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aT();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_89 = $x_93.jL($x_92, $x_91, $x_90, L$proxy17.aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(1.0)) + " - ") + e$proxy6.f) + ")")));
        var $x_88 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_87 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
        var $x_86 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
        var $x_85 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
        var L$proxy19 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aT();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var value$proxy51 = $x_95.a7($x_94.aJ($x_89, $x_88, $x_87.bx(lit, $x_86.S($x_85.b1(L$proxy19.aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(1.0)) + " - ") + lit.f) + ")")), sideLift), $m_Lsketches_rooms_columns_Columns$package$().mJ))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_101.ax(new $c_sjsr_WrappedVarArgs($x_100.d(new ($d_T.r().C)([$x_99, $x_98, $x_97, $x_96, (((("  " + AssignTarget_this$11.y) + " = ") + value$proxy51.f) + ";")]))));
      }));
      var ctx$2$18 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$5 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$5 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$2$5;
      try {
        var $x_102 = body$proxy27.g(ctx$2$18);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$2$5;
      }
      program$3$9.ac = $x_102;
      $m_sjs_js_ArrayOps$().B(reg$2$5.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$30) => ((data$3$13) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$30, data$3$13);
      }))(program$3$9)));
    }));
    var program$9 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy9.g(program$9);
    var b$18 = program$9.as;
    var b$19 = program$9.ac;
    var helperFns$proxy9 = program$9.au();
    var id$9 = p$5.q;
    p$5.q = ((1 + p$5.q) | 0);
    var names$25 = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
    var dict$17 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$25 = 0;
    while ((i$25 < (names$25.length | 0))) {
      dict$17[names$25[i$25]] = i$25;
      i$25 = ((1 + i$25) | 0);
    }
    var names$26 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
    var dict$18 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$26 = 0;
    while ((i$26 < (names$26.length | 0))) {
      dict$18[names$26[i$26]] = i$26;
      i$26 = ((1 + i$26) | 0);
    }
    var sd$9 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$18, b$19, helperFns$proxy9);
    var vertexInputStruct$9 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$9 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$9 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$9 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).b8.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).O.t()], [])));
    var fragBuiltinParams$9 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$9 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$9, vertexInputStruct$9, vertexOutputStruct$9, fragmentOutputStruct$9, groupDecls$9, sd$9.ab, sd$9.aa, fragBuiltinParams$9);
    var wgsl$9 = (baseWgsl$9 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    console.log(wgsl$9);
    var module$9 = p$5.h.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$9)])))));
    var formats$9 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes$9 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets$9 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$9);
    var stride$11 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$9);
    var attributes$9 = [];
    var i$27 = 0;
    while ((i$27 < (formats$9.length | 0))) {
      attributes$9.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$27), $ct_T2__O__O__(new $c_T2(), "offset", (offsets$9[i$27] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats$9[i$27])])))));
      i$27 = ((1 + i$27) | 0);
    }
    var vbl$9 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride$11), $ct_T2__O__O__(new $c_T2(), "attributes", attributes$9)]))));
    var descriptors$9 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []))], []);
    var result$9 = [];
    $m_sjs_js_ArrayOps$().B(descriptors$9, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$9) => ((entries$2$9) => (result$9.push(Painter_this$9.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$9)])))))) | 0)))(p$5)));
    var x32 = $ct_T2__O__O__(new $c_T2(), result$9, $m_Ltrivalibs_graphics_shader_layouts$().K(p$5.h, result$9));
    var \u03b42$$10 = x32;
    var bgls$18 = \u03b42$$10.ao;
    var entries$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$9 = p$5.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$4)])))));
    if ((panelBgl$9 !== null)) {
      var other$proxy9 = [panelBgl$9];
      var allBgls$9 = bgls$18.concat(other$proxy9);
    } else {
      var allBgls$9 = bgls$18;
    }
    var pl$9 = $m_Ltrivalibs_graphics_shader_layouts$().K(p$5.h, allBgls$9);
    var balkShade = new $c_Ltrivalibs_graphics_painter_Shade(id$9, module$9, vbl$9, bgls$18[0], panelBgl$9, pl$9, false, dict$17, dict$18);
    var build$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$10) => {
      var body$proxy29 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$19) => {
        var $x_108 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_107 = $m_sjsr_package$();
        var AssignTarget_this$12 = ctx$2$19.a2.G("uv");
        var value$proxy53 = ctx$2$19.a5.i("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_106 = AssignTarget_this$12.y;
        var $x_105 = value$proxy53.f;
        var AssignTarget_this$2$6 = ctx$2$19.a2.G("worldPos");
        var value$proxy55 = ctx$2$19.a5.i("position");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_104 = AssignTarget_this$2$6.y;
        var $x_103 = value$proxy55.f;
        var AssignTarget_this$3$4 = ctx$2$19.a2.c8;
        var value$proxy57 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().cf(ctx$2$19.gk.i("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cb(), $m_Ltrivalibs_graphics_math_gpu_vec4$().a7(ctx$2$19.a5.i("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_108.ax(new $c_sjsr_WrappedVarArgs($x_107.d(new ($d_T.r().C)([(((("  " + $x_106) + " = ") + $x_105) + ";"), (((("  " + $x_104) + " = ") + $x_103) + ";"), (((("  " + AssignTarget_this$3$4.y) + " = ") + value$proxy57.f) + ";")]))));
      }));
      var ctx$10 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$9 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$9 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$9;
      try {
        var $x_109 = body$proxy29.g(ctx$10);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$9;
      }
      program$3$10.as = $x_109;
      $m_sjs_js_ArrayOps$().B(reg$9.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$31) => ((data$3$14) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$31, data$3$14);
      }))(program$3$10)));
      var body$proxy31 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$20) => {
        var wp$3 = ctx$2$20.J.i("worldPos");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var amb$3 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("amb");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var dist = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("dist");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var slabCoord = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("slabCoord");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var base = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("base");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var refl = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("refl");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var reflMix = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("reflMix");
        var $x_131 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_130 = $m_sjsr_package$();
        var tex$6 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var uv$9 = ctx$2$20.J.i("uv");
        var sampler$7 = ctx$2$20.D.i("samp");
        var $x_129 = amb$3.P($m_Ltrivalibs_graphics_math_gpu_expr$package$().ad(tex$6, uv$9, sampler$7));
        var $x_128 = dist.P($m_Lsketches_rooms_columns_Columns$package$().t1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jY(wp$3)));
        var $x_127 = slabCoord.P($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().lv($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jY(wp$3), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Lsketches_rooms_columns_Columns$package$().gX));
        var $x_126 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_125 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_124 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_123 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_122 = $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().iO($m_Lsketches_rooms_columns_Columns$package$().mR);
        var $x_121 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
        var e$proxy7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().c9($m_Lsketches_rooms_columns_Columns$package$().s5($m_Lsketches_rooms_columns_Columns$package$().r8(slabCoord)), 0.5), $m_Lsketches_rooms_columns_Columns$package$().ne);
        var L$proxy21 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aT();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_120 = $x_123.aJ($x_122, $x_121, L$proxy21.aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(1.0)) + " + ") + e$proxy7.f) + ")")));
        var $x_119 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_118 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$();
        var tex$7 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "slabTex");
        var sampler$8 = ctx$2$20.D.i("tileSamp");
        var $x_117 = base.P($x_126.aJ($x_125.aJ($x_124.aJ($x_120, $x_119, $x_118.a9($m_Ltrivalibs_graphics_math_gpu_expr$package$().ad(tex$7, slabCoord, sampler$8))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gt($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().W(amb$3), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().a9(amb$3), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ba(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g((+$m_Lsketches_rooms_columns_Columns$package$().bT.aM))))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), ($m_Lsketches_rooms_columns_Columns$package$(), $m_Lsketchlib_shaders_room_Grime$package$().qo(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().qk($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().gx(amb$3)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().cg(amb$3), $m_Lsketches_rooms_columns_Columns$package$().ka, $m_Lsketches_rooms_columns_Columns$package$().k8, $m_Lsketches_rooms_columns_Columns$package$().k7, $m_Lsketches_rooms_columns_Columns$package$().k9))));
        var tex$8 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "reflTex");
        var uv$10 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().lJ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().hq(ctx$2$20.he), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), ctx$2$20.D.i("res"));
        var sampler$9 = ctx$2$20.D.i("samp");
        var $x_116 = refl.P($m_Ltrivalibs_graphics_math_gpu_expr$package$().ad(tex$8, uv$10, sampler$9));
        var $x_115 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
        var e$proxy8 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().cg(refl), 0.4);
        var L$proxy23 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aT();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_114 = reflMix.P($x_115.S(L$proxy23.aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(1.0)) + " - ") + e$proxy8.f) + ")")), $m_Lsketches_rooms_columns_Columns$package$().nc));
        var AssignTarget_this$13 = ctx$2$20.ar.G("color");
        var $x_113 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
        var $x_112 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_111 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_110 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
        var L$proxy25 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aT();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var value$proxy59 = $x_113.a7($x_112.ly($x_111.aJ(base, $x_110, L$proxy25.aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(1.0)) + " - ") + reflMix.f) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().aJ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gw(refl), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), reflMix)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_131.ax(new $c_sjsr_WrappedVarArgs($x_130.d(new ($d_T.r().C)([$x_129, $x_128, $x_127, $x_117, $x_116, $x_114, (((("  " + AssignTarget_this$13.y) + " = ") + value$proxy59.f) + ";")]))));
      }));
      var ctx$2$21 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$6 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$6 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$2$6;
      try {
        var $x_132 = body$proxy31.g(ctx$2$21);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$2$6;
      }
      program$3$10.ac = $x_132;
      $m_sjs_js_ArrayOps$().B(reg$2$6.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$32) => ((data$3$15) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$32, data$3$15);
      }))(program$3$10)));
    }));
    var program$10 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy10.g(program$10);
    var b$21 = program$10.as;
    var b$22 = program$10.ac;
    var helperFns$proxy10 = program$10.au();
    var id$10 = p$5.q;
    p$5.q = ((1 + p$5.q) | 0);
    var names$28 = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], $m_sjs_js_ArrayOpsCommon$().a(["tileSamp"], $m_sjs_js_ArrayOpsCommon$().a(["res"], []))));
    var dict$19 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$28 = 0;
    while ((i$28 < (names$28.length | 0))) {
      dict$19[names$28[i$28]] = i$28;
      i$28 = ((1 + i$28) | 0);
    }
    var names$29 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["slabTex"], $m_sjs_js_ArrayOpsCommon$().a(["reflTex"], [])));
    var dict$20 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$29 = 0;
    while ((i$29 < (names$29.length | 0))) {
      dict$20[names$29[i$29]] = i$29;
      i$29 = ((1 + i$29) | 0);
    }
    var sd$10 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$21, b$22, helperFns$proxy10);
    var vertexInputStruct$10 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$10 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$10 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$10 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], $m_sjs_js_ArrayOpsCommon$().a(["tileSamp"], $m_sjs_js_ArrayOpsCommon$().a(["res"], [])))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).b8.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).O.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).O.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).O.t()], [])))));
    var fragBuiltinParams$10 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$10 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$10, vertexInputStruct$10, vertexOutputStruct$10, fragmentOutputStruct$10, groupDecls$10, sd$10.ab, sd$10.aa, fragBuiltinParams$10);
    var wgsl$10 = (baseWgsl$10 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;\n@group(1) @binding(1) var slabTex: texture_2d<f32>;\n@group(1) @binding(2) var reflTex: texture_2d<f32>;");
    console.log(wgsl$10);
    var module$10 = p$5.h.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$10)])))));
    var formats$10 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes$10 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets$10 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$10);
    var stride$12 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$10);
    var attributes$10 = [];
    var i$30 = 0;
    while ((i$30 < (formats$10.length | 0))) {
      attributes$10.push($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$30), $ct_T2__O__O__(new $c_T2(), "offset", (offsets$10[i$30] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats$10[i$30])])))));
      i$30 = ((1 + i$30) | 0);
    }
    var vbl$10 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride$12), $ct_T2__O__O__(new $c_T2(), "attributes", attributes$10)]))));
    var descriptors$10 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 2), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 3), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], []))))], []);
    var result$10 = [];
    $m_sjs_js_ArrayOps$().B(descriptors$10, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$10) => ((entries$2$10) => (result$10.push(Painter_this$10.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$10)])))))) | 0)))(p$5)));
    var x35 = $ct_T2__O__O__(new $c_T2(), result$10, $m_Ltrivalibs_graphics_shader_layouts$().K(p$5.h, result$10));
    var \u03b42$$11 = x35;
    var bgls$20 = \u03b42$$11.ao;
    var entries$5 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 2), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], [])));
    var panelBgl$10 = p$5.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$5)])))));
    if ((panelBgl$10 !== null)) {
      var other$proxy10 = [panelBgl$10];
      var allBgls$10 = bgls$20.concat(other$proxy10);
    } else {
      var allBgls$10 = bgls$20;
    }
    var pl$10 = $m_Ltrivalibs_graphics_shader_layouts$().K(p$5.h, allBgls$10);
    var floorShade = new $c_Ltrivalibs_graphics_painter_Shade(id$10, module$10, vbl$10, bgls$20[0], panelBgl$10, pl$10, false, dict$19, dict$20);
    var Bindable_this = p$5.gu(lightForm, lightShade, "none", (void 0));
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", lightTex);
    var \u03b4scrutinee992 = e1$proxy2.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, (Bindable_this.Y.I.samp | 0), \u03b4scrutinee992);
    var \u03b4scrutinee1008 = e2$proxy1.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this, (Bindable_this.Y.aC.tex | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee1008));
    var Bindable_this$4 = p$5.gu(balkForm, balkShade, "none", (void 0));
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", balkTex);
    var \u03b4scrutinee1014 = e1$proxy3.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$4, (Bindable_this$4.Y.I.samp | 0), \u03b4scrutinee1014);
    var \u03b4scrutinee1030 = e2$proxy2.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$4, (Bindable_this$4.Y.aC.tex | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee1030));
    var aboveGround = [Bindable_this, Bindable_this$4];
    new $c_sci_Range$Exclusive(0, (wallStrips.length | 0), 1).bz(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$14) => ((v1$2) => {
      var i$1 = (v1$2 | 0);
      var strip = wallStrips[i$1];
      var size = $m_Lsketches_rooms_columns_Columns$package$().jW($m_Lsketches_rooms_columns_Columns$package$().r4(strip), $m_Lsketches_rooms_columns_Columns$package$().aP, $m_Lsketches_rooms_columns_Columns$package$().fY);
      var tex$9 = $p_Lsketches_rooms_columns_Columns$package$__bakeAmbience$1__T4__Lsketchlib_utils_bake_TextureBaker__T__Ltrivalibs_graphics_painter_Form__I__I__Ltrivalibs_graphics_painter_Panel(this, ambienceClear, ambienceBaker, ("wall strip " + i$1), $p_Lsketches_rooms_columns_Columns$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$14, $m_Lsketches_rooms_columns_Columns$package$().qZ(strip, new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((pos$3, uv$3$1, f$3, fromLeft$3) => {
        var fromLeft$2 = (+fromLeft$3);
        return $m_Lsketches_rooms_columns_Columns$package$().rR(pos$3, uv$3$1, f$3, fromLeft$2);
      })))), (size.a0() | 0), (size.a1() | 0));
      var renderQuads = $m_Lsketches_rooms_columns_Columns$package$().qZ(strip, new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((pos$3$1, uv$3$2, f$3$1, fromLeft$3$1) => {
        var fromLeft$2$1 = (+fromLeft$3$1);
        return $m_Lsketches_rooms_columns_Columns$package$().um(pos$3$1, uv$3$2, f$3$1, fromLeft$2$1);
      })));
      var plainQuads = [];
      new $c_sci_Range$Exclusive(0, (strip.length | 0), 1).bz(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((j$3) => {
        var j$2 = (j$3 | 0);
        var face = strip[j$2];
        if ($p_Lsketches_rooms_columns_Columns$package$__isBay$1__Lsketches_rooms_columns_Face__Z(this, face)) {
          var painting = $p_Lsketches_rooms_columns_Columns$package$__paintBay$1__Lsketches_rooms_columns_RoomPalette__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Lsketchlib_utils_room_Wall__T2(this, palette, p$14, paintShade, face.aY);
          var Bindable_this$1 = p$14.gu($p_Lsketches_rooms_columns_Columns$package$__wallForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$14, [renderQuads[j$2]]), bayShade, "none", (void 0));
          var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
          var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tileSamp", tileSampler);
          var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("eye", eyePos);
          var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("paintRect", painting.a1());
          var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("grainOffset", new $c_Ltrivalibs_graphics_math_cpu_Vec2(($m_Ltrivalibs_utils_random_random$package$().lU() * $m_Lsketches_rooms_columns_Columns$package$().bU), ($m_Ltrivalibs_utils_random_random$package$().lU() * $m_Lsketches_rooms_columns_Columns$package$().bU)));
          var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", tex$9);
          var e7$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("paint", painting.a0());
          var e8$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("grain", grainTex);
          var \u03b4scrutinee1038 = e1$proxy4.s;
          $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$1, (Bindable_this$1.Y.I.samp | 0), \u03b4scrutinee1038);
          var \u03b4scrutinee1056 = e2$proxy3.s;
          $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$1, (Bindable_this$1.Y.I.tileSamp | 0), \u03b4scrutinee1056);
          var \u03b4scrutinee1072 = e3$proxy1.s;
          $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$1, (Bindable_this$1.Y.I.eye | 0), \u03b4scrutinee1072);
          var \u03b4scrutinee1090 = e4$proxy1.s;
          var idx$7 = (Bindable_this$1.Y.I.paintRect | 0);
          var existing = ((idx$7 < (Bindable_this$1.c7.length | 0)) ? Bindable_this$1.c7[idx$7] : null);
          var device$proxy2 = Bindable_this$1.jv.h;
          if ((existing !== null)) {
            existing.N.F(existing.o, \u03b4scrutinee1090);
            var $x_137 = existing.M.queue;
            var $x_136 = existing.H;
            var s$proxy6 = existing.o;
            var $x_135 = s$proxy6.dv.buffer;
            $x_137.writeBuffer($x_136, 0.0, $x_135);
            var $x_134 = existing;
          } else {
            var uv$11 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$();
            var buffer$1 = new ArrayBuffer(16);
            var arr$proxy17 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$1), 1);
            var b$23 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy17.dv, 0), device$proxy2, uv$11);
            b$23.N.F(b$23.o, \u03b4scrutinee1090);
            var $x_140 = b$23.M.queue;
            var $x_139 = b$23.H;
            var s$proxy7 = b$23.o;
            var $x_138 = s$proxy7.dv.buffer;
            $x_140.writeBuffer($x_139, 0.0, $x_138);
            var $x_134 = b$23;
          }
          $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$1, idx$7, $x_134);
          var \u03b4scrutinee1129 = e5$proxy1.s;
          var idx$2$1 = (Bindable_this$1.Y.I.grainOffset | 0);
          var existing$2 = ((idx$2$1 < (Bindable_this$1.c7.length | 0)) ? Bindable_this$1.c7[idx$2$1] : null);
          var device$proxy3 = Bindable_this$1.jv.h;
          if ((existing$2 !== null)) {
            existing$2.N.F(existing$2.o, \u03b4scrutinee1129);
            var $x_144 = existing$2.M.queue;
            var $x_143 = existing$2.H;
            var s$proxy8 = existing$2.o;
            var $x_142 = s$proxy8.dv.buffer;
            $x_144.writeBuffer($x_143, 0.0, $x_142);
            var $x_141 = existing$2;
          } else {
            var uv$2$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$();
            var buffer$2$1 = new ArrayBuffer(8);
            var arr$proxy18 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2$1), 1);
            var b$2$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy18.dv, 0), device$proxy3, uv$2$2);
            b$2$1.N.F(b$2$1.o, \u03b4scrutinee1129);
            var $x_147 = b$2$1.M.queue;
            var $x_146 = b$2$1.H;
            var s$proxy9 = b$2$1.o;
            var $x_145 = s$proxy9.dv.buffer;
            $x_147.writeBuffer($x_146, 0.0, $x_145);
            var $x_141 = b$2$1;
          }
          $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$1, idx$2$1, $x_141);
          var \u03b4scrutinee1176 = e6$proxy1.s;
          $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$1, (Bindable_this$1.Y.aC.tex | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee1176));
          var \u03b4scrutinee1196 = e7$proxy1.s;
          $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$1, (Bindable_this$1.Y.aC.paint | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee1196));
          var \u03b4scrutinee1218 = e8$proxy1.s;
          $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$1, (Bindable_this$1.Y.aC.grain | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee1218));
          var $x_133 = aboveGround.push(Bindable_this$1);
          return ($x_133 | 0);
        } else {
          return (plainQuads.push(renderQuads[j$2]) | 0);
        }
      })));
      if (((plainQuads.length | 0) > 0)) {
        var Bindable_this$2 = p$14.gu($p_Lsketches_rooms_columns_Columns$package$__wallForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$14, plainQuads), wallShade, "none", (void 0));
        var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
        var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("eye", eyePos);
        var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", tex$9);
        var \u03b4scrutinee1226 = e1$proxy5.s;
        $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$2, (Bindable_this$2.Y.I.samp | 0), \u03b4scrutinee1226);
        var \u03b4scrutinee1240 = e2$proxy4.s;
        $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$2, (Bindable_this$2.Y.I.eye | 0), \u03b4scrutinee1240);
        var \u03b4scrutinee1258 = e3$proxy2.s;
        $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$2, (Bindable_this$2.Y.aC.tex | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee1258));
        aboveGround.push(Bindable_this$2);
      }
    }))(p$5)));
    var clearColor$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec4(0.9, 0.9, 0.9, 0.0);
    var mirror$1 = $m_Ltrivalibs_graphics_geometry_Plane$().nM;
    var mirror = $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().rK(p$5, cam, aboveGround, "vp", $m_Lsketches_rooms_columns_Columns$package$().gW, mirror$1, 5.0, 3.0, 0.0, 0.6, 0.5, 3.0, clearColor$4);
    var sceneShapes = [];
    $m_sjs_js_ArrayOps$().B(aboveGround, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((s$2$1) => (sceneShapes.push(s$2$1) | 0))));
    var floorW = ((+bounds.aU) - (+bounds.aM));
    var floorD = ((+bounds.aV) - (+bounds.aN));
    var a$5 = ((floorW * $m_Lsketches_rooms_columns_Columns$package$().fY) / $m_Lsketches_rooms_columns_Columns$package$().g2);
    var piecesX = $doubleToInt((+Math.ceil(a$5)));
    var a$6 = ((floorD * $m_Lsketches_rooms_columns_Columns$package$().fY) / $m_Lsketches_rooms_columns_Columns$package$().g2);
    var piecesZ = $doubleToInt((+Math.ceil(a$6)));
    new $c_sci_Range$Exclusive(0, piecesX, 1).bz(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$16) => ((v1$2$1) => {
      var ix = (v1$2$1 | 0);
      new $c_sci_Range$Exclusive(0, piecesZ, 1).bz(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((iz$3) => {
        var iz$2 = (iz$3 | 0);
        var x$proxy85 = new $c_T4(((+bounds.aM) + ((floorW * ix) / piecesX)), ((+bounds.aN) + ((floorD * iz$2) / piecesZ)), ((+bounds.aM) + ((floorW * ((1 + ix) | 0)) / piecesX)), ((+bounds.aN) + ((floorD * ((1 + iz$2) | 0)) / piecesZ)));
        var pieceForm = $p_Lsketches_rooms_columns_Columns$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$16, [$m_Lsketchlib_utils_room_Surfaces$package$().jQ(x$proxy85, 0.0, false, 0.0)]);
        var size$1 = $m_Lsketches_rooms_columns_Columns$package$().jW((floorW / piecesX), (floorD / piecesZ), $m_Lsketches_rooms_columns_Columns$package$().fY);
        var tex$10 = $p_Lsketches_rooms_columns_Columns$package$__bakeAmbience$1__T4__Lsketchlib_utils_bake_TextureBaker__T__Ltrivalibs_graphics_painter_Form__I__I__Ltrivalibs_graphics_painter_Panel(this, ambienceClear, ambienceBaker, ((("floor " + ix) + ",") + iz$2), pieceForm, (size$1.a0() | 0), (size$1.a1() | 0));
        var Bindable_this$3 = p$16.gu(pieceForm, floorShade, "front", (void 0));
        var e1$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
        var e2$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("tileSamp", tileSampler);
        var e3$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", tex$10);
        var e4$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("slabTex", slabTex);
        var e5$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("reflTex", mirror.nC);
        var e6$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("res", canvasRes);
        var \u03b4scrutinee1264 = e1$proxy6.s;
        $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$3, (Bindable_this$3.Y.I.samp | 0), \u03b4scrutinee1264);
        var \u03b4scrutinee1278 = e2$proxy5.s;
        $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$3, (Bindable_this$3.Y.I.tileSamp | 0), \u03b4scrutinee1278);
        var \u03b4scrutinee1300 = e3$proxy3.s;
        $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$3, (Bindable_this$3.Y.aC.tex | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee1300));
        var \u03b4scrutinee1316 = e4$proxy2.s;
        $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$3, (Bindable_this$3.Y.aC.slabTex | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee1316));
        var \u03b4scrutinee1334 = e5$proxy2.s;
        $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$3, (Bindable_this$3.Y.aC.reflTex | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee1334));
        var \u03b4scrutinee1344 = e6$proxy2.s;
        $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$3, (Bindable_this$3.Y.I.res | 0), \u03b4scrutinee1344);
        var $x_148 = sceneShapes.push(Bindable_this$3);
        return ($x_148 | 0);
      })));
    }))(p$5)));
    var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy3 = ul$proxy3.aE;
    var buffer$3 = new ArrayBuffer(64);
    var arr$proxy19 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var sceneVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy19.dv, 0), p$5.h, uv$proxy3);
    var clearColor$5 = $m_Ltrivalibs_graphics_math_cpu_Vec4$().lO().g(new $c_T4(0.9, 0.95, 0.99, 1.0));
    var Panel_this = p$5.cd((void 0), (void 0), clearColor$5, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), sceneShapes, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    var e1$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("vp", sceneVp);
    var \u03b4scrutinee1355 = e1$proxy7.s;
    var dict$proxy1 = Panel_this.i3;
    dict$proxy1.vp = \u03b4scrutinee1355;
    var bloom = $m_Lsketchlib_utils_bloom_Bloom$().rJ(p$5, Panel_this, $m_Lsketches_rooms_columns_Columns$package$().mL, 1.0, 3.0, 5, 0.9, 1.5);
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().sW(p$5.s3(), true, 400.0, 5.0, true, (void 0), 90.0, 50.0);
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, input, 2.5, $m_Lsketches_rooms_columns_Columns$package$().nh);
    p$5.tS(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2$2, v2$2) => {
      var w = (+v1$2$2);
      var h = (+v2$2);
      var aspect$2 = (w / h);
      var fov$1 = cam.bK;
      var near$1 = cam.hd;
      var far$1 = cam.hc;
      var rotH$2 = cam.b0;
      var rotV$2 = cam.bL;
      var pos$2 = cam.aj;
      cam.lX(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$2);
      var value$proxy65 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(w, h);
      canvasRes.N.F(canvasRes.o, value$proxy65);
      var $x_151 = canvasRes.M.queue;
      var $x_150 = canvasRes.H;
      var s$proxy10 = canvasRes.o;
      var $x_149 = s$proxy10.dv.buffer;
      $x_151.writeBuffer($x_150, 0.0, $x_149);
      mirror.up(w, h);
    })));
    $m_Ltrivalibs_utils_animation_animate$package$().rD(((p$17) => ((arg1$2) => {
      var tpf = (+arg1$2);
      input.gv(tpf);
      controller.gv(tpf);
      cam.aj = $m_Lsketchlib_utils_room_Confine$package$().s9(floorBnd, cam.aj, $m_Lsketches_rooms_columns_Columns$package$().kf, ($m_Ltrivalibs_dev_dev$package$().qg() ? cam.aj.A : $m_Lsketches_rooms_columns_Columns$package$().iU));
      var vp = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().ho(), cam.jw, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.r9());
      sceneVp.N.F(sceneVp.o, vp);
      var $x_154 = sceneVp.M.queue;
      var $x_153 = sceneVp.H;
      var s$proxy11 = sceneVp.o;
      var $x_152 = s$proxy11.dv.buffer;
      $x_154.writeBuffer($x_153, 0.0, $x_152);
      var value$proxy66 = cam.aj;
      eyePos.N.F(eyePos.o, value$proxy66);
      var $x_157 = eyePos.M.queue;
      var $x_156 = eyePos.H;
      var s$proxy12 = eyePos.o;
      var $x_155 = s$proxy12.dv.buffer;
      $x_157.writeBuffer($x_156, 0.0, $x_155);
      mirror.tW(vp);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$17, Panel_this);
      bloom.tX();
      p$17.uA(bloom.nw);
    }))(p$5));
  })));
});
var $d_Lsketches_rooms_columns_Columns$package$ = new $TypeData().i($c_Lsketches_rooms_columns_Columns$package$, "sketches.rooms.columns.Columns$package$", ({
  dj: 1
}));
var $n_Lsketches_rooms_columns_Columns$package$;
function $m_Lsketches_rooms_columns_Columns$package$() {
  if ((!$n_Lsketches_rooms_columns_Columns$package$)) {
    $n_Lsketches_rooms_columns_Columns$package$ = new $c_Lsketches_rooms_columns_Columns$package$();
  }
  return $n_Lsketches_rooms_columns_Columns$package$;
}
/** @constructor */
function $c_Lsketches_rooms_columns_PaintedQuad(quad, hsv) {
  this.hA = null;
  this.iW = null;
  this.hA = quad;
  this.iW = hsv;
}
$p = $c_Lsketches_rooms_columns_PaintedQuad.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_columns_PaintedQuad;
/** @constructor */
function $h_Lsketches_rooms_columns_PaintedQuad() {
}
$h_Lsketches_rooms_columns_PaintedQuad.prototype = $p;
var $d_Lsketches_rooms_columns_PaintedQuad = new $TypeData().i($c_Lsketches_rooms_columns_PaintedQuad, "sketches.rooms.columns.PaintedQuad", ({
  dk: 1
}));
function $p_Lsketches_rooms_columns_PillarPainting__nextSegment__D__T2($thiz, remaining) {
  if ((remaining <= ($thiz.kh * $m_Lsketches_rooms_columns_Pillars$package$().kj))) {
    return new $c_T2$mcDD$sp(remaining, 0.0);
  } else {
    var x = ($m_Ltrivalibs_utils_random_random$package$().lV($m_Lsketches_rooms_columns_Pillars$package$().nl, $m_Lsketches_rooms_columns_Pillars$package$().kj) * remaining);
    return $ct_T2__O__O__(new $c_T2(), x, (remaining - x));
  }
}
function $p_Lsketches_rooms_columns_PillarPainting__jitteredCorner__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, x, y) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2((x + (($m_Ltrivalibs_utils_random_random$package$().hp() * $m_Lsketches_rooms_columns_Pillars$package$().j0) * $thiz.hB)), (y + (($m_Ltrivalibs_utils_random_random$package$().hp() * $m_Lsketches_rooms_columns_Pillars$package$().j0) * $thiz.hB)));
}
function $p_Lsketches_rooms_columns_PillarPainting__jitteredQuad__D__D__sjs_js_Array($thiz, bottom, segment) {
  var gap = ($m_Lsketches_rooms_columns_Pillars$package$().np * $thiz.kh);
  var top = ((bottom + segment) - gap);
  var low = (bottom + gap);
  return $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().hj($p_Lsketches_rooms_columns_PillarPainting__jitteredCorner__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, 0.0, top), $p_Lsketches_rooms_columns_PillarPainting__jitteredCorner__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, 0.0, low), $p_Lsketches_rooms_columns_PillarPainting__jitteredCorner__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, $thiz.hB, low), $p_Lsketches_rooms_columns_PillarPainting__jitteredCorner__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, $thiz.hB, top));
}
function $p_Lsketches_rooms_columns_PillarPainting__variedColor__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3($thiz, hsv) {
  var x = (hsv.w + ($m_Ltrivalibs_utils_random_random$package$().hp() * $m_Lsketches_rooms_columns_Pillars$package$().nk));
  var p$proxy2 = (hsv.A + ($m_Ltrivalibs_utils_random_random$package$().hp() * $m_Lsketches_rooms_columns_Pillars$package$().no));
  var y = ((p$proxy2 < 0.0) ? 0.0 : ((p$proxy2 > 1.0) ? 1.0 : p$proxy2));
  var p$proxy3 = (hsv.u + ($m_Ltrivalibs_utils_random_random$package$().hp() * $m_Lsketches_rooms_columns_Pillars$package$().nq));
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, ((p$proxy3 < 0.0) ? 0.0 : ((p$proxy3 > 1.0) ? 1.0 : p$proxy3)));
}
/** @constructor */
function $c_Lsketches_rooms_columns_PillarPainting(width, height, colors) {
  this.hB = 0.0;
  this.kh = 0.0;
  this.ki = null;
  this.iY = null;
  this.iX = 0.0;
  this.hB = width;
  this.kh = height;
  this.ki = [];
  var remaining = height;
  while ((remaining > 0.0)) {
    var next = $p_Lsketches_rooms_columns_PillarPainting__nextSegment__D__T2(this, remaining);
    this.ki.push((+next.a0()));
    remaining = (+next.a1());
  }
  this.iY = [];
  this.iX = 0.0;
  var array = this.ki;
  var len = (array.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = array[i];
    var segment = (+x0);
    var pairColor = $m_Ltrivalibs_utils_random_random$package$().qN(colors);
    var i$1 = 0;
    while (true) {
      (this.iY.push(new $c_Lsketches_rooms_columns_PaintedQuad($p_Lsketches_rooms_columns_PillarPainting__jitteredQuad__D__D__sjs_js_Array(this, this.iX, segment), $p_Lsketches_rooms_columns_PillarPainting__variedColor__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3(this, pairColor))) | 0);
      if ((i$1 === 1)) {
        break;
      }
      i$1 = ((1 + i$1) | 0);
    }
    this.iX = (this.iX + segment);
    i = ((1 + i) | 0);
  }
  this.iY.sort(((a$2, b$2) => ((a$2.iW.u < b$2.iW.u) ? (-1) : 1)));
}
$p = $c_Lsketches_rooms_columns_PillarPainting.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_columns_PillarPainting;
/** @constructor */
function $h_Lsketches_rooms_columns_PillarPainting() {
}
$h_Lsketches_rooms_columns_PillarPainting.prototype = $p;
var $d_Lsketches_rooms_columns_PillarPainting = new $TypeData().i($c_Lsketches_rooms_columns_PillarPainting, "sketches.rooms.columns.PillarPainting", ({
  dl: 1
}));
/** @constructor */
function $c_Lsketches_rooms_columns_Pillars$package$() {
  this.iZ = 0;
  this.nm = 0;
  this.nl = 0.0;
  this.kj = 0.0;
  this.np = 0.0;
  this.j0 = 0.0;
  this.nk = 0.0;
  this.no = 0.0;
  this.nq = 0.0;
  this.nn = 0.0;
  $n_Lsketches_rooms_columns_Pillars$package$ = this;
  this.iZ = 6;
  this.nm = 4;
  this.nl = 0.1;
  this.kj = 0.45;
  this.np = 0.004;
  this.j0 = 0.04;
  this.nk = 0.015;
  this.no = 0.23;
  this.nq = 0.3;
  this.nn = (2.0 * $m_Lsketches_rooms_columns_Pillars$package$().j0);
}
$p = $c_Lsketches_rooms_columns_Pillars$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_columns_Pillars$package$;
/** @constructor */
function $h_Lsketches_rooms_columns_Pillars$package$() {
}
$h_Lsketches_rooms_columns_Pillars$package$.prototype = $p;
var $d_Lsketches_rooms_columns_Pillars$package$ = new $TypeData().i($c_Lsketches_rooms_columns_Pillars$package$, "sketches.rooms.columns.Pillars$package$", ({
  dm: 1
}));
var $n_Lsketches_rooms_columns_Pillars$package$;
function $m_Lsketches_rooms_columns_Pillars$package$() {
  if ((!$n_Lsketches_rooms_columns_Pillars$package$)) {
    $n_Lsketches_rooms_columns_Pillars$package$ = new $c_Lsketches_rooms_columns_Pillars$package$();
  }
  return $n_Lsketches_rooms_columns_Pillars$package$;
}
/** @constructor */
function $c_Lsketches_rooms_columns_RoomPalette() {
  this.nr = 0.0;
  this.kk = null;
  this.nr = ($m_Ltrivalibs_utils_random_random$package$().lU() * (1.0 / $m_Lsketches_rooms_columns_Pillars$package$().iZ));
  this.kk = [];
  var end = $m_Lsketches_rooms_columns_Pillars$package$().iZ;
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var n = (x0 + this.nr);
      var i$1 = 0;
      while (true) {
        var x0$1 = i$1;
        var $x_2 = this.kk;
        var x = ((n / $m_Lsketches_rooms_columns_Pillars$package$().iZ) + (0.1 * $m_Ltrivalibs_utils_random_random$package$().hp()));
        var p$proxy1 = ((0.8 * $m_Ltrivalibs_utils_random_random$package$().jR()) + 0.45);
        var $x_1 = $x_2.push(new $c_Ltrivalibs_graphics_math_cpu_Vec3(x, ((p$proxy1 < 0.0) ? 0.0 : ((p$proxy1 > 1.0) ? 1.0 : p$proxy1)), ((x0$1 === 0) ? (0.65 * $m_Ltrivalibs_utils_random_random$package$().jR()) : ((0.65 * $m_Ltrivalibs_utils_random_random$package$().jR()) + 0.45))));
        if ((i$1 === 1)) {
          break;
        }
        i$1 = ((1 + i$1) | 0);
      }
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
}
$p = $c_Lsketches_rooms_columns_RoomPalette.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_columns_RoomPalette;
/** @constructor */
function $h_Lsketches_rooms_columns_RoomPalette() {
}
$h_Lsketches_rooms_columns_RoomPalette.prototype = $p;
$p.u0 = (function() {
  var colors = [];
  var end = $m_Lsketches_rooms_columns_Pillars$package$().nm;
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      (colors.push($m_Ltrivalibs_utils_random_random$package$().qN(this.kk)) | 0);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  return colors;
});
var $d_Lsketches_rooms_columns_RoomPalette = new $TypeData().i($c_Lsketches_rooms_columns_RoomPalette, "sketches.rooms.columns.RoomPalette", ({
  dn: 1
}));
/** @constructor */
function $c_Lsketchlib_shaders_room_Grime$package$() {
}
$p = $c_Lsketchlib_shaders_room_Grime$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_shaders_room_Grime$package$;
/** @constructor */
function $h_Lsketchlib_shaders_room_Grime$package$() {
}
$h_Lsketchlib_shaders_room_Grime$package$.prototype = $p;
$p.sM = (function(patch, darken, patchiness) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gt($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(darken), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(patch, patchiness));
});
$p.qo = (function(dist, creep, patch, width, darken, creepAmount, patchiness) {
  var buildup = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().st($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jA($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().v0($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bx(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(creep, creepAmount)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0))), (width / 3.0)));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gt($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0), $m_Lsketchlib_shaders_room_Grime$package$().sM(patch, darken, patchiness), buildup);
});
var $d_Lsketchlib_shaders_room_Grime$package$ = new $TypeData().i($c_Lsketchlib_shaders_room_Grime$package$, "sketchlib.shaders.room.Grime$package$", ({
  dp: 1
}));
var $n_Lsketchlib_shaders_room_Grime$package$;
function $m_Lsketchlib_shaders_room_Grime$package$() {
  if ((!$n_Lsketchlib_shaders_room_Grime$package$)) {
    $n_Lsketchlib_shaders_room_Grime$package$ = new $c_Lsketchlib_shaders_room_Grime$package$();
  }
  return $n_Lsketchlib_shaders_room_Grime$package$;
}
/** @constructor */
function $c_Lsketchlib_utils_bake_Bake$package$() {
}
$p = $c_Lsketchlib_utils_bake_Bake$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_Bake$package$;
/** @constructor */
function $h_Lsketchlib_utils_bake_Bake$package$() {
}
$h_Lsketchlib_utils_bake_Bake$package$.prototype = $p;
$p.jC = (function(baker, form, width, height, transform, format, mips, clearColor) {
  var Painter_this = baker.hC;
  var value$proxy8 = ((transform === (void 0)) ? new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0) : transform);
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.aE;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), Painter_this.h, uv$proxy1);
  b.N.F(b.o, value$proxy8);
  var $x_3 = b.M.queue;
  var $x_2 = b.H;
  var s$proxy1 = b.o;
  var $x_1 = s$proxy1.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var Bindable_this = baker.hC.gu(form, baker.ns, "none", (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", b);
  var \u03b4scrutinee5 = e1$proxy1.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, (Bindable_this.Y.I.model | 0), \u03b4scrutinee5);
  var format$1 = ((format === (void 0)) ? "rgba8unorm" : format);
  var panel = baker.hC.cd(width, height, clearColor, (void 0), (void 0), (void 0), mips, format$1, (void 0), Bindable_this, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(baker.hC, panel);
  return panel;
});
var $d_Lsketchlib_utils_bake_Bake$package$ = new $TypeData().i($c_Lsketchlib_utils_bake_Bake$package$, "sketchlib.utils.bake.Bake$package$", ({
  dq: 1
}));
var $n_Lsketchlib_utils_bake_Bake$package$;
function $m_Lsketchlib_utils_bake_Bake$package$() {
  if ((!$n_Lsketchlib_utils_bake_Bake$package$)) {
    $n_Lsketchlib_utils_bake_Bake$package$ = new $c_Lsketchlib_utils_bake_Bake$package$();
  }
  return $n_Lsketchlib_utils_bake_Bake$package$;
}
/** @constructor */
function $c_Lsketchlib_utils_bake_TextureBaker(painter, shade) {
  this.hC = null;
  this.ns = null;
  this.hC = painter;
  this.ns = shade;
}
$p = $c_Lsketchlib_utils_bake_TextureBaker.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_TextureBaker;
/** @constructor */
function $h_Lsketchlib_utils_bake_TextureBaker() {
}
$h_Lsketchlib_utils_bake_TextureBaker.prototype = $p;
var $d_Lsketchlib_utils_bake_TextureBaker = new $TypeData().i($c_Lsketchlib_utils_bake_TextureBaker, "sketchlib.utils.bake.TextureBaker", ({
  dr: 1
}));
function $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($thiz, program) {
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg;
  try {
    var uv = ctx.a5.i("uv");
    var AssignTarget_this = ctx.a2.G("worldPos");
    var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gw($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().cf($thiz.kl, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cb(), $m_Ltrivalibs_graphics_math_gpu_vec4$().a7(ctx.a5.i("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x0 = (((("  " + AssignTarget_this.y) + " = ") + value$proxy1.f) + ";");
    var AssignTarget_this$2 = ctx.a2.G("normal");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().lT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gw($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().cf($thiz.kl, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cb(), $m_Ltrivalibs_graphics_math_gpu_vec4$().a7(ctx.a5.i("normal"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$())), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$());
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x1 = (((("  " + AssignTarget_this$2.y) + " = ") + value$proxy3.f) + ";");
    var AssignTarget_this$3 = ctx.a2.G("uv");
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x2 = (((("  " + AssignTarget_this$3.y) + " = ") + uv.f) + ";");
    var AssignTarget_this$4 = ctx.a2.c8;
    var $x_5 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_vec2$();
    var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a9(uv);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().W(uv);
    var value$proxy6 = $x_5.ad($x_4.qj($x_3.a7($x_2, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aT().aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(1.0)) + " - ") + e$proxy1.f) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$()), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0));
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x3 = (((("  " + AssignTarget_this$4.y) + " = ") + value$proxy6.f) + ";");
    var array = [x0, x1, x2, x3];
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
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev;
  }
  program.as = $x_1;
  var array$1 = reg.Z;
  var len = (array$1.length | 0);
  var i$1 = 0;
  while ((i$1 < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i$1]);
    i$1 = ((1 + i$1) | 0);
  }
}
/** @constructor */
function $c_Lsketchlib_utils_bake_TextureBaker$() {
  this.kl = null;
  $n_Lsketchlib_utils_bake_TextureBaker$ = this;
  this.kl = ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "model"));
}
$p = $c_Lsketchlib_utils_bake_TextureBaker$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_TextureBaker$;
/** @constructor */
function $h_Lsketchlib_utils_bake_TextureBaker$() {
}
$h_Lsketchlib_utils_bake_TextureBaker$.prototype = $p;
var $d_Lsketchlib_utils_bake_TextureBaker$ = new $TypeData().i($c_Lsketchlib_utils_bake_TextureBaker$, "sketchlib.utils.bake.TextureBaker$", ({
  ds: 1
}));
var $n_Lsketchlib_utils_bake_TextureBaker$;
function $m_Lsketchlib_utils_bake_TextureBaker$() {
  if ((!$n_Lsketchlib_utils_bake_TextureBaker$)) {
    $n_Lsketchlib_utils_bake_TextureBaker$ = new $c_Lsketchlib_utils_bake_TextureBaker$();
  }
  return $n_Lsketchlib_utils_bake_TextureBaker$;
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
$p.rJ = (function(p, scene, intensity, threshold, blurRadius, mipLevels, toneKnee, toneWhite) {
  if ((mipLevels < 2)) {
    var message$proxy1 = (("bloom mipLevels must be >= 2 (got " + mipLevels) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).X;
  }
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy1 = ul$proxy1.aE;
  var buffer = new ArrayBuffer(4);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.h, uv$proxy1);
  b.N.F(b.o, blurRadius);
  var $x_3 = b.M.queue;
  var $x_2 = b.H;
  var s$proxy1 = b.o;
  var $x_1 = s$proxy1.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy2 = ul$proxy2.aE;
  var buffer$2 = new ArrayBuffer(4);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.h, uv$proxy2);
  b$2.N.F(b$2.o, intensity);
  var $x_6 = b$2.M.queue;
  var $x_5 = b$2.H;
  var s$proxy2 = b$2.o;
  var $x_4 = s$proxy2.dv.buffer;
  $x_6.writeBuffer($x_5, 0.0, $x_4);
  var sampler = p.jT();
  var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
    var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var color = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("color");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var brightness = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("brightness");
      var $x_10 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_9 = $m_sjsr_package$();
      var $x_8 = color.P($m_Ltrivalibs_graphics_math_gpu_expr$package$().jM($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().gp($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().hq(ctx$2.he))));
      var $x_7 = brightness.P($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bx($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bx($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().a9(color), 0.2126), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().W(color), 0.7152)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().gx(color), 0.0722)));
      var AssignTarget_this = ctx$2.ar.G("color");
      var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().uu($m_Ltrivalibs_graphics_math_gpu_vec4$().jD($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0)), color, $m_Ltrivalibs_graphics_math_gpu_expr$package$().sA(brightness, ctx$2.D.i("threshold")));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_10.ax(new $c_sjsr_WrappedVarArgs($x_9.d(new ($d_T.r().C)([$x_8, $x_7, (((("  " + AssignTarget_this.y) + " = ") + value$proxy1.f) + ";")]))));
    }));
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg;
    try {
      var $x_11 = body$proxy1.g(ctx);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev;
    }
    program$3.aG = $x_11;
    $m_sjs_js_ArrayOps$().B(reg.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3);
    }))(program$3)));
  }));
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy1.g(program);
  var b$1 = program.aG;
  var helperFns$proxy1 = program.au();
  var id = p.q;
  p.q = ((1 + p.q) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["threshold"], []);
  var dict = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i = 0;
  while ((i < (names.length | 0))) {
    dict[names[i]] = i;
    i = ((1 + i) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["scene"], []);
  var dict$2 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["threshold"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).O.t()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.ab, sd.aa, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;");
  console.log(wgsl);
  var module = p.h.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl)])))));
  var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])], []);
  var result = [];
  $m_sjs_js_ArrayOps$().B(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2) => (result.push(p.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2)])))))) | 0))));
  var x1 = $ct_T2__O__O__(new $c_T2(), result, $m_Ltrivalibs_graphics_shader_layouts$().K(p.h, result));
  var \u03b46$ = x1;
  var bgls$2 = \u03b46$.ao;
  var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl = p.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries)])))));
  if ((panelBgl !== null)) {
    var other$proxy1 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy1);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().K(p.h, allBgls);
  var thresholdShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
    var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
      var AssignTarget_this$1 = ctx$2$1.ar.G("color");
      var value$proxy3 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().rY($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$1.D.i("samp"), ctx$2$1.J.i("uv"), ctx$2$1.D.i("blurRadius"), null);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return (((("  " + AssignTarget_this$1.y) + " = ") + value$proxy3.f) + ";");
    }));
    var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$1;
    try {
      var $x_12 = body$proxy3.g(ctx$1);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$1;
    }
    program$3$1.aG = $x_12;
    $m_sjs_js_ArrayOps$().B(reg$1.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3$1) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3$1);
    }))(program$3$1)));
  }));
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy2.g(program$2);
  var b$3 = program$2.aG;
  var helperFns$proxy2 = program$2.au();
  var id$2 = p.q;
  p.q = ((1 + p.q) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict$3 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$3 = 0;
  while ((i$3 < (names$4.length | 0))) {
    dict$3[names$4[i$3]] = i$3;
    i$3 = ((1 + i$3) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$4 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$4 = 0;
  while ((i$4 < (names$5.length | 0))) {
    dict$4[names$5[i$4]] = i$4;
    i$4 = ((1 + i$4) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$3, helperFns$proxy2);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).O.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).O.t()], [])));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.ab, sd$2.aa, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  console.log(wgsl$2);
  var module$2 = p.h.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$2)])))));
  var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []))], []);
  var result$2 = [];
  $m_sjs_js_ArrayOps$().B(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$1) => (result$2.push(p.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$1)])))))) | 0))));
  var x4 = $ct_T2__O__O__(new $c_T2(), result$2, $m_Ltrivalibs_graphics_shader_layouts$().K(p.h, result$2));
  var \u03b46$$2 = x4;
  var bgls$4 = \u03b46$$2.ao;
  var entries$2$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl$2 = p.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$2)])))));
  if ((panelBgl$2 !== null)) {
    var other$proxy2 = [panelBgl$2];
    var allBgls$2 = bgls$4.concat(other$proxy2);
  } else {
    var allBgls$2 = bgls$4;
  }
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().K(p.h, allBgls$2);
  var downsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
    var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
      var AssignTarget_this$2 = ctx$2$2.ar.G("color");
      var value$proxy5 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().uT($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$2.D.i("samp"), ctx$2$2.J.i("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(ctx$2$2.D.i("blurRadius"), 0.5), null);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return (((("  " + AssignTarget_this$2.y) + " = ") + value$proxy5.f) + ";");
    }));
    var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$2;
    try {
      var $x_13 = body$proxy5.g(ctx$3);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$2;
    }
    program$3$2.aG = $x_13;
    $m_sjs_js_ArrayOps$().B(reg$2.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$7) => ((data$3$2) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$7, data$3$2);
    }))(program$3$2)));
  }));
  var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy3.g(program$3$3);
  var b$4 = program$3$3.aG;
  var helperFns$proxy3 = program$3$3.au();
  var id$3 = p.q;
  p.q = ((1 + p.q) | 0);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict$5 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$5 = 0;
  while ((i$5 < (names$7.length | 0))) {
    dict$5[names$7[i$5]] = i$5;
    i$5 = ((1 + i$5) | 0);
  }
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$6 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$6 = 0;
  while ((i$6 < (names$8.length | 0))) {
    dict$6[names$8[i$6]] = i$6;
    i$6 = ((1 + i$6) | 0);
  }
  var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$4, helperFns$proxy3);
  var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).O.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).O.t()], [])));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.ab, sd$3.aa, fragBuiltinParams$3);
  var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  console.log(wgsl$3);
  var module$3 = p.h.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$3)])))));
  var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []))], []);
  var result$3 = [];
  $m_sjs_js_ArrayOps$().B(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$3) => (result$3.push(p.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$3)])))))) | 0))));
  var x7 = $ct_T2__O__O__(new $c_T2(), result$3, $m_Ltrivalibs_graphics_shader_layouts$().K(p.h, result$3));
  var \u03b46$$3 = x7;
  var bgls$6 = \u03b46$$3.ao;
  var entries$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl$3 = p.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$3)])))));
  if ((panelBgl$3 !== null)) {
    var other$proxy3 = [panelBgl$3];
    var allBgls$3 = bgls$6.concat(other$proxy3);
  } else {
    var allBgls$3 = bgls$6;
  }
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().K(p.h, allBgls$3);
  var upsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
  var layers = [];
  var Bindable_this = p.gr(thresholdShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("threshold", threshold);
  var \u03b4scrutinee192 = e1$proxy1.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this, (Bindable_this.U.aC.scene | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee192));
  var \u03b4scrutinee196 = (+e2$proxy1.s);
  var idx$1 = (Bindable_this.U.I.threshold | 0);
  var existing = ((idx$1 < (Bindable_this.b7.length | 0)) ? Bindable_this.b7[idx$1] : null);
  var device$proxy1 = Bindable_this.h6.h;
  if ((existing !== null)) {
    existing.N.F(existing.o, \u03b4scrutinee196);
    var $x_17 = existing.M.queue;
    var $x_16 = existing.H;
    var s$proxy3 = existing.o;
    var $x_15 = s$proxy3.dv.buffer;
    $x_17.writeBuffer($x_16, 0.0, $x_15);
    var $x_14 = existing;
  } else {
    var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$3 = new ArrayBuffer(4);
    var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var b$3$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), device$proxy1, uv$2);
    b$3$1.N.F(b$3$1.o, \u03b4scrutinee196);
    var $x_20 = b$3$1.M.queue;
    var $x_19 = b$3$1.H;
    var s$proxy4 = b$3$1.o;
    var $x_18 = s$proxy4.dv.buffer;
    $x_20.writeBuffer($x_19, 0.0, $x_18);
    var $x_14 = b$3$1;
  }
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, idx$1, $x_14);
  layers.push(Bindable_this);
  var di = 0;
  while ((di < ((mipLevels - 1) | 0))) {
    var mipSource$1 = di;
    var mipTarget$1 = ((1 + di) | 0);
    var Bindable_this$5 = p.gr(downsampleShade, (void 0), mipSource$1, mipTarget$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee212 = e1$proxy2.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$5, (Bindable_this$5.U.I.blurRadius | 0), \u03b4scrutinee212);
    var \u03b4scrutinee225 = e2$proxy2.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$5, (Bindable_this$5.U.I.samp | 0), \u03b4scrutinee225);
    layers.push(Bindable_this$5);
    di = ((1 + di) | 0);
  }
  var ui = ((mipLevels - 2) | 0);
  while ((ui >= 0)) {
    var Bindable_this$8 = p.gr(upsampleShade, $m_Ltrivalibs_graphics_painter_BlendState$().ob, ((1 + ui) | 0), ui);
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee235 = e1$proxy3.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$8, (Bindable_this$8.U.I.blurRadius | 0), \u03b4scrutinee235);
    var \u03b4scrutinee248 = e2$proxy3.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$8, (Bindable_this$8.U.I.samp | 0), \u03b4scrutinee248);
    layers.push(Bindable_this$8);
    ui = ((ui - 1) | 0);
  }
  var bloomP = p.cd((void 0), (void 0), (void 0), (void 0), (void 0), mipLevels, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers, (void 0), (void 0), (void 0), (void 0), (void 0));
  var toneOn = (toneWhite > toneKnee);
  var toneLift = (toneOn ? (1.0 - toneKnee) : 0.0);
  var toneFalloff = (toneOn ? ((-1.0) / (toneWhite - toneKnee)) : (-1.0));
  var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
    var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
      var coord = $m_Ltrivalibs_graphics_math_gpu_ivec2$().gp($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().hq(ctx$2$3.he));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var c = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("c");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var low = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("low");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var over = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("over");
      var $x_25 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_24 = $m_sjsr_package$();
      var $x_23 = c.P($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gw($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().rC($m_Ltrivalibs_graphics_math_gpu_expr$package$().jM($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().tL($m_Ltrivalibs_graphics_math_gpu_expr$package$().jM($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "bloom"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), ctx$2$3.D.i("intensity")))));
      var $x_22 = low.P($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().tG(c, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_vec3$().gp(ctx$2$3.D.i("knee"))));
      var $x_21 = over.P($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jV(c, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), low));
      var AssignTarget_this$3 = ctx$2$3.ar.G("color");
      var value$proxy7 = $m_Ltrivalibs_graphics_math_gpu_vec4$().a7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().ly(low, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().aJ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jV($m_Ltrivalibs_graphics_math_gpu_vec3$().rF(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().ss($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().aJ(over, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), ctx$2$3.D.i("falloff")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$())), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), ctx$2$3.D.i("lift"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_25.ax(new $c_sjsr_WrappedVarArgs($x_24.d(new ($d_T.r().C)([$x_23, $x_22, $x_21, (((("  " + AssignTarget_this$3.y) + " = ") + value$proxy7.f) + ";")]))));
    }));
    var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$3;
    try {
      var $x_26 = body$proxy7.g(ctx$4);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$3;
    }
    program$3$4.aG = $x_26;
    $m_sjs_js_ArrayOps$().B(reg$3.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$8) => ((data$3$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$8, data$3$3);
    }))(program$3$4)));
  }));
  var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy4.g(program$4);
  var b$5 = program$4.aG;
  var helperFns$proxy4 = program$4.au();
  var id$4 = p.q;
  p.q = ((1 + p.q) | 0);
  var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["intensity"], $m_sjs_js_ArrayOpsCommon$().a(["knee"], $m_sjs_js_ArrayOpsCommon$().a(["lift"], $m_sjs_js_ArrayOpsCommon$().a(["falloff"], []))));
  var dict$7 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$7 = 0;
  while ((i$7 < (names$10.length | 0))) {
    dict$7[names$10[i$7]] = i$7;
    i$7 = ((1 + i$7) | 0);
  }
  var names$11 = $m_sjs_js_ArrayOpsCommon$().a(["scene"], $m_sjs_js_ArrayOpsCommon$().a(["bloom"], []));
  var dict$8 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$8 = 0;
  while ((i$8 < (names$11.length | 0))) {
    dict$8[names$11[i$8]] = i$8;
    i$8 = ((1 + i$8) | 0);
  }
  var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$5, helperFns$proxy4);
  var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["intensity"], $m_sjs_js_ArrayOpsCommon$().a(["knee"], $m_sjs_js_ArrayOpsCommon$().a(["lift"], $m_sjs_js_ArrayOpsCommon$().a(["falloff"], [])))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).O.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).O.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).O.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).O.t()], [])))));
  var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.ab, sd$4.aa, fragBuiltinParams$4);
  var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;\n@group(1) @binding(1) var bloom: texture_2d<f32>;");
  console.log(wgsl$4);
  var module$4 = p.h.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$4)])))));
  var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 2), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 3), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], []))))], []);
  var result$4 = [];
  $m_sjs_js_ArrayOps$().B(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$4) => (result$4.push(p.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$4)])))))) | 0))));
  var x10 = $ct_T2__O__O__(new $c_T2(), result$4, $m_Ltrivalibs_graphics_shader_layouts$().K(p.h, result$4));
  var \u03b46$$4 = x10;
  var bgls$8 = \u03b46$$4.ao;
  var entries$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []));
  var panelBgl$4 = p.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$4)])))));
  if ((panelBgl$4 !== null)) {
    var other$proxy4 = [panelBgl$4];
    var allBgls$4 = bgls$8.concat(other$proxy4);
  } else {
    var allBgls$4 = bgls$8;
  }
  var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().K(p.h, allBgls$4);
  var compositeShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
  var Bindable_this$11 = p.gr(compositeShade, (void 0), (void 0), (void 0));
  var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("bloom", bloomP);
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("intensity", b$2);
  var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("knee", toneKnee);
  var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("lift", toneLift);
  var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("falloff", toneFalloff);
  var \u03b4scrutinee350 = e1$proxy4.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$11, (Bindable_this$11.U.aC.scene | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee350));
  var \u03b4scrutinee366 = e2$proxy4.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$11, (Bindable_this$11.U.aC.bloom | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee366));
  var \u03b4scrutinee370 = e3$proxy1.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$11, (Bindable_this$11.U.I.intensity | 0), \u03b4scrutinee370);
  var \u03b4scrutinee383 = (+e4$proxy1.s);
  var idx$2$1 = (Bindable_this$11.U.I.knee | 0);
  var existing$2 = ((idx$2$1 < (Bindable_this$11.b7.length | 0)) ? Bindable_this$11.b7[idx$2$1] : null);
  var device$proxy2 = Bindable_this$11.h6.h;
  if ((existing$2 !== null)) {
    existing$2.N.F(existing$2.o, \u03b4scrutinee383);
    var $x_30 = existing$2.M.queue;
    var $x_29 = existing$2.H;
    var s$proxy5 = existing$2.o;
    var $x_28 = s$proxy5.dv.buffer;
    $x_30.writeBuffer($x_29, 0.0, $x_28);
    var $x_27 = existing$2;
  } else {
    var uv$2$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$4 = new ArrayBuffer(4);
    var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
    var b$4$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), device$proxy2, uv$2$1);
    b$4$1.N.F(b$4$1.o, \u03b4scrutinee383);
    var $x_33 = b$4$1.M.queue;
    var $x_32 = b$4$1.H;
    var s$proxy6 = b$4$1.o;
    var $x_31 = s$proxy6.dv.buffer;
    $x_33.writeBuffer($x_32, 0.0, $x_31);
    var $x_27 = b$4$1;
  }
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$11, idx$2$1, $x_27);
  var \u03b4scrutinee407 = (+e5$proxy1.s);
  var idx$3$1 = (Bindable_this$11.U.I.lift | 0);
  var existing$3 = ((idx$3$1 < (Bindable_this$11.b7.length | 0)) ? Bindable_this$11.b7[idx$3$1] : null);
  var device$proxy3 = Bindable_this$11.h6.h;
  if ((existing$3 !== null)) {
    existing$3.N.F(existing$3.o, \u03b4scrutinee407);
    var $x_37 = existing$3.M.queue;
    var $x_36 = existing$3.H;
    var s$proxy7 = existing$3.o;
    var $x_35 = s$proxy7.dv.buffer;
    $x_37.writeBuffer($x_36, 0.0, $x_35);
    var $x_34 = existing$3;
  } else {
    var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$5 = new ArrayBuffer(4);
    var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
    var b$5$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), device$proxy3, uv$3);
    b$5$1.N.F(b$5$1.o, \u03b4scrutinee407);
    var $x_40 = b$5$1.M.queue;
    var $x_39 = b$5$1.H;
    var s$proxy8 = b$5$1.o;
    var $x_38 = s$proxy8.dv.buffer;
    $x_40.writeBuffer($x_39, 0.0, $x_38);
    var $x_34 = b$5$1;
  }
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$11, idx$3$1, $x_34);
  var \u03b4scrutinee437 = (+e6$proxy1.s);
  var idx$4$1 = (Bindable_this$11.U.I.falloff | 0);
  var existing$4 = ((idx$4$1 < (Bindable_this$11.b7.length | 0)) ? Bindable_this$11.b7[idx$4$1] : null);
  var device$proxy4 = Bindable_this$11.h6.h;
  if ((existing$4 !== null)) {
    existing$4.N.F(existing$4.o, \u03b4scrutinee437);
    var $x_44 = existing$4.M.queue;
    var $x_43 = existing$4.H;
    var s$proxy9 = existing$4.o;
    var $x_42 = s$proxy9.dv.buffer;
    $x_44.writeBuffer($x_43, 0.0, $x_42);
    var $x_41 = existing$4;
  } else {
    var uv$4 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$6 = new ArrayBuffer(4);
    var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
    var b$6 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), device$proxy4, uv$4);
    b$6.N.F(b$6.o, \u03b4scrutinee437);
    var $x_47 = b$6.M.queue;
    var $x_46 = b$6.H;
    var s$proxy10 = b$6.o;
    var $x_45 = s$proxy10.dv.buffer;
    $x_47.writeBuffer($x_46, 0.0, $x_45);
    var $x_41 = b$6;
  }
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$11, idx$4$1, $x_41);
  return new $c_Lsketchlib_utils_bloom_Bloom$$anon$1(bloomP, p.cd((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this$11, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0)), p, b, b$2);
});
var $d_Lsketchlib_utils_bloom_Bloom$ = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$, "sketchlib.utils.bloom.Bloom$", ({
  du: 1
}));
var $n_Lsketchlib_utils_bloom_Bloom$;
function $m_Lsketchlib_utils_bloom_Bloom$() {
  if ((!$n_Lsketchlib_utils_bloom_Bloom$)) {
    $n_Lsketchlib_utils_bloom_Bloom$ = new $c_Lsketchlib_utils_bloom_Bloom$();
  }
  return $n_Lsketchlib_utils_bloom_Bloom$;
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurShade$1__Ltrivalibs_graphics_painter_Painter__Z__Ltrivalibs_graphics_painter_Shade($thiz, p$1, vertical) {
  var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
    var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
      var uv = ctx$2.J.i("uv");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var a = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("a");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var dist = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("dist");
      var $x_4 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_3 = $m_sjsr_package$();
      var $x_2 = a.P($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().cg($m_Ltrivalibs_graphics_math_gpu_expr$package$().qT($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), uv, ctx$2.D.i("samp"))));
      var $x_1 = dist.P($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bx($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b1(a, ctx$2.D.i("blurStrength")), ctx$2.D.i("visHeight")), ctx$2.D.i("passScale")), ctx$2.D.i("strengthOffset")));
      var AssignTarget_this = ctx$2.ar.G("color");
      var tex$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
      var s$proxy6 = ctx$2.D.i("samp");
      var res$proxy1 = ctx$2.D.i("res");
      var dir$proxy1 = (vertical ? $m_Ltrivalibs_graphics_math_gpu_vec2$().a7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b1(dist, ctx$2.D.i("ratioVertical"))) : $m_Ltrivalibs_graphics_math_gpu_vec2$().a7(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0)));
      var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().sI();
      var s$proxy7 = WgslFn$_this.gq(fn$proxy1, tex$proxy1, s$proxy6, uv, res$proxy1, dir$proxy1);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var value$proxy5 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy7);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_4.ax(new $c_sjsr_WrappedVarArgs($x_3.d(new ($d_T.r().C)([$x_2, $x_1, (((("  " + AssignTarget_this.y) + " = ") + value$proxy5.f) + ";")]))));
    }));
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg;
    try {
      var $x_5 = body$proxy3.g(ctx);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev;
    }
    program$3.aG = $x_5;
    $m_sjs_js_ArrayOps$().B(reg.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3);
    }))(program$3)));
  }));
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy2.g(program);
  var b = program.aG;
  var helperFns$proxy2 = program.au();
  var id = p$1.q;
  p$1.q = ((1 + p$1.q) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().a(["ratioVertical"], $m_sjs_js_ArrayOpsCommon$().a(["strengthOffset"], $m_sjs_js_ArrayOpsCommon$().a(["passScale"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["visHeight"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])))))));
  var dict = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i = 0;
  while ((i < (names.length | 0))) {
    dict[names[i]] = i;
    i = ((1 + i) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$2 = $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b, helperFns$proxy2);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().a(["ratioVertical"], $m_sjs_js_ArrayOpsCommon$().a(["strengthOffset"], $m_sjs_js_ArrayOpsCommon$().a(["passScale"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["visHeight"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))))))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).O.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).O.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).O.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).O.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).O.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).O.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).O.t()], []))))))));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.ab, sd.aa, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  console.log(wgsl);
  var module = p$1.h.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl)])))));
  var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 2), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 3), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 4), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 5), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 6), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], [])))))))], []);
  var result = [];
  $m_sjs_js_ArrayOps$().B(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2) => (result.push(p$1.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2)])))))) | 0))));
  var x4 = $ct_T2__O__O__(new $c_T2(), result, $m_Ltrivalibs_graphics_shader_layouts$().K(p$1.h, result));
  var \u03b46$ = x4;
  var bgls$2 = \u03b46$.ao;
  var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl = p$1.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries)])))));
  if ((panelBgl !== null)) {
    var other$proxy2 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy2);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().K(p$1.h, allBgls);
  return new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer($thiz, p$2, uBlurStrength$1, uRatioVertical$1, uStrengthOffset$1, uRes$1, uVisHeight$1, sampler$1, shade, passScale) {
  var Bindable_this = p$2.gr(shade, (void 0), (void 0), (void 0));
  var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurStrength", uBlurStrength$1);
  var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("ratioVertical", uRatioVertical$1);
  var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("strengthOffset", uStrengthOffset$1);
  var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("passScale", passScale);
  var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("res", uRes$1);
  var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("visHeight", uVisHeight$1);
  var e7$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler$1);
  var \u03b4scrutinee188 = e1$proxy2.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, (Bindable_this.U.I.blurStrength | 0), \u03b4scrutinee188);
  var \u03b4scrutinee201 = e2$proxy2.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, (Bindable_this.U.I.ratioVertical | 0), \u03b4scrutinee201);
  var \u03b4scrutinee218 = e3$proxy2.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, (Bindable_this.U.I.strengthOffset | 0), \u03b4scrutinee218);
  var \u03b4scrutinee239 = (+e4$proxy1.s);
  var idx$3 = (Bindable_this.U.I.passScale | 0);
  var existing = ((idx$3 < (Bindable_this.b7.length | 0)) ? Bindable_this.b7[idx$3] : null);
  var device$proxy1 = Bindable_this.h6.h;
  if ((existing !== null)) {
    existing.N.F(existing.o, \u03b4scrutinee239);
    var $x_4 = existing.M.queue;
    var $x_3 = existing.H;
    var s$proxy8 = existing.o;
    var $x_2 = s$proxy8.dv.buffer;
    $x_4.writeBuffer($x_3, 0.0, $x_2);
    var $x_1 = existing;
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer = new ArrayBuffer(4);
    var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), device$proxy1, uv);
    b.N.F(b.o, \u03b4scrutinee239);
    var $x_7 = b.M.queue;
    var $x_6 = b.H;
    var s$proxy9 = b.o;
    var $x_5 = s$proxy9.dv.buffer;
    $x_7.writeBuffer($x_6, 0.0, $x_5);
    var $x_1 = b;
  }
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, idx$3, $x_1);
  var \u03b4scrutinee275 = e5$proxy1.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, (Bindable_this.U.I.res | 0), \u03b4scrutinee275);
  var \u03b4scrutinee301 = e6$proxy1.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, (Bindable_this.U.I.visHeight | 0), \u03b4scrutinee301);
  var \u03b4scrutinee334 = e7$proxy1.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, (Bindable_this.U.I.samp | 0), \u03b4scrutinee334);
  return Bindable_this;
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$() {
}
$p = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$;
/** @constructor */
function $h_Lsketchlib_utils_mirror_GaussianMirrorReflection$() {
}
$h_Lsketchlib_utils_mirror_GaussianMirrorReflection$.prototype = $p;
$p.rK = (function(p, camera, shapes, vpName, alphaScale, mirror, blurStrength, blurRatioVertical, strengthOffset, scaleFactor, resolutionScale, overscan, clearColor) {
  if (((scaleFactor <= 0.0) || (scaleFactor >= 1.0))) {
    var message$proxy1 = (("GaussianMirrorReflection scaleFactor must be in (0, 1) " + ("(got " + scaleFactor)) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).X;
  }
  if ((resolutionScale <= 0.0)) {
    var message$proxy2 = (("GaussianMirrorReflection resolutionScale must be > 0 " + ("(got " + resolutionScale)) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy2)).X;
  }
  if ((overscan < 0.0)) {
    var message$proxy3 = (("GaussianMirrorReflection overscan must be >= 0 (got " + overscan) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy3)).X;
  }
  var p$proxy1 = (1.0 / (1.0 - (scaleFactor * scaleFactor)));
  var cascadeGain = (+Math.sqrt(p$proxy1));
  var sigmaPerDir = (1.64 * cascadeGain);
  var strengthScale = (0.01 / sigmaPerDir);
  var reflMat = mirror.uh();
  var pn = mirror.hN;
  var pd = mirror.hM;
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.aE;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var uVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.h, uv$proxy1);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy2 = ul$proxy2.aE;
  var buffer$2 = new ArrayBuffer(64);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var uInvVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.h, uv$proxy2);
  var value$proxy1 = (blurStrength * strengthScale);
  var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy3 = ul$proxy3.aE;
  var buffer$3 = new ArrayBuffer(4);
  var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), p.h, uv$proxy3);
  b.N.F(b.o, value$proxy1);
  var $x_3 = b.M.queue;
  var $x_2 = b.H;
  var s$proxy1 = b.o;
  var $x_1 = s$proxy1.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var ul$proxy4 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy4 = ul$proxy4.aE;
  var buffer$4 = new ArrayBuffer(4);
  var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), p.h, uv$proxy4);
  b$2.N.F(b$2.o, blurRatioVertical);
  var $x_6 = b$2.M.queue;
  var $x_5 = b$2.H;
  var s$proxy2 = b$2.o;
  var $x_4 = s$proxy2.dv.buffer;
  $x_6.writeBuffer($x_5, 0.0, $x_4);
  var ul$proxy5 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy5 = ul$proxy5.aE;
  var buffer$5 = new ArrayBuffer(4);
  var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
  var b$3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), p.h, uv$proxy5);
  b$3.N.F(b$3.o, strengthOffset);
  var $x_9 = b$3.M.queue;
  var $x_8 = b$3.H;
  var s$proxy3 = b$3.o;
  var $x_7 = s$proxy3.dv.buffer;
  $x_9.writeBuffer($x_8, 0.0, $x_7);
  var ul$proxy6 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
  var uv$proxy6 = ul$proxy6.aE;
  var buffer$6 = new ArrayBuffer(8);
  var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
  var uRes = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), p.h, uv$proxy6);
  var ul$proxy7 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy7 = ul$proxy7.aE;
  var buffer$7 = new ArrayBuffer(4);
  var arr$proxy7 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$7), 1);
  var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy7.dv, 0), p.h, uv$proxy7);
  b$4.N.F(b$4.o, 0.0);
  var $x_12 = b$4.M.queue;
  var $x_11 = b$4.H;
  var s$proxy4 = b$4.o;
  var $x_10 = s$proxy4.dv.buffer;
  $x_12.writeBuffer($x_11, 0.0, $x_10);
  var value$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec4(1.0, 1.0, 0.0, 0.0);
  var ul$proxy8 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$());
  var uv$proxy8 = ul$proxy8.aE;
  var buffer$8 = new ArrayBuffer(16);
  var arr$proxy8 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$8), 1);
  var b$5 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy8.dv, 0), p.h, uv$proxy8);
  b$5.N.F(b$5.o, value$proxy2);
  var $x_15 = b$5.M.queue;
  var $x_14 = b$5.H;
  var s$proxy5 = b$5.o;
  var $x_13 = s$proxy5.dv.buffer;
  $x_15.writeBuffer($x_14, 0.0, $x_13);
  var sampler = p.jT();
  var mirrorPanel = p.cd((void 0), (void 0), clearColor, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
  var dict$proxy1 = mirrorPanel.i3;
  dict$proxy1[vpName] = uVp;
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg;
  try {
    var uv$8 = ctx.J.i("uv");
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
    var x0 = d.P($m_Ltrivalibs_graphics_math_gpu_expr$package$().sf($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "depth"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().gp($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().hq(ctx.he))));
    var $x_18 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
    var $x_17 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().c9($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a9(uv$8), 2.0), 1.0);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().W(uv$8), 2.0);
    var x1 = ndc.P($x_18.ad($x_17, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aT().aK((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(1.0)) + " - ") + e$proxy1.f) + ")")), d));
    var x2 = worldH.P($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().cf(ctx.D.i("invVp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cb(), $m_Ltrivalibs_graphics_math_gpu_vec4$().a7(ndc, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
    var x3 = worldPos.P($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().si($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gw(worldH), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().cg(worldH)));
    var x4 = t.P($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().qa($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jA($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().c9($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().im($m_Ltrivalibs_graphics_math_gpu_vec3$().ad($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(pn.w), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(pn.A), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(pn.u)), worldPos), pd), alphaScale)));
    var AssignTarget_this = ctx.ar.G("color");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_vec4$().a7($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gw($m_Ltrivalibs_graphics_math_gpu_expr$package$().jM($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().gp($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().hq(ctx.he)))), t);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x5 = (((("  " + AssignTarget_this.y) + " = ") + value$proxy3.f) + ";");
    var array = [x0, x1, x2, x3, x4, x5];
    var out = [];
    var i = 0;
    while ((i < (array.length | 0))) {
      var idx = i;
      var p$1 = array[idx];
      if ((p$1.length > 0)) {
        out.push(p$1);
      }
      i = ((1 + i) | 0);
    }
    var $x_16 = out.join("\n");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev;
  }
  program.aG = $x_16;
  var array$1 = reg.Z;
  var len = (array$1.length | 0);
  var i$1 = 0;
  while ((i$1 < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i$1]);
    i$1 = ((1 + i$1) | 0);
  }
  var b$1 = program.aG;
  var helperFns$proxy1 = program.au();
  var id = p.q;
  p.q = ((1 + p.q) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["invVp"], []);
  var dict = ({});
  var i$2 = 0;
  while ((i$2 < (names.length | 0))) {
    dict[names[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["col"], $m_sjs_js_ArrayOpsCommon$().a(["depth"], []));
  var dict$2 = ({});
  var i$2$1 = 0;
  while ((i$2$1 < (names$2.length | 0))) {
    dict$2[names$2[i$2$1]] = i$2$1;
    i$2$1 = ((1 + i$2$1) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["invVp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).O.t()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.ab, sd.aa, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;\n@group(1) @binding(1) var depth: texture_depth_2d;");
  console.log(wgsl);
  var module = p.h.createShaderModule(({
    "code": wgsl
  }));
  var $x_20 = $m_sjs_js_ArrayOpsCommon$();
  var $x_19 = $m_sjs_js_ArrayOpsCommon$();
  var _2 = ({
    "type": "uniform"
  });
  var descriptors = $x_20.a([$x_19.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2
  })], [])], []);
  var result = [];
  var len$1 = (descriptors.length | 0);
  var i$3 = 0;
  while ((i$3 < len$1)) {
    var x0$2 = descriptors[i$3];
    (result.push(p.h.createBindGroupLayout(({
      "entries": x0$2
    }))) | 0);
    i$3 = ((1 + i$3) | 0);
  }
  var \u03b46$___1 = result;
  var \u03b46$___2 = $m_Ltrivalibs_graphics_shader_layouts$().K(p.h, result);
  var bgls$2 = \u03b46$___1;
  var $x_22 = $m_sjs_js_ArrayOpsCommon$();
  var _2$1 = ({});
  var $x_21 = $m_sjs_js_ArrayOpsCommon$();
  var _2$2 = ({
    "sampleType": "depth"
  });
  var entries = $x_22.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$1
  })], $x_21.a([({
    "binding": 1,
    "visibility": 2,
    "texture": _2$2
  })], []));
  var panelBgl = p.h.createBindGroupLayout(({
    "entries": entries
  }));
  if ((panelBgl !== null)) {
    var other$proxy1 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy1);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().K(p.h, allBgls);
  var bakeShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var blurShadeH = $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurShade$1__Ltrivalibs_graphics_painter_Painter__Z__Ltrivalibs_graphics_painter_Shade(this, p, false);
  var blurShadeV = $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurShade$1__Ltrivalibs_graphics_painter_Painter__Z__Ltrivalibs_graphics_painter_Shade(this, p, true);
  var Bindable_this = p.gr(bakeShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("col", mirrorPanel);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("depth", mirrorPanel.rV(0, (-1), true));
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("invVp", uInvVp);
  var \u03b4scrutinee166 = e1$proxy1.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this, (Bindable_this.U.aC.col | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee166));
  var \u03b4scrutinee176 = e2$proxy1.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this, (Bindable_this.U.aC.depth | 0), \u03b4scrutinee176);
  var \u03b4scrutinee180 = e3$proxy1.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, (Bindable_this.U.I.invVp | 0), \u03b4scrutinee180);
  var pairCache = [];
  var cachedScale = new $c_sr_DoubleRef(1.0);
  var blurPanel = p.cd((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$1;
  try {
    var AssignTarget_this$1 = ctx$1.ar.G("color");
    var value$proxy8 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().qT($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().q1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().tM(ctx$1.J.i("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().hq(ctx$1.D.i("crop"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().rh(ctx$1.D.i("crop"))), ctx$1.D.i("samp"));
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var $x_23 = (((("  " + AssignTarget_this$1.y) + " = ") + value$proxy8.f) + ";");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$1;
  }
  program$2.aG = $x_23;
  var array$18 = reg$1.Z;
  var len$2 = (array$18.length | 0);
  var i$4 = 0;
  while ((i$4 < len$2)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$18[i$4]);
    i$4 = ((1 + i$4) | 0);
  }
  var b$6 = program$2.aG;
  var helperFns$proxy3 = program$2.au();
  var id$2 = p.q;
  p.q = ((1 + p.q) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["crop"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict$3 = ({});
  var i$3$1 = 0;
  while ((i$3$1 < (names$4.length | 0))) {
    dict$3[names$4[i$3$1]] = i$3$1;
    i$3$1 = ((1 + i$3$1) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$4 = ({});
  var i$4$1 = 0;
  while ((i$4$1 < (names$5.length | 0))) {
    dict$4[names$5[i$4$1]] = i$4$1;
    i$4$1 = ((1 + i$4$1) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$6, helperFns$proxy3);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["crop"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$()).O.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).O.t()], [])));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.ab, sd$2.aa, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  console.log(wgsl$2);
  var module$2 = p.h.createShaderModule(({
    "code": wgsl$2
  }));
  var $x_26 = $m_sjs_js_ArrayOpsCommon$();
  var $x_25 = $m_sjs_js_ArrayOpsCommon$();
  var _2$3 = ({
    "type": "uniform"
  });
  var $x_24 = $m_sjs_js_ArrayOpsCommon$();
  var _2$4 = ({});
  var descriptors$2 = $x_26.a([$x_25.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2$3
  })], $x_24.a([({
    "binding": 1,
    "visibility": 2,
    "sampler": _2$4
  })], []))], []);
  var result$2 = [];
  var len$3 = (descriptors$2.length | 0);
  var i$5 = 0;
  while ((i$5 < len$3)) {
    var x0$4 = descriptors$2[i$5];
    (result$2.push(p.h.createBindGroupLayout(({
      "entries": x0$4
    }))) | 0);
    i$5 = ((1 + i$5) | 0);
  }
  var \u03b46$$2___1 = result$2;
  var \u03b46$$2___2 = $m_Ltrivalibs_graphics_shader_layouts$().K(p.h, result$2);
  var bgls$4 = \u03b46$$2___1;
  var $x_27 = $m_sjs_js_ArrayOpsCommon$();
  var _2$5 = ({});
  var entries$2 = $x_27.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$5
  })], []);
  var panelBgl$2 = p.h.createBindGroupLayout(({
    "entries": entries$2
  }));
  if ((panelBgl$2 !== null)) {
    var other$proxy3 = [panelBgl$2];
    var allBgls$2 = bgls$4.concat(other$proxy3);
  } else {
    var allBgls$2 = bgls$4;
  }
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().K(p.h, allBgls$2);
  var cropShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  if ((overscan > 0.0)) {
    var Bindable_this$5 = p.gr(cropShade, (void 0), (void 0), (void 0));
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", blurPanel);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("crop", b$5);
    var e3$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee423 = e1$proxy3.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$5, (Bindable_this$5.U.aC.tex | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee423));
    var \u03b4scrutinee427 = e2$proxy3.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$5, (Bindable_this$5.U.I.crop | 0), \u03b4scrutinee427);
    var \u03b4scrutinee437 = e3$proxy3.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$5, (Bindable_this$5.U.I.samp | 0), \u03b4scrutinee437);
    var layers$3 = [Bindable_this$5];
    var $x_28 = p.cd((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers$3, (void 0), (void 0), (void 0), (void 0), (void 0));
  } else {
    var $x_28 = null;
  }
  return new $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1(mirrorPanel, $x_28, blurPanel, camera, blurStrength, blurRatioVertical, Bindable_this, pairCache, overscan, uRes, b$4, b$5, resolutionScale, b, strengthScale, b$2, b$3, reflMat, uVp, uInvVp, p, scaleFactor, blurShadeH, cachedScale, blurShadeV, sampler);
});
$p.uE = (function(strengthScale$1, scaleFactor$1, subResHeight, strength, ratio) {
  var pairs = 1;
  var reach = (((strength * strengthScale$1) * subResHeight) * (+Math.max(ratio, 1.0)));
  while ((reach > 1.0)) {
    reach = (reach * scaleFactor$1);
    pairs = ((1 + pairs) | 0);
  }
  return pairs;
});
$p.uD = (function(pairCache$1, blurShadeH$1, cachedScale$1, blurShadeV$1, scaleFactor$2, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, n) {
  while (((pairCache$1.length | 0) < (n << 1))) {
    pairCache$1.push($p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer(this, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, blurShadeH$1, cachedScale$1.gS));
    pairCache$1.push($p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer(this, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, blurShadeV$1, cachedScale$1.gS));
    cachedScale$1.gS = (cachedScale$1.gS * scaleFactor$2);
  }
});
var $d_Lsketchlib_utils_mirror_GaussianMirrorReflection$ = new $TypeData().i($c_Lsketchlib_utils_mirror_GaussianMirrorReflection$, "sketchlib.utils.mirror.GaussianMirrorReflection$", ({
  dx: 1
}));
var $n_Lsketchlib_utils_mirror_GaussianMirrorReflection$;
function $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$() {
  if ((!$n_Lsketchlib_utils_mirror_GaussianMirrorReflection$)) {
    $n_Lsketchlib_utils_mirror_GaussianMirrorReflection$ = new $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$();
  }
  return $n_Lsketchlib_utils_mirror_GaussianMirrorReflection$;
}
function $p_Lsketchlib_utils_room_BeamAtlas__band$1__D__D__D__D__T2($thiz, rowV0$1, rowH$1, fromWorld, thickWorld) {
  return $ct_T2__O__O__(new $c_T2(), (rowV0$1 + (rowH$1 * (fromWorld / $thiz.hH))), (rowV0$1 + (rowH$1 * ((fromWorld + thickWorld) / $thiz.hH))));
}
function $p_Lsketchlib_utils_room_BeamAtlas__face$1__D__Ltrivalibs_graphics_math_cpu_Vec3__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__T2__sjs_js_Array($thiz, u1$1, dir$2, w, h, n, center, vb) {
  var f = ((pos$2, uv$2) => $ct_T2__O__O__(new $c_T2(), pos$2, new $c_Ltrivalibs_graphics_math_cpu_Vec2((uv$2.l * u1$1), ((+vb.a0()) + (uv$2.k * ((+vb.a1()) - (+vb.a0())))))));
  var uvAtPivot = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
  var n$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), n, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
  var uDir = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), dir$2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), n$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n$1, dir$2))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
  var uVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), uDir, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), w);
  var vVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), n$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), h);
  var tlPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), center, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), uVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.l)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), vVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.k));
  var trPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
  var blPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec);
  var brPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), blPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
  var $x_3 = f(tlPos, x1);
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
  var $x_2 = f(blPos, x1$1);
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
  var $x_1 = f(brPos, x1$2);
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
  return $x_4.hj($x_3, $x_2, $x_1, f(trPos, x1$3));
}
function $p_Lsketchlib_utils_room_BeamAtlas__facesOutOfPlan$1__Lsketchlib_utils_room_Boundary__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__Z($thiz, clip$1, centerXZ, n) {
  return (!$m_Lsketchlib_utils_room_Confine$package$().lI(clip$1, new $c_Ltrivalibs_graphics_math_cpu_Vec2((centerXZ.l + (0.01 * n.w)), (centerXZ.k + (0.01 * n.u)))));
}
/** @constructor */
function $c_Lsketchlib_utils_room_BeamAtlas(beams, clip) {
  this.hI = 0;
  this.hJ = 0.0;
  this.g4 = 0.0;
  this.hH = 0.0;
  this.ku = 0.0;
  this.nL = null;
  this.hI = (beams.length | 0);
  this.hJ = beams[0].bf;
  this.g4 = beams[0].bG;
  this.hH = (this.hJ + (2.0 * this.g4));
  var m = 0.0;
  var i = 0;
  while ((i < (beams.length | 0))) {
    var l = $f_Ltrivalibs_graphics_math_Vec2Base__length__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().ir(), beams[i].bu, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), beams[i].bt));
    if ((l > m)) {
      m = l;
    }
    i = ((1 + i) | 0);
  }
  this.ku = m;
  var out = [];
  var i$2 = 0;
  while ((i$2 < (beams.length | 0))) {
    var b = beams[i$2];
    var dx = (b.bu.l - b.bt.l);
    var dz = (b.bu.k - b.bt.k);
    var p$proxy1 = ((dx * dx) + (dz * dz));
    var len = (+Math.sqrt(p$proxy1));
    var dir = new $c_Ltrivalibs_graphics_math_cpu_Vec3((dx / len), 0.0, (dz / len));
    var perp = new $c_Ltrivalibs_graphics_math_cpu_Vec3((-dir.u), 0.0, dir.w);
    var cx = (0.5 * (b.bt.l + b.bu.l));
    var cz = (0.5 * (b.bt.k + b.bu.k));
    var u1 = (len / this.ku);
    var rowV0 = (i$2 / this.hI);
    var rowH = (1.0 / this.hI);
    var midY = (b.g3 + (0.5 * b.bG));
    var sideA = new $c_Ltrivalibs_graphics_math_cpu_Vec2((cx + (0.5 * (perp.w * b.bf))), (cz + (0.5 * (perp.u * b.bf))));
    if ((!$p_Lsketchlib_utils_room_BeamAtlas__facesOutOfPlan$1__Lsketchlib_utils_room_Boundary__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__Z(this, clip, sideA, perp))) {
      out.push($p_Lsketchlib_utils_room_BeamAtlas__face$1__D__Ltrivalibs_graphics_math_cpu_Vec3__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__T2__sjs_js_Array(this, u1, dir, len, b.bG, perp, new $c_Ltrivalibs_graphics_math_cpu_Vec3(sideA.l, midY, sideA.k), $p_Lsketchlib_utils_room_BeamAtlas__band$1__D__D__D__D__T2(this, rowV0, rowH, 0.0, this.g4)));
    }
    out.push($p_Lsketchlib_utils_room_BeamAtlas__face$1__D__Ltrivalibs_graphics_math_cpu_Vec3__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__T2__sjs_js_Array(this, u1, dir, len, b.bf, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), new $c_Ltrivalibs_graphics_math_cpu_Vec3(cx, b.g3, cz), $p_Lsketchlib_utils_room_BeamAtlas__band$1__D__D__D__D__T2(this, rowV0, rowH, this.g4, this.hJ)));
    var sideB = new $c_Ltrivalibs_graphics_math_cpu_Vec2((cx - (0.5 * (perp.w * b.bf))), (cz - (0.5 * (perp.u * b.bf))));
    if ((!$p_Lsketchlib_utils_room_BeamAtlas__facesOutOfPlan$1__Lsketchlib_utils_room_Boundary__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__Z(this, clip, sideB, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), perp, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$())))) {
      out.push($p_Lsketchlib_utils_room_BeamAtlas__face$1__D__Ltrivalibs_graphics_math_cpu_Vec3__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__T2__sjs_js_Array(this, u1, dir, len, b.bG, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), perp, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), new $c_Ltrivalibs_graphics_math_cpu_Vec3(sideB.l, midY, sideB.k), $p_Lsketchlib_utils_room_BeamAtlas__band$1__D__D__D__D__T2(this, rowV0, rowH, (this.g4 + this.hJ), this.g4)));
    }
    i$2 = ((1 + i$2) | 0);
  }
  this.nL = out;
}
$p = $c_Lsketchlib_utils_room_BeamAtlas.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_BeamAtlas;
/** @constructor */
function $h_Lsketchlib_utils_room_BeamAtlas() {
}
$h_Lsketchlib_utils_room_BeamAtlas.prototype = $p;
$p.uW = (function(alongScale, crossScale) {
  var a = (this.hH * crossScale);
  var $x_1 = $m_RTLong$().jI((+Math.round(a)));
  var x_$_lo = $x_1.l;
  var x_$_hi = $x_1.h;
  var b = ((4.294967296E9 * x_$_hi) + (x_$_lo >>> 0.0));
  var rowTexels = $doubleToInt((+Math.max(1.0, b)));
  return $ct_T2__O__O__(new $c_T2(), $doubleToInt((this.ku * alongScale)), Math.imul(this.hI, rowTexels));
});
$p.ry = (function(uv) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ql($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().W(uv), this.hI)), this.hH);
});
$p.uH = (function(uv) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ij($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().c9(this.ry(uv), (this.g4 + (0.5 * this.hJ))));
});
var $d_Lsketchlib_utils_room_BeamAtlas = new $TypeData().i($c_Lsketchlib_utils_room_BeamAtlas, "sketchlib.utils.room.BeamAtlas", ({
  dz: 1
}));
/** @constructor */
function $c_Lsketchlib_utils_room_Boundary(edges) {
  this.g5 = null;
  this.g5 = edges;
}
$p = $c_Lsketchlib_utils_room_Boundary.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Boundary;
/** @constructor */
function $h_Lsketchlib_utils_room_Boundary() {
}
$h_Lsketchlib_utils_room_Boundary.prototype = $p;
var $d_Lsketchlib_utils_room_Boundary = new $TypeData().i($c_Lsketchlib_utils_room_Boundary, "sketchlib.utils.room.Boundary", ({
  dA: 1
}));
function $p_Lsketchlib_utils_room_Boundary$__ringEdges__Lsketchlib_utils_room_Ring__sjs_js_Array($thiz, r) {
  var n = (r.bg.length | 0);
  var s = (r.h1 * (($thiz.uB(r.bg) < 0.0) ? (-1.0) : 1.0));
  var out = [];
  var i = 0;
  while ((i < n)) {
    var a = r.bg[i];
    var b = r.bg[((((1 + i) | 0) === n) ? 0 : ((1 + i) | 0))];
    var prev = r.bg[((i === 0) ? ((n - 1) | 0) : ((i - 1) | 0))];
    var dx = (b.l - a.l);
    var dz = (b.k - a.k);
    var p$proxy2 = ((dx * dx) + (dz * dz));
    var len = (+Math.sqrt(p$proxy2));
    var nx = (((-dz) / len) * s);
    var nz = ((dx / len) * s);
    var arris = (((nx * (a.l - prev.l)) + (nz * (a.k - prev.k))) > 0.0);
    out.push(new $c_Lsketchlib_utils_room_Edge(a, b, new $c_Ltrivalibs_graphics_math_cpu_Vec2(nx, nz), arris));
    i = ((1 + i) | 0);
  }
  return out;
}
/** @constructor */
function $c_Lsketchlib_utils_room_Boundary$() {
}
$p = $c_Lsketchlib_utils_room_Boundary$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Boundary$;
/** @constructor */
function $h_Lsketchlib_utils_room_Boundary$() {
}
$h_Lsketchlib_utils_room_Boundary$.prototype = $p;
$p.q4 = (function(r) {
  return new $c_Lsketchlib_utils_room_Boundary($p_Lsketchlib_utils_room_Boundary$__ringEdges__Lsketchlib_utils_room_Ring__sjs_js_Array(this, r));
});
$p.rI = (function(rings) {
  var out = [];
  var i = 0;
  while ((i < (rings.length | 0))) {
    var es = $p_Lsketchlib_utils_room_Boundary$__ringEdges__Lsketchlib_utils_room_Ring__sjs_js_Array(this, rings[i]);
    var j = 0;
    while ((j < (es.length | 0))) {
      out.push(es[j]);
      j = ((1 + j) | 0);
    }
    i = ((1 + i) | 0);
  }
  return new $c_Lsketchlib_utils_room_Boundary(out);
});
$p.uB = (function(ps) {
  var n = (ps.length | 0);
  var acc = 0.0;
  var i = 0;
  while ((i < n)) {
    var a = ps[i];
    var b = ps[((((1 + i) | 0) === n) ? 0 : ((1 + i) | 0))];
    acc = (acc + ((a.l * b.k) - (b.l * a.k)));
    i = ((1 + i) | 0);
  }
  return acc;
});
var $d_Lsketchlib_utils_room_Boundary$ = new $TypeData().i($c_Lsketchlib_utils_room_Boundary$, "sketchlib.utils.room.Boundary$", ({
  dB: 1
}));
var $n_Lsketchlib_utils_room_Boundary$;
function $m_Lsketchlib_utils_room_Boundary$() {
  if ((!$n_Lsketchlib_utils_room_Boundary$)) {
    $n_Lsketchlib_utils_room_Boundary$ = new $c_Lsketchlib_utils_room_Boundary$();
  }
  return $n_Lsketchlib_utils_room_Boundary$;
}
/** @constructor */
function $c_Lsketchlib_utils_room_Confine$package$() {
}
$p = $c_Lsketchlib_utils_room_Confine$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Confine$package$;
/** @constructor */
function $h_Lsketchlib_utils_room_Confine$package$() {
}
$h_Lsketchlib_utils_room_Confine$package$.prototype = $p;
$p.tN = (function(bnd, pxz) {
  var edges = bnd.g5;
  var bestD = Infinity;
  var qx = 0.0;
  var qz = 0.0;
  var nx = 0.0;
  var nz = 0.0;
  var i = 0;
  while ((i < (edges.length | 0))) {
    var e = edges[i];
    var ex = (e.aA.l - e.a4.l);
    var ez = (e.aA.k - e.a4.k);
    var t = ((((pxz.l - e.a4.l) * ex) + ((pxz.k - e.a4.k) * ez)) / ((ex * ex) + (ez * ez)));
    if ((t < 0.0)) {
      t = 0.0;
    } else if ((t > 1.0)) {
      t = 1.0;
    }
    var cx = (e.a4.l + (ex * t));
    var cz = (e.a4.k + (ez * t));
    var dx = (pxz.l - cx);
    var dz = (pxz.k - cz);
    var p$proxy1 = ((dx * dx) + (dz * dz));
    var d = (+Math.sqrt(p$proxy1));
    if ((d < bestD)) {
      bestD = d;
      qx = cx;
      qz = cz;
      nx = e.bH.l;
      nz = e.bH.k;
    }
    i = ((1 + i) | 0);
  }
  return new $c_T3(new $c_Ltrivalibs_graphics_math_cpu_Vec2(qx, qz), bestD, new $c_Ltrivalibs_graphics_math_cpu_Vec2(nx, nz));
});
$p.lI = (function(bnd, pxz) {
  var edges = bnd.g5;
  var inside = false;
  var i = 0;
  while ((i < (edges.length | 0))) {
    var a = edges[i].a4;
    var b = edges[i].aA;
    if (((a.k > pxz.k) !== (b.k > pxz.k))) {
      var t = ((pxz.k - a.k) / (b.k - a.k));
      if ((pxz.l < (a.l + (t * (b.l - a.l))))) {
        inside = (!inside);
      }
    }
    i = ((1 + i) | 0);
  }
  return inside;
});
$p.qc = (function(bnd, pxz, margin) {
  var nb = $m_Lsketchlib_utils_room_Confine$package$().tN(bnd, pxz);
  if (((!$m_Lsketchlib_utils_room_Confine$package$().lI(bnd, pxz)) || ((+nb.b3) < 1.0E-9))) {
    return new $c_Ltrivalibs_graphics_math_cpu_Vec2((nb.aL.l + (nb.bb.l * margin)), (nb.aL.k + (nb.bb.k * margin)));
  } else if (((+nb.b3) < margin)) {
    var s = (margin / (+nb.b3));
    return new $c_Ltrivalibs_graphics_math_cpu_Vec2((nb.aL.l + ((pxz.l - nb.aL.l) * s)), (nb.aL.k + ((pxz.k - nb.aL.k) * s)));
  } else {
    return pxz;
  }
});
$p.s9 = (function(bnd, pos, margin, eyeY) {
  var once = $m_Lsketchlib_utils_room_Confine$package$().qc(bnd, new $c_Ltrivalibs_graphics_math_cpu_Vec2(pos.w, pos.u), margin);
  var twice = $m_Lsketchlib_utils_room_Confine$package$().qc(bnd, once, margin);
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(twice.l, eyeY, twice.k);
});
var $d_Lsketchlib_utils_room_Confine$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Confine$package$, "sketchlib.utils.room.Confine$package$", ({
  dC: 1
}));
var $n_Lsketchlib_utils_room_Confine$package$;
function $m_Lsketchlib_utils_room_Confine$package$() {
  if ((!$n_Lsketchlib_utils_room_Confine$package$)) {
    $n_Lsketchlib_utils_room_Confine$package$ = new $c_Lsketchlib_utils_room_Confine$package$();
  }
  return $n_Lsketchlib_utils_room_Confine$package$;
}
/** @constructor */
function $c_Lsketchlib_utils_room_Plan$package$() {
}
$p = $c_Lsketchlib_utils_room_Plan$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Plan$package$;
/** @constructor */
function $h_Lsketchlib_utils_room_Plan$package$() {
}
$h_Lsketchlib_utils_room_Plan$package$.prototype = $p;
$p.rX = (function(fp) {
  var minX = Infinity;
  var minZ = Infinity;
  var maxX = (-Infinity);
  var maxZ = (-Infinity);
  var i = 0;
  while ((i < (fp.g6.length | 0))) {
    var ps = fp.g6[i].bg;
    var j = 0;
    while ((j < (ps.length | 0))) {
      var p = ps[j];
      if ((p.l < minX)) {
        minX = p.l;
      }
      if ((p.l > maxX)) {
        maxX = p.l;
      }
      if ((p.k < minZ)) {
        minZ = p.k;
      }
      if ((p.k > maxZ)) {
        maxZ = p.k;
      }
      j = ((1 + j) | 0);
    }
    i = ((1 + i) | 0);
  }
  return new $c_T4(minX, minZ, maxX, maxZ);
});
$p.s6 = (function(bnd, origin, dir) {
  var edges = bnd.g5;
  var ts = [];
  var i = 0;
  while ((i < (edges.length | 0))) {
    var e = edges[i];
    var ex = (e.aA.l - e.a4.l);
    var ez = (e.aA.k - e.a4.k);
    var det = ((ex * dir.k) - (ez * dir.l));
    if (((+Math.abs(det)) > 1.0E-12)) {
      var rx = (e.a4.l - origin.l);
      var rz = (e.a4.k - origin.k);
      var s = (((dir.l * rz) - (dir.k * rx)) / det);
      if (((s >= 0.0) && (s <= 1.0))) {
        ts.push((((ex * rz) - (ez * rx)) / det));
      }
    }
    i = ((1 + i) | 0);
  }
  var out = [];
  if (((ts.length | 0) < 2)) {
    return out;
  }
  var m = 1;
  while ((m < (ts.length | 0))) {
    var v = (+ts[m]);
    var q = ((m - 1) | 0);
    while (((q >= 0) && ((+ts[q]) > v))) {
      ts[((1 + q) | 0)] = ts[q];
      q = ((q - 1) | 0);
    }
    ts[((1 + q) | 0)] = v;
    m = ((1 + m) | 0);
  }
  var j = 0;
  while ((j < (((ts.length | 0) - 1) | 0))) {
    var t0 = (+ts[j]);
    var t1 = (+ts[((1 + j) | 0)]);
    var mid = (0.5 * (t0 + t1));
    if ((((t1 - t0) > 1.0E-9) && $m_Lsketchlib_utils_room_Confine$package$().lI(bnd, new $c_Ltrivalibs_graphics_math_cpu_Vec2((origin.l + (dir.l * mid)), (origin.k + (dir.k * mid)))))) {
      out.push(new $c_T2$mcDD$sp(t0, t1));
    }
    j = ((1 + j) | 0);
  }
  return out;
});
var $d_Lsketchlib_utils_room_Plan$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Plan$package$, "sketchlib.utils.room.Plan$package$", ({
  dD: 1
}));
var $n_Lsketchlib_utils_room_Plan$package$;
function $m_Lsketchlib_utils_room_Plan$package$() {
  if ((!$n_Lsketchlib_utils_room_Plan$package$)) {
    $n_Lsketchlib_utils_room_Plan$package$ = new $c_Lsketchlib_utils_room_Plan$package$();
  }
  return $n_Lsketchlib_utils_room_Plan$package$;
}
/** @constructor */
function $c_Lsketchlib_utils_room_Raster$package$() {
}
$p = $c_Lsketchlib_utils_room_Raster$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Raster$package$;
/** @constructor */
function $h_Lsketchlib_utils_room_Raster$package$() {
}
$h_Lsketchlib_utils_room_Raster$package$.prototype = $p;
$p.su = (function(f, bnd, height, soffitY) {
  var edges = bnd.g5;
  var nx = (-f.b6.k);
  var nz = f.b6.l;
  var minO = Infinity;
  var maxO = (-Infinity);
  var i = 0;
  while ((i < (edges.length | 0))) {
    var o = ((edges[i].a4.l * nx) + (edges[i].a4.k * nz));
    if ((o < minO)) {
      minO = o;
    }
    if ((o > maxO)) {
      maxO = o;
    }
    i = ((1 + i) | 0);
  }
  var out = [];
  var a = ((minO - f.bW) / f.bX);
  var k = (+Math.ceil(a));
  var a$1 = ((maxO - f.bW) / f.bX);
  var kMax = (+Math.floor(a$1));
  while ((k <= kMax)) {
    var off = (f.bW + (k * f.bX));
    var origin = new $c_Ltrivalibs_graphics_math_cpu_Vec2((nx * off), (nz * off));
    var spans = $m_Lsketchlib_utils_room_Plan$package$().s6(bnd, origin, f.b6);
    var s = 0;
    while ((s < (spans.length | 0))) {
      var sp = spans[s];
      out.push(new $c_Lsketchlib_utils_room_Beam(new $c_Ltrivalibs_graphics_math_cpu_Vec2((origin.l + (f.b6.l * (+sp.a0()))), (origin.k + (f.b6.k * (+sp.a0())))), new $c_Ltrivalibs_graphics_math_cpu_Vec2((origin.l + (f.b6.l * (+sp.a1()))), (origin.k + (f.b6.k * (+sp.a1())))), f.h0, height, soffitY));
      s = ((1 + s) | 0);
    }
    k = (k + 1.0);
  }
  return out;
});
var $d_Lsketchlib_utils_room_Raster$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Raster$package$, "sketchlib.utils.room.Raster$package$", ({
  dE: 1
}));
var $n_Lsketchlib_utils_room_Raster$package$;
function $m_Lsketchlib_utils_room_Raster$package$() {
  if ((!$n_Lsketchlib_utils_room_Raster$package$)) {
    $n_Lsketchlib_utils_room_Raster$package$ = new $c_Lsketchlib_utils_room_Raster$package$();
  }
  return $n_Lsketchlib_utils_room_Raster$package$;
}
function $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2($thiz, y$1, x0$1, w$1, z1$1, d$1, x, z) {
  return $ct_T2__O__O__(new $c_T2(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y$1, z), new $c_Ltrivalibs_graphics_math_cpu_Vec2(((x - x0$1) / w$1), ((z1$1 - z) / d$1)));
}
/** @constructor */
function $c_Lsketchlib_utils_room_Surfaces$package$() {
}
$p = $c_Lsketchlib_utils_room_Surfaces$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Surfaces$package$;
/** @constructor */
function $h_Lsketchlib_utils_room_Surfaces$package$() {
}
$h_Lsketchlib_utils_room_Surfaces$package$.prototype = $p;
$p.jQ = (function(bounds, y, faceUp, margin) {
  var x0 = ((+bounds.aM) - margin);
  var x1 = ((+bounds.aU) + margin);
  var z0 = ((+bounds.aN) - margin);
  var z1 = ((+bounds.aV) + margin);
  var w = (x1 - x0);
  var d = (z1 - z0);
  return (faceUp ? $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().hj($p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x0, z0), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x0, z1), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x1, z1), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x1, z0)) : $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().hj($p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x0, z1), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x0, z0), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x1, z0), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x1, z1)));
});
var $d_Lsketchlib_utils_room_Surfaces$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Surfaces$package$, "sketchlib.utils.room.Surfaces$package$", ({
  dG: 1
}));
var $n_Lsketchlib_utils_room_Surfaces$package$;
function $m_Lsketchlib_utils_room_Surfaces$package$() {
  if ((!$n_Lsketchlib_utils_room_Surfaces$package$)) {
    $n_Lsketchlib_utils_room_Surfaces$package$ = new $c_Lsketchlib_utils_room_Surfaces$package$();
  }
  return $n_Lsketchlib_utils_room_Surfaces$package$;
}
/** @constructor */
function $c_Lsketchlib_utils_room_Walls$package$() {
}
$p = $c_Lsketchlib_utils_room_Walls$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Walls$package$;
/** @constructor */
function $h_Lsketchlib_utils_room_Walls$package$() {
}
$h_Lsketchlib_utils_room_Walls$package$.prototype = $p;
$p.v9 = (function(bnd, topY) {
  var edges = bnd.g5;
  var out = [];
  var i = 0;
  while ((i < (edges.length | 0))) {
    var e = edges[i];
    var dx = (e.aA.l - e.a4.l);
    var dz = (e.aA.k - e.a4.k);
    var $x_1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((0.5 * (e.a4.l + e.aA.l)), (0.5 * topY), (0.5 * (e.a4.k + e.aA.k)));
    var p$proxy1 = ((dx * dx) + (dz * dz));
    out.push(new $c_Lsketchlib_utils_room_Wall($x_1, (+Math.sqrt(p$proxy1)), topY, new $c_Ltrivalibs_graphics_math_cpu_Vec3(e.bH.l, 0.0, e.bH.k)));
    i = ((1 + i) | 0);
  }
  return out;
});
var $d_Lsketchlib_utils_room_Walls$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Walls$package$, "sketchlib.utils.room.Walls$package$", ({
  dH: 1
}));
var $n_Lsketchlib_utils_room_Walls$package$;
function $m_Lsketchlib_utils_room_Walls$package$() {
  if ((!$n_Lsketchlib_utils_room_Walls$package$)) {
    $n_Lsketchlib_utils_room_Walls$package$ = new $c_Lsketchlib_utils_room_Walls$package$();
  }
  return $n_Lsketchlib_utils_room_Walls$package$;
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
  dI: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.h3 = null;
  this.kv = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.h3 = [];
  this.kv = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.qg = (function() {
  return (import.meta.hot !== (void 0));
});
$p.tE = (function() {
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
$p.uN = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().tE()) + ":") + label);
});
$p.lZ = (function() {
  return window.sessionStorage;
});
$p.uf = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().lZ().getItem(key);
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
$p.vf = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().lZ().setItem(key, JSON.stringify(json));
});
$p.ul = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().lZ().removeItem(key);
});
$p.so = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().kv)) {
    $m_Ltrivalibs_dev_dev$package$().kv = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().h3.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().h3[i].ik();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.ui = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().so();
  $m_Ltrivalibs_dev_dev$package$().h3.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().qq($m_Ltrivalibs_dev_dev$package$().h3, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().h3.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  dJ: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.aj.w, cam.aj.A, cam.aj.u, cam.b0, cam.bL];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.bK;
      var aspect$1 = cam.gj;
      var near$1 = cam.hd;
      var far$1 = cam.hc;
      cam.lX(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
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
$p.rL = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().qg())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().uN(label);
    var initPos = cam.aj;
    var initRotH = cam.b0;
    var initRotV = cam.bL;
    var stored = $m_Ltrivalibs_dev_dev$package$().uf(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.ik();
      $m_Ltrivalibs_dev_dev$package$().ul(sk);
      var fov$proxy1 = cam.bK;
      var aspect$proxy1 = cam.gj;
      var near$proxy1 = cam.hd;
      var far$proxy1 = cam.hc;
      cam.lX(fov$proxy1, aspect$proxy1, near$proxy1, far$proxy1, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().ui(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().vf(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  dK: 1
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
  this.o = null;
  this.M = null;
  this.N = null;
  this.H = null;
  this.o = buffer;
  this.M = device;
  this.N = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.H = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aQ)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  aQ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_BufferedGeometry(vertices, indices) {
  this.kw = null;
  this.j6 = null;
  this.kw = vertices;
  this.j6 = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  dS: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FaceData(normal, section) {
  this.g8 = null;
  this.rj = 0;
  this.g8 = normal;
  this.rj = section;
}
$p = $c_Ltrivalibs_graphics_geometry_FaceData.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FaceData;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FaceData() {
}
$h_Ltrivalibs_graphics_geometry_FaceData.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_FaceData = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FaceData, "trivalibs.graphics.geometry.FaceData", ({
  dT: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.hL = null;
  this.ai = null;
  this.c0 = null;
  this.j8 = null;
  this.j7 = null;
  this.hL = evidence$1;
  this.ai = [];
  this.c0 = [];
  this.j8 = [];
  this.j7 = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.rz = (function(face, normal, section) {
  var faceIdx = (this.ai.length | 0);
  this.ai.push(face);
  this.c0.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().u5(this.hL.bN(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().sN(Object, this.j7, key)) {
      var $x_2 = this.j8;
      var dict = this.j7;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().mE.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.nP.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.j8.length | 0);
      var dict$1 = this.j7;
      dict$1[key] = idx;
      this.j8.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.hL.bN(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
$p.qi = (function() {
  var hasQuads = false;
  var i = 0;
  while ((i < (this.ai.length | 0))) {
    var arr = this.ai[i];
    if ((this.c0[i].g8 === null)) {
      var $x_2 = this.c0[i];
      if (((arr.length | 0) === 3)) {
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$().lS(this.ai[i], this.hL);
      } else {
        hasQuads = true;
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().lS(this.ai[i], this.hL);
      }
      $x_2.g8 = $x_1;
    }
    i = ((1 + i) | 0);
  }
  return hasQuads;
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  dX: 1
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
$p.lA = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().rA(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  dY: 1
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
  this.hN = null;
  this.hM = 0.0;
  this.hN = normal;
  this.hM = d;
}
$p = $c_Ltrivalibs_graphics_geometry_Plane.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane() {
}
$h_Ltrivalibs_graphics_geometry_Plane.prototype = $p;
$p.uh = (function() {
  var a = this.hN.w;
  var b = this.hN.A;
  var c = this.hN.u;
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((1.0 - ((2.0 * a) * a)), (((-2.0) * a) * b), (((-2.0) * a) * c), 0.0, (((-2.0) * a) * b), (1.0 - ((2.0 * b) * b)), (((-2.0) * b) * c), 0.0, (((-2.0) * a) * c), (((-2.0) * b) * c), (1.0 - ((2.0 * c) * c)), 0.0, ((2.0 * a) * this.hM), ((2.0 * b) * this.hM), ((2.0 * c) * this.hM), 1.0);
});
var $d_Ltrivalibs_graphics_geometry_Plane = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane, "trivalibs.graphics.geometry.Plane", ({
  dZ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Plane$() {
  this.nM = null;
  $n_Ltrivalibs_graphics_geometry_Plane$ = this;
  this.nM = new $c_Ltrivalibs_graphics_geometry_Plane(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), 0.0);
}
$p = $c_Ltrivalibs_graphics_geometry_Plane$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane$() {
}
$h_Ltrivalibs_graphics_geometry_Plane$.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Plane$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane$, "trivalibs.graphics.geometry.Plane$", ({
  e0: 1
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
  this.rk = 0;
  this.rl = 0;
  this.rk = faceIndex;
  this.rl = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  e2: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.rm = null;
  this.nP = null;
  this.rm = position;
  this.nP = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  e7: 1
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
$p.lQ = (function(idxBuf, vertexCount) {
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
  e8: 1
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
$p.rA = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.rz(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  e9: 1
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
$p.u5 = (function(v) {
  return (((($doubleToInt((10000.0 * v.w)) + ",") + $doubleToInt((10000.0 * v.A))) + ",") + $doubleToInt((10000.0 * v.u)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  ea: 1
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
$p.hj = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
$p.r2 = (function(q) {
  return q[0];
});
$p.q6 = (function(q) {
  return q[1];
});
$p.q7 = (function(q) {
  return q[2];
});
$p.r5 = (function(q) {
  return q[3];
});
$p.lS = (function(q, evidence$1) {
  var a = evidence$1.bN(this.r2(q));
  var b = evidence$1.bN(this.q6(q));
  var c = evidence$1.bN(this.q7(q));
  var d = evidence$1.bN(this.r5(q));
  var d1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((c.w - a.w), (c.A - a.A), (c.u - a.u));
  var d2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((d.w - b.w), (d.A - b.A), (d.u - b.u));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), d1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), d2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  ec: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Quad$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
}
$p = $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
}
$h_Ltrivalibs_graphics_geometry_polygon$package$Triangle$.prototype = $p;
$p.rw = (function(tri) {
  return tri[0];
});
$p.rQ = (function(tri) {
  return tri[1];
});
$p.s1 = (function(tri) {
  return tri[2];
});
$p.lS = (function(tri, evidence$1) {
  var pa = evidence$1.bN(this.rw(tri));
  var pb = evidence$1.bN(this.rQ(tri));
  var pc = evidence$1.bN(this.s1(tri));
  var e1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pb.w - pa.w), (pb.A - pa.A), (pb.u - pa.u));
  var e2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pc.w - pa.w), (pc.A - pa.A), (pc.u - pa.u));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), e1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), e2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$, "trivalibs.graphics.geometry.polygon$package$Triangle$", ({
  ed: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
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
$p.m2 = (function(x) {
  if ($isInt(x)) {
    var i = (x | 0);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ("" + i));
  } else {
    return x;
  }
});
var $d_Ltrivalibs_graphics_lib_args$package$ = new $TypeData().i($c_Ltrivalibs_graphics_lib_args$package$, "trivalibs.graphics.lib.args$package$", ({
  ee: 1
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
$p.sR = (function(h, s, v, out) {
  var p$proxy10 = (h + 0.0);
  var p$proxy11 = ((6.0 * (p$proxy10 - (+Math.floor(p$proxy10)))) - 3.0);
  var p$proxy12 = ((+Math.abs(p$proxy11)) - 1.0);
  var t$proxy1 = ((p$proxy12 < 0.0) ? 0.0 : ((p$proxy12 > 1.0) ? 1.0 : p$proxy12));
  out.w = (v * (1.0 + ((((t$proxy1 * t$proxy1) * (3.0 - (2.0 * t$proxy1))) - 1.0) * s)));
  var p$proxy13 = (h + 0.6666666666666666);
  var p$proxy14 = ((6.0 * (p$proxy13 - (+Math.floor(p$proxy13)))) - 3.0);
  var p$proxy15 = ((+Math.abs(p$proxy14)) - 1.0);
  var t$proxy2 = ((p$proxy15 < 0.0) ? 0.0 : ((p$proxy15 > 1.0) ? 1.0 : p$proxy15));
  out.A = (v * (1.0 + ((((t$proxy2 * t$proxy2) * (3.0 - (2.0 * t$proxy2))) - 1.0) * s)));
  var p$proxy16 = (h + 0.3333333333333333);
  var p$proxy17 = ((6.0 * (p$proxy16 - (+Math.floor(p$proxy16)))) - 3.0);
  var p$proxy18 = ((+Math.abs(p$proxy17)) - 1.0);
  var t$proxy3 = ((p$proxy18 < 0.0) ? 0.0 : ((p$proxy18 > 1.0) ? 1.0 : p$proxy18));
  out.u = (v * (1.0 + ((((t$proxy3 * t$proxy3) * (3.0 - (2.0 * t$proxy3))) - 1.0) * s)));
  return out;
});
var $d_Ltrivalibs_graphics_lib_color_Color$kernel$ = new $TypeData().i($c_Ltrivalibs_graphics_lib_color_Color$kernel$, "trivalibs.graphics.lib.color.Color$kernel$", ({
  ef: 1
}));
var $n_Ltrivalibs_graphics_lib_color_Color$kernel$;
function $m_Ltrivalibs_graphics_lib_color_Color$kernel$() {
  if ((!$n_Ltrivalibs_graphics_lib_color_Color$kernel$)) {
    $n_Ltrivalibs_graphics_lib_color_Color$kernel$ = new $c_Ltrivalibs_graphics_lib_color_Color$kernel$();
  }
  return $n_Ltrivalibs_graphics_lib_color_Color$kernel$;
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($thiz, fovY, aspect, near, far) {
  var x = (0.5 * fovY);
  var f = (1.0 / (+Math.tan(x)));
  var rInv = (1.0 / (near - far));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((f / aspect), 0.0, 0.0, 0.0, 0.0, f, 0.0, 0.0, 0.0, 0.0, (far * rInv), (-1.0), 0.0, 0.0, ((near * far) * rInv), 0.0);
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($thiz, m, x$2, other) {
  var a00 = (+x$2.is(m));
  var a01 = (+x$2.it(m));
  var a02 = (+x$2.iu(m));
  var a03 = (+x$2.iv(m));
  var a10 = (+x$2.iw(m));
  var a11 = (+x$2.ix(m));
  var a12 = (+x$2.iy(m));
  var a13 = (+x$2.iz(m));
  var a20 = (+x$2.iA(m));
  var a21 = (+x$2.iB(m));
  var a22 = (+x$2.iC(m));
  var a23 = (+x$2.iD(m));
  var a30 = (+x$2.iE(m));
  var a31 = (+x$2.iF(m));
  var a32 = (+x$2.iG(m));
  var a33 = (+x$2.iH(m));
  var b00 = (+x$2.is(other));
  var b01 = (+x$2.it(other));
  var b02 = (+x$2.iu(other));
  var b03 = (+x$2.iv(other));
  var b10 = (+x$2.iw(other));
  var b11 = (+x$2.ix(other));
  var b12 = (+x$2.iy(other));
  var b13 = (+x$2.iz(other));
  var b20 = (+x$2.iA(other));
  var b21 = (+x$2.iB(other));
  var b22 = (+x$2.iC(other));
  var b23 = (+x$2.iD(other));
  var b30 = (+x$2.iE(other));
  var b31 = (+x$2.iF(other));
  var b32 = (+x$2.iG(other));
  var b33 = (+x$2.iH(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.is(m));
  var a01 = (+x$2.it(m));
  var a02 = (+x$2.iu(m));
  var a03 = (+x$2.iv(m));
  var a10 = (+x$2.iw(m));
  var a11 = (+x$2.ix(m));
  var a12 = (+x$2.iy(m));
  var a13 = (+x$2.iz(m));
  var a20 = (+x$2.iA(m));
  var a21 = (+x$2.iB(m));
  var a22 = (+x$2.iC(m));
  var a23 = (+x$2.iD(m));
  var a30 = (+x$2.iE(m));
  var a31 = (+x$2.iF(m));
  var a32 = (+x$2.iG(m));
  var a33 = (+x$2.iH(m));
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
  mb.qt(m, (+x$4.is(other)));
  mb.qu(m, (+x$4.it(other)));
  mb.qv(m, (+x$4.iu(other)));
  mb.qw(m, (+x$4.iv(other)));
  mb.qx(m, (+x$4.iw(other)));
  mb.qy(m, (+x$4.ix(other)));
  mb.qz(m, (+x$4.iy(other)));
  mb.qA(m, (+x$4.iz(other)));
  mb.qB(m, (+x$4.iA(other)));
  mb.qC(m, (+x$4.iB(other)));
  mb.qD(m, (+x$4.iC(other)));
  mb.qE(m, (+x$4.iD(other)));
  mb.qF(m, (+x$4.iE(other)));
  mb.qG(m, (+x$4.iF(other)));
  mb.qH(m, (+x$4.iG(other)));
  mb.qI(m, (+x$4.iH(other)));
}
function $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2(((+x$2.ag(v)) + (+x$2.ag(other))), ((+x$2.ah(v)) + (+x$2.ah(other))));
}
function $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2(((+x$2.ag(v)) - (+x$2.ag(other))), ((+x$2.ah(v)) - (+x$2.ah(other))));
}
function $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2(((+x$2.ag(v)) * scalar), ((+x$2.ah(v)) * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($thiz, v, x$2, other, x$4) {
  x$2.hr(v, (+x$4.ag(other)));
  x$2.hs(v, (+x$4.ah(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.w + other.w), (v.A + other.A), (v.u + other.u));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((-v.w), (-v.A), (-v.u));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.w - other.w), (v.A - other.A), (v.u - other.u));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.w * scalar), (v.A * scalar), (v.u * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.w / scalar), (v.A / scalar), (v.u / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.A * other.u) - (v.u * other.A)), ((v.u * other.w) - (v.w * other.u)), ((v.w * other.A) - (v.A * other.w)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(x$2, v));
}
function $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($thiz, v, x$2, other, x$4) {
  x$2.hr(v, (+x$4.ag(other)));
  x$2.hs(v, (+x$4.ah(other)));
  x$2.mb(v, (+x$4.bq(other)));
  x$2.m6(v, (+x$4.bp(other)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.kx = 0.0;
  this.ky = 0.0;
  this.kz = 0.0;
  this.kA = 0.0;
  this.kB = 0.0;
  this.kC = 0.0;
  this.kD = 0.0;
  this.kE = 0.0;
  this.kF = 0.0;
  this.kG = 0.0;
  this.kH = 0.0;
  this.kI = 0.0;
  this.kJ = 0.0;
  this.kK = 0.0;
  this.kL = 0.0;
  this.kM = 0.0;
  this.kx = m00;
  this.ky = m01;
  this.kz = m02;
  this.kA = m03;
  this.kB = m10;
  this.kC = m11;
  this.kD = m12;
  this.kE = m13;
  this.kF = m20;
  this.kG = m21;
  this.kH = m22;
  this.kI = m23;
  this.kJ = m30;
  this.kK = m31;
  this.kL = m32;
  this.kM = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  et: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.jb = 0.0;
  this.jc = 0.0;
  this.jd = 0.0;
  this.ja = 0.0;
  this.jb = x;
  this.jc = y;
  this.jd = z;
  this.ja = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  ew: 1
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
$p.sF = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.sG = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  ex: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((((((+x$2.bp(q)) * (+x$2.ag(p))) + ((+x$2.ag(q)) * (+x$2.bp(p)))) + ((+x$2.ah(q)) * (+x$2.bq(p)))) - ((+x$2.bq(q)) * (+x$2.ah(p)))), (((((+x$2.bp(q)) * (+x$2.ah(p))) - ((+x$2.ag(q)) * (+x$2.bq(p)))) + ((+x$2.ah(q)) * (+x$2.bp(p)))) + ((+x$2.bq(q)) * (+x$2.ag(p)))), (((((+x$2.bp(q)) * (+x$2.bq(p))) + ((+x$2.ag(q)) * (+x$2.ah(p)))) - ((+x$2.ah(q)) * (+x$2.ag(p)))) + ((+x$2.bq(q)) * (+x$2.bp(p)))), (((((+x$2.bp(q)) * (+x$2.bp(p))) - ((+x$2.ag(q)) * (+x$2.ag(p)))) - ((+x$2.ah(q)) * (+x$2.ah(p)))) - ((+x$2.bq(q)) * (+x$2.bq(p)))));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.l = 0.0;
  this.k = 0.0;
  this.l = x;
  this.k = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  eB: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.w = 0.0;
  this.A = 0.0;
  this.u = 0.0;
  this.w = x;
  this.A = y;
  this.u = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  eE: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4(x, y, z, w) {
  this.ga = 0.0;
  this.gb = 0.0;
  this.gc = 0.0;
  this.g9 = 0.0;
  this.ga = x;
  this.gb = y;
  this.gc = z;
  this.g9 = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4, "trivalibs.graphics.math.cpu.Vec4", ({
  eH: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  this.nZ = null;
  this.o0 = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.sL = (function() {
  if ((!this.o0)) {
    this.nZ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.o0 = true;
  }
  return this.nZ;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  eL: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
  this.o1 = null;
  this.o2 = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = $p;
$p.v4 = (function() {
  if ((!this.o2)) {
    this.o1 = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6();
    this.o2 = true;
  }
  return this.o1;
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$", ({
  eO: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
  this.o3 = null;
  this.o4 = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = $p;
$p.v6 = (function() {
  if ((!this.o4)) {
    this.o3 = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8();
    this.o4 = true;
  }
  return this.o3;
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$", ({
  eR: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
}
function $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, wgsl) {
  $thiz.f = wgsl;
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_Expr() {
  this.f = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_Expr.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_Expr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_Expr() {
}
$h_Ltrivalibs_graphics_math_gpu_Expr.prototype = $p;
$p.r = (function() {
  return this.f;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  aX: 1
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
$p.aT = (function() {
  return new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$10$2) => {
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), _$10$2);
  })));
});
$p.sK = (function() {
  return new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$11$2) => {
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), _$11$2);
  })));
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$, "trivalibs.graphics.math.gpu.LeftScalar$", ({
  eV: 1
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
$p.an = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(v));
});
$p.uX = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec2<f32>(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(v.l)) + ", ") + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(v.k)) + ")"));
});
$p.iO = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(v.w)) + ", ") + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(v.A)) + ", ") + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(v.u)) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$, "trivalibs.graphics.math.gpu.cpu_interop$package$", ({
  eY: 1
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
$p.qT = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.f) + ", ") + sampler.f) + ", ") + uv.f) + ")"));
});
$p.ad = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.f) + ", ") + sampler.f) + ", ") + uv.f) + ")"));
});
$p.jM = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.f) + ", ") + coord.f) + ", 0)"));
});
$p.sf = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.f) + ", ") + coord.f) + ", 0)"));
});
$p.uu = (function(onFalse, onTrue, cond) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("select(" + onFalse.f) + ", ") + onTrue.f) + ", ") + cond.f) + ")"));
});
$p.sA = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " > ") + b.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  eZ: 1
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
$p.ax = (function(parts) {
  var out = [];
  var i = 0;
  while ((i < parts.R())) {
    var p = parts.at(i);
    if ((p.length > 0)) {
      out.push(p);
    }
    i = ((1 + i) | 0);
  }
  return out.join("\n");
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$Block$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$Block$, "trivalibs.graphics.math.gpu.expr$package$Block$", ({
  f0: 1
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
  this.o7 = null;
  this.o8 = false;
  this.o9 = null;
  this.oa = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.ae = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.j = (function() {
  if ((!this.o8)) {
    this.o7 = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.o8 = true;
  }
  return this.o7;
});
$p.cb = (function() {
  if ((!this.oa)) {
    this.o9 = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.oa = true;
  }
  return this.o9;
});
$p.v5 = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".xy"));
});
$p.jY = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".xz"));
});
$p.hq = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".xy"));
});
$p.rh = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".zw"));
});
$p.gw = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".xyz"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  f1: 1
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
$p.gp = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec2<i32>(" + v.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_ivec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_ivec2$, "trivalibs.graphics.math.gpu.ivec2$", ({
  fd: 1
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
$p.a7 = (function(x, y) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec2<f32>(" + x.f) + ", ") + y.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec2$, "trivalibs.graphics.math.gpu.vec2$", ({
  fe: 1
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
$p.ad = (function(x, y, z) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.f) + ", ") + y.f) + ", ") + z.f) + ")"));
});
$p.gp = (function(scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec3<f32>(" + scalar.f) + ")"));
});
$p.rF = (function(scalar) {
  return this.gp($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(scalar));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  ff: 1
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
$p.jD = (function(x, y, z, w) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("vec4<f32>(" + x.f) + ", ") + y.f) + ", ") + z.f) + ", ") + w.f) + ")"));
});
$p.a7 = (function(xyz, w) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.f) + ", ") + w.f) + ")"));
});
$p.ad = (function(xy, z, w) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec4<f32>(" + xy.f) + ", ") + z.f) + ", ") + w.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  fg: 1
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
  this.kQ = null;
  this.kS = 0;
  this.kR = 0;
  this.kN = null;
  this.kP = 0;
  this.kO = 0;
  this.h4 = null;
  this.hO = null;
  this.je = null;
  this.kQ = null;
  this.kS = (-1);
  this.kR = (-1);
  this.kN = null;
  this.kP = (-1);
  this.kO = (-1);
  this.h4 = [];
  this.hO = [];
  this.je = null;
}
$p = $c_Ltrivalibs_graphics_painter_BindCache.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindCache;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindCache() {
}
$h_Ltrivalibs_graphics_painter_BindCache.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindCache = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindCache, "trivalibs.graphics.painter.BindCache", ({
  fh: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BindPair(name, value) {
  this.s = null;
  this.s = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  fi: 1
}));
function $f_Ltrivalibs_graphics_painter_Bindable__$init$__V($thiz) {
  $thiz.jE(0);
  $thiz.lD(null);
}
function $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V($thiz, idx, value) {
  while ((($thiz.bM().length | 0) <= idx)) {
    $thiz.bM().push(null);
  }
  if ((!($thiz.bM()[idx] === value))) {
    $thiz.bM()[idx] = value;
    $thiz.jE(((1 + $thiz.il()) | 0));
  }
}
function $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V($thiz, idx, pb) {
  while ((($thiz.bA().length | 0) <= idx)) {
    $thiz.bA().push(null);
  }
  var old = $thiz.bA()[idx];
  if ((old === null)) {
    var $x_1 = true;
  } else {
    var x = old.panel;
    var x$2 = pb.panel;
    var $x_1 = (!((x === null) ? (x$2 === null) : (x === x$2)));
  }
  if (((($x_1 || ((old.index | 0) !== (pb.index | 0))) || ((old.mipLevel | 0) !== (pb.mipLevel | 0))) || ((!(!old.depth)) !== (!(!pb.depth))))) {
    $thiz.bA()[idx] = pb;
    $thiz.jE(((1 + $thiz.il()) | 0));
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BlendState$() {
  this.oc = null;
  this.ob = null;
  $n_Ltrivalibs_graphics_painter_BlendState$ = this;
  this.oc = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one-minus-src-alpha"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one-minus-src-alpha"));
  this.ob = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one"));
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst", "zero"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst-alpha", "zero"));
}
$p = $c_Ltrivalibs_graphics_painter_BlendState$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BlendState$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BlendState$() {
}
$h_Ltrivalibs_graphics_painter_BlendState$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BlendState$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_BlendState$, "trivalibs.graphics.painter.BlendState$", ({
  fj: 1
}));
var $n_Ltrivalibs_graphics_painter_BlendState$;
function $m_Ltrivalibs_graphics_painter_BlendState$() {
  if ((!$n_Ltrivalibs_graphics_painter_BlendState$)) {
    $n_Ltrivalibs_graphics_painter_BlendState$ = new $c_Ltrivalibs_graphics_painter_BlendState$();
  }
  return $n_Ltrivalibs_graphics_painter_BlendState$;
}
function $p_Ltrivalibs_graphics_painter_CanvasSurface$__preferredFormat__T($thiz) {
  var gpu = $m_Ltrivalibs_graphics_painter_WebGPU$().qm();
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
$p.rH = (function(canvas, format) {
  return new $c_Ltrivalibs_graphics_painter_CanvasSurface(canvas, ((format === (void 0)) ? $p_Ltrivalibs_graphics_painter_CanvasSurface$__preferredFormat__T(this) : format));
});
var $d_Ltrivalibs_graphics_painter_CanvasSurface$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_CanvasSurface$, "trivalibs.graphics.painter.CanvasSurface$", ({
  fk: 1
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
  while ((i < $thiz.gd)) {
    var b = $thiz.ge[i];
    if (((format === null) && (b.c2 > 0))) {
      format = b.gf;
    }
    i = ((1 + i) | 0);
  }
  $thiz.kX = format;
}
function $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V($thiz, index, verts, indices, widenTo32) {
  while ((($thiz.ge.length | 0) <= index)) {
    $thiz.ge.push(new $c_Ltrivalibs_graphics_painter_FormBuffers());
  }
  var b = $thiz.ge[index];
  $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts);
  if ((indices !== null)) {
    $p_Ltrivalibs_graphics_painter_Form__uploadIndices__Ltrivalibs_graphics_painter_FormBuffers__sjs_js_typedarray_TypedArray__Z__V($thiz, b, indices, widenTo32);
  } else {
    b.c2 = 0;
    b.hQ = 0;
  }
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts) {
  var data = verts.dv.buffer;
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.c3 === null) || (b.l0 < padded))) {
    if ((b.c3 !== null)) {
      b.c3.destroy();
    }
    b.c3 = $thiz.hP.h.createBuffer(({
      "size": padded,
      "usage": 40
    }));
    b.l0 = padded;
  }
  $thiz.hP.aR.writeBuffer(b.c3, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.jg = size;
  b.h5 = (verts.off | 0);
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
    b.gf = "uint32";
    var data = u32.buffer;
  } else if ((!(!(raw instanceof Uint16Array)))) {
    count = (raw.length | 0);
    b.gf = "uint16";
    var data = raw.buffer;
  } else {
    count = (raw.length | 0);
    b.gf = "uint32";
    var data = raw.buffer;
  }
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.c1 === null) || (b.kZ < padded))) {
    if ((b.c1 !== null)) {
      b.c1.destroy();
    }
    b.c1 = $thiz.hP.h.createBuffer(({
      "size": padded,
      "usage": 24
    }));
    b.kZ = padded;
  }
  $thiz.hP.aR.writeBuffer(b.c1, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.hQ = size;
  b.c2 = count;
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
  this.hP = null;
  this.ge = null;
  this.gd = 0;
  this.kY = null;
  this.kW = null;
  this.kX = null;
  this.hP = painter;
  this.ge = [];
  this.gd = 0;
  this.kY = "triangle-list";
  this.kW = "ccw";
  this.kX = null;
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.uv = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.kY = topology;
  }
  if ((frontFace !== (void 0))) {
    this.kW = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, geometry.kw, geometry.j6, false);
    this.gd = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, vertices, null, false);
    this.gd = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((geometries !== (void 0))) {
    var use32 = false;
    var i = 0;
    while ((i < (geometries.length | 0))) {
      var idx = geometries[i].j6;
      if (((idx !== null) && (!(!(idx instanceof Uint32Array))))) {
        use32 = true;
      }
      i = ((1 + i) | 0);
    }
    i = 0;
    while ((i < (geometries.length | 0))) {
      var geo = geometries[i];
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i, geo.kw, geo.j6, use32);
      i = ((1 + i) | 0);
    }
    this.gd = (geometries.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((verticesAll !== (void 0))) {
    var i$1 = 0;
    while ((i$1 < (verticesAll.length | 0))) {
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i$1, verticesAll[i$1], null, false);
      i$1 = ((1 + i$1) | 0);
    }
    this.gd = (verticesAll.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  fl: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_FormBuffers() {
  this.c3 = null;
  this.l0 = 0;
  this.jg = 0;
  this.h5 = 0;
  this.c1 = null;
  this.kZ = 0;
  this.hQ = 0;
  this.c2 = 0;
  this.gf = null;
  this.c3 = null;
  this.l0 = 0;
  this.jg = 0;
  this.h5 = 0;
  this.c1 = null;
  this.kZ = 0;
  this.hQ = 0;
  this.c2 = 0;
  this.gf = "uint16";
}
$p = $c_Ltrivalibs_graphics_painter_FormBuffers.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_FormBuffers;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_FormBuffers() {
}
$h_Ltrivalibs_graphics_painter_FormBuffers.prototype = $p;
var $d_Ltrivalibs_graphics_painter_FormBuffers = new $TypeData().i($c_Ltrivalibs_graphics_painter_FormBuffers, "trivalibs.graphics.painter.FormBuffers", ({
  fm: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.hR = null;
  this.hR = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.R = (function() {
  return (this.hR.length | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  fn: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__fireResize__D__D__V($thiz, w, h) {
  var k = 0;
  while ((k < ($thiz.jk.length | 0))) {
    $thiz.jk[k].q3(w, h);
    k = ((1 + k) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  panel.lK($doubleToInt($thiz.re()), $doubleToInt($thiz.qp()));
  if (panel.lY()) {
    return (void 0);
  }
  $thiz.qR(panel);
}
function $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, shape, depthTest, multisample, formats, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.hT]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Z__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.Y, shape.l8, fmts, depthTest, multisample, shape.i7.kY, shape.l9, shape.i7.kW, shape.i7.kX, false);
  pass.setPipeline(pipeline);
  var form = shape.i7;
  var bufferCount = form.gd;
  var instanceCount = shape.la.R();
  var runtime = $p_Ltrivalibs_graphics_painter_Painter__runtimeBindingsOf__Ltrivalibs_graphics_painter_Panel__sjs_js_Dictionary($thiz, panel);
  if ((instanceCount === 0)) {
    $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Bindable__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape, null, runtime, null);
    var b = 0;
    while ((b < bufferCount)) {
      var buf = form.ge[b];
      if ((buf.h5 > 0)) {
        pass.setVertexBuffer(0, buf.c3, 0.0, buf.jg);
        if ((buf.c2 > 0)) {
          pass.setIndexBuffer(buf.c1, buf.gf, 0.0, buf.hQ);
          pass.drawIndexed(buf.c2);
        } else {
          pass.draw(buf.h5);
        }
      }
      b = ((1 + b) | 0);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Bindable__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape, shape.la.hR[i], runtime, null);
      var b$2 = 0;
      while ((b$2 < bufferCount)) {
        var buf$2 = form.ge[b$2];
        if ((buf$2.h5 > 0)) {
          pass.setVertexBuffer(0, buf$2.c3, 0.0, buf$2.jg);
          if ((buf$2.c2 > 0)) {
            pass.setIndexBuffer(buf$2.c1, buf$2.gf, 0.0, buf$2.hQ);
            pass.drawIndexed(buf$2.c2);
          } else {
            pass.draw(buf$2.h5);
          }
        }
        b$2 = ((1 + b$2) | 0);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.hT]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Z__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.U, layer.l1, fmts, depthTest, multisample, "triangle-list", "none", "ccw", null, false);
  pass.setPipeline(pipeline);
  var instanceCount = layer.jh.R();
  var runtime = $p_Ltrivalibs_graphics_painter_Painter__runtimeBindingsOf__Ltrivalibs_graphics_painter_Panel__sjs_js_Dictionary($thiz, panel);
  if ((instanceCount === 0)) {
    $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Bindable__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer, null, runtime, srcView);
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Bindable__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer, layer.jh.hR[i], runtime, srcView);
      pass.draw(3);
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__runtimeBindingsOf__Ltrivalibs_graphics_painter_Panel__sjs_js_Dictionary($thiz, panel) {
  if ((panel === null)) {
    return null;
  } else {
    var dict = panel.i3;
    var keys = Object.keys(dict);
    return (((keys.length | 0) > 0) ? dict : null);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__resolveValueSlot__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__O($thiz, shade, i, bindings, inst, runtime) {
  var fromInst = (((inst !== null) && (i < (inst.bM().length | 0))) ? inst.bM()[i] : null);
  if ((fromInst !== null)) {
    return fromInst;
  } else {
    var own = ((i < (bindings.length | 0)) ? bindings[i] : null);
    if ((own !== null)) {
      return own;
    } else {
      if ((runtime !== null)) {
        var key$proxy3 = shade.ju[i];
        var $x_1 = (!(!(!(!runtime.hasOwnProperty(key$proxy3)))));
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        var key$proxy4 = shade.ju[i];
        return runtime[key$proxy4];
      } else {
        return null;
      }
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__boundPanelSlot__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__Ltrivalibs_graphics_painter_PanelBinding($thiz, k, panelBindings, inst) {
  var fromInst = (((inst !== null) && (k < (inst.bA().length | 0))) ? inst.bA()[k] : null);
  return ((fromInst !== null) ? fromInst : ((k < (panelBindings.length | 0)) ? panelBindings[k] : null));
}
function $p_Ltrivalibs_graphics_painter_Painter__fallbackPanelView__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUTextureView($thiz, shade, k, runtime, srcView) {
  if ((runtime !== null)) {
    var key$proxy5 = shade.i6[k];
    var $x_1 = (!(!(!(!runtime.hasOwnProperty(key$proxy5)))));
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    var key$proxy6 = shade.i6[k];
    var value = runtime[key$proxy6];
    return ((!(!(value instanceof $a_Ltrivalibs_graphics_painter_PanelBinding()))) ? $p_Ltrivalibs_graphics_painter_Painter__panelBindingView__Ltrivalibs_graphics_painter_PanelBinding__Ltrivalibs_graphics_painter_GPUTextureView($thiz, value) : value.a6[0].lc);
  } else {
    return ((k === 0) ? srcView : null);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__panelBindingView__Ltrivalibs_graphics_painter_PanelBinding__Ltrivalibs_graphics_painter_GPUTextureView($thiz, pb) {
  return ((!(!pb.depth)) ? pb.panel.se() : (((pb.mipLevel | 0) < 0) ? pb.panel.a6[(pb.index | 0)].lc : pb.panel.a6[(pb.index | 0)].aS[(pb.mipLevel | 0)]));
}
function $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Bindable__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, x, inst, runtime, srcView) {
  var shade = x.qW();
  if ((runtime !== null)) {
    var vg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, x.bM(), inst, runtime);
    if ((vg !== null)) {
      pass.setBindGroup(0, vg);
    }
    var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_BindCache__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, x.bA(), inst, runtime, srcView, null);
    if ((pg !== null)) {
      pass.setBindGroup(1, pg);
    }
  } else {
    var owner = ((inst !== null) ? inst : x);
    if ((owner.lC() === null)) {
      owner.lD(new $c_Ltrivalibs_graphics_painter_BindCache());
    }
    var x$proxy12 = owner.lC();
    var ownVersion = owner.il();
    var parentVersion = ((inst !== null) ? x.il() : 0);
    if (((x$proxy12.kS !== ownVersion) || (x$proxy12.kR !== parentVersion))) {
      x$proxy12.kQ = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, x.bM(), inst, null);
      x$proxy12.kS = ownVersion;
      x$proxy12.kR = parentVersion;
    }
    var vg$2 = x$proxy12.kQ;
    if ((vg$2 !== null)) {
      pass.setBindGroup(0, vg$2);
    }
    if ((((x$proxy12.kP !== ownVersion) || (x$proxy12.kO !== parentVersion)) || (!$p_Ltrivalibs_graphics_painter_Painter__panelViewsCurrent__Ltrivalibs_graphics_painter_BindCache__Ltrivalibs_graphics_painter_GPUTextureView__Z($thiz, x$proxy12, srcView)))) {
      x$proxy12.kN = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_BindCache__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, x.bA(), inst, null, srcView, x$proxy12);
      x$proxy12.kP = ownVersion;
      x$proxy12.kO = parentVersion;
    }
    var pg$2 = x$proxy12.kN;
    if ((pg$2 !== null)) {
      pass.setBindGroup(1, pg$2);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__panelViewsCurrent__Ltrivalibs_graphics_painter_BindCache__Ltrivalibs_graphics_painter_GPUTextureView__Z($thiz, c, srcView) {
  var builtSrc = c.je;
  var current = ((builtSrc === null) || (builtSrc === srcView));
  var k = 0;
  while ((current && (k < (c.h4.length | 0)))) {
    var p = c.h4[k];
    if (((p !== null) && (p.hV !== (c.hO[k] | 0)))) {
      current = false;
    }
    k = ((1 + k) | 0);
  }
  return current;
}
function $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings, inst, runtime) {
  if ((shade.l6 === null)) {
    return null;
  } else {
    var names = shade.ju;
    var entries = [];
    var i = 0;
    while ((i < (names.length | 0))) {
      var b = $p_Ltrivalibs_graphics_painter_Painter__resolveValueSlot__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__O($thiz, shade, i, bindings, inst, runtime);
      if ((b === null)) {
        var message$proxy2 = $p_Ltrivalibs_graphics_painter_Painter__missingBindingMessage__T__T($thiz, names[i]);
        throw new $c_sjs_js_JavaScriptException(Error(message$proxy2)).X;
      }
      entries.push($p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b));
      i = ((1 + i) | 0);
    }
    var $x_1 = $thiz.h;
    var _2 = shade.l6;
    return $x_1.createBindGroup(({
      "layout": _2,
      "entries": entries
    }));
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_BindCache__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, panelBindings, inst, runtime, srcView, cache) {
  if ((shade.js === null)) {
    return null;
  } else {
    var names = shade.i6;
    if ((cache !== null)) {
      cache.h4.length = (names.length | 0);
      cache.hO.length = (names.length | 0);
      cache.je = null;
    }
    var entries = [];
    var k = 0;
    while ((k < (names.length | 0))) {
      var pb = $p_Ltrivalibs_graphics_painter_Painter__boundPanelSlot__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__Ltrivalibs_graphics_painter_PanelBinding($thiz, k, panelBindings, inst);
      var view = ((pb !== null) ? $p_Ltrivalibs_graphics_painter_Painter__panelBindingView__Ltrivalibs_graphics_painter_PanelBinding__Ltrivalibs_graphics_painter_GPUTextureView($thiz, pb) : $p_Ltrivalibs_graphics_painter_Painter__fallbackPanelView__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUTextureView($thiz, shade, k, runtime, srcView));
      if ((view === null)) {
        var message$proxy3 = $p_Ltrivalibs_graphics_painter_Painter__missingBindingMessage__T__T($thiz, names[k]);
        throw new $c_sjs_js_JavaScriptException(Error(message$proxy3)).X;
      }
      if ((cache !== null)) {
        if ((pb !== null)) {
          cache.h4[k] = pb.panel;
          cache.hO[k] = pb.panel.hV;
        } else {
          cache.h4[k] = null;
          cache.hO[k] = 0;
          cache.je = view;
        }
      }
      var value = k;
      entries.push(({
        "binding": value,
        "resource": view
      }));
      k = ((1 + k) | 0);
    }
    var $x_1 = $thiz.h;
    var _2 = shade.js;
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
    var _2 = b.H;
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
  var key = (((((((((((((((shade.oz + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthKey) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace) + stripKey);
  var cached = $thiz.l5[key];
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
    if ((shade.l7 !== null)) {
      var _2 = shade.jt;
      var _2$1 = [shade.l7];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.jt;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.oA;
    var _2$4 = shade.jt;
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
    var p = $thiz.h.createRenderPipeline(desc);
    $thiz.l5[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.on)) {
    $thiz.om = $thiz.h.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.on = true;
  }
  return $thiz.om;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.oh)) {
    var $x_2 = $thiz.h;
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
    $thiz.og = $x_1;
    $thiz.oh = true;
  }
  return $thiz.og;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitModule__Ltrivalibs_graphics_painter_GPUShaderModule($thiz) {
  if ((!$thiz.oj)) {
    $thiz.oi = $thiz.h.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    $thiz.oj = true;
  }
  return $thiz.oi;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipelineLayout__Ltrivalibs_graphics_painter_GPUPipelineLayout($thiz) {
  if ((!$thiz.ol)) {
    var $x_2 = $thiz.h;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var $x_1 = $x_2.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    $thiz.ok = $x_1;
    $thiz.ol = true;
  }
  return $thiz.ok;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipelineFor__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  var cached = $thiz.l2[format];
  if ((cached !== (void 0))) {
    return cached;
  } else {
    var $x_1 = $thiz.h;
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
    $thiz.l2[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__sourceShade__Ltrivalibs_graphics_painter_Shade($thiz) {
  if ((!$thiz.oy)) {
    var id = $thiz.q;
    $thiz.q = ((1 + $thiz.q) | 0);
    $thiz.ox = new $c_Ltrivalibs_graphics_painter_Shade(id, $p_Ltrivalibs_graphics_painter_Painter__blitModule__Ltrivalibs_graphics_painter_GPUShaderModule($thiz), null, null, null, $p_Ltrivalibs_graphics_painter_Painter__blitPipelineLayout__Ltrivalibs_graphics_painter_GPUPipelineLayout($thiz), false, ({}), ({}));
    $thiz.oy = true;
  }
  return $thiz.ox;
}
function $p_Ltrivalibs_graphics_painter_Painter__drawSource__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Panel__Z__sjs_js_Array__V($thiz, pass, panel, multisample, formats) {
  var group = panel.jr;
  if ((group === null)) {
    if (((panel.gi === "rgba32float") && (!(!(!$thiz.h.features.has("float32-filterable")))))) {
      throw new $c_sjs_js_JavaScriptException(Error("Panel: drawing an rgba32float source needs the device feature 'float32-filterable'. Pass requiredFeatures = Arr(\"float32-filterable\") to Painter.init, use rgba16float, or keep the panel on the direct path (source size and format, no shapes or layers).")).X;
    }
    var $x_1 = $thiz.h;
    var _2 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
    var x$proxy13 = panel.i5;
    var _2$1 = $thiz.jT();
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
    panel.jr = group;
  }
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Z__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, $p_Ltrivalibs_graphics_painter_Painter__sourceShade__Ltrivalibs_graphics_painter_Shade($thiz), panel.jq, formats, panel.c5, multisample, "triangle-list", "none", "ccw", null, true));
  pass.setBindGroup(0, group);
  pass.draw(3);
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.op)) {
    var $x_2 = $thiz.h;
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
    $thiz.oo = $x_1;
    $thiz.op = true;
  }
  return $thiz.oo;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.or)) {
    var module = $thiz.h.createShaderModule(({
      "code": "\n@group(0) @binding(0) var ms_depth: texture_depth_multisampled_2d;\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4f {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  return vec4f(x, y, 0.0, 1.0);\n}\n\n@fragment\nfn fs_main(@builtin(position) pos: vec4f) -> @builtin(frag_depth) f32 {\n  return textureLoad(ms_depth, vec2i(pos.xy), 0);\n}\n"
    }));
    var $x_1 = $thiz.h;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.h;
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
    $thiz.oq = $x_2;
    $thiz.or = true;
  }
  return $thiz.oq;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.h.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.uq();
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
  var $x_1 = $thiz.h;
  var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
  var _2$4 = panel.qe();
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
  $thiz.aR.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.ou)) {
    $thiz.ot = $thiz.h.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.ou = true;
  }
  return $thiz.ot;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Painter(device, surface, adapter, gpu) {
  this.h = null;
  this.c4 = null;
  this.of = null;
  this.os = null;
  this.aR = null;
  this.hT = null;
  this.q = 0;
  this.jk = null;
  this.l4 = 0;
  this.l3 = 0;
  this.l5 = null;
  this.l2 = null;
  this.ov = null;
  this.ow = false;
  this.om = null;
  this.on = false;
  this.og = null;
  this.oh = false;
  this.oi = null;
  this.oj = false;
  this.ok = null;
  this.ol = false;
  this.ox = null;
  this.oy = false;
  this.oo = null;
  this.op = false;
  this.oq = null;
  this.or = false;
  this.ot = null;
  this.ou = false;
  this.h = device;
  this.c4 = surface;
  this.of = adapter;
  this.os = gpu;
  this.aR = device.queue;
  if ((adapter !== null)) {
    adapter.info;
  }
  this.hT = surface.kU;
  this.q = 0;
  this.jk = [];
  this.l4 = 0;
  this.l3 = 0;
  this.l5 = ({});
  this.l2 = ({});
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.s3 = (function() {
  var x1 = this.c4;
  if ((x1 instanceof $c_Ltrivalibs_graphics_painter_CanvasSurface)) {
    return x1.aQ;
  }
  throw new $c_sjs_js_JavaScriptException(Error("Painter.canvas: this painter has no canvas")).X;
});
$p.sV = (function() {
  this.c4.s8(this);
  this.c4.tT(((arg1$2, arg2$2) => {
    $p_Ltrivalibs_graphics_painter_Painter__fireResize__D__D__V(this, (arg1$2 | 0), (arg2$2 | 0));
  }));
});
$p.re = (function() {
  return ((this.l4 > 0) ? this.l4 : this.c4.va());
});
$p.qp = (function() {
  return ((this.l3 > 0) ? this.l3 : this.c4.sQ());
});
$p.tS = (function(cb) {
  this.jk.push(cb);
  cb.q3(this.re(), this.qp());
});
$p.qU = (function(magFilter, minFilter, mipmapFilter, addressMode, addressModeU, addressModeV) {
  var $x_1 = this.h;
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
$p.jT = (function() {
  if ((!this.ow)) {
    this.ov = this.qU("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    this.ow = true;
  }
  return this.ov;
});
$p.lM = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).uv(geometry, vertices, geometries, verticesAll, topology, frontFace);
});
$p.gu = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).ux(cullMode, blendState);
});
$p.gr = (function(shade, blendState, mipSource, mipTarget) {
  return new $c_Ltrivalibs_graphics_painter_Layer(this, shade).uw(blendState, mipSource, mipTarget);
});
$p.cd = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers, source, sourceBlend, followSurface, flipY, premultipliedAlpha) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).iM(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers, source, sourceBlend, followSurface, flipY, premultipliedAlpha);
});
$p.uA = (function(panel) {
  var encoder = this.h.createCommandEncoder();
  this.rW(encoder, panel, this.c4.sc(), this.hT);
  this.c4.u6(encoder);
});
$p.qR = (function(panel) {
  var msaa = panel.gg;
  var encoder = this.h.createCommandEncoder();
  var panelFormats = panel.hm();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.uS())) {
    if ((panel.jl !== null)) {
      var x$proxy4 = panel.jl;
      if (msaa) {
        var _2 = panel.qL(t);
        var TextureViewBundle_this = panel.a6[t];
        var _2$1 = TextureViewBundle_this.aS[0];
        var value = x$proxy4.ga;
        var value$1 = x$proxy4.gb;
        var value$2 = x$proxy4.gc;
        var value$3 = x$proxy4.g9;
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
        var TextureViewBundle_this$2 = panel.a6[t];
        var _2$3 = TextureViewBundle_this$2.aS[0];
        var value$4 = x$proxy4.ga;
        var value$5 = x$proxy4.gb;
        var value$6 = x$proxy4.gc;
        var value$7 = x$proxy4.g9;
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
      var _2$5 = panel.qL(t);
      var TextureViewBundle_this$3 = panel.a6[t];
      var _2$6 = TextureViewBundle_this$3.aS[0];
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var TextureViewBundle_this$4 = panel.a6[t];
      var _2$7 = TextureViewBundle_this$4.aS[0];
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
  if (panel.c5) {
    var _2$8 = panel.qe();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  if (panel.sm()) {
    $p_Ltrivalibs_graphics_painter_Painter__drawSource__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Panel__Z__sjs_js_Array__V(this, shapePass, panel, msaa, panelFormats);
  }
  var i = 0;
  while ((i < (panel.i4.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V(this, shapePass, panel.i4[i], panel.c5, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  this.aR.submit([encoder.finish()]);
  if (panel.hX) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V(this, panel);
  }
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.bI.length | 0))) {
    var layer = panel.bI[j];
    var needsPingPong = layer.u4(panel);
    if ((layer.hS >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        this.aR.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.a6[0].aS[layer.hS];
      var mipSrcView = ((layer.ji >= 0) ? panel.a6[0].aS[layer.ji] : panel.m1());
      var enc = this.h.createCommandEncoder();
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
      this.aR.submit([enc.finish()]);
    } else if (needsPingPong) {
      if ((curPass !== null)) {
        curPass.end();
        this.aR.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = this.h.createCommandEncoder();
      var _2$10 = panel.u3();
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
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V(this, ppPass, layer, false, false, panelFormats, panel.m1(), panel);
      ppPass.end();
      this.aR.submit([enc$2.finish()]);
      panel.uQ();
    } else {
      if ((curPass === null)) {
        curEncoder = this.h.createCommandEncoder();
        var $x_1 = curEncoder;
        var _2$13 = panel.m1();
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
    this.aR.submit([curEncoder.finish()]);
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.bI.length | 0))) {
    if ((panel.bI[mi].hS >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.iI() > 1) && (!hasMipTargetLayers))) {
    this.lN(panel);
  }
});
$p.rW = (function(encoder, panel, dst, dstFormat) {
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
  var bundle = panel.a6[0];
  var group = bundle.lb;
  if ((group === null)) {
    var $x_1 = this.h;
    var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
    var _2$4 = bundle.aS[0];
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
    bundle.lb = group;
  }
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__blitPipelineFor__T__Ltrivalibs_graphics_painter_GPURenderPipeline(this, dstFormat));
  pass.setBindGroup(0, group);
  pass.draw(3);
  pass.end();
});
$p.lN = (function(panel) {
  var mipCount = panel.iI();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__blitPipelineFor__T__Ltrivalibs_graphics_painter_GPURenderPipeline(this, panel.hm()[0]);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.a6[0].aS[((i - 1) | 0)];
    var dstView = panel.a6[0].aS[i];
    var encoder = this.h.createCommandEncoder();
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
    var $x_1 = this.h;
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
    this.aR.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
});
Object.defineProperty($p, "gpu", ({
  "get": (function() {
    return this.os;
  }),
  "configurable": true
}));
Object.defineProperty($p, "adapter", ({
  "get": (function() {
    return this.of;
  }),
  "configurable": true
}));
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  fp: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter$__createPainter__Ltrivalibs_graphics_painter_GPUDevice__Ltrivalibs_graphics_painter_Surface__Ltrivalibs_graphics_painter_GPUAdapter__Ltrivalibs_graphics_painter_GPU__Ltrivalibs_graphics_painter_Painter($thiz, device, surface, adapter, gpu) {
  var painter = new $c_Ltrivalibs_graphics_painter_Painter(device, surface, adapter, gpu);
  painter.sV();
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
$p.sU = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().qm();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var surface = $m_Ltrivalibs_graphics_painter_CanvasSurface$().rH(canvas, maybeGpu.getPreferredCanvasFormat());
    var promise$proxy2 = $m_Ltrivalibs_graphics_painter_WebGPU$().un(maybeGpu, (void 0), false, (void 0), false);
    var f$proxy16 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy1 = $m_Ltrivalibs_graphics_painter_WebGPU$().uo(adapter$2, (void 0), (void 0));
      var f$proxy15 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => $p_Ltrivalibs_graphics_painter_Painter$__createPainter__Ltrivalibs_graphics_painter_GPUDevice__Ltrivalibs_graphics_painter_Surface__Ltrivalibs_graphics_painter_GPUAdapter__Ltrivalibs_graphics_painter_GPU__Ltrivalibs_graphics_painter_Painter(this, device$2, surface, adapter$2, maybeGpu)));
      return promise$proxy1.then($m_sjs_js_Any$().hn(f$proxy15));
    }));
    return promise$proxy2.then($m_sjs_js_Any$().hn(f$proxy16));
  }
});
$p.sT = (function(canvas, setup) {
  var promise$proxy3 = this.sU(canvas);
  return promise$proxy3.then($m_sjs_js_Any$().hn(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  fq: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  $thiz.jZ();
  if (($thiz.c6 !== null)) {
    $thiz.c6.destroy();
  }
  if (($thiz.i1 !== null)) {
    $thiz.i1.destroy();
  }
  var depthUsage = ($thiz.hY ? 20 : 16);
  var $x_1 = $thiz.aF.h;
  var value = $thiz.h8;
  var value$1 = $thiz.h7;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.gg ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.c6 = depthTex;
  $thiz.hW = depthTex.createView();
  if (($thiz.hY && $thiz.gg)) {
    var $x_2 = $thiz.aF.h;
    var value$2 = $thiz.h8;
    var value$3 = $thiz.h7;
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
    $thiz.i1 = resTex;
    $thiz.i2 = resTex.createView();
    $thiz.hX = true;
  } else {
    $thiz.i1 = null;
    $thiz.i2 = null;
    $thiz.hX = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.bI.length | 0))) {
    if ($thiz.bI[i].qJ()) {
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
  return ((((((((((($thiz.bh.length | 0) > 0) ? $thiz.bh.join(",") : ($thiz.bi ? $thiz.gh : "preferred")) + "|") + $thiz.gg) + "|") + $thiz.c5) + "|") + $thiz.h9) + "|") + $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz));
}
function $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz) {
  return ($thiz.bi ? 23 : 20);
}
function $p_Ltrivalibs_graphics_painter_Panel__allocationStale__I__I__Z($thiz, w, h) {
  return ((((w !== $thiz.h8) || (h !== $thiz.h7)) || $thiz.i0) || (($thiz.hU & $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz)) !== $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz)));
}
function $p_Ltrivalibs_graphics_painter_Panel__reallocate__I__I__V($thiz, w, h) {
  var d = 0;
  while ((d < ($thiz.aZ.length | 0))) {
    $thiz.aZ[d].destroy();
    d = ((1 + d) | 0);
  }
  d = 0;
  while ((d < ($thiz.hZ.length | 0))) {
    $thiz.hZ[d].destroy();
    d = ((1 + d) | 0);
  }
  if (((!$thiz.c5) && ($thiz.c6 !== null))) {
    $thiz.c6.destroy();
    $thiz.c6 = null;
    $thiz.hW = null;
  }
  $thiz.h8 = w;
  $thiz.h7 = h;
  $thiz.hU = $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz);
  $thiz.i0 = false;
  var mipCount = $thiz.iI();
  var fmts = $thiz.hm();
  var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz);
  $thiz.aZ = [];
  $thiz.a6 = [];
  $thiz.hZ = [];
  $thiz.jo = [];
  var i = 0;
  while ((i < (fmts.length | 0))) {
    var fmt = fmts[i];
    var $x_1 = $thiz.aF.h;
    var _2 = ({
      "width": w,
      "height": h
    });
    var value = $thiz.hU;
    var tex = $x_1.createTexture(({
      "size": _2,
      "format": fmt,
      "usage": value,
      "mipLevelCount": mipCount
    }));
    $thiz.aZ.push(tex);
    $thiz.a6.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle($thiz, tex, mipCount));
    if ($thiz.gg) {
      var $x_2 = $thiz.aF.h;
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
      $thiz.hZ.push(msaaTex);
      $thiz.jo.push(msaaTex.createView());
    }
    i = ((1 + i) | 0);
  }
  if (hasPong) {
    var $x_3 = $thiz.aF.h;
    var _2$2 = ({
      "width": w,
      "height": h
    });
    var f$proxy6 = fmts[0];
    var value$1 = $thiz.hU;
    var pongTex = $x_3.createTexture(({
      "size": _2$2,
      "format": f$proxy6,
      "usage": value$1,
      "mipLevelCount": mipCount
    }));
    $thiz.aZ.push(pongTex);
    $thiz.a6.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle($thiz, pongTex, mipCount));
  }
  if ($thiz.c5) {
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz);
  }
  $thiz.jZ();
}
function $p_Ltrivalibs_graphics_painter_Panel__noteSource__sjs_js_Object__V($thiz, source) {
  $thiz.bi = true;
  if ($m_Ltrivalibs_graphics_painter_sources$package$TextureSource$().qr(source)) {
    $m_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$().v2(source, "Panel.set(source)");
    $thiz.bk = (source.width | 0);
    $thiz.bj = (source.height | 0);
    $thiz.gh = source.format;
    $thiz.gi = $thiz.gh;
  } else {
    $thiz.bk = $p_Ltrivalibs_graphics_painter_sources$package$TextureSource$__size__sjs_js_Object__T__T__T__T__I($m_Ltrivalibs_graphics_painter_sources$package$TextureSource$(), source, "videoWidth", "naturalWidth", "displayWidth", "width");
    $thiz.bj = $p_Ltrivalibs_graphics_painter_sources$package$TextureSource$__size__sjs_js_Object__T__T__T__T__I($m_Ltrivalibs_graphics_painter_sources$package$TextureSource$(), source, "videoHeight", "naturalHeight", "displayHeight", "height");
    if ((($thiz.bk <= 0) || ($thiz.bj <= 0))) {
      throw new $c_sjs_js_JavaScriptException(Error("Panel.set(source): the image has no size yet \u2014 an <img> still loading, or a <video> before its first frame")).X;
    }
    $thiz.gh = "rgba8unorm";
    $thiz.gi = $thiz.hm()[0];
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__uploadSource__sjs_js_Object__V($thiz, source) {
  if ($thiz.jG()) {
    $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
    $thiz.bJ = false;
    $thiz.lK(0, 0);
    $m_Ltrivalibs_graphics_painter_sources$package$TextureSource$().r6($thiz.aF.aR, source, $thiz.aZ[0], $thiz.bk, $thiz.bj, $thiz.jm, $thiz.jp);
    $thiz.bJ = true;
    if (($thiz.iI() > 1)) {
      $thiz.aF.lN($thiz);
    }
  } else {
    $thiz.bJ = false;
    var current = $thiz.bv;
    if (((((current === null) || ((current.width | 0) !== $thiz.bk)) || ((current.height | 0) !== $thiz.bj)) || (current.format !== $thiz.gi))) {
      $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
      var $x_1 = $thiz.aF.h;
      var value = $thiz.bk;
      var value$1 = $thiz.bj;
      var _2 = ({
        "width": value,
        "height": value$1
      });
      var f$proxy9 = $thiz.gi;
      var tex = $x_1.createTexture(({
        "size": _2,
        "format": f$proxy9,
        "usage": 23
      }));
      $thiz.bv = tex;
      $thiz.i5 = tex.createView();
    }
    $m_Ltrivalibs_graphics_painter_sources$package$TextureSource$().r6($thiz.aF.aR, source, $thiz.bv, $thiz.bk, $thiz.bj, $thiz.jm, $thiz.jp);
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__releaseSource__V($thiz) {
  $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
  $thiz.bJ = false;
}
function $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz) {
  if (($thiz.bv !== null)) {
    $thiz.bv.destroy();
  }
  $thiz.bv = null;
  $thiz.i5 = null;
  $thiz.jr = null;
}
function $p_Ltrivalibs_graphics_painter_Panel__adoptSlot0AsSource__V($thiz) {
  $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
  $thiz.bv = $thiz.aZ.shift();
  var TextureViewBundle_this = $thiz.a6.shift();
  $thiz.i5 = TextureViewBundle_this.aS[0];
  $thiz.bJ = false;
  $thiz.i0 = true;
  $thiz.jZ();
}
function $p_Ltrivalibs_graphics_painter_Panel__restoreSourceToSlot0__V($thiz) {
  var encoder = $thiz.aF.h.createCommandEncoder();
  var x$proxy10 = $thiz.bv;
  var _2 = $thiz.aZ[0];
  var value = $thiz.bk;
  var value$1 = $thiz.bj;
  encoder.copyTextureToTexture(({
    "texture": x$proxy10
  }), ({
    "texture": _2
  }), ({
    "width": value,
    "height": value$1
  }));
  $thiz.aF.aR.submit([encoder.finish()]);
  $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
  $thiz.bJ = true;
  if (($thiz.iI() > 1)) {
    $thiz.aF.lN($thiz);
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
  this.aF = null;
  this.hb = 0;
  this.ha = 0;
  this.jl = null;
  this.c5 = false;
  this.gg = false;
  this.h9 = 0;
  this.bh = null;
  this.i4 = null;
  this.bI = null;
  this.jq = null;
  this.jn = false;
  this.jm = false;
  this.jp = false;
  this.i3 = null;
  this.hV = 0;
  this.aZ = null;
  this.a6 = null;
  this.c6 = null;
  this.hW = null;
  this.hY = false;
  this.i1 = null;
  this.i2 = null;
  this.hX = false;
  this.hZ = null;
  this.jo = null;
  this.h8 = 0;
  this.h7 = 0;
  this.hU = 0;
  this.i0 = false;
  this.bi = false;
  this.bk = 0;
  this.bj = 0;
  this.gh = null;
  this.gi = null;
  this.bJ = false;
  this.bv = null;
  this.i5 = null;
  this.jr = null;
  this.aF = painter;
  this.hb = 0;
  this.ha = 0;
  this.jl = null;
  this.c5 = false;
  this.gg = false;
  this.h9 = 1;
  this.bh = [];
  this.i4 = [];
  this.bI = [];
  this.jq = null;
  this.jn = false;
  this.jm = false;
  this.jp = false;
  this.i3 = ({});
  this.hV = 0;
  this.aZ = [];
  this.a6 = [];
  this.c6 = null;
  this.hW = null;
  this.hY = false;
  this.i1 = null;
  this.i2 = null;
  this.hX = false;
  this.hZ = [];
  this.jo = [];
  this.h8 = 0;
  this.h7 = 0;
  this.hU = 0;
  this.i0 = false;
  this.bi = false;
  this.bk = 0;
  this.bj = 0;
  this.gh = "rgba8unorm";
  this.gi = "rgba8unorm";
  this.bJ = false;
  this.bv = null;
  this.i5 = null;
  this.jr = null;
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.iI = (function() {
  if ((this.h9 === 0)) {
    var a = this.h8;
    var b = this.h7;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.h9;
  }
});
$p.hm = (function() {
  return (((this.bh.length | 0) > 0) ? this.bh : (this.bi ? [this.gh] : [this.aF.hT]));
});
$p.lY = (function() {
  return ((((this.bi && ((this.i4.length | 0) === 0)) && ((this.bI.length | 0) === 0)) && (this.jq === null)) && (!this.jn));
});
$p.jG = (function() {
  return ((((this.lY() && ((this.hb === 0) || (this.hb === this.bk))) && ((this.ha === 0) || (this.ha === this.bj))) && ((this.bh.length | 0) <= 1)) && (this.hm()[0] === this.gi));
});
$p.sm = (function() {
  return (this.bi && (!this.jG()));
});
$p.uS = (function() {
  return (this.hm().length | 0);
});
$p.m1 = (function() {
  var TextureViewBundle_this = this.a6[0];
  return TextureViewBundle_this.aS[0];
});
$p.u3 = (function() {
  var TextureViewBundle_this = this.a6[1];
  return TextureViewBundle_this.aS[0];
});
$p.qe = (function() {
  return this.hW;
});
$p.uq = (function() {
  return this.i2;
});
$p.qL = (function(index) {
  return this.jo[index];
});
$p.uQ = (function() {
  var t = this.aZ[0];
  this.aZ[0] = this.aZ[1];
  this.aZ[1] = t;
  var sv = this.a6[0];
  this.a6[0] = this.a6[1];
  this.a6[1] = sv;
  this.jZ();
});
$p.jZ = (function() {
  this.hV = ((1 + this.hV) | 0);
});
$p.se = (function() {
  if (((!this.hY) && (this.c6 !== null))) {
    this.hY = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.hX ? this.i2 : this.hW);
});
$p.rV = (function(index, mipLevel, depth) {
  return new ($a_Ltrivalibs_graphics_painter_PanelBinding())(this, index, mipLevel, depth);
});
$p.iM = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers, source, sourceBlend, followSurface, flipY, premultipliedAlpha) {
  var allocationBefore = $p_Ltrivalibs_graphics_painter_Panel__allocationKey__T(this);
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.hb = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.ha = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.jl = ((clearColor === null) ? null : new $c_Ltrivalibs_graphics_math_cpu_Vec4(clearColor.ga, clearColor.gb, clearColor.gc, clearColor.g9));
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.c5 = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.gg = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.h9 = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.h9 = v$5;
    }
  }
  var x$1 = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy1$1__O__O(this, format) : formats);
  if ((x$1 !== (void 0))) {
    this.bh = x$1;
  }
  var x$2 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy2$1__O__O(this, shape) : shapes);
  if ((x$2 !== (void 0))) {
    this.i4 = x$2;
  }
  var x$3 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy3$1__O__O(this, layer) : layers);
  if ((x$3 !== (void 0))) {
    this.bI = x$3;
  }
  if ((sourceBlend !== (void 0))) {
    this.jq = sourceBlend;
  }
  if ((followSurface !== (void 0))) {
    var v$6 = (!(!followSurface));
    this.jn = v$6;
  }
  if ((flipY !== (void 0))) {
    var v$7 = (!(!flipY));
    this.jm = v$7;
  }
  if ((premultipliedAlpha !== (void 0))) {
    var v$8 = (!(!premultipliedAlpha));
    this.jp = v$8;
  }
  if ((source !== (void 0))) {
    if ((source === null)) {
      if ((this.bi && ((this.bh.length | 0) === 0))) {
        this.bh = [this.gh];
      }
      this.bi = false;
    } else {
      $p_Ltrivalibs_graphics_painter_Panel__noteSource__sjs_js_Object__V(this, source);
    }
  }
  if ((((this.bh.length | 0) > 1) && $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this))) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot host auto-pong layers. Chain a single-format panel for post-processing instead.")).X;
  }
  if ((((this.bh.length | 0) > 1) && this.bi)) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot have a source. Bind the source panel as a texture of the MRT shapes instead.")).X;
  }
  if (($p_Ltrivalibs_graphics_painter_Panel__allocationKey__T(this) !== allocationBefore)) {
    this.i0 = true;
  }
  if ((source !== (void 0))) {
    if ((source === null)) {
      $p_Ltrivalibs_graphics_painter_Panel__releaseSource__V(this);
    } else {
      $p_Ltrivalibs_graphics_painter_Panel__uploadSource__sjs_js_Object__V(this, source);
    }
  }
  if (this.lY()) {
    this.lK(0, 0);
    if ((!this.jG())) {
      this.aF.qR(this);
    }
  }
  return this;
});
$p.lK = (function(surfaceW, surfaceH) {
  var useSource = (this.bi && (!this.jn));
  var w = ((this.hb > 0) ? this.hb : (useSource ? this.bk : surfaceW));
  var h = ((this.ha > 0) ? this.ha : (useSource ? this.bj : surfaceH));
  var direct = this.jG();
  if ((this.bJ && ((!direct) || $p_Ltrivalibs_graphics_painter_Panel__allocationStale__I__I__Z(this, w, h)))) {
    $p_Ltrivalibs_graphics_painter_Panel__adoptSlot0AsSource__V(this);
  }
  if ($p_Ltrivalibs_graphics_painter_Panel__allocationStale__I__I__Z(this, w, h)) {
    $p_Ltrivalibs_graphics_painter_Panel__reallocate__I__I__V(this, w, h);
  }
  if (((direct && (!this.bJ)) && (this.bv !== null))) {
    $p_Ltrivalibs_graphics_painter_Panel__restoreSourceToSlot0__V(this);
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  fr: 1
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
  this.oz = 0;
  this.jt = null;
  this.l7 = null;
  this.l6 = null;
  this.js = null;
  this.oA = null;
  this.I = null;
  this.aC = null;
  this.ju = null;
  this.i6 = null;
  this.oz = id;
  this.jt = shaderModule;
  this.l7 = vertexBufferLayout;
  this.l6 = valueBindGroupLayout;
  this.js = panelBindGroupLayout;
  this.oA = pipelineLayout;
  this.I = uniformIndices;
  this.aC = panelIndices;
  this.ju = $p_Ltrivalibs_graphics_painter_Shade__slotNames__sjs_js_Dictionary__sjs_js_Array(this, uniformIndices);
  this.i6 = $p_Ltrivalibs_graphics_painter_Shade__slotNames__sjs_js_Dictionary__sjs_js_Array(this, panelIndices);
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  fs: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, sampling) {
  this.aS = null;
  this.lc = null;
  this.lb = null;
  this.aS = perMip;
  this.lc = sampling;
  this.lb = null;
}
$p = $c_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_TextureViewBundle;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_TextureViewBundle() {
}
$h_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = $p;
var $d_Ltrivalibs_graphics_painter_TextureViewBundle = new $TypeData().i($c_Ltrivalibs_graphics_painter_TextureViewBundle, "trivalibs.graphics.painter.TextureViewBundle", ({
  fv: 1
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
$p.qm = (function() {
  return (((typeof navigator) === "undefined") ? (void 0) : navigator.gpu);
});
$p.sJ = (function(canvas) {
  return canvas.getContext("webgpu");
});
$p.un = (function(gpu, powerPreference, forceFallbackAdapter, requireAdapter, logAdapter) {
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
      throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).X;
    } else {
      return value$2;
    }
  }));
  var f$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
    if (logAdapter) {
      var s = ("WebGPU adapter: " + this.qf(adapter$2.info));
      console.log(s);
    }
    if ((requireAdapter !== (void 0))) {
      if ((!(!(!requireAdapter(adapter$2.info))))) {
        var message$proxy1 = ("WebGPU adapter rejected by requireAdapter: " + this.qf(adapter$2.info));
        throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).X;
      }
    }
    return adapter$2;
  }));
  return promise$proxy2.then($m_sjs_js_Any$().hn(f$proxy1));
});
$p.uo = (function(adapter, requiredFeatures, requiredLimits) {
  var descriptor = ({});
  if ((requiredFeatures !== (void 0))) {
    descriptor.requiredFeatures = requiredFeatures;
  }
  if ((requiredLimits !== (void 0))) {
    descriptor.requiredLimits = requiredLimits;
  }
  return adapter.requestDevice(descriptor);
});
$p.qf = (function(info) {
  return ((info === (void 0)) ? "(no adapter info)" : ((((((info.vendor + " / ") + info.architecture) + " / ") + info.device) + " / ") + info.description));
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  fw: 1
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
$p.t2 = (function(data) {
  return (data.length | 0);
});
$p.tC = (function(format, data) {
  return ((format === "rgba8unorm") ? (!(!(data instanceof Uint8Array))) : ((format === "rgba32float") ? (!(!(data instanceof Float32Array))) : (((typeof Float16Array) !== "undefined") && (!(!(data instanceof Float16Array))))));
});
var $d_Ltrivalibs_graphics_painter_pixels$package$PixelData$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_pixels$package$PixelData$, "trivalibs.graphics.painter.pixels$package$PixelData$", ({
  fx: 1
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
  this.rp = null;
  this.rn = null;
  this.ro = null;
  this.rp = "rgba8unorm";
  this.rn = "rgba16float";
  this.ro = "rgba32float";
}
$p = $c_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$() {
}
$h_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$.prototype = $p;
$p.q8 = (function(f) {
  return ((f === "rgba8unorm") ? 4 : ((f === "rgba16float") ? 8 : ((f === "rgba32float") ? 16 : 0)));
});
var $d_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$, "trivalibs.graphics.painter.pixels$package$PixelFormat$", ({
  fy: 1
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
$p.v2 = (function(target, where) {
  var width = (target.width | 0);
  var height = (target.height | 0);
  var format = target.format;
  if (($m_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$().q8(format) === 0)) {
    var message$proxy3 = (((where + ": unsupported pixel target format '") + format) + "'; use rgba8unorm, rgba16float or rgba32float");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy3)).X;
  }
  if ((!((width > 0) && (height > 0)))) {
    var message$proxy4 = ((((where + ": invalid pixel target size ") + width) + "\u00d7") + height);
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy4)).X;
  }
  if ((!(!("frames" in target)))) {
    var arg = target.frames;
    if ((!(!(!Array.isArray(arg))))) {
      var message$proxy5 = (where + ": PixelFrames.frames must be an array");
      throw new $c_sjs_js_JavaScriptException(Error(message$proxy5)).X;
    }
  } else {
    var data = target.data;
    if (((data === (void 0)) || (!$m_Ltrivalibs_graphics_painter_pixels$package$PixelData$().tC(format, data)))) {
      var message$proxy6 = (((where + ": PixelImage.data must be the array type of '") + format) + "' (Uint8Array / Float16Array / Float32Array)");
      throw new $c_sjs_js_JavaScriptException(Error(message$proxy6)).X;
    }
    var length = $m_Ltrivalibs_graphics_painter_pixels$package$PixelData$().t2(data);
    if ((length !== (Math.imul(width, height) << 2))) {
      var message$proxy7 = ((((where + ": PixelImage.data length ") + length) + " is not width \u00b7 height \u00b7 4 = ") + (Math.imul(width, height) << 2));
      throw new $c_sjs_js_JavaScriptException(Error(message$proxy7)).X;
    }
  }
});
var $d_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$, "trivalibs.graphics.painter.pixels$package$PixelTarget$", ({
  fz: 1
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
$p.qr = (function(source) {
  return ((!(!("data" in source))) && (!(!("format" in source))));
});
$p.r6 = (function(queue, source, texture, width, height, flipY, premultipliedAlpha) {
  if (this.qr(source)) {
    var data = source.data;
    var $x_1 = data.buffer;
    var value = (data.byteOffset | 0);
    var value$1 = Math.imul(width, $m_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$().q8(source.format));
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
  fA: 1
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
  this.oE = null;
  this.aw = null;
  this.ld = 0.0;
  this.oF = 0.0;
  this.oE = cam;
  this.aw = in$1;
  this.ld = sensitivity;
  this.oF = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.gv = (function(tpf) {
  var dist = ((this.oF * tpf) / 1000.0);
  var forward = 0.0;
  if (((this.aw.aH.bo("KeyW") || this.aw.aH.bo("ArrowUp")) || (this.aw.lo.gn && (this.aw.aH.qO() === 1)))) {
    forward = (forward + dist);
  }
  if ((((this.aw.aH.bo("KeyS") || this.aw.aH.bo("ArrowDown")) || this.aw.aH.sY(2)) || (this.aw.aH.qO() >= 2))) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((this.aw.aH.bo("KeyA") || this.aw.aH.bo("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((this.aw.aH.bo("KeyD") || this.aw.aH.bo("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (this.aw.aH.bo("Space")) {
    up = (up + dist);
  }
  if ((this.aw.aH.bo("ShiftLeft") || this.aw.aH.bo("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = this.aw.ln.sd();
  var deltaH = (((+drag.a0()) * this.ld) / 1000.0);
  var deltaV = (((+drag.a1()) * this.ld) / 1000.0);
  this.oE.tJ(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  fB: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.bK = 0.0;
  this.gj = 0.0;
  this.hd = 0.0;
  this.hc = 0.0;
  this.b0 = 0.0;
  this.bL = 0.0;
  this.aj = null;
  this.jw = null;
  this.bK = fov;
  this.gj = aspect;
  this.hd = near;
  this.hc = far;
  this.b0 = rotH;
  this.bL = rotV;
  this.aj = pos;
  this.jw = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.lX = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.bK) || (aspect !== this.gj)) || (near !== this.hd)) || (far !== this.hc));
  this.bK = fov;
  this.gj = aspect;
  this.hd = near;
  this.hc = far;
  if ((rotH !== this.b0)) {
    this.b0 = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().m5(rotH);
  }
  if ((rotV !== this.bL)) {
    this.bL = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().m3(rotV);
  }
  this.aj = pos;
  if (needsProj) {
    this.jw = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().m4(this.bK, this.gj), aspect, near, far);
  }
});
$p.tJ = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.b0 = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().m5((this.b0 + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.bL = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().m3((this.bL + deltaV));
  }
  if ((up !== 0.0)) {
    this.aj = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.aj.w, (this.aj.A + up), this.aj.u);
  }
  if ((forward !== 0.0)) {
    var $x_5 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().Q();
    var $x_4 = this.aj;
    var $x_3 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().Q();
    var p$proxy1 = this.b0;
    var $x_1 = Math.sin(p$proxy1);
    var p$proxy2 = this.b0;
    this.aj = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_5, $x_4, $x_3, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_2, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_1)), 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_10 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().Q();
    var $x_9 = this.aj;
    var $x_8 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().Q();
    var p$proxy3 = this.b0;
    var $x_6 = Math.cos(p$proxy3);
    var p$proxy4 = this.b0;
    this.aj = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_10, $x_9, $x_8, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_7, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_6)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.uZ = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.aj, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().sG(this.b0), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().sF(this.bL)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.r9 = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().ho();
  var t = this.uZ();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().sH(t.oI, t.oG, t.oH), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  fC: 1
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
$p.m5 = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.m3 = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.m4 = (function(fov, aspect) {
  var p$proxy5 = (0.5 * fov);
  var p$proxy6 = ((+Math.tan(p$proxy5)) / (+Math.min(aspect, 1.0)));
  return (2.0 * (+Math.atan(p$proxy6)));
});
$p.rE = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), this.m4(fov, aspect), aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.m5(rotH), this.m3(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  fD: 1
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
  this.oI = null;
  this.oG = null;
  this.oH = null;
  this.oI = translation;
  this.oG = rotation;
  this.oH = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  fE: 1
}));
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.b3) + ") ") + b.aL) + ": ")) + b.bb);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().rg($m_sjs_js_ArrayOps$().rf(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_1 = i;
    var x0 = array$1[i];
    var x11 = x0.a0();
    var name = x11.a0();
    var typ = x11.a1();
    res[$x_1] = (((((("  @location(" + (x0.a1() | 0)) + ") ") + name) + ": ") + typ) + ",");
    i = ((1 + i) | 0);
  }
  var len$1 = (builtins.length | 0);
  var res$1 = new Array(len$1);
  var i$1 = 0;
  while ((i$1 < len$1)) {
    var $x_2 = i$1;
    var x0$1 = builtins[i$1];
    var name$1 = x0$1.aL;
    var builtin = x0$1.b3;
    var typ$1 = x0$1.bb;
    res$1[$x_2] = (((((("  @builtin(" + builtin) + ") ") + name$1) + ": ") + typ$1) + ",");
    i$1 = ((1 + i$1) | 0);
  }
  var allFields = $m_sjs_js_ArrayOpsCommon$().a(res, res$1);
  return (((allFields.length | 0) === 0) ? "" : (((("struct " + structName) + " {\n") + allFields.join("\n")) + "\n}"));
}
function $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($thiz, groupIdx, names, types) {
  var array$1 = $m_sjs_js_ArrayOps$().rg($m_sjs_js_ArrayOps$().rf(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    var x20 = x0.a0();
    var name = x20.a0();
    var typ = x20.a1();
    var bindingIdx = (x0.a1() | 0);
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
  fH: 1
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
  this.y = null;
  this.y = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  fI: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.le = null;
  this.Z = null;
  this.le = ({});
  this.Z = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
$p.r7 = (function(d) {
  if ((!(!(!(!(!this.le.hasOwnProperty(d.name))))))) {
    this.le[d.name] = true;
    var array = d.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      this.r7(array[i]);
      i = ((1 + i) | 0);
    }
    this.Z.push(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  fJ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  this.n = null;
  this.n = null;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = $p;
$p.jX = (function(d) {
  var r = this.n;
  if ((r !== null)) {
    r.r7(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  fK: 1
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
  this.J = null;
  this.ar = null;
  this.D = null;
  this.rq = null;
  this.he = null;
  this.J = in$1;
  this.ar = out;
  this.D = bindings;
  this.rq = textures;
  this.he = ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "in.position"));
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  fL: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.lf.hasOwnProperty(data.name))))))) {
    var dict = $thiz.lf;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.lg.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
  this.aG = null;
  this.lg = null;
  this.lf = null;
  this.aG = "";
  this.lg = [];
  this.lf = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
}
$h_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = $p;
$p.au = (function() {
  return this.lg.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_LayerProgram = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_LayerProgram, "trivalibs.graphics.shader.dsl.LayerProgram", ({
  fM: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.lh.hasOwnProperty(data.name))))))) {
    var dict = $thiz.lh;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.li.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.as = null;
  this.ac = null;
  this.li = null;
  this.lh = null;
  this.as = "";
  this.ac = "";
  this.li = [];
  this.lh = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.au = (function() {
  return this.li.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  fN: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, textures) {
  this.a5 = null;
  this.a2 = null;
  this.gk = null;
  this.a5 = in$1;
  this.a2 = out;
  this.gk = bindings;
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
  fR: 1
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
$p.rs = (function() {
  return [];
});
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_WgslFnData$, "trivalibs.graphics.shader.dsl.WgslFnData$", ({
  fT: 1
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
$p.a8 = (function(fn, ds) {
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
  ds.bz(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    if ((!(!(!(!(!seen.hasOwnProperty(d$3.name))))))) {
      seen[d$3.name] = true;
      merged.push(d$3);
    }
  })));
  return new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())(fn.name, fn.src, merged);
});
$p.jF = (function(fn, a1, a2, a3, a4) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().jX(fn);
  return (((((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ", ") + a4) + ")");
});
$p.gq = (function(fn, a1, a2, a3, a4, a5) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().jX(fn);
  return (((((((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ", ") + a4) + ", ") + a5) + ")");
});
$p.lE = (function(fn, a1, a2, a3, a4, a5, a6) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().jX(fn);
  return (((((((((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ", ") + a4) + ", ") + a5) + ", ") + a6) + ")");
});
$p.s2 = (function(fn, a1, a2, a3, a4, a5, a6, a7) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().jX(fn);
  return (((((((((((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ", ") + a4) + ", ") + a5) + ", ") + a6) + ", ") + a7) + ")");
});
var $d_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$, "trivalibs.graphics.shader.dsl.fn$package$WgslFn$", ({
  fU: 1
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
$p.K = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  fV: 1
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
$p.rY = (function(tex, s, uv, radius, res) {
  if ((res === null)) {
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().s0();
    var s$proxy1 = WgslFn$_this.jF(fn$proxy1, tex, s, uv, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy1);
  } else {
    var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy2 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().rZ();
    var s$proxy2 = WgslFn$_this$2.gq(fn$proxy2, tex, s, uv, res, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy2);
  }
});
$p.uT = (function(tex, s, uv, radius, res) {
  if ((res === null)) {
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy3 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().uV();
    var s$proxy3 = WgslFn$_this.jF(fn$proxy3, tex, s, uv, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy3);
  } else {
    var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy4 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().uU();
    var s$proxy4 = WgslFn$_this$2.gq(fn$proxy4, tex, s, uv, res, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy4);
  }
});
var $d_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_blur_Blur$, "trivalibs.graphics.shader.lib.blur.Blur$", ({
  fW: 1
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
  this.oO = null;
  this.oP = false;
  this.oK = null;
  this.oN = false;
  this.oQ = null;
  this.oT = false;
  this.oL = null;
  this.oM = false;
  this.oR = null;
  this.oS = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$.prototype = $p;
$p.sI = (function() {
  if ((!this.oP)) {
    this.oO = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_gaussian_9", "fn blur_gaussian_9(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, res: vec2<f32>, dir: vec2<f32>) -> vec4<f32> {\n  let off1 = vec2<f32>(1.3846153846) * dir / res;\n    let off2 = vec2<f32>(3.2307692308) * dir / res;\n    var color = textureSample(tex, s, uv) * 0.2270270270;\n    color += textureSample(tex, s, uv + off1) * 0.3162162162;\n    color += textureSample(tex, s, uv - off1) * 0.3162162162;\n    color += textureSample(tex, s, uv + off2) * 0.0702702703;\n    color += textureSample(tex, s, uv - off2) * 0.0702702703;\n    return color;\n}");
    this.oP = true;
  }
  return this.oO;
});
$p.rZ = (function() {
  if ((!this.oN)) {
    this.oK = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_box_2d", "fn blur_box_2d(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, res: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n    var color = textureSample(tex, s, uv - o);\n    color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n    color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n    color += textureSample(tex, s, uv + o);\n    return color * 0.25;\n}");
    this.oN = true;
  }
  return this.oK;
});
$p.uU = (function() {
  if ((!this.oT)) {
    this.oQ = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_tent_2d", "fn blur_tent_2d(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, res: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n    var color = textureSample(tex, s, uv) * 0.25;\n    color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n    color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n    return color;\n}");
    this.oT = true;
  }
  return this.oQ;
});
$p.s0 = (function() {
  if ((!this.oM)) {
    this.oL = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_box_2d_auto", "fn blur_box_2d_auto(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n    var color = textureSample(tex, s, uv - o);\n    color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n    color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n    color += textureSample(tex, s, uv + o);\n    return color * 0.25;\n}");
    this.oM = true;
  }
  return this.oL;
});
$p.uV = (function() {
  if ((!this.oS)) {
    this.oR = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_tent_2d_auto", "fn blur_tent_2d_auto(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n    var color = textureSample(tex, s, uv) * 0.25;\n    color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n    color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n    return color;\n}");
    this.oS = true;
  }
  return this.oR;
});
var $d_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$, "trivalibs.graphics.shader.lib.blur.Blur$wgsl$", ({
  fX: 1
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
$p.sx = (function(pos, octaves, lacunarity, gain, tilingPeriod, rot, seed) {
  var o = $m_Ltrivalibs_graphics_lib_args$package$().m2(octaves);
  var p = (tilingPeriod !== null);
  var r = (rot !== null);
  if ((seed === null)) {
    if ((p && r)) {
      var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy57 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().ub();
      var a6$proxy7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(rot, 6.283185307179586);
      var s$proxy57 = WgslFn$_this.lE(fn$proxy57, pos, o, lacunarity, gain, tilingPeriod, a6$proxy7);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy57);
    } else if (p) {
      var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy58 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().u7();
      var s$proxy58 = WgslFn$_this$2.gq(fn$proxy58, pos, o, lacunarity, gain, tilingPeriod);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy58);
    } else if (r) {
      var WgslFn$_this$3 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy59 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().uI();
      var a5$proxy21 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(rot, 6.283185307179586);
      var s$proxy59 = WgslFn$_this$3.gq(fn$proxy59, pos, o, lacunarity, gain, a5$proxy21);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy59);
    } else {
      var WgslFn$_this$4 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy60 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().uy();
      var s$proxy60 = WgslFn$_this$4.jF(fn$proxy60, pos, o, lacunarity, gain);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy60);
    }
  } else if ((p && r)) {
    var WgslFn$_this$5 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy61 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().uc();
    var a6$proxy8 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(rot, 6.283185307179586);
    var s$proxy61 = WgslFn$_this$5.s2(fn$proxy61, pos, o, lacunarity, gain, tilingPeriod, a6$proxy8, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy61);
  } else if (p) {
    var WgslFn$_this$6 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy62 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().u8();
    var s$proxy62 = WgslFn$_this$6.lE(fn$proxy62, pos, o, lacunarity, gain, tilingPeriod, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy62);
  } else if (r) {
    var WgslFn$_this$7 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy63 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().uJ();
    var a5$proxy24 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().S(rot, 6.283185307179586);
    var s$proxy63 = WgslFn$_this$7.lE(fn$proxy63, pos, o, lacunarity, gain, a5$proxy24, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy63);
  } else {
    var WgslFn$_this$8 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy64 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().uz();
    var s$proxy64 = WgslFn$_this$8.gq(fn$proxy64, pos, o, lacunarity, gain, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy64);
  }
});
var $d_Ltrivalibs_graphics_shader_lib_noise_Extended$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_Extended$, "trivalibs.graphics.shader.lib.noise.Extended$", ({
  fY: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_noise_Extended$;
function $m_Ltrivalibs_graphics_shader_lib_noise_Extended$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_noise_Extended$)) {
    $n_Ltrivalibs_graphics_shader_lib_noise_Extended$ = new $c_Ltrivalibs_graphics_shader_lib_noise_Extended$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_noise_Extended$;
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__mod289v4__Ltrivalibs_graphics_shader_dsl_WgslFnData($thiz) {
  if ((!$thiz.oV)) {
    $thiz.oU = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_mod289_4", "fn extended_mod289_4(i: vec4<f32>) -> vec4<f32> {\n  return i - floor(i / 289.0) * 289.0;\n}");
    $thiz.oV = true;
  }
  return $thiz.oU;
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData($thiz) {
  if ((!$thiz.oX)) {
    $thiz.oW = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$().a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_permute_4", "fn extended_permute_4(i: vec4<f32>) -> vec4<f32> {\n  let im = extended_mod289_4(i);\n  return extended_mod289_4((im * 34.0 + 10.0) * im);\n}"), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__mod289v4__Ltrivalibs_graphics_shader_dsl_WgslFnData($thiz)]));
    $thiz.oX = true;
  }
  return $thiz.oW;
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T($thiz, periodic, rotating, gradient, seeded) {
  var wrap = (periodic ? "  if (any(p > vec3<f32>(0.0))) {\n    var vx = vec4<f32>(v0.x, v1.x, v2.x, v3.x);\n    var vy = vec4<f32>(v0.y, v1.y, v2.y, v3.y);\n    var vz = vec4<f32>(v0.z, v1.z, v2.z, v3.z);\n    if (p.x > 0.0) {\n      vx = vx - floor(vx / p.x) * p.x;\n    }\n    if (p.y > 0.0) {\n      vy = vy - floor(vy / p.y) * p.y;\n    }\n    if (p.z > 0.0) {\n      vz = vz - floor(vz / p.z) * p.z;\n    }\n    i0 = floor(M * vec3<f32>(vx.x, vy.x, vz.x) + 0.5);\n    i1 = floor(M * vec3<f32>(vx.y, vy.y, vz.y) + 0.5);\n    i2 = floor(M * vec3<f32>(vx.z, vy.z, vz.z) + 0.5);\n    i3 = floor(M * vec3<f32>(vx.w, vy.w, vz.w) + 0.5);\n  }\n" : "");
  var seed = (seeded ? "  hash = extended_permute_4(extended_permute_4(hash + so.x) + so.y);\n" : "");
  var gradients = (rotating ? "  let psi = hash * 0.108705628;\n  let Ct = cos(theta);\n  let St = sin(theta);\n  let sz_ = sqrt(1.0 - sz * sz);\n  var gx: vec4<f32>;\n  var gy: vec4<f32>;\n  var gz: vec4<f32>;\n  if (alpha != 0.0) {\n    let px = Ct * sz_;\n    let py = St * sz_;\n    let pz = sz;\n    let Sp = sin(psi);\n    let Cp = cos(psi);\n    let Ctp = St * Sp - Ct * Cp;\n    let qx = mix(Ctp * St, Sp, sz);\n    let qy = mix(-Ctp * Ct, Cp, sz);\n    let qz = -(py * Cp + px * Sp);\n    let Sa = vec4<f32>(sin(alpha));\n    let Ca = vec4<f32>(cos(alpha));\n    gx = Ca * px + Sa * qx;\n    gy = Ca * py + Sa * qy;\n    gz = Ca * pz + Sa * qz;\n  } else {\n    gx = Ct * sz_;\n    gy = St * sz_;\n    gz = sz;\n  }\n" : "  let Ct = cos(theta);\n  let St = sin(theta);\n  let sz_ = sqrt(1.0 - sz * sz);\n  let gx = Ct * sz_;\n  let gy = St * sz_;\n  let gz = sz;\n");
  var result = (gradient ? "  let n = 39.5 * dot(w3, gdotx);\n  let dw = -6.0 * w2 * gdotx;\n  let dn0 = w3.x * g0 + dw.x * x0;\n  let dn1 = w3.y * g1 + dw.y * x1;\n  let dn2 = w3.z * g2 + dw.z * x2;\n  let dn3 = w3.w * g3 + dw.w * x3;\n  let g = 39.5 * (dn0 + dn1 + dn2 + dn3);\n  return vec4<f32>(n, g);" : "  let n = dot(w3, gdotx);\n  return 39.5 * n;");
  return ((((((("  let M = mat3x3<f32>(0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0);\n  let Mi = mat3x3<f32>(-0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5);\n  let uvw = M * x;\n  var i0 = floor(uvw);\n  let f0 = uvw - i0;\n  let gt_ = step(f0.xyx, f0.yzz);\n  let lt_ = 1.0 - gt_;\n  let gt = vec3<f32>(lt_.z, gt_.xy);\n  let lt = vec3<f32>(lt_.xy, gt_.z);\n  let o1 = min(gt, lt);\n  let o2 = max(gt, lt);\n  var i1 = i0 + o1;\n  var i2 = i0 + o2;\n  var i3 = i0 + vec3<f32>(1.0, 1.0, 1.0);\n  let v0 = Mi * i0;\n  let v1 = Mi * i1;\n  let v2 = Mi * i2;\n  let v3 = Mi * i3;\n  let x0 = x - v0;\n  let x1 = x - v1;\n  let x2 = x - v2;\n  let x3 = x - v3;\n" + wrap) + "  var hash = extended_permute_4(extended_permute_4(extended_permute_4(vec4<f32>(i0.z, i1.z, i2.z, i3.z)) + vec4<f32>(i0.y, i1.y, i2.y, i3.y)) + vec4<f32>(i0.x, i1.x, i2.x, i3.x));\n") + seed) + "  let theta = hash * 3.883222077;\n  let sz = hash * -0.006920415 + 0.996539792;\n") + gradients) + "  let g0 = vec3<f32>(gx.x, gy.x, gz.x);\n  let g1 = vec3<f32>(gx.y, gy.y, gz.y);\n  let g2 = vec3<f32>(gx.z, gy.z, gz.z);\n  let g3 = vec3<f32>(gx.w, gy.w, gz.w);\n  var w = 0.5 - vec4<f32>(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3));\n  w = max(w, vec4<f32>(0.0, 0.0, 0.0, 0.0));\n  let w2 = w * w;\n  let w3 = w2 * w;\n  let gdotx = vec4<f32>(dot(g0, x0), dot(g1, x1), dot(g2, x2), dot(g3, x3));\n") + result);
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T($thiz, call, dim, gradient, seeded) {
  var soLine = (seeded ? "  let so = noise_seed_offsets(seed);\n" : "");
  var this$1 = call.split("X").join("x * frequency");
  var this$2 = this$1.split("P").join("p * frequency");
  var c = this$2.split("SO").join("vec2<f32>((so.x + f32(i)) % 289.0, so.y)");
  if (gradient) {
    var vt = ((dim === 2) ? "vec3<f32>" : "vec4<f32>");
    var gs = ((dim === 2) ? "ng.yz" : "ng.yzw");
    var \u03b41$___1 = (("  var sum = " + vt) + "(0.0);\n");
    var \u03b41$___2 = (((((("    let ng = " + c) + ";\n    sum += ") + vt) + "(ng.x, ") + gs) + " * frequency) * amplitude;\n");
  } else {
    var \u03b41$___1 = "  var sum = 0.0;\n";
    var \u03b41$___2 = (("    sum += " + c) + " * amplitude;\n");
  }
  var init = \u03b41$___1;
  var accumulate = \u03b41$___2;
  return ((((soLine + init) + "  var amplitude = 1.0;\n  var total = 0.0;\n  var frequency = 1.0;\n  for (var i = 0; i < octaves; i += 1) {\n") + accumulate) + "    total += amplitude;\n    amplitude *= gain;\n    frequency *= lacunarity;\n  }\n  return sum / total;");
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$() {
  this.oU = null;
  this.oV = false;
  this.oW = null;
  this.oX = false;
  this.pa = null;
  this.pd = false;
  this.p2 = null;
  this.p5 = false;
  this.pq = null;
  this.pt = false;
  this.pi = null;
  this.pl = false;
  this.pb = null;
  this.pc = false;
  this.p3 = null;
  this.p4 = false;
  this.pr = null;
  this.ps = false;
  this.pj = null;
  this.pk = false;
  this.p6 = null;
  this.p9 = false;
  this.oY = null;
  this.p1 = false;
  this.pm = null;
  this.pp = false;
  this.pe = null;
  this.ph = false;
  this.p7 = null;
  this.p8 = false;
  this.oZ = null;
  this.p0 = false;
  this.pn = null;
  this.po = false;
  this.pf = null;
  this.pg = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$.prototype = $p;
$p.ud = (function() {
  if ((!this.pd)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy17 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, true, true, false, false);
    var src = (("fn extended_psrnoise_3(x: vec3<f32>, p: vec3<f32>, alpha: f32) -> f32 {\n" + body$proxy17) + "\n}");
    this.pa = $x_1.a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psrnoise_3", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.pd = true;
  }
  return this.pa;
});
$p.u9 = (function() {
  if ((!this.p5)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy18 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, true, false, false, false);
    var src = (("fn extended_psnoise_3(x: vec3<f32>, p: vec3<f32>) -> f32 {\n" + body$proxy18) + "\n}");
    this.p2 = $x_1.a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psnoise_3", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.p5 = true;
  }
  return this.p2;
});
$p.uK = (function() {
  if ((!this.pt)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy19 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, false, true, false, false);
    var src = (("fn extended_srnoise_3(x: vec3<f32>, alpha: f32) -> f32 {\n" + body$proxy19) + "\n}");
    this.pq = $x_1.a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_srnoise_3", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.pt = true;
  }
  return this.pq;
});
$p.uF = (function() {
  if ((!this.pl)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy20 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, false, false, false, false);
    var src = (("fn extended_snoise_3(x: vec3<f32>) -> f32 {\n" + body$proxy20) + "\n}");
    this.pi = $x_1.a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_snoise_3", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.pl = true;
  }
  return this.pi;
});
$p.ue = (function() {
  if ((!this.pc)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy25 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, true, true, false, true);
    var src = (("fn extended_psrnoise_3_so(x: vec3<f32>, p: vec3<f32>, alpha: f32, so: vec2<f32>) -> f32 {\n" + body$proxy25) + "\n}");
    this.pb = $x_1.a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psrnoise_3_so", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.pc = true;
  }
  return this.pb;
});
$p.ua = (function() {
  if ((!this.p4)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy26 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, true, false, false, true);
    var src = (("fn extended_psnoise_3_so(x: vec3<f32>, p: vec3<f32>, so: vec2<f32>) -> f32 {\n" + body$proxy26) + "\n}");
    this.p3 = $x_1.a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psnoise_3_so", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.p4 = true;
  }
  return this.p3;
});
$p.uL = (function() {
  if ((!this.ps)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy27 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, false, true, false, true);
    var src = (("fn extended_srnoise_3_so(x: vec3<f32>, alpha: f32, so: vec2<f32>) -> f32 {\n" + body$proxy27) + "\n}");
    this.pr = $x_1.a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_srnoise_3_so", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.ps = true;
  }
  return this.pr;
});
$p.uG = (function() {
  if ((!this.pk)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy28 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, false, false, false, true);
    var src = (("fn extended_snoise_3_so(x: vec3<f32>, so: vec2<f32>) -> f32 {\n" + body$proxy28) + "\n}");
    this.pj = $x_1.a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_snoise_3_so", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.pk = true;
  }
  return this.pj;
});
$p.ub = (function() {
  if ((!this.p9)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy57 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_psrnoise_3(X, P, alpha)", 3, false, false);
    var src = (("fn extended_psrfbm_3(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, p: vec3<f32>, alpha: f32) -> f32 {\n" + body$proxy57) + "\n}");
    this.p6 = $x_1.a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psrfbm_3", src), new $c_sjsr_WrappedVarArgs([this.ud()]));
    this.p9 = true;
  }
  return this.p6;
});
$p.u7 = (function() {
  if ((!this.p1)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy58 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_psnoise_3(X, P)", 3, false, false);
    var src = (("fn extended_psfbm_3(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, p: vec3<f32>) -> f32 {\n" + body$proxy58) + "\n}");
    this.oY = $x_1.a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psfbm_3", src), new $c_sjsr_WrappedVarArgs([this.u9()]));
    this.p1 = true;
  }
  return this.oY;
});
$p.uI = (function() {
  if ((!this.pp)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy59 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_srnoise_3(X, alpha)", 3, false, false);
    var src = (("fn extended_srfbm_3(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, alpha: f32) -> f32 {\n" + body$proxy59) + "\n}");
    this.pm = $x_1.a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_srfbm_3", src), new $c_sjsr_WrappedVarArgs([this.uK()]));
    this.pp = true;
  }
  return this.pm;
});
$p.uy = (function() {
  if ((!this.ph)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy60 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_snoise_3(X)", 3, false, false);
    var src = (("fn extended_sfbm_3(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32) -> f32 {\n" + body$proxy60) + "\n}");
    this.pe = $x_1.a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_sfbm_3", src), new $c_sjsr_WrappedVarArgs([this.uF()]));
    this.ph = true;
  }
  return this.pe;
});
$p.uc = (function() {
  if ((!this.p8)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy65 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_psrnoise_3_so(X, P, alpha, SO)", 3, false, true);
    var src = (("fn extended_psrfbm_3_seeded(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, p: vec3<f32>, alpha: f32, seed: f32) -> f32 {\n" + body$proxy65) + "\n}");
    this.p7 = $x_1.a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psrfbm_3_seeded", src), new $c_sjsr_WrappedVarArgs([this.ue(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().iL()]));
    this.p8 = true;
  }
  return this.p7;
});
$p.u8 = (function() {
  if ((!this.p0)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy66 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_psnoise_3_so(X, P, SO)", 3, false, true);
    var src = (("fn extended_psfbm_3_seeded(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, p: vec3<f32>, seed: f32) -> f32 {\n" + body$proxy66) + "\n}");
    this.oZ = $x_1.a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psfbm_3_seeded", src), new $c_sjsr_WrappedVarArgs([this.ua(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().iL()]));
    this.p0 = true;
  }
  return this.oZ;
});
$p.uJ = (function() {
  if ((!this.po)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy67 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_srnoise_3_so(X, alpha, SO)", 3, false, true);
    var src = (("fn extended_srfbm_3_seeded(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, alpha: f32, seed: f32) -> f32 {\n" + body$proxy67) + "\n}");
    this.pn = $x_1.a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_srfbm_3_seeded", src), new $c_sjsr_WrappedVarArgs([this.uL(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().iL()]));
    this.po = true;
  }
  return this.pn;
});
$p.uz = (function() {
  if ((!this.pg)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy68 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_snoise_3_so(X, SO)", 3, false, true);
    var src = (("fn extended_sfbm_3_seeded(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, seed: f32) -> f32 {\n" + body$proxy68) + "\n}");
    this.pf = $x_1.a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_sfbm_3_seeded", src), new $c_sjsr_WrappedVarArgs([this.uG(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().iL()]));
    this.pg = true;
  }
  return this.pf;
});
var $d_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$, "trivalibs.graphics.shader.lib.noise.Extended$wgsl$", ({
  fZ: 1
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
  this.pu = null;
  this.pv = false;
  this.pw = null;
  this.px = false;
  this.py = null;
  this.pz = false;
  this.pC = null;
  this.pD = false;
  this.pA = null;
  this.pB = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$.prototype = $p;
$p.qK = (function() {
  if ((!this.pv)) {
    this.pu = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_mod289_3", "fn noise_mod289_3(x: vec3<f32>) -> vec3<f32> {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}");
    this.pv = true;
  }
  return this.pu;
});
$p.tI = (function() {
  if ((!this.px)) {
    this.pw = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_mod289_4", "fn noise_mod289_4(x: vec4<f32>) -> vec4<f32> {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}");
    this.px = true;
  }
  return this.pw;
});
$p.qM = (function() {
  if ((!this.pz)) {
    this.py = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$().a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_permute_4", "fn noise_permute_4(x: vec4<f32>) -> vec4<f32> {\n  return noise_mod289_4(((x * 34.0) + 10.0) * x);\n}"), new $c_sjsr_WrappedVarArgs([this.tI()]));
    this.pz = true;
  }
  return this.py;
});
$p.r1 = (function() {
  if ((!this.pD)) {
    this.pC = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_taylor_inv_sqrt_4", "fn noise_taylor_inv_sqrt_4(r: vec4<f32>) -> vec4<f32> {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}");
    this.pD = true;
  }
  return this.pC;
});
$p.iL = (function() {
  if ((!this.pB)) {
    this.pA = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$().a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_seed_offsets", "fn noise_seed_offsets(seed: f32) -> vec2<f32> {\n  let h = hash1i(bitcast<u32>(seed));\n  return vec2<f32>(f32(h % 289u), f32((h / 289u) % 289u));\n}"), new $c_sjsr_WrappedVarArgs([$m_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$().sO()]));
    this.pB = true;
  }
  return this.pA;
});
var $d_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$, "trivalibs.graphics.shader.lib.noise.NoiseCommon$", ({
  g0: 1
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
$p.ip = (function(pos, octaves, lacunarity, gain, seed) {
  if ((seed === null)) {
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy9 = $m_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$().sv();
    var a2$proxy6 = $m_Ltrivalibs_graphics_lib_args$package$().m2(octaves);
    var s$proxy9 = WgslFn$_this.jF(fn$proxy9, pos, a2$proxy6, lacunarity, gain);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy9);
  } else {
    var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy10 = $m_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$().sw();
    var a2$proxy7 = $m_Ltrivalibs_graphics_lib_args$package$().m2(octaves);
    var s$proxy10 = WgslFn$_this$2.gq(fn$proxy10, pos, a2$proxy7, lacunarity, gain, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy10);
  }
});
var $d_Ltrivalibs_graphics_shader_lib_noise_Simplex$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_Simplex$, "trivalibs.graphics.shader.lib.noise.Simplex$", ({
  g1: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_noise_Simplex$;
function $m_Ltrivalibs_graphics_shader_lib_noise_Simplex$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_noise_Simplex$)) {
    $n_Ltrivalibs_graphics_shader_lib_noise_Simplex$ = new $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_noise_Simplex$;
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__body3__Z__T($thiz, seeded) {
  return (("  let C = vec2<f32>(1.0 / 6.0, 1.0 / 3.0);\n  let D = vec4<f32>(0.0, 0.5, 1.0, 2.0);\n  var i = floor(v + dot(v, C.yyy));\n  let x0 = v - i + dot(i, C.xxx);\n  let g = step(x0.yzx, x0.xyz);\n  let l = 1.0 - g;\n  let i1 = min(g.xyz, l.zxy);\n  let i2 = max(g.xyz, l.zxy);\n  let x1 = x0 - i1 + C.xxx;\n  let x2 = x0 - i2 + C.yyy;\n  let x3 = x0 - D.yyy;\n  i = noise_mod289_3(i);\n  var p = noise_permute_4(noise_permute_4(noise_permute_4(i.z + vec4<f32>(0.0, i1.z, i2.z, 1.0)) + i.y + vec4<f32>(0.0, i1.y, i2.y, 1.0)) + i.x + vec4<f32>(0.0, i1.x, i2.x, 1.0));\n" + $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__seedStage__Z__T__T__T($thiz, seeded, "p", "noise_permute_4")) + "  let n_ = 0.142857142857;\n  let ns = n_ * D.wyz - D.xzx;\n  let j = p - 49.0 * floor(p * ns.z * ns.z);\n  let x_ = floor(j * ns.z);\n  let y_ = floor(j - 7.0 * x_);\n  let x = x_ * ns.x + ns.yyyy;\n  let y = y_ * ns.x + ns.yyyy;\n  let h = 1.0 - abs(x) - abs(y);\n  let b0 = vec4<f32>(x.xy, y.xy);\n  let b1 = vec4<f32>(x.zw, y.zw);\n  let s0 = floor(b0) * 2.0 + 1.0;\n  let s1 = floor(b1) * 2.0 + 1.0;\n  let sh = -step(h, vec4<f32>(0.0));\n  let a0 = b0.xzyw + s0.xzyw * sh.xxyy;\n  let a1 = b1.xzyw + s1.xzyw * sh.zzww;\n  var p0 = vec3<f32>(a0.xy, h.x);\n  var p1 = vec3<f32>(a0.zw, h.y);\n  var p2 = vec3<f32>(a1.xy, h.z);\n  var p3 = vec3<f32>(a1.zw, h.w);\n  let norm = noise_taylor_inv_sqrt_4(vec4<f32>(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n  p0 = p0 * norm.x;\n  p1 = p1 * norm.y;\n  p2 = p2 * norm.z;\n  p3 = p3 * norm.w;\n  var m = max(0.5 - vec4<f32>(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), vec4<f32>(0.0));\n  m = m * m;\n  return 105.0 * dot(m * m, vec4<f32>(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));");
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
  this.pI = null;
  this.pL = false;
  this.pJ = null;
  this.pK = false;
  this.pE = null;
  this.pH = false;
  this.pF = null;
  this.pG = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$.prototype = $p;
$p.tQ = (function() {
  if ((!this.pL)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy3 = $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__body3__Z__T(this, false);
    var src = (("fn simplex_noise_3d(v: vec3<f32>) -> f32 {\n" + body$proxy3) + "\n}");
    this.pI = $x_1.a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d", src), new $c_sjsr_WrappedVarArgs([$m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().qK(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().qM(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().r1()]));
    this.pL = true;
  }
  return this.pI;
});
$p.tR = (function() {
  if ((!this.pK)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy4 = $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__body3__Z__T(this, true);
    var src = (("fn simplex_noise_3d_so(v: vec3<f32>, so: vec2<f32>) -> f32 {\n" + body$proxy4) + "\n}");
    this.pJ = $x_1.a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d_so", src), new $c_sjsr_WrappedVarArgs([$m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().qK(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().qM(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().r1()]));
    this.pK = true;
  }
  return this.pJ;
});
$p.sv = (function() {
  if ((!this.pH)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy9 = $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__fbmBody__T__Z__T(this, "simplex_noise_3d", false);
    var src = (("fn simplex_fbm_3d(v: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32) -> f32 {\n" + body$proxy9) + "\n}");
    this.pE = $x_1.a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_fbm_3d", src), new $c_sjsr_WrappedVarArgs([this.tQ()]));
    this.pH = true;
  }
  return this.pE;
});
$p.sw = (function() {
  if ((!this.pG)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy10 = $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__fbmBody__T__Z__T(this, "simplex_noise_3d_so", true);
    var src = (("fn simplex_fbm_3d_seeded(v: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, seed: f32) -> f32 {\n" + body$proxy10) + "\n}");
    this.pF = $x_1.a8(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_fbm_3d_seeded", src), new $c_sjsr_WrappedVarArgs([this.tR(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().iL()]));
    this.pG = true;
  }
  return this.pF;
});
var $d_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$, "trivalibs.graphics.shader.lib.noise.Simplex$wgsl$", ({
  g2: 1
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
  this.pM = null;
  this.pN = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$.prototype = $p;
$p.sO = (function() {
  if ((!this.pN)) {
    this.pM = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("hash1i", "fn hash1i(x: u32) -> u32 {\n  var v = x;\n    v ^= v >> 16u;\n    v = v * 0x21f0aaadu;\n    v ^= v >> 15u;\n    v = v * 0xd35a2d97u;\n    return v ^ (v >> 15u);\n}");
    this.pN = true;
  }
  return this.pM;
});
var $d_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$, "trivalibs.graphics.shader.lib.random.Hash$wgsl$", ({
  g3: 1
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
  this.pO = null;
  this.ll = null;
  this.i9 = 0;
  this.ia = 0.0;
  this.jx = 0.0;
  this.jy = 0.0;
  this.lm = false;
  this.pO = frame;
  this.ll = onFpsCallback;
  this.i9 = 0;
  this.ia = 0.0;
  this.jx = 0.0;
  this.jy = (-1.0);
  this.lm = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.qQ = (function(time) {
  this.i9 = ((1 + this.i9) | 0);
  if ((this.ia === 0.0)) {
    this.ia = time;
    this.jx = time;
  }
  var fpsElapsed = (time - this.ia);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.i9) / fpsElapsed);
    if (((time - this.jx) >= 1000.0)) {
      var s = (fps.toFixed(1) + " FPS");
      console.log(s);
      this.jx = time;
      if ((this.ll !== null)) {
        (0, this.ll)(fps);
      }
    }
    this.i9 = 0;
    this.ia = time;
  }
  var delta = ((this.jy < 0.0) ? 0.0 : (time - this.jy));
  this.jy = time;
  (0, this.pO)(delta);
  if (this.lm) {
    requestAnimationFrame($m_sjs_js_Any$().hn(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.qQ((+v1$2));
    }))));
  }
});
$p.uM = (function() {
  this.lm = true;
  return requestAnimationFrame($m_sjs_js_Any$().hn(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.qQ((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  ga: 1
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
$p.rD = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.uM();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  gb: 1
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
  this.aH = null;
  this.ln = null;
  this.lo = null;
  this.aH = input;
  this.ln = drag;
  this.lo = hold;
}
$p = $c_Ltrivalibs_utils_events_CanvasInput.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_CanvasInput;
/** @constructor */
function $h_Ltrivalibs_utils_events_CanvasInput() {
}
$h_Ltrivalibs_utils_events_CanvasInput.prototype = $p;
$p.gv = (function(tpf) {
  this.ln.gv(tpf);
  this.lo.gv(tpf);
});
var $d_Ltrivalibs_utils_events_CanvasInput = new $TypeData().i($c_Ltrivalibs_utils_events_CanvasInput, "trivalibs.utils.events.CanvasInput", ({
  gc: 1
}));
function $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, pointersOf, glideMinSpeed, glideHalfLife) {
  $thiz.pR = pointersOf;
  $thiz.pQ = glideHalfLife;
  $thiz.hf = null;
  $thiz.lq = 0.0;
  $thiz.lr = 0.0;
  $thiz.gl = 0.0;
  $thiz.gm = 0.0;
  $thiz.bl = 0.0;
  $thiz.bm = 0.0;
  $thiz.lp = (glideHalfLife > 0.0);
  var s = (glideMinSpeed / 1000.0);
  $thiz.pP = ((s < 0.001) ? 0.001 : s);
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, glideMinSpeed, glideHalfLife) {
  $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife), glideMinSpeed, glideHalfLife);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.b9));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_DragGesture() {
  this.pR = null;
  this.pQ = 0.0;
  this.hf = null;
  this.lq = 0.0;
  this.lr = 0.0;
  this.gl = 0.0;
  this.gm = 0.0;
  this.bl = 0.0;
  this.bm = 0.0;
  this.lp = false;
  this.pP = 0.0;
}
$p = $c_Ltrivalibs_utils_events_DragGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_DragGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_DragGesture() {
}
$h_Ltrivalibs_utils_events_DragGesture.prototype = $p;
$p.sd = (function() {
  return $ct_T2__O__O__(new $c_T2(), this.gl, this.gm);
});
$p.gv = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().qh(this.pR.ik());
  if ((d === null)) {
    this.hf = null;
    if (this.lp) {
      var p$proxy1 = ((this.bl * this.bl) + (this.bm * this.bm));
      var $x_1 = ((+Math.sqrt(p$proxy1)) >= this.pP);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var e$proxy1 = (tpf / this.pQ);
      var f = (+Math.pow(0.5, e$proxy1));
      this.bl = (this.bl * f);
      this.bm = (this.bm * f);
      this.gl = (this.bl * tpf);
      this.gm = (this.bm * tpf);
    } else {
      this.bl = 0.0;
      this.bm = 0.0;
      this.gl = 0.0;
      this.gm = 0.0;
    }
  } else {
    if ((((this.hf !== null) && (d.bw !== null)) && $m_sr_BoxesRunTime$().jH((+this.hf), (+d.bw)))) {
      this.gl = (d.hh - this.lq);
      this.gm = (d.hi - this.lr);
      if ((this.lp && (tpf > 0.0))) {
        var e$proxy2 = (tpf / 40.0);
        var k = (1.0 - (+Math.pow(0.5, e$proxy2)));
        this.bl = (this.bl + (((this.gl / tpf) - this.bl) * k));
        this.bm = (this.bm + (((this.gm / tpf) - this.bm) * k));
      }
    } else {
      if ((this.hf === null)) {
        this.bl = 0.0;
        this.bm = 0.0;
      }
      this.gl = 0.0;
      this.gm = 0.0;
    }
    this.hf = d.bw;
    this.lq = d.hh;
    this.lr = d.hi;
  }
});
var $d_Ltrivalibs_utils_events_DragGesture = new $TypeData().i($c_Ltrivalibs_utils_events_DragGesture, "trivalibs.utils.events.DragGesture", ({
  gd: 1
}));
function $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, pointersOf, holdDelay, holdRadius) {
  $thiz.pU = pointersOf;
  $thiz.pS = holdDelay;
  $thiz.pT = holdRadius;
  $thiz.ic = null;
  $thiz.hg = 0.0;
  $thiz.id = false;
  $thiz.ib = false;
  $thiz.gn = false;
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, holdDelay, holdRadius) {
  $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius), holdDelay, holdRadius);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.b9));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_HoldGesture() {
  this.pU = null;
  this.pS = 0.0;
  this.pT = 0.0;
  this.ic = null;
  this.hg = 0.0;
  this.id = false;
  this.ib = false;
  this.gn = false;
}
$p = $c_Ltrivalibs_utils_events_HoldGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_HoldGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_HoldGesture() {
}
$h_Ltrivalibs_utils_events_HoldGesture.prototype = $p;
$p.gv = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().qh(this.pU.ik());
  if ((d === null)) {
    this.ic = null;
    this.hg = 0.0;
    this.id = false;
    this.ib = false;
    this.gn = false;
  } else {
    var pid = d.bw;
    if ((!(((this.ic !== null) && (pid !== null)) && $m_sr_BoxesRunTime$().jH((+this.ic), (+pid))))) {
      this.ic = pid;
      this.hg = 0.0;
      this.id = false;
      this.ib = false;
    }
    this.hg = (this.hg + tpf);
    if (this.ib) {
      this.gn = true;
    } else if ((this.hg < this.pS)) {
      var dx = (d.hh - d.lt);
      var dy = (d.hi - d.lu);
      var p$proxy2 = ((dx * dx) + (dy * dy));
      if (((+Math.sqrt(p$proxy2)) > this.pT)) {
        this.id = true;
      }
      this.gn = false;
    } else if (this.id) {
      this.gn = false;
    } else {
      this.ib = true;
      this.gn = true;
    }
  }
});
var $d_Ltrivalibs_utils_events_HoldGesture = new $TypeData().i($c_Ltrivalibs_utils_events_HoldGesture, "trivalibs.utils.events.HoldGesture", ({
  ge: 1
}));
function $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz) {
  var i = 0;
  while ((i < ($thiz.ih.length | 0))) {
    if (($thiz.ih[i].bw === null)) {
      return $thiz.ih[i];
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id) {
  var i = 0;
  while ((i < ($thiz.b9.length | 0))) {
    var p = $thiz.b9[i];
    if (((p.bw !== null) && $m_sr_BoxesRunTime$().jH((+p.bw), id))) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id) {
  var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id);
  if ((p !== null)) {
    p.bw = null;
    var idx = $m_sjs_js_ArrayOps$().qq($thiz.b9, p, 0);
    if ((idx >= 0)) {
      $thiz.b9.splice(idx, 1);
    }
  }
}
function $p_Ltrivalibs_utils_events_InputState__install__V($thiz) {
  var i = 0;
  while ((i < $thiz.pZ)) {
    $thiz.ih.push(new $c_Ltrivalibs_utils_events_Pointer());
    i = ((1 + i) | 0);
  }
  $m_Ltrivalibs_utils_events_keyboard$package$().t0($thiz.ie, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!$thiz.ig.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      $thiz.ig[k$3] = value$proxy1;
      if ((!($thiz.aI === (void 0)))) {
        (0, $thiz.aI)();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete $thiz.ig[k$3$1];
    if ((!($thiz.aI === (void 0)))) {
      (0, $thiz.aI)();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().u1($thiz.pW, $m_Ltrivalibs_utils_events_pointer$package$().u2(), new $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(((v1$2, v2$2, v3$2, v4$2, v5$2) => {
    var button = (v1$2 | 0);
    var id = (+v2$2);
    var x$1 = (+v3$2);
    var y = (+v4$2);
    if ($thiz.pY) {
      $thiz.ie.focus();
    }
    var key$proxy3 = ("" + button);
    var value$proxy2 = (+Date.now());
    $thiz.jz[key$proxy3] = value$proxy2;
    var slot = $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz);
    if ((slot !== null)) {
      slot.bw = id;
      slot.ls = button;
      (+Date.now());
      slot.lt = x$1;
      slot.lu = y;
      slot.hh = x$1;
      slot.hi = y;
      $thiz.b9.push(slot);
      ($thiz.b9.length | 0);
    }
    if ((!($thiz.aI === (void 0)))) {
      (0, $thiz.aI)();
    }
  })), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2$1, v2$2$1, v3$2$1) => {
    var id$1 = (+v1$2$1);
    var x$2 = (+v2$2$1);
    var y$1 = (+v3$2$1);
    var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id$1);
    if ((p !== null)) {
      p.hh = x$2;
      p.hi = y$1;
      if ((($thiz.b9.length | 0) > 0)) {
        $thiz.b9[0];
      }
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2$1) => {
    var button$1 = (v1$2$2 | 0);
    var id$2 = (+v2$2$2);
    delete $thiz.jz[("" + button$1)];
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id$2);
    if ((!($thiz.aI === (void 0)))) {
      (0, $thiz.aI)();
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2$3) => {
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, (+v1$2$3));
    if ((!($thiz.aI === (void 0)))) {
      (0, $thiz.aI)();
    }
  })), $thiz.q0);
  $thiz.ie.addEventListener("focus", $thiz.pX);
  $thiz.ie.addEventListener("blur", $thiz.pV);
}
/** @constructor */
function $c_Ltrivalibs_utils_events_InputState(el, keyTarget, suppressContextMenu, onActivity, focusOnPointerDown, maxPointers) {
  this.pW = null;
  this.ie = null;
  this.q0 = false;
  this.aI = null;
  this.pY = false;
  this.pZ = 0;
  this.ig = null;
  this.jz = null;
  this.ih = null;
  this.b9 = null;
  this.pX = null;
  this.pV = null;
  this.pW = el;
  this.ie = keyTarget;
  this.q0 = suppressContextMenu;
  this.aI = onActivity;
  this.pY = focusOnPointerDown;
  this.pZ = maxPointers;
  this.ig = ({});
  this.jz = ({});
  this.ih = [];
  this.b9 = [];
  if ($m_sr_BoxesRunTime$().c(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().c(keyTarget, document.activeElement);
  }
  this.pX = ((_$1$3) => {
    if ((!(this.aI === (void 0)))) {
      (0, this.aI)();
    }
  });
  this.pV = ((_$2$3) => {
    if ((!(this.aI === (void 0)))) {
      (0, this.aI)();
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
$p.bo = (function(key) {
  return (!(!(!(!this.ig.hasOwnProperty(key)))));
});
$p.sY = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.jz.hasOwnProperty(key$proxy7)))));
});
$p.qO = (function() {
  return (this.b9.length | 0);
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  gf: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_Pointer() {
  this.bw = null;
  this.ls = 0;
  this.lt = 0.0;
  this.lu = 0.0;
  this.hh = 0.0;
  this.hi = 0.0;
  this.bw = null;
  this.ls = 0;
  this.lt = 0.0;
  this.lu = 0.0;
  this.hh = 0.0;
  this.hi = 0.0;
}
$p = $c_Ltrivalibs_utils_events_Pointer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_Pointer;
/** @constructor */
function $h_Ltrivalibs_utils_events_Pointer() {
}
$h_Ltrivalibs_utils_events_Pointer.prototype = $p;
var $d_Ltrivalibs_utils_events_Pointer = new $TypeData().i($c_Ltrivalibs_utils_events_Pointer, "trivalibs.utils.events.Pointer", ({
  gg: 1
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
$p.qh = (function(pointers) {
  var i = 0;
  while ((i < (pointers.length | 0))) {
    var p = pointers[i];
    if ((p.ls === 0)) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
});
var $d_Ltrivalibs_utils_events_gestures$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_gestures$package$, "trivalibs.utils.events.gestures$package$", ({
  gh: 1
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
$p.sW = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity, dragGlideHalfLife, dragGlideMinSpeed) {
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
  gi: 1
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
$p.t0 = (function(el, onDown, onUp, keepDefault) {
  var down = ((e$3) => {
    var isTab = (e$3.code === "Tab");
    if (((!keepDefault) && (!isTab))) {
      e$3.preventDefault();
    }
    if ((!(!(!e$3.repeat)))) {
      onDown.g(e$3.code);
    }
  });
  var up = ((e$3$1) => {
    onUp.g(e$3$1.code);
  });
  el.addEventListener("keydown", down);
  el.addEventListener("keyup", up);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    el.removeEventListener("keydown", down);
    el.removeEventListener("keyup", up);
  }));
});
var $d_Ltrivalibs_utils_events_keyboard$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_keyboard$package$, "trivalibs.utils.events.keyboard$package$", ({
  gj: 1
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
$p.u1 = (function(el, moveTarget, onDown, onMove, onUp, onCancel, suppressContextMenu) {
  var downFn = ((e$3) => {
    onDown.rG((e$3.button | 0), (+e$3.pointerId), (+e$3.clientX), (+e$3.clientY), (!(!e$3.isPrimary)));
  });
  var moveFn = ((e$3$1) => {
    onMove.lz((+e$3$1.pointerId), (+e$3$1.clientX), (+e$3$1.clientY));
  });
  var upFn = ((e$3$2) => {
    onUp.jB((e$3$2.button | 0), (+e$3$2.pointerId), (+e$3$2.clientX), (+e$3$2.clientY));
  });
  var cancelFn = ((e$3$3) => {
    onCancel.g((+e$3$3.pointerId));
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
$p.u2 = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  gk: 1
}));
var $n_Ltrivalibs_utils_events_pointer$package$;
function $m_Ltrivalibs_utils_events_pointer$package$() {
  if ((!$n_Ltrivalibs_utils_events_pointer$package$)) {
    $n_Ltrivalibs_utils_events_pointer$package$ = new $c_Ltrivalibs_utils_events_pointer$package$();
  }
  return $n_Ltrivalibs_utils_events_pointer$package$;
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
$p.lU = (function() {
  return (+Math.random());
});
$p.lV = (function(min, max) {
  return (((+Math.random()) * (max - min)) + min);
});
$p.jR = (function() {
  return ((((+Math.random()) + (+Math.random())) + (+Math.random())) / 3.0);
});
$p.hp = (function() {
  return ((2.0 * $m_Ltrivalibs_utils_random_random$package$().jR()) - 1.0);
});
$p.qN = (function(arr) {
  if (((arr.length | 0) === 0)) {
    throw new $c_sjs_js_JavaScriptException(Error("pick(): empty array")).X;
  }
  return arr[$doubleToInt(((+Math.random()) * (arr.length | 0)))];
});
var $d_Ltrivalibs_utils_random_random$package$ = new $TypeData().i($c_Ltrivalibs_utils_random_random$package$, "trivalibs.utils.random.random$package$", ({
  gn: 1
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
  this.k1 = null;
  $n_jl_Character$ = this;
  this.k1 = $constArrUDiffs_I(67, "1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]");
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.uY = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.sg = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().rU(this.k1, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.k1.b[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  b6: 1,
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
$p.iJ = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.sZ = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().iJ(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().iJ(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) | 0);
  if ((i >= len)) {
    $m_jl_Integer$().iJ(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.sg(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().iJ(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().iJ(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  bb: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.v)));
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.md = s;
  if (writableStackTrace) {
    $thiz.sy();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.md = null;
  }
  jJ() {
    return this.md;
  }
  sy() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.X : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  r() {
    var className = $objectClassName(this);
    var message = this.jJ();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  x() {
    return $c_O.prototype.x.call(this);
  }
  v(that) {
    return $c_O.prototype.v.call(this, that);
  }
  get "message"() {
    var m = this.jJ();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.r();
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
$p.r = (function() {
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
$p.vc = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.b.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.mv;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
/** @constructor */
function $c_sc_WithFilter() {
}
$p = $c_sc_WithFilter.prototype = new $h_O();
$p.constructor = $c_sc_WithFilter;
/** @constructor */
function $h_sc_WithFilter() {
}
$h_sc_WithFilter.prototype = $p;
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
$p.qV = (function(start, end, step, isInclusive) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ($p_sci_Range$__description__I__I__I__Z__T(this, start, end, step, isInclusive) + ": seqs cannot contain more than Int.MaxValue elements."));
});
$p.us = (function(what) {
  return new $c_ju_NoSuchElementException((what + " on empty Range"));
});
var $d_sci_Range$ = new $TypeData().i($c_sci_Range$, "scala.collection.immutable.Range$", ({
  ct: 1,
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
function $c_sr_AbstractFunction0() {
}
$p = $c_sr_AbstractFunction0.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $p;
$p.r = (function() {
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
$p.r = (function() {
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
$p.r = (function() {
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
$p.r = (function() {
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
$p.r = (function() {
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
$p.r = (function() {
  return "<function5>";
});
/** @constructor */
function $c_sr_DoubleRef(elem) {
  this.gS = 0.0;
  this.gS = elem;
}
$p = $c_sr_DoubleRef.prototype = new $h_O();
$p.constructor = $c_sr_DoubleRef;
/** @constructor */
function $h_sr_DoubleRef() {
}
$h_sr_DoubleRef.prototype = $p;
$p.r = (function() {
  return ("" + this.gS);
});
var $d_sr_DoubleRef = new $TypeData().i($c_sr_DoubleRef, "scala.runtime.DoubleRef", ({
  d0: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.gU = 0;
  this.mF = 0;
  this.ri = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.gU = $f_T__hashCode__I("Seq");
  this.mF = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.ri = this.v1($m_sci_Nil$(), this.mF);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.lW = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.sS(xs, this.gU) : ((xs instanceof $c_sci_List) ? this.t4(xs, this.gU) : this.tU(xs, this.gU)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  di: 1,
  dh: 1
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
  this.nu = null;
  this.nt = null;
  this.nv = null;
  this.nw = null;
  this.nu = p$1;
  this.nt = bloomP$1;
  this.nv = resultP$1;
  this.nw = resultP$1;
}
$p = $c_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bloom_Bloom$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_bloom_Bloom$$anon$1() {
}
$h_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = $p;
$p.tX = (function() {
  var Painter_this = this.nu;
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.nt);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.nv);
});
var $d_Lsketchlib_utils_bloom_Bloom$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$$anon$1, "sketchlib.utils.bloom.Bloom$$anon$1", ({
  dv: 1,
  dt: 1
}));
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__rebuildLayers__V($thiz) {
  if (($thiz.bV > 0.0)) {
    var pairs = $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().uE($thiz.nE, $thiz.kr, $thiz.hF, $thiz.kn, $thiz.km);
    $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().uD($thiz.kp, $thiz.ny, $thiz.nA, $thiz.nz, $thiz.kr, $thiz.j5, $thiz.nF, $thiz.nI, $thiz.nJ, $thiz.ks, $thiz.kt, $thiz.nD, pairs);
    var layers = [$thiz.nx];
    var i = 0;
    while ((i < (pairs << 1))) {
      layers.push($thiz.kp[i]);
      i = ((1 + i) | 0);
    }
    $thiz.hD.iM((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), layers, (void 0), (void 0), (void 0), (void 0), (void 0));
  }
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__applySizing__V($thiz) {
  if (($thiz.bV > 0.0)) {
    var sigma = ((0.01 * $thiz.kn) * $thiz.hF);
    var p$proxy2 = ($thiz.ko * sigma);
    var p$proxy3 = (+Math.ceil(p$proxy2));
    var other$proxy4 = (0.5 * $thiz.hG);
    var mx = (+Math.min(p$proxy3, other$proxy4));
    var $x_1 = $thiz.ko;
    var p$proxy4 = $thiz.km;
    var p$proxy5 = (($x_1 * sigma) * (+Math.max(p$proxy4, 1.0)));
    var p$proxy6 = (+Math.ceil(p$proxy5));
    var other$proxy5 = (0.5 * $thiz.bV);
    var my = (+Math.min(p$proxy6, other$proxy5));
    var pw = $doubleToInt(($thiz.hG + (2.0 * mx)));
    var ph = $doubleToInt(($thiz.bV + (2.0 * my)));
    $thiz.j4.iM(pw, ph, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    $thiz.hD.iM(pw, ph, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    var BufferBinding_this = $thiz.ks;
    var value$proxy10 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(pw, ph);
    BufferBinding_this.N.F(BufferBinding_this.o, value$proxy10);
    var $x_4 = BufferBinding_this.M.queue;
    var $x_3 = BufferBinding_this.H;
    var s$proxy10 = BufferBinding_this.o;
    var $x_2 = s$proxy10.dv.buffer;
    $x_4.writeBuffer($x_3, 0.0, $x_2);
    var BufferBinding_this$3 = $thiz.kt;
    var value$proxy11 = $thiz.hF;
    BufferBinding_this$3.N.F(BufferBinding_this$3.o, value$proxy11);
    var $x_7 = BufferBinding_this$3.M.queue;
    var $x_6 = BufferBinding_this$3.H;
    var s$proxy11 = BufferBinding_this$3.o;
    var $x_5 = s$proxy11.dv.buffer;
    $x_7.writeBuffer($x_6, 0.0, $x_5);
    $thiz.j2 = ($thiz.hG / pw);
    $thiz.j3 = ($thiz.bV / ph);
    var BufferBinding_this$5 = $thiz.nG;
    var value$proxy12 = new $c_Ltrivalibs_graphics_math_cpu_Vec4($thiz.j2, $thiz.j3, (mx / pw), (my / ph));
    BufferBinding_this$5.N.F(BufferBinding_this$5.o, value$proxy12);
    var $x_10 = BufferBinding_this$5.M.queue;
    var $x_9 = BufferBinding_this$5.H;
    var s$proxy12 = BufferBinding_this$5.o;
    var $x_8 = s$proxy12.dv.buffer;
    $x_10.writeBuffer($x_9, 0.0, $x_8);
    $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__rebuildLayers__V($thiz);
  }
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__deriveRefH__V($thiz) {
  var $x_2 = $thiz.bV;
  var $x_1 = $thiz.j1.bK;
  var this$1 = $thiz.j1;
  $thiz.hF = (($x_2 * $x_1) / $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().m4(this$1.bK, this$1.gj));
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_math_cpu_Mat4($thiz) {
  var this$1 = $thiz.j1;
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().ho(), this$1.jw, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this$1.r9());
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1(mirrorPanel$1, cropPanel$1, blurPanel$1, camera$1, blurStrength$1, blurRatioVertical$1, bakeLayer$1, pairCache$2, overscan$1, uRes$3, uVisHeight$3, uCrop$1, resolutionScale$1, uBlurStrength$3, strengthScale$2, uRatioVertical$3, uStrengthOffset$3, reflMat$1, uVp$1, uInvVp$1, p$4, scaleFactor$3, blurShadeH$2, cachedScale$2, blurShadeV$2, sampler$3) {
  this.nx = null;
  this.kp = null;
  this.hD = null;
  this.ko = 0.0;
  this.j4 = null;
  this.ks = null;
  this.kt = null;
  this.nG = null;
  this.kq = 0.0;
  this.hE = null;
  this.nF = null;
  this.nE = 0.0;
  this.nI = null;
  this.nJ = null;
  this.nB = null;
  this.nK = null;
  this.nH = null;
  this.j5 = null;
  this.kr = 0.0;
  this.ny = null;
  this.nA = null;
  this.nz = null;
  this.nD = null;
  this.nC = null;
  this.j1 = null;
  this.kn = 0.0;
  this.km = 0.0;
  this.hG = 0.0;
  this.bV = 0.0;
  this.hF = 0.0;
  this.j2 = 0.0;
  this.j3 = 0.0;
  this.nx = bakeLayer$1;
  this.kp = pairCache$2;
  this.hD = blurPanel$1;
  this.ko = overscan$1;
  this.j4 = mirrorPanel$1;
  this.ks = uRes$3;
  this.kt = uVisHeight$3;
  this.nG = uCrop$1;
  this.kq = resolutionScale$1;
  this.hE = cropPanel$1;
  this.nF = uBlurStrength$3;
  this.nE = strengthScale$2;
  this.nI = uRatioVertical$3;
  this.nJ = uStrengthOffset$3;
  this.nB = reflMat$1;
  this.nK = uVp$1;
  this.nH = uInvVp$1;
  this.j5 = p$4;
  this.kr = scaleFactor$3;
  this.ny = blurShadeH$2;
  this.nA = cachedScale$2;
  this.nz = blurShadeV$2;
  this.nD = sampler$3;
  this.nC = ((cropPanel$1 === null) ? blurPanel$1 : cropPanel$1);
  this.j1 = camera$1;
  this.kn = blurStrength$1;
  this.km = blurRatioVertical$1;
  this.hG = 0.0;
  this.bV = 0.0;
  this.hF = 0.0;
  this.j2 = 1.0;
  this.j3 = 1.0;
}
$p = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1() {
}
$h_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1.prototype = $p;
$p.up = (function(w, h) {
  var x = $doubleToInt((w * this.kq));
  var sw = ((x > 1) ? x : 1);
  var x$1 = $doubleToInt((h * this.kq));
  var sh = ((x$1 > 1) ? x$1 : 1);
  this.hG = sw;
  this.bV = sh;
  $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__deriveRefH__V(this);
  if ((this.hE !== null)) {
    this.hE.iM(sw, sh, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
  }
  $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__applySizing__V(this);
});
$p.tW = (function(vp) {
  var cameraVP = ((vp === (void 0)) ? $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_math_cpu_Mat4(this) : vp);
  var m$1 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().ho(), new $c_Ltrivalibs_graphics_math_cpu_Mat4(this.j2, 0.0, 0.0, 0.0, 0.0, this.j3, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().ho(), cameraVP, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this.nB));
  var BufferBinding_this = this.nK;
  BufferBinding_this.N.F(BufferBinding_this.o, m$1);
  var $x_3 = BufferBinding_this.M.queue;
  var $x_2 = BufferBinding_this.H;
  var s$proxy16 = BufferBinding_this.o;
  var $x_1 = s$proxy16.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var BufferBinding_this$3 = this.nH;
  var value$proxy14 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().ho(), m$1, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
  BufferBinding_this$3.N.F(BufferBinding_this$3.o, value$proxy14);
  var $x_6 = BufferBinding_this$3.M.queue;
  var $x_5 = BufferBinding_this$3.H;
  var s$proxy17 = BufferBinding_this$3.o;
  var $x_4 = s$proxy17.dv.buffer;
  $x_6.writeBuffer($x_5, 0.0, $x_4);
  if ((this.hE !== null)) {
    var Painter_this = this.j5;
    var c$proxy1 = this.hE;
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.j4);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.hD);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, c$proxy1);
  } else {
    var Painter_this$2 = this.j5;
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this$2, this.j4);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this$2, this.hD);
  }
});
var $d_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1, "sketchlib.utils.mirror.GaussianMirrorReflection$$anon$1", ({
  dy: 1,
  dw: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT(uv) {
  this.aE = null;
  this.aE = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  dM: 1,
  dL: 1
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
$p.vd = (function(ref, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.F = (function(ref, value) {
  this.vd(ref, (+value));
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Double_$times$colon$", ({
  dN: 1,
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
$p.F = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().sL(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  dO: 1,
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
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$.prototype = $p;
$p.F = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$().v4(), ref, $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec2_Vec2Buffer$", ({
  dP: 1,
  E: 1
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
$p.ve = (function(ref, value) {
  var value$proxy2 = value.w;
  var value$proxy3 = Math.fround(value$proxy2);
  var offset$proxy5 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy5, value$proxy3, true);
  var value$proxy4 = value.A;
  var value$proxy5 = Math.fround(value$proxy4);
  var offset$proxy6 = ((4 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy6, value$proxy5, true);
  var value$proxy6 = value.u;
  var value$proxy7 = Math.fround(value$proxy6);
  var offset$proxy7 = ((8 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy7, value$proxy7, true);
});
$p.F = (function(ref, value) {
  this.ve(ref, value);
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec3_Vec4Buffer$", ({
  dQ: 1,
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
$p.F = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$().v6(), ref, $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec4_Vec4Buffer$", ({
  dR: 1,
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
$p.bO = (function(t) {
  return $ct_T2__O__O__(new $c_T2(), t.l, t.k);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  dU: 1,
  Y: 1
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
$p.bO = (function(t) {
  return new $c_T3(t.w, t.A, t.u);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  dV: 1,
  Y: 1
}));
var $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$;
function $m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$() {
  if ((!$n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$)) {
    $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$();
  }
  return $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FieldWriter$vec4Writer$() {
}
$p = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec4Writer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec4Writer$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FieldWriter$vec4Writer$() {
}
$h_Ltrivalibs_graphics_geometry_FieldWriter$vec4Writer$.prototype = $p;
$p.bO = (function(t) {
  return new $c_T4(t.ga, t.gb, t.gc, t.g9);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec4Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec4Writer$, "trivalibs.graphics.geometry.FieldWriter$vec4Writer$", ({
  dW: 1,
  Y: 1
}));
var $n_Ltrivalibs_graphics_geometry_FieldWriter$vec4Writer$;
function $m_Ltrivalibs_graphics_geometry_FieldWriter$vec4Writer$() {
  if ((!$n_Ltrivalibs_graphics_geometry_FieldWriter$vec4Writer$)) {
    $n_Ltrivalibs_graphics_geometry_FieldWriter$vec4Writer$ = new $c_Ltrivalibs_graphics_geometry_FieldWriter$vec4Writer$();
  }
  return $n_Ltrivalibs_graphics_geometry_FieldWriter$vec4Writer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayout$named(x$1) {
  this.j9 = null;
  this.j9 = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  e4: 1,
  e3: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.nN = null;
  this.nO = null;
  this.nN = x$1;
  this.nO = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.v3 = (function(t) {
  return $m_sr_Tuples$().lH(this.nN.bO(t.m(0)), this.nO.bO($m_sr_Tuples$().uR(t)));
});
$p.bO = (function(t) {
  return this.v3(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  e5: 1,
  aR: 1
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
$p.bO = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  e6: 1,
  aR: 1
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
  this.nQ = 0;
  this.nQ = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.bN = (function(t) {
  return t.m(this.nQ);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  eb: 1,
  e1: 1
}));
function $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($thiz, v, other) {
  return (((+$thiz.ag(v)) * (+$thiz.ag(other))) + ((+$thiz.ah(v)) * (+$thiz.ah(other))));
}
function $f_Ltrivalibs_graphics_math_Vec2Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.w * other.w) + (v.A * other.A)) + (v.u * other.u));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$() {
  this.nR = null;
  this.nS = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.ho = (function() {
  if ((!this.nS)) {
    this.nR = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.nS = true;
  }
  return this.nR;
});
$p.sH = (function(t, r, s) {
  var x = r.jb;
  var y = r.jc;
  var z = r.jd;
  var w = r.ja;
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
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.w), ((xy + wz) * s.w), ((xz - wy) * s.w), 0.0, ((xy - wz) * s.A), ((1.0 - (xx + zz)) * s.A), ((yz + wx) * s.A), 0.0, ((xz + wy) * s.u), ((yz - wx) * s.u), ((1.0 - (xx + yy)) * s.u), 0.0, t.w, t.A, t.u, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  eu: 1,
  eg: 1
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
  ey: 1,
  eA: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2$() {
  this.nT = null;
  this.nU = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2$.prototype = $p;
$p.ir = (function() {
  if ((!this.nU)) {
    this.nT = $m_Ltrivalibs_graphics_math_cpu_Vec2$();
    this.nU = true;
  }
  return this.nT;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2$, "trivalibs.graphics.math.cpu.Vec2$", ({
  eC: 1,
  ej: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec2$;
function $m_Ltrivalibs_graphics_math_cpu_Vec2$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec2$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec2$ = new $c_Ltrivalibs_graphics_math_cpu_Vec2$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3$() {
  this.nV = null;
  this.nW = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.Q = (function() {
  if ((!this.nW)) {
    this.nV = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.nW = true;
  }
  return this.nV;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  eF: 1,
  en: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4$() {
  this.nX = null;
  this.nY = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = $p;
$p.lO = (function() {
  if ((!this.nY)) {
    this.nX = new $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3();
    this.nY = true;
  }
  return this.nX;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$, "trivalibs.graphics.math.cpu.Vec4$", ({
  eI: 1,
  eq: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec4$;
function $m_Ltrivalibs_graphics_math_cpu_Vec4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec4$ = new $c_Ltrivalibs_graphics_math_cpu_Vec4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec4$;
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
  eM: 1,
  ei: 1
}));
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
  eP: 1,
  el: 1
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
  eS: 1,
  es: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13(f$2) {
  this.o5 = null;
  this.o5 = f$2;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13.prototype = $p;
$p.aK = (function(s) {
  return this.o5.g(s);
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13, "trivalibs.graphics.math.gpu.LeftScalar$$anon$13", ({
  eW: 1,
  eU: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr(name) {
  this.f = null;
  this.o6 = null;
  this.o6 = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(this, name);
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.P = (function(value) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return (((("  let " + this.o6) + " = ") + value.f) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  eX: 1,
  aX: 1
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
  f3: 1,
  Z: 1
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
$p.cf = (function(m, x$2, v, x$4, x$5) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.f) + " * ") + v.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  f4: 1,
  eh: 1
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
$p.ij = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("abs(" + a.f) + ")"));
});
$p.ql = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("fract(" + a.f) + ")"));
});
$p.st = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("exp(" + a.f) + ")"));
});
$p.uC = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("sin(" + a.f) + ")"));
});
$p.lR = (function(a, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + a.f) + ", ") + other.f) + ")"));
});
$p.jN = (function(a, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("max(" + a.f) + ", ") + other.f) + ")"));
});
$p.qa = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("saturate(" + a.f) + ")"));
});
$p.qk = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.f) + " * 2.0 - 1.0)"));
});
$p.lL = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.f) + " * 0.5 + 0.5)"));
});
$p.gt = (function(a, b, t) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + a.f) + ", ") + b.f) + ", ") + t.f) + ")"));
});
$p.ba = (function(a, edge0, edge1) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("smoothstep(" + edge0.f) + ", ") + edge1.f) + ", ") + a.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumExt_FloatExpr$", ({
  f5: 1,
  gl: 1
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
$p.bx = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " + ") + b.f) + ")"));
});
$p.ii = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " - ") + b.f) + ")"));
});
$p.b1 = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " * ") + b.f) + ")"));
});
$p.rr = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " / ") + b.f) + ")"));
});
$p.v0 = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(-" + a.f) + ")"));
});
$p.lw = (function(a, b) {
  return this.bx(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(b));
});
$p.c9 = (function(a, b) {
  return this.ii(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(b));
});
$p.S = (function(a, b) {
  return this.b1(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(b));
});
$p.jA = (function(a, b) {
  return this.rr(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(b));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumOps_FloatExpr$", ({
  f6: 1,
  gm: 1
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
$p.a9 = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".x"));
});
$p.W = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".y"));
});
$p.im = (function(v, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("dot(" + v.f) + ", ") + other.f) + ")"));
});
$p.sl = (function(v, other) {
  return this.im(v, $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().uX(other));
});
$p.t3 = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("length(" + v.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2BaseG_FloatExpr_Vec2Expr$", ({
  f7: 1,
  a0: 1
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
$p.q1 = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " + ") + other.f) + ")"));
});
$p.rB = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " + ") + scalar.f) + ")"));
});
$p.ru = (function(v, x$2, scalar) {
  return this.rB(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(scalar));
});
$p.r0 = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " - ") + other.f) + ")"));
});
$p.uP = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " - ") + scalar.f) + ")"));
});
$p.rt = (function(v, x$2, scalar) {
  return this.uP(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(scalar));
});
$p.tM = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " * ") + other.f) + ")"));
});
$p.tK = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " * ") + scalar.f) + ")"));
});
$p.rv = (function(v, x$2, scalar) {
  return this.tK(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(scalar));
});
$p.lJ = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " / ") + other.f) + ")"));
});
$p.sh = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " / ") + scalar.f) + ")"));
});
$p.lv = (function(v, x$2, scalar) {
  return this.sh(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(scalar));
});
$p.rx = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("abs(" + v.f) + ")"));
});
$p.sB = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("fract(" + v.f) + ")"));
});
$p.tF = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + v.f) + ", ") + other.f) + ")"));
});
$p.tD = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("max(" + v.f) + ", ") + other.f) + ")"));
});
$p.qj = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + v.f) + " * 2.0 - 1.0)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  f8: 1,
  ek: 1
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
$p.a9 = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".x"));
});
$p.W = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".y"));
});
$p.gx = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".z"));
});
$p.im = (function(v, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("dot(" + v.f) + ", ") + other.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3BaseG_FloatExpr_Vec3Expr$", ({
  f9: 1,
  aW: 1
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
$p.ly = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " + ") + other.f) + ")"));
});
$p.jV = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " - ") + other.f) + ")"));
});
$p.aJ = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " * ") + scalar.f) + ")"));
});
$p.go = (function(v, x$2, scalar) {
  return this.aJ(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(scalar));
});
$p.si = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " / ") + scalar.f) + ")"));
});
$p.sb = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("cross(" + v.f) + ", ") + other.f) + ")"));
});
$p.lT = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("normalize(" + v.f) + ")"));
});
$p.ss = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("exp(" + v.f) + ")"));
});
$p.tG = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + v.f) + ", ") + other.f) + ")"));
});
$p.tH = (function(v, x$2, b, t) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + v.f) + ", ") + b.f) + ", ") + t.f) + ")"));
});
$p.jL = (function(v, x$2, b, t) {
  return this.tH(v, x$2, $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().iO(b), t);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  fa: 1,
  eo: 1
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
$p.a9 = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".x"));
});
$p.W = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".y"));
});
$p.gx = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".z"));
});
$p.cg = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".w"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4BaseG_FloatExpr_Vec4Expr$", ({
  fb: 1,
  K: 1
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
$p.rC = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " + ") + other.f) + ")"));
});
$p.tL = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " * ") + scalar.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  fc: 1,
  er: 1
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
  this.aQ = null;
  this.kU = null;
  this.kV = null;
  this.kT = null;
  this.jf = null;
  this.aQ = canvas;
  this.kU = format;
  this.kV = null;
  this.kT = null;
  this.jf = [];
}
$p = $c_Ltrivalibs_graphics_painter_CanvasSurface.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_CanvasSurface;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_CanvasSurface() {
}
$h_Ltrivalibs_graphics_painter_CanvasSurface.prototype = $p;
$p.va = (function() {
  return (this.aQ.width | 0);
});
$p.sQ = (function() {
  return (this.aQ.height | 0);
});
$p.s8 = (function(painter) {
  var device = painter.h;
  this.kV = device.queue;
  var canvasContext = $m_Ltrivalibs_graphics_painter_WebGPU$().sJ(this.aQ);
  var f$proxy1 = this.kU;
  canvasContext.configure(({
    "device": device,
    "format": f$proxy1
  }));
  this.kT = canvasContext;
  this.aQ.width = (this.aQ.clientWidth | 0);
  this.aQ.height = (this.aQ.clientHeight | 0);
  var observer = new ResizeObserver(((entries$3) => {
    var entry = entries$3[0];
    var rw = (+entry.contentRect.width);
    var rh = (+entry.contentRect.height);
    if (((rw > 0.0) && (rh > 0.0))) {
      var w = $doubleToInt(rw);
      var h = $doubleToInt(rh);
      if (((w !== (this.aQ.width | 0)) || (h !== (this.aQ.height | 0)))) {
        this.aQ.width = w;
        this.aQ.height = h;
        var k = 0;
        while ((k < (this.jf.length | 0))) {
          (0, this.jf[k])(w, h);
          k = ((1 + k) | 0);
        }
      }
    }
  }));
  observer.observe(this.aQ);
});
$p.sc = (function() {
  return this.kT.getCurrentTexture();
});
$p.u6 = (function(encoder) {
  this.kV.submit([encoder.finish()]);
});
$p.tT = (function(cb) {
  this.jf.push(cb);
});
function $isArrayOf_Ltrivalibs_graphics_painter_CanvasSurface(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aZ)));
}
var $d_Ltrivalibs_graphics_painter_CanvasSurface = new $TypeData().i($c_Ltrivalibs_graphics_painter_CanvasSurface, "trivalibs.graphics.painter.CanvasSurface", ({
  aZ: 1,
  fu: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Layer(painter, shade) {
  this.oe = 0;
  this.od = null;
  this.h6 = null;
  this.U = null;
  this.l1 = null;
  this.ji = 0;
  this.hS = 0;
  this.b7 = null;
  this.jj = null;
  this.jh = null;
  this.h6 = painter;
  this.U = shade;
  $f_Ltrivalibs_graphics_painter_Bindable__$init$__V(this);
  this.l1 = null;
  this.ji = (-1);
  this.hS = (-1);
  this.b7 = [];
  this.jj = [];
  this.jh = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Layer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Layer;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Layer() {
}
$h_Ltrivalibs_graphics_painter_Layer.prototype = $p;
$p.il = (function() {
  return this.oe;
});
$p.lC = (function() {
  return this.od;
});
$p.jE = (function(x$1) {
  this.oe = x$1;
});
$p.lD = (function(x$1) {
  this.od = x$1;
});
$p.qW = (function() {
  return this.U;
});
$p.bM = (function() {
  return this.b7;
});
$p.bA = (function() {
  return this.jj;
});
$p.qJ = (function() {
  return ((this.U.js !== null) && (((this.jj.length | 0) === 0) || (this.jj[0] === null)));
});
$p.u4 = (function(panel) {
  if (this.qJ()) {
    var dict$proxy1 = panel.i3;
    var key$proxy1 = this.U.i6[0];
    if ((!(!(!(!(!dict$proxy1.hasOwnProperty(key$proxy1))))))) {
      var items = this.jh.hR;
      if (((items.length | 0) === 0)) {
        return true;
      } else {
        var any = false;
        var i = 0;
        while (((i < (items.length | 0)) && (!any))) {
          var pbs = items[i].bA();
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
$p.uw = (function(blendState, mipSource, mipTarget) {
  if ((blendState !== (void 0))) {
    this.l1 = blendState;
  }
  if ((mipSource !== (void 0))) {
    var v = (mipSource | 0);
    this.ji = v;
  }
  if ((mipTarget !== (void 0))) {
    var v$1 = (mipTarget | 0);
    this.hS = v$1;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Layer = new $TypeData().i($c_Ltrivalibs_graphics_painter_Layer, "trivalibs.graphics.painter.Layer", ({
  fo: 1,
  aY: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.oC = 0;
  this.oB = null;
  this.jv = null;
  this.i7 = null;
  this.Y = null;
  this.l9 = null;
  this.l8 = null;
  this.c7 = null;
  this.oD = null;
  this.la = null;
  this.jv = painter;
  this.i7 = form;
  this.Y = shade;
  $f_Ltrivalibs_graphics_painter_Bindable__$init$__V(this);
  this.l9 = "none";
  this.l8 = null;
  this.c7 = [];
  this.oD = [];
  this.la = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.il = (function() {
  return this.oC;
});
$p.lC = (function() {
  return this.oB;
});
$p.jE = (function(x$1) {
  this.oC = x$1;
});
$p.lD = (function(x$1) {
  this.oB = x$1;
});
$p.qW = (function() {
  return this.Y;
});
$p.bM = (function() {
  return this.c7;
});
$p.bA = (function() {
  return this.oD;
});
$p.ux = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.l9 = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.l8 = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  ft: 1,
  aY: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform(inner) {
  this.O = null;
  this.O = inner;
}
$p = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform() {
}
$h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = $p;
$p.t = (function() {
  return this.O.t();
});
var $d_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform, "trivalibs.graphics.shader.FragmentUniform$given_WGSLType_FragmentUniform", ({
  fF: 1,
  u: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.b8 = null;
  this.b8 = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.t = (function() {
  return this.b8.t();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  fG: 1,
  u: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.lj = null;
  this.lj = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.G = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.lj === "") ? name : ((this.lj + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  fO: 1,
  F: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.lk = null;
  this.lk = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.i = (function(name) {
  return ((this.lk === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.lk + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  fP: 1,
  F: 1
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
  fQ: 1,
  F: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.oJ = null;
  this.c8 = null;
  this.oJ = prefix;
  this.c8 = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.G = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.oJ + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  fS: 1,
  F: 1
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
$p.t = (function() {
  return "f32";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$, "trivalibs.graphics.shader.types$package$given_WGSLType_Float$", ({
  g4: 1,
  u: 1
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
$p.t = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  g5: 1,
  u: 1
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
$p.t = (function() {
  return "sampler";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$, "trivalibs.graphics.shader.types$package$given_WGSLType_Sampler$", ({
  g6: 1,
  u: 1
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
$p.t = (function() {
  return "vec2<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec2$", ({
  g7: 1,
  u: 1
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
$p.t = (function() {
  return "vec3<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec3$", ({
  g8: 1,
  u: 1
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
$p.t = (function() {
  return "vec4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec4$", ({
  g9: 1,
  u: 1
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
  this.k0 = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.r = (function() {
  return ((this.k0.Y ? "interface " : (this.k0.X ? "" : "class ")) + this.k0.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  b7: 1,
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
  bz: 1,
  bw: 1,
  bx: 1
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
    return $thiz.gy;
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gz;
      break;
    }
    case 1: {
      return $thiz.ci;
      break;
    }
    case 2: {
      return $thiz.cj;
      break;
    }
    case 3: {
      return $thiz.ck;
      break;
    }
    case 4: {
      return $thiz.cl;
      break;
    }
    case 5: {
      return $thiz.cm;
      break;
    }
    case 6: {
      return $thiz.cn;
      break;
    }
    case 7: {
      return $thiz.co;
      break;
    }
    case 8: {
      return $thiz.cp;
      break;
    }
    case 9: {
      return $thiz.ch;
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
      return $thiz.gA;
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
      return $thiz.cq;
      break;
    }
    case 10: {
      return $thiz.cr;
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
      return $thiz.gB;
      break;
    }
    case 1: {
      return $thiz.cD;
      break;
    }
    case 2: {
      return $thiz.cE;
      break;
    }
    case 3: {
      return $thiz.cF;
      break;
    }
    case 4: {
      return $thiz.cG;
      break;
    }
    case 5: {
      return $thiz.cH;
      break;
    }
    case 6: {
      return $thiz.cI;
      break;
    }
    case 7: {
      return $thiz.cJ;
      break;
    }
    case 8: {
      return $thiz.cK;
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
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 11)"));
    }
  }
}
function $f_s_Product13__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gC;
      break;
    }
    case 1: {
      return $thiz.cP;
      break;
    }
    case 2: {
      return $thiz.cQ;
      break;
    }
    case 3: {
      return $thiz.cR;
      break;
    }
    case 4: {
      return $thiz.cS;
      break;
    }
    case 5: {
      return $thiz.cT;
      break;
    }
    case 6: {
      return $thiz.cU;
      break;
    }
    case 7: {
      return $thiz.cV;
      break;
    }
    case 8: {
      return $thiz.cW;
      break;
    }
    case 9: {
      return $thiz.cL;
      break;
    }
    case 10: {
      return $thiz.cM;
      break;
    }
    case 11: {
      return $thiz.cN;
      break;
    }
    case 12: {
      return $thiz.cO;
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
      return $thiz.gD;
      break;
    }
    case 1: {
      return $thiz.d2;
      break;
    }
    case 2: {
      return $thiz.d3;
      break;
    }
    case 3: {
      return $thiz.d4;
      break;
    }
    case 4: {
      return $thiz.d5;
      break;
    }
    case 5: {
      return $thiz.d6;
      break;
    }
    case 6: {
      return $thiz.d7;
      break;
    }
    case 7: {
      return $thiz.d8;
      break;
    }
    case 8: {
      return $thiz.d9;
      break;
    }
    case 9: {
      return $thiz.cX;
      break;
    }
    case 10: {
      return $thiz.cY;
      break;
    }
    case 11: {
      return $thiz.cZ;
      break;
    }
    case 12: {
      return $thiz.d0;
      break;
    }
    case 13: {
      return $thiz.d1;
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
      return $thiz.gE;
      break;
    }
    case 1: {
      return $thiz.dg;
      break;
    }
    case 2: {
      return $thiz.dh;
      break;
    }
    case 3: {
      return $thiz.di;
      break;
    }
    case 4: {
      return $thiz.dj;
      break;
    }
    case 5: {
      return $thiz.dk;
      break;
    }
    case 6: {
      return $thiz.dl;
      break;
    }
    case 7: {
      return $thiz.dm;
      break;
    }
    case 8: {
      return $thiz.dn;
      break;
    }
    case 9: {
      return $thiz.da;
      break;
    }
    case 10: {
      return $thiz.db;
      break;
    }
    case 11: {
      return $thiz.dc;
      break;
    }
    case 12: {
      return $thiz.dd;
      break;
    }
    case 13: {
      return $thiz.de;
      break;
    }
    case 14: {
      return $thiz.df;
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
      return $thiz.gF;
      break;
    }
    case 1: {
      return $thiz.dw;
      break;
    }
    case 2: {
      return $thiz.dx;
      break;
    }
    case 3: {
      return $thiz.dy;
      break;
    }
    case 4: {
      return $thiz.dz;
      break;
    }
    case 5: {
      return $thiz.dA;
      break;
    }
    case 6: {
      return $thiz.dB;
      break;
    }
    case 7: {
      return $thiz.dC;
      break;
    }
    case 8: {
      return $thiz.dD;
      break;
    }
    case 9: {
      return $thiz.dp;
      break;
    }
    case 10: {
      return $thiz.dq;
      break;
    }
    case 11: {
      return $thiz.dr;
      break;
    }
    case 12: {
      return $thiz.ds;
      break;
    }
    case 13: {
      return $thiz.dt;
      break;
    }
    case 14: {
      return $thiz.du;
      break;
    }
    case 15: {
      return $thiz.dv;
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
      return $thiz.gG;
      break;
    }
    case 1: {
      return $thiz.dM;
      break;
    }
    case 2: {
      return $thiz.dN;
      break;
    }
    case 3: {
      return $thiz.dO;
      break;
    }
    case 4: {
      return $thiz.dP;
      break;
    }
    case 5: {
      return $thiz.dQ;
      break;
    }
    case 6: {
      return $thiz.dR;
      break;
    }
    case 7: {
      return $thiz.dS;
      break;
    }
    case 8: {
      return $thiz.dT;
      break;
    }
    case 9: {
      return $thiz.dE;
      break;
    }
    case 10: {
      return $thiz.dF;
      break;
    }
    case 11: {
      return $thiz.dG;
      break;
    }
    case 12: {
      return $thiz.dH;
      break;
    }
    case 13: {
      return $thiz.dI;
      break;
    }
    case 14: {
      return $thiz.dJ;
      break;
    }
    case 15: {
      return $thiz.dK;
      break;
    }
    case 16: {
      return $thiz.dL;
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
      return $thiz.gH;
      break;
    }
    case 1: {
      return $thiz.e3;
      break;
    }
    case 2: {
      return $thiz.e4;
      break;
    }
    case 3: {
      return $thiz.e5;
      break;
    }
    case 4: {
      return $thiz.e6;
      break;
    }
    case 5: {
      return $thiz.e7;
      break;
    }
    case 6: {
      return $thiz.e8;
      break;
    }
    case 7: {
      return $thiz.e9;
      break;
    }
    case 8: {
      return $thiz.ea;
      break;
    }
    case 9: {
      return $thiz.dU;
      break;
    }
    case 10: {
      return $thiz.dV;
      break;
    }
    case 11: {
      return $thiz.dW;
      break;
    }
    case 12: {
      return $thiz.dX;
      break;
    }
    case 13: {
      return $thiz.dY;
      break;
    }
    case 14: {
      return $thiz.dZ;
      break;
    }
    case 15: {
      return $thiz.e0;
      break;
    }
    case 16: {
      return $thiz.e1;
      break;
    }
    case 17: {
      return $thiz.e2;
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
      return $thiz.gI;
      break;
    }
    case 1: {
      return $thiz.el;
      break;
    }
    case 2: {
      return $thiz.em;
      break;
    }
    case 3: {
      return $thiz.en;
      break;
    }
    case 4: {
      return $thiz.eo;
      break;
    }
    case 5: {
      return $thiz.ep;
      break;
    }
    case 6: {
      return $thiz.eq;
      break;
    }
    case 7: {
      return $thiz.er;
      break;
    }
    case 8: {
      return $thiz.es;
      break;
    }
    case 9: {
      return $thiz.eb;
      break;
    }
    case 10: {
      return $thiz.ec;
      break;
    }
    case 11: {
      return $thiz.ed;
      break;
    }
    case 12: {
      return $thiz.ee;
      break;
    }
    case 13: {
      return $thiz.ef;
      break;
    }
    case 14: {
      return $thiz.eg;
      break;
    }
    case 15: {
      return $thiz.eh;
      break;
    }
    case 16: {
      return $thiz.ei;
      break;
    }
    case 17: {
      return $thiz.ej;
      break;
    }
    case 18: {
      return $thiz.ek;
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
      return $thiz.a0();
      break;
    }
    case 1: {
      return $thiz.a1();
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
      return $thiz.gJ;
      break;
    }
    case 1: {
      return $thiz.eD;
      break;
    }
    case 2: {
      return $thiz.eF;
      break;
    }
    case 3: {
      return $thiz.eG;
      break;
    }
    case 4: {
      return $thiz.eH;
      break;
    }
    case 5: {
      return $thiz.eI;
      break;
    }
    case 6: {
      return $thiz.eJ;
      break;
    }
    case 7: {
      return $thiz.eK;
      break;
    }
    case 8: {
      return $thiz.eL;
      break;
    }
    case 9: {
      return $thiz.et;
      break;
    }
    case 10: {
      return $thiz.eu;
      break;
    }
    case 11: {
      return $thiz.ev;
      break;
    }
    case 12: {
      return $thiz.ew;
      break;
    }
    case 13: {
      return $thiz.ex;
      break;
    }
    case 14: {
      return $thiz.ey;
      break;
    }
    case 15: {
      return $thiz.ez;
      break;
    }
    case 16: {
      return $thiz.eA;
      break;
    }
    case 17: {
      return $thiz.eB;
      break;
    }
    case 18: {
      return $thiz.eC;
      break;
    }
    case 19: {
      return $thiz.eE;
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
      return $thiz.gK;
      break;
    }
    case 1: {
      return $thiz.eW;
      break;
    }
    case 2: {
      return $thiz.eZ;
      break;
    }
    case 3: {
      return $thiz.f0;
      break;
    }
    case 4: {
      return $thiz.f1;
      break;
    }
    case 5: {
      return $thiz.f2;
      break;
    }
    case 6: {
      return $thiz.f3;
      break;
    }
    case 7: {
      return $thiz.f4;
      break;
    }
    case 8: {
      return $thiz.f5;
      break;
    }
    case 9: {
      return $thiz.eM;
      break;
    }
    case 10: {
      return $thiz.eN;
      break;
    }
    case 11: {
      return $thiz.eO;
      break;
    }
    case 12: {
      return $thiz.eP;
      break;
    }
    case 13: {
      return $thiz.eQ;
      break;
    }
    case 14: {
      return $thiz.eR;
      break;
    }
    case 15: {
      return $thiz.eS;
      break;
    }
    case 16: {
      return $thiz.eT;
      break;
    }
    case 17: {
      return $thiz.eU;
      break;
    }
    case 18: {
      return $thiz.eV;
      break;
    }
    case 19: {
      return $thiz.eX;
      break;
    }
    case 20: {
      return $thiz.eY;
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
      return $thiz.gL;
      break;
    }
    case 1: {
      return $thiz.fg;
      break;
    }
    case 2: {
      return $thiz.fk;
      break;
    }
    case 3: {
      return $thiz.fl;
      break;
    }
    case 4: {
      return $thiz.fm;
      break;
    }
    case 5: {
      return $thiz.fn;
      break;
    }
    case 6: {
      return $thiz.fo;
      break;
    }
    case 7: {
      return $thiz.fp;
      break;
    }
    case 8: {
      return $thiz.fq;
      break;
    }
    case 9: {
      return $thiz.f6;
      break;
    }
    case 10: {
      return $thiz.f7;
      break;
    }
    case 11: {
      return $thiz.f8;
      break;
    }
    case 12: {
      return $thiz.f9;
      break;
    }
    case 13: {
      return $thiz.fa;
      break;
    }
    case 14: {
      return $thiz.fb;
      break;
    }
    case 15: {
      return $thiz.fc;
      break;
    }
    case 16: {
      return $thiz.fd;
      break;
    }
    case 17: {
      return $thiz.fe;
      break;
    }
    case 18: {
      return $thiz.ff;
      break;
    }
    case 19: {
      return $thiz.fh;
      break;
    }
    case 20: {
      return $thiz.fi;
      break;
    }
    case 21: {
      return $thiz.fj;
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
      return $thiz.aL;
      break;
    }
    case 1: {
      return $thiz.b3;
      break;
    }
    case 2: {
      return $thiz.bb;
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
      return $thiz.aM;
      break;
    }
    case 1: {
      return $thiz.aN;
      break;
    }
    case 2: {
      return $thiz.aU;
      break;
    }
    case 3: {
      return $thiz.aV;
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
      return $thiz.gM;
      break;
    }
    case 1: {
      return $thiz.fr;
      break;
    }
    case 2: {
      return $thiz.fs;
      break;
    }
    case 3: {
      return $thiz.ft;
      break;
    }
    case 4: {
      return $thiz.fu;
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
      return $thiz.gN;
      break;
    }
    case 1: {
      return $thiz.fv;
      break;
    }
    case 2: {
      return $thiz.fw;
      break;
    }
    case 3: {
      return $thiz.fx;
      break;
    }
    case 4: {
      return $thiz.fy;
      break;
    }
    case 5: {
      return $thiz.fz;
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
      return $thiz.gO;
      break;
    }
    case 1: {
      return $thiz.fA;
      break;
    }
    case 2: {
      return $thiz.fB;
      break;
    }
    case 3: {
      return $thiz.fC;
      break;
    }
    case 4: {
      return $thiz.fD;
      break;
    }
    case 5: {
      return $thiz.fE;
      break;
    }
    case 6: {
      return $thiz.fF;
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
      return $thiz.gP;
      break;
    }
    case 1: {
      return $thiz.fG;
      break;
    }
    case 2: {
      return $thiz.fH;
      break;
    }
    case 3: {
      return $thiz.fI;
      break;
    }
    case 4: {
      return $thiz.fJ;
      break;
    }
    case 5: {
      return $thiz.fK;
      break;
    }
    case 6: {
      return $thiz.fL;
      break;
    }
    case 7: {
      return $thiz.fM;
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
      return $thiz.gQ;
      break;
    }
    case 1: {
      return $thiz.fN;
      break;
    }
    case 2: {
      return $thiz.fO;
      break;
    }
    case 3: {
      return $thiz.fP;
      break;
    }
    case 4: {
      return $thiz.fQ;
      break;
    }
    case 5: {
      return $thiz.fR;
      break;
    }
    case 6: {
      return $thiz.fS;
      break;
    }
    case 7: {
      return $thiz.fT;
      break;
    }
    case 8: {
      return $thiz.fU;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 8)"));
    }
  }
}
/** @constructor */
function $c_sc_IterableOps$WithFilter(self, p) {
  this.mn = null;
  this.mm = null;
  this.mn = self;
  this.mm = p;
}
$p = $c_sc_IterableOps$WithFilter.prototype = new $h_sc_WithFilter();
$p.constructor = $c_sc_IterableOps$WithFilter;
/** @constructor */
function $h_sc_IterableOps$WithFilter() {
}
$h_sc_IterableOps$WithFilter.prototype = $p;
$p.sz = (function() {
  return new $c_sc_View$Filter(this.mn, this.mm, false);
});
var $d_sc_IterableOps$WithFilter = new $TypeData().i($c_sc_IterableOps$WithFilter, "scala.collection.IterableOps$WithFilter", ({
  c7: 1,
  cm: 1,
  a: 1
}));
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).s7(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().bd : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.af();
  while ($thiz.T()) {
    if ((!those.T())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().c($thiz.L(), those.L()))) {
      return false;
    }
  }
  return (!those.T());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.bd = null;
  $n_sc_Iterator$ = this;
  this.bd = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  c8: 1,
  a: 1,
  aw: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cF)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.mw = null;
  this.mw = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.ik = (function() {
  return (0, this.mw)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  cO: 1,
  cN: 1,
  br: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.mx = null;
  this.mx = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.g = (function(x0) {
  return (0, this.mx)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  cQ: 1,
  cP: 1,
  h: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.my = null;
  this.my = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.q3 = (function(x0, x1) {
  return (0, this.my)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  cS: 1,
  cR: 1,
  bs: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.mz = null;
  this.mz = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.lz = (function(x0, x1, x2) {
  return (0, this.mz)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  cU: 1,
  cT: 1,
  bt: 1
}));
/** @constructor */
function $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(f) {
  this.mA = null;
  this.mA = f;
}
$p = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a;
/** @constructor */
function $h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a() {
}
$h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = $p;
$p.jB = (function(x0, x1, x2, x3) {
  return (0, this.mA)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  cW: 1,
  cV: 1,
  bu: 1
}));
/** @constructor */
function $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(f) {
  this.mB = null;
  this.mB = f;
}
$p = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = new $h_sr_AbstractFunction5();
$p.constructor = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078;
/** @constructor */
function $h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078() {
}
$h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = $p;
$p.rG = (function(x0, x1, x2, x3, x4) {
  return (0, this.mB)(x0, x1, x2, x3, x4);
});
var $d_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078 = new $TypeData().i($c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078, "scala.runtime.AbstractFunction5.$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078", ({
  cY: 1,
  cX: 1,
  bv: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.aq = null;
  this.aq = es;
  if ((es.b.length <= 22)) {
    $m_sr_Scala3RunTime$().rO();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.m = (function(n) {
  return this.aq.b[n];
});
$p.z = (function() {
  return this.aq.b.length;
});
$p.C = (function() {
  return "Tuple";
});
$p.r = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().vc(this.aq), "(", ",", ")");
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().s4(this, (-889275714), null);
});
$p.v = (function(that) {
  if ((that instanceof $c_sr_TupleXXL)) {
    if ((this.aq === that.aq)) {
      return true;
    } else {
      if ((this.aq.b.length !== that.aq.b.length)) {
        return false;
      }
      var i = 0;
      while ((i < this.aq.b.length)) {
        var $x_2 = $m_sr_BoxesRunTime$();
        var arr$3 = this.aq;
        var n = i;
        var $x_1 = arr$3.b[n];
        var arr$4 = that.aq;
        var n$1 = i;
        if ((!$x_2.c($x_1, arr$4.b[n$1]))) {
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aH)));
}
var $d_sr_TupleXXL = new $TypeData().i($c_sr_TupleXXL, "scala.runtime.TupleXXL", ({
  aH: 1,
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
$p.hn = (function(f) {
  return ((arg1$2) => f.g(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  d6: 1,
  da: 1,
  db: 1
}));
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
}
/** @constructor */
function $c_Lsketchlib_utils_room_Ring$() {
}
$p = $c_Lsketchlib_utils_room_Ring$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Ring$;
/** @constructor */
function $h_Lsketchlib_utils_room_Ring$() {
}
$h_Lsketchlib_utils_room_Ring$.prototype = $p;
$p.ug = (function(center, dir, length, thickness, facing, height) {
  var p$proxy1 = ((dir.l * dir.l) + (dir.k * dir.k));
  var len = (+Math.sqrt(p$proxy1));
  var d = new $c_Ltrivalibs_graphics_math_cpu_Vec2((0.5 * ((dir.l / len) * length)), (0.5 * ((dir.k / len) * length)));
  var n = new $c_Ltrivalibs_graphics_math_cpu_Vec2((((-d.k) / length) * thickness), ((d.l / length) * thickness));
  return new $c_Lsketchlib_utils_room_Ring([new $c_Ltrivalibs_graphics_math_cpu_Vec2(((center.l + d.l) + n.l), ((center.k + d.k) + n.k)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(((center.l + d.l) - n.l), ((center.k + d.k) - n.k)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(((center.l - d.l) - n.l), ((center.k - d.k) - n.k)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(((center.l - d.l) + n.l), ((center.k - d.k) + n.k))], facing, height);
});
var $d_Lsketchlib_utils_room_Ring$ = new $TypeData().i($c_Lsketchlib_utils_room_Ring$, "sketchlib.utils.room.Ring$", ({
  dF: 1,
  aF: 1,
  aG: 1
}));
var $n_Lsketchlib_utils_room_Ring$;
function $m_Lsketchlib_utils_room_Ring$() {
  if ((!$n_Lsketchlib_utils_room_Ring$)) {
    $n_Lsketchlib_utils_room_Ring$ = new $c_Lsketchlib_utils_room_Ring$();
  }
  return $n_Lsketchlib_utils_room_Ring$;
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
$p.g = (function(x) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec4((+x.aM), (+x.aN), (+x.aU), (+x.aV));
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3, "trivalibs.graphics.math.cpu.Vec4$$anon$3", ({
  eJ: 1,
  a8: 1,
  h: 1
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
$p.g = (function(x) {
  return $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an((+x));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  f2: 1,
  a8: 1,
  h: 1
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
        deps = ((rest[0] === (void 0)) ? $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$().rs() : rest[0]);
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
  b3: 1,
  b8: 1,
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
  b4: 1,
  a: 1,
  i: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  a3: 1,
  a: 1,
  i: 1,
  g: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.ay = null;
  this.ay = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.r = (function() {
  return this.ay;
});
$p.R = (function() {
  return this.ay.length;
});
$p.q9 = (function(index) {
  return this.ay.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  bh: 1,
  L: 1,
  b1: 1,
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
$p.am = (function() {
  return (-1);
});
$p.qd = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.lx = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.af = (function() {
  return this;
});
$p.io = (function(n) {
  return this.jU(n, (-1));
});
$p.jU = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.r = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.gs(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.am();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.am();
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
function $c_Lsketches_rooms_columns_Face(wall, leftArris, rightArris) {
  this.aY = null;
  this.gY = false;
  this.gZ = false;
  this.aY = wall;
  this.gY = leftArris;
  this.gZ = rightArris;
}
$p = $c_Lsketches_rooms_columns_Face.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_columns_Face;
/** @constructor */
function $h_Lsketches_rooms_columns_Face() {
}
$h_Lsketches_rooms_columns_Face.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().p(acc, 2181757);
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().V(this.aY));
  acc = $m_sr_Statics$().p(acc, (this.gY ? 1231 : 1237));
  acc = $m_sr_Statics$().p(acc, (this.gZ ? 1231 : 1237));
  return $m_sr_Statics$().ak(acc, 3);
});
$p.v = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_rooms_columns_Face)) {
    if (((this.gY === x$0.gY) && (this.gZ === x$0.gZ))) {
      var x = this.aY;
      var x$2 = x$0.aY;
      return ((x === null) ? (x$2 === null) : x.v(x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().ca(this);
});
$p.z = (function() {
  return 3;
});
$p.C = (function() {
  return "Face";
});
$p.m = (function(n) {
  switch (n) {
    case 0: {
      return this.aY;
      break;
    }
    case 1: {
      return this.gY;
      break;
    }
    case 2: {
      return this.gZ;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Lsketches_rooms_columns_Face(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aJ)));
}
var $d_Lsketches_rooms_columns_Face = new $TypeData().i($c_Lsketches_rooms_columns_Face, "sketches.rooms.columns.Face", ({
  aJ: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketchlib_utils_room_Beam(a, b, width, height, soffitY) {
  this.bt = null;
  this.bu = null;
  this.bf = 0.0;
  this.bG = 0.0;
  this.g3 = 0.0;
  this.bt = a;
  this.bu = b;
  this.bf = width;
  this.bG = height;
  this.g3 = soffitY;
}
$p = $c_Lsketchlib_utils_room_Beam.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Beam;
/** @constructor */
function $h_Lsketchlib_utils_room_Beam() {
}
$h_Lsketchlib_utils_room_Beam.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().p(acc, 2066383);
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().V(this.bt));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().V(this.bu));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().by(this.bf));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().by(this.bG));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().by(this.g3));
  return $m_sr_Statics$().ak(acc, 5);
});
$p.v = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketchlib_utils_room_Beam)) {
    if ((((this.bf === x$0.bf) && (this.bG === x$0.bG)) && (this.g3 === x$0.g3))) {
      var x = this.bt;
      var x$2 = x$0.bt;
      var $x_1 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$3 = this.bu;
      var x$4 = x$0.bu;
      return ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().ca(this);
});
$p.z = (function() {
  return 5;
});
$p.C = (function() {
  return "Beam";
});
$p.m = (function(n) {
  switch (n) {
    case 0: {
      return this.bt;
      break;
    }
    case 1: {
      return this.bu;
      break;
    }
    case 2: {
      return this.bf;
      break;
    }
    case 3: {
      return this.bG;
      break;
    }
    case 4: {
      return this.g3;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Lsketchlib_utils_room_Beam(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aK)));
}
var $d_Lsketchlib_utils_room_Beam = new $TypeData().i($c_Lsketchlib_utils_room_Beam, "sketchlib.utils.room.Beam", ({
  aK: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketchlib_utils_room_BeamFamily(dir, spacing, phase, width) {
  this.b6 = null;
  this.bX = 0.0;
  this.bW = 0.0;
  this.h0 = 0.0;
  this.b6 = dir;
  this.bX = spacing;
  this.bW = phase;
  this.h0 = width;
}
$p = $c_Lsketchlib_utils_room_BeamFamily.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_BeamFamily;
/** @constructor */
function $h_Lsketchlib_utils_room_BeamFamily() {
}
$h_Lsketchlib_utils_room_BeamFamily.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().p(acc, (-649758701));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().V(this.b6));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().by(this.bX));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().by(this.bW));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().by(this.h0));
  return $m_sr_Statics$().ak(acc, 4);
});
$p.v = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketchlib_utils_room_BeamFamily)) {
    if ((((this.bX === x$0.bX) && (this.bW === x$0.bW)) && (this.h0 === x$0.h0))) {
      var x = this.b6;
      var x$2 = x$0.b6;
      return ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().ca(this);
});
$p.z = (function() {
  return 4;
});
$p.C = (function() {
  return "BeamFamily";
});
$p.m = (function(n) {
  switch (n) {
    case 0: {
      return this.b6;
      break;
    }
    case 1: {
      return this.bX;
      break;
    }
    case 2: {
      return this.bW;
      break;
    }
    case 3: {
      return this.h0;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Lsketchlib_utils_room_BeamFamily(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aL)));
}
var $d_Lsketchlib_utils_room_BeamFamily = new $TypeData().i($c_Lsketchlib_utils_room_BeamFamily, "sketchlib.utils.room.BeamFamily", ({
  aL: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketchlib_utils_room_Edge(a, b, inwardNormal, arrisAtA) {
  this.a4 = null;
  this.aA = null;
  this.bH = null;
  this.bY = false;
  this.a4 = a;
  this.aA = b;
  this.bH = inwardNormal;
  this.bY = arrisAtA;
}
$p = $c_Lsketchlib_utils_room_Edge.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Edge;
/** @constructor */
function $h_Lsketchlib_utils_room_Edge() {
}
$h_Lsketchlib_utils_room_Edge.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().p(acc, 2154973);
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().V(this.a4));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().V(this.aA));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().V(this.bH));
  acc = $m_sr_Statics$().p(acc, (this.bY ? 1231 : 1237));
  return $m_sr_Statics$().ak(acc, 4);
});
$p.v = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketchlib_utils_room_Edge)) {
    if ((this.bY === x$0.bY)) {
      var x = this.a4;
      var x$2 = x$0.a4;
      var $x_2 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$3 = this.aA;
      var x$4 = x$0.aA;
      var $x_1 = ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$5 = this.bH;
      var x$6 = x$0.bH;
      return ((x$5 === null) ? (x$6 === null) : (x$5 === x$6));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().ca(this);
});
$p.z = (function() {
  return 4;
});
$p.C = (function() {
  return "Edge";
});
$p.m = (function(n) {
  switch (n) {
    case 0: {
      return this.a4;
      break;
    }
    case 1: {
      return this.aA;
      break;
    }
    case 2: {
      return this.bH;
      break;
    }
    case 3: {
      return this.bY;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Lsketchlib_utils_room_Edge(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aM)));
}
var $d_Lsketchlib_utils_room_Edge = new $TypeData().i($c_Lsketchlib_utils_room_Edge, "sketchlib.utils.room.Edge", ({
  aM: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketchlib_utils_room_Footprint(rings) {
  this.g6 = null;
  this.g6 = rings;
}
$p = $c_Lsketchlib_utils_room_Footprint.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Footprint;
/** @constructor */
function $h_Lsketchlib_utils_room_Footprint() {
}
$h_Lsketchlib_utils_room_Footprint.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, (-905123115), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Lsketchlib_utils_room_Footprint) && $m_sr_BoxesRunTime$().c(this.g6, x$0.g6)));
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().ca(this);
});
$p.z = (function() {
  return 1;
});
$p.C = (function() {
  return "Footprint";
});
$p.m = (function(n) {
  if ((n === 0)) {
    return this.g6;
  }
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
function $isArrayOf_Lsketchlib_utils_room_Footprint(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aN)));
}
var $d_Lsketchlib_utils_room_Footprint = new $TypeData().i($c_Lsketchlib_utils_room_Footprint, "sketchlib.utils.room.Footprint", ({
  aN: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketchlib_utils_room_Ring(points, facing, height) {
  this.bg = null;
  this.h1 = 0.0;
  this.hK = 0.0;
  this.bg = points;
  this.h1 = facing;
  this.hK = height;
}
$p = $c_Lsketchlib_utils_room_Ring.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Ring;
/** @constructor */
function $h_Lsketchlib_utils_room_Ring() {
}
$h_Lsketchlib_utils_room_Ring.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().p(acc, 2547280);
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().V(this.bg));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().V(this.h1));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().by(this.hK));
  return $m_sr_Statics$().ak(acc, 3);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Lsketchlib_utils_room_Ring) && (((this.hK === x$0.hK) && $m_sr_BoxesRunTime$().c(this.bg, x$0.bg)) && (this.h1 === x$0.h1))));
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().ca(this);
});
$p.z = (function() {
  return 3;
});
$p.C = (function() {
  return "Ring";
});
$p.m = (function(n) {
  switch (n) {
    case 0: {
      return this.bg;
      break;
    }
    case 1: {
      return this.h1;
      break;
    }
    case 2: {
      return this.hK;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Lsketchlib_utils_room_Ring(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aO)));
}
var $d_Lsketchlib_utils_room_Ring = new $TypeData().i($c_Lsketchlib_utils_room_Ring, "sketchlib.utils.room.Ring", ({
  aO: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketchlib_utils_room_Wall(center, width, height, inwardNormal) {
  this.h2 = null;
  this.aB = 0.0;
  this.g7 = 0.0;
  this.bZ = null;
  this.h2 = center;
  this.aB = width;
  this.g7 = height;
  this.bZ = inwardNormal;
}
$p = $c_Lsketchlib_utils_room_Wall.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Wall;
/** @constructor */
function $h_Lsketchlib_utils_room_Wall() {
}
$h_Lsketchlib_utils_room_Wall.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().p(acc, 2688490);
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().V(this.h2));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().by(this.aB));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().by(this.g7));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().V(this.bZ));
  return $m_sr_Statics$().ak(acc, 4);
});
$p.v = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketchlib_utils_room_Wall)) {
    if (((this.aB === x$0.aB) && (this.g7 === x$0.g7))) {
      var x = this.h2;
      var x$2 = x$0.h2;
      var $x_1 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$3 = this.bZ;
      var x$4 = x$0.bZ;
      return ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().ca(this);
});
$p.z = (function() {
  return 4;
});
$p.C = (function() {
  return "Wall";
});
$p.m = (function(n) {
  switch (n) {
    case 0: {
      return this.h2;
      break;
    }
    case 1: {
      return this.aB;
      break;
    }
    case 2: {
      return this.g7;
      break;
    }
    case 3: {
      return this.bZ;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Lsketchlib_utils_room_Wall(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aP)));
}
var $d_Lsketchlib_utils_room_Wall = new $TypeData().i($c_Lsketchlib_utils_room_Wall, "sketchlib.utils.room.Wall", ({
  aP: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$.prototype = $p;
$p.is = (function(m) {
  return m.kx;
});
$p.it = (function(m) {
  return m.ky;
});
$p.iu = (function(m) {
  return m.kz;
});
$p.iv = (function(m) {
  return m.kA;
});
$p.iw = (function(m) {
  return m.kB;
});
$p.ix = (function(m) {
  return m.kC;
});
$p.iy = (function(m) {
  return m.kD;
});
$p.iz = (function(m) {
  return m.kE;
});
$p.iA = (function(m) {
  return m.kF;
});
$p.iB = (function(m) {
  return m.kG;
});
$p.iC = (function(m) {
  return m.kH;
});
$p.iD = (function(m) {
  return m.kI;
});
$p.iE = (function(m) {
  return m.kJ;
});
$p.iF = (function(m) {
  return m.kK;
});
$p.iG = (function(m) {
  return m.kL;
});
$p.iH = (function(m) {
  return m.kM;
});
$p.qt = (function(m, v) {
  m.kx = v;
});
$p.qu = (function(m, v) {
  m.ky = v;
});
$p.qv = (function(m, v) {
  m.kz = v;
});
$p.qw = (function(m, v) {
  m.kA = v;
});
$p.qx = (function(m, v) {
  m.kB = v;
});
$p.qy = (function(m, v) {
  m.kC = v;
});
$p.qz = (function(m, v) {
  m.kD = v;
});
$p.qA = (function(m, v) {
  m.kE = v;
});
$p.qB = (function(m, v) {
  m.kF = v;
});
$p.qC = (function(m, v) {
  m.kG = v;
});
$p.qD = (function(m, v) {
  m.kH = v;
});
$p.qE = (function(m, v) {
  m.kI = v;
});
$p.qF = (function(m, v) {
  m.kJ = v;
});
$p.qG = (function(m, v) {
  m.kK = v;
});
$p.qH = (function(m, v) {
  m.kL = v;
});
$p.qI = (function(m, v) {
  m.kM = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  ev: 1,
  Z: 1,
  aS: 1,
  aT: 1
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
$p.ag = (function(v) {
  return v.jb;
});
$p.ah = (function(v) {
  return v.jc;
});
$p.bq = (function(v) {
  return v.jd;
});
$p.bp = (function(v) {
  return v.ja;
});
$p.hr = (function(v, value) {
  v.jb = value;
});
$p.hs = (function(v, value) {
  v.jc = value;
});
$p.mb = (function(v, value) {
  v.jd = value;
});
$p.m6 = (function(v, value) {
  v.ja = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  ez: 1,
  K: 1,
  a1: 1,
  a2: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$.prototype = $p;
$p.ag = (function(v) {
  return v.l;
});
$p.ah = (function(v) {
  return v.k;
});
$p.hr = (function(v, value) {
  v.l = value;
});
$p.hs = (function(v, value) {
  v.k = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$, "trivalibs.graphics.math.cpu.Vec2$given_Vec2Mutable_Vec2$", ({
  eD: 1,
  a0: 1,
  aU: 1,
  aV: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
function $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$ = new $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
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
  eG: 1,
  aW: 1,
  em: 1,
  ep: 1
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
$p.ag = (function(v) {
  return v.ga;
});
$p.ah = (function(v) {
  return v.gb;
});
$p.bq = (function(v) {
  return v.gc;
});
$p.bp = (function(v) {
  return v.g9;
});
$p.hr = (function(v, value) {
  v.ga = value;
});
$p.hs = (function(v, value) {
  v.gb = value;
});
$p.mb = (function(v, value) {
  v.gc = value;
});
$p.m6 = (function(v, value) {
  v.g9 = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$, "trivalibs.graphics.math.cpu.Vec4$given_Vec4Mutable_Vec4$", ({
  eK: 1,
  K: 1,
  a1: 1,
  a2: 1
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
$p.t6 = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.t8 = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.ta = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.tc = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.te = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.tg = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.ti = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.tk = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.tm = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.to = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.tq = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.ts = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.tu = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.tw = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.ty = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.tA = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.t7 = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.t9 = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.tb = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.td = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.tf = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.th = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.tj = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.tl = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.tn = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.tp = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.tr = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.tt = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.tv = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.tx = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.tz = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.tB = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.is = (function(m) {
  return this.t6(m);
});
$p.it = (function(m) {
  return this.t8(m);
});
$p.iu = (function(m) {
  return this.ta(m);
});
$p.iv = (function(m) {
  return this.tc(m);
});
$p.iw = (function(m) {
  return this.te(m);
});
$p.ix = (function(m) {
  return this.tg(m);
});
$p.iy = (function(m) {
  return this.ti(m);
});
$p.iz = (function(m) {
  return this.tk(m);
});
$p.iA = (function(m) {
  return this.tm(m);
});
$p.iB = (function(m) {
  return this.to(m);
});
$p.iC = (function(m) {
  return this.tq(m);
});
$p.iD = (function(m) {
  return this.ts(m);
});
$p.iE = (function(m) {
  return this.tu(m);
});
$p.iF = (function(m) {
  return this.tw(m);
});
$p.iG = (function(m) {
  return this.ty(m);
});
$p.iH = (function(m) {
  return this.tA(m);
});
$p.qt = (function(m, v) {
  this.t7(m, v);
});
$p.qu = (function(m, v) {
  this.t9(m, v);
});
$p.qv = (function(m, v) {
  this.tb(m, v);
});
$p.qw = (function(m, v) {
  this.td(m, v);
});
$p.qx = (function(m, v) {
  this.tf(m, v);
});
$p.qy = (function(m, v) {
  this.th(m, v);
});
$p.qz = (function(m, v) {
  this.tj(m, v);
});
$p.qA = (function(m, v) {
  this.tl(m, v);
});
$p.qB = (function(m, v) {
  this.tn(m, v);
});
$p.qC = (function(m, v) {
  this.tp(m, v);
});
$p.qD = (function(m, v) {
  this.tr(m, v);
});
$p.qE = (function(m, v) {
  this.tt(m, v);
});
$p.qF = (function(m, v) {
  this.tv(m, v);
});
$p.qG = (function(m, v) {
  this.tx(m, v);
});
$p.qH = (function(m, v) {
  this.tz(m, v);
});
$p.qI = (function(m, v) {
  this.tB(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  eN: 1,
  Z: 1,
  aS: 1,
  aT: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
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
$p.m7 = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.m9 = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.m8 = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (v.off | 0);
  v.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.ma = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy4 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy4, value$proxy2, true);
});
$p.ag = (function(v) {
  return this.m7(v);
});
$p.ah = (function(v) {
  return this.m9(v);
});
$p.hr = (function(v, value) {
  this.m8(v, value);
});
$p.hs = (function(v, value) {
  this.ma(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$vec2MutableBuffer$", ({
  eQ: 1,
  a0: 1,
  aU: 1,
  aV: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
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
$p.m7 = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.m9 = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.vg = (function(v) {
  var offset$proxy3 = ((8 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy3, true));
});
$p.v7 = (function(v) {
  var offset$proxy4 = ((12 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy4, true));
});
$p.m8 = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy5 = (v.off | 0);
  v.dv.setFloat32(offset$proxy5, value$proxy1, true);
});
$p.ma = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy6 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy6, value$proxy2, true);
});
$p.vh = (function(v, value) {
  var value$proxy3 = Math.fround(value);
  var offset$proxy7 = ((8 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy7, value$proxy3, true);
});
$p.v8 = (function(v, value) {
  var value$proxy4 = Math.fround(value);
  var offset$proxy8 = ((12 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy8, value$proxy4, true);
});
$p.ag = (function(v) {
  return this.m7(v);
});
$p.ah = (function(v) {
  return this.m9(v);
});
$p.bq = (function(v) {
  return this.vg(v);
});
$p.bp = (function(v) {
  return this.v7(v);
});
$p.hr = (function(v, value) {
  this.m8(v, value);
});
$p.hs = (function(v, value) {
  this.ma(v, value);
});
$p.mb = (function(v, value) {
  this.vh(v, value);
});
$p.m6 = (function(v, value) {
  this.v8(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$vec4MutableBuffer$", ({
  eT: 1,
  K: 1,
  a1: 1,
  a2: 1
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
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.i8, f$proxy1, g$proxy1];
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
  this.ab = null;
  this.aa = null;
  this.i8 = null;
  this.ab = vertexBody;
  this.aa = fragmentBody;
  this.i8 = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, (-1488826029), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.ab === x$0.ab) && (this.aa === x$0.aa)) && (this.i8 === x$0.i8))));
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().ca(this);
});
$p.z = (function() {
  return 3;
});
$p.C = (function() {
  return "ShaderDef";
});
$p.m = (function(n) {
  switch (n) {
    case 0: {
      return this.ab;
      break;
    }
    case 1: {
      return this.aa;
      break;
    }
    case 2: {
      return this.i8;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Ltrivalibs_graphics_shader_ShaderDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b0)));
}
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  b0: 1,
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
  b2: 1,
  k: 1,
  j: 1,
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
  b5: 1,
  v: 1,
  a: 1,
  i: 1,
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
  a5: 1,
  k: 1,
  j: 1,
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
  ba: 1,
  k: 1,
  j: 1,
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
  bc: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.be)));
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
  bf: 1,
  v: 1,
  a: 1,
  i: 1,
  g: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  bj: 1,
  k: 1,
  j: 1,
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
  bo: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.mg)) {
    if (($thiz.iP === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.iP;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.k0.N));
      try {
        var $x_1 = ((($thiz.iP + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.mf = $x_1;
    $thiz.mg = true;
  }
  return $thiz.mf;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.iP = null;
    this.mf = null;
    this.mg = false;
    this.iP = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  jJ() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  by: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.ht = 0;
  this.mi = 0;
  this.mh = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.mh = outer;
  this.ht = 0;
  this.mi = outer.z();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.T = (function() {
  return (this.ht < this.mi);
});
$p.L = (function() {
  var result = this.mh.m(this.ht);
  this.ht = ((1 + this.ht) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bA: 1,
  l: 1,
  d: 1,
  e: 1,
  p: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.gy = null;
  this.gy = _1;
}
$p = $c_T1.prototype = new $h_O();
$p.constructor = $c_T1;
/** @constructor */
function $h_T1() {
}
$h_T1.prototype = $p;
$p.z = (function() {
  return 1;
});
$p.m = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.r = (function() {
  return (("(" + this.gy) + ")");
});
$p.C = (function() {
  return "Tuple1";
});
$p.E = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, 1228477340, true);
});
$p.v = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().c(this.gy, x$1.gy)));
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  aa: 1,
  bB: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.gz = null;
  this.ci = null;
  this.cj = null;
  this.ck = null;
  this.cl = null;
  this.cm = null;
  this.cn = null;
  this.co = null;
  this.cp = null;
  this.ch = null;
  this.gz = _1;
  this.ci = _2;
  this.cj = _3;
  this.ck = _4;
  this.cl = _5;
  this.cm = _6;
  this.cn = _7;
  this.co = _8;
  this.cp = _9;
  this.ch = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 10;
});
$p.m = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, 2104595240, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().c(this.gz, x$0.gz) && $m_sr_BoxesRunTime$().c(this.ci, x$0.ci)) && $m_sr_BoxesRunTime$().c(this.cj, x$0.cj)) && $m_sr_BoxesRunTime$().c(this.ck, x$0.ck)) && $m_sr_BoxesRunTime$().c(this.cl, x$0.cl)) && $m_sr_BoxesRunTime$().c(this.cm, x$0.cm)) && $m_sr_BoxesRunTime$().c(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().c(this.co, x$0.co)) && $m_sr_BoxesRunTime$().c(this.cp, x$0.cp)) && $m_sr_BoxesRunTime$().c(this.ch, x$0.ch))));
});
$p.C = (function() {
  return "Tuple10";
});
$p.r = (function() {
  return (((((((((((((((((((("(" + this.gz) + ",") + this.ci) + ",") + this.cj) + ",") + this.ck) + ",") + this.cl) + ",") + this.cm) + ",") + this.cn) + ",") + this.co) + ",") + this.cp) + ",") + this.ch) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  ab: 1,
  b: 1,
  c: 1,
  bC: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.gA = null;
  this.cs = null;
  this.ct = null;
  this.cu = null;
  this.cv = null;
  this.cw = null;
  this.cx = null;
  this.cy = null;
  this.cz = null;
  this.cq = null;
  this.cr = null;
  this.gA = _1;
  this.cs = _2;
  this.ct = _3;
  this.cu = _4;
  this.cv = _5;
  this.cw = _6;
  this.cx = _7;
  this.cy = _8;
  this.cz = _9;
  this.cq = _10;
  this.cr = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 11;
});
$p.m = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, 838406606, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().c(this.gA, x$0.gA) && $m_sr_BoxesRunTime$().c(this.cs, x$0.cs)) && $m_sr_BoxesRunTime$().c(this.ct, x$0.ct)) && $m_sr_BoxesRunTime$().c(this.cu, x$0.cu)) && $m_sr_BoxesRunTime$().c(this.cv, x$0.cv)) && $m_sr_BoxesRunTime$().c(this.cw, x$0.cw)) && $m_sr_BoxesRunTime$().c(this.cx, x$0.cx)) && $m_sr_BoxesRunTime$().c(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().c(this.cz, x$0.cz)) && $m_sr_BoxesRunTime$().c(this.cq, x$0.cq)) && $m_sr_BoxesRunTime$().c(this.cr, x$0.cr))));
});
$p.C = (function() {
  return "Tuple11";
});
$p.r = (function() {
  return (((((((((((((((((((((("(" + this.gA) + ",") + this.cs) + ",") + this.ct) + ",") + this.cu) + ",") + this.cv) + ",") + this.cw) + ",") + this.cx) + ",") + this.cy) + ",") + this.cz) + ",") + this.cq) + ",") + this.cr) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  ac: 1,
  b: 1,
  c: 1,
  bD: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.gB = null;
  this.cD = null;
  this.cE = null;
  this.cF = null;
  this.cG = null;
  this.cH = null;
  this.cI = null;
  this.cJ = null;
  this.cK = null;
  this.cA = null;
  this.cB = null;
  this.cC = null;
  this.gB = _1;
  this.cD = _2;
  this.cE = _3;
  this.cF = _4;
  this.cG = _5;
  this.cH = _6;
  this.cI = _7;
  this.cJ = _8;
  this.cK = _9;
  this.cA = _10;
  this.cB = _11;
  this.cC = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 12;
});
$p.m = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, (-1964145863), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().c(this.gB, x$0.gB) && $m_sr_BoxesRunTime$().c(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().c(this.cE, x$0.cE)) && $m_sr_BoxesRunTime$().c(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().c(this.cG, x$0.cG)) && $m_sr_BoxesRunTime$().c(this.cH, x$0.cH)) && $m_sr_BoxesRunTime$().c(this.cI, x$0.cI)) && $m_sr_BoxesRunTime$().c(this.cJ, x$0.cJ)) && $m_sr_BoxesRunTime$().c(this.cK, x$0.cK)) && $m_sr_BoxesRunTime$().c(this.cA, x$0.cA)) && $m_sr_BoxesRunTime$().c(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().c(this.cC, x$0.cC))));
});
$p.C = (function() {
  return "Tuple12";
});
$p.r = (function() {
  return (((((((((((((((((((((((("(" + this.gB) + ",") + this.cD) + ",") + this.cE) + ",") + this.cF) + ",") + this.cG) + ",") + this.cH) + ",") + this.cI) + ",") + this.cJ) + ",") + this.cK) + ",") + this.cA) + ",") + this.cB) + ",") + this.cC) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  ad: 1,
  b: 1,
  c: 1,
  bE: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.gC = null;
  this.cP = null;
  this.cQ = null;
  this.cR = null;
  this.cS = null;
  this.cT = null;
  this.cU = null;
  this.cV = null;
  this.cW = null;
  this.cL = null;
  this.cM = null;
  this.cN = null;
  this.cO = null;
  this.gC = _1;
  this.cP = _2;
  this.cQ = _3;
  this.cR = _4;
  this.cS = _5;
  this.cT = _6;
  this.cU = _7;
  this.cV = _8;
  this.cW = _9;
  this.cL = _10;
  this.cM = _11;
  this.cN = _12;
  this.cO = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 13;
});
$p.m = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, 1224168367, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().c(this.gC, x$0.gC) && $m_sr_BoxesRunTime$().c(this.cP, x$0.cP)) && $m_sr_BoxesRunTime$().c(this.cQ, x$0.cQ)) && $m_sr_BoxesRunTime$().c(this.cR, x$0.cR)) && $m_sr_BoxesRunTime$().c(this.cS, x$0.cS)) && $m_sr_BoxesRunTime$().c(this.cT, x$0.cT)) && $m_sr_BoxesRunTime$().c(this.cU, x$0.cU)) && $m_sr_BoxesRunTime$().c(this.cV, x$0.cV)) && $m_sr_BoxesRunTime$().c(this.cW, x$0.cW)) && $m_sr_BoxesRunTime$().c(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().c(this.cM, x$0.cM)) && $m_sr_BoxesRunTime$().c(this.cN, x$0.cN)) && $m_sr_BoxesRunTime$().c(this.cO, x$0.cO))));
});
$p.C = (function() {
  return "Tuple13";
});
$p.r = (function() {
  return (((((((((((((((((((((((((("(" + this.gC) + ",") + this.cP) + ",") + this.cQ) + ",") + this.cR) + ",") + this.cS) + ",") + this.cT) + ",") + this.cU) + ",") + this.cV) + ",") + this.cW) + ",") + this.cL) + ",") + this.cM) + ",") + this.cN) + ",") + this.cO) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  ae: 1,
  b: 1,
  c: 1,
  bF: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.gD = null;
  this.d2 = null;
  this.d3 = null;
  this.d4 = null;
  this.d5 = null;
  this.d6 = null;
  this.d7 = null;
  this.d8 = null;
  this.d9 = null;
  this.cX = null;
  this.cY = null;
  this.cZ = null;
  this.d0 = null;
  this.d1 = null;
  this.gD = _1;
  this.d2 = _2;
  this.d3 = _3;
  this.d4 = _4;
  this.d5 = _5;
  this.d6 = _6;
  this.d7 = _7;
  this.d8 = _8;
  this.d9 = _9;
  this.cX = _10;
  this.cY = _11;
  this.cZ = _12;
  this.d0 = _13;
  this.d1 = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 14;
});
$p.m = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, 147759069, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().c(this.gD, x$0.gD) && $m_sr_BoxesRunTime$().c(this.d2, x$0.d2)) && $m_sr_BoxesRunTime$().c(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().c(this.d4, x$0.d4)) && $m_sr_BoxesRunTime$().c(this.d5, x$0.d5)) && $m_sr_BoxesRunTime$().c(this.d6, x$0.d6)) && $m_sr_BoxesRunTime$().c(this.d7, x$0.d7)) && $m_sr_BoxesRunTime$().c(this.d8, x$0.d8)) && $m_sr_BoxesRunTime$().c(this.d9, x$0.d9)) && $m_sr_BoxesRunTime$().c(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().c(this.cY, x$0.cY)) && $m_sr_BoxesRunTime$().c(this.cZ, x$0.cZ)) && $m_sr_BoxesRunTime$().c(this.d0, x$0.d0)) && $m_sr_BoxesRunTime$().c(this.d1, x$0.d1))));
});
$p.C = (function() {
  return "Tuple14";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((("(" + this.gD) + ",") + this.d2) + ",") + this.d3) + ",") + this.d4) + ",") + this.d5) + ",") + this.d6) + ",") + this.d7) + ",") + this.d8) + ",") + this.d9) + ",") + this.cX) + ",") + this.cY) + ",") + this.cZ) + ",") + this.d0) + ",") + this.d1) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  af: 1,
  b: 1,
  c: 1,
  bG: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.gE = null;
  this.dg = null;
  this.dh = null;
  this.di = null;
  this.dj = null;
  this.dk = null;
  this.dl = null;
  this.dm = null;
  this.dn = null;
  this.da = null;
  this.db = null;
  this.dc = null;
  this.dd = null;
  this.de = null;
  this.df = null;
  this.gE = _1;
  this.dg = _2;
  this.dh = _3;
  this.di = _4;
  this.dj = _5;
  this.dk = _6;
  this.dl = _7;
  this.dm = _8;
  this.dn = _9;
  this.da = _10;
  this.db = _11;
  this.dc = _12;
  this.dd = _13;
  this.de = _14;
  this.df = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 15;
});
$p.m = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, 1834180931, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().c(this.gE, x$0.gE) && $m_sr_BoxesRunTime$().c(this.dg, x$0.dg)) && $m_sr_BoxesRunTime$().c(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().c(this.di, x$0.di)) && $m_sr_BoxesRunTime$().c(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().c(this.dk, x$0.dk)) && $m_sr_BoxesRunTime$().c(this.dl, x$0.dl)) && $m_sr_BoxesRunTime$().c(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().c(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().c(this.da, x$0.da)) && $m_sr_BoxesRunTime$().c(this.db, x$0.db)) && $m_sr_BoxesRunTime$().c(this.dc, x$0.dc)) && $m_sr_BoxesRunTime$().c(this.dd, x$0.dd)) && $m_sr_BoxesRunTime$().c(this.de, x$0.de)) && $m_sr_BoxesRunTime$().c(this.df, x$0.df))));
});
$p.C = (function() {
  return "Tuple15";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((("(" + this.gE) + ",") + this.dg) + ",") + this.dh) + ",") + this.di) + ",") + this.dj) + ",") + this.dk) + ",") + this.dl) + ",") + this.dm) + ",") + this.dn) + ",") + this.da) + ",") + this.db) + ",") + this.dc) + ",") + this.dd) + ",") + this.de) + ",") + this.df) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  ag: 1,
  b: 1,
  c: 1,
  bH: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.gF = null;
  this.dw = null;
  this.dx = null;
  this.dy = null;
  this.dz = null;
  this.dA = null;
  this.dB = null;
  this.dC = null;
  this.dD = null;
  this.dp = null;
  this.dq = null;
  this.dr = null;
  this.ds = null;
  this.dt = null;
  this.du = null;
  this.dv = null;
  this.gF = _1;
  this.dw = _2;
  this.dx = _3;
  this.dy = _4;
  this.dz = _5;
  this.dA = _6;
  this.dB = _7;
  this.dC = _8;
  this.dD = _9;
  this.dp = _10;
  this.dq = _11;
  this.dr = _12;
  this.ds = _13;
  this.dt = _14;
  this.du = _15;
  this.dv = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 16;
});
$p.m = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, 499793902, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().c(this.gF, x$0.gF) && $m_sr_BoxesRunTime$().c(this.dw, x$0.dw)) && $m_sr_BoxesRunTime$().c(this.dx, x$0.dx)) && $m_sr_BoxesRunTime$().c(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().c(this.dz, x$0.dz)) && $m_sr_BoxesRunTime$().c(this.dA, x$0.dA)) && $m_sr_BoxesRunTime$().c(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().c(this.dC, x$0.dC)) && $m_sr_BoxesRunTime$().c(this.dD, x$0.dD)) && $m_sr_BoxesRunTime$().c(this.dp, x$0.dp)) && $m_sr_BoxesRunTime$().c(this.dq, x$0.dq)) && $m_sr_BoxesRunTime$().c(this.dr, x$0.dr)) && $m_sr_BoxesRunTime$().c(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().c(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().c(this.du, x$0.du)) && $m_sr_BoxesRunTime$().c(this.dv, x$0.dv))));
});
$p.C = (function() {
  return "Tuple16";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.gF) + ",") + this.dw) + ",") + this.dx) + ",") + this.dy) + ",") + this.dz) + ",") + this.dA) + ",") + this.dB) + ",") + this.dC) + ",") + this.dD) + ",") + this.dp) + ",") + this.dq) + ",") + this.dr) + ",") + this.ds) + ",") + this.dt) + ",") + this.du) + ",") + this.dv) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  ah: 1,
  b: 1,
  c: 1,
  bI: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.gG = null;
  this.dM = null;
  this.dN = null;
  this.dO = null;
  this.dP = null;
  this.dQ = null;
  this.dR = null;
  this.dS = null;
  this.dT = null;
  this.dE = null;
  this.dF = null;
  this.dG = null;
  this.dH = null;
  this.dI = null;
  this.dJ = null;
  this.dK = null;
  this.dL = null;
  this.gG = _1;
  this.dM = _2;
  this.dN = _3;
  this.dO = _4;
  this.dP = _5;
  this.dQ = _6;
  this.dR = _7;
  this.dS = _8;
  this.dT = _9;
  this.dE = _10;
  this.dF = _11;
  this.dG = _12;
  this.dH = _13;
  this.dI = _14;
  this.dJ = _15;
  this.dK = _16;
  this.dL = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 17;
});
$p.m = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, (-934366247), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().c(this.gG, x$0.gG) && $m_sr_BoxesRunTime$().c(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().c(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().c(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().c(this.dP, x$0.dP)) && $m_sr_BoxesRunTime$().c(this.dQ, x$0.dQ)) && $m_sr_BoxesRunTime$().c(this.dR, x$0.dR)) && $m_sr_BoxesRunTime$().c(this.dS, x$0.dS)) && $m_sr_BoxesRunTime$().c(this.dT, x$0.dT)) && $m_sr_BoxesRunTime$().c(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().c(this.dF, x$0.dF)) && $m_sr_BoxesRunTime$().c(this.dG, x$0.dG)) && $m_sr_BoxesRunTime$().c(this.dH, x$0.dH)) && $m_sr_BoxesRunTime$().c(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().c(this.dJ, x$0.dJ)) && $m_sr_BoxesRunTime$().c(this.dK, x$0.dK)) && $m_sr_BoxesRunTime$().c(this.dL, x$0.dL))));
});
$p.C = (function() {
  return "Tuple17";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.gG) + ",") + this.dM) + ",") + this.dN) + ",") + this.dO) + ",") + this.dP) + ",") + this.dQ) + ",") + this.dR) + ",") + this.dS) + ",") + this.dT) + ",") + this.dE) + ",") + this.dF) + ",") + this.dG) + ",") + this.dH) + ",") + this.dI) + ",") + this.dJ) + ",") + this.dK) + ",") + this.dL) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  ai: 1,
  b: 1,
  c: 1,
  bJ: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.gH = null;
  this.e3 = null;
  this.e4 = null;
  this.e5 = null;
  this.e6 = null;
  this.e7 = null;
  this.e8 = null;
  this.e9 = null;
  this.ea = null;
  this.dU = null;
  this.dV = null;
  this.dW = null;
  this.dX = null;
  this.dY = null;
  this.dZ = null;
  this.e0 = null;
  this.e1 = null;
  this.e2 = null;
  this.gH = _1;
  this.e3 = _2;
  this.e4 = _3;
  this.e5 = _4;
  this.e6 = _5;
  this.e7 = _6;
  this.e8 = _7;
  this.e9 = _8;
  this.ea = _9;
  this.dU = _10;
  this.dV = _11;
  this.dW = _12;
  this.dX = _13;
  this.dY = _14;
  this.dZ = _15;
  this.e0 = _16;
  this.e1 = _17;
  this.e2 = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 18;
});
$p.m = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, (-937041276), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().c(this.gH, x$0.gH) && $m_sr_BoxesRunTime$().c(this.e3, x$0.e3)) && $m_sr_BoxesRunTime$().c(this.e4, x$0.e4)) && $m_sr_BoxesRunTime$().c(this.e5, x$0.e5)) && $m_sr_BoxesRunTime$().c(this.e6, x$0.e6)) && $m_sr_BoxesRunTime$().c(this.e7, x$0.e7)) && $m_sr_BoxesRunTime$().c(this.e8, x$0.e8)) && $m_sr_BoxesRunTime$().c(this.e9, x$0.e9)) && $m_sr_BoxesRunTime$().c(this.ea, x$0.ea)) && $m_sr_BoxesRunTime$().c(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().c(this.dV, x$0.dV)) && $m_sr_BoxesRunTime$().c(this.dW, x$0.dW)) && $m_sr_BoxesRunTime$().c(this.dX, x$0.dX)) && $m_sr_BoxesRunTime$().c(this.dY, x$0.dY)) && $m_sr_BoxesRunTime$().c(this.dZ, x$0.dZ)) && $m_sr_BoxesRunTime$().c(this.e0, x$0.e0)) && $m_sr_BoxesRunTime$().c(this.e1, x$0.e1)) && $m_sr_BoxesRunTime$().c(this.e2, x$0.e2))));
});
$p.C = (function() {
  return "Tuple18";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.gH) + ",") + this.e3) + ",") + this.e4) + ",") + this.e5) + ",") + this.e6) + ",") + this.e7) + ",") + this.e8) + ",") + this.e9) + ",") + this.ea) + ",") + this.dU) + ",") + this.dV) + ",") + this.dW) + ",") + this.dX) + ",") + this.dY) + ",") + this.dZ) + ",") + this.e0) + ",") + this.e1) + ",") + this.e2) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  aj: 1,
  b: 1,
  c: 1,
  bK: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.gI = null;
  this.el = null;
  this.em = null;
  this.en = null;
  this.eo = null;
  this.ep = null;
  this.eq = null;
  this.er = null;
  this.es = null;
  this.eb = null;
  this.ec = null;
  this.ed = null;
  this.ee = null;
  this.ef = null;
  this.eg = null;
  this.eh = null;
  this.ei = null;
  this.ej = null;
  this.ek = null;
  this.gI = _1;
  this.el = _2;
  this.em = _3;
  this.en = _4;
  this.eo = _5;
  this.ep = _6;
  this.eq = _7;
  this.er = _8;
  this.es = _9;
  this.eb = _10;
  this.ec = _11;
  this.ed = _12;
  this.ee = _13;
  this.ef = _14;
  this.eg = _15;
  this.eh = _16;
  this.ei = _17;
  this.ej = _18;
  this.ek = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 19;
});
$p.m = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, (-1955940499), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().c(this.gI, x$0.gI) && $m_sr_BoxesRunTime$().c(this.el, x$0.el)) && $m_sr_BoxesRunTime$().c(this.em, x$0.em)) && $m_sr_BoxesRunTime$().c(this.en, x$0.en)) && $m_sr_BoxesRunTime$().c(this.eo, x$0.eo)) && $m_sr_BoxesRunTime$().c(this.ep, x$0.ep)) && $m_sr_BoxesRunTime$().c(this.eq, x$0.eq)) && $m_sr_BoxesRunTime$().c(this.er, x$0.er)) && $m_sr_BoxesRunTime$().c(this.es, x$0.es)) && $m_sr_BoxesRunTime$().c(this.eb, x$0.eb)) && $m_sr_BoxesRunTime$().c(this.ec, x$0.ec)) && $m_sr_BoxesRunTime$().c(this.ed, x$0.ed)) && $m_sr_BoxesRunTime$().c(this.ee, x$0.ee)) && $m_sr_BoxesRunTime$().c(this.ef, x$0.ef)) && $m_sr_BoxesRunTime$().c(this.eg, x$0.eg)) && $m_sr_BoxesRunTime$().c(this.eh, x$0.eh)) && $m_sr_BoxesRunTime$().c(this.ei, x$0.ei)) && $m_sr_BoxesRunTime$().c(this.ej, x$0.ej)) && $m_sr_BoxesRunTime$().c(this.ek, x$0.ek))));
});
$p.C = (function() {
  return "Tuple19";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.gI) + ",") + this.el) + ",") + this.em) + ",") + this.en) + ",") + this.eo) + ",") + this.ep) + ",") + this.eq) + ",") + this.er) + ",") + this.es) + ",") + this.eb) + ",") + this.ec) + ",") + this.ed) + ",") + this.ee) + ",") + this.ef) + ",") + this.eg) + ",") + this.eh) + ",") + this.ei) + ",") + this.ej) + ",") + this.ek) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  ak: 1,
  b: 1,
  c: 1,
  bL: 1,
  a: 1
}));
function $ct_T2__O__O__($thiz, _1, _2) {
  $thiz.ao = _1;
  $thiz.k3 = _2;
  return $thiz;
}
/** @constructor */
function $c_T2() {
  this.ao = null;
  this.k3 = null;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.z = (function() {
  return 2;
});
$p.m = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.a0 = (function() {
  return this.ao;
});
$p.a1 = (function() {
  return this.k3;
});
$p.r = (function() {
  return (((("(" + this.a0()) + ",") + this.a1()) + ")");
});
$p.C = (function() {
  return "Tuple2";
});
$p.E = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, (-116390334), true);
});
$p.v = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().c(this.a0(), x$1.a0()) && $m_sr_BoxesRunTime$().c(this.a1(), x$1.a1()))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.M)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  M: 1,
  a9: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.gJ = null;
  this.eD = null;
  this.eF = null;
  this.eG = null;
  this.eH = null;
  this.eI = null;
  this.eJ = null;
  this.eK = null;
  this.eL = null;
  this.et = null;
  this.eu = null;
  this.ev = null;
  this.ew = null;
  this.ex = null;
  this.ey = null;
  this.ez = null;
  this.eA = null;
  this.eB = null;
  this.eC = null;
  this.eE = null;
  this.gJ = _1;
  this.eD = _2;
  this.eF = _3;
  this.eG = _4;
  this.eH = _5;
  this.eI = _6;
  this.eJ = _7;
  this.eK = _8;
  this.eL = _9;
  this.et = _10;
  this.eu = _11;
  this.ev = _12;
  this.ew = _13;
  this.ex = _14;
  this.ey = _15;
  this.ez = _16;
  this.eA = _17;
  this.eB = _18;
  this.eC = _19;
  this.eE = _20;
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 20;
});
$p.m = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, 1328807075, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().c(this.gJ, x$0.gJ) && $m_sr_BoxesRunTime$().c(this.eD, x$0.eD)) && $m_sr_BoxesRunTime$().c(this.eF, x$0.eF)) && $m_sr_BoxesRunTime$().c(this.eG, x$0.eG)) && $m_sr_BoxesRunTime$().c(this.eH, x$0.eH)) && $m_sr_BoxesRunTime$().c(this.eI, x$0.eI)) && $m_sr_BoxesRunTime$().c(this.eJ, x$0.eJ)) && $m_sr_BoxesRunTime$().c(this.eK, x$0.eK)) && $m_sr_BoxesRunTime$().c(this.eL, x$0.eL)) && $m_sr_BoxesRunTime$().c(this.et, x$0.et)) && $m_sr_BoxesRunTime$().c(this.eu, x$0.eu)) && $m_sr_BoxesRunTime$().c(this.ev, x$0.ev)) && $m_sr_BoxesRunTime$().c(this.ew, x$0.ew)) && $m_sr_BoxesRunTime$().c(this.ex, x$0.ex)) && $m_sr_BoxesRunTime$().c(this.ey, x$0.ey)) && $m_sr_BoxesRunTime$().c(this.ez, x$0.ez)) && $m_sr_BoxesRunTime$().c(this.eA, x$0.eA)) && $m_sr_BoxesRunTime$().c(this.eB, x$0.eB)) && $m_sr_BoxesRunTime$().c(this.eC, x$0.eC)) && $m_sr_BoxesRunTime$().c(this.eE, x$0.eE))));
});
$p.C = (function() {
  return "Tuple20";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.gJ) + ",") + this.eD) + ",") + this.eF) + ",") + this.eG) + ",") + this.eH) + ",") + this.eI) + ",") + this.eJ) + ",") + this.eK) + ",") + this.eL) + ",") + this.et) + ",") + this.eu) + ",") + this.ev) + ",") + this.ew) + ",") + this.ex) + ",") + this.ey) + ",") + this.ez) + ",") + this.eA) + ",") + this.eB) + ",") + this.eC) + ",") + this.eE) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.al)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  al: 1,
  b: 1,
  c: 1,
  bN: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.gK = null;
  this.eW = null;
  this.eZ = null;
  this.f0 = null;
  this.f1 = null;
  this.f2 = null;
  this.f3 = null;
  this.f4 = null;
  this.f5 = null;
  this.eM = null;
  this.eN = null;
  this.eO = null;
  this.eP = null;
  this.eQ = null;
  this.eR = null;
  this.eS = null;
  this.eT = null;
  this.eU = null;
  this.eV = null;
  this.eX = null;
  this.eY = null;
  this.gK = _1;
  this.eW = _2;
  this.eZ = _3;
  this.f0 = _4;
  this.f1 = _5;
  this.f2 = _6;
  this.f3 = _7;
  this.f4 = _8;
  this.f5 = _9;
  this.eM = _10;
  this.eN = _11;
  this.eO = _12;
  this.eP = _13;
  this.eQ = _14;
  this.eR = _15;
  this.eS = _16;
  this.eT = _17;
  this.eU = _18;
  this.eV = _19;
  this.eX = _20;
  this.eY = _21;
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 21;
});
$p.m = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, (-21288119), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().c(this.gK, x$0.gK) && $m_sr_BoxesRunTime$().c(this.eW, x$0.eW)) && $m_sr_BoxesRunTime$().c(this.eZ, x$0.eZ)) && $m_sr_BoxesRunTime$().c(this.f0, x$0.f0)) && $m_sr_BoxesRunTime$().c(this.f1, x$0.f1)) && $m_sr_BoxesRunTime$().c(this.f2, x$0.f2)) && $m_sr_BoxesRunTime$().c(this.f3, x$0.f3)) && $m_sr_BoxesRunTime$().c(this.f4, x$0.f4)) && $m_sr_BoxesRunTime$().c(this.f5, x$0.f5)) && $m_sr_BoxesRunTime$().c(this.eM, x$0.eM)) && $m_sr_BoxesRunTime$().c(this.eN, x$0.eN)) && $m_sr_BoxesRunTime$().c(this.eO, x$0.eO)) && $m_sr_BoxesRunTime$().c(this.eP, x$0.eP)) && $m_sr_BoxesRunTime$().c(this.eQ, x$0.eQ)) && $m_sr_BoxesRunTime$().c(this.eR, x$0.eR)) && $m_sr_BoxesRunTime$().c(this.eS, x$0.eS)) && $m_sr_BoxesRunTime$().c(this.eT, x$0.eT)) && $m_sr_BoxesRunTime$().c(this.eU, x$0.eU)) && $m_sr_BoxesRunTime$().c(this.eV, x$0.eV)) && $m_sr_BoxesRunTime$().c(this.eX, x$0.eX)) && $m_sr_BoxesRunTime$().c(this.eY, x$0.eY))));
});
$p.C = (function() {
  return "Tuple21";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.gK) + ",") + this.eW) + ",") + this.eZ) + ",") + this.f0) + ",") + this.f1) + ",") + this.f2) + ",") + this.f3) + ",") + this.f4) + ",") + this.f5) + ",") + this.eM) + ",") + this.eN) + ",") + this.eO) + ",") + this.eP) + ",") + this.eQ) + ",") + this.eR) + ",") + this.eS) + ",") + this.eT) + ",") + this.eU) + ",") + this.eV) + ",") + this.eX) + ",") + this.eY) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  am: 1,
  b: 1,
  c: 1,
  bO: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.gL = null;
  this.fg = null;
  this.fk = null;
  this.fl = null;
  this.fm = null;
  this.fn = null;
  this.fo = null;
  this.fp = null;
  this.fq = null;
  this.f6 = null;
  this.f7 = null;
  this.f8 = null;
  this.f9 = null;
  this.fa = null;
  this.fb = null;
  this.fc = null;
  this.fd = null;
  this.fe = null;
  this.ff = null;
  this.fh = null;
  this.fi = null;
  this.fj = null;
  this.gL = _1;
  this.fg = _2;
  this.fk = _3;
  this.fl = _4;
  this.fm = _5;
  this.fn = _6;
  this.fo = _7;
  this.fp = _8;
  this.fq = _9;
  this.f6 = _10;
  this.f7 = _11;
  this.f8 = _12;
  this.f9 = _13;
  this.fa = _14;
  this.fb = _15;
  this.fc = _16;
  this.fd = _17;
  this.fe = _18;
  this.ff = _19;
  this.fh = _20;
  this.fi = _21;
  this.fj = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 22;
});
$p.m = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, (-139445068), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().c(this.gL, x$0.gL) && $m_sr_BoxesRunTime$().c(this.fg, x$0.fg)) && $m_sr_BoxesRunTime$().c(this.fk, x$0.fk)) && $m_sr_BoxesRunTime$().c(this.fl, x$0.fl)) && $m_sr_BoxesRunTime$().c(this.fm, x$0.fm)) && $m_sr_BoxesRunTime$().c(this.fn, x$0.fn)) && $m_sr_BoxesRunTime$().c(this.fo, x$0.fo)) && $m_sr_BoxesRunTime$().c(this.fp, x$0.fp)) && $m_sr_BoxesRunTime$().c(this.fq, x$0.fq)) && $m_sr_BoxesRunTime$().c(this.f6, x$0.f6)) && $m_sr_BoxesRunTime$().c(this.f7, x$0.f7)) && $m_sr_BoxesRunTime$().c(this.f8, x$0.f8)) && $m_sr_BoxesRunTime$().c(this.f9, x$0.f9)) && $m_sr_BoxesRunTime$().c(this.fa, x$0.fa)) && $m_sr_BoxesRunTime$().c(this.fb, x$0.fb)) && $m_sr_BoxesRunTime$().c(this.fc, x$0.fc)) && $m_sr_BoxesRunTime$().c(this.fd, x$0.fd)) && $m_sr_BoxesRunTime$().c(this.fe, x$0.fe)) && $m_sr_BoxesRunTime$().c(this.ff, x$0.ff)) && $m_sr_BoxesRunTime$().c(this.fh, x$0.fh)) && $m_sr_BoxesRunTime$().c(this.fi, x$0.fi)) && $m_sr_BoxesRunTime$().c(this.fj, x$0.fj))));
});
$p.C = (function() {
  return "Tuple22";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.gL) + ",") + this.fg) + ",") + this.fk) + ",") + this.fl) + ",") + this.fm) + ",") + this.fn) + ",") + this.fo) + ",") + this.fp) + ",") + this.fq) + ",") + this.f6) + ",") + this.f7) + ",") + this.f8) + ",") + this.f9) + ",") + this.fa) + ",") + this.fb) + ",") + this.fc) + ",") + this.fd) + ",") + this.fe) + ",") + this.ff) + ",") + this.fh) + ",") + this.fi) + ",") + this.fj) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  an: 1,
  b: 1,
  c: 1,
  bP: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.aL = null;
  this.b3 = null;
  this.bb = null;
  this.aL = _1;
  this.b3 = _2;
  this.bb = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 3;
});
$p.m = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, (-192629203), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().c(this.aL, x$0.aL) && $m_sr_BoxesRunTime$().c(this.b3, x$0.b3)) && $m_sr_BoxesRunTime$().c(this.bb, x$0.bb))));
});
$p.C = (function() {
  return "Tuple3";
});
$p.r = (function() {
  return (((((("(" + this.aL) + ",") + this.b3) + ",") + this.bb) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ao)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  ao: 1,
  b: 1,
  c: 1,
  bQ: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.aM = null;
  this.aN = null;
  this.aU = null;
  this.aV = null;
  this.aM = _1;
  this.aN = _2;
  this.aU = _3;
  this.aV = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 4;
});
$p.m = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, (-1542739752), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().c(this.aM, x$0.aM) && $m_sr_BoxesRunTime$().c(this.aN, x$0.aN)) && $m_sr_BoxesRunTime$().c(this.aU, x$0.aU)) && $m_sr_BoxesRunTime$().c(this.aV, x$0.aV))));
});
$p.C = (function() {
  return "Tuple4";
});
$p.r = (function() {
  return (((((((("(" + this.aM) + ",") + this.aN) + ",") + this.aU) + ",") + this.aV) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ap)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  ap: 1,
  b: 1,
  c: 1,
  bR: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.gM = null;
  this.fr = null;
  this.fs = null;
  this.ft = null;
  this.fu = null;
  this.gM = _1;
  this.fr = _2;
  this.fs = _3;
  this.ft = _4;
  this.fu = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 5;
});
$p.m = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, 417360321, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().c(this.gM, x$0.gM) && $m_sr_BoxesRunTime$().c(this.fr, x$0.fr)) && $m_sr_BoxesRunTime$().c(this.fs, x$0.fs)) && $m_sr_BoxesRunTime$().c(this.ft, x$0.ft)) && $m_sr_BoxesRunTime$().c(this.fu, x$0.fu))));
});
$p.C = (function() {
  return "Tuple5";
});
$p.r = (function() {
  return (((((((((("(" + this.gM) + ",") + this.fr) + ",") + this.fs) + ",") + this.ft) + ",") + this.fu) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aq)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  aq: 1,
  b: 1,
  c: 1,
  bS: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.gN = null;
  this.fv = null;
  this.fw = null;
  this.fx = null;
  this.fy = null;
  this.fz = null;
  this.gN = _1;
  this.fv = _2;
  this.fw = _3;
  this.fx = _4;
  this.fy = _5;
  this.fz = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 6;
});
$p.m = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, (-1037607828), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().c(this.gN, x$0.gN) && $m_sr_BoxesRunTime$().c(this.fv, x$0.fv)) && $m_sr_BoxesRunTime$().c(this.fw, x$0.fw)) && $m_sr_BoxesRunTime$().c(this.fx, x$0.fx)) && $m_sr_BoxesRunTime$().c(this.fy, x$0.fy)) && $m_sr_BoxesRunTime$().c(this.fz, x$0.fz))));
});
$p.C = (function() {
  return "Tuple6";
});
$p.r = (function() {
  return (((((((((((("(" + this.gN) + ",") + this.fv) + ",") + this.fw) + ",") + this.fx) + ",") + this.fy) + ",") + this.fz) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ar)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  ar: 1,
  b: 1,
  c: 1,
  bT: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.gO = null;
  this.fA = null;
  this.fB = null;
  this.fC = null;
  this.fD = null;
  this.fE = null;
  this.fF = null;
  this.gO = _1;
  this.fA = _2;
  this.fB = _3;
  this.fC = _4;
  this.fD = _5;
  this.fE = _6;
  this.fF = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 7;
});
$p.m = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, (-1050932777), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().c(this.gO, x$0.gO) && $m_sr_BoxesRunTime$().c(this.fA, x$0.fA)) && $m_sr_BoxesRunTime$().c(this.fB, x$0.fB)) && $m_sr_BoxesRunTime$().c(this.fC, x$0.fC)) && $m_sr_BoxesRunTime$().c(this.fD, x$0.fD)) && $m_sr_BoxesRunTime$().c(this.fE, x$0.fE)) && $m_sr_BoxesRunTime$().c(this.fF, x$0.fF))));
});
$p.C = (function() {
  return "Tuple7";
});
$p.r = (function() {
  return (((((((((((((("(" + this.gO) + ",") + this.fA) + ",") + this.fB) + ",") + this.fC) + ",") + this.fD) + ",") + this.fE) + ",") + this.fF) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.as)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  as: 1,
  b: 1,
  c: 1,
  bU: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.gP = null;
  this.fG = null;
  this.fH = null;
  this.fI = null;
  this.fJ = null;
  this.fK = null;
  this.fL = null;
  this.fM = null;
  this.gP = _1;
  this.fG = _2;
  this.fH = _3;
  this.fI = _4;
  this.fJ = _5;
  this.fK = _6;
  this.fL = _7;
  this.fM = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 8;
});
$p.m = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, 1998822530, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().c(this.gP, x$0.gP) && $m_sr_BoxesRunTime$().c(this.fG, x$0.fG)) && $m_sr_BoxesRunTime$().c(this.fH, x$0.fH)) && $m_sr_BoxesRunTime$().c(this.fI, x$0.fI)) && $m_sr_BoxesRunTime$().c(this.fJ, x$0.fJ)) && $m_sr_BoxesRunTime$().c(this.fK, x$0.fK)) && $m_sr_BoxesRunTime$().c(this.fL, x$0.fL)) && $m_sr_BoxesRunTime$().c(this.fM, x$0.fM))));
});
$p.C = (function() {
  return "Tuple8";
});
$p.r = (function() {
  return (((((((((((((((("(" + this.gP) + ",") + this.fG) + ",") + this.fH) + ",") + this.fI) + ",") + this.fJ) + ",") + this.fK) + ",") + this.fL) + ",") + this.fM) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.at)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  at: 1,
  b: 1,
  c: 1,
  bV: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.gQ = null;
  this.fN = null;
  this.fO = null;
  this.fP = null;
  this.fQ = null;
  this.fR = null;
  this.fS = null;
  this.fT = null;
  this.fU = null;
  this.gQ = _1;
  this.fN = _2;
  this.fO = _3;
  this.fP = _4;
  this.fQ = _5;
  this.fR = _6;
  this.fS = _7;
  this.fT = _8;
  this.fU = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 9;
});
$p.m = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a3(this, (-1807911176), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().c(this.gQ, x$0.gQ) && $m_sr_BoxesRunTime$().c(this.fN, x$0.fN)) && $m_sr_BoxesRunTime$().c(this.fO, x$0.fO)) && $m_sr_BoxesRunTime$().c(this.fP, x$0.fP)) && $m_sr_BoxesRunTime$().c(this.fQ, x$0.fQ)) && $m_sr_BoxesRunTime$().c(this.fR, x$0.fR)) && $m_sr_BoxesRunTime$().c(this.fS, x$0.fS)) && $m_sr_BoxesRunTime$().c(this.fT, x$0.fT)) && $m_sr_BoxesRunTime$().c(this.fU, x$0.fU))));
});
$p.C = (function() {
  return "Tuple9";
});
$p.r = (function() {
  return (((((((((((((((((("(" + this.gQ) + ",") + this.fN) + ",") + this.fO) + ",") + this.fP) + ",") + this.fQ) + ",") + this.fR) + ",") + this.fS) + ",") + this.fT) + ",") + this.fU) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.au)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  au: 1,
  b: 1,
  c: 1,
  bW: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.hl() + "("), ", ", ")");
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
$p.tO = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.am = (function() {
  return 0;
});
$p.L = (function() {
  this.tO();
});
$p.jU = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  c9: 1,
  l: 1,
  d: 1,
  e: 1,
  p: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$6(p$5, isFlipped$2, outer) {
  this.mp = null;
  this.mo = false;
  this.iR = null;
  this.iS = false;
  this.hv = null;
  this.mp = p$5;
  this.mo = isFlipped$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.hv = outer;
  this.iS = false;
}
$p = $c_sc_Iterator$$anon$6.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$6;
/** @constructor */
function $h_sc_Iterator$$anon$6() {
}
$h_sc_Iterator$$anon$6.prototype = $p;
$p.T = (function() {
  if (this.iS) {
    return true;
  } else {
    if ((!this.hv.T())) {
      return false;
    }
    this.iR = this.hv.L();
    while (((!(!this.mp.g(this.iR))) === this.mo)) {
      if ((!this.hv.T())) {
        return false;
      }
      this.iR = this.hv.L();
    }
    this.iS = true;
    return true;
  }
});
$p.L = (function() {
  if (this.T()) {
    this.iS = false;
    return this.iR;
  } else {
    return $m_sc_Iterator$().bd.L();
  }
});
var $d_sc_Iterator$$anon$6 = new $TypeData().i($c_sc_Iterator$$anon$6, "scala.collection.Iterator$$anon$6", ({
  ca: 1,
  l: 1,
  d: 1,
  e: 1,
  p: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.aO instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.aO;
      $thiz.aO = c.aO;
      $thiz.bQ = c.bQ;
      if ((c.b5 !== null)) {
        if (($thiz.b4 === null)) {
          $thiz.b4 = c.b4;
        }
        var x$proxy10 = c.b4;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().jP();
        }
        x$proxy10.hw = $thiz.b5;
        $thiz.b5 = c.b5;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.b5 === null)) {
      $thiz.aO = null;
      $thiz.b4 = null;
      return false;
    } else {
      $thiz.aO = $thiz.b5.sP();
      if (($thiz.b4 === $thiz.b5)) {
        var x$proxy12 = $thiz.b4;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().jP();
        }
        $thiz.b4 = x$proxy12.hw;
      }
      $thiz.b5 = $thiz.b5.hw;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.bQ) {
        return true;
      } else {
        if ((!(($thiz.aO !== null) && $thiz.aO.T()))) {
          continue;
        }
        $thiz.bQ = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.aO = null;
  this.b5 = null;
  this.b4 = null;
  this.bQ = false;
  this.aO = from;
  this.b5 = null;
  this.b4 = null;
  this.bQ = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.T = (function() {
  if (this.bQ) {
    return true;
  } else if ((this.aO !== null)) {
    if (this.aO.T()) {
      this.bQ = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.L = (function() {
  if (this.T()) {
    this.bQ = false;
    var x$proxy13 = this.aO;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().jP();
    }
    return x$proxy13.L();
  } else {
    return $m_sc_Iterator$().bd.L();
  }
});
$p.s7 = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.b5 === null)) {
    this.b5 = c;
    this.b4 = c;
  } else {
    var x$proxy14 = this.b4;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().jP();
    }
    x$proxy14.hw = c;
    this.b4 = c;
  }
  if ((this.aO === null)) {
    this.aO = $m_sc_Iterator$().bd;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ax)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  ax: 1,
  l: 1,
  d: 1,
  e: 1,
  p: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.bC > 0)) {
    if ($thiz.bR.T()) {
      $thiz.bR.L();
      $thiz.bC = (($thiz.bC - 1) | 0);
    } else {
      $thiz.bC = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.aW < 0)) {
    return (-1);
  } else {
    var that = (($thiz.aW - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.bR = null;
  this.aW = 0;
  this.bC = 0;
  this.bR = underlying;
  this.aW = limit;
  this.bC = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.am = (function() {
  var size = this.bR.am();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.bC) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.aW < 0)) {
      return dropSize;
    } else {
      var x = this.aW;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.T = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.aW !== 0) && this.bR.T());
});
$p.L = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.aW > 0)) {
    this.aW = ((this.aW - 1) | 0);
    return this.bR.L();
  } else {
    return ((this.aW < 0) ? this.bR.L() : $m_sc_Iterator$().bd.L());
  }
});
$p.jU = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.aW < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.bC + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().bd;
  } else if ((sum < 0)) {
    this.bC = 2147483647;
    this.aW = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.bR, ((sum - 2147483647) | 0), rest))));
  } else {
    this.bC = sum;
    this.aW = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  cc: 1,
  l: 1,
  d: 1,
  e: 1,
  p: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.sn(n);
  if (skipped.al()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.lP();
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
      if ((((!a$tailLocal1.al()) && (!b$tailLocal1.al())) && $m_sr_BoxesRunTime$().c(a$tailLocal1.lP(), b$tailLocal1.lP()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.m0();
        var b$tailLocal1$tmp1 = b$tailLocal1.m0();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.al() && b$tailLocal1.al());
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
  cr: 1,
  a: 1,
  aw: 1,
  ce: 1,
  cj: 1
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
  this.mD = null;
  this.hy = 0;
  this.mC = 0;
  this.mD = x$1;
  this.hy = 0;
  this.mC = x$1.z();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.T = (function() {
  return (this.hy < this.mC);
});
$p.L = (function() {
  var result = this.mD.m(this.hy);
  this.hy = ((1 + this.hy) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  d3: 1,
  l: 1,
  d: 1,
  e: 1,
  p: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  a4: 1,
  v: 1,
  a: 1,
  i: 1,
  g: 1,
  C: 1
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
  b9: 1,
  v: 1,
  a: 1,
  i: 1,
  g: 1,
  C: 1
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
function $isArrayOf_jl_Integer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a6)));
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  a6: 1,
  v: 1,
  a: 1,
  i: 1,
  g: 1,
  C: 1
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
  return $m_RTLong$().r3($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a7)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  a7: 1,
  v: 1,
  a: 1,
  i: 1,
  g: 1,
  C: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  bd: 1,
  a5: 1,
  k: 1,
  j: 1,
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
  var str = $m_jl_Character$().uY(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  bg: 1,
  a: 1,
  i: 1,
  L: 1,
  g: 1,
  C: 1
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
$p.bz = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.lx = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.hl = (function() {
  return this.ce();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.iQ = null;
  this.bB = 0;
  this.hu = 0;
  this.iQ = xs;
  this.bB = 0;
  this.hu = $m_jl_reflect_Array$().iq(this.iQ);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.am = (function() {
  return ((this.hu - this.bB) | 0);
});
$p.T = (function() {
  return (this.bB < this.hu);
});
$p.L = (function() {
  if ((this.bB >= $m_jl_reflect_Array$().iq(this.iQ))) {
    $m_sc_Iterator$().bd.L();
  }
  var r = $m_sr_ScalaRunTime$().hk(this.iQ, this.bB);
  this.bB = ((1 + this.bB) | 0);
  return r;
});
$p.io = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.bB + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.hu;
    } else {
      var a = this.hu;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.bB = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  c0: 1,
  l: 1,
  d: 1,
  e: 1,
  p: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.bc) ? $thiz.bc : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.ml = null;
  this.bP = 0;
  this.bc = 0;
  this.ml = self;
  this.bP = 0;
  this.bc = self.R();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.am = (function() {
  return this.bc;
});
$p.T = (function() {
  return (this.bc > 0);
});
$p.L = (function() {
  if ((this.bc > 0)) {
    var r = this.ml.at(this.bP);
    this.bP = ((1 + this.bP) | 0);
    this.bc = ((this.bc - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().bd.L();
  }
});
$p.io = (function(n) {
  if ((n > 0)) {
    this.bP = ((this.bP + n) | 0);
    var b = ((this.bc - n) | 0);
    this.bc = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.jU = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.bc = ((b < 0) ? 0 : b);
  this.bP = ((this.bP + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  c6: 1,
  l: 1,
  d: 1,
  e: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_sci_RangeIterator(start, step, lastElement, initiallyEmpty) {
  this.gR = 0;
  this.fX = 0;
  this.fV = false;
  this.fW = 0;
  this.gR = step;
  this.fX = lastElement;
  this.fV = (!initiallyEmpty);
  this.fW = start;
}
$p = $c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
}
$h_sci_RangeIterator.prototype = $p;
$p.am = (function() {
  return (this.fV ? ((1 + ((((this.fX - this.fW) | 0) / $checkIntDivisor(this.gR)) | 0)) | 0) : 0);
});
$p.T = (function() {
  return this.fV;
});
$p.tP = (function() {
  if ((!this.fV)) {
    $m_sc_Iterator$().bd.L();
  }
  var value = this.fW;
  this.fV = (value !== this.fX);
  this.fW = ((value + this.gR) | 0);
  return value;
});
$p.io = (function(n) {
  if ((n > 0)) {
    var value = this.fW;
    var hi = (value >> 31);
    var value$1 = Math.imul(this.gR, n);
    var hi$1 = (value$1 >> 31);
    var lo = ((value + value$1) | 0);
    var hi$2 = ((((hi + hi$1) | 0) + (((lo >>> 0) < (value >>> 0)) | 0)) | 0);
    if ((this.gR > 0)) {
      var x = this.fX;
      var hi$3 = (x >> 31);
      if (((hi$3 === hi$2) ? ((x >>> 0) < (lo >>> 0)) : (hi$3 < hi$2))) {
        var $x_1_$_lo = x;
        var $x_1_$_hi = hi$3;
      } else {
        var $x_1_$_lo = lo;
        var $x_1_$_hi = hi$2;
      }
      this.fW = $x_1_$_lo;
      var value$2 = this.fX;
      var hi$4 = (value$2 >> 31);
      this.fV = ((hi$2 === hi$4) ? ((lo >>> 0) <= (value$2 >>> 0)) : (hi$2 < hi$4));
    } else if ((this.gR < 0)) {
      var x$2 = this.fX;
      var hi$5 = (x$2 >> 31);
      if (((hi$5 === hi$2) ? ((x$2 >>> 0) > (lo >>> 0)) : (hi$5 > hi$2))) {
        var $x_2_$_lo = x$2;
        var $x_2_$_hi = hi$5;
      } else {
        var $x_2_$_lo = lo;
        var $x_2_$_hi = hi$2;
      }
      this.fW = $x_2_$_lo;
      var value$3 = this.fX;
      var hi$6 = (value$3 >> 31);
      this.fV = ((hi$2 === hi$6) ? ((lo >>> 0) >= (value$3 >>> 0)) : (hi$2 > hi$6));
    }
  }
  return this;
});
$p.L = (function() {
  return this.tP();
});
var $d_sci_RangeIterator = new $TypeData().i($c_sci_RangeIterator, "scala.collection.immutable.RangeIterator", ({
  cw: 1,
  l: 1,
  d: 1,
  e: 1,
  p: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$() {
  this.mv = null;
  $n_scm_ArraySeq$ = this;
  this.mv = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  cy: 1,
  a: 1,
  c3: 1,
  c1: 1,
  c2: 1,
  ch: 1
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
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 924202651;
});
$p.z = (function() {
  return 0;
});
$p.C = (function() {
  return "EmptyTuple";
});
$p.m = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.r = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  bX: 1,
  b: 1,
  c: 1,
  a: 1,
  aF: 1,
  aG: 1,
  cE: 1
}));
var $n_T$package$EmptyTuple$;
function $m_T$package$EmptyTuple$() {
  if ((!$n_T$package$EmptyTuple$)) {
    $n_T$package$EmptyTuple$ = new $c_T$package$EmptyTuple$();
  }
  return $n_T$package$EmptyTuple$;
}
/** @constructor */
function $c_T2$mcDD$sp(_1$mcD$sp, _2$mcD$sp) {
  this.ao = null;
  this.k3 = null;
  this.mj = 0.0;
  this.mk = 0.0;
  this.mj = _1$mcD$sp;
  this.mk = _2$mcD$sp;
  $ct_T2__O__O__(this, null, null);
}
$p = $c_T2$mcDD$sp.prototype = new $h_T2();
$p.constructor = $c_T2$mcDD$sp;
/** @constructor */
function $h_T2$mcDD$sp() {
}
$h_T2$mcDD$sp.prototype = $p;
$p.a1 = (function() {
  return this.mk;
});
$p.a0 = (function() {
  return this.mj;
});
var $d_T2$mcDD$sp = new $TypeData().i($c_T2$mcDD$sp, "scala.Tuple2$mcDD$sp", ({
  bY: 1,
  M: 1,
  a9: 1,
  c: 1,
  b: 1,
  a: 1,
  bM: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.ce() + "(<not computed>)");
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
    this.X = null;
    this.X = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  jJ() {
    return $dp_toString__T(this.X);
  }
  C() {
    return "JavaScriptException";
  }
  z() {
    return 1;
  }
  m(x$1) {
    return ((x$1 === 0) ? this.X : $m_sr_Statics$().sX(x$1));
  }
  E() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  x() {
    return $m_s_util_hashing_MurmurHash3$().a3(this, 1744042595, true);
  }
  v(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().c(this.X, x$1.X)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aI)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  aI: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1,
  c: 1,
  b: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.al())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.m0();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.k5 = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.r = (function() {
  return this.k5;
});
$p.v = (function(that) {
  return (this === that);
});
$p.x = (function() {
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
$p.r = (function() {
  return $f_sc_View__toString__T(this);
});
$p.ce = (function() {
  return "View";
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.k5 = null;
  this.k5 = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  cK: 1,
  cL: 1,
  cJ: 1,
  a: 1,
  cM: 1,
  cG: 1,
  b: 1,
  cH: 1,
  cI: 1
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
      if (o.lF($thiz)) {
        return $thiz.jS(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.q)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.q)));
}
/** @constructor */
function $c_sc_View$Filter(underlying, p, isFlipped) {
  this.k4 = null;
  this.mt = null;
  this.ms = false;
  this.k4 = underlying;
  this.mt = p;
  this.ms = isFlipped;
}
$p = $c_sc_View$Filter.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Filter;
/** @constructor */
function $h_sc_View$Filter() {
}
$h_sc_View$Filter.prototype = $p;
$p.af = (function() {
  var this$1 = this.k4.af();
  return new $c_sc_Iterator$$anon$6(this.mt, this.ms, this$1);
});
$p.am = (function() {
  return ((this.k4.am() === 0) ? 0 : (-1));
});
$p.al = (function() {
  return (!this.af().T());
});
var $d_sc_View$Filter = new $TypeData().i($c_sc_View$Filter, "scala.collection.View$Filter", ({
  cl: 1,
  av: 1,
  r: 1,
  d: 1,
  e: 1,
  o: 1,
  n: 1,
  m: 1,
  a: 1,
  ay: 1
}));
/** @constructor */
function $c_sc_AbstractSeq() {
}
$p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $p;
$p.al = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.jS = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.lF = (function(that) {
  return true;
});
$p.v = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().lW(this);
});
$p.r = (function() {
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.s)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.s)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.N)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.N)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.hx = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.hx = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.at = (function(idx) {
  return this.hx.at(idx);
});
$p.R = (function() {
  return this.hx.R();
});
$p.al = (function() {
  return this.hx.al();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.hx = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.gs = (function(len) {
  var x = this.R();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.am = (function() {
  return this.R();
});
$p.af = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.ce = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  c5: 1,
  cg: 1,
  bZ: 1,
  av: 1,
  r: 1,
  d: 1,
  e: 1,
  o: 1,
  n: 1,
  m: 1,
  a: 1,
  ay: 1,
  t: 1,
  cf: 1,
  x: 1,
  c4: 1
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
        var a = $thiz.lB();
        var b = o.lB();
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
          equal = $m_sr_BoxesRunTime$().c($thiz.at(index), o.at(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.af().io(index);
          var thatIt = o.af().io(index);
          while ((equal && thisIt.T())) {
            equal = $m_sr_BoxesRunTime$().c(thisIt.L(), thatIt.L());
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.D)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.D)));
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
  this.k6 = null;
  this.k6 = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.lF = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.jS = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.lB = (function() {
  return $m_sci_IndexedSeqDefaults$().mu;
});
$p.af = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.gs = (function(len) {
  var x = this.R();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.am = (function() {
  return this.R();
});
$p.v = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().lW(this);
});
$p.r = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.al = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.bz = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.lx = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.R = (function() {
  return (this.k6.length | 0);
});
$p.at = (function(idx) {
  return this.k6[idx];
});
$p.hl = (function() {
  return "WrappedVarArgs";
});
$p.g = (function(v1) {
  return this.at((v1 | 0));
});
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  df: 1,
  D: 1,
  d: 1,
  e: 1,
  o: 1,
  n: 1,
  m: 1,
  G: 1,
  h: 1,
  w: 1,
  t: 1,
  b: 1,
  q: 1,
  I: 1,
  H: 1,
  x: 1,
  s: 1,
  P: 1,
  J: 1,
  z: 1,
  A: 1,
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
  return ($thiz.cc() ? ($thiz.bD !== $thiz.bS) : ((($thiz.bD + $thiz.av) | 0) !== $thiz.bS));
}
function $ct_sci_Range__I__I__I__($thiz, start, end, step) {
  $thiz.ap = start;
  $thiz.bS = end;
  $thiz.av = step;
  $thiz.az = ($thiz.cc() ? ((step >= 0) ? (start > end) : (start < end)) : ((step >= 0) ? (start >= end) : (start <= end)));
  if ((step === 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "step cannot be 0.");
  }
  var stepSign = (step >> 31);
  var gap = (((((end - start) | 0) ^ stepSign) - stepSign) | 0);
  var absStep = (((step ^ stepSign) - stepSign) | 0);
  var div = (((gap >>> 0) / ($checkIntDivisor(absStep) >>> 0)) | 0);
  $thiz.bE = (($thiz.cc() || (Math.imul(absStep, div) !== gap)) ? ((1 + div) | 0) : div);
  if ((((-3) & ((1 + step) | 0)) === 0)) {
    var $x_1 = ($thiz.cc() ? end : ((end - step) | 0));
  } else {
    var n = (($thiz.bE - 1) | 0);
    var $x_1 = (($thiz.ap + Math.imul($thiz.av, n)) | 0);
  }
  $thiz.bD = $x_1;
  return $thiz;
}
/** @constructor */
function $c_sci_Range() {
  this.ap = 0;
  this.bS = 0;
  this.av = 0;
  this.az = false;
  this.bE = 0;
  this.bD = 0;
}
$p = $c_sci_Range.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Range;
/** @constructor */
function $h_sci_Range() {
}
$h_sci_Range.prototype = $p;
$p.lF = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.ce = (function() {
  return "IndexedSeq";
});
$p.gs = (function(len) {
  var x = this.R();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.am = (function() {
  return this.R();
});
$p.af = (function() {
  return new $c_sci_RangeIterator(this.ap, this.av, this.bD, this.az);
});
$p.al = (function() {
  return this.az;
});
$p.R = (function() {
  if (this.az) {
    return 0;
  } else {
    if ((this.bE <= 0)) {
      $m_sci_Range$().qV(this.ap, this.bS, this.av, this.cc());
    }
    return this.bE;
  }
});
$p.qs = (function() {
  if (this.az) {
    var $x_1 = $m_sci_Range$().us("last");
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.X : $x_1);
  } else {
    return this.bD;
  }
});
$p.ut = (function() {
  if (((this.bE <= 0) && (!this.az))) {
    $m_sci_Range$().qV(this.ap, this.bS, this.av, this.cc());
  }
});
$p.bz = (function(f) {
  if ((!this.az)) {
    var i = this.ap;
    while (true) {
      f.g(i);
      if ((i === this.bD)) {
        return (void 0);
      }
      i = ((i + this.av) | 0);
    }
  }
});
$p.jS = (function(that) {
  if ((that instanceof $c_sci_Range)) {
    var x1$2 = this.R();
    switch (x1$2) {
      case 0: {
        return that.az;
        break;
      }
      case 1: {
        return ((that.R() === 1) && (this.ap === that.ap));
        break;
      }
      default: {
        return ((that.R() === x1$2) && ((this.ap === that.ap) && (this.av === that.av)));
      }
    }
  } else {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, that);
  }
});
$p.lB = (function() {
  return 2147483647;
});
$p.v = (function(other) {
  if ((other instanceof $c_sci_Range)) {
    if (this.az) {
      return other.az;
    } else if (((!other.az) && (this.ap === other.ap))) {
      var l0 = this.qs();
      return ((l0 === other.qs()) && ((this.ap === l0) || (this.av === other.av)));
    } else {
      return false;
    }
  } else {
    return $f_sc_Seq__equals__O__Z(this, other);
  }
});
$p.x = (function() {
  if ((this.R() >= 2)) {
    var this$1 = $m_s_util_hashing_MurmurHash3$();
    return this$1.qP(this.ap, this.av, this.bD, this$1.gU);
  } else {
    return $m_s_util_hashing_MurmurHash3$().lW(this);
  }
});
$p.r = (function() {
  var preposition = (this.cc() ? "to" : "until");
  var stepped = ((this.av === 1) ? "" : (" by " + this.av));
  return ((((((((this.az ? "empty " : ($p_sci_Range__isInexact$1__Z(this) ? "inexact " : "")) + "Range ") + this.ap) + " ") + preposition) + " ") + this.bS) + stepped);
});
$p.hl = (function() {
  return "Range";
});
$p.q5 = (function(idx) {
  if ((((idx < 0) || (idx >= this.bE)) || this.az)) {
    this.ut();
    var max = (this.az ? (-1) : ((this.bE - 1) | 0));
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((idx + " is out of bounds (min 0, max ") + max) + ")"));
  } else {
    return ((this.ap + Math.imul(this.av, idx)) | 0);
  }
});
$p.g = (function(v1) {
  return this.q5((v1 | 0));
});
$p.at = (function(i) {
  return this.q5(i);
});
function $isArrayOf_sci_Range(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Q)));
}
/** @constructor */
function $c_sci_Range$Exclusive(start, end, step) {
  this.ap = 0;
  this.bS = 0;
  this.av = 0;
  this.az = false;
  this.bE = 0;
  this.bD = 0;
  $ct_sci_Range__I__I__I__(this, start, end, step);
}
$p = $c_sci_Range$Exclusive.prototype = new $h_sci_Range();
$p.constructor = $c_sci_Range$Exclusive;
/** @constructor */
function $h_sci_Range$Exclusive() {
}
$h_sci_Range$Exclusive.prototype = $p;
$p.cc = (function() {
  return false;
});
var $d_sci_Range$Exclusive = new $TypeData().i($c_sci_Range$Exclusive, "scala.collection.immutable.Range$Exclusive", ({
  cu: 1,
  Q: 1,
  O: 1,
  y: 1,
  r: 1,
  d: 1,
  e: 1,
  o: 1,
  n: 1,
  m: 1,
  h: 1,
  w: 1,
  t: 1,
  b: 1,
  q: 1,
  G: 1,
  I: 1,
  H: 1,
  D: 1,
  x: 1,
  s: 1,
  P: 1,
  J: 1,
  z: 1,
  A: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Range$Inclusive(start, end, step) {
  this.ap = 0;
  this.bS = 0;
  this.av = 0;
  this.az = false;
  this.bE = 0;
  this.bD = 0;
  $ct_sci_Range__I__I__I__(this, start, end, step);
}
$p = $c_sci_Range$Inclusive.prototype = new $h_sci_Range();
$p.constructor = $c_sci_Range$Inclusive;
/** @constructor */
function $h_sci_Range$Inclusive() {
}
$h_sci_Range$Inclusive.prototype = $p;
$p.cc = (function() {
  return true;
});
var $d_sci_Range$Inclusive = new $TypeData().i($c_sci_Range$Inclusive, "scala.collection.immutable.Range$Inclusive", ({
  cv: 1,
  Q: 1,
  O: 1,
  y: 1,
  r: 1,
  d: 1,
  e: 1,
  o: 1,
  n: 1,
  m: 1,
  h: 1,
  w: 1,
  t: 1,
  b: 1,
  q: 1,
  G: 1,
  I: 1,
  H: 1,
  D: 1,
  x: 1,
  s: 1,
  P: 1,
  J: 1,
  z: 1,
  A: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq() {
}
$p = $c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
$h_scm_ArraySeq.prototype = $p;
$p.gs = (function(len) {
  var x = this.be.b.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.am = (function() {
  return this.be.b.length;
});
$p.ce = (function() {
  return "IndexedSeq";
});
$p.hl = (function() {
  return "ArraySeq";
});
$p.v = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.be.b.length !== other.be.b.length)) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aA)));
}
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return ((!xs$tailLocal1.al()) | 0);
    } else {
      if ((!xs$tailLocal1.al())) {
        xs$tailLocal1.iN();
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
      var aEmpty = a$tailLocal1.al();
      var bEmpty = b$tailLocal1.al();
      if ((!(aEmpty || bEmpty))) {
        a$tailLocal1.jK();
      }
      if (false) {
        a$tailLocal1.iN();
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
$p.at = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.jS = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.ce = (function() {
  return "LinearSeq";
});
$p.al = (function() {
  return (this === $m_sci_Nil$());
});
$p.bz = (function(f) {
  var these = this;
  while ((!these.al())) {
    f.g(these.jK());
    these.iN();
  }
});
$p.R = (function() {
  var these = this;
  var len = 0;
  while ((!these.al())) {
    len = ((1 + len) | 0);
    these.iN();
  }
  return len;
});
$p.gs = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.hl = (function() {
  return "List";
});
$p.v = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.sn = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.g = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.az)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.be = null;
  this.be = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.R = (function() {
  return this.be.b.length;
});
$p.at = (function(index) {
  return this.be.b[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.rM(this.be, this$1.gU);
});
$p.v = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().sp(this.be, that.be) : $c_scm_ArraySeq.prototype.v.call(this, that));
});
$p.af = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.be);
});
$p.g = (function(v1) {
  return this.at((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aB)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  aB: 1,
  aA: 1,
  R: 1,
  y: 1,
  r: 1,
  d: 1,
  e: 1,
  o: 1,
  n: 1,
  m: 1,
  h: 1,
  w: 1,
  t: 1,
  b: 1,
  q: 1,
  V: 1,
  B: 1,
  S: 1,
  X: 1,
  W: 1,
  x: 1,
  s: 1,
  U: 1,
  T: 1,
  z: 1,
  A: 1,
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
$p.E = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 0;
});
$p.C = (function() {
  return "Nil";
});
$p.m = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.jK = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.iN = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.am = (function() {
  return 0;
});
$p.af = (function() {
  return $m_sc_Iterator$().bd;
});
$p.lP = (function() {
  this.jK();
});
$p.m0 = (function() {
  this.iN();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  cs: 1,
  az: 1,
  O: 1,
  y: 1,
  r: 1,
  d: 1,
  e: 1,
  o: 1,
  n: 1,
  m: 1,
  h: 1,
  w: 1,
  t: 1,
  b: 1,
  q: 1,
  G: 1,
  I: 1,
  H: 1,
  cd: 1,
  N: 1,
  cq: 1,
  cp: 1,
  z: 1,
  A: 1,
  ci: 1,
  J: 1,
  a: 1,
  cn: 1,
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
  $thiz.br = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.br = null;
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
$p.gs = (function(len) {
  var x = this.br.R();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.ce = (function() {
  return "IndexedSeq";
});
$p.R = (function() {
  return this.br.R();
});
$p.am = (function() {
  return this.br.R();
});
$p.r = (function() {
  return this.br.ay;
});
$p.al = (function() {
  return (this.br.R() === 0);
});
$p.at = (function(i) {
  return $bC(this.br.q9(i));
});
$p.g = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.br.q9(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cD: 1,
  R: 1,
  y: 1,
  r: 1,
  d: 1,
  e: 1,
  o: 1,
  n: 1,
  m: 1,
  h: 1,
  w: 1,
  t: 1,
  b: 1,
  q: 1,
  V: 1,
  B: 1,
  S: 1,
  X: 1,
  W: 1,
  aD: 1,
  aE: 1,
  aC: 1,
  cB: 1,
  x: 1,
  s: 1,
  U: 1,
  T: 1,
  L: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.gT = null;
  this.gT = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.ce = (function() {
  return "IndexedSeq";
});
$p.af = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.gs = (function(len) {
  var x = (this.gT.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.at = (function(index) {
  return this.gT[index];
});
$p.R = (function() {
  return (this.gT.length | 0);
});
$p.am = (function() {
  return (this.gT.length | 0);
});
$p.hl = (function() {
  return "WrappedArray";
});
$p.g = (function(v1) {
  var index = (v1 | 0);
  return this.gT[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  dc: 1,
  cx: 1,
  R: 1,
  y: 1,
  r: 1,
  d: 1,
  e: 1,
  o: 1,
  n: 1,
  m: 1,
  h: 1,
  w: 1,
  t: 1,
  b: 1,
  q: 1,
  V: 1,
  B: 1,
  S: 1,
  X: 1,
  W: 1,
  aD: 1,
  aE: 1,
  cC: 1,
  cz: 1,
  A: 1,
  z: 1,
  T: 1,
  x: 1,
  s: 1,
  U: 1,
  cA: 1,
  aC: 1,
  a: 1
}));
let $e_sketch = (function(arg) {
  $m_Lsketches_rooms_columns_Columns$package$().ur(arg);
});
export { $e_sketch as sketch };
