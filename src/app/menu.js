import MenuItems from "../components/MenuItems";
import SectionHeaders from "../components/SectionHeaders";

export default function Menu() {
    return (
        <section>
            <div>
                <SectionHeaders subHeader={'Checkout'} mainHeader={'BEST SELLER'}>

                </SectionHeaders>
            </div>
        
            <div className="grid grid-cols-3 gap-4">
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>

            </div>
        </section>
    )
}