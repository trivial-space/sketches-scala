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
  return (arg0.$classData.Z ? arg0.bq() : $objectClone(arg0));
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
        return null.vI();
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
    return instance.vJ(x0);
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
$p.b4 = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.bq = (function() {
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
$p.b4 = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.bq = (function() {
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
$p.b4 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bq = (function() {
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
$p.b4 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bq = (function() {
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
$p.b4 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bq = (function() {
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
$p.b4 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bq = (function() {
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
$p.b4 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.bq = (function() {
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
$p.b4 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bq = (function() {
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
$p.b4 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bq = (function() {
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
    y: 1,
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
  $p.b4 = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
  });
  $p.bq = (function() {
    return new ArrayClass(this.b.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    y: 1,
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
  this.k8 = null;
  this.mu = null;
  $n_jl_System$SystemProperties$ = this;
  this.k8 = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.mu = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.qQ = (function(key, default$1) {
  if ((this.k8 !== null)) {
    var dict = this.k8;
    return ((!(!$m_jl_Utils$Cache$().mw.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.mu.qQ(key, default$1);
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
  this.mw = null;
  $n_jl_Utils$Cache$ = this;
  this.mw = Object.prototype.hasOwnProperty;
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
$p.ix = (function(array) {
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
$p.sm = (function(a, key) {
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
  return $m_RTLong$().uJ(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().uI(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().sM(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().sL(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().jP(value);
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
  return $m_RTLong$().ry(lo, hi);
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
$p.ry = (function(lo, hi) {
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
$p.jP = (function(value) {
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
$p.sL = (function(alo, ahi, blo, bhi) {
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
$p.sM = (function(alo, ahi, blo, bhi) {
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
$p.uI = (function(alo, ahi, blo, bhi) {
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
$p.uJ = (function(alo, ahi, blo, bhi) {
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
$p.sR = (function(xs, ys) {
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
  while (it.U()) {
    f.g(it.P());
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, dest, start, n) {
  var it = $thiz.af();
  var i = start;
  matchResult18: {
    var srclen;
    var x31 = $thiz.am();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().ix(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().ix(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.U())) {
    $m_sr_ScalaRunTime$().sf(dest, i, it.P());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.am() === 0) ? (("" + start) + end) : $thiz.lI($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).bu.ay);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.bu;
  if ((start.length !== 0)) {
    jsb.ay = (("" + jsb.ay) + start);
  }
  var it = $thiz.af();
  if (it.U()) {
    var obj = it.P();
    jsb.ay = (("" + jsb.ay) + obj);
    while (it.U()) {
      if ((sep.length !== 0)) {
        jsb.ay = (("" + jsb.ay) + sep);
      }
      var obj$1 = it.P();
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
  this.mI = null;
  this.hF = null;
  this.mI = head;
  this.hF = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.th = (function() {
  return this.mI.is().af();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  cb: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.mJ = null;
  $n_sc_StringOps$ = this;
  this.mJ = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.mJ));
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
  this.mM = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().ts($m_jl_System$SystemProperties$().qQ("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.mM = $x_1;
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
  return ((x === y) || ($is_jl_Number(x) ? this.sT(x, y) : ((x instanceof $Char) ? this.sS(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.sT = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.jO(xn, y);
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
$p.jO = (function(xn, yn) {
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
$p.sS = (function(xc, y) {
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
  cY: 1
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
$p.sg = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
$p.jW = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  d2: 1
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
$p.ht = (function(xs, idx) {
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
$p.sf = (function(xs, idx, value) {
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
$p.ce = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.H(), (x.F() + "("), ",", ")");
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  d3: 1
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
  var h = this.jV(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.jV = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.ak = (function(hash, length) {
  return this.sh((hash ^ length));
});
$p.sh = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.ty = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.bC = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().jP(dv);
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
$p.X = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.bC((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.ty($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.tq = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  d5: 1
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
    return $ct_T2__O__O__(new $c_T2(), x, self.gD);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.a0(), self.a1());
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.aD, self.aX, self.b5);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.aP, self.aQ, self.aY, self.aZ);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.gR, self.fw, self.fx, self.fy, self.fz);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.gS, self.fA, self.fB, self.fC, self.fD, self.fE);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.gT, self.fF, self.fG, self.fH, self.fI, self.fJ, self.fK);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.gU, self.fL, self.fM, self.fN, self.fO, self.fP, self.fQ, self.fR);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.gV, self.fS, self.fT, self.fU, self.fV, self.fW, self.fX, self.fY, self.fZ);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.gE, self.cn, self.co, self.cp, self.cq, self.cr, self.cs, self.ct, self.cu, self.cm);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.gF, self.cx, self.cy, self.cz, self.cA, self.cB, self.cC, self.cD, self.cE, self.cv, self.cw);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.gG, self.cI, self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cP, self.cF, self.cG, self.cH);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.gH, self.cU, self.cV, self.cW, self.cX, self.cY, self.cZ, self.d0, self.d1, self.cQ, self.cR, self.cS, self.cT);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.gI, self.d7, self.d8, self.d9, self.da, self.db, self.dc, self.dd, self.de, self.d2, self.d3, self.d4, self.d5, self.d6);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.gJ, self.dl, self.dm, self.dn, self.dp, self.dq, self.dr, self.ds, self.dt, self.df, self.dg, self.dh, self.di, self.dj, self.dk);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.gK, self.dB, self.dC, self.dD, self.dE, self.dF, self.dG, self.dH, self.dI, self.du, self.dv, self.dw, self.dx, self.dy, self.dz, self.dA);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.gL, self.dR, self.dS, self.dT, self.dU, self.dV, self.dW, self.dX, self.dY, self.dJ, self.dK, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.gM, self.e8, self.e9, self.ea, self.eb, self.ec, self.ed, self.ee, self.ef, self.dZ, self.e0, self.e1, self.e2, self.e3, self.e4, self.e5, self.e6, self.e7);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.gN, self.eq, self.er, self.es, self.et, self.eu, self.ev, self.ew, self.ex, self.eg, self.eh, self.ei, self.ej, self.ek, self.el, self.em, self.en, self.eo, self.ep);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.gO, self.eI, self.eK, self.eL, self.eM, self.eN, self.eO, self.eP, self.eQ, self.ey, self.ez, self.eA, self.eB, self.eC, self.eD, self.eE, self.eF, self.eG, self.eH, self.eJ);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.gP, self.f1, self.f4, self.f5, self.f6, self.f7, self.f8, self.f9, self.fa, self.eR, self.eS, self.eT, self.eU, self.eV, self.eW, self.eX, self.eY, self.eZ, self.f0, self.f2, self.f3);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.gQ, self.fl, self.fp, self.fq, self.fr, self.fs, self.ft, self.fu, self.fv, self.fb, self.fc, self.fd, self.fe, self.ff, self.fg, self.fh, self.fi, self.fj, self.fk, self.fm, self.fn, self.fo]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.z()) | 0));
  arr.b[0] = x;
  var src = xxl.ap;
  var length = xxl.z();
  src.b4(0, arr, 1, length);
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
      var $x_1 = $ct_T2__O__O__(new $c_T2(), self.aX, self.b5);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.aQ, self.aY, self.aZ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.fw, self.fx, self.fy, self.fz);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.fA, self.fB, self.fC, self.fD, self.fE);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.fF, self.fG, self.fH, self.fI, self.fJ, self.fK);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.fL, self.fM, self.fN, self.fO, self.fP, self.fQ, self.fR);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.fS, self.fT, self.fU, self.fV, self.fW, self.fX, self.fY, self.fZ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.cn, self.co, self.cp, self.cq, self.cr, self.cs, self.ct, self.cu, self.cm);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.cx, self.cy, self.cz, self.cA, self.cB, self.cC, self.cD, self.cE, self.cv, self.cw);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.cI, self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cP, self.cF, self.cG, self.cH);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.cU, self.cV, self.cW, self.cX, self.cY, self.cZ, self.d0, self.d1, self.cQ, self.cR, self.cS, self.cT);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.d7, self.d8, self.d9, self.da, self.db, self.dc, self.dd, self.de, self.d2, self.d3, self.d4, self.d5, self.d6);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.dl, self.dm, self.dn, self.dp, self.dq, self.dr, self.ds, self.dt, self.df, self.dg, self.dh, self.di, self.dj, self.dk);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.dB, self.dC, self.dD, self.dE, self.dF, self.dG, self.dH, self.dI, self.du, self.dv, self.dw, self.dx, self.dy, self.dz, self.dA);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.dR, self.dS, self.dT, self.dU, self.dV, self.dW, self.dX, self.dY, self.dJ, self.dK, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.e8, self.e9, self.ea, self.eb, self.ec, self.ed, self.ee, self.ef, self.dZ, self.e0, self.e1, self.e2, self.e3, self.e4, self.e5, self.e6, self.e7);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.eq, self.er, self.es, self.et, self.eu, self.ev, self.ew, self.ex, self.eg, self.eh, self.ei, self.ej, self.ek, self.el, self.em, self.en, self.eo, self.ep);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.eI, self.eK, self.eL, self.eM, self.eN, self.eO, self.eP, self.eQ, self.ey, self.ez, self.eA, self.eB, self.eC, self.eD, self.eE, self.eF, self.eG, self.eH, self.eJ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.f1, self.f4, self.f5, self.f6, self.f7, self.f8, self.f9, self.fa, self.eR, self.eS, self.eT, self.eU, self.eV, self.eW, self.eX, self.eY, self.eZ, self.f0, self.f2, self.f3);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.fl, self.fp, self.fq, self.fr, self.fs, self.ft, self.fu, self.fv, self.fb, self.fc, self.fd, self.fe, self.ff, self.fg, self.fh, self.fi, self.fj, self.fk, self.fm, self.fn, self.fo);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.z() === 23)) {
    var elems = xxl.ap;
    return new $c_T22(elems.b[1], elems.b[2], elems.b[3], elems.b[4], elems.b[5], elems.b[6], elems.b[7], elems.b[8], elems.b[9], elems.b[10], elems.b[11], elems.b[12], elems.b[13], elems.b[14], elems.b[15], elems.b[16], elems.b[17], elems.b[18], elems.b[19], elems.b[20], elems.b[21], elems.b[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.ap.b.length - 1) | 0));
    var src = xxl.ap;
    var length = ((xxl.ap.b.length - 1) | 0);
    src.b4(1, arr$1, 0, length);
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
$p.t5 = (function(xs) {
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
      return new $c_sr_TupleXXL(xs.bq());
    }
  }
});
$p.t6 = (function(xs) {
  return ((xs.b.length <= 22) ? this.t5(xs) : new $c_sr_TupleXXL(xs));
});
$p.lT = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.qD = (function(self, that) {
  var selfSize = $m_sr_Tuples$().ru(self);
  if ((selfSize === 0)) {
    return that;
  }
  var thatSize = $m_sr_Tuples$().ru(that);
  if ((thatSize === 0)) {
    return self;
  }
  var arr = new $ac_O(((selfSize + thatSize) | 0));
  if ((self instanceof $c_sr_TupleXXL)) {
    var src = self.ap;
    src.b4(0, arr, 0, selfSize);
  } else {
    self.H().qF(arr, 0, selfSize);
  }
  if ((that instanceof $c_sr_TupleXXL)) {
    var src$1 = that.ap;
    src$1.b4(0, arr, selfSize, thatSize);
  } else {
    that.H().qF(arr, selfSize, thatSize);
  }
  return this.t6(arr);
});
$p.ru = (function(self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return 0;
  }
  if ((self !== null)) {
    return self.z();
  }
  throw new $c_s_MatchError(self);
});
$p.vi = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  d6: 1
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
$p.tf = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  d8: 1
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
$p.qT = (function(this$, elem, from) {
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
$p.rJ = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.af();
  while (((i < len) && it.U())) {
    b.push($ct_T2__O__O__(new $c_T2(), this$[i], it.P()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.rK = (function(this$) {
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
  d9: 1
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
  da: 1
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
  this.mW = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.mW = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  de: 1
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
  properties.bD(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((pair$2$2) => {
    result[pair$2$2.a0()] = pair$2$2.a1();
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  df: 1
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
  dh: 1
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
  var h = this.jV(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.jV = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.ak = (function(hash, length) {
  return this.iR((hash ^ length));
});
$p.iR = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.a4 = (function(x, seed, ignorePrefix) {
  var arr = x.z();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.F()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.p(h, $f_T__hashCode__I(x.F()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.p(h, $m_sr_Statics$().X(x.m(i)));
      i = ((1 + i) | 0);
    }
    return this.ak(h, arr);
  }
});
$p.sw = (function(x, seed, caseClassName) {
  var arr = x.z();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.F()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.p(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.p(h, $m_sr_Statics$().X(x.m(i)));
      i = ((1 + i) | 0);
    }
    return this.ak(h, arr);
  }
});
$p.vr = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.af();
  while (iterator.U()) {
    var x = iterator.P();
    var h = $m_sr_Statics$().X(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.p(h$2, a);
  h$2 = this.p(h$2, b);
  h$2 = this.jV(h$2, c);
  return this.ak(h$2, n);
});
$p.uk = (function(xs, seed) {
  var it = xs.af();
  var h = seed;
  if ((!it.U())) {
    return this.ak(h, 0);
  }
  var x0 = it.P();
  if ((!it.U())) {
    return this.ak(this.p(h, $m_sr_Statics$().X(x0)), 1);
  }
  var x1 = it.P();
  var initial = $m_sr_Statics$().X(x0);
  h = this.p(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().X(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.U()) {
    h = this.p(h, prev);
    var hash = $m_sr_Statics$().X(it.P());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.p(h, hash);
      i = ((1 + i) | 0);
      while (it.U()) {
        h = this.p(h, $m_sr_Statics$().X(it.P()));
        i = ((1 + i) | 0);
      }
      return this.ak(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.iR(this.p(this.p(h0, rangeDiff), prev));
});
$p.se = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().ix(a);
  switch (l) {
    case 0: {
      return this.ak(h, 0);
      break;
    }
    case 1: {
      return this.ak(this.p(h, $m_sr_Statics$().X($m_sr_ScalaRunTime$().ht(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().X($m_sr_ScalaRunTime$().ht(a, 0));
      h = this.p(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().X($m_sr_ScalaRunTime$().ht(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.p(h, prev);
        var hash = $m_sr_Statics$().X($m_sr_ScalaRunTime$().ht(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.p(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.p(h, $m_sr_Statics$().X($m_sr_ScalaRunTime$().ht(a, i)));
            i = ((1 + i) | 0);
          }
          return this.ak(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.iR(this.p(this.p(h0, rangeDiff), prev));
    }
  }
});
$p.rm = (function(start, step, last, seed) {
  return this.iR(this.p(this.p(this.p(seed, start), step), last));
});
$p.tk = (function(a, seed) {
  var h = seed;
  var l = a.R();
  switch (l) {
    case 0: {
      return this.ak(h, 0);
      break;
    }
    case 1: {
      return this.ak(this.p(h, $m_sr_Statics$().X(a.as(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().X(a.as(0));
      h = this.p(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().X(a.as(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.p(h, prev);
        var hash = $m_sr_Statics$().X(a.as(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.p(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.p(h, $m_sr_Statics$().X(a.as(i)));
            i = ((1 + i) | 0);
          }
          return this.ak(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.iR(this.p(this.p(h0, rangeDiff), prev));
    }
  }
});
$p.tx = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.al())) {
    elems.jR();
  }
  return ((rangeState === 2) ? this.rm(initial, rangeDiff, prev, seed) : this.ak(h, n));
});
function $p_Lsketches_rooms_columns_Columns$package$__at$1__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, corner$1, along$1, inward$1, alongDist, inwardDist) {
  return $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().bO(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().bO(), corner$1, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().bO(), along$1, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), alongDist)), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().bO(), inward$1, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), inwardDist));
}
function $p_Lsketches_rooms_columns_Columns$package$__side$1__sjs_js_Array__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__I__V($thiz, points$1, corner, along, inward, bays) {
  var length = (bays * $m_Lsketches_rooms_columns_Columns$package$().b1);
  points$1.push($p_Lsketches_rooms_columns_Columns$package$__at$1__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, corner, along, inward, $m_Lsketches_rooms_columns_Columns$package$().aF, $m_Lsketches_rooms_columns_Columns$package$().aF));
  points$1.push($p_Lsketches_rooms_columns_Columns$package$__at$1__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, corner, along, inward, $m_Lsketches_rooms_columns_Columns$package$().aF, 0.0));
  var isEmpty = (bays <= 1);
  var scala$collection$immutable$Range$$lastElement = ((bays - 1) | 0);
  if ((!isEmpty)) {
    var i = 1;
    while (true) {
      var x0 = i;
      var center = (x0 * $m_Lsketches_rooms_columns_Columns$package$().b1);
      points$1.push($p_Lsketches_rooms_columns_Columns$package$__at$1__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, corner, along, inward, (center - $m_Lsketches_rooms_columns_Columns$package$().aF), 0.0));
      points$1.push($p_Lsketches_rooms_columns_Columns$package$__at$1__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, corner, along, inward, (center - $m_Lsketches_rooms_columns_Columns$package$().aF), $m_Lsketches_rooms_columns_Columns$package$().aF));
      points$1.push($p_Lsketches_rooms_columns_Columns$package$__at$1__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, corner, along, inward, (center + $m_Lsketches_rooms_columns_Columns$package$().aF), $m_Lsketches_rooms_columns_Columns$package$().aF));
      (points$1.push($p_Lsketches_rooms_columns_Columns$package$__at$1__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, corner, along, inward, (center + $m_Lsketches_rooms_columns_Columns$package$().aF), 0.0)) | 0);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  points$1.push($p_Lsketches_rooms_columns_Columns$package$__at$1__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, corner, along, inward, (length - $m_Lsketches_rooms_columns_Columns$package$().aF), 0.0));
}
function $p_Lsketches_rooms_columns_Columns$package$__corner$4__Lsketchlib_utils_room_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__F4__Lsketches_rooms_columns_Face__D__Z__O($thiz, w$2, right$1, u0$1, total$2, vertex$2, f$1, fromLeft, top) {
  var up = (top ? (0.5 * w$2.gd) : (0.5 * (-w$2.gd)));
  var pos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), w$2.h7, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), right$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (fromLeft - (0.5 * w$2.av)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), up));
  var uv = new $c_Ltrivalibs_graphics_math_cpu_Vec2(((u0$1 + fromLeft) / total$2), (top ? 0.0 : 1.0));
  return vertex$2.ir(pos, uv, f$1, fromLeft);
}
function $p_Lsketches_rooms_columns_Columns$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$5, faces) {
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().lK(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, n$3, ref$3) => {
    var nVal = new $c_T3(n$3.w, n$3.A, n$3.u);
    var values$proxy1 = $m_sr_Tuples$().qD(vl.jj.bQ(v$3), $m_sr_Tuples$().lT(nVal, $m_T$package$EmptyTuple$()));
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
  mesh$proxy1.qK();
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
      var x$proxy25 = mesh$proxy1.c3[fi].ge;
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
      var x$proxy26 = mesh$proxy1.c3[fi].ge;
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.m4(idxBuf, vertexCount));
  }
  return p$5.lY($x_1, (void 0), (void 0), (void 0), (void 0), (void 0));
}
function $p_Lsketches_rooms_columns_Columns$package$__wallForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$6, faces) {
  var mesh$proxy2 = $m_Ltrivalibs_graphics_geometry_Mesh$().lK(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec4Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())))));
  var f = ((v$3, n$3, ref$3) => {
    var nVal = new $c_T3(n$3.w, n$3.A, n$3.u);
    var values$proxy2 = $m_sr_Tuples$().qD(vl.jj.bQ(v$3), $m_sr_Tuples$().lT(nVal, $m_T$package$EmptyTuple$()));
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
  mesh$proxy2.qK();
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
      var x$proxy27 = mesh$proxy2.c3[fi].ge;
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
      var x$proxy28 = mesh$proxy2.c3[fi].ge;
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy6.m4(idxBuf, vertexCount));
  }
  return p$6.lY($x_1, (void 0), (void 0), (void 0), (void 0), (void 0));
}
function $p_Lsketches_rooms_columns_Columns$package$__bakeAmbience$1__T4__Lsketchlib_utils_bake_TextureBaker__T__Ltrivalibs_graphics_painter_Form__I__I__Ltrivalibs_graphics_painter_Panel($thiz, ambienceClear$1, ambienceBaker$1, label, f, w, h) {
  $m_Lsketches_rooms_columns_Columns$package$().jM(label, w, h);
  return $m_Lsketchlib_utils_bake_Bake$package$().jJ(ambienceBaker$1, f, w, h, (void 0), (void 0), true, $m_Ltrivalibs_graphics_math_cpu_Vec4$().m1().g(ambienceClear$1));
}
function $p_Lsketches_rooms_columns_Columns$package$__nextPillarColors$1__sr_IntRef__sr_ObjectRef__Lsketches_rooms_columns_RoomPalette__sjs_js_Array($thiz, baysInGroup$1, group$1, palette$1) {
  if ((baysInGroup$1.gY === $m_Lsketches_rooms_columns_Columns$package$().ns)) {
    group$1.j0 = palette$1.rk();
    baysInGroup$1.gY = 0;
  }
  baysInGroup$1.gY = ((1 + baysInGroup$1.gY) | 0);
  var this$1 = group$1.j0;
  return $m_Lsketches_rooms_columns_Pillars$package$().rj(this$1.nF, $m_Lsketches_rooms_columns_Pillars$package$().nK);
}
function $p_Lsketches_rooms_columns_Columns$package$__vertex$4__D__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__T2($thiz, margin$1, v, color) {
  return $ct_T2__O__O__(new $c_T2(), new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.l + margin$1), (v.k + margin$1), 0.0), color);
}
function $p_Lsketches_rooms_columns_Columns$package$__paintBay$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__sr_IntRef__sr_ObjectRef__Lsketches_rooms_columns_RoomPalette__Lsketchlib_utils_room_Wall__T3($thiz, p$7, paintShade$1, baysInGroup$2, group$2, palette$2, bay) {
  var frameMargin = (bay.av * $m_Lsketches_rooms_columns_Columns$package$().nb);
  var frame = new $c_Ltrivalibs_graphics_math_cpu_Vec4(frameMargin, frameMargin, (bay.av - (2.0 * frameMargin)), ($m_Lsketches_rooms_columns_Columns$package$().aS - (2.0 * frameMargin)));
  var pillarW = (frame.c6 * $m_Ltrivalibs_utils_random_random$package$().m9($m_Lsketches_rooms_columns_Columns$package$().nw, $m_Lsketches_rooms_columns_Columns$package$().nv));
  var pillarH = (frame.c4 * $m_Ltrivalibs_utils_random_random$package$().m9($m_Lsketches_rooms_columns_Columns$package$().nu, $m_Lsketches_rooms_columns_Columns$package$().nt));
  var pillar = new $c_Lsketches_rooms_columns_PillarPainting(pillarW, pillarH, $p_Lsketches_rooms_columns_Columns$package$__nextPillarColors$1__sr_IntRef__sr_ObjectRef__Lsketches_rooms_columns_RoomPalette__sjs_js_Array($thiz, baysInGroup$2, group$2, palette$2));
  var margin = (pillarW * $m_Lsketches_rooms_columns_Pillars$package$().nL);
  var size = new $c_Ltrivalibs_graphics_math_cpu_Vec2((pillarW + (2.0 * margin)), (pillarH + (2.0 * margin)));
  var array = pillar.j8;
  var len = (array.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_1 = i;
    var x0 = array[i];
    var c$proxy2 = x0.j6;
    var rgb = $m_Ltrivalibs_graphics_lib_color_Color$kernel$().tj(c$proxy2.w, c$proxy2.A, c$proxy2.u, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0));
    res[$x_1] = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().gt($p_Lsketches_rooms_columns_Columns$package$__vertex$4__D__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__T2($thiz, margin, $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().mh(x0.hJ), rgb), $p_Lsketches_rooms_columns_Columns$package$__vertex$4__D__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__T2($thiz, margin, $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().lP(x0.hJ), rgb), $p_Lsketches_rooms_columns_Columns$package$__vertex$4__D__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__T2($thiz, margin, $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().lQ(x0.hJ), rgb), $p_Lsketches_rooms_columns_Columns$package$__vertex$4__D__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__T2($thiz, margin, $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().mj(x0.hJ), rgb));
    i = ((1 + i) | 0);
  }
  var mesh$proxy3 = $m_Ltrivalibs_graphics_geometry_Mesh$().lK(res, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, ref$3) => {
    var values$proxy3 = vl.jj.bQ(v$3);
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
    var $x_2 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy10.m4(idxBuf, vertexCount));
  }
  var paintForm = p$7.lY($x_2, (void 0), (void 0), (void 0), (void 0), (void 0));
  var px = $m_Lsketches_rooms_columns_Columns$package$().k3(size.l, size.k, $m_Lsketches_rooms_columns_Columns$package$().np);
  $m_Lsketches_rooms_columns_Columns$package$().jM("painting", (px.a0() | 0), (px.a1() | 0));
  var width$2 = (px.a0() | 0);
  var height$2 = (px.a1() | 0);
  var clearColor$3 = $m_Ltrivalibs_graphics_math_cpu_Vec4$().m1().g(new $c_T4(0.0, 0.0, 0.0, 0.0));
  var blendState$1 = $m_Ltrivalibs_graphics_painter_BlendState$().oA;
  var Bindable_this = p$7.gz(paintForm, paintShade$1, (void 0), blendState$1);
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("size", size);
  var \u03b4scrutinee471 = e1$proxy1.s;
  var idx = (Bindable_this.Y.K.size | 0);
  var existing = ((idx < (Bindable_this.by.length | 0)) ? Bindable_this.by[idx] : null);
  var device$proxy1 = Bindable_this.id.h;
  if ((existing !== null)) {
    existing.J.D(existing.o, \u03b4scrutinee471);
    var $x_6 = existing.I.queue;
    var $x_5 = existing.G;
    var s$proxy4 = existing.o;
    var $x_4 = s$proxy4.dv.buffer;
    $x_6.writeBuffer($x_5, 0.0, $x_4);
    var $x_3 = existing;
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$();
    var buffer$3 = new ArrayBuffer(8);
    var arr$proxy14 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy14.dv, 0), device$proxy1, uv);
    b.J.D(b.o, \u03b4scrutinee471);
    var $x_9 = b.I.queue;
    var $x_8 = b.G;
    var s$proxy5 = b.o;
    var $x_7 = s$proxy5.dv.buffer;
    $x_9.writeBuffer($x_8, 0.0, $x_7);
    var $x_3 = b;
  }
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, idx, $x_3);
  var panel = p$7.ch(width$2, height$2, clearColor$3, (void 0), true, (void 0), true, (void 0), (void 0), Bindable_this, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$7, panel);
  panel.t4();
  return new $c_T3(panel, new $c_Ltrivalibs_graphics_math_cpu_Vec4(((0.5 * (bay.av - pillarW)) - margin), ((frame.c5 + $m_Lsketches_rooms_columns_Columns$package$().nr) - margin), size.l, size.k), frame);
}
function $p_Lsketches_rooms_columns_Columns$package$__isBay$1__Lsketches_rooms_columns_Face__Z($thiz, f) {
  return (f.b2.av > (0.5 * $m_Lsketches_rooms_columns_Columns$package$().b1));
}
/** @constructor */
function $c_Lsketches_rooms_columns_Columns$package$() {
  this.b1 = 0.0;
  this.j1 = 0.0;
  this.g7 = 0.0;
  this.hI = 0.0;
  this.g5 = 0;
  this.g6 = 0;
  this.j2 = 0.0;
  this.km = 0.0;
  this.kj = 0.0;
  this.nC = 0.0;
  this.n5 = 0.0;
  this.g4 = 0.0;
  this.n2 = 0.0;
  this.nk = 0.0;
  this.ny = 0.0;
  this.g8 = 0;
  this.ki = 0;
  this.nE = 0.0;
  this.nn = 0.0;
  this.nm = 0.0;
  this.kk = 0.0;
  this.mY = 0.0;
  this.kl = 0.0;
  this.bW = null;
  this.nB = 0.0;
  this.mZ = 0.0;
  this.kg = 0.0;
  this.ke = 0.0;
  this.kd = 0.0;
  this.kf = 0.0;
  this.n6 = 0.0;
  this.nq = 0.0;
  this.nD = null;
  this.ko = null;
  this.kn = 0.0;
  this.nA = 0.0;
  this.n4 = null;
  this.n0 = null;
  this.n1 = 0.0;
  this.n9 = null;
  this.j4 = 0.0;
  this.kh = 0.0;
  this.nf = 0.0;
  this.ng = 0.0;
  this.nz = 0.0;
  this.j5 = 0;
  this.ni = null;
  this.nh = null;
  this.nj = 0.0;
  this.nb = 0.0;
  this.na = 0.0;
  this.nw = 0.0;
  this.nv = 0.0;
  this.nu = 0.0;
  this.nt = 0.0;
  this.nr = 0.0;
  this.no = 0.0;
  this.ns = 0;
  this.np = 0.0;
  this.nc = 0.0;
  this.bX = 0.0;
  this.ne = 0.0;
  this.nd = 0.0;
  this.nx = 0.0;
  this.n3 = 0.0;
  this.b8 = 0.0;
  this.b9 = 0.0;
  this.aF = 0.0;
  this.aS = 0.0;
  this.h2 = 0.0;
  this.h1 = 0.0;
  this.n8 = 0.0;
  this.n7 = 0.0;
  this.nl = 0.0;
  this.j3 = 0.0;
  $n_Lsketches_rooms_columns_Columns$package$ = this;
  this.b1 = 16.0;
  this.j1 = 40.0;
  this.g7 = 1.6;
  this.hI = (4.8 * $m_Lsketches_rooms_columns_Columns$package$().g7);
  this.g5 = 5;
  this.g6 = 10;
  this.j2 = 2.3;
  this.km = 2.5;
  this.kj = 0.1;
  this.nC = 3.2;
  this.n5 = 3.0;
  this.g4 = 16.0;
  this.n2 = 12.0;
  this.nk = 1.0;
  this.ny = 160.0;
  this.g8 = 8192;
  this.ki = 16;
  this.nE = 0.025;
  this.nn = 0.04;
  this.nm = 0.3;
  this.kk = 0.03;
  this.mY = 0.74;
  this.kl = 0.5;
  this.bW = new $c_T4(0.3, 0.6, 0.3, 0.2);
  this.nB = 0.25;
  this.mZ = 0.06;
  this.kg = 0.15;
  this.ke = 0.85;
  this.kd = 0.05;
  this.kf = 0.3;
  this.n6 = 0.9;
  this.nq = 2.07;
  this.nD = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.97, 0.97, 0.96);
  this.ko = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.88, 0.88, 0.87);
  this.kn = 0.04;
  this.nA = 4.0;
  this.n4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.87, 0.87, 0.86);
  this.n0 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.99, 0.97);
  this.n1 = 0.7;
  this.n9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.8, 0.78, 0.75);
  this.j4 = 0.8;
  this.kh = 0.004;
  this.nf = 0.012;
  this.ng = 0.6;
  this.nz = 0.13;
  this.j5 = 12;
  this.ni = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.72, 0.78, 0.86);
  this.nh = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.9, 1.82, 1.71);
  this.nj = 0.023809523809523808;
  this.nb = 0.035;
  this.na = 0.01;
  this.nw = 0.33;
  this.nv = 0.81;
  this.nu = 0.8;
  this.nt = 0.95;
  this.nr = 0.4;
  this.no = 0.8;
  this.ns = 5;
  this.np = 56.0;
  this.nc = 0.01;
  this.bX = 1.0;
  this.ne = 512.0;
  this.nd = 0.16;
  this.nx = 0.25;
  this.n3 = 0.0035;
  this.b8 = (0.5 * ($m_Lsketches_rooms_columns_Columns$package$().g5 * $m_Lsketches_rooms_columns_Columns$package$().b1));
  this.b9 = (0.5 * ($m_Lsketches_rooms_columns_Columns$package$().g6 * $m_Lsketches_rooms_columns_Columns$package$().b1));
  this.aF = (0.5 * $m_Lsketches_rooms_columns_Columns$package$().g7);
  this.aS = ($m_Lsketches_rooms_columns_Columns$package$().j1 - $m_Lsketches_rooms_columns_Columns$package$().hI);
  this.h2 = ($m_Lsketches_rooms_columns_Columns$package$().j1 + ($m_Lsketches_rooms_columns_Columns$package$().hI * $m_Lsketches_rooms_columns_Columns$package$().n5));
  var $x_2 = $m_Lsketches_rooms_columns_Columns$package$().h2;
  var $x_1 = $m_Lsketches_rooms_columns_Columns$package$().aS;
  var a = $m_Lsketches_rooms_columns_Columns$package$().b8;
  var b = $m_Lsketches_rooms_columns_Columns$package$().b9;
  this.h1 = (1.05 * ((($x_2 - $x_1) * ((2.0 * (+Math.max(a, b))) - $m_Lsketches_rooms_columns_Columns$package$().km)) / ($m_Lsketches_rooms_columns_Columns$package$().aS - $m_Lsketches_rooms_columns_Columns$package$().j2)));
  var spanX = (2.0 * ($m_Lsketches_rooms_columns_Columns$package$().b8 + $m_Lsketches_rooms_columns_Columns$package$().h1));
  var spanZ = (2.0 * ($m_Lsketches_rooms_columns_Columns$package$().b9 + $m_Lsketches_rooms_columns_Columns$package$().h1));
  var p$proxy3 = (((spanX * spanX) + (spanZ * spanZ)) + ($m_Lsketches_rooms_columns_Columns$package$().h2 * $m_Lsketches_rooms_columns_Columns$package$().h2));
  this.n8 = (+Math.sqrt(p$proxy3));
  this.n7 = (5.9604644775390625E-8 * (((20.0 * $m_Lsketches_rooms_columns_Columns$package$().aS) * $m_Lsketches_rooms_columns_Columns$package$().aS) / $m_Lsketches_rooms_columns_Columns$package$().kj));
  this.nl = ($m_Lsketches_rooms_columns_Columns$package$().g8 / $m_Lsketches_rooms_columns_Columns$package$().g4);
  var a$1 = ($m_Lsketches_rooms_columns_Columns$package$().bX / $m_Lsketches_rooms_columns_Columns$package$().nc);
  var $x_3 = $m_RTLong$().jP((+Math.round(a$1)));
  var x_$_lo = $x_3.l;
  var x_$_hi = $x_3.h;
  var p$proxy4 = ((4.294967296E9 * x_$_hi) + (x_$_lo >>> 0.0));
  this.j3 = (+Math.max(p$proxy4, 1.0));
}
$p = $c_Lsketches_rooms_columns_Columns$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_columns_Columns$package$;
/** @constructor */
function $h_Lsketches_rooms_columns_Columns$package$() {
}
$h_Lsketches_rooms_columns_Columns$package$.prototype = $p;
$p.up = (function() {
  var points = [];
  $p_Lsketches_rooms_columns_Columns$package$__side$1__sjs_js_Array__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__I__V(this, points, new $c_Ltrivalibs_graphics_math_cpu_Vec2((-$m_Lsketches_rooms_columns_Columns$package$().b8), (-$m_Lsketches_rooms_columns_Columns$package$().b9)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0), new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0), $m_Lsketches_rooms_columns_Columns$package$().g5);
  $p_Lsketches_rooms_columns_Columns$package$__side$1__sjs_js_Array__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__I__V(this, points, new $c_Ltrivalibs_graphics_math_cpu_Vec2($m_Lsketches_rooms_columns_Columns$package$().b8, (-$m_Lsketches_rooms_columns_Columns$package$().b9)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0), new $c_Ltrivalibs_graphics_math_cpu_Vec2((-1.0), 0.0), $m_Lsketches_rooms_columns_Columns$package$().g6);
  $p_Lsketches_rooms_columns_Columns$package$__side$1__sjs_js_Array__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__I__V(this, points, new $c_Ltrivalibs_graphics_math_cpu_Vec2($m_Lsketches_rooms_columns_Columns$package$().b8, $m_Lsketches_rooms_columns_Columns$package$().b9), new $c_Ltrivalibs_graphics_math_cpu_Vec2((-1.0), 0.0), new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, (-1.0)), $m_Lsketches_rooms_columns_Columns$package$().g5);
  $p_Lsketches_rooms_columns_Columns$package$__side$1__sjs_js_Array__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__I__V(this, points, new $c_Ltrivalibs_graphics_math_cpu_Vec2((-$m_Lsketches_rooms_columns_Columns$package$().b8), $m_Lsketches_rooms_columns_Columns$package$().b9), new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, (-1.0)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0), $m_Lsketches_rooms_columns_Columns$package$().g6);
  return new $c_Lsketchlib_utils_room_Ring(points, 1.0, $m_Lsketches_rooms_columns_Columns$package$().aS);
});
$p.t3 = (function() {
  var rings = [];
  var end = $m_Lsketches_rooms_columns_Columns$package$().g5;
  var isEmpty = (end <= 1);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 1;
    while (true) {
      var x0 = i;
      var this$15 = new $c_sc_IterableOps$WithFilter(new $c_sci_Range$Exclusive(1, $m_Lsketches_rooms_columns_Columns$package$().g6, 1), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x0) => ((iz$3) => {
        var iz$2 = (iz$3 | 0);
        return ((((x0 === 1) || (x0 === (($m_Lsketches_rooms_columns_Columns$package$().g5 - 1) | 0))) || (iz$2 === 1)) || (iz$2 === (($m_Lsketches_rooms_columns_Columns$package$().g6 - 1) | 0)));
      }))(x0)));
      var f = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((rings, x0) => ((iz$3$1) => {
        var iz$2$1 = (iz$3$1 | 0);
        return (rings.push($m_Lsketchlib_utils_room_Ring$().uF(new $c_Ltrivalibs_graphics_math_cpu_Vec2(((x0 * $m_Lsketches_rooms_columns_Columns$package$().b1) - $m_Lsketches_rooms_columns_Columns$package$().b8), ((iz$2$1 * $m_Lsketches_rooms_columns_Columns$package$().b1) - $m_Lsketches_rooms_columns_Columns$package$().b9)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0), $m_Lsketches_rooms_columns_Columns$package$().g7, $m_Lsketches_rooms_columns_Columns$package$().g7, (-1.0), $m_Lsketches_rooms_columns_Columns$package$().aS)) | 0);
      }))(rings, x0));
      this$15.t1().bD(f);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  return rings;
});
$p.sk = (function() {
  var hx = ($m_Lsketches_rooms_columns_Columns$package$().b8 + $m_Lsketches_rooms_columns_Columns$package$().aF);
  var hz = ($m_Lsketches_rooms_columns_Columns$package$().b9 + $m_Lsketches_rooms_columns_Columns$package$().aF);
  return $m_Lsketchlib_utils_room_Boundary$().qy(new $c_Lsketchlib_utils_room_Ring([new $c_Ltrivalibs_graphics_math_cpu_Vec2((-hx), (-hz)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(hx, (-hz)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(hx, hz), new $c_Ltrivalibs_graphics_math_cpu_Vec2((-hx), hz)], 1.0, $m_Lsketches_rooms_columns_Columns$package$().j1));
});
$p.sl = (function(clip) {
  var families = [new $c_Lsketchlib_utils_room_BeamFamily(new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0), $m_Lsketches_rooms_columns_Columns$package$().b1, $m_Lsketches_rooms_columns_Columns$package$().b9, $m_Lsketches_rooms_columns_Columns$package$().g7), new $c_Lsketchlib_utils_room_BeamFamily(new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0), $m_Lsketches_rooms_columns_Columns$package$().b1, $m_Lsketches_rooms_columns_Columns$package$().b8, $m_Lsketches_rooms_columns_Columns$package$().g7)];
  var balks = [];
  var end = (families.length | 0);
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var soffit = ($m_Lsketches_rooms_columns_Columns$package$().aS - (x0 * $m_Lsketches_rooms_columns_Columns$package$().n7));
      var array = $m_Lsketchlib_utils_room_Raster$package$().sW(families[x0], clip, $m_Lsketches_rooms_columns_Columns$package$().hI, soffit);
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
$p.rp = (function(r) {
  var bnd = $m_Lsketchlib_utils_room_Boundary$().qy(r);
  var edges = bnd.gb;
  var walls = $m_Lsketchlib_utils_room_Walls$package$().vz(bnd, $m_Lsketches_rooms_columns_Columns$package$().aS);
  var faces = [];
  var end = (edges.length | 0);
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var e = edges[x0];
      var nextArris = edges[((((1 + x0) | 0) % $checkIntDivisor((edges.length | 0))) | 0)].c1;
      var wall = walls[x0];
      var right = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), wall.c2);
      var leftIsA = (((right.w * (e.aA.l - e.a6.l)) + (right.u * (e.aA.k - e.a6.k))) > 0.0);
      (faces.push(new $c_Lsketches_rooms_columns_Face(wall, (leftIsA ? e.c1 : nextArris), (leftIsA ? nextArris : e.c1))) | 0);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  return faces;
});
$p.rz = (function(faces) {
  var elem = 0.0;
  elem = 0.0;
  var len = (faces.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = faces[i];
    elem = (elem + x0.b2.av);
    i = ((1 + i) | 0);
  }
  return elem;
});
$p.ve = (function(faces) {
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
    if ((((elem$2 + x0.b2.av) > $m_Lsketches_rooms_columns_Columns$package$().nl) && ((elem$1.length | 0) > 0))) {
      strips.push(elem$1);
      elem$1 = [];
      elem$2 = 0.0;
    }
    elem$1.push(x0);
    elem$2 = (elem$2 + x0.b2.av);
    i = ((1 + i) | 0);
  }
  if (((elem$1.length | 0) > 0)) {
    strips.push(elem$1);
  }
  return strips;
});
$p.rv = (function(faces, vertex) {
  var total = $m_Lsketches_rooms_columns_Columns$package$().rz(faces);
  var quads = [];
  var elem = 0.0;
  elem = 0.0;
  var len = (faces.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = faces[i];
    var w = x0.b2;
    var right = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), w.c2);
    var u0 = elem;
    quads.push($m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().gt($p_Lsketches_rooms_columns_Columns$package$__corner$4__Lsketchlib_utils_room_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__F4__Lsketches_rooms_columns_Face__D__Z__O(this, w, right, u0, total, vertex, x0, 0.0, true), $p_Lsketches_rooms_columns_Columns$package$__corner$4__Lsketchlib_utils_room_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__F4__Lsketches_rooms_columns_Face__D__Z__O(this, w, right, u0, total, vertex, x0, 0.0, false), $p_Lsketches_rooms_columns_Columns$package$__corner$4__Lsketchlib_utils_room_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__F4__Lsketches_rooms_columns_Face__D__Z__O(this, w, right, u0, total, vertex, x0, w.av, false), $p_Lsketches_rooms_columns_Columns$package$__corner$4__Lsketchlib_utils_room_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__F4__Lsketches_rooms_columns_Face__D__Z__O(this, w, right, u0, total, vertex, x0, w.av, true)));
    elem = (elem + w.av);
    i = ((1 + i) | 0);
  }
  return quads;
});
$p.sj = (function(pos, uv, f, fromLeft) {
  return $ct_T2__O__O__(new $c_T2(), pos, uv);
});
$p.uL = (function(pos, uv, f, fromLeft) {
  return new $c_T4(pos, uv, new $c_Ltrivalibs_graphics_math_cpu_Vec4(fromLeft, f.b2.av, (f.h3 ? 1.0 : 0.0), (f.h4 ? 1.0 : 0.0)), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), f.b2.c2));
});
$p.k3 = (function(widthM, heightM, scale) {
  var a = (widthM * scale);
  var p$proxy5 = $doubleToInt((+Math.ceil(a)));
  var _1 = ((p$proxy5 > 1) ? p$proxy5 : 1);
  var a$1 = (heightM * scale);
  var p$proxy6 = $doubleToInt((+Math.ceil(a$1)));
  return $ct_T2__O__O__(new $c_T2(), _1, ((p$proxy6 > 1) ? p$proxy6 : 1));
});
$p.jM = (function(label, w, h) {
  if (((w > $m_Lsketches_rooms_columns_Columns$package$().g8) || (h > $m_Lsketches_rooms_columns_Columns$package$().g8))) {
    console.warn(((((((("columns: " + label) + " texture ") + w) + "\u00d7") + h) + " exceeds ") + $m_Lsketches_rooms_columns_Columns$package$().g8));
  }
});
$p.rH = (function(wp) {
  return $m_Ltrivalibs_graphics_math_gpu_vec3$().ae($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().a5(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().S(wp), $m_Lsketches_rooms_columns_Columns$package$().kk)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().S(wp), $m_Lsketches_rooms_columns_Columns$package$().nm), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().gC(wp), 0.8), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().S(wp), $m_Lsketches_rooms_columns_Columns$package$().kk)));
});
$p.vB = (function(wp) {
  return $m_Ltrivalibs_graphics_shader_lib_noise_Simplex$().iw($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().gs($m_Lsketches_rooms_columns_Columns$package$().rH(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().nE), ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "5")), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(3.0), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(0.3), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(120.0));
});
$p.ul = (function(wp, normal) {
  return $m_Ltrivalibs_graphics_shader_lib_noise_Simplex$().iw($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().gs($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().sD($m_Lsketches_rooms_columns_Columns$package$().rH(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), normal), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().nn), ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "3")), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(2.1), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(0.25), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(70.0));
});
$p.qv = (function(world, orient, edge) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gy($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().mY), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lX($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bB(world, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T(orient, $m_Lsketches_rooms_columns_Columns$package$().kl), edge)), (1.0 + $m_Lsketches_rooms_columns_Columns$package$().kl))));
});
$p.sC = (function(xz) {
  return $m_Ltrivalibs_graphics_shader_lib_noise_Simplex$().iw($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().gs($m_Ltrivalibs_graphics_math_gpu_vec3$().ae($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a5(xz), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().S(xz)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().n6), ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "3")), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(2.0), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(0.5), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(41.0));
});
$p.uo = (function(xz) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lX($m_Ltrivalibs_graphics_shader_lib_noise_Simplex$().iw($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().gs($m_Ltrivalibs_graphics_math_gpu_vec3$().ae($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a5(xz), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().S(xz)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().nq), ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "3")), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(2.0), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(0.5), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(9.0)));
});
$p.rt = (function(dist, isArris, neighborFacing) {
  var arrisRadius = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().aO(neighborFacing, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().nB)), (+$m_Lsketches_rooms_columns_Columns$package$().bW.aZ));
  var radius = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().lH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bA(arrisRadius, (+$m_Lsketches_rooms_columns_Columns$package$().bW.aY)), isArris), (+$m_Lsketches_rooms_columns_Columns$package$().bW.aY));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().aO(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jT(radius, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.001)));
});
$p.rE = (function(wp, info, tangent, toEye) {
  var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aM($m_Lsketches_rooms_columns_Columns$package$().rt($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().a5(info), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().gC(info), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().iu(toEye, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().gs(tangent, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), (-1.0)))), $m_Lsketches_rooms_columns_Columns$package$().rt($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ip($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().S(info), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().a5(info)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().cl(info), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().iu(toEye, tangent))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().aO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().S(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g((+$m_Lsketches_rooms_columns_Columns$package$().bW.aP))));
  var $x_1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
  var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().S(wp);
  var L$proxy1 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aN();
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $x_3.aM($x_2, $x_1.aO(L$proxy1.aC((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa($m_Lsketches_rooms_columns_Columns$package$().aS)) + " - ") + e$proxy1.f) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g((+$m_Lsketches_rooms_columns_Columns$package$().bW.aQ))));
});
$p.rF = (function(amb, edge, y) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gy($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().S(amb), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().a5(amb), edge), ($m_Lsketches_rooms_columns_Columns$package$(), $m_Lsketchlib_shaders_room_Grime$package$().qR(y, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().qM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().gC(amb)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().cl(amb), $m_Lsketches_rooms_columns_Columns$package$().kg, $m_Lsketches_rooms_columns_Columns$package$().ke, $m_Lsketches_rooms_columns_Columns$package$().kd, $m_Lsketches_rooms_columns_Columns$package$().kf)));
});
$p.qO = (function(y) {
  var $x_5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
  var $x_4 = $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().hz($m_Lsketches_rooms_columns_Columns$package$().nD);
  var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
  var $x_2 = $m_Lsketches_rooms_columns_Columns$package$().ko;
  var $x_1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
  var L$proxy3 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aN();
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $x_5.m3($x_4, $x_3, $x_2, $x_1.aO(L$proxy3.aC((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa($m_Lsketches_rooms_columns_Columns$package$().aS)) + " - ") + y.f) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().nA), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0)));
});
$p.rG = (function(y) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().qt($m_Lsketches_rooms_columns_Columns$package$().qO(y), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().kn);
});
$p.to = (function(pos, rect) {
  var dist = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().re($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().k1(pos, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cj(rect)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().k1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().jI($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cj(rect), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().mt(rect)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), pos));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().aO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jU($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a5(dist), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().S(dist)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().na));
});
$p.rC = (function(v) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().k1(v, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().lZ(v, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$()));
});
$p.tu = (function(p) {
  var fromCorner = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().jI(p, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_vec2$().a3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().b8), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().b9)));
  var node = $m_Lsketches_rooms_columns_Columns$package$().rC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().rX($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().lG(fromCorner, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Lsketches_rooms_columns_Columns$package$().b1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), 0.5));
  var q = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().rW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().rZ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().k1(fromCorner, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().qu(node, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Lsketches_rooms_columns_Columns$package$().b1)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$()), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Lsketches_rooms_columns_Columns$package$().aF);
  var boxDist = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().tw($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().u6(q, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_vec2$().a3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0))));
  var midX = (0.5 * $m_Lsketches_rooms_columns_Columns$package$().g5);
  var midZ = (0.5 * $m_Lsketches_rooms_columns_Columns$package$().g6);
  var hasColumn = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().aO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().iq($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bA($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a5(node), midX)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g((midX - 1.6)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g((midX - 1.4))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().aO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().iq($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bA($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().S(node), midZ)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g((midZ - 1.6)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g((midZ - 1.4))));
  var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
  var e$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().iq($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a5(p));
  var L$proxy5 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aN();
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  var $x_1 = L$proxy5.aC((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa($m_Lsketches_rooms_columns_Columns$package$().b8)) + " - ") + e$proxy2.f) + ")"));
  var e$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().iq($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().S(p));
  var L$proxy7 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aN();
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  var wallDist = $x_2.jU($x_1, L$proxy7.aC((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa($m_Lsketches_rooms_columns_Columns$package$().b9)) + " - ") + e$proxy3.f) + ")")));
  var $x_5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
  var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  var L$proxy9 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aN();
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $x_5.jU($x_4.bB(boxDist, $x_3.T(L$proxy9.aC((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + hasColumn.f) + ")")), 1000.0)), wallDist);
});
$p.qU = (function(v) {
  var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  var $x_1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().aO(v, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g((-0.002)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0));
  var e$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().aO(v, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.002));
  var L$proxy11 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aN();
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $x_2.aM($x_1, L$proxy11.aC((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + e$proxy4.f) + ")")));
});
$p.sx = (function(cell) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().qN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().v2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().sN(cell, new $c_Ltrivalibs_graphics_math_cpu_Vec2(12.9898, 78.233))), 43758.5453));
});
$p.uQ = (function(canvas) {
  $m_Ltrivalibs_graphics_painter_Painter$().tl(canvas, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$5) => {
    var sampler = p$5.ma("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0), $m_Lsketches_rooms_columns_Columns$package$().ki);
    var tileSampler = p$5.ma("linear", "linear", "linear", "repeat", (void 0), (void 0), $m_Lsketches_rooms_columns_Columns$package$().ki);
    var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, $m_Lsketches_rooms_columns_Columns$package$().j2, $m_Lsketches_rooms_columns_Columns$package$().b1);
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().s6(0.9, 1.0, $m_Lsketches_rooms_columns_Columns$package$().kj, $m_Lsketches_rooms_columns_Columns$package$().n8, 0.0, 0.0, pos$1);
    $m_Ltrivalibs_dev_devPreserve$().sd(cam, "camera");
    var outerRing = $m_Lsketches_rooms_columns_Columns$package$().up();
    var columnRings = $m_Lsketches_rooms_columns_Columns$package$().t3();
    var rings = [outerRing];
    $m_sjs_js_ArrayOps$().B(columnRings, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((r$2) => (rings.push(r$2) | 0))));
    var footprint = new $c_Lsketchlib_utils_room_Footprint(rings);
    var floorBnd = $m_Lsketchlib_utils_room_Boundary$().sa(footprint.gc);
    var bounds = $m_Lsketchlib_utils_room_Plan$package$().sp(footprint);
    var clip = $m_Lsketches_rooms_columns_Columns$package$().sk();
    var atlas = new $c_Lsketchlib_utils_room_BeamAtlas($m_Lsketches_rooms_columns_Columns$package$().sl(clip), clip);
    var wallStrips = $m_Lsketches_rooms_columns_Columns$package$().ve($m_Lsketches_rooms_columns_Columns$package$().rp(outerRing));
    $m_sjs_js_ArrayOps$().B(columnRings, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((r$2$1) => (wallStrips.push($m_Lsketches_rooms_columns_Columns$package$().rp(r$2$1)) | 0))));
    var lightForm = $p_Lsketches_rooms_columns_Columns$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$5, [$m_Lsketchlib_utils_room_Surfaces$package$().jX(bounds, $m_Lsketches_rooms_columns_Columns$package$().h2, true, $m_Lsketches_rooms_columns_Columns$package$().h1)]);
    var balkForm = $p_Lsketches_rooms_columns_Columns$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$5, atlas.o9);
    var frag$proxy1 = new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((wp$2, normal$2, _$1$2, out$2) => {
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var world = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("world");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var orient = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("orient");
      var $x_4 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_3 = $m_sjsr_package$();
      var $x_2 = world.C($m_Lsketches_rooms_columns_Columns$package$().vB(wp$2));
      var $x_1 = orient.C($m_Lsketches_rooms_columns_Columns$package$().ul(wp$2, normal$2));
      var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_vec4$().lL($m_Lsketches_rooms_columns_Columns$package$().qv(world, orient, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0)), $m_Lsketches_rooms_columns_Columns$package$().qv(world, orient, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().lH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T($m_Lsketches_rooms_columns_Columns$package$().sC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().k5(wp$2)), 0.5), 0.5), $m_Lsketches_rooms_columns_Columns$package$().uo($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().k5(wp$2)));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_4.ax(new $c_sjsr_WrappedVarArgs($x_3.d(new ($d_T.r().C)([$x_2, $x_1, (((("  " + out$2.y) + " = ") + value$proxy1.f) + ";")]))));
    }));
    var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3);
      var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => frag$proxy1.ir(ctx$2.N.i("worldPos"), ctx$2.N.i("normal"), ctx$2.N.i("uv"), ctx$2.aq.L("color"))));
      var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg;
      try {
        var $x_5 = body$proxy1.g(ctx);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev;
      }
      program$3.ad = $x_5;
      $m_sjs_js_ArrayOps$().B(reg.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$17) => ((data$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$17, data$3);
      }))(program$3)));
    }));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy1.g(program);
    var b = program.ar;
    var b$1 = program.ad;
    var helperFns$proxy1 = program.at();
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
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bc.t()], []));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.ac, sd.ab, fragBuiltinParams);
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
    var x5 = $ct_T2__O__O__(new $c_T2(), result, $m_Ltrivalibs_graphics_shader_layouts$().O(p$5.h, result));
    var \u03b42$ = x5;
    var bgls$2 = \u03b42$.ao;
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().O(p$5.h, bgls$2);
    var ambienceBaker = new $c_Lsketchlib_utils_bake_TextureBaker(p$5, new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], null, pl, false, dict, dict$2));
    var ambienceClear = new $c_T4(0.87, 0.87, 0.5, 0.5);
    var x8 = atlas.vm($m_Lsketches_rooms_columns_Columns$package$().g4, $m_Lsketches_rooms_columns_Columns$package$().n2);
    (x8.a0() | 0);
    (x8.a1() | 0);
    var \u03b42$$2 = x8;
    var bw$2 = (\u03b42$$2.a0() | 0);
    var bh$2 = (\u03b42$$2.a1() | 0);
    var balkTex = $p_Lsketches_rooms_columns_Columns$package$__bakeAmbience$1__T4__Lsketchlib_utils_bake_TextureBaker__T__Ltrivalibs_graphics_painter_Form__I__I__Ltrivalibs_graphics_painter_Panel(this, ambienceClear, ambienceBaker, "balk atlas", balkForm, bw$2, bh$2);
    var lightSize = $m_Lsketches_rooms_columns_Columns$package$().k3((((+bounds.aY) - (+bounds.aP)) + (2.0 * $m_Lsketches_rooms_columns_Columns$package$().h1)), (((+bounds.aZ) - (+bounds.aQ)) + (2.0 * $m_Lsketches_rooms_columns_Columns$package$().h1)), $m_Lsketches_rooms_columns_Columns$package$().nk);
    $m_Lsketches_rooms_columns_Columns$package$().jM("light", (lightSize.a0() | 0), (lightSize.a1() | 0));
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
      var $x_6 = level.C($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().aO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lX($m_Ltrivalibs_graphics_shader_lib_noise_Simplex$().iw($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().gs($m_Ltrivalibs_graphics_math_gpu_vec3$().ae($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().a5(wp$2$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().gC(wp$2$1)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().nj), ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "3")), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(2.0), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(0.5), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(17.0))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.3), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.7)));
      var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_vec4$().a3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().m3($m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().hz($m_Lsketches_rooms_columns_Columns$package$().ni), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().nh, level), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_8.ax(new $c_sjsr_WrappedVarArgs($x_7.d(new ($d_T.r().C)([$x_6, (((("  " + color$2.y) + " = ") + value$proxy3.f) + ";")]))));
    }));
    var $x_10 = $m_Lsketchlib_utils_bake_Bake$package$();
    var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3$1);
      var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => frag$proxy2.ir(ctx$2$1.N.i("worldPos"), ctx$2$1.N.i("normal"), ctx$2$1.N.i("uv"), ctx$2$1.aq.L("color"))));
      var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$1;
      try {
        var $x_9 = body$proxy3.g(ctx$1);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$1;
      }
      program$3$1.ad = $x_9;
      $m_sjs_js_ArrayOps$().B(reg$1.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$18) => ((data$3$1) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$18, data$3$1);
      }))(program$3$1)));
    }));
    var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy2.g(program$2);
    var b$2 = program$2.ar;
    var b$3 = program$2.ad;
    var helperFns$proxy2 = program$2.at();
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
    var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bc.t()], []));
    var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.ac, sd$2.ab, fragBuiltinParams$2);
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
    var x11 = $ct_T2__O__O__(new $c_T2(), result$2, $m_Ltrivalibs_graphics_shader_layouts$().O(p$5.h, result$2));
    var \u03b42$$3 = x11;
    var bgls$4 = \u03b42$$3.ao;
    var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().O(p$5.h, bgls$4);
    var lightTex = $x_10.jJ(new $c_Lsketchlib_utils_bake_TextureBaker(p$5, new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, vbl$2, bgls$4[0], null, pl$2, false, dict$3, dict$4)), lightForm, width$1, height$1, transform$2, "rgba16float", mips$2, clearColor$2);
    var slabAreaSize = ($m_Lsketches_rooms_columns_Columns$package$().j4 * $m_Lsketches_rooms_columns_Columns$package$().j5);
    var x$proxy45 = new $c_T4(0.0, 0.0, slabAreaSize, slabAreaSize);
    var slabForm = $p_Lsketches_rooms_columns_Columns$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$5, [$m_Lsketchlib_utils_room_Surfaces$package$().jX(x$proxy45, 0.0, false, 0.0)]);
    var a = (slabAreaSize * $m_Lsketches_rooms_columns_Columns$package$().ny);
    var slabPx = $doubleToInt((+Math.ceil(a)));
    $m_Lsketches_rooms_columns_Columns$package$().jM("slab area", slabPx, slabPx);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var transform$proxy1 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var format$proxy1 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var mips$proxy1 = true;
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var clearColor$proxy1 = (void 0);
    var frag$proxy3 = new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((_$4$2, _$5$2, uv$2, out$2$1) => {
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var slabUv = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("slabUv");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var fromJoint = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("fromJoint");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var joint = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("joint");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var tone = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("tone");
      var $x_19 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_18 = $m_sjsr_package$();
      var $x_17 = slabUv.C($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().qu(uv$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Lsketches_rooms_columns_Columns$package$().j5));
      var $x_16 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
      var $x_15 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().lZ(slabUv, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$());
      var $x_14 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$();
      var e$proxy5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().lZ(slabUv, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$());
      var L$proxy13 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().tc();
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var $x_13 = fromJoint.C($x_16.re($x_15, $x_14, L$proxy13.aC((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + e$proxy5.f) + ")"))));
      var $x_12 = joint.C($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gy($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().ng), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().aO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jU($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a5(fromJoint), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().S(fromJoint)), $m_Lsketches_rooms_columns_Columns$package$().j4), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().kh), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(($m_Lsketches_rooms_columns_Columns$package$().kh + $m_Lsketches_rooms_columns_Columns$package$().nf)))));
      var e$proxy6 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bA($m_Lsketches_rooms_columns_Columns$package$().sx($m_Lsketches_rooms_columns_Columns$package$().rC(slabUv)), 0.5), $m_Lsketches_rooms_columns_Columns$package$().nz);
      var L$proxy15 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aN();
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var $x_11 = tone.C(L$proxy15.aC((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " + ") + e$proxy6.f) + ")")));
      var value$proxy5 = $m_Ltrivalibs_graphics_math_gpu_vec4$().a3($m_Ltrivalibs_graphics_math_gpu_vec3$().cf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aM(joint, tone)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_19.ax(new $c_sjsr_WrappedVarArgs($x_18.d(new ($d_T.r().C)([$x_17, $x_13, $x_12, $x_11, (((("  " + out$2$1.y) + " = ") + value$proxy5.f) + ";")]))));
    }));
    var $x_21 = $m_Lsketchlib_utils_bake_Bake$package$();
    var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3$2);
      var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => frag$proxy3.ir(ctx$2$2.N.i("worldPos"), ctx$2$2.N.i("normal"), ctx$2$2.N.i("uv"), ctx$2$2.aq.L("color"))));
      var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$2;
      try {
        var $x_20 = body$proxy5.g(ctx$3);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$2;
      }
      program$3$2.ad = $x_20;
      $m_sjs_js_ArrayOps$().B(reg$2.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$19) => ((data$3$2) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$19, data$3$2);
      }))(program$3$2)));
    }));
    var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy3.g(program$3$3);
    var b$5 = program$3$3.ar;
    var b$6 = program$3$3.ad;
    var helperFns$proxy3 = program$3$3.at();
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
    var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bc.t()], []));
    var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.ac, sd$3.ab, fragBuiltinParams$3);
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
    var x14 = $ct_T2__O__O__(new $c_T2(), result$3, $m_Ltrivalibs_graphics_shader_layouts$().O(p$5.h, result$3));
    var \u03b42$$4 = x14;
    var bgls$6 = \u03b42$$4.ao;
    var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().O(p$5.h, bgls$6);
    var slabTex = $x_21.jJ(new $c_Lsketchlib_utils_bake_TextureBaker(p$5, new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, vbl$3, bgls$6[0], null, pl$3, false, dict$5, dict$6)), slabForm, slabPx, slabPx, transform$proxy1, format$proxy1, mips$proxy1, clearColor$proxy1);
    var x$proxy46 = new $c_T4(0.0, 0.0, $m_Lsketches_rooms_columns_Columns$package$().bX, $m_Lsketches_rooms_columns_Columns$package$().bX);
    var grainForm = $p_Lsketches_rooms_columns_Columns$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$5, [$m_Lsketchlib_utils_room_Surfaces$package$().jX(x$proxy46, 0.0, false, 0.0)]);
    var a$2 = ($m_Lsketches_rooms_columns_Columns$package$().bX * $m_Lsketches_rooms_columns_Columns$package$().ne);
    var grainPx = $doubleToInt((+Math.ceil(a$2)));
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var transform$proxy2 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var format$proxy2 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var mips$proxy2 = true;
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var clearColor$proxy2 = (void 0);
    var frag$proxy4 = new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((_$6$2, _$7$2, uv$2$1) => $m_Ltrivalibs_graphics_math_gpu_vec4$().lL($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().lH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T($m_Ltrivalibs_graphics_shader_lib_noise_Extended$().sZ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().gs($m_Ltrivalibs_graphics_math_gpu_vec3$().ae($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a5(uv$2$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().S(uv$2$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().j3), ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "1")), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(2.0), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(0.5), $m_Ltrivalibs_graphics_math_gpu_vec3$().ae($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().j3), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().j3), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0)), null, $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().an(5.0)), 0.5), 0.5), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0))));
    var $x_25 = $m_Lsketchlib_utils_bake_Bake$package$();
    var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3$4);
      var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
        var $x_23 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_22 = $m_sjsr_package$();
        var AssignTarget_this = ctx$2$3.aq.L("color");
        var value$proxy7 = frag$proxy4.qw(ctx$2$3.N.i("worldPos"), ctx$2$3.N.i("normal"), ctx$2$3.N.i("uv"));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_23.ax(new $c_sjsr_WrappedVarArgs($x_22.d(new ($d_T.r().C)([(((("  " + AssignTarget_this.y) + " = ") + value$proxy7.f) + ";")]))));
      }));
      var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$3;
      try {
        var $x_24 = body$proxy7.g(ctx$4);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$3;
      }
      program$3$4.ad = $x_24;
      $m_sjs_js_ArrayOps$().B(reg$3.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$20) => ((data$3$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$20, data$3$3);
      }))(program$3$4)));
    }));
    var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy4.g(program$4);
    var b$7 = program$4.ar;
    var b$8 = program$4.ad;
    var helperFns$proxy4 = program$4.at();
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
    var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bc.t()], []));
    var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.ac, sd$4.ab, fragBuiltinParams$4);
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
    var x17 = $ct_T2__O__O__(new $c_T2(), result$4, $m_Ltrivalibs_graphics_shader_layouts$().O(p$5.h, result$4));
    var \u03b42$$5 = x17;
    var bgls$8 = \u03b42$$5.ao;
    var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().O(p$5.h, bgls$8);
    var grainTex = $x_25.jJ(new $c_Lsketchlib_utils_bake_TextureBaker(p$5, new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, vbl$4, bgls$8[0], null, pl$4, false, dict$7, dict$8)), grainForm, grainPx, grainPx, transform$proxy2, format$proxy2, mips$proxy2, clearColor$proxy2);
    var build$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$5) => {
      var body$proxy9 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$4) => {
        var $x_29 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_28 = $m_sjsr_package$();
        var AssignTarget_this$1 = ctx$2$4.a2.L("color");
        var value$proxy9 = ctx$2$4.a8.i("color");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_27 = AssignTarget_this$1.y;
        var $x_26 = value$proxy9.f;
        var AssignTarget_this$2 = ctx$2$4.a2.cd;
        var value$proxy11 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ae($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().qL($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().lV($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().vv(ctx$2$4.a8.i("position")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), ctx$2$4.go.i("size")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$()), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_29.ax(new $c_sjsr_WrappedVarArgs($x_28.d(new ($d_T.r().C)([(((("  " + $x_27) + " = ") + $x_26) + ";"), (((("  " + AssignTarget_this$2.y) + " = ") + value$proxy11.f) + ";")]))));
      }));
      var ctx$5 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$4 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$4 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$4;
      try {
        var $x_30 = body$proxy9.g(ctx$5);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$4;
      }
      program$3$5.ar = $x_30;
      $m_sjs_js_ArrayOps$().B(reg$4.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$21) => ((data$3$4) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$21, data$3$4);
      }))(program$3$5)));
      var body$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$5) => {
        var AssignTarget_this$3 = ctx$2$5.aq.L("color");
        var value$proxy13 = $m_Ltrivalibs_graphics_math_gpu_vec4$().a3(ctx$2$5.N.i("color"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().no));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return (((("  " + AssignTarget_this$3.y) + " = ") + value$proxy13.f) + ";");
      }));
      var ctx$2$6 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$2$1;
      try {
        var $x_31 = body$proxy11.g(ctx$2$6);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$2$1;
      }
      program$3$5.ad = $x_31;
      $m_sjs_js_ArrayOps$().B(reg$2$1.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$22) => ((data$3$5) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$22, data$3$5);
      }))(program$3$5)));
    }));
    var program$5 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy5.g(program$5);
    var b$9 = program$5.ar;
    var b$10 = program$5.ad;
    var helperFns$proxy5 = program$5.at();
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
    var groupDecls$5 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["size"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).bc.t()], []));
    var fragBuiltinParams$5 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$5 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$5, vertexInputStruct$5, vertexOutputStruct$5, fragmentOutputStruct$5, groupDecls$5, sd$5.ac, sd$5.ab, fragBuiltinParams$5);
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
    var x20 = $ct_T2__O__O__(new $c_T2(), result$5, $m_Ltrivalibs_graphics_shader_layouts$().O(p$5.h, result$5));
    var \u03b42$$6 = x20;
    var bgls$10 = \u03b42$$6.ao;
    var pl$5 = $m_Ltrivalibs_graphics_shader_layouts$().O(p$5.h, bgls$10);
    var paintShade = new $c_Ltrivalibs_graphics_painter_Shade(id$5, module$5, vbl$5, bgls$10[0], null, pl$5, false, dict$9, dict$10);
    var palette = new $c_Lsketches_rooms_columns_RoomPalette();
    var group = new $c_sr_ObjectRef(palette.rk());
    var baysInGroup = new $c_sr_IntRef(0);
    var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$());
    var uv$proxy1 = ul$proxy1.aG;
    var buffer = new ArrayBuffer(16);
    var arr$proxy15 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var eyePos = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy15.dv, 0), p$5.h, uv$proxy1);
    var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
    var uv$proxy2 = ul$proxy2.aG;
    var buffer$2 = new ArrayBuffer(8);
    var arr$proxy16 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
    var canvasRes = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy16.dv, 0), p$5.h, uv$proxy2);
    var build$proxy6 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$6) => {
      var body$proxy13 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$7) => {
        var $x_35 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_34 = $m_sjsr_package$();
        var AssignTarget_this$4 = ctx$2$7.a2.L("uv");
        var value$proxy15 = ctx$2$7.a8.i("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_33 = AssignTarget_this$4.y;
        var $x_32 = value$proxy15.f;
        var AssignTarget_this$2$1 = ctx$2$7.a2.cd;
        var value$proxy17 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().ck(ctx$2$7.go.i("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cg(), $m_Ltrivalibs_graphics_math_gpu_vec4$().a3(ctx$2$7.a8.i("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_35.ax(new $c_sjsr_WrappedVarArgs($x_34.d(new ($d_T.r().C)([(((("  " + $x_33) + " = ") + $x_32) + ";"), (((("  " + AssignTarget_this$2$1.y) + " = ") + value$proxy17.f) + ";")]))));
      }));
      var ctx$6 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$5 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$5 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$5;
      try {
        var $x_36 = body$proxy13.g(ctx$6);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$5;
      }
      program$3$6.ar = $x_36;
      $m_sjs_js_ArrayOps$().B(reg$5.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$23) => ((data$3$6) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$23, data$3$6);
      }))(program$3$6)));
      var body$proxy15 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$8) => {
        var AssignTarget_this$5 = ctx$2$8.aq.L("color");
        var tex = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var uv$3 = ctx$2$8.N.i("uv");
        var sampler$1 = ctx$2$8.E.i("samp");
        var value$proxy19 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().ae(tex, uv$3, sampler$1);
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return (((("  " + AssignTarget_this$5.y) + " = ") + value$proxy19.f) + ";");
      }));
      var ctx$2$9 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$2$2;
      try {
        var $x_37 = body$proxy15.g(ctx$2$9);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$2$2;
      }
      program$3$6.ad = $x_37;
      $m_sjs_js_ArrayOps$().B(reg$2$2.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$24) => ((data$3$7) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$24, data$3$7);
      }))(program$3$6)));
    }));
    var program$6 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy6.g(program$6);
    var b$11 = program$6.ar;
    var b$12 = program$6.ad;
    var helperFns$proxy6 = program$6.at();
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
    var groupDecls$6 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bc.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).M.t()], [])));
    var fragBuiltinParams$6 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$6 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$6, vertexInputStruct$6, vertexOutputStruct$6, fragmentOutputStruct$6, groupDecls$6, sd$6.ac, sd$6.ab, fragBuiltinParams$6);
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
    var x23 = $ct_T2__O__O__(new $c_T2(), result$6, $m_Ltrivalibs_graphics_shader_layouts$().O(p$5.h, result$6));
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
    var pl$6 = $m_Ltrivalibs_graphics_shader_layouts$().O(p$5.h, allBgls$6);
    var lightShade = new $c_Ltrivalibs_graphics_painter_Shade(id$6, module$6, vbl$6, bgls$12[0], panelBgl$6, pl$6, false, dict$11, dict$12);
    var build$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$7) => {
      var body$proxy17 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$10) => {
        var $x_47 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_46 = $m_sjsr_package$();
        var AssignTarget_this$6 = ctx$2$10.a2.L("uv");
        var value$proxy21 = ctx$2$10.a8.i("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_45 = AssignTarget_this$6.y;
        var $x_44 = value$proxy21.f;
        var AssignTarget_this$2$2 = ctx$2$10.a2.L("worldPos");
        var value$proxy23 = ctx$2$10.a8.i("position");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_43 = AssignTarget_this$2$2.y;
        var $x_42 = value$proxy23.f;
        var AssignTarget_this$3$1 = ctx$2$10.a2.L("edgeInfo");
        var value$proxy25 = ctx$2$10.a8.i("edgeInfo");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_41 = AssignTarget_this$3$1.y;
        var $x_40 = value$proxy25.f;
        var AssignTarget_this$4$1 = ctx$2$10.a2.L("tangent");
        var value$proxy27 = ctx$2$10.a8.i("tangent");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_39 = AssignTarget_this$4$1.y;
        var $x_38 = value$proxy27.f;
        var AssignTarget_this$5$1 = ctx$2$10.a2.cd;
        var value$proxy29 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().ck(ctx$2$10.go.i("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cg(), $m_Ltrivalibs_graphics_math_gpu_vec4$().a3(ctx$2$10.a8.i("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_47.ax(new $c_sjsr_WrappedVarArgs($x_46.d(new ($d_T.r().C)([(((("  " + $x_45) + " = ") + $x_44) + ";"), (((("  " + $x_43) + " = ") + $x_42) + ";"), (((("  " + $x_41) + " = ") + $x_40) + ";"), (((("  " + $x_39) + " = ") + $x_38) + ";"), (((("  " + AssignTarget_this$5$1.y) + " = ") + value$proxy29.f) + ";")]))));
      }));
      var ctx$7 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$6 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$6 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$6;
      try {
        var $x_48 = body$proxy17.g(ctx$7);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$6;
      }
      program$3$7.ar = $x_48;
      $m_sjs_js_ArrayOps$().B(reg$6.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$25) => ((data$3$8) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$25, data$3$8);
      }))(program$3$7)));
      var body$proxy19 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$11) => {
        var wp = ctx$2$11.N.i("worldPos");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var amb = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("amb");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var toEye = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("toEye");
        var $x_52 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_51 = $m_sjsr_package$();
        var tex$1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var uv$4 = ctx$2$11.N.i("uv");
        var sampler$2 = ctx$2$11.E.i("samp");
        var $x_50 = amb.C($m_Ltrivalibs_graphics_math_gpu_expr$package$().ae(tex$1, uv$4, sampler$2));
        var $x_49 = toEye.C($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().m8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().k2(ctx$2$11.E.i("eye"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$()));
        var AssignTarget_this$7 = ctx$2$11.aq.L("color");
        var value$proxy31 = $m_Ltrivalibs_graphics_math_gpu_vec4$().a3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().aW($m_Lsketches_rooms_columns_Columns$package$().rG($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().S(wp)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().rF(amb, $m_Lsketches_rooms_columns_Columns$package$().rE(wp, ctx$2$11.N.i("edgeInfo"), ctx$2$11.N.i("tangent"), toEye), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().S(wp))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_52.ax(new $c_sjsr_WrappedVarArgs($x_51.d(new ($d_T.r().C)([$x_50, $x_49, (((("  " + AssignTarget_this$7.y) + " = ") + value$proxy31.f) + ";")]))));
      }));
      var ctx$2$12 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$2$3;
      try {
        var $x_53 = body$proxy19.g(ctx$2$12);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$2$3;
      }
      program$3$7.ad = $x_53;
      $m_sjs_js_ArrayOps$().B(reg$2$3.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$26) => ((data$3$9) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$26, data$3$9);
      }))(program$3$7)));
    }));
    var program$7 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy7.g(program$7);
    var b$13 = program$7.ar;
    var b$14 = program$7.ad;
    var helperFns$proxy7 = program$7.at();
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
    var groupDecls$7 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["eye"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bc.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).M.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).M.t()], []))));
    var fragBuiltinParams$7 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$7 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$7, vertexInputStruct$7, vertexOutputStruct$7, fragmentOutputStruct$7, groupDecls$7, sd$7.ac, sd$7.ab, fragBuiltinParams$7);
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
    var x26 = $ct_T2__O__O__(new $c_T2(), result$7, $m_Ltrivalibs_graphics_shader_layouts$().O(p$5.h, result$7));
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
    var pl$7 = $m_Ltrivalibs_graphics_shader_layouts$().O(p$5.h, allBgls$7);
    var wallShade = new $c_Ltrivalibs_graphics_painter_Shade(id$7, module$7, vbl$7, bgls$14[0], panelBgl$7, pl$7, false, dict$13, dict$14);
    var build$proxy8 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$8) => {
      var body$proxy21 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$13) => {
        var $x_63 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_62 = $m_sjsr_package$();
        var AssignTarget_this$8 = ctx$2$13.a2.L("uv");
        var value$proxy33 = ctx$2$13.a8.i("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_61 = AssignTarget_this$8.y;
        var $x_60 = value$proxy33.f;
        var AssignTarget_this$2$3 = ctx$2$13.a2.L("worldPos");
        var value$proxy35 = ctx$2$13.a8.i("position");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_59 = AssignTarget_this$2$3.y;
        var $x_58 = value$proxy35.f;
        var AssignTarget_this$3$2 = ctx$2$13.a2.L("edgeInfo");
        var value$proxy37 = ctx$2$13.a8.i("edgeInfo");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_57 = AssignTarget_this$3$2.y;
        var $x_56 = value$proxy37.f;
        var AssignTarget_this$4$2 = ctx$2$13.a2.L("tangent");
        var value$proxy39 = ctx$2$13.a8.i("tangent");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_55 = AssignTarget_this$4$2.y;
        var $x_54 = value$proxy39.f;
        var AssignTarget_this$5$2 = ctx$2$13.a2.cd;
        var value$proxy41 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().ck(ctx$2$13.go.i("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cg(), $m_Ltrivalibs_graphics_math_gpu_vec4$().a3(ctx$2$13.a8.i("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_63.ax(new $c_sjsr_WrappedVarArgs($x_62.d(new ($d_T.r().C)([(((("  " + $x_61) + " = ") + $x_60) + ";"), (((("  " + $x_59) + " = ") + $x_58) + ";"), (((("  " + $x_57) + " = ") + $x_56) + ";"), (((("  " + $x_55) + " = ") + $x_54) + ";"), (((("  " + AssignTarget_this$5$2.y) + " = ") + value$proxy41.f) + ";")]))));
      }));
      var ctx$8 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$7 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$7 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$7;
      try {
        var $x_64 = body$proxy21.g(ctx$8);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$7;
      }
      program$3$8.ar = $x_64;
      $m_sjs_js_ArrayOps$().B(reg$7.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$27) => ((data$3$10) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$27, data$3$10);
      }))(program$3$8)));
      var body$proxy23 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$14) => {
        var wp$1 = ctx$2$14.N.i("worldPos");
        var rect = ctx$2$14.E.i("paintRect");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var amb$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("amb");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var toEye$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("toEye");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var light = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("light");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var bayPos = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("bayPos");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var paintUv = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("paintUv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var paint = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("paintColor");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var grain = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("grain");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var tint = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("tint");
        var $x_85 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_84 = $m_sjsr_package$();
        var tex$2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var uv$5 = ctx$2$14.N.i("uv");
        var sampler$3 = ctx$2$14.E.i("samp");
        var $x_83 = amb$1.C($m_Ltrivalibs_graphics_math_gpu_expr$package$().ae(tex$2, uv$5, sampler$3));
        var $x_82 = toEye$1.C($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().m8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().k2(ctx$2$14.E.i("eye"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), wp$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$()));
        var $x_81 = light.C($m_Lsketches_rooms_columns_Columns$package$().rF(amb$1, $m_Lsketches_rooms_columns_Columns$package$().rE(wp$1, ctx$2$14.N.i("edgeInfo"), ctx$2$14.N.i("tangent"), toEye$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().S(wp$1)));
        var $x_80 = bayPos.C($m_Ltrivalibs_graphics_math_gpu_vec2$().a3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().a5(ctx$2$14.N.i("edgeInfo")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().S(wp$1)));
        var $x_79 = tint.C($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().m5($m_Lsketches_rooms_columns_Columns$package$().rG($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().S(wp$1)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().qO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().S(wp$1)), $m_Lsketches_rooms_columns_Columns$package$().to(bayPos, ctx$2$14.E.i("frameRect"))));
        var $x_78 = paintUv.C($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().lV($m_Ltrivalibs_graphics_math_gpu_vec2$().a3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ip($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a5(bayPos), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().a5(rect)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ip($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().cl(rect), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ip($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().S(bayPos), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().S(rect)))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().mt(rect)));
        var $x_77 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$();
        var $x_76 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$();
        var tex$3 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "paint");
        var sampler$4 = ctx$2$14.E.i("samp");
        var $x_75 = paint.C($x_77.m6($x_76.m6($m_Ltrivalibs_graphics_math_gpu_expr$package$().ae(tex$3, paintUv, sampler$4), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Lsketches_rooms_columns_Columns$package$().qU($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a5(paintUv))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Lsketches_rooms_columns_Columns$package$().qU($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().S(paintUv))));
        var $x_74 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
        var $x_73 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
        var $x_72 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
        var $x_71 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$();
        var tex$4 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "grain");
        var uv$6 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().lG($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().jI(bayPos, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), ctx$2$14.E.i("grainOffset")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Lsketches_rooms_columns_Columns$package$().bX);
        var sampler$5 = ctx$2$14.E.i("tileSamp");
        var e$proxy7 = $x_74.T($x_73.bA($x_72.T($x_71.a5($m_Ltrivalibs_graphics_math_gpu_expr$package$().ae(tex$4, uv$6, sampler$5)), 2.0), 1.0), $m_Lsketches_rooms_columns_Columns$package$().nd);
        var L$proxy17 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aN();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_70 = grain.C(L$proxy17.aC((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " + ") + e$proxy7.f) + ")")));
        var AssignTarget_this$9 = ctx$2$14.aq.L("color");
        var $x_69 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
        var $x_68 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_67 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_66 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().aW(tint, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), light);
        var $x_65 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
        var e$proxy8 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().cl(paint), grain);
        var L$proxy19 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aN();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var value$proxy43 = $x_69.a3($x_68.lJ($x_67.aW($x_66, $x_65, L$proxy19.aC((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + e$proxy8.f) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().aW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().aW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gB(paint), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), grain), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), light)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_85.ax(new $c_sjsr_WrappedVarArgs($x_84.d(new ($d_T.r().C)([$x_83, $x_82, $x_81, $x_80, $x_79, $x_78, $x_75, $x_70, (((("  " + AssignTarget_this$9.y) + " = ") + value$proxy43.f) + ";")]))));
      }));
      var ctx$2$15 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$4 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$4 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$2$4;
      try {
        var $x_86 = body$proxy23.g(ctx$2$15);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$2$4;
      }
      program$3$8.ad = $x_86;
      $m_sjs_js_ArrayOps$().B(reg$2$4.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$28) => ((data$3$11) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$28, data$3$11);
      }))(program$3$8)));
    }));
    var program$8 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy8.g(program$8);
    var b$15 = program$8.ar;
    var b$16 = program$8.ad;
    var helperFns$proxy8 = program$8.at();
    var id$8 = p$5.q;
    p$5.q = ((1 + p$5.q) | 0);
    var names$22 = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["eye"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], $m_sjs_js_ArrayOpsCommon$().a(["tileSamp"], $m_sjs_js_ArrayOpsCommon$().a(["paintRect"], $m_sjs_js_ArrayOpsCommon$().a(["frameRect"], $m_sjs_js_ArrayOpsCommon$().a(["grainOffset"], [])))))));
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
    var groupDecls$8 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["eye"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], $m_sjs_js_ArrayOpsCommon$().a(["tileSamp"], $m_sjs_js_ArrayOpsCommon$().a(["paintRect"], $m_sjs_js_ArrayOpsCommon$().a(["frameRect"], $m_sjs_js_ArrayOpsCommon$().a(["grainOffset"], []))))))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bc.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).M.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).M.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).M.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$()).M.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$()).M.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).M.t()], []))))))));
    var fragBuiltinParams$8 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$8 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$8, vertexInputStruct$8, vertexOutputStruct$8, fragmentOutputStruct$8, groupDecls$8, sd$8.ac, sd$8.ab, fragBuiltinParams$8);
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
    var descriptors$8 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 2), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 3), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 4), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 5), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 6), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])))))))], []);
    var result$8 = [];
    $m_sjs_js_ArrayOps$().B(descriptors$8, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$8) => ((entries$2$8) => (result$8.push(Painter_this$8.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$8)])))))) | 0)))(p$5)));
    var x29 = $ct_T2__O__O__(new $c_T2(), result$8, $m_Ltrivalibs_graphics_shader_layouts$().O(p$5.h, result$8));
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
    var pl$8 = $m_Ltrivalibs_graphics_shader_layouts$().O(p$5.h, allBgls$8);
    var bayShade = new $c_Ltrivalibs_graphics_painter_Shade(id$8, module$8, vbl$8, bgls$16[0], panelBgl$8, pl$8, false, dict$15, dict$16);
    var build$proxy9 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$9) => {
      var body$proxy25 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$16) => {
        var $x_92 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_91 = $m_sjsr_package$();
        var AssignTarget_this$10 = ctx$2$16.a2.L("uv");
        var value$proxy45 = ctx$2$16.a8.i("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_90 = AssignTarget_this$10.y;
        var $x_89 = value$proxy45.f;
        var AssignTarget_this$2$4 = ctx$2$16.a2.L("worldPos");
        var value$proxy47 = ctx$2$16.a8.i("position");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_88 = AssignTarget_this$2$4.y;
        var $x_87 = value$proxy47.f;
        var AssignTarget_this$3$3 = ctx$2$16.a2.cd;
        var value$proxy49 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().ck(ctx$2$16.go.i("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cg(), $m_Ltrivalibs_graphics_math_gpu_vec4$().a3(ctx$2$16.a8.i("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_92.ax(new $c_sjsr_WrappedVarArgs($x_91.d(new ($d_T.r().C)([(((("  " + $x_90) + " = ") + $x_89) + ";"), (((("  " + $x_88) + " = ") + $x_87) + ";"), (((("  " + AssignTarget_this$3$3.y) + " = ") + value$proxy49.f) + ";")]))));
      }));
      var ctx$9 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$8 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$8 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$8;
      try {
        var $x_93 = body$proxy25.g(ctx$9);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$8;
      }
      program$3$9.ar = $x_93;
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
        var $x_110 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_109 = $m_sjsr_package$();
        var tex$5 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var uv$7 = ctx$2$17.N.i("uv");
        var sampler$6 = ctx$2$17.E.i("samp");
        var $x_108 = amb$2.C($m_Ltrivalibs_graphics_math_gpu_expr$package$().ae(tex$5, uv$7, sampler$6));
        var $x_107 = fromArris.C($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bA(atlas.v7(ctx$2$17.N.i("uv")), $m_Lsketches_rooms_columns_Columns$package$().aF), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0)));
        var $x_106 = sideLift.C($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().qC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bA($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().S(ctx$2$17.N.i("worldPos")), $m_Lsketches_rooms_columns_Columns$package$().aS), $m_Lsketches_rooms_columns_Columns$package$().hI)));
        var $x_105 = lit.C($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gy($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().S(amb$2), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().a5(amb$2), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().aO(fromArris, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g((+$m_Lsketches_rooms_columns_Columns$package$().bW.aZ)))));
        var AssignTarget_this$11 = ctx$2$17.aq.L("color");
        var $x_104 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
        var $x_103 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_102 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_101 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().m3($m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().hz($m_Lsketches_rooms_columns_Columns$package$().ko), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().n0, sideLift);
        var $x_100 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_99 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().qt($m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().hz($m_Lsketches_rooms_columns_Columns$package$().n4), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_rooms_columns_Columns$package$().kn);
        var e$proxy9 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().aO(fromArris, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g($m_Lsketches_rooms_columns_Columns$package$().mZ));
        var L$proxy21 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aN();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_98 = $x_102.m5($x_101, $x_100, $x_99, L$proxy21.aC((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + e$proxy9.f) + ")")));
        var $x_97 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_96 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
        var $x_95 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
        var $x_94 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
        var L$proxy23 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aN();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var value$proxy51 = $x_104.a3($x_103.aW($x_98, $x_97, $x_96.bB(lit, $x_95.T($x_94.aM(L$proxy23.aC((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + lit.f) + ")")), sideLift), $m_Lsketches_rooms_columns_Columns$package$().n1))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_110.ax(new $c_sjsr_WrappedVarArgs($x_109.d(new ($d_T.r().C)([$x_108, $x_107, $x_106, $x_105, (((("  " + AssignTarget_this$11.y) + " = ") + value$proxy51.f) + ";")]))));
      }));
      var ctx$2$18 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$5 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$5 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$2$5;
      try {
        var $x_111 = body$proxy27.g(ctx$2$18);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$2$5;
      }
      program$3$9.ad = $x_111;
      $m_sjs_js_ArrayOps$().B(reg$2$5.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$30) => ((data$3$13) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$30, data$3$13);
      }))(program$3$9)));
    }));
    var program$9 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy9.g(program$9);
    var b$18 = program$9.ar;
    var b$19 = program$9.ad;
    var helperFns$proxy9 = program$9.at();
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
    var groupDecls$9 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bc.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).M.t()], [])));
    var fragBuiltinParams$9 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$9 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$9, vertexInputStruct$9, vertexOutputStruct$9, fragmentOutputStruct$9, groupDecls$9, sd$9.ac, sd$9.ab, fragBuiltinParams$9);
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
    var x32 = $ct_T2__O__O__(new $c_T2(), result$9, $m_Ltrivalibs_graphics_shader_layouts$().O(p$5.h, result$9));
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
    var pl$9 = $m_Ltrivalibs_graphics_shader_layouts$().O(p$5.h, allBgls$9);
    var balkShade = new $c_Ltrivalibs_graphics_painter_Shade(id$9, module$9, vbl$9, bgls$18[0], panelBgl$9, pl$9, false, dict$17, dict$18);
    var build$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$10) => {
      var body$proxy29 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$19) => {
        var $x_117 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_116 = $m_sjsr_package$();
        var AssignTarget_this$12 = ctx$2$19.a2.L("uv");
        var value$proxy53 = ctx$2$19.a8.i("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_115 = AssignTarget_this$12.y;
        var $x_114 = value$proxy53.f;
        var AssignTarget_this$2$5 = ctx$2$19.a2.L("worldPos");
        var value$proxy55 = ctx$2$19.a8.i("position");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_113 = AssignTarget_this$2$5.y;
        var $x_112 = value$proxy55.f;
        var AssignTarget_this$3$4 = ctx$2$19.a2.cd;
        var value$proxy57 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().ck(ctx$2$19.go.i("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cg(), $m_Ltrivalibs_graphics_math_gpu_vec4$().a3(ctx$2$19.a8.i("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_117.ax(new $c_sjsr_WrappedVarArgs($x_116.d(new ($d_T.r().C)([(((("  " + $x_115) + " = ") + $x_114) + ";"), (((("  " + $x_113) + " = ") + $x_112) + ";"), (((("  " + AssignTarget_this$3$4.y) + " = ") + value$proxy57.f) + ";")]))));
      }));
      var ctx$10 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$9 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$9 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$9;
      try {
        var $x_118 = body$proxy29.g(ctx$10);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$9;
      }
      program$3$10.ar = $x_118;
      $m_sjs_js_ArrayOps$().B(reg$9.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$31) => ((data$3$14) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$31, data$3$14);
      }))(program$3$10)));
      var body$proxy31 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$20) => {
        var wp$3 = ctx$2$20.N.i("worldPos");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var amb$3 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("amb");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var dist = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("dist");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var base = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("base");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var refl = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("refl");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var reflMix = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("reflMix");
        var $x_136 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_135 = $m_sjsr_package$();
        var tex$6 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var uv$8 = ctx$2$20.N.i("uv");
        var sampler$7 = ctx$2$20.E.i("samp");
        var $x_134 = amb$3.C($m_Ltrivalibs_graphics_math_gpu_expr$package$().ae(tex$6, uv$8, sampler$7));
        var $x_133 = dist.C($m_Lsketches_rooms_columns_Columns$package$().tu($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().k5(wp$3)));
        var $x_132 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_131 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_130 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_129 = $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().hz($m_Lsketches_rooms_columns_Columns$package$().n9);
        var $x_128 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_127 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$();
        var tex$7 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "slabTex");
        var uv$9 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().lG($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().k5(wp$3), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), ($m_Lsketches_rooms_columns_Columns$package$().j4 * $m_Lsketches_rooms_columns_Columns$package$().j5));
        var sampler$8 = ctx$2$20.E.i("tileSamp");
        var $x_126 = base.C($x_132.aW($x_131.aW($x_130.aW($x_129, $x_128, $x_127.a5($m_Ltrivalibs_graphics_math_gpu_expr$package$().ae(tex$7, uv$9, sampler$8))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gy($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().S(amb$3), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().a5(amb$3), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().aO(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g((+$m_Lsketches_rooms_columns_Columns$package$().bW.aP))))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), ($m_Lsketches_rooms_columns_Columns$package$(), $m_Lsketchlib_shaders_room_Grime$package$().qR(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().qM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().gC(amb$3)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().cl(amb$3), $m_Lsketches_rooms_columns_Columns$package$().kg, $m_Lsketches_rooms_columns_Columns$package$().ke, $m_Lsketches_rooms_columns_Columns$package$().kd, $m_Lsketches_rooms_columns_Columns$package$().kf))));
        var tex$8 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "reflTex");
        var uv$10 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().lV($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cj(ctx$2$20.ho), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), ctx$2$20.E.i("res"));
        var sampler$9 = ctx$2$20.E.i("samp");
        var $x_125 = refl.C($m_Ltrivalibs_graphics_math_gpu_expr$package$().ae(tex$8, uv$10, sampler$9));
        var $x_124 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
        var e$proxy10 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().cl(refl), 0.4);
        var L$proxy25 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aN();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_123 = reflMix.C($x_124.T(L$proxy25.aC((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + e$proxy10.f) + ")")), $m_Lsketches_rooms_columns_Columns$package$().nx));
        var AssignTarget_this$13 = ctx$2$20.aq.L("color");
        var $x_122 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
        var $x_121 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_120 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_119 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
        var L$proxy27 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aN();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var value$proxy59 = $x_122.a3($x_121.lJ($x_120.aW(base, $x_119, L$proxy27.aC((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + reflMix.f) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().aW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gB(refl), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), reflMix)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_136.ax(new $c_sjsr_WrappedVarArgs($x_135.d(new ($d_T.r().C)([$x_134, $x_133, $x_126, $x_125, $x_123, (((("  " + AssignTarget_this$13.y) + " = ") + value$proxy59.f) + ";")]))));
      }));
      var ctx$2$21 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$6 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$6 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$2$6;
      try {
        var $x_137 = body$proxy31.g(ctx$2$21);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$2$6;
      }
      program$3$10.ad = $x_137;
      $m_sjs_js_ArrayOps$().B(reg$2$6.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$32) => ((data$3$15) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$32, data$3$15);
      }))(program$3$10)));
    }));
    var program$10 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy10.g(program$10);
    var b$21 = program$10.ar;
    var b$22 = program$10.ad;
    var helperFns$proxy10 = program$10.at();
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
    var groupDecls$10 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], $m_sjs_js_ArrayOpsCommon$().a(["tileSamp"], $m_sjs_js_ArrayOpsCommon$().a(["res"], [])))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bc.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).M.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).M.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).M.t()], [])))));
    var fragBuiltinParams$10 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$10 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$10, vertexInputStruct$10, vertexOutputStruct$10, fragmentOutputStruct$10, groupDecls$10, sd$10.ac, sd$10.ab, fragBuiltinParams$10);
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
    var x35 = $ct_T2__O__O__(new $c_T2(), result$10, $m_Ltrivalibs_graphics_shader_layouts$().O(p$5.h, result$10));
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
    var pl$10 = $m_Ltrivalibs_graphics_shader_layouts$().O(p$5.h, allBgls$10);
    var floorShade = new $c_Ltrivalibs_graphics_painter_Shade(id$10, module$10, vbl$10, bgls$20[0], panelBgl$10, pl$10, false, dict$19, dict$20);
    var Bindable_this = p$5.gz(lightForm, lightShade, "none", (void 0));
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", lightTex);
    var \u03b4scrutinee998 = e1$proxy2.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, (Bindable_this.Y.K.samp | 0), \u03b4scrutinee998);
    var \u03b4scrutinee1014 = e2$proxy1.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this, (Bindable_this.Y.aB.tex | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee1014));
    var Bindable_this$4 = p$5.gz(balkForm, balkShade, "none", (void 0));
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", balkTex);
    var \u03b4scrutinee1020 = e1$proxy3.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$4, (Bindable_this$4.Y.K.samp | 0), \u03b4scrutinee1020);
    var \u03b4scrutinee1036 = e2$proxy2.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$4, (Bindable_this$4.Y.aB.tex | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee1036));
    var aboveGround = [Bindable_this, Bindable_this$4];
    new $c_sci_Range$Exclusive(0, (wallStrips.length | 0), 1).bD(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$14) => ((v1$2) => {
      var i$1 = (v1$2 | 0);
      var strip = wallStrips[i$1];
      var size = $m_Lsketches_rooms_columns_Columns$package$().k3($m_Lsketches_rooms_columns_Columns$package$().rz(strip), $m_Lsketches_rooms_columns_Columns$package$().aS, $m_Lsketches_rooms_columns_Columns$package$().g4);
      var tex$9 = $p_Lsketches_rooms_columns_Columns$package$__bakeAmbience$1__T4__Lsketchlib_utils_bake_TextureBaker__T__Ltrivalibs_graphics_painter_Form__I__I__Ltrivalibs_graphics_painter_Panel(this, ambienceClear, ambienceBaker, ("wall strip " + i$1), $p_Lsketches_rooms_columns_Columns$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$14, $m_Lsketches_rooms_columns_Columns$package$().rv(strip, new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((pos$3, uv$3$1, f$3, fromLeft$3) => {
        var fromLeft$2 = (+fromLeft$3);
        return $m_Lsketches_rooms_columns_Columns$package$().sj(pos$3, uv$3$1, f$3, fromLeft$2);
      })))), (size.a0() | 0), (size.a1() | 0));
      var renderQuads = $m_Lsketches_rooms_columns_Columns$package$().rv(strip, new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((pos$3$1, uv$3$2, f$3$1, fromLeft$3$1) => {
        var fromLeft$2$1 = (+fromLeft$3$1);
        return $m_Lsketches_rooms_columns_Columns$package$().uL(pos$3$1, uv$3$2, f$3$1, fromLeft$2$1);
      })));
      var plainQuads = [];
      new $c_sci_Range$Exclusive(0, (strip.length | 0), 1).bD(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((j$3) => {
        var j$2 = (j$3 | 0);
        var face = strip[j$2];
        if ($p_Lsketches_rooms_columns_Columns$package$__isBay$1__Lsketches_rooms_columns_Face__Z(this, face)) {
          var painting = $p_Lsketches_rooms_columns_Columns$package$__paintBay$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__sr_IntRef__sr_ObjectRef__Lsketches_rooms_columns_RoomPalette__Lsketchlib_utils_room_Wall__T3(this, p$14, paintShade, baysInGroup, group, palette, face.b2);
          var Bindable_this$1 = p$14.gz($p_Lsketches_rooms_columns_Columns$package$__wallForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$14, [renderQuads[j$2]]), bayShade, "none", (void 0));
          var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
          var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tileSamp", tileSampler);
          var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("eye", eyePos);
          var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("paintRect", painting.aX);
          var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("frameRect", painting.b5);
          var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("grainOffset", new $c_Ltrivalibs_graphics_math_cpu_Vec2(($m_Ltrivalibs_utils_random_random$package$().iQ() * $m_Lsketches_rooms_columns_Columns$package$().bX), ($m_Ltrivalibs_utils_random_random$package$().iQ() * $m_Lsketches_rooms_columns_Columns$package$().bX)));
          var \u03b4scrutinee1044 = e1$proxy4.s;
          $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$1, (Bindable_this$1.Y.K.samp | 0), \u03b4scrutinee1044);
          var \u03b4scrutinee1062 = e2$proxy3.s;
          $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$1, (Bindable_this$1.Y.K.tileSamp | 0), \u03b4scrutinee1062);
          var \u03b4scrutinee1078 = e3$proxy1.s;
          $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$1, (Bindable_this$1.Y.K.eye | 0), \u03b4scrutinee1078);
          var \u03b4scrutinee1096 = e4$proxy1.s;
          var idx$7 = (Bindable_this$1.Y.K.paintRect | 0);
          var existing = ((idx$7 < (Bindable_this$1.by.length | 0)) ? Bindable_this$1.by[idx$7] : null);
          var device$proxy2 = Bindable_this$1.id.h;
          if ((existing !== null)) {
            existing.J.D(existing.o, \u03b4scrutinee1096);
            var $x_142 = existing.I.queue;
            var $x_141 = existing.G;
            var s$proxy6 = existing.o;
            var $x_140 = s$proxy6.dv.buffer;
            $x_142.writeBuffer($x_141, 0.0, $x_140);
            var $x_139 = existing;
          } else {
            var uv$11 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$();
            var buffer$1 = new ArrayBuffer(16);
            var arr$proxy17 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$1), 1);
            var b$23 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy17.dv, 0), device$proxy2, uv$11);
            b$23.J.D(b$23.o, \u03b4scrutinee1096);
            var $x_145 = b$23.I.queue;
            var $x_144 = b$23.G;
            var s$proxy7 = b$23.o;
            var $x_143 = s$proxy7.dv.buffer;
            $x_145.writeBuffer($x_144, 0.0, $x_143);
            var $x_139 = b$23;
          }
          $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$1, idx$7, $x_139);
          var \u03b4scrutinee1135 = e5$proxy1.s;
          var idx$2$1 = (Bindable_this$1.Y.K.frameRect | 0);
          var existing$2 = ((idx$2$1 < (Bindable_this$1.by.length | 0)) ? Bindable_this$1.by[idx$2$1] : null);
          var device$proxy3 = Bindable_this$1.id.h;
          if ((existing$2 !== null)) {
            existing$2.J.D(existing$2.o, \u03b4scrutinee1135);
            var $x_149 = existing$2.I.queue;
            var $x_148 = existing$2.G;
            var s$proxy8 = existing$2.o;
            var $x_147 = s$proxy8.dv.buffer;
            $x_149.writeBuffer($x_148, 0.0, $x_147);
            var $x_146 = existing$2;
          } else {
            var uv$2$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$();
            var buffer$2$1 = new ArrayBuffer(16);
            var arr$proxy18 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2$1), 1);
            var b$2$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy18.dv, 0), device$proxy3, uv$2$2);
            b$2$1.J.D(b$2$1.o, \u03b4scrutinee1135);
            var $x_152 = b$2$1.I.queue;
            var $x_151 = b$2$1.G;
            var s$proxy9 = b$2$1.o;
            var $x_150 = s$proxy9.dv.buffer;
            $x_152.writeBuffer($x_151, 0.0, $x_150);
            var $x_146 = b$2$1;
          }
          $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$1, idx$2$1, $x_146);
          var \u03b4scrutinee1180 = e6$proxy1.s;
          var idx$3$1 = (Bindable_this$1.Y.K.grainOffset | 0);
          var existing$3 = ((idx$3$1 < (Bindable_this$1.by.length | 0)) ? Bindable_this$1.by[idx$3$1] : null);
          var device$proxy4 = Bindable_this$1.id.h;
          if ((existing$3 !== null)) {
            existing$3.J.D(existing$3.o, \u03b4scrutinee1180);
            var $x_156 = existing$3.I.queue;
            var $x_155 = existing$3.G;
            var s$proxy10 = existing$3.o;
            var $x_154 = s$proxy10.dv.buffer;
            $x_156.writeBuffer($x_155, 0.0, $x_154);
            var $x_153 = existing$3;
          } else {
            var uv$3$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$();
            var buffer$3 = new ArrayBuffer(8);
            var arr$proxy19 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
            var b$3$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy19.dv, 0), device$proxy4, uv$3$3);
            b$3$1.J.D(b$3$1.o, \u03b4scrutinee1180);
            var $x_159 = b$3$1.I.queue;
            var $x_158 = b$3$1.G;
            var s$proxy11 = b$3$1.o;
            var $x_157 = s$proxy11.dv.buffer;
            $x_159.writeBuffer($x_158, 0.0, $x_157);
            var $x_153 = b$3$1;
          }
          $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$1, idx$3$1, $x_153);
          var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", tex$9);
          var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("paint", painting.aD);
          var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("grain", grainTex);
          var \u03b4scrutinee1233 = e1$proxy5.s;
          $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$1, (Bindable_this$1.Y.aB.tex | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee1233));
          var \u03b4scrutinee1255 = e2$proxy4.s;
          $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$1, (Bindable_this$1.Y.aB.paint | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee1255));
          var \u03b4scrutinee1279 = e3$proxy2.s;
          $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$1, (Bindable_this$1.Y.aB.grain | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee1279));
          var $x_138 = aboveGround.push(Bindable_this$1);
          return ($x_138 | 0);
        } else {
          return (plainQuads.push(renderQuads[j$2]) | 0);
        }
      })));
      if (((plainQuads.length | 0) > 0)) {
        var Bindable_this$2 = p$14.gz($p_Lsketches_rooms_columns_Columns$package$__wallForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$14, plainQuads), wallShade, "none", (void 0));
        var e1$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
        var e2$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("eye", eyePos);
        var e3$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", tex$9);
        var \u03b4scrutinee1287 = e1$proxy6.s;
        $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$2, (Bindable_this$2.Y.K.samp | 0), \u03b4scrutinee1287);
        var \u03b4scrutinee1301 = e2$proxy5.s;
        $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$2, (Bindable_this$2.Y.K.eye | 0), \u03b4scrutinee1301);
        var \u03b4scrutinee1319 = e3$proxy3.s;
        $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$2, (Bindable_this$2.Y.aB.tex | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee1319));
        aboveGround.push(Bindable_this$2);
      }
    }))(p$5)));
    var clearColor$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec4(0.9, 0.9, 0.9, 0.0);
    var mirror$1 = $m_Ltrivalibs_graphics_geometry_Plane$().oa;
    var mirror = $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().sc(p$5, cam, aboveGround, "vp", $m_Lsketches_rooms_columns_Columns$package$().h2, mirror$1, 6.0, 3.0, 0.0, 0.6, 0.5, 3.0, clearColor$4);
    var sceneShapes = [];
    $m_sjs_js_ArrayOps$().B(aboveGround, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((s$2$1) => (sceneShapes.push(s$2$1) | 0))));
    var floorW = ((+bounds.aY) - (+bounds.aP));
    var floorD = ((+bounds.aZ) - (+bounds.aQ));
    var a$5 = ((floorW * $m_Lsketches_rooms_columns_Columns$package$().g4) / $m_Lsketches_rooms_columns_Columns$package$().g8);
    var piecesX = $doubleToInt((+Math.ceil(a$5)));
    var a$6 = ((floorD * $m_Lsketches_rooms_columns_Columns$package$().g4) / $m_Lsketches_rooms_columns_Columns$package$().g8);
    var piecesZ = $doubleToInt((+Math.ceil(a$6)));
    new $c_sci_Range$Exclusive(0, piecesX, 1).bD(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$16) => ((v1$2$1) => {
      var ix = (v1$2$1 | 0);
      new $c_sci_Range$Exclusive(0, piecesZ, 1).bD(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((iz$3) => {
        var iz$2 = (iz$3 | 0);
        var x$proxy87 = new $c_T4(((+bounds.aP) + ((floorW * ix) / piecesX)), ((+bounds.aQ) + ((floorD * iz$2) / piecesZ)), ((+bounds.aP) + ((floorW * ((1 + ix) | 0)) / piecesX)), ((+bounds.aQ) + ((floorD * ((1 + iz$2) | 0)) / piecesZ)));
        var pieceForm = $p_Lsketches_rooms_columns_Columns$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$16, [$m_Lsketchlib_utils_room_Surfaces$package$().jX(x$proxy87, 0.0, false, 0.0)]);
        var size$1 = $m_Lsketches_rooms_columns_Columns$package$().k3((floorW / piecesX), (floorD / piecesZ), $m_Lsketches_rooms_columns_Columns$package$().g4);
        var tex$10 = $p_Lsketches_rooms_columns_Columns$package$__bakeAmbience$1__T4__Lsketchlib_utils_bake_TextureBaker__T__Ltrivalibs_graphics_painter_Form__I__I__Ltrivalibs_graphics_painter_Panel(this, ambienceClear, ambienceBaker, ((("floor " + ix) + ",") + iz$2), pieceForm, (size$1.a0() | 0), (size$1.a1() | 0));
        var Bindable_this$3 = p$16.gz(pieceForm, floorShade, "front", (void 0));
        var e1$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
        var e2$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("tileSamp", tileSampler);
        var e3$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", tex$10);
        var e4$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("slabTex", slabTex);
        var e5$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("reflTex", mirror.o0);
        var e6$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("res", canvasRes);
        var \u03b4scrutinee1325 = e1$proxy7.s;
        $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$3, (Bindable_this$3.Y.K.samp | 0), \u03b4scrutinee1325);
        var \u03b4scrutinee1339 = e2$proxy6.s;
        $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$3, (Bindable_this$3.Y.K.tileSamp | 0), \u03b4scrutinee1339);
        var \u03b4scrutinee1361 = e3$proxy4.s;
        $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$3, (Bindable_this$3.Y.aB.tex | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee1361));
        var \u03b4scrutinee1377 = e4$proxy2.s;
        $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$3, (Bindable_this$3.Y.aB.slabTex | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee1377));
        var \u03b4scrutinee1395 = e5$proxy2.s;
        $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$3, (Bindable_this$3.Y.aB.reflTex | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee1395));
        var \u03b4scrutinee1405 = e6$proxy2.s;
        $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$3, (Bindable_this$3.Y.K.res | 0), \u03b4scrutinee1405);
        var $x_160 = sceneShapes.push(Bindable_this$3);
        return ($x_160 | 0);
      })));
    }))(p$5)));
    var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy3 = ul$proxy3.aG;
    var buffer$3$1 = new ArrayBuffer(64);
    var arr$proxy20 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3$1), 1);
    var sceneVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy20.dv, 0), p$5.h, uv$proxy3);
    var clearColor$5 = $m_Ltrivalibs_graphics_math_cpu_Vec4$().m1().g(new $c_T4(0.9, 0.95, 0.99, 1.0));
    var Panel_this = p$5.ch((void 0), (void 0), clearColor$5, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), sceneShapes, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    var e1$proxy8 = new $c_Ltrivalibs_graphics_painter_BindPair("vp", sceneVp);
    var \u03b4scrutinee1416 = e1$proxy8.s;
    var dict$proxy1 = Panel_this.i8;
    dict$proxy1.vp = \u03b4scrutinee1416;
    var bloom = $m_Lsketchlib_utils_bloom_Bloom$().sb(p$5, Panel_this, $m_Lsketches_rooms_columns_Columns$package$().n3, 1.0, 3.0, 5, 0.9, 1.5);
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().tp(p$5.sv(), true, 400.0, 5.0, true, (void 0), 90.0, 50.0);
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, input, 2.0, $m_Lsketches_rooms_columns_Columns$package$().nC);
    p$5.ui(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2$2, v2$2) => {
      var w = (+v1$2$2);
      var h = (+v2$2);
      var aspect$2 = (w / h);
      var fov$1 = cam.bL;
      var near$1 = cam.hn;
      var far$1 = cam.hm;
      var rotH$2 = cam.b3;
      var rotV$2 = cam.bM;
      var pos$2 = cam.aj;
      cam.mc(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$2);
      var value$proxy66 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(w, h);
      canvasRes.J.D(canvasRes.o, value$proxy66);
      var $x_163 = canvasRes.I.queue;
      var $x_162 = canvasRes.G;
      var s$proxy12 = canvasRes.o;
      var $x_161 = s$proxy12.dv.buffer;
      $x_163.writeBuffer($x_162, 0.0, $x_161);
      mirror.uO(w, h);
    })));
    $m_Ltrivalibs_utils_animation_animate$package$().s5(((p$17) => ((arg1$2) => {
      var tpf = (+arg1$2);
      input.gA(tpf);
      controller.gA(tpf);
      cam.aj = $m_Lsketchlib_utils_room_Confine$package$().sB(floorBnd, cam.aj, $m_Lsketches_rooms_columns_Columns$package$().km, ($m_Ltrivalibs_dev_dev$package$().qI() ? cam.aj.A : $m_Lsketches_rooms_columns_Columns$package$().j2));
      var vp = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().hx(), cam.jD, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.rD());
      sceneVp.J.D(sceneVp.o, vp);
      var $x_166 = sceneVp.I.queue;
      var $x_165 = sceneVp.G;
      var s$proxy13 = sceneVp.o;
      var $x_164 = s$proxy13.dv.buffer;
      $x_166.writeBuffer($x_165, 0.0, $x_164);
      var value$proxy67 = cam.aj;
      eyePos.J.D(eyePos.o, value$proxy67);
      var $x_169 = eyePos.I.queue;
      var $x_168 = eyePos.G;
      var s$proxy14 = eyePos.o;
      var $x_167 = s$proxy14.dv.buffer;
      $x_169.writeBuffer($x_168, 0.0, $x_167);
      mirror.um(vp);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$17, Panel_this);
      bloom.un();
      p$17.uZ(bloom.nU);
    }))(p$5));
  })));
});
var $d_Lsketches_rooms_columns_Columns$package$ = new $TypeData().i($c_Lsketches_rooms_columns_Columns$package$, "sketches.rooms.columns.Columns$package$", ({
  dk: 1
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
  this.hJ = null;
  this.j6 = null;
  this.hJ = quad;
  this.j6 = hsv;
}
$p = $c_Lsketches_rooms_columns_PaintedQuad.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_columns_PaintedQuad;
/** @constructor */
function $h_Lsketches_rooms_columns_PaintedQuad() {
}
$h_Lsketches_rooms_columns_PaintedQuad.prototype = $p;
var $d_Lsketches_rooms_columns_PaintedQuad = new $TypeData().i($c_Lsketches_rooms_columns_PaintedQuad, "sketches.rooms.columns.PaintedQuad", ({
  dl: 1
}));
/** @constructor */
function $c_Lsketches_rooms_columns_PillarGroup(choices) {
  this.nF = null;
  this.nF = choices;
}
$p = $c_Lsketches_rooms_columns_PillarGroup.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_columns_PillarGroup;
/** @constructor */
function $h_Lsketches_rooms_columns_PillarGroup() {
}
$h_Lsketches_rooms_columns_PillarGroup.prototype = $p;
var $d_Lsketches_rooms_columns_PillarGroup = new $TypeData().i($c_Lsketches_rooms_columns_PillarGroup, "sketches.rooms.columns.PillarGroup", ({
  dm: 1
}));
function $p_Lsketches_rooms_columns_PillarPainting__randomOffset__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, scale) {
  return $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().bO(), new $c_Ltrivalibs_graphics_math_cpu_Vec2(((2.0 * $m_Ltrivalibs_utils_random_random$package$().iQ()) - 1.0), ((2.0 * $m_Ltrivalibs_utils_random_random$package$().iQ()) - 1.0)), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), (scale * $thiz.j9));
}
function $p_Lsketches_rooms_columns_PillarPainting__segmentSpan__T2($thiz) {
  var segmentWidth = ($thiz.j9 * (1.0 + ($m_Ltrivalibs_utils_random_random$package$().hy() * $m_Lsketches_rooms_columns_Pillars$package$().kt)));
  var center = ($thiz.j9 * (0.5 + ($m_Ltrivalibs_utils_random_random$package$().hy() * $m_Lsketches_rooms_columns_Pillars$package$().ks)));
  return $ct_T2__O__O__(new $c_T2(), (center - (0.5 * segmentWidth)), (center + (0.5 * segmentWidth)));
}
function $p_Lsketches_rooms_columns_PillarPainting__referenceBlock__T2__D__D__sjs_js_Array($thiz, span, bottom, segment) {
  var gap = ($m_Lsketches_rooms_columns_Pillars$package$().nN * $thiz.nG);
  var top = ((bottom + segment) - gap);
  var low = (bottom + gap);
  return $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().gt($p_Lsketches_rooms_columns_PillarPainting__corner$1__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, (+span.a0()), top), $p_Lsketches_rooms_columns_PillarPainting__corner$1__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, (+span.a0()), low), $p_Lsketches_rooms_columns_PillarPainting__corner$1__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, (+span.a1()), low), $p_Lsketches_rooms_columns_PillarPainting__corner$1__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, (+span.a1()), top));
}
function $p_Lsketches_rooms_columns_PillarPainting__instanceOf__sjs_js_Array__sjs_js_Array($thiz, reference) {
  var shift = $p_Lsketches_rooms_columns_PillarPainting__randomOffset__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, $m_Lsketches_rooms_columns_Pillars$package$().kp);
  return $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().gt($p_Lsketches_rooms_columns_PillarPainting__corner$2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2($thiz, shift, $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().mh(reference)), $p_Lsketches_rooms_columns_PillarPainting__corner$2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2($thiz, shift, $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().lP(reference)), $p_Lsketches_rooms_columns_PillarPainting__corner$2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2($thiz, shift, $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().lQ(reference)), $p_Lsketches_rooms_columns_PillarPainting__corner$2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2($thiz, shift, $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().mj(reference)));
}
function $p_Lsketches_rooms_columns_PillarPainting__variedColor__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3($thiz, hsv) {
  var x = (hsv.w + ($m_Ltrivalibs_utils_random_random$package$().hy() * $m_Lsketches_rooms_columns_Pillars$package$().nI));
  var p$proxy4 = (hsv.A + ($m_Ltrivalibs_utils_random_random$package$().hy() * $m_Lsketches_rooms_columns_Pillars$package$().nM));
  var y = ((p$proxy4 < 0.0) ? 0.0 : ((p$proxy4 > 1.0) ? 1.0 : p$proxy4));
  var p$proxy5 = (hsv.u + ($m_Ltrivalibs_utils_random_random$package$().hy() * $m_Lsketches_rooms_columns_Pillars$package$().nO));
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, ((p$proxy5 < 0.0) ? 0.0 : ((p$proxy5 > 1.0) ? 1.0 : p$proxy5)));
}
function $p_Lsketches_rooms_columns_PillarPainting__corner$1__D__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, x, y) {
  return $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().bO(), new $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $p_Lsketches_rooms_columns_PillarPainting__randomOffset__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, $m_Lsketches_rooms_columns_Pillars$package$().ku));
}
function $p_Lsketches_rooms_columns_PillarPainting__corner$2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec2($thiz, shift$1, c) {
  return $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().bO(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().bO(), c, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), shift$1), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $p_Lsketches_rooms_columns_PillarPainting__randomOffset__D__Ltrivalibs_graphics_math_cpu_Vec2($thiz, $m_Lsketches_rooms_columns_Pillars$package$().kq));
}
/** @constructor */
function $c_Lsketches_rooms_columns_PillarPainting(width, height, colors) {
  this.j9 = 0.0;
  this.nG = 0.0;
  this.hK = null;
  this.j8 = null;
  this.j7 = 0.0;
  this.j9 = width;
  this.nG = height;
  this.hK = [];
  var remaining = height;
  while ((remaining > (height * $m_Lsketches_rooms_columns_Pillars$package$().kr))) {
    var segment = ($m_Ltrivalibs_utils_random_random$package$().m9($m_Lsketches_rooms_columns_Pillars$package$().nJ, $m_Lsketches_rooms_columns_Pillars$package$().kr) * remaining);
    this.hK.push(segment);
    remaining = (remaining - segment);
  }
  this.hK.push(remaining);
  $m_Ltrivalibs_utils_random_random$package$().v0(this.hK);
  this.j8 = [];
  this.j7 = 0.0;
  var array = this.hK;
  var len = (array.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = array[i];
    var segment$1 = (+x0);
    var pairColor = $m_Ltrivalibs_utils_random_random$package$().ri(colors);
    var reference = $p_Lsketches_rooms_columns_PillarPainting__referenceBlock__T2__D__D__sjs_js_Array(this, $p_Lsketches_rooms_columns_PillarPainting__segmentSpan__T2(this), this.j7, segment$1);
    var i$1 = 0;
    while (true) {
      (this.j8.push(new $c_Lsketches_rooms_columns_PaintedQuad($p_Lsketches_rooms_columns_PillarPainting__instanceOf__sjs_js_Array__sjs_js_Array(this, reference), $p_Lsketches_rooms_columns_PillarPainting__variedColor__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3(this, pairColor))) | 0);
      if ((i$1 === 1)) {
        break;
      }
      i$1 = ((1 + i$1) | 0);
    }
    this.j7 = (this.j7 + segment$1);
    i = ((1 + i) | 0);
  }
  this.j8.sort(((a$2, b$2) => ((a$2.j6.u < b$2.j6.u) ? (-1) : 1)));
}
$p = $c_Lsketches_rooms_columns_PillarPainting.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_columns_PillarPainting;
/** @constructor */
function $h_Lsketches_rooms_columns_PillarPainting() {
}
$h_Lsketches_rooms_columns_PillarPainting.prototype = $p;
var $d_Lsketches_rooms_columns_PillarPainting = new $TypeData().i($c_Lsketches_rooms_columns_PillarPainting, "sketches.rooms.columns.PillarPainting", ({
  dn: 1
}));
/** @constructor */
function $c_Lsketches_rooms_columns_Pillars$package$() {
  this.ja = 0;
  this.nH = 0;
  this.nK = 0;
  this.nJ = 0.0;
  this.kr = 0.0;
  this.nN = 0.0;
  this.kt = 0.0;
  this.ks = 0.0;
  this.ku = 0.0;
  this.kp = 0.0;
  this.kq = 0.0;
  this.nI = 0.0;
  this.nM = 0.0;
  this.nO = 0.0;
  this.nL = 0.0;
  $n_Lsketches_rooms_columns_Pillars$package$ = this;
  this.ja = 6;
  this.nH = 5;
  this.nK = 4;
  this.nJ = 0.1;
  this.kr = 0.45;
  this.nN = 0.005;
  this.kt = 0.11;
  this.ks = 0.09;
  this.ku = 0.018;
  this.kp = 0.025;
  this.kq = 0.015;
  this.nI = 0.015;
  this.nM = 0.23;
  this.nO = 0.31;
  this.nL = (2.0 * (((($m_Lsketches_rooms_columns_Pillars$package$().ku + $m_Lsketches_rooms_columns_Pillars$package$().kp) + $m_Lsketches_rooms_columns_Pillars$package$().kq) + $m_Lsketches_rooms_columns_Pillars$package$().ks) + (0.5 * $m_Lsketches_rooms_columns_Pillars$package$().kt)));
}
$p = $c_Lsketches_rooms_columns_Pillars$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_columns_Pillars$package$;
/** @constructor */
function $h_Lsketches_rooms_columns_Pillars$package$() {
}
$h_Lsketches_rooms_columns_Pillars$package$.prototype = $p;
$p.rj = (function(from, count) {
  var picked = [];
  var isEmpty = (count <= 0);
  var scala$collection$immutable$Range$$lastElement = ((count - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      (picked.push($m_Ltrivalibs_utils_random_random$package$().ri(from)) | 0);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  return picked;
});
var $d_Lsketches_rooms_columns_Pillars$package$ = new $TypeData().i($c_Lsketches_rooms_columns_Pillars$package$, "sketches.rooms.columns.Pillars$package$", ({
  dp: 1
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
  this.nP = 0.0;
  this.kv = null;
  this.nP = ($m_Ltrivalibs_utils_random_random$package$().iQ() * (1.0 / $m_Lsketches_rooms_columns_Pillars$package$().ja));
  this.kv = [];
  var end = $m_Lsketches_rooms_columns_Pillars$package$().ja;
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var n = (x0 + this.nP);
      var i$1 = 0;
      while (true) {
        var x0$1 = i$1;
        var $x_2 = this.kv;
        var x = ((n / $m_Lsketches_rooms_columns_Pillars$package$().ja) + (0.1 * $m_Ltrivalibs_utils_random_random$package$().hy()));
        var p$proxy1 = ((0.8 * $m_Ltrivalibs_utils_random_random$package$().jY()) + 0.45);
        var $x_1 = $x_2.push(new $c_Ltrivalibs_graphics_math_cpu_Vec3(x, ((p$proxy1 < 0.0) ? 0.0 : ((p$proxy1 > 1.0) ? 1.0 : p$proxy1)), ((x0$1 === 0) ? (0.65 * $m_Ltrivalibs_utils_random_random$package$().jY()) : ((0.65 * $m_Ltrivalibs_utils_random_random$package$().jY()) + 0.45))));
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
$p.rk = (function() {
  return new $c_Lsketches_rooms_columns_PillarGroup($m_Lsketches_rooms_columns_Pillars$package$().rj(this.kv, $m_Lsketches_rooms_columns_Pillars$package$().nH));
});
var $d_Lsketches_rooms_columns_RoomPalette = new $TypeData().i($c_Lsketches_rooms_columns_RoomPalette, "sketches.rooms.columns.RoomPalette", ({
  dq: 1
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
$p.te = (function(patch, darken, patchiness) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gy($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(darken), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T(patch, patchiness));
});
$p.qR = (function(dist, creep, patch, width, darken, creepAmount, patchiness) {
  var buildup = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().sV($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().vq($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bB(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T(creep, creepAmount)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0))), (width / 3.0)));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gy($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0), $m_Lsketchlib_shaders_room_Grime$package$().te(patch, darken, patchiness), buildup);
});
var $d_Lsketchlib_shaders_room_Grime$package$ = new $TypeData().i($c_Lsketchlib_shaders_room_Grime$package$, "sketchlib.shaders.room.Grime$package$", ({
  dr: 1
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
$p.jJ = (function(baker, form, width, height, transform, format, mips, clearColor) {
  var Painter_this = baker.hL;
  var value$proxy8 = ((transform === (void 0)) ? new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0) : transform);
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.aG;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), Painter_this.h, uv$proxy1);
  b.J.D(b.o, value$proxy8);
  var $x_3 = b.I.queue;
  var $x_2 = b.G;
  var s$proxy1 = b.o;
  var $x_1 = s$proxy1.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var Bindable_this = baker.hL.gz(form, baker.nQ, "none", (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", b);
  var \u03b4scrutinee5 = e1$proxy1.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, (Bindable_this.Y.K.model | 0), \u03b4scrutinee5);
  var format$1 = ((format === (void 0)) ? "rgba8unorm" : format);
  var panel = baker.hL.ch(width, height, clearColor, (void 0), (void 0), (void 0), mips, format$1, (void 0), Bindable_this, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(baker.hL, panel);
  return panel;
});
var $d_Lsketchlib_utils_bake_Bake$package$ = new $TypeData().i($c_Lsketchlib_utils_bake_Bake$package$, "sketchlib.utils.bake.Bake$package$", ({
  ds: 1
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
  this.hL = null;
  this.nQ = null;
  this.hL = painter;
  this.nQ = shade;
}
$p = $c_Lsketchlib_utils_bake_TextureBaker.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_TextureBaker;
/** @constructor */
function $h_Lsketchlib_utils_bake_TextureBaker() {
}
$h_Lsketchlib_utils_bake_TextureBaker.prototype = $p;
var $d_Lsketchlib_utils_bake_TextureBaker = new $TypeData().i($c_Lsketchlib_utils_bake_TextureBaker, "sketchlib.utils.bake.TextureBaker", ({
  dt: 1
}));
function $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($thiz, program) {
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg;
  try {
    var uv = ctx.a8.i("uv");
    var AssignTarget_this = ctx.a2.L("worldPos");
    var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().ck($thiz.kw, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cg(), $m_Ltrivalibs_graphics_math_gpu_vec4$().a3(ctx.a8.i("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x0 = (((("  " + AssignTarget_this.y) + " = ") + value$proxy1.f) + ";");
    var AssignTarget_this$2 = ctx.a2.L("normal");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().m8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().ck($thiz.kw, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cg(), $m_Ltrivalibs_graphics_math_gpu_vec4$().a3(ctx.a8.i("normal"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$())), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$());
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x1 = (((("  " + AssignTarget_this$2.y) + " = ") + value$proxy3.f) + ";");
    var AssignTarget_this$3 = ctx.a2.L("uv");
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x2 = (((("  " + AssignTarget_this$3.y) + " = ") + uv.f) + ";");
    var AssignTarget_this$4 = ctx.a2.cd;
    var $x_5 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_vec2$();
    var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a5(uv);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().S(uv);
    var value$proxy6 = $x_5.ae($x_4.qL($x_3.a3($x_2, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aN().aC((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + e$proxy1.f) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$()), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0));
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
  program.ar = $x_1;
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
  this.kw = null;
  $n_Lsketchlib_utils_bake_TextureBaker$ = this;
  this.kw = ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "model"));
}
$p = $c_Lsketchlib_utils_bake_TextureBaker$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_TextureBaker$;
/** @constructor */
function $h_Lsketchlib_utils_bake_TextureBaker$() {
}
$h_Lsketchlib_utils_bake_TextureBaker$.prototype = $p;
var $d_Lsketchlib_utils_bake_TextureBaker$ = new $TypeData().i($c_Lsketchlib_utils_bake_TextureBaker$, "sketchlib.utils.bake.TextureBaker$", ({
  du: 1
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
$p.sb = (function(p, scene, intensity, threshold, blurRadius, mipLevels, toneKnee, toneWhite) {
  if ((mipLevels < 2)) {
    var message$proxy1 = (("bloom mipLevels must be >= 2 (got " + mipLevels) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).W;
  }
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy1 = ul$proxy1.aG;
  var buffer = new ArrayBuffer(4);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.h, uv$proxy1);
  b.J.D(b.o, blurRadius);
  var $x_3 = b.I.queue;
  var $x_2 = b.G;
  var s$proxy1 = b.o;
  var $x_1 = s$proxy1.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy2 = ul$proxy2.aG;
  var buffer$2 = new ArrayBuffer(4);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.h, uv$proxy2);
  b$2.J.D(b$2.o, intensity);
  var $x_6 = b$2.I.queue;
  var $x_5 = b$2.G;
  var s$proxy2 = b$2.o;
  var $x_4 = s$proxy2.dv.buffer;
  $x_6.writeBuffer($x_5, 0.0, $x_4);
  var sampler = $p_Ltrivalibs_graphics_painter_Painter__sharedLinearSampler__Ltrivalibs_graphics_painter_GPUSampler(p);
  var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
    var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var color = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("color");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var brightness = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("brightness");
      var $x_10 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_9 = $m_sjsr_package$();
      var $x_8 = color.C($m_Ltrivalibs_graphics_math_gpu_expr$package$().jS($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().cf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cj(ctx$2.ho))));
      var $x_7 = brightness.C($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().a5(color), 0.2126), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().S(color), 0.7152)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().gC(color), 0.0722)));
      var AssignTarget_this = ctx$2.aq.L("color");
      var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().uT($m_Ltrivalibs_graphics_math_gpu_vec4$().lL($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0)), color, $m_Ltrivalibs_graphics_math_gpu_expr$package$().t2(brightness, ctx$2.E.i("threshold")));
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
    program$3.aJ = $x_11;
    $m_sjs_js_ArrayOps$().B(reg.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3);
    }))(program$3)));
  }));
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy1.g(program);
  var b$1 = program.aJ;
  var helperFns$proxy1 = program.at();
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
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["threshold"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.ac, sd.ab, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;");
  console.log(wgsl);
  var module = p.h.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl)])))));
  var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])], []);
  var result = [];
  $m_sjs_js_ArrayOps$().B(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2) => (result.push(p.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2)])))))) | 0))));
  var x1 = $ct_T2__O__O__(new $c_T2(), result, $m_Ltrivalibs_graphics_shader_layouts$().O(p.h, result));
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
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().O(p.h, allBgls);
  var thresholdShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
    var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
      var AssignTarget_this$1 = ctx$2$1.aq.L("color");
      var value$proxy3 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().sq($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$1.E.i("samp"), ctx$2$1.N.i("uv"), ctx$2$1.E.i("blurRadius"), null);
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
    program$3$1.aJ = $x_12;
    $m_sjs_js_ArrayOps$().B(reg$1.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3$1) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3$1);
    }))(program$3$1)));
  }));
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy2.g(program$2);
  var b$3 = program$2.aJ;
  var helperFns$proxy2 = program$2.at();
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
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).M.t()], [])));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.ac, sd$2.ab, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  console.log(wgsl$2);
  var module$2 = p.h.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$2)])))));
  var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []))], []);
  var result$2 = [];
  $m_sjs_js_ArrayOps$().B(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$1) => (result$2.push(p.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$1)])))))) | 0))));
  var x4 = $ct_T2__O__O__(new $c_T2(), result$2, $m_Ltrivalibs_graphics_shader_layouts$().O(p.h, result$2));
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
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().O(p.h, allBgls$2);
  var downsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
    var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
      var AssignTarget_this$2 = ctx$2$2.aq.L("color");
      var value$proxy5 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().vj($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$2.E.i("samp"), ctx$2$2.N.i("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T(ctx$2$2.E.i("blurRadius"), 0.5), null);
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
    program$3$2.aJ = $x_13;
    $m_sjs_js_ArrayOps$().B(reg$2.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$7) => ((data$3$2) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$7, data$3$2);
    }))(program$3$2)));
  }));
  var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy3.g(program$3$3);
  var b$4 = program$3$3.aJ;
  var helperFns$proxy3 = program$3$3.at();
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
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).M.t()], [])));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.ac, sd$3.ab, fragBuiltinParams$3);
  var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  console.log(wgsl$3);
  var module$3 = p.h.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$3)])))));
  var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []))], []);
  var result$3 = [];
  $m_sjs_js_ArrayOps$().B(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$3) => (result$3.push(p.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$3)])))))) | 0))));
  var x7 = $ct_T2__O__O__(new $c_T2(), result$3, $m_Ltrivalibs_graphics_shader_layouts$().O(p.h, result$3));
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
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().O(p.h, allBgls$3);
  var upsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
  var layers = [];
  var Bindable_this = p.gw(thresholdShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("threshold", threshold);
  var \u03b4scrutinee192 = e1$proxy1.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this, (Bindable_this.V.aB.scene | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee192));
  var \u03b4scrutinee196 = (+e2$proxy1.s);
  var idx$1 = (Bindable_this.V.K.threshold | 0);
  var existing = ((idx$1 < (Bindable_this.bb.length | 0)) ? Bindable_this.bb[idx$1] : null);
  var device$proxy1 = Bindable_this.hb.h;
  if ((existing !== null)) {
    existing.J.D(existing.o, \u03b4scrutinee196);
    var $x_17 = existing.I.queue;
    var $x_16 = existing.G;
    var s$proxy3 = existing.o;
    var $x_15 = s$proxy3.dv.buffer;
    $x_17.writeBuffer($x_16, 0.0, $x_15);
    var $x_14 = existing;
  } else {
    var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$3 = new ArrayBuffer(4);
    var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var b$3$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), device$proxy1, uv$2);
    b$3$1.J.D(b$3$1.o, \u03b4scrutinee196);
    var $x_20 = b$3$1.I.queue;
    var $x_19 = b$3$1.G;
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
    var Bindable_this$5 = p.gw(downsampleShade, (void 0), mipSource$1, mipTarget$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee212 = e1$proxy2.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$5, (Bindable_this$5.V.K.blurRadius | 0), \u03b4scrutinee212);
    var \u03b4scrutinee225 = e2$proxy2.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$5, (Bindable_this$5.V.K.samp | 0), \u03b4scrutinee225);
    layers.push(Bindable_this$5);
    di = ((1 + di) | 0);
  }
  var ui = ((mipLevels - 2) | 0);
  while ((ui >= 0)) {
    var Bindable_this$8 = p.gw(upsampleShade, $m_Ltrivalibs_graphics_painter_BlendState$().oz, ((1 + ui) | 0), ui);
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee235 = e1$proxy3.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$8, (Bindable_this$8.V.K.blurRadius | 0), \u03b4scrutinee235);
    var \u03b4scrutinee248 = e2$proxy3.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$8, (Bindable_this$8.V.K.samp | 0), \u03b4scrutinee248);
    layers.push(Bindable_this$8);
    ui = ((ui - 1) | 0);
  }
  var bloomP = p.ch((void 0), (void 0), (void 0), (void 0), (void 0), mipLevels, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers, (void 0), (void 0), (void 0), (void 0), (void 0));
  var toneOn = (toneWhite > toneKnee);
  var toneLift = (toneOn ? (1.0 - toneKnee) : 0.0);
  var toneFalloff = (toneOn ? ((-1.0) / (toneWhite - toneKnee)) : (-1.0));
  var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
    var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
      var coord = $m_Ltrivalibs_graphics_math_gpu_ivec2$().cf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cj(ctx$2$3.ho));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var c = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("c");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var low = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("low");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var over = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("over");
      var $x_25 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_24 = $m_sjsr_package$();
      var $x_23 = c.C($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().s4($m_Ltrivalibs_graphics_math_gpu_expr$package$().jS($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().m6($m_Ltrivalibs_graphics_math_gpu_expr$package$().jS($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "bloom"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), ctx$2$3.E.i("intensity")))));
      var $x_22 = low.C($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().u8(c, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_vec3$().cf(ctx$2$3.E.i("knee"))));
      var $x_21 = over.C($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().k2(c, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), low));
      var AssignTarget_this$3 = ctx$2$3.aq.L("color");
      var value$proxy7 = $m_Ltrivalibs_graphics_math_gpu_vec4$().a3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().lJ(low, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().aW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().k2($m_Ltrivalibs_graphics_math_gpu_vec3$().s7(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().sU($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().aW(over, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), ctx$2$3.E.i("falloff")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$())), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), ctx$2$3.E.i("lift"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0));
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
    program$3$4.aJ = $x_26;
    $m_sjs_js_ArrayOps$().B(reg$3.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$8) => ((data$3$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$8, data$3$3);
    }))(program$3$4)));
  }));
  var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy4.g(program$4);
  var b$5 = program$4.aJ;
  var helperFns$proxy4 = program$4.at();
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
  var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["intensity"], $m_sjs_js_ArrayOpsCommon$().a(["knee"], $m_sjs_js_ArrayOpsCommon$().a(["lift"], $m_sjs_js_ArrayOpsCommon$().a(["falloff"], [])))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], [])))));
  var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.ac, sd$4.ab, fragBuiltinParams$4);
  var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;\n@group(1) @binding(1) var bloom: texture_2d<f32>;");
  console.log(wgsl$4);
  var module$4 = p.h.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$4)])))));
  var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 2), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 3), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], []))))], []);
  var result$4 = [];
  $m_sjs_js_ArrayOps$().B(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$4) => (result$4.push(p.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$4)])))))) | 0))));
  var x10 = $ct_T2__O__O__(new $c_T2(), result$4, $m_Ltrivalibs_graphics_shader_layouts$().O(p.h, result$4));
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
  var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().O(p.h, allBgls$4);
  var compositeShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
  var Bindable_this$11 = p.gw(compositeShade, (void 0), (void 0), (void 0));
  var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("bloom", bloomP);
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("intensity", b$2);
  var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("knee", toneKnee);
  var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("lift", toneLift);
  var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("falloff", toneFalloff);
  var \u03b4scrutinee350 = e1$proxy4.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$11, (Bindable_this$11.V.aB.scene | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee350));
  var \u03b4scrutinee366 = e2$proxy4.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$11, (Bindable_this$11.V.aB.bloom | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee366));
  var \u03b4scrutinee370 = e3$proxy1.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$11, (Bindable_this$11.V.K.intensity | 0), \u03b4scrutinee370);
  var \u03b4scrutinee383 = (+e4$proxy1.s);
  var idx$2$1 = (Bindable_this$11.V.K.knee | 0);
  var existing$2 = ((idx$2$1 < (Bindable_this$11.bb.length | 0)) ? Bindable_this$11.bb[idx$2$1] : null);
  var device$proxy2 = Bindable_this$11.hb.h;
  if ((existing$2 !== null)) {
    existing$2.J.D(existing$2.o, \u03b4scrutinee383);
    var $x_30 = existing$2.I.queue;
    var $x_29 = existing$2.G;
    var s$proxy5 = existing$2.o;
    var $x_28 = s$proxy5.dv.buffer;
    $x_30.writeBuffer($x_29, 0.0, $x_28);
    var $x_27 = existing$2;
  } else {
    var uv$2$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$4 = new ArrayBuffer(4);
    var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
    var b$4$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), device$proxy2, uv$2$1);
    b$4$1.J.D(b$4$1.o, \u03b4scrutinee383);
    var $x_33 = b$4$1.I.queue;
    var $x_32 = b$4$1.G;
    var s$proxy6 = b$4$1.o;
    var $x_31 = s$proxy6.dv.buffer;
    $x_33.writeBuffer($x_32, 0.0, $x_31);
    var $x_27 = b$4$1;
  }
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$11, idx$2$1, $x_27);
  var \u03b4scrutinee407 = (+e5$proxy1.s);
  var idx$3$1 = (Bindable_this$11.V.K.lift | 0);
  var existing$3 = ((idx$3$1 < (Bindable_this$11.bb.length | 0)) ? Bindable_this$11.bb[idx$3$1] : null);
  var device$proxy3 = Bindable_this$11.hb.h;
  if ((existing$3 !== null)) {
    existing$3.J.D(existing$3.o, \u03b4scrutinee407);
    var $x_37 = existing$3.I.queue;
    var $x_36 = existing$3.G;
    var s$proxy7 = existing$3.o;
    var $x_35 = s$proxy7.dv.buffer;
    $x_37.writeBuffer($x_36, 0.0, $x_35);
    var $x_34 = existing$3;
  } else {
    var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$5 = new ArrayBuffer(4);
    var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
    var b$5$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), device$proxy3, uv$3);
    b$5$1.J.D(b$5$1.o, \u03b4scrutinee407);
    var $x_40 = b$5$1.I.queue;
    var $x_39 = b$5$1.G;
    var s$proxy8 = b$5$1.o;
    var $x_38 = s$proxy8.dv.buffer;
    $x_40.writeBuffer($x_39, 0.0, $x_38);
    var $x_34 = b$5$1;
  }
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$11, idx$3$1, $x_34);
  var \u03b4scrutinee437 = (+e6$proxy1.s);
  var idx$4$1 = (Bindable_this$11.V.K.falloff | 0);
  var existing$4 = ((idx$4$1 < (Bindable_this$11.bb.length | 0)) ? Bindable_this$11.bb[idx$4$1] : null);
  var device$proxy4 = Bindable_this$11.hb.h;
  if ((existing$4 !== null)) {
    existing$4.J.D(existing$4.o, \u03b4scrutinee437);
    var $x_44 = existing$4.I.queue;
    var $x_43 = existing$4.G;
    var s$proxy9 = existing$4.o;
    var $x_42 = s$proxy9.dv.buffer;
    $x_44.writeBuffer($x_43, 0.0, $x_42);
    var $x_41 = existing$4;
  } else {
    var uv$4 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$6 = new ArrayBuffer(4);
    var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
    var b$6 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), device$proxy4, uv$4);
    b$6.J.D(b$6.o, \u03b4scrutinee437);
    var $x_47 = b$6.I.queue;
    var $x_46 = b$6.G;
    var s$proxy10 = b$6.o;
    var $x_45 = s$proxy10.dv.buffer;
    $x_47.writeBuffer($x_46, 0.0, $x_45);
    var $x_41 = b$6;
  }
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$11, idx$4$1, $x_41);
  return new $c_Lsketchlib_utils_bloom_Bloom$$anon$1(bloomP, p.ch((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this$11, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0)), p, b, b$2);
});
var $d_Lsketchlib_utils_bloom_Bloom$ = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$, "sketchlib.utils.bloom.Bloom$", ({
  dw: 1
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
      var uv = ctx$2.N.i("uv");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var a = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("a");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var dist = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("dist");
      var $x_4 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_3 = $m_sjsr_package$();
      var $x_2 = a.C($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().cl($m_Ltrivalibs_graphics_math_gpu_expr$package$().rq($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), uv, ctx$2.E.i("samp"))));
      var $x_1 = dist.C($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aM(a, ctx$2.E.i("blurStrength")), ctx$2.E.i("visHeight")), ctx$2.E.i("passScale")), ctx$2.E.i("strengthOffset")));
      var AssignTarget_this = ctx$2.aq.L("color");
      var tex$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
      var s$proxy6 = ctx$2.E.i("samp");
      var res$proxy1 = ctx$2.E.i("res");
      var dir$proxy1 = (vertical ? $m_Ltrivalibs_graphics_math_gpu_vec2$().a3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aM(dist, ctx$2.E.i("ratioVertical"))) : $m_Ltrivalibs_graphics_math_gpu_vec2$().a3(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(0.0)));
      var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().ta();
      var s$proxy7 = WgslFn$_this.gu(fn$proxy1, tex$proxy1, s$proxy6, uv, res$proxy1, dir$proxy1);
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
    program$3.aJ = $x_5;
    $m_sjs_js_ArrayOps$().B(reg.Z, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3);
    }))(program$3)));
  }));
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy2.g(program);
  var b = program.aJ;
  var helperFns$proxy2 = program.at();
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
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().a(["ratioVertical"], $m_sjs_js_ArrayOpsCommon$().a(["strengthOffset"], $m_sjs_js_ArrayOpsCommon$().a(["passScale"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["visHeight"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))))))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).M.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).M.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).M.t()], []))))))));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.ac, sd.ab, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  console.log(wgsl);
  var module = p$1.h.createShaderModule($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl)])))));
  var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 2), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 3), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 4), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 5), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 6), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], [])))))))], []);
  var result = [];
  $m_sjs_js_ArrayOps$().B(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2) => (result.push(p$1.h.createBindGroupLayout($m_sjs_js_special_package$().e(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2)])))))) | 0))));
  var x4 = $ct_T2__O__O__(new $c_T2(), result, $m_Ltrivalibs_graphics_shader_layouts$().O(p$1.h, result));
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
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().O(p$1.h, allBgls);
  return new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer($thiz, p$2, uBlurStrength$1, uRatioVertical$1, uStrengthOffset$1, uRes$1, uVisHeight$1, sampler$1, shade, passScale) {
  var Bindable_this = p$2.gw(shade, (void 0), (void 0), (void 0));
  var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurStrength", uBlurStrength$1);
  var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("ratioVertical", uRatioVertical$1);
  var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("strengthOffset", uStrengthOffset$1);
  var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("passScale", passScale);
  var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("res", uRes$1);
  var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("visHeight", uVisHeight$1);
  var e7$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler$1);
  var \u03b4scrutinee188 = e1$proxy2.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, (Bindable_this.V.K.blurStrength | 0), \u03b4scrutinee188);
  var \u03b4scrutinee201 = e2$proxy2.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, (Bindable_this.V.K.ratioVertical | 0), \u03b4scrutinee201);
  var \u03b4scrutinee218 = e3$proxy2.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, (Bindable_this.V.K.strengthOffset | 0), \u03b4scrutinee218);
  var \u03b4scrutinee239 = (+e4$proxy1.s);
  var idx$3 = (Bindable_this.V.K.passScale | 0);
  var existing = ((idx$3 < (Bindable_this.bb.length | 0)) ? Bindable_this.bb[idx$3] : null);
  var device$proxy1 = Bindable_this.hb.h;
  if ((existing !== null)) {
    existing.J.D(existing.o, \u03b4scrutinee239);
    var $x_4 = existing.I.queue;
    var $x_3 = existing.G;
    var s$proxy8 = existing.o;
    var $x_2 = s$proxy8.dv.buffer;
    $x_4.writeBuffer($x_3, 0.0, $x_2);
    var $x_1 = existing;
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer = new ArrayBuffer(4);
    var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), device$proxy1, uv);
    b.J.D(b.o, \u03b4scrutinee239);
    var $x_7 = b.I.queue;
    var $x_6 = b.G;
    var s$proxy9 = b.o;
    var $x_5 = s$proxy9.dv.buffer;
    $x_7.writeBuffer($x_6, 0.0, $x_5);
    var $x_1 = b;
  }
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, idx$3, $x_1);
  var \u03b4scrutinee275 = e5$proxy1.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, (Bindable_this.V.K.res | 0), \u03b4scrutinee275);
  var \u03b4scrutinee301 = e6$proxy1.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, (Bindable_this.V.K.visHeight | 0), \u03b4scrutinee301);
  var \u03b4scrutinee334 = e7$proxy1.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, (Bindable_this.V.K.samp | 0), \u03b4scrutinee334);
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
$p.sc = (function(p, camera, shapes, vpName, alphaScale, mirror, blurStrength, blurRatioVertical, strengthOffset, scaleFactor, resolutionScale, overscan, clearColor) {
  if (((scaleFactor <= 0.0) || (scaleFactor >= 1.0))) {
    var message$proxy1 = (("GaussianMirrorReflection scaleFactor must be in (0, 1) " + ("(got " + scaleFactor)) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).W;
  }
  if ((resolutionScale <= 0.0)) {
    var message$proxy2 = (("GaussianMirrorReflection resolutionScale must be > 0 " + ("(got " + resolutionScale)) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy2)).W;
  }
  if ((overscan < 0.0)) {
    var message$proxy3 = (("GaussianMirrorReflection overscan must be >= 0 (got " + overscan) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy3)).W;
  }
  var p$proxy1 = (1.0 / (1.0 - (scaleFactor * scaleFactor)));
  var cascadeGain = (+Math.sqrt(p$proxy1));
  var sigmaPerDir = (1.64 * cascadeGain);
  var strengthScale = (0.01 / sigmaPerDir);
  var reflMat = mirror.uG();
  var pn = mirror.hW;
  var pd = mirror.hV;
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.aG;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var uVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.h, uv$proxy1);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy2 = ul$proxy2.aG;
  var buffer$2 = new ArrayBuffer(64);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var uInvVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.h, uv$proxy2);
  var value$proxy1 = (blurStrength * strengthScale);
  var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy3 = ul$proxy3.aG;
  var buffer$3 = new ArrayBuffer(4);
  var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), p.h, uv$proxy3);
  b.J.D(b.o, value$proxy1);
  var $x_3 = b.I.queue;
  var $x_2 = b.G;
  var s$proxy1 = b.o;
  var $x_1 = s$proxy1.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var ul$proxy4 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy4 = ul$proxy4.aG;
  var buffer$4 = new ArrayBuffer(4);
  var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), p.h, uv$proxy4);
  b$2.J.D(b$2.o, blurRatioVertical);
  var $x_6 = b$2.I.queue;
  var $x_5 = b$2.G;
  var s$proxy2 = b$2.o;
  var $x_4 = s$proxy2.dv.buffer;
  $x_6.writeBuffer($x_5, 0.0, $x_4);
  var ul$proxy5 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy5 = ul$proxy5.aG;
  var buffer$5 = new ArrayBuffer(4);
  var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
  var b$3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), p.h, uv$proxy5);
  b$3.J.D(b$3.o, strengthOffset);
  var $x_9 = b$3.I.queue;
  var $x_8 = b$3.G;
  var s$proxy3 = b$3.o;
  var $x_7 = s$proxy3.dv.buffer;
  $x_9.writeBuffer($x_8, 0.0, $x_7);
  var ul$proxy6 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
  var uv$proxy6 = ul$proxy6.aG;
  var buffer$6 = new ArrayBuffer(8);
  var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
  var uRes = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), p.h, uv$proxy6);
  var ul$proxy7 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy7 = ul$proxy7.aG;
  var buffer$7 = new ArrayBuffer(4);
  var arr$proxy7 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$7), 1);
  var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy7.dv, 0), p.h, uv$proxy7);
  b$4.J.D(b$4.o, 0.0);
  var $x_12 = b$4.I.queue;
  var $x_11 = b$4.G;
  var s$proxy4 = b$4.o;
  var $x_10 = s$proxy4.dv.buffer;
  $x_12.writeBuffer($x_11, 0.0, $x_10);
  var value$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec4(1.0, 1.0, 0.0, 0.0);
  var ul$proxy8 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$());
  var uv$proxy8 = ul$proxy8.aG;
  var buffer$8 = new ArrayBuffer(16);
  var arr$proxy8 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$8), 1);
  var b$5 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy8.dv, 0), p.h, uv$proxy8);
  b$5.J.D(b$5.o, value$proxy2);
  var $x_15 = b$5.I.queue;
  var $x_14 = b$5.G;
  var s$proxy5 = b$5.o;
  var $x_13 = s$proxy5.dv.buffer;
  $x_15.writeBuffer($x_14, 0.0, $x_13);
  var sampler = $p_Ltrivalibs_graphics_painter_Painter__sharedLinearSampler__Ltrivalibs_graphics_painter_GPUSampler(p);
  var mirrorPanel = p.ch((void 0), (void 0), clearColor, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
  var dict$proxy1 = mirrorPanel.i8;
  dict$proxy1[vpName] = uVp;
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg;
  try {
    var uv$8 = ctx.N.i("uv");
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
    var x0 = d.C($m_Ltrivalibs_graphics_math_gpu_expr$package$().sH($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "depth"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().cf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cj(ctx.ho))));
    var $x_18 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
    var $x_17 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bA($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().a5(uv$8), 2.0), 1.0);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().S(uv$8), 2.0);
    var x1 = ndc.C($x_18.ae($x_17, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aN().aC((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(1.0)) + " - ") + e$proxy1.f) + ")")), d));
    var x2 = worldH.C($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().ck(ctx.E.i("invVp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cg(), $m_Ltrivalibs_graphics_math_gpu_vec4$().a3(ndc, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
    var x3 = worldPos.C($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().sK($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gB(worldH), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().cl(worldH)));
    var x4 = t.C($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().qC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bA($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().iu($m_Ltrivalibs_graphics_math_gpu_vec3$().ae($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(pn.w), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(pn.A), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(pn.u)), worldPos), pd), alphaScale)));
    var AssignTarget_this = ctx.aq.L("color");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_vec4$().a3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gB($m_Ltrivalibs_graphics_math_gpu_expr$package$().jS($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().cf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cj(ctx.ho)))), t);
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
  program.aJ = $x_16;
  var array$1 = reg.Z;
  var len = (array$1.length | 0);
  var i$1 = 0;
  while ((i$1 < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i$1]);
    i$1 = ((1 + i$1) | 0);
  }
  var b$1 = program.aJ;
  var helperFns$proxy1 = program.at();
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
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["invVp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).M.t()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.ac, sd.ab, fragBuiltinParams);
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
  var \u03b46$___2 = $m_Ltrivalibs_graphics_shader_layouts$().O(p.h, result);
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
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().O(p.h, allBgls);
  var bakeShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var blurShadeH = $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurShade$1__Ltrivalibs_graphics_painter_Painter__Z__Ltrivalibs_graphics_painter_Shade(this, p, false);
  var blurShadeV = $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurShade$1__Ltrivalibs_graphics_painter_Painter__Z__Ltrivalibs_graphics_painter_Shade(this, p, true);
  var Bindable_this = p.gw(bakeShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("col", mirrorPanel);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("depth", mirrorPanel.sn(0, (-1), true));
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("invVp", uInvVp);
  var \u03b4scrutinee166 = e1$proxy1.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this, (Bindable_this.V.aB.col | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee166));
  var \u03b4scrutinee176 = e2$proxy1.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this, (Bindable_this.V.aB.depth | 0), \u03b4scrutinee176);
  var \u03b4scrutinee180 = e3$proxy1.s;
  $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this, (Bindable_this.V.K.invVp | 0), \u03b4scrutinee180);
  var pairCache = [];
  var cachedScale = new $c_sr_DoubleRef(1.0);
  var blurPanel = p.ch((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$1;
  try {
    var AssignTarget_this$1 = ctx$1.aq.L("color");
    var value$proxy8 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().rq($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().jI($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().uc(ctx$1.N.i("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().cj(ctx$1.E.i("crop"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().mt(ctx$1.E.i("crop"))), ctx$1.E.i("samp"));
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var $x_23 = (((("  " + AssignTarget_this$1.y) + " = ") + value$proxy8.f) + ";");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$1;
  }
  program$2.aJ = $x_23;
  var array$18 = reg$1.Z;
  var len$2 = (array$18.length | 0);
  var i$4 = 0;
  while ((i$4 < len$2)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$18[i$4]);
    i$4 = ((1 + i$4) | 0);
  }
  var b$6 = program$2.aJ;
  var helperFns$proxy3 = program$2.at();
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
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["crop"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$()).M.t()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).M.t()], [])));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.ac, sd$2.ab, fragBuiltinParams$2);
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
  var \u03b46$$2___2 = $m_Ltrivalibs_graphics_shader_layouts$().O(p.h, result$2);
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
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().O(p.h, allBgls$2);
  var cropShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  if ((overscan > 0.0)) {
    var Bindable_this$5 = p.gw(cropShade, (void 0), (void 0), (void 0));
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", blurPanel);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("crop", b$5);
    var e3$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee423 = e1$proxy3.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V(Bindable_this$5, (Bindable_this$5.V.aB.tex | 0), new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee423));
    var \u03b4scrutinee427 = e2$proxy3.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$5, (Bindable_this$5.V.K.crop | 0), \u03b4scrutinee427);
    var \u03b4scrutinee437 = e3$proxy3.s;
    $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V(Bindable_this$5, (Bindable_this$5.V.K.samp | 0), \u03b4scrutinee437);
    var layers$3 = [Bindable_this$5];
    var $x_28 = p.ch((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers$3, (void 0), (void 0), (void 0), (void 0), (void 0));
  } else {
    var $x_28 = null;
  }
  return new $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1(mirrorPanel, $x_28, blurPanel, camera, blurStrength, blurRatioVertical, Bindable_this, pairCache, overscan, uRes, b$4, b$5, resolutionScale, b, strengthScale, b$2, b$3, reflMat, uVp, uInvVp, p, scaleFactor, blurShadeH, cachedScale, blurShadeV, sampler);
});
$p.v4 = (function(strengthScale$1, scaleFactor$1, subResHeight, strength, ratio) {
  var pairs = 1;
  var reach = (((strength * strengthScale$1) * subResHeight) * (+Math.max(ratio, 1.0)));
  while ((reach > 1.0)) {
    reach = (reach * scaleFactor$1);
    pairs = ((1 + pairs) | 0);
  }
  return pairs;
});
$p.v3 = (function(pairCache$1, blurShadeH$1, cachedScale$1, blurShadeV$1, scaleFactor$2, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, n) {
  while (((pairCache$1.length | 0) < (n << 1))) {
    pairCache$1.push($p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer(this, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, blurShadeH$1, cachedScale$1.gX));
    pairCache$1.push($p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer(this, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, blurShadeV$1, cachedScale$1.gX));
    cachedScale$1.gX = (cachedScale$1.gX * scaleFactor$2);
  }
});
var $d_Lsketchlib_utils_mirror_GaussianMirrorReflection$ = new $TypeData().i($c_Lsketchlib_utils_mirror_GaussianMirrorReflection$, "sketchlib.utils.mirror.GaussianMirrorReflection$", ({
  dz: 1
}));
var $n_Lsketchlib_utils_mirror_GaussianMirrorReflection$;
function $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$() {
  if ((!$n_Lsketchlib_utils_mirror_GaussianMirrorReflection$)) {
    $n_Lsketchlib_utils_mirror_GaussianMirrorReflection$ = new $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$();
  }
  return $n_Lsketchlib_utils_mirror_GaussianMirrorReflection$;
}
function $p_Lsketchlib_utils_room_BeamAtlas__band$1__D__D__D__D__T2($thiz, rowV0$1, rowH$1, fromWorld, thickWorld) {
  return $ct_T2__O__O__(new $c_T2(), (rowV0$1 + (rowH$1 * (fromWorld / $thiz.hQ))), (rowV0$1 + (rowH$1 * ((fromWorld + thickWorld) / $thiz.hQ))));
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
  return $x_4.gt($x_3, $x_2, $x_1, f(trPos, x1$3));
}
function $p_Lsketchlib_utils_room_BeamAtlas__facesOutOfPlan$1__Lsketchlib_utils_room_Boundary__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__Z($thiz, clip$1, centerXZ, n) {
  return (!$m_Lsketchlib_utils_room_Confine$package$().lU(clip$1, new $c_Ltrivalibs_graphics_math_cpu_Vec2((centerXZ.l + (0.01 * n.w)), (centerXZ.k + (0.01 * n.u)))));
}
/** @constructor */
function $c_Lsketchlib_utils_room_BeamAtlas(beams, clip) {
  this.hR = 0;
  this.hS = 0.0;
  this.ga = 0.0;
  this.hQ = 0.0;
  this.kF = 0.0;
  this.o9 = null;
  this.hR = (beams.length | 0);
  this.hS = beams[0].bh;
  this.ga = beams[0].bH;
  this.hQ = (this.hS + (2.0 * this.ga));
  var m = 0.0;
  var i = 0;
  while ((i < (beams.length | 0))) {
    var l = $f_Ltrivalibs_graphics_math_Vec2Base__length__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().bO(), beams[i].bw, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), beams[i].bv));
    if ((l > m)) {
      m = l;
    }
    i = ((1 + i) | 0);
  }
  this.kF = m;
  var out = [];
  var i$2 = 0;
  while ((i$2 < (beams.length | 0))) {
    var b = beams[i$2];
    var dx = (b.bw.l - b.bv.l);
    var dz = (b.bw.k - b.bv.k);
    var p$proxy1 = ((dx * dx) + (dz * dz));
    var len = (+Math.sqrt(p$proxy1));
    var dir = new $c_Ltrivalibs_graphics_math_cpu_Vec3((dx / len), 0.0, (dz / len));
    var perp = new $c_Ltrivalibs_graphics_math_cpu_Vec3((-dir.u), 0.0, dir.w);
    var cx = (0.5 * (b.bv.l + b.bw.l));
    var cz = (0.5 * (b.bv.k + b.bw.k));
    var u1 = (len / this.kF);
    var rowV0 = (i$2 / this.hR);
    var rowH = (1.0 / this.hR);
    var midY = (b.g9 + (0.5 * b.bH));
    var sideA = new $c_Ltrivalibs_graphics_math_cpu_Vec2((cx + (0.5 * (perp.w * b.bh))), (cz + (0.5 * (perp.u * b.bh))));
    if ((!$p_Lsketchlib_utils_room_BeamAtlas__facesOutOfPlan$1__Lsketchlib_utils_room_Boundary__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__Z(this, clip, sideA, perp))) {
      out.push($p_Lsketchlib_utils_room_BeamAtlas__face$1__D__Ltrivalibs_graphics_math_cpu_Vec3__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__T2__sjs_js_Array(this, u1, dir, len, b.bH, perp, new $c_Ltrivalibs_graphics_math_cpu_Vec3(sideA.l, midY, sideA.k), $p_Lsketchlib_utils_room_BeamAtlas__band$1__D__D__D__D__T2(this, rowV0, rowH, 0.0, this.ga)));
    }
    out.push($p_Lsketchlib_utils_room_BeamAtlas__face$1__D__Ltrivalibs_graphics_math_cpu_Vec3__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__T2__sjs_js_Array(this, u1, dir, len, b.bh, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), new $c_Ltrivalibs_graphics_math_cpu_Vec3(cx, b.g9, cz), $p_Lsketchlib_utils_room_BeamAtlas__band$1__D__D__D__D__T2(this, rowV0, rowH, this.ga, this.hS)));
    var sideB = new $c_Ltrivalibs_graphics_math_cpu_Vec2((cx - (0.5 * (perp.w * b.bh))), (cz - (0.5 * (perp.u * b.bh))));
    if ((!$p_Lsketchlib_utils_room_BeamAtlas__facesOutOfPlan$1__Lsketchlib_utils_room_Boundary__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__Z(this, clip, sideB, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), perp, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$())))) {
      out.push($p_Lsketchlib_utils_room_BeamAtlas__face$1__D__Ltrivalibs_graphics_math_cpu_Vec3__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__T2__sjs_js_Array(this, u1, dir, len, b.bH, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), perp, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), new $c_Ltrivalibs_graphics_math_cpu_Vec3(sideB.l, midY, sideB.k), $p_Lsketchlib_utils_room_BeamAtlas__band$1__D__D__D__D__T2(this, rowV0, rowH, (this.ga + this.hS), this.ga)));
    }
    i$2 = ((1 + i$2) | 0);
  }
  this.o9 = out;
}
$p = $c_Lsketchlib_utils_room_BeamAtlas.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_BeamAtlas;
/** @constructor */
function $h_Lsketchlib_utils_room_BeamAtlas() {
}
$h_Lsketchlib_utils_room_BeamAtlas.prototype = $p;
$p.vm = (function(alongScale, crossScale) {
  var a = (this.hQ * crossScale);
  var $x_1 = $m_RTLong$().jP((+Math.round(a)));
  var x_$_lo = $x_1.l;
  var x_$_hi = $x_1.h;
  var b = ((4.294967296E9 * x_$_hi) + (x_$_lo >>> 0.0));
  var rowTexels = $doubleToInt((+Math.max(1.0, b)));
  return $ct_T2__O__O__(new $c_T2(), $doubleToInt((this.kF * alongScale)), Math.imul(this.hR, rowTexels));
});
$p.s0 = (function(uv) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().qN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().S(uv), this.hR)), this.hQ);
});
$p.v7 = (function(uv) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().iq($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bA(this.s0(uv), (this.ga + (0.5 * this.hS))));
});
var $d_Lsketchlib_utils_room_BeamAtlas = new $TypeData().i($c_Lsketchlib_utils_room_BeamAtlas, "sketchlib.utils.room.BeamAtlas", ({
  dB: 1
}));
/** @constructor */
function $c_Lsketchlib_utils_room_Boundary(edges) {
  this.gb = null;
  this.gb = edges;
}
$p = $c_Lsketchlib_utils_room_Boundary.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Boundary;
/** @constructor */
function $h_Lsketchlib_utils_room_Boundary() {
}
$h_Lsketchlib_utils_room_Boundary.prototype = $p;
var $d_Lsketchlib_utils_room_Boundary = new $TypeData().i($c_Lsketchlib_utils_room_Boundary, "sketchlib.utils.room.Boundary", ({
  dC: 1
}));
function $p_Lsketchlib_utils_room_Boundary$__ringEdges__Lsketchlib_utils_room_Ring__sjs_js_Array($thiz, r) {
  var n = (r.bi.length | 0);
  var s = (r.h6 * (($thiz.v1(r.bi) < 0.0) ? (-1.0) : 1.0));
  var out = [];
  var i = 0;
  while ((i < n)) {
    var a = r.bi[i];
    var b = r.bi[((((1 + i) | 0) === n) ? 0 : ((1 + i) | 0))];
    var prev = r.bi[((i === 0) ? ((n - 1) | 0) : ((i - 1) | 0))];
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
$p.qy = (function(r) {
  return new $c_Lsketchlib_utils_room_Boundary($p_Lsketchlib_utils_room_Boundary$__ringEdges__Lsketchlib_utils_room_Ring__sjs_js_Array(this, r));
});
$p.sa = (function(rings) {
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
$p.v1 = (function(ps) {
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
  dD: 1
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
$p.ud = (function(bnd, pxz) {
  var edges = bnd.gb;
  var bestD = Infinity;
  var qx = 0.0;
  var qz = 0.0;
  var nx = 0.0;
  var nz = 0.0;
  var i = 0;
  while ((i < (edges.length | 0))) {
    var e = edges[i];
    var ex = (e.aA.l - e.a6.l);
    var ez = (e.aA.k - e.a6.k);
    var t = ((((pxz.l - e.a6.l) * ex) + ((pxz.k - e.a6.k) * ez)) / ((ex * ex) + (ez * ez)));
    if ((t < 0.0)) {
      t = 0.0;
    } else if ((t > 1.0)) {
      t = 1.0;
    }
    var cx = (e.a6.l + (ex * t));
    var cz = (e.a6.k + (ez * t));
    var dx = (pxz.l - cx);
    var dz = (pxz.k - cz);
    var p$proxy1 = ((dx * dx) + (dz * dz));
    var d = (+Math.sqrt(p$proxy1));
    if ((d < bestD)) {
      bestD = d;
      qx = cx;
      qz = cz;
      nx = e.bI.l;
      nz = e.bI.k;
    }
    i = ((1 + i) | 0);
  }
  return new $c_T3(new $c_Ltrivalibs_graphics_math_cpu_Vec2(qx, qz), bestD, new $c_Ltrivalibs_graphics_math_cpu_Vec2(nx, nz));
});
$p.lU = (function(bnd, pxz) {
  var edges = bnd.gb;
  var inside = false;
  var i = 0;
  while ((i < (edges.length | 0))) {
    var a = edges[i].a6;
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
$p.qE = (function(bnd, pxz, margin) {
  var nb = $m_Lsketchlib_utils_room_Confine$package$().ud(bnd, pxz);
  if (((!$m_Lsketchlib_utils_room_Confine$package$().lU(bnd, pxz)) || ((+nb.aX) < 1.0E-9))) {
    return new $c_Ltrivalibs_graphics_math_cpu_Vec2((nb.aD.l + (nb.b5.l * margin)), (nb.aD.k + (nb.b5.k * margin)));
  } else if (((+nb.aX) < margin)) {
    var s = (margin / (+nb.aX));
    return new $c_Ltrivalibs_graphics_math_cpu_Vec2((nb.aD.l + ((pxz.l - nb.aD.l) * s)), (nb.aD.k + ((pxz.k - nb.aD.k) * s)));
  } else {
    return pxz;
  }
});
$p.sB = (function(bnd, pos, margin, eyeY) {
  var once = $m_Lsketchlib_utils_room_Confine$package$().qE(bnd, new $c_Ltrivalibs_graphics_math_cpu_Vec2(pos.w, pos.u), margin);
  var twice = $m_Lsketchlib_utils_room_Confine$package$().qE(bnd, once, margin);
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(twice.l, eyeY, twice.k);
});
var $d_Lsketchlib_utils_room_Confine$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Confine$package$, "sketchlib.utils.room.Confine$package$", ({
  dE: 1
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
$p.sp = (function(fp) {
  var minX = Infinity;
  var minZ = Infinity;
  var maxX = (-Infinity);
  var maxZ = (-Infinity);
  var i = 0;
  while ((i < (fp.gc.length | 0))) {
    var ps = fp.gc[i].bi;
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
$p.sy = (function(bnd, origin, dir) {
  var edges = bnd.gb;
  var ts = [];
  var i = 0;
  while ((i < (edges.length | 0))) {
    var e = edges[i];
    var ex = (e.aA.l - e.a6.l);
    var ez = (e.aA.k - e.a6.k);
    var det = ((ex * dir.k) - (ez * dir.l));
    if (((+Math.abs(det)) > 1.0E-12)) {
      var rx = (e.a6.l - origin.l);
      var rz = (e.a6.k - origin.k);
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
    if ((((t1 - t0) > 1.0E-9) && $m_Lsketchlib_utils_room_Confine$package$().lU(bnd, new $c_Ltrivalibs_graphics_math_cpu_Vec2((origin.l + (dir.l * mid)), (origin.k + (dir.k * mid)))))) {
      out.push(new $c_T2$mcDD$sp(t0, t1));
    }
    j = ((1 + j) | 0);
  }
  return out;
});
var $d_Lsketchlib_utils_room_Plan$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Plan$package$, "sketchlib.utils.room.Plan$package$", ({
  dF: 1
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
$p.sW = (function(f, bnd, height, soffitY) {
  var edges = bnd.gb;
  var nx = (-f.ba.k);
  var nz = f.ba.l;
  var minO = Infinity;
  var maxO = (-Infinity);
  var i = 0;
  while ((i < (edges.length | 0))) {
    var o = ((edges[i].a6.l * nx) + (edges[i].a6.k * nz));
    if ((o < minO)) {
      minO = o;
    }
    if ((o > maxO)) {
      maxO = o;
    }
    i = ((1 + i) | 0);
  }
  var out = [];
  var a = ((minO - f.bZ) / f.c0);
  var k = (+Math.ceil(a));
  var a$1 = ((maxO - f.bZ) / f.c0);
  var kMax = (+Math.floor(a$1));
  while ((k <= kMax)) {
    var off = (f.bZ + (k * f.c0));
    var origin = new $c_Ltrivalibs_graphics_math_cpu_Vec2((nx * off), (nz * off));
    var spans = $m_Lsketchlib_utils_room_Plan$package$().sy(bnd, origin, f.ba);
    var s = 0;
    while ((s < (spans.length | 0))) {
      var sp = spans[s];
      out.push(new $c_Lsketchlib_utils_room_Beam(new $c_Ltrivalibs_graphics_math_cpu_Vec2((origin.l + (f.ba.l * (+sp.a0()))), (origin.k + (f.ba.k * (+sp.a0())))), new $c_Ltrivalibs_graphics_math_cpu_Vec2((origin.l + (f.ba.l * (+sp.a1()))), (origin.k + (f.ba.k * (+sp.a1())))), f.h5, height, soffitY));
      s = ((1 + s) | 0);
    }
    k = (k + 1.0);
  }
  return out;
});
var $d_Lsketchlib_utils_room_Raster$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Raster$package$, "sketchlib.utils.room.Raster$package$", ({
  dG: 1
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
$p.jX = (function(bounds, y, faceUp, margin) {
  var x0 = ((+bounds.aP) - margin);
  var x1 = ((+bounds.aY) + margin);
  var z0 = ((+bounds.aQ) - margin);
  var z1 = ((+bounds.aZ) + margin);
  var w = (x1 - x0);
  var d = (z1 - z0);
  return (faceUp ? $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().gt($p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x0, z0), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x0, z1), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x1, z1), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x1, z0)) : $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().gt($p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x0, z1), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x0, z0), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x1, z0), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x1, z1)));
});
var $d_Lsketchlib_utils_room_Surfaces$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Surfaces$package$, "sketchlib.utils.room.Surfaces$package$", ({
  dI: 1
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
$p.vz = (function(bnd, topY) {
  var edges = bnd.gb;
  var out = [];
  var i = 0;
  while ((i < (edges.length | 0))) {
    var e = edges[i];
    var dx = (e.aA.l - e.a6.l);
    var dz = (e.aA.k - e.a6.k);
    var $x_1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((0.5 * (e.a6.l + e.aA.l)), (0.5 * topY), (0.5 * (e.a6.k + e.aA.k)));
    var p$proxy1 = ((dx * dx) + (dz * dz));
    out.push(new $c_Lsketchlib_utils_room_Wall($x_1, (+Math.sqrt(p$proxy1)), topY, new $c_Ltrivalibs_graphics_math_cpu_Vec3(e.bI.l, 0.0, e.bI.k)));
    i = ((1 + i) | 0);
  }
  return out;
});
var $d_Lsketchlib_utils_room_Walls$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Walls$package$, "sketchlib.utils.room.Walls$package$", ({
  dJ: 1
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
  dK: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.h8 = null;
  this.kG = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.h8 = [];
  this.kG = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.qI = (function() {
  return (import.meta.hot !== (void 0));
});
$p.u7 = (function() {
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
$p.vd = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().u7()) + ":") + label);
});
$p.me = (function() {
  return window.sessionStorage;
});
$p.uE = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().me().getItem(key);
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
$p.vF = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().me().setItem(key, JSON.stringify(json));
});
$p.uK = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().me().removeItem(key);
});
$p.sQ = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().kG)) {
    $m_Ltrivalibs_dev_dev$package$().kG = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().h8.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().h8[i].is();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.uH = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().sQ();
  $m_Ltrivalibs_dev_dev$package$().h8.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().qT($m_Ltrivalibs_dev_dev$package$().h8, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().h8.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  dL: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.aj.w, cam.aj.A, cam.aj.u, cam.b3, cam.bM];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.bL;
      var aspect$1 = cam.gn;
      var near$1 = cam.hn;
      var far$1 = cam.hm;
      cam.mc(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
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
$p.sd = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().qI())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().vd(label);
    var initPos = cam.aj;
    var initRotH = cam.b3;
    var initRotV = cam.bM;
    var stored = $m_Ltrivalibs_dev_dev$package$().uE(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.is();
      $m_Ltrivalibs_dev_dev$package$().uK(sk);
      var fov$proxy1 = cam.bL;
      var aspect$proxy1 = cam.gn;
      var near$proxy1 = cam.hn;
      var far$proxy1 = cam.hm;
      cam.mc(fov$proxy1, aspect$proxy1, near$proxy1, far$proxy1, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().uH(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().vF(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  dM: 1
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
  this.I = null;
  this.J = null;
  this.G = null;
  this.o = buffer;
  this.I = device;
  this.J = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.G = $x_1;
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
  this.kH = null;
  this.jg = null;
  this.kH = vertices;
  this.jg = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  dU: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FaceData(normal, section) {
  this.ge = null;
  this.rM = 0;
  this.ge = normal;
  this.rM = section;
}
$p = $c_Ltrivalibs_graphics_geometry_FaceData.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FaceData;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FaceData() {
}
$h_Ltrivalibs_graphics_geometry_FaceData.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_FaceData = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FaceData, "trivalibs.graphics.geometry.FaceData", ({
  dV: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.hU = null;
  this.ai = null;
  this.c3 = null;
  this.ji = null;
  this.jh = null;
  this.hU = evidence$1;
  this.ai = [];
  this.c3 = [];
  this.ji = [];
  this.jh = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.s1 = (function(face, normal, section) {
  var faceIdx = (this.ai.length | 0);
  this.ai.push(face);
  this.c3.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().uu(this.hU.bP(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().tf(Object, this.jh, key)) {
      var $x_2 = this.ji;
      var dict = this.jh;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().mW.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.od.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.ji.length | 0);
      var dict$1 = this.jh;
      dict$1[key] = idx;
      this.ji.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.hU.bP(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
$p.qK = (function() {
  var hasQuads = false;
  var i = 0;
  while ((i < (this.ai.length | 0))) {
    var arr = this.ai[i];
    if ((this.c3[i].ge === null)) {
      var $x_2 = this.c3[i];
      if (((arr.length | 0) === 3)) {
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$().m7(this.ai[i], this.hU);
      } else {
        hasQuads = true;
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().m7(this.ai[i], this.hU);
      }
      $x_2.ge = $x_1;
    }
    i = ((1 + i) | 0);
  }
  return hasQuads;
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  dZ: 1
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
$p.lK = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().s2(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  e0: 1
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
  this.hW = null;
  this.hV = 0.0;
  this.hW = normal;
  this.hV = d;
}
$p = $c_Ltrivalibs_graphics_geometry_Plane.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane() {
}
$h_Ltrivalibs_graphics_geometry_Plane.prototype = $p;
$p.uG = (function() {
  var a = this.hW.w;
  var b = this.hW.A;
  var c = this.hW.u;
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((1.0 - ((2.0 * a) * a)), (((-2.0) * a) * b), (((-2.0) * a) * c), 0.0, (((-2.0) * a) * b), (1.0 - ((2.0 * b) * b)), (((-2.0) * b) * c), 0.0, (((-2.0) * a) * c), (((-2.0) * b) * c), (1.0 - ((2.0 * c) * c)), 0.0, ((2.0 * a) * this.hV), ((2.0 * b) * this.hV), ((2.0 * c) * this.hV), 1.0);
});
var $d_Ltrivalibs_graphics_geometry_Plane = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane, "trivalibs.graphics.geometry.Plane", ({
  e1: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Plane$() {
  this.oa = null;
  $n_Ltrivalibs_graphics_geometry_Plane$ = this;
  this.oa = new $c_Ltrivalibs_graphics_geometry_Plane(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), 0.0);
}
$p = $c_Ltrivalibs_graphics_geometry_Plane$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane$() {
}
$h_Ltrivalibs_graphics_geometry_Plane$.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Plane$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane$, "trivalibs.graphics.geometry.Plane$", ({
  e2: 1
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
  this.rN = 0;
  this.rO = 0;
  this.rN = faceIndex;
  this.rO = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  e4: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.rP = null;
  this.od = null;
  this.rP = position;
  this.od = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  e9: 1
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
$p.m4 = (function(idxBuf, vertexCount) {
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
  ea: 1
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
$p.s2 = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.s1(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  eb: 1
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
$p.uu = (function(v) {
  return (((($doubleToInt((10000.0 * v.w)) + ",") + $doubleToInt((10000.0 * v.A))) + ",") + $doubleToInt((10000.0 * v.u)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  ec: 1
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
$p.gt = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
$p.mh = (function(q) {
  return q[0];
});
$p.lP = (function(q) {
  return q[1];
});
$p.lQ = (function(q) {
  return q[2];
});
$p.mj = (function(q) {
  return q[3];
});
$p.m7 = (function(q, evidence$1) {
  var a = evidence$1.bP(this.mh(q));
  var b = evidence$1.bP(this.lP(q));
  var c = evidence$1.bP(this.lQ(q));
  var d = evidence$1.bP(this.mj(q));
  var d1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((c.w - a.w), (c.A - a.A), (c.u - a.u));
  var d2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((d.w - b.w), (d.A - b.A), (d.u - b.u));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), d1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), d2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  ee: 1
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
$p.rY = (function(tri) {
  return tri[0];
});
$p.si = (function(tri) {
  return tri[1];
});
$p.st = (function(tri) {
  return tri[2];
});
$p.m7 = (function(tri, evidence$1) {
  var pa = evidence$1.bP(this.rY(tri));
  var pb = evidence$1.bP(this.si(tri));
  var pc = evidence$1.bP(this.st(tri));
  var e1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pb.w - pa.w), (pb.A - pa.A), (pb.u - pa.u));
  var e2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pc.w - pa.w), (pc.A - pa.A), (pc.u - pa.u));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().Q(), e1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), e2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$, "trivalibs.graphics.geometry.polygon$package$Triangle$", ({
  ef: 1
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
$p.mi = (function(x) {
  if ($isInt(x)) {
    var i = (x | 0);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ("" + i));
  } else {
    return x;
  }
});
var $d_Ltrivalibs_graphics_lib_args$package$ = new $TypeData().i($c_Ltrivalibs_graphics_lib_args$package$, "trivalibs.graphics.lib.args$package$", ({
  eg: 1
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
$p.tj = (function(h, s, v, out) {
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
  eh: 1
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
  var a00 = (+x$2.iy(m));
  var a01 = (+x$2.iz(m));
  var a02 = (+x$2.iA(m));
  var a03 = (+x$2.iB(m));
  var a10 = (+x$2.iC(m));
  var a11 = (+x$2.iD(m));
  var a12 = (+x$2.iE(m));
  var a13 = (+x$2.iF(m));
  var a20 = (+x$2.iG(m));
  var a21 = (+x$2.iH(m));
  var a22 = (+x$2.iI(m));
  var a23 = (+x$2.iJ(m));
  var a30 = (+x$2.iK(m));
  var a31 = (+x$2.iL(m));
  var a32 = (+x$2.iM(m));
  var a33 = (+x$2.iN(m));
  var b00 = (+x$2.iy(other));
  var b01 = (+x$2.iz(other));
  var b02 = (+x$2.iA(other));
  var b03 = (+x$2.iB(other));
  var b10 = (+x$2.iC(other));
  var b11 = (+x$2.iD(other));
  var b12 = (+x$2.iE(other));
  var b13 = (+x$2.iF(other));
  var b20 = (+x$2.iG(other));
  var b21 = (+x$2.iH(other));
  var b22 = (+x$2.iI(other));
  var b23 = (+x$2.iJ(other));
  var b30 = (+x$2.iK(other));
  var b31 = (+x$2.iL(other));
  var b32 = (+x$2.iM(other));
  var b33 = (+x$2.iN(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.iy(m));
  var a01 = (+x$2.iz(m));
  var a02 = (+x$2.iA(m));
  var a03 = (+x$2.iB(m));
  var a10 = (+x$2.iC(m));
  var a11 = (+x$2.iD(m));
  var a12 = (+x$2.iE(m));
  var a13 = (+x$2.iF(m));
  var a20 = (+x$2.iG(m));
  var a21 = (+x$2.iH(m));
  var a22 = (+x$2.iI(m));
  var a23 = (+x$2.iJ(m));
  var a30 = (+x$2.iK(m));
  var a31 = (+x$2.iL(m));
  var a32 = (+x$2.iM(m));
  var a33 = (+x$2.iN(m));
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
  mb.qX(m, (+x$4.iy(other)));
  mb.qY(m, (+x$4.iz(other)));
  mb.qZ(m, (+x$4.iA(other)));
  mb.r0(m, (+x$4.iB(other)));
  mb.r1(m, (+x$4.iC(other)));
  mb.r2(m, (+x$4.iD(other)));
  mb.r3(m, (+x$4.iE(other)));
  mb.r4(m, (+x$4.iF(other)));
  mb.r5(m, (+x$4.iG(other)));
  mb.r6(m, (+x$4.iH(other)));
  mb.r7(m, (+x$4.iI(other)));
  mb.r8(m, (+x$4.iJ(other)));
  mb.r9(m, (+x$4.iK(other)));
  mb.ra(m, (+x$4.iL(other)));
  mb.rb(m, (+x$4.iM(other)));
  mb.rc(m, (+x$4.iN(other)));
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
  x$2.hA(v, (+x$4.ag(other)));
  x$2.hB(v, (+x$4.ah(other)));
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
  x$2.hA(v, (+x$4.ag(other)));
  x$2.hB(v, (+x$4.ah(other)));
  x$2.ms(v, (+x$4.bt(other)));
  x$2.mn(v, (+x$4.bs(other)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.kI = 0.0;
  this.kJ = 0.0;
  this.kK = 0.0;
  this.kL = 0.0;
  this.kM = 0.0;
  this.kN = 0.0;
  this.kO = 0.0;
  this.kP = 0.0;
  this.kQ = 0.0;
  this.kR = 0.0;
  this.kS = 0.0;
  this.kT = 0.0;
  this.kU = 0.0;
  this.kV = 0.0;
  this.kW = 0.0;
  this.kX = 0.0;
  this.kI = m00;
  this.kJ = m01;
  this.kK = m02;
  this.kL = m03;
  this.kM = m10;
  this.kN = m11;
  this.kO = m12;
  this.kP = m13;
  this.kQ = m20;
  this.kR = m21;
  this.kS = m22;
  this.kT = m23;
  this.kU = m30;
  this.kV = m31;
  this.kW = m32;
  this.kX = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  ev: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.jl = 0.0;
  this.jm = 0.0;
  this.jn = 0.0;
  this.jk = 0.0;
  this.jl = x;
  this.jm = y;
  this.jn = z;
  this.jk = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  ey: 1
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
$p.t7 = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.t8 = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  ez: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((((((+x$2.bs(q)) * (+x$2.ag(p))) + ((+x$2.ag(q)) * (+x$2.bs(p)))) + ((+x$2.ah(q)) * (+x$2.bt(p)))) - ((+x$2.bt(q)) * (+x$2.ah(p)))), (((((+x$2.bs(q)) * (+x$2.ah(p))) - ((+x$2.ag(q)) * (+x$2.bt(p)))) + ((+x$2.ah(q)) * (+x$2.bs(p)))) + ((+x$2.bt(q)) * (+x$2.ag(p)))), (((((+x$2.bs(q)) * (+x$2.bt(p))) + ((+x$2.ag(q)) * (+x$2.ah(p)))) - ((+x$2.ah(q)) * (+x$2.ag(p)))) + ((+x$2.bt(q)) * (+x$2.bs(p)))), (((((+x$2.bs(q)) * (+x$2.bs(p))) - ((+x$2.ag(q)) * (+x$2.ag(p)))) - ((+x$2.ah(q)) * (+x$2.ah(p)))) - ((+x$2.bt(q)) * (+x$2.bt(p)))));
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
  eD: 1
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
  eG: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4(x, y, z, w) {
  this.gf = 0.0;
  this.c5 = 0.0;
  this.c6 = 0.0;
  this.c4 = 0.0;
  this.gf = x;
  this.c5 = y;
  this.c6 = z;
  this.c4 = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4, "trivalibs.graphics.math.cpu.Vec4", ({
  eJ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  this.on = null;
  this.oo = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.td = (function() {
  if ((!this.oo)) {
    this.on = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.oo = true;
  }
  return this.on;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  eN: 1
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
  this.op = null;
  this.oq = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = $p;
$p.vu = (function() {
  if ((!this.oq)) {
    this.op = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6();
    this.oq = true;
  }
  return this.op;
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$", ({
  eQ: 1
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
  this.or = null;
  this.os = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = $p;
$p.vw = (function() {
  if ((!this.os)) {
    this.or = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8();
    this.os = true;
  }
  return this.or;
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$", ({
  eT: 1
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
$p.aN = (function() {
  return new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$10$2) => {
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), _$10$2);
  })));
});
$p.tc = (function() {
  return new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$11$2) => {
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), _$11$2);
  })));
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$, "trivalibs.graphics.math.gpu.LeftScalar$", ({
  eX: 1
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
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(v));
});
$p.vn = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec2<f32>(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(v.l)) + ", ") + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(v.k)) + ")"));
});
$p.hz = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(v.w)) + ", ") + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(v.A)) + ", ") + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aa(v.u)) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$, "trivalibs.graphics.math.gpu.cpu_interop$package$", ({
  f0: 1
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
$p.rq = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.f) + ", ") + sampler.f) + ", ") + uv.f) + ")"));
});
$p.ae = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.f) + ", ") + sampler.f) + ", ") + uv.f) + ")"));
});
$p.jS = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.f) + ", ") + coord.f) + ", 0)"));
});
$p.sH = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.f) + ", ") + coord.f) + ", 0)"));
});
$p.uT = (function(onFalse, onTrue, cond) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("select(" + onFalse.f) + ", ") + onTrue.f) + ", ") + cond.f) + ")"));
});
$p.t2 = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " > ") + b.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  f1: 1
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
    var p = parts.as(i);
    if ((p.length > 0)) {
      out.push(p);
    }
    i = ((1 + i) | 0);
  }
  return out.join("\n");
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$Block$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$Block$, "trivalibs.graphics.math.gpu.expr$package$Block$", ({
  f2: 1
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
  this.ov = null;
  this.ow = false;
  this.ox = null;
  this.oy = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.aa = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.j = (function() {
  if ((!this.ow)) {
    this.ov = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.ow = true;
  }
  return this.ov;
});
$p.cg = (function() {
  if ((!this.oy)) {
    this.ox = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.oy = true;
  }
  return this.ox;
});
$p.vv = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".xy"));
});
$p.k5 = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".xz"));
});
$p.cj = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".xy"));
});
$p.mt = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".zw"));
});
$p.gB = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".xyz"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  f3: 1
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
$p.cf = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec2<i32>(" + v.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_ivec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_ivec2$, "trivalibs.graphics.math.gpu.ivec2$", ({
  ff: 1
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
$p.a3 = (function(x, y) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec2<f32>(" + x.f) + ", ") + y.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec2$, "trivalibs.graphics.math.gpu.vec2$", ({
  fg: 1
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
$p.ae = (function(x, y, z) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.f) + ", ") + y.f) + ", ") + z.f) + ")"));
});
$p.cf = (function(scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec3<f32>(" + scalar.f) + ")"));
});
$p.s7 = (function(scalar) {
  return this.cf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(scalar));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  fh: 1
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
$p.lL = (function(x, y, z, w) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("vec4<f32>(" + x.f) + ", ") + y.f) + ", ") + z.f) + ", ") + w.f) + ")"));
});
$p.a3 = (function(xyz, w) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.f) + ", ") + w.f) + ")"));
});
$p.ae = (function(xy, z, w) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec4<f32>(" + xy.f) + ", ") + z.f) + ", ") + w.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  fi: 1
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
  this.l1 = null;
  this.l3 = 0;
  this.l2 = 0;
  this.kY = null;
  this.l0 = 0;
  this.kZ = 0;
  this.h9 = null;
  this.hX = null;
  this.jo = null;
  this.l1 = null;
  this.l3 = (-1);
  this.l2 = (-1);
  this.kY = null;
  this.l0 = (-1);
  this.kZ = (-1);
  this.h9 = [];
  this.hX = [];
  this.jo = null;
}
$p = $c_Ltrivalibs_graphics_painter_BindCache.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindCache;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindCache() {
}
$h_Ltrivalibs_graphics_painter_BindCache.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindCache = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindCache, "trivalibs.graphics.painter.BindCache", ({
  fj: 1
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
  fk: 1
}));
function $f_Ltrivalibs_graphics_painter_Bindable__$init$__V($thiz) {
  $thiz.jK(0);
  $thiz.lO(null);
}
function $f_Ltrivalibs_graphics_painter_Bindable__setValueSlot__I__O__V($thiz, idx, value) {
  while ((($thiz.bN().length | 0) <= idx)) {
    $thiz.bN().push(null);
  }
  if ((!($thiz.bN()[idx] === value))) {
    $thiz.bN()[idx] = value;
    $thiz.jK(((1 + $thiz.it()) | 0));
  }
}
function $f_Ltrivalibs_graphics_painter_Bindable__setPanelSlot__I__Ltrivalibs_graphics_painter_PanelBinding__V($thiz, idx, pb) {
  while ((($thiz.bE().length | 0) <= idx)) {
    $thiz.bE().push(null);
  }
  var old = $thiz.bE()[idx];
  if ((old === null)) {
    var $x_1 = true;
  } else {
    var x = old.panel;
    var x$2 = pb.panel;
    var $x_1 = (!((x === null) ? (x$2 === null) : (x === x$2)));
  }
  if (((($x_1 || ((old.index | 0) !== (pb.index | 0))) || ((old.mipLevel | 0) !== (pb.mipLevel | 0))) || ((!(!old.depth)) !== (!(!pb.depth))))) {
    $thiz.bE()[idx] = pb;
    $thiz.jK(((1 + $thiz.it()) | 0));
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BlendState$() {
  this.oA = null;
  this.oz = null;
  $n_Ltrivalibs_graphics_painter_BlendState$ = this;
  this.oA = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one-minus-src-alpha"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one-minus-src-alpha"));
  this.oz = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one"));
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst", "zero"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst-alpha", "zero"));
}
$p = $c_Ltrivalibs_graphics_painter_BlendState$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BlendState$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BlendState$() {
}
$h_Ltrivalibs_graphics_painter_BlendState$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BlendState$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_BlendState$, "trivalibs.graphics.painter.BlendState$", ({
  fl: 1
}));
var $n_Ltrivalibs_graphics_painter_BlendState$;
function $m_Ltrivalibs_graphics_painter_BlendState$() {
  if ((!$n_Ltrivalibs_graphics_painter_BlendState$)) {
    $n_Ltrivalibs_graphics_painter_BlendState$ = new $c_Ltrivalibs_graphics_painter_BlendState$();
  }
  return $n_Ltrivalibs_graphics_painter_BlendState$;
}
function $p_Ltrivalibs_graphics_painter_CanvasSurface$__preferredFormat__T($thiz) {
  var gpu = $m_Ltrivalibs_graphics_painter_WebGPU$().qP();
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
$p.s9 = (function(canvas, format) {
  return new $c_Ltrivalibs_graphics_painter_CanvasSurface(canvas, ((format === (void 0)) ? $p_Ltrivalibs_graphics_painter_CanvasSurface$__preferredFormat__T(this) : format));
});
var $d_Ltrivalibs_graphics_painter_CanvasSurface$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_CanvasSurface$, "trivalibs.graphics.painter.CanvasSurface$", ({
  fm: 1
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
  while ((i < $thiz.gg)) {
    var b = $thiz.gh[i];
    if (((format === null) && (b.c8 > 0))) {
      format = b.gi;
    }
    i = ((1 + i) | 0);
  }
  $thiz.l8 = format;
}
function $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V($thiz, index, verts, indices, widenTo32) {
  while ((($thiz.gh.length | 0) <= index)) {
    $thiz.gh.push(new $c_Ltrivalibs_graphics_painter_FormBuffers());
  }
  var b = $thiz.gh[index];
  $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts);
  if ((indices !== null)) {
    $p_Ltrivalibs_graphics_painter_Form__uploadIndices__Ltrivalibs_graphics_painter_FormBuffers__sjs_js_typedarray_TypedArray__Z__V($thiz, b, indices, widenTo32);
  } else {
    b.c8 = 0;
    b.hZ = 0;
  }
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts) {
  var data = verts.dv.buffer;
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.c9 === null) || (b.lb < padded))) {
    if ((b.c9 !== null)) {
      b.c9.destroy();
    }
    b.c9 = $thiz.hY.h.createBuffer(({
      "size": padded,
      "usage": 40
    }));
    b.lb = padded;
  }
  $thiz.hY.aU.writeBuffer(b.c9, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.jq = size;
  b.ha = (verts.off | 0);
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
    b.gi = "uint32";
    var data = u32.buffer;
  } else if ((!(!(raw instanceof Uint16Array)))) {
    count = (raw.length | 0);
    b.gi = "uint16";
    var data = raw.buffer;
  } else {
    count = (raw.length | 0);
    b.gi = "uint32";
    var data = raw.buffer;
  }
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.c7 === null) || (b.la < padded))) {
    if ((b.c7 !== null)) {
      b.c7.destroy();
    }
    b.c7 = $thiz.hY.h.createBuffer(({
      "size": padded,
      "usage": 24
    }));
    b.la = padded;
  }
  $thiz.hY.aU.writeBuffer(b.c7, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.hZ = size;
  b.c8 = count;
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
  this.hY = null;
  this.gh = null;
  this.gg = 0;
  this.l9 = null;
  this.l7 = null;
  this.l8 = null;
  this.hY = painter;
  this.gh = [];
  this.gg = 0;
  this.l9 = "triangle-list";
  this.l7 = "ccw";
  this.l8 = null;
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.uU = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.l9 = topology;
  }
  if ((frontFace !== (void 0))) {
    this.l7 = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, geometry.kH, geometry.jg, false);
    this.gg = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, vertices, null, false);
    this.gg = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((geometries !== (void 0))) {
    var use32 = false;
    var i = 0;
    while ((i < (geometries.length | 0))) {
      var idx = geometries[i].jg;
      if (((idx !== null) && (!(!(idx instanceof Uint32Array))))) {
        use32 = true;
      }
      i = ((1 + i) | 0);
    }
    i = 0;
    while ((i < (geometries.length | 0))) {
      var geo = geometries[i];
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i, geo.kH, geo.jg, use32);
      i = ((1 + i) | 0);
    }
    this.gg = (geometries.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((verticesAll !== (void 0))) {
    var i$1 = 0;
    while ((i$1 < (verticesAll.length | 0))) {
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i$1, verticesAll[i$1], null, false);
      i$1 = ((1 + i$1) | 0);
    }
    this.gg = (verticesAll.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  fn: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_FormBuffers() {
  this.c9 = null;
  this.lb = 0;
  this.jq = 0;
  this.ha = 0;
  this.c7 = null;
  this.la = 0;
  this.hZ = 0;
  this.c8 = 0;
  this.gi = null;
  this.c9 = null;
  this.lb = 0;
  this.jq = 0;
  this.ha = 0;
  this.c7 = null;
  this.la = 0;
  this.hZ = 0;
  this.c8 = 0;
  this.gi = "uint16";
}
$p = $c_Ltrivalibs_graphics_painter_FormBuffers.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_FormBuffers;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_FormBuffers() {
}
$h_Ltrivalibs_graphics_painter_FormBuffers.prototype = $p;
var $d_Ltrivalibs_graphics_painter_FormBuffers = new $TypeData().i($c_Ltrivalibs_graphics_painter_FormBuffers, "trivalibs.graphics.painter.FormBuffers", ({
  fo: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.i0 = null;
  this.i0 = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.R = (function() {
  return (this.i0.length | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  fp: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__fireResize__D__D__V($thiz, w, h) {
  var k = 0;
  while ((k < ($thiz.ju.length | 0))) {
    $thiz.ju[k].qx(w, h);
    k = ((1 + k) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  if (panel.hf) {
    throw new $c_sjs_js_JavaScriptException(Error("Painter.paint: the panel is frozen")).W;
  }
  panel.lW($doubleToInt($thiz.rI()), $doubleToInt($thiz.qS()));
  if (panel.md()) {
    return (void 0);
  }
  $thiz.ro(panel);
}
function $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, shape, depthTest, multisample, formats, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.i2]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Z__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.Y, shape.lj, fmts, depthTest, multisample, shape.ic.l9, shape.lk, shape.ic.l7, shape.ic.l8, false);
  pass.setPipeline(pipeline);
  var form = shape.ic;
  var bufferCount = form.gg;
  var instanceCount = shape.ll.R();
  var runtime = $p_Ltrivalibs_graphics_painter_Painter__runtimeBindingsOf__Ltrivalibs_graphics_painter_Panel__sjs_js_Dictionary($thiz, panel);
  if ((instanceCount === 0)) {
    $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Bindable__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape, null, runtime, null);
    var b = 0;
    while ((b < bufferCount)) {
      var buf = form.gh[b];
      if ((buf.ha > 0)) {
        pass.setVertexBuffer(0, buf.c9, 0.0, buf.jq);
        if ((buf.c8 > 0)) {
          pass.setIndexBuffer(buf.c7, buf.gi, 0.0, buf.hZ);
          pass.drawIndexed(buf.c8);
        } else {
          pass.draw(buf.ha);
        }
      }
      b = ((1 + b) | 0);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Bindable__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape, shape.ll.i0[i], runtime, null);
      var b$2 = 0;
      while ((b$2 < bufferCount)) {
        var buf$2 = form.gh[b$2];
        if ((buf$2.ha > 0)) {
          pass.setVertexBuffer(0, buf$2.c9, 0.0, buf$2.jq);
          if ((buf$2.c8 > 0)) {
            pass.setIndexBuffer(buf$2.c7, buf$2.gi, 0.0, buf$2.hZ);
            pass.drawIndexed(buf$2.c8);
          } else {
            pass.draw(buf$2.ha);
          }
        }
        b$2 = ((1 + b$2) | 0);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.i2]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Z__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.V, layer.lc, fmts, depthTest, multisample, "triangle-list", "none", "ccw", null, false);
  pass.setPipeline(pipeline);
  var instanceCount = layer.jr.R();
  var runtime = $p_Ltrivalibs_graphics_painter_Painter__runtimeBindingsOf__Ltrivalibs_graphics_painter_Panel__sjs_js_Dictionary($thiz, panel);
  if ((instanceCount === 0)) {
    $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Bindable__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer, null, runtime, srcView);
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Bindable__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer, layer.jr.i0[i], runtime, srcView);
      pass.draw(3);
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__runtimeBindingsOf__Ltrivalibs_graphics_painter_Panel__sjs_js_Dictionary($thiz, panel) {
  if ((panel === null)) {
    return null;
  } else {
    var dict = panel.i8;
    var keys = Object.keys(dict);
    return (((keys.length | 0) > 0) ? dict : null);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__resolveValueSlot__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__O($thiz, shade, i, bindings, inst, runtime) {
  var fromInst = (((inst !== null) && (i < (inst.bN().length | 0))) ? inst.bN()[i] : null);
  if ((fromInst !== null)) {
    return fromInst;
  } else {
    var own = ((i < (bindings.length | 0)) ? bindings[i] : null);
    if ((own !== null)) {
      return own;
    } else {
      if ((runtime !== null)) {
        var key$proxy3 = shade.jC[i];
        var $x_1 = (!(!(!(!runtime.hasOwnProperty(key$proxy3)))));
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        var key$proxy4 = shade.jC[i];
        return runtime[key$proxy4];
      } else {
        return null;
      }
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__boundPanelSlot__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__Ltrivalibs_graphics_painter_PanelBinding($thiz, k, panelBindings, inst) {
  var fromInst = (((inst !== null) && (k < (inst.bE().length | 0))) ? inst.bE()[k] : null);
  return ((fromInst !== null) ? fromInst : ((k < (panelBindings.length | 0)) ? panelBindings[k] : null));
}
function $p_Ltrivalibs_graphics_painter_Painter__fallbackPanelView__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUTextureView($thiz, shade, k, runtime, srcView) {
  if ((runtime !== null)) {
    var key$proxy5 = shade.ib[k];
    var $x_1 = (!(!(!(!runtime.hasOwnProperty(key$proxy5)))));
  } else {
    var $x_1 = false;
  }
  if ($x_1) {
    var key$proxy6 = shade.ib[k];
    var value = runtime[key$proxy6];
    return ((!(!(value instanceof $a_Ltrivalibs_graphics_painter_PanelBinding()))) ? $p_Ltrivalibs_graphics_painter_Painter__panelBindingView__Ltrivalibs_graphics_painter_PanelBinding__Ltrivalibs_graphics_painter_GPUTextureView($thiz, value) : value.a7[0].ln);
  } else {
    return ((k === 0) ? srcView : null);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__panelBindingView__Ltrivalibs_graphics_painter_PanelBinding__Ltrivalibs_graphics_painter_GPUTextureView($thiz, pb) {
  return ((!(!pb.depth)) ? pb.panel.sG() : (((pb.mipLevel | 0) < 0) ? pb.panel.a7[(pb.index | 0)].ln : pb.panel.a7[(pb.index | 0)].aV[(pb.mipLevel | 0)]));
}
function $p_Ltrivalibs_graphics_painter_Painter__setBindGroups__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Bindable__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, x, inst, runtime, srcView) {
  var shade = x.rs();
  if ((runtime !== null)) {
    var vg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, x.bN(), inst, runtime);
    if ((vg !== null)) {
      pass.setBindGroup(0, vg);
    } else if ((shade.hl !== null)) {
      pass.setBindGroup(0, $p_Ltrivalibs_graphics_painter_Painter__emptyBindGroup__Ltrivalibs_graphics_painter_GPUBindGroup($thiz));
    }
    var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_BindCache__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, x.bE(), inst, runtime, srcView, null);
    if ((pg !== null)) {
      pass.setBindGroup(1, pg);
    }
  } else {
    var owner = ((inst !== null) ? inst : x);
    if ((owner.lN() === null)) {
      owner.lO(new $c_Ltrivalibs_graphics_painter_BindCache());
    }
    var x$proxy12 = owner.lN();
    var ownVersion = owner.it();
    var parentVersion = ((inst !== null) ? x.it() : 0);
    if (((x$proxy12.l3 !== ownVersion) || (x$proxy12.l2 !== parentVersion))) {
      x$proxy12.l1 = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, x.bN(), inst, null);
      x$proxy12.l3 = ownVersion;
      x$proxy12.l2 = parentVersion;
    }
    var vg$2 = x$proxy12.l1;
    if ((vg$2 !== null)) {
      pass.setBindGroup(0, vg$2);
    } else if ((shade.hl !== null)) {
      pass.setBindGroup(0, $p_Ltrivalibs_graphics_painter_Painter__emptyBindGroup__Ltrivalibs_graphics_painter_GPUBindGroup($thiz));
    }
    if ((((x$proxy12.l0 !== ownVersion) || (x$proxy12.kZ !== parentVersion)) || (!$p_Ltrivalibs_graphics_painter_Painter__panelViewsCurrent__Ltrivalibs_graphics_painter_BindCache__Ltrivalibs_graphics_painter_GPUTextureView__Z($thiz, x$proxy12, srcView)))) {
      x$proxy12.kY = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_BindCache__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, x.bE(), inst, null, srcView, x$proxy12);
      x$proxy12.l0 = ownVersion;
      x$proxy12.kZ = parentVersion;
    }
    var pg$2 = x$proxy12.kY;
    if ((pg$2 !== null)) {
      pass.setBindGroup(1, pg$2);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__panelViewsCurrent__Ltrivalibs_graphics_painter_BindCache__Ltrivalibs_graphics_painter_GPUTextureView__Z($thiz, c, srcView) {
  var builtSrc = c.jo;
  var current = ((builtSrc === null) || (builtSrc === srcView));
  var k = 0;
  while ((current && (k < (c.h9.length | 0)))) {
    var p = c.h9[k];
    if (((p !== null) && (p.i4 !== (c.hX[k] | 0)))) {
      current = false;
    }
    k = ((1 + k) | 0);
  }
  return current;
}
function $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings, inst, runtime) {
  if ((shade.lh === null)) {
    return null;
  } else {
    var names = shade.jC;
    var entries = [];
    var i = 0;
    while ((i < (names.length | 0))) {
      var b = $p_Ltrivalibs_graphics_painter_Painter__resolveValueSlot__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__O($thiz, shade, i, bindings, inst, runtime);
      if ((b === null)) {
        var message$proxy2 = $p_Ltrivalibs_graphics_painter_Painter__missingBindingMessage__T__T($thiz, names[i]);
        throw new $c_sjs_js_JavaScriptException(Error(message$proxy2)).W;
      }
      entries.push($p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b));
      i = ((1 + i) | 0);
    }
    var $x_1 = $thiz.h;
    var _2 = shade.lh;
    return $x_1.createBindGroup(({
      "layout": _2,
      "entries": entries
    }));
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_BindCache__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, panelBindings, inst, runtime, srcView, cache) {
  if ((shade.hl === null)) {
    return null;
  } else {
    var names = shade.ib;
    if ((cache !== null)) {
      cache.h9.length = (names.length | 0);
      cache.hX.length = (names.length | 0);
      cache.jo = null;
    }
    var entries = [];
    var k = 0;
    while ((k < (names.length | 0))) {
      var pb = $p_Ltrivalibs_graphics_painter_Painter__boundPanelSlot__I__sjs_js_Array__Ltrivalibs_graphics_painter_Instance__Ltrivalibs_graphics_painter_PanelBinding($thiz, k, panelBindings, inst);
      var view = ((pb !== null) ? $p_Ltrivalibs_graphics_painter_Painter__panelBindingView__Ltrivalibs_graphics_painter_PanelBinding__Ltrivalibs_graphics_painter_GPUTextureView($thiz, pb) : $p_Ltrivalibs_graphics_painter_Painter__fallbackPanelView__Ltrivalibs_graphics_painter_Shade__I__sjs_js_Dictionary__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUTextureView($thiz, shade, k, runtime, srcView));
      if ((view === null)) {
        var message$proxy3 = $p_Ltrivalibs_graphics_painter_Painter__missingBindingMessage__T__T($thiz, names[k]);
        throw new $c_sjs_js_JavaScriptException(Error(message$proxy3)).W;
      }
      if ((cache !== null)) {
        if ((pb !== null)) {
          cache.h9[k] = pb.panel;
          cache.hX[k] = pb.panel.i4;
        } else {
          cache.h9[k] = null;
          cache.hX[k] = 0;
          cache.jo = view;
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
    var _2 = shade.hl;
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
    var _2 = b.G;
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
  var key = (((((((((((((((shade.p1 + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthKey) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace) + stripKey);
  var cached = $thiz.lg[key];
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
    if ((shade.li !== null)) {
      var _2 = shade.jB;
      var _2$1 = [shade.li];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.jB;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.p2;
    var _2$4 = shade.jB;
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
    $thiz.lg[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__sharedLinearSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.oY)) {
    $thiz.oX = $thiz.ma("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0), 1);
    $thiz.oY = true;
  }
  return $thiz.oX;
}
function $p_Ltrivalibs_graphics_painter_Painter__emptyBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.oS)) {
    var $x_2 = $thiz.h;
    var _2 = [];
    var $x_1 = $x_2.createBindGroupLayout(({
      "entries": _2
    }));
    $thiz.oR = $x_1;
    $thiz.oS = true;
  }
  return $thiz.oR;
}
function $p_Ltrivalibs_graphics_painter_Painter__emptyBindGroup__Ltrivalibs_graphics_painter_GPUBindGroup($thiz) {
  if ((!$thiz.oT)) {
    var $x_2 = $thiz.h;
    var _2 = $p_Ltrivalibs_graphics_painter_Painter__emptyBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
    var _2$1 = [];
    var $x_1 = $x_2.createBindGroup(({
      "layout": _2,
      "entries": _2$1
    }));
    $thiz.oQ = $x_1;
    $thiz.oT = true;
  }
  return $thiz.oQ;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.oL)) {
    $thiz.oK = $thiz.h.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.oL = true;
  }
  return $thiz.oK;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.oF)) {
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
    $thiz.oE = $x_1;
    $thiz.oF = true;
  }
  return $thiz.oE;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitModule__Ltrivalibs_graphics_painter_GPUShaderModule($thiz) {
  if ((!$thiz.oH)) {
    $thiz.oG = $thiz.h.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    $thiz.oH = true;
  }
  return $thiz.oG;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipelineLayout__Ltrivalibs_graphics_painter_GPUPipelineLayout($thiz) {
  if ((!$thiz.oJ)) {
    var $x_2 = $thiz.h;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var $x_1 = $x_2.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    $thiz.oI = $x_1;
    $thiz.oJ = true;
  }
  return $thiz.oI;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipelineFor__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  var cached = $thiz.ld[format];
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
    $thiz.ld[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__sourceShade__Ltrivalibs_graphics_painter_Shade($thiz) {
  if ((!$thiz.p0)) {
    var id = $thiz.q;
    $thiz.q = ((1 + $thiz.q) | 0);
    $thiz.oZ = new $c_Ltrivalibs_graphics_painter_Shade(id, $p_Ltrivalibs_graphics_painter_Painter__blitModule__Ltrivalibs_graphics_painter_GPUShaderModule($thiz), null, null, null, $p_Ltrivalibs_graphics_painter_Painter__blitPipelineLayout__Ltrivalibs_graphics_painter_GPUPipelineLayout($thiz), false, ({}), ({}));
    $thiz.p0 = true;
  }
  return $thiz.oZ;
}
function $p_Ltrivalibs_graphics_painter_Painter__drawSource__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Panel__Z__sjs_js_Array__V($thiz, pass, panel, multisample, formats) {
  var group = panel.jA;
  if ((group === null)) {
    if (((panel.gm === "rgba32float") && (!(!(!$thiz.h.features.has("float32-filterable")))))) {
      throw new $c_sjs_js_JavaScriptException(Error("Panel: drawing an rgba32float source needs the device feature 'float32-filterable'. Pass requiredFeatures = Arr(\"float32-filterable\") to Painter.init, use rgba16float, or keep the panel on the direct path (source size and format, no shapes or layers).")).W;
    }
    var $x_1 = $thiz.h;
    var _2 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
    var x$proxy13 = panel.ia;
    var _2$1 = $p_Ltrivalibs_graphics_painter_Painter__sharedLinearSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz);
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
    panel.jA = group;
  }
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Z__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, $p_Ltrivalibs_graphics_painter_Painter__sourceShade__Ltrivalibs_graphics_painter_Shade($thiz), panel.jz, formats, panel.cb, multisample, "triangle-list", "none", "ccw", null, true));
  pass.setBindGroup(0, group);
  pass.draw(3);
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.oN)) {
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
    $thiz.oM = $x_1;
    $thiz.oN = true;
  }
  return $thiz.oM;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.oP)) {
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
    $thiz.oO = $x_2;
    $thiz.oP = true;
  }
  return $thiz.oO;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.h.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.uP();
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
  var _2$4 = panel.qG();
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
  $thiz.aU.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.oW)) {
    $thiz.oV = $thiz.h.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.oW = true;
  }
  return $thiz.oV;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Painter(device, surface, adapter, gpu) {
  this.h = null;
  this.ca = null;
  this.oD = null;
  this.oU = null;
  this.aU = null;
  this.i2 = null;
  this.q = 0;
  this.ju = null;
  this.lf = 0;
  this.le = 0;
  this.lg = null;
  this.ld = null;
  this.oX = null;
  this.oY = false;
  this.oR = null;
  this.oS = false;
  this.oQ = null;
  this.oT = false;
  this.oK = null;
  this.oL = false;
  this.oE = null;
  this.oF = false;
  this.oG = null;
  this.oH = false;
  this.oI = null;
  this.oJ = false;
  this.oZ = null;
  this.p0 = false;
  this.oM = null;
  this.oN = false;
  this.oO = null;
  this.oP = false;
  this.oV = null;
  this.oW = false;
  this.h = device;
  this.ca = surface;
  this.oD = adapter;
  this.oU = gpu;
  this.aU = device.queue;
  if ((adapter !== null)) {
    adapter.info;
  }
  this.i2 = surface.l5;
  this.q = 0;
  this.ju = [];
  this.lf = 0;
  this.le = 0;
  this.lg = ({});
  this.ld = ({});
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.sv = (function() {
  var x1 = this.ca;
  if ((x1 instanceof $c_Ltrivalibs_graphics_painter_CanvasSurface)) {
    return x1.aT;
  }
  throw new $c_sjs_js_JavaScriptException(Error("Painter.canvas: this painter has no canvas")).W;
});
$p.tn = (function() {
  this.ca.sA(this);
  this.ca.uj(((arg1$2, arg2$2) => {
    $p_Ltrivalibs_graphics_painter_Painter__fireResize__D__D__V(this, (arg1$2 | 0), (arg2$2 | 0));
  }));
});
$p.rI = (function() {
  return ((this.lf > 0) ? this.lf : this.ca.vA());
});
$p.qS = (function() {
  return ((this.le > 0) ? this.le : this.ca.ti());
});
$p.ui = (function(cb) {
  this.ju.push(cb);
  cb.qx(this.rI(), this.qS());
});
$p.ma = (function(magFilter, minFilter, mipmapFilter, addressMode, addressModeU, addressModeV, maxAnisotropy) {
  var $x_1 = this.h;
  var a$proxy1 = ((addressModeU === (void 0)) ? addressMode : addressModeU);
  var a$proxy2 = ((addressModeV === (void 0)) ? addressMode : addressModeV);
  return $x_1.createSampler(({
    "magFilter": magFilter,
    "minFilter": minFilter,
    "mipmapFilter": mipmapFilter,
    "addressModeU": a$proxy1,
    "addressModeV": a$proxy2,
    "maxAnisotropy": maxAnisotropy
  }));
});
$p.lY = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).uU(geometry, vertices, geometries, verticesAll, topology, frontFace);
});
$p.gz = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).uW(cullMode, blendState);
});
$p.gw = (function(shade, blendState, mipSource, mipTarget) {
  return new $c_Ltrivalibs_graphics_painter_Layer(this, shade).uV(blendState, mipSource, mipTarget);
});
$p.ch = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers, source, sourceBlend, followSurface, flipY, premultipliedAlpha) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).iT(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers, source, sourceBlend, followSurface, flipY, premultipliedAlpha);
});
$p.uZ = (function(panel) {
  var encoder = this.h.createCommandEncoder();
  this.so(encoder, panel, this.ca.sE(), this.i2);
  this.ca.uv(encoder);
});
$p.ro = (function(panel) {
  var msaa = panel.gk;
  var encoder = this.h.createCommandEncoder();
  var panelFormats = panel.hv();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.rw())) {
    if ((panel.jv !== null)) {
      var x$proxy4 = panel.jv;
      if (msaa) {
        var _2 = panel.rg(t);
        var TextureViewBundle_this = panel.a7[t];
        var _2$1 = TextureViewBundle_this.aV[0];
        var value = x$proxy4.gf;
        var value$1 = x$proxy4.c5;
        var value$2 = x$proxy4.c6;
        var value$3 = x$proxy4.c4;
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
        var TextureViewBundle_this$2 = panel.a7[t];
        var _2$3 = TextureViewBundle_this$2.aV[0];
        var value$4 = x$proxy4.gf;
        var value$5 = x$proxy4.c5;
        var value$6 = x$proxy4.c6;
        var value$7 = x$proxy4.c4;
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
      var _2$5 = panel.rg(t);
      var TextureViewBundle_this$3 = panel.a7[t];
      var _2$6 = TextureViewBundle_this$3.aV[0];
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var TextureViewBundle_this$4 = panel.a7[t];
      var _2$7 = TextureViewBundle_this$4.aV[0];
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
  if (panel.cb) {
    var _2$8 = panel.qG();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  if (panel.sO()) {
    $p_Ltrivalibs_graphics_painter_Painter__drawSource__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Panel__Z__sjs_js_Array__V(this, shapePass, panel, msaa, panelFormats);
  }
  var i = 0;
  while ((i < (panel.i9.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V(this, shapePass, panel.i9[i], panel.cb, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  this.aU.submit([encoder.finish()]);
  if (panel.i5) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V(this, panel);
  }
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.bJ.length | 0))) {
    var layer = panel.bJ[j];
    var needsPingPong = layer.ut(panel);
    if ((layer.i1 >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        this.aU.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.a7[0].aV[layer.i1];
      var mipSrcView = ((layer.js >= 0) ? panel.a7[0].aV[layer.js] : panel.mg());
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
      this.aU.submit([enc.finish()]);
    } else if (needsPingPong) {
      if ((curPass !== null)) {
        curPass.end();
        this.aU.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = this.h.createCommandEncoder();
      var _2$10 = panel.us();
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
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V(this, ppPass, layer, false, false, panelFormats, panel.mg(), panel);
      ppPass.end();
      this.aU.submit([enc$2.finish()]);
      panel.vh();
    } else {
      if ((curPass === null)) {
        curEncoder = this.h.createCommandEncoder();
        var $x_1 = curEncoder;
        var _2$13 = panel.mg();
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
    this.aU.submit([curEncoder.finish()]);
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.bJ.length | 0))) {
    if ((panel.bJ[mi].i1 >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.iO() > 1) && (!hasMipTargetLayers))) {
    this.m0(panel);
  }
});
$p.so = (function(encoder, panel, dst, dstFormat) {
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
  var bundle = panel.a7[0];
  var group = bundle.lm;
  if ((group === null)) {
    var $x_1 = this.h;
    var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
    var _2$4 = bundle.aV[0];
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
    bundle.lm = group;
  }
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__blitPipelineFor__T__Ltrivalibs_graphics_painter_GPURenderPipeline(this, dstFormat));
  pass.setBindGroup(0, group);
  pass.draw(3);
  pass.end();
});
$p.m0 = (function(panel) {
  var mipCount = panel.iO();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__blitPipelineFor__T__Ltrivalibs_graphics_painter_GPURenderPipeline(this, panel.hv()[0]);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.a7[0].aV[((i - 1) | 0)];
    var dstView = panel.a7[0].aV[i];
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
    this.aU.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
});
Object.defineProperty($p, "gpu", ({
  "get": (function() {
    return this.oU;
  }),
  "configurable": true
}));
Object.defineProperty($p, "adapter", ({
  "get": (function() {
    return this.oD;
  }),
  "configurable": true
}));
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  fr: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter$__createPainter__Ltrivalibs_graphics_painter_GPUDevice__Ltrivalibs_graphics_painter_Surface__Ltrivalibs_graphics_painter_GPUAdapter__Ltrivalibs_graphics_painter_GPU__Ltrivalibs_graphics_painter_Painter($thiz, device, surface, adapter, gpu) {
  var painter = new $c_Ltrivalibs_graphics_painter_Painter(device, surface, adapter, gpu);
  painter.tn();
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
$p.tm = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().qP();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var surface = $m_Ltrivalibs_graphics_painter_CanvasSurface$().s9(canvas, maybeGpu.getPreferredCanvasFormat());
    var promise$proxy2 = $m_Ltrivalibs_graphics_painter_WebGPU$().uM(maybeGpu, (void 0), false, (void 0), false);
    var f$proxy16 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy1 = $m_Ltrivalibs_graphics_painter_WebGPU$().uN(adapter$2, (void 0), (void 0));
      var f$proxy15 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => $p_Ltrivalibs_graphics_painter_Painter$__createPainter__Ltrivalibs_graphics_painter_GPUDevice__Ltrivalibs_graphics_painter_Surface__Ltrivalibs_graphics_painter_GPUAdapter__Ltrivalibs_graphics_painter_GPU__Ltrivalibs_graphics_painter_Painter(this, device$2, surface, adapter$2, maybeGpu)));
      return promise$proxy1.then($m_sjs_js_Any$().hw(f$proxy15));
    }));
    return promise$proxy2.then($m_sjs_js_Any$().hw(f$proxy16));
  }
});
$p.tl = (function(canvas, setup) {
  var promise$proxy3 = this.tm(canvas);
  return promise$proxy3.then($m_sjs_js_Any$().hw(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  fs: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  $thiz.iV();
  if (($thiz.bj !== null)) {
    $thiz.bj.destroy();
  }
  if (($thiz.hh !== null)) {
    $thiz.hh.destroy();
  }
  var depthUsage = ($thiz.gj ? 20 : 16);
  var $x_1 = $thiz.aH.h;
  var value = $thiz.hd;
  var value$1 = $thiz.hc;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.gk ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.bj = depthTex;
  $thiz.he = depthTex.createView();
  if (($thiz.gj && $thiz.gk)) {
    var $x_2 = $thiz.aH.h;
    var value$2 = $thiz.hd;
    var value$3 = $thiz.hc;
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
    $thiz.hh = resTex;
    $thiz.hi = resTex.createView();
    $thiz.i5 = true;
  } else {
    $thiz.hh = null;
    $thiz.hi = null;
    $thiz.i5 = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.bJ.length | 0))) {
    if ($thiz.bJ[i].rd()) {
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
  return ((((((((((($thiz.bk.length | 0) > 0) ? $thiz.bk.join(",") : ($thiz.bl ? $thiz.gl : "preferred")) + "|") + $thiz.gk) + "|") + $thiz.cb) + "|") + $thiz.hg) + "|") + $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz));
}
function $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz) {
  return ($thiz.bl ? 23 : 20);
}
function $p_Ltrivalibs_graphics_painter_Panel__allocationStale__I__I__Z($thiz, w, h) {
  return ((((w !== $thiz.hd) || (h !== $thiz.hc)) || $thiz.i7) || (($thiz.i3 & $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz)) !== $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz)));
}
function $p_Ltrivalibs_graphics_painter_Panel__reallocate__I__I__V($thiz, w, h) {
  var d = 0;
  while ((d < ($thiz.aI.length | 0))) {
    $thiz.aI[d].destroy();
    d = ((1 + d) | 0);
  }
  d = 0;
  while ((d < ($thiz.cc.length | 0))) {
    $thiz.cc[d].destroy();
    d = ((1 + d) | 0);
  }
  if (((!$thiz.cb) && ($thiz.bj !== null))) {
    $thiz.bj.destroy();
    $thiz.bj = null;
    $thiz.he = null;
  }
  $thiz.hd = w;
  $thiz.hc = h;
  $thiz.i3 = $p_Ltrivalibs_graphics_painter_Panel__colorUsage__I($thiz);
  $thiz.i7 = false;
  var mipCount = $thiz.iO();
  var fmts = $thiz.hv();
  var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz);
  $thiz.aI = [];
  $thiz.a7 = [];
  $thiz.cc = [];
  $thiz.i6 = [];
  var i = 0;
  while ((i < (fmts.length | 0))) {
    var fmt = fmts[i];
    var $x_1 = $thiz.aH.h;
    var _2 = ({
      "width": w,
      "height": h
    });
    var value = $thiz.i3;
    var tex = $x_1.createTexture(({
      "size": _2,
      "format": fmt,
      "usage": value,
      "mipLevelCount": mipCount
    }));
    $thiz.aI.push(tex);
    $thiz.a7.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle($thiz, tex, mipCount));
    if ($thiz.gk) {
      var $x_2 = $thiz.aH.h;
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
      $thiz.cc.push(msaaTex);
      $thiz.i6.push(msaaTex.createView());
    }
    i = ((1 + i) | 0);
  }
  if (hasPong) {
    var $x_3 = $thiz.aH.h;
    var _2$2 = ({
      "width": w,
      "height": h
    });
    var f$proxy6 = fmts[0];
    var value$1 = $thiz.i3;
    var pongTex = $x_3.createTexture(({
      "size": _2$2,
      "format": f$proxy6,
      "usage": value$1,
      "mipLevelCount": mipCount
    }));
    $thiz.aI.push(pongTex);
    $thiz.a7.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle($thiz, pongTex, mipCount));
  }
  if ($thiz.cb) {
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz);
  }
  $thiz.iV();
}
function $p_Ltrivalibs_graphics_painter_Panel__noteSource__sjs_js_Object__V($thiz, source) {
  $thiz.bl = true;
  if ($m_Ltrivalibs_graphics_painter_sources$package$TextureSource$().qV(source)) {
    $m_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$().vs(source, "Panel.set(source)");
    $thiz.bn = (source.width | 0);
    $thiz.bm = (source.height | 0);
    $thiz.gl = source.format;
    $thiz.gm = $thiz.gl;
  } else {
    $thiz.bn = $p_Ltrivalibs_graphics_painter_sources$package$TextureSource$__size__sjs_js_Object__T__T__T__T__I($m_Ltrivalibs_graphics_painter_sources$package$TextureSource$(), source, "videoWidth", "naturalWidth", "displayWidth", "width");
    $thiz.bm = $p_Ltrivalibs_graphics_painter_sources$package$TextureSource$__size__sjs_js_Object__T__T__T__T__I($m_Ltrivalibs_graphics_painter_sources$package$TextureSource$(), source, "videoHeight", "naturalHeight", "displayHeight", "height");
    if ((($thiz.bn <= 0) || ($thiz.bm <= 0))) {
      throw new $c_sjs_js_JavaScriptException(Error("Panel.set(source): the image has no size yet \u2014 an <img> still loading, or a <video> before its first frame")).W;
    }
    $thiz.gl = "rgba8unorm";
    $thiz.gm = $thiz.hv()[0];
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__uploadSource__sjs_js_Object__V($thiz, source) {
  if ($thiz.jN()) {
    $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
    $thiz.bK = false;
    $thiz.lW(0, 0);
    $m_Ltrivalibs_graphics_painter_sources$package$TextureSource$().rA($thiz.aH.aU, source, $thiz.aI[0], $thiz.bn, $thiz.bm, $thiz.jw, $thiz.jy);
    $thiz.bK = true;
    if (($thiz.iO() > 1)) {
      $thiz.aH.m0($thiz);
    }
  } else {
    $thiz.bK = false;
    var current = $thiz.bx;
    if (((((current === null) || ((current.width | 0) !== $thiz.bn)) || ((current.height | 0) !== $thiz.bm)) || (current.format !== $thiz.gm))) {
      $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
      var $x_1 = $thiz.aH.h;
      var value = $thiz.bn;
      var value$1 = $thiz.bm;
      var _2 = ({
        "width": value,
        "height": value$1
      });
      var f$proxy9 = $thiz.gm;
      var tex = $x_1.createTexture(({
        "size": _2,
        "format": f$proxy9,
        "usage": 23
      }));
      $thiz.bx = tex;
      $thiz.ia = tex.createView();
    }
    $m_Ltrivalibs_graphics_painter_sources$package$TextureSource$().rA($thiz.aH.aU, source, $thiz.bx, $thiz.bn, $thiz.bm, $thiz.jw, $thiz.jy);
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__releaseSource__V($thiz) {
  $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
  $thiz.bK = false;
}
function $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz) {
  if (($thiz.bx !== null)) {
    $thiz.bx.destroy();
  }
  $thiz.bx = null;
  $thiz.ia = null;
  $thiz.jA = null;
}
function $p_Ltrivalibs_graphics_painter_Panel__adoptSlot0AsSource__V($thiz) {
  $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
  $thiz.bx = $thiz.aI.shift();
  var TextureViewBundle_this = $thiz.a7.shift();
  $thiz.ia = TextureViewBundle_this.aV[0];
  $thiz.bK = false;
  $thiz.i7 = true;
  $thiz.iV();
}
function $p_Ltrivalibs_graphics_painter_Panel__restoreSourceToSlot0__V($thiz) {
  var encoder = $thiz.aH.h.createCommandEncoder();
  var x$proxy11 = $thiz.bx;
  var _2 = $thiz.aI[0];
  var value = $thiz.bn;
  var value$1 = $thiz.bm;
  encoder.copyTextureToTexture(({
    "texture": x$proxy11
  }), ({
    "texture": _2
  }), ({
    "width": value,
    "height": value$1
  }));
  $thiz.aH.aU.submit([encoder.finish()]);
  $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V($thiz);
  $thiz.bK = true;
  if (($thiz.iO() > 1)) {
    $thiz.aH.m0($thiz);
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
  this.aH = null;
  this.hk = 0;
  this.hj = 0;
  this.jv = null;
  this.cb = false;
  this.gk = false;
  this.hg = 0;
  this.bk = null;
  this.i9 = null;
  this.bJ = null;
  this.jz = null;
  this.jx = false;
  this.jw = false;
  this.jy = false;
  this.i8 = null;
  this.i4 = 0;
  this.aI = null;
  this.a7 = null;
  this.bj = null;
  this.he = null;
  this.gj = false;
  this.hh = null;
  this.hi = null;
  this.i5 = false;
  this.cc = null;
  this.i6 = null;
  this.hd = 0;
  this.hc = 0;
  this.i3 = 0;
  this.i7 = false;
  this.hf = false;
  this.bl = false;
  this.bn = 0;
  this.bm = 0;
  this.gl = null;
  this.gm = null;
  this.bK = false;
  this.bx = null;
  this.ia = null;
  this.jA = null;
  this.aH = painter;
  this.hk = 0;
  this.hj = 0;
  this.jv = null;
  this.cb = false;
  this.gk = false;
  this.hg = 1;
  this.bk = [];
  this.i9 = [];
  this.bJ = [];
  this.jz = null;
  this.jx = false;
  this.jw = false;
  this.jy = false;
  this.i8 = ({});
  this.i4 = 0;
  this.aI = [];
  this.a7 = [];
  this.bj = null;
  this.he = null;
  this.gj = false;
  this.hh = null;
  this.hi = null;
  this.i5 = false;
  this.cc = [];
  this.i6 = [];
  this.hd = 0;
  this.hc = 0;
  this.i3 = 0;
  this.i7 = false;
  this.hf = false;
  this.bl = false;
  this.bn = 0;
  this.bm = 0;
  this.gl = "rgba8unorm";
  this.gm = "rgba8unorm";
  this.bK = false;
  this.bx = null;
  this.ia = null;
  this.jA = null;
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.iO = (function() {
  if ((this.hg === 0)) {
    var a = this.hd;
    var b = this.hc;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.hg;
  }
});
$p.hv = (function() {
  return (((this.bk.length | 0) > 0) ? this.bk : (this.bl ? [this.gl] : [this.aH.i2]));
});
$p.md = (function() {
  return ((((this.bl && ((this.i9.length | 0) === 0)) && ((this.bJ.length | 0) === 0)) && (this.jz === null)) && (!this.jx));
});
$p.jN = (function() {
  return ((((this.md() && ((this.hk === 0) || (this.hk === this.bn))) && ((this.hj === 0) || (this.hj === this.bm))) && ((this.bk.length | 0) <= 1)) && (this.hv()[0] === this.gm));
});
$p.sO = (function() {
  return (this.bl && (!this.jN()));
});
$p.rw = (function() {
  return (this.hv().length | 0);
});
$p.mg = (function() {
  var TextureViewBundle_this = this.a7[0];
  return TextureViewBundle_this.aV[0];
});
$p.us = (function() {
  var TextureViewBundle_this = this.a7[1];
  return TextureViewBundle_this.aV[0];
});
$p.qG = (function() {
  return this.he;
});
$p.uP = (function() {
  return this.hi;
});
$p.rg = (function(index) {
  return this.i6[index];
});
$p.vh = (function() {
  var t = this.aI[0];
  this.aI[0] = this.aI[1];
  this.aI[1] = t;
  var sv = this.a7[0];
  this.a7[0] = this.a7[1];
  this.a7[1] = sv;
  this.iV();
});
$p.iV = (function() {
  this.i4 = ((1 + this.i4) | 0);
});
$p.sG = (function() {
  if ((this.hf && (!this.gj))) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: a frozen panel keeps its depth only if it was sampled before freeze(). Bind binding(depth = true) before freezing.")).W;
  }
  if (((!this.gj) && (this.bj !== null))) {
    this.gj = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return ((this.hi !== null) ? this.hi : this.he);
});
$p.sn = (function(index, mipLevel, depth) {
  return new ($a_Ltrivalibs_graphics_painter_PanelBinding())(this, index, mipLevel, depth);
});
$p.iT = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers, source, sourceBlend, followSurface, flipY, premultipliedAlpha) {
  if (this.hf) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel.set: the panel is frozen")).W;
  }
  var allocationBefore = $p_Ltrivalibs_graphics_painter_Panel__allocationKey__T(this);
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.hk = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.hj = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.jv = ((clearColor === null) ? null : new $c_Ltrivalibs_graphics_math_cpu_Vec4(clearColor.gf, clearColor.c5, clearColor.c6, clearColor.c4));
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.cb = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.gk = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.hg = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.hg = v$5;
    }
  }
  var x$1 = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy1$1__O__O(this, format) : formats);
  if ((x$1 !== (void 0))) {
    this.bk = x$1;
  }
  var x$2 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy2$1__O__O(this, shape) : shapes);
  if ((x$2 !== (void 0))) {
    this.i9 = x$2;
  }
  var x$3 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__alternative$proxy3$1__O__O(this, layer) : layers);
  if ((x$3 !== (void 0))) {
    this.bJ = x$3;
  }
  if ((sourceBlend !== (void 0))) {
    this.jz = sourceBlend;
  }
  if ((followSurface !== (void 0))) {
    var v$6 = (!(!followSurface));
    this.jx = v$6;
  }
  if ((flipY !== (void 0))) {
    var v$7 = (!(!flipY));
    this.jw = v$7;
  }
  if ((premultipliedAlpha !== (void 0))) {
    var v$8 = (!(!premultipliedAlpha));
    this.jy = v$8;
  }
  if ((source !== (void 0))) {
    if ((source === null)) {
      if ((this.bl && ((this.bk.length | 0) === 0))) {
        this.bk = [this.gl];
      }
      this.bl = false;
    } else {
      $p_Ltrivalibs_graphics_painter_Panel__noteSource__sjs_js_Object__V(this, source);
    }
  }
  if ((((this.bk.length | 0) > 1) && $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this))) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot host auto-pong layers. Chain a single-format panel for post-processing instead.")).W;
  }
  if ((((this.bk.length | 0) > 1) && this.bl)) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot have a source. Bind the source panel as a texture of the MRT shapes instead.")).W;
  }
  if (($p_Ltrivalibs_graphics_painter_Panel__allocationKey__T(this) !== allocationBefore)) {
    this.i7 = true;
  }
  if ((source !== (void 0))) {
    if ((source === null)) {
      $p_Ltrivalibs_graphics_painter_Panel__releaseSource__V(this);
    } else {
      $p_Ltrivalibs_graphics_painter_Panel__uploadSource__sjs_js_Object__V(this, source);
    }
  }
  if (this.md()) {
    this.lW(0, 0);
    if ((!this.jN())) {
      this.aH.ro(this);
    }
  }
  return this;
});
$p.t4 = (function() {
  if ((!this.hf)) {
    this.hf = true;
    var d = 0;
    while ((d < (this.cc.length | 0))) {
      this.cc[d].destroy();
      d = ((1 + d) | 0);
    }
    this.cc = [];
    this.i6 = [];
    while (((this.aI.length | 0) > this.rw())) {
      this.aI.pop().destroy();
      this.a7.pop();
    }
    var keepDepth = (this.gj && (this.hh === null));
    if (((this.bj !== null) && (!keepDepth))) {
      this.bj.destroy();
      this.bj = null;
      this.he = null;
    }
    this.i5 = false;
    $p_Ltrivalibs_graphics_painter_Panel__releaseSourceTexture__V(this);
    this.iV();
  }
  return this;
});
$p.lW = (function(surfaceW, surfaceH) {
  var useSource = (this.bl && (!this.jx));
  var w = ((this.hk > 0) ? this.hk : (useSource ? this.bn : surfaceW));
  var h = ((this.hj > 0) ? this.hj : (useSource ? this.bm : surfaceH));
  var direct = this.jN();
  if ((this.bK && ((!direct) || $p_Ltrivalibs_graphics_painter_Panel__allocationStale__I__I__Z(this, w, h)))) {
    $p_Ltrivalibs_graphics_painter_Panel__adoptSlot0AsSource__V(this);
  }
  if ($p_Ltrivalibs_graphics_painter_Panel__allocationStale__I__I__Z(this, w, h)) {
    $p_Ltrivalibs_graphics_painter_Panel__reallocate__I__I__V(this, w, h);
  }
  if (((direct && (!this.bK)) && (this.bx !== null))) {
    $p_Ltrivalibs_graphics_painter_Panel__restoreSourceToSlot0__V(this);
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  ft: 1
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
  this.p1 = 0;
  this.jB = null;
  this.li = null;
  this.lh = null;
  this.hl = null;
  this.p2 = null;
  this.K = null;
  this.aB = null;
  this.jC = null;
  this.ib = null;
  this.p1 = id;
  this.jB = shaderModule;
  this.li = vertexBufferLayout;
  this.lh = valueBindGroupLayout;
  this.hl = panelBindGroupLayout;
  this.p2 = pipelineLayout;
  this.K = uniformIndices;
  this.aB = panelIndices;
  this.jC = $p_Ltrivalibs_graphics_painter_Shade__slotNames__sjs_js_Dictionary__sjs_js_Array(this, uniformIndices);
  this.ib = $p_Ltrivalibs_graphics_painter_Shade__slotNames__sjs_js_Dictionary__sjs_js_Array(this, panelIndices);
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  fu: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, sampling) {
  this.aV = null;
  this.ln = null;
  this.lm = null;
  this.aV = perMip;
  this.ln = sampling;
  this.lm = null;
}
$p = $c_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_TextureViewBundle;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_TextureViewBundle() {
}
$h_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = $p;
var $d_Ltrivalibs_graphics_painter_TextureViewBundle = new $TypeData().i($c_Ltrivalibs_graphics_painter_TextureViewBundle, "trivalibs.graphics.painter.TextureViewBundle", ({
  fx: 1
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
$p.qP = (function() {
  return (((typeof navigator) === "undefined") ? (void 0) : navigator.gpu);
});
$p.tb = (function(canvas) {
  return canvas.getContext("webgpu");
});
$p.uM = (function(gpu, powerPreference, forceFallbackAdapter, requireAdapter, logAdapter) {
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
      throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).W;
    } else {
      return value$2;
    }
  }));
  var f$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
    if (logAdapter) {
      var s = ("WebGPU adapter: " + this.qH(adapter$2.info));
      console.log(s);
    }
    if ((requireAdapter !== (void 0))) {
      if ((!(!(!requireAdapter(adapter$2.info))))) {
        var message$proxy1 = ("WebGPU adapter rejected by requireAdapter: " + this.qH(adapter$2.info));
        throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).W;
      }
    }
    return adapter$2;
  }));
  return promise$proxy2.then($m_sjs_js_Any$().hw(f$proxy1));
});
$p.uN = (function(adapter, requiredFeatures, requiredLimits) {
  var descriptor = ({});
  if ((requiredFeatures !== (void 0))) {
    descriptor.requiredFeatures = requiredFeatures;
  }
  if ((requiredLimits !== (void 0))) {
    descriptor.requiredLimits = requiredLimits;
  }
  return adapter.requestDevice(descriptor);
});
$p.qH = (function(info) {
  return ((info === (void 0)) ? "(no adapter info)" : ((((((info.vendor + " / ") + info.architecture) + " / ") + info.device) + " / ") + info.description));
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  fy: 1
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
$p.tv = (function(data) {
  return (data.length | 0);
});
$p.u5 = (function(format, data) {
  return ((format === "rgba8unorm") ? (!(!(data instanceof Uint8Array))) : ((format === "rgba32float") ? (!(!(data instanceof Float32Array))) : (((typeof Float16Array) !== "undefined") && (!(!(data instanceof Float16Array))))));
});
var $d_Ltrivalibs_graphics_painter_pixels$package$PixelData$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_pixels$package$PixelData$, "trivalibs.graphics.painter.pixels$package$PixelData$", ({
  fz: 1
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
  this.rS = null;
  this.rQ = null;
  this.rR = null;
  this.rS = "rgba8unorm";
  this.rQ = "rgba16float";
  this.rR = "rgba32float";
}
$p = $c_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$() {
}
$h_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$.prototype = $p;
$p.qA = (function(f) {
  return ((f === "rgba8unorm") ? 4 : ((f === "rgba16float") ? 8 : ((f === "rgba32float") ? 16 : 0)));
});
var $d_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$, "trivalibs.graphics.painter.pixels$package$PixelFormat$", ({
  fA: 1
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
$p.vs = (function(target, where) {
  var width = (target.width | 0);
  var height = (target.height | 0);
  var format = target.format;
  if (($m_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$().qA(format) === 0)) {
    var message$proxy3 = (((where + ": unsupported pixel target format '") + format) + "'; use rgba8unorm, rgba16float or rgba32float");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy3)).W;
  }
  if ((!((width > 0) && (height > 0)))) {
    var message$proxy4 = ((((where + ": invalid pixel target size ") + width) + "\u00d7") + height);
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy4)).W;
  }
  if ((!(!("frames" in target)))) {
    var arg = target.frames;
    if ((!(!(!Array.isArray(arg))))) {
      var message$proxy5 = (where + ": PixelFrames.frames must be an array");
      throw new $c_sjs_js_JavaScriptException(Error(message$proxy5)).W;
    }
  } else {
    var data = target.data;
    if (((data === (void 0)) || (!$m_Ltrivalibs_graphics_painter_pixels$package$PixelData$().u5(format, data)))) {
      var message$proxy6 = (((where + ": PixelImage.data must be the array type of '") + format) + "' (Uint8Array / Float16Array / Float32Array)");
      throw new $c_sjs_js_JavaScriptException(Error(message$proxy6)).W;
    }
    var length = $m_Ltrivalibs_graphics_painter_pixels$package$PixelData$().tv(data);
    if ((length !== (Math.imul(width, height) << 2))) {
      var message$proxy7 = ((((where + ": PixelImage.data length ") + length) + " is not width \u00b7 height \u00b7 4 = ") + (Math.imul(width, height) << 2));
      throw new $c_sjs_js_JavaScriptException(Error(message$proxy7)).W;
    }
  }
});
var $d_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_pixels$package$PixelTarget$, "trivalibs.graphics.painter.pixels$package$PixelTarget$", ({
  fB: 1
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
$p.qV = (function(source) {
  return ((!(!("data" in source))) && (!(!("format" in source))));
});
$p.rA = (function(queue, source, texture, width, height, flipY, premultipliedAlpha) {
  if (this.qV(source)) {
    var data = source.data;
    var $x_1 = data.buffer;
    var value = (data.byteOffset | 0);
    var value$1 = Math.imul(width, $m_Ltrivalibs_graphics_painter_pixels$package$PixelFormat$().qA(source.format));
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
  fC: 1
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
  this.p6 = null;
  this.aw = null;
  this.lo = 0.0;
  this.p7 = 0.0;
  this.p6 = cam;
  this.aw = in$1;
  this.lo = sensitivity;
  this.p7 = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.gA = (function(tpf) {
  var dist = ((this.p7 * tpf) / 1000.0);
  var forward = 0.0;
  if (((this.aw.aK.br("KeyW") || this.aw.aK.br("ArrowUp")) || (this.aw.lz.gr && (this.aw.aK.rl() === 1)))) {
    forward = (forward + dist);
  }
  if ((((this.aw.aK.br("KeyS") || this.aw.aK.br("ArrowDown")) || this.aw.aK.tr(2)) || (this.aw.aK.rl() >= 2))) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((this.aw.aK.br("KeyA") || this.aw.aK.br("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((this.aw.aK.br("KeyD") || this.aw.aK.br("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (this.aw.aK.br("Space")) {
    up = (up + dist);
  }
  if ((this.aw.aK.br("ShiftLeft") || this.aw.aK.br("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = this.aw.ly.sF();
  var deltaH = (((+drag.a0()) * this.lo) / 1000.0);
  var deltaV = (((+drag.a1()) * this.lo) / 1000.0);
  this.p6.ua(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  fD: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.bL = 0.0;
  this.gn = 0.0;
  this.hn = 0.0;
  this.hm = 0.0;
  this.b3 = 0.0;
  this.bM = 0.0;
  this.aj = null;
  this.jD = null;
  this.bL = fov;
  this.gn = aspect;
  this.hn = near;
  this.hm = far;
  this.b3 = rotH;
  this.bM = rotV;
  this.aj = pos;
  this.jD = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.mc = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.bL) || (aspect !== this.gn)) || (near !== this.hn)) || (far !== this.hm));
  this.bL = fov;
  this.gn = aspect;
  this.hn = near;
  this.hm = far;
  if ((rotH !== this.b3)) {
    this.b3 = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().mm(rotH);
  }
  if ((rotV !== this.bM)) {
    this.bM = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().mk(rotV);
  }
  this.aj = pos;
  if (needsProj) {
    this.jD = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().ml(this.bL, this.gn), aspect, near, far);
  }
});
$p.ua = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.b3 = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().mm((this.b3 + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.bM = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().mk((this.bM + deltaV));
  }
  if ((up !== 0.0)) {
    this.aj = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.aj.w, (this.aj.A + up), this.aj.u);
  }
  if ((forward !== 0.0)) {
    var $x_5 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().Q();
    var $x_4 = this.aj;
    var $x_3 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().Q();
    var p$proxy1 = this.b3;
    var $x_1 = Math.sin(p$proxy1);
    var p$proxy2 = this.b3;
    this.aj = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_5, $x_4, $x_3, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_2, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_1)), 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_10 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().Q();
    var $x_9 = this.aj;
    var $x_8 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().Q();
    var p$proxy3 = this.b3;
    var $x_6 = Math.cos(p$proxy3);
    var p$proxy4 = this.b3;
    this.aj = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_10, $x_9, $x_8, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_7, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_6)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.vp = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.aj, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().t8(this.b3), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().t7(this.bM)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.rD = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().hx();
  var t = this.vp();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().t9(t.pa, t.p8, t.p9), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  fE: 1
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
$p.mm = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.mk = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.ml = (function(fov, aspect) {
  var p$proxy5 = (0.5 * fov);
  var p$proxy6 = ((+Math.tan(p$proxy5)) / (+Math.min(aspect, 1.0)));
  return (2.0 * (+Math.atan(p$proxy6)));
});
$p.s6 = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), this.ml(fov, aspect), aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.mm(rotH), this.mk(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  fF: 1
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
  this.pa = null;
  this.p8 = null;
  this.p9 = null;
  this.pa = translation;
  this.p8 = rotation;
  this.p9 = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  fG: 1
}));
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.aX) + ") ") + b.aD) + ": ")) + b.b5);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().rK($m_sjs_js_ArrayOps$().rJ(locNames, new $c_sjs_js_WrappedArray(locTypes)));
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
    var name$1 = x0$1.aD;
    var builtin = x0$1.aX;
    var typ$1 = x0$1.b5;
    res$1[$x_2] = (((((("  @builtin(" + builtin) + ") ") + name$1) + ": ") + typ$1) + ",");
    i$1 = ((1 + i$1) | 0);
  }
  var allFields = $m_sjs_js_ArrayOpsCommon$().a(res, res$1);
  return (((allFields.length | 0) === 0) ? "" : (((("struct " + structName) + " {\n") + allFields.join("\n")) + "\n}"));
}
function $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($thiz, groupIdx, names, types) {
  var array$1 = $m_sjs_js_ArrayOps$().rK($m_sjs_js_ArrayOps$().rJ(names, new $c_sjs_js_WrappedArray(types)));
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
  fJ: 1
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
  fK: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.lp = null;
  this.Z = null;
  this.lp = ({});
  this.Z = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
$p.rB = (function(d) {
  if ((!(!(!(!(!this.lp.hasOwnProperty(d.name))))))) {
    this.lp[d.name] = true;
    var array = d.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      this.rB(array[i]);
      i = ((1 + i) | 0);
    }
    this.Z.push(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  fL: 1
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
$p.k4 = (function(d) {
  var r = this.n;
  if ((r !== null)) {
    r.rB(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  fM: 1
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
  this.N = null;
  this.aq = null;
  this.E = null;
  this.rT = null;
  this.ho = null;
  this.N = in$1;
  this.aq = out;
  this.E = bindings;
  this.rT = textures;
  this.ho = ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "in.position"));
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  fN: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.lq.hasOwnProperty(data.name))))))) {
    var dict = $thiz.lq;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.lr.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
  this.aJ = null;
  this.lr = null;
  this.lq = null;
  this.aJ = "";
  this.lr = [];
  this.lq = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
}
$h_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = $p;
$p.at = (function() {
  return this.lr.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_LayerProgram = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_LayerProgram, "trivalibs.graphics.shader.dsl.LayerProgram", ({
  fO: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.ls.hasOwnProperty(data.name))))))) {
    var dict = $thiz.ls;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.lt.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.ar = null;
  this.ad = null;
  this.lt = null;
  this.ls = null;
  this.ar = "";
  this.ad = "";
  this.lt = [];
  this.ls = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.at = (function() {
  return this.lt.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  fP: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, textures) {
  this.a8 = null;
  this.a2 = null;
  this.go = null;
  this.a8 = in$1;
  this.a2 = out;
  this.go = bindings;
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
  fT: 1
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
$p.rV = (function() {
  return [];
});
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_WgslFnData$, "trivalibs.graphics.shader.dsl.WgslFnData$", ({
  fV: 1
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
$p.a9 = (function(fn, ds) {
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
  ds.bD(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    if ((!(!(!(!(!seen.hasOwnProperty(d$3.name))))))) {
      seen[d$3.name] = true;
      merged.push(d$3);
    }
  })));
  return new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())(fn.name, fn.src, merged);
});
$p.jL = (function(fn, a1, a2, a3, a4) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k4(fn);
  return (((((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ", ") + a4) + ")");
});
$p.gu = (function(fn, a1, a2, a3, a4, a5) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k4(fn);
  return (((((((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ", ") + a4) + ", ") + a5) + ")");
});
$p.lR = (function(fn, a1, a2, a3, a4, a5, a6) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k4(fn);
  return (((((((((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ", ") + a4) + ", ") + a5) + ", ") + a6) + ")");
});
$p.su = (function(fn, a1, a2, a3, a4, a5, a6, a7) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k4(fn);
  return (((((((((((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ", ") + a4) + ", ") + a5) + ", ") + a6) + ", ") + a7) + ")");
});
var $d_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$, "trivalibs.graphics.shader.dsl.fn$package$WgslFn$", ({
  fW: 1
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
$p.O = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  fX: 1
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
$p.sq = (function(tex, s, uv, radius, res) {
  if ((res === null)) {
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().ss();
    var s$proxy1 = WgslFn$_this.jL(fn$proxy1, tex, s, uv, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy1);
  } else {
    var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy2 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().sr();
    var s$proxy2 = WgslFn$_this$2.gu(fn$proxy2, tex, s, uv, res, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy2);
  }
});
$p.vj = (function(tex, s, uv, radius, res) {
  if ((res === null)) {
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy3 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().vl();
    var s$proxy3 = WgslFn$_this.jL(fn$proxy3, tex, s, uv, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy3);
  } else {
    var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy4 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().vk();
    var s$proxy4 = WgslFn$_this$2.gu(fn$proxy4, tex, s, uv, res, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy4);
  }
});
var $d_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_blur_Blur$, "trivalibs.graphics.shader.lib.blur.Blur$", ({
  fY: 1
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
  this.pg = null;
  this.ph = false;
  this.pc = null;
  this.pf = false;
  this.pi = null;
  this.pl = false;
  this.pd = null;
  this.pe = false;
  this.pj = null;
  this.pk = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$.prototype = $p;
$p.ta = (function() {
  if ((!this.ph)) {
    this.pg = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_gaussian_9", "fn blur_gaussian_9(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, res: vec2<f32>, dir: vec2<f32>) -> vec4<f32> {\n  let off1 = vec2<f32>(1.3846153846) * dir / res;\n    let off2 = vec2<f32>(3.2307692308) * dir / res;\n    var color = textureSample(tex, s, uv) * 0.2270270270;\n    color += textureSample(tex, s, uv + off1) * 0.3162162162;\n    color += textureSample(tex, s, uv - off1) * 0.3162162162;\n    color += textureSample(tex, s, uv + off2) * 0.0702702703;\n    color += textureSample(tex, s, uv - off2) * 0.0702702703;\n    return color;\n}");
    this.ph = true;
  }
  return this.pg;
});
$p.sr = (function() {
  if ((!this.pf)) {
    this.pc = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_box_2d", "fn blur_box_2d(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, res: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n    var color = textureSample(tex, s, uv - o);\n    color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n    color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n    color += textureSample(tex, s, uv + o);\n    return color * 0.25;\n}");
    this.pf = true;
  }
  return this.pc;
});
$p.vk = (function() {
  if ((!this.pl)) {
    this.pi = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_tent_2d", "fn blur_tent_2d(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, res: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n    var color = textureSample(tex, s, uv) * 0.25;\n    color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n    color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n    return color;\n}");
    this.pl = true;
  }
  return this.pi;
});
$p.ss = (function() {
  if ((!this.pe)) {
    this.pd = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_box_2d_auto", "fn blur_box_2d_auto(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n    var color = textureSample(tex, s, uv - o);\n    color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n    color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n    color += textureSample(tex, s, uv + o);\n    return color * 0.25;\n}");
    this.pe = true;
  }
  return this.pd;
});
$p.vl = (function() {
  if ((!this.pk)) {
    this.pj = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_tent_2d_auto", "fn blur_tent_2d_auto(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n    var color = textureSample(tex, s, uv) * 0.25;\n    color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n    color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n    return color;\n}");
    this.pk = true;
  }
  return this.pj;
});
var $d_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$, "trivalibs.graphics.shader.lib.blur.Blur$wgsl$", ({
  fZ: 1
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
$p.sZ = (function(pos, octaves, lacunarity, gain, tilingPeriod, rot, seed) {
  var o = $m_Ltrivalibs_graphics_lib_args$package$().mi(octaves);
  var p = (tilingPeriod !== null);
  var r = (rot !== null);
  if ((seed === null)) {
    if ((p && r)) {
      var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy57 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().uA();
      var a6$proxy7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T(rot, 6.283185307179586);
      var s$proxy57 = WgslFn$_this.lR(fn$proxy57, pos, o, lacunarity, gain, tilingPeriod, a6$proxy7);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy57);
    } else if (p) {
      var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy58 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().uw();
      var s$proxy58 = WgslFn$_this$2.gu(fn$proxy58, pos, o, lacunarity, gain, tilingPeriod);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy58);
    } else if (r) {
      var WgslFn$_this$3 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy59 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().v8();
      var a5$proxy21 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T(rot, 6.283185307179586);
      var s$proxy59 = WgslFn$_this$3.gu(fn$proxy59, pos, o, lacunarity, gain, a5$proxy21);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy59);
    } else {
      var WgslFn$_this$4 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy60 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().uX();
      var s$proxy60 = WgslFn$_this$4.jL(fn$proxy60, pos, o, lacunarity, gain);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy60);
    }
  } else if ((p && r)) {
    var WgslFn$_this$5 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy61 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().uB();
    var a6$proxy8 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T(rot, 6.283185307179586);
    var s$proxy61 = WgslFn$_this$5.su(fn$proxy61, pos, o, lacunarity, gain, tilingPeriod, a6$proxy8, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy61);
  } else if (p) {
    var WgslFn$_this$6 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy62 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().ux();
    var s$proxy62 = WgslFn$_this$6.lR(fn$proxy62, pos, o, lacunarity, gain, tilingPeriod, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy62);
  } else if (r) {
    var WgslFn$_this$7 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy63 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().v9();
    var a5$proxy24 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().T(rot, 6.283185307179586);
    var s$proxy63 = WgslFn$_this$7.lR(fn$proxy63, pos, o, lacunarity, gain, a5$proxy24, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy63);
  } else {
    var WgslFn$_this$8 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy64 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().uY();
    var s$proxy64 = WgslFn$_this$8.gu(fn$proxy64, pos, o, lacunarity, gain, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy64);
  }
});
var $d_Ltrivalibs_graphics_shader_lib_noise_Extended$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_Extended$, "trivalibs.graphics.shader.lib.noise.Extended$", ({
  g0: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_noise_Extended$;
function $m_Ltrivalibs_graphics_shader_lib_noise_Extended$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_noise_Extended$)) {
    $n_Ltrivalibs_graphics_shader_lib_noise_Extended$ = new $c_Ltrivalibs_graphics_shader_lib_noise_Extended$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_noise_Extended$;
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__mod289v4__Ltrivalibs_graphics_shader_dsl_WgslFnData($thiz) {
  if ((!$thiz.pn)) {
    $thiz.pm = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_mod289_4", "fn extended_mod289_4(i: vec4<f32>) -> vec4<f32> {\n  return i - floor(i / 289.0) * 289.0;\n}");
    $thiz.pn = true;
  }
  return $thiz.pm;
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData($thiz) {
  if ((!$thiz.pp)) {
    $thiz.po = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$().a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_permute_4", "fn extended_permute_4(i: vec4<f32>) -> vec4<f32> {\n  let im = extended_mod289_4(i);\n  return extended_mod289_4((im * 34.0 + 10.0) * im);\n}"), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__mod289v4__Ltrivalibs_graphics_shader_dsl_WgslFnData($thiz)]));
    $thiz.pp = true;
  }
  return $thiz.po;
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
  this.pm = null;
  this.pn = false;
  this.po = null;
  this.pp = false;
  this.pC = null;
  this.pF = false;
  this.pu = null;
  this.px = false;
  this.pS = null;
  this.pV = false;
  this.pK = null;
  this.pN = false;
  this.pD = null;
  this.pE = false;
  this.pv = null;
  this.pw = false;
  this.pT = null;
  this.pU = false;
  this.pL = null;
  this.pM = false;
  this.py = null;
  this.pB = false;
  this.pq = null;
  this.pt = false;
  this.pO = null;
  this.pR = false;
  this.pG = null;
  this.pJ = false;
  this.pz = null;
  this.pA = false;
  this.pr = null;
  this.ps = false;
  this.pP = null;
  this.pQ = false;
  this.pH = null;
  this.pI = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$.prototype = $p;
$p.uC = (function() {
  if ((!this.pF)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy17 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, true, true, false, false);
    var src = (("fn extended_psrnoise_3(x: vec3<f32>, p: vec3<f32>, alpha: f32) -> f32 {\n" + body$proxy17) + "\n}");
    this.pC = $x_1.a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psrnoise_3", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.pF = true;
  }
  return this.pC;
});
$p.uy = (function() {
  if ((!this.px)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy18 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, true, false, false, false);
    var src = (("fn extended_psnoise_3(x: vec3<f32>, p: vec3<f32>) -> f32 {\n" + body$proxy18) + "\n}");
    this.pu = $x_1.a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psnoise_3", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.px = true;
  }
  return this.pu;
});
$p.va = (function() {
  if ((!this.pV)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy19 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, false, true, false, false);
    var src = (("fn extended_srnoise_3(x: vec3<f32>, alpha: f32) -> f32 {\n" + body$proxy19) + "\n}");
    this.pS = $x_1.a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_srnoise_3", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.pV = true;
  }
  return this.pS;
});
$p.v5 = (function() {
  if ((!this.pN)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy20 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, false, false, false, false);
    var src = (("fn extended_snoise_3(x: vec3<f32>) -> f32 {\n" + body$proxy20) + "\n}");
    this.pK = $x_1.a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_snoise_3", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.pN = true;
  }
  return this.pK;
});
$p.uD = (function() {
  if ((!this.pE)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy25 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, true, true, false, true);
    var src = (("fn extended_psrnoise_3_so(x: vec3<f32>, p: vec3<f32>, alpha: f32, so: vec2<f32>) -> f32 {\n" + body$proxy25) + "\n}");
    this.pD = $x_1.a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psrnoise_3_so", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.pE = true;
  }
  return this.pD;
});
$p.uz = (function() {
  if ((!this.pw)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy26 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, true, false, false, true);
    var src = (("fn extended_psnoise_3_so(x: vec3<f32>, p: vec3<f32>, so: vec2<f32>) -> f32 {\n" + body$proxy26) + "\n}");
    this.pv = $x_1.a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psnoise_3_so", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.pw = true;
  }
  return this.pv;
});
$p.vb = (function() {
  if ((!this.pU)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy27 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, false, true, false, true);
    var src = (("fn extended_srnoise_3_so(x: vec3<f32>, alpha: f32, so: vec2<f32>) -> f32 {\n" + body$proxy27) + "\n}");
    this.pT = $x_1.a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_srnoise_3_so", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.pU = true;
  }
  return this.pT;
});
$p.v6 = (function() {
  if ((!this.pM)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy28 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, false, false, false, true);
    var src = (("fn extended_snoise_3_so(x: vec3<f32>, so: vec2<f32>) -> f32 {\n" + body$proxy28) + "\n}");
    this.pL = $x_1.a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_snoise_3_so", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.pM = true;
  }
  return this.pL;
});
$p.uA = (function() {
  if ((!this.pB)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy57 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_psrnoise_3(X, P, alpha)", 3, false, false);
    var src = (("fn extended_psrfbm_3(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, p: vec3<f32>, alpha: f32) -> f32 {\n" + body$proxy57) + "\n}");
    this.py = $x_1.a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psrfbm_3", src), new $c_sjsr_WrappedVarArgs([this.uC()]));
    this.pB = true;
  }
  return this.py;
});
$p.uw = (function() {
  if ((!this.pt)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy58 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_psnoise_3(X, P)", 3, false, false);
    var src = (("fn extended_psfbm_3(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, p: vec3<f32>) -> f32 {\n" + body$proxy58) + "\n}");
    this.pq = $x_1.a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psfbm_3", src), new $c_sjsr_WrappedVarArgs([this.uy()]));
    this.pt = true;
  }
  return this.pq;
});
$p.v8 = (function() {
  if ((!this.pR)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy59 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_srnoise_3(X, alpha)", 3, false, false);
    var src = (("fn extended_srfbm_3(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, alpha: f32) -> f32 {\n" + body$proxy59) + "\n}");
    this.pO = $x_1.a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_srfbm_3", src), new $c_sjsr_WrappedVarArgs([this.va()]));
    this.pR = true;
  }
  return this.pO;
});
$p.uX = (function() {
  if ((!this.pJ)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy60 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_snoise_3(X)", 3, false, false);
    var src = (("fn extended_sfbm_3(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32) -> f32 {\n" + body$proxy60) + "\n}");
    this.pG = $x_1.a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_sfbm_3", src), new $c_sjsr_WrappedVarArgs([this.v5()]));
    this.pJ = true;
  }
  return this.pG;
});
$p.uB = (function() {
  if ((!this.pA)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy65 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_psrnoise_3_so(X, P, alpha, SO)", 3, false, true);
    var src = (("fn extended_psrfbm_3_seeded(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, p: vec3<f32>, alpha: f32, seed: f32) -> f32 {\n" + body$proxy65) + "\n}");
    this.pz = $x_1.a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psrfbm_3_seeded", src), new $c_sjsr_WrappedVarArgs([this.uD(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().iS()]));
    this.pA = true;
  }
  return this.pz;
});
$p.ux = (function() {
  if ((!this.ps)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy66 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_psnoise_3_so(X, P, SO)", 3, false, true);
    var src = (("fn extended_psfbm_3_seeded(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, p: vec3<f32>, seed: f32) -> f32 {\n" + body$proxy66) + "\n}");
    this.pr = $x_1.a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psfbm_3_seeded", src), new $c_sjsr_WrappedVarArgs([this.uz(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().iS()]));
    this.ps = true;
  }
  return this.pr;
});
$p.v9 = (function() {
  if ((!this.pQ)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy67 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_srnoise_3_so(X, alpha, SO)", 3, false, true);
    var src = (("fn extended_srfbm_3_seeded(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, alpha: f32, seed: f32) -> f32 {\n" + body$proxy67) + "\n}");
    this.pP = $x_1.a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_srfbm_3_seeded", src), new $c_sjsr_WrappedVarArgs([this.vb(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().iS()]));
    this.pQ = true;
  }
  return this.pP;
});
$p.uY = (function() {
  if ((!this.pI)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy68 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_snoise_3_so(X, SO)", 3, false, true);
    var src = (("fn extended_sfbm_3_seeded(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, seed: f32) -> f32 {\n" + body$proxy68) + "\n}");
    this.pH = $x_1.a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_sfbm_3_seeded", src), new $c_sjsr_WrappedVarArgs([this.v6(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().iS()]));
    this.pI = true;
  }
  return this.pH;
});
var $d_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$, "trivalibs.graphics.shader.lib.noise.Extended$wgsl$", ({
  g1: 1
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
  this.pW = null;
  this.pX = false;
  this.pY = null;
  this.pZ = false;
  this.q0 = null;
  this.q1 = false;
  this.q4 = null;
  this.q5 = false;
  this.q2 = null;
  this.q3 = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$.prototype = $p;
$p.rf = (function() {
  if ((!this.pX)) {
    this.pW = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_mod289_3", "fn noise_mod289_3(x: vec3<f32>) -> vec3<f32> {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}");
    this.pX = true;
  }
  return this.pW;
});
$p.u9 = (function() {
  if ((!this.pZ)) {
    this.pY = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_mod289_4", "fn noise_mod289_4(x: vec4<f32>) -> vec4<f32> {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}");
    this.pZ = true;
  }
  return this.pY;
});
$p.rh = (function() {
  if ((!this.q1)) {
    this.q0 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$().a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_permute_4", "fn noise_permute_4(x: vec4<f32>) -> vec4<f32> {\n  return noise_mod289_4(((x * 34.0) + 10.0) * x);\n}"), new $c_sjsr_WrappedVarArgs([this.u9()]));
    this.q1 = true;
  }
  return this.q0;
});
$p.rx = (function() {
  if ((!this.q5)) {
    this.q4 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_taylor_inv_sqrt_4", "fn noise_taylor_inv_sqrt_4(r: vec4<f32>) -> vec4<f32> {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}");
    this.q5 = true;
  }
  return this.q4;
});
$p.iS = (function() {
  if ((!this.q3)) {
    this.q2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$().a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_seed_offsets", "fn noise_seed_offsets(seed: f32) -> vec2<f32> {\n  let h = hash1i(bitcast<u32>(seed));\n  return vec2<f32>(f32(h % 289u), f32((h / 289u) % 289u));\n}"), new $c_sjsr_WrappedVarArgs([$m_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$().tg()]));
    this.q3 = true;
  }
  return this.q2;
});
var $d_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$, "trivalibs.graphics.shader.lib.noise.NoiseCommon$", ({
  g2: 1
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
$p.iw = (function(pos, octaves, lacunarity, gain, seed) {
  if ((seed === null)) {
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy9 = $m_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$().sX();
    var a2$proxy6 = $m_Ltrivalibs_graphics_lib_args$package$().mi(octaves);
    var s$proxy9 = WgslFn$_this.jL(fn$proxy9, pos, a2$proxy6, lacunarity, gain);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy9);
  } else {
    var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy10 = $m_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$().sY();
    var a2$proxy7 = $m_Ltrivalibs_graphics_lib_args$package$().mi(octaves);
    var s$proxy10 = WgslFn$_this$2.gu(fn$proxy10, pos, a2$proxy7, lacunarity, gain, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy10);
  }
});
var $d_Ltrivalibs_graphics_shader_lib_noise_Simplex$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_Simplex$, "trivalibs.graphics.shader.lib.noise.Simplex$", ({
  g3: 1
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
  this.qa = null;
  this.qd = false;
  this.qb = null;
  this.qc = false;
  this.q6 = null;
  this.q9 = false;
  this.q7 = null;
  this.q8 = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$.prototype = $p;
$p.ug = (function() {
  if ((!this.qd)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy3 = $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__body3__Z__T(this, false);
    var src = (("fn simplex_noise_3d(v: vec3<f32>) -> f32 {\n" + body$proxy3) + "\n}");
    this.qa = $x_1.a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d", src), new $c_sjsr_WrappedVarArgs([$m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().rf(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().rh(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().rx()]));
    this.qd = true;
  }
  return this.qa;
});
$p.uh = (function() {
  if ((!this.qc)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy4 = $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__body3__Z__T(this, true);
    var src = (("fn simplex_noise_3d_so(v: vec3<f32>, so: vec2<f32>) -> f32 {\n" + body$proxy4) + "\n}");
    this.qb = $x_1.a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d_so", src), new $c_sjsr_WrappedVarArgs([$m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().rf(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().rh(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().rx()]));
    this.qc = true;
  }
  return this.qb;
});
$p.sX = (function() {
  if ((!this.q9)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy9 = $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__fbmBody__T__Z__T(this, "simplex_noise_3d", false);
    var src = (("fn simplex_fbm_3d(v: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32) -> f32 {\n" + body$proxy9) + "\n}");
    this.q6 = $x_1.a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_fbm_3d", src), new $c_sjsr_WrappedVarArgs([this.ug()]));
    this.q9 = true;
  }
  return this.q6;
});
$p.sY = (function() {
  if ((!this.q8)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy10 = $p_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$__fbmBody__T__Z__T(this, "simplex_noise_3d_so", true);
    var src = (("fn simplex_fbm_3d_seeded(v: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, seed: f32) -> f32 {\n" + body$proxy10) + "\n}");
    this.q7 = $x_1.a9(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_fbm_3d_seeded", src), new $c_sjsr_WrappedVarArgs([this.uh(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().iS()]));
    this.q8 = true;
  }
  return this.q7;
});
var $d_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_Simplex$wgsl$, "trivalibs.graphics.shader.lib.noise.Simplex$wgsl$", ({
  g4: 1
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
  this.qe = null;
  this.qf = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$.prototype = $p;
$p.tg = (function() {
  if ((!this.qf)) {
    this.qe = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("hash1i", "fn hash1i(x: u32) -> u32 {\n  var v = x;\n    v ^= v >> 16u;\n    v = v * 0x21f0aaadu;\n    v ^= v >> 15u;\n    v = v * 0xd35a2d97u;\n    return v ^ (v >> 15u);\n}");
    this.qf = true;
  }
  return this.qe;
});
var $d_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$, "trivalibs.graphics.shader.lib.random.Hash$wgsl$", ({
  g5: 1
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
  this.qg = null;
  this.lw = null;
  this.ig = 0;
  this.ih = 0.0;
  this.jE = 0.0;
  this.jF = 0.0;
  this.lx = false;
  this.qg = frame;
  this.lw = onFpsCallback;
  this.ig = 0;
  this.ih = 0.0;
  this.jE = 0.0;
  this.jF = (-1.0);
  this.lx = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.rn = (function(time) {
  this.ig = ((1 + this.ig) | 0);
  if ((this.ih === 0.0)) {
    this.ih = time;
    this.jE = time;
  }
  var fpsElapsed = (time - this.ih);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.ig) / fpsElapsed);
    if (((time - this.jE) >= 1000.0)) {
      var s = (fps.toFixed(1) + " FPS");
      console.log(s);
      this.jE = time;
      if ((this.lw !== null)) {
        (0, this.lw)(fps);
      }
    }
    this.ig = 0;
    this.ih = time;
  }
  var delta = ((this.jF < 0.0) ? 0.0 : (time - this.jF));
  this.jF = time;
  (0, this.qg)(delta);
  if (this.lx) {
    requestAnimationFrame($m_sjs_js_Any$().hw(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.rn((+v1$2));
    }))));
  }
});
$p.vc = (function() {
  this.lx = true;
  return requestAnimationFrame($m_sjs_js_Any$().hw(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.rn((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  gc: 1
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
$p.s5 = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.vc();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  gd: 1
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
  this.aK = null;
  this.ly = null;
  this.lz = null;
  this.aK = input;
  this.ly = drag;
  this.lz = hold;
}
$p = $c_Ltrivalibs_utils_events_CanvasInput.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_CanvasInput;
/** @constructor */
function $h_Ltrivalibs_utils_events_CanvasInput() {
}
$h_Ltrivalibs_utils_events_CanvasInput.prototype = $p;
$p.gA = (function(tpf) {
  this.ly.gA(tpf);
  this.lz.gA(tpf);
});
var $d_Ltrivalibs_utils_events_CanvasInput = new $TypeData().i($c_Ltrivalibs_utils_events_CanvasInput, "trivalibs.utils.events.CanvasInput", ({
  ge: 1
}));
function $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, pointersOf, glideMinSpeed, glideHalfLife) {
  $thiz.qj = pointersOf;
  $thiz.qi = glideHalfLife;
  $thiz.hp = null;
  $thiz.lB = 0.0;
  $thiz.lC = 0.0;
  $thiz.gp = 0.0;
  $thiz.gq = 0.0;
  $thiz.bo = 0.0;
  $thiz.bp = 0.0;
  $thiz.lA = (glideHalfLife > 0.0);
  var s = (glideMinSpeed / 1000.0);
  $thiz.qh = ((s < 0.001) ? 0.001 : s);
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, glideMinSpeed, glideHalfLife) {
  $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife), glideMinSpeed, glideHalfLife);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.bd));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_DragGesture() {
  this.qj = null;
  this.qi = 0.0;
  this.hp = null;
  this.lB = 0.0;
  this.lC = 0.0;
  this.gp = 0.0;
  this.gq = 0.0;
  this.bo = 0.0;
  this.bp = 0.0;
  this.lA = false;
  this.qh = 0.0;
}
$p = $c_Ltrivalibs_utils_events_DragGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_DragGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_DragGesture() {
}
$h_Ltrivalibs_utils_events_DragGesture.prototype = $p;
$p.sF = (function() {
  return $ct_T2__O__O__(new $c_T2(), this.gp, this.gq);
});
$p.gA = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().qJ(this.qj.is());
  if ((d === null)) {
    this.hp = null;
    if (this.lA) {
      var p$proxy1 = ((this.bo * this.bo) + (this.bp * this.bp));
      var $x_1 = ((+Math.sqrt(p$proxy1)) >= this.qh);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var e$proxy1 = (tpf / this.qi);
      var f = (+Math.pow(0.5, e$proxy1));
      this.bo = (this.bo * f);
      this.bp = (this.bp * f);
      this.gp = (this.bo * tpf);
      this.gq = (this.bp * tpf);
    } else {
      this.bo = 0.0;
      this.bp = 0.0;
      this.gp = 0.0;
      this.gq = 0.0;
    }
  } else {
    if ((((this.hp !== null) && (d.bz !== null)) && $m_sr_BoxesRunTime$().jO((+this.hp), (+d.bz)))) {
      this.gp = (d.hr - this.lB);
      this.gq = (d.hs - this.lC);
      if ((this.lA && (tpf > 0.0))) {
        var e$proxy2 = (tpf / 40.0);
        var k = (1.0 - (+Math.pow(0.5, e$proxy2)));
        this.bo = (this.bo + (((this.gp / tpf) - this.bo) * k));
        this.bp = (this.bp + (((this.gq / tpf) - this.bp) * k));
      }
    } else {
      if ((this.hp === null)) {
        this.bo = 0.0;
        this.bp = 0.0;
      }
      this.gp = 0.0;
      this.gq = 0.0;
    }
    this.hp = d.bz;
    this.lB = d.hr;
    this.lC = d.hs;
  }
});
var $d_Ltrivalibs_utils_events_DragGesture = new $TypeData().i($c_Ltrivalibs_utils_events_DragGesture, "trivalibs.utils.events.DragGesture", ({
  gf: 1
}));
function $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, pointersOf, holdDelay, holdRadius) {
  $thiz.qm = pointersOf;
  $thiz.qk = holdDelay;
  $thiz.ql = holdRadius;
  $thiz.ij = null;
  $thiz.hq = 0.0;
  $thiz.ik = false;
  $thiz.ii = false;
  $thiz.gr = false;
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, holdDelay, holdRadius) {
  $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius), holdDelay, holdRadius);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.bd));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_HoldGesture() {
  this.qm = null;
  this.qk = 0.0;
  this.ql = 0.0;
  this.ij = null;
  this.hq = 0.0;
  this.ik = false;
  this.ii = false;
  this.gr = false;
}
$p = $c_Ltrivalibs_utils_events_HoldGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_HoldGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_HoldGesture() {
}
$h_Ltrivalibs_utils_events_HoldGesture.prototype = $p;
$p.gA = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().qJ(this.qm.is());
  if ((d === null)) {
    this.ij = null;
    this.hq = 0.0;
    this.ik = false;
    this.ii = false;
    this.gr = false;
  } else {
    var pid = d.bz;
    if ((!(((this.ij !== null) && (pid !== null)) && $m_sr_BoxesRunTime$().jO((+this.ij), (+pid))))) {
      this.ij = pid;
      this.hq = 0.0;
      this.ik = false;
      this.ii = false;
    }
    this.hq = (this.hq + tpf);
    if (this.ii) {
      this.gr = true;
    } else if ((this.hq < this.qk)) {
      var dx = (d.hr - d.lE);
      var dy = (d.hs - d.lF);
      var p$proxy2 = ((dx * dx) + (dy * dy));
      if (((+Math.sqrt(p$proxy2)) > this.ql)) {
        this.ik = true;
      }
      this.gr = false;
    } else if (this.ik) {
      this.gr = false;
    } else {
      this.ii = true;
      this.gr = true;
    }
  }
});
var $d_Ltrivalibs_utils_events_HoldGesture = new $TypeData().i($c_Ltrivalibs_utils_events_HoldGesture, "trivalibs.utils.events.HoldGesture", ({
  gg: 1
}));
function $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz) {
  var i = 0;
  while ((i < ($thiz.io.length | 0))) {
    if (($thiz.io[i].bz === null)) {
      return $thiz.io[i];
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id) {
  var i = 0;
  while ((i < ($thiz.bd.length | 0))) {
    var p = $thiz.bd[i];
    if (((p.bz !== null) && $m_sr_BoxesRunTime$().jO((+p.bz), id))) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id) {
  var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id);
  if ((p !== null)) {
    p.bz = null;
    var idx = $m_sjs_js_ArrayOps$().qT($thiz.bd, p, 0);
    if ((idx >= 0)) {
      $thiz.bd.splice(idx, 1);
    }
  }
}
function $p_Ltrivalibs_utils_events_InputState__install__V($thiz) {
  var i = 0;
  while ((i < $thiz.qr)) {
    $thiz.io.push(new $c_Ltrivalibs_utils_events_Pointer());
    i = ((1 + i) | 0);
  }
  $m_Ltrivalibs_utils_events_keyboard$package$().tt($thiz.il, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!$thiz.im.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      $thiz.im[k$3] = value$proxy1;
      if ((!($thiz.aL === (void 0)))) {
        (0, $thiz.aL)();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete $thiz.im[k$3$1];
    if ((!($thiz.aL === (void 0)))) {
      (0, $thiz.aL)();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().uq($thiz.qo, $m_Ltrivalibs_utils_events_pointer$package$().ur(), new $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(((v1$2, v2$2, v3$2, v4$2, v5$2) => {
    var button = (v1$2 | 0);
    var id = (+v2$2);
    var x$1 = (+v3$2);
    var y = (+v4$2);
    if ($thiz.qq) {
      $thiz.il.focus();
    }
    var key$proxy3 = ("" + button);
    var value$proxy2 = (+Date.now());
    $thiz.jG[key$proxy3] = value$proxy2;
    var slot = $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz);
    if ((slot !== null)) {
      slot.bz = id;
      slot.lD = button;
      (+Date.now());
      slot.lE = x$1;
      slot.lF = y;
      slot.hr = x$1;
      slot.hs = y;
      $thiz.bd.push(slot);
      ($thiz.bd.length | 0);
    }
    if ((!($thiz.aL === (void 0)))) {
      (0, $thiz.aL)();
    }
  })), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2$1, v2$2$1, v3$2$1) => {
    var id$1 = (+v1$2$1);
    var x$2 = (+v2$2$1);
    var y$1 = (+v3$2$1);
    var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id$1);
    if ((p !== null)) {
      p.hr = x$2;
      p.hs = y$1;
      if ((($thiz.bd.length | 0) > 0)) {
        $thiz.bd[0];
      }
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2$1) => {
    var button$1 = (v1$2$2 | 0);
    var id$2 = (+v2$2$2);
    delete $thiz.jG[("" + button$1)];
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id$2);
    if ((!($thiz.aL === (void 0)))) {
      (0, $thiz.aL)();
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2$3) => {
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, (+v1$2$3));
    if ((!($thiz.aL === (void 0)))) {
      (0, $thiz.aL)();
    }
  })), $thiz.qs);
  $thiz.il.addEventListener("focus", $thiz.qp);
  $thiz.il.addEventListener("blur", $thiz.qn);
}
/** @constructor */
function $c_Ltrivalibs_utils_events_InputState(el, keyTarget, suppressContextMenu, onActivity, focusOnPointerDown, maxPointers) {
  this.qo = null;
  this.il = null;
  this.qs = false;
  this.aL = null;
  this.qq = false;
  this.qr = 0;
  this.im = null;
  this.jG = null;
  this.io = null;
  this.bd = null;
  this.qp = null;
  this.qn = null;
  this.qo = el;
  this.il = keyTarget;
  this.qs = suppressContextMenu;
  this.aL = onActivity;
  this.qq = focusOnPointerDown;
  this.qr = maxPointers;
  this.im = ({});
  this.jG = ({});
  this.io = [];
  this.bd = [];
  if ($m_sr_BoxesRunTime$().c(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().c(keyTarget, document.activeElement);
  }
  this.qp = ((_$1$3) => {
    if ((!(this.aL === (void 0)))) {
      (0, this.aL)();
    }
  });
  this.qn = ((_$2$3) => {
    if ((!(this.aL === (void 0)))) {
      (0, this.aL)();
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
$p.br = (function(key) {
  return (!(!(!(!this.im.hasOwnProperty(key)))));
});
$p.tr = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.jG.hasOwnProperty(key$proxy7)))));
});
$p.rl = (function() {
  return (this.bd.length | 0);
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  gh: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_Pointer() {
  this.bz = null;
  this.lD = 0;
  this.lE = 0.0;
  this.lF = 0.0;
  this.hr = 0.0;
  this.hs = 0.0;
  this.bz = null;
  this.lD = 0;
  this.lE = 0.0;
  this.lF = 0.0;
  this.hr = 0.0;
  this.hs = 0.0;
}
$p = $c_Ltrivalibs_utils_events_Pointer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_Pointer;
/** @constructor */
function $h_Ltrivalibs_utils_events_Pointer() {
}
$h_Ltrivalibs_utils_events_Pointer.prototype = $p;
var $d_Ltrivalibs_utils_events_Pointer = new $TypeData().i($c_Ltrivalibs_utils_events_Pointer, "trivalibs.utils.events.Pointer", ({
  gi: 1
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
$p.qJ = (function(pointers) {
  var i = 0;
  while ((i < (pointers.length | 0))) {
    var p = pointers[i];
    if ((p.lD === 0)) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
});
var $d_Ltrivalibs_utils_events_gestures$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_gestures$package$, "trivalibs.utils.events.gestures$package$", ({
  gj: 1
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
$p.tp = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity, dragGlideHalfLife, dragGlideMinSpeed) {
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
  gk: 1
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
$p.tt = (function(el, onDown, onUp, keepDefault) {
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
  gl: 1
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
$p.uq = (function(el, moveTarget, onDown, onMove, onUp, onCancel, suppressContextMenu) {
  var downFn = ((e$3) => {
    onDown.s8((e$3.button | 0), (+e$3.pointerId), (+e$3.clientX), (+e$3.clientY), (!(!e$3.isPrimary)));
  });
  var moveFn = ((e$3$1) => {
    onMove.qw((+e$3$1.pointerId), (+e$3$1.clientX), (+e$3$1.clientY));
  });
  var upFn = ((e$3$2) => {
    onUp.ir((e$3$2.button | 0), (+e$3$2.pointerId), (+e$3$2.clientX), (+e$3$2.clientY));
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
$p.ur = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  gm: 1
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
$p.iQ = (function() {
  return (+Math.random());
});
$p.m9 = (function(min, max) {
  return (((+Math.random()) * (max - min)) + min);
});
$p.jY = (function() {
  return ((((+Math.random()) + (+Math.random())) + (+Math.random())) / 3.0);
});
$p.hy = (function() {
  return ((2.0 * $m_Ltrivalibs_utils_random_random$package$().jY()) - 1.0);
});
$p.ri = (function(arr) {
  if (((arr.length | 0) === 0)) {
    throw new $c_sjs_js_JavaScriptException(Error("pick(): empty array")).W;
  }
  return arr[$doubleToInt(((+Math.random()) * (arr.length | 0)))];
});
$p.v0 = (function(arr) {
  var i = (((arr.length | 0) - 1) | 0);
  while ((i > 0)) {
    var j = $doubleToInt(((+Math.random()) * ((1 + i) | 0)));
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    i = ((i - 1) | 0);
  }
});
var $d_Ltrivalibs_utils_random_random$package$ = new $TypeData().i($c_Ltrivalibs_utils_random_random$package$, "trivalibs.utils.random.random$package$", ({
  gp: 1
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
  this.k7 = null;
  $n_jl_Character$ = this;
  this.k7 = $constArrUDiffs_I(67, "1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]");
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.vo = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.sI = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().sm(this.k7, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.k7.b[zeroCodePointIndex]) | 0);
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
$p.iP = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.ts = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().iP(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().iP(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) | 0);
  if ((i >= len)) {
    $m_jl_Integer$().iP(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.sI(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().iP(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().iP(s);
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.s)));
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.mv = s;
  if (writableStackTrace) {
    $thiz.t0();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.mv = null;
  }
  jQ() {
    return this.mv;
  }
  t0() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.W : this);
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
    var message = this.jQ();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  x() {
    return $c_O.prototype.x.call(this);
  }
  v(that) {
    return $c_O.prototype.v.call(this, that);
  }
  get "message"() {
    var m = this.jQ();
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
$p.vC = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.b.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.mN;
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
$p.rr = (function(start, end, step, isInclusive) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ($p_sci_Range$__description__I__I__I__Z__T(this, start, end, step, isInclusive) + ": seqs cannot contain more than Int.MaxValue elements."));
});
$p.uR = (function(what) {
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
  this.gX = 0.0;
  this.gX = elem;
}
$p = $c_sr_DoubleRef.prototype = new $h_O();
$p.constructor = $c_sr_DoubleRef;
/** @constructor */
function $h_sr_DoubleRef() {
}
$h_sr_DoubleRef.prototype = $p;
$p.r = (function() {
  return ("" + this.gX);
});
var $d_sr_DoubleRef = new $TypeData().i($c_sr_DoubleRef, "scala.runtime.DoubleRef", ({
  cZ: 1,
  a: 1
}));
/** @constructor */
function $c_sr_IntRef(elem) {
  this.gY = 0;
  this.gY = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.r = (function() {
  return ("" + this.gY);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  d0: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.j0 = null;
  this.j0 = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.r = (function() {
  return ("" + this.j0);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  d1: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.h0 = 0;
  this.mX = 0;
  this.rL = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.h0 = $f_T__hashCode__I("Seq");
  this.mX = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.rL = this.vr($m_sci_Nil$(), this.mX);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.mb = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.tk(xs, this.h0) : ((xs instanceof $c_sci_List) ? this.tx(xs, this.h0) : this.uk(xs, this.h0)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  dj: 1,
  di: 1
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
  this.nS = null;
  this.nR = null;
  this.nT = null;
  this.nU = null;
  this.nS = p$1;
  this.nR = bloomP$1;
  this.nT = resultP$1;
  this.nU = resultP$1;
}
$p = $c_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bloom_Bloom$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_bloom_Bloom$$anon$1() {
}
$h_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = $p;
$p.un = (function() {
  var Painter_this = this.nS;
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.nR);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.nT);
});
var $d_Lsketchlib_utils_bloom_Bloom$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$$anon$1, "sketchlib.utils.bloom.Bloom$$anon$1", ({
  dx: 1,
  dv: 1
}));
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__rebuildLayers__V($thiz) {
  if (($thiz.bY > 0.0)) {
    var pairs = $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().v4($thiz.o2, $thiz.kC, $thiz.hO, $thiz.ky, $thiz.kx);
    $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().v3($thiz.kA, $thiz.nW, $thiz.nY, $thiz.nX, $thiz.kC, $thiz.jf, $thiz.o3, $thiz.o6, $thiz.o7, $thiz.kD, $thiz.kE, $thiz.o1, pairs);
    var layers = [$thiz.nV];
    var i = 0;
    while ((i < (pairs << 1))) {
      layers.push($thiz.kA[i]);
      i = ((1 + i) | 0);
    }
    $thiz.hM.iT((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), layers, (void 0), (void 0), (void 0), (void 0), (void 0));
  }
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__applySizing__V($thiz) {
  if (($thiz.bY > 0.0)) {
    var sigma = ((0.01 * $thiz.ky) * $thiz.hO);
    var p$proxy2 = ($thiz.kz * sigma);
    var p$proxy3 = (+Math.ceil(p$proxy2));
    var other$proxy4 = (0.5 * $thiz.hP);
    var mx = (+Math.min(p$proxy3, other$proxy4));
    var $x_1 = $thiz.kz;
    var p$proxy4 = $thiz.kx;
    var p$proxy5 = (($x_1 * sigma) * (+Math.max(p$proxy4, 1.0)));
    var p$proxy6 = (+Math.ceil(p$proxy5));
    var other$proxy5 = (0.5 * $thiz.bY);
    var my = (+Math.min(p$proxy6, other$proxy5));
    var pw = $doubleToInt(($thiz.hP + (2.0 * mx)));
    var ph = $doubleToInt(($thiz.bY + (2.0 * my)));
    $thiz.je.iT(pw, ph, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    $thiz.hM.iT(pw, ph, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    var BufferBinding_this = $thiz.kD;
    var value$proxy10 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(pw, ph);
    BufferBinding_this.J.D(BufferBinding_this.o, value$proxy10);
    var $x_4 = BufferBinding_this.I.queue;
    var $x_3 = BufferBinding_this.G;
    var s$proxy10 = BufferBinding_this.o;
    var $x_2 = s$proxy10.dv.buffer;
    $x_4.writeBuffer($x_3, 0.0, $x_2);
    var BufferBinding_this$3 = $thiz.kE;
    var value$proxy11 = $thiz.hO;
    BufferBinding_this$3.J.D(BufferBinding_this$3.o, value$proxy11);
    var $x_7 = BufferBinding_this$3.I.queue;
    var $x_6 = BufferBinding_this$3.G;
    var s$proxy11 = BufferBinding_this$3.o;
    var $x_5 = s$proxy11.dv.buffer;
    $x_7.writeBuffer($x_6, 0.0, $x_5);
    $thiz.jc = ($thiz.hP / pw);
    $thiz.jd = ($thiz.bY / ph);
    var BufferBinding_this$5 = $thiz.o4;
    var value$proxy12 = new $c_Ltrivalibs_graphics_math_cpu_Vec4($thiz.jc, $thiz.jd, (mx / pw), (my / ph));
    BufferBinding_this$5.J.D(BufferBinding_this$5.o, value$proxy12);
    var $x_10 = BufferBinding_this$5.I.queue;
    var $x_9 = BufferBinding_this$5.G;
    var s$proxy12 = BufferBinding_this$5.o;
    var $x_8 = s$proxy12.dv.buffer;
    $x_10.writeBuffer($x_9, 0.0, $x_8);
    $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__rebuildLayers__V($thiz);
  }
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__deriveRefH__V($thiz) {
  var $x_2 = $thiz.bY;
  var $x_1 = $thiz.jb.bL;
  var this$1 = $thiz.jb;
  $thiz.hO = (($x_2 * $x_1) / $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().ml(this$1.bL, this$1.gn));
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_math_cpu_Mat4($thiz) {
  var this$1 = $thiz.jb;
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().hx(), this$1.jD, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this$1.rD());
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1(mirrorPanel$1, cropPanel$1, blurPanel$1, camera$1, blurStrength$1, blurRatioVertical$1, bakeLayer$1, pairCache$2, overscan$1, uRes$3, uVisHeight$3, uCrop$1, resolutionScale$1, uBlurStrength$3, strengthScale$2, uRatioVertical$3, uStrengthOffset$3, reflMat$1, uVp$1, uInvVp$1, p$4, scaleFactor$3, blurShadeH$2, cachedScale$2, blurShadeV$2, sampler$3) {
  this.nV = null;
  this.kA = null;
  this.hM = null;
  this.kz = 0.0;
  this.je = null;
  this.kD = null;
  this.kE = null;
  this.o4 = null;
  this.kB = 0.0;
  this.hN = null;
  this.o3 = null;
  this.o2 = 0.0;
  this.o6 = null;
  this.o7 = null;
  this.nZ = null;
  this.o8 = null;
  this.o5 = null;
  this.jf = null;
  this.kC = 0.0;
  this.nW = null;
  this.nY = null;
  this.nX = null;
  this.o1 = null;
  this.o0 = null;
  this.jb = null;
  this.ky = 0.0;
  this.kx = 0.0;
  this.hP = 0.0;
  this.bY = 0.0;
  this.hO = 0.0;
  this.jc = 0.0;
  this.jd = 0.0;
  this.nV = bakeLayer$1;
  this.kA = pairCache$2;
  this.hM = blurPanel$1;
  this.kz = overscan$1;
  this.je = mirrorPanel$1;
  this.kD = uRes$3;
  this.kE = uVisHeight$3;
  this.o4 = uCrop$1;
  this.kB = resolutionScale$1;
  this.hN = cropPanel$1;
  this.o3 = uBlurStrength$3;
  this.o2 = strengthScale$2;
  this.o6 = uRatioVertical$3;
  this.o7 = uStrengthOffset$3;
  this.nZ = reflMat$1;
  this.o8 = uVp$1;
  this.o5 = uInvVp$1;
  this.jf = p$4;
  this.kC = scaleFactor$3;
  this.nW = blurShadeH$2;
  this.nY = cachedScale$2;
  this.nX = blurShadeV$2;
  this.o1 = sampler$3;
  this.o0 = ((cropPanel$1 === null) ? blurPanel$1 : cropPanel$1);
  this.jb = camera$1;
  this.ky = blurStrength$1;
  this.kx = blurRatioVertical$1;
  this.hP = 0.0;
  this.bY = 0.0;
  this.hO = 0.0;
  this.jc = 1.0;
  this.jd = 1.0;
}
$p = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1() {
}
$h_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1.prototype = $p;
$p.uO = (function(w, h) {
  var x = $doubleToInt((w * this.kB));
  var sw = ((x > 1) ? x : 1);
  var x$1 = $doubleToInt((h * this.kB));
  var sh = ((x$1 > 1) ? x$1 : 1);
  this.hP = sw;
  this.bY = sh;
  $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__deriveRefH__V(this);
  if ((this.hN !== null)) {
    this.hN.iT(sw, sh, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
  }
  $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__applySizing__V(this);
});
$p.um = (function(vp) {
  var cameraVP = ((vp === (void 0)) ? $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_math_cpu_Mat4(this) : vp);
  var m$1 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().hx(), new $c_Ltrivalibs_graphics_math_cpu_Mat4(this.jc, 0.0, 0.0, 0.0, 0.0, this.jd, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().hx(), cameraVP, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this.nZ));
  var BufferBinding_this = this.o8;
  BufferBinding_this.J.D(BufferBinding_this.o, m$1);
  var $x_3 = BufferBinding_this.I.queue;
  var $x_2 = BufferBinding_this.G;
  var s$proxy16 = BufferBinding_this.o;
  var $x_1 = s$proxy16.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var BufferBinding_this$3 = this.o5;
  var value$proxy14 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().hx(), m$1, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
  BufferBinding_this$3.J.D(BufferBinding_this$3.o, value$proxy14);
  var $x_6 = BufferBinding_this$3.I.queue;
  var $x_5 = BufferBinding_this$3.G;
  var s$proxy17 = BufferBinding_this$3.o;
  var $x_4 = s$proxy17.dv.buffer;
  $x_6.writeBuffer($x_5, 0.0, $x_4);
  if ((this.hN !== null)) {
    var Painter_this = this.jf;
    var c$proxy1 = this.hN;
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.je);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.hM);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, c$proxy1);
  } else {
    var Painter_this$2 = this.jf;
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this$2, this.je);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this$2, this.hM);
  }
});
var $d_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1, "sketchlib.utils.mirror.GaussianMirrorReflection$$anon$1", ({
  dA: 1,
  dy: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT(uv) {
  this.aG = null;
  this.aG = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  dO: 1,
  dN: 1
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
$p.vD = (function(ref, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.D = (function(ref, value) {
  this.vD(ref, (+value));
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Double_$times$colon$", ({
  dP: 1,
  D: 1
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
$p.D = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().td(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  dQ: 1,
  D: 1
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
$p.D = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$().vu(), ref, $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec2_Vec2Buffer$", ({
  dR: 1,
  D: 1
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
$p.vE = (function(ref, value) {
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
$p.D = (function(ref, value) {
  this.vE(ref, value);
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec3_Vec4Buffer$", ({
  dS: 1,
  D: 1
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
$p.D = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$().vw(), ref, $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec4_Vec4Buffer$", ({
  dT: 1,
  D: 1
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
$p.bQ = (function(t) {
  return $ct_T2__O__O__(new $c_T2(), t.l, t.k);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  dW: 1,
  V: 1
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
$p.bQ = (function(t) {
  return new $c_T3(t.w, t.A, t.u);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  dX: 1,
  V: 1
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
$p.bQ = (function(t) {
  return new $c_T4(t.gf, t.c5, t.c6, t.c4);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec4Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec4Writer$, "trivalibs.graphics.geometry.FieldWriter$vec4Writer$", ({
  dY: 1,
  V: 1
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
  this.jj = null;
  this.jj = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  e6: 1,
  e5: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.ob = null;
  this.oc = null;
  this.ob = x$1;
  this.oc = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.vt = (function(t) {
  return $m_sr_Tuples$().lT(this.ob.bQ(t.m(0)), this.oc.bQ($m_sr_Tuples$().vi(t)));
});
$p.bQ = (function(t) {
  return this.vt(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  e7: 1,
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
$p.bQ = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  e8: 1,
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
  this.oe = 0;
  this.oe = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.bP = (function(t) {
  return t.m(this.oe);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  ed: 1,
  e3: 1
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
  this.of = null;
  this.og = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.hx = (function() {
  if ((!this.og)) {
    this.of = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.og = true;
  }
  return this.of;
});
$p.t9 = (function(t, r, s) {
  var x = r.jl;
  var y = r.jm;
  var z = r.jn;
  var w = r.jk;
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
  ew: 1,
  ei: 1
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
  eA: 1,
  eC: 1
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
  this.oh = null;
  this.oi = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2$.prototype = $p;
$p.bO = (function() {
  if ((!this.oi)) {
    this.oh = $m_Ltrivalibs_graphics_math_cpu_Vec2$();
    this.oi = true;
  }
  return this.oh;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2$, "trivalibs.graphics.math.cpu.Vec2$", ({
  eE: 1,
  el: 1
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
  this.oj = null;
  this.ok = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.Q = (function() {
  if ((!this.ok)) {
    this.oj = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.ok = true;
  }
  return this.oj;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  eH: 1,
  ep: 1
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
  this.ol = null;
  this.om = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = $p;
$p.m1 = (function() {
  if ((!this.om)) {
    this.ol = new $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3();
    this.om = true;
  }
  return this.ol;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$, "trivalibs.graphics.math.cpu.Vec4$", ({
  eK: 1,
  es: 1
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
  eO: 1,
  ek: 1
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
  eR: 1,
  en: 1
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
  eU: 1,
  eu: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13(f$2) {
  this.ot = null;
  this.ot = f$2;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13.prototype = $p;
$p.aC = (function(s) {
  return this.ot.g(s);
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13, "trivalibs.graphics.math.gpu.LeftScalar$$anon$13", ({
  eY: 1,
  eW: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr(name) {
  this.f = null;
  this.ou = null;
  this.ou = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(this, name);
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.C = (function(value) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return (((("  let " + this.ou) + " = ") + value.f) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  eZ: 1,
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
  f5: 1,
  W: 1
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
$p.ck = (function(m, x$2, v, x$4, x$5) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.f) + " * ") + v.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  f6: 1,
  ej: 1
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
$p.iq = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("abs(" + a.f) + ")"));
});
$p.qN = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("fract(" + a.f) + ")"));
});
$p.sV = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("exp(" + a.f) + ")"));
});
$p.v2 = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("sin(" + a.f) + ")"));
});
$p.jU = (function(a, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + a.f) + ", ") + other.f) + ")"));
});
$p.jT = (function(a, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("max(" + a.f) + ", ") + other.f) + ")"));
});
$p.qC = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("saturate(" + a.f) + ")"));
});
$p.qM = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.f) + " * 2.0 - 1.0)"));
});
$p.lX = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.f) + " * 0.5 + 0.5)"));
});
$p.gy = (function(a, b, t) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + a.f) + ", ") + b.f) + ", ") + t.f) + ")"));
});
$p.aO = (function(a, edge0, edge1) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("smoothstep(" + edge0.f) + ", ") + edge1.f) + ", ") + a.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumExt_FloatExpr$", ({
  f7: 1,
  gn: 1
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
$p.bB = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " + ") + b.f) + ")"));
});
$p.ip = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " - ") + b.f) + ")"));
});
$p.aM = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " * ") + b.f) + ")"));
});
$p.rU = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " / ") + b.f) + ")"));
});
$p.vq = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(-" + a.f) + ")"));
});
$p.lH = (function(a, b) {
  return this.bB(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(b));
});
$p.bA = (function(a, b) {
  return this.ip(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(b));
});
$p.T = (function(a, b) {
  return this.aM(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(b));
});
$p.jH = (function(a, b) {
  return this.rU(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(b));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumOps_FloatExpr$", ({
  f8: 1,
  go: 1
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
$p.a5 = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".x"));
});
$p.S = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".y"));
});
$p.iu = (function(v, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("dot(" + v.f) + ", ") + other.f) + ")"));
});
$p.sN = (function(v, other) {
  return this.iu(v, $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().vn(other));
});
$p.tw = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("length(" + v.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2BaseG_FloatExpr_Vec2Expr$", ({
  f9: 1,
  X: 1
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
$p.jI = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " + ") + other.f) + ")"));
});
$p.s3 = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " + ") + scalar.f) + ")"));
});
$p.rX = (function(v, x$2, scalar) {
  return this.s3(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(scalar));
});
$p.k1 = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " - ") + other.f) + ")"));
});
$p.vf = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " - ") + scalar.f) + ")"));
});
$p.rW = (function(v, x$2, scalar) {
  return this.vf(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(scalar));
});
$p.uc = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " * ") + other.f) + ")"));
});
$p.ub = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " * ") + scalar.f) + ")"));
});
$p.qu = (function(v, x$2, scalar) {
  return this.ub(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(scalar));
});
$p.lV = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " / ") + other.f) + ")"));
});
$p.sJ = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " / ") + scalar.f) + ")"));
});
$p.lG = (function(v, x$2, scalar) {
  return this.sJ(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(scalar));
});
$p.rZ = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("abs(" + v.f) + ")"));
});
$p.lZ = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("fract(" + v.f) + ")"));
});
$p.re = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + v.f) + ", ") + other.f) + ")"));
});
$p.u6 = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("max(" + v.f) + ", ") + other.f) + ")"));
});
$p.qL = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + v.f) + " * 2.0 - 1.0)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  fa: 1,
  em: 1
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
$p.a5 = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".x"));
});
$p.S = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".y"));
});
$p.gC = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".z"));
});
$p.iu = (function(v, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("dot(" + v.f) + ", ") + other.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3BaseG_FloatExpr_Vec3Expr$", ({
  fb: 1,
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
$p.lJ = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " + ") + other.f) + ")"));
});
$p.k2 = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " - ") + other.f) + ")"));
});
$p.vg = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " - ") + scalar.f) + ")"));
});
$p.qt = (function(v, x$2, scalar) {
  return this.vg(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(scalar));
});
$p.aW = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " * ") + scalar.f) + ")"));
});
$p.gs = (function(v, x$2, scalar) {
  return this.aW(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().g(scalar));
});
$p.sK = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " / ") + scalar.f) + ")"));
});
$p.sD = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("cross(" + v.f) + ", ") + other.f) + ")"));
});
$p.m8 = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("normalize(" + v.f) + ")"));
});
$p.sU = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("exp(" + v.f) + ")"));
});
$p.u8 = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + v.f) + ", ") + other.f) + ")"));
});
$p.m5 = (function(v, x$2, b, t) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + v.f) + ", ") + b.f) + ", ") + t.f) + ")"));
});
$p.m3 = (function(v, x$2, b, t) {
  return this.m5(v, x$2, $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().hz(b), t);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  fc: 1,
  eq: 1
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
$p.a5 = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".x"));
});
$p.S = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".y"));
});
$p.gC = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".z"));
});
$p.cl = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".w"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4BaseG_FloatExpr_Vec4Expr$", ({
  fd: 1,
  G: 1
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
$p.s4 = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " + ") + other.f) + ")"));
});
$p.m6 = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " * ") + scalar.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  fe: 1,
  et: 1
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
  this.aT = null;
  this.l5 = null;
  this.l6 = null;
  this.l4 = null;
  this.jp = null;
  this.aT = canvas;
  this.l5 = format;
  this.l6 = null;
  this.l4 = null;
  this.jp = [];
}
$p = $c_Ltrivalibs_graphics_painter_CanvasSurface.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_CanvasSurface;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_CanvasSurface() {
}
$h_Ltrivalibs_graphics_painter_CanvasSurface.prototype = $p;
$p.vA = (function() {
  return (this.aT.width | 0);
});
$p.ti = (function() {
  return (this.aT.height | 0);
});
$p.sA = (function(painter) {
  var device = painter.h;
  this.l6 = device.queue;
  var canvasContext = $m_Ltrivalibs_graphics_painter_WebGPU$().tb(this.aT);
  var f$proxy1 = this.l5;
  canvasContext.configure(({
    "device": device,
    "format": f$proxy1
  }));
  this.l4 = canvasContext;
  this.aT.width = (this.aT.clientWidth | 0);
  this.aT.height = (this.aT.clientHeight | 0);
  var observer = new ResizeObserver(((entries$3) => {
    var entry = entries$3[0];
    var rw = (+entry.contentRect.width);
    var rh = (+entry.contentRect.height);
    if (((rw > 0.0) && (rh > 0.0))) {
      var w = $doubleToInt(rw);
      var h = $doubleToInt(rh);
      if (((w !== (this.aT.width | 0)) || (h !== (this.aT.height | 0)))) {
        this.aT.width = w;
        this.aT.height = h;
        var k = 0;
        while ((k < (this.jp.length | 0))) {
          (0, this.jp[k])(w, h);
          k = ((1 + k) | 0);
        }
      }
    }
  }));
  observer.observe(this.aT);
});
$p.sE = (function() {
  return this.l4.getCurrentTexture();
});
$p.uv = (function(encoder) {
  this.l6.submit([encoder.finish()]);
});
$p.uj = (function(cb) {
  this.jp.push(cb);
});
function $isArrayOf_Ltrivalibs_graphics_painter_CanvasSurface(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aZ)));
}
var $d_Ltrivalibs_graphics_painter_CanvasSurface = new $TypeData().i($c_Ltrivalibs_graphics_painter_CanvasSurface, "trivalibs.graphics.painter.CanvasSurface", ({
  aZ: 1,
  fw: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Layer(painter, shade) {
  this.oC = 0;
  this.oB = null;
  this.hb = null;
  this.V = null;
  this.lc = null;
  this.js = 0;
  this.i1 = 0;
  this.bb = null;
  this.jt = null;
  this.jr = null;
  this.hb = painter;
  this.V = shade;
  $f_Ltrivalibs_graphics_painter_Bindable__$init$__V(this);
  this.lc = null;
  this.js = (-1);
  this.i1 = (-1);
  this.bb = [];
  this.jt = [];
  this.jr = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Layer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Layer;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Layer() {
}
$h_Ltrivalibs_graphics_painter_Layer.prototype = $p;
$p.it = (function() {
  return this.oC;
});
$p.lN = (function() {
  return this.oB;
});
$p.jK = (function(x$1) {
  this.oC = x$1;
});
$p.lO = (function(x$1) {
  this.oB = x$1;
});
$p.rs = (function() {
  return this.V;
});
$p.bN = (function() {
  return this.bb;
});
$p.bE = (function() {
  return this.jt;
});
$p.rd = (function() {
  return ((this.V.hl !== null) && (((this.jt.length | 0) === 0) || (this.jt[0] === null)));
});
$p.ut = (function(panel) {
  if (this.rd()) {
    var dict$proxy1 = panel.i8;
    var key$proxy1 = this.V.ib[0];
    if ((!(!(!(!(!dict$proxy1.hasOwnProperty(key$proxy1))))))) {
      var items = this.jr.i0;
      if (((items.length | 0) === 0)) {
        return true;
      } else {
        var any = false;
        var i = 0;
        while (((i < (items.length | 0)) && (!any))) {
          var pbs = items[i].bE();
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
$p.uV = (function(blendState, mipSource, mipTarget) {
  if ((blendState !== (void 0))) {
    this.lc = blendState;
  }
  if ((mipSource !== (void 0))) {
    var v = (mipSource | 0);
    this.js = v;
  }
  if ((mipTarget !== (void 0))) {
    var v$1 = (mipTarget | 0);
    this.i1 = v$1;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Layer = new $TypeData().i($c_Ltrivalibs_graphics_painter_Layer, "trivalibs.graphics.painter.Layer", ({
  fq: 1,
  aY: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.p4 = 0;
  this.p3 = null;
  this.id = null;
  this.ic = null;
  this.Y = null;
  this.lk = null;
  this.lj = null;
  this.by = null;
  this.p5 = null;
  this.ll = null;
  this.id = painter;
  this.ic = form;
  this.Y = shade;
  $f_Ltrivalibs_graphics_painter_Bindable__$init$__V(this);
  this.lk = "none";
  this.lj = null;
  this.by = [];
  this.p5 = [];
  this.ll = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.it = (function() {
  return this.p4;
});
$p.lN = (function() {
  return this.p3;
});
$p.jK = (function(x$1) {
  this.p4 = x$1;
});
$p.lO = (function(x$1) {
  this.p3 = x$1;
});
$p.rs = (function() {
  return this.Y;
});
$p.bN = (function() {
  return this.by;
});
$p.bE = (function() {
  return this.p5;
});
$p.uW = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.lk = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.lj = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  fv: 1,
  aY: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform(inner) {
  this.M = null;
  this.M = inner;
}
$p = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform() {
}
$h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = $p;
$p.t = (function() {
  return this.M.t();
});
var $d_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform, "trivalibs.graphics.shader.FragmentUniform$given_WGSLType_FragmentUniform", ({
  fH: 1,
  r: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.bc = null;
  this.bc = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.t = (function() {
  return this.bc.t();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  fI: 1,
  r: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.lu = null;
  this.lu = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.L = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.lu === "") ? name : ((this.lu + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  fQ: 1,
  E: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.lv = null;
  this.lv = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.i = (function(name) {
  return ((this.lv === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.lv + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  fR: 1,
  E: 1
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
  fS: 1,
  E: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.pb = null;
  this.cd = null;
  this.pb = prefix;
  this.cd = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.L = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.pb + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  fU: 1,
  E: 1
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
  g6: 1,
  r: 1
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
  g7: 1,
  r: 1
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
  g8: 1,
  r: 1
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
  g9: 1,
  r: 1
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
  ga: 1,
  r: 1
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
  gb: 1,
  r: 1
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
  this.k6 = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.r = (function() {
  return ((this.k6.Y ? "interface " : (this.k6.X ? "" : "class ")) + this.k6.N);
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
    return $thiz.gD;
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gE;
      break;
    }
    case 1: {
      return $thiz.cn;
      break;
    }
    case 2: {
      return $thiz.co;
      break;
    }
    case 3: {
      return $thiz.cp;
      break;
    }
    case 4: {
      return $thiz.cq;
      break;
    }
    case 5: {
      return $thiz.cr;
      break;
    }
    case 6: {
      return $thiz.cs;
      break;
    }
    case 7: {
      return $thiz.ct;
      break;
    }
    case 8: {
      return $thiz.cu;
      break;
    }
    case 9: {
      return $thiz.cm;
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
      return $thiz.gF;
      break;
    }
    case 1: {
      return $thiz.cx;
      break;
    }
    case 2: {
      return $thiz.cy;
      break;
    }
    case 3: {
      return $thiz.cz;
      break;
    }
    case 4: {
      return $thiz.cA;
      break;
    }
    case 5: {
      return $thiz.cB;
      break;
    }
    case 6: {
      return $thiz.cC;
      break;
    }
    case 7: {
      return $thiz.cD;
      break;
    }
    case 8: {
      return $thiz.cE;
      break;
    }
    case 9: {
      return $thiz.cv;
      break;
    }
    case 10: {
      return $thiz.cw;
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
      return $thiz.gG;
      break;
    }
    case 1: {
      return $thiz.cI;
      break;
    }
    case 2: {
      return $thiz.cJ;
      break;
    }
    case 3: {
      return $thiz.cK;
      break;
    }
    case 4: {
      return $thiz.cL;
      break;
    }
    case 5: {
      return $thiz.cM;
      break;
    }
    case 6: {
      return $thiz.cN;
      break;
    }
    case 7: {
      return $thiz.cO;
      break;
    }
    case 8: {
      return $thiz.cP;
      break;
    }
    case 9: {
      return $thiz.cF;
      break;
    }
    case 10: {
      return $thiz.cG;
      break;
    }
    case 11: {
      return $thiz.cH;
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
      return $thiz.gH;
      break;
    }
    case 1: {
      return $thiz.cU;
      break;
    }
    case 2: {
      return $thiz.cV;
      break;
    }
    case 3: {
      return $thiz.cW;
      break;
    }
    case 4: {
      return $thiz.cX;
      break;
    }
    case 5: {
      return $thiz.cY;
      break;
    }
    case 6: {
      return $thiz.cZ;
      break;
    }
    case 7: {
      return $thiz.d0;
      break;
    }
    case 8: {
      return $thiz.d1;
      break;
    }
    case 9: {
      return $thiz.cQ;
      break;
    }
    case 10: {
      return $thiz.cR;
      break;
    }
    case 11: {
      return $thiz.cS;
      break;
    }
    case 12: {
      return $thiz.cT;
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
      return $thiz.gI;
      break;
    }
    case 1: {
      return $thiz.d7;
      break;
    }
    case 2: {
      return $thiz.d8;
      break;
    }
    case 3: {
      return $thiz.d9;
      break;
    }
    case 4: {
      return $thiz.da;
      break;
    }
    case 5: {
      return $thiz.db;
      break;
    }
    case 6: {
      return $thiz.dc;
      break;
    }
    case 7: {
      return $thiz.dd;
      break;
    }
    case 8: {
      return $thiz.de;
      break;
    }
    case 9: {
      return $thiz.d2;
      break;
    }
    case 10: {
      return $thiz.d3;
      break;
    }
    case 11: {
      return $thiz.d4;
      break;
    }
    case 12: {
      return $thiz.d5;
      break;
    }
    case 13: {
      return $thiz.d6;
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
      return $thiz.gJ;
      break;
    }
    case 1: {
      return $thiz.dl;
      break;
    }
    case 2: {
      return $thiz.dm;
      break;
    }
    case 3: {
      return $thiz.dn;
      break;
    }
    case 4: {
      return $thiz.dp;
      break;
    }
    case 5: {
      return $thiz.dq;
      break;
    }
    case 6: {
      return $thiz.dr;
      break;
    }
    case 7: {
      return $thiz.ds;
      break;
    }
    case 8: {
      return $thiz.dt;
      break;
    }
    case 9: {
      return $thiz.df;
      break;
    }
    case 10: {
      return $thiz.dg;
      break;
    }
    case 11: {
      return $thiz.dh;
      break;
    }
    case 12: {
      return $thiz.di;
      break;
    }
    case 13: {
      return $thiz.dj;
      break;
    }
    case 14: {
      return $thiz.dk;
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
      return $thiz.gK;
      break;
    }
    case 1: {
      return $thiz.dB;
      break;
    }
    case 2: {
      return $thiz.dC;
      break;
    }
    case 3: {
      return $thiz.dD;
      break;
    }
    case 4: {
      return $thiz.dE;
      break;
    }
    case 5: {
      return $thiz.dF;
      break;
    }
    case 6: {
      return $thiz.dG;
      break;
    }
    case 7: {
      return $thiz.dH;
      break;
    }
    case 8: {
      return $thiz.dI;
      break;
    }
    case 9: {
      return $thiz.du;
      break;
    }
    case 10: {
      return $thiz.dv;
      break;
    }
    case 11: {
      return $thiz.dw;
      break;
    }
    case 12: {
      return $thiz.dx;
      break;
    }
    case 13: {
      return $thiz.dy;
      break;
    }
    case 14: {
      return $thiz.dz;
      break;
    }
    case 15: {
      return $thiz.dA;
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
      return $thiz.gL;
      break;
    }
    case 1: {
      return $thiz.dR;
      break;
    }
    case 2: {
      return $thiz.dS;
      break;
    }
    case 3: {
      return $thiz.dT;
      break;
    }
    case 4: {
      return $thiz.dU;
      break;
    }
    case 5: {
      return $thiz.dV;
      break;
    }
    case 6: {
      return $thiz.dW;
      break;
    }
    case 7: {
      return $thiz.dX;
      break;
    }
    case 8: {
      return $thiz.dY;
      break;
    }
    case 9: {
      return $thiz.dJ;
      break;
    }
    case 10: {
      return $thiz.dK;
      break;
    }
    case 11: {
      return $thiz.dL;
      break;
    }
    case 12: {
      return $thiz.dM;
      break;
    }
    case 13: {
      return $thiz.dN;
      break;
    }
    case 14: {
      return $thiz.dO;
      break;
    }
    case 15: {
      return $thiz.dP;
      break;
    }
    case 16: {
      return $thiz.dQ;
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
      return $thiz.gM;
      break;
    }
    case 1: {
      return $thiz.e8;
      break;
    }
    case 2: {
      return $thiz.e9;
      break;
    }
    case 3: {
      return $thiz.ea;
      break;
    }
    case 4: {
      return $thiz.eb;
      break;
    }
    case 5: {
      return $thiz.ec;
      break;
    }
    case 6: {
      return $thiz.ed;
      break;
    }
    case 7: {
      return $thiz.ee;
      break;
    }
    case 8: {
      return $thiz.ef;
      break;
    }
    case 9: {
      return $thiz.dZ;
      break;
    }
    case 10: {
      return $thiz.e0;
      break;
    }
    case 11: {
      return $thiz.e1;
      break;
    }
    case 12: {
      return $thiz.e2;
      break;
    }
    case 13: {
      return $thiz.e3;
      break;
    }
    case 14: {
      return $thiz.e4;
      break;
    }
    case 15: {
      return $thiz.e5;
      break;
    }
    case 16: {
      return $thiz.e6;
      break;
    }
    case 17: {
      return $thiz.e7;
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
      return $thiz.gN;
      break;
    }
    case 1: {
      return $thiz.eq;
      break;
    }
    case 2: {
      return $thiz.er;
      break;
    }
    case 3: {
      return $thiz.es;
      break;
    }
    case 4: {
      return $thiz.et;
      break;
    }
    case 5: {
      return $thiz.eu;
      break;
    }
    case 6: {
      return $thiz.ev;
      break;
    }
    case 7: {
      return $thiz.ew;
      break;
    }
    case 8: {
      return $thiz.ex;
      break;
    }
    case 9: {
      return $thiz.eg;
      break;
    }
    case 10: {
      return $thiz.eh;
      break;
    }
    case 11: {
      return $thiz.ei;
      break;
    }
    case 12: {
      return $thiz.ej;
      break;
    }
    case 13: {
      return $thiz.ek;
      break;
    }
    case 14: {
      return $thiz.el;
      break;
    }
    case 15: {
      return $thiz.em;
      break;
    }
    case 16: {
      return $thiz.en;
      break;
    }
    case 17: {
      return $thiz.eo;
      break;
    }
    case 18: {
      return $thiz.ep;
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
      return $thiz.gO;
      break;
    }
    case 1: {
      return $thiz.eI;
      break;
    }
    case 2: {
      return $thiz.eK;
      break;
    }
    case 3: {
      return $thiz.eL;
      break;
    }
    case 4: {
      return $thiz.eM;
      break;
    }
    case 5: {
      return $thiz.eN;
      break;
    }
    case 6: {
      return $thiz.eO;
      break;
    }
    case 7: {
      return $thiz.eP;
      break;
    }
    case 8: {
      return $thiz.eQ;
      break;
    }
    case 9: {
      return $thiz.ey;
      break;
    }
    case 10: {
      return $thiz.ez;
      break;
    }
    case 11: {
      return $thiz.eA;
      break;
    }
    case 12: {
      return $thiz.eB;
      break;
    }
    case 13: {
      return $thiz.eC;
      break;
    }
    case 14: {
      return $thiz.eD;
      break;
    }
    case 15: {
      return $thiz.eE;
      break;
    }
    case 16: {
      return $thiz.eF;
      break;
    }
    case 17: {
      return $thiz.eG;
      break;
    }
    case 18: {
      return $thiz.eH;
      break;
    }
    case 19: {
      return $thiz.eJ;
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
      return $thiz.gP;
      break;
    }
    case 1: {
      return $thiz.f1;
      break;
    }
    case 2: {
      return $thiz.f4;
      break;
    }
    case 3: {
      return $thiz.f5;
      break;
    }
    case 4: {
      return $thiz.f6;
      break;
    }
    case 5: {
      return $thiz.f7;
      break;
    }
    case 6: {
      return $thiz.f8;
      break;
    }
    case 7: {
      return $thiz.f9;
      break;
    }
    case 8: {
      return $thiz.fa;
      break;
    }
    case 9: {
      return $thiz.eR;
      break;
    }
    case 10: {
      return $thiz.eS;
      break;
    }
    case 11: {
      return $thiz.eT;
      break;
    }
    case 12: {
      return $thiz.eU;
      break;
    }
    case 13: {
      return $thiz.eV;
      break;
    }
    case 14: {
      return $thiz.eW;
      break;
    }
    case 15: {
      return $thiz.eX;
      break;
    }
    case 16: {
      return $thiz.eY;
      break;
    }
    case 17: {
      return $thiz.eZ;
      break;
    }
    case 18: {
      return $thiz.f0;
      break;
    }
    case 19: {
      return $thiz.f2;
      break;
    }
    case 20: {
      return $thiz.f3;
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
      return $thiz.gQ;
      break;
    }
    case 1: {
      return $thiz.fl;
      break;
    }
    case 2: {
      return $thiz.fp;
      break;
    }
    case 3: {
      return $thiz.fq;
      break;
    }
    case 4: {
      return $thiz.fr;
      break;
    }
    case 5: {
      return $thiz.fs;
      break;
    }
    case 6: {
      return $thiz.ft;
      break;
    }
    case 7: {
      return $thiz.fu;
      break;
    }
    case 8: {
      return $thiz.fv;
      break;
    }
    case 9: {
      return $thiz.fb;
      break;
    }
    case 10: {
      return $thiz.fc;
      break;
    }
    case 11: {
      return $thiz.fd;
      break;
    }
    case 12: {
      return $thiz.fe;
      break;
    }
    case 13: {
      return $thiz.ff;
      break;
    }
    case 14: {
      return $thiz.fg;
      break;
    }
    case 15: {
      return $thiz.fh;
      break;
    }
    case 16: {
      return $thiz.fi;
      break;
    }
    case 17: {
      return $thiz.fj;
      break;
    }
    case 18: {
      return $thiz.fk;
      break;
    }
    case 19: {
      return $thiz.fm;
      break;
    }
    case 20: {
      return $thiz.fn;
      break;
    }
    case 21: {
      return $thiz.fo;
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
      return $thiz.aD;
      break;
    }
    case 1: {
      return $thiz.aX;
      break;
    }
    case 2: {
      return $thiz.b5;
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
      return $thiz.aP;
      break;
    }
    case 1: {
      return $thiz.aQ;
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
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 3)"));
    }
  }
}
function $f_s_Product5__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gR;
      break;
    }
    case 1: {
      return $thiz.fw;
      break;
    }
    case 2: {
      return $thiz.fx;
      break;
    }
    case 3: {
      return $thiz.fy;
      break;
    }
    case 4: {
      return $thiz.fz;
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
      return $thiz.gS;
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
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 5)"));
    }
  }
}
function $f_s_Product7__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gT;
      break;
    }
    case 1: {
      return $thiz.fF;
      break;
    }
    case 2: {
      return $thiz.fG;
      break;
    }
    case 3: {
      return $thiz.fH;
      break;
    }
    case 4: {
      return $thiz.fI;
      break;
    }
    case 5: {
      return $thiz.fJ;
      break;
    }
    case 6: {
      return $thiz.fK;
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
      return $thiz.gU;
      break;
    }
    case 1: {
      return $thiz.fL;
      break;
    }
    case 2: {
      return $thiz.fM;
      break;
    }
    case 3: {
      return $thiz.fN;
      break;
    }
    case 4: {
      return $thiz.fO;
      break;
    }
    case 5: {
      return $thiz.fP;
      break;
    }
    case 6: {
      return $thiz.fQ;
      break;
    }
    case 7: {
      return $thiz.fR;
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
      return $thiz.gV;
      break;
    }
    case 1: {
      return $thiz.fS;
      break;
    }
    case 2: {
      return $thiz.fT;
      break;
    }
    case 3: {
      return $thiz.fU;
      break;
    }
    case 4: {
      return $thiz.fV;
      break;
    }
    case 5: {
      return $thiz.fW;
      break;
    }
    case 6: {
      return $thiz.fX;
      break;
    }
    case 7: {
      return $thiz.fY;
      break;
    }
    case 8: {
      return $thiz.fZ;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 8)"));
    }
  }
}
/** @constructor */
function $c_sc_IterableOps$WithFilter(self, p) {
  this.mF = null;
  this.mE = null;
  this.mF = self;
  this.mE = p;
}
$p = $c_sc_IterableOps$WithFilter.prototype = new $h_sc_WithFilter();
$p.constructor = $c_sc_IterableOps$WithFilter;
/** @constructor */
function $h_sc_IterableOps$WithFilter() {
}
$h_sc_IterableOps$WithFilter.prototype = $p;
$p.t1 = (function() {
  return new $c_sc_View$Filter(this.mF, this.mE, false);
});
var $d_sc_IterableOps$WithFilter = new $TypeData().i($c_sc_IterableOps$WithFilter, "scala.collection.IterableOps$WithFilter", ({
  c7: 1,
  cm: 1,
  a: 1
}));
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).sz(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().bf : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.af();
  while ($thiz.U()) {
    if ((!those.U())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().c($thiz.P(), those.P()))) {
      return false;
    }
  }
  return (!those.U());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.bf = null;
  $n_sc_Iterator$ = this;
  this.bf = new $c_sc_Iterator$$anon$19();
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
  at: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cE)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.mO = null;
  this.mO = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.is = (function() {
  return (0, this.mO)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  cN: 1,
  cM: 1,
  br: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.mP = null;
  this.mP = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.g = (function(x0) {
  return (0, this.mP)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  cP: 1,
  cO: 1,
  k: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.mQ = null;
  this.mQ = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.qx = (function(x0, x1) {
  return (0, this.mQ)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  cR: 1,
  cQ: 1,
  bs: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.mR = null;
  this.mR = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.qw = (function(x0, x1, x2) {
  return (0, this.mR)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  cT: 1,
  cS: 1,
  bt: 1
}));
/** @constructor */
function $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(f) {
  this.mS = null;
  this.mS = f;
}
$p = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a;
/** @constructor */
function $h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a() {
}
$h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = $p;
$p.ir = (function(x0, x1, x2, x3) {
  return (0, this.mS)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  cV: 1,
  cU: 1,
  bu: 1
}));
/** @constructor */
function $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(f) {
  this.mT = null;
  this.mT = f;
}
$p = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = new $h_sr_AbstractFunction5();
$p.constructor = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078;
/** @constructor */
function $h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078() {
}
$h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = $p;
$p.s8 = (function(x0, x1, x2, x3, x4) {
  return (0, this.mT)(x0, x1, x2, x3, x4);
});
var $d_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078 = new $TypeData().i($c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078, "scala.runtime.AbstractFunction5.$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078", ({
  cX: 1,
  cW: 1,
  bv: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.ap = null;
  this.ap = es;
  if ((es.b.length <= 22)) {
    $m_sr_Scala3RunTime$().sg();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.m = (function(n) {
  return this.ap.b[n];
});
$p.z = (function() {
  return this.ap.b.length;
});
$p.F = (function() {
  return "Tuple";
});
$p.r = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().vC(this.ap), "(", ",", ")");
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().sw(this, (-889275714), null);
});
$p.v = (function(that) {
  if ((that instanceof $c_sr_TupleXXL)) {
    if ((this.ap === that.ap)) {
      return true;
    } else {
      if ((this.ap.b.length !== that.ap.b.length)) {
        return false;
      }
      var i = 0;
      while ((i < this.ap.b.length)) {
        var $x_2 = $m_sr_BoxesRunTime$();
        var arr$3 = this.ap;
        var n = i;
        var $x_1 = arr$3.b[n];
        var arr$4 = that.ap;
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
$p.hw = (function(f) {
  return ((arg1$2) => f.g(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  d7: 1,
  db: 1,
  dc: 1
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
$p.uF = (function(center, dir, length, thickness, facing, height) {
  var p$proxy1 = ((dir.l * dir.l) + (dir.k * dir.k));
  var len = (+Math.sqrt(p$proxy1));
  var d = new $c_Ltrivalibs_graphics_math_cpu_Vec2((0.5 * ((dir.l / len) * length)), (0.5 * ((dir.k / len) * length)));
  var n = new $c_Ltrivalibs_graphics_math_cpu_Vec2((((-d.k) / length) * thickness), ((d.l / length) * thickness));
  return new $c_Lsketchlib_utils_room_Ring([new $c_Ltrivalibs_graphics_math_cpu_Vec2(((center.l + d.l) + n.l), ((center.k + d.k) + n.k)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(((center.l + d.l) - n.l), ((center.k + d.k) - n.k)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(((center.l - d.l) - n.l), ((center.k - d.k) - n.k)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(((center.l - d.l) + n.l), ((center.k - d.k) + n.k))], facing, height);
});
var $d_Lsketchlib_utils_room_Ring$ = new $TypeData().i($c_Lsketchlib_utils_room_Ring$, "sketchlib.utils.room.Ring$", ({
  dH: 1,
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
  return new $c_Ltrivalibs_graphics_math_cpu_Vec4((+x.aP), (+x.aQ), (+x.aY), (+x.aZ));
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3, "trivalibs.graphics.math.cpu.Vec4$$anon$3", ({
  eL: 1,
  a5: 1,
  k: 1
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
  f4: 1,
  a5: 1,
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
        deps = ((rest[0] === (void 0)) ? $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$().rV() : rest[0]);
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a0)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  a0: 1,
  a: 1,
  h: 1,
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
$p.qB = (function(index) {
  return this.ay.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  bh: 1,
  H: 1,
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
$p.qF = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.lI = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.af = (function() {
  return this;
});
$p.iv = (function(n) {
  return this.k0(n, (-1));
});
$p.k0 = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.r = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.gx(0) === 0);
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
  this.b2 = null;
  this.h3 = false;
  this.h4 = false;
  this.b2 = wall;
  this.h3 = leftArris;
  this.h4 = rightArris;
}
$p = $c_Lsketches_rooms_columns_Face.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_columns_Face;
/** @constructor */
function $h_Lsketches_rooms_columns_Face() {
}
$h_Lsketches_rooms_columns_Face.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().p(acc, 2181757);
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().X(this.b2));
  acc = $m_sr_Statics$().p(acc, (this.h3 ? 1231 : 1237));
  acc = $m_sr_Statics$().p(acc, (this.h4 ? 1231 : 1237));
  return $m_sr_Statics$().ak(acc, 3);
});
$p.v = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_rooms_columns_Face)) {
    if (((this.h3 === x$0.h3) && (this.h4 === x$0.h4))) {
      var x = this.b2;
      var x$2 = x$0.b2;
      return ((x === null) ? (x$2 === null) : x.v(x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().ce(this);
});
$p.z = (function() {
  return 3;
});
$p.F = (function() {
  return "Face";
});
$p.m = (function(n) {
  switch (n) {
    case 0: {
      return this.b2;
      break;
    }
    case 1: {
      return this.h3;
      break;
    }
    case 2: {
      return this.h4;
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
  this.bv = null;
  this.bw = null;
  this.bh = 0.0;
  this.bH = 0.0;
  this.g9 = 0.0;
  this.bv = a;
  this.bw = b;
  this.bh = width;
  this.bH = height;
  this.g9 = soffitY;
}
$p = $c_Lsketchlib_utils_room_Beam.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Beam;
/** @constructor */
function $h_Lsketchlib_utils_room_Beam() {
}
$h_Lsketchlib_utils_room_Beam.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().p(acc, 2066383);
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().X(this.bv));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().X(this.bw));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().bC(this.bh));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().bC(this.bH));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().bC(this.g9));
  return $m_sr_Statics$().ak(acc, 5);
});
$p.v = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketchlib_utils_room_Beam)) {
    if ((((this.bh === x$0.bh) && (this.bH === x$0.bH)) && (this.g9 === x$0.g9))) {
      var x = this.bv;
      var x$2 = x$0.bv;
      var $x_1 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$3 = this.bw;
      var x$4 = x$0.bw;
      return ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().ce(this);
});
$p.z = (function() {
  return 5;
});
$p.F = (function() {
  return "Beam";
});
$p.m = (function(n) {
  switch (n) {
    case 0: {
      return this.bv;
      break;
    }
    case 1: {
      return this.bw;
      break;
    }
    case 2: {
      return this.bh;
      break;
    }
    case 3: {
      return this.bH;
      break;
    }
    case 4: {
      return this.g9;
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
  this.ba = null;
  this.c0 = 0.0;
  this.bZ = 0.0;
  this.h5 = 0.0;
  this.ba = dir;
  this.c0 = spacing;
  this.bZ = phase;
  this.h5 = width;
}
$p = $c_Lsketchlib_utils_room_BeamFamily.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_BeamFamily;
/** @constructor */
function $h_Lsketchlib_utils_room_BeamFamily() {
}
$h_Lsketchlib_utils_room_BeamFamily.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().p(acc, (-649758701));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().X(this.ba));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().bC(this.c0));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().bC(this.bZ));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().bC(this.h5));
  return $m_sr_Statics$().ak(acc, 4);
});
$p.v = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketchlib_utils_room_BeamFamily)) {
    if ((((this.c0 === x$0.c0) && (this.bZ === x$0.bZ)) && (this.h5 === x$0.h5))) {
      var x = this.ba;
      var x$2 = x$0.ba;
      return ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().ce(this);
});
$p.z = (function() {
  return 4;
});
$p.F = (function() {
  return "BeamFamily";
});
$p.m = (function(n) {
  switch (n) {
    case 0: {
      return this.ba;
      break;
    }
    case 1: {
      return this.c0;
      break;
    }
    case 2: {
      return this.bZ;
      break;
    }
    case 3: {
      return this.h5;
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
  this.a6 = null;
  this.aA = null;
  this.bI = null;
  this.c1 = false;
  this.a6 = a;
  this.aA = b;
  this.bI = inwardNormal;
  this.c1 = arrisAtA;
}
$p = $c_Lsketchlib_utils_room_Edge.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Edge;
/** @constructor */
function $h_Lsketchlib_utils_room_Edge() {
}
$h_Lsketchlib_utils_room_Edge.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().p(acc, 2154973);
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().X(this.a6));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().X(this.aA));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().X(this.bI));
  acc = $m_sr_Statics$().p(acc, (this.c1 ? 1231 : 1237));
  return $m_sr_Statics$().ak(acc, 4);
});
$p.v = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketchlib_utils_room_Edge)) {
    if ((this.c1 === x$0.c1)) {
      var x = this.a6;
      var x$2 = x$0.a6;
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
      var x$5 = this.bI;
      var x$6 = x$0.bI;
      return ((x$5 === null) ? (x$6 === null) : (x$5 === x$6));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().ce(this);
});
$p.z = (function() {
  return 4;
});
$p.F = (function() {
  return "Edge";
});
$p.m = (function(n) {
  switch (n) {
    case 0: {
      return this.a6;
      break;
    }
    case 1: {
      return this.aA;
      break;
    }
    case 2: {
      return this.bI;
      break;
    }
    case 3: {
      return this.c1;
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
  this.gc = null;
  this.gc = rings;
}
$p = $c_Lsketchlib_utils_room_Footprint.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Footprint;
/** @constructor */
function $h_Lsketchlib_utils_room_Footprint() {
}
$h_Lsketchlib_utils_room_Footprint.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, (-905123115), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Lsketchlib_utils_room_Footprint) && $m_sr_BoxesRunTime$().c(this.gc, x$0.gc)));
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().ce(this);
});
$p.z = (function() {
  return 1;
});
$p.F = (function() {
  return "Footprint";
});
$p.m = (function(n) {
  if ((n === 0)) {
    return this.gc;
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
  this.bi = null;
  this.h6 = 0.0;
  this.hT = 0.0;
  this.bi = points;
  this.h6 = facing;
  this.hT = height;
}
$p = $c_Lsketchlib_utils_room_Ring.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Ring;
/** @constructor */
function $h_Lsketchlib_utils_room_Ring() {
}
$h_Lsketchlib_utils_room_Ring.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().p(acc, 2547280);
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().X(this.bi));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().X(this.h6));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().bC(this.hT));
  return $m_sr_Statics$().ak(acc, 3);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Lsketchlib_utils_room_Ring) && (((this.hT === x$0.hT) && $m_sr_BoxesRunTime$().c(this.bi, x$0.bi)) && (this.h6 === x$0.h6))));
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().ce(this);
});
$p.z = (function() {
  return 3;
});
$p.F = (function() {
  return "Ring";
});
$p.m = (function(n) {
  switch (n) {
    case 0: {
      return this.bi;
      break;
    }
    case 1: {
      return this.h6;
      break;
    }
    case 2: {
      return this.hT;
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
  this.h7 = null;
  this.av = 0.0;
  this.gd = 0.0;
  this.c2 = null;
  this.h7 = center;
  this.av = width;
  this.gd = height;
  this.c2 = inwardNormal;
}
$p = $c_Lsketchlib_utils_room_Wall.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Wall;
/** @constructor */
function $h_Lsketchlib_utils_room_Wall() {
}
$h_Lsketchlib_utils_room_Wall.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().p(acc, 2688490);
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().X(this.h7));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().bC(this.av));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().bC(this.gd));
  acc = $m_sr_Statics$().p(acc, $m_sr_Statics$().X(this.c2));
  return $m_sr_Statics$().ak(acc, 4);
});
$p.v = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketchlib_utils_room_Wall)) {
    if (((this.av === x$0.av) && (this.gd === x$0.gd))) {
      var x = this.h7;
      var x$2 = x$0.h7;
      var $x_1 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$3 = this.c2;
      var x$4 = x$0.c2;
      return ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().ce(this);
});
$p.z = (function() {
  return 4;
});
$p.F = (function() {
  return "Wall";
});
$p.m = (function(n) {
  switch (n) {
    case 0: {
      return this.h7;
      break;
    }
    case 1: {
      return this.av;
      break;
    }
    case 2: {
      return this.gd;
      break;
    }
    case 3: {
      return this.c2;
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
$p.iy = (function(m) {
  return m.kI;
});
$p.iz = (function(m) {
  return m.kJ;
});
$p.iA = (function(m) {
  return m.kK;
});
$p.iB = (function(m) {
  return m.kL;
});
$p.iC = (function(m) {
  return m.kM;
});
$p.iD = (function(m) {
  return m.kN;
});
$p.iE = (function(m) {
  return m.kO;
});
$p.iF = (function(m) {
  return m.kP;
});
$p.iG = (function(m) {
  return m.kQ;
});
$p.iH = (function(m) {
  return m.kR;
});
$p.iI = (function(m) {
  return m.kS;
});
$p.iJ = (function(m) {
  return m.kT;
});
$p.iK = (function(m) {
  return m.kU;
});
$p.iL = (function(m) {
  return m.kV;
});
$p.iM = (function(m) {
  return m.kW;
});
$p.iN = (function(m) {
  return m.kX;
});
$p.qX = (function(m, v) {
  m.kI = v;
});
$p.qY = (function(m, v) {
  m.kJ = v;
});
$p.qZ = (function(m, v) {
  m.kK = v;
});
$p.r0 = (function(m, v) {
  m.kL = v;
});
$p.r1 = (function(m, v) {
  m.kM = v;
});
$p.r2 = (function(m, v) {
  m.kN = v;
});
$p.r3 = (function(m, v) {
  m.kO = v;
});
$p.r4 = (function(m, v) {
  m.kP = v;
});
$p.r5 = (function(m, v) {
  m.kQ = v;
});
$p.r6 = (function(m, v) {
  m.kR = v;
});
$p.r7 = (function(m, v) {
  m.kS = v;
});
$p.r8 = (function(m, v) {
  m.kT = v;
});
$p.r9 = (function(m, v) {
  m.kU = v;
});
$p.ra = (function(m, v) {
  m.kV = v;
});
$p.rb = (function(m, v) {
  m.kW = v;
});
$p.rc = (function(m, v) {
  m.kX = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  ex: 1,
  W: 1,
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
  return v.jl;
});
$p.ah = (function(v) {
  return v.jm;
});
$p.bt = (function(v) {
  return v.jn;
});
$p.bs = (function(v) {
  return v.jk;
});
$p.hA = (function(v, value) {
  v.jl = value;
});
$p.hB = (function(v, value) {
  v.jm = value;
});
$p.ms = (function(v, value) {
  v.jn = value;
});
$p.mn = (function(v, value) {
  v.jk = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  eB: 1,
  G: 1,
  Y: 1,
  Z: 1
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
$p.hA = (function(v, value) {
  v.l = value;
});
$p.hB = (function(v, value) {
  v.k = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$, "trivalibs.graphics.math.cpu.Vec2$given_Vec2Mutable_Vec2$", ({
  eF: 1,
  X: 1,
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
  eI: 1,
  aW: 1,
  eo: 1,
  er: 1
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
  return v.gf;
});
$p.ah = (function(v) {
  return v.c5;
});
$p.bt = (function(v) {
  return v.c6;
});
$p.bs = (function(v) {
  return v.c4;
});
$p.hA = (function(v, value) {
  v.gf = value;
});
$p.hB = (function(v, value) {
  v.c5 = value;
});
$p.ms = (function(v, value) {
  v.c6 = value;
});
$p.mn = (function(v, value) {
  v.c4 = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$, "trivalibs.graphics.math.cpu.Vec4$given_Vec4Mutable_Vec4$", ({
  eM: 1,
  G: 1,
  Y: 1,
  Z: 1
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
$p.tz = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.tB = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.tD = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.tF = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.tH = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.tJ = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.tL = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.tN = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.tP = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.tR = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.tT = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.tV = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.tX = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.tZ = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.u1 = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.u3 = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.tA = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.tC = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.tE = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.tG = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.tI = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.tK = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.tM = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.tO = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.tQ = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.tS = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.tU = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.tW = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.tY = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.u0 = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.u2 = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.u4 = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.iy = (function(m) {
  return this.tz(m);
});
$p.iz = (function(m) {
  return this.tB(m);
});
$p.iA = (function(m) {
  return this.tD(m);
});
$p.iB = (function(m) {
  return this.tF(m);
});
$p.iC = (function(m) {
  return this.tH(m);
});
$p.iD = (function(m) {
  return this.tJ(m);
});
$p.iE = (function(m) {
  return this.tL(m);
});
$p.iF = (function(m) {
  return this.tN(m);
});
$p.iG = (function(m) {
  return this.tP(m);
});
$p.iH = (function(m) {
  return this.tR(m);
});
$p.iI = (function(m) {
  return this.tT(m);
});
$p.iJ = (function(m) {
  return this.tV(m);
});
$p.iK = (function(m) {
  return this.tX(m);
});
$p.iL = (function(m) {
  return this.tZ(m);
});
$p.iM = (function(m) {
  return this.u1(m);
});
$p.iN = (function(m) {
  return this.u3(m);
});
$p.qX = (function(m, v) {
  this.tA(m, v);
});
$p.qY = (function(m, v) {
  this.tC(m, v);
});
$p.qZ = (function(m, v) {
  this.tE(m, v);
});
$p.r0 = (function(m, v) {
  this.tG(m, v);
});
$p.r1 = (function(m, v) {
  this.tI(m, v);
});
$p.r2 = (function(m, v) {
  this.tK(m, v);
});
$p.r3 = (function(m, v) {
  this.tM(m, v);
});
$p.r4 = (function(m, v) {
  this.tO(m, v);
});
$p.r5 = (function(m, v) {
  this.tQ(m, v);
});
$p.r6 = (function(m, v) {
  this.tS(m, v);
});
$p.r7 = (function(m, v) {
  this.tU(m, v);
});
$p.r8 = (function(m, v) {
  this.tW(m, v);
});
$p.r9 = (function(m, v) {
  this.tY(m, v);
});
$p.ra = (function(m, v) {
  this.u0(m, v);
});
$p.rb = (function(m, v) {
  this.u2(m, v);
});
$p.rc = (function(m, v) {
  this.u4(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  eP: 1,
  W: 1,
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
$p.mo = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.mq = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.mp = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (v.off | 0);
  v.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.mr = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy4 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy4, value$proxy2, true);
});
$p.ag = (function(v) {
  return this.mo(v);
});
$p.ah = (function(v) {
  return this.mq(v);
});
$p.hA = (function(v, value) {
  this.mp(v, value);
});
$p.hB = (function(v, value) {
  this.mr(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$vec2MutableBuffer$", ({
  eS: 1,
  X: 1,
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
$p.mo = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.mq = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.vG = (function(v) {
  var offset$proxy3 = ((8 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy3, true));
});
$p.vx = (function(v) {
  var offset$proxy4 = ((12 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy4, true));
});
$p.mp = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy5 = (v.off | 0);
  v.dv.setFloat32(offset$proxy5, value$proxy1, true);
});
$p.mr = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy6 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy6, value$proxy2, true);
});
$p.vH = (function(v, value) {
  var value$proxy3 = Math.fround(value);
  var offset$proxy7 = ((8 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy7, value$proxy3, true);
});
$p.vy = (function(v, value) {
  var value$proxy4 = Math.fround(value);
  var offset$proxy8 = ((12 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy8, value$proxy4, true);
});
$p.ag = (function(v) {
  return this.mo(v);
});
$p.ah = (function(v) {
  return this.mq(v);
});
$p.bt = (function(v) {
  return this.vG(v);
});
$p.bs = (function(v) {
  return this.vx(v);
});
$p.hA = (function(v, value) {
  this.mp(v, value);
});
$p.hB = (function(v, value) {
  this.mr(v, value);
});
$p.ms = (function(v, value) {
  this.vH(v, value);
});
$p.mn = (function(v, value) {
  this.vy(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$vec4MutableBuffer$", ({
  eV: 1,
  G: 1,
  Y: 1,
  Z: 1
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
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.ie, f$proxy1, g$proxy1];
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
  this.ac = null;
  this.ab = null;
  this.ie = null;
  this.ac = vertexBody;
  this.ab = fragmentBody;
  this.ie = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, (-1488826029), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.ac === x$0.ac) && (this.ab === x$0.ab)) && (this.ie === x$0.ie))));
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().ce(this);
});
$p.z = (function() {
  return 3;
});
$p.F = (function() {
  return "ShaderDef";
});
$p.m = (function(n) {
  switch (n) {
    case 0: {
      return this.ac;
      break;
    }
    case 1: {
      return this.ab;
      break;
    }
    case 2: {
      return this.ie;
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
  b5: 1,
  s: 1,
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
  a2: 1,
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
  ba: 1,
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
  bc: 1,
  j: 1,
  i: 1,
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
  s: 1,
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
  bj: 1,
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
  bo: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.my)) {
    if (($thiz.iW === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.iW;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.k6.N));
      try {
        var $x_1 = ((($thiz.iW + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.mx = $x_1;
    $thiz.my = true;
  }
  return $thiz.mx;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.iW = null;
    this.mx = null;
    this.my = false;
    this.iW = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  jQ() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  by: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.hC = 0;
  this.mA = 0;
  this.mz = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.mz = outer;
  this.hC = 0;
  this.mA = outer.z();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.U = (function() {
  return (this.hC < this.mA);
});
$p.P = (function() {
  var result = this.mz.m(this.hC);
  this.hC = ((1 + this.hC) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bA: 1,
  l: 1,
  d: 1,
  e: 1,
  m: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.gD = null;
  this.gD = _1;
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
  return (("(" + this.gD) + ")");
});
$p.F = (function() {
  return "Tuple1";
});
$p.H = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, 1228477340, true);
});
$p.v = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().c(this.gD, x$1.gD)));
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a7)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  a7: 1,
  bB: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.gE = null;
  this.cn = null;
  this.co = null;
  this.cp = null;
  this.cq = null;
  this.cr = null;
  this.cs = null;
  this.ct = null;
  this.cu = null;
  this.cm = null;
  this.gE = _1;
  this.cn = _2;
  this.co = _3;
  this.cp = _4;
  this.cq = _5;
  this.cr = _6;
  this.cs = _7;
  this.ct = _8;
  this.cu = _9;
  this.cm = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 10;
});
$p.m = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, 2104595240, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().c(this.gE, x$0.gE) && $m_sr_BoxesRunTime$().c(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().c(this.co, x$0.co)) && $m_sr_BoxesRunTime$().c(this.cp, x$0.cp)) && $m_sr_BoxesRunTime$().c(this.cq, x$0.cq)) && $m_sr_BoxesRunTime$().c(this.cr, x$0.cr)) && $m_sr_BoxesRunTime$().c(this.cs, x$0.cs)) && $m_sr_BoxesRunTime$().c(this.ct, x$0.ct)) && $m_sr_BoxesRunTime$().c(this.cu, x$0.cu)) && $m_sr_BoxesRunTime$().c(this.cm, x$0.cm))));
});
$p.F = (function() {
  return "Tuple10";
});
$p.r = (function() {
  return (((((((((((((((((((("(" + this.gE) + ",") + this.cn) + ",") + this.co) + ",") + this.cp) + ",") + this.cq) + ",") + this.cr) + ",") + this.cs) + ",") + this.ct) + ",") + this.cu) + ",") + this.cm) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  a8: 1,
  b: 1,
  c: 1,
  bC: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.gF = null;
  this.cx = null;
  this.cy = null;
  this.cz = null;
  this.cA = null;
  this.cB = null;
  this.cC = null;
  this.cD = null;
  this.cE = null;
  this.cv = null;
  this.cw = null;
  this.gF = _1;
  this.cx = _2;
  this.cy = _3;
  this.cz = _4;
  this.cA = _5;
  this.cB = _6;
  this.cC = _7;
  this.cD = _8;
  this.cE = _9;
  this.cv = _10;
  this.cw = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 11;
});
$p.m = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, 838406606, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().c(this.gF, x$0.gF) && $m_sr_BoxesRunTime$().c(this.cx, x$0.cx)) && $m_sr_BoxesRunTime$().c(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().c(this.cz, x$0.cz)) && $m_sr_BoxesRunTime$().c(this.cA, x$0.cA)) && $m_sr_BoxesRunTime$().c(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().c(this.cC, x$0.cC)) && $m_sr_BoxesRunTime$().c(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().c(this.cE, x$0.cE)) && $m_sr_BoxesRunTime$().c(this.cv, x$0.cv)) && $m_sr_BoxesRunTime$().c(this.cw, x$0.cw))));
});
$p.F = (function() {
  return "Tuple11";
});
$p.r = (function() {
  return (((((((((((((((((((((("(" + this.gF) + ",") + this.cx) + ",") + this.cy) + ",") + this.cz) + ",") + this.cA) + ",") + this.cB) + ",") + this.cC) + ",") + this.cD) + ",") + this.cE) + ",") + this.cv) + ",") + this.cw) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  a9: 1,
  b: 1,
  c: 1,
  bD: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.gG = null;
  this.cI = null;
  this.cJ = null;
  this.cK = null;
  this.cL = null;
  this.cM = null;
  this.cN = null;
  this.cO = null;
  this.cP = null;
  this.cF = null;
  this.cG = null;
  this.cH = null;
  this.gG = _1;
  this.cI = _2;
  this.cJ = _3;
  this.cK = _4;
  this.cL = _5;
  this.cM = _6;
  this.cN = _7;
  this.cO = _8;
  this.cP = _9;
  this.cF = _10;
  this.cG = _11;
  this.cH = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 12;
});
$p.m = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, (-1964145863), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().c(this.gG, x$0.gG) && $m_sr_BoxesRunTime$().c(this.cI, x$0.cI)) && $m_sr_BoxesRunTime$().c(this.cJ, x$0.cJ)) && $m_sr_BoxesRunTime$().c(this.cK, x$0.cK)) && $m_sr_BoxesRunTime$().c(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().c(this.cM, x$0.cM)) && $m_sr_BoxesRunTime$().c(this.cN, x$0.cN)) && $m_sr_BoxesRunTime$().c(this.cO, x$0.cO)) && $m_sr_BoxesRunTime$().c(this.cP, x$0.cP)) && $m_sr_BoxesRunTime$().c(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().c(this.cG, x$0.cG)) && $m_sr_BoxesRunTime$().c(this.cH, x$0.cH))));
});
$p.F = (function() {
  return "Tuple12";
});
$p.r = (function() {
  return (((((((((((((((((((((((("(" + this.gG) + ",") + this.cI) + ",") + this.cJ) + ",") + this.cK) + ",") + this.cL) + ",") + this.cM) + ",") + this.cN) + ",") + this.cO) + ",") + this.cP) + ",") + this.cF) + ",") + this.cG) + ",") + this.cH) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  aa: 1,
  b: 1,
  c: 1,
  bE: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.gH = null;
  this.cU = null;
  this.cV = null;
  this.cW = null;
  this.cX = null;
  this.cY = null;
  this.cZ = null;
  this.d0 = null;
  this.d1 = null;
  this.cQ = null;
  this.cR = null;
  this.cS = null;
  this.cT = null;
  this.gH = _1;
  this.cU = _2;
  this.cV = _3;
  this.cW = _4;
  this.cX = _5;
  this.cY = _6;
  this.cZ = _7;
  this.d0 = _8;
  this.d1 = _9;
  this.cQ = _10;
  this.cR = _11;
  this.cS = _12;
  this.cT = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 13;
});
$p.m = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, 1224168367, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().c(this.gH, x$0.gH) && $m_sr_BoxesRunTime$().c(this.cU, x$0.cU)) && $m_sr_BoxesRunTime$().c(this.cV, x$0.cV)) && $m_sr_BoxesRunTime$().c(this.cW, x$0.cW)) && $m_sr_BoxesRunTime$().c(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().c(this.cY, x$0.cY)) && $m_sr_BoxesRunTime$().c(this.cZ, x$0.cZ)) && $m_sr_BoxesRunTime$().c(this.d0, x$0.d0)) && $m_sr_BoxesRunTime$().c(this.d1, x$0.d1)) && $m_sr_BoxesRunTime$().c(this.cQ, x$0.cQ)) && $m_sr_BoxesRunTime$().c(this.cR, x$0.cR)) && $m_sr_BoxesRunTime$().c(this.cS, x$0.cS)) && $m_sr_BoxesRunTime$().c(this.cT, x$0.cT))));
});
$p.F = (function() {
  return "Tuple13";
});
$p.r = (function() {
  return (((((((((((((((((((((((((("(" + this.gH) + ",") + this.cU) + ",") + this.cV) + ",") + this.cW) + ",") + this.cX) + ",") + this.cY) + ",") + this.cZ) + ",") + this.d0) + ",") + this.d1) + ",") + this.cQ) + ",") + this.cR) + ",") + this.cS) + ",") + this.cT) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  ab: 1,
  b: 1,
  c: 1,
  bF: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.gI = null;
  this.d7 = null;
  this.d8 = null;
  this.d9 = null;
  this.da = null;
  this.db = null;
  this.dc = null;
  this.dd = null;
  this.de = null;
  this.d2 = null;
  this.d3 = null;
  this.d4 = null;
  this.d5 = null;
  this.d6 = null;
  this.gI = _1;
  this.d7 = _2;
  this.d8 = _3;
  this.d9 = _4;
  this.da = _5;
  this.db = _6;
  this.dc = _7;
  this.dd = _8;
  this.de = _9;
  this.d2 = _10;
  this.d3 = _11;
  this.d4 = _12;
  this.d5 = _13;
  this.d6 = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 14;
});
$p.m = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, 147759069, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().c(this.gI, x$0.gI) && $m_sr_BoxesRunTime$().c(this.d7, x$0.d7)) && $m_sr_BoxesRunTime$().c(this.d8, x$0.d8)) && $m_sr_BoxesRunTime$().c(this.d9, x$0.d9)) && $m_sr_BoxesRunTime$().c(this.da, x$0.da)) && $m_sr_BoxesRunTime$().c(this.db, x$0.db)) && $m_sr_BoxesRunTime$().c(this.dc, x$0.dc)) && $m_sr_BoxesRunTime$().c(this.dd, x$0.dd)) && $m_sr_BoxesRunTime$().c(this.de, x$0.de)) && $m_sr_BoxesRunTime$().c(this.d2, x$0.d2)) && $m_sr_BoxesRunTime$().c(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().c(this.d4, x$0.d4)) && $m_sr_BoxesRunTime$().c(this.d5, x$0.d5)) && $m_sr_BoxesRunTime$().c(this.d6, x$0.d6))));
});
$p.F = (function() {
  return "Tuple14";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((("(" + this.gI) + ",") + this.d7) + ",") + this.d8) + ",") + this.d9) + ",") + this.da) + ",") + this.db) + ",") + this.dc) + ",") + this.dd) + ",") + this.de) + ",") + this.d2) + ",") + this.d3) + ",") + this.d4) + ",") + this.d5) + ",") + this.d6) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  ac: 1,
  b: 1,
  c: 1,
  bG: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.gJ = null;
  this.dl = null;
  this.dm = null;
  this.dn = null;
  this.dp = null;
  this.dq = null;
  this.dr = null;
  this.ds = null;
  this.dt = null;
  this.df = null;
  this.dg = null;
  this.dh = null;
  this.di = null;
  this.dj = null;
  this.dk = null;
  this.gJ = _1;
  this.dl = _2;
  this.dm = _3;
  this.dn = _4;
  this.dp = _5;
  this.dq = _6;
  this.dr = _7;
  this.ds = _8;
  this.dt = _9;
  this.df = _10;
  this.dg = _11;
  this.dh = _12;
  this.di = _13;
  this.dj = _14;
  this.dk = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 15;
});
$p.m = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, 1834180931, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().c(this.gJ, x$0.gJ) && $m_sr_BoxesRunTime$().c(this.dl, x$0.dl)) && $m_sr_BoxesRunTime$().c(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().c(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().c(this.dp, x$0.dp)) && $m_sr_BoxesRunTime$().c(this.dq, x$0.dq)) && $m_sr_BoxesRunTime$().c(this.dr, x$0.dr)) && $m_sr_BoxesRunTime$().c(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().c(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().c(this.df, x$0.df)) && $m_sr_BoxesRunTime$().c(this.dg, x$0.dg)) && $m_sr_BoxesRunTime$().c(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().c(this.di, x$0.di)) && $m_sr_BoxesRunTime$().c(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().c(this.dk, x$0.dk))));
});
$p.F = (function() {
  return "Tuple15";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((("(" + this.gJ) + ",") + this.dl) + ",") + this.dm) + ",") + this.dn) + ",") + this.dp) + ",") + this.dq) + ",") + this.dr) + ",") + this.ds) + ",") + this.dt) + ",") + this.df) + ",") + this.dg) + ",") + this.dh) + ",") + this.di) + ",") + this.dj) + ",") + this.dk) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  ad: 1,
  b: 1,
  c: 1,
  bH: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.gK = null;
  this.dB = null;
  this.dC = null;
  this.dD = null;
  this.dE = null;
  this.dF = null;
  this.dG = null;
  this.dH = null;
  this.dI = null;
  this.du = null;
  this.dv = null;
  this.dw = null;
  this.dx = null;
  this.dy = null;
  this.dz = null;
  this.dA = null;
  this.gK = _1;
  this.dB = _2;
  this.dC = _3;
  this.dD = _4;
  this.dE = _5;
  this.dF = _6;
  this.dG = _7;
  this.dH = _8;
  this.dI = _9;
  this.du = _10;
  this.dv = _11;
  this.dw = _12;
  this.dx = _13;
  this.dy = _14;
  this.dz = _15;
  this.dA = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 16;
});
$p.m = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, 499793902, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().c(this.gK, x$0.gK) && $m_sr_BoxesRunTime$().c(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().c(this.dC, x$0.dC)) && $m_sr_BoxesRunTime$().c(this.dD, x$0.dD)) && $m_sr_BoxesRunTime$().c(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().c(this.dF, x$0.dF)) && $m_sr_BoxesRunTime$().c(this.dG, x$0.dG)) && $m_sr_BoxesRunTime$().c(this.dH, x$0.dH)) && $m_sr_BoxesRunTime$().c(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().c(this.du, x$0.du)) && $m_sr_BoxesRunTime$().c(this.dv, x$0.dv)) && $m_sr_BoxesRunTime$().c(this.dw, x$0.dw)) && $m_sr_BoxesRunTime$().c(this.dx, x$0.dx)) && $m_sr_BoxesRunTime$().c(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().c(this.dz, x$0.dz)) && $m_sr_BoxesRunTime$().c(this.dA, x$0.dA))));
});
$p.F = (function() {
  return "Tuple16";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.gK) + ",") + this.dB) + ",") + this.dC) + ",") + this.dD) + ",") + this.dE) + ",") + this.dF) + ",") + this.dG) + ",") + this.dH) + ",") + this.dI) + ",") + this.du) + ",") + this.dv) + ",") + this.dw) + ",") + this.dx) + ",") + this.dy) + ",") + this.dz) + ",") + this.dA) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  ae: 1,
  b: 1,
  c: 1,
  bI: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.gL = null;
  this.dR = null;
  this.dS = null;
  this.dT = null;
  this.dU = null;
  this.dV = null;
  this.dW = null;
  this.dX = null;
  this.dY = null;
  this.dJ = null;
  this.dK = null;
  this.dL = null;
  this.dM = null;
  this.dN = null;
  this.dO = null;
  this.dP = null;
  this.dQ = null;
  this.gL = _1;
  this.dR = _2;
  this.dS = _3;
  this.dT = _4;
  this.dU = _5;
  this.dV = _6;
  this.dW = _7;
  this.dX = _8;
  this.dY = _9;
  this.dJ = _10;
  this.dK = _11;
  this.dL = _12;
  this.dM = _13;
  this.dN = _14;
  this.dO = _15;
  this.dP = _16;
  this.dQ = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 17;
});
$p.m = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, (-934366247), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().c(this.gL, x$0.gL) && $m_sr_BoxesRunTime$().c(this.dR, x$0.dR)) && $m_sr_BoxesRunTime$().c(this.dS, x$0.dS)) && $m_sr_BoxesRunTime$().c(this.dT, x$0.dT)) && $m_sr_BoxesRunTime$().c(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().c(this.dV, x$0.dV)) && $m_sr_BoxesRunTime$().c(this.dW, x$0.dW)) && $m_sr_BoxesRunTime$().c(this.dX, x$0.dX)) && $m_sr_BoxesRunTime$().c(this.dY, x$0.dY)) && $m_sr_BoxesRunTime$().c(this.dJ, x$0.dJ)) && $m_sr_BoxesRunTime$().c(this.dK, x$0.dK)) && $m_sr_BoxesRunTime$().c(this.dL, x$0.dL)) && $m_sr_BoxesRunTime$().c(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().c(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().c(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().c(this.dP, x$0.dP)) && $m_sr_BoxesRunTime$().c(this.dQ, x$0.dQ))));
});
$p.F = (function() {
  return "Tuple17";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.gL) + ",") + this.dR) + ",") + this.dS) + ",") + this.dT) + ",") + this.dU) + ",") + this.dV) + ",") + this.dW) + ",") + this.dX) + ",") + this.dY) + ",") + this.dJ) + ",") + this.dK) + ",") + this.dL) + ",") + this.dM) + ",") + this.dN) + ",") + this.dO) + ",") + this.dP) + ",") + this.dQ) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  af: 1,
  b: 1,
  c: 1,
  bJ: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.gM = null;
  this.e8 = null;
  this.e9 = null;
  this.ea = null;
  this.eb = null;
  this.ec = null;
  this.ed = null;
  this.ee = null;
  this.ef = null;
  this.dZ = null;
  this.e0 = null;
  this.e1 = null;
  this.e2 = null;
  this.e3 = null;
  this.e4 = null;
  this.e5 = null;
  this.e6 = null;
  this.e7 = null;
  this.gM = _1;
  this.e8 = _2;
  this.e9 = _3;
  this.ea = _4;
  this.eb = _5;
  this.ec = _6;
  this.ed = _7;
  this.ee = _8;
  this.ef = _9;
  this.dZ = _10;
  this.e0 = _11;
  this.e1 = _12;
  this.e2 = _13;
  this.e3 = _14;
  this.e4 = _15;
  this.e5 = _16;
  this.e6 = _17;
  this.e7 = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 18;
});
$p.m = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, (-937041276), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().c(this.gM, x$0.gM) && $m_sr_BoxesRunTime$().c(this.e8, x$0.e8)) && $m_sr_BoxesRunTime$().c(this.e9, x$0.e9)) && $m_sr_BoxesRunTime$().c(this.ea, x$0.ea)) && $m_sr_BoxesRunTime$().c(this.eb, x$0.eb)) && $m_sr_BoxesRunTime$().c(this.ec, x$0.ec)) && $m_sr_BoxesRunTime$().c(this.ed, x$0.ed)) && $m_sr_BoxesRunTime$().c(this.ee, x$0.ee)) && $m_sr_BoxesRunTime$().c(this.ef, x$0.ef)) && $m_sr_BoxesRunTime$().c(this.dZ, x$0.dZ)) && $m_sr_BoxesRunTime$().c(this.e0, x$0.e0)) && $m_sr_BoxesRunTime$().c(this.e1, x$0.e1)) && $m_sr_BoxesRunTime$().c(this.e2, x$0.e2)) && $m_sr_BoxesRunTime$().c(this.e3, x$0.e3)) && $m_sr_BoxesRunTime$().c(this.e4, x$0.e4)) && $m_sr_BoxesRunTime$().c(this.e5, x$0.e5)) && $m_sr_BoxesRunTime$().c(this.e6, x$0.e6)) && $m_sr_BoxesRunTime$().c(this.e7, x$0.e7))));
});
$p.F = (function() {
  return "Tuple18";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.gM) + ",") + this.e8) + ",") + this.e9) + ",") + this.ea) + ",") + this.eb) + ",") + this.ec) + ",") + this.ed) + ",") + this.ee) + ",") + this.ef) + ",") + this.dZ) + ",") + this.e0) + ",") + this.e1) + ",") + this.e2) + ",") + this.e3) + ",") + this.e4) + ",") + this.e5) + ",") + this.e6) + ",") + this.e7) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  ag: 1,
  b: 1,
  c: 1,
  bK: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.gN = null;
  this.eq = null;
  this.er = null;
  this.es = null;
  this.et = null;
  this.eu = null;
  this.ev = null;
  this.ew = null;
  this.ex = null;
  this.eg = null;
  this.eh = null;
  this.ei = null;
  this.ej = null;
  this.ek = null;
  this.el = null;
  this.em = null;
  this.en = null;
  this.eo = null;
  this.ep = null;
  this.gN = _1;
  this.eq = _2;
  this.er = _3;
  this.es = _4;
  this.et = _5;
  this.eu = _6;
  this.ev = _7;
  this.ew = _8;
  this.ex = _9;
  this.eg = _10;
  this.eh = _11;
  this.ei = _12;
  this.ej = _13;
  this.ek = _14;
  this.el = _15;
  this.em = _16;
  this.en = _17;
  this.eo = _18;
  this.ep = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 19;
});
$p.m = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, (-1955940499), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().c(this.gN, x$0.gN) && $m_sr_BoxesRunTime$().c(this.eq, x$0.eq)) && $m_sr_BoxesRunTime$().c(this.er, x$0.er)) && $m_sr_BoxesRunTime$().c(this.es, x$0.es)) && $m_sr_BoxesRunTime$().c(this.et, x$0.et)) && $m_sr_BoxesRunTime$().c(this.eu, x$0.eu)) && $m_sr_BoxesRunTime$().c(this.ev, x$0.ev)) && $m_sr_BoxesRunTime$().c(this.ew, x$0.ew)) && $m_sr_BoxesRunTime$().c(this.ex, x$0.ex)) && $m_sr_BoxesRunTime$().c(this.eg, x$0.eg)) && $m_sr_BoxesRunTime$().c(this.eh, x$0.eh)) && $m_sr_BoxesRunTime$().c(this.ei, x$0.ei)) && $m_sr_BoxesRunTime$().c(this.ej, x$0.ej)) && $m_sr_BoxesRunTime$().c(this.ek, x$0.ek)) && $m_sr_BoxesRunTime$().c(this.el, x$0.el)) && $m_sr_BoxesRunTime$().c(this.em, x$0.em)) && $m_sr_BoxesRunTime$().c(this.en, x$0.en)) && $m_sr_BoxesRunTime$().c(this.eo, x$0.eo)) && $m_sr_BoxesRunTime$().c(this.ep, x$0.ep))));
});
$p.F = (function() {
  return "Tuple19";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.gN) + ",") + this.eq) + ",") + this.er) + ",") + this.es) + ",") + this.et) + ",") + this.eu) + ",") + this.ev) + ",") + this.ew) + ",") + this.ex) + ",") + this.eg) + ",") + this.eh) + ",") + this.ei) + ",") + this.ej) + ",") + this.ek) + ",") + this.el) + ",") + this.em) + ",") + this.en) + ",") + this.eo) + ",") + this.ep) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  ah: 1,
  b: 1,
  c: 1,
  bL: 1,
  a: 1
}));
function $ct_T2__O__O__($thiz, _1, _2) {
  $thiz.ao = _1;
  $thiz.k9 = _2;
  return $thiz;
}
/** @constructor */
function $c_T2() {
  this.ao = null;
  this.k9 = null;
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
  return this.k9;
});
$p.r = (function() {
  return (((("(" + this.a0()) + ",") + this.a1()) + ")");
});
$p.F = (function() {
  return "Tuple2";
});
$p.H = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, (-116390334), true);
});
$p.v = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().c(this.a0(), x$1.a0()) && $m_sr_BoxesRunTime$().c(this.a1(), x$1.a1()))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.I)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  I: 1,
  a6: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.gO = null;
  this.eI = null;
  this.eK = null;
  this.eL = null;
  this.eM = null;
  this.eN = null;
  this.eO = null;
  this.eP = null;
  this.eQ = null;
  this.ey = null;
  this.ez = null;
  this.eA = null;
  this.eB = null;
  this.eC = null;
  this.eD = null;
  this.eE = null;
  this.eF = null;
  this.eG = null;
  this.eH = null;
  this.eJ = null;
  this.gO = _1;
  this.eI = _2;
  this.eK = _3;
  this.eL = _4;
  this.eM = _5;
  this.eN = _6;
  this.eO = _7;
  this.eP = _8;
  this.eQ = _9;
  this.ey = _10;
  this.ez = _11;
  this.eA = _12;
  this.eB = _13;
  this.eC = _14;
  this.eD = _15;
  this.eE = _16;
  this.eF = _17;
  this.eG = _18;
  this.eH = _19;
  this.eJ = _20;
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 20;
});
$p.m = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, 1328807075, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().c(this.gO, x$0.gO) && $m_sr_BoxesRunTime$().c(this.eI, x$0.eI)) && $m_sr_BoxesRunTime$().c(this.eK, x$0.eK)) && $m_sr_BoxesRunTime$().c(this.eL, x$0.eL)) && $m_sr_BoxesRunTime$().c(this.eM, x$0.eM)) && $m_sr_BoxesRunTime$().c(this.eN, x$0.eN)) && $m_sr_BoxesRunTime$().c(this.eO, x$0.eO)) && $m_sr_BoxesRunTime$().c(this.eP, x$0.eP)) && $m_sr_BoxesRunTime$().c(this.eQ, x$0.eQ)) && $m_sr_BoxesRunTime$().c(this.ey, x$0.ey)) && $m_sr_BoxesRunTime$().c(this.ez, x$0.ez)) && $m_sr_BoxesRunTime$().c(this.eA, x$0.eA)) && $m_sr_BoxesRunTime$().c(this.eB, x$0.eB)) && $m_sr_BoxesRunTime$().c(this.eC, x$0.eC)) && $m_sr_BoxesRunTime$().c(this.eD, x$0.eD)) && $m_sr_BoxesRunTime$().c(this.eE, x$0.eE)) && $m_sr_BoxesRunTime$().c(this.eF, x$0.eF)) && $m_sr_BoxesRunTime$().c(this.eG, x$0.eG)) && $m_sr_BoxesRunTime$().c(this.eH, x$0.eH)) && $m_sr_BoxesRunTime$().c(this.eJ, x$0.eJ))));
});
$p.F = (function() {
  return "Tuple20";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.gO) + ",") + this.eI) + ",") + this.eK) + ",") + this.eL) + ",") + this.eM) + ",") + this.eN) + ",") + this.eO) + ",") + this.eP) + ",") + this.eQ) + ",") + this.ey) + ",") + this.ez) + ",") + this.eA) + ",") + this.eB) + ",") + this.eC) + ",") + this.eD) + ",") + this.eE) + ",") + this.eF) + ",") + this.eG) + ",") + this.eH) + ",") + this.eJ) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  ai: 1,
  b: 1,
  c: 1,
  bN: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.gP = null;
  this.f1 = null;
  this.f4 = null;
  this.f5 = null;
  this.f6 = null;
  this.f7 = null;
  this.f8 = null;
  this.f9 = null;
  this.fa = null;
  this.eR = null;
  this.eS = null;
  this.eT = null;
  this.eU = null;
  this.eV = null;
  this.eW = null;
  this.eX = null;
  this.eY = null;
  this.eZ = null;
  this.f0 = null;
  this.f2 = null;
  this.f3 = null;
  this.gP = _1;
  this.f1 = _2;
  this.f4 = _3;
  this.f5 = _4;
  this.f6 = _5;
  this.f7 = _6;
  this.f8 = _7;
  this.f9 = _8;
  this.fa = _9;
  this.eR = _10;
  this.eS = _11;
  this.eT = _12;
  this.eU = _13;
  this.eV = _14;
  this.eW = _15;
  this.eX = _16;
  this.eY = _17;
  this.eZ = _18;
  this.f0 = _19;
  this.f2 = _20;
  this.f3 = _21;
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 21;
});
$p.m = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, (-21288119), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().c(this.gP, x$0.gP) && $m_sr_BoxesRunTime$().c(this.f1, x$0.f1)) && $m_sr_BoxesRunTime$().c(this.f4, x$0.f4)) && $m_sr_BoxesRunTime$().c(this.f5, x$0.f5)) && $m_sr_BoxesRunTime$().c(this.f6, x$0.f6)) && $m_sr_BoxesRunTime$().c(this.f7, x$0.f7)) && $m_sr_BoxesRunTime$().c(this.f8, x$0.f8)) && $m_sr_BoxesRunTime$().c(this.f9, x$0.f9)) && $m_sr_BoxesRunTime$().c(this.fa, x$0.fa)) && $m_sr_BoxesRunTime$().c(this.eR, x$0.eR)) && $m_sr_BoxesRunTime$().c(this.eS, x$0.eS)) && $m_sr_BoxesRunTime$().c(this.eT, x$0.eT)) && $m_sr_BoxesRunTime$().c(this.eU, x$0.eU)) && $m_sr_BoxesRunTime$().c(this.eV, x$0.eV)) && $m_sr_BoxesRunTime$().c(this.eW, x$0.eW)) && $m_sr_BoxesRunTime$().c(this.eX, x$0.eX)) && $m_sr_BoxesRunTime$().c(this.eY, x$0.eY)) && $m_sr_BoxesRunTime$().c(this.eZ, x$0.eZ)) && $m_sr_BoxesRunTime$().c(this.f0, x$0.f0)) && $m_sr_BoxesRunTime$().c(this.f2, x$0.f2)) && $m_sr_BoxesRunTime$().c(this.f3, x$0.f3))));
});
$p.F = (function() {
  return "Tuple21";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.gP) + ",") + this.f1) + ",") + this.f4) + ",") + this.f5) + ",") + this.f6) + ",") + this.f7) + ",") + this.f8) + ",") + this.f9) + ",") + this.fa) + ",") + this.eR) + ",") + this.eS) + ",") + this.eT) + ",") + this.eU) + ",") + this.eV) + ",") + this.eW) + ",") + this.eX) + ",") + this.eY) + ",") + this.eZ) + ",") + this.f0) + ",") + this.f2) + ",") + this.f3) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  aj: 1,
  b: 1,
  c: 1,
  bO: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.gQ = null;
  this.fl = null;
  this.fp = null;
  this.fq = null;
  this.fr = null;
  this.fs = null;
  this.ft = null;
  this.fu = null;
  this.fv = null;
  this.fb = null;
  this.fc = null;
  this.fd = null;
  this.fe = null;
  this.ff = null;
  this.fg = null;
  this.fh = null;
  this.fi = null;
  this.fj = null;
  this.fk = null;
  this.fm = null;
  this.fn = null;
  this.fo = null;
  this.gQ = _1;
  this.fl = _2;
  this.fp = _3;
  this.fq = _4;
  this.fr = _5;
  this.fs = _6;
  this.ft = _7;
  this.fu = _8;
  this.fv = _9;
  this.fb = _10;
  this.fc = _11;
  this.fd = _12;
  this.fe = _13;
  this.ff = _14;
  this.fg = _15;
  this.fh = _16;
  this.fi = _17;
  this.fj = _18;
  this.fk = _19;
  this.fm = _20;
  this.fn = _21;
  this.fo = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 22;
});
$p.m = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, (-139445068), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().c(this.gQ, x$0.gQ) && $m_sr_BoxesRunTime$().c(this.fl, x$0.fl)) && $m_sr_BoxesRunTime$().c(this.fp, x$0.fp)) && $m_sr_BoxesRunTime$().c(this.fq, x$0.fq)) && $m_sr_BoxesRunTime$().c(this.fr, x$0.fr)) && $m_sr_BoxesRunTime$().c(this.fs, x$0.fs)) && $m_sr_BoxesRunTime$().c(this.ft, x$0.ft)) && $m_sr_BoxesRunTime$().c(this.fu, x$0.fu)) && $m_sr_BoxesRunTime$().c(this.fv, x$0.fv)) && $m_sr_BoxesRunTime$().c(this.fb, x$0.fb)) && $m_sr_BoxesRunTime$().c(this.fc, x$0.fc)) && $m_sr_BoxesRunTime$().c(this.fd, x$0.fd)) && $m_sr_BoxesRunTime$().c(this.fe, x$0.fe)) && $m_sr_BoxesRunTime$().c(this.ff, x$0.ff)) && $m_sr_BoxesRunTime$().c(this.fg, x$0.fg)) && $m_sr_BoxesRunTime$().c(this.fh, x$0.fh)) && $m_sr_BoxesRunTime$().c(this.fi, x$0.fi)) && $m_sr_BoxesRunTime$().c(this.fj, x$0.fj)) && $m_sr_BoxesRunTime$().c(this.fk, x$0.fk)) && $m_sr_BoxesRunTime$().c(this.fm, x$0.fm)) && $m_sr_BoxesRunTime$().c(this.fn, x$0.fn)) && $m_sr_BoxesRunTime$().c(this.fo, x$0.fo))));
});
$p.F = (function() {
  return "Tuple22";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.gQ) + ",") + this.fl) + ",") + this.fp) + ",") + this.fq) + ",") + this.fr) + ",") + this.fs) + ",") + this.ft) + ",") + this.fu) + ",") + this.fv) + ",") + this.fb) + ",") + this.fc) + ",") + this.fd) + ",") + this.fe) + ",") + this.ff) + ",") + this.fg) + ",") + this.fh) + ",") + this.fi) + ",") + this.fj) + ",") + this.fk) + ",") + this.fm) + ",") + this.fn) + ",") + this.fo) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  ak: 1,
  b: 1,
  c: 1,
  bP: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.aD = null;
  this.aX = null;
  this.b5 = null;
  this.aD = _1;
  this.aX = _2;
  this.b5 = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 3;
});
$p.m = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, (-192629203), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().c(this.aD, x$0.aD) && $m_sr_BoxesRunTime$().c(this.aX, x$0.aX)) && $m_sr_BoxesRunTime$().c(this.b5, x$0.b5))));
});
$p.F = (function() {
  return "Tuple3";
});
$p.r = (function() {
  return (((((("(" + this.aD) + ",") + this.aX) + ",") + this.b5) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.al)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  al: 1,
  b: 1,
  c: 1,
  bQ: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.aP = null;
  this.aQ = null;
  this.aY = null;
  this.aZ = null;
  this.aP = _1;
  this.aQ = _2;
  this.aY = _3;
  this.aZ = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 4;
});
$p.m = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, (-1542739752), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().c(this.aP, x$0.aP) && $m_sr_BoxesRunTime$().c(this.aQ, x$0.aQ)) && $m_sr_BoxesRunTime$().c(this.aY, x$0.aY)) && $m_sr_BoxesRunTime$().c(this.aZ, x$0.aZ))));
});
$p.F = (function() {
  return "Tuple4";
});
$p.r = (function() {
  return (((((((("(" + this.aP) + ",") + this.aQ) + ",") + this.aY) + ",") + this.aZ) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  am: 1,
  b: 1,
  c: 1,
  bR: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.gR = null;
  this.fw = null;
  this.fx = null;
  this.fy = null;
  this.fz = null;
  this.gR = _1;
  this.fw = _2;
  this.fx = _3;
  this.fy = _4;
  this.fz = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 5;
});
$p.m = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, 417360321, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().c(this.gR, x$0.gR) && $m_sr_BoxesRunTime$().c(this.fw, x$0.fw)) && $m_sr_BoxesRunTime$().c(this.fx, x$0.fx)) && $m_sr_BoxesRunTime$().c(this.fy, x$0.fy)) && $m_sr_BoxesRunTime$().c(this.fz, x$0.fz))));
});
$p.F = (function() {
  return "Tuple5";
});
$p.r = (function() {
  return (((((((((("(" + this.gR) + ",") + this.fw) + ",") + this.fx) + ",") + this.fy) + ",") + this.fz) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  an: 1,
  b: 1,
  c: 1,
  bS: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.gS = null;
  this.fA = null;
  this.fB = null;
  this.fC = null;
  this.fD = null;
  this.fE = null;
  this.gS = _1;
  this.fA = _2;
  this.fB = _3;
  this.fC = _4;
  this.fD = _5;
  this.fE = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 6;
});
$p.m = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, (-1037607828), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().c(this.gS, x$0.gS) && $m_sr_BoxesRunTime$().c(this.fA, x$0.fA)) && $m_sr_BoxesRunTime$().c(this.fB, x$0.fB)) && $m_sr_BoxesRunTime$().c(this.fC, x$0.fC)) && $m_sr_BoxesRunTime$().c(this.fD, x$0.fD)) && $m_sr_BoxesRunTime$().c(this.fE, x$0.fE))));
});
$p.F = (function() {
  return "Tuple6";
});
$p.r = (function() {
  return (((((((((((("(" + this.gS) + ",") + this.fA) + ",") + this.fB) + ",") + this.fC) + ",") + this.fD) + ",") + this.fE) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ao)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  ao: 1,
  b: 1,
  c: 1,
  bT: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.gT = null;
  this.fF = null;
  this.fG = null;
  this.fH = null;
  this.fI = null;
  this.fJ = null;
  this.fK = null;
  this.gT = _1;
  this.fF = _2;
  this.fG = _3;
  this.fH = _4;
  this.fI = _5;
  this.fJ = _6;
  this.fK = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 7;
});
$p.m = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, (-1050932777), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().c(this.gT, x$0.gT) && $m_sr_BoxesRunTime$().c(this.fF, x$0.fF)) && $m_sr_BoxesRunTime$().c(this.fG, x$0.fG)) && $m_sr_BoxesRunTime$().c(this.fH, x$0.fH)) && $m_sr_BoxesRunTime$().c(this.fI, x$0.fI)) && $m_sr_BoxesRunTime$().c(this.fJ, x$0.fJ)) && $m_sr_BoxesRunTime$().c(this.fK, x$0.fK))));
});
$p.F = (function() {
  return "Tuple7";
});
$p.r = (function() {
  return (((((((((((((("(" + this.gT) + ",") + this.fF) + ",") + this.fG) + ",") + this.fH) + ",") + this.fI) + ",") + this.fJ) + ",") + this.fK) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ap)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  ap: 1,
  b: 1,
  c: 1,
  bU: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.gU = null;
  this.fL = null;
  this.fM = null;
  this.fN = null;
  this.fO = null;
  this.fP = null;
  this.fQ = null;
  this.fR = null;
  this.gU = _1;
  this.fL = _2;
  this.fM = _3;
  this.fN = _4;
  this.fO = _5;
  this.fP = _6;
  this.fQ = _7;
  this.fR = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 8;
});
$p.m = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, 1998822530, true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().c(this.gU, x$0.gU) && $m_sr_BoxesRunTime$().c(this.fL, x$0.fL)) && $m_sr_BoxesRunTime$().c(this.fM, x$0.fM)) && $m_sr_BoxesRunTime$().c(this.fN, x$0.fN)) && $m_sr_BoxesRunTime$().c(this.fO, x$0.fO)) && $m_sr_BoxesRunTime$().c(this.fP, x$0.fP)) && $m_sr_BoxesRunTime$().c(this.fQ, x$0.fQ)) && $m_sr_BoxesRunTime$().c(this.fR, x$0.fR))));
});
$p.F = (function() {
  return "Tuple8";
});
$p.r = (function() {
  return (((((((((((((((("(" + this.gU) + ",") + this.fL) + ",") + this.fM) + ",") + this.fN) + ",") + this.fO) + ",") + this.fP) + ",") + this.fQ) + ",") + this.fR) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aq)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  aq: 1,
  b: 1,
  c: 1,
  bV: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.gV = null;
  this.fS = null;
  this.fT = null;
  this.fU = null;
  this.fV = null;
  this.fW = null;
  this.fX = null;
  this.fY = null;
  this.fZ = null;
  this.gV = _1;
  this.fS = _2;
  this.fT = _3;
  this.fU = _4;
  this.fV = _5;
  this.fW = _6;
  this.fX = _7;
  this.fY = _8;
  this.fZ = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 9;
});
$p.m = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().a4(this, (-1807911176), true);
});
$p.v = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().c(this.gV, x$0.gV) && $m_sr_BoxesRunTime$().c(this.fS, x$0.fS)) && $m_sr_BoxesRunTime$().c(this.fT, x$0.fT)) && $m_sr_BoxesRunTime$().c(this.fU, x$0.fU)) && $m_sr_BoxesRunTime$().c(this.fV, x$0.fV)) && $m_sr_BoxesRunTime$().c(this.fW, x$0.fW)) && $m_sr_BoxesRunTime$().c(this.fX, x$0.fX)) && $m_sr_BoxesRunTime$().c(this.fY, x$0.fY)) && $m_sr_BoxesRunTime$().c(this.fZ, x$0.fZ))));
});
$p.F = (function() {
  return "Tuple9";
});
$p.r = (function() {
  return (((((((((((((((((("(" + this.gV) + ",") + this.fS) + ",") + this.fT) + ",") + this.fU) + ",") + this.fV) + ",") + this.fW) + ",") + this.fX) + ",") + this.fY) + ",") + this.fZ) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ar)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  ar: 1,
  b: 1,
  c: 1,
  bW: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.hu() + "("), ", ", ")");
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
$p.U = (function() {
  return false;
});
$p.ue = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.am = (function() {
  return 0;
});
$p.P = (function() {
  this.ue();
});
$p.k0 = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  c9: 1,
  l: 1,
  d: 1,
  e: 1,
  m: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$6(p$5, isFlipped$2, outer) {
  this.mH = null;
  this.mG = false;
  this.iY = null;
  this.iZ = false;
  this.hE = null;
  this.mH = p$5;
  this.mG = isFlipped$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.hE = outer;
  this.iZ = false;
}
$p = $c_sc_Iterator$$anon$6.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$6;
/** @constructor */
function $h_sc_Iterator$$anon$6() {
}
$h_sc_Iterator$$anon$6.prototype = $p;
$p.U = (function() {
  if (this.iZ) {
    return true;
  } else {
    if ((!this.hE.U())) {
      return false;
    }
    this.iY = this.hE.P();
    while (((!(!this.mH.g(this.iY))) === this.mG)) {
      if ((!this.hE.U())) {
        return false;
      }
      this.iY = this.hE.P();
    }
    this.iZ = true;
    return true;
  }
});
$p.P = (function() {
  if (this.U()) {
    this.iZ = false;
    return this.iY;
  } else {
    return $m_sc_Iterator$().bf.P();
  }
});
var $d_sc_Iterator$$anon$6 = new $TypeData().i($c_sc_Iterator$$anon$6, "scala.collection.Iterator$$anon$6", ({
  ca: 1,
  l: 1,
  d: 1,
  e: 1,
  m: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.aR instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.aR;
      $thiz.aR = c.aR;
      $thiz.bS = c.bS;
      if ((c.b7 !== null)) {
        if (($thiz.b6 === null)) {
          $thiz.b6 = c.b6;
        }
        var x$proxy10 = c.b6;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().jW();
        }
        x$proxy10.hF = $thiz.b7;
        $thiz.b7 = c.b7;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.b7 === null)) {
      $thiz.aR = null;
      $thiz.b6 = null;
      return false;
    } else {
      $thiz.aR = $thiz.b7.th();
      if (($thiz.b6 === $thiz.b7)) {
        var x$proxy12 = $thiz.b6;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().jW();
        }
        $thiz.b6 = x$proxy12.hF;
      }
      $thiz.b7 = $thiz.b7.hF;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.bS) {
        return true;
      } else {
        if ((!(($thiz.aR !== null) && $thiz.aR.U()))) {
          continue;
        }
        $thiz.bS = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.aR = null;
  this.b7 = null;
  this.b6 = null;
  this.bS = false;
  this.aR = from;
  this.b7 = null;
  this.b6 = null;
  this.bS = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.U = (function() {
  if (this.bS) {
    return true;
  } else if ((this.aR !== null)) {
    if (this.aR.U()) {
      this.bS = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.P = (function() {
  if (this.U()) {
    this.bS = false;
    var x$proxy13 = this.aR;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().jW();
    }
    return x$proxy13.P();
  } else {
    return $m_sc_Iterator$().bf.P();
  }
});
$p.sz = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.b7 === null)) {
    this.b7 = c;
    this.b6 = c;
  } else {
    var x$proxy14 = this.b6;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().jW();
    }
    x$proxy14.hF = c;
    this.b6 = c;
  }
  if ((this.aR === null)) {
    this.aR = $m_sc_Iterator$().bf;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.au)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  au: 1,
  l: 1,
  d: 1,
  e: 1,
  m: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.bG > 0)) {
    if ($thiz.bT.U()) {
      $thiz.bT.P();
      $thiz.bG = (($thiz.bG - 1) | 0);
    } else {
      $thiz.bG = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.b0 < 0)) {
    return (-1);
  } else {
    var that = (($thiz.b0 - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.bT = null;
  this.b0 = 0;
  this.bG = 0;
  this.bT = underlying;
  this.b0 = limit;
  this.bG = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.am = (function() {
  var size = this.bT.am();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.bG) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.b0 < 0)) {
      return dropSize;
    } else {
      var x = this.b0;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.U = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.b0 !== 0) && this.bT.U());
});
$p.P = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.b0 > 0)) {
    this.b0 = ((this.b0 - 1) | 0);
    return this.bT.P();
  } else {
    return ((this.b0 < 0) ? this.bT.P() : $m_sc_Iterator$().bf.P());
  }
});
$p.k0 = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.b0 < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.bG + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().bf;
  } else if ((sum < 0)) {
    this.bG = 2147483647;
    this.b0 = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.bT, ((sum - 2147483647) | 0), rest))));
  } else {
    this.bG = sum;
    this.b0 = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  cc: 1,
  l: 1,
  d: 1,
  e: 1,
  m: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.sP(n);
  if (skipped.al()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.m2();
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
      if ((((!a$tailLocal1.al()) && (!b$tailLocal1.al())) && $m_sr_BoxesRunTime$().c(a$tailLocal1.m2(), b$tailLocal1.m2()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.mf();
        var b$tailLocal1$tmp1 = b$tailLocal1.mf();
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
  at: 1,
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
  this.mV = null;
  this.hH = 0;
  this.mU = 0;
  this.mV = x$1;
  this.hH = 0;
  this.mU = x$1.z();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.U = (function() {
  return (this.hH < this.mU);
});
$p.P = (function() {
  var result = this.mV.m(this.hH);
  this.hH = ((1 + this.hH) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  d4: 1,
  l: 1,
  d: 1,
  e: 1,
  m: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a1)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  a1: 1,
  s: 1,
  a: 1,
  h: 1,
  g: 1,
  z: 1
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
  s: 1,
  a: 1,
  h: 1,
  g: 1,
  z: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  a3: 1,
  s: 1,
  a: 1,
  h: 1,
  g: 1,
  z: 1
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
  return $m_RTLong$().ry($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  a4: 1,
  s: 1,
  a: 1,
  h: 1,
  g: 1,
  z: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  bd: 1,
  a2: 1,
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
  var str = $m_jl_Character$().vo(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  bg: 1,
  a: 1,
  h: 1,
  H: 1,
  g: 1,
  z: 1
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
$p.bD = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.lI = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.hu = (function() {
  return this.ci();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.iX = null;
  this.bF = 0;
  this.hD = 0;
  this.iX = xs;
  this.bF = 0;
  this.hD = $m_jl_reflect_Array$().ix(this.iX);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.am = (function() {
  return ((this.hD - this.bF) | 0);
});
$p.U = (function() {
  return (this.bF < this.hD);
});
$p.P = (function() {
  if ((this.bF >= $m_jl_reflect_Array$().ix(this.iX))) {
    $m_sc_Iterator$().bf.P();
  }
  var r = $m_sr_ScalaRunTime$().ht(this.iX, this.bF);
  this.bF = ((1 + this.bF) | 0);
  return r;
});
$p.iv = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.bF + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.hD;
    } else {
      var a = this.hD;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.bF = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  c0: 1,
  l: 1,
  d: 1,
  e: 1,
  m: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.be) ? $thiz.be : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.mD = null;
  this.bR = 0;
  this.be = 0;
  this.mD = self;
  this.bR = 0;
  this.be = self.R();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.am = (function() {
  return this.be;
});
$p.U = (function() {
  return (this.be > 0);
});
$p.P = (function() {
  if ((this.be > 0)) {
    var r = this.mD.as(this.bR);
    this.bR = ((1 + this.bR) | 0);
    this.be = ((this.be - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().bf.P();
  }
});
$p.iv = (function(n) {
  if ((n > 0)) {
    this.bR = ((this.bR + n) | 0);
    var b = ((this.be - n) | 0);
    this.be = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.k0 = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.be = ((b < 0) ? 0 : b);
  this.bR = ((this.bR + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  c6: 1,
  l: 1,
  d: 1,
  e: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_sci_RangeIterator(start, step, lastElement, initiallyEmpty) {
  this.gW = 0;
  this.g3 = 0;
  this.g1 = false;
  this.g2 = 0;
  this.gW = step;
  this.g3 = lastElement;
  this.g1 = (!initiallyEmpty);
  this.g2 = start;
}
$p = $c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
}
$h_sci_RangeIterator.prototype = $p;
$p.am = (function() {
  return (this.g1 ? ((1 + ((((this.g3 - this.g2) | 0) / $checkIntDivisor(this.gW)) | 0)) | 0) : 0);
});
$p.U = (function() {
  return this.g1;
});
$p.uf = (function() {
  if ((!this.g1)) {
    $m_sc_Iterator$().bf.P();
  }
  var value = this.g2;
  this.g1 = (value !== this.g3);
  this.g2 = ((value + this.gW) | 0);
  return value;
});
$p.iv = (function(n) {
  if ((n > 0)) {
    var value = this.g2;
    var hi = (value >> 31);
    var value$1 = Math.imul(this.gW, n);
    var hi$1 = (value$1 >> 31);
    var lo = ((value + value$1) | 0);
    var hi$2 = ((((hi + hi$1) | 0) + (((lo >>> 0) < (value >>> 0)) | 0)) | 0);
    if ((this.gW > 0)) {
      var x = this.g3;
      var hi$3 = (x >> 31);
      if (((hi$3 === hi$2) ? ((x >>> 0) < (lo >>> 0)) : (hi$3 < hi$2))) {
        var $x_1_$_lo = x;
        var $x_1_$_hi = hi$3;
      } else {
        var $x_1_$_lo = lo;
        var $x_1_$_hi = hi$2;
      }
      this.g2 = $x_1_$_lo;
      var value$2 = this.g3;
      var hi$4 = (value$2 >> 31);
      this.g1 = ((hi$2 === hi$4) ? ((lo >>> 0) <= (value$2 >>> 0)) : (hi$2 < hi$4));
    } else if ((this.gW < 0)) {
      var x$2 = this.g3;
      var hi$5 = (x$2 >> 31);
      if (((hi$5 === hi$2) ? ((x$2 >>> 0) > (lo >>> 0)) : (hi$5 > hi$2))) {
        var $x_2_$_lo = x$2;
        var $x_2_$_hi = hi$5;
      } else {
        var $x_2_$_lo = lo;
        var $x_2_$_hi = hi$2;
      }
      this.g2 = $x_2_$_lo;
      var value$3 = this.g3;
      var hi$6 = (value$3 >> 31);
      this.g1 = ((hi$2 === hi$6) ? ((lo >>> 0) >= (value$3 >>> 0)) : (hi$2 > hi$6));
    }
  }
  return this;
});
$p.P = (function() {
  return this.uf();
});
var $d_sci_RangeIterator = new $TypeData().i($c_sci_RangeIterator, "scala.collection.immutable.RangeIterator", ({
  cv: 1,
  l: 1,
  d: 1,
  e: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$() {
  this.mN = null;
  $n_scm_ArraySeq$ = this;
  this.mN = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  cx: 1,
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
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 924202651;
});
$p.z = (function() {
  return 0;
});
$p.F = (function() {
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
  cD: 1
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
  this.k9 = null;
  this.mB = 0.0;
  this.mC = 0.0;
  this.mB = _1$mcD$sp;
  this.mC = _2$mcD$sp;
  $ct_T2__O__O__(this, null, null);
}
$p = $c_T2$mcDD$sp.prototype = new $h_T2();
$p.constructor = $c_T2$mcDD$sp;
/** @constructor */
function $h_T2$mcDD$sp() {
}
$h_T2$mcDD$sp.prototype = $p;
$p.a1 = (function() {
  return this.mC;
});
$p.a0 = (function() {
  return this.mB;
});
var $d_T2$mcDD$sp = new $TypeData().i($c_T2$mcDD$sp, "scala.Tuple2$mcDD$sp", ({
  bY: 1,
  I: 1,
  a6: 1,
  c: 1,
  b: 1,
  a: 1,
  bM: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.ci() + "(<not computed>)");
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
    this.W = null;
    this.W = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  jQ() {
    return $dp_toString__T(this.W);
  }
  F() {
    return "JavaScriptException";
  }
  z() {
    return 1;
  }
  m(x$1) {
    return ((x$1 === 0) ? this.W : $m_sr_Statics$().tq(x$1));
  }
  H() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  x() {
    return $m_s_util_hashing_MurmurHash3$().a4(this, 1744042595, true);
  }
  v(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().c(this.W, x$1.W)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aI)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  aI: 1,
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
    if (((n$tailLocal1 <= 0) || s$tailLocal1.al())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.mf();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.kb = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.r = (function() {
  return this.kb;
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
$p.ci = (function() {
  return "View";
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.kb = null;
  this.kb = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  cJ: 1,
  cK: 1,
  cI: 1,
  a: 1,
  cL: 1,
  cF: 1,
  b: 1,
  cG: 1,
  cH: 1
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
      if (o.lS($thiz)) {
        return $thiz.jZ(o);
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
  this.ka = null;
  this.mL = null;
  this.mK = false;
  this.ka = underlying;
  this.mL = p;
  this.mK = isFlipped;
}
$p = $c_sc_View$Filter.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Filter;
/** @constructor */
function $h_sc_View$Filter() {
}
$h_sc_View$Filter.prototype = $p;
$p.af = (function() {
  var this$1 = this.ka.af();
  return new $c_sc_Iterator$$anon$6(this.mL, this.mK, this$1);
});
$p.am = (function() {
  return ((this.ka.am() === 0) ? 0 : (-1));
});
$p.al = (function() {
  return (!this.af().U());
});
var $d_sc_View$Filter = new $TypeData().i($c_sc_View$Filter, "scala.collection.View$Filter", ({
  cl: 1,
  as: 1,
  t: 1,
  d: 1,
  e: 1,
  p: 1,
  o: 1,
  n: 1,
  a: 1,
  av: 1
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
$p.jZ = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.lS = (function(that) {
  return true;
});
$p.v = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().mb(this);
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.u)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.u)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.J)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.J)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.hG = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.hG = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.as = (function(idx) {
  return this.hG.as(idx);
});
$p.R = (function() {
  return this.hG.R();
});
$p.al = (function() {
  return this.hG.al();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.hG = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.gx = (function(len) {
  var x = this.R();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.am = (function() {
  return this.R();
});
$p.af = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.ci = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  c5: 1,
  cg: 1,
  bZ: 1,
  as: 1,
  t: 1,
  d: 1,
  e: 1,
  p: 1,
  o: 1,
  n: 1,
  a: 1,
  av: 1,
  v: 1,
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
        var a = $thiz.lM();
        var b = o.lM();
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
          equal = $m_sr_BoxesRunTime$().c($thiz.as(index), o.as(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.af().iv(index);
          var thatIt = o.af().iv(index);
          while ((equal && thisIt.U())) {
            equal = $m_sr_BoxesRunTime$().c(thisIt.P(), thatIt.P());
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.F)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.F)));
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
  this.kc = null;
  this.kc = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.lS = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.jZ = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.lM = (function() {
  return $m_sci_IndexedSeqDefaults$().mM;
});
$p.af = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.gx = (function(len) {
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
  return $m_s_util_hashing_MurmurHash3$().mb(this);
});
$p.r = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.al = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.bD = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.lI = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.R = (function() {
  return (this.kc.length | 0);
});
$p.as = (function(idx) {
  return this.kc[idx];
});
$p.hu = (function() {
  return "WrappedVarArgs";
});
$p.g = (function(v1) {
  return this.as((v1 | 0));
});
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  dg: 1,
  F: 1,
  d: 1,
  e: 1,
  p: 1,
  o: 1,
  n: 1,
  K: 1,
  k: 1,
  w: 1,
  v: 1,
  b: 1,
  q: 1,
  M: 1,
  L: 1,
  x: 1,
  u: 1,
  ax: 1,
  N: 1,
  B: 1,
  C: 1,
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
  return ($thiz.gv() ? ($thiz.bU !== $thiz.g0) : ((($thiz.bU + $thiz.az) | 0) !== $thiz.g0));
}
function $ct_sci_Range__I__I__I__($thiz, start, end, step) {
  $thiz.au = start;
  $thiz.g0 = end;
  $thiz.az = step;
  $thiz.aE = ($thiz.gv() ? ((step >= 0) ? (start > end) : (start < end)) : ((step >= 0) ? (start >= end) : (start <= end)));
  if ((step === 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "step cannot be 0.");
  }
  var stepSign = (step >> 31);
  var gap = (((((end - start) | 0) ^ stepSign) - stepSign) | 0);
  var absStep = (((step ^ stepSign) - stepSign) | 0);
  var div = (((gap >>> 0) / ($checkIntDivisor(absStep) >>> 0)) | 0);
  $thiz.bV = (($thiz.gv() || (Math.imul(absStep, div) !== gap)) ? ((1 + div) | 0) : div);
  if ((((-3) & ((1 + step) | 0)) === 0)) {
    var $x_1 = ($thiz.gv() ? end : ((end - step) | 0));
  } else {
    var n = (($thiz.bV - 1) | 0);
    var $x_1 = (($thiz.au + Math.imul($thiz.az, n)) | 0);
  }
  $thiz.bU = $x_1;
  return $thiz;
}
/** @constructor */
function $c_sci_Range() {
  this.au = 0;
  this.g0 = 0;
  this.az = 0;
  this.aE = false;
  this.bV = 0;
  this.bU = 0;
}
$p = $c_sci_Range.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Range;
/** @constructor */
function $h_sci_Range() {
}
$h_sci_Range.prototype = $p;
$p.lS = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.ci = (function() {
  return "IndexedSeq";
});
$p.gx = (function(len) {
  var x = this.R();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.am = (function() {
  return this.R();
});
$p.af = (function() {
  return new $c_sci_RangeIterator(this.au, this.az, this.bU, this.aE);
});
$p.al = (function() {
  return this.aE;
});
$p.R = (function() {
  if (this.aE) {
    return 0;
  } else {
    if ((this.bV <= 0)) {
      $m_sci_Range$().rr(this.au, this.g0, this.az, this.gv());
    }
    return this.bV;
  }
});
$p.qW = (function() {
  if (this.aE) {
    var $x_1 = $m_sci_Range$().uR("last");
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.W : $x_1);
  } else {
    return this.bU;
  }
});
$p.uS = (function() {
  if (((this.bV <= 0) && (!this.aE))) {
    $m_sci_Range$().rr(this.au, this.g0, this.az, this.gv());
  }
});
$p.bD = (function(f) {
  if ((!this.aE)) {
    var i = this.au;
    while (true) {
      f.g(i);
      if ((i === this.bU)) {
        return (void 0);
      }
      i = ((i + this.az) | 0);
    }
  }
});
$p.jZ = (function(that) {
  if ((that instanceof $c_sci_Range)) {
    var x1$2 = this.R();
    switch (x1$2) {
      case 0: {
        return that.aE;
        break;
      }
      case 1: {
        return ((that.R() === 1) && (this.au === that.au));
        break;
      }
      default: {
        return ((that.R() === x1$2) && ((this.au === that.au) && (this.az === that.az)));
      }
    }
  } else {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, that);
  }
});
$p.lM = (function() {
  return 2147483647;
});
$p.v = (function(other) {
  if ((other instanceof $c_sci_Range)) {
    if (this.aE) {
      return other.aE;
    } else if (((!other.aE) && (this.au === other.au))) {
      var l0 = this.qW();
      return ((l0 === other.qW()) && ((this.au === l0) || (this.az === other.az)));
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
    return this$1.rm(this.au, this.az, this.bU, this$1.h0);
  } else {
    return $m_s_util_hashing_MurmurHash3$().mb(this);
  }
});
$p.r = (function() {
  var preposition = (this.gv() ? "to" : "until");
  var stepped = ((this.az === 1) ? "" : (" by " + this.az));
  return ((((((((this.aE ? "empty " : ($p_sci_Range__isInexact$1__Z(this) ? "inexact " : "")) + "Range ") + this.au) + " ") + preposition) + " ") + this.g0) + stepped);
});
$p.hu = (function() {
  return "Range";
});
$p.qz = (function(idx) {
  if ((((idx < 0) || (idx >= this.bV)) || this.aE)) {
    this.uS();
    var max = (this.aE ? (-1) : ((this.bV - 1) | 0));
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((idx + " is out of bounds (min 0, max ") + max) + ")"));
  } else {
    return ((this.au + Math.imul(this.az, idx)) | 0);
  }
});
$p.g = (function(v1) {
  return this.qz((v1 | 0));
});
$p.as = (function(i) {
  return this.qz(i);
});
function $isArrayOf_sci_Range(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.az)));
}
/** @constructor */
function $c_sci_Range$Exclusive(start, end, step) {
  this.au = 0;
  this.g0 = 0;
  this.az = 0;
  this.aE = false;
  this.bV = 0;
  this.bU = 0;
  $ct_sci_Range__I__I__I__(this, start, end, step);
}
$p = $c_sci_Range$Exclusive.prototype = new $h_sci_Range();
$p.constructor = $c_sci_Range$Exclusive;
/** @constructor */
function $h_sci_Range$Exclusive() {
}
$h_sci_Range$Exclusive.prototype = $p;
$p.gv = (function() {
  return false;
});
var $d_sci_Range$Exclusive = new $TypeData().i($c_sci_Range$Exclusive, "scala.collection.immutable.Range$Exclusive", ({
  cu: 1,
  az: 1,
  aw: 1,
  A: 1,
  t: 1,
  d: 1,
  e: 1,
  p: 1,
  o: 1,
  n: 1,
  k: 1,
  w: 1,
  v: 1,
  b: 1,
  q: 1,
  K: 1,
  M: 1,
  L: 1,
  F: 1,
  x: 1,
  u: 1,
  ax: 1,
  N: 1,
  B: 1,
  C: 1,
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
$p.gx = (function(len) {
  var x = this.bg.b.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.am = (function() {
  return this.bg.b.length;
});
$p.ci = (function() {
  return "IndexedSeq";
});
$p.hu = (function() {
  return "ArraySeq";
});
$p.v = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.bg.b.length !== other.bg.b.length)) {
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
        xs$tailLocal1.iU();
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
        a$tailLocal1.jR();
      }
      if (false) {
        a$tailLocal1.iU();
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
$p.as = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.jZ = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.ci = (function() {
  return "LinearSeq";
});
$p.al = (function() {
  return (this === $m_sci_Nil$());
});
$p.bD = (function(f) {
  var these = this;
  while ((!these.al())) {
    f.g(these.jR());
    these.iU();
  }
});
$p.R = (function() {
  var these = this;
  var len = 0;
  while ((!these.al())) {
    len = ((1 + len) | 0);
    these.iU();
  }
  return len;
});
$p.gx = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.hu = (function() {
  return "List";
});
$p.v = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.sP = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.g = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ay)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.bg = null;
  this.bg = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.R = (function() {
  return this.bg.b.length;
});
$p.as = (function(index) {
  return this.bg.b[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.se(this.bg, this$1.h0);
});
$p.v = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().sR(this.bg, that.bg) : $c_scm_ArraySeq.prototype.v.call(this, that));
});
$p.af = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bg);
});
$p.g = (function(v1) {
  return this.as((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aB)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  aB: 1,
  aA: 1,
  O: 1,
  A: 1,
  t: 1,
  d: 1,
  e: 1,
  p: 1,
  o: 1,
  n: 1,
  k: 1,
  w: 1,
  v: 1,
  b: 1,
  q: 1,
  S: 1,
  y: 1,
  P: 1,
  U: 1,
  T: 1,
  x: 1,
  u: 1,
  R: 1,
  Q: 1,
  B: 1,
  C: 1,
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
$p.H = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 0;
});
$p.F = (function() {
  return "Nil";
});
$p.m = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.jR = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.iU = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.am = (function() {
  return 0;
});
$p.af = (function() {
  return $m_sc_Iterator$().bf;
});
$p.m2 = (function() {
  this.jR();
});
$p.mf = (function() {
  this.iU();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  cs: 1,
  ay: 1,
  aw: 1,
  A: 1,
  t: 1,
  d: 1,
  e: 1,
  p: 1,
  o: 1,
  n: 1,
  k: 1,
  w: 1,
  v: 1,
  b: 1,
  q: 1,
  K: 1,
  M: 1,
  L: 1,
  cd: 1,
  J: 1,
  cq: 1,
  cp: 1,
  B: 1,
  C: 1,
  ci: 1,
  N: 1,
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
  $thiz.bu = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.bu = null;
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
$p.gx = (function(len) {
  var x = this.bu.R();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.ci = (function() {
  return "IndexedSeq";
});
$p.R = (function() {
  return this.bu.R();
});
$p.am = (function() {
  return this.bu.R();
});
$p.r = (function() {
  return this.bu.ay;
});
$p.al = (function() {
  return (this.bu.R() === 0);
});
$p.as = (function(i) {
  return $bC(this.bu.qB(i));
});
$p.g = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.bu.qB(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cC: 1,
  O: 1,
  A: 1,
  t: 1,
  d: 1,
  e: 1,
  p: 1,
  o: 1,
  n: 1,
  k: 1,
  w: 1,
  v: 1,
  b: 1,
  q: 1,
  S: 1,
  y: 1,
  P: 1,
  U: 1,
  T: 1,
  aD: 1,
  aE: 1,
  aC: 1,
  cA: 1,
  x: 1,
  u: 1,
  R: 1,
  Q: 1,
  H: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.gZ = null;
  this.gZ = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.ci = (function() {
  return "IndexedSeq";
});
$p.af = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.gx = (function(len) {
  var x = (this.gZ.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.as = (function(index) {
  return this.gZ[index];
});
$p.R = (function() {
  return (this.gZ.length | 0);
});
$p.am = (function() {
  return (this.gZ.length | 0);
});
$p.hu = (function() {
  return "WrappedArray";
});
$p.g = (function(v1) {
  var index = (v1 | 0);
  return this.gZ[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  dd: 1,
  cw: 1,
  O: 1,
  A: 1,
  t: 1,
  d: 1,
  e: 1,
  p: 1,
  o: 1,
  n: 1,
  k: 1,
  w: 1,
  v: 1,
  b: 1,
  q: 1,
  S: 1,
  y: 1,
  P: 1,
  U: 1,
  T: 1,
  aD: 1,
  aE: 1,
  cB: 1,
  cy: 1,
  C: 1,
  B: 1,
  Q: 1,
  x: 1,
  u: 1,
  R: 1,
  cz: 1,
  aC: 1,
  a: 1
}));
let $e_sketch = (function(arg) {
  $m_Lsketches_rooms_columns_Columns$package$().uQ(arg);
});
export { $e_sketch as sketch };
