// ./src/views/RestaurantsFeeds.vue
<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants"/>
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import NewestRestaurants from '../components/NewestRestaurants.vue'

const dummyData = {
  "restaurants": [
        {
            "id": 1,
            "name": "Ms. Victor Hane",
            "tel": "374.151.0927 x63501",
            "address": "3820 Robel Rapid",
            "opening_hours": "08:00",
            "description": "Aut aliquam distinctio inventore architecto eius et labore. Doloribus non praesentium officiis fugit magni ex ipsum recusandae. Voluptatem aliquam accusantium. Voluptate eos dicta debitis. Vel et tenetur eveniet voluptate tenetur perspiciatis enim.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=41.13090251119787",
            "viewCounts": 0,
            "createdAt": "2021-11-03T15:01:36.000Z",
            "updatedAt": "2021-11-03T15:01:36.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z"
            }
        },
        {
            "id": 2,
            "name": "Juliana McDermott",
            "tel": "1-924-686-9178 x931",
            "address": "359 Marks Throughway",
            "opening_hours": "08:00",
            "description": "culpa porro et",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.309807090823716",
            "viewCounts": 0,
            "createdAt": "2021-11-03T15:01:36.000Z",
            "updatedAt": "2021-11-03T15:01:36.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z"
            }
        },
        {
            "id": 3,
            "name": "Weston Walsh",
            "tel": "067-797-0416 x066",
            "address": "88349 Von Islands",
            "opening_hours": "08:00",
            "description": "illo",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=29.183465918710482",
            "viewCounts": 0,
            "createdAt": "2021-11-03T15:01:36.000Z",
            "updatedAt": "2021-11-03T15:01:36.000Z",
            "CategoryId": 3,
            "Category": null
            // {
            //     "id": 3,
            //     "name": "義大利料理",
            //     "createdAt": "2021-11-03T15:01:36.000Z",
            //     "updatedAt": "2021-11-03T15:01:36.000Z"
            // }
        },
        {
            "id": 4,
            "name": "Lucie Rowe",
            "tel": "677-014-4963",
            "address": "7700 Marquardt Islands",
            "opening_hours": "08:00",
            "description": "Quis vel nulla sed. Sed ad nobis quibusdam ea reiciendis. Molestiae facilis repellat facilis et. Omnis quis ratione rerum omnis rerum.\n \rEt labore qui magnam dignissimos adipisci distinctio totam et incidunt. Nisi et est ut porro vitae voluptatem qui quibusdam. Et debitis sunt rerum reiciendis iste et.\n \rVoluptatem enim eum sit. Harum quia minus dolores iure qui ex. Eveniet quam enim mollitia reprehenderit ut. Consequatur qui quo sapiente minus vero debitis nam.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.14571419845818",
            "viewCounts": 0,
            "createdAt": "2021-11-03T15:01:36.000Z",
            "updatedAt": "2021-11-03T15:01:36.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z"
            }
        },
        {
            "id": 5,
            "name": "Claire Green",
            "tel": "1-877-541-4235 x817",
            "address": "351 Bernhard Branch",
            "opening_hours": "08:00",
            "description": "Minus sit voluptatem ea dolorem a voluptatem cupiditate saepe consectetur.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.37382571838411",
            "viewCounts": 0,
            "createdAt": "2021-11-03T15:01:36.000Z",
            "updatedAt": "2021-11-03T15:01:36.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z"
            }
        },
        {
            "id": 6,
            "name": "Amie Herman",
            "tel": "1-077-082-8890",
            "address": "730 Schulist Corners",
            "opening_hours": "08:00",
            "description": "veniam",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=42.99561100271268",
            "viewCounts": 0,
            "createdAt": "2021-11-03T15:01:36.000Z",
            "updatedAt": "2021-11-03T15:01:36.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z"
            }
        },
        {
            "id": 7,
            "name": "Efren Dietrich",
            "tel": "551-633-9230",
            "address": "721 Balistreri Station",
            "opening_hours": "08:00",
            "description": "Ipsum explicabo quas ducimus dolorum sit impedit aspernatur nihil facere.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.83936040920796",
            "viewCounts": 0,
            "createdAt": "2021-11-03T15:01:36.000Z",
            "updatedAt": "2021-11-03T15:01:36.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z"
            }
        },
        {
            "id": 8,
            "name": "Kaden Herzog",
            "tel": "(694) 129-2150 x96275",
            "address": "370 Kub Green",
            "opening_hours": "08:00",
            "description": "Quis deserunt tempora repellendus.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.6135623863038",
            "viewCounts": 0,
            "createdAt": "2021-11-03T15:01:36.000Z",
            "updatedAt": "2021-11-03T15:01:36.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z"
            }
        },
        {
            "id": 9,
            "name": "Derrick Koss",
            "tel": "840-519-8657 x94847",
            "address": "6367 Noah Spur",
            "opening_hours": "08:00",
            "description": "quos",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.292652942039567",
            "viewCounts": 0,
            "createdAt": "2021-11-03T15:01:36.000Z",
            "updatedAt": "2021-11-03T15:01:36.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z"
            }
        },
        {
            "id": 10,
            "name": "Mrs. Christ Schaefer",
            "tel": "704.749.2163 x94510",
            "address": "6778 Will Overpass",
            "opening_hours": "08:00",
            "description": "molestiae aut aut",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.625304449012404",
            "viewCounts": 0,
            "createdAt": "2021-11-03T15:01:36.000Z",
            "updatedAt": "2021-11-03T15:01:36.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z"
            }
        }
  ],
  "comments": [
        {
            "id": 6,
            "text": "Ipsa eum unde nam eum.",
            "UserId": 1,
            "RestaurantId": 6,
            "createdAt": "2021-11-03T15:01:36.000Z",
            "updatedAt": "2021-11-03T15:01:36.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$UvMcSKrgRN4dyz6og7gpveO6jE4JjZeTO/UcoR92KBr8llL45vEIa",
                "isAdmin": true,
                "image": null,
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z"
            },
            "Restaurant": {
                "id": 6,
                "name": "Amie Herman",
                "tel": "1-077-082-8890",
                "address": "730 Schulist Corners",
                "opening_hours": "08:00",
                "description": "veniam",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=42.99561100271268",
                "viewCounts": 0,
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 24,
            "text": "Corporis magni tempore omnis doloremque molestiae quod nihil nisi.",
            "UserId": 1,
            "RestaurantId": 24,
            "createdAt": "2021-11-03T15:01:36.000Z",
            "updatedAt": "2021-11-03T15:01:36.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$UvMcSKrgRN4dyz6og7gpveO6jE4JjZeTO/UcoR92KBr8llL45vEIa",
                "isAdmin": true,
                "image": null,
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z"
            },
            "Restaurant": {
                "id": 24,
                "name": "Andres Weissnat",
                "tel": "1-247-848-7666 x727",
                "address": "8050 Douglas Plains",
                "opening_hours": "08:00",
                "description": "Error reiciendis et harum eligendi aliquam doloribus molestias. Laborum libero odio itaque. Quis veritatis voluptas sapiente ratione. Cum voluptatem veniam voluptas aspernatur vero mollitia nulla laudantium dicta.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.993013355004909",
                "viewCounts": 0,
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 57,
            "text": "Aliquam quae a eos sint molestias ullam voluptas sed quaerat.",
            "UserId": 1,
            "RestaurantId": 7,
            "createdAt": "2021-11-03T15:01:36.000Z",
            "updatedAt": "2021-11-03T15:01:36.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$UvMcSKrgRN4dyz6og7gpveO6jE4JjZeTO/UcoR92KBr8llL45vEIa",
                "isAdmin": true,
                "image": null,
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z"
            },
            "Restaurant": {
                "id": 7,
                "name": "Efren Dietrich",
                "tel": "551-633-9230",
                "address": "721 Balistreri Station",
                "opening_hours": "08:00",
                "description": "Ipsum explicabo quas ducimus dolorum sit impedit aspernatur nihil facere.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.83936040920796",
                "viewCounts": 0,
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 79,
            "text": "Atque non qui ut earum est.",
            "UserId": 1,
            "RestaurantId": 29,
            "createdAt": "2021-11-03T15:01:36.000Z",
            "updatedAt": "2021-11-03T15:01:36.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$UvMcSKrgRN4dyz6og7gpveO6jE4JjZeTO/UcoR92KBr8llL45vEIa",
                "isAdmin": true,
                "image": null,
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z"
            },
            "Restaurant": {
                "id": 29,
                "name": "Gilbert Jaskolski",
                "tel": "626.064.4841",
                "address": "631 Mueller Port",
                "opening_hours": "08:00",
                "description": "Pariatur earum cupiditate illum architecto quaerat ullam ut blanditiis.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.6559844790619",
                "viewCounts": 0,
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 105,
            "text": "Et sed et eius debitis voluptatem voluptatum asperiores.",
            "UserId": 1,
            "RestaurantId": 5,
            "createdAt": "2021-11-03T15:01:36.000Z",
            "updatedAt": "2021-11-03T15:01:36.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$UvMcSKrgRN4dyz6og7gpveO6jE4JjZeTO/UcoR92KBr8llL45vEIa",
                "isAdmin": true,
                "image": null,
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z"
            },
            "Restaurant": {
                "id": 5,
                "name": "Claire Green",
                "tel": "1-877-541-4235 x817",
                "address": "351 Bernhard Branch",
                "opening_hours": "08:00",
                "description": "Minus sit voluptatem ea dolorem a voluptatem cupiditate saepe consectetur.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.37382571838411",
                "viewCounts": 0,
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 142,
            "text": "Aliquid neque repellendus suscipit voluptatibus eos non.",
            "UserId": 1,
            "RestaurantId": 42,
            "createdAt": "2021-11-03T15:01:36.000Z",
            "updatedAt": "2021-11-03T15:01:36.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$UvMcSKrgRN4dyz6og7gpveO6jE4JjZeTO/UcoR92KBr8llL45vEIa",
                "isAdmin": true,
                "image": null,
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z"
            },
            "Restaurant": {
                "id": 42,
                "name": "Stefanie Keebler Jr.",
                "tel": "(960) 509-8959 x4483",
                "address": "4222 Haag Ridge",
                "opening_hours": "08:00",
                "description": "Animi sed est adipisci est porro quia vel occaecati.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.67757760378898",
                "viewCounts": 0,
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 15,
            "text": "Nihil illum ad in doloribus voluptas omnis in commodi.",
            "UserId": 2,
            "RestaurantId": 15,
            "createdAt": "2021-11-03T15:01:36.000Z",
            "updatedAt": "2021-11-03T15:01:36.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$zMr3omqXDS8O64UOiGcwuu8IFs50zPRvzrXOkJMdm4lXEc8feWVT.",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z"
            },
            "Restaurant": {
                "id": 15,
                "name": "Garett Denesik",
                "tel": "(984) 553-9939 x7210",
                "address": "225 O'Conner Bypass",
                "opening_hours": "08:00",
                "description": "Quo et autem placeat. Perspiciatis occaecati adipisci tenetur saepe culpa aut qui ratione. Omnis quam quibusdam voluptatibus voluptatibus deserunt illo officiis deserunt at. Incidunt sit deleniti voluptates. Quia non voluptates debitis facere qui itaque ut accusamus. Sunt est iste.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=4.363267620772859",
                "viewCounts": 0,
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 34,
            "text": "Perspiciatis quam ea at eligendi omnis similique illo dolores optio.",
            "UserId": 2,
            "RestaurantId": 34,
            "createdAt": "2021-11-03T15:01:36.000Z",
            "updatedAt": "2021-11-03T15:01:36.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$zMr3omqXDS8O64UOiGcwuu8IFs50zPRvzrXOkJMdm4lXEc8feWVT.",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z"
            },
            "Restaurant": {
                "id": 34,
                "name": "Vernie Pollich",
                "tel": "280.086.4867",
                "address": "56058 Paucek Unions",
                "opening_hours": "08:00",
                "description": "quod ipsum voluptas",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.05108076924725",
                "viewCounts": 0,
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 55,
            "text": "Ipsam porro et est vel rerum rem.",
            "UserId": 2,
            "RestaurantId": 5,
            "createdAt": "2021-11-03T15:01:36.000Z",
            "updatedAt": "2021-11-03T15:01:36.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$zMr3omqXDS8O64UOiGcwuu8IFs50zPRvzrXOkJMdm4lXEc8feWVT.",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z"
            },
            "Restaurant": {
                "id": 5,
                "name": "Claire Green",
                "tel": "1-877-541-4235 x817",
                "address": "351 Bernhard Branch",
                "opening_hours": "08:00",
                "description": "Minus sit voluptatem ea dolorem a voluptatem cupiditate saepe consectetur.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.37382571838411",
                "viewCounts": 0,
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 72,
            "text": "Expedita accusantium atque quia totam illo velit vitae.",
            "UserId": 2,
            "RestaurantId": 22,
            "createdAt": "2021-11-03T15:01:36.000Z",
            "updatedAt": "2021-11-03T15:01:36.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$zMr3omqXDS8O64UOiGcwuu8IFs50zPRvzrXOkJMdm4lXEc8feWVT.",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z"
            },
            "Restaurant": {
                "id": 22,
                "name": "Danika Huel",
                "tel": "474.193.4830 x8939",
                "address": "290 Madalyn Stravenue",
                "opening_hours": "08:00",
                "description": "Consequatur doloremque aspernatur inventore minima.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.85349542500845",
                "viewCounts": 0,
                "createdAt": "2021-11-03T15:01:36.000Z",
                "updatedAt": "2021-11-03T15:01:36.000Z",
                "CategoryId": 1
            }
        }
  ]
}

export default {
  components:{
    NavTabs,
    NewestRestaurants
  },
  data(){
    return{
      restaurants:[],
      comments:[]
    }
  },
  methods:{
    fetchFeeds(){
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments
    }
  },
  created(){
    this.fetchFeeds()
  }
}
</script>