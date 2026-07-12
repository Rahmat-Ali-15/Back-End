// # Method 1
const params1 = new URLSearchParams("category=mobile&brand=apple&page=2");
console.log(params1)


// # Method 2
const url = new URL("https://example.com/products?category=mobile&brand=apple&page=2")
const params2 = url.searchParams
console.log(params2)

// # get()
console.log(params1.get("category"))
console.log(params1.get("page"))

// # has()
console.log(params1.has("brand"))
console.log(params1.has("price"))

// # set()
params1.set("page", "5")
params1.set("price", "5k")
console.log(params1.toString())

// # append()
params1.append("price2", "500")
console.log(params1.toString())

// # delete
params1.delete("price2")
console.log(params1.toString())

// # getAll()
console.log(params1.getAll("price"))

// # keys()
for (const key of params1.keys()){
    console.log(key)
}

// # values()
for (const value of params1.values()){
    console.log(value)
}