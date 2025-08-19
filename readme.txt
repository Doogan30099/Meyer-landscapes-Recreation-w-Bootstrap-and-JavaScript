# Meyer Landscapes Website

This is the source code for the Meyer Landscapes business website. It is a multi-page, responsive site built with HTML, CSS (Bootstrap + custom styles), and JavaScript. The site provides information about services, pricing, career opportunities, a gallery, and a contact form with email integration.

---

## 📁 Project Structure

```
Meyer-Landscapes/
│
├── CSS/
│   └── Meyer-Landscapes-styles.css
│
├── HTML/
│   ├── Meyer-Landscapes-Homepage.html
│   ├── Meyer-Landscapes-About.html
│   ├── Meyer-Landscapes-Gallery.html
│   ├── Meyer-Landscapes-Services.html
│   ├── Meyer-Landscapes-Opportunities.html
│   ├── Meyer-Landscapes-Contact.html
│   └── Materials-pricing.html
│
├── JavaScript/
│   ├── click-events.js
│   ├── email.js
│   └── pricing-calculator-script.js
│
└── images/
    └── ... (site images and gallery)
```

---

## 🚀 Features

- **Responsive Navigation:** Fixed-top Bootstrap navbar for easy navigation.
- **Homepage:** Welcome message, highlights, and quick links to services.
- **About Page:** Meet the team and learn about the company.
- **Gallery:** Showcase of landscaping projects.
- **Services Page:** Details on lawn care, maintenance, hardscaping, and more.
- **Materials Pricing:** Table of materials and a price calculator for estimates.
- **Career Opportunities:** Job listings and company culture.
- **Contact Page:** EmailJS-powered contact form for estimate requests.
- **Footer:** Social media links and contact info.

---

## 🛠️ Setup & Usage

1. **Clone or Download the Repository**
   ```
   git clone [https://github.com/Doogan30099/Meyer-landscapes-Recreation-w-Bootstrap-and-JavaScript.git]
   ```

2. **Open in VS Code or your preferred IDE**

3. **Serve the site**
   - You can use the Live Server extension in VS Code or open the HTML files directly in your browser.

4. **EmailJS Integration**
   - The contact form uses [EmailJS](https://www.emailjs.com/) for sending emails.
   - Make sure to configure your EmailJS service, template, and public key in `email.js`.

5. **Material Price Calculator**
   - On `Materials-pricing.html`, select materials and click "Add" to see the running total and selected items.

---

## 📝 Customization

- **Images:** Replace images in the `/images/` folder with your own.
- **Pricing:** Update material prices in the `<select>` dropdown or `pricing-calculator-script.js`.
- **Contact Form:** Adjust fields or EmailJS settings in `email.js`.

---

## 📚 File Overview

- **HTML/**: All main pages of the site.
- **CSS/**: Custom styles for branding and layout.
- **JavaScript/**:
  - `click-events.js`: Handles button navigation and UI events.
  - `email.js`: Handles contact form submission via EmailJS.
  - `pricing-calculator-script.js`: Handles the materials price calculator logic.

---

## 💡 Notes

- All navigation and button events are handled via separate JS files for maintainability.
- Bootstrap is used for layout and components; custom styles are in `Meyer-Landscapes-styles.css`.
- For production, host the site on a web server and ensure all paths are correct.

---

## 📞 Contact

For questions or support, contact [Meyer Landscapes](mailto:pj.nunes.dy@gmail.com) or use the contact form on the website.

---

&copy; 2025 Meyer Landscapes.