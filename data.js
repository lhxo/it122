const sandwiches = [
    {name:"Reuben", vessel:"Rye",protein:["Corned Beef"],veggie:["Sauerkrout"],dairy:["Swiss"],sauce:["Thousand Island"]},
    {name:"Cheese Burger",vessel:"Brioche",protein:["Beef Patty"],veggie:["Lettuce","Tomato","Red Onion"],dairy:["American"],sauce:["Ketchup","Mayo"]},
    {name:"Taco",vessel:"Tortilla",protein:["Ground Beef"],veggie:["Lettuce","Tomato"],dairy:["Cheddar","Sour Cream"],sauce:["Salsa Verde"]},
    {name:"Hot Dog",vessel:"Hot Dog Bun",protein:["Polish Dog"],veggie:["Onion","Pickled Jalepeno"],dairy:["Cream Cheese"],sauce:["Mayo","Mustard"]},
    {name:"Ice Cream Sandwich",vessel:"Chocolate Chip Cookie",protein:["N/A"],veggie:["N/A"],dairy:["Mint Ice Cream"],sauce:["N/A"]},
    {name:"Test"}
];

export const getAll = () => {
    //Week 2
    // let string = JSON.stringify((sandwiches), null, 5)
    return sandwiches
}

export const getItem = (name) => {
    //Week 2
    // return JSON.stringify(sandwiches.filter((sandwich)=>{
    //     return sandwich["name"] == query;
    // }))
    return sandwiches.find((sandwich) => {
        return sandwich.name.toLowerCase() === name.toLowerCase();
    });
}

export const addItem = (name, vessel, protein, veggie, dairy, sauce) => {
    if(name == undefined || vessel == undefined || protein == undefined || veggie == undefined || dairy == undefined || sauce == undefined) {
        return false;
    }
    sandwich.push({name, vessel, protein, veggie, dairy, sauce})
}
export const deleteItem = (name) => {
    sandwiches.remove((sandwich)=>{
        return sandwich.name !== name
    })
};    