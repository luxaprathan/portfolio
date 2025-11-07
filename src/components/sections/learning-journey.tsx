"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

interface WeekDetail {
  week: string;
  title: string;
  description: string;
  skills: string[];
  hasImages: boolean;
  images?: string[];
  fullContent: {
    keyPoints?: string[];
    sections?: {
      heading: string;
      content: string;
    }[];
    keyTakeaways?: string[];
  };
}

const LearningJourneySection = () => {
  const [selectedWeek, setSelectedWeek] = useState<WeekDetail | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const learningItems: WeekDetail[] = [
    {
      week: "Week 1",
      title: "Professional Skills",
      description: "Building foundational professional competencies for workplace success and career development.",
      skills: ["Communication", "Time Management", "Work Ethics"],
      hasImages: true,
      images: ["/assets/learning skill/week1.jpeg"],
      fullContent: {
        keyPoints: [
          "The session explored the significance of professional skills, emphasizing their role in enhancing employability and workplace success.",
          "It highlighted how values, beliefs, attitudes, and character shape professional behavior and ethical decision-making.",
          "Activities like pair work and discussions were introduced to foster practical application of these skills."
        ],
        sections: [
          {
            heading: "Professional Skills",
            content: "Professional skills, also known as soft skills, encompass non-technical abilities such as communication, teamwork, problem-solving, adaptability, time management, and leadership. These skills are transferable across various roles and industries, enhancing an individual's versatility and value to employers."
          },
          {
            heading: "Employability Skills",
            content: "Employability skills include critical thinking, communication, teamwork, adaptability, time management, and leadership, which are highly valued by employers. These transferable skills, distinct from technical expertise, enable individuals to excel in diverse professional environments."
          },
          {
            heading: "Values",
            content: "Values are guiding principles like honesty, integrity, respect, responsibility, compassion, excellence, fairness, and courage that inform ethical behavior. They serve as a moral compass, influencing professional interactions and decision-making processes."
          },
          {
            heading: "Beliefs",
            content: "Beliefs are personal convictions shaped by experiences, culture, and upbringing, influencing professional perceptions and actions. Examples include self-efficacy, growth mindset, optimism, and locus of control."
          },
          {
            heading: "Attitudes",
            content: "Attitudes reflect predispositions to respond positively or negatively, shaped by values and beliefs. Examples include positive attitude, open-mindedness, tolerance, confidence, and empathy."
          },
          {
            heading: "Character",
            content: "Character comprises moral qualities such as trustworthiness, respectfulness, responsibility, caring, citizenship, fairness, and courage. It is reflected through consistent actions aligned with values and beliefs."
          }
        ],
        keyTakeaways: [
          "I gained insight into the critical role of professional and employability skills in achieving career success.",
          "The session underscored how values, beliefs, attitudes, and character shape ethical professional behavior.",
          "Participating in activities like pair work deepened my understanding of self-awareness.",
          "I recognized the importance of continuous skill development through practical application."
        ]
      }
    },
    {
      week: "Week 2",
      title: "Employability Skills",
      description: "Developing essential skills that enhance job readiness and workplace effectiveness.",
      skills: ["Adaptability", "Problem Solving", "Critical Thinking"],
      hasImages: true,
      images: ["/assets/learning skill/week2.jpeg"],
      fullContent: {
        keyPoints: [
          "Enhanced understanding of core employability skills valued by modern employers.",
          "Learned practical strategies for developing adaptability in changing work environments.",
          "Practiced critical thinking and problem-solving through real-world scenarios."
        ],
        sections: [
          {
            heading: "Core Employability Skills",
            content: "Employability skills are the fundamental capabilities that make individuals effective in any professional setting. These include communication, teamwork, problem-solving, and adaptability."
          }
        ],
        keyTakeaways: [
          "Developed a comprehensive understanding of employability skills.",
          "Gained practical experience in applying these skills to workplace scenarios.",
          "Recognized the importance of continuous skill development."
        ]
      }
    },
    {
      week: "Week 3",
      title: "Value Beliefs Attitude Character",
      description: "Understanding core values and developing strong character traits for professional excellence.",
      skills: ["Integrity", "Accountability", "Respect"],
      hasImages: true,
      images: ["/assets/learning skill/week 3.jpeg"],
      fullContent: {
        keyPoints: [
          "Explored the foundational role of values in shaping professional behavior.",
          "Understood how beliefs influence decision-making and workplace interactions.",
          "Developed strategies for cultivating positive attitudes and strong character."
        ],
        sections: [
          {
            heading: "Core Values",
            content: "Values serve as the foundation for ethical behavior and professional conduct. Understanding and living by core values like integrity, respect, and responsibility creates trust and credibility."
          }
        ],
        keyTakeaways: [
          "Gained clarity on personal and professional values.",
          "Understood the impact of character on career success.",
          "Developed strategies for aligning actions with values."
        ]
      }
    },
    {
      week: "Week 4",
      title: "CV Writing",
      description: "Crafting compelling resumes that effectively showcase skills, experience, and achievements.",
      skills: ["Resume Design", "Content Writing", "ATS Optimization"],
      hasImages: true,
      images: ["/assets/learning skill/week 4.jpeg"],
      fullContent: {
        keyPoints: [
          "The session explored the art of creating a compelling CV to showcase qualifications effectively.",
          "It emphasized tailoring CVs to specific job roles and avoiding common mistakes.",
          "Practical activities like drafting CVs and peer reviews reinforced the concepts."
        ],
        sections: [
          {
            heading: "What is a CV",
            content: "A Curriculum Vitae (CV) is a comprehensive document summarizing education, work experience, skills, and achievements. It serves as a professional snapshot, demonstrating suitability for a specific job role."
          },
          {
            heading: "Making a Positive First Impression",
            content: "A well-structured and visually appealing CV captures recruiters' attention within seconds. Clear formatting, concise content, and error-free writing are essential for projecting professionalism."
          },
          {
            heading: "CV Structure and Formatting",
            content: "A clear, organized layout enhances CV readability. Use headings, bullet points, and ample white space. Professional fonts (Roboto, Arial) with consistent sizes create a polished look."
          },
          {
            heading: "Essential CV Components",
            content: "Include: Personal Information, Professional Summary, Work Experience, Education, Skills, and Achievements. Each section should be tailored to highlight relevant qualifications."
          }
        ],
        keyTakeaways: [
          "Learned to create compelling CVs that make strong first impressions.",
          "Understood the importance of tailoring CVs to specific job roles.",
          "Practiced structuring and formatting professional CVs with clarity.",
          "Recognized that attention to detail is crucial for effective CVs."
        ]
      }
    },
    {
      week: "Week 5",
      title: "Interview Manners",
      description: "Mastering interview etiquette and techniques to make strong impressions on potential employers.",
      skills: ["Body Language", "Confidence", "Active Listening"],
      hasImages: true,
      images: ["/assets/learning skill/week 5.jpeg"],
      fullContent: {
        keyPoints: [
          "Comprehensive guide to mastering interview etiquette and projecting professionalism.",
          "Emphasized thorough preparation, appropriate professional behavior, and effective follow-up.",
          "Mock interviews and certificate folder organization built practical skills."
        ],
        sections: [
          {
            heading: "Preparing for the Interview",
            content: "Conduct in-depth research on the company's mission and values. Analyze the job description to identify key skills. Practice answering common questions using the STAR method. Prepare thoughtful, role-specific questions."
          },
          {
            heading: "Professional Presentation",
            content: "Dress in professional attire aligned with company culture. Maintain high grooming standards. Exhibit confident body language with eye contact and firm handshake. Use minimal fragrances."
          },
          {
            heading: "Answering Common Questions",
            content: "For 'Tell me about yourself,' provide a concise professional summary. For 'Why do you want to work here?' connect career aspirations to the company's mission. Highlight strengths with concrete examples."
          },
          {
            heading: "Handling Behavioral Questions",
            content: "Use real-life examples to demonstrate key competencies. Structure answers using the STAR method. Emphasize transferable soft skills. Tailor examples to the job's context."
          },
          {
            heading: "Do's and Don'ts",
            content: "DO: Research thoroughly, practice responses, ask insightful questions, send thank-you emails. DON'T: Arrive late, share irrelevant details, speak negatively about past employers, use casual language."
          }
        ],
        keyTakeaways: [
          "Thorough preparation significantly improves interview performance and confidence.",
          "Professional presentation creates a strong, memorable first impression.",
          "The STAR method ensures clarity and impact in responses.",
          "Mock interviews enhanced readiness and boosted confidence."
        ]
      }
    },
    {
      week: "Week 6",
      title: "Portfolio",
      description: "Creating professional portfolios that demonstrate expertise and showcase best work effectively.",
      skills: ["Presentation", "Visual Design", "Project Documentation"],
      hasImages: true,
      images: ["/assets/learning skill/week6.jpeg"],
      fullContent: {
        keyPoints: [
          "Learned how to manage a portfolio to showcase skills, work, and achievements professionally.",
          "Covered different types of portfolios and how to build strong assessment portfolios.",
          "Practiced organizing portfolio items and choosing content for specific purposes."
        ],
        sections: [
          {
            heading: "Uses of a Portfolio",
            content: "A portfolio strengthens job applications by showing examples of work. It helps get better jobs or promotions. For creative jobs, it showcases style and skills. In school, it tracks learning progress."
          },
          {
            heading: "Types of Portfolios",
            content: "Personal Portfolio: Creative work collection. Career/Dossier Portfolio: CV and work experience. Employment Portfolio: Work documents and projects. Assessment Portfolio: Learning progress for schools."
          },
          {
            heading: "Creating an Assessment Portfolio",
            content: "Decide the purpose and choose appropriate content. Select format (physical or online). Organize with clear sections and table of contents. Add brief explanations for each item. Update regularly."
          },
          {
            heading: "Online Portfolio Platforms",
            content: "LinkedIn: For professionals to share work experience. Behance: For creative work showcase. WordPress/Wix/Squarespace: Build custom portfolio websites. GitHub Pages: For coding projects."
          },
          {
            heading: "Best Practices",
            content: "Choose your best work showing clear results. Write about strengths and areas for improvement. Ask for feedback. Keep personal information safe. Save backup copies."
          }
        ],
        keyTakeaways: [
          "Portfolios effectively showcase skills and work to employers and clients.",
          "Understanding portfolio types helps choose the right one for goals.",
          "Clear sections and explanations make portfolios more professional.",
          "Online platforms make it easy to share portfolios globally."
        ]
      }
    },
    {
      week: "Week 7",
      title: "Meeting and Speaking Skills",
      description: "Developing effective communication strategies for meetings and public speaking engagements.",
      skills: ["Public Speaking", "Facilitation", "Articulation"],
      hasImages: true,
      images: ["/assets/learning skill/week7.jpeg"],
      fullContent: {
        keyPoints: [
          "Learned how to speak clearly and lead meetings professionally.",
          "Covered meeting terminology, types of meetings, planning, and idea sharing.",
          "Group activities and mock meetings built confidence in speaking and teamwork."
        ],
        sections: [
          {
            heading: "Meeting Terminology",
            content: "Learned important meeting words through matching activities. Key terms include: 'chair' (meeting leader), 'secretary' (note taker), 'agenda' (meeting plan), 'minutes' (meeting notes). Knowing these helps communicate professionally."
          },
          {
            heading: "Types of Meetings",
            content: "Informational (share news), Decision-making (choose something), Problem-solving (fix issues), Team-building (improve teamwork). Understanding types helps prepare appropriate contributions."
          },
          {
            heading: "Planning a Meeting",
            content: "Use a checklist: why needed, desired results, who should attend, date/place/tools. Create documents: invitations, agendas, minutes. Plan for possible problems like delays or missing equipment."
          },
          {
            heading: "Contributing Effectively",
            content: "Speak with confidence, listen carefully, share useful ideas. Use clear words to suggest ideas, agree politely, or disagree respectfully. Role-playing improved teamwork and communication."
          }
        ],
        keyTakeaways: [
          "Feel confident using meeting terminology and sharing ideas clearly.",
          "Good planning with clear agendas ensures successful meetings.",
          "Mock meetings improved speaking, listening, and teamwork skills.",
          "Reviewing meeting outcomes helps improve future meetings.",
          "Staying calm and focused helps work better with others."
        ]
      }
    },
    {
      week: "Week 8",
      title: "Email Writing Etiquettes",
      description: "Learning professional email communication standards and best practices for business correspondence.",
      skills: ["Formal Writing", "Clarity", "Professionalism"],
      hasImages: true,
      images: ["/assets/learning skill/week8.jpeg"],
      fullContent: {
        keyPoints: [
          "Learned how to write professional and polite emails for work and personal situations.",
          "Covered email structure, appropriate tone, and writing for specific scenarios.",
          "Activities like scenario writing and organizing jumbled emails built practical skills."
        ],
        sections: [
          {
            heading: "Email Writing Basics",
            content: "Write clear subject lines explaining the topic. Use standard format: greeting, introduction, main message, closing, signature. Choose professional tone for work, friendly tone for personal emails. Check for spelling and grammar errors."
          },
          {
            heading: "Email Scenarios",
            content: "Thank You Email: Show appreciation after events. Job Application Follow-Up: Politely inquire about application status. Request for Information: Ask clearly about services or products. Apology Email: Acknowledge mistakes and suggest solutions. Formal Business Communication: Address issues professionally."
          },
          {
            heading: "Jumbled Email Activity",
            content: "Practiced organizing mixed-up email parts in correct order. Correct structure: formal request, specific details, work completion note, apology, process inquiry, thanks, closing, signature. This taught clear organization and professional tone."
          },
          {
            heading: "Email Etiquette Tips",
            content: "Use appropriate greetings matching the recipient. Keep emails short and focused. Use CC for information sharing, BCC for privacy. Reply quickly (within a day) to show professionalism."
          }
        ],
        keyTakeaways: [
          "Learned to write clear, professional emails with proper structure and tone.",
          "Practicing various scenarios built confidence for any situation.",
          "Good etiquette like brevity and quick replies improves communication.",
          "Organizing email parts correctly makes messages easy to read.",
          "Checking for errors and using polite language creates good impressions."
        ]
      }
    },
    {
      week: "Week 9",
      title: "Proposal Writing",
      description: "Creating persuasive proposals that effectively communicate ideas and secure approvals.",
      skills: ["Research", "Persuasion", "Structure"],
      hasImages: true,
      images: ["/assets/learning skill/week9.jpeg"],
      fullContent: {
        keyPoints: [
          "Learned the fundamentals of creating compelling proposals for various purposes.",
          "Covered proposal structure, persuasive writing techniques, and professional formatting.",
          "Practiced writing proposals for different scenarios to build confidence."
        ],
        sections: [
          {
            heading: "Proposal Fundamentals",
            content: "A proposal is a formal document that presents an idea, plan, or project to gain approval or support. It must be clear, persuasive, and well-structured to convince stakeholders."
          },
          {
            heading: "Research and Planning",
            content: "Thorough research is essential before writing. Understand your audience's needs, gather relevant data, and identify key benefits. Planning ensures your proposal addresses all important points."
          },
          {
            heading: "Persuasive Writing",
            content: "Use compelling language to highlight benefits and address potential concerns. Present evidence and data to support your arguments. Maintain a professional yet persuasive tone throughout."
          },
          {
            heading: "Proposal Structure",
            content: "Include: Executive Summary, Problem Statement, Proposed Solution, Implementation Plan, Budget, and Conclusion. Each section should flow logically and build your case."
          }
        ],
        keyTakeaways: [
          "Learned to structure proposals that clearly communicate ideas and goals.",
          "Understood the importance of research in creating persuasive proposals.",
          "Practiced writing different types of proposals for various scenarios.",
          "Recognized how proper formatting enhances proposal professionalism."
        ]
      }
    },
    {
      week: "Week 10",
      title: "Team and Leadership",
      description: "Building teamwork capabilities and leadership qualities essential for collaborative success.",
      skills: ["Collaboration", "Motivation", "Decision Making"],
      hasImages: true,
      images: ["/assets/learning skill/week10.jpeg"],
      fullContent: {
        keyPoints: [
          "Explored essential leadership skills and teamwork principles for workplace success.",
          "Learned how to build trust, delegate effectively, and motivate team members.",
          "Practiced collaboration techniques through group activities and role-playing."
        ],
        sections: [
          {
            heading: "Leadership Skills",
            content: "A good leader shares clear goals with the team to ensure everyone works toward the same purpose. Understanding team members' feelings builds trust and motivation. Being adaptable means changing plans when needed. Making smart decisions involves listening and choosing the best option."
          },
          {
            heading: "Teamwork",
            content: "Trust is built by clear communication and keeping promises. Everyone taking responsibility for team goals strengthens the team. Clear roles prevent confusion. Regular feedback helps the team improve continuously."
          },
          {
            heading: "Collaboration",
            content: "Including everyone's ideas creates better solutions and unity. Using tools like email or Slack helps share information clearly. Solving disagreements through open discussion maintains team harmony. Shared goals motivate everyone to work hard together."
          }
        ],
        keyTakeaways: [
          "Leadership requires clear vision, empathy, and adaptability.",
          "Trust and clear roles are fundamental to effective teamwork.",
          "Collaboration improves when everyone's ideas are valued.",
          "Practicing in group activities built confidence in leading and working with teams."
        ]
      }
    },
    {
      week: "Week 11",
      title: "Emotional Intelligence",
      description: "Developing self-awareness and empathy to navigate workplace relationships effectively.",
      skills: ["Self-Awareness", "Empathy", "Relationship Management"],
      hasImages: true,
      images: ["/assets/learning skill/week11.jpeg", "/assets/learning skill/week 11 - 2.jpeg"],
      fullContent: {
        keyPoints: [
          "Learned the five components of emotional intelligence and their workplace applications.",
          "Developed strategies for improving self-awareness and self-regulation.",
          "Practiced empathy and social skills through interactive activities."
        ],
        sections: [
          {
            heading: "Self-Awareness",
            content: "Self-awareness means knowing my own feelings, strengths, and weaknesses. Understanding when I'm stressed helps make better choices. Thinking about actions regularly improves communication. Knowing my values helps me act consistently with my goals."
          },
          {
            heading: "Self-Regulation",
            content: "Self-regulation is about controlling emotions to act professionally. Stopping quick reactions allows thoughtful responses. Being flexible with emotions helps handle changes. Taking responsibility builds trust with the team."
          },
          {
            heading: "Motivation",
            content: "Being motivated from within means working hard because of enjoyment, not just rewards. Setting clear goals keeps focus and drives through challenges. Staying positive inspires the team. Matching personal goals with company goals increases commitment."
          },
          {
            heading: "Empathy",
            content: "Empathy means understanding how others feel to build stronger relationships. Listening carefully helps solve conflicts and provide support. Respecting different needs makes the team feel included. Leading with empathy means adapting communication for each team member."
          },
          {
            heading: "Social Skills",
            content: "Good social skills help communicate clearly so everyone understands. Building relationships through networking strengthens the team. Managing conflicts calmly keeps teams working smoothly. Inspiring others with positive ideas helps achieve project goals."
          }
        ],
        keyTakeaways: [
          "Emotional intelligence is crucial for workplace success and relationships.",
          "Self-awareness and self-regulation help maintain professionalism.",
          "Empathy builds trust and improves team dynamics.",
          "Strong social skills enable effective communication and leadership.",
          "Practicing these skills prepares me for leading successful teams."
        ]
      }
    }
  ];

  const handleCardClick = (item: WeekDetail) => {
    setSelectedWeek(item);
    setIsOpen(true);
  };

  return (
    <section id="learning-journey" className="min-h-screen max-w-7xl mx-auto py-20 px-4">
      <Link href={"#learning-journey"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16 mb-20",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          MY LEARNING <br />
          JOURNEY
        </h2>
      </Link>
      
      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 transform md:-translate-x-1/2" />
        
        {/* Timeline Items */}
        <div className="space-y-12">
          {learningItems.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={cn(
                  "relative flex items-center gap-8",
                  "md:gap-12",
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-primary/20 dark:bg-primary/30 backdrop-blur-sm border-4 border-background flex items-center justify-center shadow-lg">
                    <span className="text-xs font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Card */}
                <div className={cn(
                  "ml-20 md:ml-0 md:w-1/2",
                  "group cursor-pointer"
                )}
                  onClick={() => handleCardClick(item)}
                >
                  <Card 
                    className={cn(
                      "bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl",
                      "hover:scale-105 hover:shadow-2xl hover:shadow-primary/20",
                      "transition-all duration-300 ease-out",
                      "border-2 border-transparent hover:border-primary/30"
                    )}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {item.week}
                        </span>
                        {item.hasImages && (
                          <span className="text-xs bg-blue-500/10 text-blue-500 px-2 py-1 rounded-full">
                            📸 Images
                          </span>
                        )}
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground">
                        Click to view full details →
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-20 text-center">
        <p className="text-lg text-muted-foreground font-mono">
          11 Weeks of Professional Development & Growth 🚀
        </p>
      </div>

      {/* Modal Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] bg-white/95 dark:bg-black/95 backdrop-blur-md">
          <DialogHeader>
            <DialogTitle className="text-3xl flex items-center gap-3">
              <span className="text-primary">{selectedWeek?.week}</span>
              <span>{selectedWeek?.title}</span>
            </DialogTitle>
            <DialogDescription className="text-base">
              {selectedWeek?.description}
            </DialogDescription>
          </DialogHeader>
          
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-6">
              {/* Images Section */}
              {selectedWeek?.hasImages && selectedWeek.images && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Learning Materials</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedWeek.images.map((img, idx) => (
                      <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border-2 border-primary/20">
                        <Image
                          src={img}
                          alt={`${selectedWeek.title} - Image ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Points */}
              {selectedWeek?.fullContent.keyPoints && (
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary">Key Points</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    {selectedWeek.fullContent.keyPoints.map((point, idx) => (
                      <li key={idx} className="text-base leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sections */}
              {selectedWeek?.fullContent.sections && (
                <div className="space-y-4">
                  {selectedWeek.fullContent.sections.map((section, idx) => (
                    <div key={idx} className="space-y-2">
                      <h3 className="text-lg font-semibold text-primary">
                        {section.heading}
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Takeaways */}
              {selectedWeek?.fullContent.keyTakeaways && (
                <div className="space-y-3 bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary">Key Takeaways</h3>
                  <ul className="space-y-2 list-disc list-inside">
                    {selectedWeek.fullContent.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="text-base leading-relaxed">
                        {takeaway}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Skills Developed</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedWeek?.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 text-sm font-mono rounded-full bg-primary/20 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LearningJourneySection;
