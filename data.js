const sandwiches = [
    {name:"Ruben", vessel:"Rye",protein:["Corned Beef"],veggie:["Sauerkrout"],dairy:["Swiss"],sauce:["Thousand Island"]},
    {name:"Cheese Burger",vessel:"Brioche",protein:["Beef Patty"],veggie:["Lettuce","Tomato","Red Onion"],dairy:["American"],sauce:["Ketchup","Mayo"]},
    {name:"Taco",vessel:"Tortilla",protein:["Ground Beef"],veggie:["Lettuce","Tomato"],dairy:["Cheddar","Sour Cream"],sauce:["Salsa Verde"]},
    {name:"Hot Dog",vessel:"Hot Dog Bun",protein:["Polish Dog"],veggie:["Onion","Pickled Jalepeno"],dairy:["Cream Cheese"],sauce:["Mayo","Mustard"]},
    {name:"Ice Cream Sandwich",vessel:"Chocolate Chip Cookie",protein:["N/A"],veggie:["N/A"],dairy:["Mint Ice Cream"],sauce:["N/A"]},
];

export const getAll = () => {
    let string = JSON.stringify((sandwiches), null, 5)
    return string
}

export const getItem = (query) => {
    return JSON.stringify(sandwiches.filter((sandwich)=>{
        return sandwich["name"] == query;
    }))
}