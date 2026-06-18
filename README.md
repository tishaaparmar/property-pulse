# 🏠 PropertyPulse

PropertyPulse is a modern full-stack property rental platform built with **Next.js**. The application allows users to discover rental properties, search by location and property type, list their own properties, bookmark favorites, communicate with property owners, and manage listings through a personalized dashboard.

The project follows a production-style architecture using the **Next.js App Router**, **MongoDB**, **NextAuth**, **Cloudinary**, **OpenStreetMap**, and **Leaflet** while emphasizing responsive UI, server actions, and modern web development practices.

---

# ✨ Features

## 🔐 Authentication

- Google Authentication using NextAuth
- Secure login and logout
- Protected routes
- Session management
- User-specific dashboard

---

## 🏡 Property Listings

- Browse all available properties
- View detailed property pages
- Featured property listings
- Responsive property cards
- Multiple property categories
- Property amenities
- Seller information

---

## ➕ Property Management

Authenticated users can:

- Add new properties
- Edit existing properties
- Delete properties
- Upload multiple images
- Manage listings from their profile

---

## ☁️ Image Uploads

- Cloudinary image storage
- Multiple image uploads
- Optimized image delivery
- Responsive images with Next.js Image
- Full-screen image gallery

---

## 🔍 Property Search

Search properties using:

- Property name
- Description
- City
- State
- Zipcode
- Street
- Property type

---

## ❤️ Saved Properties

- Bookmark favorite properties
- Remove saved properties
- Dedicated Saved Properties page
- Personalized user bookmarks

---

## 💬 Messaging System

- Contact property owners
- Receive messages
- Reply to messages
- Delete messages
- Read/unread status
- Live unread message count in navbar

---

## 👤 User Dashboard

- View personal profile
- Manage property listings
- Access saved properties
- Manage received messages

---

## 📄 Pagination

- Dynamic pagination
- Previous & Next navigation
- Optimized property loading

---

## 🗺 Interactive Maps

Every property includes an interactive map showing its location using:

- **Leaflet.js**
- **React Leaflet**
- **OpenStreetMap**

Features include:

- Interactive property location
- Zoom controls
- Marker placement
- Popup displaying property address
- Open-source map tiles from OpenStreetMap

---

## 📱 Responsive Design

- Mobile-friendly interface
- Tablet optimized
- Desktop responsive
- Modern UI using Tailwind CSS

---

# 🛠 Tech Stack

### Frontend

- Next.js (App Router)
- React
- Tailwind CSS
- React Icons
- React Toastify

### Backend

- Next.js Server Actions
- MongoDB
- Mongoose

### Authentication

- NextAuth
- Google OAuth

### Cloud Storage

- Cloudinary

### Maps

- Leaflet
- React Leaflet
- OpenStreetMap

### Image Gallery

- PhotoSwipe

---

# 📂 Project Structure

```
app/
│
├── actions/
├── api/
├── messages/
├── profile/
├── properties/
│   ├── add/
│   ├── edit/
│   ├── saved/
│   ├── search-results/
│   └── [id]/
│
components/
config/
context/
models/
public/
utils/
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/<your-username>/property-pulse.git
```

```bash
cd property-pulse
```

---

## Install Dependencies

```bash
npm install
```

---

## Create Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
# MongoDB
MONGODB_URI=

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=

# Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# OpenStreetMap / Geocoding
NEXT_PUBLIC_GEOCODE_API=https://nominatim.openstreetmap.org

# Optional
NODE_ENV=development
```

---

## Run the Development Server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

---

# 📦 Main Dependencies

```text
next
react
react-dom
tailwindcss
mongoose
next-auth
cloudinary
react-icons
react-toastify
leaflet
react-leaflet
photoswipe
react-photoswipe-gallery
```

---

# 📚 Key Concepts Practiced

- Next.js App Router
- Server Components
- Client Components
- Dynamic Routing
- Server Actions
- Authentication
- Authorization
- CRUD Operations
- MongoDB & Mongoose
- Cloudinary Image Uploads
- Interactive Maps
- Property Search
- Pagination
- Bookmark System
- Messaging System
- Reply Functionality
- Responsive UI Design
- Error Handling
- Loading States
- Image Optimization

---

# 🌟 Highlights

- Google authentication with protected routes
- Cloudinary image uploads
- Responsive property listings
- Advanced property search
- Bookmark favorite properties
- Internal messaging system with replies
- Unread message notifications
- Interactive maps using Leaflet & OpenStreetMap
- Image gallery with full-screen viewing
- Mobile-first responsive design

---

# 🔮 Future Improvements

- Advanced filters (price, bedrooms, amenities)
- Property reviews and ratings
- Recently viewed properties
- Email notifications
- Real-time messaging
- Admin dashboard
- Property recommendations
- Payment integration
- Wishlist sharing
- Dark mode

---

# 📄 License

This project is intended for educational and portfolio purposes.

---

# 👩‍💻 Author

**Tisha Parmar**

GitHub: https://github.com/your-github-username

LinkedIn: https://linkedin.com/in/your-linkedin-profile