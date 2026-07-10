# Metz Chicken Butchery - Online Ordering System

A modern, full-featured online ordering system for Metz Chicken Butchery, built with Nuxt.js, Supabase, and Stripe.

## Features

- 🛍️ Online ordering system
- 🔐 User authentication and authorization
- 💳 Secure payment processing with Stripe
- 📦 Order tracking and management
- 📧 Email notifications
- 📊 Admin dashboard
- 📱 Responsive design
- 🌐 Multi-language support
- 🔍 Product search and filtering
- 📅 Delivery time slot management
- 📈 Order analytics
- 🔒 Security features (CSRF protection, rate limiting, etc.)

## Tech Stack

- **Frontend**: Nuxt.js 3, Vue 3, TailwindCSS
- **Backend**: Nuxt.js Server Routes, Supabase
- **Database**: PostgreSQL (via Supabase)
- **Authentication**: Supabase Auth
- **Payment Processing**: Stripe
- **Email**: Resend
- **Caching**: Redis
- **Image Optimization**: Sharp
- **Deployment**: Vercel/Netlify (recommended)

## Prerequisites

- Node.js 16.x or later
- npm or yarn
- Supabase account
- Stripe account
- Redis server
- Resend account

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Supabase Configuration
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_KEY=your_supabase_service_key
SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe Configuration
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Redis Configuration
REDIS_URL=redis://localhost:6379

# Email Configuration (Resend)
RESEND_API_KEY=your_resend_api_key

# Application Configuration
BASE_URL=http://localhost:3000
NODE_ENV=development

# Security
JWT_SECRET=your_jwt_secret
COOKIE_SECRET=your_cookie_secret

# Rate Limiting
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_REQUESTS=60

# Image Optimization
IMAGE_OPTIMIZATION_QUALITY=80
IMAGE_OPTIMIZATION_WIDTH=1200
IMAGE_OPTIMIZATION_HEIGHT=1200

# Cache Configuration
CACHE_TTL=3600
CACHE_PREFIX=metz_chicken_

# Logging
LOG_LEVEL=info
LOG_FORMAT=json
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/metz-chicken-butchery.git
   cd metz-chicken-butchery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Supabase:
   - Create a new Supabase project
   - Run the SQL migrations in `server/api/schema.sql`
   - Enable authentication and set up email templates
   - Configure storage for product images

4. Set up Stripe:
   - Create a Stripe account
   - Get your API keys
   - Set up webhook endpoints
   - Configure payment methods

5. Set up Redis:
   - Install Redis server
   - Configure Redis URL in environment variables

6. Set up Resend:
   - Create a Resend account
   - Get your API key
   - Configure email templates

7. Start the development server:
   ```bash
   npm run dev
   ```

## Database Schema

The application uses the following main tables:

- `users`: User accounts and profiles
- `products`: Product catalog
- `categories`: Product categories
- `orders`: Customer orders
- `order_items`: Order line items
- `delivery_slots`: Available delivery time slots
- `order_tracking`: Order status tracking

## API Endpoints

### Public Endpoints
- `GET /api/products`: List products with filtering
- `GET /api/categories`: List product categories
- `POST /api/auth/register`: User registration
- `POST /api/auth/login`: User login

### Protected Endpoints
- `GET /api/orders`: List user's orders
- `POST /api/orders`: Create new order
- `GET /api/orders/:id`: Get order details
- `GET /api/orders/:id/tracking`: Get order tracking

### Admin Endpoints
- `GET /api/admin/orders`: List all orders
- `PATCH /api/admin/orders/:id/status`: Update order status
- `GET /api/admin/statistics`: Get order statistics
- `POST /api/admin/products`: Create/update products
- `POST /api/admin/delivery-slots`: Manage delivery slots

## Security Features

- CSRF protection
- Rate limiting
- Input sanitization
- SQL injection prevention
- XSS protection
- Secure password hashing
- JWT authentication
- Role-based access control
- Secure cookie handling
- SSL/TLS encryption

## Performance Optimizations

- Image optimization
- Lazy loading
- Redis caching
- Database indexing
- API response compression
- Static asset caching
- Code splitting
- Tree shaking

## Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy to your preferred hosting platform (Vercel/Netlify recommended)

3. Set up environment variables in your hosting platform

4. Configure custom domain and SSL

5. Set up monitoring and logging

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@metzchicken.com or create an issue in the repository.
