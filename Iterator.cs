using System;
using System.Collections.Generic;
using System.Text;

namespace pattern_test
{
    interface Iterator
    {
        public object getValue();
        public Iterator next();
        public Iterator prev();
    }

    interface Collection
    {
        public Iterator createIterator();
    }

    class Vector: Collection
    {
        class Vector_Iterator : Iterator
        {
            private Vector v;
            private uint ind;

            public Vector_Iterator(uint _ind, Vector _v)
            {
                ind = _ind;
                v = _v;
            }
            public object getValue()
            {
                return v._vector[ind];
            }
            public Iterator next()
            {
                ++ind;
                return this;
            }
            public Iterator prev()
            {
                --ind;
                return this;
            }
        }

        private object[] _vector;
        public Iterator createIterator()
        {
            return new Vector_Iterator(0, this);
        }
    }
}
