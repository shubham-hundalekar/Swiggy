const menuData = [
    {
        "mainMenu":{
                "10894" : { // Pizza Hut
            name: "Pizza Hut",
            cuisines: ["Pizza", "Italian"],
            menu: {
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
                },

                "855478" : { // Chinese Wok
                    name: "Chinese Wok",
                    cuisines: ["Chinese", "Asian"],
                    menu: [
                    { id: "201", name: "Veg Hakka Noodles", price: 19900, veg: true, avgRating: 4.2, costForTwo: 350 },
                    { id: "202", name: "Chicken Fried Rice", price: 22900, veg: false, avgRating: 4.4, costForTwo: 400 },
                    { id: "203", name: "Chilli Paneer", price: 24900, veg: true, avgRating: 4.3, costForTwo: 400 },
                    { id: "204", name: "Veg Fried Rice", price: 18900, veg: true, avgRating: 4.1, costForTwo: 350 },
                    { id: "205", name: "Chicken Manchurian", price: 26900, veg: false, avgRating: 4.5, costForTwo: 450 },
                    { id: "206", name: "Paneer Fried Rice", price: 23900, veg: true, avgRating: 4.2, costForTwo: 400 },
                    { id: "207", name: "Spring Rolls", price: 14900, veg: true, avgRating: 4.0, costForTwo: 300 },
                    { id: "208", name: "Chicken Lollipop", price: 27900, veg: false, avgRating: 4.6, costForTwo: 500 },
                    { id: "209", name: "Schezwan Noodles", price: 21900, veg: true, avgRating: 4.3, costForTwo: 400 },
                    { id: "210", name: "Hot & Sour Soup", price: 12900, veg: true, avgRating: 4.1, costForTwo: 250 },
                    { id: "211", name: "Kung Pao Chicken", price: 28900, veg: false, avgRating: 4.4, costForTwo: 450 },
                    { id: "212", name: "Crispy Corn", price: 15900, veg: true, avgRating: 4.2, costForTwo: 300 },
                    { id: "213", name: "Dragon Chicken", price: 29900, veg: false, avgRating: 4.5, costForTwo: 500 },
                    { id: "214", name: "Veg Manchow Soup", price: 11900, veg: true, avgRating: 4.0, costForTwo: 250 },
                    { id: "215", name: "Paneer Chilli Dry", price: 25900, veg: true, avgRating: 4.3, costForTwo: 450 },
                    { id: "216", name: "Schezwan Paneer", price: 23900, veg: true, avgRating: 4.2, costForTwo: 400 },
                    { id: "217", name: "Chicken Spring Roll", price: 16900, veg: false, avgRating: 4.3, costForTwo: 350 },
                    { id: "218", name: "Honey Chilli Potato", price: 14900, veg: true, avgRating: 4.1, costForTwo: 300 },
                    { id: "219", name: "Egg Fried Rice", price: 18900, veg: false, avgRating: 4.2, costForTwo: 350 },
                    { id: "220", name: "Veg Manchurian", price: 19900, veg: true, avgRating: 4.4, costForTwo: 400 }
                    ]
                },

                "1098406":  { // ZAZA Mughal Biryani
                    name: "ZAZA Mughal Biryani",
                    cuisines: ["Biryani", "Mughlai"],
                    menu: [
                    { id: "301", name: "Chicken Dum Biryani", price: 34900, veg: false, avgRating: 4.5, costForTwo: 500 },
                    { id: "302", name: "Mutton Biryani", price: 42900, veg: false, avgRating: 4.6, costForTwo: 600 },
                    { id: "303", name: "Veg Biryani", price: 28900, veg: true, avgRating: 4.2, costForTwo: 450 },
                    { id: "304", name: "Chicken Tikka Biryani", price: 37900, veg: false, avgRating: 4.4, costForTwo: 550 },
                    { id: "305", name: "Paneer Biryani", price: 31900, veg: true, avgRating: 4.3, costForTwo: 500 },
                    { id: "306", name: "Chicken Kebab", price: 25900, veg: false, avgRating: 4.5, costForTwo: 400 },
                    { id: "307", name: "Mughlai Paratha", price: 17900, veg: false, avgRating: 4.1, costForTwo: 350 },
                    { id: "308", name: "Raita", price: 4900, veg: true, avgRating: 4.0, costForTwo: 200 },
                    { id: "309", name: "Gulab Jamun", price: 9900, veg: true, avgRating: 4.4, costForTwo: 250 },
                    { id: "310", name: "Chicken Shawarma", price: 19900, veg: false, avgRating: 4.3, costForTwo: 400 },
                    { id: "311", name: "Paneer Kathi Roll", price: 15900, veg: true, avgRating: 4.2, costForTwo: 300 },
                    { id: "312", name: "Mutton Seekh Kebab", price: 23900, veg: false, avgRating: 4.5, costForTwo: 500 },
                    { id: "313", name: "Veg Korma", price: 17900, veg: true, avgRating: 4.1, costForTwo: 350 },
                    { id: "314", name: "Chicken Mughlai Curry", price: 27900, veg: false, avgRating: 4.4, costForTwo: 500 },
                    { id: "315", name: "Paneer Butter Masala", price: 19900, veg: true, avgRating: 4.3, costForTwo: 400 },
                    { id: "316", name: "Dal Makhani", price: 14900, veg: true, avgRating: 4.2, costForTwo: 350 },
                    { id: "317", name: "Chicken Seekh Roll", price: 21900, veg: false, avgRating: 4.4, costForTwo: 450 },
                    { id: "318", name: "Veg Pulao", price: 12900, veg: true, avgRating: 4.1, costForTwo: 300 },
                    { id: "319", name: "Chicken Curry", price: 24900, veg: false, avgRating: 4.5, costForTwo: 500 },
                    { id: "320", name: "Mixed Veg Curry", price: 15900, veg: true, avgRating: 4.2, costForTwo: 350 }
                    ]
                },
                "992824": { // Mealy - your everyday meal
                name: "Mealy - your everyday meal",
                cuisines: ["Indian", "Fast Food"],
                menu: [
                    { id: "401", name: "Paneer Wrap", price: 19900, veg: true, avgRating: 4.2, costForTwo: 350 },
                    { id: "402", name: "Chicken Wrap", price: 21900, veg: false, avgRating: 4.3, costForTwo: 400 },
                    { id: "403", name: "Veg Thali", price: 24900, veg: true, avgRating: 4.1, costForTwo: 450 },
                    { id: "404", name: "Chicken Thali", price: 28900, veg: false, avgRating: 4.4, costForTwo: 500 },
                    { id: "405", name: "Dal Makhani", price: 15900, veg: true, avgRating: 4.3, costForTwo: 350 },
                    { id: "406", name: "Paneer Butter Masala", price: 19900, veg: true, avgRating: 4.4, costForTwo: 400 },
                    { id: "407", name: "Chicken Curry", price: 22900, veg: false, avgRating: 4.5, costForTwo: 450 },
                    { id: "408", name: "Jeera Rice", price: 9900, veg: true, avgRating: 4.1, costForTwo: 250 },
                    { id: "409", name: "Veg Pulao", price: 11900, veg: true, avgRating: 4.2, costForTwo: 300 },
                    { id: "410", name: "Chicken Pulao", price: 14900, veg: false, avgRating: 4.3, costForTwo: 350 },
                    { id: "411", name: "Veg Sandwich", price: 12900, veg: true, avgRating: 4.1, costForTwo: 300 },
                    { id: "412", name: "Grilled Chicken Sandwich", price: 15900, veg: false, avgRating: 4.3, costForTwo: 350 },
                    { id: "413", name: "Masala Dosa", price: 13900, veg: true, avgRating: 4.2, costForTwo: 300 },
                    { id: "414", name: "Paneer Roll", price: 14900, veg: true, avgRating: 4.1, costForTwo: 300 },
                    { id: "415", name: "Chicken Roll", price: 16900, veg: false, avgRating: 4.4, costForTwo: 350 },
                    { id: "416", name: "Veg Burger", price: 11900, veg: true, avgRating: 4.0, costForTwo: 250 },
                    { id: "417", name: "Chicken Burger", price: 13900, veg: false, avgRating: 4.2, costForTwo: 300 },
                    { id: "418", name: "French Fries", price: 9900, veg: true, avgRating: 4.1, costForTwo: 200 },
                    { id: "419", name: "Paneer Tikka", price: 17900, veg: true, avgRating: 4.3, costForTwo: 350 },
                    { id: "420", name: "Chicken Tikka", price: 19900, veg: false, avgRating: 4.4, costForTwo: 400 }
                ]
                },

                "42579": { // Domino's
                name: "Domino's",
                cuisines: ["Pizza", "Italian"],
                menu: [
                    { id: "501", name: "Margherita", price: 29900, veg: true, avgRating: 4.2, costForTwo: 500 },
                    { id: "502", name: "Farmhouse", price: 45900, veg: true, avgRating: 4.3, costForTwo: 600 },
                    { id: "503", name: "Pepperoni", price: 49900, veg: false, avgRating: 4.4, costForTwo: 650 },
                    { id: "504", name: "Veggie Paradise", price: 47900, veg: true, avgRating: 4.1, costForTwo: 600 },
                    { id: "505", name: "Chicken Dominator", price: 52900, veg: false, avgRating: 4.5, costForTwo: 700 },
                    { id: "506", name: "Paneer Makhani", price: 48900, veg: true, avgRating: 4.3, costForTwo: 650 },
                    { id: "507", name: "Garlic Breadsticks", price: 15900, veg: true, avgRating: 4.1, costForTwo: 300 },
                    { id: "508", name: "Cheese Burst Pizza", price: 18900, veg: true, avgRating: 4.4, costForTwo: 350 },
                    { id: "509", name: "Choco Lava Cake", price: 12900, veg: true, avgRating: 4.5, costForTwo: 300 },
                    { id: "510", name: "Coke", price: 6900, veg: true, avgRating: 4.0, costForTwo: 200 },
                    { id: "511", name: "Mexican Green Wave", price: 46900, veg: true, avgRating: 4.2, costForTwo: 600 },
                    { id: "512", name: "Chicken Sausage Pizza", price: 48900, veg: false, avgRating: 4.3, costForTwo: 650 },
                    { id: "513", name: "Paneer Fiesta", price: 49900, veg: true, avgRating: 4.4, costForTwo: 650 },
                    { id: "514", name: "Veg Extravaganza", price: 52900, veg: true, avgRating: 4.5, costForTwo: 700 },
                    { id: "515", name: "Spicy Chicken Pizza", price: 53900, veg: false, avgRating: 4.6, costForTwo: 750 },
                    { id: "516", name: "Classic Nachos", price: 14900, veg: true, avgRating: 4.1, costForTwo: 300 },
                    { id: "517", name: "Cheesy Jalapeno Dip", price: 4900, veg: true, avgRating: 4.0, costForTwo: 200 },
                    { id: "518", name: "BBQ Chicken Wings", price: 29900, veg: false, avgRating: 4.4, costForTwo: 500 },
                    { id: "519", name: "Brownie with Ice Cream", price: 16900, veg: true, avgRating: 4.6, costForTwo: 350 },
                    { id: "520", name: "7Up", price: 6900, veg: true, avgRating: 4.0, costForTwo: 200 }
                ]
                },

                "23819": { 
                name: "Burger King",
                cuisines: ["Burgers", "Fast Food"],
                menu: [
                    { id: "601", name: "Whopper", price: 22900, veg: false, avgRating: 4.4, costForTwo: 400 },
                    { id: "602", name: "Veg Whopper", price: 19900, veg: true, avgRating: 4.3, costForTwo: 350 },
                    { id: "603", name: "French Fries", price: 10900, veg: true, avgRating: 4.2, costForTwo: 300 },
                    { id: "604", name: "Chicken Crispy Burger", price: 17900, veg: false, avgRating: 4.5, costForTwo: 350 },
                    { id: "605", name: "Veg Crispy Burger", price: 14900, veg: true, avgRating: 4.1, costForTwo: 300 },
                    { id: "606", name: "Chicken Whopper Jr", price: 15900, veg: false, avgRating: 4.3, costForTwo: 300 },
                    { id: "607", name: "Veg Whopper Jr", price: 13900, veg: true, avgRating: 4.2, costForTwo: 300 },
                    { id: "608", name: "Peri Peri Fries", price: 12900, veg: true, avgRating: 4.4, costForTwo: 300 },
                    { id: "609", name: "Chicken Nuggets", price: 15900, veg: false, avgRating: 4.5, costForTwo: 350 },
                    { id: "610", name: "Chocolate Shake", price: 14900, veg: true, avgRating: 4.6, costForTwo: 300 },
                    { id: "611", name: "Vanilla Sundae", price: 9900, veg: true, avgRating: 4.5, costForTwo: 250 },
                    { id: "612", name: "Onion Rings", price: 11900, veg: true, avgRating: 4.1, costForTwo: 300 },
                    { id: "613", name: "Veggie Wrap", price: 16900, veg: true, avgRating: 4.2, costForTwo: 350 },
                    { id: "614", name: "Chicken Wrap", price: 18900, veg: false, avgRating: 4.4, costForTwo: 400 },
                    { id: "615", name: "Spicy Chicken Burger", price: 17900, veg: false, avgRating: 4.5, costForTwo: 350 },
                    { id: "616", name: "Cheese Burger", price: 14900, veg: true, avgRating: 4.3, costForTwo: 300 },
                    { id: "617", name: "BBQ Chicken Burger", price: 19900, veg: false, avgRating: 4.6, costForTwo: 400 },
                    { id: "618", name: "Cheesy Fries", price: 13900, veg: true, avgRating: 4.2, costForTwo: 300 },
                    { id: "619", name: "Coke (500ml)", price: 6900, veg: true, avgRating: 4.0, costForTwo: 200 },
                    { id: "620", name: "Diet Coke (500ml)", price: 6900, veg: true, avgRating: 4.0, costForTwo: 200 }
                ]
                },

                "1053708": { // RNR Biryani - Taste of 1953
                    name: "RNR Biryani - Taste of 1953",
                    cuisines: ["Biryani", "Indian"],
                    menu: [
                        { id: "701", name: "Chicken Biryani", price: 34900, veg: false, avgRating: 4.5, costForTwo: 500 },
                        { id: "702", name: "Mutton Biryani", price: 42900, veg: false, avgRating: 4.6, costForTwo: 600 },
                        { id: "703", name: "Veg Biryani", price: 28900, veg: true, avgRating: 4.2, costForTwo: 450 },
                        { id: "704", name: "Paneer Biryani", price: 31900, veg: true, avgRating: 4.3, costForTwo: 500 },
                        { id: "705", name: "Chicken 65 Biryani", price: 35900, veg: false, avgRating: 4.4, costForTwo: 550 },
                        { id: "706", name: "Egg Biryani", price: 24900, veg: true, avgRating: 4.1, costForTwo: 400 },
                        { id: "707", name: "Chicken Fry", price: 19900, veg: false, avgRating: 4.3, costForTwo: 350 },
                        { id: "708", name: "Paneer 65", price: 17900, veg: true, avgRating: 4.2, costForTwo: 300 },
                        { id: "709", name: "Mutton Kebab", price: 25900, veg: false, avgRating: 4.5, costForTwo: 400 },
                        { id: "710", name: "Veg Kebab", price: 14900, veg: true, avgRating: 4.1, costForTwo: 300 },
                        { id: "711", name: "Chicken Curry", price: 22900, veg: false, avgRating: 4.4, costForTwo: 400 },
                        { id: "712", name: "Paneer Butter Masala", price: 19900, veg: true, avgRating: 4.2, costForTwo: 350 },
                        { id: "713", name: "Jeera Rice", price: 9900, veg: true, avgRating: 4.1, costForTwo: 250 },
                        { id: "714", name: "Raita", price: 4900, veg: true, avgRating: 4.0, costForTwo: 200 },
                        { id: "715", name: "Veg Pulao", price: 11900, veg: true, avgRating: 4.1, costForTwo: 250 },
                        { id: "716", name: "Chicken Pulao", price: 14900, veg: false, avgRating: 4.3, costForTwo: 350 },
                        { id: "717", name: "Mutton Curry", price: 26900, veg: false, avgRating: 4.5, costForTwo: 450 },
                        { id: "718", name: "Veg Curry", price: 15900, veg: true, avgRating: 4.2, costForTwo: 300 },
                        { id: "719", name: "Paneer Tikka", price: 17900, veg: true, avgRating: 4.3, costForTwo: 350 },
                        { id: "720", name: "Chicken Tikka", price: 19900, veg: false, avgRating: 4.4, costForTwo: 400 }
                    ]
                },

                "588181" : { // Third Wave Coffee
                name: "Third Wave Coffee",
                cuisines: ["Cafe", "Beverages"],
                menu: [
                    { id: "801", name: "Espresso", price: 9900, veg: true, avgRating: 4.5, costForTwo: 250 },
                    { id: "802", name: "Cappuccino", price: 12900, veg: true, avgRating: 4.6, costForTwo: 300 },
                    { id: "803", name: "Latte", price: 13900, veg: true, avgRating: 4.4, costForTwo: 350 },
                    { id: "804", name: "Flat White", price: 14900, veg: true, avgRating: 4.5, costForTwo: 350 },
                    { id: "805", name: "Mocha", price: 15900, veg: true, avgRating: 4.6, costForTwo: 400 },
                    { id: "806", name: "Americano", price: 10900, veg: true, avgRating: 4.3, costForTwo: 250 },
                    { id: "807", name: "Iced Coffee", price: 12900, veg: true, avgRating: 4.4, costForTwo: 300 },
                    { id: "808", name: "Cold Brew", price: 13900, veg: true, avgRating: 4.5, costForTwo: 350 },
                    { id: "809", name: "Caramel Latte", price: 14900, veg: true, avgRating: 4.6, costForTwo: 350 },
                    { id: "810", name: "Vanilla Latte", price: 14900, veg: true, avgRating: 4.5, costForTwo: 350 },
                    { id: "811", name: "Hazelnut Latte", price: 15900, veg: true, avgRating: 4.4, costForTwo: 400 },
                    { id: "812", name: "Café au Lait", price: 12900, veg: true, avgRating: 4.3, costForTwo: 300 },
                    { id: "813", name: "Macchiato", price: 13900, veg: true, avgRating: 4.5, costForTwo: 350 },
                    { id: "814", name: "Cortado", price: 11900, veg: true, avgRating: 4.2, costForTwo: 300 },
                    { id: "815", name: "Turkish Coffee", price: 15900, veg: true, avgRating: 4.4, costForTwo: 400 },
                    { id: "816", name: "Affogato", price: 16900, veg: true, avgRating: 4.5, costForTwo: 450 },
                    { id: "817", name: "Irish Coffee", price: 17900, veg: true, avgRating: 4.6, costForTwo: 500 },
                    { id: "818", name: "Espresso Macchiato", price: 12900, veg: true, avgRating: 4.3, costForTwo: 300 },
                    { id: "819", name: "Ristretto", price: 11900, veg: true, avgRating: 4.2, costForTwo: 250 },
                    { id: "820", name: "Long Black", price: 10900, veg: true, avgRating: 4.1, costForTwo: 250 }
                ]
                }
    },
    imgLink : "https://tse2.mm.bing.net/th/id/OIP.xnOdHsT-Ny1NUwz1uv5r-AHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"

    }
    
];
export default menuData;