import Image from "/EATSLEEPCODEREPEAT.jpg";

// function Home() {
//   return (
//     <>
//       <div className="blog">
//         <div className="blogImage">
//           <img src={Image} alt="" />
//         </div>
//         <h1 className="blogTitle">Title of blog</h1>
//         <p className="blogContent">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
//           veritatis vel, enim ullam perferendis recusandae id tenetur maxime
//           quia magni ducimus quaerat corporis eum quas cum labore at
//           praesentium, ipsa nulla fugit! Asperiores libero, dolore aliquid, sed
//           perspiciatis quae fugiat amet magnam, at facere quo eligendi aut
//           itaque. Eaque delectus animi eius officia, ut ipsam dolorum labore
//           blanditiis, dolore rem ea beatae sunt placeat! In harum quis maxime ab
//           libero quidem ex soluta excepturi saepe nemo nostrum, natus ipsam,
//           accusantium ullam iusto magni qui eveniet. Maiores molestias eos ipsum
//           perspiciatis tempore temporibus, est sint culpa quo harum error
//           doloremque deleniti soluta odio a hic dicta cum rem nulla sed! Porro
//           voluptatem repellendus nihil nisi eveniet in alias recusandae tempora?
//           Reprehenderit, nesciunt porro saepe necessitatibus magnam eligendi aut
//           sit nam ullam amet earum, quis reiciendis sint, natus perspiciatis
//           iste fuga? Ipsum optio facere reiciendis sunt aperiam aspernatur
//           accusamus voluptas non dolore deleniti illum sint neque aut, eveniet
//           iusto adipisci animi nihil eaque exercitationem eligendi officiis
//           expedita eum iste. Excepturi, in. Porro minus perspiciatis dolore
//           fugiat ut ipsum omnis numquam facilis dolorum, error illum laudantium
//           minima sapiente eos quidem provident, ab veniam maiores ratione quae
//           aspernatur sit assumenda magnam non? Aspernatur quaerat nostrum beatae
//           tenetur assumenda modi temporibus nemo rerum quis totam unde optio
//           quia saepe minima aperiam, officiis ducimus neque? Similique, quia
//           distinctio suscipit possimus voluptate exercitationem voluptatum porro
//           quidem aliquid quos deserunt, dolorem reprehenderit laboriosam
//           obcaecati ducimus consequatur dignissimos rerum voluptatibus! Dicta
//           porro asperiores expedita odit a ea sunt earum qui nemo sed harum,
//           fuga quia facilis distinctio adipisci vel? Nostrum inventore est quos
//           magni, quae quo eaque nihil ex. Sunt cum eum eligendi, deserunt
//           voluptatum accusantium assumenda quo omnis quas distinctio iure
//           numquam necessitatibus nemo doloribus aspernatur dignissimos
//           veritatis! Sit ullam illo voluptatibus modi possimus mollitia at
//           voluptatem rerum assumenda architecto aut ex qui doloribus harum
//           voluptatum, praesentium eligendi pariatur temporibus laboriosam dolor
//           officia, repellendus quam laborum repudiandae. Magni odit delectus sit
//           ad nemo possimus. Ab ipsum aperiam veritatis? Ullam molestias aut
//           exercitationem labore sint possimus et pariatur beatae eos eveniet,
//           aliquam quas amet cum. Rerum necessitatibus voluptatum adipisci sed ab
//           ipsa soluta omnis, voluptas voluptate vel unde ut cum iure nulla? Aut
//           laudantium sequi beatae ullam repellat accusantium omnis minima,
//           voluptatem pariatur eos ab molestiae fugit reprehenderit minus fuga
//           nesciunt, praesentium cum culpa debitis corporis soluta ea error vitae
//           cupiditate? Eaque quasi amet facere quae sint, temporibus enim, magni
//           cupiditate blanditiis facilis reiciendis expedita aliquid corporis?
//           Expedita hic, enim doloremque voluptates provident aliquam dolores
//           alias consequatur totam, quod fugiat? Molestiae repellat atque
//           mollitia. Non cum, porro nemo omnis voluptate sit odio animi eligendi
//           repellat molestiae, ratione eos quas veniam nobis quis, quidem ut
//           vitae obcaecati veritatis quasi nihil praesentium quae nesciunt
//           ducimus. Alias est laborum perferendis ipsum quasi in molestiae earum
//           assumenda facere! Nemo maiores ex assumenda modi distinctio,
//           consequuntur aliquid quisquam asperiores aspernatur fuga fugit odio
//           delectus! Commodi facilis dignissimos dolore, debitis veritatis, ea,
//           error temporibus consectetur distinctio sequi aut doloremque iste
//           itaque ex quibusdam quas modi.
//         </p>
//       </div>
//       <div className="recommendations">
//         <div className="blog">
//           <div className="blogImage">
//             <img src={Image} alt="" />
//           </div>
//           <div className="blogInfo">
//             <h1>Title</h1>
//             <div className="description">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
//               accusamus!
//             </div>
//           </div>
//         </div>
//         <div className="blog">
//           <div className="blogImage">
//             <img src={Image} alt="" />
//           </div>
//           <div className="blogInfo">
//             <h1>Title</h1>
//             <div className="description">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
//               accusamus!
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;

function Home() {
  return (
    <div className="w-full h-auto blogs">
      <div className="w-full h-72 bg-[#444444] mb-8 rounded-2xl cursor-pointer flex blog">
        <img
          src={Image}
          alt=""
          className="w-[50%] h-full object-fill rounded-2xl blog-image"
        />
        <div className="w-[50%] my-4 h-auto max-[1440px]:w-full">
          <div className="text-3xl my-2 px-5">Title</div>
          <p className="text-sm px-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            mollitia aut corporis tempora vero unde itaque, quam voluptatum ad
            praesentium odit ipsa iste fugiat blanditiis tempore saepe facilis
            laudantium maiores.
          </p>
          <p className="px-5 py-1 font-mono font-bold">Read More...</p>
        </div>
      </div>
      <div className="w-full h-72 bg-[#444444] mb-8 rounded-2xl cursor-pointer flex blog">
        <img
          src={Image}
          alt=""
          className="w-[50%] h-full object-fill rounded-2xl blog-image"
        />
        <div className="w-[50%] my-4 h-auto max-[1440px]:w-full">
          <div className="text-3xl my-2 px-5">Title</div>
          <p className="text-sm px-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            mollitia aut corporis tempora vero unde itaque, quam voluptatum ad
            praesentium odit ipsa iste fugiat blanditiis tempore saepe facilis
            laudantium maiores.
          </p>
          <p className="px-5 py-1 font-mono font-bold">Read More...</p>
        </div>
      </div>
      <div className="w-full h-72 bg-[#444444] mb-8 rounded-2xl cursor-pointer flex blog">
        <img
          src={Image}
          alt=""
          className="w-[50%] h-full object-fill rounded-2xl blog-image"
        />
        <div className="w-[50%] my-4 h-auto max-[1440px]:w-full">
          <div className="text-3xl my-2 px-5">Title</div>
          <p className="text-sm px-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            mollitia aut corporis tempora vero unde itaque, quam voluptatum ad
            praesentium odit ipsa iste fugiat blanditiis tempore saepe facilis
            laudantium maiores.
          </p>
          <p className="px-5 py-1 font-mono font-bold">Read More...</p>
        </div>
      </div>
      <div className="w-full h-72 bg-[#444444] mb-8 rounded-2xl cursor-pointer flex blog">
        <img
          src={Image}
          alt=""
          className="w-[50%] h-full object-fill rounded-2xl blog-image"
        />
        <div className="w-[50%] my-4 h-auto max-[1440px]:w-full">
          <div className="text-3xl my-2 px-5">Title</div>
          <p className="text-sm px-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            mollitia aut corporis tempora vero unde itaque, quam voluptatum ad
            praesentium odit ipsa iste fugiat blanditiis tempore saepe facilis
            laudantium maiores.
          </p>
          <p className="px-5 py-1 font-mono font-bold">Read More...</p>
        </div>
      </div>
      <div className="w-full h-72 bg-[#444444] mb-8 rounded-2xl cursor-pointer flex blog">
        <img
          src={Image}
          alt=""
          className="w-[50%] h-full object-fill rounded-2xl blog-image"
        />
        <div className="w-[50%] my-4 h-auto max-[1440px]:w-full">
          <div className="text-3xl my-2 px-5">Title</div>
          <p className="text-sm px-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            mollitia aut corporis tempora vero unde itaque, quam voluptatum ad
            praesentium odit ipsa iste fugiat blanditiis tempore saepe facilis
            laudantium maiores.
          </p>
          <p className="px-5 py-1 font-mono font-bold">Read More...</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
