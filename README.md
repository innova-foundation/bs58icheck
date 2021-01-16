# bs58icheck

A straight forward implementation of base58icheck extending upon bs58.


## Example

```javascript
var bs58icheck = require('bs58icheck')

var decoded = bs58icheck.decode('5KNSiE1em23byTDTToLyd6aBbqKdSZsvG4iQkMwYuxvc7MeHSke')

console.log(decoded)
// => <Buffer 80 cc b6 a4 01 f2 5a 90 59 8e 85 16 3f fd 1b 29 67 2f a8 59 1b da ef 18 a3 4f f1 e8 eb 8b 75 98 de>

console.log(bs58icheck.encode(decoded))
// => 5KNSiE1em23byTDTToLyd6aBbqKdSZsvG4iQkMwYuxvc7MeHSke
```


## LICENSE [MIT](LICENSE)
