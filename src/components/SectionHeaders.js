export default function SectionHeaders({subHeader,mainHeader}){
    return(
        <div className="text-center">
                <h3 className="uppercase text-gray-600 mt-6 leading-4">
                   {subHeader}</h3>
                <h2 className="text-primary font-bold mb-4 text-4xl" >
                    {mainHeader}</h2>
        </div>
    )
}