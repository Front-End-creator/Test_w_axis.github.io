using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace pattern_test
{
    interface Product
    {
        public void someMethod();
    }

    class Product1: Product
    {
        public void someMethod()
        {
            Console.WriteLine("I'm Product1");
        }
    }

    class Product2: Product
    {
        public void someMethod()
        {
            Console.WriteLine("I'm Product2");
        }
    }

    abstract class Creator
    {
        public abstract Product factoryMethod();

        public void SomeComplexMethod()
        {
            //Some complex code
            Console.WriteLine("Some complex work done");
        }
    }

    class ConcreteCreator1: Creator
    {
        public override Product factoryMethod()
        {
            return new Product1();
        }
    }
    class ConcreteCreator2 : Creator
    {
        public override Product factoryMethod()
        {
            return new Product2();
        }
    }

    static class FactoryMethod
    {
        public static void Show()
        {
            Creator creator;
            Product product;

            Console.WriteLine("Concrete creator 1:");
            creator = new ConcreteCreator1();
            creator.SomeComplexMethod();
            product = creator.factoryMethod();
            product.someMethod();
            
            Console.WriteLine("Concrete creator 2:");
            creator = new ConcreteCreator2();
            creator.SomeComplexMethod();
            product = creator.factoryMethod();
            product.someMethod();
        }
    }
}
