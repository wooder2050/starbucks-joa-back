# STARBUCKS-BACK

## Content

- [Installation](#installation)
- [swagger-jsdoc](#swagger-jsdoc)
- [API](#api)
- [Skills](#skills)

## Installation

<pre>
cd starbucks-joa-back
npm install
npm run dev
</pre>

### Set server environment

<pre>
.env 파일 생성
MONGODB_CONNECT = "Input your MonggoDB database uri"
DBNAME = "Input your database name"
</pre>

<pre>
DB products Schema example
{
  name : "돌체 콜드 브루",
  content: "더 이상의 다른 설명은 필요없는 스타벅스",
  price: 5300,
  name_eng: "Nitro Vanilla Cream",
  kcal: "75",
  protein: "1",
  sat_fat: "2",
  sodium: "20",
  sugars: "10",
  caffeine:"245"
  category: "콜드 브루"
}
</pre>

## swagger-jsdoc

doc 주소: http://localhost:500/docs

![](swagger-display.gif)

## API

서버주소 : http://localhost:5000

1. GET /products

- 데이터베이스에 존재하는 products의 정보를 반환합니다.(최대 50개)
- query를 이용한 페이징을 제공합니다.
- size: 불러올 상품의 숫자(최대 50개), page: 해당 page
- ex) http://localhost:5000/product?size=10&page=2
  <pre>
  {
    product: [
      {
        _id: "5fe5e5e8b8bfb5285707223a",
        name: "나이트로 바닐라 크림",
        content:
          "부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에 느껴보세요!",
        img: "http://d2xwo4a782qt1n.cloudfront.net/NitroColdBrew.jpg",
        price: 5900,
        name_eng: "Nitro Vanilla Cream",
        kcal: "75",
        protein: "1",
        sat_fat: "2",
        sodium: "20",
        sugars: "10",
        caffeine: "245",
        category:"콜드 브루"
      },
    ],
  };
  </pre>

2. GET /products/:productId

- 특정 'id'을 가진 product 데이터를 가져옵니다.
  <pre>
  {
  product: {
    _id: "5fe5e5e8b8bfb5285707223a",
    name: "나이트로 바닐라 크림",
    content:
      "부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에 느껴보세요!",
    img: "http://d2xwo4a782qt1n.cloudfront.net/NitroColdBrew.jpg",
    price: 5900,
    name_eng: "Nitro Vanilla Cream",
    kcal: "75",
    protein: "1",
    sat_fat: "2",
    sodium: "20",
    sugars: "10",
    caffeine: "245",
    category:"콜드 브루"
  },
};
  </pre>

## Skills Server

- ES2015+
- Node.js
- Express
- MongoDB
- Mongoose
- TypeScript
- Swagger
