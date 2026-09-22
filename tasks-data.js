/**
 * ==============================================================================
 * COMPLETE TASK SHOWCASE & LEARNING PROGRESS DATA (EXHAUSTIVE CATALOG)
 * ==============================================================================
 * 
 * HOW TO ADD A NEW TASK OR DAY:
 * ------------------------------------------------------------------------------
 * 1. Locate the category (html, css, tailwind, bootstrap, js, react).
 * 2. Under `days: [...]`, find the day or add a new day object:
 * 
 *    {
 *      day: 12,
 *      title: "New Day Topic Name",
 *      tasks: [
 *        {
 *          id: "html-d12-t1",
 *          taskNumber: 1,
 *          title: "Your Task Title",
 *          description: "A short explanation of what you built in this task.",
 *          technologies: ["HTML5", "Forms"],
 *          status: "Completed",
 *          demoUrl: "html/Day12/index.html",
 *          codeUrl: "html/Day12/index.html"
 *        }
 *      ]
 *    }
 * ==============================================================================
 */

const TASKS_DATA = [
  // ============================================================================
  // 1. HTML CATEGORY
  // ============================================================================
  {
    id: "html",
    name: "HTML",
    badgeText: "Structure & Semantics",
    icon: "fa-brands fa-html5",
    color: "#f97316",
    gradient: "linear-gradient(135deg, #f97316, #ea580c)",
    description: "Semantic markup, text formatting, hyperlinks, forms, tables, media embeds, and multi-page portals.",
    days: [
      {
        day: 1,
        title: "Introduction & Basic Story Page",
        tasks: [
          {
            id: "html-d1-t1",
            taskNumber: 1,
            title: "Story Webpage with Basic Tags",
            description: "Constructed an HTML story page utilizing fundamental headings, paragraphs, and inline text formatting elements.",
            technologies: ["HTML5", "Typography", "Headings"],
            status: "Completed",
            demoUrl: "html/Day1/index.html/story.html",
            codeUrl: "html/Day1/index.html/story.html"
          }
        ]
      },
      {
        day: 3,
        title: "Document Structure & My Story",
        tasks: [
          {
            id: "html-d3-t1",
            taskNumber: 1,
            title: "My Story & Document Skeleton",
            description: "Implemented a structured HTML5 boilerplate with metadata, sectioning, and organized content hierarchy.",
            technologies: ["HTML5", "Page Hierarchy", "Metadata"],
            status: "Completed",
            demoUrl: "html/Day3/index.html",
            codeUrl: "html/Day3/index.html"
          }
        ]
      },
      {
        day: 4,
        title: "Block vs Inline & Interactive Elements",
        tasks: [
          {
            id: "html-d4-t1",
            taskNumber: 1,
            title: "Solo Leveling Anime Showcase",
            description: "Designed a thematic anime showcase exploring text formatting, media placement, and styled text elements.",
            technologies: ["HTML5", "Text Formatting", "Layout"],
            status: "Completed",
            demoUrl: "html/Day4/Anime.html",
            codeUrl: "html/Day4/Anime.html"
          },
          {
            id: "html-d4-t2",
            taskNumber: 2,
            title: "Block Level Elements Demonstration",
            description: "Hands-on analysis of the behavior of block elements (div, p, h1-h6) and document flow.",
            technologies: ["HTML5", "Block Elements", "Structure"],
            status: "Completed",
            demoUrl: "html/Day4/block.html",
            codeUrl: "html/Day4/block.html"
          },
          {
            id: "html-d4-t3",
            taskNumber: 3,
            title: "Inline Elements Demonstration",
            description: "Hands-on analysis of inline tags (span, a, strong, em) and how they coexist inside block text.",
            technologies: ["HTML5", "Inline Tags", "Inline Elements"],
            status: "Completed",
            demoUrl: "html/Day4/inline.html",
            codeUrl: "html/Day4/inline.html"
          },
          {
            id: "html-d4-t4",
            taskNumber: 4,
            title: "Interactive Elements Playground",
            description: "Built practical test cases demonstrating hyperlinks, inline anchors, tooltips, and interactive elements.",
            technologies: ["HTML5", "Hyperlinks", "Interactivity"],
            status: "Completed",
            demoUrl: "html/Day4/interactive.html",
            codeUrl: "html/Day4/interactive.html"
          },
          {
            id: "html-d4-t5",
            taskNumber: 5,
            title: "Solo Leveling Text Formatting Suite",
            description: "Exhaustive implementation of HTML typography tags including mark, del, ins, sub, sup, strong, and em.",
            technologies: ["HTML5", "Formatting Tags", "Typography"],
            status: "Completed",
            demoUrl: "html/Day4/format.html",
            codeUrl: "html/Day4/format.html"
          }
        ]
      },
      {
        day: 5,
        title: "Semantic Web, Spiderman Wiki & Zomato",
        tasks: [
          {
            id: "html-d5-t1",
            taskNumber: 1,
            title: "Spider-Man Semantic Webpage",
            description: "Constructed an accessible Spider-Man biography layout using standard semantic tags: header, nav, main, article, section, aside, footer.",
            technologies: ["HTML5", "Semantic Elements", "Accessibility"],
            status: "Completed",
            demoUrl: "html/Day5/semmentic.html",
            codeUrl: "html/Day5/semmentic.html"
          },
          {
            id: "html-d5-t2",
            taskNumber: 2,
            title: "Spider-Man Non-Semantic Layout",
            description: "Built the counterpart layout relying entirely on generic div and span containers to contrast semantic benefits.",
            technologies: ["HTML5", "Div Containers", "Structure"],
            status: "Completed",
            demoUrl: "html/Day5/nonsemmentic.html",
            codeUrl: "html/Day5/nonsemmentic.html"
          },
          {
            id: "html-d5-t3",
            taskNumber: 3,
            title: "Spiderman Wikipedia Reference Article",
            description: "Formatted reference article layout containing character chronology, abilities, and infobox formatting.",
            technologies: ["HTML5", "Wikipedia Layout", "Formatting"],
            status: "Completed",
            demoUrl: "html/Day5/format.html",
            codeUrl: "html/Day5/format.html"
          },
          {
            id: "html-d5-t4",
            taskNumber: 4,
            title: "Zomato Restaurant Page Template",
            description: "Recreated a restaurant collection showcase with food imagery, ratings, tags, and promotional sections.",
            technologies: ["HTML5", "Food Portal", "Card Layout"],
            status: "Completed",
            demoUrl: "html/Day5/zomoto.html",
            codeUrl: "html/Day5/zomoto.html"
          },
          {
            id: "html-d5-t5",
            taskNumber: 5,
            title: "Cloud Security & Cyber Defense Blog",
            description: "Structured an editorial article containing author credits, published dates, and rich media callouts.",
            technologies: ["HTML5", "Blog Post", "Article Structure"],
            status: "Completed",
            demoUrl: "html/Day5/blog.html",
            codeUrl: "html/Day5/blog.html"
          }
        ]
      },
      {
        day: 6,
        title: "Galleries, Portals & Student Profile",
        tasks: [
          {
            id: "html-d6-t1",
            taskNumber: 1,
            title: "Cape Institute of Technology Portal",
            description: "Developed an educational institution website showcasing academic departments and campus information.",
            technologies: ["HTML5", "Education Portal", "Lists & Images"],
            status: "Completed",
            demoUrl: "html/Day6/College.html",
            codeUrl: "html/Day6/College.html"
          },
          {
            id: "html-d6-t2",
            taskNumber: 2,
            title: "Responsive Photo Gallery",
            description: "Created an image gallery featuring nature landscapes, brand logos, and photography collections.",
            technologies: ["HTML5", "Image Gallery", "Media"],
            status: "Completed",
            demoUrl: "html/Day6/Gallary.html",
            codeUrl: "html/Day6/Gallary.html"
          },
          {
            id: "html-d6-t3",
            taskNumber: 3,
            title: "My Favourite Things Showcase",
            description: "Personalized showcase displaying favorite hobbies, movies, books, and inspirations.",
            technologies: ["HTML5", "Personal Showcase", "Cards"],
            status: "Completed",
            demoUrl: "html/Day6/favourite.html",
            codeUrl: "html/Day6/favourite.html"
          },
          {
            id: "html-d6-t4",
            taskNumber: 4,
            title: "Student Profile Card",
            description: "Clean student digital ID card displaying enrollment details, department, and contact info.",
            technologies: ["HTML5", "ID Card", "Profile"],
            status: "Completed",
            demoUrl: "html/Day6/studentprofile.html",
            codeUrl: "html/Day6/studentprofile.html"
          },
          {
            id: "html-d6-t5",
            taskNumber: 5,
            title: "Social Media Website Hub",
            description: "Navigation hub featuring connected links to popular social web applications.",
            technologies: ["HTML5", "Web Directory", "Hyperlinks"],
            status: "Completed",
            demoUrl: "html/Day6/web.html",
            codeUrl: "html/Day6/web.html"
          },
          {
            id: "html-d6-t6",
            taskNumber: 6,
            title: "Useful Developer Resources Directory",
            description: "Curated collection of developer reference websites, documentation links, and tools.",
            technologies: ["HTML5", "Resource Links", "Lists"],
            status: "Completed",
            demoUrl: "html/Day6/website.html",
            codeUrl: "html/Day6/website.html"
          }
        ]
      },
      {
        day: 7,
        title: "Top IT Companies & India Guide",
        tasks: [
          {
            id: "html-d7-t1",
            taskNumber: 1,
            title: "Top IT Companies Corporate Portal",
            description: "Master multi-page portal connecting major tech companies with comprehensive navigation.",
            technologies: ["HTML5", "Multi-Page", "Corporate Portal"],
            status: "Completed",
            demoUrl: "html/Day7/index.html",
            codeUrl: "html/Day7/index.html"
          },
          {
            id: "html-d7-t2",
            taskNumber: 2,
            title: "Constitution of India Guide",
            description: "Cultural and constitutional reference page featuring historical landmarks and constitutional articles.",
            technologies: ["HTML5", "Reference Guide", "Article Layout"],
            status: "Completed",
            demoUrl: "html/Day7/india.html",
            codeUrl: "html/Day7/india.html"
          },
          {
            id: "html-d7-t3",
            taskNumber: 3,
            title: "Amazon Corporate Profile Page",
            description: "Corporate showcase detailing Amazon operations, cloud services, and global logistics.",
            technologies: ["HTML5", "Sub-Page", "Amazon"],
            status: "Completed",
            demoUrl: "html/Day7/pages/amazon.html",
            codeUrl: "html/Day7/pages/amazon.html"
          },
          {
            id: "html-d7-t4",
            taskNumber: 4,
            title: "Deloitte Corporate Profile Page",
            description: "Consulting and financial advisory corporate profile with service descriptions.",
            technologies: ["HTML5", "Sub-Page", "Deloitte"],
            status: "Completed",
            demoUrl: "html/Day7/pages/delitte.html",
            codeUrl: "html/Day7/pages/delitte.html"
          },
          {
            id: "html-d7-t5",
            taskNumber: 5,
            title: "Flipkart Corporate Profile Page",
            description: "E-commerce platform overview detailing supply chain and digital marketplace achievements.",
            technologies: ["HTML5", "Sub-Page", "Flipkart"],
            status: "Completed",
            demoUrl: "html/Day7/pages/flipkart.html",
            codeUrl: "html/Day7/pages/flipkart.html"
          },
          {
            id: "html-d7-t6",
            taskNumber: 6,
            title: "Freshworks Corporate Profile Page",
            description: "SaaS and customer engagement tech showcase highlighting cloud architecture.",
            technologies: ["HTML5", "Sub-Page", "Freshworks"],
            status: "Completed",
            demoUrl: "html/Day7/pages/freshworks.html",
            codeUrl: "html/Day7/pages/freshworks.html"
          },
          {
            id: "html-d7-t7",
            taskNumber: 7,
            title: "Google Corporate Profile Page",
            description: "Technology pioneer profile highlighting search, cloud computing, and AI services.",
            technologies: ["HTML5", "Sub-Page", "Google"],
            status: "Completed",
            demoUrl: "html/Day7/pages/google.html",
            codeUrl: "html/Day7/pages/google.html"
          },
          {
            id: "html-d7-t8",
            taskNumber: 8,
            title: "Infosys Corporate Profile Page",
            description: "IT consulting and software engineering company overview detailing service sectors.",
            technologies: ["HTML5", "Sub-Page", "Infosys"],
            status: "Completed",
            demoUrl: "html/Day7/pages/infoysis.html",
            codeUrl: "html/Day7/pages/infoysis.html"
          },
          {
            id: "html-d7-t9",
            taskNumber: 9,
            title: "Microsoft Corporate Profile Page",
            description: "Enterprise software, Azure cloud, and developer tooling corporate summary.",
            technologies: ["HTML5", "Sub-Page", "Microsoft"],
            status: "Completed",
            demoUrl: "html/Day7/pages/microsoft.html",
            codeUrl: "html/Day7/pages/microsoft.html"
          },
          {
            id: "html-d7-t10",
            taskNumber: 10,
            title: "TCS Corporate Profile Page",
            description: "Tata Consultancy Services global delivery and consulting business profile.",
            technologies: ["HTML5", "Sub-Page", "TCS"],
            status: "Completed",
            demoUrl: "html/Day7/pages/tcs.html",
            codeUrl: "html/Day7/pages/tcs.html"
          },
          {
            id: "html-d7-t11",
            taskNumber: 11,
            title: "Tech Mahindra Corporate Profile Page",
            description: "Telecommunications and digital enterprise solutions corporate overview.",
            technologies: ["HTML5", "Sub-Page", "Tech Mahindra"],
            status: "Completed",
            demoUrl: "html/Day7/pages/tech.html",
            codeUrl: "html/Day7/pages/tech.html"
          },
          {
            id: "html-d7-t12",
            taskNumber: 12,
            title: "Zoho Corporation Profile Page",
            description: "Cloud software suite and business productivity applications profile.",
            technologies: ["HTML5", "Sub-Page", "Zoho"],
            status: "Completed",
            demoUrl: "html/Day7/pages/zoho.html",
            codeUrl: "html/Day7/pages/zoho.html"
          }
        ]
      },
      {
        day: 8,
        title: "HTML Forms, Validation & Anime Tables",
        tasks: [
          {
            id: "html-d8-t1",
            taskNumber: 1,
            title: "Job Application Form",
            description: "Comprehensive multi-field job application form with file upload, radio buttons, and checkboxes.",
            technologies: ["HTML5", "Forms", "Input Validation"],
            status: "Completed",
            demoUrl: "html/Day8/application.html",
            codeUrl: "html/Day8/application.html"
          },
          {
            id: "html-d8-t2",
            taskNumber: 2,
            title: "Contact Form",
            description: "Inquiry and contact submission form with input constraints and clean labels.",
            technologies: ["HTML5", "Contact Form", "Controls"],
            status: "Completed",
            demoUrl: "html/Day8/contact.html",
            codeUrl: "html/Day8/contact.html"
          },
          {
            id: "html-d8-t3",
            taskNumber: 3,
            title: "Customer Feedback Form",
            description: "Interactive customer inquiry form with textareas, rating radio buttons, and select dropdowns.",
            technologies: ["HTML5", "Feedback Form", "Form Controls"],
            status: "Completed",
            demoUrl: "html/Day8/feedback.html",
            codeUrl: "html/Day8/feedback.html"
          },
          {
            id: "html-d8-t4",
            taskNumber: 4,
            title: "User Authentication Login Form",
            description: "Production-style authentication page with email, password fields, and security requirements.",
            technologies: ["HTML5", "Authentication", "Input Types"],
            status: "Completed",
            demoUrl: "html/Day8/login.html",
            codeUrl: "html/Day8/login.html"
          },
          {
            id: "html-d8-t5",
            taskNumber: 5,
            title: "New User Registration Form",
            description: "User sign-up form with password confirmation, phone numbers, and terms consent.",
            technologies: ["HTML5", "Registration", "Validation"],
            status: "Completed",
            demoUrl: "html/Day8/register.html",
            codeUrl: "html/Day8/register.html"
          },
          {
            id: "html-d8-t6",
            taskNumber: 6,
            title: "Anime Data Table Layout",
            description: "Complex table layout featuring rowspan, colspan, thead, tbody, tfoot, and character ranking data.",
            technologies: ["HTML5", "Tables", "Rowspan/Colspan"],
            status: "Completed",
            demoUrl: "html/Day8/table.html",
            codeUrl: "html/Day8/table.html"
          }
        ]
      },
      {
        day: 9,
        title: "Enterprise Registration & Inventory Systems",
        tasks: [
          {
            id: "html-d9-t1",
            taskNumber: 1,
            title: "Engineering College Admission Portal",
            description: "Comprehensive student admissions application with department choices, quota, and certificate uploads.",
            technologies: ["HTML5", "Admissions Portal", "Complex Forms"],
            status: "Completed",
            demoUrl: "html/Day9/college.html",
            codeUrl: "html/Day9/college.html"
          },
          {
            id: "html-d9-t2",
            taskNumber: 2,
            title: "ABC Software Company - Employee Registration",
            description: "Corporate onboarding registration capturing employee payroll details, job designations, and ID proof.",
            technologies: ["HTML5", "Employee Onboarding", "Form Validation"],
            status: "Completed",
            demoUrl: "html/Day9/employee.html",
            codeUrl: "html/Day9/employee.html"
          },
          {
            id: "html-d9-t3",
            taskNumber: 3,
            title: "SLA Institute Training Form & Timetable",
            description: "Technical institute registration combining course schedules with structured batch timing tables.",
            technologies: ["HTML5", "Training Institute", "Form & Tables"],
            status: "Completed",
            demoUrl: "html/Day9/formtable.html",
            codeUrl: "html/Day9/formtable.html"
          },
          {
            id: "html-d9-t4",
            taskNumber: 4,
            title: "Apollo Hospital - Patient Registration",
            description: "Medical emergency and outpatient intake registration with blood group, medical history, and doctor assignment.",
            technologies: ["HTML5", "Healthcare Portal", "Forms"],
            status: "Completed",
            demoUrl: "html/Day9/patient.html",
            codeUrl: "html/Day9/patient.html"
          },
          {
            id: "html-d9-t5",
            taskNumber: 5,
            title: "Electronics Shop - Inventory Management",
            description: "Inventory catalogue table with SKU codes, product categories, stock counts, and pricing columns.",
            technologies: ["HTML5", "Inventory Management", "Tables"],
            status: "Completed",
            demoUrl: "html/Day9/product.html",
            codeUrl: "html/Day9/product.html"
          }
        ]
      },
      {
        day: 10,
        title: "Domain Portals & Documentation",
        tasks: [
          {
            id: "html-d10-t1",
            taskNumber: 1,
            title: "Apex IT Solutions Corporate Portal",
            description: "Professional corporate layout detailing executive profiles, services, company history, and mission statements.",
            technologies: ["HTML5", "Business Site", "Semantic Layout"],
            status: "Completed",
            demoUrl: "html/Day10/company.html",
            codeUrl: "html/Day10/company.html"
          },
          {
            id: "html-d10-t2",
            taskNumber: 2,
            title: "Crestview Institute of Technology Admissions 2026",
            description: "University website detailing degree programs, admission criteria, campus facilities, and contact information.",
            technologies: ["HTML5", "Education Site", "Navigation"],
            status: "Completed",
            demoUrl: "html/Day10/college.html",
            codeUrl: "html/Day10/college.html"
          },
          {
            id: "html-d10-t3",
            taskNumber: 3,
            title: "Alex Morgan - Personal Portfolio",
            description: "Personal resume showcase highlighting technical proficiencies, education history, and career milestones.",
            technologies: ["HTML5", "Portfolio", "Resume Layout"],
            status: "Completed",
            demoUrl: "html/Day10/personal.html",
            codeUrl: "html/Day10/personal.html"
          },
          {
            id: "html-d10-t4",
            taskNumber: 4,
            title: "HTML5 Basic Structure - Web Development Docs",
            description: "Detailed documentation portal explaining HTML5 tags, document flow, and standards compliance.",
            technologies: ["HTML5", "Documentation", "Articles"],
            status: "Completed",
            demoUrl: "html/Day10/document.html",
            codeUrl: "html/Day10/document.html"
          },
          {
            id: "html-d10-t5",
            taskNumber: 5,
            title: "Wandermust Travels Dream Vacation Packages",
            description: "Travel portal highlighting popular vacation packages, itinerary guides, and booking enquiry forms.",
            technologies: ["HTML5", "Travel Guide", "Media Cards"],
            status: "Completed",
            demoUrl: "html/Day10/traavl.html",
            codeUrl: "html/Day10/traavl.html"
          }
        ]
      },
      {
        day: 11,
        title: "HTML5 Multimedia & Media Showcase",
        tasks: [
          {
            id: "html-d11-t1",
            taskNumber: 1,
            title: "Master Media Showcase Portal",
            description: "Centralized media portal combining audio tracks, video streams, and interactive social embeds.",
            technologies: ["HTML5", "Multimedia Hub", "Audio & Video"],
            status: "Completed",
            demoUrl: "html/Day11/index.html",
            codeUrl: "html/Day11/index.html"
          },
          {
            id: "html-d11-t2",
            taskNumber: 2,
            title: "HTML5 Audio Player",
            description: "Embedded HTML5 audio elements with controls, track information, and fallback sources.",
            technologies: ["HTML5", "Audio Tag", "Multimedia"],
            status: "Completed",
            demoUrl: "html/Day11/audio.html",
            codeUrl: "html/Day11/audio.html"
          },
          {
            id: "html-d11-t3",
            taskNumber: 3,
            title: "HTML5 Video Player with Controls",
            description: "Configured video element with poster attributes, subtitles, and video controls.",
            technologies: ["HTML5", "Video Tag", "Responsive Video"],
            status: "Completed",
            demoUrl: "html/Day11/video.html",
            codeUrl: "html/Day11/video.html"
          },
          {
            id: "html-d11-t4",
            taskNumber: 4,
            title: "Multimedia Gallery",
            description: "Visual grid organizing high-resolution imagery and media clips with caption tags.",
            technologies: ["HTML5", "Gallery", "Captions"],
            status: "Completed",
            demoUrl: "html/Day11/gallary.html",
            codeUrl: "html/Day11/gallary.html"
          },
          {
            id: "html-d11-t5",
            taskNumber: 5,
            title: "Social Media Links & Embeds",
            description: "Interactive iframes linking YouTube streams, map locations, and external web resources.",
            technologies: ["HTML5", "Iframe", "Third-Party Embeds"],
            status: "Completed",
            demoUrl: "html/Day11/embeded.html",
            codeUrl: "html/Day11/embeded.html"
          }
        ]
      }
    ]
  },

  // ============================================================================
  // 2. CSS CATEGORY
  // ============================================================================
  {
    id: "css",
    name: "CSS",
    badgeText: "Styling & Responsive Design",
    icon: "fa-brands fa-css3-alt",
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    description: "Box model, Flexbox, CSS Grid, positioning, pseudo-elements, animations, transforms, and responsive web design.",
    days: [
      {
        day: 1,
        title: "Box Model, Profile Cards & Styling Methods",
        tasks: [
          {
            id: "css-d1-t1",
            taskNumber: 1,
            title: "Colored Boxes Challenge",
            description: "Demonstration of content box, padding, borders, and margins with border-box behaviors.",
            technologies: ["CSS3", "Box Model", "Borders & Margins"],
            status: "Completed",
            demoUrl: "css/Day1/box.html",
            codeUrl: "css/Day1/box.html"
          },
          {
            id: "css-d1-t2",
            taskNumber: 2,
            title: "Student Identification Card",
            description: "Styled student photo identification card with rounded corners, custom badges, and clean typography.",
            technologies: ["CSS3", "ID Card", "Border Radius", "Shadows"],
            status: "Completed",
            demoUrl: "css/Day1/studentidcard.html",
            codeUrl: "css/Day1/studentidcard.html"
          },
          {
            id: "css-d1-t3",
            taskNumber: 3,
            title: "Personal Profile Card",
            description: "Interactive social profile card with avatar styling, status indicators, and button hover states.",
            technologies: ["CSS3", "Profile Card", "Hover Effects"],
            status: "Completed",
            demoUrl: "css/Day1/profilecard.html",
            codeUrl: "css/Day1/profilecard.html"
          },
          {
            id: "css-d1-t4",
            taskNumber: 4,
            title: "College Departments Grid",
            description: "Formatted card collection displaying university academic branches with distinct color-accented headers.",
            technologies: ["CSS3", "Card Layout", "Color Schemes"],
            status: "Completed",
            demoUrl: "css/Day1/collegedepartments.html",
            codeUrl: "css/Day1/collegedepartments.html"
          },
          {
            id: "css-d1-t5",
            taskNumber: 5,
            title: "Company Information Page",
            description: "Enterprise layout presenting business overview, contact info, and styled department cards.",
            technologies: ["CSS3", "Company Info", "Typography"],
            status: "Completed",
            demoUrl: "css/Day1/companyinformation.html",
            codeUrl: "css/Day1/companyinformation.html"
          },
          {
            id: "css-d1-t6",
            taskNumber: 6,
            title: "My Favorite Things",
            description: "Personalized showcase displaying favorite hobbies and interests formatted with custom CSS.",
            technologies: ["CSS3", "Showcase", "Backgrounds"],
            status: "Completed",
            demoUrl: "css/Day1/favourite.html",
            codeUrl: "css/Day1/favourite.html"
          },
          {
            id: "css-d1-t7",
            taskNumber: 7,
            title: "Solo Leveling Inline Styling",
            description: "Practical analysis of inline CSS style attributes on heading, paragraph, and span tags.",
            technologies: ["CSS3", "Inline Styles", "Specifics"],
            status: "Completed",
            demoUrl: "css/Day1/inline.html",
            codeUrl: "css/Day1/inline.html"
          },
          {
            id: "css-d1-t8",
            taskNumber: 8,
            title: "Solo Leveling Internal CSS Styling",
            description: "Implementation of internal embedded stylesheets using the style tag in document head.",
            technologies: ["CSS3", "Internal Stylesheet", "Tag Selectors"],
            status: "Completed",
            demoUrl: "css/Day1/internel.html",
            codeUrl: "css/Day1/internel.html"
          }
        ]
      },
      {
        day: 2,
        title: "External Stylesheets & Domain Layouts",
        tasks: [
          {
            id: "css-d2-t1",
            taskNumber: 1,
            title: "Hospital Information Portal",
            description: "Clean healthcare layout with doctor cards, emergency buttons, and sanitized color themes.",
            technologies: ["CSS3", "Healthcare UI", "Color Palette"],
            status: "Completed",
            demoUrl: "css/Day2/hospital.html",
            codeUrl: "css/Day2/hospital.html"
          },
          {
            id: "css-d2-t2",
            taskNumber: 2,
            title: "Chennai IT Companies Portal",
            description: "Corporate tech directory featuring company cards with box shadows, badges, and sleek layout.",
            technologies: ["CSS3", "Box Shadows", "Cards"],
            status: "Completed",
            demoUrl: "css/Day2/itcompany.html",
            codeUrl: "css/Day2/itcompany.html"
          },
          {
            id: "css-d2-t3",
            taskNumber: 3,
            title: "Favorite Movies Showcase",
            description: "Cinema showcase featuring movie posters, star ratings, and glowing action buttons.",
            technologies: ["CSS3", "Dark Theme", "Movie Card"],
            status: "Completed",
            demoUrl: "css/Day2/movie.html",
            codeUrl: "css/Day2/movie.html"
          },
          {
            id: "css-d2-t4",
            taskNumber: 4,
            title: "Student Profile Card",
            description: "Polished user profile containing skill badges, bio section, and styled contact links.",
            technologies: ["CSS3", "Profile UI", "Border Radius"],
            status: "Completed",
            demoUrl: "css/Day2/profile.html",
            codeUrl: "css/Day2/profile.html"
          },
          {
            id: "css-d2-t5",
            taskNumber: 5,
            title: "Engineering College Departments",
            description: "Educational faculty card grid with responsive spacing and external stylesheet linkage.",
            technologies: ["CSS3", "External CSS", "Card Grid"],
            status: "Completed",
            demoUrl: "css/Day2/college.html",
            codeUrl: "css/Day2/college.html"
          },
          {
            id: "css-d2-t6",
            taskNumber: 6,
            title: "IT Company Details",
            description: "Corporate portal featuring branch locations, tech stacks, and modern typography.",
            technologies: ["CSS3", "Corporate UI", "Typography"],
            status: "Completed",
            demoUrl: "css/Day2/company.html",
            codeUrl: "css/Day2/company.html"
          }
        ]
      },
      {
        day: 3,
        title: "Cards, Mini-Boxes & CSS Demonstration",
        tasks: [
          {
            id: "css-d3-t1",
            taskNumber: 1,
            title: "Online Shopping Product Card",
            description: "E-commerce product card with discount badge, price formatting, star ratings, and 'Add to Cart' button.",
            technologies: ["CSS3", "E-Commerce", "Product Card", "Badges"],
            status: "Completed",
            demoUrl: "css/Day3/product.html",
            codeUrl: "css/Day3/product.html"
          },
          {
            id: "css-d3-t2",
            taskNumber: 2,
            title: "News Article Box",
            description: "Editorial news layout with styled headings, blockquotes, and image captions.",
            technologies: ["CSS3", "Typography", "Article Styling"],
            status: "Completed",
            demoUrl: "css/Day3/article.html",
            codeUrl: "css/Day3/article.html"
          },
          {
            id: "css-d3-t3",
            taskNumber: 3,
            title: "Employee ID Card",
            description: "Compact corporate employee pass with photo container, title, and barcode styling.",
            technologies: ["CSS3", "ID Card", "Components"],
            status: "Completed",
            demoUrl: "css/Day3/idcard.html",
            codeUrl: "css/Day3/idcard.html"
          },
          {
            id: "css-d3-t4",
            taskNumber: 4,
            title: "Mini Box Model Layout Challenge",
            description: "Exact pixel-perfect box model exercise testing margin collapse and border width calculations.",
            technologies: ["CSS3", "Box Model", "Dimensions"],
            status: "Completed",
            demoUrl: "css/Day3/minibox.html",
            codeUrl: "css/Day3/minibox.html"
          },
          {
            id: "css-d3-t5",
            taskNumber: 5,
            title: "Student Profile Card Variant",
            description: "Alternate student card layout exploring pill badges and dual-tone backgrounds.",
            technologies: ["CSS3", "Profile Card", "Gradients"],
            status: "Completed",
            demoUrl: "css/Day3/profile.html",
            codeUrl: "css/Day3/profile.html"
          },
          {
            id: "css-d3-t6",
            taskNumber: 6,
            title: "CSS Box Model Demonstration Project",
            description: "Comprehensive integrated showcase explaining box model principles through interactive visual cards.",
            technologies: ["CSS3", "Full Project", "Box Model"],
            status: "Completed",
            demoUrl: "css/Day3/project.html",
            codeUrl: "css/Day3/project.html"
          }
        ]
      },
      {
        day: 4,
        title: "CSS Display Properties & Visibility",
        tasks: [
          {
            id: "css-d4-t1",
            taskNumber: 1,
            title: "Boxing Display Properties Layout",
            description: "Investigation of inline, block, inline-block, and none display modes across multiple scenarios.",
            technologies: ["CSS3", "Display Properties", "Layout"],
            status: "Completed",
            demoUrl: "css/Day4/index.html",
            codeUrl: "css/Day4/index.html"
          },
          {
            id: "css-d4-t2",
            taskNumber: 2,
            title: "Inline to Block Conversion Example",
            description: "Transforming standard inline anchors and spans into block buttons with width and padding control.",
            technologies: ["CSS3", "Inline to Block", "Buttons"],
            status: "Completed",
            demoUrl: "css/Day4/index1.html",
            codeUrl: "css/Day4/index1.html"
          },
          {
            id: "css-d4-t3",
            taskNumber: 3,
            title: "Center Box Layout Techniques",
            description: "Centering techniques using auto margins, text-align, and inline-block alignments.",
            technologies: ["CSS3", "Centering", "Margins"],
            status: "Completed",
            demoUrl: "css/Day4/index2.html",
            codeUrl: "css/Day4/index2.html"
          },
          {
            id: "css-d4-t4",
            taskNumber: 4,
            title: "display: none vs visibility: hidden",
            description: "Live comparison showing how display:none removes elements from layout flow while visibility:hidden reserves space.",
            technologies: ["CSS3", "Visibility", "Display None"],
            status: "Completed",
            demoUrl: "css/Day4/index3.html",
            codeUrl: "css/Day4/index3.html"
          },
          {
            id: "css-d4-t5",
            taskNumber: 5,
            title: "Card Hide & Collapse Example",
            description: "Interactive UI showing card removal and space reflow behaviors in multi-card grids.",
            technologies: ["CSS3", "Card Layout", "Reflow"],
            status: "Completed",
            demoUrl: "css/Day4/index4.html",
            codeUrl: "css/Day4/index4.html"
          }
        ]
      },
      {
        day: 5,
        title: "Flexbox Layout & Dashboard Mini-Projects",
        tasks: [
          {
            id: "css-d5-t1",
            taskNumber: 1,
            title: "Flexbox Complete Layout Playground",
            description: "Deep dive into justify-content, align-items, flex-direction, flex-wrap, and gap properties.",
            technologies: ["CSS3", "Flexbox", "Alignment", "Grid Gap"],
            status: "Completed",
            demoUrl: "css/Day5/index.html",
            codeUrl: "css/Day5/index.html"
          },
          {
            id: "css-d5-t2",
            taskNumber: 2,
            title: "Modern Navigation Bar with Hover Effects",
            description: "Responsive flexbox navbar with logo, centered navigation links, and styled CTA button.",
            technologies: ["CSS3", "Flexbox Navbar", "Hover States"],
            status: "Completed",
            demoUrl: "css/Daysub5/navigation.html",
            codeUrl: "css/Daysub5/navigation.html"
          },
          {
            id: "css-d5-t3",
            taskNumber: 3,
            title: "Developer Portfolio Showcase",
            description: "Portfolio layout featuring bio card, technical skill tags, project grid, and contact links.",
            technologies: ["CSS3", "Portfolio", "Flexbox"],
            status: "Completed",
            demoUrl: "css/Daysub5/Portfolio.html",
            codeUrl: "css/Daysub5/Portfolio.html"
          },
          {
            id: "css-d5-t4",
            taskNumber: 4,
            title: "Product Card Layout with Flexbox",
            description: "Card layout with flex column orientation, pricing details, and responsive sizing.",
            technologies: ["CSS3", "Product Cards", "Flex Layout"],
            status: "Completed",
            demoUrl: "css/Daysub5/product.html",
            codeUrl: "css/Daysub5/product.html"
          },
          {
            id: "css-d5-t5",
            taskNumber: 5,
            title: "Student Dashboard Portal",
            description: "Student portal layout featuring attendance metrics, class schedules, and announcement alerts.",
            technologies: ["CSS3", "Dashboard", "Flexbox"],
            status: "Completed",
            demoUrl: "css/Daysub5/index .html",
            codeUrl: "css/Daysub5/index .html"
          }
        ]
      },
      {
        day: 6,
        title: "CSS Positioning (Static, Relative, Absolute, Fixed, Sticky)",
        tasks: [
          {
            id: "css-d6-t1",
            taskNumber: 1,
            title: "Customer Support Floating Widget",
            description: "Floating help chat button pinned to screen corner using CSS position: fixed with smooth hover pulse.",
            technologies: ["CSS3", "Fixed Position", "Widgets"],
            status: "Completed",
            demoUrl: "css/Day6/task1.html",
            codeUrl: "css/Day6/task1.html"
          },
          {
            id: "css-d6-t2",
            taskNumber: 2,
            title: "Company Website - Sticky Navbar",
            description: "Website navigation bar that stays locked at the top of the viewport during scrolling using position: sticky.",
            technologies: ["CSS3", "Sticky Position", "Sticky Navbar"],
            status: "Completed",
            demoUrl: "css/Day6/task2.html",
            codeUrl: "css/Day6/task2.html"
          },
          {
            id: "css-d6-t3",
            taskNumber: 3,
            title: "Shopping Cart Notification Badge",
            description: "Cart icon with absolute badge positioned on top-right corner using relative/absolute parent-child positioning.",
            technologies: ["CSS3", "Absolute Position", "Badges"],
            status: "Completed",
            demoUrl: "css/Day6/task3.html",
            codeUrl: "css/Day6/task3.html"
          },
          {
            id: "css-d6-t4",
            taskNumber: 4,
            title: "Relative Position Demonstration",
            description: "Testing element offset (top, left, z-index) without breaking the normal document flow.",
            technologies: ["CSS3", "Relative Position", "Z-Index"],
            status: "Completed",
            demoUrl: "css/Day6/task4.html",
            codeUrl: "css/Day6/task4.html"
          },
          {
            id: "css-d6-t5",
            taskNumber: 5,
            title: "CSS Position Comparison Master",
            description: "Side-by-side benchmark comparing static, relative, absolute, fixed, and sticky behaviors.",
            technologies: ["CSS3", "Positioning Master", "Layout"],
            status: "Completed",
            demoUrl: "css/Day6/task5.html",
            codeUrl: "css/Day6/task5.html"
          }
        ]
      },
      {
        day: 7,
        title: "Responsive Grids, Dashboards & Galleries",
        tasks: [
          {
            id: "css-d7-t1",
            taskNumber: 1,
            title: "CSS Responsive Image Gallery",
            description: "Multi-row photo gallery using CSS grid-template-columns and object-fit cover styling.",
            technologies: ["CSS3", "CSS Grid", "Image Gallery"],
            status: "Completed",
            demoUrl: "css/Day7/index.html",
            codeUrl: "css/Day7/index.html"
          },
          {
            id: "css-d7-t2",
            taskNumber: 2,
            title: "Student Dashboard Layout",
            description: "Grid-based student portal with sidebar navigation, summary metric cards, and schedule panels.",
            technologies: ["CSS3", "Grid Dashboard", "Portal"],
            status: "Completed",
            demoUrl: "css/Day7/index1.html",
            codeUrl: "css/Day7/index1.html"
          },
          {
            id: "css-d7-t3",
            taskNumber: 3,
            title: "Responsive Product Grid",
            description: "Shopping grid adapting from 1 column on mobile to 4 columns on desktop with auto-fit.",
            technologies: ["CSS3", "CSS Grid", "Product Cards", "Auto-Fit"],
            status: "Completed",
            demoUrl: "css/Day7/index2.html",
            codeUrl: "css/Day7/index2.html"
          },
          {
            id: "css-d7-t4",
            taskNumber: 4,
            title: "Company Services Grid",
            description: "Corporate offerings showcase with card hover highlights, icon boxes, and clean typography.",
            technologies: ["CSS3", "Services Grid", "Hover Effects"],
            status: "Completed",
            demoUrl: "css/Day7/index3.html",
            codeUrl: "css/Day7/index3.html"
          }
        ]
      },
      {
        day: 8,
        title: "Pseudo-Classes & Pseudo-Elements (:hover, :nth-child, ::before, ::after)",
        tasks: [
          {
            id: "css-d8-t1",
            taskNumber: 1,
            title: "Button Hover Animation Effects",
            description: "Interactive button styles featuring color shifts, scale transforms, and glowing borders on hover.",
            technologies: ["CSS3", "Pseudo-classes", "Hover Animations"],
            status: "Completed",
            demoUrl: "css/Day8/index.html",
            codeUrl: "css/Day8/index.html"
          },
          {
            id: "css-d8-t2",
            taskNumber: 2,
            title: "Student Registration Form with Pseudo-classes",
            description: "Form inputs styled dynamically using :focus, :valid, :invalid, and :disabled states.",
            technologies: ["CSS3", "Form Styling", ":focus / :valid"],
            status: "Completed",
            demoUrl: "css/Day8/index1.html",
            codeUrl: "css/Day8/index1.html"
          },
          {
            id: "css-d8-t3",
            taskNumber: 3,
            title: "Student List with :nth-child Styling",
            description: "Zebra-striped table rows and alternating student roster styling using nth-child(even) and nth-child(odd).",
            technologies: ["CSS3", ":nth-child", "Zebra Striping"],
            status: "Completed",
            demoUrl: "css/Day8/index2.html",
            codeUrl: "css/Day8/index2.html"
          },
          {
            id: "css-d8-t4",
            taskNumber: 4,
            title: "::before and ::after Pseudo-Elements Demo",
            description: "Decorative icons, quotes, underlines, and ribbon badges generated purely with CSS ::before and ::after.",
            technologies: ["CSS3", "::before / ::after", "Decorative CSS"],
            status: "Completed",
            demoUrl: "css/Day8/index3.html",
            codeUrl: "css/Day8/index3.html"
          },
          {
            id: "css-d8-t5",
            taskNumber: 5,
            title: "Editorial Paragraph & Typography Styling",
            description: "Advanced text styling with ::first-letter drop caps and ::first-line formatting.",
            technologies: ["CSS3", "::first-letter", "Drop Caps"],
            status: "Completed",
            demoUrl: "css/Day8/index4.html",
            codeUrl: "css/Day8/index4.html"
          }
        ]
      },
      {
        day: 9,
        title: "CSS Transitions & Transform Animations",
        tasks: [
          {
            id: "css-d9-t1",
            taskNumber: 1,
            title: "Button Hover Animation & Transitions",
            description: "Smooth background color transitions and ease-in-out button transformations.",
            technologies: ["CSS3", "Transitions", "Transform"],
            status: "Completed",
            demoUrl: "css/Day9/index.html",
            codeUrl: "css/Day9/index.html"
          },
          {
            id: "css-d9-t2",
            taskNumber: 2,
            title: "Image Gallery Zoom Effect",
            description: "Image containers with overflow:hidden where pictures scale up smoothly on hover without overflowing.",
            technologies: ["CSS3", "Scale Transform", "Gallery Zoom"],
            status: "Completed",
            demoUrl: "css/Day9/index1.html",
            codeUrl: "css/Day9/index1.html"
          },
          {
            id: "css-d9-t3",
            taskNumber: 3,
            title: "Product Card Lift Effect",
            description: "Interactive cards that translate upwards (translateY) with expanding drop-shadows on hover.",
            technologies: ["CSS3", "Hover Lift", "Box Shadow"],
            status: "Completed",
            demoUrl: "css/Day9/index2.html",
            codeUrl: "css/Day9/index2.html"
          },
          {
            id: "css-d9-t4",
            taskNumber: 4,
            title: "Company Logo Rotation Animation",
            description: "Keyframe-powered infinite logo rotation and hover-triggered 360-degree spins.",
            technologies: ["CSS3", "Rotate Transform", "Animations"],
            status: "Completed",
            demoUrl: "css/Day9/index3.html",
            codeUrl: "css/Day9/index3.html"
          },
          {
            id: "css-d9-t5",
            taskNumber: 5,
            title: "Student Profile Card 3D Animation",
            description: "Card tilt and perspective transforms delivering subtle 3D interactive depth.",
            technologies: ["CSS3", "3D Transforms", "Perspective"],
            status: "Completed",
            demoUrl: "css/Day9/index4.html",
            codeUrl: "css/Day9/index4.html"
          }
        ]
      },
      {
        day: 10,
        title: "Master Capstone Project & Component Library",
        tasks: [
          {
            id: "css-d10-t1",
            taskNumber: 1,
            title: "ElectroHub - Modern E-Commerce Store",
            description: "Full responsive multi-section portal demonstrating CSS positioning, flexbox alignments, and modular CSS architecture.",
            technologies: ["CSS3", "Capstone Project", "E-Commerce", "Responsive"],
            status: "Completed",
            demoUrl: "css/Day10/project.html",
            codeUrl: "css/Day10/project.html"
          },
          {
            id: "css-d10-t2",
            taskNumber: 2,
            title: "Student Directory & Filter Layout",
            description: "Directory layout featuring searchable student cards, category filters, and contact actions.",
            technologies: ["CSS3", "Directory", "Filter UI"],
            status: "Completed",
            demoUrl: "css/Day10/task1.html",
            codeUrl: "css/Day10/task1.html"
          },
          {
            id: "css-d10-t3",
            taskNumber: 3,
            title: "Product Store Showcase",
            description: "Grid of featured electronics with stock status badges, reviews, and interactive action buttons.",
            technologies: ["CSS3", "Store Showcase", "Grid"],
            status: "Completed",
            demoUrl: "css/Day10/task2.html",
            codeUrl: "css/Day10/task2.html"
          },
          {
            id: "css-d10-t4",
            taskNumber: 4,
            title: "Our Team Member Cards",
            description: "Corporate executive team cards with avatars, position titles, and social profile links.",
            technologies: ["CSS3", "Team Cards", "Social Links"],
            status: "Completed",
            demoUrl: "css/Day10/task3.html",
            codeUrl: "css/Day10/task3.html"
          },
          {
            id: "css-d10-t5",
            taskNumber: 5,
            title: "Our Services Grid",
            description: "Detailed IT solutions grid with gradient headers, bullet checklists, and pricing links.",
            technologies: ["CSS3", "Services UI", "Gradients"],
            status: "Completed",
            demoUrl: "css/Day10/task4.html",
            codeUrl: "css/Day10/task4.html"
          },
          {
            id: "css-d10-t6",
            taskNumber: 6,
            title: "Creative Developer Portfolio",
            description: "Full responsive portfolio highlighting recent work, coding skills, and contact form.",
            technologies: ["CSS3", "Portfolio", "Responsive Design"],
            status: "Completed",
            demoUrl: "css/Day10/task5.html",
            codeUrl: "css/Day10/task5.html"
          }
        ]
      },
      {
        day: 11,
        title: "Special CSS Projects & Article Guides",
        tasks: [
          {
            id: "css-spec-t1",
            taskNumber: 1,
            title: "Interactive Multi-Card Component Layout",
            description: "Collection of cards exploring elevated box-shadows, badge placements, and responsive auto-wrapping.",
            technologies: ["CSS3", "Card Components", "Elevation"],
            status: "Completed",
            demoUrl: "css/cards/cards.html",
            codeUrl: "css/cards/cards.html"
          },
          {
            id: "css-spec-t2",
            taskNumber: 2,
            title: "Web Development Essentials Article Guide",
            description: "Comprehensive editorial article guide explaining web technologies with custom typography and sidebars.",
            technologies: ["CSS3", "Editorial Guide", "Typography"],
            status: "Completed",
            demoUrl: "css/webarticle/webarticle.html",
            codeUrl: "css/webarticle/webarticle.html"
          }
        ]
      }
    ]
  },

  // ============================================================================
  // 3. TAILWIND CSS CATEGORY
  // ============================================================================
  {
    id: "tailwind",
    name: "Tailwind CSS",
    badgeText: "Utility-First CSS",
    icon: "fa-solid fa-wind",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4, #0284c7)",
    description: "Utility-first workflow, rapid UI prototyping, responsive variants, dark mode, and state modifiers.",
    days: [
      {
        day: 1,
        title: "Utility-First Workflow & Core Classes",
        tasks: [
          {
            id: "tw-d1-t1",
            taskNumber: 1,
            title: "Modern Landing Page Hero",
            description: "Engineered a high-conversion hero section with gradient typography, pill badge announcements, and dual CTA buttons.",
            technologies: ["Tailwind CSS", "Flexbox", "Typography", "Gradients"],
            status: "Completed",
            demoUrl: "#",
            codeUrl: "#"
          },
          {
            id: "tw-d1-t2",
            taskNumber: 2,
            title: "Responsive Feature Grid",
            description: "Constructed a 3-column responsive feature grid utilizing grid-cols-1 md:grid-cols-2 lg:grid-cols-3 with hover scale effects.",
            technologies: ["Tailwind CSS", "Grid", "Hover Modifiers", "Icons"],
            status: "Completed",
            demoUrl: "#",
            codeUrl: "#"
          }
        ]
      },
      {
        day: 2,
        title: "E-Commerce Cards & Flexbox Alignment",
        tasks: [
          {
            id: "tw-d2-t1",
            taskNumber: 1,
            title: "Product Card with Rating & Badge",
            description: "Crafted sleek e-commerce cards featuring aspect-ratio image containers, rounded corners, stock badges, and transition states.",
            technologies: ["Tailwind CSS", "Aspect Ratio", "Badges", "Shadows"],
            status: "Completed",
            demoUrl: "#",
            codeUrl: "#"
          },
          {
            id: "tw-d2-t2",
            taskNumber: 2,
            title: "Shopping Cart Item Row",
            description: "Interactive cart item layout with quantity counter, thumbnail image, and delete action with smooth transitions.",
            technologies: ["Tailwind CSS", "Flexbox", "Buttons", "Transitions"],
            status: "Completed",
            demoUrl: "#",
            codeUrl: "#"
          }
        ]
      },
      {
        day: 3,
        title: "SaaS Pricing Table & Dark Mode",
        tasks: [
          {
            id: "tw-d3-t1",
            taskNumber: 1,
            title: "Tiered SaaS Pricing Comparison",
            description: "Three-tier pricing table featuring a highlighted 'Most Popular' plan with gradient ring border and feature checklists.",
            technologies: ["Tailwind CSS", "Ring Utilities", "Pricing Table", "Responsive"],
            status: "Completed",
            demoUrl: "#",
            codeUrl: "#"
          },
          {
            id: "tw-d3-t2",
            taskNumber: 2,
            title: "Dark Mode Theme Switcher Component",
            description: "Implemented dark mode support using Tailwind's dark: variant classes for seamless background and text color transitions.",
            technologies: ["Tailwind CSS", "Dark Mode", "Transitions", "Accessibility"],
            status: "Completed",
            demoUrl: "#",
            codeUrl: "#"
          }
        ]
      },
      {
        day: 4,
        title: "User Profile & Dashboard Analytics Cards",
        tasks: [
          {
            id: "tw-d4-t1",
            taskNumber: 1,
            title: "Developer Profile & Stats Banner",
            description: "Card layout featuring avatar with online indicator ring, bio tags, follower counters, and interactive action buttons.",
            technologies: ["Tailwind CSS", "Avatars", "Status Indicators", "Cards"],
            status: "Completed",
            demoUrl: "#",
            codeUrl: "#"
          },
          {
            id: "tw-d4-t2",
            taskNumber: 2,
            title: "KPI Analytics Summary Widgets",
            description: "Dashboard metric cards with trend indicators (percentage rise/fall), sparkline placeholders, and clean padding.",
            technologies: ["Tailwind CSS", "Dashboard", "Metrics", "Flexbox"],
            status: "Completed",
            demoUrl: "#",
            codeUrl: "#"
          }
        ]
      }
    ]
  },

  // ============================================================================
  // 4. BOOTSTRAP CATEGORY
  // ============================================================================
  {
    id: "bootstrap",
    name: "Bootstrap",
    badgeText: "Component Framework",
    icon: "fa-brands fa-bootstrap",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    description: "Responsive 12-column grid, ready-to-use UI components, modals, navbars, cards, and utility classes.",
    days: [
      {
        day: 1,
        title: "Grid System & Container Layouts",
        tasks: [
          {
            id: "bs-d1-t1",
            taskNumber: 1,
            title: "12-Column Grid Exploration",
            description: "Comprehensive testing of Bootstrap container, row, and col-* breakpoint classes (col-sm, col-md, col-lg, col-xl).",
            technologies: ["Bootstrap 5", "Grid System", "Breakpoints"],
            status: "Completed",
            demoUrl: "#",
            codeUrl: "#"
          },
          {
            id: "bs-d1-t2",
            taskNumber: 2,
            title: "Responsive Typography & Spacing Utilities",
            description: "Implemented display headings, lead paragraphs, text alignment utilities, and spacing helpers (m-*, p-*).",
            technologies: ["Bootstrap 5", "Utilities", "Typography"],
            status: "Completed",
            demoUrl: "#",
            codeUrl: "#"
          }
        ]
      },
      {
        day: 2,
        title: "Responsive Anime Portal with Bootstrap 5",
        tasks: [
          {
            id: "bs-d2-t1",
            taskNumber: 1,
            title: "Solo Leveling - Responsive Anime Portal",
            description: "Full responsive webpage built with Bootstrap 5 navbar, hero jumbotron, card deck, and interactive footer.",
            technologies: ["Bootstrap 5", "Navbar", "Card Deck", "Jumbotron"],
            status: "Completed",
            demoUrl: "bootstrap/Day2/index.html",
            codeUrl: "bootstrap/Day2/index.html"
          }
        ]
      },
      {
        day: 3,
        title: "Forms & Input Groups",
        tasks: [
          {
            id: "bs-d3-t1",
            taskNumber: 1,
            title: "Floating Labels & Form Controls",
            description: "Engineered user registration page with Bootstrap floating labels, input groups with icon add-ons, and form checks.",
            technologies: ["Bootstrap 5", "Forms", "Floating Labels", "Validation"],
            status: "Completed",
            demoUrl: "#",
            codeUrl: "#"
          },
          {
            id: "bs-d3-t2",
            taskNumber: 2,
            title: "Client-Side Form Validation UI",
            description: "Interactive form providing immediate visual validation states using was-validated and is-valid/is-invalid classes.",
            technologies: ["Bootstrap 5", "Validation", "Feedback States"],
            status: "Completed",
            demoUrl: "#",
            codeUrl: "#"
          }
        ]
      },
      {
        day: 4,
        title: "Interactive Components & Modals",
        tasks: [
          {
            id: "bs-d4-t1",
            taskNumber: 1,
            title: "Interactive Modal Dialogs & Alerts",
            description: "Configured dismissible alerts, confirmation modals, and slide-in offcanvas navigation sidebars.",
            technologies: ["Bootstrap 5", "Modals", "Alerts", "Offcanvas"],
            status: "Completed",
            demoUrl: "#",
            codeUrl: "#"
          },
          {
            id: "bs-d4-t2",
            taskNumber: 2,
            title: "Image Carousel & Accordion FAQ",
            description: "Built a touch-swipe image carousel with indicators and a clean collapsible accordion FAQ section.",
            technologies: ["Bootstrap 5", "Carousel", "Accordion", "JS Components"],
            status: "Completed",
            demoUrl: "#",
            codeUrl: "#"
          }
        ]
      }
    ]
  },

  // ============================================================================
  // 5. JAVASCRIPT CATEGORY
  // ============================================================================
  {
    id: "js",
    name: "JavaScript",
    badgeText: "Logic & Interactivity",
    icon: "fa-brands fa-js",
    color: "#eab308",
    gradient: "linear-gradient(135deg, #eab308, #ca8a04)",
    description: "Variables, operators, control flow, functions, DOM manipulation, events, arrays, ES6+ features, and state.",
    days: [
      {
        day: 2,
        title: "DOM Introduction & Class Tasks",
        tasks: [
          {
            id: "js-d2-t1",
            taskNumber: 1,
            title: "DOM Manipulation & Class Exercises",
            description: "Explored getElementById, querySelector, and click event listeners to modify DOM text and styling dynamically.",
            technologies: ["JavaScript", "DOM Manipulation", "Event Listeners"],
            status: "Completed",
            demoUrl: "js/Day2/classtask.html",
            codeUrl: "js/Day2/classtask.html"
          },
          {
            id: "js-d2-t2",
            taskNumber: 2,
            title: "Data Types & Console API Lab",
            description: "Practical exercises logging primitive data types (string, number, boolean, null, undefined) and typeof operator.",
            technologies: ["JavaScript", "Data Types", "Console API"],
            status: "Completed",
            demoUrl: "js/Day2/index.html",
            codeUrl: "js/Day2/index.html"
          }
        ]
      },
      {
        day: 3,
        title: "Operators & Math Calculations",
        tasks: [
          {
            id: "js-d3-t1",
            taskNumber: 1,
            title: "Basic Arithmetic Calculator",
            description: "Interactive web calculator performing addition, subtraction, multiplication, division, and modulus operations.",
            technologies: ["JavaScript", "Arithmetic", "Functions", "UI"],
            status: "Completed",
            demoUrl: "js/Day3/basiccalculation.html",
            codeUrl: "js/Day3/basiccalculation.html"
          },
          {
            id: "js-d3-t2",
            taskNumber: 2,
            title: "Assignment Operators Playground",
            description: "Comprehensive evaluation of +=, -=, *=, /=, and %= assignment operators with interactive visual feedback.",
            technologies: ["JavaScript", "Assignment Operators", "Logic"],
            status: "Completed",
            demoUrl: "js/Day3/assignmentoperator.html",
            codeUrl: "js/Day3/assignmentoperator.html"
          },
          {
            id: "js-d3-t3",
            taskNumber: 3,
            title: "Strict & Loose Comparison Operators",
            description: "Hands-on comparison testing equality (== vs ===), inequality (!= vs !==), and relational (<, >, <=, >=) operators.",
            technologies: ["JavaScript", "Strict Equality", "Comparison"],
            status: "Completed",
            demoUrl: "js/Day3/comparison.html",
            codeUrl: "js/Day3/comparison.html"
          },
          {
            id: "js-d3-t4",
            taskNumber: 4,
            title: "Increment & Decrement Counter Operations",
            description: "Demonstrating pre-increment (++x) versus post-increment (x++) with dynamic live counters.",
            technologies: ["JavaScript", "Increment/Decrement", "Variables"],
            status: "Completed",
            demoUrl: "js/Day3/incrementdecrement.html",
            codeUrl: "js/Day3/incrementdecrement.html"
          },
          {
            id: "js-d3-t5",
            taskNumber: 5,
            title: "Logical Operators & Truth Table Evaluator",
            description: "Interactive truth table evaluating AND (&&), OR (||), and NOT (!) expressions with live input values.",
            technologies: ["JavaScript", "Logical Operators", "Boolean Logic"],
            status: "Completed",
            demoUrl: "js/Day3/logicaloperator.html",
            codeUrl: "js/Day3/logicaloperator.html"
          }
        ]
      },
      {
        day: 4,
        title: "Conditional Statements & Form Logic",
        tasks: [
          {
            id: "js-d4-t1",
            taskNumber: 1,
            title: "Age Verification & Eligibility Checker",
            description: "Evaluates user age to determine voting eligibility, driving licensing, and adult status using conditional logic.",
            technologies: ["JavaScript", "Conditional Logic", "If-Else"],
            status: "Completed",
            demoUrl: "js/Day4/index.html",
            codeUrl: "js/Day4/index.html"
          },
          {
            id: "js-d4-t2",
            taskNumber: 2,
            title: "Odd or Even Number Analyzer",
            description: "User input number analyzer determining if a value is odd or even using modulus arithmetic with instant validation.",
            technologies: ["JavaScript", "Modulus", "Odd/Even"],
            status: "Completed",
            demoUrl: "js/Day4/oddeven.html",
            codeUrl: "js/Day4/oddeven.html"
          },
          {
            id: "js-d4-t3",
            taskNumber: 3,
            title: "Student Marks & Grade Evaluator",
            description: "Calculate total marks, percentage, and assigned letter grades (A+, A, B, C, Fail) using nested if-else ladders.",
            technologies: ["JavaScript", "Grade Calculator", "Nested Conditions"],
            status: "Completed",
            demoUrl: "js/Day4/mark.html",
            codeUrl: "js/Day4/mark.html"
          },
          {
            id: "js-d4-t4",
            taskNumber: 4,
            title: "Switch-Case Day & Month Controller",
            description: "Clean demonstration of switch-case syntax with break and default statements handling user choices.",
            technologies: ["JavaScript", "Switch Case", "Control Flow"],
            status: "Completed",
            demoUrl: "js/Day4/switch.html",
            codeUrl: "js/Day4/switch.html"
          },
          {
            id: "js-d4-t5",
            taskNumber: 5,
            title: "Interactive Login Form with Validation",
            description: "Client-side authentication logic checking credential formatting, password length, and rendering error messages.",
            technologies: ["JavaScript", "Form Validation", "Event Handling"],
            status: "Completed",
            demoUrl: "js/Day4/login.html",
            codeUrl: "js/Day4/login.html"
          }
        ]
      },
      {
        day: 5,
        title: "Loops & Iteration Patterns",
        tasks: [
          {
            id: "js-d5-t1",
            taskNumber: 1,
            title: "Loops & Iteration Laboratory",
            description: "Hands-on loops lab executing for, while, and do-while loops, number iteration, and break/continue statements.",
            technologies: ["JavaScript", "For Loop", "While Loop", "Iteration"],
            status: "Completed",
            demoUrl: "js/Day5/index.html",
            codeUrl: "js/Day5/index.html"
          }
        ]
      },
      {
        day: 6,
        title: "Functions, Parameters & Scope",
        tasks: [
          {
            id: "js-d6-t1",
            taskNumber: 1,
            title: "Functions, Declarations & Arrow Syntax",
            description: "Comprehensive comparison of standard function declarations, expressions, ES6 arrow functions, and scope.",
            technologies: ["JavaScript", "Functions", "Arrow Functions", "Scope"],
            status: "Completed",
            demoUrl: "js/Day6/index.html",
            codeUrl: "js/Day6/index.html"
          }
        ]
      },
      {
        day: 7,
        title: "Arrays & Array Methods",
        tasks: [
          {
            id: "js-d7-t1",
            taskNumber: 1,
            title: "Fruit Inventory - Arrays & Methods Lab",
            description: "Working with push, pop, shift, unshift, splice, slice, and higher-order methods: map, filter, reduce, forEach.",
            technologies: ["JavaScript", "Arrays", "Array Methods", "Higher-Order"],
            status: "Completed",
            demoUrl: "js/Day7/index.html",
            codeUrl: "js/Day7/index.html"
          }
        ]
      },
      {
        day: 8,
        title: "Functions, Arguments & Parameters Deep Dive",
        tasks: [
          {
            id: "js-d8-t1",
            taskNumber: 1,
            title: "Functions, Parameters, Arguments & Objects",
            description: "Detailed investigation of function arguments object, parameter passing, return statements, and object properties.",
            technologies: ["JavaScript", "Arguments", "Parameters", "Objects"],
            status: "Completed",
            demoUrl: "js/Day8/index.html",
            codeUrl: "js/Day8/index.html"
          }
        ]
      },
      {
        day: 9,
        title: "Execution Context, Scopes & Hoisting",
        tasks: [
          {
            id: "js-d9-t1",
            taskNumber: 1,
            title: "Execution Context, Scopes & Hoisting Lab",
            description: "Understanding global scope, function scope, block scope (let/const), lexical environment, and hoisting rules.",
            technologies: ["JavaScript", "Hoisting", "Scope Chain", "Closures"],
            status: "Completed",
            demoUrl: "js/Day9/index.html",
            codeUrl: "js/Day9/index.html"
          }
        ]
      },
      {
        day: 10,
        title: "JS Hub Master & Modern ES6+ Laboratory",
        tasks: [
          {
            id: "js-d10-t1",
            taskNumber: 1,
            title: "JS Hub - Master Interactive Web Application",
            description: "Comprehensive JavaScript project assembling form inputs, event handling, state management, and real-time updates.",
            technologies: ["JavaScript", "State Management", "DOM Projects", "ES6"],
            status: "Completed",
            demoUrl: "js/Day10/index.html",
            codeUrl: "js/Day10/index.html"
          },
          {
            id: "js-d10-t2",
            taskNumber: 2,
            title: "JS Hub - 10 Core Topics Explorer",
            description: "Detailed topic viewer covering fundamental to advanced JavaScript concepts with live code examples.",
            technologies: ["JavaScript", "Topics Guide", "Architecture"],
            status: "Completed",
            demoUrl: "js/Day10/topics.html",
            codeUrl: "js/Day10/topics.html"
          },
          {
            id: "js-d10-t3",
            taskNumber: 3,
            title: "JS Hub - 10 Lab Tasks Explorer",
            description: "Interactive task viewer organizing daily programming exercises with instant status toggles.",
            technologies: ["JavaScript", "Task Tracker", "Interactive UI"],
            status: "Completed",
            demoUrl: "js/Day10/tasks.html",
            codeUrl: "js/Day10/tasks.html"
          },
          {
            id: "js-d10-t4",
            taskNumber: 4,
            title: "Deep Dive into JavaScript Functions (index1)",
            description: "In-depth testing of callback functions, anonymous functions, and higher-order function utilities.",
            technologies: ["JavaScript", "Functions", "Callbacks"],
            status: "Completed",
            demoUrl: "js/Day10/index1.html",
            codeUrl: "js/Day10/index1.html"
          },
          {
            id: "js-d10-t5",
            taskNumber: 5,
            title: "Array & Object Destructuring Syntax (index2)",
            description: "Extracting variables cleanly from nested objects and arrays using ES6 destructuring syntax.",
            technologies: ["JavaScript", "Destructuring", "ES6+"],
            status: "Completed",
            demoUrl: "js/Day10/index2.html",
            codeUrl: "js/Day10/index2.html"
          },
          {
            id: "js-d10-t6",
            taskNumber: 6,
            title: "Rest Parameter & Spread Syntax (...) Playground (index3)",
            description: "Exploring rest parameters in function definitions and spread operators for shallow copying and merging.",
            technologies: ["JavaScript", "Spread Operator", "Rest Parameters"],
            status: "Completed",
            demoUrl: "js/Day10/index3.html",
            codeUrl: "js/Day10/index3.html"
          },
          {
            id: "js-d10-t7",
            taskNumber: 7,
            title: "Default Parameters in ES6 Functions (index4)",
            description: "Handling missing arguments gracefully using standard ES6 default parameter initializers.",
            technologies: ["JavaScript", "Default Parameters", "Functions"],
            status: "Completed",
            demoUrl: "js/Day10/index4.html",
            codeUrl: "js/Day10/index4.html"
          },
          {
            id: "js-d10-t8",
            taskNumber: 8,
            title: "Object Oriented JavaScript - Student Objects Lab (index5)",
            description: "Creating custom student objects, method assignments, constructor patterns, and formatted output.",
            technologies: ["JavaScript", "Object Oriented", "Properties & Methods"],
            status: "Completed",
            demoUrl: "js/Day10/index5.html",
            codeUrl: "js/Day10/index5.html"
          },
          {
            id: "js-d10-t9",
            taskNumber: 9,
            title: "Asynchronous Data Fetching & Promises (index6)",
            description: "Simulating asynchronous data fetching, promise resolution, and DOM content injection.",
            technologies: ["JavaScript", "Promises", "Async", "Data Loaded"],
            status: "Completed",
            demoUrl: "js/Day10/index6.html",
            codeUrl: "js/Day10/index6.html"
          },
          {
            id: "js-d10-t10",
            taskNumber: 10,
            title: "Optional Chaining (?.) Operator Demonstration (index7)",
            description: "Preventing TypeError exceptions when accessing deeply nested properties using optional chaining (?.) and nullish coalescing (??).",
            technologies: ["JavaScript", "Optional Chaining", "ES2020"],
            status: "Completed",
            demoUrl: "js/Day10/index7.html",
            codeUrl: "js/Day10/index7.html"
          },
          {
            id: "js-d10-t10b",
            taskNumber: 11,
            title: "Modern ES6+ Array Methods (index8)",
            description: "Practical implementations of find, findIndex, some, every, includes, and flat on complex data collections.",
            technologies: ["JavaScript", "Array Methods", "ES6+"],
            status: "Completed",
            demoUrl: "js/Day10/index8.html",
            codeUrl: "js/Day10/index8.html"
          },
          {
            id: "js-d10-t11",
            taskNumber: 12,
            title: "Template Literals, Object Shorthand & Arrow Functions (index9)",
            description: "Combining multi-line template literals with expression interpolation, concise object properties, and arrows.",
            technologies: ["JavaScript", "Template Literals", "Arrow Functions"],
            status: "Completed",
            demoUrl: "js/Day10/index9.html",
            codeUrl: "js/Day10/index9.html"
          },
          {
            id: "js-d10-t12",
            taskNumber: 13,
            title: "Deep Dive: Differences Between var, let, and const (index10)",
            description: "Critical comparison analyzing re-declaration, temporal dead zone (TDZ), block vs function scoping, and mutability.",
            technologies: ["JavaScript", "var vs let vs const", "Scope Rules"],
            status: "Completed",
            demoUrl: "js/Day10/index10.html",
            codeUrl: "js/Day10/index10.html"
          }
        ]
      }
    ]
  },

  // ============================================================================
  // 6. REACT CATEGORY (BONUS / ADVANCE WORKSPACE TASKS)
  // ============================================================================
  {
    id: "react",
    name: "React",
    badgeText: "Component Architecture",
    icon: "fa-brands fa-react",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
    description: "Component architecture, React Router multi-page navigation, hooks, and dynamic list rendering.",
    days: [
      {
        day: 4,
        title: "React Router & Multi-Page Navigation",
        tasks: [
          {
            id: "react-d4-t1",
            taskNumber: 1,
            title: "React Router Navigation Application",
            description: "Full Single Page Application (SPA) built with React Router featuring connected routes: Home, About, Contact, Help, and Navbar.",
            technologies: ["React", "React Router", "Vite", "SPA"],
            status: "Completed",
            demoUrl: "react/Day4/routernav/index.html",
            codeUrl: "react/Day4/routernav/index.html"
          }
        ]
      },
      {
        day: 5,
        title: "Conditional & Dynamic List Rendering",
        tasks: [
          {
            id: "react-d5-t1",
            taskNumber: 1,
            title: "Dynamic Rendering & State Dashboard",
            description: "Component rendering conditional UI views, data-driven lists with unique keys, and state-driven DOM updates.",
            technologies: ["React", "Conditional Rendering", "Props & State"],
            status: "Completed",
            demoUrl: "react/Day5/rendering/index.html",
            codeUrl: "react/Day5/rendering/index.html"
          }
        ]
      }
    ]
  }
];

// Provide data access helper for browser and node
if (typeof window !== "undefined") {
  window.TASKS_DATA = TASKS_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { TASKS_DATA };
}
