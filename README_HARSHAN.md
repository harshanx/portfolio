# Harshan Portfolio

A stunning 3D interactive portfolio showcasing my projects, skills, and professional journey as a BTech CSE student and Flutter Developer.

## Live Demo

**[https://harshanx.github.io/portfolio](https://harshanx.github.io/portfolio)**

---

## About Me

Hi! I'm **Harshan**, a BTech Computer Science Engineering student passionate about Flutter development and exploring cybersecurity. Currently learning Machine Learning with focus on Natural Language Processing (NLP). I love building innovative solutions and collaborating on projects that solve real-world problems.

---

## Features

### Visual Design
- **3D Interactive Elements** - Powered by Three.js and React Three Fiber
- **Smooth Animations** - Framer Motion for fluid transitions
- **Modern UI** - Tailwind CSS with gradient effects
- **Responsive Design** - Works perfectly on all devices

### Content Sections
- **Hero Section** - Eye-catching introduction with 3D computer model
- **About** - Detailed background and skills overview
- **Experience** - Professional journey and education
- **Tech Stack** - Technologies and tools I work with
- **Projects** - Showcase of my work including:
  - **Featured Project**: AutoPilot AI - Flutter app with automated messaging
  - **CollBus** - College bus tracking system
  - **FoodHub** - Food delivery platform
- **Contact** - Direct links to my professional profiles

### Contact Integration
- **Direct Email** - Opens mail client with pre-filled message
- **GitHub Profile** - Link to my repositories
- **LinkedIn** - Professional networking connection

---

## Tech Stack

### Frontend Framework
- **React.js** - Component-based UI development
- **Vite** - Fast build tool and development server

### 3D & Animation
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Helper components for R3F
- **Framer Motion** - Animation library

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Gradients** - Modern color schemes

### Development Tools
- **JavaScript** - Core programming language
- **Git** - Version control
- **GitHub Pages** - Free hosting

---

## Project Structure

```
project_3D_developer_portfolio/
src/
  assets/          # Images, icons, and assets
  components/       # React components
    canvas/         # 3D components (Earth, Computer, etc.)
  constants/        # Project data and configurations
  hoc/             # Higher-order components
  styles/          # Global styles and configurations
  utils/           # Utility functions
```

---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/harshanx/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5174`

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
# Install gh-pages (if not already installed)
npm install gh-pages --save-dev

# Deploy to GitHub Pages
npm run deploy
```

---

## Customization

### Updating Personal Information

1. **Name & Title**: Edit `src/components/Hero.jsx` and `src/components/Navbar.jsx`
2. **About Section**: Modify `src/components/About.jsx`
3. **Contact Info**: Update `src/components/Contact.jsx`

### Adding Projects

1. **Add project images** to `src/assets/`
2. **Update project data** in `src/constants/index.js`
3. **Adjust project cards** in `src/components/Works.jsx`

### Styling Changes

- **Colors**: Modify Tailwind config in `tailwind.config.cjs`
- **Fonts**: Update global styles in `src/index.css`
- **Layout**: Adjust component styles in respective files

---

## Performance

- **Optimized Build** - Code splitting and lazy loading
- **Image Optimization** - Compressed assets
- **3D Performance** - Efficient Three.js implementation
- **Fast Loading** - Minimal dependencies

---

## Browser Support

- Chrome (Recommended)
- Firefox
- Safari
- Edge
- Mobile Browsers

---

## Contributing

Feel free to fork this project and create your own portfolio! If you have suggestions or improvements, please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Connect With Me

- **Portfolio**: [https://harshanx.github.io/portfolio](https://harshanx.github.io/portfolio)
- **GitHub**: [https://github.com/harshanx](https://github.com/harshanx)
- **Email**: harshanpv3@gmail.com
- **LinkedIn**: [https://www.linkedin.com/in/harshan-p-v-520940297](https://www.linkedin.com/in/harshan-p-v-520940297)

---

## Acknowledgments

- Built with inspiration from modern web design trends
- 3D models and animations powered by Three.js
- Icons and assets from various open-source libraries

---

**© 2024 Harshan PV. All rights reserved.**
