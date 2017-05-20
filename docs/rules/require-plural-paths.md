# Require plural nouns in API paths (`require-plural-paths`)

> :red_circle: The `require-plural-paths` rule enforces consistent usage of plural nouns for all resources.


## Rule Details

RESTful design is object-oriented. The acronym itself reflects that HTTP resources and methods represent objects and how we operate on them. For example, we might represent a customer and her purchase orders:

```json

// let customer =
{
  "id":"d5e124d9",
  "orders":[
    {
      "id":"1330334826",
      "items":[
        {
          "name":"Women's Lace Trim Half Sleeve Floral Print Top Skirt"
        }
      ]
    }
  ]
}
```

In object-oriented languages, we commonly use "dot" syntax to access the items she purchased in a single order:

```javascript

const productsOrdered = customer.orders[0].items;
```

REST allows us to use a similar syntax for accessing (and modifying) an object's properties with HTTP. **Instead of using "dot" syntax, however, we use URI paths (aka, "resources"):**

```shell

GET /customers/d5e124d9/orders/1330334826/items
```

Whether we use "dot" syntax or HTTP paths, we represent `customers` using the same words: we use a common _interface_. An interface simply allows us to reference lots of different data using the same terminology. Therefore, interfaces can be seen as collections of data with a common nomenclature. Given this point of view, many API developers have adopted the convention of referencing HTTP interfaces in the plural case.

### Examples of **incorrect** code for this rule

:disappointed: The `require-plural-paths` rule throws an error whenever `swaggerApi.path` definitions use singular nouns instead of plural:

```js

/pet/{uuid}
/store/{id}/inventory
/user/{uuid}/order/{id}

```

### Examples of **correct** code for this rule

:satisfied: The `require-plural-paths` rule validates `swaggerApi.paths` with resources that use the plural case:

```js

/pets/{uuid}
/stores/{id}/inventory
/users/{uuid}/orders/{id}

```

> #### :information_source: API path _parameters_ are not pluralized
>
> `Parameters` -- resources with dynamic values -- are not validated for plural case. For example, the following resource _literals_ are invalid:
> ```
>
> /store/order/{orderId}
> ```
> Per style guidelines, the correct representation is
> ```
>
> /stores/orders/{orderId}
> ```
> **Note that in both examples, the grammatical categorization of the  `{orderId}` parameter did not change.**


### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

Disable this rule if your product's style guidelines

* Enforce singular nouns in paths, or
* Provide well-defined instructions for singular and plural resources

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
