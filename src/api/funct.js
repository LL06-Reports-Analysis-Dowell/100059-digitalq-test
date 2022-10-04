const dishData = "../../src/components/sample.json";
const dishes = dishData.normal.data;

const ProdName = dishes.map((dish) => dish.dish_name);
// const ProdName = ["Product Name", "this", "example", "isnt", "funny"];

const ProdCode = dishes.map((dish) => dish.dish_code);

// var ProdCode = ["Product Code", "Z10002", "Z10003", "Z10007", "Z10002"];

export { ProdName, ProdCode, Quantity };
