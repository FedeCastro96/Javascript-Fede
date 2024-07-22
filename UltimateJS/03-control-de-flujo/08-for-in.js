let user = {
    id:1,
    name: 'nombre',
    age:24,
};

for (let prop in user){
    console.log(prop, user[prop]);
}