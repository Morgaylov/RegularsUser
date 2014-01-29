/**
 * Created by Dmitry on 29.01.14.
 */
var regexpParser = require("./regexpparser");
var res = regexpParser.getMatches("President. 112d, fds fddf, sdcsd sex. dscsdcsd serrr c v. bbb-dee, adad. President dvcddv.",
                                  /(president)|(sex)/gi);
console.log(res);