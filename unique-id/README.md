## amp-unique-id


### the code

```javascript
// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var theGlobal = (typeof window !== 'undefined') ? window : global;
theGlobal.__ampIdCounter = 0;


module.exports = function uniqueId(prefix) {
    var id = ++theGlobal.__ampIdCounter + '';
    return prefix ? prefix + id : id;
};
```

### Browser support

[![browser support](https://ci.testling.com/henrikjoreteg/amp-unique-id.png)](https://ci.testling.com/ampersandjs/amp-unique-id)

### Dependency tree

```json
{
    "name": "unique-id",
    "deps": []
}
```

### Credits

The amp project was created by [@HenrikJoreteg](http://twitter.com/henrikjoreteg). Much of the code for individual functions come from underscore.js, but it is not intended to be a pure port of underscore to individual modules.