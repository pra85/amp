Returns a copy of the object where the keys have become the values and the values the keys. Your object's values should be unique and string serializable (a.k.a. `JSON.stringify`-able). If the values are not unique, inverting it would squash some keys, since keys in an object have to be unique.