const categoriesItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach((item) => {
    const itemName = item.querySelector("h2");
    const itemNumber = item.querySelectorAll("li").length;
    
    console.log(`Category: ${itemName.textContent}`);
    console.log(`Elements: ${itemNumber}`);
});

