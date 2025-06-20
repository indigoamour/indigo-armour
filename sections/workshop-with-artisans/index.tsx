export default function WorkshopWithArtisans() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 flex flex-col gap-6">
                <h2 className="text-3xl font-semibold">Workshop with Artisans</h2>
                <p className="text-lg text-gray-700">
                    Founded by Seema Singh, Indigo Amour collaborates with artisan communities across India—from Bhujodi weavers in Kutchch to Himalayan shepherds working with Gaddi wool.
                </p>
                <p className="text-lg text-gray-700">
                    Seema has developed rich, sustainable fabrics by blending traditional yarn dyeing and handloom weaving with contemporary design. Gaddi wool is woven with cotton in Bikaner to produce beautiful, warm textiles used in jackets and waistcoats.
                </p>
                <p className="text-lg text-gray-700">
                    Her work also includes collaborations with women weavers in Gujarat to design unique Kala Cotton fabrics, as well as research on traditional motifs in Bagru and Ajrakh block prints.
                </p>
               <img src="/images/about-1.jpg" alt="Sustainable practices"  className="md:w-[40vw] mx-auto w-auto h-[40vh] md:h-auto"  />
            </div>
        </section>
    );
}
