define({ "api": [
  {
    "type": "post",
    "url": "/user/",
    "title": "add User information",
    "name": "AddUser_information",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>fullname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>mobile of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n\"message\": \"User Added!\",\n\"data\": {\n    \"id\": 5,\n    \"fullname\": \"vp\",\n    \"email\": \"vigneshprabhu@gmail.com\",\n    \"mobile\": \"9597299278\",\n    \"password\": \"vp@shine\",\n    \"updatedAt\": \"2020-06-01T15:28:01.013Z\",\n    \"createdAt\": \"2020-06-01T15:28:01.013Z\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Cannotpost",
            "description": "<p>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Cannotpost\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/userRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "Delete specific User information",
    "name": "DeleteUser_information",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n  \"message\": \"User deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find User with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/userRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/",
    "title": "Request get all User information",
    "name": "GetAllUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": \"success\",\n\"message\": \"Users retrieved\",\n\"data\": [\n    {\n        \"id\": 1,\n        \"fullname\": \"Manojkumar\",\n        \"email\": \"manojkumarssaug6@gmail.com\",\n        \"mobile\": \"7708087463\",\n        \"password\": \"manoj@11\",\n        \"createdAt\": \"2020-05-28T12:48:49.563Z\",\n        \"updatedAt\": \"2020-05-28T12:48:49.563Z\"\n    },\n    {\n        \"id\": 2,\n        \"fullname\": \"venkat\",\n        \"email\": \"manojkumar11tpr@gmail.com\",\n        \"mobile\": \"7708087463\",\n        \"password\": \"manoj@11\",\n        \"createdAt\": \"2020-05-30T21:15:12.186Z\",\n        \"updatedAt\": \"2020-05-30T21:15:12.186Z\"\n    },\n    {\n        \"id\": 3,\n        \"fullname\": \"vignesh\",\n        \"email\": \"vigneshwaransasurie6@gmail.com\",\n        \"mobile\": \"9597299278\",\n        \"password\": \"vignesh\",\n        \"createdAt\": \"2020-05-30T21:16:43.813Z\",\n        \"updatedAt\": \"2020-05-30T21:16:43.813Z\"\n    },\n    {\n        \"id\": 4,\n        \"fullname\": \"ganesh\",\n        \"email\": \"ganeshsasurie4@gmail.com\",\n        \"mobile\": \"9597299278\",\n        \"password\": \"ganesh@11\",\n        \"createdAt\": \"2020-05-30T21:18:44.627Z\",\n        \"updatedAt\": \"2020-05-30T21:18:44.627Z\"\n    }\n] \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/userRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Request specific User information",
    "name": "GetUser",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"status\": \"success\",\n\"message\": \"Found User\",\n\"data\": {\n    \"id\": 2,\n    \"fullname\": \"venkat\",\n    \"email\": \"manojkumar11tpr@gmail.com\",\n    \"mobile\": \"7708087463\",\n    \"password\": \"manoj@11\",\n    \"createdAt\": \"2020-05-30T21:15:12.186Z\",\n    \"updatedAt\": \"2020-05-30T21:15:12.186Z\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot find User with the id Number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/userRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Update specific User information",
    "name": "UpdateUser_information",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>fullname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>mobile of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n\"message\": \"User updated\",\n\"data\": {\n    \"fullname\": \"vigneshprabhu\",\n    \"email\": \"vigneshprabhu@gmail.com\",\n    \"mobile\": \"9597299278\",\n    \"password\": \"vp@shine\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find User with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/userRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/sigin",
    "title": "signin User",
    "name": "login_user",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"Found User\",\n \"data\": {\n     \"auth\": true,\n     \"accessToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNTkxMDI1NTAzLCJleHAiOjE1OTExMTE5MDN9.83zVANkAYIAF1QCpQuFq_3p6A33EKdPjIyLOrOFIsMg\"\n }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n   {\n    \"status\": \"error\",\n    \"message\": \"Cannot find User with the email vigneshprabhu@gmaili.com\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/userRoutes.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/store/",
    "title": "add store information",
    "name": "Addstore_information",
    "group": "store",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "noofcategories",
            "description": "<p>noofcategories of the store.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "categoryids",
            "description": "<p>categoryids of the store.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "nooforders",
            "description": "<p>nooforders of the store.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the store.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address of the store.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>mobile of the store.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"status\": \"success\",\n  \"message\": \"Store Added!\",\n  \"data\": {\n      \"id\": 2,\n      \"noofcategories\": 3,\n      \"categoryids\": [\n          1,\n          2,\n          3\n      ],\n      \"nooforders\": 10,\n      \"name\": \"MYDADOO\",\n      \"address\": \"chengalpet\",\n      \"mobile\": \"7708087463\",\n      \"updatedAt\": \"2020-06-01T18:21:09.340Z\",\n      \"createdAt\": \"2020-06-01T18:21:09.340Z\"\n  }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "storeNotFound",
            "description": "<p>The id of the store was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"storeNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/storeRoutes.js",
    "groupTitle": "store"
  },
  {
    "type": "delete",
    "url": "/store/:id",
    "title": "Delete specific store information",
    "name": "Deletestore_information",
    "group": "store",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"message\": \"Store deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "storeNotFound",
            "description": "<p>The id of the store was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n      \"status\": \"error\",\n      \"message\": \"Store with the id 3 cannot be found\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/storeRoutes.js",
    "groupTitle": "store"
  },
  {
    "type": "get",
    "url": "/store/",
    "title": "Request get all store information",
    "name": "GetAllstore",
    "group": "store",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"status\": \"success\",\n  \"message\": \"Stores retrieved\",\n  \"data\": [\n      {\n          \"id\": 1,\n          \"noofcategories\": 22,\n          \"categoryids\": [\n              1,\n              2,\n              3\n          ],\n          \"nooforders\": 10,\n          \"name\": \" MYDADOO\",\n          \"address\": \"chengalpet\",\n          \"mobile\": \"7708087463\",\n          \"createdAt\": \"2020-05-28T13:05:58.619Z\",\n          \"updatedAt\": \"2020-05-28T13:05:58.619Z\"\n      }\n  ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "storeNotFound",
            "description": "<p>The store was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"storeNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/storeRoutes.js",
    "groupTitle": "store"
  },
  {
    "type": "get",
    "url": "/store/:id",
    "title": "Request specific store information",
    "name": "Getstore",
    "group": "store",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>store unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"status\": \"success\",\n  \"message\": \"Found Store\",\n  \"data\": {\n      \"id\": 1,\n      \"noofcategories\": 22,\n      \"categoryids\": [\n          1,\n          2,\n          3\n      ],\n      \"nooforders\": 10,\n      \"name\": \" MYDADOO\",\n      \"address\": \"chengalpet\",\n      \"mobile\": \"7708087463\",\n      \"createdAt\": \"2020-05-28T13:05:58.619Z\",\n      \"updatedAt\": \"2020-05-28T13:05:58.619Z\"\n  }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "storeNotFound",
            "description": "<p>The id of the store was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot find store with the id Number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/storeRoutes.js",
    "groupTitle": "store"
  },
  {
    "type": "put",
    "url": "/store/:id",
    "title": "Update specific store information",
    "name": "Updatestore_information",
    "group": "store",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "noofcategories",
            "description": "<p>noofcategories of the store.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "categoryids",
            "description": "<p>categoryids of the store.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "nooforders",
            "description": "<p>nooforders of the store.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the store.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address of the store.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>mobile of the store.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": \"success\",\n\"message\": \"Store updated\",\n\"data\": {\n    \"noofcategories\": \"3\",\n    \"categoryids\": [\n        \"1\",\n        \"2\",\n        \"3\"\n    ],\n    \"nooforders\": \"10\",\n    \"name\": \"MYDADOO\",\n    \"address\": \"chengalpetttt\",\n    \"mobile\": \"7708087463\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "storeNotFound",
            "description": "<p>The id of the store was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find store with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/storeRoutes.js",
    "groupTitle": "store"
  },
  {
    "type": "post",
    "url": "/subcategory/",
    "title": "add subcategory information",
    "name": "Addsubcategory_information",
    "group": "subcategory",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "categoryid",
            "description": "<p>categoryid of the subcategory.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "subcategoryid",
            "description": "<p>id of the subcategory.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the subcategory.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "noofproducts",
            "description": "<p>noofproducts of the subcategory.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "productids",
            "description": "<p>productids of the subcategory.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgurl",
            "description": "<p>imgurl of the subcategory.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n\"message\": \"SubCategory Added!\",\n\"data\": {\n    \"id\": 10,\n    \"categoryid\": 3,\n    \"subcategoryid\": 4,\n    \"name\": \"gingertea\",\n    \"noofproducts\": 3,\n    \"productids\": [\n        1,\n        2,\n        3\n    ],\n    \"imgurl\": \"https://5.imimg.com/data5/QV/TI/MY-64564025/ginger-tea-500x500.jpg\",\n    \"updatedAt\": \"2020-06-01T17:26:36.680Z\",\n    \"createdAt\": \"2020-06-01T17:26:36.680Z\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "subcategoryNotFound",
            "description": "<p>The id of the subcategory was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"subcategoryNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/subcategoryRoutes.js",
    "groupTitle": "subcategory"
  },
  {
    "type": "delete",
    "url": "/subcategory/:id",
    "title": "Delete specific subcategory information",
    "name": "Deletesubcategory_information",
    "group": "subcategory",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n  \"message\": \"subcategory deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "subcategoryNotFound",
            "description": "<p>The id of the subcategory was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find subcategory with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/subcategoryRoutes.js",
    "groupTitle": "subcategory"
  },
  {
    "type": "get",
    "url": "/subcategory/",
    "title": "Request get all subcategory information",
    "name": "GetAllsubcategory",
    "group": "subcategory",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n\"status\": \"success\",\n  \"message\": \"SubCategorys retrieved\",\n  \"data\": [\n      {\n          \"id\": 1,\n          \"categoryid\": 1,\n          \"subcategoryid\": 1,\n          \"name\": \"fresh vegetables\",\n          \"noofproducts\": 23,\n          \"productids\": [\n              1,\n              2,\n              3\n          ],\n          \"imgurl\": \"https://cdn.britannica.com/s:800x450,c:crop/63/186963-138-AEE87658/vegetables.jpg\",\n          \"createdAt\": \"2020-05-29T21:31:12.480Z\",\n          \"updatedAt\": \"2020-05-29T21:31:12.480Z\"\n      }\n  ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "subcategoryNotFound",
            "description": "<p>The subcategory was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"subcategoryNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/subcategoryRoutes.js",
    "groupTitle": "subcategory"
  },
  {
    "type": "get",
    "url": "/subcategory/:id",
    "title": "Request specific subcategory information",
    "name": "Getsubcategory",
    "group": "subcategory",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>category unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": \"success\",\n\"message\": \"Found SubCategory\",\n\"data\": [\n    {\n        \"id\": 1,\n        \"categoryid\": 1,\n        \"subcategoryid\": 1,\n        \"name\": \"fresh vegetables\",\n        \"noofproducts\": 23,\n        \"productids\": [\n            1,\n            2,\n            3\n        ],\n        \"imgurl\": \"https://cdn.britannica.com/s:800x450,c:crop/63/186963-138-AEE87658/vegetables.jpg\",\n        \"createdAt\": \"2020-05-29T21:31:12.480Z\",\n        \"updatedAt\": \"2020-05-29T21:31:12.480Z\"\n    },\n    {\n        \"id\": 2,\n        \"categoryid\": 1,\n        \"subcategoryid\": 2,\n        \"name\": \"Root vegetables\",\n        \"noofproducts\": 23,\n        \"productids\": [\n            1,\n            2,\n            3\n        ],\n        \"imgurl\": \"https://www.tatacliq.com/que/wp-content/uploads/2020/04/shutterstock_1554474872-1.jpg\",\n        \"createdAt\": \"2020-05-29T21:32:10.131Z\",\n        \"updatedAt\": \"2020-05-29T21:32:10.131Z\"\n    }\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "subcategoryNotFound",
            "description": "<p>The id of the subcategory was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot find subcategory with the id Number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/subcategoryRoutes.js",
    "groupTitle": "subcategory"
  },
  {
    "type": "put",
    "url": "/subcategory/:id",
    "title": "Update specific subcategory information",
    "name": "Updatesubcategory_information",
    "group": "subcategory",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Users unique api-token.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "categoryid",
            "description": "<p>categoryid of the subcategory.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "subcategoryid",
            "description": "<p>id of the subcategory.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the subcategory.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "noofproducts",
            "description": "<p>noofproducts of the subcategory.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "productids",
            "description": "<p>productids of the subcategory.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgurl",
            "description": "<p>imgurl of the subcategory.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n\"message\": \"SubCategory updated\",\n\"data\": {\n    \"categoryid\": \"3\",\n    \"subcategoryid\": \"4\",\n    \"name\": \"Gingertea\",\n    \"noofproducts\": \"3\",\n    \"productids\": [\n        \"1\",\n        \"2\",\n        \"3\"\n    ],\n    \"imgurl\": \"https://5.imimg.com/data5/QV/TI/MY-64564025/ginger-tea-500x500.jpg\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "subcategoryNotFound",
            "description": "<p>The id of the subcategory was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n \"status\": \"error\",\n  \"message\": \"Cannot find subcategory with the id: 2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/subcategoryRoutes.js",
    "groupTitle": "subcategory"
  }
] });
