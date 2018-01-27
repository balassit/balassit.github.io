---
layout: markdown
title: "Types and Variables"
custom_css: css/github-markdown.min.css
---

 - value types: directly contain their data (primitives)
 - reference types: store reference to their data (objects)

## Value Types

 - simple types
 - enum types
 - struct types
 - nullable value types

### Simple Types


 - unicode characters: `char`

Signed and unsigned ints support 8-bit, 16-bit, 32-bit, and 64-bit signed or unsigned values
 - signed int:
   + `sbyte`: 8 bits, range from -128 - 127
   + `short`: 16 bits, range from -32,768 - 32,767
   + `int`: 32 bits, range from -2,147,483,648 - 2,147,483,647
   + `long`: 64 bits, range from –9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
 - unsigned int:
   + `byte`: 8 bits, range from 0 - 255
   + `ushort`: 16 bits, range from 0 - 65,535
   + `uint`: 32 bits, range from 0 - 4,294,967,295
   + `ulong`: 64 bits, range from 0 - 18,446,744,073,709,551,615

`float` and `double` use 32-bit single-precision and 64-bit double-precision
 - floating point:
   + `float`:  32 bits
   + `double`: 64 bits

`decimal` type is 128-bit suitable for monetary calculations
 - decimal: `decimal`

`bool` is used to represent values of `true` or `false`
 - boolean: `bool`


### Enum Types

 - User-defined types of the form `enum E {...}`
 - underlying type, which must be one of the eight integral types

### Struct Types

 - User-defined types of the form struct `S {...}`
 - structs are value types and do not typically require heap allocation
 - Struct types do not support user-specified inheritance
 - all struct types implicitly inherit from type `object`

### Nullable Value Types

 - Extensions of all other value types with a `null` value
 - non-nullable value type T there is a corresponding nullable value type `T?`
 - For instance, `int?` is a type that can hold any 32-bit integer or the value `null`

## Reference Types

 - Class Types
 - Inteface Types
 - Array Types
 - Delegate Types

### Class Types

 - Ultimate base class of all other types: `object`
 - Unicode strings: string
 - User-defined types of the form `class C {...}`
 - Class types support single inheritance and polymorphism
   + mechanisms whereby derived classes can extend and specialize base classes

### Inteface Types

 - User-defined types of the form `interface I {...}`
 - may inherit from multiple base interfaces
 - class or struct may implement multiple interfaces.

### Array Types

 - Single and multi-dimensional, for example, `int[]` and `int[,]`

### Delegate Types

 - User-defined types of the form `delegate int D(...)`
 - references to methods with a particular parameter list and return type
 - make it possible to treat methods as entities that can be assigned to variables and passed as parameters
 - similar to functional pointers, but are object-oriented and type-safe