import React from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const Home = () => {
  const handlecart = () => {
    alert("Item added to cart!");
  };

  const products = [
    {
      name: "Boys Shirt",
      price: "₹699",
      image:
        "https://thehouseofrare.com/cdn/shop/files/STOMBLACK01035-vmake.webp?v=1743511673",
    },
    {
      name: "Running Shoes",
      price: "₹1299",
      image:
        "https://media.istockphoto.com/id/1249496770/photo/running-shoes.jpg?s=612x612&w=0&k=20&c=b4MahNlk4LH6H1ksJApfnlQ5ZPM3KGhI5i_yqhGD9c4=",
    },
    {
      name: "Girls Bag",
      price: "₹899",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTrF7oa9TNyBTlH1Wsuf8T63xOoCKkz9rbAB8OjHBuSOXbncp743wLKdKV_S8kBPo_goMsSiEOa6Hlc0xSan_9Uwf9EXP02lSiWKb6DF7LjiXpHMIynlvzT",
    },
    {
      name: "Smartphone",
      price: "₹9999",
      image:
        "https://images.samsung.com/is/image/samsung/assets/us/smartphones/07172025/A-Series-Hub_FT12_A36_mo.jpg?$720_N_JPG$",
    },
    {
      name: "TV",
      price: "₹12999",
      image:
        "https://www.intex.in/cdn/shop/products/1_9b8014ad-124e-4742-a628-9a4c4affe617.jpg?v=1750330801",
    },
    {
      name: "Watch",
      price: "₹1399",
      image:
        "https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw4bcefb11/images/Sonata/Catalog/77105SM12W_1.jpg?sw=600&sh=600",
    },
    {
      name: "Lipstick",
      price: "1999",
      image:
        "https://t3.ftcdn.net/jpg/05/33/57/46/360_F_533574640_yn5N7owRVh8677uTycfP7WsEirRUNU6Q.jpg",
    },
    {
      name: "Camera",
      price: "₹19999",
      image:
        "https://t3.ftcdn.net/jpg/00/52/45/32/360_F_52453293_qGCRFdf6nEkCLjBuRIHQIQMOOaYmgNpN.jpg",
    },
  ];

  return (
    <div className="w-full">

      {/*  hero section*/}
      <section className="w-full h-[60vh] md:h-[70vh] bg-gradient-to-tr from-indigo-400 to-blue-600 flex items-center justify-center px-4 sm:px-6 md:px-10">
        <div className="text-center text-white max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Shop the Latest Trends
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl opacity-90">
            Discover the best deals on electronics, fashion, accessories & more.
          </p>
          <Link
            to="/allproducts"
            className="mt-6 inline-block px-6 py-3 bg-gray-200 text-indigo-500 font-semibold rounded-xl shadow hover:bg-white duration-300"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* category*/}
      <section className="py-10 sm:py-12 px-4 sm:px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              name: "Electronics",
              image:
                "https://www.dennemeyer.com/fileadmin/a/blog/Everyday_IP_Spreading_the_word_about_mobile_phones/Everyday-IP_Spreading-the-word-about-mobile-phones_12.jpg",
            },
            {
              name: "Fashion",
              image:
                "https://dy9ihb9itgy3g.cloudfront.net/products/$uploads/products/10374/12620/12620__d_f.740.webp",
            },
            {
              name: "Shoes",
              image:
                "https://www.gngmodels.com/wp-content/uploads/2022/10/mens-shoes-photoshoot-3-1024x682.jpg",
            },
            {
              name: "Accessories",
              image:
                "https://thumbs.dreamstime.com/b/man-choosing-sunglasses-shop-sunglasses-model-fashion-store-fashionable-man-trendy-sunglasses-accessories-men-man-410412638.jpg",
            },
          ].map((cat, index) => (
            <div
              key={index}
              className="bg-white hover:shadow-lg rounded-xl p-4 cursor-pointer shadow transition"
            >
              <Link to={"/allproducts"}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-28 sm:h-32 md:h-36 object-cover rounded-lg mb-3"
                />
              </Link>
              <p className="text-center font-semibold text-sm sm:text-base">
                {cat.name}
              </p>
            </div>
          ))}
        </div>

        <div className="my-4 sm:my-6 p-4">
          <Carousel />
        </div>
      </section>

      {/*featured products*/}
      {/*featured products*/}
      <section className="py-10 sm:py-12 px-4 sm:px-6 md:px-16 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>

        {/* 2 cards per row on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden 
                   max-w-[160px] mx-auto sm:max-w-none"
            >
              <Link to={"/allproducts"}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-[3/4] object-contain bg-white rounded-t-xl 
                       p-1 sm:p-3 sm:aspect-[4/5]"
                />
              </Link>

              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-sm sm:text-lg">{item.name}</h3>
                <p className="font-bold text-indigo-600 mt-1 sm:mt-2">
                  {item.price}
                </p>

                <button
                  onClick={handlecart}
                  className="mt-2 w-full bg-indigo-500 text-white py-1.5 sm:py-2 
                       rounded-lg hover:bg-indigo-700 duration-300 
                       text-sm sm:text-base"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/*another section*/}
      <section className="py-12 sm:py-16 bg-gradient-to-tr from-blue-400 to-indigo-600 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Join Our Shopping Community
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg opacity-90">
          Get updates on new arrivals, discounts and offers directly in your inbox.
        </p>
        <button className="mt-6 px-8 py-3 bg-gray-200 text-indigo-500 rounded-full text-lg hover:bg-gray-100 duration-300 font-semibold">
          Subscribe Now
        </button>
      </section>

    </div>
  );
};

export default Home;
