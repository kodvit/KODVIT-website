import { createFileRoute, redirect } from "@tanstack/react-router";
import { EduTechPage } from "./edutech";

export const Route = createFileRoute("/trinetra-tech")({
  head: () => ({
    meta: [
      { title: "EduTech | Practical Technology Education & 21-Day Induction" },
      {
        name: "description",
        content:
          "Explore KODVIT EduTech: 21 Days Induction Program for 1st-year students, hands-on technology workshops, hackathons, and internship programs.",
      },
    ],
  }),
  beforeLoad: () => {
    throw redirect({
      to: "/edutech",
      replace: true,
    });
  },
  component: EduTechPage,
});
