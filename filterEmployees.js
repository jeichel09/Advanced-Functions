function solve(str, criteria) {
    let data = JSON.parse(str);
    let collect = [];
    for (let record of data) {
        let row = {
        first_name: record.first_name,
        last_name: record.last_name,
        email: record.email,
        gender: record.gender
        };
        collect.push(row);
    }
    if (criteria === 'all') {
        for (let i = 0; i < collect.length; i ++) {
            console.log(`${i}. ${collect[i].first_name} ${collect[i].last_name} - ${collect[i].email}`);
        }
    } else {
        let [field, value] = criteria.split("-");
        let filtered = collect.filter(person => person[field] === value);
        for (let i = 0; i < filtered.length; i ++) {
            console.log(`${i}. ${filtered[i].first_name} ${filtered[i].last_name} - ${filtered[i].email}`);
        }
    }
}
solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'all'
);
solve();