# camel-case-util
>Convert a dash/underscore separated string to camelCase or reverse.

>驼峰命名和下划线/中划线互转
### install
```
npm install camel-case-util --save
```
### usage
```javascript
const util = require('camel-case-util');
or
import util from 'camel-case-util'

util.dashToCamelCase("my-first-name")
//=>'myFirstName'

util.camelCaseToDash("myFirstName")
//=>'my-first-name'

util.underscoreToCamelCase("my_first_name")
//=>'myFirstName'

util.camelCaseToUnderscore("myFirstName")
//=>'my_first_name'
```
