//Hash Table

//Create new Hash Table
let hash_table = {"key1": 1, "key2": 2, "key3": "three"}; //object

//Other way to create Hash Table
let new_hash_table = {};
new_hash_table["key1"] = "one";
new_hash_table["key2"] = "two";
new_hash_table["key3"] = 3;

//replace an item from hash table
hash_table["key2"] = "two";

//iterate key and value in object or hash table in javascript
let keys = Object.keys(hash_table); //will list down all the keys in hash table
keys.forEach((key, index) => {
    console.log("key: ", key, " index: ", index, "value: ", hash_table[key]);
});

