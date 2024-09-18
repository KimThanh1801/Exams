
const correctProducts = [
    {
        img:"https://4menshop.com/images/thumbs/2022/05/quan-jeans-slimfit-qj048-mau-xanh-16793.JPG",
        pname: "Quần jean Nữ",
        newPrice: 269000,
        oldPrice: 720000,
        type: "KO0002"
    },
    {
        img:"https://bizweb.dktcdn.net/100/386/478/products/a21097-3-1665131401079.jpg?v=1665131477300",
        pname: "Áo thun Nữ",
        newPrice: 350000,
        oldPrice: 900000,
        type: "KO0003"
    },
    {
        img:"https://zizoou.com/cdn/shop/files/Ao-khoac-jacket-bomber-hoodies-form-rong-oversize-Ao-khoac-trang-7-4_Similar_Extras-ZiZoou-Store_c0f1aa97-ab8c-41c1-ac20-7c72b37e5037.jpg?v=1687077694",
        pname: "Áo khoác Nữ",
        newPrice: 369000,
        oldPrice: 620000,
        type: "KO0004"
    }
];

function Find() {
    const pname = document.getElementById("pname").value;
    const newPrice = parseInt(document.getElementById("newPrice").value);
    const oldPrice = parseInt(document.getElementById("OldPrice").value);
    const type = document.getElementById("Type").value;
    const imageLink = document.getElementById("imageLink").value;

    const productFound = correctProducts.find(product => 
        pname === product.pname &&
        newPrice === product.newPrice &&
        oldPrice === product.oldPrice &&
        type === product.type
    );

    if (productFound) {
        const content2 = document.getElementById("content2");
        content2.innerHTML = `
            <div class="card col-md-4">
                <img src="${imageLink}" alt="Product Image" width="200">
                <div class="card-body">
                    <p class="card-product-top">${pname} <span>${type}</span></p>
                    <p class="card-text">
                        <span class="card-price">${newPrice.toLocaleString()} VND<span class="old"><del>${oldPrice.toLocaleString()} VND</del></span></span>
                    </p>
                    <button class="btn btn-primary btn-buy">Mua</button>
                </div>
            </div>
        `;
    } else {
        // Show an error message if the input does not match
        alert("Thông tin sản phẩm không chính xác.");
    }
}