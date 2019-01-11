# camel-case-util
Convert a dash/underscore separated string to camelCase or reverse.
### install
```
npm install camel-case-util --save
```
### usage
```
const util = require('camel-case-util');


util.dashToCamelCase("my-first-name")
//=>'myFirstName'

util.camelCaseToDash("myFirstName")
//=>'my-first-name'

util.underscoreToCamelCase("my_first_name")
//=>'myFirstName'

util.camelCaseToUnderscore("myFirstName")
//=>'my_first_name'
```
