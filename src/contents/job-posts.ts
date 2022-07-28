import type { IJobPost } from "interfaces";

const jobPosts: IJobPost[] = [
  {
    occupation: "Design",
    opportunities: [
      {
        job: "Product Designer",
        type: "Full-time",
        salary: 7000,
      },
      {
        job: "UX Designer",
        type: "Full-time",
        salary: 6000,
      },
    ],
  },
  {
    occupation: "Desenvolvimento de Software",
    opportunities: [
      {
        job: "Desenvolvedor(a) iOS",
        type: "Full-time",
        salary: 8000,
      },
      {
        job: "Desenvolvedor(a) Front-end",
        type: "Full-time",
        salary: 7000,
      },
      {
        job: "Desenvolvedor(a) Back-end",
        type: "Full-time",
        salary: 8000,
      },
    ],
  },
];

export default jobPosts;
