# prohibit use of verbs in api paths (`no-path-verbs`)

Mature RESTful designs represent

* HTTP **paths as resources** and
* HTTP **methods as operations** available for those resources.

Traditional `RPC` and `SOAP` calls invoke object methods for CRUD operations.

## Traditional, non-RESTful operations

| HTTP method type (verb) | CRUD | Collection<br>(e.g., `/pets`) | Item<br>(e.g., `/pets/{id}`) |
|:------------------------|:-----|:---------- |:---- |
| POST | Create | `/pets/createPets` | `/pets/createPet` |
| GET | Read | `/pets/getAllPets` | `/pets/getPetById` |
| POST | Update/Replace | `/pets/updateAllPets` | `/pets/updateById` |
| POST | Update/Modify | `/pets/updateBreed` | `/pets/updateBreedById` |
| POST | Delete | `/pets/deleteAllPets` | `/pets/deletePetsByBreed` |

## RESTful API verbs represented by HTTP method type

RESTful APIs standardize resource operations, e.g., `find`, `get`, `create`, `update`, with HTTP method method types.

| HTTP method type (verb) | CRUD | Collection<br>(e.g., `/pets`) | Item<br>(e.g., `/pets/{id}`) |
|:------------------------|:-----|:---------- |:---- |
| POST | Create | `201 Created` | `404 Not Found`<br>`409 Conflict` (if resource already exists) |
| GET | Read | `200 OK` | `200 OK`<br>`404 Not Found` (if resource doesn't exist or invalid) |
| PUT | Update/Replace | `405 Method Not Allowed` (unless replacement of every resource is allowed) | `200 OK`<br>`204 No Content`<br>`404 Not Found` |
| PATCH | Update/Modify | `405 Method Not Allowed` (unless you allow modification of the entire collection) | `200 OK`<br>`204 No Content`<br>`404 Not Found` (if ID not found or invalid) |
| DELETE | Delete | `405 Method Not Allowed` (unless you want to delete the whole collection; not often desirable) | `404 Not Found`<br>`200 OK`<br>`404 Not Found` (if ID not found or invalid) |


## Rule Details

This rule looks for common verbs in a resource's API path.

Examples of **incorrect** code for this rule:

```js

{
  "paths": {
    "/pets/findByStatus": ...,
    "/pets/findByTags": ...,
    "/pets/{petId}/uploadImage": ...,
    "/users/createWithArray": ...,
    "/users/createWithList": ...,
    "/users/login": ...,
    "/users/logout": ...
  }
}

```

Examples of **correct** code for this rule:

```js

{
  "paths": {
    "/pets": ...,  // with <query> input params
    "/pets": ...,  // with <query> input params
    "/pets/{petId}/images": ...,
    "/users": ..., // with overloaded operation
    "/users": ..., // with overloaded operation
    "/users/{id}/sessions": ..., // POST
    "/users/{id}/sessions": ...  // DELETE
  }
}

```

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
