---
layout: markdown
title: "Program Structure"
custom_css: css/github-markdown.min.css
---

The key organizational concepts in C# are programs, namespaces, types, members, and assemblies.

 - Programs consist of one or more source files
 - Programs declare types, which contain members and can be organized into namespaces
 - Classes and interfaces are examples of types
 - Fields, methods, properties, and events are examples of members
 - Compiled programs are assemblies

## NameSpace

 - `using` directive references the `System` namespace.
   + Similar to `import` statements in Java
 - Namespaces provide a hierarchical means of organizing C# programs and libraries.
   + Namespaces are similar to packages in Java

## Main Method

 - The main method is declared with the static modifier.
 - Static methods operate without reference to a particular object, and by default a static `Main` method serves as the entry point of a program.
 - Instance methods can reference a particular enclosing object instance using the keyword `this`


ex.

```
using System;
namespace Acme.Collections
{
    public class Stack
    {
        Entry top;
        public void Push(object data)
        {
            top = new Entry(top, data);
        }

        public object Pop()
        {
            if (top == null)
            {
                throw new InvalidOperationException();
            }
            object result = top.data;
            top = top.next;
            return result;
        }

        class Entry
        {
            public Entry next;
            public object data;
            public Entry(Entry next, object data)
            {
                this.next = next;
                this.data = data;
            }
        }
    }
}


using System;
using Acme.Collections;
class Hello
{
    static void Main()
    {
        Stack s = new Stack();
        s.Push(1);
        Console.WriteLine("Hello, World");
        Console.WriteLine(s.pop());
    }
}
```