# Fueler.daily

## Inspiration

Fueler.daily was inspired by the need for a revolutionary way to present one's work and growth. Traditional resumes often fail to capture an individual's true potential and dynamic progress. We aimed to create an extension that empowers users to publish their projects, achievements, and blog content, transforming their resumes into living, evolving representations of their skills and accomplishments.

## What it does

Fueler.daily is a browser extension that allows users to build dynamic, living resumes. By installing fueler.daily, the new tab becomes a hub of inspiration, featuring the latest blog content and discoveries from the Fueler community. Users can publish their projects and achievements with ease, showcasing their continuous growth and accomplishments.

## How we built it

We built fueler.daily using the following tech stack:

- Frontend: Next.js 13 with Page Router
- Backend: Node.js, Express.js, Cheerio

The extension utilizes web scraping to fetch data from the fueler.io website for the `/api/content/blog` and `/api/content/discover` endpoints. The frontend and backend components work together seamlessly to deliver a user-friendly experience.

### Application Quick-Start

- Server: `pnpm i` -> `pnpm run start:server`
- Client: `cd client` -> `pnpm i` -> `pnpm run dev`

## Challenges we ran into

During the development of fueler.daily, we encountered several challenges. The lack of a public API from fueler.io required us to use web scraping techniques, which presented its own set of complexities. Additionally, synchronizing the frontend and backend components to ensure smooth data presentation required careful coordination.

## Accomplishments that we're proud of

Despite the challenges, we are proud to have created fueler.daily - a game-changing extension that redefines the traditional resume. Our team successfully designed an intuitive and aesthetically pleasing interface that delivers dynamic content to users. The ability to present real-time blog updates and project discoveries was a major achievement.

## What we learned

Developing fueler.daily taught us valuable lessons in web scraping, frontend-backend integration, and creating browser extensions. We honed our skills in Next.js, Node.js, Express, and Cheerio. Moreover, the project highlighted the importance of persistence and creativity when overcoming obstacles.

## What's next for Fueler.daily

As we look to the future, our primary goal is to collaborate with the fueler.io platform. With the availability of an official public API, we plan to enhance fueler.daily's functionality and user experience. We envision seamless integration that will further empower users to showcase their talents and accomplishments dynamically.

## Join the Movement

Join us on this game-changing mission! Fueler.daily empowers individuals to take control of their narratives and present their work in a way that truly reflects their potential. Don't settle for a static resume - fuel your journey to success with fueler.daily.