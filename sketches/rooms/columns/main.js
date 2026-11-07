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
  return (arg0.$classData.Z ? arg0.aj() : $objectClone(arg0));
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
        return null.nR();
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
        return instance.o(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.o.call(instance, x0);
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
        return instance.r();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.r.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.nS(x0);
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
$p.r = (function() {
  return $systemIdentityHashCode(this);
});
$p.o = (function(that) {
  return (this === that);
});
$p.l = (function() {
  var i = this.r();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.l();
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
$p.a5 = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.aj = (function() {
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
$p.a5 = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.aj = (function() {
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
$p.a5 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aj = (function() {
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
$p.a5 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aj = (function() {
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
$p.a5 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aj = (function() {
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
$p.a5 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aj = (function() {
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
$p.a5 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.aj = (function() {
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
$p.a5 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aj = (function() {
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
$p.a5 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aj = (function() {
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
    n: 1,
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
  $p.a5 = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.aj = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    n: 1,
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
  aT: 1
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
$p.gk = (function(array) {
  if ((array instanceof $ac_O)) {
    return array.a.length;
  } else if ((array instanceof $ac_Z)) {
    return array.a.length;
  } else if ((array instanceof $ac_C)) {
    return array.a.length;
  } else if ((array instanceof $ac_B)) {
    return array.a.length;
  } else if ((array instanceof $ac_S)) {
    return array.a.length;
  } else if ((array instanceof $ac_I)) {
    return array.a.length;
  } else if ((array instanceof $ac_J)) {
    return ((array.a.length >>> 1) | 0);
  } else if ((array instanceof $ac_F)) {
    return array.a.length;
  } else {
    if ((!(array instanceof $ac_D))) {
      $p_jl_reflect_Array$__mismatch__O__E(this, array);
    }
    return array.a.length;
  }
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  aU: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().nj(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().ni(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().m8(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().m7(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().kX(value);
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
  return $m_RTLong$().lk(lo, hi);
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
$p.lk = (function(lo, hi) {
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
$p.kX = (function(value) {
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
$p.m7 = (function(alo, ahi, blo, bhi) {
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
$p.m8 = (function(alo, ahi, blo, bhi) {
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
$p.ni = (function(alo, ahi, blo, bhi) {
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
$p.nj = (function(alo, ahi, blo, bhi) {
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
  aW: 1
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
$p.me = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.a.length !== ys.a.length)) {
    return false;
  }
  var len = xs.a.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().b(xs.a[i], ys.a[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  aX: 1
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
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, dest, start, n) {
  var it = $thiz.a9();
  var i = start;
  matchResult18: {
    var srclen;
    var x31 = $thiz.aa();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().gk(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().gk(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.P())) {
    $m_sr_ScalaRunTime$().lQ(dest, i, it.M());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.aa() === 0) ? (("" + start) + end) : $thiz.kK($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).al.N);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.al;
  if ((start.length !== 0)) {
    jsb.N = (("" + jsb.N) + start);
  }
  var it = $thiz.a9();
  if (it.P()) {
    var obj = it.M();
    jsb.N = (("" + jsb.N) + obj);
    while (it.P()) {
      if ((sep.length !== 0)) {
        jsb.N = (("" + jsb.N) + sep);
      }
      var obj$1 = it.M();
      jsb.N = (("" + jsb.N) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.N = (("" + jsb.N) + end);
  }
  return b;
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
  return ((x === y) || ($is_jl_Number(x) ? this.mg(x, y) : ((x instanceof $Char) ? this.mf(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.mg = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.hr(xn, y);
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
$p.hr = (function(xn, yn) {
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
      return (false && yn.o(x2));
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
      return (false && yn.o($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.mf = (function(xc, y) {
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
  cs: 1
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
$p.lR = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  ct: 1
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
$p.fw = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_I)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_D)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = xs.a;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  }
  if ((xs instanceof $ac_F)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_C)) {
    return $bC(xs.a[idx]);
  }
  if ((xs instanceof $ac_B)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_S)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_Z)) {
    return xs.a[idx];
  }
  if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  }
  throw new $c_s_MatchError(xs);
});
$p.lQ = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    xs.a[idx] = value;
    return (void 0);
  }
  if ((xs instanceof $ac_I)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_D)) {
    xs.a[idx] = (+value);
    return (void 0);
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = $uJ(value);
    var $x_2 = xs.a;
    var $x_3 = (idx << 1);
    $x_2[$x_3] = $x_1.l;
    $x_2[(($x_3 + 1) | 0)] = $x_1.h;
    return (void 0);
  }
  if ((xs instanceof $ac_F)) {
    xs.a[idx] = Math.fround(value);
    return (void 0);
  }
  if ((xs instanceof $ac_C)) {
    xs.a[idx] = $uC(value);
    return (void 0);
  }
  if ((xs instanceof $ac_B)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_S)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_Z)) {
    xs.a[idx] = (!(!value));
    return (void 0);
  }
  if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  }
  throw new $c_s_MatchError(xs);
});
$p.lC = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.A(), (x.y() + "("), ",", ")");
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  cu: 1
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
$p.mI = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.m9 = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().kX(dv);
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
$p.H = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.m9((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.mI($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.mD = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  cw: 1
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
    return new $c_T2(x, self.eR);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.ab, self.a6);
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.aF, self.ay, self.az);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.e6, self.aG, self.aH, self.aI);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.f5, self.e7, self.e8, self.e9, self.ea);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.f6, self.eb, self.ec, self.ed, self.ee, self.ef);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.f7, self.eg, self.eh, self.ei, self.ej, self.ek, self.el);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.f8, self.em, self.en, self.eo, self.ep, self.eq, self.er, self.es);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.f9, self.et, self.eu, self.ev, self.ew, self.ex, self.ey, self.ez, self.eA);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.eS, self.aX, self.aY, self.aZ, self.b0, self.b1, self.b2, self.b3, self.b4, self.aW);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.eT, self.b7, self.b8, self.b9, self.ba, self.bb, self.bc, self.bd, self.be, self.b5, self.b6);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.eU, self.bi, self.bj, self.bk, self.bl, self.bm, self.bn, self.bo, self.bp, self.bf, self.bg, self.bh);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.eV, self.bu, self.bv, self.bw, self.bx, self.by, self.bz, self.bA, self.bB, self.bq, self.br, self.bs, self.bt);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.eW, self.bH, self.bI, self.bJ, self.bK, self.bL, self.bM, self.bN, self.bO, self.bC, self.bD, self.bE, self.bF, self.bG);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.eX, self.bV, self.bW, self.bX, self.bY, self.bZ, self.c0, self.c1, self.c2, self.bP, self.bQ, self.bR, self.bS, self.bT, self.bU);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.eY, self.ca, self.cb, self.cc, self.cd, self.ce, self.cf, self.cg, self.ch, self.c3, self.c4, self.c5, self.c6, self.c7, self.c8, self.c9);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.eZ, self.cq, self.cr, self.cs, self.ct, self.cu, self.cv, self.cw, self.cx, self.ci, self.cj, self.ck, self.cl, self.cm, self.cn, self.co, self.cp);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.f0, self.cH, self.cI, self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cy, self.cz, self.cA, self.cB, self.cC, self.cD, self.cE, self.cF, self.cG);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.f1, self.cZ, self.d0, self.d1, self.d2, self.d3, self.d4, self.d5, self.d6, self.cP, self.cQ, self.cR, self.cS, self.cT, self.cU, self.cV, self.cW, self.cX, self.cY);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.f2, self.dh, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp, self.dq, self.d7, self.d8, self.d9, self.da, self.db, self.dc, self.dd, self.de, self.df, self.dg, self.di);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.f3, self.dB, self.dE, self.dF, self.dG, self.dH, self.dI, self.dJ, self.dK, self.dr, self.ds, self.dt, self.du, self.dv, self.dw, self.dx, self.dy, self.dz, self.dA, self.dC, self.dD);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.f4, self.dV, self.dZ, self.e0, self.e1, self.e2, self.e3, self.e4, self.e5, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dR, self.dS, self.dT, self.dU, self.dW, self.dX, self.dY]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.s()) | 0));
  arr.a[0] = x;
  var src = xxl.G;
  var length = xxl.s();
  src.a5(0, arr, 1, length);
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
      var $x_1 = new $c_T1(self.a6);
      break matchResult34$1;
    }
    if ((self instanceof $c_T3)) {
      var $x_1 = new $c_T2(self.ay, self.az);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.aG, self.aH, self.aI);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.e7, self.e8, self.e9, self.ea);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.eb, self.ec, self.ed, self.ee, self.ef);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.eg, self.eh, self.ei, self.ej, self.ek, self.el);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.em, self.en, self.eo, self.ep, self.eq, self.er, self.es);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.et, self.eu, self.ev, self.ew, self.ex, self.ey, self.ez, self.eA);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.aX, self.aY, self.aZ, self.b0, self.b1, self.b2, self.b3, self.b4, self.aW);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.b7, self.b8, self.b9, self.ba, self.bb, self.bc, self.bd, self.be, self.b5, self.b6);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.bi, self.bj, self.bk, self.bl, self.bm, self.bn, self.bo, self.bp, self.bf, self.bg, self.bh);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.bu, self.bv, self.bw, self.bx, self.by, self.bz, self.bA, self.bB, self.bq, self.br, self.bs, self.bt);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.bH, self.bI, self.bJ, self.bK, self.bL, self.bM, self.bN, self.bO, self.bC, self.bD, self.bE, self.bF, self.bG);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.bV, self.bW, self.bX, self.bY, self.bZ, self.c0, self.c1, self.c2, self.bP, self.bQ, self.bR, self.bS, self.bT, self.bU);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.ca, self.cb, self.cc, self.cd, self.ce, self.cf, self.cg, self.ch, self.c3, self.c4, self.c5, self.c6, self.c7, self.c8, self.c9);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.cq, self.cr, self.cs, self.ct, self.cu, self.cv, self.cw, self.cx, self.ci, self.cj, self.ck, self.cl, self.cm, self.cn, self.co, self.cp);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.cH, self.cI, self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cy, self.cz, self.cA, self.cB, self.cC, self.cD, self.cE, self.cF, self.cG);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.cZ, self.d0, self.d1, self.d2, self.d3, self.d4, self.d5, self.d6, self.cP, self.cQ, self.cR, self.cS, self.cT, self.cU, self.cV, self.cW, self.cX, self.cY);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.dh, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp, self.dq, self.d7, self.d8, self.d9, self.da, self.db, self.dc, self.dd, self.de, self.df, self.dg, self.di);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.dB, self.dE, self.dF, self.dG, self.dH, self.dI, self.dJ, self.dK, self.dr, self.ds, self.dt, self.du, self.dv, self.dw, self.dx, self.dy, self.dz, self.dA, self.dC, self.dD);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.dV, self.dZ, self.e0, self.e1, self.e2, self.e3, self.e4, self.e5, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dR, self.dS, self.dT, self.dU, self.dW, self.dX, self.dY);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.s() === 23)) {
    var elems = xxl.G;
    return new $c_T22(elems.a[1], elems.a[2], elems.a[3], elems.a[4], elems.a[5], elems.a[6], elems.a[7], elems.a[8], elems.a[9], elems.a[10], elems.a[11], elems.a[12], elems.a[13], elems.a[14], elems.a[15], elems.a[16], elems.a[17], elems.a[18], elems.a[19], elems.a[20], elems.a[21], elems.a[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.G.a.length - 1) | 0));
    var src = xxl.G;
    var length = ((xxl.G.a.length - 1) | 0);
    src.a5(1, arr$1, 0, length);
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
$p.mm = (function(xs) {
  switch (xs.a.length) {
    case 0: {
      return $m_T$package$EmptyTuple$();
      break;
    }
    case 1: {
      return new $c_T1(xs.a[0]);
      break;
    }
    case 2: {
      return new $c_T2(xs.a[0], xs.a[1]);
      break;
    }
    case 3: {
      return new $c_T3(xs.a[0], xs.a[1], xs.a[2]);
      break;
    }
    case 4: {
      return new $c_T4(xs.a[0], xs.a[1], xs.a[2], xs.a[3]);
      break;
    }
    case 5: {
      return new $c_T5(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4]);
      break;
    }
    case 6: {
      return new $c_T6(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5]);
      break;
    }
    case 7: {
      return new $c_T7(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6]);
      break;
    }
    case 8: {
      return new $c_T8(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7]);
      break;
    }
    case 9: {
      return new $c_T9(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8]);
      break;
    }
    case 10: {
      return new $c_T10(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9]);
      break;
    }
    case 11: {
      return new $c_T11(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10]);
      break;
    }
    case 12: {
      return new $c_T12(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11]);
      break;
    }
    case 13: {
      return new $c_T13(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12]);
      break;
    }
    case 14: {
      return new $c_T14(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13]);
      break;
    }
    case 15: {
      return new $c_T15(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14]);
      break;
    }
    case 16: {
      return new $c_T16(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15]);
      break;
    }
    case 17: {
      return new $c_T17(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16]);
      break;
    }
    case 18: {
      return new $c_T18(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16], xs.a[17]);
      break;
    }
    case 19: {
      return new $c_T19(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16], xs.a[17], xs.a[18]);
      break;
    }
    case 20: {
      return new $c_T20(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16], xs.a[17], xs.a[18], xs.a[19]);
      break;
    }
    case 21: {
      return new $c_T21(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16], xs.a[17], xs.a[18], xs.a[19], xs.a[20]);
      break;
    }
    case 22: {
      return new $c_T22(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16], xs.a[17], xs.a[18], xs.a[19], xs.a[20], xs.a[21]);
      break;
    }
    default: {
      return new $c_sr_TupleXXL(xs.aj());
    }
  }
});
$p.mn = (function(xs) {
  return ((xs.a.length <= 22) ? this.mm(xs) : new $c_sr_TupleXXL(xs));
});
$p.kQ = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.m1 = (function(self, that) {
  var selfSize = $m_sr_Tuples$().lj(self);
  if ((selfSize === 0)) {
    return that;
  }
  var thatSize = $m_sr_Tuples$().lj(that);
  if ((thatSize === 0)) {
    return self;
  }
  var arr = new $ac_O(((selfSize + thatSize) | 0));
  if ((self instanceof $c_sr_TupleXXL)) {
    var src = self.G;
    src.a5(0, arr, 0, selfSize);
  } else {
    self.A().kR(arr, 0, selfSize);
  }
  if ((that instanceof $c_sr_TupleXXL)) {
    var src$1 = that.G;
    src$1.a5(0, arr, selfSize, thatSize);
  } else {
    that.A().kR(arr, selfSize, thatSize);
  }
  return this.mn(arr);
});
$p.lj = (function(self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return 0;
  }
  if ((self !== null)) {
    return self.s();
  }
  throw new $c_s_MatchError(self);
});
$p.nA = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  cx: 1
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
$p.mu = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  cz: 1
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
$p.l3 = (function(this$, elem, from) {
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
$p.lq = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.a9();
  while (((i < len) && it.P())) {
    b.push(new $c_T2(this$[i], it.M()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.lr = (function(this$) {
  var len = (this$.length | 0);
  var b = new Array(len);
  var i = 0;
  while ((i < len)) {
    b[i] = new $c_T2(this$[i], i);
    i = ((1 + i) | 0);
  }
  return b;
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  cA: 1
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
$p.p = (function(left, right) {
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
  cB: 1
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
  this.jx = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.jx = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  cF: 1
}));
var $n_sjs_js_WrappedDictionary$Cache$;
function $m_sjs_js_WrappedDictionary$Cache$() {
  if ((!$n_sjs_js_WrappedDictionary$Cache$)) {
    $n_sjs_js_WrappedDictionary$Cache$ = new $c_sjs_js_WrappedDictionary$Cache$();
  }
  return $n_sjs_js_WrappedDictionary$Cache$;
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
$p.x = (function(hash, data) {
  var h = this.ld(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.ld = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.a4 = (function(hash, length) {
  return this.gD((hash ^ length));
});
$p.gD = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.B = (function(x, seed, ignorePrefix) {
  var arr = x.s();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.y()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.x(h, $f_T__hashCode__I(x.y()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.x(h, $m_sr_Statics$().H(x.k(i)));
      i = ((1 + i) | 0);
    }
    return this.a4(h, arr);
  }
});
$p.m0 = (function(x, seed, caseClassName) {
  var arr = x.s();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.y()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.x(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.x(h, $m_sr_Statics$().H(x.k(i)));
      i = ((1 + i) | 0);
    }
    return this.a4(h, arr);
  }
});
$p.nH = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.a9();
  while (iterator.P()) {
    var x = iterator.M();
    var h = $m_sr_Statics$().H(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.x(h$2, a);
  h$2 = this.x(h$2, b);
  h$2 = this.ld(h$2, c);
  return this.a4(h$2, n);
});
$p.n8 = (function(xs, seed) {
  var it = xs.a9();
  var h = seed;
  if ((!it.P())) {
    return this.a4(h, 0);
  }
  var x0 = it.M();
  if ((!it.P())) {
    return this.a4(this.x(h, $m_sr_Statics$().H(x0)), 1);
  }
  var x1 = it.M();
  var initial = $m_sr_Statics$().H(x0);
  h = this.x(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().H(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.P()) {
    h = this.x(h, prev);
    var hash = $m_sr_Statics$().H(it.M());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.x(h, hash);
      i = ((1 + i) | 0);
      while (it.P()) {
        h = this.x(h, $m_sr_Statics$().H(it.M()));
        i = ((1 + i) | 0);
      }
      return this.a4(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.gD(this.x(this.x(h0, rangeDiff), prev));
});
$p.lP = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().gk(a);
  switch (l) {
    case 0: {
      return this.a4(h, 0);
      break;
    }
    case 1: {
      return this.a4(this.x(h, $m_sr_Statics$().H($m_sr_ScalaRunTime$().fw(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().H($m_sr_ScalaRunTime$().fw(a, 0));
      h = this.x(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().H($m_sr_ScalaRunTime$().fw(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.x(h, prev);
        var hash = $m_sr_Statics$().H($m_sr_ScalaRunTime$().fw(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.x(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.x(h, $m_sr_Statics$().H($m_sr_ScalaRunTime$().fw(a, i)));
            i = ((1 + i) | 0);
          }
          return this.a4(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.gD(this.x(this.x(h0, rangeDiff), prev));
    }
  }
});
$p.nf = (function(start, step, last, seed) {
  return this.gD(this.x(this.x(this.x(seed, start), step), last));
});
$p.mx = (function(a, seed) {
  var h = seed;
  var l = a.L();
  switch (l) {
    case 0: {
      return this.a4(h, 0);
      break;
    }
    case 1: {
      return this.a4(this.x(h, $m_sr_Statics$().H(a.a8(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().H(a.a8(0));
      h = this.x(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().H(a.a8(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.x(h, prev);
        var hash = $m_sr_Statics$().H(a.a8(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.x(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.x(h, $m_sr_Statics$().H(a.a8(i)));
            i = ((1 + i) | 0);
          }
          return this.a4(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.gD(this.x(this.x(h0, rangeDiff), prev));
    }
  }
});
$p.mH = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.Q())) {
    elems.iO();
  }
  return ((rangeState === 2) ? this.nf(initial, rangeDiff, prev, seed) : this.a4(h, n));
});
function $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c, u, v) {
  return new $c_T2(c, new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, v));
}
function $p_Lsketches_rooms_columns_Columns$package$__columnFaces$1__sjs_js_Array($thiz) {
  var box = $m_Ltrivalibs_graphics_geometry_Box$().kM(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0), $m_Lsketches_rooms_columns_Columns$package$().fH, $m_Lsketches_rooms_columns_Columns$package$().fc, $m_Lsketches_rooms_columns_Columns$package$().fH);
  var f = ((c$2, uvw$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2, uvw$2.q, uvw$2.m));
  var $x_19 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0 = box.gK;
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_18 = f(x0, x1);
  var x0$1 = box.fK;
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_17 = f(x0$1, x1$1);
  var x0$2 = box.fL;
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_16 = f(x0$2, x1$2);
  var x0$3 = box.gL;
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_15 = $x_19.aD($x_18, $x_17, $x_16, f(x0$3, x1$3));
  var f$1 = ((c$2$1, uvw$2$1) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$1, (1.0 - uvw$2$1.q), uvw$2$1.m));
  var $x_14 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$4 = box.gJ;
  var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  var $x_13 = f$1(x0$4, x1$4);
  var x0$5 = box.fJ;
  var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_12 = f$1(x0$5, x1$5);
  var x0$6 = box.fI;
  var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_11 = f$1(x0$6, x1$6);
  var x0$7 = box.gI;
  var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_10 = $x_14.aD($x_13, $x_12, $x_11, f$1(x0$7, x1$7));
  var f$2 = ((c$2$2, uvw$2$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$2, (1.0 - uvw$2$2.n), uvw$2$2.m));
  var $x_9 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$8 = box.gI;
  var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_8 = f$2(x0$8, x1$8);
  var x0$9 = box.fI;
  var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_7 = f$2(x0$9, x1$9);
  var x0$10 = box.fK;
  var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_6 = f$2(x0$10, x1$10);
  var x0$11 = box.gK;
  var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_5 = $x_9.aD($x_8, $x_7, $x_6, f$2(x0$11, x1$11));
  var f$3 = ((c$2$3, uvw$2$3) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$3, uvw$2$3.n, uvw$2$3.m));
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$12 = box.gL;
  var x1$12 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_3 = f$3(x0$12, x1$12);
  var x0$13 = box.fL;
  var x1$13 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_2 = f$3(x0$13, x1$13);
  var x0$14 = box.fJ;
  var x1$14 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_1 = f$3(x0$14, x1$14);
  var x0$15 = box.gJ;
  var x1$15 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  return [$x_15, $x_10, $x_5, $x_4.aD($x_3, $x_2, $x_1, f$3(x0$15, x1$15))];
}
function $p_Lsketches_rooms_columns_Columns$package$__balkFaces$1__sjs_js_Array($thiz) {
  var box = $m_Ltrivalibs_graphics_geometry_Box$().kM(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0), $m_Lsketches_rooms_columns_Columns$package$().fH, $m_Lsketches_rooms_columns_Columns$package$().hA, $m_Lsketches_rooms_columns_Columns$package$().F);
  var f = ((c$2, uvw$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2, (1.0 - uvw$2.n), uvw$2.m));
  var $x_14 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0 = box.gI;
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_13 = f(x0, x1);
  var x0$1 = box.fI;
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_12 = f(x0$1, x1$1);
  var x0$2 = box.fK;
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_11 = f(x0$2, x1$2);
  var x0$3 = box.gK;
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_10 = $x_14.aD($x_13, $x_12, $x_11, f(x0$3, x1$3));
  var f$1 = ((c$2$1, uvw$2$1) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$1, uvw$2$1.n, uvw$2$1.m));
  var $x_9 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$4 = box.gL;
  var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_8 = f$1(x0$4, x1$4);
  var x0$5 = box.fL;
  var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_7 = f$1(x0$5, x1$5);
  var x0$6 = box.fJ;
  var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_6 = f$1(x0$6, x1$6);
  var x0$7 = box.gJ;
  var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  var $x_5 = $x_9.aD($x_8, $x_7, $x_6, f$1(x0$7, x1$7));
  var f$2 = ((c$2$2, uvw$2$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$2, uvw$2$2.q, uvw$2$2.n));
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$8 = box.fK;
  var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_3 = f$2(x0$8, x1$8);
  var x0$9 = box.fI;
  var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_2 = f$2(x0$9, x1$9);
  var x0$10 = box.fJ;
  var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_1 = f$2(x0$10, x1$10);
  var x0$11 = box.fL;
  var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  return [$x_10, $x_5, $x_4.aD($x_3, $x_2, $x_1, f$2(x0$11, x1$11))];
}
function $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$1, faces) {
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().lM(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, n$3, ref$3) => {
    var nVal = new $c_T3(n$3.q, n$3.m, n$3.n);
    var values$proxy1 = $m_sr_Tuples$().m1(vl.jA.fB(v$3), $m_sr_Tuples$().kQ(nVal, $m_T$package$EmptyTuple$()));
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.k(0);
    var value = nestedValues.k(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.k(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.k(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.k(1);
    var value$4 = nestedValues$2.k(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.k(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
    var tailOffset$7 = ((8 + tailOffset$4) | 0);
    var nestedValues$3 = values$proxy1.k(2);
    var value$6 = nestedValues$3.k(0);
    ref$3.dv.setFloat32(tailOffset$7, Math.fround(value$6), true);
    var tailOffset$8 = ((4 + tailOffset$7) | 0);
    var value$7 = nestedValues$3.k(1);
    ref$3.dv.setFloat32(tailOffset$8, Math.fround(value$7), true);
    var tailOffset$9 = ((4 + tailOffset$8) | 0);
    var value$8 = nestedValues$3.k(2);
    ref$3.dv.setFloat32(tailOffset$9, Math.fround(value$8), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  mesh$proxy1.mc();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.a1.length | 0))) {
    var n = (mesh$proxy1.a1[fi].length | 0);
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
    while ((fi < (mesh$proxy1.a1.length | 0))) {
      var arr = mesh$proxy1.a1[fi];
      var x$proxy2 = mesh$proxy1.fe[fi].fM;
      var si = 0;
      while ((si < (arr.length | 0))) {
        var x0 = arr[si];
        var index$proxy1 = vi;
        var offset$proxy9 = (index$proxy1 << 5);
        var x2 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy9);
        f(x0, x$proxy2, x2);
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
    while ((fi < (mesh$proxy1.a1.length | 0))) {
      var arr$2 = mesh$proxy1.a1[fi];
      var n$2 = (arr$2.length | 0);
      var x$proxy3 = mesh$proxy1.fe[fi].fM;
      var si$2 = 0;
      while ((si$2 < n$2)) {
        var x0$1 = arr$2[si$2];
        var index$proxy2 = vi;
        var offset$proxy10 = (index$proxy2 << 5);
        var x2$1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy10);
        f(x0$1, x$proxy3, x2$1);
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.mX(idxBuf, vertexCount));
  }
  return p$1.mk($x_1, (void 0), (void 0), (void 0), (void 0), (void 0));
}
/** @constructor */
function $c_Lsketches_rooms_columns_Columns$package$() {
  this.F = 0.0;
  this.fc = 0.0;
  this.fH = 0.0;
  this.hA = 0.0;
  this.W = 0;
  this.V = 0;
  $n_Lsketches_rooms_columns_Columns$package$ = this;
  this.F = 12.0;
  this.fc = 40.0;
  this.fH = 2.0;
  this.hA = (3.4 * $m_Lsketches_rooms_columns_Columns$package$().fH);
  this.W = 8;
  this.V = 4;
}
$p = $c_Lsketches_rooms_columns_Columns$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_columns_Columns$package$;
/** @constructor */
function $h_Lsketches_rooms_columns_Columns$package$() {
}
$h_Lsketches_rooms_columns_Columns$package$.prototype = $p;
$p.no = (function(canvas) {
  $m_Ltrivalibs_graphics_painter_Painter$().my(canvas, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$3) => {
    var n$proxy1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var center$proxy1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
    var f = ((pos$2, uv$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2(this, pos$2, uv$2.ff, uv$2.fg));
    var uvAtPivot = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
    var n = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$proxy1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var x = n.m;
    if (((+Math.abs(x)) > 0.999)) {
      var up = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    } else {
      var up = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    }
    var tangent = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), up, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n);
    var n$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var uDir = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), tangent, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n$1, tangent))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var uVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), uDir, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), 200.0);
    var vVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), 200.0);
    var tlPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), center$proxy1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), uVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.ff)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), vVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.fg));
    var trPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
    var blPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec);
    var brPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), blPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
    var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
    var $x_3 = f(tlPos, x1);
    var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
    var $x_2 = f(blPos, x1$1);
    var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
    var $x_1 = f(brPos, x1$2);
    var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
    var groundFaces = [$x_4.aD($x_3, $x_2, $x_1, f(trPos, x1$3))];
    var n$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
    var center$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, (0.5 * $m_Lsketches_rooms_columns_Columns$package$().fc), 0.0);
    var f$1 = ((pos$2$1, uv$2$1) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2(this, pos$2$1, uv$2$1.ff, uv$2$1.fg));
    var width = $m_Lsketches_rooms_columns_Columns$package$().F;
    var height = $m_Lsketches_rooms_columns_Columns$package$().fc;
    var uvAtPivot$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
    var n$2 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$proxy2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var x$1 = n$2.m;
    if (((+Math.abs(x$1)) > 0.999)) {
      var up$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    } else {
      var up$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    }
    var tangent$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), up$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n$2);
    var n$3 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var uDir$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), tangent$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$3, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n$3, tangent$1))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var uVec$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), uDir$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), width);
    var vVec$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$3, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir$1), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), height);
    var tlPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), center$proxy2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), uVec$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot$1.ff)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), vVec$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot$1.fg));
    var trPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), tlPos$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec$1);
    var blPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), tlPos$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec$1);
    var brPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), blPos$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec$1);
    var $x_8 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
    var $x_7 = f$1(tlPos$1, x1$4);
    var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
    var $x_6 = f$1(blPos$1, x1$5);
    var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
    var $x_5 = f$1(brPos$1, x1$6);
    var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
    var wallFaces = [$x_8.aD($x_7, $x_6, $x_5, f$1(trPos$1, x1$7))];
    var groundForm = $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$3, groundFaces);
    var wallForm = $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$3, wallFaces);
    var columnForm = $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$3, $p_Lsketches_rooms_columns_Columns$package$__columnFaces$1__sjs_js_Array(this));
    var balkForm = $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$3, $p_Lsketches_rooms_columns_Columns$package$__balkFaces$1__sjs_js_Array(this));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eK;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eK = reg;
    try {
      var AssignTarget_this = ctx.hj.ku;
      var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().nL($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().mZ(ctx.hh.ax("viewProj"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().l0(), ctx.hh.ax("model")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().l0(), $m_Ltrivalibs_graphics_math_gpu_vec4$().kN(ctx.hi.ax("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fz().K(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var x0 = (((("  " + AssignTarget_this.g9) + " = ") + value$proxy1.t) + ";");
      var AssignTarget_this$2 = ctx.hj.ht("normal");
      var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$().nK(ctx.hh.ax("normalMat"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ms(), ctx.hi.ax("normal"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$());
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var x1$8 = (((("  " + AssignTarget_this$2.g9) + " = ") + value$proxy3.t) + ";");
      var AssignTarget_this$3 = ctx.hj.ht("uv");
      var value$proxy5 = ctx.hi.ax("uv");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var x2 = (((("  " + AssignTarget_this$3.g9) + " = ") + value$proxy5.t) + ";");
      var array = [x0, x1$8, x2];
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
      var $x_9 = out.join("\n");
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eK = prev;
    }
    program.iw = $x_9;
    var array$1 = reg.is;
    var len = (array$1.length | 0);
    var i$1 = 0;
    while ((i$1 < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i$1]);
      i$1 = ((1 + i$1) | 0);
    }
    var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eK;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eK = reg$2;
    try {
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var uv = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("uv");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var col = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("col");
      var x0$2 = uv.kJ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().ml($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().lB(ctx$2.ga.ax("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), 40.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$()));
      var onFalse = $m_Ltrivalibs_graphics_math_gpu_vec3$().lN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().lo(ctx$2.ga.ax("uv")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().lp(ctx$2.ga.ax("uv")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fz().K(0.5));
      var onTrue = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().mi(ctx$2.ga.ax("normal"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$());
      var a = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().lo(uv);
      var b = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fz().K(0.2);
      var cond = $m_Ltrivalibs_graphics_math_gpu_expr$package$().kW(a, b);
      var a$1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().lp(uv);
      var b$1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fz().K(0.2);
      var other$6 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().kW(a$1, b$1);
      var cond$1 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().lV(cond, other$6);
      var x1$9 = col.kJ($m_Ltrivalibs_graphics_math_gpu_expr$package$().nr(onFalse, onTrue, cond$1));
      var AssignTarget_this$1 = ctx$2.kt.ht("color");
      var value$proxy7 = $m_Ltrivalibs_graphics_math_gpu_vec4$().kN(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fz().K(1.0));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var x2$1 = (((("  " + AssignTarget_this$1.g9) + " = ") + value$proxy7.t) + ";");
      var array$2 = [x0$2, x1$9, x2$1];
      var out$1 = [];
      var i$2 = 0;
      while ((i$2 < (array$2.length | 0))) {
        var idx$1 = i$2;
        var p$1 = array$2[idx$1];
        if ((p$1.length > 0)) {
          out$1.push(p$1);
        }
        i$2 = ((1 + i$2) | 0);
      }
      var $x_10 = out$1.join("\n");
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eK = prev$2;
    }
    program.iv = $x_10;
    var array$3 = reg$2.is;
    var len$1 = (array$3.length | 0);
    var i$3 = 0;
    while ((i$3 < len$1)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$3[i$3]);
      i$3 = ((1 + i$3) | 0);
    }
    var b$2 = program.iw;
    var b$3 = program.iv;
    var helperFns$proxy1 = program.mw();
    var id = p$3.eF;
    p$3.eF = ((1 + p$3.eF) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().p(["model"], $m_sjs_js_ArrayOpsCommon$().p(["normalMat"], $m_sjs_js_ArrayOpsCommon$().p(["viewProj"], [])));
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
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$2, b$3, helperFns$proxy1);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().p(["position"], $m_sjs_js_ArrayOpsCommon$().p(["uv"], $m_sjs_js_ArrayOpsCommon$().p(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().p(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().p(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().p(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().p([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().p([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().p(["uv"], $m_sjs_js_ArrayOpsCommon$().p(["normal"], [])), $m_sjs_js_ArrayOpsCommon$().p(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().p(["vec3<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().p([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().p(["color"], []), $m_sjs_js_ArrayOpsCommon$().p(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().p(["model"], $m_sjs_js_ArrayOpsCommon$().p(["normalMat"], $m_sjs_js_ArrayOpsCommon$().p(["viewProj"], []))), $m_sjs_js_ArrayOpsCommon$().p([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).g8.fC()], $m_sjs_js_ArrayOpsCommon$().p([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$()).g8.fC()], $m_sjs_js_ArrayOpsCommon$().p([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).g8.fC()], []))));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().p([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.g7, sd.g5, fragBuiltinParams);
    console.log(baseWgsl);
    var module = p$3.d.createShaderModule(({
      "code": baseWgsl
    }));
    var formats = $m_sjs_js_ArrayOpsCommon$().p(["float32x3"], $m_sjs_js_ArrayOpsCommon$().p(["float32x2"], $m_sjs_js_ArrayOpsCommon$().p(["float32x3"], [])));
    var sizes = $m_sjs_js_ArrayOpsCommon$().p([12], $m_sjs_js_ArrayOpsCommon$().p([8], $m_sjs_js_ArrayOpsCommon$().p([12], [])));
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
    var $x_14 = $m_sjs_js_ArrayOpsCommon$();
    var $x_13 = $m_sjs_js_ArrayOpsCommon$();
    var _2 = ({
      "type": "uniform"
    });
    var $x_12 = $m_sjs_js_ArrayOpsCommon$();
    var _2$1 = ({
      "type": "uniform"
    });
    var $x_11 = $m_sjs_js_ArrayOpsCommon$();
    var _2$2 = ({
      "type": "uniform"
    });
    var descriptors = $x_14.p([$x_13.p([({
      "binding": 0,
      "visibility": 1,
      "buffer": _2
    })], $x_12.p([({
      "binding": 1,
      "visibility": 1,
      "buffer": _2$1
    })], $x_11.p([({
      "binding": 2,
      "visibility": 1,
      "buffer": _2$2
    })], [])))], []);
    var result = [];
    var len$2 = (descriptors.length | 0);
    var i$5 = 0;
    while ((i$5 < len$2)) {
      var x0$4 = descriptors[i$5];
      (result.push(p$3.d.createBindGroupLayout(({
        "entries": x0$4
      }))) | 0);
      i$5 = ((1 + i$5) | 0);
    }
    var \u03b42$___1 = result;
    var \u03b42$___2 = $m_Ltrivalibs_graphics_shader_layouts$().kS(p$3.d, result);
    var bgls$2 = \u03b42$___1;
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().kS(p$3.d, bgls$2);
    var shade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], null, pl, false, dict, dict$2);
    var identityMat = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
    var identityN = $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(identityMat);
    var Bindable_this = p$3.hu(groundForm, shade, (void 0), (void 0));
    var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", identityMat);
    var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", identityN);
    var \u03b4scrutinee110 = e1$proxy1.u;
    var idx$2 = (Bindable_this.g4.v.model | 0);
    var existing = ((idx$2 < (Bindable_this.fo.length | 0)) ? Bindable_this.fo[idx$2] : null);
    var device$proxy1 = Bindable_this.im.d;
    if ((existing !== null)) {
      existing.g.h(existing.c, \u03b4scrutinee110);
      var $x_18 = existing.f.queue;
      var $x_17 = existing.e;
      var s$proxy2 = existing.c;
      var $x_16 = s$proxy2.dv.buffer;
      $x_18.writeBuffer($x_17, 0.0, $x_16);
      var $x_15 = existing;
    } else {
      var uv$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var buffer = new ArrayBuffer(64);
      var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
      var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), device$proxy1, uv$1);
      b$4.g.h(b$4.c, \u03b4scrutinee110);
      var $x_21 = b$4.f.queue;
      var $x_20 = b$4.e;
      var s$proxy3 = b$4.c;
      var $x_19 = s$proxy3.dv.buffer;
      $x_21.writeBuffer($x_20, 0.0, $x_19);
      var $x_15 = b$4;
    }
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, idx$2, $x_15);
    var \u03b4scrutinee125 = e2$proxy1.u;
    var idx$2$1 = (Bindable_this.g4.v.normalMat | 0);
    var existing$2 = ((idx$2$1 < (Bindable_this.fo.length | 0)) ? Bindable_this.fo[idx$2$1] : null);
    var device$proxy2 = Bindable_this.im.d;
    if ((existing$2 !== null)) {
      existing$2.g.h(existing$2.c, \u03b4scrutinee125);
      var $x_25 = existing$2.f.queue;
      var $x_24 = existing$2.e;
      var s$proxy4 = existing$2.c;
      var $x_23 = s$proxy4.dv.buffer;
      $x_25.writeBuffer($x_24, 0.0, $x_23);
      var $x_22 = existing$2;
    } else {
      var uv$2$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var buffer$2 = new ArrayBuffer(48);
      var arr$proxy7 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
      var b$2$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy7.dv, 0), device$proxy2, uv$2$2);
      b$2$1.g.h(b$2$1.c, \u03b4scrutinee125);
      var $x_28 = b$2$1.f.queue;
      var $x_27 = b$2$1.e;
      var s$proxy5 = b$2$1.c;
      var $x_26 = s$proxy5.dv.buffer;
      $x_28.writeBuffer($x_27, 0.0, $x_26);
      var $x_22 = b$2$1;
    }
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, idx$2$1, $x_22);
    var columnShape = p$3.hu(columnForm, shade, (void 0), (void 0));
    var balkShape = p$3.hu(balkForm, shade, (void 0), (void 0));
    var wallShape = p$3.hu(wallForm, shade, (void 0), (void 0));
    var colY = (0.5 * $m_Lsketches_rooms_columns_Columns$package$().fc);
    var iz = ((-$m_Lsketches_rooms_columns_Columns$package$().W) | 0);
    while ((iz <= $m_Lsketches_rooms_columns_Columns$package$().W)) {
      var z = (iz * $m_Lsketches_rooms_columns_Columns$package$().F);
      var x$proxy4 = (((-$m_Lsketches_rooms_columns_Columns$package$().V) | 0) * $m_Lsketches_rooms_columns_Columns$package$().F);
      var m = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$proxy4, colY, z, 1.0);
      var InstanceList_this = columnShape.I;
      var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m);
      var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m));
      var i$4$1 = InstanceList_this.a0();
      var Bindable_this$6 = InstanceList_this.E[i$4$1];
      var \u03b4scrutinee142 = e1$proxy2.u;
      var idx$3 = (Bindable_this$6.w.v.model | 0);
      var existing$3 = ((idx$3 < (Bindable_this$6.i.length | 0)) ? Bindable_this$6.i[idx$3] : null);
      var device$proxy3 = Bindable_this$6.z.d;
      if ((existing$3 !== null)) {
        existing$3.g.h(existing$3.c, \u03b4scrutinee142);
        var $x_32 = existing$3.f.queue;
        var $x_31 = existing$3.e;
        var s$proxy6 = existing$3.c;
        var $x_30 = s$proxy6.dv.buffer;
        $x_32.writeBuffer($x_31, 0.0, $x_30);
        var $x_29 = existing$3;
      } else {
        var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var buffer$3 = new ArrayBuffer(64);
        var arr$proxy8 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
        var b$3$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy8.dv, 0), device$proxy3, uv$3);
        b$3$1.g.h(b$3$1.c, \u03b4scrutinee142);
        var $x_35 = b$3$1.f.queue;
        var $x_34 = b$3$1.e;
        var s$proxy7 = b$3$1.c;
        var $x_33 = s$proxy7.dv.buffer;
        $x_35.writeBuffer($x_34, 0.0, $x_33);
        var $x_29 = b$3$1;
      }
      $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$6, idx$3, $x_29);
      var \u03b4scrutinee157 = e2$proxy2.u;
      var idx$4 = (Bindable_this$6.w.v.normalMat | 0);
      var existing$4 = ((idx$4 < (Bindable_this$6.i.length | 0)) ? Bindable_this$6.i[idx$4] : null);
      var device$proxy4 = Bindable_this$6.z.d;
      if ((existing$4 !== null)) {
        existing$4.g.h(existing$4.c, \u03b4scrutinee157);
        var $x_39 = existing$4.f.queue;
        var $x_38 = existing$4.e;
        var s$proxy8 = existing$4.c;
        var $x_37 = s$proxy8.dv.buffer;
        $x_39.writeBuffer($x_38, 0.0, $x_37);
        var $x_36 = existing$4;
      } else {
        var uv$4 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var buffer$4 = new ArrayBuffer(48);
        var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
        var b$4$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), device$proxy4, uv$4);
        b$4$1.g.h(b$4$1.c, \u03b4scrutinee157);
        var $x_42 = b$4$1.f.queue;
        var $x_41 = b$4$1.e;
        var s$proxy9 = b$4$1.c;
        var $x_40 = s$proxy9.dv.buffer;
        $x_42.writeBuffer($x_41, 0.0, $x_40);
        var $x_36 = b$4$1;
      }
      $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$6, idx$4, $x_36);
      var x$proxy5 = ($m_Lsketches_rooms_columns_Columns$package$().V * $m_Lsketches_rooms_columns_Columns$package$().F);
      var m$2 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$proxy5, colY, z, 1.0);
      var InstanceList_this$2 = columnShape.I;
      var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$2);
      var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$2));
      var i$5$1 = InstanceList_this$2.a0();
      var Bindable_this$11 = InstanceList_this$2.E[i$5$1];
      var \u03b4scrutinee174 = e1$proxy3.u;
      var idx$5 = (Bindable_this$11.w.v.model | 0);
      var existing$5 = ((idx$5 < (Bindable_this$11.i.length | 0)) ? Bindable_this$11.i[idx$5] : null);
      var device$proxy5 = Bindable_this$11.z.d;
      if ((existing$5 !== null)) {
        existing$5.g.h(existing$5.c, \u03b4scrutinee174);
        var $x_46 = existing$5.f.queue;
        var $x_45 = existing$5.e;
        var s$proxy10 = existing$5.c;
        var $x_44 = s$proxy10.dv.buffer;
        $x_46.writeBuffer($x_45, 0.0, $x_44);
        var $x_43 = existing$5;
      } else {
        var uv$5 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var buffer$5 = new ArrayBuffer(64);
        var arr$proxy10 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
        var b$5 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy10.dv, 0), device$proxy5, uv$5);
        b$5.g.h(b$5.c, \u03b4scrutinee174);
        var $x_49 = b$5.f.queue;
        var $x_48 = b$5.e;
        var s$proxy11 = b$5.c;
        var $x_47 = s$proxy11.dv.buffer;
        $x_49.writeBuffer($x_48, 0.0, $x_47);
        var $x_43 = b$5;
      }
      $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$11, idx$5, $x_43);
      var \u03b4scrutinee189 = e2$proxy3.u;
      var idx$6 = (Bindable_this$11.w.v.normalMat | 0);
      var existing$6 = ((idx$6 < (Bindable_this$11.i.length | 0)) ? Bindable_this$11.i[idx$6] : null);
      var device$proxy6 = Bindable_this$11.z.d;
      if ((existing$6 !== null)) {
        existing$6.g.h(existing$6.c, \u03b4scrutinee189);
        var $x_53 = existing$6.f.queue;
        var $x_52 = existing$6.e;
        var s$proxy12 = existing$6.c;
        var $x_51 = s$proxy12.dv.buffer;
        $x_53.writeBuffer($x_52, 0.0, $x_51);
        var $x_50 = existing$6;
      } else {
        var uv$6 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var buffer$6 = new ArrayBuffer(48);
        var arr$proxy11 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
        var b$6 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy11.dv, 0), device$proxy6, uv$6);
        b$6.g.h(b$6.c, \u03b4scrutinee189);
        var $x_56 = b$6.f.queue;
        var $x_55 = b$6.e;
        var s$proxy13 = b$6.c;
        var $x_54 = s$proxy13.dv.buffer;
        $x_56.writeBuffer($x_55, 0.0, $x_54);
        var $x_50 = b$6;
      }
      $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$11, idx$6, $x_50);
      var x$proxy6 = (((1 - $m_Lsketches_rooms_columns_Columns$package$().V) | 0) * $m_Lsketches_rooms_columns_Columns$package$().F);
      var m$3 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$proxy6, colY, z, 1.0);
      var InstanceList_this$3 = columnShape.I;
      var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$3);
      var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$3));
      var i$6 = InstanceList_this$3.a0();
      var Bindable_this$16 = InstanceList_this$3.E[i$6];
      var \u03b4scrutinee206 = e1$proxy4.u;
      var idx$7 = (Bindable_this$16.w.v.model | 0);
      var existing$7 = ((idx$7 < (Bindable_this$16.i.length | 0)) ? Bindable_this$16.i[idx$7] : null);
      var device$proxy7 = Bindable_this$16.z.d;
      if ((existing$7 !== null)) {
        existing$7.g.h(existing$7.c, \u03b4scrutinee206);
        var $x_60 = existing$7.f.queue;
        var $x_59 = existing$7.e;
        var s$proxy14 = existing$7.c;
        var $x_58 = s$proxy14.dv.buffer;
        $x_60.writeBuffer($x_59, 0.0, $x_58);
        var $x_57 = existing$7;
      } else {
        var uv$7 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var buffer$7 = new ArrayBuffer(64);
        var arr$proxy12 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$7), 1);
        var b$7 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy12.dv, 0), device$proxy7, uv$7);
        b$7.g.h(b$7.c, \u03b4scrutinee206);
        var $x_63 = b$7.f.queue;
        var $x_62 = b$7.e;
        var s$proxy15 = b$7.c;
        var $x_61 = s$proxy15.dv.buffer;
        $x_63.writeBuffer($x_62, 0.0, $x_61);
        var $x_57 = b$7;
      }
      $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$16, idx$7, $x_57);
      var \u03b4scrutinee221 = e2$proxy4.u;
      var idx$8 = (Bindable_this$16.w.v.normalMat | 0);
      var existing$8 = ((idx$8 < (Bindable_this$16.i.length | 0)) ? Bindable_this$16.i[idx$8] : null);
      var device$proxy8 = Bindable_this$16.z.d;
      if ((existing$8 !== null)) {
        existing$8.g.h(existing$8.c, \u03b4scrutinee221);
        var $x_67 = existing$8.f.queue;
        var $x_66 = existing$8.e;
        var s$proxy16 = existing$8.c;
        var $x_65 = s$proxy16.dv.buffer;
        $x_67.writeBuffer($x_66, 0.0, $x_65);
        var $x_64 = existing$8;
      } else {
        var uv$8 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var buffer$8 = new ArrayBuffer(48);
        var arr$proxy13 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$8), 1);
        var b$8 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy13.dv, 0), device$proxy8, uv$8);
        b$8.g.h(b$8.c, \u03b4scrutinee221);
        var $x_70 = b$8.f.queue;
        var $x_69 = b$8.e;
        var s$proxy17 = b$8.c;
        var $x_68 = s$proxy17.dv.buffer;
        $x_70.writeBuffer($x_69, 0.0, $x_68);
        var $x_64 = b$8;
      }
      $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$16, idx$8, $x_64);
      var x$proxy7 = ((($m_Lsketches_rooms_columns_Columns$package$().V - 1) | 0) * $m_Lsketches_rooms_columns_Columns$package$().F);
      var m$4 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$proxy7, colY, z, 1.0);
      var InstanceList_this$4 = columnShape.I;
      var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$4);
      var e2$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$4));
      var i$7 = InstanceList_this$4.a0();
      var Bindable_this$21 = InstanceList_this$4.E[i$7];
      var \u03b4scrutinee238 = e1$proxy5.u;
      var idx$9 = (Bindable_this$21.w.v.model | 0);
      var existing$9 = ((idx$9 < (Bindable_this$21.i.length | 0)) ? Bindable_this$21.i[idx$9] : null);
      var device$proxy9 = Bindable_this$21.z.d;
      if ((existing$9 !== null)) {
        existing$9.g.h(existing$9.c, \u03b4scrutinee238);
        var $x_74 = existing$9.f.queue;
        var $x_73 = existing$9.e;
        var s$proxy18 = existing$9.c;
        var $x_72 = s$proxy18.dv.buffer;
        $x_74.writeBuffer($x_73, 0.0, $x_72);
        var $x_71 = existing$9;
      } else {
        var uv$9 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var buffer$9 = new ArrayBuffer(64);
        var arr$proxy14 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$9), 1);
        var b$9 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy14.dv, 0), device$proxy9, uv$9);
        b$9.g.h(b$9.c, \u03b4scrutinee238);
        var $x_77 = b$9.f.queue;
        var $x_76 = b$9.e;
        var s$proxy19 = b$9.c;
        var $x_75 = s$proxy19.dv.buffer;
        $x_77.writeBuffer($x_76, 0.0, $x_75);
        var $x_71 = b$9;
      }
      $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$21, idx$9, $x_71);
      var \u03b4scrutinee253 = e2$proxy5.u;
      var idx$10 = (Bindable_this$21.w.v.normalMat | 0);
      var existing$10 = ((idx$10 < (Bindable_this$21.i.length | 0)) ? Bindable_this$21.i[idx$10] : null);
      var device$proxy10 = Bindable_this$21.z.d;
      if ((existing$10 !== null)) {
        existing$10.g.h(existing$10.c, \u03b4scrutinee253);
        var $x_81 = existing$10.f.queue;
        var $x_80 = existing$10.e;
        var s$proxy20 = existing$10.c;
        var $x_79 = s$proxy20.dv.buffer;
        $x_81.writeBuffer($x_80, 0.0, $x_79);
        var $x_78 = existing$10;
      } else {
        var uv$10 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var buffer$10 = new ArrayBuffer(48);
        var arr$proxy15 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$10), 1);
        var b$10 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy15.dv, 0), device$proxy10, uv$10);
        b$10.g.h(b$10.c, \u03b4scrutinee253);
        var $x_84 = b$10.f.queue;
        var $x_83 = b$10.e;
        var s$proxy21 = b$10.c;
        var $x_82 = s$proxy21.dv.buffer;
        $x_84.writeBuffer($x_83, 0.0, $x_82);
        var $x_78 = b$10;
      }
      $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$21, idx$10, $x_78);
      iz = ((1 + iz) | 0);
    }
    var ix = ((-$m_Lsketches_rooms_columns_Columns$package$().V) | 0);
    while ((ix <= $m_Lsketches_rooms_columns_Columns$package$().V)) {
      var x$3 = (ix * $m_Lsketches_rooms_columns_Columns$package$().F);
      var z$proxy1 = (((-$m_Lsketches_rooms_columns_Columns$package$().W) | 0) * $m_Lsketches_rooms_columns_Columns$package$().F);
      var m$5 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$3, colY, z$proxy1, 1.0);
      var InstanceList_this$5 = columnShape.I;
      var e1$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$5);
      var e2$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$5));
      var i$8 = InstanceList_this$5.a0();
      var Bindable_this$26 = InstanceList_this$5.E[i$8];
      var \u03b4scrutinee270 = e1$proxy6.u;
      var idx$11 = (Bindable_this$26.w.v.model | 0);
      var existing$11 = ((idx$11 < (Bindable_this$26.i.length | 0)) ? Bindable_this$26.i[idx$11] : null);
      var device$proxy11 = Bindable_this$26.z.d;
      if ((existing$11 !== null)) {
        existing$11.g.h(existing$11.c, \u03b4scrutinee270);
        var $x_88 = existing$11.f.queue;
        var $x_87 = existing$11.e;
        var s$proxy22 = existing$11.c;
        var $x_86 = s$proxy22.dv.buffer;
        $x_88.writeBuffer($x_87, 0.0, $x_86);
        var $x_85 = existing$11;
      } else {
        var uv$11 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var buffer$11 = new ArrayBuffer(64);
        var arr$proxy16 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$11), 1);
        var b$11 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy16.dv, 0), device$proxy11, uv$11);
        b$11.g.h(b$11.c, \u03b4scrutinee270);
        var $x_91 = b$11.f.queue;
        var $x_90 = b$11.e;
        var s$proxy23 = b$11.c;
        var $x_89 = s$proxy23.dv.buffer;
        $x_91.writeBuffer($x_90, 0.0, $x_89);
        var $x_85 = b$11;
      }
      $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$26, idx$11, $x_85);
      var \u03b4scrutinee285 = e2$proxy6.u;
      var idx$12 = (Bindable_this$26.w.v.normalMat | 0);
      var existing$12 = ((idx$12 < (Bindable_this$26.i.length | 0)) ? Bindable_this$26.i[idx$12] : null);
      var device$proxy12 = Bindable_this$26.z.d;
      if ((existing$12 !== null)) {
        existing$12.g.h(existing$12.c, \u03b4scrutinee285);
        var $x_95 = existing$12.f.queue;
        var $x_94 = existing$12.e;
        var s$proxy24 = existing$12.c;
        var $x_93 = s$proxy24.dv.buffer;
        $x_95.writeBuffer($x_94, 0.0, $x_93);
        var $x_92 = existing$12;
      } else {
        var uv$12 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var buffer$12 = new ArrayBuffer(48);
        var arr$proxy17 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$12), 1);
        var b$12 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy17.dv, 0), device$proxy12, uv$12);
        b$12.g.h(b$12.c, \u03b4scrutinee285);
        var $x_98 = b$12.f.queue;
        var $x_97 = b$12.e;
        var s$proxy25 = b$12.c;
        var $x_96 = s$proxy25.dv.buffer;
        $x_98.writeBuffer($x_97, 0.0, $x_96);
        var $x_92 = b$12;
      }
      $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$26, idx$12, $x_92);
      var z$proxy2 = ($m_Lsketches_rooms_columns_Columns$package$().W * $m_Lsketches_rooms_columns_Columns$package$().F);
      var m$6 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$3, colY, z$proxy2, 1.0);
      var InstanceList_this$6 = columnShape.I;
      var e1$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$6);
      var e2$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$6));
      var i$9 = InstanceList_this$6.a0();
      var Bindable_this$31 = InstanceList_this$6.E[i$9];
      var \u03b4scrutinee302 = e1$proxy7.u;
      var idx$13 = (Bindable_this$31.w.v.model | 0);
      var existing$13 = ((idx$13 < (Bindable_this$31.i.length | 0)) ? Bindable_this$31.i[idx$13] : null);
      var device$proxy13 = Bindable_this$31.z.d;
      if ((existing$13 !== null)) {
        existing$13.g.h(existing$13.c, \u03b4scrutinee302);
        var $x_102 = existing$13.f.queue;
        var $x_101 = existing$13.e;
        var s$proxy26 = existing$13.c;
        var $x_100 = s$proxy26.dv.buffer;
        $x_102.writeBuffer($x_101, 0.0, $x_100);
        var $x_99 = existing$13;
      } else {
        var uv$13 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var buffer$13 = new ArrayBuffer(64);
        var arr$proxy18 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$13), 1);
        var b$13 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy18.dv, 0), device$proxy13, uv$13);
        b$13.g.h(b$13.c, \u03b4scrutinee302);
        var $x_105 = b$13.f.queue;
        var $x_104 = b$13.e;
        var s$proxy27 = b$13.c;
        var $x_103 = s$proxy27.dv.buffer;
        $x_105.writeBuffer($x_104, 0.0, $x_103);
        var $x_99 = b$13;
      }
      $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$31, idx$13, $x_99);
      var \u03b4scrutinee317 = e2$proxy7.u;
      var idx$14 = (Bindable_this$31.w.v.normalMat | 0);
      var existing$14 = ((idx$14 < (Bindable_this$31.i.length | 0)) ? Bindable_this$31.i[idx$14] : null);
      var device$proxy14 = Bindable_this$31.z.d;
      if ((existing$14 !== null)) {
        existing$14.g.h(existing$14.c, \u03b4scrutinee317);
        var $x_109 = existing$14.f.queue;
        var $x_108 = existing$14.e;
        var s$proxy28 = existing$14.c;
        var $x_107 = s$proxy28.dv.buffer;
        $x_109.writeBuffer($x_108, 0.0, $x_107);
        var $x_106 = existing$14;
      } else {
        var uv$14 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var buffer$14 = new ArrayBuffer(48);
        var arr$proxy19 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$14), 1);
        var b$14 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy19.dv, 0), device$proxy14, uv$14);
        b$14.g.h(b$14.c, \u03b4scrutinee317);
        var $x_112 = b$14.f.queue;
        var $x_111 = b$14.e;
        var s$proxy29 = b$14.c;
        var $x_110 = s$proxy29.dv.buffer;
        $x_112.writeBuffer($x_111, 0.0, $x_110);
        var $x_106 = b$14;
      }
      $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$31, idx$14, $x_106);
      var z$proxy3 = (((1 - $m_Lsketches_rooms_columns_Columns$package$().W) | 0) * $m_Lsketches_rooms_columns_Columns$package$().F);
      var m$7 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$3, colY, z$proxy3, 1.0);
      var InstanceList_this$7 = columnShape.I;
      var e1$proxy8 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$7);
      var e2$proxy8 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$7));
      var i$10 = InstanceList_this$7.a0();
      var Bindable_this$36 = InstanceList_this$7.E[i$10];
      var \u03b4scrutinee334 = e1$proxy8.u;
      var idx$15 = (Bindable_this$36.w.v.model | 0);
      var existing$15 = ((idx$15 < (Bindable_this$36.i.length | 0)) ? Bindable_this$36.i[idx$15] : null);
      var device$proxy15 = Bindable_this$36.z.d;
      if ((existing$15 !== null)) {
        existing$15.g.h(existing$15.c, \u03b4scrutinee334);
        var $x_116 = existing$15.f.queue;
        var $x_115 = existing$15.e;
        var s$proxy30 = existing$15.c;
        var $x_114 = s$proxy30.dv.buffer;
        $x_116.writeBuffer($x_115, 0.0, $x_114);
        var $x_113 = existing$15;
      } else {
        var uv$15 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var buffer$15 = new ArrayBuffer(64);
        var arr$proxy20 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$15), 1);
        var b$15 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy20.dv, 0), device$proxy15, uv$15);
        b$15.g.h(b$15.c, \u03b4scrutinee334);
        var $x_119 = b$15.f.queue;
        var $x_118 = b$15.e;
        var s$proxy31 = b$15.c;
        var $x_117 = s$proxy31.dv.buffer;
        $x_119.writeBuffer($x_118, 0.0, $x_117);
        var $x_113 = b$15;
      }
      $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$36, idx$15, $x_113);
      var \u03b4scrutinee349 = e2$proxy8.u;
      var idx$16 = (Bindable_this$36.w.v.normalMat | 0);
      var existing$16 = ((idx$16 < (Bindable_this$36.i.length | 0)) ? Bindable_this$36.i[idx$16] : null);
      var device$proxy16 = Bindable_this$36.z.d;
      if ((existing$16 !== null)) {
        existing$16.g.h(existing$16.c, \u03b4scrutinee349);
        var $x_123 = existing$16.f.queue;
        var $x_122 = existing$16.e;
        var s$proxy32 = existing$16.c;
        var $x_121 = s$proxy32.dv.buffer;
        $x_123.writeBuffer($x_122, 0.0, $x_121);
        var $x_120 = existing$16;
      } else {
        var uv$16 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var buffer$16 = new ArrayBuffer(48);
        var arr$proxy21 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$16), 1);
        var b$16 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy21.dv, 0), device$proxy16, uv$16);
        b$16.g.h(b$16.c, \u03b4scrutinee349);
        var $x_126 = b$16.f.queue;
        var $x_125 = b$16.e;
        var s$proxy33 = b$16.c;
        var $x_124 = s$proxy33.dv.buffer;
        $x_126.writeBuffer($x_125, 0.0, $x_124);
        var $x_120 = b$16;
      }
      $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$36, idx$16, $x_120);
      var z$proxy4 = ((($m_Lsketches_rooms_columns_Columns$package$().W - 1) | 0) * $m_Lsketches_rooms_columns_Columns$package$().F);
      var m$8 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$3, colY, z$proxy4, 1.0);
      var InstanceList_this$8 = columnShape.I;
      var e1$proxy9 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$8);
      var e2$proxy9 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$8));
      var i$11 = InstanceList_this$8.a0();
      var Bindable_this$41 = InstanceList_this$8.E[i$11];
      var \u03b4scrutinee366 = e1$proxy9.u;
      var idx$17 = (Bindable_this$41.w.v.model | 0);
      var existing$17 = ((idx$17 < (Bindable_this$41.i.length | 0)) ? Bindable_this$41.i[idx$17] : null);
      var device$proxy17 = Bindable_this$41.z.d;
      if ((existing$17 !== null)) {
        existing$17.g.h(existing$17.c, \u03b4scrutinee366);
        var $x_130 = existing$17.f.queue;
        var $x_129 = existing$17.e;
        var s$proxy34 = existing$17.c;
        var $x_128 = s$proxy34.dv.buffer;
        $x_130.writeBuffer($x_129, 0.0, $x_128);
        var $x_127 = existing$17;
      } else {
        var uv$17 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var buffer$17 = new ArrayBuffer(64);
        var arr$proxy22 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$17), 1);
        var b$17 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy22.dv, 0), device$proxy17, uv$17);
        b$17.g.h(b$17.c, \u03b4scrutinee366);
        var $x_133 = b$17.f.queue;
        var $x_132 = b$17.e;
        var s$proxy35 = b$17.c;
        var $x_131 = s$proxy35.dv.buffer;
        $x_133.writeBuffer($x_132, 0.0, $x_131);
        var $x_127 = b$17;
      }
      $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$41, idx$17, $x_127);
      var \u03b4scrutinee381 = e2$proxy9.u;
      var idx$18 = (Bindable_this$41.w.v.normalMat | 0);
      var existing$18 = ((idx$18 < (Bindable_this$41.i.length | 0)) ? Bindable_this$41.i[idx$18] : null);
      var device$proxy18 = Bindable_this$41.z.d;
      if ((existing$18 !== null)) {
        existing$18.g.h(existing$18.c, \u03b4scrutinee381);
        var $x_137 = existing$18.f.queue;
        var $x_136 = existing$18.e;
        var s$proxy36 = existing$18.c;
        var $x_135 = s$proxy36.dv.buffer;
        $x_137.writeBuffer($x_136, 0.0, $x_135);
        var $x_134 = existing$18;
      } else {
        var uv$18 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var buffer$18 = new ArrayBuffer(48);
        var arr$proxy23 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$18), 1);
        var b$18 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy23.dv, 0), device$proxy18, uv$18);
        b$18.g.h(b$18.c, \u03b4scrutinee381);
        var $x_140 = b$18.f.queue;
        var $x_139 = b$18.e;
        var s$proxy37 = b$18.c;
        var $x_138 = s$proxy37.dv.buffer;
        $x_140.writeBuffer($x_139, 0.0, $x_138);
        var $x_134 = b$18;
      }
      $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$41, idx$18, $x_134);
      ix = ((1 + ix) | 0);
    }
    var balkY = ($m_Lsketches_rooms_columns_Columns$package$().fc - (0.5 * $m_Lsketches_rooms_columns_Columns$package$().hA));
    ix = ((-$m_Lsketches_rooms_columns_Columns$package$().V) | 0);
    while ((ix <= $m_Lsketches_rooms_columns_Columns$package$().V)) {
      var t$proxy1 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3((ix * $m_Lsketches_rooms_columns_Columns$package$().F), balkY, 0.0), new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, 0.0, 0.0, 1.0), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, (2.0 * $m_Lsketches_rooms_columns_Columns$package$().W)));
      var m$9 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eP(t$proxy1.aR, t$proxy1.aP, t$proxy1.aQ);
      var InstanceList_this$9 = balkShape.I;
      var e1$proxy10 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$9);
      var e2$proxy10 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$9));
      var i$12 = InstanceList_this$9.a0();
      var Bindable_this$46 = InstanceList_this$9.E[i$12];
      var \u03b4scrutinee398 = e1$proxy10.u;
      var idx$19 = (Bindable_this$46.w.v.model | 0);
      var existing$19 = ((idx$19 < (Bindable_this$46.i.length | 0)) ? Bindable_this$46.i[idx$19] : null);
      var device$proxy19 = Bindable_this$46.z.d;
      if ((existing$19 !== null)) {
        existing$19.g.h(existing$19.c, \u03b4scrutinee398);
        var $x_144 = existing$19.f.queue;
        var $x_143 = existing$19.e;
        var s$proxy38 = existing$19.c;
        var $x_142 = s$proxy38.dv.buffer;
        $x_144.writeBuffer($x_143, 0.0, $x_142);
        var $x_141 = existing$19;
      } else {
        var uv$19 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var buffer$19 = new ArrayBuffer(64);
        var arr$proxy24 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$19), 1);
        var b$19 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy24.dv, 0), device$proxy19, uv$19);
        b$19.g.h(b$19.c, \u03b4scrutinee398);
        var $x_147 = b$19.f.queue;
        var $x_146 = b$19.e;
        var s$proxy39 = b$19.c;
        var $x_145 = s$proxy39.dv.buffer;
        $x_147.writeBuffer($x_146, 0.0, $x_145);
        var $x_141 = b$19;
      }
      $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$46, idx$19, $x_141);
      var \u03b4scrutinee413 = e2$proxy10.u;
      var idx$20 = (Bindable_this$46.w.v.normalMat | 0);
      var existing$20 = ((idx$20 < (Bindable_this$46.i.length | 0)) ? Bindable_this$46.i[idx$20] : null);
      var device$proxy20 = Bindable_this$46.z.d;
      if ((existing$20 !== null)) {
        existing$20.g.h(existing$20.c, \u03b4scrutinee413);
        var $x_151 = existing$20.f.queue;
        var $x_150 = existing$20.e;
        var s$proxy40 = existing$20.c;
        var $x_149 = s$proxy40.dv.buffer;
        $x_151.writeBuffer($x_150, 0.0, $x_149);
        var $x_148 = existing$20;
      } else {
        var uv$20 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var buffer$20 = new ArrayBuffer(48);
        var arr$proxy25 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$20), 1);
        var b$20 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy25.dv, 0), device$proxy20, uv$20);
        b$20.g.h(b$20.c, \u03b4scrutinee413);
        var $x_154 = b$20.f.queue;
        var $x_153 = b$20.e;
        var s$proxy41 = b$20.c;
        var $x_152 = s$proxy41.dv.buffer;
        $x_154.writeBuffer($x_153, 0.0, $x_152);
        var $x_148 = b$20;
      }
      $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$46, idx$20, $x_148);
      ix = ((1 + ix) | 0);
    }
    iz = ((-$m_Lsketches_rooms_columns_Columns$package$().W) | 0);
    while ((iz <= $m_Lsketches_rooms_columns_Columns$package$().W)) {
      var t$proxy2 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, balkY, (iz * $m_Lsketches_rooms_columns_Columns$package$().F)), $m_Ltrivalibs_graphics_math_cpu_Quat$().gj(1.5707963267948966), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, (2.0 * $m_Lsketches_rooms_columns_Columns$package$().V)));
      var m$10 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eP(t$proxy2.aR, t$proxy2.aP, t$proxy2.aQ);
      var InstanceList_this$10 = balkShape.I;
      var e1$proxy11 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$10);
      var e2$proxy11 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$10));
      var i$13 = InstanceList_this$10.a0();
      var Bindable_this$51 = InstanceList_this$10.E[i$13];
      var \u03b4scrutinee430 = e1$proxy11.u;
      var idx$21 = (Bindable_this$51.w.v.model | 0);
      var existing$21 = ((idx$21 < (Bindable_this$51.i.length | 0)) ? Bindable_this$51.i[idx$21] : null);
      var device$proxy21 = Bindable_this$51.z.d;
      if ((existing$21 !== null)) {
        existing$21.g.h(existing$21.c, \u03b4scrutinee430);
        var $x_158 = existing$21.f.queue;
        var $x_157 = existing$21.e;
        var s$proxy42 = existing$21.c;
        var $x_156 = s$proxy42.dv.buffer;
        $x_158.writeBuffer($x_157, 0.0, $x_156);
        var $x_155 = existing$21;
      } else {
        var uv$21 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var buffer$21 = new ArrayBuffer(64);
        var arr$proxy26 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$21), 1);
        var b$21 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy26.dv, 0), device$proxy21, uv$21);
        b$21.g.h(b$21.c, \u03b4scrutinee430);
        var $x_161 = b$21.f.queue;
        var $x_160 = b$21.e;
        var s$proxy43 = b$21.c;
        var $x_159 = s$proxy43.dv.buffer;
        $x_161.writeBuffer($x_160, 0.0, $x_159);
        var $x_155 = b$21;
      }
      $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$51, idx$21, $x_155);
      var \u03b4scrutinee445 = e2$proxy11.u;
      var idx$22 = (Bindable_this$51.w.v.normalMat | 0);
      var existing$22 = ((idx$22 < (Bindable_this$51.i.length | 0)) ? Bindable_this$51.i[idx$22] : null);
      var device$proxy22 = Bindable_this$51.z.d;
      if ((existing$22 !== null)) {
        existing$22.g.h(existing$22.c, \u03b4scrutinee445);
        var $x_165 = existing$22.f.queue;
        var $x_164 = existing$22.e;
        var s$proxy44 = existing$22.c;
        var $x_163 = s$proxy44.dv.buffer;
        $x_165.writeBuffer($x_164, 0.0, $x_163);
        var $x_162 = existing$22;
      } else {
        var uv$22 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var buffer$22 = new ArrayBuffer(48);
        var arr$proxy27 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$22), 1);
        var b$22 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy27.dv, 0), device$proxy22, uv$22);
        b$22.g.h(b$22.c, \u03b4scrutinee445);
        var $x_168 = b$22.f.queue;
        var $x_167 = b$22.e;
        var s$proxy45 = b$22.c;
        var $x_166 = s$proxy45.dv.buffer;
        $x_168.writeBuffer($x_167, 0.0, $x_166);
        var $x_162 = b$22;
      }
      $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$51, idx$22, $x_162);
      iz = ((1 + iz) | 0);
    }
    var t$proxy3 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, (((-$m_Lsketches_rooms_columns_Columns$package$().W) | 0) * $m_Lsketches_rooms_columns_Columns$package$().F)), new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, 0.0, 0.0, 1.0), new $c_Ltrivalibs_graphics_math_cpu_Vec3(((2.0 * $m_Lsketches_rooms_columns_Columns$package$().V) + 2.0), 1.0, 1.0));
    var m$11 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eP(t$proxy3.aR, t$proxy3.aP, t$proxy3.aQ);
    var InstanceList_this$11 = wallShape.I;
    var e1$proxy12 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$11);
    var e2$proxy12 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$11));
    var i$14 = InstanceList_this$11.a0();
    var Bindable_this$56 = InstanceList_this$11.E[i$14];
    var \u03b4scrutinee462 = e1$proxy12.u;
    var idx$23 = (Bindable_this$56.w.v.model | 0);
    var existing$23 = ((idx$23 < (Bindable_this$56.i.length | 0)) ? Bindable_this$56.i[idx$23] : null);
    var device$proxy23 = Bindable_this$56.z.d;
    if ((existing$23 !== null)) {
      existing$23.g.h(existing$23.c, \u03b4scrutinee462);
      var $x_172 = existing$23.f.queue;
      var $x_171 = existing$23.e;
      var s$proxy46 = existing$23.c;
      var $x_170 = s$proxy46.dv.buffer;
      $x_172.writeBuffer($x_171, 0.0, $x_170);
      var $x_169 = existing$23;
    } else {
      var uv$23 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var buffer$23 = new ArrayBuffer(64);
      var arr$proxy28 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$23), 1);
      var b$23 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy28.dv, 0), device$proxy23, uv$23);
      b$23.g.h(b$23.c, \u03b4scrutinee462);
      var $x_175 = b$23.f.queue;
      var $x_174 = b$23.e;
      var s$proxy47 = b$23.c;
      var $x_173 = s$proxy47.dv.buffer;
      $x_175.writeBuffer($x_174, 0.0, $x_173);
      var $x_169 = b$23;
    }
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$56, idx$23, $x_169);
    var \u03b4scrutinee477 = e2$proxy12.u;
    var idx$24 = (Bindable_this$56.w.v.normalMat | 0);
    var existing$24 = ((idx$24 < (Bindable_this$56.i.length | 0)) ? Bindable_this$56.i[idx$24] : null);
    var device$proxy24 = Bindable_this$56.z.d;
    if ((existing$24 !== null)) {
      existing$24.g.h(existing$24.c, \u03b4scrutinee477);
      var $x_179 = existing$24.f.queue;
      var $x_178 = existing$24.e;
      var s$proxy48 = existing$24.c;
      var $x_177 = s$proxy48.dv.buffer;
      $x_179.writeBuffer($x_178, 0.0, $x_177);
      var $x_176 = existing$24;
    } else {
      var uv$24 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var buffer$24 = new ArrayBuffer(48);
      var arr$proxy29 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$24), 1);
      var b$24 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy29.dv, 0), device$proxy24, uv$24);
      b$24.g.h(b$24.c, \u03b4scrutinee477);
      var $x_182 = b$24.f.queue;
      var $x_181 = b$24.e;
      var s$proxy49 = b$24.c;
      var $x_180 = s$proxy49.dv.buffer;
      $x_182.writeBuffer($x_181, 0.0, $x_180);
      var $x_176 = b$24;
    }
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$56, idx$24, $x_176);
    var t$proxy4 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3((((-$m_Lsketches_rooms_columns_Columns$package$().V) | 0) * $m_Lsketches_rooms_columns_Columns$package$().F), 0.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Quat$().gj(1.5707963267948966), new $c_Ltrivalibs_graphics_math_cpu_Vec3(((2.0 * $m_Lsketches_rooms_columns_Columns$package$().W) + 2.0), 1.0, 1.0));
    var m$12 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eP(t$proxy4.aR, t$proxy4.aP, t$proxy4.aQ);
    var InstanceList_this$12 = wallShape.I;
    var e1$proxy13 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$12);
    var e2$proxy13 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$12));
    var i$15 = InstanceList_this$12.a0();
    var Bindable_this$61 = InstanceList_this$12.E[i$15];
    var \u03b4scrutinee494 = e1$proxy13.u;
    var idx$25 = (Bindable_this$61.w.v.model | 0);
    var existing$25 = ((idx$25 < (Bindable_this$61.i.length | 0)) ? Bindable_this$61.i[idx$25] : null);
    var device$proxy25 = Bindable_this$61.z.d;
    if ((existing$25 !== null)) {
      existing$25.g.h(existing$25.c, \u03b4scrutinee494);
      var $x_186 = existing$25.f.queue;
      var $x_185 = existing$25.e;
      var s$proxy50 = existing$25.c;
      var $x_184 = s$proxy50.dv.buffer;
      $x_186.writeBuffer($x_185, 0.0, $x_184);
      var $x_183 = existing$25;
    } else {
      var uv$25 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var buffer$25 = new ArrayBuffer(64);
      var arr$proxy30 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$25), 1);
      var b$25 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy30.dv, 0), device$proxy25, uv$25);
      b$25.g.h(b$25.c, \u03b4scrutinee494);
      var $x_189 = b$25.f.queue;
      var $x_188 = b$25.e;
      var s$proxy51 = b$25.c;
      var $x_187 = s$proxy51.dv.buffer;
      $x_189.writeBuffer($x_188, 0.0, $x_187);
      var $x_183 = b$25;
    }
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$61, idx$25, $x_183);
    var \u03b4scrutinee509 = e2$proxy13.u;
    var idx$26 = (Bindable_this$61.w.v.normalMat | 0);
    var existing$26 = ((idx$26 < (Bindable_this$61.i.length | 0)) ? Bindable_this$61.i[idx$26] : null);
    var device$proxy26 = Bindable_this$61.z.d;
    if ((existing$26 !== null)) {
      existing$26.g.h(existing$26.c, \u03b4scrutinee509);
      var $x_193 = existing$26.f.queue;
      var $x_192 = existing$26.e;
      var s$proxy52 = existing$26.c;
      var $x_191 = s$proxy52.dv.buffer;
      $x_193.writeBuffer($x_192, 0.0, $x_191);
      var $x_190 = existing$26;
    } else {
      var uv$26 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var buffer$26 = new ArrayBuffer(48);
      var arr$proxy31 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$26), 1);
      var b$26 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy31.dv, 0), device$proxy26, uv$26);
      b$26.g.h(b$26.c, \u03b4scrutinee509);
      var $x_196 = b$26.f.queue;
      var $x_195 = b$26.e;
      var s$proxy53 = b$26.c;
      var $x_194 = s$proxy53.dv.buffer;
      $x_196.writeBuffer($x_195, 0.0, $x_194);
      var $x_190 = b$26;
    }
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$61, idx$26, $x_190);
    var t$proxy5 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, ($m_Lsketches_rooms_columns_Columns$package$().W * $m_Lsketches_rooms_columns_Columns$package$().F)), $m_Ltrivalibs_graphics_math_cpu_Quat$().gj(3.141592653589793), new $c_Ltrivalibs_graphics_math_cpu_Vec3(((2.0 * $m_Lsketches_rooms_columns_Columns$package$().V) + 2.0), 1.0, 1.0));
    var m$13 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eP(t$proxy5.aR, t$proxy5.aP, t$proxy5.aQ);
    var InstanceList_this$13 = wallShape.I;
    var e1$proxy14 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$13);
    var e2$proxy14 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$13));
    var i$16 = InstanceList_this$13.a0();
    var Bindable_this$66 = InstanceList_this$13.E[i$16];
    var \u03b4scrutinee526 = e1$proxy14.u;
    var idx$27 = (Bindable_this$66.w.v.model | 0);
    var existing$27 = ((idx$27 < (Bindable_this$66.i.length | 0)) ? Bindable_this$66.i[idx$27] : null);
    var device$proxy27 = Bindable_this$66.z.d;
    if ((existing$27 !== null)) {
      existing$27.g.h(existing$27.c, \u03b4scrutinee526);
      var $x_200 = existing$27.f.queue;
      var $x_199 = existing$27.e;
      var s$proxy54 = existing$27.c;
      var $x_198 = s$proxy54.dv.buffer;
      $x_200.writeBuffer($x_199, 0.0, $x_198);
      var $x_197 = existing$27;
    } else {
      var uv$27 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var buffer$27 = new ArrayBuffer(64);
      var arr$proxy32 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$27), 1);
      var b$27 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy32.dv, 0), device$proxy27, uv$27);
      b$27.g.h(b$27.c, \u03b4scrutinee526);
      var $x_203 = b$27.f.queue;
      var $x_202 = b$27.e;
      var s$proxy55 = b$27.c;
      var $x_201 = s$proxy55.dv.buffer;
      $x_203.writeBuffer($x_202, 0.0, $x_201);
      var $x_197 = b$27;
    }
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$66, idx$27, $x_197);
    var \u03b4scrutinee541 = e2$proxy14.u;
    var idx$28 = (Bindable_this$66.w.v.normalMat | 0);
    var existing$28 = ((idx$28 < (Bindable_this$66.i.length | 0)) ? Bindable_this$66.i[idx$28] : null);
    var device$proxy28 = Bindable_this$66.z.d;
    if ((existing$28 !== null)) {
      existing$28.g.h(existing$28.c, \u03b4scrutinee541);
      var $x_207 = existing$28.f.queue;
      var $x_206 = existing$28.e;
      var s$proxy56 = existing$28.c;
      var $x_205 = s$proxy56.dv.buffer;
      $x_207.writeBuffer($x_206, 0.0, $x_205);
      var $x_204 = existing$28;
    } else {
      var uv$28 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var buffer$28 = new ArrayBuffer(48);
      var arr$proxy33 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$28), 1);
      var b$28 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy33.dv, 0), device$proxy28, uv$28);
      b$28.g.h(b$28.c, \u03b4scrutinee541);
      var $x_210 = b$28.f.queue;
      var $x_209 = b$28.e;
      var s$proxy57 = b$28.c;
      var $x_208 = s$proxy57.dv.buffer;
      $x_210.writeBuffer($x_209, 0.0, $x_208);
      var $x_204 = b$28;
    }
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$66, idx$28, $x_204);
    var t$proxy6 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3(($m_Lsketches_rooms_columns_Columns$package$().V * $m_Lsketches_rooms_columns_Columns$package$().F), 0.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Quat$().gj(4.71238898038469), new $c_Ltrivalibs_graphics_math_cpu_Vec3(((2.0 * $m_Lsketches_rooms_columns_Columns$package$().W) + 2.0), 1.0, 1.0));
    var m$14 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eP(t$proxy6.aR, t$proxy6.aP, t$proxy6.aQ);
    var InstanceList_this$14 = wallShape.I;
    var e1$proxy15 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$14);
    var e2$proxy15 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$14));
    var i$17 = InstanceList_this$14.a0();
    var Bindable_this$71 = InstanceList_this$14.E[i$17];
    var \u03b4scrutinee558 = e1$proxy15.u;
    var idx$29 = (Bindable_this$71.w.v.model | 0);
    var existing$29 = ((idx$29 < (Bindable_this$71.i.length | 0)) ? Bindable_this$71.i[idx$29] : null);
    var device$proxy29 = Bindable_this$71.z.d;
    if ((existing$29 !== null)) {
      existing$29.g.h(existing$29.c, \u03b4scrutinee558);
      var $x_214 = existing$29.f.queue;
      var $x_213 = existing$29.e;
      var s$proxy58 = existing$29.c;
      var $x_212 = s$proxy58.dv.buffer;
      $x_214.writeBuffer($x_213, 0.0, $x_212);
      var $x_211 = existing$29;
    } else {
      var uv$29 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var buffer$29 = new ArrayBuffer(64);
      var arr$proxy34 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$29), 1);
      var b$29 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy34.dv, 0), device$proxy29, uv$29);
      b$29.g.h(b$29.c, \u03b4scrutinee558);
      var $x_217 = b$29.f.queue;
      var $x_216 = b$29.e;
      var s$proxy59 = b$29.c;
      var $x_215 = s$proxy59.dv.buffer;
      $x_217.writeBuffer($x_216, 0.0, $x_215);
      var $x_211 = b$29;
    }
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$71, idx$29, $x_211);
    var \u03b4scrutinee573 = e2$proxy15.u;
    var idx$30 = (Bindable_this$71.w.v.normalMat | 0);
    var existing$30 = ((idx$30 < (Bindable_this$71.i.length | 0)) ? Bindable_this$71.i[idx$30] : null);
    var device$proxy30 = Bindable_this$71.z.d;
    if ((existing$30 !== null)) {
      existing$30.g.h(existing$30.c, \u03b4scrutinee573);
      var $x_221 = existing$30.f.queue;
      var $x_220 = existing$30.e;
      var s$proxy60 = existing$30.c;
      var $x_219 = s$proxy60.dv.buffer;
      $x_221.writeBuffer($x_220, 0.0, $x_219);
      var $x_218 = existing$30;
    } else {
      var uv$30 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var buffer$30 = new ArrayBuffer(48);
      var arr$proxy35 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$30), 1);
      var b$30 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy35.dv, 0), device$proxy30, uv$30);
      b$30.g.h(b$30.c, \u03b4scrutinee573);
      var $x_224 = b$30.f.queue;
      var $x_223 = b$30.e;
      var s$proxy61 = b$30.c;
      var $x_222 = s$proxy61.dv.buffer;
      $x_224.writeBuffer($x_223, 0.0, $x_222);
      var $x_218 = b$30;
    }
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$71, idx$30, $x_218);
    var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy1 = ul$proxy1.jz;
    var buffer$31 = new ArrayBuffer(64);
    var arr$proxy36 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$31), 1);
    var viewProj = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy36.dv, 0), p$3.d, uv$proxy1);
    var clearColor$1 = $m_Ltrivalibs_graphics_math_cpu_Vec4$().mr().K(new $c_T4(0.9, 0.95, 0.99, 1.0));
    var shapes$1 = [Bindable_this, columnShape, balkShape, wallShape];
    var Panel_this = p$3.n9((void 0), (void 0), clearColor$1, true, true, (void 0), (void 0), (void 0), (void 0), (void 0), shapes$1, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    var e1$proxy16 = new $c_Ltrivalibs_graphics_painter_BindPair("viewProj", viewProj);
    var \u03b4scrutinee587 = e1$proxy16.u;
    var dict$proxy1 = Panel_this.ig;
    dict$proxy1.viewProj = \u03b4scrutinee587;
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().lH(0.6, 1.0, 0.1, 200.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 3.0, 15.0));
    $m_Ltrivalibs_dev_devPreserve$().lO(cam, "camera");
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().mC(p$3.lZ(), true, 400.0, 5.0, true, (void 0), 90.0, 50.0);
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, input, 3.0, 4.0);
    p$3.n6(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      var cw = (+v1$2);
      var ch = (+v2$2);
      var aspect$2 = (cw / ch);
      var fov$1 = cam.eJ;
      var near$1 = cam.fr;
      var far$1 = cam.fq;
      var rotH$2 = cam.a3;
      var rotV$2 = cam.aC;
      var pos$2$2 = cam.O;
      cam.ja(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$2$2);
    })));
    $m_Ltrivalibs_utils_animation_animate$package$().lG(((p$3$1) => ((arg1$2) => {
      var tpf = (+arg1$2);
      input.eQ(tpf);
      controller.eQ(tpf);
      var value$proxy23 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().l1(), cam.ir, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.nM());
      viewProj.g.h(viewProj.c, value$proxy23);
      var $x_227 = viewProj.f.queue;
      var $x_226 = viewProj.e;
      var s$proxy62 = viewProj.c;
      var $x_225 = s$proxy62.dv.buffer;
      $x_227.writeBuffer($x_226, 0.0, $x_225);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$3$1, Panel_this);
      p$3$1.nw(Panel_this);
    }))(p$3));
  })));
});
var $d_Lsketches_rooms_columns_Columns$package$ = new $TypeData().i($c_Lsketches_rooms_columns_Columns$package$, "sketches.rooms.columns.Columns$package$", ({
  cI: 1
}));
var $n_Lsketches_rooms_columns_Columns$package$;
function $m_Lsketches_rooms_columns_Columns$package$() {
  if ((!$n_Lsketches_rooms_columns_Columns$package$)) {
    $n_Lsketches_rooms_columns_Columns$package$ = new $c_Lsketches_rooms_columns_Columns$package$();
  }
  return $n_Lsketches_rooms_columns_Columns$package$;
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
  cJ: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.fd = null;
  this.hB = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.fd = [];
  this.hB = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.m6 = (function() {
  return (import.meta.hot !== (void 0));
});
$p.n1 = (function() {
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
$p.ny = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().n1()) + ":") + label);
});
$p.jd = (function() {
  return window.sessionStorage;
});
$p.ng = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().jd().getItem(key);
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
$p.nP = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().jd().setItem(key, JSON.stringify(json));
});
$p.nk = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().jd().removeItem(key);
});
$p.md = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().hB)) {
    $m_Ltrivalibs_dev_dev$package$().hB = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().fd.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().fd[i].hn();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.nh = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().md();
  $m_Ltrivalibs_dev_dev$package$().fd.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().l3($m_Ltrivalibs_dev_dev$package$().fd, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().fd.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  cK: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.O.q, cam.O.m, cam.O.n, cam.a3, cam.aC];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.eJ;
      var aspect$1 = cam.fp;
      var near$1 = cam.fr;
      var far$1 = cam.fq;
      cam.ja(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
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
$p.lO = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().m6())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().ny(label);
    var initPos = cam.O;
    var initRotH = cam.a3;
    var initRotV = cam.aC;
    var stored = $m_Ltrivalibs_dev_dev$package$().ng(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.hn();
      $m_Ltrivalibs_dev_dev$package$().nk(sk);
      var fov$proxy1 = cam.eJ;
      var aspect$proxy1 = cam.fp;
      var near$proxy1 = cam.fr;
      var far$proxy1 = cam.fq;
      cam.ja(fov$proxy1, aspect$proxy1, near$proxy1, far$proxy1, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().nh(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().nP(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  cL: 1
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
  this.c = null;
  this.f = null;
  this.g = null;
  this.e = null;
  this.c = buffer;
  this.f = device;
  this.g = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.e = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ao)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  ao: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box(center, size, frontTopLeft, frontTopRight, frontBottomLeft, frontBottomRight, backTopLeft, backTopRight, backBottomLeft, backBottomRight) {
  this.gK = null;
  this.gL = null;
  this.fK = null;
  this.fL = null;
  this.gI = null;
  this.gJ = null;
  this.fI = null;
  this.fJ = null;
  this.gK = frontTopLeft;
  this.gL = frontTopRight;
  this.fK = frontBottomLeft;
  this.fL = frontBottomRight;
  this.gI = backTopLeft;
  this.gJ = backTopRight;
  this.fI = backBottomLeft;
  this.fJ = backBottomRight;
}
$p = $c_Ltrivalibs_graphics_geometry_Box.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box() {
}
$h_Ltrivalibs_graphics_geometry_Box.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Box = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box, "trivalibs.graphics.geometry.Box", ({
  cQ: 1
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
$p.kM = (function(center, width, height, depth) {
  var hw = (0.5 * width);
  var hh = (0.5 * height);
  var hd = (0.5 * depth);
  var cx = center.q;
  var cy = center.m;
  var cz = center.n;
  return new $c_Ltrivalibs_graphics_geometry_Box(center, new $c_Ltrivalibs_graphics_math_cpu_Vec3(width, height, depth), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz - hd)));
});
var $d_Ltrivalibs_graphics_geometry_Box$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box$, "trivalibs.graphics.geometry.Box$", ({
  cR: 1
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
  this.hC = null;
  this.gM = null;
  this.hC = vertices;
  this.gM = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  cS: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FaceData(normal, section) {
  this.fM = null;
  this.lu = 0;
  this.fM = normal;
  this.lu = section;
}
$p = $c_Ltrivalibs_graphics_geometry_FaceData.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FaceData;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FaceData() {
}
$h_Ltrivalibs_graphics_geometry_FaceData.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_FaceData = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FaceData, "trivalibs.graphics.geometry.FaceData", ({
  cT: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.fN = null;
  this.a1 = null;
  this.fe = null;
  this.gO = null;
  this.gN = null;
  this.fN = evidence$1;
  this.a1 = [];
  this.fe = [];
  this.gO = [];
  this.gN = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.lE = (function(face, normal, section) {
  var faceIdx = (this.a1.length | 0);
  this.a1.push(face);
  this.fe.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().nd(this.fN.aE(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().mu(Object, this.gN, key)) {
      var $x_2 = this.gO;
      var dict = this.gN;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().jx.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.jD.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.gO.length | 0);
      var dict$1 = this.gN;
      dict$1[key] = idx;
      this.gO.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.fN.aE(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
$p.mc = (function() {
  var hasQuads = false;
  var i = 0;
  while ((i < (this.a1.length | 0))) {
    var arr = this.a1[i];
    if ((this.fe[i].fM === null)) {
      var $x_2 = this.fe[i];
      if (((arr.length | 0) === 3)) {
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$().j8(this.a1[i], this.fN);
      } else {
        hasQuads = true;
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().j8(this.a1[i], this.fN);
      }
      $x_2.fM = $x_1;
    }
    i = ((1 + i) | 0);
  }
  return hasQuads;
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  cW: 1
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
$p.lM = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().lF(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  cX: 1
}));
var $n_Ltrivalibs_graphics_geometry_Mesh$;
function $m_Ltrivalibs_graphics_geometry_Mesh$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Mesh$)) {
    $n_Ltrivalibs_graphics_geometry_Mesh$ = new $c_Ltrivalibs_graphics_geometry_Mesh$();
  }
  return $n_Ltrivalibs_graphics_geometry_Mesh$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIndex, vertexSlot) {
  this.lv = 0;
  this.lw = 0;
  this.lv = faceIndex;
  this.lw = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  cZ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.lx = null;
  this.jD = null;
  this.lx = position;
  this.jD = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  d4: 1
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
$p.mX = (function(idxBuf, vertexCount) {
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
  d5: 1
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
$p.lF = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.lE(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  d6: 1
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
$p.nd = (function(v) {
  return (((($doubleToInt((10000.0 * v.q)) + ",") + $doubleToInt((10000.0 * v.m))) + ",") + $doubleToInt((10000.0 * v.n)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  d7: 1
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
$p.aD = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
$p.nC = (function(q) {
  return q[0];
});
$p.lT = (function(q) {
  return q[1];
});
$p.lW = (function(q) {
  return q[2];
});
$p.nF = (function(q) {
  return q[3];
});
$p.j8 = (function(q, evidence$1) {
  var a = evidence$1.aE(this.nC(q));
  var b = evidence$1.aE(this.lT(q));
  var c = evidence$1.aE(this.lW(q));
  var d = evidence$1.aE(this.nF(q));
  var d1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((c.q - a.q), (c.m - a.m), (c.n - a.n));
  var d2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((d.q - b.q), (d.m - b.m), (d.n - b.n));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), d1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), d2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  d9: 1
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
$p.lD = (function(tri) {
  return tri[0];
});
$p.lS = (function(tri) {
  return tri[1];
});
$p.lX = (function(tri) {
  return tri[2];
});
$p.j8 = (function(tri, evidence$1) {
  var pa = evidence$1.aE(this.lD(tri));
  var pb = evidence$1.aE(this.lS(tri));
  var pc = evidence$1.aE(this.lX(tri));
  var e1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pb.q - pa.q), (pb.m - pa.m), (pb.n - pa.n));
  var e2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pc.q - pa.q), (pc.m - pa.m), (pc.n - pa.n));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), e1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), e2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$, "trivalibs.graphics.geometry.polygon$package$Triangle$", ({
  da: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
}
function $f_Ltrivalibs_graphics_math_Mat3ImmutableOps__transpose__O__Ltrivalibs_graphics_math_Mat3Base__O($thiz, m, x$2) {
  return new $c_Ltrivalibs_graphics_math_cpu_Mat3((+x$2.ao(m)), (+x$2.ar(m)), (+x$2.au(m)), (+x$2.ap(m)), (+x$2.as(m)), (+x$2.av(m)), (+x$2.aq(m)), (+x$2.at(m)), (+x$2.aw(m)));
}
function $f_Ltrivalibs_graphics_math_Mat3ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat3Base__O($thiz, m, x$2) {
  var a00 = (+x$2.ao(m));
  var a01 = (+x$2.ap(m));
  var a02 = (+x$2.aq(m));
  var a10 = (+x$2.ar(m));
  var a11 = (+x$2.as(m));
  var a12 = (+x$2.at(m));
  var a20 = (+x$2.au(m));
  var a21 = (+x$2.av(m));
  var a22 = (+x$2.aw(m));
  var c00 = ((a11 * a22) - (a12 * a21));
  var c01 = (-((a10 * a22) - (a12 * a20)));
  var c02 = ((a10 * a21) - (a11 * a20));
  var c10 = (-((a01 * a22) - (a02 * a21)));
  var c11 = ((a00 * a22) - (a02 * a20));
  var c12 = (-((a00 * a21) - (a01 * a20)));
  var c20 = ((a01 * a12) - (a02 * a11));
  var c21 = (-((a00 * a12) - (a02 * a10)));
  var c22 = ((a00 * a11) - (a01 * a10));
  var det = (((a00 * c00) + (a10 * c10)) + (a20 * c20));
  var invDet = (1.0 / det);
  return new $c_Ltrivalibs_graphics_math_cpu_Mat3((c00 * invDet), (c10 * invDet), (c20 * invDet), (c01 * invDet), (c11 * invDet), (c21 * invDet), (c02 * invDet), (c12 * invDet), (c22 * invDet));
}
function $f_Ltrivalibs_graphics_math_Mat3MutableOps__set__O__Ltrivalibs_graphics_math_Mat3Mutable__O__Ltrivalibs_graphics_math_Mat3Base__V($thiz, m, mb, other, x$4) {
  mb.gm(m, (+x$4.ao(other)));
  mb.gn(m, (+x$4.ap(other)));
  mb.go(m, (+x$4.aq(other)));
  mb.gq(m, (+x$4.ar(other)));
  mb.gr(m, (+x$4.as(other)));
  mb.gs(m, (+x$4.at(other)));
  mb.gu(m, (+x$4.au(other)));
  mb.gv(m, (+x$4.av(other)));
  mb.gw(m, (+x$4.aw(other)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($thiz, fovY, aspect, near, far) {
  var x = (0.5 * fovY);
  var f = (1.0 / (+Math.tan(x)));
  var rInv = (1.0 / (near - far));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((f / aspect), 0.0, 0.0, 0.0, 0.0, f, 0.0, 0.0, 0.0, 0.0, (far * rInv), (-1.0), 0.0, 0.0, ((near * far) * rInv), 0.0);
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($thiz, m, x$2, other) {
  var a00 = (+x$2.ao(m));
  var a01 = (+x$2.ap(m));
  var a02 = (+x$2.aq(m));
  var a03 = (+x$2.gp(m));
  var a10 = (+x$2.ar(m));
  var a11 = (+x$2.as(m));
  var a12 = (+x$2.at(m));
  var a13 = (+x$2.gt(m));
  var a20 = (+x$2.au(m));
  var a21 = (+x$2.av(m));
  var a22 = (+x$2.aw(m));
  var a23 = (+x$2.gx(m));
  var a30 = (+x$2.gy(m));
  var a31 = (+x$2.gz(m));
  var a32 = (+x$2.gA(m));
  var a33 = (+x$2.gB(m));
  var b00 = (+x$2.ao(other));
  var b01 = (+x$2.ap(other));
  var b02 = (+x$2.aq(other));
  var b03 = (+x$2.gp(other));
  var b10 = (+x$2.ar(other));
  var b11 = (+x$2.as(other));
  var b12 = (+x$2.at(other));
  var b13 = (+x$2.gt(other));
  var b20 = (+x$2.au(other));
  var b21 = (+x$2.av(other));
  var b22 = (+x$2.aw(other));
  var b23 = (+x$2.gx(other));
  var b30 = (+x$2.gy(other));
  var b31 = (+x$2.gz(other));
  var b32 = (+x$2.gA(other));
  var b33 = (+x$2.gB(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.ao(m));
  var a01 = (+x$2.ap(m));
  var a02 = (+x$2.aq(m));
  var a03 = (+x$2.gp(m));
  var a10 = (+x$2.ar(m));
  var a11 = (+x$2.as(m));
  var a12 = (+x$2.at(m));
  var a13 = (+x$2.gt(m));
  var a20 = (+x$2.au(m));
  var a21 = (+x$2.av(m));
  var a22 = (+x$2.aw(m));
  var a23 = (+x$2.gx(m));
  var a30 = (+x$2.gy(m));
  var a31 = (+x$2.gz(m));
  var a32 = (+x$2.gA(m));
  var a33 = (+x$2.gB(m));
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
  mb.gm(m, (+x$4.ao(other)));
  mb.gn(m, (+x$4.ap(other)));
  mb.go(m, (+x$4.aq(other)));
  mb.l5(m, (+x$4.gp(other)));
  mb.gq(m, (+x$4.ar(other)));
  mb.gr(m, (+x$4.as(other)));
  mb.gs(m, (+x$4.at(other)));
  mb.l6(m, (+x$4.gt(other)));
  mb.gu(m, (+x$4.au(other)));
  mb.gv(m, (+x$4.av(other)));
  mb.gw(m, (+x$4.aw(other)));
  mb.l7(m, (+x$4.gx(other)));
  mb.l8(m, (+x$4.gy(other)));
  mb.l9(m, (+x$4.gz(other)));
  mb.la(m, (+x$4.gA(other)));
  mb.lb(m, (+x$4.gB(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.q + other.q), (v.m + other.m), (v.n + other.n));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((-v.q), (-v.m), (-v.n));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.q - other.q), (v.m - other.m), (v.n - other.n));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.q * scalar), (v.m * scalar), (v.n * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.q / scalar), (v.m / scalar), (v.n / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.m * other.n) - (v.n * other.m)), ((v.n * other.q) - (v.q * other.n)), ((v.q * other.m) - (v.m * other.q)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(x$2, v));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat3(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  this.hD = 0.0;
  this.hE = 0.0;
  this.hF = 0.0;
  this.hG = 0.0;
  this.hH = 0.0;
  this.hI = 0.0;
  this.hJ = 0.0;
  this.hK = 0.0;
  this.hL = 0.0;
  this.hD = m00;
  this.hE = m01;
  this.hF = m02;
  this.hG = m10;
  this.hH = m11;
  this.hI = m12;
  this.hJ = m20;
  this.hK = m21;
  this.hL = m22;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat3() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat3, "trivalibs.graphics.math.cpu.Mat3", ({
  ds: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.gP = 0.0;
  this.gQ = 0.0;
  this.gR = 0.0;
  this.hM = 0.0;
  this.gS = 0.0;
  this.gT = 0.0;
  this.gU = 0.0;
  this.hN = 0.0;
  this.gV = 0.0;
  this.gW = 0.0;
  this.gX = 0.0;
  this.hO = 0.0;
  this.hP = 0.0;
  this.hQ = 0.0;
  this.hR = 0.0;
  this.hS = 0.0;
  this.gP = m00;
  this.gQ = m01;
  this.gR = m02;
  this.hM = m03;
  this.gS = m10;
  this.gT = m11;
  this.gU = m12;
  this.hN = m13;
  this.gV = m20;
  this.gW = m21;
  this.gX = m22;
  this.hO = m23;
  this.hP = m30;
  this.hQ = m31;
  this.hR = m32;
  this.hS = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  dv: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.hU = 0.0;
  this.hV = 0.0;
  this.hW = 0.0;
  this.hT = 0.0;
  this.hU = x;
  this.hV = y;
  this.hW = z;
  this.hT = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  dy: 1
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
$p.mo = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.gj = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  dz: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((((((+x$2.aS(q)) * (+x$2.aT(p))) + ((+x$2.aT(q)) * (+x$2.aS(p)))) + ((+x$2.aU(q)) * (+x$2.aV(p)))) - ((+x$2.aV(q)) * (+x$2.aU(p)))), (((((+x$2.aS(q)) * (+x$2.aU(p))) - ((+x$2.aT(q)) * (+x$2.aV(p)))) + ((+x$2.aU(q)) * (+x$2.aS(p)))) + ((+x$2.aV(q)) * (+x$2.aT(p)))), (((((+x$2.aS(q)) * (+x$2.aV(p))) + ((+x$2.aT(q)) * (+x$2.aU(p)))) - ((+x$2.aU(q)) * (+x$2.aT(p)))) + ((+x$2.aV(q)) * (+x$2.aS(p)))), (((((+x$2.aS(q)) * (+x$2.aS(p))) - ((+x$2.aT(q)) * (+x$2.aT(p)))) - ((+x$2.aU(q)) * (+x$2.aU(p)))) - ((+x$2.aV(q)) * (+x$2.aV(p)))));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.ff = 0.0;
  this.fg = 0.0;
  this.ff = x;
  this.fg = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  dD: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.q = 0.0;
  this.m = 0.0;
  this.n = 0.0;
  this.q = x;
  this.m = y;
  this.n = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  dE: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4(x, y, z, w) {
  this.gZ = 0.0;
  this.h0 = 0.0;
  this.h1 = 0.0;
  this.gY = 0.0;
  this.gZ = x;
  this.h0 = y;
  this.h1 = z;
  this.gY = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4, "trivalibs.graphics.math.cpu.Vec4", ({
  dH: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$() {
  this.jN = null;
  this.jO = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$.prototype = $p;
$p.mY = (function() {
  if ((!this.jO)) {
    this.jN = new $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21();
    this.jO = true;
  }
  return this.jN;
});
var $d_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$, "trivalibs.graphics.math.cpu.mat3$package$Mat3PaddedBuffer$", ({
  dK: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  this.jP = null;
  this.jQ = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.mt = (function() {
  if ((!this.jQ)) {
    this.jP = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.jQ = true;
  }
  return this.jP;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  dN: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
}
function $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, wgsl) {
  $thiz.t = wgsl;
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_Expr() {
  this.t = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_Expr.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_Expr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_Expr() {
}
$h_Ltrivalibs_graphics_math_gpu_Expr.prototype = $p;
$p.l = (function() {
  return this.t;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  ay: 1
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
$p.nD = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().mj(v));
});
var $d_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$, "trivalibs.graphics.math.gpu.cpu_interop$package$", ({
  dR: 1
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
$p.nr = (function(onFalse, onTrue, cond) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("select(" + onFalse.t) + ", ") + onTrue.t) + ", ") + cond.t) + ")"));
});
$p.lV = (function(cond, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + cond.t) + " || ") + other.t) + ")"));
});
$p.kW = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.t) + " < ") + b.t) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  dS: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_expr$package$;
function $m_Ltrivalibs_graphics_math_gpu_expr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_expr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_expr$package$ = new $c_Ltrivalibs_graphics_math_gpu_expr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_expr$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  this.jS = null;
  this.jT = false;
  this.jU = null;
  this.jV = false;
  this.jW = null;
  this.jX = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.mj = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.fz = (function() {
  if ((!this.jT)) {
    this.jS = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.jT = true;
  }
  return this.jS;
});
$p.ms = (function() {
  if ((!this.jV)) {
    this.jU = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5();
    this.jV = true;
  }
  return this.jU;
});
$p.l0 = (function() {
  if ((!this.jX)) {
    this.jW = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.jX = true;
  }
  return this.jW;
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  dT: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
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
$p.lN = (function(x, y, z) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.t) + ", ") + y.t) + ", ") + z.t) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  e5: 1
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
$p.kN = (function(xyz, w) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.t) + ", ") + w.t) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  e6: 1
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
  this.i0 = null;
  this.i2 = 0;
  this.i1 = 0;
  this.hX = null;
  this.hZ = 0;
  this.hY = 0;
  this.fh = null;
  this.fO = null;
  this.h2 = null;
  this.i0 = null;
  this.i2 = (-1);
  this.i1 = (-1);
  this.hX = null;
  this.hZ = (-1);
  this.hY = (-1);
  this.fh = [];
  this.fO = [];
  this.h2 = null;
}
$p = $c_Ltrivalibs_graphics_painter_BindCache.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindCache;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindCache() {
}
$h_Ltrivalibs_graphics_painter_BindCache.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindCache = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindCache, "trivalibs.graphics.painter.BindCache", ({
  e7: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BindPair(name, value) {
  this.u = null;
  this.u = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  e8: 1
}));
function $f_Ltrivalibs_graphics_painter_Bindable__$init$__V($thiz) {
  $thiz.iL(0);
  $thiz.iK(null);
}
function $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V($thiz, idx, value) {
  while ((($thiz.eO().length | 0) <= idx)) {
    $thiz.eO().push(null);
  }
  if ((!($thiz.eO()[idx] === value))) {
    $thiz.eO()[idx] = value;
    $thiz.iL(((1 + $thiz.ho()) | 0));
  }
}
function $p_Ltrivalibs_graphics_painter_CanvasSurface$__preferredFormat__T($thiz) {
  var gpu = $m_Ltrivalibs_graphics_painter_WebGPU$().kY();
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
$p.lL = (function(canvas, format) {
  return new $c_Ltrivalibs_graphics_painter_CanvasSurface(canvas, ((format === (void 0)) ? $p_Ltrivalibs_graphics_painter_CanvasSurface$__preferredFormat__T(this) : format));
});
var $d_Ltrivalibs_graphics_painter_CanvasSurface$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_CanvasSurface$, "trivalibs.graphics.painter.CanvasSurface$", ({
  e9: 1
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
  while ((i < $thiz.eC)) {
    var b = $thiz.eD[i];
    if (((format === null) && (b.aK > 0))) {
      format = b.eE;
    }
    i = ((1 + i) | 0);
  }
  $thiz.i7 = format;
}
function $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V($thiz, index, verts, indices, widenTo32) {
  while ((($thiz.eD.length | 0) <= index)) {
    $thiz.eD.push(new $c_Ltrivalibs_graphics_painter_FormBuffers());
  }
  var b = $thiz.eD[index];
  $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts);
  if ((indices !== null)) {
    $p_Ltrivalibs_graphics_painter_Form__uploadIndices__Ltrivalibs_graphics_painter_FormBuffers__sjs_js_typedarray_TypedArray__Z__V($thiz, b, indices, widenTo32);
  } else {
    b.aK = 0;
    b.fQ = 0;
  }
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts) {
  var data = verts.dv.buffer;
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.aL === null) || (b.ia < padded))) {
    if ((b.aL !== null)) {
      b.aL.destroy();
    }
    b.aL = $thiz.fP.d.createBuffer(({
      "size": padded,
      "usage": 40
    }));
    b.ia = padded;
  }
  $thiz.fP.Y.writeBuffer(b.aL, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.h4 = size;
  b.fi = (verts.off | 0);
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
    b.eE = "uint32";
    var data = u32.buffer;
  } else if ((!(!(raw instanceof Uint16Array)))) {
    count = (raw.length | 0);
    b.eE = "uint16";
    var data = raw.buffer;
  } else {
    count = (raw.length | 0);
    b.eE = "uint32";
    var data = raw.buffer;
  }
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.aJ === null) || (b.i9 < padded))) {
    if ((b.aJ !== null)) {
      b.aJ.destroy();
    }
    b.aJ = $thiz.fP.d.createBuffer(({
      "size": padded,
      "usage": 24
    }));
    b.i9 = padded;
  }
  $thiz.fP.Y.writeBuffer(b.aJ, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.fQ = size;
  b.aK = count;
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
  this.fP = null;
  this.eD = null;
  this.eC = 0;
  this.i8 = null;
  this.i6 = null;
  this.i7 = null;
  this.fP = painter;
  this.eD = [];
  this.eC = 0;
  this.i8 = "triangle-list";
  this.i6 = "ccw";
  this.i7 = null;
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.nu = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.i8 = topology;
  }
  if ((frontFace !== (void 0))) {
    this.i6 = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, geometry.hC, geometry.gM, false);
    this.eC = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, vertices, null, false);
    this.eC = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((geometries !== (void 0))) {
    var use32 = false;
    var i = 0;
    while ((i < (geometries.length | 0))) {
      var idx = geometries[i].gM;
      if (((idx !== null) && (!(!(idx instanceof Uint32Array))))) {
        use32 = true;
      }
      i = ((1 + i) | 0);
    }
    i = 0;
    while ((i < (geometries.length | 0))) {
      var geo = geometries[i];
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i, geo.hC, geo.gM, use32);
      i = ((1 + i) | 0);
    }
    this.eC = (geometries.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((verticesAll !== (void 0))) {
    var i$1 = 0;
    while ((i$1 < (verticesAll.length | 0))) {
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i$1, verticesAll[i$1], null, false);
      i$1 = ((1 + i$1) | 0);
    }
    this.eC = (verticesAll.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  ea: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_FormBuffers() {
  this.aL = null;
  this.ia = 0;
  this.h4 = 0;
  this.fi = 0;
  this.aJ = null;
  this.i9 = 0;
  this.fQ = 0;
  this.aK = 0;
  this.eE = null;
  this.aL = null;
  this.ia = 0;
  this.h4 = 0;
  this.fi = 0;
  this.aJ = null;
  this.i9 = 0;
  this.fQ = 0;
  this.aK = 0;
  this.eE = "uint16";
}
$p = $c_Ltrivalibs_graphics_painter_FormBuffers.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_FormBuffers;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_FormBuffers() {
}
$h_Ltrivalibs_graphics_painter_FormBuffers.prototype = $p;
var $d_Ltrivalibs_graphics_painter_FormBuffers = new $TypeData().i($c_Ltrivalibs_graphics_painter_FormBuffers, "trivalibs.graphics.painter.FormBuffers", ({
  eb: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.k1 = null;
  this.k0 = null;
  this.E = null;
  this.k1 = shade;
  this.k0 = painter;
  this.E = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.L = (function() {
  return (this.E.length | 0);
});
$p.a0 = (function() {
  var inst = new $c_Ltrivalibs_graphics_painter_Instance(this.k1, this.k0);
  this.E.push(inst);
  return (((this.E.length | 0) - 1) | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  ed: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__fireResize__D__D__V($thiz, w, h) {
  var k = 0;
  while ((k < ($thiz.h6.length | 0))) {
    $thiz.h6[k].kL(w, h);
    k = ((1 + k) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  panel.iM($doubleToInt($thiz.ln()), $doubleToInt($thiz.l2()));
  if (panel.jc()) {
    return (void 0);
  }
  $thiz.lh(panel);
}
function $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, shape, depthTest, multisample, formats, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.fR]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Z__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.g4, shape.ik, fmts, depthTest, multisample, shape.g3.i8, shape.il, shape.g3.i6, shape.g3.i7, false);
  pass.setPipeline(pipeline);
  var form = shape.g3;
  var bufferCount = form.eC;
  var instanceCount = shape.I.L();
  var runtime = $p_Ltrivalibs_graphics_painter_Painter__runtimeBindingsOf__Ltrivalibs_graphics_painter_Panel__sjs_js_Dictionary($thiz, panel);
  if ((instanceCount === 0)) {
    $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Bindable__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape, null, runtime, null);
    var b = 0;
    while ((b < bufferCount)) {
      var buf = form.eD[b];
      if ((buf.fi > 0)) {
        pass.setVertexBuffer(0, buf.aL, 0.0, buf.h4);
        if ((buf.aK > 0)) {
          pass.setIndexBuffer(buf.aJ, buf.eE, 0.0, buf.fQ);
          pass.drawIndexed(buf.aK);
        } else {
          pass.draw(buf.fi);
        }
      }
      b = ((1 + b) | 0);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Bindable__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape, shape.I.E[i], runtime, null);
      var b$2 = 0;
      while ((b$2 < bufferCount)) {
        var buf$2 = form.eD[b$2];
        if ((buf$2.fi > 0)) {
          pass.setVertexBuffer(0, buf$2.aL, 0.0, buf$2.h4);
          if ((buf$2.aK > 0)) {
            pass.setIndexBuffer(buf$2.aJ, buf$2.eE, 0.0, buf$2.fQ);
            pass.drawIndexed(buf$2.aK);
          } else {
            pass.draw(buf$2.fi);
          }
        }
        b$2 = ((1 + b$2) | 0);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.fR]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Z__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.jb(), layer.nQ(), fmts, depthTest, multisample, "triangle-list", "none", "ccw", null, false);
  pass.setPipeline(pipeline);
  var instanceCount = layer.mB().L();
  var runtime = $p_Ltrivalibs_graphics_painter_Painter__runtimeBindingsOf__Ltrivalibs_graphics_painter_Panel__sjs_js_Dictionary($thiz, panel);
  if ((instanceCount === 0)) {
    $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Bindable__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer, null, runtime, srcView);
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Bindable__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer, layer.mB().E[i], runtime, srcView);
      pass.draw(3);
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__runtimeBindingsOf__Ltrivalibs_graphics_painter_Panel__sjs_js_Dictionary($thiz, panel) {
  if ((panel === null)) {
    return null;
  } else {
    var dict = panel.ig;
    var keys = Object.keys(dict);
    return (((keys.length | 0) > 0) ? dict : null);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__resolveValueSlot__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__O($thiz, shade, i, bindings, inst, runtime) {
  var fromInst = (((inst !== null) && (i < (inst.i.length | 0))) ? inst.i[i] : null);
  if ((fromInst !== null)) {
    return fromInst;
  } else {
    var own = ((i < (bindings.length | 0)) ? bindings[i] : null);
    if ((own !== null)) {
      return own;
    } else {
      if ((runtime !== null)) {
        var key$proxy3 = shade.hg[i];
        var $x_1 = (!(!(!(!runtime.hasOwnProperty(key$proxy3)))));
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        var key$proxy4 = shade.hg[i];
        return runtime[key$proxy4];
      } else {
        return null;
      }
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__boundPanelSlot__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__Ltrivalibs_graphics_painter_PanelBinding($thiz, k, panelBindings, inst) {
  var fromInst = (((inst !== null) && (k < (inst.h5.length | 0))) ? inst.h5[k] : null);
  return ((fromInst !== null) ? fromInst : ((k < (panelBindings.length | 0)) ? panelBindings[k] : null));
}
function $p_Ltrivalibs_graphics_painter_Painter__fallbackPanelView__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUTextureView($thiz, shade, k, runtime, srcView) {
  if ((runtime !== null)) {
    var key$proxy5 = shade.he[k];
    var $x_1 = (!(!(!(!runtime.hasOwnProperty(key$proxy5)))));
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    var key$proxy6 = shade.he[k];
    var value = runtime[key$proxy6];
    return ((!(!(value instanceof $a_Ltrivalibs_graphics_painter_PanelBinding()))) ? $p_Ltrivalibs_graphics_painter_Painter__panelBindingView__Ltrivalibs_graphics_painter_PanelBinding__Ltrivalibs_graphics_painter_GPUTextureView($thiz, value) : value.C[0].ip);
  } else {
    return ((k === 0) ? srcView : null);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__panelBindingView__Ltrivalibs_graphics_painter_PanelBinding__Ltrivalibs_graphics_painter_GPUTextureView($thiz, pb) {
  return ((!(!pb.depth)) ? pb.panel.m5() : (((pb.mipLevel | 0) < 0) ? pb.panel.C[(pb.index | 0)].ip : pb.panel.C[(pb.index | 0)].Z[(pb.mipLevel | 0)]));
}
function $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Bindable__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, x, inst, runtime, srcView) {
  var shade = x.jb();
  if ((runtime !== null)) {
    var vg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, x.eO(), inst, runtime);
    if ((vg !== null)) {
      pass.setBindGroup(0, vg);
    }
    var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_BindCache__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, x.j9(), inst, runtime, srcView, null);
    if ((pg !== null)) {
      pass.setBindGroup(1, pg);
    }
  } else {
    var owner = ((inst !== null) ? inst : x);
    if ((owner.iJ() === null)) {
      owner.iK(new $c_Ltrivalibs_graphics_painter_BindCache());
    }
    var x$proxy12 = owner.iJ();
    var ownVersion = owner.ho();
    var parentVersion = ((inst !== null) ? x.ho() : 0);
    if (((x$proxy12.i2 !== ownVersion) || (x$proxy12.i1 !== parentVersion))) {
      x$proxy12.i0 = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, x.eO(), inst, null);
      x$proxy12.i2 = ownVersion;
      x$proxy12.i1 = parentVersion;
    }
    var vg$2 = x$proxy12.i0;
    if ((vg$2 !== null)) {
      pass.setBindGroup(0, vg$2);
    }
    if ((((x$proxy12.hZ !== ownVersion) || (x$proxy12.hY !== parentVersion)) || (!$p_Ltrivalibs_graphics_painter_Painter__panelViewsCurrent__Ltrivalibs_graphics_painter_BindCache__Ltrivalibs_graphics_painter_GPUTextureView__Z($thiz, x$proxy12, srcView)))) {
      x$proxy12.hX = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_BindCache__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, x.j9(), inst, null, srcView, x$proxy12);
      x$proxy12.hZ = ownVersion;
      x$proxy12.hY = parentVersion;
    }
    var pg$2 = x$proxy12.hX;
    if ((pg$2 !== null)) {
      pass.setBindGroup(1, pg$2);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__panelViewsCurrent__Ltrivalibs_graphics_painter_BindCache__Ltrivalibs_graphics_painter_GPUTextureView__Z($thiz, c, srcView) {
  var builtSrc = c.h2;
  var current = ((builtSrc === null) || (builtSrc === srcView));
  var k = 0;
  while ((current && (k < (c.fh.length | 0)))) {
    var p = c.fh[k];
    if (((p !== null) && (p.fT !== (c.fO[k] | 0)))) {
      current = false;
    }
    k = ((1 + k) | 0);
  }
  return current;
}
function $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings, inst, runtime) {
  if ((shade.ii === null)) {
    return null;
  } else {
    var names = shade.hg;
    var entries = [];
    var i = 0;
    while ((i < (names.length | 0))) {
      var b = $p_Ltrivalibs_graphics_painter_Painter__resolveValueSlot__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__O($thiz, shade, i, bindings, inst, runtime);
      if ((b === null)) {
        var message$proxy2 = $p_Ltrivalibs_graphics_painter_Painter__missingBindingMessage__T__T($thiz, names[i]);
        throw new $c_sjs_js_JavaScriptException(Error(message$proxy2)).D;
      }
      entries.push($p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b));
      i = ((1 + i) | 0);
    }
    var $x_1 = $thiz.d;
    var _2 = shade.ii;
    return $x_1.createBindGroup(({
      "layout": _2,
      "entries": entries
    }));
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_BindCache__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, panelBindings, inst, runtime, srcView, cache) {
  if ((shade.ih === null)) {
    return null;
  } else {
    var names = shade.he;
    if ((cache !== null)) {
      cache.fh.length = (names.length | 0);
      cache.fO.length = (names.length | 0);
      cache.h2 = null;
    }
    var entries = [];
    var k = 0;
    while ((k < (names.length | 0))) {
      var pb = $p_Ltrivalibs_graphics_painter_Painter__boundPanelSlot__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__Ltrivalibs_graphics_painter_PanelBinding($thiz, k, panelBindings, inst);
      var view = ((pb !== null) ? $p_Ltrivalibs_graphics_painter_Painter__panelBindingView__Ltrivalibs_graphics_painter_PanelBinding__Ltrivalibs_graphics_painter_GPUTextureView($thiz, pb) : $p_Ltrivalibs_graphics_painter_Painter__fallbackPanelView__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUTextureView($thiz, shade, k, runtime, srcView));
      if ((view === null)) {
        var message$proxy3 = $p_Ltrivalibs_graphics_painter_Painter__missingBindingMessage__T__T($thiz, names[k]);
        throw new $c_sjs_js_JavaScriptException(Error(message$proxy3)).D;
      }
      if ((cache !== null)) {
        if ((pb !== null)) {
          cache.fh[k] = pb.panel;
          cache.fO[k] = pb.panel.fT;
        } else {
          cache.fh[k] = null;
          cache.fO[k] = 0;
          cache.h2 = view;
        }
      }
      var value = k;
      entries.push(({
        "binding": value,
        "resource": view
      }));
      k = ((1 + k) | 0);
    }
    var $x_1 = $thiz.d;
    var _2 = shade.ih;
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
    var _2 = b.e;
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
  var key = (((((((((((((((shade.km + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthKey) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace) + stripKey);
  var cached = $thiz.ie[key];
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
    if ((shade.ij !== null)) {
      var _2 = shade.hf;
      var _2$1 = [shade.ij];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.hf;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.kn;
    var _2$4 = shade.hf;
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
    var p = $thiz.d.createRenderPipeline(desc);
    $thiz.ie[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.ka)) {
    $thiz.k9 = $thiz.d.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.ka = true;
  }
  return $thiz.k9;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.k4)) {
    var $x_2 = $thiz.d;
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
    $thiz.k3 = $x_1;
    $thiz.k4 = true;
  }
  return $thiz.k3;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitModule__Ltrivalibs_graphics_painter_GPUShaderModule($thiz) {
  if ((!$thiz.k6)) {
    $thiz.k5 = $thiz.d.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    $thiz.k6 = true;
  }
  return $thiz.k5;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipelineLayout__Ltrivalibs_graphics_painter_GPUPipelineLayout($thiz) {
  if ((!$thiz.k8)) {
    var $x_2 = $thiz.d;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var $x_1 = $x_2.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    $thiz.k7 = $x_1;
    $thiz.k8 = true;
  }
  return $thiz.k7;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipelineFor__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  var cached = $thiz.ib[format];
  if ((cached !== (void 0))) {
    return cached;
  } else {
    var $x_1 = $thiz.d;
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
    $thiz.ib[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__sourceShade__Ltrivalibs_graphics_painter_Shade($thiz) {
  if ((!$thiz.kl)) {
    var id = $thiz.eF;
    $thiz.eF = ((1 + $thiz.eF) | 0);
    $thiz.kk = new $c_Ltrivalibs_graphics_painter_Shade(id, $p_Ltrivalibs_graphics_painter_Painter__blitModule__Ltrivalibs_graphics_painter_GPUShaderModule($thiz), null, null, null, $p_Ltrivalibs_graphics_painter_Painter__blitPipelineLayout__Ltrivalibs_graphics_painter_GPUPipelineLayout($thiz), false, ({}), ({}));
    $thiz.kl = true;
  }
  return $thiz.kk;
}
function $p_Ltrivalibs_graphics_painter_Painter__drawSource__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Panel__Z__sjs_js_Array__V($thiz, pass, panel, multisample, formats) {
  var group = panel.hd;
  if ((group === null)) {
    if (((panel.eI === "rgba32float") && (!(!(!$thiz.d.features.has("float32-filterable")))))) {
      throw new $c_sjs_js_JavaScriptException(Error("Panel: drawing an rgba32float source needs the device feature 'float32-filterable'. Pass requiredFeatures = Arr(\"float32-filterable\") to Painter.init, use rgba16float, or keep the panel on the direct path (source size and format, no shapes or layers).")).D;
    }
    var $x_1 = $thiz.d;
    var _2 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
    var x$proxy13 = panel.g2;
    var _2$1 = $thiz.nq();
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
    panel.hd = group;
  }
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Z__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, $p_Ltrivalibs_graphics_painter_Painter__sourceShade__Ltrivalibs_graphics_painter_Shade($thiz), panel.hc, formats, panel.aN, multisample, "triangle-list", "none", "ccw", null, true));
  pass.setBindGroup(0, group);
  pass.draw(3);
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.kc)) {
    var $x_2 = $thiz.d;
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
    $thiz.kb = $x_1;
    $thiz.kc = true;
  }
  return $thiz.kb;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.ke)) {
    var module = $thiz.d.createShaderModule(({
      "code": "\n@group(0) @binding(0) var ms_depth: texture_depth_multisampled_2d;\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4f {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  return vec4f(x, y, 0.0, 1.0);\n}\n\n@fragment\nfn fs_main(@builtin(position) pos: vec4f) -> @builtin(frag_depth) f32 {\n  return textureLoad(ms_depth, vec2i(pos.xy), 0);\n}\n"
    }));
    var $x_1 = $thiz.d;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.d;
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
    $thiz.kd = $x_2;
    $thiz.ke = true;
  }
  return $thiz.kd;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.d.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.nn();
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
  var $x_1 = $thiz.d;
  var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
  var _2$4 = panel.kT();
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
  $thiz.Y.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.kh)) {
    $thiz.kg = $thiz.d.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.kh = true;
  }
  return $thiz.kg;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Painter(device, surface, adapter, gpu) {
  this.d = null;
  this.aM = null;
  this.k2 = null;
  this.kf = null;
  this.Y = null;
  this.fR = null;
  this.eF = 0;
  this.h6 = null;
  this.id = 0;
  this.ic = 0;
  this.ie = null;
  this.ib = null;
  this.ki = null;
  this.kj = false;
  this.k9 = null;
  this.ka = false;
  this.k3 = null;
  this.k4 = false;
  this.k5 = null;
  this.k6 = false;
  this.k7 = null;
  this.k8 = false;
  this.kk = null;
  this.kl = false;
  this.kb = null;
  this.kc = false;
  this.kd = null;
  this.ke = false;
  this.kg = null;
  this.kh = false;
  this.d = device;
  this.aM = surface;
  this.k2 = adapter;
  this.kf = gpu;
  this.Y = device.queue;
  if ((adapter !== null)) {
    adapter.info;
  }
  this.fR = surface.i4;
  this.eF = 0;
  this.h6 = [];
  this.id = 0;
  this.ic = 0;
  this.ie = ({});
  this.ib = ({});
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.lZ = (function() {
  var x1 = this.aM;
  if ((x1 instanceof $c_Ltrivalibs_graphics_painter_CanvasSurface)) {
    return x1.X;
  }
  throw new $c_sjs_js_JavaScriptException(Error("Painter.canvas: this painter has no canvas")).D;
});
$p.mA = (function() {
  this.aM.m2(this);
  this.aM.n7(((arg1$2, arg2$2) => {
    $p_Ltrivalibs_graphics_painter_Painter__fireResize__D__D__V(this, (arg1$2 | 0), (arg2$2 | 0));
  }));
});
$p.ln = (function() {
  return ((this.id > 0) ? this.id : this.aM.nN());
});
$p.l2 = (function() {
  return ((this.ic > 0) ? this.ic : this.aM.mv());
});
$p.n6 = (function(cb) {
  this.h6.push(cb);
  cb.kL(this.ln(), this.l2());
});
$p.np = (function(magFilter, minFilter, mipmapFilter, addressMode, addressModeU, addressModeV) {
  var $x_1 = this.d;
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
$p.nq = (function() {
  if ((!this.kj)) {
    this.ki = this.np("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    this.kj = true;
  }
  return this.ki;
});
$p.mk = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).nu(geometry, vertices, geometries, verticesAll, topology, frontFace);
});
$p.hu = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).nv(cullMode, blendState);
});
$p.n9 = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers, source, sourceBlend, followSurface, flipY, premultipliedAlpha) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).nt(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers, source, sourceBlend, followSurface, flipY, premultipliedAlpha);
});
$p.nw = (function(panel) {
  var encoder = this.d.createCommandEncoder();
  this.lU(encoder, panel, this.aM.m3(), this.fR);
  this.aM.ne(encoder);
});
$p.lh = (function(panel) {
  var msaa = panel.eG;
  var encoder = this.d.createCommandEncoder();
  var panelFormats = panel.fx();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.nB())) {
    if ((panel.h7 !== null)) {
      var x$proxy4 = panel.h7;
      if (msaa) {
        var _2 = panel.le(t);
        var TextureViewBundle_this = panel.C[t];
        var _2$1 = TextureViewBundle_this.Z[0];
        var value = x$proxy4.gZ;
        var value$1 = x$proxy4.h0;
        var value$2 = x$proxy4.h1;
        var value$3 = x$proxy4.gY;
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
        var TextureViewBundle_this$2 = panel.C[t];
        var _2$3 = TextureViewBundle_this$2.Z[0];
        var value$4 = x$proxy4.gZ;
        var value$5 = x$proxy4.h0;
        var value$6 = x$proxy4.h1;
        var value$7 = x$proxy4.gY;
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
      var _2$5 = panel.le(t);
      var TextureViewBundle_this$3 = panel.C[t];
      var _2$6 = TextureViewBundle_this$3.Z[0];
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var TextureViewBundle_this$4 = panel.C[t];
      var _2$7 = TextureViewBundle_this$4.Z[0];
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
  if (panel.aN) {
    var _2$8 = panel.kT();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  if (panel.ma()) {
    $p_Ltrivalibs_graphics_painter_Painter__drawSource__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Panel__Z__sjs_js_Array__V(this, shapePass, panel, msaa, panelFormats);
  }
  var i = 0;
  while ((i < (panel.g1.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V(this, shapePass, panel.g1[i], panel.aN, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  this.Y.submit([encoder.finish()]);
  if (panel.fV) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V(this, panel);
  }
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.aA.length | 0))) {
    var layer = panel.aA[j];
    var needsPingPong = layer.nU(panel);
    if ((layer.lc() >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        this.Y.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.C[0].Z[layer.lc()];
      var mipSrcView = ((layer.n2() >= 0) ? panel.C[0].Z[layer.n2()] : panel.jf());
      var enc = this.d.createCommandEncoder();
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
      this.Y.submit([enc.finish()]);
    } else if (needsPingPong) {
      if ((curPass !== null)) {
        curPass.end();
        this.Y.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = this.d.createCommandEncoder();
      var _2$10 = panel.nc();
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
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V(this, ppPass, layer, false, false, panelFormats, panel.jf(), panel);
      ppPass.end();
      this.Y.submit([enc$2.finish()]);
      panel.nz();
    } else {
      if ((curPass === null)) {
        curEncoder = this.d.createCommandEncoder();
        var $x_1 = curEncoder;
        var _2$13 = panel.jf();
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
    this.Y.submit([curEncoder.finish()]);
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.aA.length | 0))) {
    if ((panel.aA[mi].lc() >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.gC() > 1) && (!hasMipTargetLayers))) {
    this.iN(panel);
  }
});
$p.lU = (function(encoder, panel, dst, dstFormat) {
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
  var bundle = panel.C[0];
  var group = bundle.io;
  if ((group === null)) {
    var $x_1 = this.d;
    var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
    var _2$4 = bundle.Z[0];
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
    bundle.io = group;
  }
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__blitPipelineFor__T__Ltrivalibs_graphics_painter_GPURenderPipeline(this, dstFormat));
  pass.setBindGroup(0, group);
  pass.draw(3);
  pass.end();
});
$p.iN = (function(panel) {
  var mipCount = panel.gC();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__blitPipelineFor__T__Ltrivalibs_graphics_painter_GPURenderPipeline(this, panel.fx()[0]);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.C[0].Z[((i - 1) | 0)];
    var dstView = panel.C[0].Z[i];
    var encoder = this.d.createCommandEncoder();
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
    var $x_1 = this.d;
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
    this.Y.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
});
Object.defineProperty($p, "gpu", ({
  "get": (function() {
    return this.kf;
  }),
  "configurable": true
}));
Object.defineProperty($p, "adapter", ({
  "get": (function() {
    return this.k2;
  }),
  "configurable": true
}));
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  ee: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter$__createPainter__Ltrivalibs_graphics_painter_GPUDevice__Ltrivalibs_graphics_painter_Surface__Ltrivalibs_graphics_painter_GPUAdapter__Ltrivalibs_graphics_painter_GPU__Ltrivalibs_graphics_painter_Painter($thiz, device, surface, adapter, gpu) {
  var painter = new $c_Ltrivalibs_graphics_painter_Painter(device, surface, adapter, gpu);
  painter.mA();
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
$p.mz = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().kY();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var surface = $m_Ltrivalibs_graphics_painter_CanvasSurface$().lL(canvas, maybeGpu.getPreferredCanvasFormat());
    var promise$proxy2 = $m_Ltrivalibs_graphics_painter_WebGPU$().nl(maybeGpu, (void 0), false, (void 0), false);
    var f$proxy16 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy1 = $m_Ltrivalibs_graphics_painter_WebGPU$().nm(adapter$2, (void 0), (void 0));
      var f$proxy15 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => $p_Ltrivalibs_graphics_painter_Painter$__createPainter__Ltrivalibs_graphics_painter_GPUDevice__Ltrivalibs_graphics_painter_Surface__Ltrivalibs_graphics_painter_GPUAdapter__Ltrivalibs_graphics_painter_GPU__Ltrivalibs_graphics_painter_Painter(this, device$2, surface, adapter$2, maybeGpu)));
      return promise$proxy1.then($m_sjs_js_Any$().fy(f$proxy15));
    }));
    return promise$proxy2.then($m_sjs_js_Any$().fy(f$proxy16));
  }
});
$p.my = (function(canvas, setup) {
  var promise$proxy3 = this.mz(canvas);
  return promise$proxy3.then($m_sjs_js_Any$().fy(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  ef: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  $thiz.hw();
  if (($thiz.aO !== null)) {
    $thiz.aO.destroy();
  }
  if (($thiz.fZ !== null)) {
    $thiz.fZ.destroy();
  }
  var depthUsage = ($thiz.fW ? 20 : 16);
  var $x_1 = $thiz.R.d;
  var value = $thiz.fk;
  var value$1 = $thiz.fj;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.eG ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.aO = depthTex;
  $thiz.fU = depthTex.createView();
  if (($thiz.fW && $thiz.eG)) {
    var $x_2 = $thiz.R.d;
    var value$2 = $thiz.fk;
    var value$3 = $thiz.fj;
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
    $thiz.fZ = resTex;
    $thiz.g0 = resTex.createView();
    $thiz.fV = true;
  } else {
    $thiz.fZ = null;
    $thiz.g0 = null;
    $thiz.fV = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.aA.length | 0))) {
    if ($thiz.aA[i].nT()) {
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
  return ((((((((((($thiz.ad.length | 0) > 0) ? $thiz.ad.join(",") : ($thiz.ae ? $thiz.eH : "preferred")) + "|") + $thiz.eG) + "|") + $thiz.aN) + "|") + $thiz.fl) + "|") + $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz));
}
function $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz) {
  return ($thiz.ae ? 23 : 20);
}
function $p_Ltrivalibs_graphics_painter_Panel__allocationStale__I__I__Z($thiz, w, h) {
  return ((((w !== $thiz.fk) || (h !== $thiz.fj)) || $thiz.fY) || (($thiz.fS & $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz)) !== $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz)));
}
function $p_Ltrivalibs_graphics_painter_Panel__reallocate__I__I__V($thiz, w, h) {
  var d = 0;
  while ((d < ($thiz.a2.length | 0))) {
    $thiz.a2[d].destroy();
    d = ((1 + d) | 0);
  }
  d = 0;
  while ((d < ($thiz.fX.length | 0))) {
    $thiz.fX[d].destroy();
    d = ((1 + d) | 0);
  }
  if (((!$thiz.aN) && ($thiz.aO !== null))) {
    $thiz.aO.destroy();
    $thiz.aO = null;
    $thiz.fU = null;
  }
  $thiz.fk = w;
  $thiz.fj = h;
  $thiz.fS = $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz);
  $thiz.fY = false;
  var mipCount = $thiz.gC();
  var fmts = $thiz.fx();
  var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz);
  $thiz.a2 = [];
  $thiz.C = [];
  $thiz.fX = [];
  $thiz.ha = [];
  var i = 0;
  while ((i < (fmts.length | 0))) {
    var fmt = fmts[i];
    var $x_1 = $thiz.R.d;
    var _2 = ({
      "width": w,
      "height": h
    });
    var value = $thiz.fS;
    var tex = $x_1.createTexture(({
      "size": _2,
      "format": fmt,
      "usage": value,
      "mipLevelCount": mipCount
    }));
    $thiz.a2.push(tex);
    $thiz.C.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle($thiz, tex, mipCount));
    if ($thiz.eG) {
      var $x_2 = $thiz.R.d;
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
      $thiz.fX.push(msaaTex);
      $thiz.ha.push(msaaTex.createView());
    }
    i = ((1 + i) | 0);
  }
  if (hasPong) {
    var $x_3 = $thiz.R.d;
    var _2$2 = ({
      "width": w,
      "height": h
    });
    var f$proxy6 = fmts[0];
    var value$1 = $thiz.fS;
    var pongTex = $x_3.createTexture(({
      "size": _2$2,
      "format": f$proxy6,
      "usage": value$1,
      "mipLevelCount": mipCount
    }));
    $thiz.a2.push(pongTex);
    $thiz.C.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle($thiz, pongTex, mipCount));
  }
  if ($thiz.aN) {
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz);
  }
  $thiz.hw();
}
function $p_Ltrivalibs_graphics_painter_Panel__noteSource__sjs_js_Object__V($thiz, source) {
  $thiz.ae = true;
  if ($m_Ltrivalibs_graphics_painter_sources$package$TextureSource$().l4(source)) {
    $m_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$().nI(source, "Panel.set(source)");
    $thiz.ag = (source.width | 0);
    $thiz.af = (source.height | 0);
    $thiz.eH = source.format;
    $thiz.eI = $thiz.eH;
  } else {
    $thiz.ag = $p_Ltrivalibs_graphics_painter_sources$package$TextureSource$__size__sjs_js_Object__T__T__T__T__I($m_Ltrivalibs_graphics_painter_sources$package$TextureSource$(), source, "videoWidth", "naturalWidth", "displayWidth", "width");
    $thiz.af = $p_Ltrivalibs_graphics_painter_sources$package$TextureSource$__size__sjs_js_Object__T__T__T__T__I($m_Ltrivalibs_graphics_painter_sources$package$TextureSource$(), source, "videoHeight", "naturalHeight", "displayHeight", "height");
    if ((($thiz.ag <= 0) || ($thiz.af <= 0))) {
      throw new $c_sjs_js_JavaScriptException(Error("Panel.set(source): the image has no size yet \u2014 an <img> still loading, or a <video> before its first frame")).D;
    }
    $thiz.eH = "rgba8unorm";
    $thiz.eI = $thiz.fx()[0];
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__uploadSource__sjs_js_Object__V($thiz, source) {
  if ($thiz.hq()) {
    $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
    $thiz.aB = false;
    $thiz.iM(0, 0);
    $m_Ltrivalibs_graphics_painter_sources$package$TextureSource$().lm($thiz.R.Y, source, $thiz.a2[0], $thiz.ag, $thiz.af, $thiz.h8, $thiz.hb);
    $thiz.aB = true;
    if (($thiz.gC() > 1)) {
      $thiz.R.iN($thiz);
    }
  } else {
    $thiz.aB = false;
    var current = $thiz.am;
    if (((((current === null) || ((current.width | 0) !== $thiz.ag)) || ((current.height | 0) !== $thiz.af)) || (current.format !== $thiz.eI))) {
      $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
      var $x_1 = $thiz.R.d;
      var value = $thiz.ag;
      var value$1 = $thiz.af;
      var _2 = ({
        "width": value,
        "height": value$1
      });
      var f$proxy9 = $thiz.eI;
      var tex = $x_1.createTexture(({
        "size": _2,
        "format": f$proxy9,
        "usage": 23
      }));
      $thiz.am = tex;
      $thiz.g2 = tex.createView();
    }
    $m_Ltrivalibs_graphics_painter_sources$package$TextureSource$().lm($thiz.R.Y, source, $thiz.am, $thiz.ag, $thiz.af, $thiz.h8, $thiz.hb);
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__releaseSource__V($thiz) {
  $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
  $thiz.aB = false;
}
function $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz) {
  if (($thiz.am !== null)) {
    $thiz.am.destroy();
  }
  $thiz.am = null;
  $thiz.g2 = null;
  $thiz.hd = null;
}
function $p_Ltrivalibs_graphics_painter_Panel__adoptSlot0AsSource__V($thiz) {
  $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
  $thiz.am = $thiz.a2.shift();
  var TextureViewBundle_this = $thiz.C.shift();
  $thiz.g2 = TextureViewBundle_this.Z[0];
  $thiz.aB = false;
  $thiz.fY = true;
  $thiz.hw();
}
function $p_Ltrivalibs_graphics_painter_Panel__restoreSourceToSlot0__V($thiz) {
  var encoder = $thiz.R.d.createCommandEncoder();
  var x$proxy10 = $thiz.am;
  var _2 = $thiz.a2[0];
  var value = $thiz.ag;
  var value$1 = $thiz.af;
  encoder.copyTextureToTexture(({
    "texture": x$proxy10
  }), ({
    "texture": _2
  }), ({
    "width": value,
    "height": value$1
  }));
  $thiz.R.Y.submit([encoder.finish()]);
  $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
  $thiz.aB = true;
  if (($thiz.gC() > 1)) {
    $thiz.R.iN($thiz);
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
  this.R = null;
  this.fn = 0;
  this.fm = 0;
  this.h7 = null;
  this.aN = false;
  this.eG = false;
  this.fl = 0;
  this.ad = null;
  this.g1 = null;
  this.aA = null;
  this.hc = null;
  this.h9 = false;
  this.h8 = false;
  this.hb = false;
  this.ig = null;
  this.fT = 0;
  this.a2 = null;
  this.C = null;
  this.aO = null;
  this.fU = null;
  this.fW = false;
  this.fZ = null;
  this.g0 = null;
  this.fV = false;
  this.fX = null;
  this.ha = null;
  this.fk = 0;
  this.fj = 0;
  this.fS = 0;
  this.fY = false;
  this.ae = false;
  this.ag = 0;
  this.af = 0;
  this.eH = null;
  this.eI = null;
  this.aB = false;
  this.am = null;
  this.g2 = null;
  this.hd = null;
  this.R = painter;
  this.fn = 0;
  this.fm = 0;
  this.h7 = null;
  this.aN = false;
  this.eG = false;
  this.fl = 1;
  this.ad = [];
  this.g1 = [];
  this.aA = [];
  this.hc = null;
  this.h9 = false;
  this.h8 = false;
  this.hb = false;
  this.ig = ({});
  this.fT = 0;
  this.a2 = [];
  this.C = [];
  this.aO = null;
  this.fU = null;
  this.fW = false;
  this.fZ = null;
  this.g0 = null;
  this.fV = false;
  this.fX = [];
  this.ha = [];
  this.fk = 0;
  this.fj = 0;
  this.fS = 0;
  this.fY = false;
  this.ae = false;
  this.ag = 0;
  this.af = 0;
  this.eH = "rgba8unorm";
  this.eI = "rgba8unorm";
  this.aB = false;
  this.am = null;
  this.g2 = null;
  this.hd = null;
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.gC = (function() {
  if ((this.fl === 0)) {
    var a = this.fk;
    var b = this.fj;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.fl;
  }
});
$p.fx = (function() {
  return (((this.ad.length | 0) > 0) ? this.ad : (this.ae ? [this.eH] : [this.R.fR]));
});
$p.jc = (function() {
  return ((((this.ae && ((this.g1.length | 0) === 0)) && ((this.aA.length | 0) === 0)) && (this.hc === null)) && (!this.h9));
});
$p.hq = (function() {
  return ((((this.jc() && ((this.fn === 0) || (this.fn === this.ag))) && ((this.fm === 0) || (this.fm === this.af))) && ((this.ad.length | 0) <= 1)) && (this.fx()[0] === this.eI));
});
$p.ma = (function() {
  return (this.ae && (!this.hq()));
});
$p.nB = (function() {
  return (this.fx().length | 0);
});
$p.jf = (function() {
  var TextureViewBundle_this = this.C[0];
  return TextureViewBundle_this.Z[0];
});
$p.nc = (function() {
  var TextureViewBundle_this = this.C[1];
  return TextureViewBundle_this.Z[0];
});
$p.kT = (function() {
  return this.fU;
});
$p.nn = (function() {
  return this.g0;
});
$p.le = (function(index) {
  return this.ha[index];
});
$p.nz = (function() {
  var t = this.a2[0];
  this.a2[0] = this.a2[1];
  this.a2[1] = t;
  var sv = this.C[0];
  this.C[0] = this.C[1];
  this.C[1] = sv;
  this.hw();
});
$p.hw = (function() {
  this.fT = ((1 + this.fT) | 0);
});
$p.m5 = (function() {
  if (((!this.fW) && (this.aO !== null))) {
    this.fW = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.fV ? this.g0 : this.fU);
});
$p.nt = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers, source, sourceBlend, followSurface, flipY, premultipliedAlpha) {
  var allocationBefore = $p_Ltrivalibs_graphics_painter_Panel__allocationKey__T(this);
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.fn = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.fm = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.h7 = ((clearColor === null) ? null : new $c_Ltrivalibs_graphics_math_cpu_Vec4(clearColor.gZ, clearColor.h0, clearColor.h1, clearColor.gY));
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.aN = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.eG = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.fl = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.fl = v$5;
    }
  }
  var x$1 = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy1$1__O__O(this, format) : formats);
  if ((x$1 !== (void 0))) {
    this.ad = x$1;
  }
  var x$2 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy2$1__O__O(this, shape) : shapes);
  if ((x$2 !== (void 0))) {
    this.g1 = x$2;
  }
  var x$3 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy3$1__O__O(this, layer) : layers);
  if ((x$3 !== (void 0))) {
    this.aA = x$3;
  }
  if ((sourceBlend !== (void 0))) {
    this.hc = sourceBlend;
  }
  if ((followSurface !== (void 0))) {
    var v$6 = (!(!followSurface));
    this.h9 = v$6;
  }
  if ((flipY !== (void 0))) {
    var v$7 = (!(!flipY));
    this.h8 = v$7;
  }
  if ((premultipliedAlpha !== (void 0))) {
    var v$8 = (!(!premultipliedAlpha));
    this.hb = v$8;
  }
  if ((source !== (void 0))) {
    if ((source === null)) {
      if ((this.ae && ((this.ad.length | 0) === 0))) {
        this.ad = [this.eH];
      }
      this.ae = false;
    } else {
      $p_Ltrivalibs_graphics_painter_Panel__noteSource__sjs_js_Object__V(this, source);
    }
  }
  if ((((this.ad.length | 0) > 1) && $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this))) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot host auto-pong layers. Chain a single-format panel for post-processing instead.")).D;
  }
  if ((((this.ad.length | 0) > 1) && this.ae)) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot have a source. Bind the source panel as a texture of the MRT shapes instead.")).D;
  }
  if (($p_Ltrivalibs_graphics_painter_Panel__allocationKey__T(this) !== allocationBefore)) {
    this.fY = true;
  }
  if ((source !== (void 0))) {
    if ((source === null)) {
      $p_Ltrivalibs_graphics_painter_Panel__releaseSource__V(this);
    } else {
      $p_Ltrivalibs_graphics_painter_Panel__uploadSource__sjs_js_Object__V(this, source);
    }
  }
  if (this.jc()) {
    this.iM(0, 0);
    if ((!this.hq())) {
      this.R.lh(this);
    }
  }
  return this;
});
$p.iM = (function(surfaceW, surfaceH) {
  var useSource = (this.ae && (!this.h9));
  var w = ((this.fn > 0) ? this.fn : (useSource ? this.ag : surfaceW));
  var h = ((this.fm > 0) ? this.fm : (useSource ? this.af : surfaceH));
  var direct = this.hq();
  if ((this.aB && ((!direct) || $p_Ltrivalibs_graphics_painter_Panel__allocationStale__I__I__Z(this, w, h)))) {
    $p_Ltrivalibs_graphics_painter_Panel__adoptSlot0AsSource__V(this);
  }
  if ($p_Ltrivalibs_graphics_painter_Panel__allocationStale__I__I__Z(this, w, h)) {
    $p_Ltrivalibs_graphics_painter_Panel__reallocate__I__I__V(this, w, h);
  }
  if (((direct && (!this.aB)) && (this.am !== null))) {
    $p_Ltrivalibs_graphics_painter_Panel__restoreSourceToSlot0__V(this);
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  eg: 1
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
  this.km = 0;
  this.hf = null;
  this.ij = null;
  this.ii = null;
  this.ih = null;
  this.kn = null;
  this.v = null;
  this.hg = null;
  this.he = null;
  this.km = id;
  this.hf = shaderModule;
  this.ij = vertexBufferLayout;
  this.ii = valueBindGroupLayout;
  this.ih = panelBindGroupLayout;
  this.kn = pipelineLayout;
  this.v = uniformIndices;
  this.hg = $p_Ltrivalibs_graphics_painter_Shade__slotNames__sjs_js_Dictionary__sjs_js_Array(this, uniformIndices);
  this.he = $p_Ltrivalibs_graphics_painter_Shade__slotNames__sjs_js_Dictionary__sjs_js_Array(this, panelIndices);
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  eh: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, sampling) {
  this.Z = null;
  this.ip = null;
  this.io = null;
  this.Z = perMip;
  this.ip = sampling;
  this.io = null;
}
$p = $c_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_TextureViewBundle;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_TextureViewBundle() {
}
$h_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = $p;
var $d_Ltrivalibs_graphics_painter_TextureViewBundle = new $TypeData().i($c_Ltrivalibs_graphics_painter_TextureViewBundle, "trivalibs.graphics.painter.TextureViewBundle", ({
  ek: 1
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
$p.kY = (function() {
  return (((typeof navigator) === "undefined") ? (void 0) : navigator.gpu);
});
$p.mq = (function(canvas) {
  return canvas.getContext("webgpu");
});
$p.nl = (function(gpu, powerPreference, forceFallbackAdapter, requireAdapter, logAdapter) {
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
      throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).D;
    } else {
      return value$2;
    }
  }));
  var f$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
    if (logAdapter) {
      var s = ("WebGPU adapter: " + this.kU(adapter$2.info));
      console.log(s);
    }
    if ((requireAdapter !== (void 0))) {
      if ((!(!(!requireAdapter(adapter$2.info))))) {
        var message$proxy1 = ("WebGPU adapter rejected by requireAdapter: " + this.kU(adapter$2.info));
        throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).D;
      }
    }
    return adapter$2;
  }));
  return promise$proxy2.then($m_sjs_js_Any$().fy(f$proxy1));
});
$p.nm = (function(adapter, requiredFeatures, requiredLimits) {
  var descriptor = ({});
  if ((requiredFeatures !== (void 0))) {
    descriptor.requiredFeatures = requiredFeatures;
  }
  if ((requiredLimits !== (void 0))) {
    descriptor.requiredLimits = requiredLimits;
  }
  return adapter.requestDevice(descriptor);
});
$p.kU = (function(info) {
  return ((info === (void 0)) ? "(no adapter info)" : ((((((info.vendor + " / ") + info.architecture) + " / ") + info.device) + " / ") + info.description));
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  el: 1
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
$p.mG = (function(data) {
  return (data.length | 0);
});
$p.n0 = (function(format, data) {
  return ((format === "rgba8unorm") ? (!(!(data instanceof Uint8Array))) : ((format === "rgba32float") ? (!(!(data instanceof Float32Array))) : (((typeof Float16Array) !== "undefined") && (!(!(data instanceof Float16Array))))));
});
var $d_Ltrivalibs_graphics_painter_pixels$package$PixelData$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_pixels$package$PixelData$, "trivalibs.graphics.painter.pixels$package$PixelData$", ({
  em: 1
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
  this.lA = null;
  this.ly = null;
  this.lz = null;
  this.lA = "rgba8unorm";
  this.ly = "rgba16float";
  this.lz = "rgba32float";
}
$p = $c_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$() {
}
$h_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$.prototype = $p;
$p.kO = (function(f) {
  return ((f === "rgba8unorm") ? 4 : ((f === "rgba16float") ? 8 : ((f === "rgba32float") ? 16 : 0)));
});
var $d_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$, "trivalibs.graphics.painter.pixels$package$PixelFormat$", ({
  en: 1
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
$p.nI = (function(target, where) {
  var width = (target.width | 0);
  var height = (target.height | 0);
  var format = target.format;
  if (($m_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$().kO(format) === 0)) {
    var message$proxy3 = (((where + ": unsupported pixel target format '") + format) + "'; use rgba8unorm, rgba16float or rgba32float");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy3)).D;
  }
  if ((!((width > 0) && (height > 0)))) {
    var message$proxy4 = ((((where + ": invalid pixel target size ") + width) + "\u00d7") + height);
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy4)).D;
  }
  if ((!(!("frames" in target)))) {
    var arg = target.frames;
    if ((!(!(!Array.isArray(arg))))) {
      var message$proxy5 = (where + ": PixelFrames.frames must be an array");
      throw new $c_sjs_js_JavaScriptException(Error(message$proxy5)).D;
    }
  } else {
    var data = target.data;
    if (((data === (void 0)) || (!$m_Ltrivalibs_graphics_painter_pixels$package$PixelData$().n0(format, data)))) {
      var message$proxy6 = (((where + ": PixelImage.data must be the array type of '") + format) + "' (Uint8Array / Float16Array / Float32Array)");
      throw new $c_sjs_js_JavaScriptException(Error(message$proxy6)).D;
    }
    var length = $m_Ltrivalibs_graphics_painter_pixels$package$PixelData$().mG(data);
    if ((length !== (Math.imul(width, height) << 2))) {
      var message$proxy7 = ((((where + ": PixelImage.data length ") + length) + " is not width \u00b7 height \u00b7 4 = ") + (Math.imul(width, height) << 2));
      throw new $c_sjs_js_JavaScriptException(Error(message$proxy7)).D;
    }
  }
});
var $d_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$, "trivalibs.graphics.painter.pixels$package$PixelTarget$", ({
  eo: 1
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
$p.l4 = (function(source) {
  return ((!(!("data" in source))) && (!(!("format" in source))));
});
$p.lm = (function(queue, source, texture, width, height, flipY, premultipliedAlpha) {
  if (this.l4(source)) {
    var data = source.data;
    var $x_1 = data.buffer;
    var value = (data.byteOffset | 0);
    var value$1 = Math.imul(width, $m_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$().kO(source.format));
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
  ep: 1
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
  this.kr = null;
  this.J = null;
  this.iq = 0.0;
  this.ks = 0.0;
  this.kr = cam;
  this.J = in$1;
  this.iq = sensitivity;
  this.ks = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.eQ = (function(tpf) {
  var dist = ((this.ks * tpf) / 1000.0);
  var forward = 0.0;
  if (((this.J.S.ak("KeyW") || this.J.S.ak("ArrowUp")) || (this.J.iC.eN && (this.J.S.lf() === 1)))) {
    forward = (forward + dist);
  }
  if ((((this.J.S.ak("KeyS") || this.J.S.ak("ArrowDown")) || this.J.S.mE(2)) || (this.J.S.lf() >= 2))) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((this.J.S.ak("KeyA") || this.J.S.ak("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((this.J.S.ak("KeyD") || this.J.S.ak("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (this.J.S.ak("Space")) {
    up = (up + dist);
  }
  if ((this.J.S.ak("ShiftLeft") || this.J.S.ak("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = this.J.iB.m4();
  var deltaH = (((+drag.ab) * this.iq) / 1000.0);
  var deltaV = (((+drag.a6) * this.iq) / 1000.0);
  this.kr.n3(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  eq: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.eJ = 0.0;
  this.fp = 0.0;
  this.fr = 0.0;
  this.fq = 0.0;
  this.a3 = 0.0;
  this.aC = 0.0;
  this.O = null;
  this.ir = null;
  this.eJ = fov;
  this.fp = aspect;
  this.fr = near;
  this.fq = far;
  this.a3 = rotH;
  this.aC = rotV;
  this.O = pos;
  this.ir = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.ja = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.eJ) || (aspect !== this.fp)) || (near !== this.fr)) || (far !== this.fq));
  this.eJ = fov;
  this.fp = aspect;
  this.fr = near;
  this.fq = far;
  if ((rotH !== this.a3)) {
    this.a3 = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jh(rotH);
  }
  if ((rotV !== this.aC)) {
    this.aC = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jg(rotV);
  }
  this.O = pos;
  if (needsProj) {
    this.ir = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().ll(this.eJ, this.fp), aspect, near, far);
  }
});
$p.n3 = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.a3 = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jh((this.a3 + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.aC = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jg((this.aC + deltaV));
  }
  if ((up !== 0.0)) {
    this.O = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.O.q, (this.O.m + up), this.O.n);
  }
  if ((forward !== 0.0)) {
    var $x_5 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().j();
    var $x_4 = this.O;
    var $x_3 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().j();
    var p$proxy1 = this.a3;
    var $x_1 = Math.sin(p$proxy1);
    var p$proxy2 = this.a3;
    this.O = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_5, $x_4, $x_3, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_2, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_1)), 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_10 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().j();
    var $x_9 = this.O;
    var $x_8 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().j();
    var p$proxy3 = this.a3;
    var $x_6 = Math.cos(p$proxy3);
    var p$proxy4 = this.a3;
    this.O = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_10, $x_9, $x_8, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_7, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_6)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.nG = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.O, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().gj(this.a3), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().mo(this.aC)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.nM = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().l1();
  var t = this.nG();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().eP(t.aR, t.aP, t.aQ), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  er: 1
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
$p.jh = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.jg = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.ll = (function(fov, aspect) {
  var p$proxy5 = (0.5 * fov);
  var p$proxy6 = ((+Math.tan(p$proxy5)) / (+Math.min(aspect, 1.0)));
  return (2.0 * (+Math.atan(p$proxy6)));
});
$p.lH = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), this.ll(fov, aspect), aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.jh(rotH), this.jg(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  es: 1
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
  this.aR = null;
  this.aP = null;
  this.aQ = null;
  this.aR = translation;
  this.aP = rotation;
  this.aQ = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  et: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$() {
}
$p = $c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_scene\uff3fobject$package$() {
}
$h_Ltrivalibs_graphics_scene_scene\uff3fobject$package$.prototype = $p;
$p.U = (function(m) {
  return $f_Ltrivalibs_graphics_math_Mat3ImmutableOps__transpose__O__Ltrivalibs_graphics_math_Mat3Base__O($m_Ltrivalibs_graphics_math_cpu_Mat3$().kZ(), $f_Ltrivalibs_graphics_math_Mat3ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat3Base__O($m_Ltrivalibs_graphics_math_cpu_Mat3$().kZ(), $m_Ltrivalibs_graphics_math_cpu_Mat3$().mp(m), $m_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$()), $m_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$());
});
var $d_Ltrivalibs_graphics_scene_scene\uff3fobject$package$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$, "trivalibs.graphics.scene.scene_object$package$", ({
  eu: 1
}));
var $n_Ltrivalibs_graphics_scene_scene\uff3fobject$package$;
function $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$() {
  if ((!$n_Ltrivalibs_graphics_scene_scene\uff3fobject$package$)) {
    $n_Ltrivalibs_graphics_scene_scene\uff3fobject$package$ = new $c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$();
  }
  return $n_Ltrivalibs_graphics_scene_scene\uff3fobject$package$;
}
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.ay) + ") ") + b.aF) + ": ")) + b.az);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().lr($m_sjs_js_ArrayOps$().lq(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_1 = i;
    var x0 = array$1[i];
    var x11 = x0.ab;
    var name = x11.ab;
    var typ = x11.a6;
    res[$x_1] = (((((("  @location(" + (x0.a6 | 0)) + ") ") + name) + ": ") + typ) + ",");
    i = ((1 + i) | 0);
  }
  var len$1 = (builtins.length | 0);
  var res$1 = new Array(len$1);
  var i$1 = 0;
  while ((i$1 < len$1)) {
    var $x_2 = i$1;
    var x0$1 = builtins[i$1];
    var name$1 = x0$1.aF;
    var builtin = x0$1.ay;
    var typ$1 = x0$1.az;
    res$1[$x_2] = (((((("  @builtin(" + builtin) + ") ") + name$1) + ": ") + typ$1) + ",");
    i$1 = ((1 + i$1) | 0);
  }
  var allFields = $m_sjs_js_ArrayOpsCommon$().p(res, res$1);
  return (((allFields.length | 0) === 0) ? "" : (((("struct " + structName) + " {\n") + allFields.join("\n")) + "\n}"));
}
function $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($thiz, groupIdx, names, types) {
  var array$1 = $m_sjs_js_ArrayOps$().lr($m_sjs_js_ArrayOps$().lq(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    var x20 = x0.ab;
    var name = x20.ab;
    var typ = x20.a6;
    var bindingIdx = (x0.a6 | 0);
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
  ew: 1
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
  this.g9 = null;
  this.g9 = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  ex: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.is = null;
  this.is = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  ey: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  this.eK = null;
  this.eK = null;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  ez: 1
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
  this.ga = null;
  this.kt = null;
  this.ga = in$1;
  this.kt = out;
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
  eA: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.it.hasOwnProperty(data.name))))))) {
    var dict = $thiz.it;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.iu.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.iw = null;
  this.iv = null;
  this.iu = null;
  this.it = null;
  this.iw = "";
  this.iv = "";
  this.iu = [];
  this.it = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.mw = (function() {
  return this.iu.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  eB: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, textures) {
  this.hi = null;
  this.hj = null;
  this.hh = null;
  this.hi = in$1;
  this.hj = out;
  this.hh = bindings;
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
  eF: 1
}));
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
$p.kS = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  eH: 1
}));
var $n_Ltrivalibs_graphics_shader_layouts$;
function $m_Ltrivalibs_graphics_shader_layouts$() {
  if ((!$n_Ltrivalibs_graphics_shader_layouts$)) {
    $n_Ltrivalibs_graphics_shader_layouts$ = new $c_Ltrivalibs_graphics_shader_layouts$();
  }
  return $n_Ltrivalibs_graphics_shader_layouts$;
}
/** @constructor */
function $c_Ltrivalibs_utils_animation_Animator(frame, onFpsCallback) {
  this.kw = null;
  this.iz = null;
  this.gb = 0;
  this.gc = 0.0;
  this.hk = 0.0;
  this.hl = 0.0;
  this.iA = false;
  this.kw = frame;
  this.iz = onFpsCallback;
  this.gb = 0;
  this.gc = 0.0;
  this.hk = 0.0;
  this.hl = (-1.0);
  this.iA = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.lg = (function(time) {
  this.gb = ((1 + this.gb) | 0);
  if ((this.gc === 0.0)) {
    this.gc = time;
    this.hk = time;
  }
  var fpsElapsed = (time - this.gc);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.gb) / fpsElapsed);
    if (((time - this.hk) >= 1000.0)) {
      var s = (fps.toFixed(1) + " FPS");
      console.log(s);
      this.hk = time;
      if ((this.iz !== null)) {
        (0, this.iz)(fps);
      }
    }
    this.gb = 0;
    this.gc = time;
  }
  var delta = ((this.hl < 0.0) ? 0.0 : (time - this.hl));
  this.hl = time;
  (0, this.kw)(delta);
  if (this.iA) {
    requestAnimationFrame($m_sjs_js_Any$().fy(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.lg((+v1$2));
    }))));
  }
});
$p.nx = (function() {
  this.iA = true;
  return requestAnimationFrame($m_sjs_js_Any$().fy(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.lg((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  eK: 1
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
$p.lG = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.nx();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  eL: 1
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
  this.S = null;
  this.iB = null;
  this.iC = null;
  this.S = input;
  this.iB = drag;
  this.iC = hold;
}
$p = $c_Ltrivalibs_utils_events_CanvasInput.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_CanvasInput;
/** @constructor */
function $h_Ltrivalibs_utils_events_CanvasInput() {
}
$h_Ltrivalibs_utils_events_CanvasInput.prototype = $p;
$p.eQ = (function(tpf) {
  this.iB.eQ(tpf);
  this.iC.eQ(tpf);
});
var $d_Ltrivalibs_utils_events_CanvasInput = new $TypeData().i($c_Ltrivalibs_utils_events_CanvasInput, "trivalibs.utils.events.CanvasInput", ({
  eM: 1
}));
function $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, pointersOf, glideMinSpeed, glideHalfLife) {
  $thiz.kz = pointersOf;
  $thiz.ky = glideHalfLife;
  $thiz.fs = null;
  $thiz.iE = 0.0;
  $thiz.iF = 0.0;
  $thiz.eL = 0.0;
  $thiz.eM = 0.0;
  $thiz.ah = 0.0;
  $thiz.ai = 0.0;
  $thiz.iD = (glideHalfLife > 0.0);
  var s = (glideMinSpeed / 1000.0);
  $thiz.kx = ((s < 0.001) ? 0.001 : s);
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, glideMinSpeed, glideHalfLife) {
  $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife), glideMinSpeed, glideHalfLife);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.a7));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_DragGesture() {
  this.kz = null;
  this.ky = 0.0;
  this.fs = null;
  this.iE = 0.0;
  this.iF = 0.0;
  this.eL = 0.0;
  this.eM = 0.0;
  this.ah = 0.0;
  this.ai = 0.0;
  this.iD = false;
  this.kx = 0.0;
}
$p = $c_Ltrivalibs_utils_events_DragGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_DragGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_DragGesture() {
}
$h_Ltrivalibs_utils_events_DragGesture.prototype = $p;
$p.m4 = (function() {
  return new $c_T2(this.eL, this.eM);
});
$p.eQ = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().kV(this.kz.hn());
  if ((d === null)) {
    this.fs = null;
    if (this.iD) {
      var p$proxy1 = ((this.ah * this.ah) + (this.ai * this.ai));
      var $x_1 = ((+Math.sqrt(p$proxy1)) >= this.kx);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var e$proxy1 = (tpf / this.ky);
      var f = (+Math.pow(0.5, e$proxy1));
      this.ah = (this.ah * f);
      this.ai = (this.ai * f);
      this.eL = (this.ah * tpf);
      this.eM = (this.ai * tpf);
    } else {
      this.ah = 0.0;
      this.ai = 0.0;
      this.eL = 0.0;
      this.eM = 0.0;
    }
  } else {
    if ((((this.fs !== null) && (d.an !== null)) && $m_sr_BoxesRunTime$().hr((+this.fs), (+d.an)))) {
      this.eL = (d.fu - this.iE);
      this.eM = (d.fv - this.iF);
      if ((this.iD && (tpf > 0.0))) {
        var e$proxy2 = (tpf / 40.0);
        var k = (1.0 - (+Math.pow(0.5, e$proxy2)));
        this.ah = (this.ah + (((this.eL / tpf) - this.ah) * k));
        this.ai = (this.ai + (((this.eM / tpf) - this.ai) * k));
      }
    } else {
      if ((this.fs === null)) {
        this.ah = 0.0;
        this.ai = 0.0;
      }
      this.eL = 0.0;
      this.eM = 0.0;
    }
    this.fs = d.an;
    this.iE = d.fu;
    this.iF = d.fv;
  }
});
var $d_Ltrivalibs_utils_events_DragGesture = new $TypeData().i($c_Ltrivalibs_utils_events_DragGesture, "trivalibs.utils.events.DragGesture", ({
  eN: 1
}));
function $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, pointersOf, holdDelay, holdRadius) {
  $thiz.kC = pointersOf;
  $thiz.kA = holdDelay;
  $thiz.kB = holdRadius;
  $thiz.ge = null;
  $thiz.ft = 0.0;
  $thiz.gf = false;
  $thiz.gd = false;
  $thiz.eN = false;
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, holdDelay, holdRadius) {
  $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius), holdDelay, holdRadius);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.a7));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_HoldGesture() {
  this.kC = null;
  this.kA = 0.0;
  this.kB = 0.0;
  this.ge = null;
  this.ft = 0.0;
  this.gf = false;
  this.gd = false;
  this.eN = false;
}
$p = $c_Ltrivalibs_utils_events_HoldGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_HoldGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_HoldGesture() {
}
$h_Ltrivalibs_utils_events_HoldGesture.prototype = $p;
$p.eQ = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().kV(this.kC.hn());
  if ((d === null)) {
    this.ge = null;
    this.ft = 0.0;
    this.gf = false;
    this.gd = false;
    this.eN = false;
  } else {
    var pid = d.an;
    if ((!(((this.ge !== null) && (pid !== null)) && $m_sr_BoxesRunTime$().hr((+this.ge), (+pid))))) {
      this.ge = pid;
      this.ft = 0.0;
      this.gf = false;
      this.gd = false;
    }
    this.ft = (this.ft + tpf);
    if (this.gd) {
      this.eN = true;
    } else if ((this.ft < this.kA)) {
      var dx = (d.fu - d.iH);
      var dy = (d.fv - d.iI);
      var p$proxy2 = ((dx * dx) + (dy * dy));
      if (((+Math.sqrt(p$proxy2)) > this.kB)) {
        this.gf = true;
      }
      this.eN = false;
    } else if (this.gf) {
      this.eN = false;
    } else {
      this.gd = true;
      this.eN = true;
    }
  }
});
var $d_Ltrivalibs_utils_events_HoldGesture = new $TypeData().i($c_Ltrivalibs_utils_events_HoldGesture, "trivalibs.utils.events.HoldGesture", ({
  eO: 1
}));
function $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz) {
  var i = 0;
  while ((i < ($thiz.gi.length | 0))) {
    if (($thiz.gi[i].an === null)) {
      return $thiz.gi[i];
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id) {
  var i = 0;
  while ((i < ($thiz.a7.length | 0))) {
    var p = $thiz.a7[i];
    if (((p.an !== null) && $m_sr_BoxesRunTime$().hr((+p.an), id))) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id) {
  var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id);
  if ((p !== null)) {
    p.an = null;
    var idx = $m_sjs_js_ArrayOps$().l3($thiz.a7, p, 0);
    if ((idx >= 0)) {
      $thiz.a7.splice(idx, 1);
    }
  }
}
function $p_Ltrivalibs_utils_events_InputState__install__V($thiz) {
  var i = 0;
  while ((i < $thiz.kH)) {
    $thiz.gi.push(new $c_Ltrivalibs_utils_events_Pointer());
    i = ((1 + i) | 0);
  }
  $m_Ltrivalibs_utils_events_keyboard$package$().mF($thiz.gg, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!$thiz.gh.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      $thiz.gh[k$3] = value$proxy1;
      if ((!($thiz.T === (void 0)))) {
        (0, $thiz.T)();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete $thiz.gh[k$3$1];
    if ((!($thiz.T === (void 0)))) {
      (0, $thiz.T)();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().na($thiz.kE, $m_Ltrivalibs_utils_events_pointer$package$().nb(), new $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(((v1$2, v2$2, v3$2, v4$2, v5$2) => {
    var button = (v1$2 | 0);
    var id = (+v2$2);
    var x$1 = (+v3$2);
    var y = (+v4$2);
    if ($thiz.kG) {
      $thiz.gg.focus();
    }
    var key$proxy3 = ("" + button);
    var value$proxy2 = (+Date.now());
    $thiz.hm[key$proxy3] = value$proxy2;
    var slot = $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz);
    if ((slot !== null)) {
      slot.an = id;
      slot.iG = button;
      (+Date.now());
      slot.iH = x$1;
      slot.iI = y;
      slot.fu = x$1;
      slot.fv = y;
      $thiz.a7.push(slot);
      ($thiz.a7.length | 0);
    }
    if ((!($thiz.T === (void 0)))) {
      (0, $thiz.T)();
    }
  })), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2$1, v2$2$1, v3$2$1) => {
    var id$1 = (+v1$2$1);
    var x$2 = (+v2$2$1);
    var y$1 = (+v3$2$1);
    var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id$1);
    if ((p !== null)) {
      p.fu = x$2;
      p.fv = y$1;
      if ((($thiz.a7.length | 0) > 0)) {
        $thiz.a7[0];
      }
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2$1) => {
    var button$1 = (v1$2$2 | 0);
    var id$2 = (+v2$2$2);
    delete $thiz.hm[("" + button$1)];
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id$2);
    if ((!($thiz.T === (void 0)))) {
      (0, $thiz.T)();
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2$3) => {
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, (+v1$2$3));
    if ((!($thiz.T === (void 0)))) {
      (0, $thiz.T)();
    }
  })), $thiz.kI);
  $thiz.gg.addEventListener("focus", $thiz.kF);
  $thiz.gg.addEventListener("blur", $thiz.kD);
}
/** @constructor */
function $c_Ltrivalibs_utils_events_InputState(el, keyTarget, suppressContextMenu, onActivity, focusOnPointerDown, maxPointers) {
  this.kE = null;
  this.gg = null;
  this.kI = false;
  this.T = null;
  this.kG = false;
  this.kH = 0;
  this.gh = null;
  this.hm = null;
  this.gi = null;
  this.a7 = null;
  this.kF = null;
  this.kD = null;
  this.kE = el;
  this.gg = keyTarget;
  this.kI = suppressContextMenu;
  this.T = onActivity;
  this.kG = focusOnPointerDown;
  this.kH = maxPointers;
  this.gh = ({});
  this.hm = ({});
  this.gi = [];
  this.a7 = [];
  if ($m_sr_BoxesRunTime$().b(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().b(keyTarget, document.activeElement);
  }
  this.kF = ((_$1$3) => {
    if ((!(this.T === (void 0)))) {
      (0, this.T)();
    }
  });
  this.kD = ((_$2$3) => {
    if ((!(this.T === (void 0)))) {
      (0, this.T)();
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
$p.ak = (function(key) {
  return (!(!(!(!this.gh.hasOwnProperty(key)))));
});
$p.mE = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.hm.hasOwnProperty(key$proxy7)))));
});
$p.lf = (function() {
  return (this.a7.length | 0);
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  eP: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_Pointer() {
  this.an = null;
  this.iG = 0;
  this.iH = 0.0;
  this.iI = 0.0;
  this.fu = 0.0;
  this.fv = 0.0;
  this.an = null;
  this.iG = 0;
  this.iH = 0.0;
  this.iI = 0.0;
  this.fu = 0.0;
  this.fv = 0.0;
}
$p = $c_Ltrivalibs_utils_events_Pointer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_Pointer;
/** @constructor */
function $h_Ltrivalibs_utils_events_Pointer() {
}
$h_Ltrivalibs_utils_events_Pointer.prototype = $p;
var $d_Ltrivalibs_utils_events_Pointer = new $TypeData().i($c_Ltrivalibs_utils_events_Pointer, "trivalibs.utils.events.Pointer", ({
  eQ: 1
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
$p.kV = (function(pointers) {
  var i = 0;
  while ((i < (pointers.length | 0))) {
    var p = pointers[i];
    if ((p.iG === 0)) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
});
var $d_Ltrivalibs_utils_events_gestures$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_gestures$package$, "trivalibs.utils.events.gestures$package$", ({
  eR: 1
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
$p.mC = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity, dragGlideHalfLife, dragGlideMinSpeed) {
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
  eS: 1
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
$p.mF = (function(el, onDown, onUp, keepDefault) {
  var down = ((e$3) => {
    var isTab = (e$3.code === "Tab");
    if (((!keepDefault) && (!isTab))) {
      e$3.preventDefault();
    }
    if ((!(!(!e$3.repeat)))) {
      onDown.K(e$3.code);
    }
  });
  var up = ((e$3$1) => {
    onUp.K(e$3$1.code);
  });
  el.addEventListener("keydown", down);
  el.addEventListener("keyup", up);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    el.removeEventListener("keydown", down);
    el.removeEventListener("keyup", up);
  }));
});
var $d_Ltrivalibs_utils_events_keyboard$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_keyboard$package$, "trivalibs.utils.events.keyboard$package$", ({
  eT: 1
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
$p.na = (function(el, moveTarget, onDown, onMove, onUp, onCancel, suppressContextMenu) {
  var downFn = ((e$3) => {
    onDown.lI((e$3.button | 0), (+e$3.pointerId), (+e$3.clientX), (+e$3.clientY), (!(!e$3.isPrimary)));
  });
  var moveFn = ((e$3$1) => {
    onMove.lK((+e$3$1.pointerId), (+e$3$1.clientX), (+e$3$1.clientY));
  });
  var upFn = ((e$3$2) => {
    onUp.lJ((e$3$2.button | 0), (+e$3$2.pointerId), (+e$3$2.clientX), (+e$3$2.clientY));
  });
  var cancelFn = ((e$3$3) => {
    onCancel.K((+e$3$3.pointerId));
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
$p.nb = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  eU: 1
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
  this.ls = null;
  $n_jl_Character$ = this;
  this.ls = $constArrUDiffs_I(67, "1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]");
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.nE = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  aH: 1,
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
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $Long));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.k)));
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.ji = s;
  if (writableStackTrace) {
    $thiz.mh();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.ji = null;
  }
  hs() {
    return this.ji;
  }
  mh() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.D : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  l() {
    var className = $objectClassName(this);
    var message = this.hs();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  r() {
    return $c_O.prototype.r.call(this);
  }
  o(that) {
    return $c_O.prototype.o.call(this, that);
  }
  get "message"() {
    var m = this.hs();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.l();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d)));
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
$p.l = (function() {
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
$p.nO = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.a.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.jo;
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
$p.l = (function() {
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
$p.l = (function() {
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
$p.l = (function() {
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
$p.l = (function() {
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
$p.l = (function() {
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
$p.l = (function() {
  return "<function5>";
});
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.fG = 0;
  this.jy = 0;
  this.lt = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.fG = $f_T__hashCode__I("Seq");
  this.jy = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.lt = this.nH($m_sci_Nil$(), this.jy);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.ns = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.mx(xs, this.fG) : ((xs instanceof $c_sci_List) ? this.mH(xs, this.fG) : this.n8(xs, this.fG)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  cH: 1,
  cG: 1
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
  this.jz = null;
  this.jz = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  cN: 1,
  cM: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$.prototype = $p;
$p.h = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat3MutableOps__set__O__Ltrivalibs_graphics_math_Mat3Mutable__O__Ltrivalibs_graphics_math_Mat3Base__V($m_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$().mY(), ref, $m_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat3_Mat3PaddedBuffer$", ({
  cO: 1,
  ap: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$;
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
$p.h = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().mt(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  cP: 1,
  ap: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
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
$p.fB = (function(t) {
  return new $c_T2(t.ff, t.fg);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  cU: 1,
  aq: 1
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
$p.fB = (function(t) {
  return new $c_T3(t.q, t.m, t.n);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  cV: 1,
  aq: 1
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
  this.jA = null;
  this.jA = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  d1: 1,
  d0: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.jB = null;
  this.jC = null;
  this.jB = x$1;
  this.jC = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.nJ = (function(t) {
  return $m_sr_Tuples$().kQ(this.jB.fB(t.k(0)), this.jC.fB($m_sr_Tuples$().nA(t)));
});
$p.fB = (function(t) {
  return this.nJ(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  d2: 1,
  ar: 1
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
$p.fB = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  d3: 1,
  ar: 1
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
  this.jE = 0;
  this.jE = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.aE = (function(t) {
  return t.k(this.jE);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  d8: 1,
  cY: 1
}));
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.q * other.q) + (v.m * other.m)) + (v.n * other.n));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat3$() {
  this.jF = null;
  this.jG = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat3$.prototype = $p;
$p.kZ = (function() {
  if ((!this.jG)) {
    this.jF = $m_Ltrivalibs_graphics_math_cpu_Mat3$();
    this.jG = true;
  }
  return this.jF;
});
$p.mp = (function(m) {
  return new $c_Ltrivalibs_graphics_math_cpu_Mat3(m.gP, m.gQ, m.gR, m.gS, m.gT, m.gU, m.gV, m.gW, m.gX);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat3$, "trivalibs.graphics.math.cpu.Mat3$", ({
  dt: 1,
  db: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Mat3$;
function $m_Ltrivalibs_graphics_math_cpu_Mat3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Mat3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Mat3$ = new $c_Ltrivalibs_graphics_math_cpu_Mat3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Mat3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$() {
  this.jH = null;
  this.jI = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.l1 = (function() {
  if ((!this.jI)) {
    this.jH = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.jI = true;
  }
  return this.jH;
});
$p.eP = (function(t, r, s) {
  var x = r.hU;
  var y = r.hV;
  var z = r.hW;
  var w = r.hT;
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
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.q), ((xy + wz) * s.q), ((xz - wy) * s.q), 0.0, ((xy - wz) * s.m), ((1.0 - (xx + zz)) * s.m), ((yz + wx) * s.m), 0.0, ((xz + wy) * s.n), ((yz - wx) * s.n), ((1.0 - (xx + yy)) * s.n), 0.0, t.q, t.m, t.n, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  dw: 1,
  de: 1
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
  dA: 1,
  dC: 1
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
  this.jJ = null;
  this.jK = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.j = (function() {
  if ((!this.jK)) {
    this.jJ = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.jK = true;
  }
  return this.jJ;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  dF: 1,
  dk: 1
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
  this.jL = null;
  this.jM = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = $p;
$p.mr = (function() {
  if ((!this.jM)) {
    this.jL = new $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3();
    this.jM = true;
  }
  return this.jL;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$, "trivalibs.graphics.math.cpu.Vec4$", ({
  dI: 1,
  dp: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec4$;
function $m_Ltrivalibs_graphics_math_cpu_Vec4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec4$ = new $c_Ltrivalibs_graphics_math_cpu_Vec4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21() {
}
$h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21, "trivalibs.graphics.math.cpu.mat3$package$Mat3PaddedBuffer$$anon$21", ({
  dL: 1,
  dd: 1
}));
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
  dO: 1,
  dg: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr(name) {
  this.t = null;
  this.jR = null;
  this.jR = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(this, name);
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.kJ = (function(value) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return (((("  let " + this.jR) + " = ") + value.t) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  dQ: 1,
  ay: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5.prototype = $p;
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5, "trivalibs.graphics.math.gpu.float_expr$package$$anon$5", ({
  dV: 1,
  M: 1
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
  dW: 1,
  N: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$.prototype = $p;
$p.nK = (function(m, x$2, v, x$4, x$5) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.t) + " * ") + v.t) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat3ImmutableOpsG_FloatExpr_Mat3Expr$", ({
  dX: 1,
  dc: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$.prototype = $p;
$p.mZ = (function(m, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.t) + " * ") + other.t) + ")"));
});
$p.nL = (function(m, x$2, v, x$4, x$5) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.t) + " * ") + v.t) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  dY: 1,
  df: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
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
$p.lo = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.t + ".x"));
});
$p.lp = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.t + ".y"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2BaseG_FloatExpr_Vec2Expr$", ({
  dZ: 1,
  dh: 1
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
$p.n4 = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.t) + " * ") + scalar.t) + ")"));
});
$p.lB = (function(v, x$2, scalar) {
  return this.n4(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fz().K(scalar));
});
$p.ml = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("fract(" + v.t) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  e0: 1,
  di: 1
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
  e1: 1,
  aw: 1
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
$p.mi = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + v.t) + " * 0.5 + 0.5)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  e2: 1,
  dl: 1
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
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4BaseG_FloatExpr_Vec4Expr$", ({
  e3: 1,
  ax: 1
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
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  e4: 1,
  dq: 1
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
  this.X = null;
  this.i4 = null;
  this.i5 = null;
  this.i3 = null;
  this.h3 = null;
  this.X = canvas;
  this.i4 = format;
  this.i5 = null;
  this.i3 = null;
  this.h3 = [];
}
$p = $c_Ltrivalibs_graphics_painter_CanvasSurface.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_CanvasSurface;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_CanvasSurface() {
}
$h_Ltrivalibs_graphics_painter_CanvasSurface.prototype = $p;
$p.nN = (function() {
  return (this.X.width | 0);
});
$p.mv = (function() {
  return (this.X.height | 0);
});
$p.m2 = (function(painter) {
  var device = painter.d;
  this.i5 = device.queue;
  var canvasContext = $m_Ltrivalibs_graphics_painter_WebGPU$().mq(this.X);
  var f$proxy1 = this.i4;
  canvasContext.configure(({
    "device": device,
    "format": f$proxy1
  }));
  this.i3 = canvasContext;
  this.X.width = (this.X.clientWidth | 0);
  this.X.height = (this.X.clientHeight | 0);
  var observer = new ResizeObserver(((entries$3) => {
    var entry = entries$3[0];
    var rw = (+entry.contentRect.width);
    var rh = (+entry.contentRect.height);
    if (((rw > 0.0) && (rh > 0.0))) {
      var w = $doubleToInt(rw);
      var h = $doubleToInt(rh);
      if (((w !== (this.X.width | 0)) || (h !== (this.X.height | 0)))) {
        this.X.width = w;
        this.X.height = h;
        var k = 0;
        while ((k < (this.h3.length | 0))) {
          (0, this.h3[k])(w, h);
          k = ((1 + k) | 0);
        }
      }
    }
  }));
  observer.observe(this.X);
});
$p.m3 = (function() {
  return this.i3.getCurrentTexture();
});
$p.ne = (function(encoder) {
  this.i5.submit([encoder.finish()]);
});
$p.n7 = (function(cb) {
  this.h3.push(cb);
});
function $isArrayOf_Ltrivalibs_graphics_painter_CanvasSurface(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aA)));
}
var $d_Ltrivalibs_graphics_painter_CanvasSurface = new $TypeData().i($c_Ltrivalibs_graphics_painter_CanvasSurface, "trivalibs.graphics.painter.CanvasSurface", ({
  aA: 1,
  ej: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Instance(shade, painter) {
  this.jZ = 0;
  this.jY = null;
  this.w = null;
  this.z = null;
  this.i = null;
  this.h5 = null;
  this.w = shade;
  this.z = painter;
  $f_Ltrivalibs_graphics_painter_Bindable__$init$__V(this);
  this.i = [];
  this.h5 = [];
}
$p = $c_Ltrivalibs_graphics_painter_Instance.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Instance;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Instance() {
}
$h_Ltrivalibs_graphics_painter_Instance.prototype = $p;
$p.ho = (function() {
  return this.jZ;
});
$p.iJ = (function() {
  return this.jY;
});
$p.iL = (function(x$1) {
  this.jZ = x$1;
});
$p.iK = (function(x$1) {
  this.jY = x$1;
});
$p.jb = (function() {
  return this.w;
});
$p.eO = (function() {
  return this.i;
});
$p.j9 = (function() {
  return this.h5;
});
var $d_Ltrivalibs_graphics_painter_Instance = new $TypeData().i($c_Ltrivalibs_graphics_painter_Instance, "trivalibs.graphics.painter.Instance", ({
  ec: 1,
  az: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.kp = 0;
  this.ko = null;
  this.im = null;
  this.g3 = null;
  this.g4 = null;
  this.il = null;
  this.ik = null;
  this.fo = null;
  this.kq = null;
  this.I = null;
  this.im = painter;
  this.g3 = form;
  this.g4 = shade;
  $f_Ltrivalibs_graphics_painter_Bindable__$init$__V(this);
  this.il = "none";
  this.ik = null;
  this.fo = [];
  this.kq = [];
  this.I = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.ho = (function() {
  return this.kp;
});
$p.iJ = (function() {
  return this.ko;
});
$p.iL = (function(x$1) {
  this.kp = x$1;
});
$p.iK = (function(x$1) {
  this.ko = x$1;
});
$p.jb = (function() {
  return this.g4;
});
$p.eO = (function() {
  return this.fo;
});
$p.j9 = (function() {
  return this.kq;
});
$p.nv = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.il = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.ik = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  ei: 1,
  az: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.g8 = null;
  this.g8 = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.fC = (function() {
  return this.g8.fC();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  ev: 1,
  O: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.ix = null;
  this.ix = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.ht = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.ix === "") ? name : ((this.ix + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  eC: 1,
  y: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.iy = null;
  this.iy = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.ax = (function(name) {
  return ((this.iy === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.iy + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  eD: 1,
  y: 1
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
  eE: 1,
  y: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.kv = null;
  this.ku = null;
  this.kv = prefix;
  this.ku = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.ht = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.kv + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  eG: 1,
  y: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$.prototype = $p;
$p.fC = (function() {
  return "mat3x3<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat3$", ({
  eI: 1,
  O: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$;
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
$p.fC = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  eJ: 1,
  O: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
}
/** @constructor */
function $c_jl_Class($data) {
  this.hx = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.l = (function() {
  return ((this.hx.Y ? "interface " : (this.hx.X ? "" : "class ")) + this.hx.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  aI: 1,
  a: 1,
  e: 1
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
  b6: 1,
  b3: 1,
  b4: 1
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
    return $thiz.eR;
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eS;
      break;
    }
    case 1: {
      return $thiz.aX;
      break;
    }
    case 2: {
      return $thiz.aY;
      break;
    }
    case 3: {
      return $thiz.aZ;
      break;
    }
    case 4: {
      return $thiz.b0;
      break;
    }
    case 5: {
      return $thiz.b1;
      break;
    }
    case 6: {
      return $thiz.b2;
      break;
    }
    case 7: {
      return $thiz.b3;
      break;
    }
    case 8: {
      return $thiz.b4;
      break;
    }
    case 9: {
      return $thiz.aW;
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
      return $thiz.eT;
      break;
    }
    case 1: {
      return $thiz.b7;
      break;
    }
    case 2: {
      return $thiz.b8;
      break;
    }
    case 3: {
      return $thiz.b9;
      break;
    }
    case 4: {
      return $thiz.ba;
      break;
    }
    case 5: {
      return $thiz.bb;
      break;
    }
    case 6: {
      return $thiz.bc;
      break;
    }
    case 7: {
      return $thiz.bd;
      break;
    }
    case 8: {
      return $thiz.be;
      break;
    }
    case 9: {
      return $thiz.b5;
      break;
    }
    case 10: {
      return $thiz.b6;
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
      return $thiz.eU;
      break;
    }
    case 1: {
      return $thiz.bi;
      break;
    }
    case 2: {
      return $thiz.bj;
      break;
    }
    case 3: {
      return $thiz.bk;
      break;
    }
    case 4: {
      return $thiz.bl;
      break;
    }
    case 5: {
      return $thiz.bm;
      break;
    }
    case 6: {
      return $thiz.bn;
      break;
    }
    case 7: {
      return $thiz.bo;
      break;
    }
    case 8: {
      return $thiz.bp;
      break;
    }
    case 9: {
      return $thiz.bf;
      break;
    }
    case 10: {
      return $thiz.bg;
      break;
    }
    case 11: {
      return $thiz.bh;
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
      return $thiz.eV;
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
      return $thiz.bq;
      break;
    }
    case 10: {
      return $thiz.br;
      break;
    }
    case 11: {
      return $thiz.bs;
      break;
    }
    case 12: {
      return $thiz.bt;
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
      return $thiz.eW;
      break;
    }
    case 1: {
      return $thiz.bH;
      break;
    }
    case 2: {
      return $thiz.bI;
      break;
    }
    case 3: {
      return $thiz.bJ;
      break;
    }
    case 4: {
      return $thiz.bK;
      break;
    }
    case 5: {
      return $thiz.bL;
      break;
    }
    case 6: {
      return $thiz.bM;
      break;
    }
    case 7: {
      return $thiz.bN;
      break;
    }
    case 8: {
      return $thiz.bO;
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
    case 11: {
      return $thiz.bE;
      break;
    }
    case 12: {
      return $thiz.bF;
      break;
    }
    case 13: {
      return $thiz.bG;
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
      return $thiz.eX;
      break;
    }
    case 1: {
      return $thiz.bV;
      break;
    }
    case 2: {
      return $thiz.bW;
      break;
    }
    case 3: {
      return $thiz.bX;
      break;
    }
    case 4: {
      return $thiz.bY;
      break;
    }
    case 5: {
      return $thiz.bZ;
      break;
    }
    case 6: {
      return $thiz.c0;
      break;
    }
    case 7: {
      return $thiz.c1;
      break;
    }
    case 8: {
      return $thiz.c2;
      break;
    }
    case 9: {
      return $thiz.bP;
      break;
    }
    case 10: {
      return $thiz.bQ;
      break;
    }
    case 11: {
      return $thiz.bR;
      break;
    }
    case 12: {
      return $thiz.bS;
      break;
    }
    case 13: {
      return $thiz.bT;
      break;
    }
    case 14: {
      return $thiz.bU;
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
      return $thiz.eY;
      break;
    }
    case 1: {
      return $thiz.ca;
      break;
    }
    case 2: {
      return $thiz.cb;
      break;
    }
    case 3: {
      return $thiz.cc;
      break;
    }
    case 4: {
      return $thiz.cd;
      break;
    }
    case 5: {
      return $thiz.ce;
      break;
    }
    case 6: {
      return $thiz.cf;
      break;
    }
    case 7: {
      return $thiz.cg;
      break;
    }
    case 8: {
      return $thiz.ch;
      break;
    }
    case 9: {
      return $thiz.c3;
      break;
    }
    case 10: {
      return $thiz.c4;
      break;
    }
    case 11: {
      return $thiz.c5;
      break;
    }
    case 12: {
      return $thiz.c6;
      break;
    }
    case 13: {
      return $thiz.c7;
      break;
    }
    case 14: {
      return $thiz.c8;
      break;
    }
    case 15: {
      return $thiz.c9;
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
      return $thiz.eZ;
      break;
    }
    case 1: {
      return $thiz.cq;
      break;
    }
    case 2: {
      return $thiz.cr;
      break;
    }
    case 3: {
      return $thiz.cs;
      break;
    }
    case 4: {
      return $thiz.ct;
      break;
    }
    case 5: {
      return $thiz.cu;
      break;
    }
    case 6: {
      return $thiz.cv;
      break;
    }
    case 7: {
      return $thiz.cw;
      break;
    }
    case 8: {
      return $thiz.cx;
      break;
    }
    case 9: {
      return $thiz.ci;
      break;
    }
    case 10: {
      return $thiz.cj;
      break;
    }
    case 11: {
      return $thiz.ck;
      break;
    }
    case 12: {
      return $thiz.cl;
      break;
    }
    case 13: {
      return $thiz.cm;
      break;
    }
    case 14: {
      return $thiz.cn;
      break;
    }
    case 15: {
      return $thiz.co;
      break;
    }
    case 16: {
      return $thiz.cp;
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
      return $thiz.f0;
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
      return $thiz.cy;
      break;
    }
    case 10: {
      return $thiz.cz;
      break;
    }
    case 11: {
      return $thiz.cA;
      break;
    }
    case 12: {
      return $thiz.cB;
      break;
    }
    case 13: {
      return $thiz.cC;
      break;
    }
    case 14: {
      return $thiz.cD;
      break;
    }
    case 15: {
      return $thiz.cE;
      break;
    }
    case 16: {
      return $thiz.cF;
      break;
    }
    case 17: {
      return $thiz.cG;
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
      return $thiz.f1;
      break;
    }
    case 1: {
      return $thiz.cZ;
      break;
    }
    case 2: {
      return $thiz.d0;
      break;
    }
    case 3: {
      return $thiz.d1;
      break;
    }
    case 4: {
      return $thiz.d2;
      break;
    }
    case 5: {
      return $thiz.d3;
      break;
    }
    case 6: {
      return $thiz.d4;
      break;
    }
    case 7: {
      return $thiz.d5;
      break;
    }
    case 8: {
      return $thiz.d6;
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
    case 17: {
      return $thiz.cX;
      break;
    }
    case 18: {
      return $thiz.cY;
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
      return $thiz.ab;
      break;
    }
    case 1: {
      return $thiz.a6;
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
      return $thiz.f2;
      break;
    }
    case 1: {
      return $thiz.dh;
      break;
    }
    case 2: {
      return $thiz.dj;
      break;
    }
    case 3: {
      return $thiz.dk;
      break;
    }
    case 4: {
      return $thiz.dl;
      break;
    }
    case 5: {
      return $thiz.dm;
      break;
    }
    case 6: {
      return $thiz.dn;
      break;
    }
    case 7: {
      return $thiz.dp;
      break;
    }
    case 8: {
      return $thiz.dq;
      break;
    }
    case 9: {
      return $thiz.d7;
      break;
    }
    case 10: {
      return $thiz.d8;
      break;
    }
    case 11: {
      return $thiz.d9;
      break;
    }
    case 12: {
      return $thiz.da;
      break;
    }
    case 13: {
      return $thiz.db;
      break;
    }
    case 14: {
      return $thiz.dc;
      break;
    }
    case 15: {
      return $thiz.dd;
      break;
    }
    case 16: {
      return $thiz.de;
      break;
    }
    case 17: {
      return $thiz.df;
      break;
    }
    case 18: {
      return $thiz.dg;
      break;
    }
    case 19: {
      return $thiz.di;
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
      return $thiz.f3;
      break;
    }
    case 1: {
      return $thiz.dB;
      break;
    }
    case 2: {
      return $thiz.dE;
      break;
    }
    case 3: {
      return $thiz.dF;
      break;
    }
    case 4: {
      return $thiz.dG;
      break;
    }
    case 5: {
      return $thiz.dH;
      break;
    }
    case 6: {
      return $thiz.dI;
      break;
    }
    case 7: {
      return $thiz.dJ;
      break;
    }
    case 8: {
      return $thiz.dK;
      break;
    }
    case 9: {
      return $thiz.dr;
      break;
    }
    case 10: {
      return $thiz.ds;
      break;
    }
    case 11: {
      return $thiz.dt;
      break;
    }
    case 12: {
      return $thiz.du;
      break;
    }
    case 13: {
      return $thiz.dv;
      break;
    }
    case 14: {
      return $thiz.dw;
      break;
    }
    case 15: {
      return $thiz.dx;
      break;
    }
    case 16: {
      return $thiz.dy;
      break;
    }
    case 17: {
      return $thiz.dz;
      break;
    }
    case 18: {
      return $thiz.dA;
      break;
    }
    case 19: {
      return $thiz.dC;
      break;
    }
    case 20: {
      return $thiz.dD;
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
      return $thiz.f4;
      break;
    }
    case 1: {
      return $thiz.dV;
      break;
    }
    case 2: {
      return $thiz.dZ;
      break;
    }
    case 3: {
      return $thiz.e0;
      break;
    }
    case 4: {
      return $thiz.e1;
      break;
    }
    case 5: {
      return $thiz.e2;
      break;
    }
    case 6: {
      return $thiz.e3;
      break;
    }
    case 7: {
      return $thiz.e4;
      break;
    }
    case 8: {
      return $thiz.e5;
      break;
    }
    case 9: {
      return $thiz.dL;
      break;
    }
    case 10: {
      return $thiz.dM;
      break;
    }
    case 11: {
      return $thiz.dN;
      break;
    }
    case 12: {
      return $thiz.dO;
      break;
    }
    case 13: {
      return $thiz.dP;
      break;
    }
    case 14: {
      return $thiz.dQ;
      break;
    }
    case 15: {
      return $thiz.dR;
      break;
    }
    case 16: {
      return $thiz.dS;
      break;
    }
    case 17: {
      return $thiz.dT;
      break;
    }
    case 18: {
      return $thiz.dU;
      break;
    }
    case 19: {
      return $thiz.dW;
      break;
    }
    case 20: {
      return $thiz.dX;
      break;
    }
    case 21: {
      return $thiz.dY;
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
      return $thiz.aF;
      break;
    }
    case 1: {
      return $thiz.ay;
      break;
    }
    case 2: {
      return $thiz.az;
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
      return $thiz.e6;
      break;
    }
    case 1: {
      return $thiz.aG;
      break;
    }
    case 2: {
      return $thiz.aH;
      break;
    }
    case 3: {
      return $thiz.aI;
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
      return $thiz.f5;
      break;
    }
    case 1: {
      return $thiz.e7;
      break;
    }
    case 2: {
      return $thiz.e8;
      break;
    }
    case 3: {
      return $thiz.e9;
      break;
    }
    case 4: {
      return $thiz.ea;
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
      return $thiz.f6;
      break;
    }
    case 1: {
      return $thiz.eb;
      break;
    }
    case 2: {
      return $thiz.ec;
      break;
    }
    case 3: {
      return $thiz.ed;
      break;
    }
    case 4: {
      return $thiz.ee;
      break;
    }
    case 5: {
      return $thiz.ef;
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
      return $thiz.f7;
      break;
    }
    case 1: {
      return $thiz.eg;
      break;
    }
    case 2: {
      return $thiz.eh;
      break;
    }
    case 3: {
      return $thiz.ei;
      break;
    }
    case 4: {
      return $thiz.ej;
      break;
    }
    case 5: {
      return $thiz.ek;
      break;
    }
    case 6: {
      return $thiz.el;
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
      return $thiz.f8;
      break;
    }
    case 1: {
      return $thiz.em;
      break;
    }
    case 2: {
      return $thiz.en;
      break;
    }
    case 3: {
      return $thiz.eo;
      break;
    }
    case 4: {
      return $thiz.ep;
      break;
    }
    case 5: {
      return $thiz.eq;
      break;
    }
    case 6: {
      return $thiz.er;
      break;
    }
    case 7: {
      return $thiz.es;
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
      return $thiz.f9;
      break;
    }
    case 1: {
      return $thiz.et;
      break;
    }
    case 2: {
      return $thiz.eu;
      break;
    }
    case 3: {
      return $thiz.ev;
      break;
    }
    case 4: {
      return $thiz.ew;
      break;
    }
    case 5: {
      return $thiz.ex;
      break;
    }
    case 6: {
      return $thiz.ey;
      break;
    }
    case 7: {
      return $thiz.ez;
      break;
    }
    case 8: {
      return $thiz.eA;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 8)"));
    }
  }
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.a9();
  while ($thiz.P()) {
    if ((!those.P())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().b($thiz.M(), those.M()))) {
      return false;
    }
  }
  return (!those.P());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.gH = null;
  $n_sc_Iterator$ = this;
  this.gH = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  bE: 1,
  a: 1,
  af: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c8)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.jp = null;
  this.jp = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.hn = (function() {
  return (0, this.jp)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  ch: 1,
  cg: 1,
  aY: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.jq = null;
  this.jq = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.K = (function(x0) {
  return (0, this.jq)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  cj: 1,
  ci: 1,
  l: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.jr = null;
  this.jr = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.kL = (function(x0, x1) {
  return (0, this.jr)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  cl: 1,
  ck: 1,
  aZ: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.js = null;
  this.js = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.lK = (function(x0, x1, x2) {
  return (0, this.js)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  cn: 1,
  cm: 1,
  b0: 1
}));
/** @constructor */
function $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(f) {
  this.jt = null;
  this.jt = f;
}
$p = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a;
/** @constructor */
function $h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a() {
}
$h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = $p;
$p.lJ = (function(x0, x1, x2, x3) {
  return (0, this.jt)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  cp: 1,
  co: 1,
  b1: 1
}));
/** @constructor */
function $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(f) {
  this.ju = null;
  this.ju = f;
}
$p = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = new $h_sr_AbstractFunction5();
$p.constructor = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078;
/** @constructor */
function $h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078() {
}
$h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = $p;
$p.lI = (function(x0, x1, x2, x3, x4) {
  return (0, this.ju)(x0, x1, x2, x3, x4);
});
var $d_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078 = new $TypeData().i($c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078, "scala.runtime.AbstractFunction5.$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078", ({
  cr: 1,
  cq: 1,
  b2: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.G = null;
  this.G = es;
  if ((es.a.length <= 22)) {
    $m_sr_Scala3RunTime$().lR();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.k = (function(n) {
  return this.G.a[n];
});
$p.s = (function() {
  return this.G.a.length;
});
$p.y = (function() {
  return "Tuple";
});
$p.l = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().nO(this.G), "(", ",", ")");
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().m0(this, (-889275714), null);
});
$p.o = (function(that) {
  if ((that instanceof $c_sr_TupleXXL)) {
    if ((this.G === that.G)) {
      return true;
    } else {
      if ((this.G.a.length !== that.G.a.length)) {
        return false;
      }
      var i = 0;
      while ((i < this.G.a.length)) {
        var $x_2 = $m_sr_BoxesRunTime$();
        var arr$3 = this.G;
        var n = i;
        var $x_1 = arr$3.a[n];
        var arr$4 = that.G;
        var n$1 = i;
        if ((!$x_2.b($x_1, arr$4.a[n$1]))) {
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
var $d_sr_TupleXXL = new $TypeData().i($c_sr_TupleXXL, "scala.runtime.TupleXXL", ({
  am: 1,
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
$p.fy = (function(f) {
  return ((arg1$2) => f.K(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  cy: 1,
  cC: 1,
  cD: 1
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
$p.K = (function(x) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec4((+x.e6), (+x.aG), (+x.aH), (+x.aI));
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3, "trivalibs.graphics.math.cpu.Vec4$$anon$3", ({
  dJ: 1,
  S: 1,
  l: 1
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
$p.K = (function(x) {
  return $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().nD((+x));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  dU: 1,
  S: 1,
  l: 1
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
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  aE: 1,
  aJ: 1,
  d: 1,
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
  aF: 1,
  a: 1,
  h: 1,
  e: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.P)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  P: 1,
  a: 1,
  h: 1,
  e: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.N = null;
  this.N = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.l = (function() {
  return this.N;
});
$p.L = (function() {
  return this.N.length;
});
$p.kP = (function(index) {
  return this.N.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  aR: 1,
  B: 1,
  aC: 1,
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
$p.aa = (function() {
  return (-1);
});
$p.kR = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.kK = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.a9 = (function() {
  return this;
});
$p.l = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.gl(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.aa();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.aa();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.a9(), that);
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$.prototype = $p;
$p.ao = (function(m) {
  return m.hD;
});
$p.ap = (function(m) {
  return m.hE;
});
$p.aq = (function(m) {
  return m.hF;
});
$p.ar = (function(m) {
  return m.hG;
});
$p.as = (function(m) {
  return m.hH;
});
$p.at = (function(m) {
  return m.hI;
});
$p.au = (function(m) {
  return m.hJ;
});
$p.av = (function(m) {
  return m.hK;
});
$p.aw = (function(m) {
  return m.hL;
});
$p.gm = (function(m, v) {
  m.hD = v;
});
$p.gn = (function(m, v) {
  m.hE = v;
});
$p.go = (function(m, v) {
  m.hF = v;
});
$p.gq = (function(m, v) {
  m.hG = v;
});
$p.gr = (function(m, v) {
  m.hH = v;
});
$p.gs = (function(m, v) {
  m.hI = v;
});
$p.gu = (function(m, v) {
  m.hJ = v;
});
$p.gv = (function(m, v) {
  m.hK = v;
});
$p.gw = (function(m, v) {
  m.hL = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$, "trivalibs.graphics.math.cpu.Mat3$given_Mat3Mutable_Mat3$", ({
  du: 1,
  M: 1,
  as: 1,
  at: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$;
function $m_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$ = new $c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$;
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
$p.ao = (function(m) {
  return m.gP;
});
$p.ap = (function(m) {
  return m.gQ;
});
$p.aq = (function(m) {
  return m.gR;
});
$p.gp = (function(m) {
  return m.hM;
});
$p.ar = (function(m) {
  return m.gS;
});
$p.as = (function(m) {
  return m.gT;
});
$p.at = (function(m) {
  return m.gU;
});
$p.gt = (function(m) {
  return m.hN;
});
$p.au = (function(m) {
  return m.gV;
});
$p.av = (function(m) {
  return m.gW;
});
$p.aw = (function(m) {
  return m.gX;
});
$p.gx = (function(m) {
  return m.hO;
});
$p.gy = (function(m) {
  return m.hP;
});
$p.gz = (function(m) {
  return m.hQ;
});
$p.gA = (function(m) {
  return m.hR;
});
$p.gB = (function(m) {
  return m.hS;
});
$p.gm = (function(m, v) {
  m.gP = v;
});
$p.gn = (function(m, v) {
  m.gQ = v;
});
$p.go = (function(m, v) {
  m.gR = v;
});
$p.l5 = (function(m, v) {
  m.hM = v;
});
$p.gq = (function(m, v) {
  m.gS = v;
});
$p.gr = (function(m, v) {
  m.gT = v;
});
$p.gs = (function(m, v) {
  m.gU = v;
});
$p.l6 = (function(m, v) {
  m.hN = v;
});
$p.gu = (function(m, v) {
  m.gV = v;
});
$p.gv = (function(m, v) {
  m.gW = v;
});
$p.gw = (function(m, v) {
  m.gX = v;
});
$p.l7 = (function(m, v) {
  m.hO = v;
});
$p.l8 = (function(m, v) {
  m.hP = v;
});
$p.l9 = (function(m, v) {
  m.hQ = v;
});
$p.la = (function(m, v) {
  m.hR = v;
});
$p.lb = (function(m, v) {
  m.hS = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  dx: 1,
  N: 1,
  au: 1,
  av: 1
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
$p.aT = (function(v) {
  return v.hU;
});
$p.aU = (function(v) {
  return v.hV;
});
$p.aV = (function(v) {
  return v.hW;
});
$p.aS = (function(v) {
  return v.hT;
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  dB: 1,
  ax: 1,
  dn: 1,
  dr: 1
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
  dG: 1,
  aw: 1,
  dj: 1,
  dm: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$.prototype = $p;
$p.iQ = (function(m) {
  var offset$proxy19 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy19, true));
});
$p.iS = (function(m) {
  var offset$proxy20 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy20, true));
});
$p.iU = (function(m) {
  var offset$proxy21 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy21, true));
});
$p.iW = (function(m) {
  var offset$proxy22 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy22, true));
});
$p.iY = (function(m) {
  var offset$proxy23 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy23, true));
});
$p.j0 = (function(m) {
  var offset$proxy24 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy24, true));
});
$p.j2 = (function(m) {
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy25, true));
});
$p.j4 = (function(m) {
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy26, true));
});
$p.j6 = (function(m) {
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy27, true));
});
$p.iR = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy28 = (m.off | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy10, true);
});
$p.iT = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy29 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy11, true);
});
$p.iV = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy30 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy12, true);
});
$p.iX = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy31 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy13, true);
});
$p.iZ = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy32 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy14, true);
});
$p.j1 = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy33 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy33, value$proxy15, true);
});
$p.j3 = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy34 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy34, value$proxy16, true);
});
$p.j5 = (function(m, v) {
  var value$proxy17 = Math.fround(v);
  var offset$proxy35 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy35, value$proxy17, true);
});
$p.j7 = (function(m, v) {
  var value$proxy18 = Math.fround(v);
  var offset$proxy36 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy36, value$proxy18, true);
});
$p.ao = (function(m) {
  return this.iQ(m);
});
$p.ap = (function(m) {
  return this.iS(m);
});
$p.aq = (function(m) {
  return this.iU(m);
});
$p.ar = (function(m) {
  return this.iW(m);
});
$p.as = (function(m) {
  return this.iY(m);
});
$p.at = (function(m) {
  return this.j0(m);
});
$p.au = (function(m) {
  return this.j2(m);
});
$p.av = (function(m) {
  return this.j4(m);
});
$p.aw = (function(m) {
  return this.j6(m);
});
$p.gm = (function(m, v) {
  this.iR(m, v);
});
$p.gn = (function(m, v) {
  this.iT(m, v);
});
$p.go = (function(m, v) {
  this.iV(m, v);
});
$p.gq = (function(m, v) {
  this.iX(m, v);
});
$p.gr = (function(m, v) {
  this.iZ(m, v);
});
$p.gs = (function(m, v) {
  this.j1(m, v);
});
$p.gu = (function(m, v) {
  this.j3(m, v);
});
$p.gv = (function(m, v) {
  this.j5(m, v);
});
$p.gw = (function(m, v) {
  this.j7(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$, "trivalibs.graphics.math.cpu.mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$", ({
  dM: 1,
  M: 1,
  as: 1,
  at: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$;
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
$p.iQ = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.iS = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.iU = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.mJ = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.iW = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.iY = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.j0 = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.mL = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.j2 = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.j4 = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.j6 = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.mN = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.mP = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.mR = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.mT = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.mV = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.iR = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.iT = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.iV = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.mK = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.iX = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.iZ = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.j1 = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.mM = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.j3 = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.j5 = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.j7 = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.mO = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.mQ = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.mS = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.mU = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.mW = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.ao = (function(m) {
  return this.iQ(m);
});
$p.ap = (function(m) {
  return this.iS(m);
});
$p.aq = (function(m) {
  return this.iU(m);
});
$p.gp = (function(m) {
  return this.mJ(m);
});
$p.ar = (function(m) {
  return this.iW(m);
});
$p.as = (function(m) {
  return this.iY(m);
});
$p.at = (function(m) {
  return this.j0(m);
});
$p.gt = (function(m) {
  return this.mL(m);
});
$p.au = (function(m) {
  return this.j2(m);
});
$p.av = (function(m) {
  return this.j4(m);
});
$p.aw = (function(m) {
  return this.j6(m);
});
$p.gx = (function(m) {
  return this.mN(m);
});
$p.gy = (function(m) {
  return this.mP(m);
});
$p.gz = (function(m) {
  return this.mR(m);
});
$p.gA = (function(m) {
  return this.mT(m);
});
$p.gB = (function(m) {
  return this.mV(m);
});
$p.gm = (function(m, v) {
  this.iR(m, v);
});
$p.gn = (function(m, v) {
  this.iT(m, v);
});
$p.go = (function(m, v) {
  this.iV(m, v);
});
$p.l5 = (function(m, v) {
  this.mK(m, v);
});
$p.gq = (function(m, v) {
  this.iX(m, v);
});
$p.gr = (function(m, v) {
  this.iZ(m, v);
});
$p.gs = (function(m, v) {
  this.j1(m, v);
});
$p.l6 = (function(m, v) {
  this.mM(m, v);
});
$p.gu = (function(m, v) {
  this.j3(m, v);
});
$p.gv = (function(m, v) {
  this.j5(m, v);
});
$p.gw = (function(m, v) {
  this.j7(m, v);
});
$p.l7 = (function(m, v) {
  this.mO(m, v);
});
$p.l8 = (function(m, v) {
  this.mQ(m, v);
});
$p.l9 = (function(m, v) {
  this.mS(m, v);
});
$p.la = (function(m, v) {
  this.mU(m, v);
});
$p.lb = (function(m, v) {
  this.mW(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  dP: 1,
  N: 1,
  au: 1,
  av: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T($thiz, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, vertexBody, fragmentBody, fragBuiltinParams) {
  var f$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildVertexMain__T__T($thiz, vertexBody);
  var g$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T__T($thiz, fragmentBody, fragBuiltinParams);
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.g6, f$proxy1, g$proxy1];
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
  this.g7 = null;
  this.g5 = null;
  this.g6 = null;
  this.g7 = vertexBody;
  this.g5 = fragmentBody;
  this.g6 = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, (-1488826029), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.g7 === x$0.g7) && (this.g5 === x$0.g5)) && (this.g6 === x$0.g6))));
});
$p.l = (function() {
  return $m_sr_ScalaRunTime$().lC(this);
});
$p.s = (function() {
  return 3;
});
$p.y = (function() {
  return "ShaderDef";
});
$p.k = (function(n) {
  switch (n) {
    case 0: {
      return this.g7;
      break;
    }
    case 1: {
      return this.g5;
      break;
    }
    case 2: {
      return this.g6;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Ltrivalibs_graphics_shader_ShaderDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aB)));
}
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  aB: 1,
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
  aD: 1,
  j: 1,
  i: 1,
  d: 1,
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
  aG: 1,
  k: 1,
  a: 1,
  h: 1,
  e: 1
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
  aL: 1,
  j: 1,
  i: 1,
  d: 1,
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
  aM: 1,
  j: 1,
  i: 1,
  d: 1,
  a: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  aO: 1,
  j: 1,
  i: 1,
  d: 1,
  a: 1
}));
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
  aP: 1,
  k: 1,
  a: 1,
  h: 1,
  e: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  aS: 1,
  j: 1,
  i: 1,
  d: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  aV: 1,
  j: 1,
  i: 1,
  d: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.jk)) {
    if (($thiz.gE === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.gE;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.hx.N));
      try {
        var $x_1 = ((($thiz.gE + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.jj = $x_1;
    $thiz.jk = true;
  }
  return $thiz.jj;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.gE = null;
    this.jj = null;
    this.jk = false;
    this.gE = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  hs() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  b5: 1,
  j: 1,
  i: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.fD = 0;
  this.jm = 0;
  this.jl = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.jl = outer;
  this.fD = 0;
  this.jm = outer.s();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.P = (function() {
  return (this.fD < this.jm);
});
$p.M = (function() {
  var result = this.jl.k(this.fD);
  this.fD = ((1 + this.fD) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  b7: 1,
  q: 1,
  f: 1,
  g: 1,
  v: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.eR = null;
  this.eR = _1;
}
$p = $c_T1.prototype = new $h_O();
$p.constructor = $c_T1;
/** @constructor */
function $h_T1() {
}
$h_T1.prototype = $p;
$p.s = (function() {
  return 1;
});
$p.k = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.l = (function() {
  return (("(" + this.eR) + ")");
});
$p.y = (function() {
  return "Tuple1";
});
$p.A = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, 1228477340, true);
});
$p.o = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().b(this.eR, x$1.eR)));
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.T)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  T: 1,
  b8: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.eS = null;
  this.aX = null;
  this.aY = null;
  this.aZ = null;
  this.b0 = null;
  this.b1 = null;
  this.b2 = null;
  this.b3 = null;
  this.b4 = null;
  this.aW = null;
  this.eS = _1;
  this.aX = _2;
  this.aY = _3;
  this.aZ = _4;
  this.b0 = _5;
  this.b1 = _6;
  this.b2 = _7;
  this.b3 = _8;
  this.b4 = _9;
  this.aW = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 10;
});
$p.k = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, 2104595240, true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().b(this.eS, x$0.eS) && $m_sr_BoxesRunTime$().b(this.aX, x$0.aX)) && $m_sr_BoxesRunTime$().b(this.aY, x$0.aY)) && $m_sr_BoxesRunTime$().b(this.aZ, x$0.aZ)) && $m_sr_BoxesRunTime$().b(this.b0, x$0.b0)) && $m_sr_BoxesRunTime$().b(this.b1, x$0.b1)) && $m_sr_BoxesRunTime$().b(this.b2, x$0.b2)) && $m_sr_BoxesRunTime$().b(this.b3, x$0.b3)) && $m_sr_BoxesRunTime$().b(this.b4, x$0.b4)) && $m_sr_BoxesRunTime$().b(this.aW, x$0.aW))));
});
$p.y = (function() {
  return "Tuple10";
});
$p.l = (function() {
  return (((((((((((((((((((("(" + this.eS) + ",") + this.aX) + ",") + this.aY) + ",") + this.aZ) + ",") + this.b0) + ",") + this.b1) + ",") + this.b2) + ",") + this.b3) + ",") + this.b4) + ",") + this.aW) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.U)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  U: 1,
  b: 1,
  c: 1,
  b9: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.eT = null;
  this.b7 = null;
  this.b8 = null;
  this.b9 = null;
  this.ba = null;
  this.bb = null;
  this.bc = null;
  this.bd = null;
  this.be = null;
  this.b5 = null;
  this.b6 = null;
  this.eT = _1;
  this.b7 = _2;
  this.b8 = _3;
  this.b9 = _4;
  this.ba = _5;
  this.bb = _6;
  this.bc = _7;
  this.bd = _8;
  this.be = _9;
  this.b5 = _10;
  this.b6 = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 11;
});
$p.k = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, 838406606, true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().b(this.eT, x$0.eT) && $m_sr_BoxesRunTime$().b(this.b7, x$0.b7)) && $m_sr_BoxesRunTime$().b(this.b8, x$0.b8)) && $m_sr_BoxesRunTime$().b(this.b9, x$0.b9)) && $m_sr_BoxesRunTime$().b(this.ba, x$0.ba)) && $m_sr_BoxesRunTime$().b(this.bb, x$0.bb)) && $m_sr_BoxesRunTime$().b(this.bc, x$0.bc)) && $m_sr_BoxesRunTime$().b(this.bd, x$0.bd)) && $m_sr_BoxesRunTime$().b(this.be, x$0.be)) && $m_sr_BoxesRunTime$().b(this.b5, x$0.b5)) && $m_sr_BoxesRunTime$().b(this.b6, x$0.b6))));
});
$p.y = (function() {
  return "Tuple11";
});
$p.l = (function() {
  return (((((((((((((((((((((("(" + this.eT) + ",") + this.b7) + ",") + this.b8) + ",") + this.b9) + ",") + this.ba) + ",") + this.bb) + ",") + this.bc) + ",") + this.bd) + ",") + this.be) + ",") + this.b5) + ",") + this.b6) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.V)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  V: 1,
  b: 1,
  c: 1,
  ba: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.eU = null;
  this.bi = null;
  this.bj = null;
  this.bk = null;
  this.bl = null;
  this.bm = null;
  this.bn = null;
  this.bo = null;
  this.bp = null;
  this.bf = null;
  this.bg = null;
  this.bh = null;
  this.eU = _1;
  this.bi = _2;
  this.bj = _3;
  this.bk = _4;
  this.bl = _5;
  this.bm = _6;
  this.bn = _7;
  this.bo = _8;
  this.bp = _9;
  this.bf = _10;
  this.bg = _11;
  this.bh = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 12;
});
$p.k = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, (-1964145863), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().b(this.eU, x$0.eU) && $m_sr_BoxesRunTime$().b(this.bi, x$0.bi)) && $m_sr_BoxesRunTime$().b(this.bj, x$0.bj)) && $m_sr_BoxesRunTime$().b(this.bk, x$0.bk)) && $m_sr_BoxesRunTime$().b(this.bl, x$0.bl)) && $m_sr_BoxesRunTime$().b(this.bm, x$0.bm)) && $m_sr_BoxesRunTime$().b(this.bn, x$0.bn)) && $m_sr_BoxesRunTime$().b(this.bo, x$0.bo)) && $m_sr_BoxesRunTime$().b(this.bp, x$0.bp)) && $m_sr_BoxesRunTime$().b(this.bf, x$0.bf)) && $m_sr_BoxesRunTime$().b(this.bg, x$0.bg)) && $m_sr_BoxesRunTime$().b(this.bh, x$0.bh))));
});
$p.y = (function() {
  return "Tuple12";
});
$p.l = (function() {
  return (((((((((((((((((((((((("(" + this.eU) + ",") + this.bi) + ",") + this.bj) + ",") + this.bk) + ",") + this.bl) + ",") + this.bm) + ",") + this.bn) + ",") + this.bo) + ",") + this.bp) + ",") + this.bf) + ",") + this.bg) + ",") + this.bh) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.W)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  W: 1,
  b: 1,
  c: 1,
  bb: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.eV = null;
  this.bu = null;
  this.bv = null;
  this.bw = null;
  this.bx = null;
  this.by = null;
  this.bz = null;
  this.bA = null;
  this.bB = null;
  this.bq = null;
  this.br = null;
  this.bs = null;
  this.bt = null;
  this.eV = _1;
  this.bu = _2;
  this.bv = _3;
  this.bw = _4;
  this.bx = _5;
  this.by = _6;
  this.bz = _7;
  this.bA = _8;
  this.bB = _9;
  this.bq = _10;
  this.br = _11;
  this.bs = _12;
  this.bt = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 13;
});
$p.k = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, 1224168367, true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().b(this.eV, x$0.eV) && $m_sr_BoxesRunTime$().b(this.bu, x$0.bu)) && $m_sr_BoxesRunTime$().b(this.bv, x$0.bv)) && $m_sr_BoxesRunTime$().b(this.bw, x$0.bw)) && $m_sr_BoxesRunTime$().b(this.bx, x$0.bx)) && $m_sr_BoxesRunTime$().b(this.by, x$0.by)) && $m_sr_BoxesRunTime$().b(this.bz, x$0.bz)) && $m_sr_BoxesRunTime$().b(this.bA, x$0.bA)) && $m_sr_BoxesRunTime$().b(this.bB, x$0.bB)) && $m_sr_BoxesRunTime$().b(this.bq, x$0.bq)) && $m_sr_BoxesRunTime$().b(this.br, x$0.br)) && $m_sr_BoxesRunTime$().b(this.bs, x$0.bs)) && $m_sr_BoxesRunTime$().b(this.bt, x$0.bt))));
});
$p.y = (function() {
  return "Tuple13";
});
$p.l = (function() {
  return (((((((((((((((((((((((((("(" + this.eV) + ",") + this.bu) + ",") + this.bv) + ",") + this.bw) + ",") + this.bx) + ",") + this.by) + ",") + this.bz) + ",") + this.bA) + ",") + this.bB) + ",") + this.bq) + ",") + this.br) + ",") + this.bs) + ",") + this.bt) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.X)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  X: 1,
  b: 1,
  c: 1,
  bc: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.eW = null;
  this.bH = null;
  this.bI = null;
  this.bJ = null;
  this.bK = null;
  this.bL = null;
  this.bM = null;
  this.bN = null;
  this.bO = null;
  this.bC = null;
  this.bD = null;
  this.bE = null;
  this.bF = null;
  this.bG = null;
  this.eW = _1;
  this.bH = _2;
  this.bI = _3;
  this.bJ = _4;
  this.bK = _5;
  this.bL = _6;
  this.bM = _7;
  this.bN = _8;
  this.bO = _9;
  this.bC = _10;
  this.bD = _11;
  this.bE = _12;
  this.bF = _13;
  this.bG = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 14;
});
$p.k = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, 147759069, true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().b(this.eW, x$0.eW) && $m_sr_BoxesRunTime$().b(this.bH, x$0.bH)) && $m_sr_BoxesRunTime$().b(this.bI, x$0.bI)) && $m_sr_BoxesRunTime$().b(this.bJ, x$0.bJ)) && $m_sr_BoxesRunTime$().b(this.bK, x$0.bK)) && $m_sr_BoxesRunTime$().b(this.bL, x$0.bL)) && $m_sr_BoxesRunTime$().b(this.bM, x$0.bM)) && $m_sr_BoxesRunTime$().b(this.bN, x$0.bN)) && $m_sr_BoxesRunTime$().b(this.bO, x$0.bO)) && $m_sr_BoxesRunTime$().b(this.bC, x$0.bC)) && $m_sr_BoxesRunTime$().b(this.bD, x$0.bD)) && $m_sr_BoxesRunTime$().b(this.bE, x$0.bE)) && $m_sr_BoxesRunTime$().b(this.bF, x$0.bF)) && $m_sr_BoxesRunTime$().b(this.bG, x$0.bG))));
});
$p.y = (function() {
  return "Tuple14";
});
$p.l = (function() {
  return (((((((((((((((((((((((((((("(" + this.eW) + ",") + this.bH) + ",") + this.bI) + ",") + this.bJ) + ",") + this.bK) + ",") + this.bL) + ",") + this.bM) + ",") + this.bN) + ",") + this.bO) + ",") + this.bC) + ",") + this.bD) + ",") + this.bE) + ",") + this.bF) + ",") + this.bG) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Y)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  Y: 1,
  b: 1,
  c: 1,
  bd: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.eX = null;
  this.bV = null;
  this.bW = null;
  this.bX = null;
  this.bY = null;
  this.bZ = null;
  this.c0 = null;
  this.c1 = null;
  this.c2 = null;
  this.bP = null;
  this.bQ = null;
  this.bR = null;
  this.bS = null;
  this.bT = null;
  this.bU = null;
  this.eX = _1;
  this.bV = _2;
  this.bW = _3;
  this.bX = _4;
  this.bY = _5;
  this.bZ = _6;
  this.c0 = _7;
  this.c1 = _8;
  this.c2 = _9;
  this.bP = _10;
  this.bQ = _11;
  this.bR = _12;
  this.bS = _13;
  this.bT = _14;
  this.bU = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 15;
});
$p.k = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, 1834180931, true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().b(this.eX, x$0.eX) && $m_sr_BoxesRunTime$().b(this.bV, x$0.bV)) && $m_sr_BoxesRunTime$().b(this.bW, x$0.bW)) && $m_sr_BoxesRunTime$().b(this.bX, x$0.bX)) && $m_sr_BoxesRunTime$().b(this.bY, x$0.bY)) && $m_sr_BoxesRunTime$().b(this.bZ, x$0.bZ)) && $m_sr_BoxesRunTime$().b(this.c0, x$0.c0)) && $m_sr_BoxesRunTime$().b(this.c1, x$0.c1)) && $m_sr_BoxesRunTime$().b(this.c2, x$0.c2)) && $m_sr_BoxesRunTime$().b(this.bP, x$0.bP)) && $m_sr_BoxesRunTime$().b(this.bQ, x$0.bQ)) && $m_sr_BoxesRunTime$().b(this.bR, x$0.bR)) && $m_sr_BoxesRunTime$().b(this.bS, x$0.bS)) && $m_sr_BoxesRunTime$().b(this.bT, x$0.bT)) && $m_sr_BoxesRunTime$().b(this.bU, x$0.bU))));
});
$p.y = (function() {
  return "Tuple15";
});
$p.l = (function() {
  return (((((((((((((((((((((((((((((("(" + this.eX) + ",") + this.bV) + ",") + this.bW) + ",") + this.bX) + ",") + this.bY) + ",") + this.bZ) + ",") + this.c0) + ",") + this.c1) + ",") + this.c2) + ",") + this.bP) + ",") + this.bQ) + ",") + this.bR) + ",") + this.bS) + ",") + this.bT) + ",") + this.bU) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Z)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  Z: 1,
  b: 1,
  c: 1,
  be: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.eY = null;
  this.ca = null;
  this.cb = null;
  this.cc = null;
  this.cd = null;
  this.ce = null;
  this.cf = null;
  this.cg = null;
  this.ch = null;
  this.c3 = null;
  this.c4 = null;
  this.c5 = null;
  this.c6 = null;
  this.c7 = null;
  this.c8 = null;
  this.c9 = null;
  this.eY = _1;
  this.ca = _2;
  this.cb = _3;
  this.cc = _4;
  this.cd = _5;
  this.ce = _6;
  this.cf = _7;
  this.cg = _8;
  this.ch = _9;
  this.c3 = _10;
  this.c4 = _11;
  this.c5 = _12;
  this.c6 = _13;
  this.c7 = _14;
  this.c8 = _15;
  this.c9 = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 16;
});
$p.k = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, 499793902, true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().b(this.eY, x$0.eY) && $m_sr_BoxesRunTime$().b(this.ca, x$0.ca)) && $m_sr_BoxesRunTime$().b(this.cb, x$0.cb)) && $m_sr_BoxesRunTime$().b(this.cc, x$0.cc)) && $m_sr_BoxesRunTime$().b(this.cd, x$0.cd)) && $m_sr_BoxesRunTime$().b(this.ce, x$0.ce)) && $m_sr_BoxesRunTime$().b(this.cf, x$0.cf)) && $m_sr_BoxesRunTime$().b(this.cg, x$0.cg)) && $m_sr_BoxesRunTime$().b(this.ch, x$0.ch)) && $m_sr_BoxesRunTime$().b(this.c3, x$0.c3)) && $m_sr_BoxesRunTime$().b(this.c4, x$0.c4)) && $m_sr_BoxesRunTime$().b(this.c5, x$0.c5)) && $m_sr_BoxesRunTime$().b(this.c6, x$0.c6)) && $m_sr_BoxesRunTime$().b(this.c7, x$0.c7)) && $m_sr_BoxesRunTime$().b(this.c8, x$0.c8)) && $m_sr_BoxesRunTime$().b(this.c9, x$0.c9))));
});
$p.y = (function() {
  return "Tuple16";
});
$p.l = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.eY) + ",") + this.ca) + ",") + this.cb) + ",") + this.cc) + ",") + this.cd) + ",") + this.ce) + ",") + this.cf) + ",") + this.cg) + ",") + this.ch) + ",") + this.c3) + ",") + this.c4) + ",") + this.c5) + ",") + this.c6) + ",") + this.c7) + ",") + this.c8) + ",") + this.c9) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a0)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  a0: 1,
  b: 1,
  c: 1,
  bf: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.eZ = null;
  this.cq = null;
  this.cr = null;
  this.cs = null;
  this.ct = null;
  this.cu = null;
  this.cv = null;
  this.cw = null;
  this.cx = null;
  this.ci = null;
  this.cj = null;
  this.ck = null;
  this.cl = null;
  this.cm = null;
  this.cn = null;
  this.co = null;
  this.cp = null;
  this.eZ = _1;
  this.cq = _2;
  this.cr = _3;
  this.cs = _4;
  this.ct = _5;
  this.cu = _6;
  this.cv = _7;
  this.cw = _8;
  this.cx = _9;
  this.ci = _10;
  this.cj = _11;
  this.ck = _12;
  this.cl = _13;
  this.cm = _14;
  this.cn = _15;
  this.co = _16;
  this.cp = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 17;
});
$p.k = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, (-934366247), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().b(this.eZ, x$0.eZ) && $m_sr_BoxesRunTime$().b(this.cq, x$0.cq)) && $m_sr_BoxesRunTime$().b(this.cr, x$0.cr)) && $m_sr_BoxesRunTime$().b(this.cs, x$0.cs)) && $m_sr_BoxesRunTime$().b(this.ct, x$0.ct)) && $m_sr_BoxesRunTime$().b(this.cu, x$0.cu)) && $m_sr_BoxesRunTime$().b(this.cv, x$0.cv)) && $m_sr_BoxesRunTime$().b(this.cw, x$0.cw)) && $m_sr_BoxesRunTime$().b(this.cx, x$0.cx)) && $m_sr_BoxesRunTime$().b(this.ci, x$0.ci)) && $m_sr_BoxesRunTime$().b(this.cj, x$0.cj)) && $m_sr_BoxesRunTime$().b(this.ck, x$0.ck)) && $m_sr_BoxesRunTime$().b(this.cl, x$0.cl)) && $m_sr_BoxesRunTime$().b(this.cm, x$0.cm)) && $m_sr_BoxesRunTime$().b(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().b(this.co, x$0.co)) && $m_sr_BoxesRunTime$().b(this.cp, x$0.cp))));
});
$p.y = (function() {
  return "Tuple17";
});
$p.l = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.eZ) + ",") + this.cq) + ",") + this.cr) + ",") + this.cs) + ",") + this.ct) + ",") + this.cu) + ",") + this.cv) + ",") + this.cw) + ",") + this.cx) + ",") + this.ci) + ",") + this.cj) + ",") + this.ck) + ",") + this.cl) + ",") + this.cm) + ",") + this.cn) + ",") + this.co) + ",") + this.cp) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a1)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  a1: 1,
  b: 1,
  c: 1,
  bg: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.f0 = null;
  this.cH = null;
  this.cI = null;
  this.cJ = null;
  this.cK = null;
  this.cL = null;
  this.cM = null;
  this.cN = null;
  this.cO = null;
  this.cy = null;
  this.cz = null;
  this.cA = null;
  this.cB = null;
  this.cC = null;
  this.cD = null;
  this.cE = null;
  this.cF = null;
  this.cG = null;
  this.f0 = _1;
  this.cH = _2;
  this.cI = _3;
  this.cJ = _4;
  this.cK = _5;
  this.cL = _6;
  this.cM = _7;
  this.cN = _8;
  this.cO = _9;
  this.cy = _10;
  this.cz = _11;
  this.cA = _12;
  this.cB = _13;
  this.cC = _14;
  this.cD = _15;
  this.cE = _16;
  this.cF = _17;
  this.cG = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 18;
});
$p.k = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, (-937041276), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().b(this.f0, x$0.f0) && $m_sr_BoxesRunTime$().b(this.cH, x$0.cH)) && $m_sr_BoxesRunTime$().b(this.cI, x$0.cI)) && $m_sr_BoxesRunTime$().b(this.cJ, x$0.cJ)) && $m_sr_BoxesRunTime$().b(this.cK, x$0.cK)) && $m_sr_BoxesRunTime$().b(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().b(this.cM, x$0.cM)) && $m_sr_BoxesRunTime$().b(this.cN, x$0.cN)) && $m_sr_BoxesRunTime$().b(this.cO, x$0.cO)) && $m_sr_BoxesRunTime$().b(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().b(this.cz, x$0.cz)) && $m_sr_BoxesRunTime$().b(this.cA, x$0.cA)) && $m_sr_BoxesRunTime$().b(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().b(this.cC, x$0.cC)) && $m_sr_BoxesRunTime$().b(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().b(this.cE, x$0.cE)) && $m_sr_BoxesRunTime$().b(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().b(this.cG, x$0.cG))));
});
$p.y = (function() {
  return "Tuple18";
});
$p.l = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.f0) + ",") + this.cH) + ",") + this.cI) + ",") + this.cJ) + ",") + this.cK) + ",") + this.cL) + ",") + this.cM) + ",") + this.cN) + ",") + this.cO) + ",") + this.cy) + ",") + this.cz) + ",") + this.cA) + ",") + this.cB) + ",") + this.cC) + ",") + this.cD) + ",") + this.cE) + ",") + this.cF) + ",") + this.cG) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a2)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  a2: 1,
  b: 1,
  c: 1,
  bh: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.f1 = null;
  this.cZ = null;
  this.d0 = null;
  this.d1 = null;
  this.d2 = null;
  this.d3 = null;
  this.d4 = null;
  this.d5 = null;
  this.d6 = null;
  this.cP = null;
  this.cQ = null;
  this.cR = null;
  this.cS = null;
  this.cT = null;
  this.cU = null;
  this.cV = null;
  this.cW = null;
  this.cX = null;
  this.cY = null;
  this.f1 = _1;
  this.cZ = _2;
  this.d0 = _3;
  this.d1 = _4;
  this.d2 = _5;
  this.d3 = _6;
  this.d4 = _7;
  this.d5 = _8;
  this.d6 = _9;
  this.cP = _10;
  this.cQ = _11;
  this.cR = _12;
  this.cS = _13;
  this.cT = _14;
  this.cU = _15;
  this.cV = _16;
  this.cW = _17;
  this.cX = _18;
  this.cY = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 19;
});
$p.k = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, (-1955940499), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().b(this.f1, x$0.f1) && $m_sr_BoxesRunTime$().b(this.cZ, x$0.cZ)) && $m_sr_BoxesRunTime$().b(this.d0, x$0.d0)) && $m_sr_BoxesRunTime$().b(this.d1, x$0.d1)) && $m_sr_BoxesRunTime$().b(this.d2, x$0.d2)) && $m_sr_BoxesRunTime$().b(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().b(this.d4, x$0.d4)) && $m_sr_BoxesRunTime$().b(this.d5, x$0.d5)) && $m_sr_BoxesRunTime$().b(this.d6, x$0.d6)) && $m_sr_BoxesRunTime$().b(this.cP, x$0.cP)) && $m_sr_BoxesRunTime$().b(this.cQ, x$0.cQ)) && $m_sr_BoxesRunTime$().b(this.cR, x$0.cR)) && $m_sr_BoxesRunTime$().b(this.cS, x$0.cS)) && $m_sr_BoxesRunTime$().b(this.cT, x$0.cT)) && $m_sr_BoxesRunTime$().b(this.cU, x$0.cU)) && $m_sr_BoxesRunTime$().b(this.cV, x$0.cV)) && $m_sr_BoxesRunTime$().b(this.cW, x$0.cW)) && $m_sr_BoxesRunTime$().b(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().b(this.cY, x$0.cY))));
});
$p.y = (function() {
  return "Tuple19";
});
$p.l = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.f1) + ",") + this.cZ) + ",") + this.d0) + ",") + this.d1) + ",") + this.d2) + ",") + this.d3) + ",") + this.d4) + ",") + this.d5) + ",") + this.d6) + ",") + this.cP) + ",") + this.cQ) + ",") + this.cR) + ",") + this.cS) + ",") + this.cT) + ",") + this.cU) + ",") + this.cV) + ",") + this.cW) + ",") + this.cX) + ",") + this.cY) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  a3: 1,
  b: 1,
  c: 1,
  bi: 1,
  a: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.ab = null;
  this.a6 = null;
  this.ab = _1;
  this.a6 = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.s = (function() {
  return 2;
});
$p.k = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.l = (function() {
  return (((("(" + this.ab) + ",") + this.a6) + ")");
});
$p.y = (function() {
  return "Tuple2";
});
$p.A = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, (-116390334), true);
});
$p.o = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().b(this.ab, x$1.ab) && $m_sr_BoxesRunTime$().b(this.a6, x$1.a6))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  a4: 1,
  bj: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.f2 = null;
  this.dh = null;
  this.dj = null;
  this.dk = null;
  this.dl = null;
  this.dm = null;
  this.dn = null;
  this.dp = null;
  this.dq = null;
  this.d7 = null;
  this.d8 = null;
  this.d9 = null;
  this.da = null;
  this.db = null;
  this.dc = null;
  this.dd = null;
  this.de = null;
  this.df = null;
  this.dg = null;
  this.di = null;
  this.f2 = _1;
  this.dh = _2;
  this.dj = _3;
  this.dk = _4;
  this.dl = _5;
  this.dm = _6;
  this.dn = _7;
  this.dp = _8;
  this.dq = _9;
  this.d7 = _10;
  this.d8 = _11;
  this.d9 = _12;
  this.da = _13;
  this.db = _14;
  this.dc = _15;
  this.dd = _16;
  this.de = _17;
  this.df = _18;
  this.dg = _19;
  this.di = _20;
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 20;
});
$p.k = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, 1328807075, true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().b(this.f2, x$0.f2) && $m_sr_BoxesRunTime$().b(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().b(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().b(this.dk, x$0.dk)) && $m_sr_BoxesRunTime$().b(this.dl, x$0.dl)) && $m_sr_BoxesRunTime$().b(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().b(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().b(this.dp, x$0.dp)) && $m_sr_BoxesRunTime$().b(this.dq, x$0.dq)) && $m_sr_BoxesRunTime$().b(this.d7, x$0.d7)) && $m_sr_BoxesRunTime$().b(this.d8, x$0.d8)) && $m_sr_BoxesRunTime$().b(this.d9, x$0.d9)) && $m_sr_BoxesRunTime$().b(this.da, x$0.da)) && $m_sr_BoxesRunTime$().b(this.db, x$0.db)) && $m_sr_BoxesRunTime$().b(this.dc, x$0.dc)) && $m_sr_BoxesRunTime$().b(this.dd, x$0.dd)) && $m_sr_BoxesRunTime$().b(this.de, x$0.de)) && $m_sr_BoxesRunTime$().b(this.df, x$0.df)) && $m_sr_BoxesRunTime$().b(this.dg, x$0.dg)) && $m_sr_BoxesRunTime$().b(this.di, x$0.di))));
});
$p.y = (function() {
  return "Tuple20";
});
$p.l = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.f2) + ",") + this.dh) + ",") + this.dj) + ",") + this.dk) + ",") + this.dl) + ",") + this.dm) + ",") + this.dn) + ",") + this.dp) + ",") + this.dq) + ",") + this.d7) + ",") + this.d8) + ",") + this.d9) + ",") + this.da) + ",") + this.db) + ",") + this.dc) + ",") + this.dd) + ",") + this.de) + ",") + this.df) + ",") + this.dg) + ",") + this.di) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  a5: 1,
  b: 1,
  c: 1,
  bk: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.f3 = null;
  this.dB = null;
  this.dE = null;
  this.dF = null;
  this.dG = null;
  this.dH = null;
  this.dI = null;
  this.dJ = null;
  this.dK = null;
  this.dr = null;
  this.ds = null;
  this.dt = null;
  this.du = null;
  this.dv = null;
  this.dw = null;
  this.dx = null;
  this.dy = null;
  this.dz = null;
  this.dA = null;
  this.dC = null;
  this.dD = null;
  this.f3 = _1;
  this.dB = _2;
  this.dE = _3;
  this.dF = _4;
  this.dG = _5;
  this.dH = _6;
  this.dI = _7;
  this.dJ = _8;
  this.dK = _9;
  this.dr = _10;
  this.ds = _11;
  this.dt = _12;
  this.du = _13;
  this.dv = _14;
  this.dw = _15;
  this.dx = _16;
  this.dy = _17;
  this.dz = _18;
  this.dA = _19;
  this.dC = _20;
  this.dD = _21;
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 21;
});
$p.k = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, (-21288119), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().b(this.f3, x$0.f3) && $m_sr_BoxesRunTime$().b(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().b(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().b(this.dF, x$0.dF)) && $m_sr_BoxesRunTime$().b(this.dG, x$0.dG)) && $m_sr_BoxesRunTime$().b(this.dH, x$0.dH)) && $m_sr_BoxesRunTime$().b(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().b(this.dJ, x$0.dJ)) && $m_sr_BoxesRunTime$().b(this.dK, x$0.dK)) && $m_sr_BoxesRunTime$().b(this.dr, x$0.dr)) && $m_sr_BoxesRunTime$().b(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().b(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().b(this.du, x$0.du)) && $m_sr_BoxesRunTime$().b(this.dv, x$0.dv)) && $m_sr_BoxesRunTime$().b(this.dw, x$0.dw)) && $m_sr_BoxesRunTime$().b(this.dx, x$0.dx)) && $m_sr_BoxesRunTime$().b(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().b(this.dz, x$0.dz)) && $m_sr_BoxesRunTime$().b(this.dA, x$0.dA)) && $m_sr_BoxesRunTime$().b(this.dC, x$0.dC)) && $m_sr_BoxesRunTime$().b(this.dD, x$0.dD))));
});
$p.y = (function() {
  return "Tuple21";
});
$p.l = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.f3) + ",") + this.dB) + ",") + this.dE) + ",") + this.dF) + ",") + this.dG) + ",") + this.dH) + ",") + this.dI) + ",") + this.dJ) + ",") + this.dK) + ",") + this.dr) + ",") + this.ds) + ",") + this.dt) + ",") + this.du) + ",") + this.dv) + ",") + this.dw) + ",") + this.dx) + ",") + this.dy) + ",") + this.dz) + ",") + this.dA) + ",") + this.dC) + ",") + this.dD) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a6)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  a6: 1,
  b: 1,
  c: 1,
  bl: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.f4 = null;
  this.dV = null;
  this.dZ = null;
  this.e0 = null;
  this.e1 = null;
  this.e2 = null;
  this.e3 = null;
  this.e4 = null;
  this.e5 = null;
  this.dL = null;
  this.dM = null;
  this.dN = null;
  this.dO = null;
  this.dP = null;
  this.dQ = null;
  this.dR = null;
  this.dS = null;
  this.dT = null;
  this.dU = null;
  this.dW = null;
  this.dX = null;
  this.dY = null;
  this.f4 = _1;
  this.dV = _2;
  this.dZ = _3;
  this.e0 = _4;
  this.e1 = _5;
  this.e2 = _6;
  this.e3 = _7;
  this.e4 = _8;
  this.e5 = _9;
  this.dL = _10;
  this.dM = _11;
  this.dN = _12;
  this.dO = _13;
  this.dP = _14;
  this.dQ = _15;
  this.dR = _16;
  this.dS = _17;
  this.dT = _18;
  this.dU = _19;
  this.dW = _20;
  this.dX = _21;
  this.dY = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 22;
});
$p.k = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, (-139445068), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().b(this.f4, x$0.f4) && $m_sr_BoxesRunTime$().b(this.dV, x$0.dV)) && $m_sr_BoxesRunTime$().b(this.dZ, x$0.dZ)) && $m_sr_BoxesRunTime$().b(this.e0, x$0.e0)) && $m_sr_BoxesRunTime$().b(this.e1, x$0.e1)) && $m_sr_BoxesRunTime$().b(this.e2, x$0.e2)) && $m_sr_BoxesRunTime$().b(this.e3, x$0.e3)) && $m_sr_BoxesRunTime$().b(this.e4, x$0.e4)) && $m_sr_BoxesRunTime$().b(this.e5, x$0.e5)) && $m_sr_BoxesRunTime$().b(this.dL, x$0.dL)) && $m_sr_BoxesRunTime$().b(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().b(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().b(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().b(this.dP, x$0.dP)) && $m_sr_BoxesRunTime$().b(this.dQ, x$0.dQ)) && $m_sr_BoxesRunTime$().b(this.dR, x$0.dR)) && $m_sr_BoxesRunTime$().b(this.dS, x$0.dS)) && $m_sr_BoxesRunTime$().b(this.dT, x$0.dT)) && $m_sr_BoxesRunTime$().b(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().b(this.dW, x$0.dW)) && $m_sr_BoxesRunTime$().b(this.dX, x$0.dX)) && $m_sr_BoxesRunTime$().b(this.dY, x$0.dY))));
});
$p.y = (function() {
  return "Tuple22";
});
$p.l = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.f4) + ",") + this.dV) + ",") + this.dZ) + ",") + this.e0) + ",") + this.e1) + ",") + this.e2) + ",") + this.e3) + ",") + this.e4) + ",") + this.e5) + ",") + this.dL) + ",") + this.dM) + ",") + this.dN) + ",") + this.dO) + ",") + this.dP) + ",") + this.dQ) + ",") + this.dR) + ",") + this.dS) + ",") + this.dT) + ",") + this.dU) + ",") + this.dW) + ",") + this.dX) + ",") + this.dY) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a7)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  a7: 1,
  b: 1,
  c: 1,
  bm: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.aF = null;
  this.ay = null;
  this.az = null;
  this.aF = _1;
  this.ay = _2;
  this.az = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 3;
});
$p.k = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, (-192629203), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().b(this.aF, x$0.aF) && $m_sr_BoxesRunTime$().b(this.ay, x$0.ay)) && $m_sr_BoxesRunTime$().b(this.az, x$0.az))));
});
$p.y = (function() {
  return "Tuple3";
});
$p.l = (function() {
  return (((((("(" + this.aF) + ",") + this.ay) + ",") + this.az) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  a8: 1,
  b: 1,
  c: 1,
  bn: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.e6 = null;
  this.aG = null;
  this.aH = null;
  this.aI = null;
  this.e6 = _1;
  this.aG = _2;
  this.aH = _3;
  this.aI = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 4;
});
$p.k = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, (-1542739752), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().b(this.e6, x$0.e6) && $m_sr_BoxesRunTime$().b(this.aG, x$0.aG)) && $m_sr_BoxesRunTime$().b(this.aH, x$0.aH)) && $m_sr_BoxesRunTime$().b(this.aI, x$0.aI))));
});
$p.y = (function() {
  return "Tuple4";
});
$p.l = (function() {
  return (((((((("(" + this.e6) + ",") + this.aG) + ",") + this.aH) + ",") + this.aI) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  a9: 1,
  b: 1,
  c: 1,
  bo: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.f5 = null;
  this.e7 = null;
  this.e8 = null;
  this.e9 = null;
  this.ea = null;
  this.f5 = _1;
  this.e7 = _2;
  this.e8 = _3;
  this.e9 = _4;
  this.ea = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 5;
});
$p.k = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, 417360321, true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().b(this.f5, x$0.f5) && $m_sr_BoxesRunTime$().b(this.e7, x$0.e7)) && $m_sr_BoxesRunTime$().b(this.e8, x$0.e8)) && $m_sr_BoxesRunTime$().b(this.e9, x$0.e9)) && $m_sr_BoxesRunTime$().b(this.ea, x$0.ea))));
});
$p.y = (function() {
  return "Tuple5";
});
$p.l = (function() {
  return (((((((((("(" + this.f5) + ",") + this.e7) + ",") + this.e8) + ",") + this.e9) + ",") + this.ea) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  aa: 1,
  b: 1,
  c: 1,
  bp: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.f6 = null;
  this.eb = null;
  this.ec = null;
  this.ed = null;
  this.ee = null;
  this.ef = null;
  this.f6 = _1;
  this.eb = _2;
  this.ec = _3;
  this.ed = _4;
  this.ee = _5;
  this.ef = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 6;
});
$p.k = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, (-1037607828), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().b(this.f6, x$0.f6) && $m_sr_BoxesRunTime$().b(this.eb, x$0.eb)) && $m_sr_BoxesRunTime$().b(this.ec, x$0.ec)) && $m_sr_BoxesRunTime$().b(this.ed, x$0.ed)) && $m_sr_BoxesRunTime$().b(this.ee, x$0.ee)) && $m_sr_BoxesRunTime$().b(this.ef, x$0.ef))));
});
$p.y = (function() {
  return "Tuple6";
});
$p.l = (function() {
  return (((((((((((("(" + this.f6) + ",") + this.eb) + ",") + this.ec) + ",") + this.ed) + ",") + this.ee) + ",") + this.ef) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  ab: 1,
  b: 1,
  c: 1,
  bq: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.f7 = null;
  this.eg = null;
  this.eh = null;
  this.ei = null;
  this.ej = null;
  this.ek = null;
  this.el = null;
  this.f7 = _1;
  this.eg = _2;
  this.eh = _3;
  this.ei = _4;
  this.ej = _5;
  this.ek = _6;
  this.el = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 7;
});
$p.k = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, (-1050932777), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().b(this.f7, x$0.f7) && $m_sr_BoxesRunTime$().b(this.eg, x$0.eg)) && $m_sr_BoxesRunTime$().b(this.eh, x$0.eh)) && $m_sr_BoxesRunTime$().b(this.ei, x$0.ei)) && $m_sr_BoxesRunTime$().b(this.ej, x$0.ej)) && $m_sr_BoxesRunTime$().b(this.ek, x$0.ek)) && $m_sr_BoxesRunTime$().b(this.el, x$0.el))));
});
$p.y = (function() {
  return "Tuple7";
});
$p.l = (function() {
  return (((((((((((((("(" + this.f7) + ",") + this.eg) + ",") + this.eh) + ",") + this.ei) + ",") + this.ej) + ",") + this.ek) + ",") + this.el) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  ac: 1,
  b: 1,
  c: 1,
  br: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.f8 = null;
  this.em = null;
  this.en = null;
  this.eo = null;
  this.ep = null;
  this.eq = null;
  this.er = null;
  this.es = null;
  this.f8 = _1;
  this.em = _2;
  this.en = _3;
  this.eo = _4;
  this.ep = _5;
  this.eq = _6;
  this.er = _7;
  this.es = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 8;
});
$p.k = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, 1998822530, true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().b(this.f8, x$0.f8) && $m_sr_BoxesRunTime$().b(this.em, x$0.em)) && $m_sr_BoxesRunTime$().b(this.en, x$0.en)) && $m_sr_BoxesRunTime$().b(this.eo, x$0.eo)) && $m_sr_BoxesRunTime$().b(this.ep, x$0.ep)) && $m_sr_BoxesRunTime$().b(this.eq, x$0.eq)) && $m_sr_BoxesRunTime$().b(this.er, x$0.er)) && $m_sr_BoxesRunTime$().b(this.es, x$0.es))));
});
$p.y = (function() {
  return "Tuple8";
});
$p.l = (function() {
  return (((((((((((((((("(" + this.f8) + ",") + this.em) + ",") + this.en) + ",") + this.eo) + ",") + this.ep) + ",") + this.eq) + ",") + this.er) + ",") + this.es) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  ad: 1,
  b: 1,
  c: 1,
  bs: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.f9 = null;
  this.et = null;
  this.eu = null;
  this.ev = null;
  this.ew = null;
  this.ex = null;
  this.ey = null;
  this.ez = null;
  this.eA = null;
  this.f9 = _1;
  this.et = _2;
  this.eu = _3;
  this.ev = _4;
  this.ew = _5;
  this.ex = _6;
  this.ey = _7;
  this.ez = _8;
  this.eA = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 9;
});
$p.k = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().B(this, (-1807911176), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().b(this.f9, x$0.f9) && $m_sr_BoxesRunTime$().b(this.et, x$0.et)) && $m_sr_BoxesRunTime$().b(this.eu, x$0.eu)) && $m_sr_BoxesRunTime$().b(this.ev, x$0.ev)) && $m_sr_BoxesRunTime$().b(this.ew, x$0.ew)) && $m_sr_BoxesRunTime$().b(this.ex, x$0.ex)) && $m_sr_BoxesRunTime$().b(this.ey, x$0.ey)) && $m_sr_BoxesRunTime$().b(this.ez, x$0.ez)) && $m_sr_BoxesRunTime$().b(this.eA, x$0.eA))));
});
$p.y = (function() {
  return "Tuple9";
});
$p.l = (function() {
  return (((((((((((((((((("(" + this.f9) + ",") + this.et) + ",") + this.eu) + ",") + this.ev) + ",") + this.ew) + ",") + this.ex) + ",") + this.ey) + ",") + this.ez) + ",") + this.eA) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  ae: 1,
  b: 1,
  c: 1,
  bt: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.hp() + "("), ", ", ")");
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
$p.P = (function() {
  return false;
});
$p.n5 = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.aa = (function() {
  return 0;
});
$p.M = (function() {
  this.n5();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  bF: 1,
  q: 1,
  f: 1,
  g: 1,
  v: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.mb(n);
  if (skipped.Q()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.iP();
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
      if ((((!a$tailLocal1.Q()) && (!b$tailLocal1.Q())) && $m_sr_BoxesRunTime$().b(a$tailLocal1.iP(), b$tailLocal1.iP()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.je();
        var b$tailLocal1$tmp1 = b$tailLocal1.je();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.Q() && b$tailLocal1.Q());
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
  bT: 1,
  a: 1,
  af: 1,
  bH: 1,
  bM: 1
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
  this.jw = null;
  this.fF = 0;
  this.jv = 0;
  this.jw = x$1;
  this.fF = 0;
  this.jv = x$1.s();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.P = (function() {
  return (this.fF < this.jv);
});
$p.M = (function() {
  var result = this.jw.k(this.fF);
  this.fF = ((1 + this.fF) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  cv: 1,
  q: 1,
  f: 1,
  g: 1,
  v: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Q)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  Q: 1,
  k: 1,
  a: 1,
  h: 1,
  e: 1,
  o: 1
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
  aK: 1,
  k: 1,
  a: 1,
  h: 1,
  e: 1,
  o: 1
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
  aN: 1,
  k: 1,
  a: 1,
  h: 1,
  e: 1,
  o: 1
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
  return $m_RTLong$().lk($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.R)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  R: 1,
  k: 1,
  a: 1,
  h: 1,
  e: 1,
  o: 1
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
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().nE(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  aQ: 1,
  a: 1,
  h: 1,
  B: 1,
  e: 1,
  o: 1
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
$p.kK = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.hp = (function() {
  return this.fA();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.gF = null;
  this.eB = 0;
  this.hy = 0;
  this.gF = xs;
  this.eB = 0;
  this.hy = $m_jl_reflect_Array$().gk(this.gF);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.aa = (function() {
  return ((this.hy - this.eB) | 0);
});
$p.P = (function() {
  return (this.eB < this.hy);
});
$p.M = (function() {
  if ((this.eB >= $m_jl_reflect_Array$().gk(this.gF))) {
    $m_sc_Iterator$().gH.M();
  }
  var r = $m_sr_ScalaRunTime$().fw(this.gF, this.eB);
  this.eB = ((1 + this.eB) | 0);
  return r;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  bx: 1,
  q: 1,
  f: 1,
  g: 1,
  v: 1,
  a: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.jn = null;
  this.gG = 0;
  this.fa = 0;
  this.jn = self;
  this.gG = 0;
  this.fa = self.L();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.aa = (function() {
  return this.fa;
});
$p.P = (function() {
  return (this.fa > 0);
});
$p.M = (function() {
  if ((this.fa > 0)) {
    var r = this.jn.a8(this.gG);
    this.gG = ((1 + this.gG) | 0);
    this.fa = ((this.fa - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().gH.M();
  }
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  bD: 1,
  q: 1,
  f: 1,
  g: 1,
  v: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$() {
  this.jo = null;
  $n_scm_ArraySeq$ = this;
  this.jo = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  bZ: 1,
  a: 1,
  bA: 1,
  by: 1,
  bz: 1,
  bK: 1
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
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.r = (function() {
  return 924202651;
});
$p.s = (function() {
  return 0;
});
$p.y = (function() {
  return "EmptyTuple";
});
$p.k = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.l = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  bu: 1,
  b: 1,
  c: 1,
  a: 1,
  c5: 1,
  c6: 1,
  c7: 1
}));
var $n_T$package$EmptyTuple$;
function $m_T$package$EmptyTuple$() {
  if ((!$n_T$package$EmptyTuple$)) {
    $n_T$package$EmptyTuple$ = new $c_T$package$EmptyTuple$();
  }
  return $n_T$package$EmptyTuple$;
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.fA() + "(<not computed>)");
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
    this.D = null;
    this.D = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  hs() {
    return $dp_toString__T(this.D);
  }
  y() {
    return "JavaScriptException";
  }
  s() {
    return 1;
  }
  k(x$1) {
    return ((x$1 === 0) ? this.D : $m_sr_Statics$().mD(x$1));
  }
  A() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  r() {
    return $m_s_util_hashing_MurmurHash3$().B(this, 1744042595, true);
  }
  o(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().b(this.D, x$1.D)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  an: 1,
  j: 1,
  i: 1,
  d: 1,
  a: 1,
  c: 1,
  b: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.Q())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.je();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.hz = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.l = (function() {
  return this.hz;
});
$p.o = (function(that) {
  return (this === that);
});
$p.r = (function() {
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
$p.l = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.hz = null;
  this.hz = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  cd: 1,
  ce: 1,
  cc: 1,
  a: 1,
  cf: 1,
  c9: 1,
  b: 1,
  ca: 1,
  cb: 1
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
      if (o.lY($thiz)) {
        return $thiz.li(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.m)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.m)));
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
$p.Q = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.li = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.lY = (function(that) {
  return true;
});
$p.o = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().ns(this);
});
$p.l = (function() {
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.r)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.r)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.C)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.C)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.fE = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.fE = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.a8 = (function(idx) {
  return this.fE.a8(idx);
});
$p.L = (function() {
  return this.fE.L();
});
$p.Q = (function() {
  return this.fE.Q();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.fE = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.gl = (function(len) {
  var x = this.L();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aa = (function() {
  return this.L();
});
$p.a9 = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.fA = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  bC: 1,
  bJ: 1,
  bv: 1,
  bw: 1,
  p: 1,
  f: 1,
  g: 1,
  u: 1,
  t: 1,
  s: 1,
  a: 1,
  bN: 1,
  w: 1,
  bI: 1,
  A: 1,
  bB: 1
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
$p.gl = (function(len) {
  var x = this.ac.a.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aa = (function() {
  return this.ac.a.length;
});
$p.fA = (function() {
  return "IndexedSeq";
});
$p.hp = (function() {
  return "ArraySeq";
});
$p.o = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.ac.a.length !== other.ac.a.length)) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return ((!xs$tailLocal1.Q()) | 0);
    } else {
      if ((!xs$tailLocal1.Q())) {
        xs$tailLocal1.hv();
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
      var aEmpty = a$tailLocal1.Q();
      var bEmpty = b$tailLocal1.Q();
      if ((!(aEmpty || bEmpty))) {
        a$tailLocal1.iO();
      }
      if (false) {
        a$tailLocal1.hv();
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
$p.a8 = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.li = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.fA = (function() {
  return "LinearSeq";
});
$p.Q = (function() {
  return (this === $m_sci_Nil$());
});
$p.L = (function() {
  var these = this;
  var len = 0;
  while ((!these.Q())) {
    len = ((1 + len) | 0);
    these.hv();
  }
  return len;
});
$p.gl = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.hp = (function() {
  return "List";
});
$p.o = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.mb = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.K = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.ac = null;
  this.ac = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.L = (function() {
  return this.ac.a.length;
});
$p.a8 = (function(index) {
  return this.ac.a[index];
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.lP(this.ac, this$1.fG);
});
$p.o = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().me(this.ac, that.ac) : $c_scm_ArraySeq.prototype.o.call(this, that));
});
$p.a9 = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ac);
});
$p.K = (function(v1) {
  return this.a8((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  ai: 1,
  ah: 1,
  F: 1,
  z: 1,
  p: 1,
  f: 1,
  g: 1,
  u: 1,
  t: 1,
  s: 1,
  l: 1,
  x: 1,
  w: 1,
  b: 1,
  m: 1,
  J: 1,
  n: 1,
  G: 1,
  L: 1,
  K: 1,
  A: 1,
  r: 1,
  I: 1,
  H: 1,
  D: 1,
  E: 1,
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
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 0;
});
$p.y = (function() {
  return "Nil";
});
$p.k = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.iO = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.hv = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.aa = (function() {
  return 0;
});
$p.a9 = (function() {
  return $m_sc_Iterator$().gH;
});
$p.iP = (function() {
  this.iO();
});
$p.je = (function() {
  this.hv();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  bU: 1,
  ag: 1,
  bP: 1,
  z: 1,
  p: 1,
  f: 1,
  g: 1,
  u: 1,
  t: 1,
  s: 1,
  l: 1,
  x: 1,
  w: 1,
  b: 1,
  m: 1,
  bQ: 1,
  bW: 1,
  bV: 1,
  bG: 1,
  C: 1,
  bS: 1,
  bR: 1,
  D: 1,
  E: 1,
  bL: 1,
  bX: 1,
  a: 1,
  bO: 1,
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
  $thiz.al = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.al = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.a9 = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.gl = (function(len) {
  var x = this.al.L();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.fA = (function() {
  return "IndexedSeq";
});
$p.L = (function() {
  return this.al.L();
});
$p.aa = (function() {
  return this.al.L();
});
$p.l = (function() {
  return this.al.N;
});
$p.Q = (function() {
  return (this.al.L() === 0);
});
$p.a8 = (function(i) {
  return $bC(this.al.kP(i));
});
$p.K = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.al.kP(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  c4: 1,
  F: 1,
  z: 1,
  p: 1,
  f: 1,
  g: 1,
  u: 1,
  t: 1,
  s: 1,
  l: 1,
  x: 1,
  w: 1,
  b: 1,
  m: 1,
  J: 1,
  n: 1,
  G: 1,
  L: 1,
  K: 1,
  ak: 1,
  al: 1,
  aj: 1,
  c2: 1,
  A: 1,
  r: 1,
  I: 1,
  H: 1,
  B: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.fb = null;
  this.fb = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.fA = (function() {
  return "IndexedSeq";
});
$p.a9 = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.gl = (function(len) {
  var x = (this.fb.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.a8 = (function(index) {
  return this.fb[index];
});
$p.L = (function() {
  return (this.fb.length | 0);
});
$p.aa = (function() {
  return (this.fb.length | 0);
});
$p.hp = (function() {
  return "WrappedArray";
});
$p.K = (function(v1) {
  var index = (v1 | 0);
  return this.fb[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  cE: 1,
  bY: 1,
  F: 1,
  z: 1,
  p: 1,
  f: 1,
  g: 1,
  u: 1,
  t: 1,
  s: 1,
  l: 1,
  x: 1,
  w: 1,
  b: 1,
  m: 1,
  J: 1,
  n: 1,
  G: 1,
  L: 1,
  K: 1,
  ak: 1,
  al: 1,
  c3: 1,
  c0: 1,
  E: 1,
  D: 1,
  H: 1,
  A: 1,
  r: 1,
  I: 1,
  c1: 1,
  aj: 1,
  a: 1
}));
let $e_sketch = (function(arg) {
  $m_Lsketches_rooms_columns_Columns$package$().no(arg);
});
export { $e_sketch as sketch };
