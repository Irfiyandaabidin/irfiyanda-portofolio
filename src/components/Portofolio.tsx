"use client";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Modal } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    name: "My Portofolio Website",
    image:
      "https://ik.imagekit.io/ku9epk6lrv/portofolio-web.png?updatedAt=1705700593886",
    tool: [
      {
        name: 'PostgreSQL',
        image: 'https://ik.imagekit.io/ku9epk6lrv/PostgreSQL-Logo.png?updatedAt=1705363960659'
      },
      {
        name: 'NextJS',
        image: 'https://ik.imagekit.io/ku9epk6lrv/nextjs-icon.png?updatedAt=1705363960594'
      },
      {
        name: 'TailwindCSS',
        image: 'https://ik.imagekit.io/ku9epk6lrv/tailwindcss-logo.png?updatedAt=1705363960226'
      }
    ],
    description: "I've successfully created my personal portfolio website, showcasing my skills, providing a brief overview of who I am, and displaying various projects I've worked on. One cool addition is the admin feature. With this, I can easily manage the content on my website without touching the code. So, if I need to make changes or add something new, I can do it quickly without the hassle of editing the source code. Moreover, for access to the admin page, feel free to reach out to me through the contact details provided. This ensures a controlled and secure environment for managing the content on my portfolio site.",
    linkRepoFe: "",
    linkRepoBe: "",
    linkRepoFsw: "https://github.com/Irfiyandaabidin/irfiyanda-portofolio",
  },
  {
    id: 2,
    name: "API Manajemen Karyawan",
    image:
      "https://ik.imagekit.io/ku9epk6lrv/web-api.png?updatedAt=1705700650195",
    tool: [
      {
        name: 'MongoDB',
        image: "https://ik.imagekit.io/ku9epk6lrv/mongodb-logo.png?updatedAt=1705363960409",
      },
      {
        name: 'ExpressJS',
        image: "https://ik.imagekit.io/ku9epk6lrv/expressjs-logo.png?updatedAt=1705363960007",
      },
      {
        name: 'Javascript',
        image: "https://ik.imagekit.io/ku9epk6lrv/javascript-logo.png?updatedAt=1705363960655",
      },
      {
        name: 'NodeJS',
        image: "https://ik.imagekit.io/ku9epk6lrv/nodejs-logo.png?updatedAt=1705363960182",
      }
    ],
    description: "This API is designed for comprehensive employee management, covering key functionalities such as employee details, salary processing, leave requests, performance reviews, divisional organization, and attendance tracking. Developed using Node.js and leveraging a MongoDB database, it provides a versatile solution for companies seeking efficient and integrated tools to manage their workforce.",
    linkRepoFe: "",
    linkRepoBe: "https://github.com/Irfiyandaabidin/api-manajemen-karyawan",
    linkRepoFsw: "",
  },
  {
    id: 3,
    name: "Preducation LMS",
    image:
      "https://ik.imagekit.io/ku9epk6lrv/preducation-dashboard.jpg?updatedAt=1705819219003",
    tool: [
      {
        name : 'MongoDB',
        image: "https://ik.imagekit.io/ku9epk6lrv/mongodb-logo.png?updatedAt=1705363960409",
      },
      {
        name : 'ExpressJS',
        image: "https://ik.imagekit.io/ku9epk6lrv/expressjs-logo.png?updatedAt=1705363960007",
      },
      {
        name : 'Javascript',
        image: "https://ik.imagekit.io/ku9epk6lrv/javascript-logo.png?updatedAt=1705363960655",
      },
      {
        name : 'NodeJS',
        image: "https://ik.imagekit.io/ku9epk6lrv/nodejs-logo.png?updatedAt=1705363960182",
      },
      {
        name : '',
        image: "https://ik.imagekit.io/ku9epk6lrv/nextjs-icon.png?updatedAt=1705363960594",
      },
      {
        name : 'TailwindCSS',
        image: "https://ik.imagekit.io/ku9epk6lrv/tailwindcss-logo.png?updatedAt=1705363960226",
      }
    ],
    description: "I and my team have created a REST API, Landing Page, and Admin Dashboard for an online course project. In this team, I play the role of a backend developer. The project includes user authentication, course creation, registration, class payments, and more. The API I developed is not only used by the web frontend but also by the Android team. This API supports basic course management operations and provides flexibility for integration with a responsive user interface. For the frontend, we have built a comfortable website with responsive design and dark mode features, ensuring that users and admins feel at ease while using it.",
    linkRepoFe: "https://github.com/Irfiyandaabidin/FP-LMS-Binar-Frontend",
    linkRepoBe: "https://github.com/Irfiyandaabidin/FP-LMS-Binar-Backend",
    linkRepoFsw: "",
  },
];

interface SelectedData {
  id: number;
  name: string;
  image: string;
  tool: Tool[];
  description: string;
  linkRepoFe: string;
  linkRepoBe: string;
  linkRepoFsw: string;
}

interface Tool {
  name: string;
  image: string;
}

const Portofolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<SelectedData>({
    id: 0,
    name: "",
    image: "",
    tool: [],
    description: "",
    linkRepoFe: "",
    linkRepoBe: "",
    linkRepoFsw: "",
  });
  const handleOpen = (data: any) => {
    setSelectedData(data)
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div id="portofolio" className="bg-slate-100 mt-5 pb-10 w-full flex flex-col justify-center items-center">
      <div className="flex">
        <button className="my-5 bg-slate-400 px-3 py-2 rounded-lg text-white text-lg">
          Portofolio
        </button>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
        {data.map((porto) => (
          <Card
            className="m-3 bg-slate-100"
            key={porto.id}
            sx={{ maxWidth: 345 }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{
                  height: 200
                }}
                image={porto.image}
                alt={porto.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {porto.name}
                </Typography>
                <Typography variant="h6" className="pb-2">
                  Tech Stack
                </Typography>
                <div className="flex">
                  <div className="w-full grid grid-cols-10">
                    {porto.tool.map((tool, index) => (
                      <div
                        className="relative w-7 h-7 bg-slate-100 rounded-full overflow-hidden"
                        key={index}
                      >
                        <Image alt="tool" src={tool.image} layout="fill" />
                      </div>
                    ))}
                  </div>
                  <CardActions>
                    <Button onClick={() => handleOpen(porto)} size="small" color="primary">
                      Detail
                    </Button>
                  </CardActions>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
        <Modal
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div
            style={{
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              boxShadow: "24px",
            }}
            className="rounded-sm h-1/2 w-11/12 md:w-1/2 p-6 overflow-scroll"
          >
            <div className="p-2">
              <p className="text-lg font-semibold">Project Description</p>
              <p>{selectedData.description}</p>
              <p className="mt-5 text-lg font-semibold">Tools</p>
              <div className="flex">
                {selectedData?.tool?.map((tool, index) => (
                  <div
                    className="relative w-7 h-7 bg-slate-100 rounded-full overflow-hidden"
                    key={index}
                  >
                    <Image alt="tool" src={tool.image} layout="fill" />
                  </div>
                ))}
              </div>
              <div className="flex gap-3 py-5 mt-3 items-center">
                <p className="font-semibold">
                  Go to repository : 
                </p>
                <div className="flex flex-col md:flex-row gap-y-3 md:gap-3">
                  {selectedData.linkRepoBe && (
                    <Link href={selectedData.linkRepoBe}>
                      <button className="bg-red-500 text-white py-1 px-2 rounded-sm">Backend</button>
                    </Link>
                  )}
                  {selectedData.linkRepoFe && (
                    <Link href={selectedData.linkRepoFe}>
                      <button className="bg-green-500 text-white py-1 px-2 rounded-sm">Frontend</button>
                    </Link>
                  )}
                  {selectedData.linkRepoFsw && (
                    <Link href={selectedData.linkRepoFsw}>
                      <button className="bg-blue-500 text-white py-1 px-2 rounded-sm">Fullstack</button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Portofolio;
