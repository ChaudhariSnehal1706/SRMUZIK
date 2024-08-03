import React from "react";
import { Layout } from "../../components/index";

function About() {
  return (
    <Layout>
      <main className="container mx-auto py-8 px-4">
        <section className="mb-8">
          <h1 className="text-3xl font-semibold mb-4">About SR MUZIK</h1>
          <p className="text-lg leading-relaxed">
            SR MUZIK is a platform dedicated to bringing music enthusiasts
            together, providing an extensive collection of songs across various
            genres. Our goal is to create an immersive musical experience for
            our users and promote talented artists from around the world.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            At SR MUZIK, we believe in the power of music to inspire, connect,
            and entertain. Our team is passionate about curating high-quality
            content that resonates with our audience and celebrates the
            diversity of musical expression.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            We envision a world where music transcends boundaries, where every
            listener finds their rhythm, and where artists thrive in a
            supportive community. SR MUZIK aims to be the go-to platform for
            discovering, sharing, and enjoying music in its purest form.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Free Music Listings</h2>
          <p className="text-lg leading-relaxed">
            Here at SR MUZIK, we're committed to offering a wide range of music
            for our users. As part of our vision, we're dedicated to providing
            free listings of diverse music genres, allowing everyone to explore
            and enjoy music without any barriers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Thai Music Upload</h2>
          <p className="text-lg leading-relaxed">
            We celebrate the richness of Thai music and culture. As a platform,
            we encourage our users to share and upload Thai music, enabling a
            global audience to discover and appreciate the beauty and diversity
            of Thailand's musical heritage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Founder</h2>
          <div className="flex items-center">
            <img
              src="https://img.freepik.com/premium-vector/handsome-businessman-suit_88465-811.jpg?size=626&ext=jpg"
              alt="Founder"
              className="w-24 h-24 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-lg leading-relaxed">
                John Doe is a passionate music enthusiast and visionary leader
                behind SR MUZIK. With years of experience in the music industry
                and a dedication to empowering artists, he founded SR MUZIK to
                create a platform that fosters creativity and connects people
                through music.
              </p>
            </div>
          </div>
        </section>

        {/* Additional sections or content about the company */}
      </main>
    </Layout>
  );
}

export default About;
