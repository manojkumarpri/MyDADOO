define({ "api": [
  {
    "type": "post",
    "url": "/user/",
    "title": "add User information",
    "name": "AddUser_information",
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
    "url": "/address/",
    "title": "add address information",
    "name": "Addaddress_information",
    "group": "address",
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
            "field": "userid",
            "description": "<p>userid of the address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receivername",
            "description": "<p>receivername of the address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receivermobilenumber",
            "description": "<p>receivermobilenumber of the address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address of the address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>district of the address.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "pincode",
            "description": "<p>pincode of the address.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n\"message\": \"Address Added!\",\n\"data\": {\n    \"id\": 2,\n    \"userid\": 2,\n    \"receivername\": \"venkat\",\n    \"receivermobilenumber\": \"7708087463\",\n    \"address\": \"tiruppur\",\n    \"district\": \"tiruppur\",\n    \"pincode\": 641666,\n    \"updatedAt\": \"2020-06-01T21:32:50.114Z\",\n    \"createdAt\": \"2020-06-01T21:32:50.114Z\"\n}\n}",
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
            "field": "addressNotFound",
            "description": "<p>The id of the address was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"addressNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/addressRoutes.js",
    "groupTitle": "address"
  },
  {
    "type": "delete",
    "url": "/address/:id",
    "title": "Delete specific address information",
    "name": "Deleteaddress_information",
    "group": "address",
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
          "content": "   HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"message\": \"address deleted\"\n}",
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
            "field": "addressNotFound",
            "description": "<p>The id of the address was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n      \"status\": \"error\",\n      \"message\": \"address with the id 3 cannot be found\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/addressRoutes.js",
    "groupTitle": "address"
  },
  {
    "type": "get",
    "url": "/address/",
    "title": "Request get all address information",
    "name": "GetAlladdress",
    "group": "address",
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
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"Addresss retrieved\",\n \"data\": [\n     {\n         \"id\": 1,\n         \"userid\": 1,\n         \"receivername\": \"manoj\",\n         \"receivermobilenumber\": \"7708087463\",\n         \"address\": \"chengalpet doorno 5\",\n         \"district\": \"chengalpet\",\n         \"pincode\": 60038,\n         \"createdAt\": \"2020-05-28T14:05:36.981Z\",\n         \"updatedAt\": \"2020-05-28T14:05:36.981Z\"\n     }\n ]\n }",
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
            "field": "addressNotFound",
            "description": "<p>The address was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"addressNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/addressRoutes.js",
    "groupTitle": "address"
  },
  {
    "type": "get",
    "url": "/address/:id",
    "title": "Request specific address information",
    "name": "Getaddress",
    "group": "address",
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
            "description": "<p>address unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\n\"status\": \"success\",\n\"message\": \"Found Address\",\n\"data\": {\n    \"id\": 1,\n    \"userid\": 1,\n    \"receivername\": \"manoj\",\n    \"receivermobilenumber\": \"7708087463\",\n    \"address\": \"chengalpet doorno 5\",\n    \"district\": \"chengalpet\",\n    \"pincode\": 60038,\n    \"createdAt\": \"2020-05-28T14:05:36.981Z\",\n    \"updatedAt\": \"2020-05-28T14:05:36.981Z\"\n}\n}",
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
            "field": "addressNotFound",
            "description": "<p>The id of the address was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot find address with the id Number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/addressRoutes.js",
    "groupTitle": "address"
  },
  {
    "type": "put",
    "url": "/address/:id",
    "title": "Update specific address information",
    "name": "Updateaddress_information",
    "group": "address",
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
            "field": "userid",
            "description": "<p>userid of the address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receivername",
            "description": "<p>receivername of the address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "receivermobilenumber",
            "description": "<p>receivermobilenumber of the address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address of the address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>district of the address.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "pincode",
            "description": "<p>pincode of the address.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n\"message\": \"Address updated\",\n\"data\": {\n    \"userid\": \"2\",\n    \"receivername\": \"Venkat\",\n    \"receivermobilenumber\": \"7708087463\",\n    \"address\": \"tiruppur\",\n    \"district\": \"tiruppur\",\n    \"pincode\": \"641666\"\n}\n}",
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
            "field": "addressNotFound",
            "description": "<p>The id of the address was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n     \"status\": \"error\",\n     \"message\": \"Cannot find  address the id: 5\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/addressRoutes.js",
    "groupTitle": "address"
  },
  {
    "type": "post",
    "url": "/advertisement/",
    "title": "add advertisement information",
    "name": "Addadvertisement_information",
    "group": "advertisement",
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
            "field": "url",
            "description": "<p>url of the advertisement.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "imageurl",
            "description": "<p>imageurl of the advertisement.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expirytime",
            "description": "<p>expirytime of the advertisement.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n\"message\": \"Advertisement Added!\",\n\"data\": {\n    \"id\": 2,\n    \"url\": \"https://images-na.ssl-images-amazon.com/images/I/41zbSznfs6L._SY445_.jpg\",\n    \"imageurl\": [\n        \"https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg\",\n        \"https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg\"\n    ],\n    \"expirytime\": \"3 hours\",\n    \"updatedAt\": \"2020-06-01T21:02:24.437Z\",\n    \"createdAt\": \"2020-06-01T21:02:24.437Z\"\n}\n}",
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
            "field": "advertisementNotFound",
            "description": "<p>The id of the advertisement was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"advertisementNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/advertisementRoutes.js",
    "groupTitle": "advertisement"
  },
  {
    "type": "delete",
    "url": "/advertisement/:id",
    "title": "Delete specific advertisement information",
    "name": "Deleteadvertisement_information",
    "group": "advertisement",
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
          "content": "   HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"message\": \"advertisement deleted\"\n}",
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
            "field": "advertisementNotFound",
            "description": "<p>The id of the advertisement was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n      \"status\": \"error\",\n      \"message\": \"advertisement with the id 3 cannot be found\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/advertisementRoutes.js",
    "groupTitle": "advertisement"
  },
  {
    "type": "get",
    "url": "/advertisement/",
    "title": "Request get all advertisement information",
    "name": "GetAlladvertisement",
    "group": "advertisement",
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
          "content": "HTTP/1.1 200 OK\n{\n\"status\": \"success\",\n\"message\": \"Advertisements retrieved\",\n\"data\": [\n    {\n        \"id\": 1,\n        \"url\": \"https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg\",\n        \"imageurl\": [\n            \"https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg\"\n        ],\n        \"expirytime\": \"2 hours\",\n        \"createdAt\": \"2020-05-28T13:56:00.495Z\",\n        \"updatedAt\": \"2020-05-28T13:56:00.495Z\"\n    }\n]\n}",
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
            "field": "advertisementNotFound",
            "description": "<p>The advertisement was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"advertisementNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/advertisementRoutes.js",
    "groupTitle": "advertisement"
  },
  {
    "type": "get",
    "url": "/advertisement/:id",
    "title": "Request specific advertisement information",
    "name": "Getadvertisement",
    "group": "advertisement",
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
            "description": "<p>advertisement unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n\"message\": \"Found Advertisement\",\n\"data\": {\n    \"id\": 2,\n    \"url\": \"https://images-na.ssl-images-amazon.com/images/I/41zbSznfs6L._SY445_.jpg\",\n    \"imageurl\": [\n        \"\\\"https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg\\\"\",\n        \"\\\"https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg\\\"\"\n    ],\n    \"expirytime\": \"3 hours\",\n    \"createdAt\": \"2020-06-01T21:02:24.437Z\",\n    \"updatedAt\": \"2020-06-01T21:02:24.437Z\"\n}\n}",
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
            "field": "advertisementNotFound",
            "description": "<p>The id of the advertisement was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot find advertisement with the id Number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/advertisementRoutes.js",
    "groupTitle": "advertisement"
  },
  {
    "type": "put",
    "url": "/advertisement/:id",
    "title": "Update specific advertisement information",
    "name": "Updateadvertisement_information",
    "group": "advertisement",
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
            "field": "url",
            "description": "<p>url of the advertisement.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "imageurl",
            "description": "<p>imageurl of the advertisement.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expirytime",
            "description": "<p>expirytime of the advertisement.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n\"message\": \"Found Advertisement\",\n\"data\": {\n    \"id\": 2,\n    \"url\": \"https://images-na.ssl-images-amazon.com/images/I/41zbSznfs6L._SY445_.jpg\",\n    \"imageurl\": [\n        \"https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg\",\n        \"https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg\"\n    ],\n    \"expirytime\": \"3 hours\",\n    \"createdAt\": \"2020-06-01T21:02:24.437Z\",\n    \"updatedAt\": \"2020-06-01T21:08:49.831Z\"\n}\n}",
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
            "field": "advertisementNotFound",
            "description": "<p>The id of the advertisement was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n     \"status\": \"error\",\n     \"message\": \"Cannot find  advertisement the id: 5\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/advertisementRoutes.js",
    "groupTitle": "advertisement"
  },
  {
    "type": "post",
    "url": "/cart/",
    "title": "add cart information",
    "name": "Addcart_information",
    "group": "cart",
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
            "field": "userid",
            "description": "<p>userid of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "productids",
            "description": "<p>productids of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "productnames",
            "description": "<p>productnames of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "productcounts",
            "description": "<p>productcounts of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "productprice",
            "description": "<p>productprice of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "totalamount",
            "description": "<p>totalamount of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "productunits",
            "description": "<p>productunits of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "productsize",
            "description": "<p>productsize of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "imageurl",
            "description": "<p>imageurl of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "categoryids",
            "description": "<p>categoryids of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "DATE",
            "optional": false,
            "field": "date",
            "description": "<p>date of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>time of the cart.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"status\": \"success\",\n\"message\": \"Cart Added!\",\n\"data\": {\n    \"id\": 2,\n    \"userid\": 2,\n    \"productids\": [\n        1,\n        2,\n        3\n    ],\n    \"productnames\": [\n        \"brinjal\",\n        \"tomato\",\n        \"betruit\"\n    ],\n    \"productcounts\": [\n        2,\n        1,\n        3\n    ],\n    \"productprice\": [\n        38,\n        65,\n        75\n    ],\n    \"totalamount\": 1233,\n    \"productunits\": [\n        \"KG\",\n        \"KG\",\n        \"KG\"\n    ],\n    \"productsize\": [\n        \"500\",\n        \"4\",\n        \"3\"\n    ],\n    \"imageurl\": [\n        \"https://i.ndtvimg.com/mt/cooks/2014-11/aubergine.jpg\",\n        \"https://i.ndtvimg.com/mt/cooks/2014-11/aubergine.jpg\",\n        \"https://i.ndtvimg.com/mt/cooks/2014-11/aubergine.jpg\"\n    ],\n    \"categoryids\": [\n        1,\n        2,\n        3\n    ],\n    \"date\": \"2020-05-28T13:41:27.910Z\",\n    \"time\": \"1:30\",\n    \"updatedAt\": \"2020-06-01T20:47:34.699Z\",\n    \"createdAt\": \"2020-06-01T20:47:34.699Z\"\n}\n}",
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
            "field": "cartNotFound",
            "description": "<p>The id of the cart was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"cartNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/cartRoutes.js",
    "groupTitle": "cart"
  },
  {
    "type": "delete",
    "url": "/cart/:id",
    "title": "Delete specific cart information",
    "name": "Deletecart_information",
    "group": "cart",
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
          "content": "   HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"message\": \"cart deleted\"\n}",
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
            "field": "cartNotFound",
            "description": "<p>The id of the cart was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n      \"status\": \"error\",\n      \"message\": \"cart with the id 3 cannot be found\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/cartRoutes.js",
    "groupTitle": "cart"
  },
  {
    "type": "get",
    "url": "/cart/",
    "title": "Request get all cart information",
    "name": "GetAllcart",
    "group": "cart",
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
          "content": "  HTTP/1.1 200 OK\n  {\n\"status\": \"success\",\n  \"message\": \"Carts retrieved\",\n  \"data\": [\n      {\n          \"id\": 1,\n          \"userid\": 1,\n          \"productids\": [\n              1,\n              2,\n              3\n          ],\n          \"productnames\": [\n              \"brinjal\",\n              \"tomato\",\n              \"beetruit\"\n          ],\n          \"productcounts\": [\n              2,\n              2,\n              6\n          ],\n          \"productprice\": [\n              55,\n              89,\n              100\n          ],\n          \"totalamount\": 1233,\n          \"productunits\": [\n              \"KG\",\n              \"KG\",\n              \"KG\"\n          ],\n          \"productsize\": [\n              \"500\",\n              \"3\",\n              \"5\"\n          ],\n          \"imageurl\": [\n              \"https://i.ndtvimg.com/mt/cooks/2014-11/aubergine.jpg\",\n              \"https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg?w=1155&h=1528\",\n              \"https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg\"\n          ],\n          \"categoryids\": [\n              1,\n              2,\n              3\n          ],\n          \"date\": \"2020-05-28T13:41:27.910Z\",\n          \"time\": \"2:30am\",\n          \"createdAt\": \"2020-05-28T13:51:43.662Z\",\n          \"updatedAt\": \"2020-05-28T13:51:43.662Z\"\n      }\n  ]\n  }",
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
            "field": "cartNotFound",
            "description": "<p>The cart was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"cartNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/cartRoutes.js",
    "groupTitle": "cart"
  },
  {
    "type": "get",
    "url": "/cart/:id",
    "title": "Request specific cart information",
    "name": "Getcart",
    "group": "cart",
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
            "description": "<p>cart unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n\"message\": \"Found Cart\",\n\"data\": {\n    \"id\": 1,\n    \"userid\": 1,\n    \"productids\": [\n        1,\n        2,\n        3\n    ],\n    \"productnames\": [\n        \"brinjal\",\n        \"tomato\",\n        \"beetruit\"\n    ],\n    \"productcounts\": [\n        2,\n        2,\n        6\n    ],\n    \"productprice\": [\n        55,\n        89,\n        100\n    ],\n    \"totalamount\": 1233,\n    \"productunits\": [\n        \"KG\",\n        \"KG\",\n        \"KG\"\n    ],\n    \"productsize\": [\n        \"500\",\n        \"3\",\n        \"5\"\n    ],\n    \"imageurl\": [\n        \"https://i.ndtvimg.com/mt/cooks/2014-11/aubergine.jpg\",\n        \"https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg?w=1155&h=1528\",\n        \"https://i.ndtvimg.com/mt/cooks/2014-11/lemon.jpg\"\n    ],\n    \"categoryids\": [\n        1,\n        2,\n        3\n    ],\n    \"date\": \"2020-05-28T13:41:27.910Z\",\n    \"time\": \"2:30am\",\n    \"createdAt\": \"2020-05-28T13:51:43.662Z\",\n    \"updatedAt\": \"2020-05-28T13:51:43.662Z\"\n}\n}",
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
            "field": "cartNotFound",
            "description": "<p>The id of the cart was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot find cart with the id Number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/cartRoutes.js",
    "groupTitle": "cart"
  },
  {
    "type": "put",
    "url": "/cart/:id",
    "title": "Update specific cart information",
    "name": "Updatecart_information",
    "group": "cart",
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
            "field": "userid",
            "description": "<p>userid of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "productids",
            "description": "<p>productids of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "productnames",
            "description": "<p>productnames of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "productcounts",
            "description": "<p>productcounts of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "productprice",
            "description": "<p>productprice of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "totalamount",
            "description": "<p>totalamount of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "productunits",
            "description": "<p>productunits of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "productsize",
            "description": "<p>productsize of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "imageurl",
            "description": "<p>imageurl of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "categoryids",
            "description": "<p>categoryids of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "DATE",
            "optional": false,
            "field": "date",
            "description": "<p>date of the cart.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>time of the cart.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": \"success\",\n\"message\": \"Cart updated\",\n\"data\": {\n    \"userid\": \"2\",\n    \"productids\": [\n        \"1\",\n        \"2\",\n        \"3\"\n    ],\n    \"productnames\": [\n        \"brinjal\",\n        \"tomatoo\",\n        \"betruit\"\n    ],\n    \"productcounts\": [\n        \"2\",\n        \"1\",\n        \"3\"\n    ],\n    \"productprice\": [\n        \"38\",\n        \"65\",\n        \"75\"\n    ],\n    \"totalamount\": \"1233\",\n    \"productunits\": [\n        \"KG\",\n        \"KG\",\n        \"KG\"\n    ],\n    \"productsize\": [\n        \"500\",\n        \"4\",\n        \"3\"\n    ],\n    \"imageurl\": [\n        \"https://i.ndtvimg.com/mt/cooks/2014-11/aubergine.jpg\",\n        \"https://i.ndtvimg.com/mt/cooks/2014-11/aubergine.jpg\",\n        \"https://i.ndtvimg.com/mt/cooks/2014-11/aubergine.jpg\"\n    ],\n    \"categoryids\": [\n        \"1\",\n        \"2\",\n        \"3\"\n    ],\n    \"date\": \"2020-05-28T13:41:27.910Z\",\n    \"time\": \"1:30\"\n}\n}",
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
            "field": "cartNotFound",
            "description": "<p>The id of the cart was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n     \"status\": \"error\",\n     \"message\": \"Cannot find cart with the id: 5\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/cartRoutes.js",
    "groupTitle": "cart"
  },
  {
    "type": "post",
    "url": "/category/",
    "title": "add category information",
    "name": "Addcategory_information",
    "group": "category",
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
            "description": "<p>categoryid of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "noofproducts",
            "description": "<p>noofproducts of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "productids",
            "description": "<p>productids of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgurl",
            "description": "<p>imgurl of the category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n\"message\": \"Category Added!\",\n\"data\": {\n    \"id\": 4,\n    \"categoryid\": 4,\n    \"name\": \"cooldrinks\",\n    \"noofproducts\": 5,\n    \"productids\": [\n        1,\n        2,\n        3\n    ],\n    \"imgurl\": \"https://images-na.ssl-images-amazon.com/images/I/41zbSznfs6L._SY445_.jpg\",\n    \"updatedAt\": \"2020-06-01T20:18:18.839Z\",\n    \"createdAt\": \"2020-06-01T20:18:18.839Z\"\n}\n}",
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
            "field": "categoryNotFound",
            "description": "<p>The id of the category was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"categoryNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/categoryRoutes.js",
    "groupTitle": "category"
  },
  {
    "type": "delete",
    "url": "/category/:id",
    "title": "Delete specific category information",
    "name": "Deletecategory_information",
    "group": "category",
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
          "content": "   HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"message\": \"category deleted\"\n}",
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
            "field": "categoryNotFound",
            "description": "<p>The id of the category was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n      \"status\": \"error\",\n      \"message\": \"category with the id 3 cannot be found\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/categoryRoutes.js",
    "groupTitle": "category"
  },
  {
    "type": "get",
    "url": "/category/",
    "title": "Request get all category information",
    "name": "GetAllcategory",
    "group": "category",
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
          "content": "  HTTP/1.1 200 OK\n  {\n\"status\": \"success\",\n  \"message\": \"Categorys retrieved\",\n  \"data\": [\n      {\n          \"id\": 1,\n          \"categoryid\": 1,\n          \"name\": \"fresh vegetables\",\n          \"noofproducts\": 23,\n          \"productids\": [\n              1,\n              2,\n              3\n          ],\n          \"imgurl\": \"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ116GEbzM9mLD8xHjmNFqV8u8mvQxm9SbWkZt8K-c7pW6mAHaL&usqp=CAU\",\n          \"createdAt\": \"2020-05-29T19:26:02.950Z\",\n          \"updatedAt\": \"2020-05-29T19:26:02.950Z\"\n      },\n      {\n          \"id\": 2,\n          \"categoryid\": 2,\n          \"name\": \"milk\",\n          \"noofproducts\": 23,\n          \"productids\": [\n              1,\n              2,\n              3\n          ],\n          \"imgurl\": \"https://www.motherjones.com/wp-content/uploads/milka2master.jpg?w=990\",\n          \"createdAt\": \"2020-05-29T19:29:01.416Z\",\n          \"updatedAt\": \"2020-05-29T19:29:01.416Z\"\n      },\n      {\n          \"id\": 3,\n          \"categoryid\": 3,\n          \"name\": \"tea\",\n          \"noofproducts\": 23,\n          \"productids\": [\n              1,\n              2,\n              3\n          ],\n          \"imgurl\": \"https://www.twinings.co.uk/app_/responsive/TwiningsUKI/media/content/About-Tea/shutterstock_126275183.jpg?w=1260\",\n          \"createdAt\": \"2020-05-29T19:30:27.039Z\",\n          \"updatedAt\": \"2020-05-29T19:30:27.039Z\"\n      }\n  ]\n  }",
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
            "field": "categoryNotFound",
            "description": "<p>The category was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"categoryNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/categoryRoutes.js",
    "groupTitle": "category"
  },
  {
    "type": "get",
    "url": "/category/:id",
    "title": "Request specific category information",
    "name": "Getcategory",
    "group": "category",
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
          "content": "HTTP/1.1 200 OK\n{\n \"status\": \"success\",\n\"message\": \"Found Category\",\n\"data\": {\n    \"id\": 4,\n    \"categoryid\": 4,\n    \"name\": \"cooldrinks\",\n    \"noofproducts\": 5,\n    \"productids\": [\n        1,\n        2,\n        3\n    ],\n    \"imgurl\": \"https://images-na.ssl-images-amazon.com/images/I/41zbSznfs6L._SY445_.jpg\",\n    \"createdAt\": \"2020-06-01T20:18:18.839Z\",\n    \"updatedAt\": \"2020-06-01T20:18:18.839Z\"\n}\n}",
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
            "field": "categoryNotFound",
            "description": "<p>The id of the category was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot find category with the id Number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/categoryRoutes.js",
    "groupTitle": "category"
  },
  {
    "type": "put",
    "url": "/category/:id",
    "title": "Update specific category information",
    "name": "Updatecategory_information",
    "group": "category",
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
            "description": "<p>categoryid of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "noofproducts",
            "description": "<p>noofproducts of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "productids",
            "description": "<p>productids of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgurl",
            "description": "<p>imgurl of the category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": \"success\",\n\"message\": \"Category updated\",\n\"data\": {\n    \"categoryid\": \"4\",\n    \"name\": \"Cooldrinks\",\n    \"noofproducts\": \"5\",\n    \"productids\": [\n        \"1\",\n        \"2\",\n        \"3\"\n    ],\n    \"imgurl\": \"https://images-na.ssl-images-amazon.com/images/I/41zbSznfs6L._SY445_.jpg\"\n}\n}",
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
            "field": "categoryNotFound",
            "description": "<p>The id of the category was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n     \"status\": \"error\",\n     \"message\": \"Cannot find category with the id: 5\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/categoryRoutes.js",
    "groupTitle": "category"
  },
  {
    "type": "post",
    "url": "/order/",
    "title": "add order information",
    "name": "Addorder_information",
    "group": "order",
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
            "field": "orderid",
            "description": "<p>orderid of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "DATE",
            "optional": false,
            "field": "orderDate",
            "description": "<p>orderDate of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>time of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "orderproductids",
            "description": "<p>orderproductids of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "orderproductnames",
            "description": "<p>orderproductnames of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "orderproductunit",
            "description": "<p>orderproductunit of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "orderproductsize",
            "description": "<p>orderproductsize of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "productprice",
            "description": "<p>productprice of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "totalamount",
            "description": "<p>totalamount of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "orderproductcount",
            "description": "<p>orderproductcount of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "userid",
            "description": "<p>userid of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "invoicenumber",
            "description": "<p>invoicenumber of the product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n\"message\": \"Order Added!\",\n\"data\": {\n    \"id\": 2,\n    \"orderid\": \"id02\",\n    \"orderDate\": \"2020-05-28T13:18:06.826Z\",\n    \"time\": \"1:30\",\n    \"orderproductids\": [\n        1,\n        2,\n        3\n    ],\n    \"orderproductnames\": [\n        \"carrot\",\n        \"brinjal\",\n        \"betruit\"\n    ],\n    \"orderproductunit\": [\n        \"KG\",\n        \"KG\",\n        \"KG\"\n    ],\n    \"orderproductsize\": [\n        \"1\",\n        \"3\",\n        \"5\"\n    ],\n    \"productprice\": [\n        45,\n        65,\n        75\n    ],\n    \"totalamount\": 2333,\n    \"orderproductcount\": [\n        2,\n        3,\n        5\n    ],\n    \"userid\": 1,\n    \"invoicenumber\": \"INTB3443333\",\n    \"updatedAt\": \"2020-06-01T19:33:40.435Z\",\n    \"createdAt\": \"2020-06-01T19:33:40.435Z\"\n}\n}",
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
            "field": "orderNotFound",
            "description": "<p>The id of the order was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"orderNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/orderRoutes.js",
    "groupTitle": "order"
  },
  {
    "type": "delete",
    "url": "/order/:id",
    "title": "Delete specific order information",
    "name": "Deleteorder_information",
    "group": "order",
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
          "content": "   HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"message\": \"order deleted\"\n}",
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
            "field": "orderNotFound",
            "description": "<p>The id of the order was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n      \"status\": \"error\",\n      \"message\": \"order with the id 3 cannot be found\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/orderRoutes.js",
    "groupTitle": "order"
  },
  {
    "type": "get",
    "url": "/order/",
    "title": "Request get all order information",
    "name": "GetAllorder",
    "group": "order",
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
          "content": "HTTP/1.1 200 OK\n{\n\"status\": \"success\",\n\"message\": \"Orders retrieved\",\n\"data\": [\n    {\n        \"id\": 1,\n        \"orderid\": \"id01\",\n        \"orderDate\": \"2020-05-28T13:18:06.826Z\",\n        \"time\": \"2:30am\",\n        \"orderproductids\": [\n            1,\n            2,\n            3\n        ],\n        \"orderproductnames\": [\n            \"brinjal\",\n            \"betruit\",\n            \"onion\"\n        ],\n        \"orderproductunit\": [\n            \"KG\",\n            \"KG\",\n            \"KG\"\n        ],\n        \"orderproductsize\": [\n            \"500\",\n            \"1\",\n            \"2\"\n        ],\n        \"productprice\": [\n            45,\n            50,\n            75\n        ],\n        \"totalamount\": 1200,\n        \"orderproductcount\": [\n            2,\n            4,\n            6\n        ],\n        \"userid\": 1,\n        \"invoicenumber\": \"INTB3443333\",\n        \"createdAt\": \"2020-05-28T13:36:57.578Z\",\n        \"updatedAt\": \"2020-05-28T13:36:57.578Z\"\n    }\n]\n}",
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
            "field": "orderNotFound",
            "description": "<p>The order was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"orderNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/orderRoutes.js",
    "groupTitle": "order"
  },
  {
    "type": "get",
    "url": "/order/:id",
    "title": "Request specific order information",
    "name": "Getorder",
    "group": "order",
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
            "description": "<p>order unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"status\": \"success\",\n\"message\": \"Found Order\",\n\"data\": {\n    \"id\": 2,\n    \"orderid\": \"id02\",\n    \"orderDate\": \"2020-05-28T13:18:06.826Z\",\n    \"time\": \"1:30\",\n    \"orderproductids\": [\n        1,\n        2,\n        3\n    ],\n    \"orderproductnames\": [\n        \"carrot\",\n        \"brinjal\",\n        \"betruit\"\n    ],\n    \"orderproductunit\": [\n        \"KG\",\n        \"KG\",\n        \"KG\"\n    ],\n    \"orderproductsize\": [\n        \"1\",\n        \"3\",\n        \"5\"\n    ],\n    \"productprice\": [\n        45,\n        65,\n        75\n    ],\n    \"totalamount\": 2333,\n    \"orderproductcount\": [\n        2,\n        3,\n        5\n    ],\n    \"userid\": 1,\n    \"invoicenumber\": \"INTB3443333\",\n    \"createdAt\": \"2020-06-01T19:33:40.435Z\",\n    \"updatedAt\": \"2020-06-01T19:33:40.435Z\"\n}\n}",
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
            "field": "orderNotFound",
            "description": "<p>The id of the order was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot find order with the id Number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/orderRoutes.js",
    "groupTitle": "order"
  },
  {
    "type": "put",
    "url": "/order/:id",
    "title": "Update specific order information",
    "name": "Updateorder_information",
    "group": "order",
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
            "field": "orderid",
            "description": "<p>orderid of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "DATE",
            "optional": false,
            "field": "orderDate",
            "description": "<p>orderDate of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>time of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "orderproductids",
            "description": "<p>orderproductids of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "orderproductnames",
            "description": "<p>orderproductnames of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "orderproductunit",
            "description": "<p>orderproductunit of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "orderproductsize",
            "description": "<p>orderproductsize of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "productprice",
            "description": "<p>productprice of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "totalamount",
            "description": "<p>totalamount of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "orderproductcount",
            "description": "<p>orderproductcount of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "userid",
            "description": "<p>userid of the order.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "invoicenumber",
            "description": "<p>invoicenumber of the product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"success\",\n\"message\": \"Order updated\",\n\"data\": {\n    \"orderid\": \"id02\",\n    \"orderDate\": \"2020-05-28T13:18:06.826Z\",\n    \"time\": \"1:30\",\n    \"orderproductids\": [\n        \"1\",\n        \"2\",\n        \"3\"\n    ],\n    \"orderproductnames\": [\n        \"carrot\",\n        \"brinjal\",\n        \"betruit\"\n    ],\n    \"orderproductunit\": [\n        \"KG\",\n        \"KG\",\n        \"KG\"\n    ],\n    \"orderproductsize\": [\n        \"1\",\n        \"3\",\n        \"5\"\n    ],\n    \"productprice\": [\n        \"45\",\n        \"65\",\n        \"75\"\n    ],\n    \"totalamount\": \"2333\",\n    \"orderproductcount\": [\n        \"2\",\n        \"3\",\n        \"5\"\n    ],\n    \"userid\": \"1\",\n    \"invoicenumber\": \"INTB34433344\"\n}\n}",
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
            "field": "orderNotFound",
            "description": "<p>The id of the order was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n     \"status\": \"error\",\n     \"message\": \"Cannot find order with the id: 5\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/orderRoutes.js",
    "groupTitle": "order"
  },
  {
    "type": "post",
    "url": "/product/",
    "title": "add product information",
    "name": "Addproduct_information",
    "group": "product",
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
            "field": "productid",
            "description": "<p>productid of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "categoryid",
            "description": "<p>categoryid of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>size of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>unit of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>image of the product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"Product Added!\",\n \"data\": {\n     \"id\": 3,\n     \"productid\": 3,\n     \"name\": \"tomato\",\n     \"categoryid\": 1,\n     \"price\": 65,\n     \"size\": \"3\",\n     \"unit\": \"KG\",\n     \"description\": \"The fruit is a fleshy berry, usually of red colour, although there are also pink or yellow tomatoes.\",\n     \"image\": \"https://www.greenmylife.in/wp-content/uploads/2016/07/GMLHLSD127_New.jpg\",\n     \"updatedAt\": \"2020-06-01T19:09:22.129Z\",\n     \"createdAt\": \"2020-06-01T19:09:22.129Z\"\n }\n }",
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
            "field": "productNotFound",
            "description": "<p>The id of the product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"productNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/productRoutes.js",
    "groupTitle": "product"
  },
  {
    "type": "delete",
    "url": "/product/:id",
    "title": "Delete specific product information",
    "name": "Deleteproduct_information",
    "group": "product",
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
          "content": "   HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"message\": \"product deleted\"\n}",
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
            "field": "productNotFound",
            "description": "<p>The id of the product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n      \"status\": \"error\",\n      \"message\": \"product with the id 3 cannot be found\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/productRoutes.js",
    "groupTitle": "product"
  },
  {
    "type": "get",
    "url": "/product/",
    "title": "Request get all product information",
    "name": "GetAllproduct",
    "group": "product",
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
          "content": " HTTP/1.1 200 OK\n {\n\"status\": \"success\",\n \"message\": \"Products retrieved\",\n \"data\": [\n     {\n         \"id\": 1,\n         \"productid\": 1,\n         \"name\": \"Brinjal\",\n         \"categoryid\": 1,\n         \"price\": 45,\n         \"size\": \"500\",\n         \"unit\": \"KG\",\n         \"description\": \"good organic product\",\n         \"image\": \"https://i.ndtvimg.com/mt/cooks/2014-11/aubergine.jpg\",\n         \"createdAt\": \"2020-05-28T13:18:06.826Z\",\n         \"updatedAt\": \"2020-05-28T13:18:06.826Z\"\n     },\n     {\n         \"id\": 2,\n         \"productid\": 2,\n         \"name\": \"carrot\",\n         \"categoryid\": 2,\n         \"price\": 65,\n         \"size\": \"1\",\n         \"unit\": \"KG\",\n         \"description\": \"The carrot (Daucus carota) is a root vegetable often claimed to be the perfect health food. It is crunchy, tasty, and highly nutritious\",\n         \"image\": \"https://femina.wwmindia.com/content/2019/dec/nutrition-benefits-of-carrots.jpg\",\n         \"createdAt\": \"2020-05-30T13:50:45.548Z\",\n         \"updatedAt\": \"2020-05-30T13:50:45.548Z\"\n     }\n ]\n }",
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
            "field": "productNotFound",
            "description": "<p>The product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"productNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/productRoutes.js",
    "groupTitle": "product"
  },
  {
    "type": "get",
    "url": "/product/:id",
    "title": "Request specific product information",
    "name": "Getproduct",
    "group": "product",
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
            "description": "<p>product unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"status\": \"success\",\n\"message\": \"Found Product\",\n\"data\": {\n    \"id\": 1,\n    \"productid\": 1,\n    \"name\": \"Brinjal\",\n    \"categoryid\": 1,\n    \"price\": 45,\n    \"size\": \"500\",\n    \"unit\": \"KG\",\n    \"description\": \"good organic product\",\n    \"image\": \"https://i.ndtvimg.com/mt/cooks/2014-11/aubergine.jpg\",\n    \"createdAt\": \"2020-05-28T13:18:06.826Z\",\n    \"updatedAt\": \"2020-05-28T13:18:06.826Z\"\n}\n}",
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
            "field": "productNotFound",
            "description": "<p>The id of the product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n     \"message\": \"Cannot find product with the id Number\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/productRoutes.js",
    "groupTitle": "product"
  },
  {
    "type": "put",
    "url": "/product/:id",
    "title": "Update specific product information",
    "name": "Updateproduct_information",
    "group": "product",
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
            "field": "productid",
            "description": "<p>productid of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "categoryid",
            "description": "<p>categoryid of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "size",
            "description": "<p>size of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>unit of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>image of the product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"status\": \"success\",\n\"message\": \"Product updated\",\n\"data\": {\n    \"productid\": \"2\",\n    \"name\": \"carrot\",\n    \"categoryid\": \"1\",\n    \"price\": \"65\",\n    \"size\": \"2\",\n    \"unit\": \"KG\",\n    \"description\": \"The carrot (Daucus carota) is a root vegetable often claimed to be the perfect health food. It is crunchy, tasty, and highly nutritious\",\n    \"image\": \"https://femina.wwmindia.com/content/2019/dec/nutrition-benefits-of-carrots.jpg\"\n}\n}",
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
            "field": "ProductNotFound",
            "description": "<p>The id of the Product was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n     \"status\": \"error\",\n     \"message\": \"Cannot find Product with the id: 5\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/server/routes/productRoutes.js",
    "groupTitle": "product"
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
