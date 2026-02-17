const loadProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
            displayProduct(json);
        });
};

const displayProduct = (products) => {
    const container = document.getElementById("trending-container");
    container.innerHTML = "";

    products.forEach((product) => {
        const card = document.createElement("div");
        
        // card design 
        card.className = "bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm p-4";

        card.innerHTML = `
            <figure class="bg-gray-100 rounded-lg h-64 flex items-center justify-center p-6 mb-4">
                <img src="${product.image}" alt="${product.title}" class="h-full object-contain" />
            </figure>
            
            <div class="space-y-3">
                <div class="flex justify-between items-center">
                    <span class="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded">
                        ${product.category}
                    </span>
                    <div class="flex items-center text-sm font-medium">
                        <span class="text-yellow-400 mr-1">⭐</span>
                        <span>${product.rating.rate} (${product.rating.count})</span>
                    </div>
                </div>

                <h3 class="font-bold text-gray-800 truncate">${product.title}</h3>
                
                <p class="text-xl font-bold text-gray-900">$${product.price}</p>

                <div class="grid grid-cols-2 gap-3 pt-2">
                    <button onclick="loadDetails(${product.id})" class="btn btn-sm btn-outline border-gray-200">
                        <i class="fa-regular fa-eye mr-1"></i> Details
                    </button>
                    <button class="btn btn-sm bg-indigo-600 hover:bg-indigo-700 text-white border-none">
                        <i class="fa-solid fa-cart-shopping mr-1"></i> Add
                    </button>
                </div>
            </div>
        `;
        container.append(card);
    });
};

loadProducts();


