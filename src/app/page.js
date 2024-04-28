import Menu from "./menu";
import Content from "./content";
import SectionHeaders from "../components/SectionHeaders";

export default function Home() {
  return (
    <>
      <Content />
      <Menu />
      <section>
        <SectionHeaders subHeader={'Our Story'}
          mainHeader={'About us'}>
        </SectionHeaders>
        <div className="text-gray-500 text-center mx-auto flex">
          <p>Welcome to Pizza World, where passion for pizza meets excellence in taste! At Pizza World, we are committed to crafting the perfect slice, each time, every time. Our journey began with a simple dream: to redefine the pizza experience, and today, we proudly stand as a beacon of quality and flavor in the culinary world.

            With a dedication to using only the freshest ingredients, traditional recipes, and innovative techniques, we guarantee a mouthwatering experience with every bite. From our classic Margheritas to our signature gourmet creations, each pizza is a masterpiece crafted with love and care.

            At Pizza World, our mission goes beyond serving delicious food. We strive to create unforgettable moments, bringing families and friends together to share laughter, joy, and of course, great pizza. Join us on this journey of taste and discovery, and let Pizza World be your ultimate destination for pizza perfection.</p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}>
        </SectionHeaders>
        <div>
          <a className="text-4xl underline text-gray-500 mr-200" href="tel:+498388278782718">+49 8388278782718</a>
        </div>
      </section>
    </>
  );
}
