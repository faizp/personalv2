"use client";

import { motion } from "framer-motion";
import {
  Users,
  Student,
  Heart,
  Calendar,
} from "@phosphor-icons/react";

const volunteerWork = [
  {
    role: "Chief Creative Officer",
    organization: "Pygrammers",
    location: "Calicut, India",
    period: "February 2021 – Present",
    description:
      "Leading a Kerala-based Python developers community dedicated to guiding students and newcomers into the software industry.",
    achievements: [
      "Organize and deliver free mentorship sessions and workshops",
      "Oversee cross-functional team of designers, video editors, and content writers",
      "Shape strategy, partnerships, and programs for 400K+ community members",
    ],
    icon: Users,
    stats: "400K+ Community",
  },
  {
    role: "Social Worker",
    organization: "National Service Scheme",
    location: "Kerala, India",
    period: "June 2017 – March 2019",
    description:
      "Contributed to community development initiatives and social welfare programs.",
    achievements: [
      "Participated in community welfare programs",
      "Contributed to social development initiatives",
    ],
    icon: Heart,
    stats: "2+ Years",
  },
];

const education = {
  degree: "Bachelor's Degree in Computer Science",
  university: "Calicut University",
  location: "Malappuram, India",
  period: "June 2017 – March 2020",
};

export default function Community() {
  return (
    <section id="community" className="py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-emerald-500 mb-3 tracking-wide uppercase">
            Beyond Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
            Community & Education
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            Giving back to the community and continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="h-full p-8 bg-card rounded-3xl border border-border hover:border-emerald-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                  <Student
                    size={28}
                    weight="regular"
                    className="text-emerald-500"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Education
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Academic Background
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-foreground">
                    {education.degree}
                  </h4>
                  <p className="text-muted-foreground">{education.university}</p>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} weight="regular" />
                    {education.period}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Volunteer Cards */}
          <div className="space-y-6">
            {volunteerWork.map((work, index) => (
              <motion.div
                key={work.organization}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="p-6 bg-card rounded-2xl border border-border hover:border-emerald-500/30 transition-all duration-500 hover:shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                        <work.icon
                          size={20}
                          weight="regular"
                          className="text-emerald-500"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {work.role}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {work.organization}
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      {work.stats}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {work.description}
                  </p>

                  <ul className="space-y-2">
                    {work.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar size={12} weight="regular" />
                    {work.period}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
