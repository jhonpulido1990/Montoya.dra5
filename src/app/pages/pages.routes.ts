import { Routes } from '@angular/router';
import { HomeLayout } from './layouts/home-layout/home-layout';
import { LoginLayout } from './layouts/login-layout/login-layout';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Blog } from './blog/blog';
import { Service } from './service/service';
import { Login } from './login/login';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: HomeLayout,
    children: [
      {
        path: '',
        component: Home,
        // seo metadata for the home page
        data: {
          title: 'Home',
          description: 'Welcome to the home page',
          keywords: 'home, welcome, main page',
          image: 'assets/images/home-banner.jpg',
        }
      },
      {
        path: 'about',
        component: About,
        // seo metadata for the about page
        data: {
          title: 'About Us',
          description: 'Learn more about our company',
          keywords: 'about, company, information',
          image: 'assets/images/about-banner.jpg',
        }
      },
      {
        path: 'contact',
        component: Contact,
        // seo metadata for the contact page
        data: {
          title: 'Contact Us',
          description: 'Get in touch with our team',
          keywords: 'contact, support, help',
          image: 'assets/images/contact-banner.jpg',
        }
      },
      {
        path: 'blog',
        component: Blog,
        // seo metadata for the blog page
        data: {
          title: 'Blog',
          description: 'Read our latest blog posts',
          keywords: 'blog, articles, news',
          image: 'assets/images/blog-banner.jpg',
        }
      },
      {
        path: 'services',
        component: Service,
        // seo metadata for the services page
        data: {
          title: 'Our Services',
          description: 'Discover the services we offer',
          keywords: 'services, offerings, solutions',
          image: 'assets/images/services-banner.jpg',
        }
      }
    ]
  },
  {
    path: 'account',
    component: LoginLayout,
    children: [
      {
        path: 'login',
        component: Login,
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardLayout,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'  // Redirect any unknown paths to the home page
  }
];

export default PagesRoutes;
