var query=require('querystring')
const obj=query.parse('tc=dhdhhw&language=en&course_slug=cryptocurrency&country_code=us&lead_id=602524a5a1a9fc2083b7ba23&utm_source=rev3get-toolkit&utm_medium=push&utm_campaign=16thFebruary2021_toolkit')
console.log(obj);

const str=query.stringify(obj)
console.log(str);