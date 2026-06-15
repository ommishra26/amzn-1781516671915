import { useMemo, useState } from "react";

const appSchema = {
  "type": "multi-screen-app",
  "title": "amzn",
  "entry": "home",
  "flow": {
    "home": "detail",
    "detail": "cart",
    "upload": "home",
    "cart": "home"
  },
  "screens": {
    "home": {
      "type": "ecommerce",
      "title": "Home / Products",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Container",
          "padding": "28px",
          "margin": "0",
          "maxWidth": "none",
          "backgroundColor": "transparent",
          "borderRadius": "0px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "maxWidth": "",
              "height": "200px",
              "backgroundColor": "#1E293B",
              "textColor": "#FFFFFF",
              "borderRadius": "16px",
              "shadow": true,
              "padding": "34px",
              "type": "banner",
              "title": "RapidMart Marketplace",
              "subtitle": "Curated deals across everyday marketplace categories.",
              "id": "0800611f-3ec9-442b-986e-0aff889502ce"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Grid",
              "columns": 5,
              "gap": 16,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Electronics",
                  "value": "Audio and devices",
                  "targetScreen": "",
                  "id": "7adfdc98-1548-43b2-8f48-48c7d664d251"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Fashion",
                  "value": "Shoes and apparel",
                  "targetScreen": "",
                  "id": "e5f073cc-09f7-4352-8f4b-e966361e051f"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Home",
                  "value": "Kitchen and decor",
                  "targetScreen": "",
                  "id": "d1f90fdf-eba1-4bda-999d-0ad87ab91c7c"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Sports",
                  "value": "Fitness gear",
                  "targetScreen": "",
                  "id": "4d7665fb-5fd5-43ef-9315-4261da24d8bc"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Books",
                  "value": "Fiction and learning",
                  "targetScreen": "",
                  "id": "184555d7-7c8d-4b6d-a52f-05e6d8c01229"
                }
              ],
              "id": "b7f75a0e-ca45-41cd-ae46-fc06bddd2c36",
              "width": "100%"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Featured Products",
              "columns": 4,
              "gap": 24,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Noise Canceling Headphones",
                  "price": "$129 | 4.8 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "6667a79c-92f8-4e4f-8732-76be5105e0d0"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Smart Home Speaker",
                  "price": "$89 | 4.6 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "282c670c-02ab-4fbb-b6a8-4b35a0266030"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Travel Backpack",
                  "price": "$74 | 4.7 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "eb37063b-8df6-4af7-a571-bd3785537a3e"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Kitchen Air Fryer",
                  "price": "$119 | 4.5 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "080bdb3f-b356-4c14-8d27-e111e902b19c"
                }
              ],
              "id": "e0d2a476-e539-4f43-a12e-da9e38b8f25b"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Popular Products",
              "columns": 4,
              "gap": 24,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Fitness Watch",
                  "price": "$149 | 4.4 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "b65f8a63-b672-4959-b074-6e50ce6df1f2"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Desk Lamp Pro",
                  "price": "$42 | 4.9 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "f203e93c-ee5d-4b01-a474-b0a0a94643a9"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Wireless Charger",
                  "price": "$29 | 4.6 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "a70b1fd8-5909-484d-add1-12eb9daf88b6"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Coffee Maker",
                  "price": "$96 | 4.7 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "de25a43c-1c3b-40fa-a5ae-f040e04720e6"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Running Shoes",
                  "price": "$68 | 4.5 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "261c4038-0275-406b-be83-33a59ef1ba98"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Bestseller Novel",
                  "price": "$18 | 4.8 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "2bcad3e8-2ff8-44d4-8871-6e8934e824bf"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Yoga Mat Pro",
                  "price": "$34 | 4.7 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "c546d9f2-24fa-4278-9686-12add537b125"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Cotton Hoodie",
                  "price": "$52 | 4.6 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "9ac2bf93-a10c-4e0a-baf9-7304e0ee94f3"
                }
              ],
              "id": "43cd6286-467c-41a9-bc36-bf72578712e9"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "maxWidth": "",
              "height": "auto",
              "backgroundColor": "#1E293B",
              "textColor": "#FFFFFF",
              "borderRadius": "16px",
              "shadow": true,
              "padding": "26px",
              "type": "banner",
              "title": "Deal of the Day",
              "subtitle": "Save on top-rated tech bundles before midnight.",
              "id": "bb03ffde-c17e-4978-acc7-6aee0c72c82b"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 14,
              "justify": "center",
              "align": "center",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#7C3AED",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Sell on RapidMart",
                  "action": "go-to-screen",
                  "targetScreen": "upload",
                  "id": "653e28b4-6e85-4c39-951f-52e1858dfd8b"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "View Cart",
                  "action": "go-to-screen",
                  "targetScreen": "cart",
                  "id": "daaacdea-7fc1-4a16-876a-15db16101ac7"
                }
              ],
              "id": "71efc387-4579-4baf-9189-6ba477a62714"
            }
          ],
          "id": "4fc1dae2-c642-4aa1-801c-a03a23d7d236"
        }
      ]
    },
    "detail": {
      "type": "ecommerce",
      "title": "Product Detail",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Container",
          "padding": "28px",
          "margin": "0",
          "maxWidth": "none",
          "backgroundColor": "transparent",
          "borderRadius": "0px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 36,
              "justify": "start",
              "align": "stretch",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "column",
                  "width": "44%",
                  "grow": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "340px",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "30px",
                      "type": "card",
                      "title": "Product Gallery",
                      "value": "Large product image placeholder",
                      "targetScreen": "",
                      "id": "09872d10-87c9-42ef-9334-54f52a0f37f2"
                    }
                  ],
                  "id": "3ef28eb2-f5ba-48aa-874e-cf5f7a7d1152"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "column",
                  "width": "52%",
                  "grow": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "26px",
                      "type": "card",
                      "title": "Noise Canceling Headphones",
                      "value": "Premium wireless audio with adaptive sound and long battery life.",
                      "targetScreen": "",
                      "id": "25245279-e7f5-454c-993c-5ed83b4446c3"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Price",
                      "value": "$129",
                      "targetScreen": "",
                      "id": "839f664c-77f9-4b2e-9ad6-0b1b8dbaf7aa"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Rating",
                      "value": "4.8 stars | 2,481 reviews",
                      "targetScreen": "",
                      "id": "87b6fec7-063b-4e44-8b70-084e29af4730"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "26px",
                      "type": "card",
                      "title": "Description",
                      "value": "Active noise cancellation, soft ear cushions, quick charge, and travel case.",
                      "targetScreen": "",
                      "id": "ea899252-77bf-499f-9330-0db5c364bbe0"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "type": "row",
                      "gap": 12,
                      "justify": "start",
                      "align": "center",
                      "wrap": true,
                      "children": [
                        {
                          "version": 1,
                          "variant": "default",
                          "importance": "secondary",
                          "hiddenOnMobile": false,
                          "hiddenOnTablet": false,
                          "widthMode": "auto",
                          "maxWidth": "",
                          "height": "46px",
                          "backgroundColor": "#7C3AED",
                          "textColor": "#FFFFFF",
                          "borderRadius": "12px",
                          "padding": "12px 24px",
                          "fontSize": "15px",
                          "fontWeight": "600",
                          "alignment": "left",
                          "type": "button",
                          "label": "Buy Now",
                          "action": "go-to-screen",
                          "targetScreen": "cart",
                          "id": "bd5730ec-c9ec-4987-bc30-d400ddd17780"
                        },
                        {
                          "version": 1,
                          "variant": "default",
                          "importance": "secondary",
                          "hiddenOnMobile": false,
                          "hiddenOnTablet": false,
                          "widthMode": "auto",
                          "maxWidth": "",
                          "height": "46px",
                          "backgroundColor": "#1E293B",
                          "textColor": "#FFFFFF",
                          "borderRadius": "12px",
                          "padding": "12px 24px",
                          "fontSize": "15px",
                          "fontWeight": "600",
                          "alignment": "left",
                          "type": "button",
                          "label": "Add To Cart",
                          "action": "go-to-screen",
                          "targetScreen": "cart",
                          "id": "d3f4b0db-d288-44e4-a88a-a7b7ad610ce4"
                        }
                      ],
                      "id": "ebf04b8b-0b1e-4bd8-9fbb-ed51ccc6819f"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "widthMode": "auto",
                      "maxWidth": "",
                      "height": "46px",
                      "backgroundColor": "#334155",
                      "textColor": "#FFFFFF",
                      "borderRadius": "12px",
                      "padding": "12px 24px",
                      "fontSize": "15px",
                      "fontWeight": "600",
                      "alignment": "left",
                      "type": "button",
                      "label": "Back To Products",
                      "action": "go-to-screen",
                      "targetScreen": "home",
                      "id": "9fab0998-fe88-49d1-b024-060f4418c76f"
                    }
                  ],
                  "id": "32d0876f-488b-4fdf-81f7-741ac1b3f9a8",
                  "gap": 18
                }
              ],
              "id": "7564fd8f-055e-4f3a-9927-2cd73a7fbdd9"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Related Products",
              "columns": 4,
              "gap": 24,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Smart Home Speaker",
                  "price": "$89 | 4.6 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "65b452f4-8305-4146-875d-95981881634d"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Travel Backpack",
                  "price": "$74 | 4.7 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "c121d841-e413-4236-bc18-05b403da11c0"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Fitness Watch",
                  "price": "$149 | 4.4 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "5b8643a0-2a6f-4d2d-982b-30d608b795b7"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Desk Lamp Pro",
                  "price": "$42 | 4.9 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "6cbd5855-d8ad-4845-b59c-802dbc10a79e"
                }
              ],
              "id": "28d361a7-2df8-4c50-925a-a053f6647b36"
            }
          ],
          "id": "bdc687e4-556b-461f-9046-6d150d703a2e"
        }
      ]
    },
    "upload": {
      "type": "ecommerce",
      "title": "Upload Product",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "maxWidth": "",
          "height": "170px",
          "backgroundColor": "#1E293B",
          "textColor": "#FFFFFF",
          "borderRadius": "16px",
          "shadow": true,
          "padding": "30px",
          "type": "banner",
          "title": "Seller Center",
          "subtitle": "Create a polished product listing.",
          "id": "f8a1bdb1-5a7f-4f73-a19a-81005ebf9afe"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Product Listing Form",
          "padding": "30px",
          "margin": "0",
          "maxWidth": "740px",
          "backgroundColor": "#1E293B",
          "borderRadius": "16px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "productName",
              "placeholder": "Product name",
              "inputType": "text",
              "id": "bec6e1b6-49f9-4032-88bb-dd2550a1ce77"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "category",
              "placeholder": "Category",
              "inputType": "text",
              "id": "7e10e069-33ef-4038-ab2c-437f57761e94"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "price",
              "placeholder": "Price",
              "inputType": "text",
              "id": "e8902776-3903-40c3-a239-d892cf950787"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "description",
              "placeholder": "Short description",
              "inputType": "text",
              "id": "2391d3e6-c2ac-47e4-95fb-053d9e01bc3e"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "imageUrl",
              "placeholder": "Image upload URL",
              "inputType": "text",
              "id": "92b0ff28-c5f8-4df7-8598-5748f16ed014"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 12,
              "justify": "center",
              "align": "center",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#7C3AED",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Save Product",
                  "action": "none",
                  "targetScreen": "",
                  "id": "5b6d6a96-2797-4d57-9a5f-74341fe35eab"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Preview Product",
                  "action": "go-to-screen",
                  "targetScreen": "detail",
                  "id": "646363a9-a5cc-4b60-bc57-da4b72a2dae3"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#334155",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Back to Products",
                  "action": "go-to-screen",
                  "targetScreen": "home",
                  "id": "abe0ff53-810f-4ca9-b80f-a2051fc82fa4"
                }
              ],
              "id": "051dfe0e-2ed8-492c-87bf-8442d15d283d"
            }
          ],
          "id": "e12429f3-665a-4a76-9aff-c99109673434"
        }
      ]
    },
    "cart": {
      "type": "ecommerce",
      "title": "Cart / Checkout",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "maxWidth": "",
          "height": "170px",
          "backgroundColor": "#1E293B",
          "textColor": "#FFFFFF",
          "borderRadius": "16px",
          "shadow": true,
          "padding": "30px",
          "type": "banner",
          "title": "Cart / Checkout",
          "subtitle": "Review items, totals, and checkout actions.",
          "id": "5eeb1465-1650-4b31-8979-28fafebbab36"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Container",
          "padding": "28px",
          "margin": "0",
          "maxWidth": "none",
          "backgroundColor": "transparent",
          "borderRadius": "0px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 36,
              "justify": "start",
              "align": "start",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "column",
                  "width": "62%",
                  "grow": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "22px",
                      "type": "card",
                      "title": "Noise Canceling Headphones",
                      "value": "$129 | Qty 1",
                      "targetScreen": "",
                      "id": "8a479952-a670-4858-bb8c-386b7568822e"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "22px",
                      "type": "card",
                      "title": "Travel Backpack",
                      "value": "$74 | Qty 1",
                      "targetScreen": "",
                      "id": "92cb75b0-8111-46f3-bb64-308c001fd578"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "22px",
                      "type": "card",
                      "title": "Shipping Address",
                      "value": "Add delivery address during checkout.",
                      "targetScreen": "",
                      "id": "a0065760-30d2-43df-a4f9-a041e5728e74"
                    }
                  ],
                  "id": "3f59c8eb-b63e-4f8a-be7b-3eac066372e1"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "column",
                  "width": "34%",
                  "grow": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Subtotal",
                      "value": "$203",
                      "targetScreen": "",
                      "id": "e2a903cf-3566-42eb-941c-5be49716f6ba"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Shipping",
                      "value": "$8",
                      "targetScreen": "",
                      "id": "580b69ae-2252-478c-8379-22166b1e2f68"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Tax",
                      "value": "$17",
                      "targetScreen": "",
                      "id": "516cd947-59f7-4e27-b1ab-ddde24f50902"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#312E81",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "24px",
                      "type": "card",
                      "title": "Total",
                      "value": "$228",
                      "targetScreen": "",
                      "id": "5be1238e-6ba3-44e4-99b3-8aa45a28aae0"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "type": "row",
                      "gap": 12,
                      "justify": "start",
                      "align": "center",
                      "wrap": true,
                      "children": [
                        {
                          "version": 1,
                          "variant": "default",
                          "importance": "secondary",
                          "hiddenOnMobile": false,
                          "hiddenOnTablet": false,
                          "widthMode": "auto",
                          "maxWidth": "",
                          "height": "46px",
                          "backgroundColor": "#7C3AED",
                          "textColor": "#FFFFFF",
                          "borderRadius": "12px",
                          "padding": "12px 24px",
                          "fontSize": "15px",
                          "fontWeight": "600",
                          "alignment": "left",
                          "type": "button",
                          "label": "Checkout",
                          "action": "none",
                          "targetScreen": "",
                          "id": "274f8a9a-13c3-4e6b-86e2-234ce902d1ef"
                        },
                        {
                          "version": 1,
                          "variant": "default",
                          "importance": "secondary",
                          "hiddenOnMobile": false,
                          "hiddenOnTablet": false,
                          "widthMode": "auto",
                          "maxWidth": "",
                          "height": "46px",
                          "backgroundColor": "#1E293B",
                          "textColor": "#FFFFFF",
                          "borderRadius": "12px",
                          "padding": "12px 24px",
                          "fontSize": "15px",
                          "fontWeight": "600",
                          "alignment": "left",
                          "type": "button",
                          "label": "Continue Shopping",
                          "action": "go-to-screen",
                          "targetScreen": "home",
                          "id": "ae6b5452-1abc-422a-aabe-9b20e0841e8d"
                        }
                      ],
                      "id": "9eae50e7-f318-452b-835b-41d3b624dd7a"
                    }
                  ],
                  "id": "6df55fdc-c780-4411-a551-9888367d802c",
                  "gap": 18
                }
              ],
              "id": "63fc0339-6338-46fc-a9c8-237a42035359"
            }
          ],
          "id": "dad854f6-8f0d-49da-b291-3da9f7ea8cb7"
        }
      ]
    }
  },
  "navigation": [],
  "theme": {
    "primaryColor": "#7c3aed",
    "secondaryColor": "#06b6d4",
    "backgroundColor": "#0f172a",
    "surfaceColor": "#1e293b",
    "textColor": "#ffffff",
    "borderRadius": "12px",
    "fontFamily": "Inter",
    "spacing": "normal"
  },
  "components": []
};

const supportedBlockTypes = new Set([
  "hero",
  "banner",
  "card",
  "product-card",
  "button",
  "input",
  "table",
  "chart",
  "container",
  "row",
  "column",
  "grid",
  "spacer",
  "divider",
  "features",
  "cta"
]);

function getScreenKeys(schema) {
  return Object.keys(schema.screens || {});
}

function getInitialScreen(schema) {
  const screenKeys = getScreenKeys(schema);
  if (schema.entry && schema.screens?.[schema.entry]) return schema.entry;
  return screenKeys[0] || "home";
}

function getText(value, fallback = "") {
  return value === undefined || value === null || value === "" ? fallback : value;
}

function toCssSize(value, fallback = undefined) {
  if (value === undefined || value === null || value === "") return fallback;
  return typeof value === "number" ? value + "px" : value;
}

function getSurfaceStyle(block = {}) {
  return {
    backgroundColor: block.backgroundColor || undefined,
    color: block.textColor || undefined,
    borderRadius: block.borderRadius || undefined,
    padding: toCssSize(block.padding),
    margin: toCssSize(block.margin),
    height: toCssSize(block.height),
    maxWidth: block.maxWidth || undefined,
  };
}

function getLayoutStyle(block = {}) {
  return {
    ...getSurfaceStyle(block),
    "--gap": toCssSize(block.gap, "16px"),
  };
}

function getJustify(value) {
  if (value === "center") return "center";
  if (value === "end") return "flex-end";
  if (value === "between") return "space-between";
  return "flex-start";
}

function getAlign(value) {
  if (value === "start") return "flex-start";
  if (value === "end") return "flex-end";
  if (value === "stretch") return "stretch";
  return "center";
}

function getBlockTarget(block, currentScreen) {
  if (block.targetScreen && appSchema.screens?.[block.targetScreen]) {
    return block.targetScreen;
  }

  if (block.action === "next-screen") {
    const nextScreen = appSchema.flow?.[currentScreen];
    return nextScreen && appSchema.screens?.[nextScreen] ? nextScreen : null;
  }

  if (block.actions?.onClick?.type === "navigate") {
    const target = block.actions.onClick.target;
    return target && appSchema.screens?.[target] ? target : null;
  }

  return null;
}

function navigateTo(target, setCurrentScreen) {
  if (!target || !appSchema.screens?.[target]) return;
  setCurrentScreen(target);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function RenderChildren({ blocks = [], currentScreen, setCurrentScreen }) {
  if (!blocks.length) return null;

  return blocks.map((block, index) => (
    <RenderBlock
      key={block.id || block.type + "-" + index}
      block={block}
      currentScreen={currentScreen}
      setCurrentScreen={setCurrentScreen}
    />
  ));
}

function HeroBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);

  return (
    <section className={"hero hero-" + getText(block.variant, "default")} style={getSurfaceStyle(block)}>
      <div>
        <h1>{getText(block.title, "Hero Title")}</h1>
        <p>{getText(block.subtitle, "Hero subtitle")}</p>
        <div className="hero-actions">
          <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
            {getText(block.buttonLabel, "Get Started")}
          </button>
        </div>
      </div>
    </section>
  );
}

function BannerBlock({ block }) {
  return (
    <section className="banner" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Banner")}</h2>
      <p>{getText(block.subtitle, "Limited time offer")}</p>
    </section>
  );
}

function CardBlock({ block }) {
  return (
    <article className="card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Card title")}</h3>
      <p>{getText(block.value, "")}</p>
    </article>
  );
}

function ProductCardBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);
  const metaParts = String(getText(block.price, "$99")).split("|").map((part) => part.trim()).filter(Boolean);
  const primaryMeta = metaParts[0] || "$99";
  const secondaryMeta = metaParts.slice(1).join(" | ");

  return (
    <article className="product-card" style={getSurfaceStyle(block)}>
      <div className="product-media">
        {block.image ? (
          <img src={block.image} alt={getText(block.name, "Product")} />
        ) : (
          <span>{String(primaryMeta).startsWith("$") ? "Product" : "Video"}</span>
        )}
      </div>
      <h3>{getText(block.name, "Product")}</h3>
      <div className="product-meta">
        <span>{primaryMeta}</span>
        {secondaryMeta ? <small>{secondaryMeta}</small> : null}
      </div>
      <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
        {String(primaryMeta).startsWith("$") ? "View Product" : "Watch"}
      </button>
    </article>
  );
}

function ButtonBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);
  const style = {
    backgroundColor: block.backgroundColor || undefined,
    color: block.textColor || undefined,
    borderRadius: block.borderRadius || undefined,
    padding: toCssSize(block.padding),
    height: toCssSize(block.height),
    fontSize: toCssSize(block.fontSize),
    fontWeight: block.fontWeight || undefined,
    width: block.widthMode === "full" ? "100%" : "auto",
    maxWidth: block.maxWidth || undefined,
  };

  return (
    <button className="button" type="button" style={style} onClick={() => navigateTo(target, setCurrentScreen)}>
      {getText(block.label, "Button")}
    </button>
  );
}

function InputBlock({ block }) {
  return (
    <input
      className="input"
      type={getText(block.inputType, "text")}
      placeholder={getText(block.placeholder, block.field || "Input")}
      aria-label={getText(block.placeholder, block.field || "Input")}
    />
  );
}

function TableBlock({ block }) {
  const rows = block.rows || [
    ["Customer", "Status", "Amount"],
    ["Alex Morgan", "Paid", "$129"],
    ["Sam Taylor", "Pending", "$89"],
  ];

  return (
    <section className="table-card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Table")}</h3>
      <div className="table-scroll">
        <table>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) =>
                  rowIndex === 0 ? (
                    <th key={cellIndex}>{cell}</th>
                  ) : (
                    <td key={cellIndex}>{cell}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ChartBlock({ block }) {
  return (
    <section className="chart-card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Chart")}</h3>
      <div className="chart-bars">
        {[45, 70, 56, 88, 64].map((height, index) => (
          <span key={index} style={{ height: height + "%" }} />
        ))}
      </div>
    </section>
  );
}

function ContainerBlock({ block, currentScreen, setCurrentScreen }) {
  return (
    <section className="layout-container" style={getLayoutStyle(block)}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function RowBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    justifyContent: getJustify(block.justify),
    alignItems: getAlign(block.align),
    flexWrap: block.wrap === false ? "nowrap" : "wrap",
  };

  return (
    <section className="layout-row" style={style}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function ColumnBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    flexBasis: block.width || "0",
    flexGrow: block.grow === false ? 0 : 1,
  };

  return (
    <section className="layout-column" style={style}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function GridBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    "--columns": Math.max(1, Number(block.columns || 3)),
  };

  return (
    <section className="grid-section" style={style}>
      {block.title ? <h2>{block.title}</h2> : null}
      <div className="layout-grid">
        <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      </div>
    </section>
  );
}

function SpacerBlock({ block }) {
  return <div style={{ height: toCssSize(block.height, "32px") }} />;
}

function DividerBlock({ block }) {
  return <hr style={{ borderColor: block.color || "#334155", borderWidth: toCssSize(block.thickness, "1px") }} />;
}

function FeaturesBlock({ block }) {
  const items = block.items?.length ? block.items : ["Fast", "Simple", "Responsive"];

  return (
    <section className="features" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Features")}</h2>
      <div className="feature-grid">
        {items.map((item, index) => (
          <article className="card" key={index}>
            <h3>{item}</h3>
            <p>{block.descriptions?.[index] || "A polished generated section."}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CtaBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);

  return (
    <section className="cta" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Ready to start?")}</h2>
      <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
        {getText(block.buttonLabel, "Get Started")}
      </button>
    </section>
  );
}

function UnsupportedBlock({ block }) {
  return (
    <section className="card">
      <h3>Unsupported block</h3>
      <p>{block.type}</p>
    </section>
  );
}

function RenderBlock({ block, currentScreen, setCurrentScreen }) {
  if (!block || !supportedBlockTypes.has(block.type)) {
    return <UnsupportedBlock block={block || { type: "unknown" }} />;
  }

  switch (block.type) {
    case "hero":
      return <HeroBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "banner":
      return <BannerBlock block={block} />;
    case "card":
      return <CardBlock block={block} />;
    case "product-card":
      return <ProductCardBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "button":
      return <ButtonBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "input":
      return <InputBlock block={block} />;
    case "table":
      return <TableBlock block={block} />;
    case "chart":
      return <ChartBlock block={block} />;
    case "container":
      return <ContainerBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "row":
      return <RowBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "column":
      return <ColumnBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "grid":
      return <GridBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "spacer":
      return <SpacerBlock block={block} />;
    case "divider":
      return <DividerBlock block={block} />;
    case "features":
      return <FeaturesBlock block={block} />;
    case "cta":
      return <CtaBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    default:
      return <UnsupportedBlock block={block} />;
  }
}

export default function App() {
  const screenKeys = useMemo(() => getScreenKeys(appSchema), []);
  const [currentScreen, setCurrentScreen] = useState(() => getInitialScreen(appSchema));
  const screen = appSchema.screens?.[currentScreen] || appSchema.screens?.[screenKeys[0]] || {
    title: "Untitled Screen",
    blocks: [],
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Exported RAPID App</p>
          <h1>{getText(appSchema.title, "RAPID App")}</h1>
        </div>
        <nav aria-label="Screens">
          {screenKeys.map((screenKey) => (
            <button
              key={screenKey}
              type="button"
              className={screenKey === currentScreen ? "active" : ""}
              onClick={() => navigateTo(screenKey, setCurrentScreen)}
            >
              {getText(appSchema.screens[screenKey]?.title, screenKey)}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <div className="screen-title">
          <p>Screen</p>
          <h2>{getText(screen.title, currentScreen)}</h2>
        </div>
        <RenderChildren blocks={screen.blocks} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      </main>
    </div>
  );
}
