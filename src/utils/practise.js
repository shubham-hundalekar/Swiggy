var a = { // Chinese Wok
                    name: "Chinese Wok",
                    cuisines: ["Chinese", "Asian"],
                     menu: {
                        title:{
                            Recommended:[
                                { id: "101", name: "Margherita", price: 29900, veg: true, avgRating: 4.3, costForTwo: 500 },
                                { id: "102", name: "Farmhouse", price: 45900, veg: true, avgRating: 4.4, costForTwo: 600 },
                                { id: "103", name: "Pepperoni", price: 49900, veg: false, avgRating: 4.5, costForTwo: 650 },
                                { id: "104", name: "Veg Supreme", price: 47900, veg: true, avgRating: 4.2, costForTwo: 600 },
                                { id: "105", name: "Chicken Supreme", price: 52900, veg: false, avgRating: 4.6, costForTwo: 700 },
                            ],
                        NewlyAdded:[
                                { id: "106", name: "Tandoori Paneer", price: 48900, veg: true, avgRating: 4.4, costForTwo: 650 },
                                { id: "107", name: "Garlic Breadsticks", price: 15900, veg: true, avgRating: 4.1, costForTwo: 300 },
                                { id: "108", name: "Cheesy Garlic Bread", price: 18900, veg: true, avgRating: 4.3, costForTwo: 350 },
                                { id: "109", name: "Choco Lava Cake", price: 12900, veg: true, avgRating: 4.5, costForTwo: 300 },
                                { id: "110", name: "Pepsi (500ml)", price: 6900, veg: true, avgRating: 4.0, costForTwo: 200 },
                        ],
                        Shakes:[
                            { id: "111", name: "Mexican Green Wave", price: 46900, veg: true, avgRating: 4.2, costForTwo: 600 },
                            { id: "112", name: "Chicken Sausage Pizza", price: 48900, veg: false, avgRating: 4.3, costForTwo: 650 },
                            { id: "113", name: "Paneer Makhani Pizza", price: 49900, veg: true, avgRating: 4.4, costForTwo: 650 },
                            { id: "114", name: "Stuffed Crust Veg", price: 52900, veg: true, avgRating: 4.5, costForTwo: 700 },
                            { id: "115", name: "Spicy Chicken Pizza", price: 53900, veg: false, avgRating: 4.6, costForTwo: 750 },
                        ], 
                        Ice_Cream:[
                            { id: "116", name: "Classic Nachos", price: 14900, veg: true, avgRating: 4.1, costForTwo: 300 },
                            { id: "117", name: "Cheesy Jalapeno Dip", price: 4900, veg: true, avgRating: 4.0, costForTwo: 200 },
                            { id: "118", name: "BBQ Chicken Wings", price: 29900, veg: false, avgRating: 4.4, costForTwo: 500 },
                            { id: "119", name: "Brownie with Ice Cream", price: 16900, veg: true, avgRating: 4.6, costForTwo: 350 },
                            { id: "120", name: "7Up (500ml)", price: 6900, veg: true, avgRating: 4.0, costForTwo: 200 }
        
                        ]
                }
            }         
        }

        Object.keys(a.menu.title).map((titleName) => {
  console.log(titleName);
});
