export type Experience = {
  role: string
  company: string
  period: string
  points: string[]
}

export type SkillGroup = {
  category: string
  items: string[]
}

export type Project = {
  name: string
  company?: string
  period?: string
  points: string[]
  tech?: string[]
}

export type Education = {
  school: string
  degree: string
  period: string
}

export type Certification = {
  name: string
  issuer?: string
  date?: string
}

export type Profile = {
  name: string
  location: string
  phone: string
  email: string
  linkedin: string
  summary: string
  resumeUrl?: string
  experiences: Experience[]
  skills: SkillGroup[]
  projects: Project[]
  education: Education
  certifications: Certification[]
  github?: string
}

export const profile: Profile = {
  name: "Ramachandran S",
  location: "Salem, India",
  phone: "+91 7339407192",
  email: "mikeyram35@gmail.com",
  linkedin: "https://linkedin.com/in/ramachandran35",
  summary:
    "Skilled in SIEM/SOAR, incident response, and threat detection with hands-on expertise in Splunk, AWS Cloud Security, and attack simulation. Experienced in building secure systems, automating security workflows, and integrating monitoring solutions using Splunk, CloudWatch, and Google Analytics 4 (GA4).",
  resumeUrl: "/resume.pdf",
  experiences: [
    {
      role: "Associate Software Engineer",
      company: "SoftMania Technologies",
      period: "Sep 2025 – Present",
      points: [
        "Leading the development of secure web applications with integrated Splunk logging and GA4 monitoring.",
        "Designing AWS security solutions using EC2, CloudWatch, IAM, Lambda, and API Gateway.",
        "Enhancing penetration testing workflows and simulating enterprise-scale attacks using Splunk Attack Range.",
        "Implementing SOAR playbooks for automated incident response in AWS and Windows AD.",
      ],
    },
    {
      role: "Intern",
      company: "SoftMania Technologies",
      period: "May 2025 – Aug 2025",
      points: [
        "Integrated Splunk with rsyslog, syslog, and Windows Event Logs; onboarded Windows logs from local systems and AWS EC2 servers.",
        "Built CloudWatch Dashboards for back-end monitoring and infrastructure visibility.",
        "Forwarded back-end/front-end logs to Splunk and GA4 for real-time analytics.",
        "Developed secure API routing for AWS API Gateway calls and automated penetration testing workflows.",
      ],
    },
  ],
  skills: [
    {
      category: "Programming & Scripting",
      items: ["Python", "C++", "SQL", "Bash"],
    },
    {
      category: "Security Platforms",
      items: ["Splunk Enterprise", "Splunk SOAR", "Splunk Attack Range"],
    },
    {
      category: "Log Management",
      items: ["Windows Event Forwarding to Splunk"],
    },
    {
      category: "Cloud Security",
      items: [
        "AWS EC2",
        "AWS CodeBuild",
        "CloudWatch",
        "IAM",
        "Lambda",
        "API Gateway Security",
        "S3 Bucket",
        "DynamoDB",
      ],
    },
    {
      category: "Web Security & Tools",
      items: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "OWASP Top 10",
        "MITRE ATT&CK",
        "BurpSuite",
        "ZAP",
        "Wireshark",
        "Postman",
      ],
    },
    {
      category: "Monitoring & Analytics",
      items: ["Splunk Dashboards", "GA4", "AWS CloudWatch"],
    },
  ],
  projects: [
    {
      name: "Splunk Attack Range Automation & AWS Integration",
      company: "SoftMania Technologies",
      points: [
        "Automated deployment of Splunk Attack Range in AWS using Terraform and Ansible.",
        "Integrated AWS API Gateway, Lambda, CodeBuild, and SSM to securely trigger attack simulations via API.",
        "Built a UI interface to simulate and practise attacks.",
        "Refined MITRE ATT&CK–aligned scenarios; added Linux & Windows attack simulations.",
        "Connected CodeBuild with Lambda for scalable attack execution and resolved timeout issues.",
        "Integrated Windows & Linux data sources; enabled logging via CloudWatch & Splunk.",
        "Developed detection queries and dashboards for validation.",
      ],
      tech: ["AWS (API Gateway, Lambda, CodeBuild, SSM, EC2, CloudWatch)", "Splunk", "Terraform", "Ansible"],
    },
    {
      name: "Automated Vulnerability Scanner with Web Interface",
      points: [
        "Developed a Python-Flask-Nmap based scanner for port scanning, SQL injection detection, and security reporting.",
      ],
      tech: ["Python", "Flask", "Nmap"],
    },
    {
      name: "Self-Hosted Web Application with Static IP",
      points: [
        "Built a full-stack application with signup/login, resume upload, and MySQL database.",
        "Hosted on a local system using static IP.",
      ],
      tech: ["Full-stack", "Auth", "MySQL", "Self-hosted"],
    },
  ],
  education: {
    school: "K S Rangasamy College of Technology",
    degree: "B.Tech – Information Technology",
    period: "Oct 2021 – May 2025",
  },
  certifications: [
    {
      name: "Introduction to Internet of Things (Elite + Silver)",
      issuer: "NPTEL",
      date: "May 2024",
    },
    { name: "HTML/CSS Basics", issuer: "Coursera", date: "May 2024" },
    { name: "C++ Programming", issuer: "Great Learning", date: "Jan 2025" },
  ],
  github: undefined,
}
