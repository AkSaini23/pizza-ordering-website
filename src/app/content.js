import Right from "../Icons/right";

export default function Content() {
    return (
        <>
            <section className="grid grid-cols-2">
                <div>
                    <h1 className="text-4xl font-semibold mt-20">Hot and Delicious: Your Ultimate <span className="text-primary">Pizza</span> Destination!</h1>
                    <p className="mt-4 mb-4"> Slice into happiness with our irresistible pizzas. Indulge in every bite, savoring the perfect blend of flavors. Elevate your taste buds with each delicious moment.</p>
                    <div className="flex gap-5 text-center">
                        <button className="bg-primary justify-center uppercase text-sm flex gap-3 text-white px-3 py-2  rounded-full">
                            Order Now
                            <Right></Right>
                        </button>
                        
                        <button className="text-gray-600 font-semibold">
                        Learn More
                        </button>
                    </div>
                </div>
                <div className="w-25 h-15 relative">
                    <img className="rounded-xl mt-14 ml-24" layout={'fill'} src="./pizza.jpg" alt={'pizza'}></img>
                </div>

            </section>
        </>
    );

}