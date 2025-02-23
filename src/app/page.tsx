
// components
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Section from "@/components/core-components/section";
import Container from "@/components/core-components/container";
import Typography from "@/components/core-components/typography";

// utils
import { landingPageCardData, projects } from "@/utils/static-data";
import { CustomElement, SectionSizes, Tables } from "@/utils/types";
import { getAll } from "@/actions/portfolio/actions";
import { render } from "@/utils/render-engine/parser";

export default async function Home() {
  const data: { id: string; content: CustomElement[] }[] = await getAll<{ id: string; content: CustomElement[] }>(Tables.portfolio);

  if (!data) {
    return;
  }

  // console.log(data);
  const parsedData = await render(data);
  // console.log(parsedData);

  return (
    <div>
      {/* <Header /> */}
      {parsedData}
      {/* <Footer /> */}
    </div>
  );

  // return (
  //   <div className="mx-auto relative min-h-screen bg-gradient-to-b from-blue-400 to-green-400 flex flex-col justify-start">
  //     <Header />

  //     <main className="mt-5 flex flex-col gap-5" id="home">
  //       <section className="h-screen flex flex-col items-center justify-center gap-5">
  //         <div className="mb-96">
  //           <h1 className="text-5xl font-bold text-center">Hello There</h1>
  //           <p className="text-center">This is is my Portfolio</p>
  //         </div>
  //       </section>

  //       <section id="about" className="container mx-auto px-3 flex flex-col items-start gap-5">
  //         <h2 className="text-3xl font-bold text-center">About Me</h2>

  //         <div className="w-full flex justify-between items-start gap-5">
  //           <div className="flex-1 flex flex-col gap-10">
  //             <p className="text-start">
  //               I am a results-driven frontend developer with a keen eye for detail and a
  //               knack for transforming ideas into interactive digital experiences.
  //               With tow years of experience in the field, I specialize in creating
  //               responsive and intuitive web interfaces. My goal is to enhance user
  //               experiences by implementing cutting-edge technologies and design trends.
  //               I am passionate about web development and am constantly seeking to improve
  //               my skills and stay up-to-date with the latest industry trends.
  //             </p>

  //             <div className="cards-container grid grid-cols-1 md:grid-cols-2 gap-5">
  //               {
  //                 landingPageCardData.map((card, idx) => (
  //                   <div key={idx} className="card bg-gray-200 border border-gray-400 shadow-md rounded-lg p-3">
  //                     <h3 className="text-2xl font-bold mb-5 text-gray-700">{card.title}</h3>
  //                     <p className="text-gray-600">{card.content}</p>
  //                   </div>
  //                 ))
  //               }
  //             </div>
  //           </div>

  //           <div className="hidden flex-1 lg:flex justify-center items-center">
  //             {/* img here */}
  //             <div className="h-[500px] aspect-square bg-gray-500 rounded shadow-lg overflow-hidden">
  //               <Image src="https://via.placeholder.com/500" alt="Profile Picture" width={500} height={500} />
  //             </div>
  //           </div>
  //         </div>
  //       </section>

  //       <section id="projects" className="container mx-auto px-3 flex flex-col items-start gap-5 overflow-hidden">
  //         <h2 className="text-3xl font-bold">My Projects</h2>

  //         <div className="overflow-auto w-full">
  //           <div className="flex items-stretch gap-5">
  //             {
  //               projects.map((project, idx) => (
  //                 <Link key={idx} href={project.link} className="card min-w-[280px] bg-gray-200 border border-gray-400 shadow-md rounded-lg flex flex-col items-center gap-1 overflow-hidden">
  //                   <div className="img w-full">
  //                     <Image width={150} height={150} alt={project.title} src={project.img} className="w-full aspect-video" />
  //                   </div>

  //                   <div className="p-3 flex-1 w-full">
  //                     <h3 className="text-xl font-bold mb-2 text-start">{project.title}</h3>
  //                     <p>{project.description}</p>
  //                   </div>
  //                 </Link>
  //               ))
  //             }
  //           </div>
  //         </div>
  //       </section>

  //       <section id="contact" className="container mx-auto justify-between px-3 flex gap-5">
  //         <div className="flex-1 flex flex-col gap-5">
  //           <h2 className="text-3xl font-bold">Contact Me</h2>
  //           <p className="">
  //             I am always eager to take on new challenges and collaborate on innovative
  //             projects. If you have a web development project in mind or if you&rsquo;re
  //             looking for a frontend developer to join your team, I would love to hear
  //             from you. Feel free to reach out through the contact form or connect with
  //             me on Social Media Platforms to discuss how we can work together.
  //           </p>
  //         </div>

  //         <div className="flex-1">
  //           <form className="flex flex-col gap-5 bg-white/50 bg-blur-md p-5 rounded-lg shadow-md">
  //             <div className="flex flex-col gap-3">
  //               <label htmlFor="name">Name</label>
  //               <input type="text" id="name" placeholder="Enter your name" className="w-full px-4 py-2 rounded-md outline outline-2 outline-gray-400" />
  //             </div>

  //             <div className="flex flex-col gap-3">
  //               <label htmlFor="email">Email</label>
  //               <input type="email" id="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-md outline outline-2 outline-gray-400" />
  //             </div>

  //             <div className="flex flex-col gap-3">
  //               <label htmlFor="message">Message</label>
  //               <textarea id="message" placeholder="Enter your message" className="w-full px-4 py-2 rounded-md outline outline-2 outline-gray-400" />
  //             </div>

  //             <button type="submit" className="btn bg-blue-500 text-white py-2 rounded-md">Send</button>
  //           </form>
  //         </div>
  //       </section>

  //       <Container variant="section" className={SectionSizes.full}>
  //         <Section className={SectionSizes.oneHalf}>
  //           <Typography variant="h2" className="text-3xl font-bold">This is a Test</Typography>

  //           <Typography variant="p" className="text-center">This is a test</Typography>
  //         </Section>

  //         <Section className={SectionSizes.oneHalf}>
  //           <Typography variant="h2" className="text-3xl font-bold">This is a Test</Typography>

  //           <Typography variant="p" className="text-center">This is a test</Typography>
  //         </Section>
  //       </Container>
  //     </main>

  //     <Footer />
  //   </div>
  // );
}
