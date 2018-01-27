---
layout: markdown
title: "Inheritance and Method Overriding"
custom_css: css/github-markdown.min.css
---

## Key Take Aways

 - Object oriented / component-oriented language
 - Attributes that provide declarative info about the component; incorporate their own documentation
 - The virtual keyword is used to modify a method, property, indexer, or event declared in the base class and allow it to be overridden in the derived class.
 - The override keyword is used to extend or modify a virtual/abstract method, property, indexer, or event of base class into derived class.
 - The new keyword is used to hide a method, property, indexer, or event of base class into derived class.

## C# Inheritance
```
class A
{
public void Test() { Console.WriteLine("A::Test()"); }
}

class B : A { }

class C : A
{
public void Test() { Console.WriteLine("C::Test()"); }
}
```
B and C inherit method from A. If B or C implement the method in their class, it will override the implemented class A, as seen in class C.

### Method Hiding

For hiding the base class method from derived class simply declare the derived class method with `new` keyword. Hence above code can be re-written as :

```
class A
{
public void Test() { Console.WriteLine("A::Test()"); }
}

class B : A
{
public new void Test() { Console.WriteLine("B::Test()"); }
}

class C : B {
public new void Test() { Console.WriteLine("C::Test()"); }
}

A a = new A();
B b = new B();
C c = new C();

a.Test(); // output --> "A::Test()"
b.Test(); // output --> "B::Test()"
c.Test(); // output --> "C::Test()"

a = new B();
a.Test(); // output --> "A::Test()"

b = new C();
b.Test(); // output --> "B::Test()"
```

### Method Overriding

In C#, for overriding the base class method in derived class, you have to declare base class method as `virtual` and derived class method as `override` as shown below:

You can also mix the method hiding and method overriding by using virtual and new keyword since the method of a derived class can be virtual and new at the same time.
This is required when you want to further override the derived class method into next level.
```
class A
{
public virtual void Test() { Console.WriteLine("A::Test()"); }
}

class B : A
{
public override void Test() { Console.WriteLine("B::Test()"); }
}

class C : B
{
public override void Test() { Console.WriteLine("C::Test()"); }
}

A a = new A();
B b = new B();
C c = new C();
a.Test(); // output --> "A::Test()"
b.Test(); // output --> "B::Test()"
c.Test(); // output --> "C::Test()"

a = new B();
a.Test(); // output --> "B::Test()"

b = new C();
b.Test(); // output --> "C::Test()"
```
